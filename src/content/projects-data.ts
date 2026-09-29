export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: "AI/ML Systems" | "Web & Cloud" | "NLP & LLMs" | "Computer Vision";
  tags: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  metrics?: string;
  highlights: string[];
}

export const projectsData: Project[] = [
  {
    slug: "trustrag",
    title: "TrustRAG",
    tagline: "Trust-aware RAG pipeline with hybrid retrieval & hallucination risk scoring",
    description:
      "A production-grade Retrieval-Augmented Generation pipeline featuring hybrid vector and sparse search (FAISS + BM25), real-time hallucination risk classification (Low / Medium / High), and adaptive LLM routing with Groq to ZhipuAI failover.",
    category: "AI/ML Systems",
    tags: ["Python", "FastAPI", "FAISS", "BM25", "LangChain", "Sentence-Transformers", "Streamlit", "PyMuPDF"],
    featured: true,
    githubUrl: "https://github.com/bhaumik611/TrustRAG",
    liveUrl: "https://github.com/bhaumik611/TrustRAG",
    metrics: "40% lower hallucination rate",
    highlights: [
      "Hybrid retrieval combining FAISS dense embeddings with BM25 sparse keyword scoring using Reciprocal Rank Fusion",
      "Dynamic hallucination risk engine scoring Context Entailment and attribution confidence",
      "Adaptive fallback routing from high-throughput Groq (Llama-3) to ZhipuAI GLM models on ambiguity or rate limits",
      "Full-featured FastAPI backend with Streamlit frontend and high-speed PyMuPDF ingestion"
    ]
  },
  {
    slug: "rag-eval",
    title: "RAG-eval",
    tagline: "Comprehensive automated evaluation framework for retrieval-augmented LLM architectures",
    description:
      "An automated evaluation suite measuring faithfulness, answer relevancy, context precision, and context recall across dense, sparse, and hybrid retrieval strategies with multi-metric benchmarking.",
    category: "AI/ML Systems",
    tags: ["Python", "RAG Triad", "Evaluation Metrics", "ROUGE", "BERTScore", "LangChain"],
    featured: true,
    githubUrl: "https://github.com/bhaumik611/RAG-eval",
    liveUrl: "https://github.com/bhaumik611/RAG-eval",
    metrics: "Automated multi-metric benchmarking",
    highlights: [
      "Automated computation of RAG Triad metrics: Context Relevance, Groundedness, and Answer Relevance",
      "Batch evaluation pipelines with synthetic test set generation across custom PDF and markdown corpora",
      "Visual reporting dashboard comparing embedding models, chunking strategies, and retrieval top-k parameters"
    ]
  },
  {
    slug: "bnb-website",
    title: "Bulls & Bears Website",
    tagline: "High-performance community web portal for PDEU's premier 150+ member finance club",
    description:
      "Modern, responsive, and animated multi-page web platform built for Bulls & Bears Finance Club, featuring automated event registrations, member dashboards, and market analytics integrations.",
    category: "Web & Cloud",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vercel", "Framer Motion"],
    featured: true,
    githubUrl: "https://github.com/bhaumik611/bnb-website",
    liveUrl: "https://github.com/bhaumik611/bnb-website",
    metrics: "+35% Core Web Vitals, 3x faster navigation",
    highlights: [
      "Elected leadership role managing 150+ members and 5+ teams with automated registration workflows",
      "Achieved 40% growth in event participation and 30% faster event setup cycle times",
      "Sleek responsive design delivering 3x faster navigation and +35% Core Web Vitals on Vercel"
    ]
  },
  {
    slug: "sql-ui-suite",
    title: "SQL-UI & SQL-UI-Web",
    tagline: "Lightweight, cross-platform TypeScript SQL client & browser query workbench",
    description:
      "A modern browser-based and desktop SQL interface engineered with TypeScript, supporting multi-dialect query execution (PostgreSQL, MySQL, SQLite), schema visualization, and instant data export.",
    category: "Web & Cloud",
    tags: ["TypeScript", "React", "Node.js", "SQL Workbench", "PostgreSQL", "MySQL", "Electron"],
    featured: true,
    githubUrl: "https://github.com/bhaumik611/sql-ui",
    liveUrl: "https://github.com/bhaumik611/sql-ui-web",
    metrics: "Multi-dialect instant querying",
    highlights: [
      "Unified TypeScript query workbench for PostgreSQL, MySQL, and SQLite databases",
      "Interactive table schema inspector with inline cell editing and query history persistence",
      "Seamless data export to CSV, JSON, and parameterized SQL INSERT scripts"
    ]
  },
  {
    slug: "prompt-structuring",
    title: "Prompt Structuring & Router",
    tagline: "Semantic prompt parsing, schema enforcement, and cost-aware routing pipeline",
    description:
      "An automated prompt-engineering framework that normalizes unstructured user instructions into validated JSON schemas, detects intent ambiguities, and enforces token-budget constraints.",
    category: "NLP & LLMs",
    tags: ["Python", "Pydantic", "LLM Routing", "Prompt Engineering", "JSON Schema"],
    featured: true,
    githubUrl: "https://github.com/bhaumik611/prompt-structuring",
    liveUrl: "https://github.com/bhaumik611/prompt-structuring",
    metrics: "60%+ token cost reduction",
    highlights: [
      "Strict Pydantic schema validation for deterministic structured outputs from stochastic LLMs",
      "Cost-aware dynamic prompt compression reducing input tokens while preserving semantic intent",
      "Plug-and-play adapter for multi-agent workflows and automated tool-calling pipelines"
    ]
  },
  {
    slug: "multi-model-intent-classification",
    title: "Multi-Model Intent Classification",
    tagline: "High-throughput NLP pipeline routing across 9+ LLM backends with fallback resilience",
    description:
      "An intelligent intent classification and dispatch system that detects user intent, routes tasks to the optimal model among 9+ provider backends, and logs structured decision history.",
    category: "NLP & LLMs",
    tags: ["Python", "FastAPI", "NLP", "LLM Routing", "GLM Fallback", "Classification"],
    featured: true,
    githubUrl: "https://github.com/bhaumik611",
    metrics: "+15% accuracy, 9+ LLM backends",
    highlights: [
      "Dynamic query classification routing requests across frontier and localized models",
      "GLM-based failover architecture ensuring 99.9% uptime during API outages",
      "Structured JSON history logging for offline drift analysis and continual retraining"
    ]
  },
  {
    slug: "face-detection-system",
    title: "Real-Time Face Detection System",
    tagline: "High-speed hybrid Haar Cascade & DNN ResNet SSD/MTCNN detection engine",
    description:
      "A real-time computer vision system combining classical Haar cascades with deep ResNet SSD and MTCNN models for high-frame-rate, occlusion-robust facial landmark localization.",
    category: "Computer Vision",
    tags: ["OpenCV", "Python", "ResNet SSD", "MTCNN", "Computer Vision", "Real-Time"],
    featured: true,
    githubUrl: "https://github.com/bhaumik611",
    metrics: "92%+ accuracy at 25+ FPS",
    highlights: [
      "Dual-stage pipeline switching between lightweight Haar and deep SSD based on scene complexity",
      "55% reduction in false positives in extreme lighting and low-contrast environments",
      "Real-time edge performance running smoothly at 25+ FPS on standard CPU hardware"
    ]
  }
];
