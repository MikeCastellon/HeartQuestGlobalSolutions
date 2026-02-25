// HeartQuest Global Solutions - Shared Components

(function() {
  'use strict';

  const NAV_HTML = `
<nav id="site-nav">
  <a href="index.html" class="nav-logo">
    <img src="HQP-Logo.png" class="nav-logo-img" alt="HeartQuest Global Solutions">
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li class="nav-dropdown">
      <button class="nav-dropdown-toggle">Resources ▾</button>
      <div class="nav-dropdown-menu">
        <a href="updates.html">HQP Updates</a>
        <a href="tutorials.html">HQP Tutorials</a>
      </div>
    </li>
    <li class="nav-dropdown">
      <button class="nav-dropdown-toggle">Education ▾</button>
      <div class="nav-dropdown-menu">
        <a href="advanced-education.html">Advanced Education</a>
        <a href="video-library.html">Video Library (Paid)</a>
      </div>
    </li>
    <li><a href="products.html">Products</a></li>
    <li class="nav-dropdown">
      <button class="nav-dropdown-toggle">Support ▾</button>
      <div class="nav-dropdown-menu">
        <a href="guided-setup.html">Guided Setup</a>
        <a href="contact.html">Contact Us</a>
      </div>
    </li>
    <li><a href="guided-setup.html" class="nav-cta">Book Setup</a></li>
  </ul>
  <button class="mobile-menu-toggle" aria-label="Toggle menu">☰</button>
</nav>`;

  const FOOTER_HTML = `
<footer id="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="nav-logo">
        <img src="HQP-Logo.png" class="nav-logo-img nav-logo-img--footer" alt="HeartQuest Global Solutions">
      </div>
      <p>Educating health professionals for over 15 years on advanced heart rate variability concepts. Home of the HeartQuest Professional advanced HRV and Functional Assessment Tool.</p>
    </div>
    <div class="footer-col">
      <h4>Resources</h4>
      <ul class="footer-links">
        <li><a href="updates.html">HQP Updates</a></li>
        <li><a href="tutorials.html">HQP Tutorials</a></li>
        <li><a href="advanced-education.html">Advanced Education</a></li>
        <li><a href="video-library.html">Video Library</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Support</h4>
      <ul class="footer-links">
        <li><a href="products.html">Products</a></li>
        <li><a href="guided-setup.html">Guided Setup</a></li>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="https://www.hqp-global.com/" target="_blank">HQP-Global.com</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <div class="footer-contact-line">📞 <a href="tel:+14156466112">+1 (415) 646-6112</a></div>
      <div class="footer-contact-line">📧 <a href="mailto:Info@hqp-global.com">Info@hqp-global.com</a></div>
      <div class="footer-contact-line" style="margin-top:12px; font-size:0.82rem; color:rgba(255,255,255,0.4);">Technical Support:</div>
      <div class="footer-contact-line">📞 <a href="tel:+16322520968">+1 (632) 252-0968</a></div>
      <div class="footer-contact-line">📧 <a href="mailto:shawn@hqp-global.com">shawn@hqp-global.com</a></div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-bottom-links">
      <a href="terms.html">Terms &amp; Conditions</a>
      <a href="privacy.html">Privacy Policy</a>
      <a href="contact.html">Contact Form</a>
      <a href="http://bb4c8ba4-75ed-4fba-9f3c-fde5c7fcc78c.goaffpro.com/create-account" target="_blank">Join Affiliate Program</a>
    </div>
    <div class="footer-disclaimer">
      © 2024 HeartQuest Global Solutions, LLC &nbsp;|&nbsp; © 2024 Dr. Michael Kessler, D.C., C.C.S.P. &nbsp;|&nbsp; All Rights Reserved.<br>
      "The statements and content contained on this domain have not been evaluated by the Food and Drug Administration. This website as well as educational content and products referenced herein, are not intended to diagnose, treat, cure, or prevent any disease."
    </div>
  </div>
</footer>`;

  function injectNav() {
    const placeholder = document.getElementById('nav-placeholder');
    if (placeholder) {
      placeholder.outerHTML = NAV_HTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
    }

    // Highlight active link
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#site-nav a').forEach(a => {
      if (a.getAttribute('href') === currentPage) {
        a.classList.add('active');
      }
    });

    // Mobile toggle
    const toggle = document.querySelector('.mobile-menu-toggle');
    const links = document.querySelector('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', () => {
        links.classList.toggle('open');
        toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
      });
    }

    // Mobile dropdown toggles
    document.querySelectorAll('.nav-dropdown-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.nav-dropdown').classList.toggle('open');
      });
    });

    // Scrolled class
    window.addEventListener('scroll', () => {
      document.getElementById('site-nav').classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  function injectFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
      placeholder.outerHTML = FOOTER_HTML;
    } else {
      document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }
  }

  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    injectNav();
    injectFooter();
    initReveal();
  });
})();
