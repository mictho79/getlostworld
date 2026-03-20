const u=JSON.parse(document.getElementById("cmp-all-data").textContent),B=JSON.parse(document.getElementById("cmp-country-list").textContent),p=JSON.parse(document.getElementById("cmp-ui-labels").textContent),A=document.createElement("style");A.textContent=".cmp-dropdown,.cmp-dropdown *{color:#fff!important}";document.head.appendChild(A);let d="",m="";function W(){const e=new URLSearchParams(window.location.search);d=e.get("a")||"",m=e.get("b")||""}function L(e,t,n){let a=-1;function l(c){if(t.innerHTML="",a=-1,!c.trim()){t.hidden=!0;return}const o=c.toLowerCase(),i=B.filter(r=>r.name.toLowerCase().includes(o)).sort((r,$)=>{const f=r.name.toLowerCase().startsWith(o),w=$.name.toLowerCase().startsWith(o);return f===w?r.name.localeCompare($.name):f?-1:1}).slice(0,8);if(!i.length){t.hidden=!0;return}i.forEach(r=>{const $=document.createElement("div");$.className="ac-option",$.dataset.slug=r.slug,$.textContent=r.name,$.style.setProperty("color","#fff","important"),$.addEventListener("mousedown",f=>{f.preventDefault(),h(r)}),t.appendChild($)}),t.hidden=!1}function h(c){e.value=c.name,t.hidden=!0,a=-1,n(c)}function g(c){t.querySelectorAll(".ac-option").forEach((i,r)=>i.classList.toggle("ac-option--active",r===c)),a=c}return e.addEventListener("input",()=>l(e.value)),e.addEventListener("focus",()=>{e.value&&l(e.value)}),e.addEventListener("blur",()=>setTimeout(()=>{t.hidden=!0},200)),e.addEventListener("keydown",c=>{const o=t.querySelectorAll(".ac-option");if(c.key==="ArrowDown")c.preventDefault(),g(Math.min(a+1,o.length-1));else if(c.key==="ArrowUp")c.preventDefault(),g(Math.max(a-1,-1));else if(c.key==="Enter"&&a>=0){c.preventDefault();const i=B.find(r=>r.slug===o[a].dataset.slug);i&&h(i)}else c.key==="Escape"&&(t.hidden=!0,e.blur())}),{setValue:c=>{e.value=c}}}function s(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function v(e,t,n,a=!1,l=!1){const h=a?" cmp-facts-cell--winner":"",g=l?" cmp-facts-cell--winner":"";return`<div class="cmp-facts-row">
    <div class="cmp-facts-cell cmp-facts-cell--a${h}">${s(e)}</div>
    <div class="cmp-facts-cell cmp-facts-cell--metric">${s(t)}</div>
    <div class="cmp-facts-cell cmp-facts-cell--b${g}">${s(n)}</div>
  </div>`}function y(e,t,n,a,l){return`<div class="cmp-cols">
    <div class="cmp-col">
      <div class="cmp-col-header" style="color:var(--accent-a)">${s(e)} ${s(t)}</div>
      <p class="cmp-col-text">${n}</p>
    </div>
    <div class="cmp-col-sep"></div>
    <div class="cmp-col">
      <div class="cmp-col-header" style="color:var(--accent-b)">${s(e)} ${s(a)}</div>
      <p class="cmp-col-text">${l}</p>
    </div>
  </div>`}function k(e){if(!e||e==="—")return 0;const t=e.match(/([\d.]+)\s*([BbMmKk]?)/);if(!t)return 0;const n=parseFloat(t[1]),a=t[2].toUpperCase();return a==="B"?n*1e9:a==="M"?n*1e6:a==="K"?n*1e3:n}function U(e,t){const n=[],a=k(e.population),l=k(t.population);if(a>0&&l>0){const c=a>l?e:t,o=Math.round(Math.max(a,l)/Math.min(a,l));o>=3&&n.push(`${c.name} has roughly ${o}× the population of the other.`)}e.region&&t.region&&e.region!==t.region?n.push(`${e.name} (${e.region}) and ${t.name} (${t.region}) offer contrasting continental experiences.`):e.region&&n.push(`Both countries share the ${e.region} continent, yet each has a distinct character shaped by history.`),e.sport!=="—"&&t.sport!=="—"&&e.sport!==t.sport&&n.push(`Sports fans will note: ${e.name} is passionate about ${e.sport}, while ${t.name} rallies around ${t.sport}.`),e.dish&&t.dish&&e.dish!==t.dish&&n.push(`At the table, ${e.name} is famous for ${e.dish} while ${t.name} celebrates ${t.dish}.`);const h=e.vibe.split("·")[0].trim().toLowerCase(),g=t.vibe.split("·")[0].trim().toLowerCase();return n.push(`Choose ${e.name} for a ${h} experience, or ${t.name} for a ${g} adventure — both reward the curious traveller.`),n.join(" ")}function C(e,t){const n=document.getElementById("cmp-page");n.style.setProperty("--accent-a",e.accent),n.style.setProperty("--accent-b",t.accent);const a=k(e.population),l=k(t.population),h=e.peak?.elevation||0,g=t.peak?.elevation||0;let c="";if((e.capital!=="—"||t.capital!=="—")&&(c+=v(e.capital,p.capital,t.capital)),(e.population!=="—"||t.population!=="—")&&(c+=v(e.population,p.population,t.population,a>=l&&a>0,l>a)),(e.language!=="—"||t.language!=="—")&&(c+=v(e.language,p.language,t.language)),(e.sport!=="—"||t.sport!=="—")&&(c+=v(e.sport,p.sport,t.sport)),(e.dish||t.dish)&&(c+=v(e.dish||"—",p.dish,t.dish||"—")),e.peak||t.peak){const D=e.peak?`${e.peak.name} (${e.peak.elevation.toLocaleString()} m)`:"—",N=t.peak?`${t.peak.name} (${t.peak.elevation.toLocaleString()} m)`:"—";c+=v(D,p.peak,N,h>=g&&h>0,g>h)}const o=e.insights,i=t.insights,r=`${e.peak?`<strong>${s(e.peak.name)}</strong> rises to ${e.peak.elevation.toLocaleString()} m. `:""}${o.nature?s(o.nature):`${s(e.name)} offers diverse natural landscapes shaped by its location in ${s(e.region||"the world")}.`}`,$=`${t.peak?`<strong>${s(t.peak.name)}</strong> rises to ${t.peak.elevation.toLocaleString()} m. `:""}${i.nature?s(i.nature):`${s(t.name)} offers diverse natural landscapes shaped by its location in ${s(t.region||"the world")}.`}`,f=o.people?s(o.people):`With a population of ${s(e.population)}, ${s(e.name)} is a vibrant society with rich traditions.`,w=i.people?s(i.people):`With a population of ${s(t.population)}, ${s(t.name)} is a vibrant society with rich traditions.`,M=`${e.dish?`<strong>${s(e.dish)}</strong> is the emblematic dish. `:""}${o.food?s(o.food):`Food culture in ${s(e.name)} is deeply tied to local identity.`}`,E=`${t.dish?`<strong>${s(t.dish)}</strong> is the emblematic dish. `:""}${i.food?s(i.food):`Food culture in ${s(t.name)} is deeply tied to local identity.`}`,P=`${e.sport!=="—"?`<strong>${s(e.sport)}</strong> holds a special place in ${s(e.name)}'s identity. `:""}${o.sport?s(o.sport):`Sport in ${s(e.name)} unites communities and fuels local pride.`}`,V=`${t.sport!=="—"?`<strong>${s(t.sport)}</strong> holds a special place in ${s(t.name)}'s identity. `:""}${i.sport?s(i.sport):`Sport in ${s(t.name)} unites communities and fuels local pride.`}`;document.getElementById("cmp-content").innerHTML=`
    <div class="cmp-hero">
      <div class="cmp-hero-country">
        <span class="cmp-hero-flag">${e.flag}</span>
        <h1 class="cmp-hero-name cmp-hero-name--a">${s(e.name)}</h1>
        <span class="cmp-region-badge" style="color:${e.accent};border:0.5px solid color-mix(in srgb,${e.accent} 30%,transparent);background:color-mix(in srgb,${e.accent} 8%,transparent)">${s(e.region||"World")}</span>
        <span class="cmp-vibe">${s(e.vibe)}</span>
      </div>
      <div class="cmp-vs-badge" aria-hidden="true">VS</div>
      <div class="cmp-hero-country">
        <span class="cmp-hero-flag">${t.flag}</span>
        <h1 class="cmp-hero-name cmp-hero-name--b">${s(t.name)}</h1>
        <span class="cmp-region-badge" style="color:${t.accent};border:0.5px solid color-mix(in srgb,${t.accent} 30%,transparent);background:color-mix(in srgb,${t.accent} 8%,transparent)">${s(t.region||"World")}</span>
        <span class="cmp-vibe">${s(t.vibe)}</span>
      </div>
    </div>

    <hr class="cmp-divider">

    <div class="cmp-section">
      <h2 class="cmp-section-label">${s(p.keyFacts)}</h2>
      <div class="cmp-facts-table">
        <div class="cmp-facts-header">
          <div class="cmp-facts-cell cmp-facts-cell--a" style="padding-right:18px;color:${e.accent}">${s(e.name)}</div>
          <div class="cmp-facts-cell cmp-facts-cell--metric"></div>
          <div class="cmp-facts-cell cmp-facts-cell--b" style="padding-left:18px;color:${t.accent}">${s(t.name)}</div>
        </div>
        ${c}
      </div>
    </div>

    <div class="cmp-section">
      <h2 class="cmp-section-label">${s(p.geographyNature)}</h2>
      ${y("",`${e.flag} ${e.name}`,r,`${t.flag} ${t.name}`,$)}
    </div>

    <div class="cmp-section">
      <h2 class="cmp-section-label">${s(p.peopleCulture)}</h2>
      ${y("",`${e.flag} ${e.name}`,f,`${t.flag} ${t.name}`,w)}
    </div>

    <div class="cmp-section">
      <h2 class="cmp-section-label">${s(p.foodCuisine)}</h2>
      ${y("",`${e.flag} ${e.name}`,M,`${t.flag} ${t.name}`,E)}
    </div>

    <div class="cmp-section">
      <h2 class="cmp-section-label">${s(p.sportSection)}</h2>
      ${y("",`${e.flag} ${e.name}`,P,`${t.flag} ${t.name}`,V)}
    </div>

    <div class="cmp-section">
      <h2 class="cmp-section-label">${s(p.whichVisit)}</h2>
      <blockquote class="cmp-editorial">${s(U(e,t))}</blockquote>
    </div>

    <div class="cmp-section">
      <h2 class="cmp-section-label">${s(p.exploreEach)}</h2>
      <div class="cmp-cta-row">
        <a href="/country/${e.slug}/" class="cmp-cta-card" style="border:0.5px solid color-mix(in srgb,${e.accent} 22%,rgba(255,255,255,0.06));background:color-mix(in srgb,${e.accent} 5%,rgba(255,255,255,0.02))">
          <span class="cmp-cta-flag">${e.flag}</span>
          <span class="cmp-cta-name">${s(e.name)}</span>
          <span class="cmp-cta-sub" style="color:${e.accent}">${s(e.region)}</span>
          <span class="cmp-cta-arrow" style="color:${e.accent}">→</span>
        </a>
        <a href="/country/${t.slug}/" class="cmp-cta-card" style="border:0.5px solid color-mix(in srgb,${t.accent} 22%,rgba(255,255,255,0.06));background:color-mix(in srgb,${t.accent} 5%,rgba(255,255,255,0.02))">
          <span class="cmp-cta-flag">${t.flag}</span>
          <span class="cmp-cta-name">${s(t.name)}</span>
          <span class="cmp-cta-sub" style="color:${t.accent}">${s(t.region)}</span>
          <span class="cmp-cta-arrow" style="color:${t.accent}">→</span>
        </a>
      </div>
    </div>

    <div class="cmp-map-cta">
      <a href="/map" class="cmp-map-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        ${s(p.exploreMap)}
      </a>
    </div>
  `}const q=document.getElementById("cmp-input-a"),F=document.getElementById("cmp-input-b"),R=document.getElementById("cmp-dropdown-a"),J=document.getElementById("cmp-dropdown-b"),O=document.getElementById("cmp-swap"),S=L(q,R,e=>{d=e.slug,x()}),I=L(F,J,e=>{m=e.slug,x()});function x(){const e=u[d],t=u[m];if(!e||!t||d===m)return;const n=new URL(window.location.href);n.searchParams.set("a",d),n.searchParams.set("b",m),history.replaceState(null,"",n.toString()),C(e,t)}O.addEventListener("click",()=>{[d,m]=[m,d];const e=u[d],t=u[m];e&&S.setValue(e.name),t&&I.setValue(t.name),x()});W();d&&u[d]&&S.setValue(u[d].name);m&&u[m]&&I.setValue(u[m].name);d&&m&&u[d]&&u[m]&&C(u[d],u[m]);
