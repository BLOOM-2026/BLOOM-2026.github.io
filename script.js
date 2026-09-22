const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));document.querySelector('#year').textContent=new Date().getFullYear();

const monthFilter=document.querySelector('#month-filter');
const eventCards=[...document.querySelectorAll('.event-card')];
const noEvents=document.querySelector('.no-events');
function filterEvents(){if(!monthFilter)return;const value=monthFilter.value;let shown=0;eventCards.forEach(card=>{const show=value==='all'||card.dataset.month===value;card.hidden=!show;if(show)shown++});if(noEvents)noEvents.hidden=shown!==0;}
monthFilter?.addEventListener('change',filterEvents);filterEvents();
