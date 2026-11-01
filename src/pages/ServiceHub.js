import { BUSINESS, SERVICE_HUBS, PROJECTS } from '../data/services.js';
import { updatePageMeta, initRevealAnimations, initFAQ, navigate } from '../router.js';

/**
 * Service Hub Page — Comprehensive category showcase for:
 * Glass, UPVC, Aluminium, and Iron & Metal
 */
export function renderServiceHubPage(hub) {
  if (!hub) {
    navigate('/');
    return;
  }

  updatePageMeta({
    title: hub.seoTitle,
    description: hub.seoDesc,
  });

  const content = document.getElementById('page-content');
  if (!content) return;

  // Filter projects relevant to this category
  const categoryProjects = PROJECTS.filter(p =>
    p.category === hub.category ||
    p.services.some(s => hub.subServices.some(ss => ss.title === s))
  );

  // Collect category-specific FAQs from sub-services
  const categoryFaqs = [];
  hub.subServices.forEach(s => {
    if (s.faqs && s.faqs.length) {
      categoryFaqs.push({ ...s.faqs[0], serviceTitle: s.title });
    }
  });

  content.innerHTML = `
    <!-- SERVICES -->
    <section class="section" id="services-catalog" aria-labelledby="services-catalog-h2" style="padding-top: calc(var(--header-h) + 2.5rem); padding-bottom: var(--sp-section);">
      <div class="container">
        <div class="text-center" style="max-width:760px; margin:0 auto 3.5rem;">
          <nav class="breadcrumb breadcrumb-dark breadcrumb-center" aria-label="Breadcrumb" style="margin-bottom:1.25rem;">
            <a href="/" data-route="/">Home</a>
            <span class="breadcrumb-sep">/</span>
            <span aria-current="page" style="color:var(--text-primary); font-weight:500;">${hub.title}</span>
          </nav>

          <h1 class="h2" id="services-catalog-h2" style="margin-bottom:0.75rem; font-size:clamp(2rem, 3.5vw, 2.75rem);">${hub.title} in Hyderabad</h1>
          <div class="section-underline" style="margin:0.75rem auto 1.25rem;"></div>
          <p class="body-lg" style="color:var(--text-secondary); line-height:1.7;">
            ${hub.seoDesc || `Explore our complete range of ${hub.title.toLowerCase()} fabricated with precision engineering and installed by certified professionals across Hyderabad.`}
          </p>
        </div>

        <div class="hub-catalog-grid">
          ${hub.subServices.map((service, i) => `
            <a href="/${service.slug}/" class="hub-catalog-card reveal reveal-delay-${(i % 3) + 1}" data-route="/${service.slug}/">
              <div class="hub-catalog-img">
                <img
                  src="${service.cardImage || service.heroImage}"
                  alt="${service.title} in Hyderabad"
                  loading="lazy"
                  width="500"
                  height="320"
                />
              </div>
              <div class="hub-catalog-body">
                <h3 class="hub-catalog-title">${service.title}</h3>
                <p class="hub-catalog-desc">${service.tagline || service.intro}</p>
                <span class="hub-catalog-link">
                  Learn More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14"><path d="M5 12h14"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- TECHNICAL & MATERIAL STANDARDS -->
    <section class="section section-elevated" aria-labelledby="standards-h2">
      <div class="container">
        <div class="text-center reveal" style="max-width:700px; margin:0 auto 3rem;">
          <div class="section-label" style="justify-content:center;">Material & Engineering Quality</div>
          <h2 class="h2" id="standards-h2">Why Hyderabad architects and homeowners choose Star Creative</h2>
        </div>

        <div class="hub-standards-grid">
          <div class="hub-standard-card reveal">
            <div class="hub-standard-icon">01</div>
            <h4>Architectural Grade Raw Materials</h4>
            <p>We source certified float & processed glass from Saint-Gobain and AIS, heavy-walled multi-chamber UPVC extrusions, 6063-T6 architectural aluminium, and high-tensile mild steel.</p>
          </div>
          <div class="hub-standard-card reveal reveal-delay-1">
            <div class="hub-standard-icon">02</div>
            <h4>Laser Measurement Precision</h4>
            <p>Every site is measured using digital laser meters to guarantee zero gap errors, perfect plumb alignments, and seamless water/acoustic sealing.</p>
          </div>
          <div class="hub-standard-card reveal reveal-delay-2">
            <div class="hub-standard-icon">03</div>
            <h4>Factory-Finished Hardware</h4>
            <p>All hinges, locks, sliding tracks, rollers, and spigots are rated for heavy continuous duty, corrosion-resistant SS 304/316, or multi-stage architectural powder coating.</p>
          </div>
          <div class="hub-standard-card reveal reveal-delay-3">
            <div class="hub-standard-icon">04</div>
            <h4>Clear Itemized Pricing</h4>
            <p>No unexpected surcharges. You receive a detailed cost breakdown covering glass/profile type, hardware fittings, site transportation, and complete installation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- DEDICATED CONSULTANCY PIECE / SITE VISIT BOOKING -->
    <section class="section hub-consultancy-section" id="consultancy-section" aria-labelledby="consultancy-h2">
      <div class="container">
        <div class="hub-consultancy-wrapper reveal">
          <div class="hub-consultancy-info">
            <div class="quote-luxury-pill">
              <span class="quote-pill-pulse"></span>
              <span>Free Consultation & Laser Site Visit</span>
            </div>
            <h2 id="consultancy-h2">
              Discuss Your <span class="quote-highlight-gradient">${hub.title}</span> Project With Our Senior Engineers
            </h2>
            <p class="quote-lead">
              Not sure which glass thickness, profile series, or door configuration suits your space? Book a free in-person consultation anywhere in Hyderabad.
            </p>

            <div class="quote-luxury-cards">
              <div class="quote-feature-card">
                <div class="quote-feature-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>
                </div>
                <div class="quote-feature-text">
                  <strong>Laser Site Measurement</strong>
                  <span>Free inspection of structural openings, floor levels, and clearances by senior engineers.</span>
                </div>
              </div>

              <div class="quote-feature-card">
                <div class="quote-feature-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <div class="quote-feature-text">
                  <strong>Physical Samples at Doorstep</strong>
                  <span>Review glass textures, tint shades, hardware finishes, and UPVC/aluminium profiles in person.</span>
                </div>
              </div>

              <div class="quote-feature-card">
                <div class="quote-feature-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </div>
                <div class="quote-feature-text">
                  <strong>Itemized Quote in 24 Hours</strong>
                  <span>Transparent bill of materials with zero obligation delivered directly to you.</span>
                </div>
              </div>
            </div>

            <div class="quote-direct-contact-wrap">
              <span class="quote-direct-label">Need an immediate answer or advice?</span>
              <div class="quote-direct-pills">
                <a
                  href="https://wa.me/${BUSINESS.whatsapp}?text=Hello%20Star%20Creative%2C%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(hub.title)}."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="quote-pill-btn quote-wa-pill"
                >
                  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:${BUSINESS.phone.replace(/[^0-9+]/g, '')}"
                  class="quote-pill-btn quote-phone-pill"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1.06h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  <span>${BUSINESS.phone}</span>
                </a>
              </div>
            </div>
          </div>

          <div class="hub-consultancy-form-box">
            <div class="hub-form-title">Request Free Site Visit</div>
            <div class="hub-form-subtitle">Fill out the details below and our technical supervisor will contact you within 2 hours.</div>

            <form id="hub-consult-form" class="hub-consult-form" novalidate>
              <div class="form-group">
                <label class="form-label" for="hub-name">Your Full Name *</label>
                <input type="text" id="hub-name" class="form-input" placeholder="e.g. Ramesh Reddy" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="hub-phone">Phone / WhatsApp Number *</label>
                <input type="tel" id="hub-phone" class="form-input" placeholder="+91 XXXXX XXXXX" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="hub-service-select">Interested Service *</label>
                <select id="hub-service-select" class="form-input" required>
                  <option value="">-- Select a ${hub.title} service --</option>
                  ${hub.subServices.map(s => `<option value="${s.title}">${s.title}</option>`).join('')}
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="hub-area-select">Site Location (Hyderabad) *</label>
                <select id="hub-area-select" class="form-input" required>
                  <option value="">-- Select your area in Hyderabad --</option>
                  ${BUSINESS.serviceAreas.map(area => `<option value="${area}">${area}</option>`).join('')}
                  <option value="Other Area in Hyderabad">Other Area in Hyderabad</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="hub-notes">Brief Project Requirements</label>
                <textarea id="hub-notes" class="form-textarea" placeholder="Approximate dimensions, number of units, or specific design preference..." rows="3"></textarea>
              </div>

              <button type="submit" class="quote-submit-btn" id="hub-submit-btn">
                <span>Schedule Free Site Visit</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><polyline points="9 18 15 12 9 6"/></svg>
              </button>

              <div class="form-trust-footer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>100% Free Site Inspection • No Obligation • Rapid Response</span>
              </div>

              <div id="hub-form-status" style="display:none; margin-top:1rem; padding:1rem; border-radius:var(--radius-md); font-size:0.9rem; line-height:1.5;"></div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- REAL CATEGORY PROJECTS -->
    ${categoryProjects.length ? `
      <section class="section section-elevated" aria-labelledby="hub-projects-h2">
        <div class="container">
          <div class="reveal" style="display:flex; align-items:flex-end; justify-content:space-between; flex-wrap:wrap; gap:1rem; margin-bottom:2.5rem;">
            <div>
              <div class="section-label">Executed Projects</div>
              <h2 class="h2" id="hub-projects-h2">Recent ${hub.title} installations in Hyderabad</h2>
            </div>
            <a href="/projects/" class="btn btn-outline btn-sm" data-route="/projects/">View All Projects</a>
          </div>

          <div class="projects-grid">
            ${categoryProjects.slice(0, 4).map((p, i) => `
              <article class="project-card reveal reveal-delay-${(i % 4) + 1}">
                <img src="${p.image}" alt="${p.title}" loading="lazy" width="600" height="450" />
                <div class="project-card-overlay">
                  <div class="project-card-title">${p.title}</div>
                  <div class="project-card-loc">📍 ${p.location}</div>
                  <p style="font-size:0.85rem; color:rgba(255,255,255,0.75); margin-top:0.4rem;">${p.desc}</p>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>
    ` : ''}

    <!-- FREQUENTLY ASKED QUESTIONS -->
    ${categoryFaqs.length ? `
      <section class="section section-dark" aria-labelledby="hub-faq-h2">
        <div class="container">
          <div class="text-center reveal" style="max-width:600px; margin:0 auto 3rem;">
            <div class="section-label" style="justify-content:center;">Common Questions</div>
            <h2 class="h2" id="hub-faq-h2">Frequently Asked Questions</h2>
            <p class="body-lg" style="color:var(--text-secondary);">Everything you need to know about our fabrication, warranties, and installation process.</p>
          </div>

          <div class="faq-list" style="max-width:820px; margin:0 auto;">
            ${categoryFaqs.map(faq => `
              <div class="faq-item reveal">
                <button class="faq-question" type="button" aria-expanded="false">
                  <span>${faq.q}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </button>
                <div class="faq-answer">
                  <p>${faq.a}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    ` : ''}
  `;

  // Attach interactive behaviors
  initRevealAnimations();
  initFAQ(content);

  // Pre-fill consultation form when "Get Quote" is clicked on any service card
  content.querySelectorAll('.hub-prefill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceName = btn.getAttribute('data-service');
      const selectEl = document.getElementById('hub-service-select');
      if (selectEl && serviceName) {
        selectEl.value = serviceName;
      }
      document.getElementById('consultancy-section')?.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('hub-name')?.focus();
    });
  });

  // Interactive consultation form submit
  const consultForm = content.querySelector('#hub-consult-form');
  const statusEl = content.querySelector('#hub-form-status');

  consultForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('hub-name')?.value.trim();
    const phone = document.getElementById('hub-phone')?.value.trim();
    const service = document.getElementById('hub-service-select')?.value;
    const area = document.getElementById('hub-area-select')?.value;

    if (!name || !phone || !service || !area) {
      if (statusEl) {
        statusEl.style.display = 'block';
        statusEl.style.background = 'rgba(220, 38, 38, 0.15)';
        statusEl.style.color = '#ef4444';
        statusEl.style.border = '1px solid rgba(220, 38, 38, 0.3)';
        statusEl.textContent = 'Please fill in your Name, Phone, Service, and Area.';
      }
      return;
    }

    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.style.background = 'rgba(22, 163, 74, 0.15)';
      statusEl.style.color = '#22c55e';
      statusEl.style.border = '1px solid rgba(22, 163, 74, 0.3)';
      statusEl.innerHTML = `
        <strong>Thank you, ${name}!</strong><br/>
        Your consultation request for <strong>${service}</strong> in <strong>${area}</strong> has been received.<br/>
        Our senior engineer will call you at <strong>${phone}</strong> within 2 hours to confirm your free site measurement visit.
      `;
      consultForm.reset();
    }
  });
}
