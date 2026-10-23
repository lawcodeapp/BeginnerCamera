// Beginner Cam website: sticky download bar, scroll reveals, gallery
// buttons, and "coming soon" for store links that are not set yet.
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  // Store links still holding a placeholder (YOUR_...) show as "soon"
  // instead of leading to a broken page. Set the real links in index.html.
  document.querySelectorAll('[data-store]').forEach(function (link) {
    if (link.getAttribute('href').indexOf('YOUR_') !== -1) {
      link.classList.add('is-soon');
      link.setAttribute('aria-disabled', 'true');
      link.removeAttribute('href');
    }
  });

  // Sticky bar: slides in once the hero's download buttons have scrolled
  // above the top of the screen, and out again when they come back.
  var bar = document.getElementById('sticky-cta');
  var trigger = document.getElementById('download');
  if (bar && trigger) {
    var barLinks = bar.querySelectorAll('a');
    var shown = false;
    var update = function () {
      var show = trigger.getBoundingClientRect().bottom < 0;
      if (show === shown) return;
      shown = show;
      bar.classList.toggle('is-visible', show);
      bar.setAttribute('aria-hidden', String(!show));
      barLinks.forEach(function (a) { a.tabIndex = show ? 0 : -1; });
    };
    var queued = false;
    window.addEventListener('scroll', function () {
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () { queued = false; update(); });
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  // Reveal on scroll, once per element.
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el, i) {
      // A small stagger for neighbours.
      el.style.transitionDelay = (i % 3) * 80 + 'ms';
      revealer.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  // Gallery arrows scroll by about one screenshot.
  var gallery = document.querySelector('.gallery');
  document.querySelectorAll('[data-scroll]').forEach(function (button) {
    button.addEventListener('click', function () {
      if (!gallery) return;
      var item = gallery.querySelector('.gallery__item');
      var step = item ? item.getBoundingClientRect().width + 28 : 280;
      gallery.scrollBy({ left: step * Number(button.dataset.scroll), behavior: 'smooth' });
    });
  });

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
