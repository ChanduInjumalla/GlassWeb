import { updatePageMeta, initRevealAnimations, initFAQ } from '../router.js';

const FAQS = [
  { cat: 'General', q: 'What areas of Hyderabad do you serve?', a: 'We serve customers across Hyderabad — Banjara Hills, Jubilee Hills, Gachibowli, Kondapur, Kukatpally, Madhapur, Hitech City, Secunderabad, Ameerpet, Miyapur, Kompally, Bachupally and surrounding areas.' },
  { cat: 'General', q: 'Do you visit the site before providing a quote?', a: 'Yes. For most work, a site visit ensures accurate measurement and a reliable quote. We offer free site visits across Hyderabad.' },
  { cat: 'General', q: 'Do you handle both residential and commercial projects?', a: 'Yes. We work on residential homes and apartments as well as commercial offices, retail, showrooms and hospitality projects.' },
  { cat: 'Process', q: 'What is the process from enquiry to installation?', a: 'Enquire → site visit → measurement → quotation → confirm → fabricate → install → handover.' },
  { cat: 'Process', q: 'How long does a typical project take?', a: 'Timelines vary by project. A single shower cubicle can be completed in a few days. Larger projects like full window replacements or commercial shopfronts take longer. We provide an estimated timeline with every quote.' },
  { cat: 'Glass', q: 'What\'s the difference between toughened and laminated glass?', a: 'Toughened glass is heat-treated for strength and breaks into safe granular pieces. Laminated glass has an interlayer that holds fragments in place. Each has specific applications — we recommend the right type based on your project.' },
  { cat: 'Glass', q: 'Can you install frameless glass shower cubicles?', a: 'Yes. Frameless shower cubicles are one of our most popular services. We use toughened safety glass with quality fittings.' },
  { cat: 'UPVC', q: 'Are UPVC windows better than aluminium?', a: 'Each has advantages. UPVC offers excellent thermal insulation and low maintenance. Aluminium provides slimmer profiles and a wider range of finishes. We\'ll recommend the right option based on your requirements.' },
  { cat: 'Warranty', q: 'Do you provide a warranty?', a: 'Warranty coverage depends on the specific product and installation. Ask us about warranty terms when requesting a quote.' },
  { cat: 'Warranty', q: 'What if there\'s an issue after installation?', a: 'Contact us. We stand behind our work and will address any issues that arise from our fabrication or installation.' },
];

export function renderFAQPage() {
  updatePageMeta({
    title: 'FAQ | Star Creative Hyderabad',
    description: 'Frequently asked questions about Star Creative\'s glass, UPVC, aluminium and metal services in Hyderabad.',
  });

  const content = document.getElementById('page-content');
  if (!content) return;

  const categories = [...new Set(FAQS.map(f => f.cat))];

  content.innerHTML = `
    <section class="page-header" id="main-content">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/" data-route="/">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span aria-current="page">FAQ</span>
        </nav>
        <div class="page-header-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          Common Questions
        </div>
        <h1>Frequently Asked Questions</h1>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container-sm">
        ${categories.map(cat => `
          <div class="reveal" style="margin-bottom:3rem;">
            <div class="section-label">${cat}</div>
            <div class="faq-list">
              ${FAQS.filter(f => f.cat === cat).map(faq => `
                <div class="faq-item">
                  <button class="faq-question" aria-expanded="false">
                    ${faq.q}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </button>
                  <div class="faq-answer">
                    <p>${faq.a}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="reveal">
          <h2 class="cta-title">Have another question?</h2>
          <p class="cta-desc">Contact us and we'll be happy to help.</p>
          <div class="cta-actions">
            <a href="/contact/" class="btn btn-primary btn-lg" data-route="/contact/">Contact Us</a>
            <a href="/get-quote/" class="btn btn-outline btn-lg" data-route="/get-quote/">Get Quote</a>
          </div>
        </div>
      </div>
    </section>
  `;

  initRevealAnimations();
  initFAQ();
}
