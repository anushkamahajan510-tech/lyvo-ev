// ==========================================================================
// LIVELIFE AUTOTECH - LYVO Smart Search & Discoverability Engine
// Powers the search bar at the top of the website
// Client-side instant keyword & intent matching inspired by premium automotive UX
// ==========================================================================

import { COMPANY_INFO, PRODUCTS, BRAND_PILLARS, VISION_MISSION_GOALS, DEALER_REGIONS } from './productData.js';
import { getRelativePath } from './components.js';

export const SUGGESTED_QUERIES = [
  "Which LYVO vehicle is right for my business?",
  "Tell me about LYVO Passenger 6+1.",
  "What is the LYVO Loader used for?",
  "Tell me about the LYVO Garbage vehicle.",
  "How can I become a LYVO dealer?",
  "Where can I find a LYVO dealer?",
  "How can I request a quotation?",
  "Tell me about LIVELIFE AUTOTECH."
];

// Curated Intent & Content Knowledge Base
const KNOWLEDGE_BASE = [
  {
    id: "company-overview",
    keywords: ["company", "about", "livelife", "autotech", "cmd", "sanjay", "mahajan", "established", "2018", "who", "history", "founded", "profile"],
    title: "About LIVELIFE AUTOTECH PRIVATE LIMITED",
    summary: "LIVELIFE AUTOTECH PRIVATE LIMITED was established in 2018 under the leadership of CMD Mr. Sanjay Mahajan. The company manufactures commercial electric vehicles under the brand LYVO across passenger transit, commercial cargo, and municipal waste management.",
    badge: "Corporate Profile",
    linkText: "View Complete Company Profile",
    linkUrl: "/about.html",
    highlights: [
      { label: "Established", val: "2018" },
      { label: "CMD", val: "Mr. Sanjay Mahajan" },
      { label: "Brand", val: "LYVO" },
      { label: "Official Email", val: "livelifeautotech09@gmail.com" },
      { label: "Corporate Tagline", val: "Life, On the Move." }
    ]
  },
  {
    id: "which-vehicle",
    keywords: ["which", "vehicle", "right", "business", "choose", "compare", "recommend", "options", "selection", "best", "models", "range", "fleet"],
    title: "Choosing the Right LYVO for Your Business",
    summary: "LIVELIFE AUTOTECH manufactures three specialized electric three-wheelers: (1) LYVO Passenger 6+1 for intra-city commuter transport and taxi routes; (2) LYVO Loader with 750 kg payload for intra-city cargo logistics and deliveries; (3) LYVO Garbage with 500 kg capacity and segregated bins for municipal sanitation.",
    badge: "Product Advisory",
    linkText: "Explore Vehicle Range",
    linkUrl: "/index.html#products-range",
    highlights: [
      { label: "Passenger Commuting", val: "LYVO Passenger 6+1" },
      { label: "Commercial Cargo", val: "LYVO Loader (750 kg)" },
      { label: "Municipal Waste", val: "LYVO Garbage (500 kg)" }
    ]
  },
  {
    id: "passenger-details",
    keywords: ["passenger", "rickshaw", "6+1", "seater", "commute", "taxi", "fare", "auto", "seat", "legroom", "comfort", "passenger auto", "lyvo passenger"],
    title: "LYVO Passenger 6+1 Electric Rickshaw",
    summary: "An electric passenger three-wheeler engineered for everyday commuting with 6+1 passenger seating, 120+ km* range per charge, 45 km/h top speed, 90-minute fast charging (0-80%), and an all-weather canopy.",
    badge: "Passenger Mobility",
    linkText: "Explore LYVO Passenger 6+1",
    linkUrl: "/products/lyvo-passenger.html",
    highlights: [
      { label: "Capacity", val: "6+1 Seater" },
      { label: "Range", val: "120+ km* / Charge" },
      { label: "Fast Charge", val: "90 Mins (0-80%)" },
      { label: "Battery Warranty", val: "5 Years" }
    ]
  },
  {
    id: "loader-details",
    keywords: ["loader", "cargo", "goods", "payload", "capacity", "freight", "bed", "delivery", "fmcg", "truck", "haulage", "750", "flatbed", "lyvo loader"],
    title: "LYVO Loader Commercial Cargo Vehicle",
    summary: "A heavy-duty electric cargo three-wheeler designed for tough Indian roads. Features 750 kg payload capacity, 2770 x 980 x 1270 mm cargo bed, 2.5 kW powertrain, 25% gradeability, and modular commercial body options.",
    badge: "Cargo Logistics",
    linkText: "Explore LYVO Loader",
    linkUrl: "/products/lyvo-loader.html",
    highlights: [
      { label: "Payload Capacity", val: "Up to 750 kg" },
      { label: "Bed Dimensions", val: "2770 x 980 x 1270 mm" },
      { label: "Gradeability", val: "25% (Flyover ready)" },
      { label: "Motor Power", val: "2.5 kW" }
    ]
  },
  {
    id: "garbage-details",
    keywords: ["garbage", "waste", "clean", "city", "sanitation", "bins", "dry", "wet", "municipal", "tipping", "segregated", "leak", "500", "civic", "lyvo garbage"],
    title: "LYVO Garbage Electric Sanitation Vehicle",
    summary: "Built for urban local bodies and townships under the campaign 'Clean City. Green City.' Features 500 kg waste capacity, partitioned dry & wet bins, 100% leak-proof basin, easy-lift tipping mechanism, and rooftop safety beacon.",
    badge: "Waste Management",
    linkText: "Explore LYVO Garbage",
    linkUrl: "/products/lyvo-garbage.html",
    highlights: [
      { label: "Waste Capacity", val: "500 kg Max" },
      { label: "Chamber", val: "Dry & Wet Segregated" },
      { label: "Hygiene", val: "100% Leak-Proof Basin" },
      { label: "Mechanism", val: "Easy-Lift Tipping" }
    ]
  },
  {
    id: "specs-search",
    keywords: ["specs", "specifications", "range", "battery", "motor", "power", "charging", "speed", "lfp", "dimension", "dimensions", "gradeability", "warranty"],
    title: "LYVO Technical Specifications & Performance",
    summary: "Verified technical parameters across all LYVO models: 120+ km* range per charge, 2.5 kW electric powertrain, safe Lithium Iron Phosphate (LFP) battery chemistry, 0-80% fast charging in 90 minutes, and 25% gradeability.",
    badge: "Specifications",
    linkText: "Compare Specifications on Lineup",
    linkUrl: "/index.html#products-range",
    highlights: [
      { label: "Powertrain", val: "2.5 kW High-Torque" },
      { label: "Fast Charge", val: "0-80% in 90 Mins" },
      { label: "Battery Chemistry", val: "LFP Safe Technology" },
      { label: "Indicative Range", val: "120+ km* / Charge" }
    ]
  },
  {
    id: "colours-search",
    keywords: ["color", "colour", "colours", "colors", "shade", "paint", "yellow", "green", "black", "white", "dual", "tone", "dual-tone"],
    title: "LYVO Factory Colour Options",
    summary: "Each LYVO vehicle is available in three curated finishes: (1) Signature Dual-Tone (Signature Automotive Yellow & Green livery); (2) Onyx Black (Metallic Charcoal Black); (3) Pearl White (Clean fleet finish).",
    badge: "Colour Selection",
    linkText: "View Colour Customisation",
    linkUrl: "/products/lyvo-passenger.html",
    highlights: [
      { label: "Primary Finish", val: "Signature Dual-Tone" },
      { label: "Metallic Finish", val: "Onyx Black" },
      { label: "Fleet Finish", val: "Pearl White" }
    ]
  },
  {
    id: "become-dealer",
    keywords: ["become", "dealer", "dealership", "partner", "franchise", "distributor", "showroom", "agency", "partnership", "invest", "apply"],
    title: "Dealership Opportunities with LIVELIFE AUTOTECH",
    summary: "LIVELIFE AUTOTECH is actively onboarding authorized commercial EV dealership partners across passenger, cargo, and waste-management segments with direct factory training and spare parts support.",
    badge: "Dealership Opportunity",
    linkText: "Submit Dealer Application",
    linkUrl: "/become-a-dealer.html",
    highlights: [
      { label: "Opportunity", val: "Passenger, Cargo & Waste" },
      { label: "Support", val: "Factory Training & Spares" },
      { label: "Official Desk", val: "livelifeautotech09@gmail.com" }
    ]
  },
  {
    id: "find-dealer",
    keywords: ["find", "locate", "dealer", "where", "store", "showroom", "pune", "mumbai", "delhi", "ahmedabad", "location", "address", "near", "hubs"],
    title: "Find Authorized Dealers & Regional Hubs",
    summary: "Explore our priority distribution hubs across Maharashtra, Delhi NCR, Gujarat, Uttar Pradesh, Karnataka, and Tamil Nadu. For locations without an authorized showroom, direct factory supply is provided.",
    badge: "Network Locator",
    linkText: "Open Dealer Locator",
    linkUrl: "/dealers.html",
    highlights: [
      { label: "Priority Hubs", val: "MH, DL, GJ, UP, KA, TN" },
      { label: "Search by", val: "City or PIN Code" },
      { label: "Factory Assistance", val: "Direct Dispatch Active" }
    ]
  },
  {
    id: "quotation",
    keywords: ["quotation", "quote", "price", "pricing", "cost", "how", "much", "buy", "purchase", "order", "subsidy", "finance", "loan", "booking"],
    title: "Request an Official Vehicle Quotation",
    summary: "Receive official pricing, commercial financing options, subsidy guidance, and fleet delivery schedules for LYVO Passenger 6+1, LYVO Loader, or LYVO Garbage.",
    badge: "Sales Quotation",
    linkText: "Request Quotation Now",
    linkUrl: "/quotation.html",
    highlights: [
      { label: "Models Covered", val: "Passenger, Loader, Garbage" },
      { label: "Turnaround", val: "Direct Corporate Response" },
      { label: "Options", val: "Financing & Fleet Guidance" }
    ]
  },
  {
    id: "contact",
    keywords: ["contact", "email", "phone", "call", "address", "reach", "office", "support", "help", "headquarters"],
    title: "Contact LIVELIFE AUTOTECH Corporate Office",
    summary: "Connect directly with our corporate team at livelifeautotech09@gmail.com. We provide responsive customer service, technical advisory, and institutional procurement coordination.",
    badge: "Corporate Contact",
    linkText: "Go to Contact Page",
    linkUrl: "/contact.html",
    highlights: [
      { label: "Company", val: "LIVELIFE AUTOTECH PVT LTD" },
      { label: "Official Email", val: "livelifeautotech09@gmail.com" },
      { label: "CMD", val: "Mr. Sanjay Mahajan" }
    ]
  },
  {
    id: "why-lyvo",
    keywords: ["why", "why lyvo", "advantage", "benefit", "philosophy", "savings", "earn clean", "move green", "roi", "reliability"],
    title: "Why LYVO — Commercial EV Brand Philosophy",
    summary: "Engineered around real-world commercial mobility needs: Purpose-focused vehicles, multiple commercial applications, thoughtful product design, customer support ecosystem, and proven lower cost per kilometer.",
    badge: "Brand Philosophy",
    linkText: "Read Why LYVO Philosophy",
    linkUrl: "/why-lyvo.html",
    highlights: [
      { label: "Core Concept", val: "Life, On the Move." },
      { label: "Operating Savings", val: "Up to 4x Higher Earnings" },
      { label: "Battery Chemistry", val: "5-Year Long-Life LFP" }
    ]
  }
];

