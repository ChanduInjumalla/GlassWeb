import { BUSINESS, GLASS_SERVICES, UPVC_SERVICES, ALUMINIUM_SERVICES, METAL_SERVICES } from '../data/services.js';
import { updatePageMeta, initRevealAnimations } from '../router.js';

export function renderGetQuotePage() {
  updatePageMeta({
    title: 'Get Free Quote | Star Creative Hyderabad',
    description: 'Request a free quote for glass, UPVC, aluminium or metal work in Hyderabad. Star Creative — free site visit and measurement.',
  });

  const content = document.getElementById('page-content');
  if (!content) return;

  // Pre-select service from URL param
  const params = new URLSearchParams(window.location.search);
  const preSelectedService = params.get('service') || '';

  content.innerHTML = `
    <section class="page-header" id="main-content">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/" data-route="/">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span aria-current="page">Get Quote</span>
        </nav>
        <div class="page-header-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          Free Quotation
        </div>
        <h1>Get a Free Quote</h1>
        <p class="page-header-desc">Tell us about your project and we'll arrange a free site visit.</p>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container" style="max-width:720px;">
        <div class="quote-form reveal">
          <div class="quote-form-title" style="font-size:var(--text-2xl); margin-bottom:0.5rem;">Request a Quote</div>
          <p style="color:var(--text-muted); font-size:var(--text-sm); margin-bottom:2rem;">Free site visit, accurate measurement, no-obligation quote.</p>

          <form id="quote-page-form" novalidate>
            <div class="form-row-2">
              <div class="form-group">
                <label class="form-label" for="qp-name">Full Name *</label>
                <input type="text" id="qp-name" class="form-input" placeholder="Your name" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="qp-phone">Phone *</label>
                <input type="tel" id="qp-phone" class="form-input" placeholder="+91 XXXXX XXXXX" required />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="qp-email">Email</label>
              <input type="email" id="qp-email" class="form-input" placeholder="your@email.com" />
            </div>

            <div class="form-group">
              <label class="form-label" for="qp-area">Area / Location</label>
              <input type="text" id="qp-area" class="form-input" placeholder="e.g. Gachibowli, Kondapur" />
            </div>

            <div class="form-group">
              <label class="form-label">Services Needed</label>
              <div class="checkbox-grid">
                ${[
                  ...GLASS_SERVICES.slice(0, 6).map(s => s.title),
                  ...UPVC_SERVICES.slice(0, 2).map(s => s.title),
                  ...ALUMINIUM_SERVICES.slice(0, 2).map(s => s.title),
                  ...METAL_SERVICES.slice(0, 2).map(s => s.title),
                ].map(title => `
                  <label class="checkbox-item">
                    <input type="checkbox" name="services" value="${title}" ${preSelectedService && title.toLowerCase().includes(preSelectedService.split('-')[0]) ? 'checked' : ''} />
                    ${title}
                  </label>
                `).join('')}
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="qp-message">Project Details</label>
              <textarea id="qp-message" class="form-textarea" placeholder="Describe your project — dimensions, type of work, any specific requirements..." rows="5"></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-lg w-full" style="justify-content:center; margin-top:0.5rem;">Submit Enquiry</button>

            <p style="font-size:var(--text-xs); color:var(--text-muted); margin-top:1rem; text-align:center;">
              We'll respond within 24 hours. Your details are kept confidential.
            </p>
          </form>
        </div>

        <div class="reveal quote-contact-cards">
          <a href="tel:${BUSINESS.phone.replace(/[^0-9+]/g,'')}" class="quote-contact-card">
            <div class="quote-contact-icon" style="background:var(--accent-muted); color:var(--accent);">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1.06h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            </div>
            <div>
              <div class="quote-contact-label">Call</div>
              <div class="quote-contact-val">${BUSINESS.phone}</div>
            </div>
          </a>
          <a href="https://wa.me/${BUSINESS.whatsapp}" target="_blank" rel="noopener noreferrer" class="quote-contact-card">
            <div class="quote-contact-icon" style="background:rgba(37,211,102,0.1); color:#25D366;">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
            </div>
            <div>
              <div class="quote-contact-label">WhatsApp</div>
              <div class="quote-contact-val">Chat Now</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  `;

  initRevealAnimations();
}
