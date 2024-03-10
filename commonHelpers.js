import{i as u,a as y,S as h}from"./assets/vendor-2618a76b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&p(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function m(r){return r.hits.map(e=>`<div class="gallery-item">
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
        </div>`).join("")}function L(){u.info({timeout:3e3,position:"topRight",message:"We're sorry, but you've reached the end of search results."})}const b="41952140-5e618661129c37e138516e154",v="https://pixabay.com/api/",d=document.querySelector(".loader");async function f(r,e=1){d.style.display="block";try{const s=await y.get(v,{params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}});return d.style.display="none",s.data.hits.length===0&&u.error({timeout:3e3,position:"topRight",message:"There are no images matching your search query. Please, enter something else!"}),s.data}catch(s){console.error("Error fetching data!",s)}}const g=new h(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),n=document.querySelector(".search-form"),i=document.querySelector(".gallery"),c=document.querySelector(".load-btn");let l="";n.addEventListener("submit",w);c.addEventListener("click",E);function w(r){r.preventDefault(),i.innerHTML="",l=n.elements.searchWord.value.trim(),f(l).then(e=>{const s=m(e);i.insertAdjacentHTML("beforeend",s),g.refresh()}).catch(e=>{console.error("Error:",e)}),n.reset(),c.style.display="block"}async function E(){currPage+=1;try{const r=await f(l,currPage);m(r),g.refresh();const e=i.getBoundingClientRect().height;window.scrollBy({top:4*e,behavior:"smooth"}),(!r.hits||r.hits.length===0)&&(c.style.display="none",L())}catch(r){console.error("Error:",r)}}
//# sourceMappingURL=commonHelpers.js.map
