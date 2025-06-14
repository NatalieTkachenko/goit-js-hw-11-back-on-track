import{S as p,a as d,i as y}from"./assets/vendor-DFCQGEf1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function g(o,t,i){t.innerHTML="",i.insertAdjacentHTML("beforeend",o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:a,views:u,comments:f,downloads:m})=>`<li class="gallery__item">
        <div class="gallery">
    <a href="${e}"><img src="${s}" alt="${r}" title="${r}"/></a>
    <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
</div>

                    <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    ${a}
                </p>
                <p class="info-item">
                    <b>Views</b>
                    ${u}
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    ${f}
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    ${m}
                </p>
            </div>
           
        </li>
        `).join("")),new p(".gallery a",{captionsData:"",captionDelay:250})}const h="30786866-3f5d93462a7f9cfec75d687d6",b="https://pixabay.com/api/",L=d.create({baseURL:b,params:{key:h,image_type:"photo",orientation:"horizontal",safesearch:!0}});async function q(o,t,i){t.innerHTML='<span class="loader"></span>';try{const s=await L.get("",{params:{q:o}});console.log(s.data.hits),s.data.hits.length===0?y.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(await v(2e3),g(s.data.hits,t,i))}catch(s){console.log(s)}finally{t.innerHTML=""}}function v(o){return new Promise(t=>setTimeout(t,o))}const S=document.querySelector("[name='search-text']"),c=document.querySelector(".form"),l=document.querySelector(".gallery-list"),P=document.querySelector(".loader-space");let n="";c.addEventListener("submit",o=>{o.preventDefault();const t=S.value.trim();console.log(n),t===""?console.log("Please enter a search query"):t!==n&&(n=t,l.innerHTML="",q(n,P,l)),c.reset()});
//# sourceMappingURL=index.js.map
