/**
 * Service Page — Premium interior-design style individual service pages
 * Driven by service data from services.js
 */
import { BUSINESS, ALL_SERVICES, SERVICE_HUBS, PROJECTS } from '../data/services.js';
import { updatePageMeta, initRevealAnimations, initFAQ } from '../router.js';

export function renderServicePage(service) {
  if (!service) { window.location.href = '/'; return; }

  updatePageMeta({
    title: service.seoTitle,
    description: service.seoDesc,
  });

  // Find related services
  const relatedServices = service.relatedSlugs
    ? service.relatedSlugs.map(slug => ALL_SERVICES.find(s => s.slug === slug)).filter(Boolean)
    : [];

  // Find the parent hub
  const parentHub = SERVICE_HUBS.find(h => h.category === service.category);

  // Generate room images & design ideas based on category
  const rooms = getRoomsForCategory(service.category, service.title);
  const designIdeas = getDesignIdeas(service);

  const content = document.getElementById('page-content');
  if (!content) return;

  content.innerHTML = `
    <!-- SERVICE INTRO (starts the page) -->
    <section class="section section-dark" id="main-content" aria-labelledby="sp-overview-h2" style="padding-top: calc(var(--header-h) + 2.5rem);">
      <div class="container">
        <nav class="breadcrumb breadcrumb-dark" aria-label="Breadcrumb" style="margin-bottom:2rem;">
          <a href="/" data-route="/">Home</a>
          <span class="breadcrumb-sep">/</span>
          <a href="/${getCategoryHub(service.category)}/" data-route="/${getCategoryHub(service.category)}/">${getCategoryLabel(service.category)}</a>
          <span class="breadcrumb-sep">/</span>
          <span aria-current="page">${service.title}</span>
        </nav>

        <div class="sp-overview-grid reveal">
          <div class="sp-overview-content">
            <div class="section-label">About This Service</div>
            <h1 class="h2" id="sp-overview-h2" style="margin-bottom:1.5rem;">${service.title} in Hyderabad</h1>
            <p class="body-lg" style="color:var(--text-secondary); margin-bottom:1.5rem; line-height:1.85;">
              ${service.intro}
            </p>
            <p style="color:var(--text-secondary); line-height:1.8; margin-bottom:2rem;">
              Star Creative provides end-to-end ${service.title.toLowerCase()} solutions — from initial consultation and laser site measurement through precision fabrication to professional installation. We serve residential homes, apartments, commercial offices, and retail spaces across all areas of Hyderabad.
            </p>
            <div class="sp-quick-stats">
              <div class="sp-stat">
                <div class="sp-stat-num">500+</div>
                <div class="sp-stat-label">Installations Done</div>
              </div>
              <div class="sp-stat">
                <div class="sp-stat-num">7-10</div>
                <div class="sp-stat-label">Days Turnaround</div>
              </div>
              <div class="sp-stat">
                <div class="sp-stat-num">Free</div>
                <div class="sp-stat-label">Site Measurement</div>
              </div>
            </div>
          </div>
          <div class="sp-overview-image">
            <img src="${service.cardImage || service.heroImage}" alt="${service.title}" loading="lazy" width="600" height="500" />
          </div>
        </div>
      </div>
    </section>

    <!-- ROOMS WE DESIGN -->
    <section class="section section-elevated" aria-labelledby="sp-rooms-h2">
      <div class="container">
        <div class="text-center reveal" style="max-width:600px; margin:0 auto 3rem;">
          <h2 class="h2" id="sp-rooms-h2" style="margin-bottom:0.75rem;">Where This Service Works Best</h2>
          <div class="section-underline"></div>
          <p style="color:var(--text-secondary); margin-top:1rem; line-height:1.7;">
            See how ${service.title.toLowerCase()} transforms different spaces in modern Indian homes
          </p>
        </div>
        <div class="sp-rooms-grid">
          ${rooms.map((room, i) => `
            <div class="sp-room-card reveal reveal-delay-${(i % 3) + 1}">
              <div class="sp-room-img">
                <img src="${room.image}" alt="${room.name} with ${service.title}" loading="lazy" width="500" height="350" />
                <div class="sp-room-overlay">
                  <div class="sp-room-name">${room.name}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- DESIGN IDEAS -->
    <section class="section section-dark" aria-labelledby="sp-ideas-h2">
      <div class="container">
        <div class="reveal" style="max-width:600px; margin-bottom:3rem;">
          <div class="section-label">Design Ideas</div>
          <h2 class="h2" id="sp-ideas-h2" style="margin-bottom:0.75rem;">How We Can Use ${service.title}</h2>
          <p style="color:var(--text-secondary); line-height:1.7;">
            Discover creative ways to incorporate ${service.title.toLowerCase()} in your home or commercial space.
          </p>
        </div>
        <div class="sp-ideas-grid">
          ${designIdeas.map((idea, i) => `
            <div class="sp-idea-card reveal reveal-delay-${(i % 3) + 1}">
              <div class="sp-idea-num">${String(i + 1).padStart(2, '0')}</div>
              <h4 class="sp-idea-title">${idea.title}</h4>
              <p class="sp-idea-desc">${idea.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>


    <!-- QUOTE / CONSULTATION SECTION -->
    <section class="section hub-consultancy-section" id="service-quote-section" aria-labelledby="sp-quote-h2">
      <div class="container">
        <div class="hub-consultancy-wrapper reveal">
          <div class="hub-consultancy-info">
            <div class="quote-luxury-pill">
              <span class="quote-pill-pulse"></span>
              <span>Free Site Inspection & Quote</span>
            </div>
            <h2 id="sp-quote-h2">
              Ready for Your <span class="quote-highlight-gradient">${service.title}</span> Project?
            </h2>
            <p class="quote-lead">
              Get an accurate laser site measurement, review hardware and material samples, and receive a transparent itemized quotation anywhere in Hyderabad.
            </p>

            <div class="quote-luxury-cards">
              <div class="quote-feature-card">
                <div class="quote-feature-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>
                </div>
                <div class="quote-feature-text">
                  <strong>Free Laser Measurement</strong>
                  <span>Precision measurement of floor levels, structural openings & clearances at no charge.</span>
                </div>
              </div>

              <div class="quote-feature-card">
                <div class="quote-feature-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <div class="quote-feature-text">
                  <strong>Physical Samples & Hardware</strong>
                  <span>Evaluate glass textures, tints, channel profiles, and handles in person before making decisions.</span>
                </div>
              </div>

              <div class="quote-feature-card">
                <div class="quote-feature-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </div>
                <div class="quote-feature-text">
                  <strong>Itemized BOM in 24 Hours</strong>
                  <span>Detailed, fixed price quotation with complete breakdown of glass, fittings and labour.</span>
                </div>
              </div>
            </div>

            <div class="quote-direct-contact-wrap">
              <span class="quote-direct-label">Need an immediate answer or advice?</span>
              <div class="quote-direct-pills">
                <a
                  href="https://wa.me/${BUSINESS.whatsapp}?text=Hello%20Star%20Creative%2C%20I%20need%20a%20quote%20for%20${encodeURIComponent(service.title)}."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="quote-pill-btn quote-wa-pill"
                >
                  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <span>Chat on WhatsApp</span>
                </a>
                <a href="tel:${BUSINESS.phone.replace(/[^0-9+]/g, '')}" class="quote-pill-btn quote-phone-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1.06h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  <span>${BUSINESS.phone}</span>
                </a>
              </div>
            </div>
          </div>

          <div class="hub-consultancy-form-box">
            <div class="hub-form-title">Request Free Quote</div>
            <div class="hub-form-subtitle">Fill out the form and our team will contact you within 2 hours.</div>

            <form id="service-quote-form" class="hub-consult-form" novalidate>
              <div class="form-group">
                <label class="form-label" for="sq-name">Your Full Name *</label>
                <input type="text" id="sq-name" class="form-input" placeholder="e.g. Ramesh Reddy" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="sq-phone">Phone / WhatsApp *</label>
                <input type="tel" id="sq-phone" class="form-input" placeholder="+91 XXXXX XXXXX" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="sq-area">Your Area in Hyderabad *</label>
                <select id="sq-area" class="form-input" required>
                  <option value="">-- Select your area in Hyderabad --</option>
                  ${BUSINESS.serviceAreas.map(area => `<option value="${area}">${area}</option>`).join('')}
                  <option value="Other">Other Area in Hyderabad</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="sq-message">Project Details</label>
                <textarea id="sq-message" class="form-textarea" placeholder="Approximate dimensions, number of units, or any specific requirements..." rows="3"></textarea>
              </div>

              <input type="hidden" name="service" value="${service.title}" />

              <button type="submit" class="quote-submit-btn" id="sq-submit-btn">
                <span>Request Free Quote for ${service.title}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><polyline points="9 18 15 12 9 6"/></svg>
              </button>

              <div class="form-trust-footer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>100% Free Site Inspection • No Obligation • Rapid Response</span>
              </div>

              <div id="sq-form-status" style="display:none; margin-top:1rem; padding:1rem; border-radius:var(--radius-md); font-size:0.9rem; line-height:1.5;"></div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    ${service.faqs?.length ? `
      <section class="section section-dark" aria-labelledby="sp-faq-h2">
        <div class="container-sm">
          <div class="text-center reveal" style="margin-bottom:3rem;">
            <div class="section-label" style="justify-content:center;">Common Questions</div>
            <h2 class="h2" id="sp-faq-h2">${service.title} — Frequently Asked Questions</h2>
          </div>
          <div class="faq-list reveal">
            ${service.faqs.map(faq => `
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
      </section>
    ` : ''}

    <!-- RELATED SERVICES -->
    ${relatedServices.length ? `
      <section class="section section-elevated" aria-labelledby="sp-related-h2">
        <div class="container">
          <div class="reveal" style="display:flex; align-items:flex-end; justify-content:space-between; flex-wrap:wrap; gap:1rem; margin-bottom:2.5rem;">
            <div>
              <div class="section-label">Related Services</div>
              <h2 class="h2" id="sp-related-h2">You may also need</h2>
            </div>
            ${parentHub ? `<a href="/${parentHub.slug}/" class="btn btn-outline btn-sm" data-route="/${parentHub.slug}/">View All ${getCategoryLabel(service.category)}</a>` : ''}
          </div>
          <div class="sp-related-grid">
            ${relatedServices.map((rs, i) => `
              <a href="/${rs.slug}/" class="sp-related-card reveal reveal-delay-${(i % 3) + 1}" data-route="/${rs.slug}/">
                <div class="sp-related-img">
                  <img src="${rs.cardImage || rs.heroImage}" alt="${rs.title}" loading="lazy" width="400" height="250" />
                  <div class="sp-related-overlay"></div>
                  <span class="tag" style="position:absolute; top:0.75rem; left:0.75rem; z-index:2;">${rs.tag}</span>
                </div>
                <div class="sp-related-body">
                  <h4 class="sp-related-title">${rs.title}</h4>
                  <p class="sp-related-desc">${rs.tagline || ''}</p>
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
    ` : ''}

    <!-- CTA -->
    <section class="cta-section" aria-labelledby="sp-cta-h2">
      <div class="container">
        <div class="reveal">
          <div class="overline" style="margin-bottom:1.5rem;">Get Started</div>
          <h2 class="cta-title" id="sp-cta-h2">Ready to discuss ${service.title.toLowerCase()}?</h2>
          <p class="cta-desc">Free site visit, precision measurement and a no-obligation quote.</p>
          <div class="cta-actions">
            <a href="/get-quote/?service=${service.slug}" class="btn btn-primary btn-lg" data-route="/get-quote/">Get Free Quote</a>
            <a href="/contact/" class="btn btn-outline btn-lg" data-route="/contact/">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  `;

  initRevealAnimations();
  initFAQ();

  // Form submit handler
  const quoteForm = content.querySelector('#service-quote-form');
  const statusEl = content.querySelector('#sq-form-status');

  quoteForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('sq-name')?.value.trim();
    const phone = document.getElementById('sq-phone')?.value.trim();
    const area = document.getElementById('sq-area')?.value;

    if (!name || !phone || !area) {
      if (statusEl) {
        statusEl.style.display = 'block';
        statusEl.style.background = 'rgba(220, 38, 38, 0.15)';
        statusEl.style.color = '#ef4444';
        statusEl.style.border = '1px solid rgba(220, 38, 38, 0.3)';
        statusEl.textContent = 'Please fill in your Name, Phone, and Area.';
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
        Your quote request for <strong>${service.title}</strong> in <strong>${area}</strong> has been received.<br/>
        Our team will call you at <strong>${phone}</strong> within 2 hours to schedule a free site measurement.
      `;
      quoteForm.reset();
    }
  });
}

/**
 * Room images per category — Indian residential style from Unsplash
 */
function getRoomsForCategory(category, serviceTitle) {
  const rooms = {
    glass: [
      { name: 'Pooja Room Mandir Door', image: '/images/real/pooja_door_balaji_rose_gold.jpg' },
      { name: 'Living Room Fluted Partition', image: '/images/real/fluted_sliding_partition_brass.jpg' },
      { name: 'Luxury Fluted Wardrobe with LED', image: '/images/real/fluted_glass_wardrobe_led.jpg' },
      { name: 'Sliding Room Divider', image: '/images/real/fluted_sliding_partition_black.jpg' },
      { name: 'Commercial Glass Shopfront', image: '/images/real/commercial_glass_shopfront.jpg' },
      { name: 'Frosted Om & Bells Door', image: '/images/real/pooja_door_frosted_bells_om.jpg' },
    ],
    upvc: [
      { name: 'Modern Apartment', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80&auto=format&fit=crop' },
      { name: 'Bedroom Windows', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&q=80&auto=format&fit=crop' },
      { name: 'Living Room', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&q=80&auto=format&fit=crop' },
      { name: 'Balcony Doors', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&q=80&auto=format&fit=crop' },
      { name: 'Villa Exterior', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80&auto=format&fit=crop' },
      { name: 'Pooja Room', image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500&q=80&auto=format&fit=crop' },
    ],
    aluminium: [
      { name: 'Commercial Shop Front', image: '/images/real/commercial_glass_shopfront.jpg' },
      { name: 'Bronze Sliding Partition', image: '/images/real/bronze_tinted_sliding_doors.jpg' },
      { name: 'Modular Kitchen Profile Cabinet', image: '/images/real/kitchen_profile_glass_cabinet.jpg' },
      { name: '4-Panel Fluted Sliding Wall', image: '/images/real/fluted_glass_sliding_wall_4panel.jpg' },
      { name: 'Illuminated Profile Wardrobe', image: '/images/real/illuminated_wave_glass_wardrobe.jpg' },
      { name: 'Arched Glass Partition', image: '/images/real/fluted_glass_arched_partition.jpg' },
    ],
    metal: [
      { name: 'Structural Steel Staircase Tower', image: '/images/real/metal_staircase_tower.jpg' },
      { name: 'Chevron Compound Main Gate', image: '/images/real/ms_chevron_compound_gate.jpg' },
      { name: 'White Arched Safety Door', image: '/images/real/ms_safety_door_white_arch.jpg' },
      { name: 'SS 304 Window Safety Grill', image: '/images/real/window_safety_grill_ss.jpg' },
      { name: 'Decorative Double Safety Door', image: '/images/real/ms_safety_door_brown_double.jpg' },
      { name: 'Expanded Metal Mesh Door', image: '/images/real/safety_mesh_door_diamond.jpg' },
    ],
  };
  return rooms[category] || rooms.glass;
}

/**
 * Design ideas per service — custom to each service type
 */
function getDesignIdeas(service) {
  const cat = service.category;
  if (cat === 'glass') {
    return [
      { title: 'Frameless Look', desc: `Use ${service.title.toLowerCase()} for a clean, modern frameless aesthetic that opens up your space and brings in natural light.` },
      { title: 'Space Divider', desc: `Create visual separation between living areas without blocking light flow. Glass partitions are ideal for open-plan Indian apartments.` },
      { title: 'Statement Feature', desc: `Make ${service.title.toLowerCase()} the centerpiece of your room — frosted, tinted, or clear glass creates a unique design statement.` },
      { title: 'Small Space Solution', desc: `In compact Hyderabad apartments, glass installations make rooms feel larger and more open compared to opaque alternatives.` },
      { title: 'Weather Protection', desc: `Toughened glass provides excellent protection from rain, dust, and noise while maintaining clear views of the outdoors.` },
      { title: 'Easy Maintenance', desc: `Glass surfaces are simple to clean and maintain — just a wipe keeps them looking fresh for years without repainting or polishing.` },
    ];
  } else if (cat === 'upvc') {
    return [
      { title: 'Sound Insulation', desc: `Multi-chamber UPVC profiles with sealed glass reduce outside noise significantly — ideal for apartments near busy Hyderabad roads.` },
      { title: 'Energy Efficient', desc: `UPVC windows and doors provide excellent thermal insulation, reducing AC costs in hot Hyderabad summers.` },
      { title: 'Zero Maintenance', desc: `Unlike wooden frames, UPVC never needs painting, polishing, or anti-termite treatment — stays white and fresh for decades.` },
      { title: 'Rain & Dust Proof', desc: `Tight rubber gasket sealing prevents water ingress and dust entry — keeps your home clean during monsoon season.` },
      { title: 'Modern Aesthetics', desc: `Clean white or custom-colored profiles give your home a sleek, modern European look that suits contemporary Indian architecture.` },
      { title: 'Child Safety', desc: `Built-in multi-point locking systems and tilt-and-turn mechanisms ensure safety for homes with children.` },
    ];
  } else if (cat === 'aluminium') {
    return [
      { title: 'Slim Profiles', desc: `Modern aluminium frames are ultra-slim, maximizing the glass area for better views and more natural light in your rooms.` },
      { title: 'Commercial Grade', desc: `Aluminium systems are ideal for shops, offices, and showrooms — strong, durable, and professionally finished.` },
      { title: 'Sliding Systems', desc: `Large sliding aluminium doors are perfect for connecting indoor and outdoor spaces in villas and apartments.` },
      { title: 'Powder Coated Colors', desc: `Choose from a wide range of powder-coated finishes — wood grain, bronze, champagne, or custom colors to match your interiors.` },
      { title: 'Weather Resistant', desc: `Aluminium doesn't rust, warp, or corrode — perfect for Hyderabad's humid climate and monsoon season.` },
      { title: 'Custom Sizes', desc: `Every aluminium installation is custom-fabricated to your exact opening dimensions — no standard sizes, only perfect fits.` },
    ];
  } else {
    return [
      { title: 'Security First', desc: `Iron and steel fabrication provides unmatched security for gates, grilles, and railings in residential properties.` },
      { title: 'Custom Designs', desc: `We create unique iron designs — from modern minimal patterns to traditional Indian motifs for gates and railings.` },
      { title: 'Structural Strength', desc: `Metal fabrication provides the structural integrity needed for staircases, mezzanines, and heavy-duty applications.` },
      { title: 'Powder Coating', desc: `All metal work is finished with multi-layer powder coating for long-lasting protection against rust and weather.` },
      { title: 'Ornamental Work', desc: `Decorative ironwork adds character to homes — spiral staircases, garden arches, and designer window grilles.` },
      { title: 'Cost Effective', desc: `Metal fabrication offers excellent value for money — strong, durable installations at competitive prices.` },
    ];
  }
}

/**
 * Why choose section — adapted per service
 */
function getWhyChoose(service) {
  return {
    heading: `Why Choose Star Creative for ${service.title}`,
    points: [
      { title: 'In-House Fabrication', desc: `We fabricate all ${service.title.toLowerCase()} in our own workshop — no outsourcing means better quality control and faster delivery.` },
      { title: 'Certified Materials', desc: 'Only ISI-certified, BIS-standard materials from brands like Saint-Gobain and AIS. No compromises on safety or quality.' },
      { title: 'Free Site Visit', desc: 'Our technician visits your location with laser measuring equipment to ensure precision dimensions — completely free of charge.' },
      { title: 'Transparent Pricing', desc: 'You receive a detailed, itemized quote with no hidden charges. Every material, fitting, and labour cost is listed clearly.' },
      { title: 'Professional Installation', desc: 'Our trained installation team handles the complete fitting. Clean site handover with no mess left behind.' },
      { title: 'Hyderabad Coverage', desc: 'We serve all areas — Banjara Hills, Jubilee Hills, Gachibowli, Kondapur, Kukatpally, Madhapur, Miyapur, and beyond.' },
    ]
  };
}

function getCategoryHub(category) {
  const map = {
    glass: 'glass-services-hyderabad',
    upvc: 'upvc-windows-doors-hyderabad',
    aluminium: 'aluminium-doors-windows-hyderabad',
    metal: 'iron-metal-fabrication-hyderabad',
  };
  return map[category] || 'glass-services-hyderabad';
}

function getCategoryLabel(category) {
  const map = {
    glass: 'Glass Services',
    upvc: 'UPVC',
    aluminium: 'Aluminium',
    metal: 'Iron & Metal',
  };
  return map[category] || 'Services';
}
