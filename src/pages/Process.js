import { BUSINESS } from '../data/services.js';
import { updatePageMeta, initRevealAnimations } from '../router.js';

export function renderProcessPage() {
  updatePageMeta({
    title: 'Our Process | Star Creative Hyderabad',
    description: 'How Star Creative works — from enquiry to installation. Site visit, measurement, fabrication and professional installation across Hyderabad.',
  });

  const content = document.getElementById('page-content');
  if (!content) return;

  content.innerHTML = `
    <section class="page-header" id="main-content">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/" data-route="/">Home</a><span class="breadcrumb-sep">/</span><span aria-current="page">Our Process</span>
        </nav>
        <div class="page-header-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          How We Work
        </div>
        <h1>Our Process</h1>
        <p class="page-header-desc">From enquiry to handover — how we deliver every project.</p>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="process-grid" style="grid-template-columns: repeat(3, 1fr);">
          ${[
            { num: '01', title: 'Enquire', desc: 'Contact us by phone, WhatsApp or the website form. Share your requirements and project location.' },
            { num: '02', title: 'Site Visit & Measurement', desc: 'Our team visits your site, assesses conditions, takes precise measurements and discusses the specification with you.' },
            { num: '03', title: 'Quotation', desc: 'Based on the site visit, we provide a detailed quote covering materials, fabrication and installation.' },
            { num: '04', title: 'Confirmation & Scheduling', desc: 'Once you approve the quote, we schedule the fabrication and agree on an installation timeline.' },
            { num: '05', title: 'Fabrication', desc: 'Your glass, UPVC, aluminium or metalwork is fabricated to the exact dimensions measured on site.' },
            { num: '06', title: 'Installation & Handover', desc: 'Our installation team fits everything on site, carries out quality checks and hands over the completed project.' },
          ].map(step => `
            <div class="process-step reveal">
              <div class="process-num">${step.num}</div>
              <div class="process-title">${step.title}</div>
              <div class="process-desc">${step.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="reveal">
          <h2 class="cta-title">Ready to get started?</h2>
          <p class="cta-desc">Free site visit and no-obligation quote.</p>
          <div class="cta-actions">
            <a href="/get-quote/" class="btn btn-primary btn-lg" data-route="/get-quote/">Get Free Quote</a>
          </div>
        </div>
      </div>
    </section>
  `;

  initRevealAnimations();
}
