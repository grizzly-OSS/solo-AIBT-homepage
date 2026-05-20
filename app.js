// app.js – Interactive behavior for AI Smart Battery Engineering site

// Scroll Active State Mapping
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('[data-nav]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('text-tertiary', 'border-l-4', 'border-tertiary', 'bg-tertiary-container/20', 'translate-x-1');
    link.classList.add('text-on-surface-variant');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('text-tertiary', 'border-l-4', 'border-tertiary', 'bg-tertiary-container/20', 'translate-x-1');
      link.classList.remove('text-on-surface-variant');
    }
  });
});

// Mobile Menu Placeholder (Toggle logic)
const menuBtn = document.getElementById('mobile-menu-toggle');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    alert('Mobile navigation would slide out here.');
  });
}

// Form submission micro‑interaction
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    btn.innerText = 'SENDING...';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerText = 'SENT SUCCESSFULLY';
      btn.classList.replace('bg-tertiary', 'bg-secondary-container');
      setTimeout(() => {
        btn.innerText = originalText;
        btn.classList.replace('bg-secondary-container', 'bg-tertiary');
        btn.disabled = false;
        e.target.reset();
      }, 2000);
    }, 1000);
  });
}
