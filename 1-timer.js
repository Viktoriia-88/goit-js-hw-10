import"./assets/styles-DvK6WlUo.js";import{f as h,i as b}from"./assets/vendor-BbbuE1sJ.js";const e=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]"),y=document.querySelector(".value[data-days]"),v=document.querySelector(".value[data-hours]"),C=document.querySelector(".value[data-minutes]"),p=document.querySelector(".value[data-seconds]");o.setAttribute("disabled",!0);let d;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){d=t[0],console.log(d),d.getTime()<=Date.now()?(b.error({title:"Error",message:"Please choose a date in the future",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),o.setAttribute("disabled",!0)):o.removeAttribute("disabled")}};e.addEventListener("input",h("#datetime-picker",g));o.addEventListener("click",D);function S(t){const n=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),s=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:n,hours:r,minutes:s,seconds:l}}const a=t=>t.toString().padStart(2,"0");function D(){o.setAttribute("disabled",!0);const t=setInterval(()=>{const c=new Date,u=new Date(e.value)-c,{days:i,hours:n,minutes:r,seconds:s}=S(u);if(u<=0){e.removeAttribute("disabled");return}e.setAttribute("disabled",!0),y.textContent=a(i),v.textContent=a(n),C.textContent=a(r),p.textContent=a(s),[i,n,r,s].every(f=>f===0)&&(clearInterval(t),e.disabled=!1)},1e3)}
//# sourceMappingURL=1-timer.js.map
