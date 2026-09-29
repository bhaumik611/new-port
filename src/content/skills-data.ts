export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "ML / AI & Systems",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Deep Learning",
      "LLM Fine-Tuning",
      "LoRA / QLoRA",
      "RAG Pipelines",
      "NLP",
      "Explainable AI (XAI)"
    ]
  },
  {
    title: "Web & Frameworks",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "FastAPI", "RESTful APIs", "Streamlit"]
  },
  {
    title: "Data & Vector Search",
    skills: ["Pandas / EDA", "FAISS", "PostgreSQL", "MySQL", "Vector Embeddings", "KNIME", "RapidMiner"]
  },
  {
    title: "Tools & Infrastructure",
    skills: ["Git / GitHub", "Linux / Bash", "Docker", "Jupyter", "Figma", "Vercel", "Postman"]
  },
  {
    title: "Practices & Concepts",
    skills: ["DSA (Algorithms)", "OOP", "Agile & Scrum", "DevOps", "Patent Drafting", "Technical Writing"]
  }
];

export const marqueeSkills: string[] = [
  "Deep Learning",
  "LLM Fine-Tuning",
  "RAG Systems",
  "6G Networks",
  "PyTorch",
  "TypeScript",
  "FastAPI",
  "Patent Engineering",
  "FAISS",
  "Explainable AI",
  "Next.js",
  "uRLLC Protocols",
  "LoRA & QLoRA",
  "Computer Vision"
];
