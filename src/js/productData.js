// ==========================================================================
// Product Data Architecture for LIVELIFE AUTOTECH PRIVATE LIMITED
// Official EV Brand: LYVO
// Reference: Official Supplied Catalogues, Brochures & Vehicle Photos
// ==========================================================================

export const COMPANY_INFO = {
  name: "LIVELIFE AUTOTECH PRIVATE LIMITED",
  established: 2018,
  cmd: "Mr. Sanjay Mahajan",
  email: "livelifeautotech09@gmail.com",
  brand: "LYVO",
  corporateTagline: "Life, On the Move.",
  campaignTagline: "Move Green. Earn Clean.",
  industry: "Electric Mobility & Commercial Electric Vehicles",
  focusAreas: [
    "Passenger Transportation",
    "Commercial Cargo Logistics",
    "Electric Waste Management Solutions"
  ],
  warrantyNote: "5 Year Battery Warranty as indicated in product catalogue",
  fastChargingNote: "Fast Charge: 0% to 80% in 90 mins",
  legalDisclaimer: "All technical specifications, dimensions and performance figures are indicative values sourced from preliminary engineering catalogues and are subject to final homologation, vehicle loading conditions and driving patterns."
};

export const COLOR_PALETTE = {
  charcoal: "#202321",
  charcoalDeep: "#151816",
  charcoalCard: "#272B28",
  forest: "#17452D",
  electricLime: "#9ACD32",
  automotiveYellow: "#F5C52E",
  white: "#FFFFFF",
  lightGrey: "#F1F3EF",
  mutedGrey: "#A8AEA8"
};

