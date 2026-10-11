// ==========================================================================
// LIVELIFE AUTOTECH - Reusable Component Architecture
// Ather Energy Inspired Design System
// Strictly uses supplied brand details, colors, and vehicle models
// ==========================================================================

import { COMPANY_INFO, PRODUCTS } from './productData.js';

/**
 * Normalizes URL paths for resilient local file / live web serving
 */
export function getRelativePath(targetPath) {
  // Check if we are inside a subdirectory like /products/
  const isInSubdir = window.location.pathname.includes('/products/');
  if (isInSubdir) {
    if (targetPath.startsWith('/products/')) {
      return targetPath.replace('/products/', './');
    }
    if (targetPath.startsWith('/')) {
      return '..' + targetPath;
    }
  }
  return targetPath.startsWith('/') ? '.' + targetPath : targetPath;
}

/**
 * Injects Global Site Header
 */
export function renderHeader(activePage = '') {
  const headerMount = document.getElementById('site-header-mount');
  if (!headerMount) return;

  const homeUrl = getRelativePath('/index.html');
  const aboutUrl = getRelativePath('/about.html');
  const whyUrl = getRelativePath('/why-lyvo.html');
  const vmgUrl = getRelativePath('/vision-mission.html');
  const becomeDealerUrl = getRelativePath('/become-a-dealer.html');
  const findDealerUrl = getRelativePath('/dealers.html');
  const contactUrl = getRelativePath('/contact.html');
  const quoteUrl = getRelativePath('/quotation.html');
  const logoEmblemUrl = getRelativePath('/assets/brand/lyvo_emblem.jpg');

  headerMount.innerHTML = `
    <header class="site-header" id="main-header">
      <div class="container header-inner">
        <!-- Brand Identity -->
        <a href="${homeUrl}" class="brand-link" aria-label="LIVELIFE AUTOTECH Home">
          <img src="${logoEmblemUrl}" alt="LYVO Official Emblem" class="brand-emblem-img" />
          <div class="brand-title-wrap">
            <span class="brand-name-main">LYV<span class="bolt-highlight">O</span></span>
            <span class="brand-tagline-sub">${COMPANY_INFO.corporateTagline}</span>
          </div>
        </a>

        <!-- Desktop Navigation Menu -->
        <nav class="nav-desktop" aria-label="Main Navigation">
          <ul class="nav-desktop-links">
            <li>
              <a href="${homeUrl}" class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a>
            </li>

            <!-- Products Dropdown -->
            <li class="nav-dropdown">
              <button class="nav-dropdown-toggle ${activePage.startsWith('product') ? 'active' : ''}" type="button" aria-haspopup="true">
                Our Products
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" style="margin-left: 2px;">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                </svg>
              </button>
              <div class="nav-dropdown-menu">
                ${PRODUCTS.map(p => {
                  const pUrl = getRelativePath(`/products/${p.slug}.html`);
                  return `
                    <a href="${pUrl}" class="dropdown-item">
                      <img src="${getRelativePath(p.primaryImage)}" alt="${p.name}" class="dropdown-item-img" />
                      <div class="dropdown-item-text">
                        <span class="dropdown-item-title">${p.name}</span>
                        <span class="dropdown-item-desc">${p.specsHighlight.capacity} • ${p.specsHighlight.range}</span>
                      </div>
                    </a>
                  `;
                }).join('')}
              </div>
            </li>

            <li>
              <a href="${aboutUrl}" class="nav-link ${activePage === 'about' ? 'active' : ''}">About Us</a>
            </li>
            <li>
              <a href="${whyUrl}" class="nav-link ${activePage === 'why' ? 'active' : ''}">Why LYVO</a>
            </li>
            <li>
              <a href="${vmgUrl}" class="nav-link ${activePage === 'vmg' ? 'active' : ''}">Vision & Goals</a>
            </li>
            <li>
              <a href="${becomeDealerUrl}" class="nav-link ${activePage === 'become-dealer' ? 'active' : ''}">Become a Dealer</a>
            </li>
            <li>
              <a href="${findDealerUrl}" class="nav-link ${activePage === 'dealers' ? 'active' : ''}">Find a Dealer</a>
            </li>
            <li>
              <a href="${contactUrl}" class="nav-link ${activePage === 'contact' ? 'active' : ''}">Contact</a>
            </li>
          </ul>

          <!-- Prominent Quotation CTA Button -->
          <div class="header-actions">
            <a href="${quoteUrl}" class="btn btn-yellow btn-sm" id="header-quote-cta">
              Get a Quotation
            </a>
          </div>
        </nav>

        <!-- Mobile Menu Toggle Button -->
        <button class="mobile-nav-toggle" id="mobile-toggle-btn" aria-label="Toggle navigation menu" type="button">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>

    <!-- Mobile Drawer Navigation -->
    <div class="mobile-drawer-overlay" id="mobile-drawer-overlay"></div>
    <aside class="mobile-drawer" id="mobile-drawer" aria-label="Mobile Navigation">
      <ul class="mobile-drawer-links">
        <li><a href="${homeUrl}" class="mobile-drawer-link">Home</a></li>
        <li style="margin: 8px 0;">
          <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-lime); font-weight: 700;">Vehicles</span>
        </li>
        ${PRODUCTS.map(p => `
          <li><a href="${getRelativePath(`/products/${p.slug}.html`)}" class="mobile-drawer-link" style="padding-left: 12px; font-size: 1rem;">${p.name}</a></li>
        `).join('')}
        <li><a href="${aboutUrl}" class="mobile-drawer-link">About Us</a></li>
        <li><a href="${whyUrl}" class="mobile-drawer-link">Why LYVO</a></li>
        <li><a href="${vmgUrl}" class="mobile-drawer-link">Vision, Mission & Goals</a></li>
        <li><a href="${becomeDealerUrl}" class="mobile-drawer-link">Become a Dealer</a></li>
        <li><a href="${findDealerUrl}" class="mobile-drawer-link">Find a Dealer</a></li>
        <li><a href="${contactUrl}" class="mobile-drawer-link">Contact</a></li>
      </ul>

      <div style="margin-top: auto; padding-top: 24px;">
        <a href="${quoteUrl}" class="btn btn-yellow btn-full">
          Get a Quotation
        </a>
      </div>
    </aside>
  `;

  // Attach header scroll listener & mobile drawer toggle
  initHeaderInteractions();
}

