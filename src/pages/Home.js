import { BUSINESS, SERVICE_HUBS, GLASS_SERVICES, UPVC_SERVICES, ALUMINIUM_SERVICES, METAL_SERVICES, PROJECTS } from '../data/services.js';
import { updatePageMeta, initRevealAnimations, initFAQ, initBeforeAfter } from '../router.js';

const HOME_FAQS = [
  {
    q: 'What areas of Hyderabad do you serve?',
    a: 'We serve residential and commercial customers across Hyderabad — including Banjara Hills, Jubilee Hills, Gachibowli, Kondapur, Kukatpally, Madhapur, Hitech City, Secunderabad, Ameerpet, Miyapur, Kompally, Bachupally and surrounding areas.',
  },
  {
    q: 'Do you visit the site before providing a quote?',
    a: 'For most work, a site visit is the most accurate way to measure, assess site conditions and provide a reliable quote. We offer free site visits across Hyderabad.',
  },
  {
    q: 'What services do you offer?',
    a: 'We specialise in architectural glass (shower cubicles, doors, partitions, railings, mirrors, toughened, laminated, DGU and designer glass), UPVC windows and doors, aluminium doors, windows, partitions and shopfronts, and iron/metal fabrication including gates, grills, railings, staircases and sheds.',
  },
  {
    q: 'Do you handle both residential and commercial projects?',
    a: 'Yes. We work on residential homes and apartments as well as commercial offices, retail spaces, showrooms and hospitality projects.',
  },
  {
    q: 'What is the process from enquiry to installation?',
    a: 'Typically: you enquire → we arrange a site visit → we take measurements → we provide a quote → you confirm → we fabricate → we install and hand over.',
  },
  {
    q: 'Do you provide a warranty on your installations?',
    a: 'Warranty coverage depends on the specific product and installation. Ask us about warranty terms when requesting a quote for your project.',
  },
];

