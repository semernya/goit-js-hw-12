import{i as u,a as h,S as L}from"./assets/vendor-2618a76b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();function f(r){return r.hits.map(e=>`<div class="gallery-item">
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
        </div>`).join("")}function b(){u.info({timeout:3e3,position:"topRight",message:"We're sorry, but you've reached the end of search results."})}const v="41952140-5e618661129c37e138516e154",w="https://pixabay.com/api/",m=document.querySelector(".loader");async function g(r,e){m.style.display="block";try{const o=await h.get(w,{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}});return m.style.display="none",o.data.hits.length===0&&u.error({timeout:3e3,position:"topRight",message:"There are no images matching your search query. Please, enter something else!"}),o.data}catch(o){console.error("Error fetching data!",o)}}const y=new L(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),c=document.querySelector(".search-form"),n=document.querySelector(".gallery"),d=document.querySelector(".load-btn");let p="",i;c.addEventListener("submit",E);d.addEventListener("click",M);async function E(r){i=1,r.preventDefault(),n.innerHTML="",p=c.elements.searchWord.value.trim();try{const e=await g(p,i).then(o=>{const a=f(o);n.insertAdjacentHTML("beforeend",a),y.refresh()})}catch(e){console.error("Error:",e)}c.reset(),d.style.display="block"}async function M(){i+=1;try{const r=await g(p,i).then(o=>{const a=f(o);n.insertAdjacentHTML("beforeend",a),y.refresh()}),e=n.getBoundingClientRect().height;window.scrollBy({top:4*e,behavior:"smooth"}),(!r.hits||r.hits.length===0)&&(d.style.display="none",b())}catch(r){console.error("Error:",r)}}
//# sourceMappingURL=commonHelpers.js.map
