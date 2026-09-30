export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Internship" | "Research" | "Leadership" | "Startup";
  summary: string;
  bullets: string[];
  skills: string[];
}

export interface PatentRecognitionItem {
  id: string;
  title: string;
  category: "Patent Filed" | "Award & Recognition" | "Startup Venture" | "Patent Specification" | string;
  domain: string;
  period?: string;
  description: string;
  badge: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "ihub-gujarat",
    role: "Intellectual Property Manager Intern",
    organization: "i-Hub Gujarat",
    location: "Ahmedabad, Gujarat, India",
    period: "Jun 2026 — Present",
    type: "Internship",
    summary:
      "Directing patent discovery, prior-art landscape analysis, and IP commercialization strategy for university researchers and regional startups.",
    bullets: [
      "Conduct deep prior-art searches and patentability landscape assessments across AI/ML, IoT, and embedded hardware innovations.",
      "Draft comprehensive invention disclosures, claims structures, and technical patent specifications in compliance with Indian Patent Office guidelines.",
      "Collaborate directly with startup founders, academic researchers, and registered patent attorneys to define defensible IP boundaries.",
      "Evaluate technological freedom-to-operate (FTO) reports and strategic licensing frameworks."
    ],
    skills: ["Patent Discovery", "Prior-Art Analysis", "Invention Disclosures", "IP Strategy", "Freedom-to-Operate"]
  },
  {
    id: "iit-gandhinagar",
    role: "Research Intern",
    organization: "IIT Gandhinagar",
    location: "Gandhinagar, Gujarat, India",
    period: "May 2026 — Present",
    type: "Research",
    summary:
      "Investigating next-generation 5G/6G future networking systems, cybersecurity protocols, and physical-layer performance optimization.",
    bullets: [
      "Research advanced network slicing, physical-layer security, and semantic communication architectures for 5G-Advanced and 6G standards.",
      "Develop and benchmark ultra-reliable low-latency communication (uRLLC) packet scheduling algorithms on software-defined radio testbeds.",
      "Design machine-learning-driven intrusion detection systems for real-time traffic anomaly detection in open-RAN deployments.",
      "Optimize network transport protocols and analyze throughput-delay Pareto frontiers under heavy multi-user interference."
    ],
    skills: ["Future Networking", "6G Telecom", "Cybersecurity", "Protocol Development", "Network Slicing", "Open-RAN"]
  },
  {
    id: "suvidha-foundation",
    role: "AI/ML Research Intern",
    organization: "Suvidha Foundation",
    location: "Remote / Hybrid",
    period: "Jan 2026 — Mar 2026",
    type: "Research",
    summary:
      "Engineered multi-document summarization models on the NewsSumm benchmark using Parameter-Efficient Fine-Tuning (LoRA/QLoRA) on Mistral, LLaMA, and Flan-T5.",
    bullets: [
      "Constructed high-throughput data processing and deduplication pipelines for multi-document summarization on the NewsSumm dataset.",
      "Fine-tuned state-of-the-art open-source LLMs (Flan-T5, Mistral-7B, LLaMA-3-8B) with Low-Rank Adaptation (LoRA) and 4-bit quantization.",
      "Established rigorous automated evaluation workflows utilizing ROUGE-1/2/L, BERTScore, and semantic faithfulness metrics.",
      "Contributed novel architectural enhancements to an abstractive summarization model achieving +8.4% ROUGE-2 score gains over base models."
    ],
    skills: ["LLM Fine-Tuning", "LoRA / QLoRA", "Flan-T5", "Mistral", "LLaMA", "ROUGE", "BERTScore", "NLP Pipelines"]
  },
  {
    id: "sarvopari-creations",
    role: "Machine Learning Intern",
    organization: "Sarvopari Creations",
    location: "Gujarat, India",
    period: "Dec 2025 — Jan 2026",
    type: "Internship",
    summary:
      "Developed web-based machine learning systems analyzing user interaction dynamics, predictive behavioral modeling, and explainable AI interfaces.",
    bullets: [
      "Engineered interaction-pattern prediction models using user session telemetry to optimize conversion pathways and interface usability.",
      "Implemented Explainable AI (XAI) feature importance dashboards (SHAP / LIME) to help product teams interpret ML model outputs.",
      "Integrated lightweight client-side and server-side ML inference pipelines with low-latency response times."
    ],
    skills: ["Behavioral Modeling", "Explainable AI (SHAP)", "Feature Engineering", "Python", "Web ML"]
  },
  {
    id: "tatvam-ai",
    role: "Founding Partner",
    organization: "Tatvam AI",
    location: "Gandhinagar, Gujarat, India",
    period: "Apr 2025 — Nov 2025",
    type: "Startup",
    summary:
      "Co-founded an AI startup building specialized LLMs and foundational speech datasets for Indian regional languages; secured 1st place among 85+ teams.",
    bullets: [
      "Spearheaded technical roadmap, LLM architecture selection, and speech-to-text tokenization strategy for Indic languages.",
      "Curated and validated high-quality multilingual speech and text datasets with rigorous phonetic alignment.",
      "Negotiated strategic academic and industry partnerships, establishing collaborative data collection frameworks.",
      "Won 1st Place out of 85+ competing teams at the PDEU Business Plan Pitch competition, personally recognized by the founder of GoaMiles."
    ],
    skills: ["Indic LLMs", "Speech Datasets", "Founding Strategy", "Technical Leadership", "Pitching & Partnerships"]
  },
  {
    id: "bulls-and-bears",
    role: "Chief Coordinator",
    organization: "Bulls & Bears Finance Club, PDEU",
    location: "Pandit Deendayal Energy University, Gujarat",
    period: "Aug 2023 — May 2026",
    type: "Leadership",
    summary:
      "Elected head of the university's premier 150+ member finance and algorithmic trading community, leading 5+ operational teams.",
    bullets: [
      "Directed 5+ cross-functional teams spanning Technical Development, Quantitative Research, Event Operations, and Outreach.",
      "Architected automated web registration workflows and internal dashboard systems, driving a 40% growth in flagship event participation.",
      "Scaled active community membership by 25% and accelerated event operational setup time by 30%.",
      "Secured 2 major industry financial sponsorships and hosted regional algorithmic trading hackathons."
    ],
    skills: ["Community Leadership", "Operations Management", "Web Automation", "Team Building", "Sponsorships"]
  }
];

