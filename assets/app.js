const photosCss=document.createElement('link');
photosCss.rel='stylesheet';
photosCss.href='assets/photos.css?v=33';
document.head.appendChild(photosCss);

document.documentElement.style.overflowX='hidden';
document.body.style.overflowX='hidden';

const portrait=document.querySelector('.portrait-placeholder');
if(portrait){
  portrait.setAttribute('aria-label','Ritratto di Stefano Napoleone');
  portrait.innerHTML=`
    <picture>
      <source media="(max-width: 700px)" srcset="assets/images/stefano-napoleone-ritratto.webp?v=33" type="image/webp">
      <img
        src="assets/images/stefano-ritratto.jpg?v=33"
        alt="Stefano Napoleone, operatore Reiki e studioso di numerologia evolutiva"
        width="1157"
        height="1536"
        loading="eager"
        fetchpriority="high"
        decoding="async">
    </picture>`;
}

const energyContent=document.querySelector('.path-energy .path-content');
if(energyContent){
  const session=document.createElement('figure');
  session.className='reiki-photo';
  session.innerHTML=`
    <picture>
      <source media="(max-width: 700px)" srcset="assets/images/stefano-napoleone-reiki-sessione.webp?v=33" type="image/webp">
      <img
        src="assets/images/stefano-reiki.jpg?v=33"
        alt="Stefano Napoleone durante una sessione Reiki in presenza"
        width="1157"
        height="1536"
        loading="lazy"
        decoding="async">
    </picture>
    <figcaption class="photo-caption">Una sessione Reiki in presenza, in uno spazio tranquillo e rispettoso.</figcaption>`;
  const tagline=energyContent.querySelector('.path-tagline');
  tagline?.insertAdjacentElement('afterend',session);

  const detail=document.createElement('figure');
  detail.className='reiki-detail-photo';
  detail.innerHTML=`
    <picture>
      <source media="(max-width: 700px)" srcset="assets/images/stefano-napoleone-reiki-dettaglio.webp?v=33" type="image/webp">
      <img
        src="assets/images/mani-reiki.jpg?v=33"
        alt="Dettaglio delle mani di Stefano durante un trattamento Reiki"
        width="1536"
        height="1157"
        loading="lazy"
        decoding="async">
    </picture>
    <figcaption class="photo-caption">Il contatto viene sempre adattato con delicatezza alla persona.</figcaption>`;
  const offers=energyContent.querySelector('.offers');
  offers?.insertAdjacentElement('beforebegin',detail);
}

const header=document.querySelector('[data-header]');
const menuToggle=document.querySelector('[data-menu-toggle]');
const nav=document.querySelector('[data-nav]');
const legalDialog=document.querySelector('[data-legal-dialog]');
const legalOpen=document.querySelector('[data-legal-open]');
const legalClose=document.querySelector('[data-legal-close]');
const year=document.querySelector('[data-year]');
if(year)year.textContent=new Date().getFullYear();
const updateHeader=()=>header?.classList.toggle('scrolled',window.scrollY>16);
updateHeader();
window.addEventListener('scroll',updateHeader,{passive:true});
menuToggle?.addEventListener('click',()=>{
  const isOpen=menuToggle.getAttribute('aria-expanded')==='true';
  menuToggle.setAttribute('aria-expanded',String(!isOpen));
  nav?.classList.toggle('open',!isOpen);
});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded','false');
}));
legalOpen?.addEventListener('click',()=>legalDialog?.showModal());
legalClose?.addEventListener('click',()=>legalDialog?.close());
legalDialog?.addEventListener('click',event=>{
  if(event.target===legalDialog)legalDialog.close();
});
const reveals=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12});
  reveals.forEach(element=>observer.observe(element));
}else{
  reveals.forEach(element=>element.classList.add('visible'));
}
