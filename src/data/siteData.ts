export interface MachineryItem {
  id: string;
  name: string;
  category: "Excavator" | "Roller" | "Backhoe" | "Truck" | "Specialized";
  type: "rent" | "sale" | "both";
  specs: {
    weightOrCap: string;
    engine: string;
    modelYear?: string;
    hoursUsed?: string;
    operator: string;
  };
  rateOrPrice: string;
  availability: "Available" | "Reserved" | "In-Fleet";
  badge: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Roads & Highways" | "Commercial Buildings" | "Infrastructure";
  client: string;
  location: string;
  year: string;
  status: "Completed" | "Ongoing";
  scope: string;
  highlights: string[];
}

export const siteConfig = {
  company: {
    name: "Methum Construction",
    legalName: "Methum Construction",
    tagline: "Engineering Excellence & Heavy Plant Solutions",
    establishedYear: "2023",
    experienceYears: "10+",
    cidaGrading: "CIDA Registered Contractor (Grade C7)",
    businessRegistration: "Officially Registered Business (BR)",
    certifications: [
      "CIDA (ICTAD) Registered Contractor - Grade C7",
      "Officially Registered Business Enterprise",
      "Conforming to RDA & National Engineering Standards",
    ],
  },
  contacts: {
    headOffice: {
      title: "Head Office",
      address: "222/1, Pansala Road, Badalkumbura, Sri Lanka",
    },
    machineryYard: {
      title: "Plant & Machinery Yard",
      address: "222/1, Pansala Road, Badalkumbura, Sri Lanka",
    },
    hotlines: ["055 22 50 610", "0777 26 50 15"],
    whatsapp: "+94777265015",
    whatsappDisplay: "0777 26 50 15",
    email: "methumconstruction@gmail.com",
    tendersEmail: "methumconstruction@gmail.com",
    workingHours: "Monday - Saturday: 7:30 AM - 6:30 PM (24/7 Site Support)",
  },
  stats: [
    { label: "CIDA Registration", value: "Grade C7" },
    { label: "Field Experience", value: "10+ Years" },
    { label: "Heavy Equipment", value: "Fleet Ready" },
    { label: "Project Delivery", value: "100% On-Time" },
  ],
  leadership: {
    directorName: "R.M.P. Rathnayaka",
    title: "Founder & Proprietor",
    message:
      "At Methum Construction, our core philosophy is grounded in integrity, high-quality civil execution, and dependable machinery support. Backed by more than a decade of hands-on experience in road networks, institutional facilities, and heavy plant operations across the Uva province and beyond, we deliver solid infrastructure that stands the test of time.",
  },
  divisions: [
    {
      id: "roads",
      title: "Highways & Road Infrastructure",
      icon: "🛣️",
      description:
        "Specializing in roadway metalling, aggregate subbase grading, second-coat bitumen tarring, rigid concrete pavements, retaining walls, and roadside stormwater drainage conforming to RDA standards.",
      capabilities: [
        "Aggregate Road Metalling & Base Reconstruction",
        "Second-Coat Bitumen Tarring & Chip Sealing",
        "Reinforced Concrete Rigid Road Surfaces",
        "Slope Retaining Walls & Flood Line Drains",
      ],
    },
    {
      id: "buildings",
      title: "Building Construction & Public Facilities",
      icon: "🏢",
      description:
        "Comprehensive civil and architectural construction, public sector upgrades, external reinforced concrete staircases, exterior ACP cladding repairs, residential quarters refurbishment, and institutional facilities.",
      capabilities: [
        "Government Secretariat & Public Buildings",
        "Exterior Concrete Staircases & Facade Cladding",
        "Official Quarters & Residential Civil Overhauls",
        "Architectural Restoration & Pilgrims Complexes",
      ],
    },
    {
      id: "machinery",
      title: "Heavy Equipment Fleet (Rental & Sales)",
      icon: "🚜",
      description:
        "Reliable heavy equipment rental and sales service offering earthmoving, compaction, and haulage machinery. Available for immediate daily or monthly deployment with certified, experienced operators.",
      capabilities: [
        "Excavators & JCB Backhoe Loaders",
        "Vibratory Single Drum Road Rollers",
        "Heavy Tipper Trucks & Haulage Transport",
        "Immediate Site Dispatch with Operators",
      ],
    },
  ],
  machinery: [
    {
      id: "cat-320d",
      name: "Caterpillar 320D Hydraulic Excavator",
      category: "Excavator",
      type: "rent",
      specs: {
        weightOrCap: "21,500 kg (21.5 Ton)",
        engine: "Cat C6.4 ACERT (140 HP)",
        operator: "Experienced Operator Included",
      },
      rateOrPrice: "Hourly / Daily / Monthly Rate",
      availability: "Available",
      badge: "Fleet Ready",
      icon: "🚜",
    },
    {
      id: "komatsu-pc200",
      name: "Komatsu PC200-8 Heavy Excavator",
      category: "Excavator",
      type: "rent",
      specs: {
        weightOrCap: "20,000 kg (20 Ton)",
        engine: "Komatsu SAA6D107E-1 (148 HP)",
        operator: "Experienced Operator Included",
      },
      rateOrPrice: "Contract Basis",
      availability: "Available",
      badge: "High Demand",
      icon: "🚜",
    },
    {
      id: "sakai-sv512d",
      name: "Sakai SV512D Vibratory Road Roller",
      category: "Roller",
      type: "rent",
      specs: {
        weightOrCap: "10,500 kg (10.5 Ton)",
        engine: "Isuzu 4BG1T Turbo",
        operator: "Experienced Operator Included",
      },
      rateOrPrice: "Daily / Monthly Contract",
      availability: "Available",
      badge: "Asphalt & Soil Compaction",
      icon: "🛞",
    },
    {
      id: "jcb-3dx-super",
      name: "JCB 3DX Super 4WD Backhoe Loader",
      category: "Backhoe",
      type: "both",
      specs: {
        weightOrCap: "7,460 kg Operating Weight",
        engine: "JCB 448 Diesel Engine (92 HP)",
        modelYear: "2021",
        hoursUsed: "3,200 hrs (Verified)",
        operator: "Available with/without Operator",
      },
      rateOrPrice: "Rent: Daily | Sale: Call for Offer",
      availability: "Available",
      badge: "For Rent / Sale",
      icon: "🏗️",
    },
    {
      id: "isuzu-giga-tipper",
      name: "Isuzu Giga 10-Wheeler Tipper Truck",
      category: "Truck",
      type: "rent",
      specs: {
        weightOrCap: "18 Cubic Meters (CBM) Box",
        engine: "Isuzu 6WF1 Turbocharged Diesel",
        operator: "Experienced Heavy Driver Included",
      },
      rateOrPrice: "Per Trip / Daily / Monthly",
      availability: "Available",
      badge: "Aggregate Haulage",
      icon: "🚛",
    },
    {
      id: "cat-140k-grader",
      name: "Caterpillar 140K Motor Grader",
      category: "Specialized",
      type: "rent",
      specs: {
        weightOrCap: "17,500 kg Operating Weight",
        engine: "Cat C7 ACERT (190 HP)",
        operator: "Certified Precision Grader Operator",
      },
      rateOrPrice: "Project Basis Contract",
      availability: "Reserved",
      badge: "Road Leveling",
      icon: "🚜",
    },
    {
      id: "bomag-bw211",
      name: "Bomag BW211 D-4 Heavy Soil Compactor",
      category: "Roller",
      type: "sale",
      specs: {
        weightOrCap: "11,200 kg (11.2 Ton)",
        engine: "Deutz Turbo Diesel",
        modelYear: "2020",
        hoursUsed: "2,850 hrs",
        operator: "Certified Inspection Passed",
      },
      rateOrPrice: "Price on Inspection",
      availability: "Available",
      badge: "FOR SALE",
      icon: "🛞",
    },
    {
      id: "concrete-boom-pump",
      name: "Sany 37m Truck-Mounted Concrete Pump",
      category: "Specialized",
      type: "rent",
      specs: {
        weightOrCap: "37 Meter Reach / 140 m³/h output",
        engine: "Heavy Duty Chassis",
        operator: "Pump Operator Crew Included",
      },
      rateOrPrice: "Pour Volume / Daily Basis",
      availability: "Available",
      badge: "High-Rise Ready",
      icon: "🏗️",
    },
  ],
  projects: [
    // --- ROAD PROJECTS ---
    {
      id: "pilisarana-road-concreting",
      title: "Drainage Construction & Concrete Road Surface Paving",
      category: "Roads & Highways",
      client: "Provincial Road Development Authority / Local Council",
      location: "Pilisarana Road, Monaragala",
      year: "2023 - 2024",
      status: "Completed",
      scope:
        "Construction of reinforced roadside storm drainage systems and precision concrete road surface paving to provide all-weather access along the Pilisarana corridor.",
      highlights: [
        "Reinforced Concrete Surface Paving",
        "Deep Stormwater Line Drainage",
        "Subbase Preparation & Compaction",
      ],
    },
    {
      id: "karanda-kendawinna-medagama-tarring",
      title: "Second-Coat Bituminous Tarring & Road Resurfacing",
      category: "Roads & Highways",
      client: "Provincial Road Development Authority (PRDA) - Uva",
      location: "Karanda - Kendawinna - Medagama Road",
      year: "2023",
      status: "Completed",
      scope:
        "Execution of second-coat tarring, bitumen emulsion spraying, aggregate chip spreading, and high-density pneumatic roller compaction for long-term road preservation.",
      highlights: [
        "Bitumen Emulsion & Chip Sealing",
        "Pavement Regulation & Surface Dressing",
        "RDA Specification Conformance",
      ],
    },
    {
      id: "buddama-baduluwela-metalling",
      title: "New Metalling & Aggregate Base Course Construction",
      category: "Roads & Highways",
      client: "Provincial Infrastructure Division",
      location: "9th Mile Post, Buddama - Baduluwela Road",
      year: "2023 - 2024",
      status: "Completed",
      scope:
        "Excavation, grading, supply, spreading, and heavy vibratory compaction of graded aggregate base metal to reconstruct the structural foundation of the roadway.",
      highlights: [
        "Heavy Graded Aggregate Metalling",
        "10-Ton Vibratory Roller Compaction",
        "Subgrade Soil Stabilization",
      ],
    },
    {
      id: "mariarawa-ritigahawatta-retaining-wall",
      title: "Reinforced Retaining Wall & Drainage System Construction",
      category: "Roads & Highways",
      client: "Provincial Road Development Ministry",
      location: "Mariarawa - Ritigahawatta - Buddama Road",
      year: "2023",
      status: "Completed",
      scope:
        "Civil construction of structural retaining walls for landslide slope stabilization and heavy-duty storm drains to secure vulnerable road embankments against flooding.",
      highlights: [
        "Reinforced Concrete Retaining Walls",
        "Erosion Control & Slope Protection",
        "Deep Waterway Drainage Channels",
      ],
    },

    // --- BUILDING PROJECTS ---
    {
      id: "district-secretariat-staircase-cladding",
      title: "External Staircase Construction & Architectural Cladding Works",
      category: "Commercial Buildings",
      client: "District Secretariat, Monaragala",
      location: "District Secretariat Complex, Monaragala",
      year: "2023 - 2024",
      status: "Completed",
      scope:
        "Structural engineering construction of external reinforced concrete staircase and complete architectural repair and refurbishment of exterior aluminum composite cladding panels.",
      highlights: [
        "Exterior Concrete Staircase Structure",
        "Architectural ACP Cladding Rehabilitation",
        "Weatherproof Commercial Facade Works",
      ],
    },
    {
      id: "quarters-5a-repair",
      title: "Comprehensive Civil Renovation & Upgrading of Quarters 5A",
      category: "Commercial Buildings",
      client: "District Secretariat, Monaragala",
      location: "District Secretariat Quarters, Monaragala",
      year: "2023",
      status: "Completed",
      scope:
        "Complete structural renovation of official quarters 5A, including masonry reinforcement, roof overhaul, modern plumbing, electrical rewiring, and premium interior/exterior finishes.",
      highlights: [
        "Structural Masonry & Roof Rehabilitation",
        "Modern Plumbing & Electrical Overhaul",
        "Turnkey Handover for Senior Officials",
      ],
    },
    {
      id: "nila-piyasa-sewerage-system",
      title: "Rehabilitation of Central Sewerage & Wastewater System",
      category: "Infrastructure",
      client: "District Secretariat, Monaragala",
      location: "Nila Piyasa Housing Complex, Monaragala",
      year: "2023 - 2024",
      status: "Completed",
      scope:
        "Comprehensive overhaul of deep underground sewerage pipeline networks, manholes, inspection chambers, and septic soakage infrastructure for the entire housing complex.",
      highlights: [
        "Deep Underground Pipeline Overhaul",
        "Reconstruction of Manholes & Chambers",
        "Full Environmental Compliance Verification",
      ],
    },
    {
      id: "seva-piyasa-hulandawa-improvement",
      title: "Structural Improvement & Civil Upgrading of Seva Piyasa Building",
      category: "Commercial Buildings",
      client: "Divisional Secretariat / Rural Development",
      location: "Hulandawa Left, Monaragala",
      year: "2023",
      status: "Completed",
      scope:
        "Structural enhancements, roof leakproofing, flooring, public service counter construction, and complete interior/exterior weatherproofing to enhance community service delivery.",
      highlights: [
        "Community Administrative Center Upgrade",
        "Roofing & Structural Weatherproofing",
        "Turnkey Public Service Facilities",
      ],
    },
    {
      id: "katharagama-pilgrims-rest-renovation",
      title: "Architectural Renovation of Hindu Pilgrims Rest Complex",
      category: "Commercial Buildings",
      client: "Sacred City Development Project",
      location: "Katharagama Sacred City",
      year: "2023 - 2024",
      status: "Completed",
      scope:
        "Large-scale architectural restoration and civil refurbishment of multi-hall pilgrim accommodation facilities, structural repairs, sanitation blocks, and interior restoration.",
      highlights: [
        "High-Capacity Pilgrimage Rest Restoration",
        "Sanitary Facilities & Water Distribution",
        "Cultural Heritage Area Compliance",
      ],
    },
  ],
  partners: [
    "District Secretariat, Monaragala",
    "Provincial Road Development Authority (PRDA - Uva)",
    "Road Development Authority (RDA)",
    "Construction Industry Development Authority (CIDA)",
    "Urban Development Authority (UDA)",
    "Sacred City Development Project",
  ],
  faqs: [
    {
      q: "How can I hire heavy machinery from Methum Construction?",
      a: "You can click on the 'WhatsApp' button or call our dispatch hotline directly at 0777 26 50 15 / 055 22 50 610. We will confirm machine availability, transport logistics, and provide an instant quotation.",
    },
    {
      q: "Do you supply experienced operators with your equipment?",
      a: "Yes. All our excavators, road rollers, motor graders, and tipper trucks come with certified, safety-trained operators to ensure peak jobsite productivity and safety.",
    },
    {
      q: "What types of road construction projects do you undertake?",
      a: "We undertake provincial road metalling, asphalt tarring, concrete road construction, land development, earthworks, retaining walls, and drainage infrastructure for government tenders and private clients.",
    },
    {
      q: "Can you provide a formal Bill of Quantities (BOQ) or Tender Estimate?",
      a: "Certainly. Submit your project requirements to methumconstruction@gmail.com or via our contact form. Our civil estimating team will prepare a comprehensive proposal.",
    },
  ],
};
