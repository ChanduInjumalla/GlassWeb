import { BUSINESS, SERVICE_HUBS } from '../data/services.js';
import { updatePageMeta, initRevealAnimations } from '../router.js';

export function renderAboutPage() {
  updatePageMeta({
    title: 'About Star Creative | Glass, UPVC & Aluminium Hyderabad',
    description: 'About Star Creative — Hyderabad\'s architectural glass, UPVC, aluminium and metal fabrication specialists. Our story, team and approach.',
  });

  const content = document.getElementById('page-content');
  if (!content) return;

  content.innerHTML = `
    <section class="page-header" id="main-content">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/" data-route="/">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span aria-current="page">About</span>
        </nav>
        <div class="page-header-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
          Our Story
        </div>
        <h1>About Star Creative</h1>
        <p class="page-header-desc">Hyderabad-based specialists in architectural glass, UPVC, aluminium and iron/metal fabrication.</p>
      </div>
    </section>

    <section class="section section-dark" aria-labelledby="about-story-h2">
      <div class="container">
        <div class="about-grid">
          <div class="reveal">
            <div class="section-label">Our Business</div>
            <h2 class="h2" id="about-story-h2" style="margin-bottom:1.5rem;">Who we are</h2>
            <p class="body-lg" style="color:var(--text-secondary); margin-bottom:1.25rem;">
              Star Creative is a Hyderabad-based specialist in architectural glass, UPVC windows and doors, aluminium systems and iron/metal fabrication. We work on projects of all scales — from individual bathroom shower enclosures to full commercial shopfront systems.
            </p>
            <p style="color:var(--text-secondary); line-height:1.8; margin-bottom:1.25rem;">
              Our approach: visit your site, take accurate measurements, specify the right materials, fabricate to exact dimensions and install professionally. One team from first contact to finished installation.
            </p>
            <p style="color:var(--text-secondary); line-height:1.8; margin-bottom:2rem;">
              We serve customers across Hyderabad — Banjara Hills, Jubilee Hills, Gachibowli, Kondapur, Kukatpally, Madhapur and beyond.
            </p>
            <a href="/contact/" class="btn btn-primary" data-route="/contact/">Get in Touch</a>
          </div>
          <div class="about-image reveal reveal-delay-2">
            <div class="about-img-wrap">
              <img src="/images/real/fluted_glass_wardrobe_led.jpg" alt="Star Creative — glass installation work in Hyderabad" loading="lazy" width="800" height="1000" class="about-img" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-elevated" aria-labelledby="services-h2">
      <div class="container">
        <div class="text-center reveal" style="max-width:560px; margin:0 auto 3rem;">
          <div class="section-label" style="justify-content:center;">Our Services</div>
          <h2 class="h2" id="services-h2">Four areas of specialisation</h2>
        </div>
        <div class="service-families-grid" style="grid-template-columns: repeat(2, 1fr);">
          ${SERVICE_HUBS.map((hub, i) => `
            <a href="/${hub.slug}/" class="service-family-card reveal reveal-delay-${i+1}" data-route="/${hub.slug}/" style="text-decoration:none; cursor:pointer;">
              <div class="service-family-body">
                <div class="process-num">${String(i + 1).padStart(2, '0')}</div>
                <h3 class="service-family-title">${hub.title}</h3>
                <p class="service-family-desc">${hub.intro.substring(0, 120)}...</p>
                <span class="service-card-link">
                  Explore
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                </span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section section-dark" aria-labelledby="values-h2">
      <div class="container-sm">
        <div class="text-center reveal" style="margin-bottom:3rem;">
          <div class="section-label" style="justify-content:center;">How We Work</div>
          <h2 class="h2" id="values-h2">Our approach</h2>
        </div>
        <div style="display:flex; flex-direction:column; gap:0;" class="reveal">
          ${[
            { title: 'Precision', desc: 'Every project starts with an on-site measurement. No guesswork, no assumptions.' },
            { title: 'Material Integrity', desc: 'We specify and use quality materials appropriate for each application.' },
            { title: 'Clean Installation', desc: 'Our installation team works professionally and leaves a clean site.' },
            { title: 'One Team', desc: 'From enquiry through to handover — you deal with Star Creative throughout.' },
          ].map(v => `
            <div style="padding:1.5rem 0; border-bottom:1px solid var(--border); display:grid; grid-template-columns:200px 1fr; gap:2rem; align-items:baseline;">
              <div style="font-weight:600; color:var(--text-primary);">${v.title}</div>
              <div style="color:var(--text-secondary); line-height:1.7;">${v.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="reveal">
          <div class="overline" style="margin-bottom:1.5rem;">Work With Us</div>
          <h2 class="cta-title">Ready to start your project?</h2>
          <p class="cta-desc">Free site visit, accurate measurement and a no-obligation quote.</p>
          <div class="cta-actions">
            <a href="/get-quote/" class="btn btn-primary btn-lg" data-route="/get-quote/">Get Free Quote</a>
            <a href="/contact/" class="btn btn-outline btn-lg" data-route="/contact/">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  `;

  initRevealAnimations();
}
