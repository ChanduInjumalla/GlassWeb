import { updatePageMeta, initRevealAnimations } from '../router.js';

export function renderMaterialsGuidePage() {
  updatePageMeta({
    title: 'Glass Materials Guide | Star Creative Hyderabad',
    description: 'Understanding glass types — toughened, laminated, DGU, frosted, fluted and designer glass. Star Creative Hyderabad guide.',
  });

  const content = document.getElementById('page-content');
  if (!content) return;

  const materials = [
    { title: 'Toughened Glass', desc: 'Heat-treated for 4-5x the strength of standard glass. Breaks into safe granular pieces on impact. Standard specification for shower doors, glass doors, railings and partitions.' },
    { title: 'Laminated Glass', desc: 'Two or more panes bonded with a PVB or SGP interlayer. Fragments stay in place when broken — preferred for overhead glazing, safety-critical positions and sound insulation.' },
    { title: 'DGU (Double Glazed Units)', desc: 'Two panes separated by a sealed air/gas cavity. Provides improved thermal and acoustic insulation — ideal for UPVC and aluminium window systems in premium homes.' },
    { title: 'Frosted Glass', desc: 'Acid-etched or sandblasted surface for translucency without full opacity. Used in shower screens, office partitions and bathroom windows for privacy.' },
    { title: 'Fluted / Reeded Glass', desc: 'Vertically ribbed texture that distorts visibility while allowing light. Popular in interior partitions, cabinet doors and architectural feature walls.' },
    { title: 'Back-Painted Glass', desc: 'Glass painted on the reverse side with a durable coating. Used for kitchen backsplashes, wall cladding and decorative panels — available in any RAL colour.' },
    { title: 'Mirror Glass', desc: 'Silver-coated glass in various thicknesses. Available in standard, tinted, antique and custom-cut configurations for bathrooms, gyms and decorative applications.' },
    { title: 'Designer / Patterned Glass', desc: 'Textured, patterned or printed glass for architectural and decorative purposes. Includes digital printing, ceramic fritting and custom patterns.' },
  ];

  content.innerHTML = `
    <section class="page-header" id="main-content">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/" data-route="/">Home</a><span class="breadcrumb-sep">/</span><span aria-current="page">Materials Guide</span>
        </nav>
        <div class="page-header-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
          Knowledge Base
        </div>
        <h1>Glass Materials Guide</h1>
        <p class="page-header-desc">Understanding different glass types and their applications.</p>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container-sm">
        <div class="reveal" style="margin-bottom:3rem;">
          <p class="body-lg" style="color:var(--text-secondary);">
            Not all glass is the same. The right specification depends on the application, structural requirements and the result you want to achieve. Here's a guide to the main types we work with.
          </p>
        </div>
        ${materials.map((m, i) => `
          <div class="reveal" style="padding:2rem 0; border-bottom:1px solid var(--border); display:grid; grid-template-columns:240px 1fr; gap:2rem; align-items:baseline;">
            <h2 style="font-size:var(--text-lg); font-weight:600; color:var(--text-primary);">${m.title}</h2>
            <p style="color:var(--text-secondary); line-height:1.8;">${m.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="reveal">
          <h2 class="cta-title">Need help choosing the right glass?</h2>
          <p class="cta-desc">We'll recommend the best specification for your project.</p>
          <div class="cta-actions">
            <a href="/get-quote/" class="btn btn-primary btn-lg" data-route="/get-quote/">Get Free Quote</a>
          </div>
        </div>
      </div>
    </section>
  `;

  initRevealAnimations();
}
