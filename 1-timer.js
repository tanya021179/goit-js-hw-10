import{f as h,i as S}from"./assets/vendor-BbSUbo7J.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();let u=null;const a=document.querySelector("[data-start]"),b=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),D=document.querySelector("[data-minutes]"),L=document.querySelector("[data-seconds]"),i=document.querySelector("#datetime-picker"),q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){u=o[0],u<new Date?(S.error({title:"Error",message:"Please choose a date in the future"}),a.disabled=!0):a.disabled=!1}};h("#datetime-picker",q);a.addEventListener("click",v);let f=null;function v(){a.classList.add("disabled"),a.disabled=!0,i.classList.add("disabled"),i.disabled=!0,f=setInterval(()=>{const r=u-new Date;if(r<=0){clearInterval(f),m({days:0,hours:0,minutes:0,seconds:0}),i.classList.remove("disabled"),i.disabled=!1;return}const n=l(r);m(n)},1e3)}function l(o){const t=Math.floor(o/864e5),c=Math.floor(o%864e5/36e5),y=Math.floor(o%864e5%36e5/6e4),p=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:c,minutes:y,seconds:p}}console.log(l(2e3));console.log(l(14e4));console.log(l(2414e4));function d(o){return String(o).padStart(2,"0")}function m({days:o,hours:r,minutes:n,seconds:s}){b.textContent=d(o),g.textContent=d(r),D.textContent=d(n),L.textContent=d(s)}
//# sourceMappingURL=1-timer.js.map
