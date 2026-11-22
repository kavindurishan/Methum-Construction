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
  sinhalaTitle: string;
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
    {
      id: "central-expressway-feeder",
      title: "Regional Highway Expansion & Asphalt Surfacing",
      sinhalaTitle: "ප්‍රාදේශීය මහාමාර්ග සංවර්ධනය හා කාපට් ඇතිරීම",
      category: "Roads & Highways",
      client: "Road Development Authority (RDA) / Provincial Council",
      location: "Western / Central Corridor",
      year: "2023 - 2024",
      status: "Completed",
      scope:
        "Full asphalt concrete overlay of 18.5 km dual-lane highway, construction of 24 box culverts, aggregate subbase grading, and continuous storm drainage retaining walls.",
      highlights: [
        "18.5 km Bituminous Macadam Finished",
        "Heavy Asphalt Pavers & Sakai 10T Compaction",
        "Delivered 3 Weeks Ahead of Schedule",
      ],
    },
    {
      id: "industrial-logistics-complex",
      title: "Commercial Multi-Story Logistics & Warehouse Complex",
      sinhalaTitle: "මහා පරිමාණ කාර්මික ගබඩා සංකීර්ණය",
      category: "Commercial Buildings",
      client: "Private Corporate Logistics Group",
      location: "Kelaniya / Biyagama Industrial Zone",
      year: "2023 - Ongoing",
      status: "Ongoing",
      scope:
        "Turnkey design and structural construction of a 45,000 sq.ft pre-engineered steel and reinforced concrete industrial warehouse featuring heavy floor slabs and administrative offices.",
      highlights: [
        "Heavy Duty 30 MPa Industrial Slabs",
        "Clear Span Pre-Engineered Steel Structure",
        "Complete MEP & Fire Safety Systems",
      ],
    },
    {
      id: "luxury-residential-turnkey",
      title: "Luxury Contemporary Residence Development",
      sinhalaTitle: "සුඛෝපභෝගී නවීන නේවාසික ගොඩනැගිලි සංකීර්ණය",
      category: "Commercial Buildings",
      client: "Private Residential Client",
      location: "Colombo Suburbs (Battaramulla)",
      year: "2023",
      status: "Completed",
      scope:
        "Architectural structural engineering and complete turnkey execution of a 3-story luxury contemporary villa with cantilevered balconies, infinity plunge pool, and smart building integration.",
      highlights: [
        "Complete Architectural & Civil Handover",
        "Waterproofing & Premium Finishes",
        "100% CIDA Standards Compliance",
      ],
    },
    {
      id: "bridge-culvert-rehabilitation",
      title: "Twin-Cell Box Bridge & Flood Drainage Corridor",
      sinhalaTitle: "ද්විත්ව බොක්කු පාලම් හා ගංවතුර පාලන පද්ධතිය",
      category: "Infrastructure",
      client: "Irrigation & Provincial Infrastructure Ministry",
      location: "Gampaha District",
      year: "2022 - 2023",
      status: "Completed",
      scope:
        "Construction of twin-cell reinforced concrete box bridge across high-discharge waterway, including 150m gabion retaining walls, piling work, and approach road paving.",
      highlights: [
        "Bored Piling & Reinforced Concrete Box Structure",
        "Heavy Earthmoving using 20T Excavator Fleet",
        "Zero Loss Time Injury (LTI) Safety Record",
      ],
    },
  ],
  partners: [
    "Road Development Authority (RDA)",
    "Urban Development Authority (UDA)",
    "Construction Industry Development Authority (CIDA)",
    "State Engineering Corporation",
    "Ceylon Electricity Board (CEB)",
    "Provincial Road Development Authorities",
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
