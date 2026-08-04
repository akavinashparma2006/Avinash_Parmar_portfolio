/* ═══════════════════════════════════════════════════
   AVINASH PARMAR — PORTFOLIO
   main.js  |  v1.0.0
═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Intersection Observer (scroll reveals) ── */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('vis');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* Project cards — staggered entrance */
  document.querySelectorAll('.proj-card').forEach((card, i) => {
    card.style.transitionDelay = (i * 0.13) + 's';
    io.observe(card);
  });

  /* ── Skill bars ── */
  const barsEl = document.getElementById('skill-bars');
  if (barsEl) {
    const barsIO = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.bar-fill').forEach(bar => {
            setTimeout(() => bar.style.width = bar.dataset.w + '%', 150);
          });
          barsIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    barsIO.observe(barsEl);
  }

  /* ── About — char-by-char reveal ── */
  const aboutBody = document.getElementById('about-body');
  if (aboutBody) {
    const raw = aboutBody.textContent;
    aboutBody.innerHTML = raw.split('').map(c =>
      c === ' ' ? ' ' : `<span class="ch">${c}</span>`
    ).join('');
    const chars = aboutBody.querySelectorAll('.ch');

    const updateChars = () => {
      const rect = aboutBody.getBoundingClientRect();
      const p = Math.max(0, Math.min(1,
        (1 - rect.bottom / (window.innerHeight + rect.height)) * 2.6
      ));
      chars.forEach((c, i) => c.classList.toggle('lit', p > i / chars.length));
    };
    window.addEventListener('scroll', updateChars, { passive: true });
    updateChars();
  }

  /* ── Active nav on scroll ── */
  const sections = ['about', 'skills', 'projects', 'resume', 'education', 'certifications', 'activities', 'contact'];
  const navLinks = document.querySelectorAll('.navbar a:not(.cta)');

  const navIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) navIO.observe(el);
  });

  /* ── Smooth scroll for navbar links ── */
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ── Resume PDF tab fallback message ── */
  const pdfObject = document.getElementById('resume-pdf');
  if (pdfObject) {
    pdfObject.addEventListener('error', () => {
      const fallback = document.getElementById('pdf-fallback');
      if (fallback) fallback.style.display = 'flex';
    });
  }

  console.log('%c Avinash Parmar Portfolio v1.0.0', 'color:#DEDBC8;font-weight:700;font-size:14px;');

});
