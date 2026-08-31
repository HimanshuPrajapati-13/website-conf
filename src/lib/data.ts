export type Person = {
  name: string;
  role?: string;
  department?: string;
  institution?: string;
  location?: string;
  country?: string;
  photo?: string;
};

export type Theme = {
  number: string;
  title: string;
  topics: string[];
  details?: string[];
  special?: boolean;
};

export const site = {
  name: "SES-IKS 2026",
  fullTitle:
    "International Conference on Sustainable Environmental Solutions: Integrating Modern Science and Indigenous Knowledge Systems",
  tagline: "Bridging knowledge, nurturing nature, securing our future",
  dates: "26-27 November 2026",
  location: "Central University of Rajasthan, Ajmer, India",
  email: "ses.iks2026curaj@gmail.com",
  secretaryEmail: "ses-iks2026@curaj.ac.in",
  phones: ["9602127352", "9441184024"],
  website: "www.ses-iks2026.in",
  organizers: [
    "Central University of Rajasthan, India",
    "Tribhuvan University, Nepal",
  ],
  organizingUnit:
    "Department of Environmental Science, School of Earth Sciences, Central University of Rajasthan",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Themes", href: "#themes" },
  { label: "Dates", href: "#dates" },
  { label: "Abstracts", href: "#abstracts" },
  { label: "Registration", href: "#registration" },
  { label: "Committee", href: "#committee" },
  { label: "Contact", href: "#contact" },
];

export const pillars = [
  {
    title: "Science & Innovation",
    description:
      "Contemporary research, monitoring tools, and evidence-based environmental solutions.",
  },
  {
    title: "Indigenous Wisdom (IKS)",
    description:
      "Traditional ecological knowledge, community practices, and cultural stewardship.",
  },
  {
    title: "Policy & Governance",
    description:
      "Institutional frameworks, early warning systems, and multi-hazard governance.",
  },
  {
    title: "Community & Society",
    description:
      "Participatory approaches, resilient transitions, and inclusive sustainability.",
  },
];

export const focusAreas = [
  "Climate Resilience",
  "Water Security",
  "Biodiversity Conservation",
  "Sustainable Agriculture",
  "Indigenous Knowledge",
  "Resilient Futures",
];

export const themes: Theme[] = [
  {
    number: "01",
    title: "Climate & Atmospheric Sciences",
    topics: [
      "Climate Change & Adaptation",
      "Atmospheric Processes",
      "Arid Ecosystems & Resilience",
    ],
    details: [
      "Climate Change, Mitigation and Adaptation Strategies",
      "Atmospheric Processes",
      "Remote Sensing Approaches",
      "Desert (Cold and Hot) Meteorology",
      "Arid Ecosystems",
      "Climate Resilience in Drylands",
    ],
  },
  {
    number: "02",
    title: "Water & Environmental Systems",
    topics: [
      "Water Resources & Conservation",
      "Pollution, Emerging Contaminants",
      "Monitoring, Risk & Health",
    ],
    details: [
      "Water Resources Assessment",
      "Water Resources Management",
      "Traditional Water Conservation Practices",
      "Addressing Environmental Pollution",
      "Emerging Contaminants",
      "Remediation Technologies",
      "Environmental Monitoring",
      "Risk Assessment",
      "Health",
    ],
  },
  {
    number: "03",
    title: "Ecosystems & Biodiversity Sustainability",
    topics: [
      "Biodiversity Conservation",
      "Ethnobotany",
      "Traditional Ecological Knowledge",
    ],
    details: [
      "Biodiversity Conservation",
      "Ethnobotany",
      "Ecosystem Restoration",
      "Traditional Ecological Knowledge",
      "Indigenous Knowledge Systems for Sustainability",
    ],
  },
  {
    number: "04",
    title: "Sustainable Agriculture & Land Systems",
    topics: [
      "Sustainable Agriculture",
      "Soil Health & Agroecology",
      "Agri-waste & Biomass",
    ],
    details: [
      "Sustainable Agriculture",
      "Soil Health",
      "Agroecology",
      "Sustainable Approaches for Management of Agricultural Wastes",
      "Crop Biomass",
    ],
  },
  {
    number: "05",
    title: "Resilient Solutions for Sustainable Transitions and Society",
    topics: [
      "Nature-based Solutions",
      "Circular Economy",
      "Early Warning & Governance",
    ],
    details: [
      "Understanding multi-hazard risks to infrastructure, ecosystem, society and economy",
    ],
  },
  {
    number: "06",
    title: "Special Thematic Session",
    topics: ["Himalayan Ecosystems and Climate Change"],
    special: true,
    details: [
      "Atmospheric Processes",
      "Remote Sensing Approaches",
      "Desert (Cold and Hot) Meteorology",
      "Arid Ecosystems",
      "Climate Resilience in Drylands",
    ],
  },
];

export const importantDates = [
  { event: "Abstract Submission Deadline", date: "30 August 2026" },
  { event: "Notification of Acceptance", date: "15 September 2026" },
  { event: "Last Date of Registration", date: "30 October 2026" },
  { event: "Conference Dates", date: "26-27 November 2026" },
];

