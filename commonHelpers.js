import{i as u,a as g,S as h}from"./assets/vendor-2618a76b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&p(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function f(s){return s.hits.map(e=>`<div class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
            </a>
            <div class="gallery-item-info">
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Likes: <span>${e.likes}</span>
                    </span>    
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Views: <span>${e.views}</span>
                    </span>    
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Comments: <span>${e.comments}</span>
                    </span>    
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Downloads: <span>${e.downloads}</span>
                    </span>    
                </p>
            </div>
        </div>`).join("")}function L(){u.info({timeout:3e3,position:"topRight",message:"We're sorry, but you've reached the end of search results."})}const b="41952140-5e618661129c37e138516e154",v="https://pixabay.com/api/",d=document.querySelector(".loader");async function m(s,e){d.style.display="block";try{const o=await g.get(v,{params:{key:b,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}});return d.style.display="none",o.data.hits.length===0&&u.error({timeout:3e3,position:"topRight",message:"There are no images matching your search query. Please, enter something else!"}),o.data}catch(o){console.error("Error fetching data!",o)}}const y=new h(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),n=document.querySelector(".search-form"),i=document.querySelector(".gallery"),c=document.querySelector(".load-btn");let l="",w=1;n.addEventListener("submit",E);c.addEventListener("click",M);function E(s){s.preventDefault(),i.innerHTML="",l=n.elements.searchWord.value.trim(),m(l).then(e=>{const o=f(e);i.insertAdjacentHTML("beforeend",o),y.refresh()}).catch(e=>{console.error("Error:",e)}),n.reset(),c.style.display="block"}function M(){if(!data.hits||data.hits.length===0){c.style.display="none",L();return}else try{m(l).then(s=>{const e=f(s);i.insertAdjacentHTML("beforeend",e),y.refresh(),w+=1})}catch(s){console.error("Error:",s)}}
//# sourceMappingURL=commonHelpers.js.map