export const PRODUCTS = [
  {
    id: "lyvo-passenger",
    slug: "lyvo-passenger",
    name: "LYVO Passenger 6+1",
    shortName: "Passenger 6+1",
    category: "Passenger Transportation",
    badge: "Comfort. Space. Safety.",
    tagline: "India's Smart Electric Rickshaw Built for Every Ride.",
    description: "An electric passenger three-wheeler engineered for high-earning everyday passenger transportation with superior passenger comfort, all-weather canopy protection, and reliable heavy-duty battery life.",
    primaryImage: "/assets/products/passenger/hero_main.jpg",
    cardImage: "/assets/products/passenger/hero_main.jpg",
    brochureImage: "/assets/products/passenger/brochure.jpg",
    specsHighlight: {
      capacity: "6+1 Seater",
      range: "120+ km*",
      topSpeed: "45 km/h",
      fastCharge: "90 Mins (80%)"
    },
    keyFeatures: [
      {
        icon: "users",
        title: "6+1 High Capacity Seating",
        desc: "Ergonomically spaced bench seating accommodating 6 passengers plus 1 driver with generous legroom."
      },
      {
        icon: "battery-charging",
        title: "Fast Charge in 90 Mins",
        desc: "Quick turnaround charging from 0% to 80% in 90 minutes to keep drivers on the road earning."
      },
      {
        icon: "shield-check",
        title: "All-Weather Reinforced Canopy",
        desc: "Durable high-strength overhead canopy with weather-resistant roll-down weather shields."
      },
      {
        icon: "trending-up",
        title: "Move Green. Earn Clean.",
        desc: "Ultra-low running operational costs yielding up to 4x higher daily net savings compared to ICE rickshaws."
      },
      {
        icon: "award",
        title: "5 Year Battery Warranty",
        desc: "High cycle life Lithium Iron Phosphate chemistry with peace-of-mind long-term battery warranty."
      },
      {
        icon: "navigation",
        title: "Driver-First Cockpit",
        desc: "Ergonomic handlebar control, digital instrument cluster, mobile charging USB port, and clear visibility."
      }
    ],
    specifications: [
      { category: "Performance & Powertrain", items: [
        { label: "Motor Power", value: "2.5 kW", status: "Indicative Catalogue Value" },
        { label: "Battery Chemistry", value: "Lithium Iron Phosphate (LFP)", status: "Standard" },
        { label: "Driving Range", value: "120+ km* per charge", status: "Test conditions" },
        { label: "Maximum Speed", value: "45 km/h", status: "Electronically limited" },
        { label: "Charging Time", value: "0% to 80% in 90 mins (Fast Charge)", status: "Fast charging enabled" },
        { label: "Gradeability", value: "25%", status: "Flyover & slope ready" }
      ]},
      { category: "Chassis, Dimensions & Seating", items: [
        { label: "Seating Capacity", value: "6 Passengers + 1 Driver (6+1)", status: "Verified layout" },
        { label: "Payload Capacity", value: "Up to 500 kg", status: "Indicative" },
        { label: "Braking System", value: "Hydraulic Drum Brakes", status: "Dual circuit" },
        { label: "Suspension (Front)", value: "Heavy-Duty Hydraulic Telescopic Fork", status: "Rough road tuned" },
        { label: "Suspension (Rear)", value: "Leaf Spring with Hydraulic Shock Absorber", status: "Reinforced" },
        { label: "Wheels & Tyres", value: "Commercial Grade EV Tyres", status: "Long tread life" }
      ]},
      { category: "Electrical & Connectivity", items: [
        { label: "Digital Display", value: "High-Visibility Speedometer & SoC Cluster", status: "Standard" },
        { label: "Smart Connectivity", value: "LYVO Mobile Telematics Ready", status: "Optional feature" },
        { label: "Lighting", value: "High-Lumen Twin Headlamps & LED Indicators", status: "All-weather" },
        { label: "Warranty", value: "5 Year Battery Warranty", status: "As stated in catalogue" }
      ]}
    ],
    colors: [
      {
        id: "signature",
        name: "Signature Dual-Tone",
        hex: "#17452D",
        accentHex: "#F5C52E",
        gradient: "linear-gradient(135deg, #F5C52E 50%, #17452D 50%)",
        description: "Official factory dual-tone automotive yellow roof & green body with LYVO branding.",
        image: "/assets/products/passenger/colours/signature_vehicle.jpg",
        thumb: "/assets/products/passenger/colours/signature_thumb.jpg",
        isDefault: true
      },
      {
        id: "black",
        name: "Onyx Black",
        hex: "#1A1C1A",
        accentHex: "#F5C52E",
        gradient: "linear-gradient(135deg, #1A1C1A 100%, #1A1C1A 100%)",
        description: "Deep charcoal onyx black metallic exterior finish with contrasting yellow accents.",
        image: "/assets/products/passenger/colours/black_vehicle.jpg",
        thumb: "/assets/products/passenger/colours/black_thumb.jpg",
        isDefault: false
      },
      {
        id: "white",
        name: "Pearl White",
        hex: "#F2F4F2",
        accentHex: "#17452D",
        gradient: "linear-gradient(135deg, #F2F4F2 100%, #F2F4F2 100%)",
        description: "Clean pearl white commercial passenger exterior with dark chassis accents.",
        image: "/assets/products/passenger/colours/white_vehicle.jpg",
        thumb: "/assets/products/passenger/colours/white_thumb.jpg",
        isDefault: false
      }
    ],
    gallery: [
      { src: "/assets/products/passenger/hero_main.jpg", title: "LYVO Passenger 6+1 Front 3/4 Studio View", caption: "Electric 3-wheeler in signature LYVO dual-tone with 6-seat passenger cabin" },
      { src: "/assets/products/passenger/colours/black_vehicle.jpg", title: "LYVO Passenger 6+1 Onyx Black Edition", caption: "Premium onyx black metallic exterior profile" },
      { src: "/assets/products/passenger/colours/white_vehicle.jpg", title: "LYVO Passenger 6+1 Pearl White Edition", caption: "Clean pearl white passenger fleet edition" },
      { src: "/assets/products/passenger/cabin_detail.jpg", title: "Driver Cockpit & Instrument Cluster", caption: "Digital console, ergonomic controls, and USB charging" },
      { src: "/assets/products/passenger/brochure.jpg", title: "Official Passenger Product Brochure", caption: "Catalogue sheet detailing comfort, space and safety engineering" }
    ],
    threeDConfig: {
      bodyType: "passenger",
      defaultColor: "#17452D",
      cabinTrim: "#F5C52E",
      seatCount: 6,
      scale: 1.0
    }
  },

  {
    id: "lyvo-loader",
    slug: "lyvo-loader",
    name: "LYVO Loader",
    shortName: "Loader Cargo",
    category: "Commercial Cargo & Logistics",
    badge: "Heavy Duty. High Capacity.",
    tagline: "India's Smart Electric Loader Built for Tough Work.",
    description: "A commercial electric cargo three-wheeler built for rigorous intra-city logistics, FMCG, parcel delivery, and industrial haulage, featuring an expansive cargo bed with 750 kg payload capacity.",
    primaryImage: "/assets/products/loader/hero_main.jpg",
    cardImage: "/assets/products/loader/hero_main.jpg",
    brochureImage: "/assets/products/loader/brochure.jpg",
    specsHighlight: {
      capacity: "750 kg Payload",
      range: "120+ km*",
      topSpeed: "45 km/h",
      fastCharge: "90 Mins (80%)"
    },
    keyFeatures: [
      {
        icon: "truck",
        title: "750 kg High-Payload Cargo Bed",
        desc: "Generous 2770 x 980 x 1270 mm flatbed deck engineered for high-density commercial freight."
      },
      {
        icon: "layers",
        title: "Reinforced Steel Chassis",
        desc: "Heavy-gauge tubular ladder chassis engineered to absorb uneven Indian road vibrations and heavy cargo loads."
      },
      {
        icon: "trending-up",
        title: "25% Gradeability",
        desc: "High-torque electric powertrain capable of tackling steep city flyovers and industrial ramps when fully loaded."
      },
      {
        icon: "battery-charging",
        title: "90 Min Fast Turnaround Charging",
        desc: "0% to 80% charge in 90 minutes ensures minimal depot dwell time and maximum delivery rounds."
      },
      {
        icon: "grid",
        title: "Modular Cargo Variants",
        desc: "Compatible with open flatbed, closed container box, high-mesh parcel cages, and insulated delivery bodies."
      },
      {
        icon: "shield-check",
        title: "5 Year Battery Warranty",
        desc: "Reliable LFP battery architecture backed by an indicative 5-year warranty structure."
      }
    ],
    specifications: [
      { category: "Performance & Powertrain", items: [
        { label: "Motor Power", value: "2.5 kW", status: "Indicative Catalogue Value" },
        { label: "Battery Chemistry", value: "Lithium Iron Phosphate (LFP)", status: "Long Cycle Life" },
        { label: "Driving Range", value: "120+ km* per charge", status: "Test conditions" },
        { label: "Maximum Speed", value: "45 km/h", status: "Governed speed" },
        { label: "Charging Time", value: "0% to 80% in 90 mins (Fast Charge)", status: "Fast charging enabled" },
        { label: "Gradeability", value: "25%", status: "Flyover and ramp tested" }
      ]},
      { category: "Cargo Deck & Dimensions", items: [
        { label: "Payload Capacity", value: "Up to 750 kg", status: "Verified catalogue capacity" },
        { label: "Overall Dimensions (L x W x H)", value: "2770 x 980 x 1270 mm", status: "Standard dimensions" },
        { label: "Cargo Bed Type", value: "Reinforced Heavy-Gauge Steel Flatbed", status: "Industrial grade" },
        { label: "Suspension (Front)", value: "Heavy-Duty Hydraulic Telescopic Fork", status: "Heavy duty" },
        { label: "Suspension (Rear)", value: "Multi-Leaf Spring Heavy Suspension", status: "Reinforced" },
        { label: "Brakes", value: "Hydraulic Drum Brakes", status: "Dual circuit safety" }
      ]},
      { category: "Commercial Applications", items: [
        { label: "Target Sectors", value: "E-Commerce, FMCG, Dairy, Gas Cylinders, Construction, Agri Logistics", status: "Multi-application" },
        { label: "Warranty", value: "5 Year Battery Warranty", status: "As stated in catalogue" }
      ]}
    ],
    colors: [
      {
        id: "signature",
        name: "Signature Dual-Tone",
        hex: "#17452D",
        accentHex: "#F5C52E",
        gradient: "linear-gradient(135deg, #F5C52E 50%, #17452D 50%)",
        description: "Official factory dual-tone yellow cab & green cargo bed with LYVO branding.",
        image: "/assets/products/loader/colours/signature_vehicle.jpg",
        thumb: "/assets/products/loader/colours/signature_thumb.jpg",
        isDefault: true
      },
      {
        id: "black",
        name: "Onyx Black",
        hex: "#1A1C1A",
        accentHex: "#F5C52E",
        gradient: "linear-gradient(135deg, #1A1C1A 100%, #1A1C1A 100%)",
        description: "Industrial onyx black finish with contrasting yellow cab details.",
        image: "/assets/products/loader/colours/black_vehicle.jpg",
        thumb: "/assets/products/loader/colours/black_thumb.jpg",
        isDefault: false
      },
      {
        id: "white",
        name: "Pearl White",
        hex: "#F2F4F2",
        accentHex: "#17452D",
        gradient: "linear-gradient(135deg, #F2F4F2 100%, #F2F4F2 100%)",
        description: "Clean pearl white commercial logistics fleet finish.",
        image: "/assets/products/loader/colours/white_vehicle.jpg",
        thumb: "/assets/products/loader/colours/white_thumb.jpg",
        isDefault: false
      }
    ],
    gallery: [
      { src: "/assets/products/loader/hero_main.jpg", title: "LYVO Loader Front 3/4 Studio View", caption: "Heavy-duty electric commercial cargo vehicle with 750 kg payload bed" },
      { src: "/assets/products/loader/colours/black_vehicle.jpg", title: "LYVO Loader Onyx Black Edition", caption: "Heavy duty cargo edition in onyx black finish" },
      { src: "/assets/products/loader/colours/white_vehicle.jpg", title: "LYVO Loader Pearl White Edition", caption: "Commercial delivery fleet edition in pearl white finish" },
      { src: "/assets/products/loader/commercial_variants.jpg", title: "Modular Commercial Body Options", caption: "Container, parcel cage, and open flatbed configurations" },
      { src: "/assets/products/loader/brochure.jpg", title: "Official Loader Product Brochure", caption: "Technical specifications, gradeability and cargo volume" }
    ],
    threeDConfig: {
      bodyType: "loader",
      defaultColor: "#17452D",
      cabinTrim: "#F5C52E",
      cargoType: "flatbed",
      scale: 1.0
    }
  },

  {
    id: "lyvo-garbage",
    slug: "lyvo-garbage",
    name: "LYVO Garbage",
    shortName: "Garbage Waste",
    category: "Electric Waste Management Solutions",
    badge: "Clean City. Green City.",
    tagline: "India's Smart Electric Garbage Solution for a Cleaner Tomorrow.",
    description: "An electric waste-management utility vehicle built for municipal corporations, smart cities, residential townships, and institutional campuses, featuring segregated dry & wet waste bins and leak-proof tipping mechanism.",
    primaryImage: "/assets/products/garbage/hero_main.jpg",
    cardImage: "/assets/products/garbage/hero_main.jpg",
    brochureImage: "/assets/products/garbage/brochure.jpg",
    specsHighlight: {
      capacity: "500 kg Waste",
      range: "120+ km*",
      topSpeed: "45 km/h",
      fastCharge: "90 Mins (80%)"
    },
    keyFeatures: [
      {
        icon: "trash-2",
        title: "Dry & Wet Segregated Bins",
        desc: "Dual partitioned stainless/galvanized chambers conforming to municipal solid waste segregation guidelines."
      },
      {
        icon: "shield",
        title: "100% Leak-Proof Sealed Design",
        desc: "Hygienic sealed basin prevents leachate leakage onto city streets during transit."
      },
      {
        icon: "arrow-up-circle",
        title: "Easy Hydraulic / Mechanical Lift",
        desc: "Effortless unloading mechanism reduces sanitation worker fatigue and improves cycle times."
      },
      {
        icon: "feather",
        title: "Zero Tailpipe Emissions",
        desc: "Quiet, odorless electric propulsion ideal for early morning residential collection rounds."
      },
      {
        icon: "battery-charging",
        title: "Fast Charge 0% to 80% in 90 Mins",
        desc: "Rapid charging capability enables multi-shift municipal waste collection rounds."
      },
      {
        icon: "award",
        title: "Heavy-Duty Municipal Build",
        desc: "Corrosion-resistant epoxy coating and robust chassis built for demanding civic sanitation duty."
      }
    ],
    specifications: [
      { category: "Performance & Powertrain", items: [
        { label: "Motor Power", value: "2.5 kW", status: "Indicative Catalogue Value" },
        { label: "Battery Chemistry", value: "Lithium Iron Phosphate (LFP)", status: "Safe & Long Cycle Life" },
        { label: "Driving Range", value: "120+ km* per charge", status: "Urban route calibrated" },
        { label: "Maximum Speed", value: "45 km/h", status: "Speed governed" },
        { label: "Charging Time", value: "0% to 80% in 90 mins (Fast Charge)", status: "Fast charging enabled" },
        { label: "Gradeability", value: "25%", status: "Flyovers and landfill ramps" }
      ]},
      { category: "Waste Body & Capacities", items: [
        { label: "Waste Capacity", value: "500 kg", status: "Volume optimized" },
        { label: "Dimensions (L x W x H)", value: "2770 x 980 x 1270 mm", status: "Standard chassis" },
        { label: "Body Type", value: "Dual Compartment Segregated Hopper with Sealed Lids", status: "Hygienic build" },
        { label: "Discharge Mechanism", value: "Easy-Lift Tipping / Hydraulic Hopper Action", status: "Operator safe" },
        { label: "Braking System", value: "Hydraulic Drum Brakes", status: "Dual circuit" }
      ]},
      { category: "Civic & Institutional Standards", items: [
        { label: "Target Applications", value: "Municipalities, Townships, Hospitals, Universities, Ports", status: "Institutional ready" },
        { label: "Audio-Visual Alert", value: "Reverse Buzzer & Flashing Rooftop Warning Beacon", status: "Safety standard" },
        { label: "Warranty", value: "5 Year Battery Warranty", status: "As stated in catalogue" }
      ]}
    ],
    colors: [
      {
        id: "signature",
        name: "Signature Dual-Tone",
        hex: "#17452D",
        accentHex: "#F5C52E",
        gradient: "linear-gradient(135deg, #F5C52E 50%, #17452D 50%)",
        description: "Official 'Clean City. Green City.' forest green waste container with yellow cabin and LYVO branding.",
        image: "/assets/products/garbage/colours/signature_vehicle.jpg",
        thumb: "/assets/products/garbage/colours/signature_thumb.jpg",
        isDefault: true
      },
      {
        id: "black",
        name: "Onyx Black",
        hex: "#1A1C1A",
        accentHex: "#9ACD32",
        gradient: "linear-gradient(135deg, #1A1C1A 100%, #1A1C1A 100%)",
        description: "Industrial deep charcoal onyx black finish with protective anti-corrosion clear coat.",
        image: "/assets/products/garbage/colours/black_vehicle.jpg",
        thumb: "/assets/products/garbage/colours/black_thumb.jpg",
        isDefault: false
      },
      {
        id: "white",
        name: "Pearl White",
        hex: "#F2F4F2",
        accentHex: "#17452D",
        gradient: "linear-gradient(135deg, #F2F4F2 100%, #F2F4F2 100%)",
        description: "Sanitation pearl white exterior finish for municipal and institutional facilities.",
        image: "/assets/products/garbage/colours/white_vehicle.jpg",
        thumb: "/assets/products/garbage/colours/white_thumb.jpg",
        isDefault: false
      }
    ],
    gallery: [
      { src: "/assets/products/garbage/hero_main.jpg", title: "LYVO Garbage Vehicle Front 3/4 Studio View", caption: "Clean City, Green City electric waste compactor with 500 kg capacity" },
      { src: "/assets/products/garbage/colours/black_vehicle.jpg", title: "LYVO Garbage Onyx Black Edition", caption: "Sanitation utility vehicle in onyx black finish" },
      { src: "/assets/products/garbage/colours/white_vehicle.jpg", title: "LYVO Garbage Pearl White Edition", caption: "Civic waste management edition in pearl white finish" },
      { src: "/assets/products/garbage/brochure.jpg", title: "Official Garbage Product Brochure", caption: "Segregated dry & wet waste technical specifications and features" },
      { src: "/assets/products/garbage/cabin_detail.jpg", title: "Driver Cabin & Control Switchgear", caption: "Ergonomic operator cockpit with reverse assist display" }
    ],
    threeDConfig: {
      bodyType: "garbage",
      defaultColor: "#17452D",
      cabinTrim: "#F5C52E",
      hopperType: "sealed",
      scale: 1.0
    }
  }
];