export function renderHomePage() {
  updatePageMeta({
    title: 'Star Creative | UPVC, Glass & Aluminium in Hyderabad',
    description: 'Star Creative Hyderabad — specialist in architectural glass, UPVC windows & doors, aluminium fabrication and iron/metal work. From shower cubicles to shopfronts, gates to glass railings. Call for a free site visit.',
  });

  const content = document.getElementById('page-content');
  if (!content) return;

  content.innerHTML = `
    <!-- HERO -->
    <section class="homepage-hero" id="main-content" aria-label="Hero">
      <div class="hero-bg-wrap">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80&auto=format&fit=crop"
          alt="Premium architectural glass installation — Star Creative Hyderabad"
          class="hero-bg-img"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div class="hero-overlay"></div>
        <div class="hero-glass-accent" aria-hidden="true">
          <div class="hero-glass-pane hero-glass-pane-1"></div>
          <div class="hero-glass-pane hero-glass-pane-2"></div>
          <div class="hero-glass-pane hero-glass-pane-3"></div>
        </div>
      </div>
      <div class="container hero-content">
        <div class="hero-text">
          <h1 class="hero-h1">
            Glass, UPVC &<br/>Aluminium Experts
          </h1>
          <p class="hero-desc">
            Design, fabrication and installation of architectural glass, UPVC windows, aluminium systems and metal works — across Hyderabad.
          </p>
          <div class="hero-actions">
            <a href="/get-quote/" class="btn btn-primary btn-lg" data-route="/get-quote/" id="hero-quote-btn">
              Get Free Quote
            </a>
            <a href="/projects/" class="btn btn-outline btn-lg" data-route="/projects/" id="hero-projects-btn">
              View Projects
            </a>
          </div>
        </div>
        <div class="hero-cards" aria-hidden="true">
          <div class="hero-stat-card glass-panel">
            <div class="hero-stat-num">500+</div>
            <div class="hero-stat-label">Projects</div>
          </div>
          <div class="hero-stat-card glass-panel">
            <div class="hero-stat-num">31</div>
            <div class="hero-stat-label">Services</div>
          </div>
          <div class="hero-stat-card glass-panel">
            <div class="hero-stat-num">15+</div>
            <div class="hero-stat-label">Areas</div>
          </div>
        </div>
      </div>
    </section>

    <!-- TRUST STRIP -->
    <div class="trust-strip" aria-label="Key credentials">
      <div class="container">
        <div class="trust-inner">
          <div class="trust-item">
            <div class="trust-item-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <span class="trust-item-text">Measure, Fabricate & Install</span>
          </div>
          <div class="trust-sep" aria-hidden="true"></div>
          <div class="trust-item">
            <div class="trust-item-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <span class="trust-item-text">Free Site Visit</span>
          </div>
          <div class="trust-sep" aria-hidden="true"></div>
          <div class="trust-item">
            <div class="trust-item-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <span class="trust-item-text">Residential & Commercial</span>
          </div>
          <div class="trust-sep" aria-hidden="true"></div>
          <div class="trust-item">
            <div class="trust-item-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <span class="trust-item-text">Hyderabad-Based Team</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ABOUT -->
    <section class="section section-dark" aria-labelledby="about-h2">
      <div class="container">
        <div class="about-grid">
          <div class="about-text reveal">
            <div class="section-label">About Star Creative</div>
            <h2 class="h2" id="about-h2" style="margin-bottom:1.5rem;">Hyderabad's full-service glass & fabrication team</h2>
            <p class="body-lg" style="margin-bottom:1.5rem; color:var(--text-secondary);">
              Star Creative is a Hyderabad-based specialist in architectural glass, UPVC windows and doors, aluminium systems and iron/metal fabrication. We handle the complete project — from site measurements to finished installation.
            </p>
            <p style="color:var(--text-secondary); line-height:1.75; margin-bottom:2rem;">
              Whether you need a frameless shower cubicle, UPVC sliding windows for an apartment, a glass railing for a balcony or iron gates for a compound — we design, fabricate and install across Hyderabad.
            </p>
            <div class="about-differentiators">
              ${[
                ['Site Visit & Measurement', 'We visit your site to measure precisely before fabrication.'],
                ['In-House Fabrication', 'Fabricated to the exact dimensions required.'],
                ['Professional Installation', 'Our team handles the entire fitting process.'],
                ['Single Point of Contact', 'One team from enquiry through to handover.'],
              ].map(([title, desc]) => `
                <div class="about-diff-item">
                  <div class="about-diff-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <div class="about-diff-title">${title}</div>
                    <div class="about-diff-desc">${desc}</div>
                  </div>
                </div>
              `).join('')}
            </div>
            <div class="mt-8">
              <a href="/about/" class="btn btn-outline" data-route="/about/">Learn More</a>
            </div>
          </div>
          <div class="about-image reveal reveal-delay-2">
            <div class="about-img-wrap">
              <img
                src="/images/real/fluted_sliding_partition_brass.jpg"
                alt="Star Creative — glass installation work in Hyderabad"
                loading="lazy"
                width="800" height="1000"
                class="about-img"
              />
              <div class="about-img-badge glass-panel">
                <div class="about-badge-num">10+</div>
                <div class="about-badge-text">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICE FAMILIES -->
    <section class="section section-elevated" aria-labelledby="services-h2">
      <div class="container">
        <div class="text-center reveal" style="max-width:600px; margin:0 auto 3.5rem;">
          <div class="section-label" style="justify-content:center;">Our Specialisms</div>
          <h2 class="h2" id="services-h2" style="margin-bottom:1rem;">Four service families.<br/>One team.</h2>
          <p class="body-lg" style="color:var(--text-secondary);">
            From decorative glass to structural metalwork — everything fabricated and installed by Star Creative in Hyderabad.
          </p>
        </div>
        <div class="service-families-grid">
          ${SERVICE_HUBS.map((hub, i) => `
            <a href="/${hub.slug}/" class="service-family-card reveal reveal-delay-${i+1}" data-route="/${hub.slug}/" aria-label="${hub.title}">
              <div class="service-family-img">
                <img src="${hub.heroImage}" alt="${hub.title}" loading="lazy" width="600" height="400" />
                <div class="service-family-overlay"></div>
                <span class="tag" style="position:absolute; top:1rem; left:1rem; z-index:2;">${hub.tag}</span>
              </div>
              <div class="service-family-body">
                <h3 class="service-family-title">${hub.title}</h3>
                <p class="service-family-desc">${hub.intro.substring(0, 90)}...</p>
                <div class="service-family-services">
                  ${hub.subServices.slice(0, 3).map(s => `<span class="service-family-chip">${s.title}</span>`).join('')}
                  <span class="service-family-chip service-family-chip-more">+${hub.subServices.length - 3} more</span>
                </div>
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

    <!-- POPULAR SERVICES -->
    <section class="section section-dark" aria-labelledby="popular-h2">
      <div class="container">
        <div class="reveal" style="display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:3rem; flex-wrap:wrap; gap:1rem;">
          <div>
            <div class="section-label">Most Requested</div>
            <h2 class="h2" id="popular-h2">Popular services</h2>
          </div>
          <a href="/glass-services-hyderabad/" class="btn btn-outline btn-sm" data-route="/glass-services-hyderabad/">View All Services</a>
        </div>
        <div class="popular-grid">
          ${[
            { slug: 'shower-cubicles-hyderabad', title: 'Shower Cubicles', img: '/images/services/glass/shower_cubicles.jpg', tag: 'Glass', area: 'Bathrooms & Wet Areas' },
            { slug: 'glass-railings-hyderabad', title: 'Glass Railings', img: '/images/services/glass/glass_railings.jpg', tag: 'Glass', area: 'Balconies & Staircases' },
            { slug: 'upvc-sliding-windows-hyderabad', title: 'UPVC Windows', img: '/images/services/upvc/upvc_sliding_windows.jpg', tag: 'UPVC', area: 'Homes & Apartments' },
            { slug: 'glass-partitions-hyderabad', title: 'Glass Partitions', img: '/images/real/fluted_sliding_partition_black.jpg', tag: 'Glass', area: 'Offices & Homes' },
            { slug: 'iron-ms-gates-hyderabad', title: 'Iron & MS Gates', img: '/images/real/ms_chevron_compound_gate.jpg', tag: 'Metal', area: 'Compounds & Entrances' },
            { slug: 'glass-mirrors-hyderabad', title: 'Glass Mirrors', img: '/images/services/glass/glass_mirrors.jpg', tag: 'Glass', area: 'Bathrooms & Gyms' },
          ].map((s, i) => `
            <a href="/${s.slug}/" class="popular-card reveal reveal-delay-${(i % 3) + 1}" data-route="/${s.slug}/" aria-label="${s.title}">
              <div class="popular-card-img">
                <img src="${s.img}" alt="${s.title} in Hyderabad" loading="lazy" width="400" height="250" />
              </div>
              <div class="popular-card-body">
                <span class="tag">${s.tag}</span>
                <h3 class="popular-card-title">${s.title}</h3>
                <p class="popular-card-area">${s.area}</p>
                <span class="service-card-link">
                  Learn more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                </span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FEATURED PROJECTS -->
    <section class="section section-elevated" aria-labelledby="projects-h2">
      <div class="container">
        <div class="reveal" style="display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:3rem; flex-wrap:wrap; gap:1rem;">
          <div>
            <div class="section-label">Our Work</div>
            <h2 class="h2" id="projects-h2">Featured Projects</h2>
          </div>
          <a href="/projects/" class="btn btn-outline btn-sm" data-route="/projects/">All Projects</a>
        </div>
        <div class="projects-grid">
          ${PROJECTS.slice(0, 4).map((p, i) => `
            <a href="/projects/" class="project-card reveal reveal-delay-${(i % 4) + 1}" data-route="/projects/">
              <img src="${p.image}" alt="${p.title}" loading="lazy" width="600" height="450" />
              <div class="project-card-overlay">
                <div class="project-card-title">${p.title}</div>
                <div class="project-card-loc">${p.location}</div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="section section-dark" aria-labelledby="process-h2">
      <div class="container">
        <div class="text-center reveal" style="max-width:580px; margin:0 auto 3.5rem;">
          <div class="section-label" style="justify-content:center;">How We Work</div>
          <h2 class="h2" id="process-h2">From enquiry to installation</h2>
        </div>
        <div class="process-grid">
          ${[
            { num: '01', title: 'Enquire', desc: 'Call, WhatsApp or submit the quote form with your requirements.' },
            { num: '02', title: 'Site Visit', desc: 'We visit your site, take measurements and discuss the specification.' },
            { num: '03', title: 'Quotation', desc: 'We provide a detailed quote for the work discussed.' },
            { num: '04', title: 'Confirm', desc: 'You approve the quote and we schedule fabrication.' },
            { num: '05', title: 'Fabricate', desc: 'Your work is fabricated to the exact dimensions measured on site.' },
            { num: '06', title: 'Install', desc: 'Our team installs and we hand over a finished, clean job.' },
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

    <!-- RESIDENTIAL / COMMERCIAL -->
    <section class="section section-elevated" aria-labelledby="sectors-h2">
      <div class="container">
        <div class="text-center reveal" style="max-width:560px; margin:0 auto 3.5rem;">
          <div class="section-label" style="justify-content:center;">Who We Work With</div>
          <h2 class="h2" id="sectors-h2">Residential & Commercial</h2>
        </div>
        <div class="split-cards">
          <a href="/residential-glass-solutions-hyderabad/" class="split-card reveal" data-route="/residential-glass-solutions-hyderabad/">
            <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80&auto=format&fit=crop" alt="Residential glass solutions" loading="lazy" width="800" height="500" />
            <div class="split-card-content">
              <div class="split-card-label">Residential</div>
              <h3 class="split-card-title">Homes, Villas & Apartments</h3>
              <p class="split-card-desc">Shower cubicles, UPVC windows, glass railings, mirrors, security grills and gates.</p>
            </div>
          </a>
          <a href="/commercial-glass-solutions-hyderabad/" class="split-card reveal reveal-delay-2" data-route="/commercial-glass-solutions-hyderabad/">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop" alt="Commercial glass solutions" loading="lazy" width="800" height="500" />
            <div class="split-card-content">
              <div class="split-card-label">Commercial</div>
              <h3 class="split-card-title">Offices, Retail & Hospitality</h3>
              <p class="split-card-desc">Glazed partitions, aluminium shopfronts, DGU glazing and security installations.</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="section section-dark" aria-labelledby="reviews-h2">
      <div class="container">
        <div class="text-center reveal" style="max-width:500px; margin:0 auto 3rem;">
          <div class="section-label" style="justify-content:center;">Customer Feedback</div>
          <h2 class="h2" id="reviews-h2">What our customers say</h2>
        </div>
        <div class="testimonials-grid">
          ${[
            { name: 'Ravi K.', area: 'Kondapur', service: 'Shower Cubicle', text: 'Very professional from measurement to installation. The frameless glass cubicle looks excellent. Clean work.' },
            { name: 'Priya M.', area: 'Gachibowli', service: 'UPVC Windows', text: 'Had all windows replaced with UPVC sliding windows. Good quality, accurate measurement and neat installation.' },
            { name: 'Suresh B.', area: 'Banjara Hills', service: 'Glass Railing', text: 'Glass balcony railing with stainless spigots. Really happy with the finish — clear glass and solid hardware.' },
          ].map((r, i) => `
            <div class="testimonial-card reveal reveal-delay-${i+1}">
              <div class="testimonial-header">
                <div class="testimonial-avatar">${r.name.charAt(0)}</div>
                <div>
                  <div class="testimonial-name">${r.name}</div>
                  <div class="testimonial-meta">${r.area} · ${r.service}</div>
                </div>
              </div>
              <blockquote class="testimonial-quote">"${r.text}"</blockquote>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section section-elevated" aria-labelledby="faq-h2">
      <div class="container-sm">
        <div class="text-center reveal" style="max-width:500px; margin:0 auto 3rem;">
          <div class="section-label" style="justify-content:center;">Common Questions</div>
          <h2 class="h2" id="faq-h2">Frequently asked questions</h2>
        </div>
        <div class="faq-list reveal">
          ${HOME_FAQS.map(faq => `
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
        <div class="text-center mt-8 reveal">
          <a href="/faq/" class="btn btn-outline" data-route="/faq/">View All FAQs</a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section" aria-labelledby="cta-h2">
      <div class="container">
        <div class="reveal">
          <div class="overline" style="margin-bottom:1.5rem;">Get Started</div>
          <h2 class="cta-title" id="cta-h2">Ready to transform your space?</h2>
          <p class="cta-desc">Free site visit, accurate measurement and a detailed quote — no obligation.</p>
          <div class="cta-actions">
            <a href="/get-quote/" class="btn btn-primary btn-lg" data-route="/get-quote/">Get Free Quote</a>
            <a href="tel:${BUSINESS.phone.replace(/[^0-9+]/g,'')}" class="btn btn-outline btn-lg">Call Now</a>
          </div>
        </div>
      </div>
    </section>
  `;

  // Initialize functionality
  initRevealAnimations();
  initFAQ();
}
