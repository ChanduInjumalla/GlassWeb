/**
 * Star Creative — Client-Side Router
 * Hash-free path-based routing with History API
 */

import { updateActiveNavLink, updateHeaderScrollState } from './components/Header.js';

const routes = {};
let currentPath = null;

export function registerRoute(path, handler) {
  routes[path] = handler;
}

export function navigate(path, pushState = true) {
  if (currentPath === path) return;
  currentPath = path;

  if (pushState) {
    window.history.pushState({ path }, '', path);
  }

  // Manage body class for page type
  const isHome = path === '/' || path === '/index.html';
  document.body.classList.toggle('is-homepage', isHome);

  resolveRoute(path);
  updateActiveNavLink();

  // Scroll to top on navigation
  window.scrollTo(0, 0);

  // Update header solid/transparent state
  updateHeaderScrollState();
}

function resolveRoute(path) {
  // Exact match
  if (routes[path]) {
    routes[path]();
    return;
  }

  // Trailing slash normalisation
  const withSlash = path.endsWith('/') ? path : path + '/';
  const withoutSlash = path.endsWith('/') ? path.slice(0, -1) : path;

  if (routes[withSlash]) {
    routes[withSlash]();
    return;
  }

  if (routes[withoutSlash]) {
    routes[withoutSlash]();
    return;
  }

  // Service page pattern match
  const serviceMatch = findServiceRoute(path);
  if (serviceMatch) {
    serviceMatch();
    return;
  }

  // 404
  render404();
}

function findServiceRoute(path) {
  // Try to find a dynamic service route
  const slug = path.replace(/^\/|\/$/g, '');
  const dynamicKey = `/:service`;
  if (routes[dynamicKey]) {
    return () => routes[dynamicKey](slug);
  }
  return null;
}

export function initRouter() {
  // Intercept all internal link clicks
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[data-route]');
    if (!anchor) return;

    const route = anchor.getAttribute('data-route');
    if (!route) return;

    e.preventDefault();
    navigate(route);
  });

  // Browser back/forward
  window.addEventListener('popstate', (e) => {
    const path = e.state?.path || window.location.pathname;
    navigate(path, false);
  });

  // Initial load
  navigate(window.location.pathname, false);
}

function render404() {
  const content = document.getElementById('page-content');
  if (!content) return;

  updatePageMeta({
    title: '404 — Page Not Found | Star Creative Hyderabad',
    description: 'Page not found.',
    noindex: true,
  });

  content.innerHTML = `
    <section class="page-hero" style="min-height: 70vh; display:flex; align-items:center;">
      <div class="page-hero-overlay" style="background: linear-gradient(135deg, rgba(14,14,16,0.98) 0%, rgba(28,28,30,0.95) 100%)"></div>
      <div class="container" style="position:relative; z-index:2; text-align:center;">
        <div class="section-label" style="justify-content:center; margin-bottom:1.5rem;">404 Error</div>
        <h1 class="display-xl text-on-dark" style="margin-bottom:1rem;">Page Not Found</h1>
        <p class="body-lg" style="color:rgba(255,255,255,0.6); max-width:480px; margin:0 auto 2.5rem;">
          This page doesn't exist. Explore our services or get in touch with the Star Creative team.
        </p>
        <div class="flex flex-center gap-4" style="flex-wrap:wrap;">
          <a href="/" class="btn btn-primary btn-lg" data-route="/">Go to Homepage</a>
          <a href="/contact/" class="btn btn-outline btn-lg" data-route="/contact/">Contact Us</a>
        </div>
      </div>
    </section>
  `;
}

export function updatePageMeta({ title, description, canonical, noindex = false }) {
  // Title
  document.title = title || 'Star Creative | UPVC, Glass & Aluminium in Hyderabad';

  // Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && description) metaDesc.setAttribute('content', description);

  // Canonical
  const canonicalLink = document.getElementById('canonical-link');
  if (canonicalLink && canonical) {
    canonicalLink.setAttribute('href', canonical);
  } else if (canonicalLink) {
    canonicalLink.setAttribute('href', `https://www.starcreativehyd.com${window.location.pathname}`);
  }

  // Robots
  let metaRobots = document.querySelector('meta[name="robots"]');
  if (metaRobots) {
    metaRobots.setAttribute('content', noindex ? 'noindex, follow' : 'index, follow');
  }

  // OG tags
  const ogTitle = document.getElementById('og-title');
  const ogDesc = document.getElementById('og-desc');
  const ogUrl = document.getElementById('og-url');
  if (ogTitle && title) ogTitle.setAttribute('content', title);
  if (ogDesc && description) ogDesc.setAttribute('content', description);
  if (ogUrl) ogUrl.setAttribute('content', `https://www.starcreativehyd.com${window.location.pathname}`);
}

export function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

export function initFAQ(container = document) {
  container.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      container.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-answer')?.classList.remove('open');
        openItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        answer.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', `faq-answer-${Math.random().toString(36).slice(2, 7)}`);
  });
}

export function initBeforeAfter(container = document) {
  container.querySelectorAll('.before-after').forEach(ba => {
    const divider = ba.querySelector('.ba-divider');
    const beforeInner = ba.querySelector('.ba-before-inner');
    if (!divider || !beforeInner) return;

    let isDragging = false;
    let startX = 0;
    let currentPct = 50;

    function setPosition(pct) {
      currentPct = Math.max(5, Math.min(95, pct));
      divider.style.left = currentPct + '%';
      beforeInner.style.width = currentPct + '%';
    }

    setPosition(50);

    function getX(e) {
      return e.touches ? e.touches[0].clientX : e.clientX;
    }

    divider.addEventListener('mousedown', (e) => { isDragging = true; e.preventDefault(); });
    divider.addEventListener('touchstart', (e) => { isDragging = true; }, { passive: true });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const rect = ba.getBoundingClientRect();
      const pct = ((getX(e) - rect.left) / rect.width) * 100;
      setPosition(pct);
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const rect = ba.getBoundingClientRect();
      const pct = ((getX(e) - rect.left) / rect.width) * 100;
      setPosition(pct);
    }, { passive: true });

    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('touchend', () => { isDragging = false; });
  });
}
