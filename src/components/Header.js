import { BUSINESS, GLASS_SERVICES, UPVC_SERVICES, ALUMINIUM_SERVICES, METAL_SERVICES } from '../data/services.js';
import { navigate } from '../router.js';

/* ── helpers ─────────────────────────────────── */
const chevron = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`;

function buildNavItem(label, hubUrl, services, viewAllLabel) {
  return `
    <div class="nav-item">
      <a href="${hubUrl}" class="nav-link has-dd" data-route="${hubUrl}">
        ${label} ${chevron}
      </a>
      <div class="nav-dropdown" role="menu">
        <div class="nav-dd-grid">
          ${services.map(s => `
            <a href="/${s.slug}/" class="nav-dd-link" data-route="/${s.slug}/" role="menuitem">${s.title}</a>
          `).join('')}
        </div>
        <a href="${hubUrl}" class="nav-dd-viewall" data-route="${hubUrl}">${viewAllLabel} →</a>
      </div>
    </div>`;
}

/* ── render ───────────────────────────────────── */
export function renderHeader() {
  const headerEl = document.getElementById('site-header');
  if (!headerEl) return;

  headerEl.innerHTML = `
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <nav class="site-header" aria-label="Main navigation">
      <div class="container">
        <div class="header-inner">
          <a href="/" class="site-logo" aria-label="Star Creative — Home" data-route="/">
            <span class="logo-mark" aria-hidden="true">
              <svg viewBox="10 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M58.73,95.54 Q61.65,95.15 63.52,94.64 Q65.38,94.12 66.74,93.62 Q68.10,93.11 70.40,91.86 Q72.70,90.61 73.95,89.71 Q75.19,88.80 75.83,88.19 Q76.47,87.58 73.89,89.23 Q71.31,90.88 68.91,91.94 Q66.51,93.00 63.53,93.83 Q60.56,94.66 59.30,94.85 Q58.04,95.03 56.49,95.11 Q54.94,95.19 53.41,95.15 Q51.88,95.11 50.55,94.93 Q49.23,94.76 46.53,94.04 Q43.83,93.33 41.21,92.23 Q38.58,91.13 36.13,89.60 Q33.67,88.07 32.51,87.14 Q31.35,86.20 30.07,84.94 Q28.79,83.67 27.10,81.51 Q25.41,79.34 24.17,77.25 Q22.93,75.17 21.74,72.29 Q20.55,69.40 19.86,66.65 Q19.17,63.89 18.91,61.34 Q18.66,58.79 18.71,55.08 Q18.76,51.37 19.12,48.88 Q19.49,46.40 20.18,44.17 Q20.88,41.94 21.83,39.91 Q22.78,37.88 23.70,36.40 Q24.62,34.91 25.89,33.38 Q27.16,31.85 28.45,30.63 Q29.73,29.41 31.32,28.20 Q32.90,26.99 34.73,25.98 Q36.57,24.96 38.19,24.23 Q39.82,23.49 40.06,23.49 Q40.31,23.48 40.95,25.10 Q41.60,26.72 42.28,27.79 Q42.97,28.86 44.11,30.08 Q45.26,31.30 46.72,32.51 Q48.19,33.71 49.35,34.41 Q50.50,35.11 52.51,36.05 Q54.52,36.99 59.58,38.99 Q64.64,40.99 66.94,42.07 Q69.24,43.14 71.24,44.25 Q73.25,45.36 75.13,46.80 Q77.01,48.24 78.21,49.53 Q79.42,50.82 80.33,52.36 Q81.24,53.91 81.77,55.52 Q82.30,57.14 82.48,59.10 Q82.67,61.07 82.63,62.26 Q82.58,63.45 82.40,64.54 Q82.23,65.63 81.92,66.72 Q81.60,67.81 80.93,69.23 Q80.25,70.66 79.24,71.88 Q78.23,73.11 77.42,73.79 Q76.61,74.46 75.69,75.07 Q74.76,75.68 73.22,76.41 Q71.68,77.15 69.91,77.61 Q68.14,78.07 66.05,78.23 Q63.96,78.38 62.27,78.26 Q60.58,78.15 58.33,77.64 Q56.08,77.14 53.68,76.08 Q51.28,75.02 49.69,73.99 Q48.09,72.95 46.72,71.70 Q45.35,70.44 44.32,69.07 Q43.29,67.69 42.57,66.26 Q41.86,64.83 41.23,62.74 Q40.60,60.65 40.50,61.21 Q40.39,61.76 40.52,68.45 Q40.64,75.15 40.82,75.24 Q41.01,75.33 41.18,75.21 Q41.34,75.10 41.41,74.03 Q41.49,72.97 41.71,72.53 Q41.93,72.09 42.23,71.92 Q42.54,71.75 43.11,71.76 Q43.67,71.77 44.65,72.16 Q45.62,72.54 48.52,74.23 Q51.42,75.93 53.53,76.80 Q55.64,77.66 57.73,78.20 Q59.82,78.74 62.29,78.93 Q64.75,79.13 66.55,78.97 Q68.35,78.81 69.79,78.46 Q71.23,78.10 72.68,77.50 Q74.14,76.90 75.70,75.96 Q77.25,75.02 78.45,74.02 Q79.64,73.03 80.76,71.70 Q81.88,70.37 82.95,68.50 Q84.03,66.64 84.56,65.07 Q85.09,63.50 85.34,61.72 Q85.58,59.93 85.48,57.74 Q85.38,55.55 84.93,53.51 Q84.48,51.48 83.81,49.94 Q83.14,48.41 82.38,47.29 Q81.62,46.17 80.34,44.73 Q79.05,43.30 77.46,41.96 Q75.86,40.63 74.26,39.58 Q72.66,38.53 69.13,36.78 Q65.60,35.04 61.55,33.53 Q57.50,32.02 54.98,30.95 Q52.46,29.88 50.53,28.79 Q48.60,27.69 47.15,26.39 Q45.70,25.08 45.05,24.19 Q44.41,23.30 43.82,21.83 Q43.23,20.37 42.96,18.74 Q42.70,17.11 42.82,15.88 Q42.94,14.66 43.45,13.18 Q43.97,11.70 44.70,10.60 Q45.44,9.49 46.39,8.69 Q47.33,7.88 49.07,6.95 Q50.81,6.02 52.60,5.49 Q54.39,4.96 56.11,4.79 Q57.83,4.62 59.47,4.74 Q61.12,4.85 62.29,5.08 Q63.45,5.31 64.71,5.81 Q65.96,6.31 67.52,7.24 Q69.09,8.17 70.41,9.25 Q71.74,10.34 72.64,11.36 Q73.54,12.39 74.19,13.40 Q74.85,14.41 75.44,15.75 Q76.03,17.08 76.46,18.63 Q76.88,20.17 76.98,20.30 Q77.09,20.43 77.17,20.25 Q77.26,20.07 77.28,19.33 Q77.30,18.60 77.26,12.25 Q77.23,5.90 77.19,5.56 Q77.16,5.23 77.01,5.06 Q76.85,4.90 76.67,4.93 Q76.48,4.96 76.39,5.10 Q76.31,5.24 76.29,6.00 Q76.27,6.77 76.13,7.29 Q76.00,7.82 75.79,8.05 Q75.59,8.28 75.29,8.39 Q74.98,8.49 74.29,8.35 Q73.60,8.21 71.84,7.39 Q70.08,6.58 68.14,5.88 Q66.20,5.19 64.61,4.81 Q63.03,4.42 61.31,4.22 Q59.58,4.02 57.62,4.07 Q55.65,4.11 53.97,4.45 Q52.30,4.78 50.87,5.33 Q49.45,5.88 47.93,6.77 Q46.41,7.65 45.54,8.36 Q44.68,9.08 44.02,9.82 Q43.36,10.56 42.77,11.42 Q42.18,12.28 41.79,13.07 Q41.40,13.86 41.08,14.76 Q40.76,15.67 40.54,16.72 Q40.32,17.77 40.25,20.28 Q40.18,22.79 37.54,23.89 Q34.89,24.99 32.96,26.10 Q31.02,27.21 29.32,28.44 Q27.61,29.67 25.70,31.52 Q23.79,33.37 22.50,34.98 Q21.21,36.58 19.78,38.93 Q18.34,41.29 17.60,42.98 Q16.86,44.67 16.17,46.92 Q15.48,49.18 15.14,50.93 Q14.80,52.68 14.61,55.08 Q14.41,57.48 14.46,59.67 Q14.50,61.87 14.85,64.33 Q15.19,66.80 15.87,69.23 Q16.54,71.66 17.26,73.44 Q17.99,75.21 18.91,76.87 Q19.83,78.53 21.35,80.64 Q22.87,82.76 24.62,84.56 Q26.36,86.37 27.54,87.33 Q28.71,88.30 30.91,89.73 Q33.11,91.16 34.98,92.06 Q36.84,92.96 39.06,93.72 Q41.28,94.48 43.53,94.98 Q45.78,95.49 48.44,95.74 Q51.09,95.98 53.45,95.95 Q55.80,95.92 58.73,95.54 Z" fill="currentColor"/>
              </svg>
            </span>
            <span class="logo-text-group">
              <span class="logo-name">Star <span class="logo-name-accent">Creative</span></span>
              <span class="logo-tagline">Glass · UPVC · Interiors</span>
            </span>
          </a>

          <nav class="main-nav" aria-label="Primary navigation">
            ${buildNavItem('Glass', '/glass-services-hyderabad/', GLASS_SERVICES, 'View All Glass Services')}
            ${buildNavItem('UPVC', '/upvc-windows-doors-hyderabad/', UPVC_SERVICES, 'View All UPVC')}
            ${buildNavItem('Aluminium', '/aluminium-doors-windows-hyderabad/', ALUMINIUM_SERVICES, 'View All Aluminium')}
            ${buildNavItem('Metal', '/iron-metal-fabrication-hyderabad/', METAL_SERVICES, 'View All Metal')}
            <a href="/projects/" class="nav-link" data-route="/projects/">Projects</a>
            <a href="/about/" class="nav-link" data-route="/about/">About</a>
            <a href="/contact/" class="nav-link" data-route="/contact/">Contact</a>
          </nav>

          <div class="header-cta">
            <a href="tel:${BUSINESS.phone.replace(/[^0-9+]/g, '')}" class="header-phone" aria-label="Call Star Creative">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1.06h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call
            </a>
            <a href="/get-quote/" class="btn btn-primary btn-sm" data-route="/get-quote/" id="header-quote-btn">
              Get Quote
            </a>
          </div>

          <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Navigation -->
    <div class="mobile-nav" id="mobile-nav" role="dialog" aria-label="Mobile navigation" aria-modal="true" hidden>
      <div class="mobile-nav-section" style="padding-top:0.5rem;">
        <div class="mobile-nav-title">Browse by Category</div>
        <div class="mobile-cat-grid">
          <a href="/glass-services-hyderabad/" class="mobile-cat-card" data-route="/glass-services-hyderabad/">
            <span class="mobile-cat-name">Glass Services</span>
            <span class="mobile-cat-count">${GLASS_SERVICES.length} services →</span>
          </a>
          <a href="/upvc-windows-doors-hyderabad/" class="mobile-cat-card" data-route="/upvc-windows-doors-hyderabad/">
            <span class="mobile-cat-name">UPVC Windows</span>
            <span class="mobile-cat-count">${UPVC_SERVICES.length} services →</span>
          </a>
          <a href="/aluminium-doors-windows-hyderabad/" class="mobile-cat-card" data-route="/aluminium-doors-windows-hyderabad/">
            <span class="mobile-cat-name">Aluminium</span>
            <span class="mobile-cat-count">${ALUMINIUM_SERVICES.length} services →</span>
          </a>
          <a href="/iron-metal-fabrication-hyderabad/" class="mobile-cat-card" data-route="/iron-metal-fabrication-hyderabad/">
            <span class="mobile-cat-name">Iron & Metal</span>
            <span class="mobile-cat-count">${METAL_SERVICES.length} services →</span>
          </a>
        </div>
      </div>
      <div class="mobile-nav-divider"></div>
      <div class="mobile-nav-section">
        <div class="mobile-nav-title">Popular Services</div>
        <div class="mobile-sub-grid">
          ${[
            ...GLASS_SERVICES.slice(0, 4),
            ...UPVC_SERVICES.slice(0, 2),
            ...ALUMINIUM_SERVICES.slice(0, 2),
            ...METAL_SERVICES.slice(0, 2),
          ].map(s => `<a href="/${s.slug}/" class="mobile-sub-chip" data-route="/${s.slug}/">${s.title}</a>`).join('')}
        </div>
      </div>
      <div class="mobile-nav-divider"></div>
      <div class="mobile-nav-section">
        <div class="mobile-nav-title">Company & Portfolio</div>
        <div class="mobile-links-grid">
          <a href="/projects/" class="mobile-nav-link" data-route="/projects/">Projects <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></a>
          <a href="/about/" class="mobile-nav-link" data-route="/about/">About Us <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></a>
          <a href="/process/" class="mobile-nav-link" data-route="/process/">Our Process <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></a>
          <a href="/faq/" class="mobile-nav-link" data-route="/faq/">FAQs <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></a>
          <a href="/service-areas-hyderabad/" class="mobile-nav-link" data-route="/service-areas-hyderabad/">Service Areas <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></a>
          <a href="/contact/" class="mobile-nav-link" data-route="/contact/">Contact <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></a>
        </div>
      </div>
      <div class="mobile-nav-divider"></div>
      <div class="mobile-nav-section">
        <div class="mobile-nav-title">Quick Connect</div>
        <div class="mobile-nav-actions">
          <a href="tel:${BUSINESS.phone.replace(/[^0-9+]/g, '')}" class="mob-action-btn" aria-label="Call Star Creative">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1.06h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            Call
          </a>
          <a href="https://wa.me/${BUSINESS.whatsapp}?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20services." target="_blank" rel="noopener noreferrer" class="mob-action-btn wa" aria-label="Chat on WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
          <a href="/get-quote/" class="mob-action-btn cta" data-route="/get-quote/" aria-label="Get a free quote">
            Get Quote
          </a>
        </div>
      </div>
    </div>
  `;

  /* ── Mobile action bar (removed from bottom viewport; moved into hamburger menu) ── */
  const mobileBar = document.getElementById('mobile-action-bar');
  if (mobileBar) {
    mobileBar.innerHTML = '';
    mobileBar.style.display = 'none';
  }

  /* ── Header scroll effect ──────────────────── */
  updateHeaderScrollState();
  window.addEventListener('scroll', updateHeaderScrollState, { passive: true });

  /* ── Hamburger toggle ──────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileNavEl = document.getElementById('mobile-nav');

  hamburger?.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.querySelector('.site-header')?.classList.toggle('menu-open', isOpen);
    if (mobileNavEl) {
      mobileNavEl.hidden = !isOpen;
      mobileNavEl.classList.toggle('open', isOpen);
    }
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileNavEl?.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) {
      hamburger?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
      document.querySelector('.site-header')?.classList.remove('menu-open');
      mobileNavEl.hidden = true;
      mobileNavEl.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  /* ── Back to top ───────────────────────────── */
  const btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  updateActiveNavLink();
}

export function updateActiveNavLink() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('[data-route]').forEach(link => {
    const route = link.getAttribute('data-route');
    const isActive = route === currentPath || (route !== '/' && currentPath.startsWith(route));
    link.classList.toggle('active', isActive);
  });
}

export function updateHeaderScrollState() {
  const siteHeader = document.querySelector('.site-header');
  if (!siteHeader) return;
  const isHomepage = window.location.pathname === '/' || window.location.pathname === '/index.html';
  if (!isHomepage || window.scrollY > 40) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
}
