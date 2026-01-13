// Downeast 20/20 - Website Interactions

document.addEventListener('DOMContentLoaded', () => {
  // Pause aurora animations during scroll for smoother performance
  let scrollTimeout;
  const body = document.body;

  window.addEventListener('scroll', () => {
    if (!body.classList.contains('is-scrolling')) {
      body.classList.add('is-scrolling');
    }
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      body.classList.remove('is-scrolling');
    }, 150);
  }, { passive: true });

  // Scroll Reveal with IntersectionObserver - Optimized for smooth scroll
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Use requestAnimationFrame for smoother DOM updates during scroll
        requestAnimationFrame(() => {
          entry.target.classList.add('revealed');
        });
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '100px 0px', // Trigger earlier for smoother reveals
    threshold: 0.05 // Lower threshold for faster triggering
  });

  document.querySelectorAll('[data-reveal]').forEach(el => {
    revealObserver.observe(el);
  });

  // Active Navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Smooth scroll for anchor links (use native CSS scroll-behavior instead)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

// Console branding
console.log('%cDowneast 20/20 Growth System', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cResearch-backed strategic analysis', 'font-size: 12px; color: #94a3b8;');
