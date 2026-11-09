import { BUSINESS } from '../data/services.js';
import { updatePageMeta, initRevealAnimations } from '../router.js';

export function renderServiceAreasPage() {
  updatePageMeta({
    title: 'Service Areas | Star Creative Hyderabad',
    description: 'Star Creative serves Hyderabad — Banjara Hills, Jubilee Hills, Gachibowli, Kondapur, Kukatpally, Madhapur, Hitech City and surrounding areas.',
  });

  const content = document.getElementById('page-content');
  if (!content) return;

  content.innerHTML = `
    <section class="page-header" id="main-content">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/" data-route="/">Home</a><span class="breadcrumb-sep">/</span><span aria-current="page">Service Areas</span>
        </nav>
        <div class="page-header-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Coverage
        </div>
        <h1>Service Areas in Hyderabad</h1>
        <p class="page-header-desc">We cover residential and commercial projects across Hyderabad.</p>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="reveal service-areas-grid">
          ${BUSINESS.serviceAreas.map(area => `
            <div class="service-area-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" style="color:var(--accent); flex-shrink:0;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${area}</span>
            </div>
          `).join('')}
        </div>
        <div class="reveal service-areas-note">
          <p style="color:var(--text-secondary); line-height:1.7;">
            Don't see your area listed? Contact us — we may still be able to serve your location. Our coverage extends across greater Hyderabad and surrounding areas depending on the project.
          </p>
          <a href="/contact/" class="btn btn-primary mt-4" data-route="/contact/">Contact Us</a>
        </div>
      </div>
    </section>
  `;

  initRevealAnimations();
}
