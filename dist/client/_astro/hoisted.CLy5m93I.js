const m=JSON.parse(document.getElementById("cmp-all-data").textContent),x=JSON.parse(document.getElementById("cmp-country-list").textContent);let p="",d="";function D(){const e=new URLSearchParams(window.location.search);p=e.get("a")||"",d=e.get("b")||""}function B(e,t,a){let n=-1;function l(c){if(t.innerHTML="",n=-1,!c.trim()){t.hidden=!0;return}const o=c.toLowerCase(),i=x.filter(r=>r.name.toLowerCase().includes(o)).sort((r,u)=>{const $=r.name.toLowerCase().startsWith(o),k=u.name.toLowerCase().startsWith(o);return $===k?r.name.localeCompare(u.name):$?-1:1}).slice(0,8);if(!i.length){t.hidden=!0;return}i.forEach(r=>{const u=document.createElement("div");u.className="ac-option",u.dataset.slug=r.slug,u.textContent=r.name,u.style.color="#fff",u.addEventListener("mousedown",$=>{$.preventDefault(),h(r)}),t.appendChild(u)}),t.hidden=!1}function h(c){e.value=c.name,t.hidden=!0,n=-1,a(c)}function g(c){t.querySelectorAll(".ac-option").forEach((i,r)=>i.classList.toggle("ac-option--active",r===c)),n=c}return e.addEventListener("input",()=>l(e.value)),e.addEventListener("focus",()=>{e.value&&l(e.value)}),e.addEventListener("blur",()=>setTimeout(()=>{t.hidden=!0},200)),e.addEventListener("keydown",c=>{const o=t.querySelectorAll(".ac-option");if(c.key==="ArrowDown")c.preventDefault(),g(Math.min(n+1,o.length-1));else if(c.key==="ArrowUp")c.preventDefault(),g(Math.max(n-1,-1));else if(c.key==="Enter"&&n>=0){c.preventDefault();const i=x.find(r=>r.slug===o[n].dataset.slug);i&&h(i)}else c.key==="Escape"&&(t.hidden=!0,e.blur())}),{setValue:c=>{e.value=c}}}function s(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function f(e,t,a,n=!1,l=!1){const h=n?" cmp-facts-cell--winner":"",g=l?" cmp-facts-cell--winner":"";return`<div class="cmp-facts-row">
    <div class="cmp-facts-cell cmp-facts-cell--a${h}">${s(e)}</div>
    <div class="cmp-facts-cell cmp-facts-cell--metric">${s(t)}</div>
    <div class="cmp-facts-cell cmp-facts-cell--b${g}">${s(a)}</div>
  </div>`}function v(e,t,a,n,l){return`<div class="cmp-cols">
    <div class="cmp-col">
      <div class="cmp-col-header" style="color:var(--accent-a)">${s(e)} ${s(t)}</div>
      <p class="cmp-col-text">${a}</p>
    </div>
    <div class="cmp-col-sep"></div>
    <div class="cmp-col">
      <div class="cmp-col-header" style="color:var(--accent-b)">${s(e)} ${s(n)}</div>
      <p class="cmp-col-text">${l}</p>
    </div>
  </div>`}function y(e){if(!e||e==="—")return 0;const t=e.match(/([\d.]+)\s*([BbMmKk]?)/);if(!t)return 0;const a=parseFloat(t[1]),n=t[2].toUpperCase();return n==="B"?a*1e9:n==="M"?a*1e6:n==="K"?a*1e3:a}function E(e,t){const a=[],n=y(e.population),l=y(t.population);if(n>0&&l>0){const c=n>l?e:t,o=Math.round(Math.max(n,l)/Math.min(n,l));o>=3&&a.push(`${c.name} has roughly ${o}× the population of the other.`)}e.region&&t.region&&e.region!==t.region?a.push(`${e.name} (${e.region}) and ${t.name} (${t.region}) offer contrasting continental experiences.`):e.region&&a.push(`Both countries share the ${e.region} continent, yet each has a distinct character shaped by history.`),e.sport!=="—"&&t.sport!=="—"&&e.sport!==t.sport&&a.push(`Sports fans will note: ${e.name} is passionate about ${e.sport}, while ${t.name} rallies around ${t.sport}.`),e.dish&&t.dish&&e.dish!==t.dish&&a.push(`At the table, ${e.name} is famous for ${e.dish} while ${t.name} celebrates ${t.dish}.`);const h=e.vibe.split("·")[0].trim().toLowerCase(),g=t.vibe.split("·")[0].trim().toLowerCase();return a.push(`Choose ${e.name} for a ${h} experience, or ${t.name} for a ${g} adventure — both reward the curious traveller.`),a.join(" ")}function A(e,t){const a=document.getElementById("cmp-page");a.style.setProperty("--accent-a",e.accent),a.style.setProperty("--accent-b",t.accent);const n=y(e.population),l=y(t.population),h=e.peak?.elevation||0,g=t.peak?.elevation||0;let c="";if((e.capital!=="—"||t.capital!=="—")&&(c+=f(e.capital,"Capital",t.capital)),(e.population!=="—"||t.population!=="—")&&(c+=f(e.population,"Population",t.population,n>=l&&n>0,l>n)),(e.language!=="—"||t.language!=="—")&&(c+=f(e.language,"Language",t.language)),(e.sport!=="—"||t.sport!=="—")&&(c+=f(e.sport,"National sport",t.sport)),(e.dish||t.dish)&&(c+=f(e.dish||"—","National dish",t.dish||"—")),e.peak||t.peak){const N=e.peak?`${e.peak.name} (${e.peak.elevation.toLocaleString()} m)`:"—",W=t.peak?`${t.peak.name} (${t.peak.elevation.toLocaleString()} m)`:"—";c+=f(N,"Highest peak",W,h>=g&&h>0,g>h)}const o=e.insights,i=t.insights,r=`${e.peak?`<strong>${s(e.peak.name)}</strong> rises to ${e.peak.elevation.toLocaleString()} m. `:""}${o.nature?s(o.nature):`${s(e.name)} offers diverse natural landscapes shaped by its location in ${s(e.region||"the world")}.`}`,u=`${t.peak?`<strong>${s(t.peak.name)}</strong> rises to ${t.peak.elevation.toLocaleString()} m. `:""}${i.nature?s(i.nature):`${s(t.name)} offers diverse natural landscapes shaped by its location in ${s(t.region||"the world")}.`}`,$=o.people?s(o.people):`With a population of ${s(e.population)}, ${s(e.name)} is a vibrant society with rich traditions.`,k=i.people?s(i.people):`With a population of ${s(t.population)}, ${s(t.name)} is a vibrant society with rich traditions.`,S=`${e.dish?`<strong>${s(e.dish)}</strong> is the emblematic dish. `:""}${o.food?s(o.food):`Food culture in ${s(e.name)} is deeply tied to local identity.`}`,I=`${t.dish?`<strong>${s(t.dish)}</strong> is the emblematic dish. `:""}${i.food?s(i.food):`Food culture in ${s(t.name)} is deeply tied to local identity.`}`,M=`${e.sport!=="—"?`<strong>${s(e.sport)}</strong> holds a special place in ${s(e.name)}'s identity. `:""}${o.sport?s(o.sport):`Sport in ${s(e.name)} unites communities and fuels local pride.`}`,P=`${t.sport!=="—"?`<strong>${s(t.sport)}</strong> holds a special place in ${s(t.name)}'s identity. `:""}${i.sport?s(i.sport):`Sport in ${s(t.name)} unites communities and fuels local pride.`}`;document.getElementById("cmp-content").innerHTML=`
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
      <h2 class="cmp-section-label">Key facts</h2>
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
      <h2 class="cmp-section-label">⛰ Geography &amp; Nature</h2>
      ${v("",`${e.flag} ${e.name}`,r,`${t.flag} ${t.name}`,u)}
    </div>

    <div class="cmp-section">
      <h2 class="cmp-section-label">👥 People &amp; Culture</h2>
      ${v("",`${e.flag} ${e.name}`,$,`${t.flag} ${t.name}`,k)}
    </div>

    <div class="cmp-section">
      <h2 class="cmp-section-label">🍽 Food &amp; Cuisine</h2>
      ${v("",`${e.flag} ${e.name}`,S,`${t.flag} ${t.name}`,I)}
    </div>

    <div class="cmp-section">
      <h2 class="cmp-section-label">🏅 Sport</h2>
      ${v("",`${e.flag} ${e.name}`,M,`${t.flag} ${t.name}`,P)}
    </div>

    <div class="cmp-section">
      <h2 class="cmp-section-label">Which should you visit?</h2>
      <blockquote class="cmp-editorial">${s(E(e,t))}</blockquote>
    </div>

    <div class="cmp-section">
      <h2 class="cmp-section-label">Explore each country</h2>
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
      <a href="/" class="cmp-map-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        Explore on the world map
      </a>
    </div>
  `}const V=document.getElementById("cmp-input-a"),q=document.getElementById("cmp-input-b"),F=document.getElementById("cmp-dropdown-a"),R=document.getElementById("cmp-dropdown-b"),U=document.getElementById("cmp-swap"),L=B(V,F,e=>{p=e.slug,w()}),C=B(q,R,e=>{d=e.slug,w()});function w(){const e=m[p],t=m[d];if(!e||!t||p===d)return;const a=new URL(window.location.href);a.searchParams.set("a",p),a.searchParams.set("b",d),history.replaceState(null,"",a.toString()),A(e,t)}U.addEventListener("click",()=>{[p,d]=[d,p];const e=m[p],t=m[d];e&&L.setValue(e.name),t&&C.setValue(t.name),w()});D();p&&m[p]&&L.setValue(m[p].name);d&&m[d]&&C.setValue(m[d].name);p&&d&&m[p]&&m[d]&&A(m[p],m[d]);
