// Header solid-on-scroll
const header = document.querySelector('.site-header');
function onScroll(){
  if(window.scrollY > 40){ header.classList.add('solid'); }
  else { header.classList.remove('solid'); }
}
window.addEventListener('scroll', onScroll);
onScroll();

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if(toggle){
  toggle.addEventListener('click', ()=>{
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> links.classList.remove('open'));
  });
}

// Simple reveal-on-scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
},{threshold:0.15});
revealEls.forEach(el=>io.observe(el));
