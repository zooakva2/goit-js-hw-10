import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as r}from"./assets/vendor-77e16229.js";const t=document.querySelector(".form"),c=t.querySelector('[name="delay"]'),l=t.querySelectorAll('[name="state"]');t.addEventListener("submit",function(i){i.preventDefault();const s=parseInt(c.value),o=[...l].find(e=>e.checked).value;new Promise((e,n)=>{setTimeout(()=>{o==="fulfilled"?e(s):o==="rejected"&&n(s)},s)}).then(e=>{r.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{r.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})}),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
