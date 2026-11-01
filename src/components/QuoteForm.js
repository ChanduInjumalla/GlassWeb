import { BUSINESS } from '../data/services.js';

/**
 * Reusable quote form component
 * @param {HTMLElement} container - Element to inject the form into
 * @param {string} preselectedService - Optional pre-selected service name
 */
export function renderQuoteForm(container, preselectedService = '') {
  if (!container) return;

  const formId = `qf-${Math.random().toString(36).slice(2, 7)}`;

  container.innerHTML = `
    <form class="quote-form" id="${formId}" novalidate aria-label="Quote request form">
      <h3 style="font-size:1.125rem; font-weight:700; margin-bottom:1.25rem;">Request a Quote</h3>
      <div class="quote-form-grid">
        <div class="form-field">
          <label class="form-label" for="${formId}-name">Name <span class="req" aria-label="required">*</span></label>
          <input type="text" id="${formId}-name" name="name" class="form-input" placeholder="Your name" autocomplete="name" required aria-required="true" />
          <span class="form-error" role="alert">Please enter your name.</span>
        </div>
        <div class="form-field">
          <label class="form-label" for="${formId}-phone">Phone <span class="req" aria-label="required">*</span></label>
          <input type="tel" id="${formId}-phone" name="phone" class="form-input" placeholder="+91 XXXXX XXXXX" autocomplete="tel" required aria-required="true" />
          <span class="form-error" role="alert">Please enter a valid phone number.</span>
        </div>
        <div class="form-field">
          <label class="form-label" for="${formId}-service">Service</label>
          <select id="${formId}-service" name="service" class="form-select">
            <option value="">Select service...</option>
            <optgroup label="Glass">
              <option ${preselectedService === 'Shower Cubicles' ? 'selected' : ''}>Shower Cubicles</option>
              <option ${preselectedService === 'Glass Doors' ? 'selected' : ''}>Glass Doors</option>
              <option ${preselectedService === 'Sliding Glass Doors' ? 'selected' : ''}>Sliding Glass Doors</option>
              <option ${preselectedService === 'Glass Partitions' ? 'selected' : ''}>Glass Partitions</option>
              <option ${preselectedService === 'Glass Railings' ? 'selected' : ''}>Glass Railings</option>
              <option ${preselectedService === 'Glass Mirrors' ? 'selected' : ''}>Glass Mirrors</option>
              <option ${preselectedService === 'Designer Glass' ? 'selected' : ''}>Designer Glass</option>
              <option ${preselectedService === 'Toughened Glass' ? 'selected' : ''}>Toughened Glass</option>
              <option ${preselectedService === 'Laminated Glass' ? 'selected' : ''}>Laminated Glass</option>
              <option ${preselectedService === 'DGU Glass' ? 'selected' : ''}>DGU Glass</option>
              <option ${preselectedService === 'Frosted Glass' ? 'selected' : ''}>Frosted Glass</option>
              <option ${preselectedService === 'Fluted & Textured Glass' ? 'selected' : ''}>Fluted & Textured Glass</option>
              <option ${preselectedService === 'Glass Canopies & Skylights' ? 'selected' : ''}>Glass Canopies & Skylights</option>
            </optgroup>
            <optgroup label="UPVC">
              <option ${preselectedService?.includes('UPVC Sliding Windows') ? 'selected' : ''}>UPVC Sliding Windows</option>
              <option ${preselectedService?.includes('UPVC Casement') ? 'selected' : ''}>UPVC Casement Windows</option>
              <option ${preselectedService?.includes('UPVC Fixed') ? 'selected' : ''}>UPVC Fixed Windows</option>
              <option ${preselectedService?.includes('UPVC Doors') && !preselectedService?.includes('Sliding') ? 'selected' : ''}>UPVC Doors</option>
              <option ${preselectedService?.includes('UPVC Sliding Doors') ? 'selected' : ''}>UPVC Sliding Doors</option>
              <option ${preselectedService?.includes('UPVC Mesh') ? 'selected' : ''}>UPVC Mesh Windows</option>
            </optgroup>
            <optgroup label="Aluminium">
              <option ${preselectedService?.includes('Aluminium Sliding') ? 'selected' : ''}>Aluminium Sliding Doors</option>
              <option ${preselectedService?.includes('Aluminium Casement') ? 'selected' : ''}>Aluminium Casement Windows</option>
              <option ${preselectedService?.includes('Aluminium Partitions') ? 'selected' : ''}>Aluminium Partitions</option>
              <option ${preselectedService?.includes('Shopfront') ? 'selected' : ''}>Aluminium Shopfronts</option>
              <option ${preselectedService === 'Aluminium Railings' ? 'selected' : ''}>Aluminium Railings</option>
              <option ${preselectedService?.includes('Aluminium Glass Railings') ? 'selected' : ''}>Aluminium Glass Railings</option>
            </optgroup>
            <optgroup label="Iron & Metal">
              <option ${preselectedService?.includes('Gates') ? 'selected' : ''}>Iron & MS Gates</option>
              <option ${preselectedService?.includes('Grills') ? 'selected' : ''}>Iron & MS Grills</option>
              <option ${preselectedService?.includes('Safety Doors') ? 'selected' : ''}>Safety Doors</option>
              <option ${preselectedService === 'Iron & MS Railings' ? 'selected' : ''}>Iron & MS Railings</option>
              <option ${preselectedService?.includes('Staircases') ? 'selected' : ''}>Metal Staircases</option>
              <option ${preselectedService?.includes('Sheds') ? 'selected' : ''}>Metal Sheds & Structures</option>
            </optgroup>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>
        <div class="form-field">
          <label class="form-label" for="${formId}-location">Your Location / Area</label>
          <input type="text" id="${formId}-location" name="location" class="form-input" placeholder="Area in Hyderabad" />
        </div>
        <div class="form-field quote-form-full">
          <label class="form-label" for="${formId}-message">Describe Your Requirement</label>
          <textarea id="${formId}-message" name="message" class="form-textarea" rows="4" placeholder="Dimensions, material preferences, timeline, or any specific requirements..."></textarea>
        </div>
      </div>
      <div style="margin-top:1.25rem;">
        <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center;" id="${formId}-submit">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          ${preselectedService ? `Request ${preselectedService} Quote` : 'Send Enquiry'}
        </button>
        <p style="font-size:0.8rem; color:var(--text-muted); text-align:center; margin-top:0.625rem;">
          We'll respond to arrange a free site visit. No spam.
        </p>
      </div>
      <div class="form-success" id="${formId}-success" aria-live="polite">
        <div class="form-success-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h4 style="font-size:1.0625rem; font-weight:700; margin-bottom:0.5rem;">Quote Request Sent</h4>
        <p style="font-size:0.9rem; color:var(--text-secondary);">Thank you. We'll be in touch shortly to arrange a site visit and provide your quote.</p>
      </div>
    </form>
  `;

  // Form validation and submit
  const form = document.getElementById(formId);
  const successEl = document.getElementById(`${formId}-success`);

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const nameField = form.querySelector('[name="name"]');
    const nameParent = nameField?.closest('.form-field');
    if (nameField && !nameField.value.trim()) {
      nameParent?.classList.add('has-error');
      valid = false;
    } else { nameParent?.classList.remove('has-error'); }

    const phoneField = form.querySelector('[name="phone"]');
    const phoneParent = phoneField?.closest('.form-field');
    if (phoneField && !/^[+\d][\d\s-]{7,}$/.test(phoneField.value.trim())) {
      phoneParent?.classList.add('has-error');
      valid = false;
    } else { phoneParent?.classList.remove('has-error'); }

    if (!valid) return;

    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    // In production: send to real backend
    // For now: mailto fallback
    setTimeout(() => {
      form.style.display = 'none';
      if (successEl) {
        successEl.classList.add('show');
        successEl.focus?.();
      }
    }, 700);
  });
}