export const BRAND_PILLARS = [
  {
    id: "purpose-focused",
    icon: "target",
    title: "Purpose-Focused Vehicles",
    desc: "Engineered specifically for Indian commercial operating conditions with high payload duty, robust chassis, and intuitive ergonomics."
  },
  {
    id: "multiple-applications",
    icon: "grid",
    title: "Multiple Commercial Applications",
    desc: "A single modular platform catering to passenger commuting, intra-city freight, parcel delivery, fresh produce logistics, and civic waste management."
  },
  {
    id: "thoughtful-design",
    icon: "compass",
    title: "Thoughtful Product Design",
    desc: "Driver-centric cockpits, safe low-center-of-gravity battery placement, and 90-minute fast charging to maximize daily uptime."
  },
  {
    id: "customer-support",
    icon: "life-buoy",
    title: "Customer-Focused Support",
    desc: "Direct support ecosystem ensuring genuine spare parts availability, preventive servicing, and comprehensive 5-year battery warranty coverage."
  },
  {
    id: "sustainable-mobility",
    icon: "leaf",
    title: "Commitment to Sustainable Mobility",
    desc: "Accelerating the national transition to zero-emission mobility while delivering up to 4x net operating profit enhancement to commercial operators."
  }
];

export const VISION_MISSION_GOALS = {
  vision: "To contribute to a cleaner and more accessible mobility future through practical electric vehicle solutions.",
  mission: "To develop customer-focused electric mobility solutions that address the everyday needs of passenger transport, commercial goods movement and waste management.",
  goals: [
    "Build a recognisable electric mobility brand known for reliability and customer trust.",
    "Develop a reliable customer support ecosystem with rapid spare parts fulfillment.",
    "Expand dealer and distribution partnerships across key industrial and urban growth hubs.",
    "Support sustainable commercial transportation with accessible electric fleet options.",
    "Continuously improve the customer experience through driver feedback and innovation."
  ]
};

export const DEALER_REGIONS = [
  {
    state: "Maharashtra",
    cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    status: "Priority Hub",
    notes: "Direct factory representative support available"
  },
  {
    state: "Delhi NCR",
    cities: ["New Delhi", "Gurugram", "Noida", "Faridabad", "Ghaziabad"],
    status: "Priority Hub",
    notes: "EV commercial fleet rollout region"
  },
  {
    state: "Gujarat",
    cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    status: "Priority Hub",
    notes: "Industrial freight and port connectivity"
  },
  {
    state: "Karnataka",
    cities: ["Bengaluru", "Mysuru", "Hubballi"],
    status: "Expansion Phase",
    notes: "Urban parcel and passenger deployment"
  },
  {
    state: "Uttar Pradesh",
    cities: ["Lucknow", "Kanpur", "Varanasi", "Agra", "Prayagraj"],
    status: "Expansion Phase",
    notes: "High demand passenger and municipal waste corridor"
  },
  {
    state: "Tamil Nadu",
    cities: ["Chennai", "Coimbatore", "Madurai"],
    status: "Expansion Phase",
    notes: "Commercial logistics focus"
  }
];