export const patentsAndRecognition: PatentRecognitionItem[] = [
  {
  id: "trackncontrol",

  title: "TrackNControl",

  category: "Patent Filed",

  domain: "IoT & Mobility",

  badge: "IoT Patent #1",

  description:
    "Comprehensive IoT-enabled real-time tracking, cloud diagnostics, and remote governance infrastructure engineered specifically for rental two-wheeler and e-bike fleets.",

  highlights: [

    "Precision GPS/GNSS tracking with cellular telemetry fallback and tamper detection",

    "Automated dynamic geo-fenced speed regulation and remote immobilization start/stop",

    "Centralized cloud dashboard for fleet health monitoring and battery life diagnostics"

  ]

},

{
  id: "microsight",

  title: "MicroSight",

  category: "Patent Filed",

  domain: "AgriTech & Bio-IoT",

  badge: "Bio-IoT Patent #2",

  description:
    "Pond-deployed embedded monitoring system combining underwater imaging, onboard plankton estimation, and automated water-safety evaluation for continuous aquatic monitoring.",

  highlights: [

    "Floating control unit coupled with a submerged imaging probe for continuous in-situ plankton monitoring",

    "Onboard image processing generates approximate numerical plankton concentration estimates without laboratory infrastructure",

    "Automated safety evaluation triggers buzzer, visual warnings, and wireless notifications when unsafe conditions are detected"

  ]

},

{
  id: "neurovault",

  title: "NeuroVault",

  category: "Patent Filed",

  domain: "AI & Secure Computing",

  badge: "AI Hardware Patent #3",

  description:
    "Detachable hardware-based AI memory and model adaptation module designed to provide secure, portable, cross-platform personalization through encrypted semantic memory and interactive prompt reconstruction.",

  highlights: [

    "Hardware-anchored encrypted semantic memory storing embeddings, preferences, and model adaptation parameters",

    "On-device similarity retrieval reconstructs context-complete prompts from a short user request",

    "Dual-mode execution supporting manual prompt reuse or authenticated direct API transmission with encrypted credentials"

  ]

},

{
  id: "polyglot-ai",

  title: "PolyGlot-AI",

  category: "Patent Filed",

  domain: "AI & EdTech",

  badge: "AI Learning Patent #4",

  description:
    "Portable multilingual learning and translation device integrating speech recognition, language detection, AI-driven optimization, translation, and back translation into a standalone learning assistant.",

  highlights: [

    "Real-time speech capture and automatic language identification followed by AI-based contextual optimization",

    "One-touch multilingual translation with offline capability through preloaded models",

    "Stores optimized translations for future review, reinforcement, and language-learning practice"

  ]

},

{
  id: "mnemosync",

  title: "MnemoSync",

  category: "Patent Filed",

  domain: "AI Infrastructure & Security",

  badge: "AI Interoperability Patent #5",

  description:
    "Computer-implemented framework for securely transferring personalized AI semantic memory and model adaptation parameters across heterogeneous AI runtimes without dependence on a single vendor.",

  highlights: [

    "Cryptographically seals embeddings, preferences, and model adaptation parameters into a portable memory object",

    "Authenticated cross-runtime handshake with compatibility arbitration before memory or adaptation parameters are exposed",

    "Similarity-gated selective decryption, runtime injection, continuous re-sealing, and session revocation for controlled AI personalization"

  ]

},

{
  id: "oxygen-thermal-regulation",

  title: "Oxygen & Thermal Regulation System",

  category: "Patent Filed",

  domain: "Automotive Safety & AI",

  badge: "Automotive Safety Patent #6",

  description:
    "Intelligent vehicle safety system that detects unattended occupants and actively regulates cabin temperature and oxygen conditions through an autonomous closed-loop intervention mechanism.",

  highlights: [

    "AI-assisted occupant classification using weight sensing and cabin imaging to identify infants, children, pets, or adults",

    "Continuous monitoring of cabin temperature and oxygen with independent ignition-powered backup safety systems",

    "Automatic ventilation and supplemental oxygen intervention with closed-loop recovery and door-open safety override"

  ]

},

{
  id: "adaptive-ultrasonic-vaccine-screening",

  title: "Adaptive Ultrasonic Vaccine Screening",

  category: "Patent Specification",

  domain: "MedTech, NDT & Machine Learning",

  badge: "MedTech + ML Patent",

  description:
    "Portable non-destructive screening system that uses adaptive ultrasonic interrogation and embedded machine learning to detect freeze-induced damage in sealed and labelled vaccine vials.",

  highlights: [

    "Ultrasonic backscatter analysis through the intact glass vial and label without opening or consuming the vaccine",

    "Embedded temporal machine learning model classifies freeze damage while a policy network adaptively reconfigures excitation and agitation parameters",

    "Confidence-aware three-way decision system—sound, freeze-damaged, or inconclusive—with self-verification and battery-powered point-of-use operation"
    ]
  }
  // },
  // {
  //   id: "tatvam-award",
  //   title: "1st Place — PDEU Business Plan Pitch",
  //   category: "Award & Recognition",
  //   domain: "Civic AI",
  //   period: "2025",
  //   badge: "Venture Winner (85+ Teams)",
  //   description:
  //     "Awarded 1st place out of 85+ competing ventures for Tatvam AI's Indic language foundation model roadmap, recognized by the founder of GoaMiles.",
  //   highlights: [
  //     "Evaluated across technical feasibility, commercial IP defensibility, and market impact",
  //     "Praised for innovative Indic tokenization pipelines and low-resource data synthesis methods"
  //   ]
  // }
];
