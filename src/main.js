/**
 * Star Creative — Main Application Entry Point
 * Registers all routes and initialises the SPA
 */

import './style.css';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { registerRoute, initRouter, navigate } from './router.js';
import { ALL_SERVICES, SERVICE_HUBS } from './data/services.js';
import { renderHomePage } from './pages/Home.js';
import { renderServicePage } from './pages/ServicePage.js';
import { renderServiceHubPage } from './pages/ServiceHub.js';
import { renderProjectsPage } from './pages/Projects.js';
import { renderAboutPage } from './pages/About.js';
import { renderContactPage } from './pages/Contact.js';
import { renderGetQuotePage } from './pages/GetQuote.js';
import { renderFAQPage } from './pages/FAQ.js';
import { renderProcessPage } from './pages/Process.js';
import { renderServiceAreasPage } from './pages/ServiceAreas.js';
import { renderMaterialsGuidePage } from './pages/MaterialsGuide.js';
import { renderQualityPage } from './pages/Quality.js';

// --------------------------------------------------------
// Initialise static chrome
// --------------------------------------------------------
renderHeader();
renderFooter();

// --------------------------------------------------------
// Register routes
// --------------------------------------------------------

// Homepage
registerRoute('/', renderHomePage);
registerRoute('/index.html', renderHomePage);

// Service hubs
registerRoute('/glass-services-hyderabad/', () => renderServiceHubPage(SERVICE_HUBS.find(h => h.slug === 'glass-services-hyderabad')));
registerRoute('/upvc-windows-doors-hyderabad/', () => renderServiceHubPage(SERVICE_HUBS.find(h => h.slug === 'upvc-windows-doors-hyderabad')));
registerRoute('/aluminium-doors-windows-hyderabad/', () => renderServiceHubPage(SERVICE_HUBS.find(h => h.slug === 'aluminium-doors-windows-hyderabad')));
registerRoute('/iron-metal-fabrication-hyderabad/', () => renderServiceHubPage(SERVICE_HUBS.find(h => h.slug === 'iron-metal-fabrication-hyderabad')));

// Individual service pages
ALL_SERVICES.forEach(service => {
  if (!SERVICE_HUBS.find(h => h.slug === service.slug)) {
    registerRoute(`/${service.slug}/`, () => renderServicePage(service));
    registerRoute(`/${service.slug}`, () => renderServicePage(service));
  }
});

// Dynamic service route fallback
registerRoute('/:service', (slug) => {
  const service = ALL_SERVICES.find(s => s.slug === slug);
  if (service) {
    renderServicePage(service);
  } else {
    navigate('/');
  }
});

// Projects
registerRoute('/projects/', renderProjectsPage);
registerRoute('/projects', renderProjectsPage);

// Residential / commercial landing pages
registerRoute('/residential-glass-solutions-hyderabad/', renderProjectsPage);
registerRoute('/commercial-glass-solutions-hyderabad/', renderProjectsPage);

// About
registerRoute('/about/', renderAboutPage);
registerRoute('/about', renderAboutPage);

// Process
registerRoute('/process/', renderProcessPage);
registerRoute('/process', renderProcessPage);

// FAQ
registerRoute('/faq/', renderFAQPage);
registerRoute('/faq', renderFAQPage);

// Contact
registerRoute('/contact/', renderContactPage);
registerRoute('/contact', renderContactPage);

// Get Quote
registerRoute('/get-quote/', renderGetQuotePage);
registerRoute('/get-quote', renderGetQuotePage);

// Service areas
registerRoute('/service-areas-hyderabad/', renderServiceAreasPage);

// Materials guide
registerRoute('/glass-materials-guide-hyderabad/', renderMaterialsGuidePage);

// Quality & warranty
registerRoute('/quality-warranty-glass-aluminium-hyderabad/', renderQualityPage);

// --------------------------------------------------------
// Boot the router
// --------------------------------------------------------
initRouter();
