const wall=document.querySelector('.wall'),cards=[...wall.children],btns=[...document.querySelectorAll('[data-filter]')];
let f='all',s='order';
const n=(c,k)=>+c.dataset[k];
function render(){
  [...cards].sort((a,b)=>(s==='hi'?n(b,'rating')-n(a,'rating'):s==='lo'?n(a,'rating')-n(b,'rating'):0)||n(a,'order')-n(b,'order'))
    .forEach(c=>{wall.append(c);c.hidden=!(f==='all'||c.dataset.type===f)});
}
btns.forEach(b=>b.onclick=()=>{f=b.dataset.filter;btns.forEach(x=>x.setAttribute('aria-pressed',x===b));render()});
document.getElementById('sort').onchange=e=>{s=e.target.value;render()};
