// Downeast 20/20 - Website Interactions

document.addEventListener('DOMContentLoaded', () => {
  // Scroll Reveal with IntersectionObserver
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '50px',
    threshold: 0.1
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

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Console branding
console.log('%cDowneast 20/20 Growth System', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cResearch-backed strategic analysis', 'font-size: 12px; color: #94a3b8;');
