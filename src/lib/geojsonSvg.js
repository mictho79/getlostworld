export function geojsonToSvgPath(feature) {
  try {
    if (!feature?.geometry) return null;
    const { type, coordinates } = feature.geometry;
    let polys = type === 'MultiPolygon' ? coordinates : [coordinates];

    if (polys.length > 1) {
      const bbox = poly => {
        let x0=Infinity,x1=-Infinity,y0=Infinity,y1=-Infinity;
        for (const ring of poly) for (const [lng,lat] of ring) {
          if (lng<x0) x0=lng; if (lng>x1) x1=lng;
          if (lat<y0) y0=lat; if (lat>y1) y1=lat;
        }
        return { area:(x1-x0)*(y1-y0), cx:(x0+x1)/2, cy:(y0+y1)/2 };
      };
      const bboxes = polys.map(bbox);
      const primary = bboxes.reduce((best,b) => b.area > best.area ? b : best);
      polys = polys.filter((_,i) =>
        Math.abs(bboxes[i].cx - primary.cx) <= 45 &&
        Math.abs(bboxes[i].cy - primary.cy) <= 45
      );
    }

    let minLng = Infinity, maxLng = -Infinity, minLat = Infinity, maxLat = -Infinity;
    for (const poly of polys) for (const ring of poly) for (const [lng, lat] of ring) {
      if (lng < minLng) minLng = lng; if (lng > maxLng) maxLng = lng;
      if (lat < minLat) minLat = lat; if (lat > maxLat) maxLat = lat;
    }
    if (!isFinite(minLng)) return null;

    if (maxLng - minLng > 180) {
      minLng = Infinity; maxLng = -Infinity;
      for (const poly of polys) for (const ring of poly) for (const pt of ring) {
        if (pt[0] < 0) pt[0] += 360;
        if (pt[0] < minLng) minLng = pt[0]; if (pt[0] > maxLng) maxLng = pt[0];
      }
    }
    const padLng = Math.max((maxLng - minLng) * 0.07, 0.5);
    const padLat = Math.max((maxLat - minLat) * 0.07, 0.5);
    minLng -= padLng; maxLng += padLng;
    minLat -= padLat; maxLat  += padLat;

    const centerLat = (minLat + maxLat) / 2;
    const cosLat = Math.cos(centerLat * Math.PI / 180);
    const lngSpan = (maxLng - minLng) * cosLat;
    const latSpan = maxLat - minLat;

    const MAX_W = 400, MAX_H = 300;
    let W, H, scale;
    if (lngSpan / latSpan > MAX_W / MAX_H) {
      W = MAX_W; H = Math.max(MAX_W * latSpan / lngSpan, 1); scale = MAX_W / lngSpan;
    } else {
      H = MAX_H; W = Math.max(MAX_H * lngSpan / latSpan, 1); scale = MAX_H / latSpan;
    }

    const project = ([lng, lat]) => {
      const x = (lng - minLng) * cosLat * scale;
      const y = (maxLat - lat) * scale;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    };
    const ringToPath = ring => ring.map((pt, i) => `${i === 0 ? 'M' : 'L'}${project(pt)}`).join(' ') + ' Z';
    const path = polys.map(poly => poly.map(ringToPath).join(' ')).join(' ');
    return { path, viewBox: `0 0 ${W.toFixed(1)} ${H.toFixed(1)}` };
  } catch { return null; }
}
