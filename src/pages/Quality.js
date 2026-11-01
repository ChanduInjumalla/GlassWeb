import { updatePageMeta, initRevealAnimations } from '../router.js';

export function renderQualityPage() {
  updatePageMeta({
    title: 'Quality & Warranty | Star Creative Hyderabad',
    description: 'Star Creative\'s commitment to quality — materials, fabrication standards and warranty information for glass, UPVC, aluminium and metal work.',
  });

  const content = document.getElementById('page-content');
  if (!content) return;

  content.innerHTML = `
    <section class="page-header" id="main-content">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/" data-route="/">Home</a><span class="breadcrumb-sep">/</span><span aria-current="page">Quality & Warranty</span>
        </nav>
        <div class="page-header-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Standards
        </div>
        <h1>Quality & Warranty</h1>
        <p class="page-header-desc">Our commitment to materials, fabrication standards and after-installation support.</p>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container-sm">
        ${[
          { title: 'Material Standards', text: 'We use quality materials sourced from established suppliers — toughened safety glass to ISI standards, branded UPVC profiles, powder-coated aluminium sections and properly graded mild steel. We specify materials appropriate for each application.' },
          { title: 'Fabrication Precision', text: 'Every project is fabricated to the exact dimensions measured on site. Our fabrication process ensures tight tolerances, clean cuts and proper finishing before anything leaves the workshop.' },
          { title: 'Installation Quality', text: 'Our installation team is trained in proper fitting techniques, safety procedures and site cleanliness. We aim to leave every site in better condition than we found it.' },
          { title: 'Warranty Coverage', text: 'Warranty terms vary by product and installation type. We provide written warranty documentation with your project. Manufacturing defects and installation issues are covered — ask us for specific warranty terms when requesting a quote.' },
          { title: 'After-Sales Support', text: 'If you experience any issues after installation, contact us. We stand behind our work and will address any problems arising from our fabrication or installation.' },
        ].map(item => `
          <div class="reveal" style="padding:2rem 0; border-bottom:1px solid var(--border);">
            <h2 style="font-size:var(--text-xl); font-weight:600; color:var(--text-primary); margin-bottom:0.75rem;">${item.title}</h2>
            <p style="color:var(--text-secondary); line-height:1.8;">${item.text}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="reveal">
          <h2 class="cta-title">Questions about quality or warranty?</h2>
          <p class="cta-desc">Contact us for detailed warranty information on your specific project.</p>
          <div class="cta-actions">
            <a href="/contact/" class="btn btn-primary btn-lg" data-route="/contact/">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  `;

  initRevealAnimations();
}
