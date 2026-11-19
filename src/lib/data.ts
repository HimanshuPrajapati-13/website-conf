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
  name: "SES-IKS 2027",
  fullTitle:
    "International Conference on Sustainable Environmental Solutions: Integrating Modern Science and Indigenous Knowledge Systems",
  tagline: "Bridging knowledge, nurturing nature, securing our future",
  dates: "18–19 January 2027",
  location: "Central University of Rajasthan, Ajmer, India",
  email: "ses.iks2026curaj@gmail.com",
  secretaryEmail: "ses-iks2026@curaj.ac.in",
  phones: ["9602127352", "9441184024"],
  website: "www.ses-iks2026.in",
  registrationUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScsza1YyN5lN5OecahYIc0TEelgiTchaJPaqA3_fiTMxT4gGw/viewform",
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
      "Air Ecosystems & Resilience",
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
    title: "Ecosystems & Biodiversity",
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
    title: "Sustainable Agriculture & Land Use",
    topics: [
      "Soil Health & Agroecology",
      "Agri-waste & Biomass",
    ],
    details: [
      "Sustainable Agriculture",
      "Soil Health & Agroecology",
      "Sustainable Approaches for Management of Agricultural Wastes",
      "Agri-waste & Biomass",
    ],
  },
  {
    number: "05",
    title: "Resilient Solutions for Society",
    topics: [
      "Circular Economy",
      "Early Warning & Governance",
    ],
    details: [
      "Circular Economy",
      "Early Warning & Governance",
      "Understanding multi-hazard risks to infrastructure, ecosystem, society and economy",
    ],
  },
  {
    number: "06",
    title: "Special Thematic Session",
    topics: ["Himalayan Ecosystems and Climate Change"],
    special: true,
    details: [
      "Himalayan Ecosystems and Climate Change",
      "Atmospheric Processes",
      "Remote Sensing Approaches",
      "Climate Resilience",
    ],
  },
];

export const importantDates = [
  { event: "Abstract Submission", date: "10 Dec 2026" },
  { event: "Acceptance Notification", date: "15 Dec 2026" },
  { event: "Early Bird Registration", date: "25 Dec 2026" },
  { event: "Conference Dates", date: "18–19 Jan 2027" },
];

export const posterDates = [
  { event: "Abstract Submission", date: "10 Dec 2026" },
  { event: "Acceptance Notification", date: "15 Dec 2026" },
  { event: "Early Bird Registration", date: "25 Dec 2026" },
  { event: "Conference Dates", date: "18–19 Jan 2027" },
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
  "Interactive Plenary Talks",
  "Interdisciplinary Sessions",
  "Global Networking Opportunities",
  "Knowledge Exchange",
  "Sustainable Solutions",
];

export const highlights = [
  "Plenary & Keynote Lectures by Eminent National & International Experts",
  "Oral & Poster Presentations",
  "Special Thematic Session on Himalayas",
  "Young Researcher & Student Engagement",
  "Publication Opportunities",
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
    institution: "CURaj",
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
    role: "Assistant Professor",
    department: "Department of Meteorology",
    institution: "Tri-Chandra Multiple Campus, Tribhuvan University, Nepal",
  },
  {
    name: "Prof. Laxmi Kant Sharma",
    role: "Professor, Department of Environmental Science",
    institution: "SES, CURaj",
  },
];

export const organizingSecretaries: Person[] = [
  {
    name: "Dr. Pramod N. Kamble",
    role: "Head & Associate Professor",
    department: "Department of Environmental Science",
    institution: "Central University of Rajasthan",
  },
  {
    name: "Dr. Subrat Kumar Panda",
    role: "Assistant Professor",
    department: "Department of Atmospheric Science",
    institution: "SES, CURaj",
  },
  {
    name: "Dr. Ritu Singh",
    role: "Assistant Professor",
    department: "Department of Environmental Science",
    institution: "SES, CURaj",
  },
  {
    name: "Dr. Bhola Nath Dhakal",
    role: "Head, Department of Geography",
    institution: "Ratna Rajyalaxmi Campus, TU",
  },
  {
    name: "Dr. D. Bhagawan",
    role: "Assistant Professor",
    department: "Department of Environmental Science",
    institution: "SES, CURaj",
  },
  {
    name: "Mr. Bhawani S Dongol",
    role: "Executive Director",
    institution: "SEN",
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
    name: "Amer Fort",
    image: "/images/amer-fort.jpg",
    images: ["/images/amer-fort.jpg"],
    alt: "Amer Fort illuminated at night",
    distance: "Heritage Monument",
    description: "Famous magnificent fort situated in Amer, renowned for its artistic Hindu elements and scenic views.",
  },
  {
    name: "Hawa Mahal",
    image: "/images/hawa-mahal.jpg",
    images: ["/images/hawa-mahal.jpg"],
    alt: "Hawa Mahal Palace of Winds",
    distance: "Architectural Wonder",
    description: "Iconic five-story pink sandstone palace with 953 intricately designed windows (jharokhas).",
  },
  {
    name: "Nahargarh Fort",
    image: "/images/nahargarh-fort.jpg",
    images: ["/images/nahargarh-fort.jpg"],
    alt: "Nahargarh Fort on the edge of the Aravalli Hills overlooking the city",
    distance: "Scenic Viewpoint",
    description: "Perched on the rugged ridge of the Aravalli Hills, offering sweeping panoramic views of the city.",
  },
  {
    name: "Pushkar Lake",
    image: "/images/pushkar-ghats.jpg",
    images: ["/images/pushkar-ghats.jpg", "/images/pushkar-sunset.jpg"],
    alt: "Pushkar Lake, Ajmer",
    distance: "Sacred Pilgrimage",
    description: "Historic sacred lake with 52 ghats, serene sunsets, and timeless spiritual atmosphere in Ajmer.",
  },
  {
    name: "Nareli Jain Temple",
    image: "/images/nareli-jain-temple.jpg",
    images: ["/images/nareli-jain-temple.jpg"],
    alt: "Nareli Jain Temple, Ajmer",
    distance: "Sacred Architecture",
    description: "Stunning sacred temple on the outskirts of Ajmer with intricate marble carvings and 24 miniature shrines.",
  },
];

export const abstractGuidelines = {
  formatting: [
    "Abstract (300 words) in MS Word",
    "Font: Times New Roman, 12 pt",
    "Keywords: Max 5",
    "File format: .doc / .docx",
  ],
  restrictions: [
    "Abstracts must be original and unpublished.",
    "One abstract per presenting author.",
    "Selected papers will be published in reputed journals.",
    "Registration is mandatory for presenting authors.",
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
