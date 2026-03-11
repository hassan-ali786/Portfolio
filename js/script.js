// ================== SCRIPT.JS – POLISHED ==================

// Elements
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// ================== THEME TOGGLE ==================
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
  body.classList.add(currentTheme);
  themeToggle.textContent = currentTheme === 'light' ? '☀' : '🌙';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  const theme = body.classList.contains('light') ? 'light' : 'dark';
  themeToggle.textContent = theme === 'light' ? '☀' : '🌙';
  localStorage.setItem('theme', theme);
});

// ================== MOBILE MENU ==================
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ================== ACTIVE LINK ON SCROLL ==================
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if(scrollY >= sectionTop) { current = section.getAttribute('id'); }
  });
  navItems.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === `#${current}`) { link.classList.add('active'); }
  });
});

// ================== SMOOTH SCROLL EFFECT ==================
navItems.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}); 