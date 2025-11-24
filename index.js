import{a as d,S as f,i}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function h(s){const o="https://pixabay.com",t="/api/",a=new URLSearchParams({key:"53346532-56e1a2cf6c50fcc4672e719cf",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${t}?${a}`;return d.get(`${e}`).then(r=>r.data.hits)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),m=new f(".gallery a",{captionsData:"alt",captionDelay:250});function p(s){const o=s.map(t=>`
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
        </li>`).join("");c.insertAdjacentHTML("beforeend",o),m.refresh()}function y(){c.innerHTML=""}function g(){u.classList.remove("hidden")}function l(){u.classList.add("hidden")}const L=document.querySelector(".form");L.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(),g(),h(o).then(t=>{if(l(),t.length===0){i.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(t)}).catch(t=>{l(),i.error({title:"Error",message:"Something went wrong. Please try again."}),console.error(t)})});
//# sourceMappingURL=index.js.map
