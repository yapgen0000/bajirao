(() => {
  // Gallery modal handling
  const galleryImages = document.querySelectorAll('.gallery-item img');
  const modal = document.getElementById('modal');
  if (!modal) return;

  const modalImg = modal.querySelector('img');
  const modalClose = modal.querySelector('.modal__close');

  if (!galleryImages.length || !modalImg) return;

  galleryImages.forEach(img => {
    img.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'flex';
      modalImg.src = img.src;
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
})();

(() => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();

// Hero image rotator (uses images from img/)
(function(){
  const images = ["img/baji1.jpg","img/baj2.jpg","img/galleryimage1.jpg","img/galleryimage2.jpg"].filter(Boolean);
  if(!images.length) return;
  const img = document.getElementById('hero-image');
  if(!img) return;
  let i = 0;
  setInterval(()=>{
    i = (i + 1) % images.length;
    img.style.transition = 'opacity 0.5s ease';
    img.style.opacity = 0;
    setTimeout(()=>{ img.src = images[i]; img.style.opacity = 1 }, 500);
  }, 5000);
})();





