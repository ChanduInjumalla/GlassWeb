import { BUSINESS } from '../data/services.js';
import { updatePageMeta, initRevealAnimations } from '../router.js';

export function renderContactPage() {
  updatePageMeta({
    title: 'Contact Star Creative | Glass & Aluminium Hyderabad',
    description: 'Contact Star Creative Hyderabad for architectural glass, UPVC, aluminium and metal fabrication. Call, WhatsApp or visit.',
  });

  const content = document.getElementById('page-content');
  if (!content) return;

  content.innerHTML = `
    <section class="page-header" id="main-content">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/" data-route="/">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span aria-current="page">Contact</span>
        </nav>
        <div class="page-header-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Get In Touch
        </div>
        <h1>Contact Us</h1>
        <p class="page-header-desc">Get in touch for a free site visit and quote.</p>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="contact-grid">
          <div class="reveal">
            <div class="section-label">Get In Touch</div>
            <h2 class="h2" style="margin-bottom:2rem;">We'd like to hear from you</h2>

            <div class="contact-method">
              <div class="contact-method-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1.06h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div>
                <div class="contact-method-label">Phone</div>
                <div class="contact-method-value">${BUSINESS.phone}</div>
              </div>
            </div>

            <div class="contact-method">
              <div class="contact-method-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <div class="contact-method-label">Email</div>
                <div class="contact-method-value">${BUSINESS.email}</div>
              </div>
            </div>

            <div class="contact-method">
              <div class="contact-method-icon" style="border-color:rgba(37,211,102,0.3); color:#25D366;">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              </div>
              <div>
                <div class="contact-method-label">WhatsApp</div>
                <div class="contact-method-value"><a href="https://wa.me/${BUSINESS.whatsapp}" target="_blank" rel="noopener noreferrer" style="color:var(--text-primary);">Chat Now</a></div>
              </div>
            </div>

            <div class="contact-method" style="border-bottom:none;">
              <div class="contact-method-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div class="contact-method-label">Address</div>
                <div class="contact-method-value" style="font-size:var(--text-base);">${BUSINESS.address.street}, ${BUSINESS.address.area}, ${BUSINESS.address.city} — ${BUSINESS.address.pin}</div>
              </div>
            </div>
          </div>

          <div class="reveal reveal-delay-2">
            <div class="quote-form">
              <div class="quote-form-title">Send a Message</div>
              <form id="contact-form" novalidate>
                <div class="form-group">
                  <label class="form-label" for="c-name">Name *</label>
                  <input type="text" id="c-name" class="form-input" placeholder="Your name" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="c-phone">Phone *</label>
                  <input type="tel" id="c-phone" class="form-input" placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="c-email">Email</label>
                  <input type="email" id="c-email" class="form-input" placeholder="your@email.com" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="c-message">Message *</label>
                  <textarea id="c-message" class="form-textarea" placeholder="Tell us about your project..." rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-full" style="justify-content:center;">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  initRevealAnimations();
}
