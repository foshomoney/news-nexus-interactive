// Import global styles
import './styles/tailwind.css';
// Import custom animation styles (can be empty for now)
import './styles/animations.css';

// Log to console to confirm main.js is loaded and running
console.log('TechNova main.js loaded successfully! ✨');

// Future: Initialize Alpine.js or other core JS libraries here
// Example for Alpine.js:
// import Alpine from 'alpinejs';
// window.Alpine = Alpine;
// Alpine.start();

// Basic DOM manipulation example (optional, for testing)
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    const existingHeader = app.querySelector('h1');
    if (existingHeader) {
        const poweredBy = document.createElement('p');
        poweredBy.textContent = 'Powered by Vite, Tailwind CSS, and TechNova ingenuity.';
        poweredBy.style.textAlign = 'center';
        poweredBy.style.marginTop = '1rem';
        existingHeader.insertAdjacentElement('afterend', poweredBy);
    }
  }
});