export const posterDates = [
  { event: "Abstract Submission", date: "15 August 2026" },
  { event: "Acceptance Notification", date: "15 September 2026" },
  { event: "Early Bird Registration", date: "30 September 2026" },
  { event: "Conference Dates", date: "26-27 November 2026" },
];

export const registrationFees = [
  {
    category: "Faculty / Scientists / Academicians / Accompanying persons (India/Nepal)",
    fee: "2,000",
    afterDue: "2,500",
    onSpot: "3,000",
    currency: "INR",
  },
  {
    category: "Research Scholars (India/Nepal)",
    fee: "1,000",
    afterDue: "1,500",
    onSpot: "2,000",
    currency: "INR",
  },
  {
    category: "Students (India/Nepal)",
    fee: "800",
    afterDue: "1,000",
    onSpot: "1,500",
    currency: "INR",
  },
  {
    category: "Industry Participants (India/Nepal)",
    fee: "3,000",
    afterDue: "4,000",
    onSpot: "5,000",
    currency: "INR",
  },
  {
    category: "Other International Participant",
    fee: "100",
    afterDue: "150",
    onSpot: "150",
    currency: "USD",
  },
];

export const registrationIncludes = [
  "Full access to all conference sessions",
  "Conference kit with name tag and program booklet",
  "E-copy of abstract book",
  "Meals and tea/coffee breaks throughout the conference",
  "Certificate of participation issued by the Organizing Committee",
];

export const paymentDetails = {
  account: "666710210000001",
  bank: "Bank of India",
  branch: "CURAJ",
  ifsc: "BKID0006667",
};

export const whyAttend = [
  "Engage with leading experts in environmental science and sustainability",
  "Explore integration of modern science and indigenous knowledge",
  "Present your research to an international audience",
  "Build collaborations and networks",
  "Contribute to actionable sustainability solutions",
];

export const highlights = [
  "Plenary and keynote lectures by eminent national and international experts",
  "Oral and poster presentations",
  "Special thematic session on the Himalayas",
  "Young researcher and student engagement",
  "Publication opportunities for high-quality papers",
];

export const patrons: Person[] = [
  {
    name: "Prof. Anand Bhalerao",
    role: "Hon'ble Vice Chancellor",
    institution: "Central University of Rajasthan",
    location: "Ajmer, Rajasthan, India",
    photo: "/images/bhalerao.jpg",
  },
  {
    name: "Prof. Bhola Thapal",
    role: "Hon'ble Vice Chancellor",
    institution: "Tribhuvan University",
    country: "Nepal",
    photo: "/images/thapal.png",
  },
];

export const conveners: Person[] = [
  {
    name: "Prof. Rajesh Kumar",
    role: "Professor and Director, IQAC",
    institution: "Central University of Rajasthan (CURaj)",
  },
  {
    name: "Prof. Vishnu Prasad Pandey",
    role: "Professor and Executive Director, Centre for International Relations",
    institution: "Tribhuvan University",
  },
  {
    name: "Prof. Devesh Sharma",
    role: "Dean, School of Earth Sciences",
    institution: "Central University of Rajasthan",
  },
  {
    name: "Dr. Dhiraj Pradhananga",
    department: "Department of Meteorology",
    institution: "Tri-Chandra Multiple Campus, Tribhuvan University",
    country: "Nepal",
  },
  {
    name: "Prof. Laxmi Kant Sharma",
    role: "Professor",
    department: "Department of Environmental Science, School of Earth Sciences",
    institution: "Central University of Rajasthan",
  },
];

export const organizingSecretaries: Person[] = [
  {
    name: "Dr. Pramod Kamble",
    role: "Head & Associate Professor",
    department: "Department of Environmental Science, School of Earth Sciences",
    institution: "Central University of Rajasthan",
  },
  {
    name: "Dr. Ritu Singh",
    role: "Assistant Professor",
    department: "Department of Environmental Science, School of Earth Sciences",
    institution: "Central University of Rajasthan",
  },
  {
    name: "Dr. D. Bhagawan",
    role: "Assistant Professor",
    department: "Department of Environmental Science, School of Earth Sciences",
    institution: "Central University of Rajasthan",
  },
  {
    name: "Dr. Subrat Kumar Panda",
    role: "Assistant Professor",
    department: "Department of Atmospheric Science, School of Earth Sciences",
    institution: "Central University of Rajasthan",
  },
  {
    name: "Dr. Bhola Nath Dhakal",
    role: "Head",
    department: "Department of Geography",
    institution: "Ratna Rajyalaxmi Campus, Tribhuvan University",
  },
  {
    name: "Mr. Bhawani S Dongol",
    role: "Executive Director",
    institution: "The Small Earth Nepal (SEN)",
  },
];

