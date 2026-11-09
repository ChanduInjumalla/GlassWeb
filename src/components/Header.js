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
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="scLogoBgHdr" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#2563EB"/>
                    <stop offset="100%" stop-color="#1E3A8A"/>
                  </linearGradient>
                  <linearGradient id="scGlassPaneHdr" x1="6" y1="6" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.45"/>
                    <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.1"/>
                  </linearGradient>
                </defs>
                <rect width="36" height="36" rx="9" fill="url(#scLogoBgHdr)"/>
                <rect x="6.5" y="6.5" width="16" height="16" rx="3" fill="url(#scGlassPaneHdr)" stroke="rgba(255,255,255,0.35)" stroke-width="1"/>
                <rect x="13.5" y="13.5" width="16" height="16" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.22)" stroke-width="1"/>
                <path d="M18 5.5L20.6 15.4L30.5 18L20.6 20.6L18 30.5L15.4 20.6L5.5 18L15.4 15.4L18 5.5Z" fill="#FFFFFF"/>
                <circle cx="18" cy="18" r="2.2" fill="#1E3A8A"/>
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
