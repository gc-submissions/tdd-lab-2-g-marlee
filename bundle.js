(()=>{var e={420:e=>{e.exports={calculateChange:function(e,t){return e-t},isSufficientPayment:function(e,t){return e>=t},calculateTotal:function(e){let t=0;return e.forEach((e=>{t+=e.price})),t}}},842:()=>{}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}(()=>{let{formatCurrency:e,getCoins:t}=n(842);const{addItem:r,calculateTotal:a,isSufficientPayment:c,calculateChange:i,removeItem:d}=n(420);e=e||(e=>e);const o=[{name:"Candy Bar",price:.95},{name:"Bag of Chips",price:1.29},{name:"Can of Soda",price:1.8},{name:"Bottle of Milk",price:3},{name:"Box of Cherries",price:5.13}];!function(){const n=document.getElementById("menu"),u=document.getElementById("selectedItems"),s=document.getElementById("total"),l=document.getElementById("cashInput"),m=document.getElementById("cashForm"),f=document.getElementById("changeDue"),g=document.getElementById("cashInserted"),h=document.getElementById("paymentInsufficientMessage"),p=document.getElementById("change"),x=p.querySelectorAll(".change-count"),y=document.getElementById("resetButton");o.forEach(((t,r)=>{n.insertAdjacentHTML("beforeend",`<li>${e(t.price)} - ${t.name}\n        <button data-index="${r}">Buy</button>\n      </li>`)}));let I=[];function E(){u.innerHTML="",I.forEach(((t,n)=>{u.insertAdjacentHTML("beforeend",`<tr>\n        <td>${t.name}</td>\n        <td>${e(t.price)}</td>\n        <td><button data-index="${n}">Remove</button></td>\n      </tr>`)}));const t=a(I);s.innerText=e(t)}n.addEventListener("click",(e=>{const t=parseInt(e.target.getAttribute("data-index"));if(!isNaN(t)){const e=o[t];r(I,e.name,e.price),E()}})),u.addEventListener("click",(e=>{const t=parseInt(e.target.getAttribute("data-index"));isNaN(t)||(d(I,t),E())})),m.addEventListener("submit",(n=>{n.preventDefault();const r=Number(l.value)||0,d=a(I);let o=0;try{o=i(d,r)}catch(n){console.error(n)}if(g.innerText=e(r),f.innerText=e(o),c(d,r)){const e=t(Math.round(100*o));x[0].innerText=e.quarters,x[1].innerText=e.dimes,x[2].innerText=e.nickels,x[3].innerText=e.pennies,p.hidden=!1,h.hidden=!0}else p.hidden=!0,h.hidden=!1})),y.addEventListener("click",(()=>{I=[],E(),l.value="",g.innerText="",f.innerText="",p.hidden=!0,h.hidden=!0}))}()})()})();