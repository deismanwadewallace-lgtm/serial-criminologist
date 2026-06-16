/**
 * Serial Criminologist — Global JavaScript
 * Minimal, framework-free. Handles nav toggle and component injection.
 * Designed for 40-year persistence and easy migration.
 */

(function() {
  'use strict';

  // === MOBILE NAVIGATION ===
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('active');
    });

    // Close nav on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('active');
        navToggle.focus();
      }
    });

    // Close nav when clicking a link (mobile)
    mainNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          navToggle.setAttribute('aria-expanded', 'false');
          mainNav.classList.remove('active');
        }
      });
    });
  }

  // === COMPONENT INJECTION (optional, for future templating) ===
  // Currently not used — components are hand-copied for byte-identical consistency.
  // To enable dynamic injection, uncomment below and create header.html / footer.html
  /*
  function injectComponent(selector, path) {
    const elements = document.querySelectorAll('[data-include="' + selector + '"]');
    if (!elements.length) return;

    fetch(path)
      .then(function(response) {
        if (!response.ok) throw new Error('Failed to load ' + path);
        return response.text();
      })
      .then(function(html) {
        elements.forEach(function(el) {
          el.innerHTML = html;
        });
      })
      .catch(function(err) {
        console.error('Component injection failed:', err);
      });
  }

  // Usage: injectComponent('header', '/components/header.html');
  // Usage: injectComponent('footer', '/components/footer.html');
  */

  // === ACTIVE NAV HIGHLIGHTING ===
  const currentPath = window.location.pathname;
  document.querySelectorAll('.main-nav a, .footer-nav a').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href)) {
      link.classList.add('active');
    }
  });

  // === SMOOTH SCROLL FOR ANCHOR LINKS ===
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  console.log('Serial Criminologist — loaded');
})();