export const organizingCommittee: Person[] = [
  {
    name: "Dr. Garima Kaushik",
    role: "Associate Professor",
    department: "Department of Environmental Science, School of Earth Sciences",
    institution: "Central University of Rajasthan",
  },
  {
    name: "Dr. Shailesh Kumar Patidar",
    role: "Assistant Professor",
    department: "Department of Environmental Science, School of Earth Sciences",
    institution: "Central University of Rajasthan",
  },
  {
    name: "Dr. Chinmay Mallik",
    role: "Assistant Professor",
    department: "Department of Atmospheric Science, School of Earth Sciences",
    institution: "Central University of Rajasthan",
  },
  {
    name: "Dr. Nivedita Chaudhary",
    role: "Assistant Professor",
    department: "Department of Environmental Science, School of Earth Sciences",
    institution: "Central University of Rajasthan",
  },
  {
    name: "Dr. Jayanti Pal",
    role: "Assistant Professor",
    department: "Department of Atmospheric Science, School of Earth Sciences",
    institution: "Central University of Rajasthan",
  },
  {
    name: "Dr. Jai Prakash",
    role: "Assistant Professor",
    department: "Department of Atmospheric Science, School of Earth Sciences",
    institution: "Central University of Rajasthan",
  },
  {
    name: "Mr. Kumar Aryal",
    role: "Assistant Professor",
    department: "Department of Meteorology, Tri-Chandra Multiple Campus",
    institution: "Tribhuvan University",
  },
  {
    name: "Ms. Suchita Shrestha",
    role: "Deputy Director",
    institution: "The Small Earth Nepal (SEN)",
  },
];

export const advisoryCommittee = [
  "Prof. Deepak Aryal - Tribhuvan University, Nepal",
  "Prof. Ramin Farnood - University of Toronto, Canada",
  "Dr. Dhiraj Pradhananga - Tribhuvan University, Nepal",
  "Dr. Soni M. Pradhanang - University of Rhode Island, USA",
  "Prof. Sandeep Kumar - Old Dominion University, USA",
  "Prof. Diganta Das - Loughborough University, UK",
  "Prof. Titus AM Msagati - University of South Africa, SA",
  "Prof. Jadu Dash - University of Southampton, UK",
  "Prof. Sunil Adhikari - TU, Nepal",
  "Dr. Anusuya Joshi - President, The Small Earth Nepal",
  "Prof. Someshwar Das - Secretary, SAMA",
  "Prof. Richa Kothari - Central University of Jammu, India",
  "Prof. R.P. Singh - Babasaheb Bhimrao Ambedkar University, India",
  "Dr. Puja Khare - CSIR-NBRI, Lucknow, India",
  "Prof. Naveen Kumar Arora - Babasaheb Bhimrao Ambedkar University, India",
  "Prof. Bhawna Pathak - Central University of Gujarat, India",
  "Prof. V. Himabindu - JNTUH, India",
  "Prof. Sabu Thomas - Mahatma Gandhi University, India",
  "Prof. Pradhan Parth Sarthi - Central University South Bihar",
  "Prof. Manoj Kumar - Central University of Jharkhand",
  "Prof. Sunil Dhar - Central University of Jammu, India",
  "Prof. G.P. Singh - Banaras Hindu University, India",
  "Prof. Manoj K. Srivastava - Banaras Hindu University, India",
];

export type NearbyPlace = {
  name: string;
  image: string;
  images?: string[];
  alt: string;
  distance?: string;
  description?: string;
};

export const nearbyPlaces: NearbyPlace[] = [
  {
    name: "Ajmer Sharif Dargah",
    image: "/images/ajmer-sharif.jpg",
    images: ["/images/ajmer-sharif.jpg"],
    alt: "Ajmer Sharif Dargah illuminated at night",
    distance: "Historical Shrine",
    description: "Revered Sufi shrine of Khwaja Moinuddin Chishti, known for its spiritual heritage and architectural grace.",
  },
  {
    name: "Pushkar Lake & Brahma Temple",
    image: "/images/pushkar-ghats.jpg",
    images: ["/images/pushkar-ghats.jpg", "/images/pushkar-sunset.jpg"],
    alt: "Pushkar Holy Lake, Ghats, and Sunset in Rajasthan",
    distance: "Sacred Pilgrimage",
    description: "Historic sacred lake with 52 ghats, serene sunsets, and the famous temple dedicated to Lord Brahma.",
  },
  {
    name: "Aravalli Hills & Taragarh Fort",
    image: "/images/aravali-hills.jpg",
    images: ["/images/aravali-hills.jpg"],
    alt: "Scenic Aravalli mountain ranges near Ajmer",
    distance: "Ancient Ecosystem",
    description: "One of the oldest geological mountain systems with scenic regional biodiversity.",
  },
];

export const abstractGuidelines = {
  formatting: [
    "Times New Roman, 12-point font, 1.5 line spacing",
    "Maximum 300 words in MS Word format (.doc / .docx)",
    "Maximum 6 keywords",
  ],
  restrictions: [
    "No figures, tables, diagrams, formulas, references, or special symbols",
  ],
  sequence:
    "Title, Author(s) Name, Affiliation, Email, Abstract, Keywords",
  titleLimit: "Title should not exceed 25 words",
  content: [
    "Clearly state the research problem",
    "State objectives and methodology",
    "Present key findings",
  ],
};
