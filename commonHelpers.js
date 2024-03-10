import{i as f,a as h,S as L}from"./assets/vendor-2618a76b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function y(n){return n.hits.map(e=>`<div class="gallery-item">
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
        </div>`).join("")}function b(){f.info({timeout:3e3,position:"topRight",message:"We're sorry, but you've reached the end of search results."})}function v(){f.info({timeout:3e3,position:"topRight",message:"The search query can not be epty!"})}function w(){f.error({timeout:3e3,position:"topRight",message:"There are no images matching your search query. Please, enter something else!"})}async function g(n,e){const r="41952140-5e618661129c37e138516e154",o="https://pixabay.com/api/";return(await h.get(o,{params:{key:r,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const d=new L(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),l=document.querySelector(".search-form"),a=document.querySelector(".gallery"),m=document.querySelector(".loader"),i=document.querySelector(".load-btn");let c="",p;l.addEventListener("submit",M);i.addEventListener("click",q);async function M(n){if(p=1,n.preventDefault(),a.innerHTML="",c=l.elements.searchWord.value.trim(),i.style.display="block",c===""){v(),a.innerHTML="",i.style.display="none",l.reset();return}m.style.display="block";try{const e=await g(c,p).then(r=>{const o=y(r);if(r.hits.length===0){w(),i.style.display="none",m.style.display="none";return}a.insertAdjacentHTML("beforeend",o),d.refresh(),m.style.display="none"})}catch(e){console.error("Error:",e)}l.reset()}async function q(){p+=1;try{const n=await g(c,p).then(e=>{const r=y(e);a.insertAdjacentHTML("beforeend",r),d.refresh();const o=a.getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"}),e.hits.length<=14&&(i.style.display="none",b(),d.refresh())})}catch(n){console.error("Error:",n)}}
//# sourceMappingURL=commonHelpers.js.map
