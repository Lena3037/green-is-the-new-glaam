(() => {
  const intro = document.querySelector('#intro');
  const skip = document.querySelector('[data-skip]');
  let introTimer;
  const finishIntro = () => {
    intro.classList.add('is-done');
    window.setTimeout(() => intro.remove(), 850);
  };
  const startIntro = () => {
    requestAnimationFrame(() => intro.classList.add('is-open'));
    introTimer = window.setTimeout(finishIntro, 2600);
  };
  skip?.addEventListener('click', () => { clearTimeout(introTimer); finishIntro(); });
  window.addEventListener('load', startIntro, { once: true });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  const sections = [...document.querySelectorAll('[data-section]')];
  const navLinks = [...document.querySelectorAll('[data-nav]')];
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const code = entry.target.dataset.section;
      navLinks.forEach(link => link.classList.toggle('active', link.dataset.nav === code));
    });
  }, { threshold: 0.25, rootMargin: '-10% 0px -55% 0px' });
  sections.forEach(s => navObserver.observe(s));

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) {
    let ticking = false;
    const parallax = () => {
      document.querySelectorAll('.parallax-wrap').forEach(wrap => {
        const rect = wrap.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > innerHeight) return;
        const img = wrap.querySelector('.parallax-image');
        const progress = (rect.top + rect.height / 2 - innerHeight / 2) / innerHeight;
        img.style.transform = `scale(1.055) translate3d(0,${progress * -18}px,0)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(parallax); ticking = true; }
    }, { passive: true });
    parallax();
  }

  const dialog = document.querySelector('#lightbox');
  const lightboxImg = dialog.querySelector('img');
  document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt || '';
      dialog.showModal();
    });
  });
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
})();
