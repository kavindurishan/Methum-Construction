export interface MachineryItem {
  id: string;
  name: string;
  sinhalaName: string;
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
  image?: string;
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
    name: "Methum Constructions",
    legalName: "Methum Constructions (Pvt) Ltd",
    tagline: "Engineering Nation's Vital Infrastructure",
    sinhalaTagline: "ශක්තිමත් ඉදිකිරීම් හා විශ්වසනීය යන්ත්‍රෝපකරණ සේවාව",
    establishedYear: "2014",
    experienceYears: "10+",
    cidaGrading: "CIDA C1 / CS2 Qualified Equivalent",
    certifications: [
      "ISO 9001:2015 Quality Management",
      "ISO 45001:2018 Occupational Health & Safety",
      "CIDA (ICTAD) Registered Contractor",
    ],
  },
  contacts: {
    headOffice: {
      title: "Corporate Head Office",
      sinhalaTitle: "ප්‍රධාන ආයතනික කාර්යාලය",
      address: "Level 08, Commercial Avenue, Nawam Mawatha, Colombo 02, Sri Lanka",
    },
    machineryYard: {
      title: "Central Plant & Machinery Yard",
      sinhalaTitle: "ප්‍රධාන යන්ත්‍රෝපකරණ අංගනය හා වැඩබිම",
      address: "Methum Heavy Yard, Kandy Road, Kadawatha / Kelaniya, Sri Lanka",
    },
    hotlines: ["+94 11 234 5678", "+94 77 123 4567"],
    whatsapp: "+94771234567",
    whatsappDisplay: "+94 77 123 4567",
    email: "info@methumconstructions.lk",
    tendersEmail: "tenders@methumconstructions.lk",
    workingHours: "Monday - Saturday: 7:30 AM - 6:30 PM (24/7 Site Support)",
  },
  stats: [
    { label: "CIDA Tier", sinhala: "ප්‍රමිතිය", value: "C1 / CS2" },
    { label: "Highways & Roads", sinhala: "මාර්ග ඉදිකිරීම්", value: "150+ Km" },
    { label: "Heavy Machinery", sinhala: "යන්ත්‍ර ඇණිය", value: "50+ Units" },
    { label: "Projects Completed", sinhala: "නිම කළ ව්‍යාපෘති", value: "200+" },
  ],
  leadership: {
    directorName: "Methum Bandara",
    title: "Managing Director & CEO",
    sinhalaTitle: "කළමනාකාර අධ්‍යක්ෂ",
    message:
      "At Methum Constructions, our commitment is simple: delivering uncompromised engineering quality on time, every time. From high-speed asphalt expressways to landmark multi-story complexes and our modern heavy plant machinery fleet, we build foundations that stand the test of time.",
    sinhalaMessage:
      "උසස්ම ඉංජිනේරු ප්‍රමිතිය, නියමිත වේලාවට වැඩ නිමකිරීම සහ නවීනතම බර යන්ත්‍රෝපකරණ තාක්ෂණය සමඟින් ශ්‍රී ලංකාවේ ඉදිකිරීම් ක්ෂේත්‍රයේ විශ්වාසනීයම සහකරුවා වීම අපගේ අරමුණයි.",
  },
  divisions: [
    {
      id: "roads",
      title: "Highways & Road Infrastructure",
      sinhalaTitle: "මහාමාර්ග හා කාපට් මාර්ග ඉදිකිරීම්",
      icon: "🛣️",
      description:
        "Specializing in national and provincial highway construction, asphalt concrete paving, rigid concrete pavements, subbase grading, and stormwater drainage systems adhering to strict RDA standards.",
      capabilities: [
        "Asphalt Concrete Laying (Carpet Paving)",
        "Rigid Cement Concrete Pavement (PCC)",
        "Road Widening, Culverts & Bridge Works",
        "Retaining Walls & Soil Compaction",
      ],
    },
    {
      id: "buildings",
      title: "Building Construction & Turnkey Projects",
      sinhalaTitle: "වාණිජ, කාර්මික හා සුඛෝපභෝගී ගොඩනැගිලි",
      icon: "🏢",
      description:
        "Comprehensive structural and architectural construction for multi-story commercial buildings, luxury residences, industrial warehouses, and institutional complexes with end-to-end turnkey project management.",
      capabilities: [
        "Commercial Complexes & Multi-Story Buildings",
        "Luxury Turnkey Residential Villas",
        "Industrial Logistics Warehouses & Factories",
        "Structural Engineering & Architectural MEP",
      ],
    },
    {
      id: "machinery",
      title: "Heavy Equipment Fleet (Rental & Sales)",
      sinhalaTitle: "බර යන්ත්‍රෝපකරණ කුලියට දීම සහ විකිණීම",
      icon: "🚜",
      description:
        "Sri Lanka's premier commercial machinery fleet offering heavy earthmoving, compaction, and haulage equipment with certified operators. Available for immediate daily/monthly mobilization or certified pre-owned purchase.",
      capabilities: [
        "20-Ton Excavators & JCB Backhoe Loaders",
        "Vibratory Single Drum & Tandem Road Rollers",
        "Heavy Tipper Trucks (18 CBM) & Water Bowsers",
        "Instant Dispatch with Experienced Operators",
      ],
    },
  ],
  machinery: [
    {
      id: "cat-320d",
      name: "Caterpillar 320D Hydraulic Excavator",
      sinhalaName: "කැටපිලර් 320D එක්ස්කැවේටර් (20 Ton)",
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
      sinhalaName: "කොමට්සු PC200 බර එක්ස්කැවේටර්",
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
      sinhalaName: "සකායි 10-ටොන් වයිබ්‍රේටරි රෝලර්",
      category: "Roller",
      type: "rent",
      specs: {
        weightOrCap: "10,500 kg (10.5 Ton)",
        engine: "Isuzu 4BG1T Turbo",
        operator: "Experienced Operator Included",
      },
      rateOrPrice: "Daily / Monthly Contract",
      availability: "Available",
      badge: "Asphalt & Soil",
      icon: "🛞",
    },
    {
      id: "jcb-3dx-super",
      name: "JCB 3DX Super 4WD Backhoe Loader",
      sinhalaName: "ජේසීබී 3DX සුපර් 4WD (කුලියට / විකිණීමට)",
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
      sinhalaName: "ඉසුසු ගිගා ටිපර් රථ ඇණිය (18 CBM)",
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
      sinhalaName: "කැටපිලර් 140K මෝටර් ග්‍රේඩර්",
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
      sinhalaName: "බෝමැග් BW211 පාංශු සංයුක්තකාරකය",
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
      sinhalaName: "සානි 37m කොන්ක්‍රීට් බූම් පොම්පය",
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
    "Road Development Authority (RDA)",
    "Provincial Road Development Authority (PRDA - Uva)",
    "Construction Industry Development Authority (CIDA)",
    "Urban Development Authority (UDA)",
    "Sacred City Development Project",
  ],
  faqs: [
    {
      q: "How can I rent heavy machinery from Methum Constructions?",
      si: "යන්ත්‍රෝපකරණ කුලියට ගන්නේ කෙසේද?",
      a: "You can click on the 'WhatsApp' button next to any machine in our catalog or call our 24/7 dispatch hotline directly at 077 123 4567. We will confirm machine availability, mobilization transport, and provide an instant quotation.",
    },
    {
      q: "Do you supply certified operators with your equipment?",
      si: "යන්ත්‍ර සමඟ පළපුරුදු ඔපරේටර්වරුන් ලබාදෙනවාද?",
      a: "Yes. All our heavy excavators, road rollers, motor graders, and tipper trucks come with highly experienced, safety-certified operators to guarantee peak jobsite productivity.",
    },
    {
      q: "What types of road construction projects do you undertake?",
      si: "ඔබ භාරගන්නා මාර්ග ඉදිකිරීම් මොනවාද?",
      a: "We undertake national and provincial asphalt carpet laying, rigid concrete road construction, land development, earthmoving, bridge approaches, culverts, and drainage systems for both government tenders and private developers.",
    },
    {
      q: "Can you provide a formal Bill of Quantities (BOQ) or Tender Estimate?",
      si: "ටෙන්ඩර් හෝ ව්‍යාපෘති සඳහා ඇස්තමේන්තු (BOQ) ලබාගත හැකිද?",
      a: "Certainly. Submit your drawings or project specifications to tenders@methumconstructions.lk or use our rapid quotation desk. Our chartered civil engineers will prepare a comprehensive technical and financial proposal.",
    },
  ],
};
