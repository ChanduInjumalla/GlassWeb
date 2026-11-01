import { BUSINESS, SERVICE_HUBS, GLASS_SERVICES } from '../data/services.js';

export function renderFooter() {
  const footerEl = document.getElementById('site-footer');
  if (!footerEl) return;

  const year = new Date().getFullYear();

  footerEl.innerHTML = `
    <div class="site-footer-inner">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <span class="logo-name">Star Creative</span>
            <p class="footer-brand-desc">
              Architectural glass, UPVC windows & doors, aluminium systems and iron/metal fabrication — measured, fabricated and installed in Hyderabad.
            </p>
            <div class="footer-social">
              <a href="${BUSINESS.socialLinks?.instagram || '#'}" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="${BUSINESS.socialLinks?.facebook || '#'}" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://wa.me/${BUSINESS.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              </a>
            </div>
          </div>

          <div class="footer-col">
            <div class="footer-col-title">Services</div>
            ${SERVICE_HUBS.map(h => `<a href="/${h.slug}/" class="footer-link" data-route="/${h.slug}/">${h.title}</a>`).join('')}
            <a href="/projects/" class="footer-link" data-route="/projects/">Our Projects</a>
          </div>

          <div class="footer-col">
            <div class="footer-col-title">Popular</div>
            ${GLASS_SERVICES.slice(0, 5).map(s => `<a href="/${s.slug}/" class="footer-link" data-route="/${s.slug}/">${s.title}</a>`).join('')}
          </div>

          <div class="footer-col">
            <div class="footer-col-title">Company</div>
            <a href="/about/" class="footer-link" data-route="/about/">About</a>
            <a href="/process/" class="footer-link" data-route="/process/">Our Process</a>
            <a href="/faq/" class="footer-link" data-route="/faq/">FAQ</a>
            <a href="/contact/" class="footer-link" data-route="/contact/">Contact</a>
            <a href="/get-quote/" class="footer-link" data-route="/get-quote/">Get Quote</a>
            <a href="/service-areas-hyderabad/" class="footer-link" data-route="/service-areas-hyderabad/">Service Areas</a>
          </div>
        </div>

        <div class="footer-bottom">
          <span>© ${year} Star Creative. Hyderabad, India.</span>
          <div class="footer-legal">
            <a href="/privacy-policy/">Privacy</a>
            <a href="/terms/">Terms</a>
            <a href="/sitemap/">Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  `;
}
