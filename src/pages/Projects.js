import { PROJECTS } from '../data/services.js';
import { updatePageMeta, initRevealAnimations } from '../router.js';

export function renderProjectsPage() {
  updatePageMeta({
    title: 'Our Projects | Star Creative Hyderabad',
    description: 'View Star Creative\'s authentic completed glass, aluminium, and iron fabrication projects across Hyderabad.',
  });

  const content = document.getElementById('page-content');
  if (!content) return;

  const filterOptions = [
    { label: 'All Projects', value: 'all' },
    { label: 'Glass & Partitions', value: 'glass' },
    { label: 'Iron & Metal Works', value: 'metal' },
    { label: 'Aluminium & Cabinets', value: 'aluminium' },
    { label: 'Residential', value: 'residential' },
    { label: 'Commercial', value: 'commercial' },
  ];

  content.innerHTML = `
    <section class="page-header" id="main-content">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/" data-route="/">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span aria-current="page">Projects</span>
        </nav>
        <div class="page-header-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          Our Hyderabad Portfolio
        </div>
        <h1>Completed Projects</h1>
        <p class="page-header-desc">Explore authentic glass, aluminium profile, and metal fabrication installations delivered across Hyderabad villas, apartments, and commercial venues.</p>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="filter-bar reveal" id="project-filters">
          ${filterOptions.map((opt, i) => `
            <button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${opt.value}">
              ${opt.label}
            </button>
          `).join('')}
        </div>
        <div class="projects-grid" id="projects-grid">
          ${PROJECTS.map((p, i) => `
            <div class="project-card reveal reveal-delay-${(i % 4) + 1}" data-category="${p.category}" data-type="${p.type}" data-id="${p.id}" tabindex="0" role="button" aria-label="View details of ${p.title}">
              <img src="${p.image}" alt="${p.title}" loading="lazy" width="600" height="450" />
              <div class="project-card-overlay">
                <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--primary); font-weight:600; margin-bottom:0.25rem;">
                  ${p.category ? p.category.toUpperCase() : 'PROJECT'} • ${p.type ? p.type.toUpperCase() : ''}
                </div>
                <div class="project-card-title">${p.title}</div>
                <div class="project-card-loc">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline; vertical-align:text-top; margin-right:4px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  ${p.location}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- PROJECT LIGHTBOX MODAL CONTAINER -->
    <div class="project-modal-backdrop" id="project-modal" aria-hidden="true" style="display:none;">
      <div class="project-modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
        <button class="project-modal-close" id="modal-close-btn" aria-label="Close dialog">&times;</button>
        <div class="project-modal-body">
          <div class="project-modal-img-wrap">
            <img id="modal-project-img" src="" alt="" />
          </div>
          <div class="project-modal-info">
            <div>
              <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:0.5rem;">
                <span class="tag" id="modal-cat-badge">Glass</span>
                <span class="tag" id="modal-type-badge" style="background:var(--surface);">Residential</span>
              </div>
              <h3 class="h3" id="modal-project-title" style="margin-top:0.5rem; margin-bottom:0.5rem; color:var(--text-primary);"></h3>
              <p id="modal-project-loc" style="color:var(--accent); font-weight:500; font-size:0.9rem; margin-bottom:1rem; display:flex; align-items:center; gap:6px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span></span>
              </p>
              <p id="modal-project-desc" style="color:var(--text-secondary); line-height:1.65; margin-bottom:1.25rem; font-size:0.9rem;"></p>
              
              <div style="margin-bottom:1rem;">
                <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-muted); margin-bottom:0.5rem; font-weight:600;">Services Included</div>
                <div id="modal-services-tags" style="display:flex; flex-wrap:wrap; gap:6px;"></div>
              </div>
            </div>

            <div style="padding-top:1rem; border-top:1px solid var(--border);">
              <a href="/get-quote/" class="btn btn-primary" data-route="/get-quote/" id="modal-quote-link" style="width:100%; justify-content:center;">
                Get Free Quote for Similar Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="cta-section">
      <div class="container">
        <div class="reveal">
          <h2 class="cta-title">Have a custom project in mind?</h2>
          <p class="cta-desc">Free laser site measurement, custom 3D design consultation, and guaranteed factory-direct pricing across Hyderabad.</p>
          <div class="cta-actions">
            <a href="/get-quote/" class="btn btn-primary btn-lg" data-route="/get-quote/">Schedule Free Site Visit</a>
          </div>
        </div>
      </div>
    </section>
  `;

  // Filter functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        if (filter === 'all') {
          card.style.display = '';
        } else if (filter === 'residential' || filter === 'commercial') {
          card.style.display = card.dataset.type === filter ? '' : 'none';
        } else {
          card.style.display = card.dataset.category === filter ? '' : 'none';
        }
      });
    });
  });

  // Modal Lightbox functionality
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalImg = document.getElementById('modal-project-img');
  const modalTitle = document.getElementById('modal-project-title');
  const modalLoc = document.getElementById('modal-project-loc');
  const modalDesc = document.getElementById('modal-project-desc');
  const modalCatBadge = document.getElementById('modal-cat-badge');
  const modalTypeBadge = document.getElementById('modal-type-badge');
  const modalTags = document.getElementById('modal-services-tags');

  function openModal(projectId) {
    const p = PROJECTS.find(item => item.id === projectId);
    if (!p || !modal) return;

    modalImg.src = p.image;
    modalImg.alt = p.title;
    modalTitle.textContent = p.title;
    if (modalLoc.querySelector('span')) {
      modalLoc.querySelector('span').textContent = p.location;
    }
    modalDesc.textContent = p.desc || 'Custom engineered and installed by Star Creative Hyderabad.';
    modalCatBadge.textContent = (p.category || 'Glass').toUpperCase();
    modalTypeBadge.textContent = (p.type || 'Residential').toUpperCase();

    modalTags.innerHTML = (p.services || []).map(s => `
      <span class="service-family-chip">${s}</span>
    `).join('');

    modal.style.display = 'flex';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.dataset.id;
      if (pid) openModal(pid);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const pid = card.dataset.id;
        if (pid) openModal(pid);
      }
    });
  });

  modalClose?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape' && modal?.style.display === 'flex') {
      closeModal();
    }
  });

  initRevealAnimations();
}
