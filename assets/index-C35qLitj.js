(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`#app`);e.innerHTML=`
  <main class="counter-app">
    <h1>カウンター</h1>
    <p class="count" aria-live="polite">0</p>
    <div class="controls">
      <button id="decrease" type="button">-1</button>
      <button id="reset" type="button" class="secondary">リセット</button>
      <button id="increase" type="button">+1</button>
    </div>
  </main>
`;var t=document.querySelector(`.count`),n=document.querySelector(`#increase`),r=document.querySelector(`#decrease`),i=document.querySelector(`#reset`),a=0,o=()=>{t.textContent=String(a)};n.addEventListener(`click`,()=>{a+=1,o()}),r.addEventListener(`click`,()=>{--a,o()}),i.addEventListener(`click`,()=>{a=0,o()}),o();