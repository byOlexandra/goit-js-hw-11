import{S as f,i}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function d(s){const o="https://pixabay.com",t="/api/",n=new URLSearchParams({key:"53346532-56e1a2cf6c50fcc4672e719cf",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${t}?${n}`;return fetch(e).then(r=>r.json()).then(r=>r.hits)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function m(s){const o=s.map(t=>`
        <li class="gallery-item">
            <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}" />
                <ul class="desc-list">
                    <li>
                        <h2>Likes</h2>
                        <p>${t.likes}</p>
                    </li>
                    <li>
                        <h2>Views</h2>
                        <p>${t.views}</p>
                    </li>
                    <li>
                        <h2>Comments</h2>
                        <p>${t.comments}</p>
                    </li>
                    <li>
                        <h2>Downloads</h2>
                        <p>${t.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>`).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function p(){l.innerHTML=""}function y(){u.classList.remove("hidden")}function c(){u.classList.add("hidden")}const g=document.querySelector(".form");g.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(),y(),d(o).then(t=>{if(c(),t.length===0){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}m(t)}).catch(t=>{c(),i.error({title:"Error",message:"Something went wrong. Please try again."}),console.error(t)})});
//# sourceMappingURL=index.js.map