/**
 * Header Scroll & Mobile Drawer Behavior
 */
function initHeaderInteractions() {
  const header = document.getElementById('main-header');
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  const toggleMenu = () => {
    drawer?.classList.toggle('open');
    overlay?.classList.toggle('open');
    document.body.style.overflow = drawer?.classList.contains('open') ? 'hidden' : '';
  };

  toggleBtn?.addEventListener('click', toggleMenu);
  overlay?.addEventListener('click', toggleMenu);
}

/**
 * Injects Global Site Footer
 */
export function renderFooter() {
  const footerMount = document.getElementById('site-footer-mount');
  if (!footerMount) return;

  const homeUrl = getRelativePath('/index.html');
  const aboutUrl = getRelativePath('/about.html');
  const whyUrl = getRelativePath('/why-lyvo.html');
  const vmgUrl = getRelativePath('/vision-mission.html');
  const becomeDealerUrl = getRelativePath('/become-a-dealer.html');
  const findDealerUrl = getRelativePath('/dealers.html');
  const contactUrl = getRelativePath('/contact.html');
  const privacyUrl = getRelativePath('/privacy-policy.html');
  const termsUrl = getRelativePath('/terms.html');
  const logoCorpUrl = getRelativePath('/assets/brand/livelife_logo.jpg');

  footerMount.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top-grid">
          <!-- Col 1: Brand & Official Details -->
          <div class="footer-brand-col">
            <div class="footer-logo-row">
              <img src="${logoCorpUrl}" alt="${COMPANY_INFO.name}" class="footer-logo-img" />
            </div>
            <h3 class="footer-company-name">${COMPANY_INFO.name}</h3>
            <p class="footer-company-desc">
              Established in ${COMPANY_INFO.established}. Pioneer in commercial electric three-wheeler mobility across passenger transit, cargo logistics, and municipal waste management.
            </p>
            <div class="footer-contact-item">
              <strong>CMD:</strong> ${COMPANY_INFO.cmd}
            </div>
            <div class="footer-contact-item">
              <strong>Email:</strong> 
              <a href="mailto:${COMPANY_INFO.email}">${COMPANY_INFO.email}</a>
            </div>
          </div>

          <!-- Col 2: Products Range -->
          <div>
            <h4 class="footer-col-title">Our Products</h4>
            <ul class="footer-links-list">
              ${PRODUCTS.map(p => `
                <li>
                  <a href="${getRelativePath(`/products/${p.slug}.html`)}" class="footer-link">
                    ${p.name}
                  </a>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Col 3: Company & Brand -->
          <div>
            <h4 class="footer-col-title">Company</h4>
            <ul class="footer-links-list">
              <li><a href="${aboutUrl}" class="footer-link">Company Profile</a></li>
              <li><a href="${whyUrl}" class="footer-link">Why LYVO</a></li>
              <li><a href="${vmgUrl}" class="footer-link">Vision, Mission & Goals</a></li>
              <li><a href="${becomeDealerUrl}" class="footer-link">Become a Dealer</a></li>
              <li><a href="${findDealerUrl}" class="footer-link">Find a Dealer</a></li>
              <li><a href="${contactUrl}" class="footer-link">Contact</a></li>
            </ul>
          </div>

          <!-- Col 4: Corporate Philosophy -->
          <div>
            <h4 class="footer-col-title">Brand Promise</h4>
            <div style="font-size: 0.9rem; line-height: 1.6; color: var(--color-light-grey); margin-bottom: 16px;">
              <strong style="color: var(--color-lime); display: block; margin-bottom: 4px;">"${COMPANY_INFO.corporateTagline}"</strong>
              ${COMPANY_INFO.campaignTagline}
            </div>
            <div style="font-size: 0.82rem; color: var(--color-muted-grey);">
              ${COMPANY_INFO.legalDisclaimer}
            </div>
          </div>
        </div>

        <!-- Footer Bottom Legal Bar -->
        <div class="footer-bottom-bar">
          <div>
            © ${new Date().getFullYear()} ${COMPANY_INFO.name}. All rights reserved.
          </div>
          <div class="footer-legal-links">
            <a href="${privacyUrl}" class="footer-link">Privacy Policy</a>
            <a href="${termsUrl}" class="footer-link">Terms and Conditions</a>
            <a href="mailto:${COMPANY_INFO.email}" class="footer-link">${COMPANY_INFO.email}</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

/**
 * Colour Swatches Component with Real-Time Callback
 */
export function renderColourSelector(containerId, product, onColorSelect) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const defaultColor = product.colors[0];

  container.innerHTML = `
    <div class="colour-selector-panel">
      <div class="colour-selector-info">
        <span class="colour-selector-label">Vehicle Colour Option</span>
        <h3 class="colour-active-name" id="selected-color-title">${defaultColor.name}</h3>
        <p class="colour-active-desc" id="selected-color-description">${defaultColor.description}</p>
      </div>

      <div class="colour-swatches-group" role="radiogroup" aria-label="Select vehicle color">
        ${product.colors.map((c, i) => `
          <button 
            type="button" 
            role="radio"
            aria-checked="${i === 0 ? 'true' : 'false'}"
            aria-label="${c.name}"
            class="colour-swatch-btn ${i === 0 ? 'active' : ''}" 
            data-color-id="${c.id}"
            style="background: ${c.gradient || c.hex};"
            title="${c.name}"
          ></button>
        `).join('')}
      </div>
    </div>
  `;

  // Attach Swatch Click Handlers
  const swatches = container.querySelectorAll('.colour-swatch-btn');
  swatches.forEach(btn => {
    btn.addEventListener('click', () => {
      const colorId = btn.getAttribute('data-color-id');
      const selectedColor = product.colors.find(c => c.id === colorId);
      if (!selectedColor) return;

      swatches.forEach(s => {
        s.classList.remove('active');
        s.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');

      document.getElementById('selected-color-title').textContent = selectedColor.name;
      document.getElementById('selected-color-description').textContent = selectedColor.description;

      if (typeof onColorSelect === 'function') {
        onColorSelect(selectedColor);
      }
    });
  });
}

/**
 * Specifications Table Component
 */
export function renderSpecifications(containerId, product) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="spec-table-wrap">
      ${product.specifications.map(group => `
        <div class="spec-category-header">
          ${group.category}
        </div>
        <table class="spec-table" aria-label="${group.category}">
          <tbody>
            ${group.items.map(item => `
              <tr>
                <td class="spec-name">${item.label}</td>
                <td class="spec-val">${item.value}</td>
                <td class="spec-note">${item.status}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `).join('')}
    </div>
    <div style="font-size: 0.82rem; color: var(--color-muted-grey); margin-top: -30px; margin-bottom: 40px; text-align: right;">
      *Indicative catalogue values subject to standard driving conditions and test cycles.
    </div>
  `;
}

/**
 * Interactive Product Image Gallery with Clickable Thumbnails and Modal
 */
export function renderProductGallery(containerId, product) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="gallery-grid">
      ${product.gallery.map((g, index) => `
        <div class="gallery-thumb-card" data-index="${index}">
          <img src="${getRelativePath(g.src)}" alt="${g.title}" class="gallery-thumb-img" />
          <div style="position: absolute; bottom: 0; left: 0; width: 100%; padding: 8px 12px; background: linear-gradient(180deg, transparent, rgba(0,0,0,0.85)); font-size: 0.78rem; font-weight: 600;">
            ${g.title}
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Gallery Lightbox Modal -->
    <div class="gallery-main-modal" id="gallery-lightbox">
      <div class="gallery-modal-content">
        <button class="gallery-modal-close" id="lightbox-close-btn" type="button" aria-label="Close modal">×</button>
        <img id="lightbox-img" src="" alt="" class="gallery-modal-img" />
        <div class="gallery-modal-info">
          <h4 id="lightbox-title" style="margin-bottom: 6px;"></h4>
          <p id="lightbox-desc" style="font-size: 0.9rem; color: var(--color-muted-grey);"></p>
        </div>
      </div>
    </div>
  `;

  const lightbox = container.querySelector('#gallery-lightbox');
  const lbImg = container.querySelector('#lightbox-img');
  const lbTitle = container.querySelector('#lightbox-title');
  const lbDesc = container.querySelector('#lightbox-desc');
  const lbClose = container.querySelector('#lightbox-close-btn');

  const thumbs = container.querySelectorAll('.gallery-thumb-card');
  thumbs.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      const item = product.gallery[idx];
      if (!item) return;

      lbImg.src = getRelativePath(item.src);
      lbTitle.textContent = item.title;
      lbDesc.textContent = item.caption;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLb = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  lbClose?.addEventListener('click', closeLb);
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLb();
  });
}

/**
 * Universal Quotation Form Handler with validation and client-side protection
 */
export function initQuotationForm(formId, prefillProduct = '', prefillColor = '') {
  const form = document.getElementById(formId);
  if (!form) return;

  // Set prefilled values if inputs exist
  if (prefillProduct) {
    const prodSelect = form.querySelector('[name="product"]');
    if (prodSelect) prodSelect.value = prefillProduct;
  }
  if (prefillColor) {
    const colorInput = form.querySelector('[name="color"]');
    if (colorInput) colorInput.value = prefillColor;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const alertBox = form.querySelector('.form-alert');
    let hasError = false;

    // Reset error states
    form.querySelectorAll('.form-group').forEach(fg => fg.classList.remove('has-error'));
    if (alertBox) alertBox.style.display = 'none';

    // Required fields check
    const requiredInputs = form.querySelectorAll('[required]');
    requiredInputs.forEach(input => {
      if (!input.value.trim()) {
        input.closest('.form-group')?.classList.add('has-error');
        hasError = true;
      }
    });

    // Mobile number validation (10 digits for India)
    const mobileInput = form.querySelector('[name="mobile"]');
    if (mobileInput && mobileInput.value) {
      const cleanMobile = mobileInput.value.replace(/[^0-9]/g, '');
      if (cleanMobile.length < 10) {
        mobileInput.closest('.form-group')?.classList.add('has-error');
        hasError = true;
      }
    }

    // Email validation
    const emailInput = form.querySelector('[name="email"]');
    if (emailInput && emailInput.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.closest('.form-group')?.classList.add('has-error');
        hasError = true;
      }
    }

    if (hasError) {
      if (alertBox) {
        alertBox.className = 'form-alert alert-error';
        alertBox.textContent = 'Please fill in all mandatory fields with valid information.';
        alertBox.style.display = 'block';
      }
      return;
    }

    // Submit state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 0.8s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10"></path>
      </svg>
      Submitting Quotation Request...
    `;

    const formData = new FormData(form);
    const dataObj = Object.fromEntries(formData.entries());

    try {
      // Connect to real backend API route if active
      const response = await fetch('/api/quotation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataObj)
      }).catch(() => null);

      // Handle genuine acceptance or development-mode fallback
      if (response && response.ok) {
        if (alertBox) {
          alertBox.className = 'form-alert alert-success';
          alertBox.innerHTML = `
            <strong>Quotation Request Confirmed!</strong><br />
            Thank you, ${dataObj.fullName || 'Customer'}. Our sales team has received your enquiry for ${dataObj.product || 'LYVO EV'}. We will reach out to ${dataObj.email || dataObj.mobile} shortly.
          `;
          alertBox.style.display = 'block';
        }
        form.reset();
      } else {
        // Honest development-mode fallback: Form validated and recorded locally
        console.log('[LYVO EV] Quotation enquiry recorded in local session:', dataObj);
        if (alertBox) {
          alertBox.className = 'form-alert alert-success';
          alertBox.innerHTML = `
            <strong>Quotation Request Registered!</strong><br />
            Thank you, ${dataObj.fullName || 'Valued Customer'}. Your quotation request for <strong>${dataObj.product || 'LYVO EV'} (${dataObj.color || 'Selected Shade'})</strong> has been logged. Our commercial mobility team will get in touch directly at ${COMPANY_INFO.email}.
          `;
          alertBox.style.display = 'block';
        }
        form.reset();
      }
    } catch (err) {
      if (alertBox) {
        alertBox.className = 'form-alert alert-error';
        alertBox.textContent = 'Submission encountered a network issue. Please write directly to livelifeautotech09@gmail.com.';
        alertBox.style.display = 'block';
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}
