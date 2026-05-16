// === IMAGE MAPPING ===
const imageMap = {
  'logo': 'kaka pics/logo/ChatGPT Image May 11, 2026, 12_40_56 AM.png',
  'logo2': 'logo 2/ChatGPT Image May 11, 2026, 12_42_46 AM.png',
  'i1': 'kaka pics/4Xnc1JMl2UgcD-VYFixY8kPDEKz7D-vb9fco0kjN1mTrUddmOXvUtF-0adQe0OLaNSheAtx0ZlHNp4kZ1YU0jWmKY-uhqy1zyd5PHVf6tbTXRGe6QTIj8mAmTy1SQbu_HaiQ_3Z_fCBFx3k5j3z-iKktjzn9LiCKw6HyLmSR0megnF_zv8qYOYTsNrma0iOF.jpg',
  'i2': 'kaka pics/65ztPpMcwN1BfXaI3SX4tReYbsdnWJ_KSpLc82Ero3rKpg4WINBQnaa6L_4WGgjub_d25VhcHjp85mDeB3NwsHG_Y2dyFi38wpsrzedQAQGuPckvbbwaB55VxfruXQrmhkIuIDVRfeo2GLGVVa31r_p6Um5Fbbn4em8_X3QitOGXUl1wI8GwcrXdH_HIBSUK.jpg',
  'i3': 'kaka pics/A0w-98S4-E-hAuhkPYh9If23QBx-Qk4FQoj3b8WbS2Qg7lyFYlY1AjlTwKqG0YodSRGEVb2CciZFEU0z6vBqbAQh5kiet9B-gEdmDqD4UiBt2ZQJBgV-SddVle-jIe6Vq1ailO_AFk4bxq7eMQbOpYkpmm3QE6gaGnOY3mcGlWXBE3LJczAxbWhMR3sk9k_-.jpg',
  'i4': 'kaka pics/AMB0mdXTakUuu6WOhwGDhYaPfYEHfzm0O6OSLOvs1Bnjs4mbS5f3bWiFJHTe8ixbcrfSSBoKdISSnpolsMeUK7NH07p1ZunF3D6I3VVMDInS2pZ4WwJXajo-u1PtdmPZaSKkkmhnrFfM55YOE9vton94EwFV-EIVWOK4-UL8ZD1Cx4VZaxgARpd5aGDHuRrE.jpg',
  'i5': 'kaka pics/DTeajjF6_o_1500x.jpg',
  'i6': 'kaka pics/IqSfKRUay9MKQzNUljURl_rTdcguK9qNLxQ6YX6NKmniq91jJYouvrSlZuVfnocNJtvkQpbNws0on4Lgwhb9KMkb16HJ10Z3RnkxV9zurL4IcZ0t6rGuVvWvyxGUhksJr3rNMxtUvWMZIsJ2Y41FS2jnQvySuXLRhEbFfcmQ6OAg9Y0kP5kXFjQFS0qMEfnl.jpg',
  'i7': 'kaka pics/OIP.jpg',
  'i8': 'kaka pics/Y7zWFEKaBbI2SWqdBlr_WHyTgM55CYgjn0XpjmG8S-JivXYNg4UOXWQp_FpBQhP6GbHDkncGXfhinlVHyxx_cXiLD3GVH61tj8acU89oTOEVU5VHZhMYkCd9y265D--X-uHukgV06UU4ZHNTmUvaPBgWhHQfB19r06lP8plhuHbF6Nm8olhqce2Sigv5t_xt.jpg',
  'i9': 'kaka pics/iuLHDhhOIYZrbLibsWjr2LSkGRLQGCdZLoqQfQYHH1KMYGWyMHKbbglEHwcryiCFc5AuThMGg_MJ4H8QIRbJTsPH16HS_lGuCTmy9_C2mC5Vc88OoVVb2YZYfwu2o6jSv0WZN51K8TLiKBw4GRhLnNUgEtksUXw2-yylgpOAKqoVoAA-_91inU7lWdUqe9zG.jpg',
  'i10': 'kaka pics/nSjeEvby9MqtjoO3sD2LqSUa2L-aKYvLkE_iHtzcCIsPYiN5OZDh_3vOw2220I0my4N_cAlHWkqDAlPhcF-O1I0vHpi8lr-J6Jm51eRm9kJK1g3GidSZu7FjpLbNrCV95WPSSlQK5OtguHjpzgqdEFHNyD6FX_KnC2pSaE1r8UfsYDQkcRDdAY2Amm8D7At_.jpg',
  'i11': 'kaka pics/noRGt9v9w1VKM8F5pZG9H1RTyc2s7qD1MMd5ltiKsJWxFIRq-0m84hvNIrsPUb3SPbuGpssvyBF1owhgIjaRRm76TR--_-Bt6Sl2iLkC9Q-9RehGCCRO6L2qSJp9beWvUwEGokgdFqbwLnxFtJSrzR2_VXLrM9C13fFPGjp-49GEaDCaJUg1bI0w3JgZxVki.jpg',
  'i12': 'kaka pics/sp9vZnKFi0UQ6B56kn7wT3c-d_tfSjo6bvmbw7i3u4nRvQYe9QBv2XrRhHTS8PSjgGOHV4ux6thmy3ePVFT8OyTgs1w9IsFlDTDfEWYvib1FQ0j7Npo73fmeclomf0c5Bu8q1kYpG6WQzvnDTnLr-RDl6EJvaJnNDSaslfs-HRxLVAi_0q31WXcw5URF96kz.jpg'
};

document.querySelectorAll('img[data-img]').forEach(img => {
  const key = img.getAttribute('data-img');
  if (imageMap[key]) {
    img.src = imageMap[key];
  }
});

// === HEADER SCROLL ===
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// === MOBILE MENU ===
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('active', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// === SCROLL REVEAL ===
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => io.observe(el));

// === SMOOTH SCROLL FOR NAV LINKS ===
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = document.getElementById('header').offsetHeight;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});

// === GALLERY LIGHTBOX (simple) ===
const galleryItems = document.querySelectorAll('.gallery__item');
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const lightbox = document.createElement('div');
    lightbox.style.cssText = `position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:zoom-out;padding:20px;`;
    const imgEl = document.createElement('img');
    imgEl.src = img.src;
    imgEl.style.cssText = `max-width:90vw;max-height:90vh;border-radius:10px;object-fit:contain;`;
    lightbox.appendChild(imgEl);
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    lightbox.addEventListener('click', () => {
      lightbox.remove();
      document.body.style.overflow = '';
    });
  });
});

// === HEADER TRANSPARENT AT TOP ===
if (window.scrollY <= 40) header.classList.remove('scrolled');

// === DARK MODE TOGGLE ===
const darkToggle = document.getElementById('dark-toggle');
if (localStorage.getItem('kaka-dark') === 'true') {
  document.body.classList.add('dark-mode');
}
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('kaka-dark', document.body.classList.contains('dark-mode'));
});