export class SmartSearch {
  constructor(options = {}) {
    this.mountId = options.mountId || 'smart-search-mount';
    this.container = document.getElementById(this.mountId);
    if (!this.container) return;
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    this.container.innerHTML = `
      <div class="smart-search-wrapper" id="smart-search-box">
        <div class="smart-search-bar-shell">
          <div class="smart-search-icon-wrap" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          <input 
            type="text" 
            id="smart-search-input" 
            class="smart-search-input" 
            placeholder="Search LYVO vehicles, specifications, dealership, or company info..." 
            autocomplete="off"
            aria-label="Search LYVO vehicles, specifications, or dealers"
          />

          <button type="button" id="smart-search-clear" class="smart-search-clear-btn" style="display: none;" aria-label="Clear search input">
            ✕
          </button>

          <button type="button" id="smart-search-submit" class="btn btn-yellow btn-sm smart-search-btn">
            Search
          </button>
        </div>

        <!-- Suggested Quick Questions -->
        <div class="smart-search-suggestions">
          <span class="suggestions-label">Suggested:</span>
          <div class="suggestions-chips-wrap">
            ${SUGGESTED_QUERIES.slice(0, 5).map(q => `
              <button type="button" class="search-chip-btn" data-query="${q}">
                ${q}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Live Results Container -->
        <div class="smart-search-results-panel" id="smart-search-results" style="display: none;" role="region" aria-live="polite">
          <!-- Injected dynamically -->
        </div>
      </div>
    `;
  }

  bindEvents() {
    const input = this.container.querySelector('#smart-search-input');
    const submitBtn = this.container.querySelector('#smart-search-submit');
    const clearBtn = this.container.querySelector('#smart-search-clear');
    const chipBtns = this.container.querySelectorAll('.search-chip-btn');
    const resultsPanel = this.container.querySelector('#smart-search-results');

    const handleSearch = () => {
      const q = input.value.trim();
      if (!q) {
        resultsPanel.style.display = 'none';
        clearBtn.style.display = 'none';
        return;
      }
      clearBtn.style.display = 'block';
      this.executeSearch(q);
    };

    input.addEventListener('input', () => {
      if (input.value.trim().length > 1) {
        handleSearch();
      } else if (!input.value.trim()) {
        resultsPanel.style.display = 'none';
        clearBtn.style.display = 'none';
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch();
      } else if (e.key === 'Escape') {
        resultsPanel.style.display = 'none';
        clearBtn.style.display = 'none';
        input.blur();
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.container.contains(e.target)) {
        resultsPanel.style.display = 'none';
      }
    });

    submitBtn.addEventListener('click', handleSearch);

    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.style.display = 'none';
      resultsPanel.style.display = 'none';
      input.focus();
    });

    chipBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const queryText = btn.getAttribute('data-query');
        input.value = queryText;
        clearBtn.style.display = 'block';
        this.executeSearch(queryText);
      });
    });
  }

  executeSearch(query) {
    const resultsPanel = this.container.querySelector('#smart-search-results');
    const tokens = query.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);

    // Score Knowledge Base Items
    let scoredItems = [];

    KNOWLEDGE_BASE.forEach(item => {
      let score = 0;
      const qLower = query.toLowerCase();

      tokens.forEach(token => {
        if (item.keywords.includes(token)) score += 3;
        if (item.title.toLowerCase().includes(token)) score += 4;
        if (item.summary.toLowerCase().includes(token)) score += 2;
      });

      // Special natural language phrase matching
      if (item.id === 'which-vehicle' && (qLower.includes('which') || qLower.includes('right') || qLower.includes('business'))) score += 10;
      if (item.id === 'passenger-details' && (qLower.includes('passenger') || qLower.includes('6+1'))) score += 10;
      if (item.id === 'loader-details' && (qLower.includes('loader') || qLower.includes('cargo') || qLower.includes('750'))) score += 10;
      if (item.id === 'garbage-details' && (qLower.includes('garbage') || qLower.includes('waste') || qLower.includes('sanitation'))) score += 10;
      if (item.id === 'specs-search' && (qLower.includes('specs') || qLower.includes('specification') || qLower.includes('motor') || qLower.includes('battery'))) score += 10;
      if (item.id === 'colours-search' && (qLower.includes('colour') || qLower.includes('color') || qLower.includes('paint') || qLower.includes('black') || qLower.includes('white'))) score += 10;
      if (item.id === 'become-dealer' && (qLower.includes('become a dealer') || qLower.includes('dealership'))) score += 10;
      if (item.id === 'find-dealer' && (qLower.includes('where') || qLower.includes('find a dealer') || qLower.includes('locator'))) score += 10;
      if (item.id === 'quotation' && (qLower.includes('quotation') || qLower.includes('quote') || qLower.includes('price'))) score += 10;
      if (item.id === 'company-overview' && (qLower.includes('livelife') || qLower.includes('cmd') || qLower.includes('established') || qLower.includes('autotech'))) score += 10;
      if (item.id === 'why-lyvo' && (qLower.includes('why') || qLower.includes('philosophy') || qLower.includes('earn clean'))) score += 10;

      if (score > 0) {
        scoredItems.push({ item, score });
      }
    });

    scoredItems.sort((a, b) => b.score - a.score);

    resultsPanel.style.display = 'block';

    if (scoredItems.length > 0) {
      const topMatch = scoredItems[0].item;
      resultsPanel.innerHTML = `
        <div class="search-result-card">
          <div class="search-result-header">
            <span class="search-badge">${topMatch.badge}</span>
            <span class="search-status-text">Verified LYVO Content</span>
          </div>

          <h3 class="search-result-title">${topMatch.title}</h3>
          <p class="search-result-summary">${topMatch.summary}</p>

          <div class="search-highlights-grid">
            ${topMatch.highlights.map(h => `
              <div class="search-highlight-chip">
                <span class="chip-label">${h.label}</span>
                <strong class="chip-val">${h.val}</strong>
              </div>
            `).join('')}
          </div>

          <div class="search-result-footer">
            <a href="${getRelativePath(topMatch.linkUrl)}" class="btn btn-yellow btn-sm">
              ${topMatch.linkText}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <span style="font-size: 0.8rem; color: var(--color-muted-grey);">
              Sourced from official LIVELIFE AUTOTECH documentation
            </span>
          </div>
        </div>
      `;
    } else {
      resultsPanel.innerHTML = `
        <div class="search-result-card search-empty-state">
          <h3 style="font-size: 1.15rem; color: var(--color-white); margin-bottom: 8px;">
            Information Not Found in Public Knowledge Base
          </h3>
          <p style="font-size: 0.92rem; color: var(--color-muted-grey); margin-bottom: 16px;">
            We could not find an exact match for <em>"${query}"</em> within confirmed website content. To safeguard accuracy, LIVELIFE AUTOTECH does not publish unverified figures.
          </p>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="${getRelativePath('/contact.html')}" class="btn btn-yellow btn-sm">Contact Corporate Desk</a>
            <a href="${getRelativePath('/quotation.html')}" class="btn btn-outline-white btn-sm">Request Vehicle Quotation</a>
          </div>
        </div>
      `;
    }
  }
}
