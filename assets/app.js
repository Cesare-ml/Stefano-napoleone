const photosCss=document.createElement('link');photosCss.rel='stylesheet';photosCss.href='assets/photos.css?v=5';document.head.appendChild(photosCss);

const portrait=document.querySelector('.portrait-placeholder');
if(portrait){
  portrait.setAttribute('aria-label','Ritratto di Stefano Napoleone');
  portrait.innerHTML='<img src="assets/images/stefano-ritratto-optimized.webp?v=1" alt="Stefano Napoleone, operatore Reiki e studioso di numerologia evolutiva" loading="eager" fetchpriority="high">';
}

const energyContent=document.querySelector('.path-energy .path-content');
if(energyContent){
  const session=document.createElement('figure');
  session.className='reiki-photo';
  session.innerHTML='<img src="assets/images/stefano-reiki-optimized.webp?v=1" alt="Stefano Napoleone durante una sessione Reiki in presenza" loading="lazy" decoding="async"><figcaption class="photo-caption">Una sessione Reiki in presenza, in uno spazio tranquillo e rispettoso.</figcaption>';
  const tagline=energyContent.querySelector('.path-tagline');
  tagline?.insertAdjacentElement('afterend',session);

  const detail=document.createElement('figure');
  detail.className='reiki-detail-photo';
  detail.innerHTML='<img src="assets/images/mani-reiki-optimized.webp?v=1" alt="Dettaglio delle mani di Stefano durante un trattamento Reiki" loading="lazy" decoding="async"><figcaption class="photo-caption">Il contatto viene sempre adattato alla sensibilità e alle preferenze della persona.</figcaption>';
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
menuToggle?.addEventListener('click',()=>{const isOpen=menuToggle.getAttribute('aria-expanded')==='true';menuToggle.setAttribute('aria-expanded',String(!isOpen));nav?.classList.toggle('open',!isOpen)});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false')}));
legalOpen?.addEventListener('click',()=>legalDialog?.showModal());
legalClose?.addEventListener('click',()=>legalDialog?.close());
legalDialog?.addEventListener('click',event=>{if(event.target===legalDialog)legalDialog.close()});
const reveals=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.12});reveals.forEach(element=>observer.observe(element))}else{reveals.forEach(element=>element.classList.add('visible'))}