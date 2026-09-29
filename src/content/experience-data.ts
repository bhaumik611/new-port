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
  category: "Patent Filed" | "Award & Recognition" | "Startup Venture";
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
    badge: "IoT Patent",
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
    badge: "Bio-IoT Patent",
    description:
      "Autonomous solar-powered floating IoT buoy equipped with integrated micro-imaging optics and edge vision algorithms to monitor pond ecology and plankton density.",
    highlights: [
      "Automated in-situ aquatic microscopy capturing plankton blooms and cyanobacteria counts",
      "On-device neural inference classifying water toxicity parameters in real time",
      "Automated GSM/LoRa alerts dispatched to aquaculturists before dangerous algal blooms cause fish mortality"
    ]
  },
  {
    id: "farmaspray",
    title: "FarmaSpray",
    category: "Patent Filed",
    badge: "AgriTech Patent",
    description:
      "Smart precision agricultural crop-disease detection and variable-rate automated irrigation and pesticide dispensing system.",
    highlights: [
      "Edge-vision neural network identifying early fungal, viral, and bacterial leaf pathology",
      "Targeted micro-nozzle actuation dispensing chemical treatments only where disease is detected",
      "Reduces chemical pesticide runoff by up to 60% while conserving local groundwater resources"
    ]
  },
  {
    id: "tatvam-award",
    title: "1st Place — PDEU Business Plan Pitch",
    category: "Award & Recognition",
    period: "2025",
    badge: "Top Winner (85+ Teams)",
    description:
      "Awarded 1st place out of 85+ competing ventures for Tatvam AI's Indic language foundation model roadmap, validated and recognized by top venture judges including the founder of GoaMiles.",
    highlights: [
      "Evaluated across technical feasibility, commercial IP defensibility, and market impact",
      "Praised for innovative Indic tokenization pipelines and low-resource data synthesis methods"
    ]
  }
];
