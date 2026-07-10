/**
 * Serial Criminologist — global interaction layer.
 * Framework-free navigation, current-page state, and anchor scrolling.
 */

(function() {
  'use strict';

  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  function closeNavigation() {
    if (!navToggle || !mainNav) return;
    navToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('open');
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function() {
      const willOpen = !mainNav.classList.contains('open');
      mainNav.classList.toggle('open', willOpen);
      navToggle.setAttribute('aria-expanded', String(willOpen));
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && mainNav.classList.contains('open')) {
        closeNavigation();
        navToggle.focus();
      }
    });

    mainNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 980) closeNavigation();
      });
    });

    window.addEventListener('resize', function() {
      if (window.innerWidth > 980) closeNavigation();
    });
  }

  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a, .footer-nav a').forEach(function(link) {
    const linkUrl = new URL(link.href, window.location.href);
    const linkFile = linkUrl.pathname.split('/').pop() || 'index.html';
    if (linkFile === currentFile && !linkUrl.hash) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
