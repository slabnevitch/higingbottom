import"./style-fac82e35.js";import{B as l}from"./bottomSheet-e1f39f3c.js";import"./anime.es-de4e5aa0.js";(async()=>{async function e(){return await fetch("https://strapi.tmls.dev/api/genres?sort[0]=id&fields[0]=name&populate[shows][sort][0]=id&populate[shows][fields][0]=key&populate[shows][fields][1]=name&populate[shows]&populate[shows][populate][poster][fields][0]=hash&populate[shows][populate][poster][fields][1]=src&populate[shows][populate][banner][fields][0]=hash&populate[shows][populate][banner][fields][1]=src").then(a=>a.json()).then(async a=>a.data[2].shows.concat(a.data[5].shows).concat(a.data[7].shows))}async function o(a){return await fetch(`https://strapi.tmls.dev/api/shows?filters[key][$eq]=${a}&populate=%2A`).then(s=>s.json()).then(async s=>s.data[0])}async function n(a){const s=await o(a);return`
       <div class="list-items">
       <div class="img-wrapper">
       <img src=${s.banner.src}>
       <div class="gradient"></div>
       </div>
       <div class="container">
       <h1 class="name">${s.name}</h1>
       <span class="genre">Drama \xB7 Comedy \xB7 2021</span>
       <p class="description">${s.description}</p>
       <p class="cast">Cast & Crew</p>
      ${s.cast_and_crew.map(t=>`</span>${t.name} </span>`).join("")}
       <div>
       <h2>Season 1</h2>
       ${s.videos.map((t,r)=>`<div class="container-box">
         <img src = ${t.poster} />
         <h4><span class="number">${r+1}</span> ${t.name}</h4>
         </div>`).join("")}
       </div>
       </div>
    </div>
`}const i=await e(),p=`${i.map((a,s)=>`<li id="target-${s}" class="scroll-snap-slide" data-bottomsheet-id = bottomsheet-${s} key = ${a.key}><img src=${a.poster.src}></li>`).join("")}`;document.querySelector(".scroll-snap-slider").innerHTML=p,document.querySelectorAll(".scroll-snap-slide").forEach(async(a,s)=>{const t=await n(a.getAttribute("key"));l({trigger:`target-${s}`,snapPoints:["100%"],displayOverlay:!1,minWidthForModal:600,webLayout:"modal",content:`<div id="bottomsheet-${s}" data-bottomsheet> ${t} </div>`})})})();
