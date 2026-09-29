export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "AI" | "Networks/6G" | "Security" | "Startups" | "Research" | "Tools";
  tags: string[];
  readTime: string;
  featured?: boolean;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "welcome-what-ill-be-writing-about",
    title: "Welcome — What I'll Be Writing About",
    description:
      "A personal manifesto on engineering at the bleeding edge: bridging machine learning research, 6G telecom architectures, startup mechanics, and patent engineering.",
    date: "2026-04-01",
    category: "Research",
    tags: ["Philosophy", "AI Engineering", "6G Systems", "Patents", "Writing"],
    readTime: "4 min read",
    featured: true,
    content: `
# Engineering at the Bleeding Edge

Welcome to my digital workshop and research notebook. 

For the past few years, my work has hovered at the intersection of **deep learning theory**, **distributed systems**, and **hardware-conscious deployment**. Whether it's dissecting attention mechanisms for biological signals, engineering ultra-low-latency 5G/6G communication protocols at IIT Gandhinagar, or filing patents at i-Hub Gujarat, one truth remains clear:

> **The most interesting breakthroughs happen at the friction points between disciplines.**

## What You Can Expect Every Week

This publication is dedicated to demystifying emerging technologies without fluff. Here is what I will be sharing regularly:

### 1. Research Simplified & First-Principles Breakdowns
Academic papers are often written in opaque academic jargon. I will take landmark papers in LLM routing, biosignal analysis, and distributed neural systems and explain both the rigorous mathematical intuition and the plain-English takeaway.

### 2. Next-Gen Networking & 6G Systems
As telecom moves beyond 5G toward sub-terahertz frequencies, intelligent reflective surfaces, and AI-native radio access networks (RAN), cybersecurity and protocol optimization become paramount. I'll share real experiments, packet benchmarks, and system designs.

### 3. Practical AI/ML Architecture
Deep dives into trust-aware RAG, LoRA fine-tuning, quantization bottlenecks (INT4 vs FP8), and multi-agent routing. Code snippets, benchmarks, and honest post-mortems on what failed in production.

### 4. Patents, Startups & Intellectual Property
How to translate an engineering insight into a defensible patent claim, lessons from building Tatvam AI and competing with 85+ teams, and navigating early-stage IP strategy.

---

## Join the Conversation

Everything here is open-source and built for discussion. If you have questions, feedback, or want to collaborate on research, reach out via the contact page or connect on [GitHub](https://github.com/bhaumik611) and [LinkedIn](https://www.linkedin.com/in/bhaumik-patel-bbb79635b/).
    `
  },
  {
    slug: "building-trustrag-hybrid-retrieval-hallucination-scoring",
    title: "Building TrustRAG: Hybrid Retrieval & Real-Time Hallucination Scoring",
    description:
      "Why naive vector RAG fails in production, how combining FAISS with BM25 changes the retrieval landscape, and implementing confidence-gated model failover.",
    date: "2026-03-22",
    category: "AI",
    tags: ["RAG", "FAISS", "BM25", "FastAPI", "Evaluation", "Production ML"],
    readTime: "7 min read",
    featured: false,
    content: `
# Why Naive Vector Search Fails

Most developers build RAG by chunking text, computing dense embeddings, and querying a vector index like FAISS or Pinecone with cosine similarity. In production, this breaks down when queries involve:

1. **Exact keywords and acronyms** (e.g., "Section 4(a)(1) clause C" or specific serial numbers).
2. **Out-of-vocabulary domain tokens**.
3. **Subtle negative constraints** ("Find papers that do NOT use transformer decoders").

## The Hybrid Retrieval Architecture

In **TrustRAG**, we solve this by executing parallel retrieval:

- **Dense Pathway**: FAISS indexing with \`sentence-transformers/all-MiniLM-L6-v2\` capturing semantic intent.
- **Sparse Pathway**: Exact token frequency matching using BM25 with custom stemming and stopword filtering.
- **Reciprocal Rank Fusion (RRF)**: Merging both ranking distributions into a unified, balanced candidate list.

\`\`\`python
def reciprocal_rank_fusion(dense_ranks, sparse_ranks, k=60):
    rrf_scores = {}
    for rank, doc_id in enumerate(dense_ranks):
        rrf_scores[doc_id] = rrf_scores.get(doc_id, 0) + 1.0 / (k + rank)
    for rank, doc_id in enumerate(sparse_ranks):
        rrf_scores[doc_id] = rrf_scores.get(doc_id, 0) + 1.0 / (k + rank)
    return sorted(rrf_scores.items(), key=lambda x: x[1], reverse=True)
\`\`\`

## Hallucination Risk Classification

Before returning an answer to the user, TrustRAG computes a **Context Entailment Score (CES)**. If the confidence drops below the threshold, it triggers an adaptive fallback from Groq (Llama-3-70B) to ZhipuAI / GLM-4, ensuring high reliability.
    `
  },
  {
    slug: "towards-6g-cybersecurity-and-sub-terahertz-networks",
    title: "Towards 6G: Cybersecurity, Semantic Communication & Sub-THz Protocols",
    description:
      "A technical walkthrough of emerging 6G wireless architectures, physical-layer security challenges, and low-latency packet scheduling explored at IIT Gandhinagar.",
    date: "2026-02-28",
    category: "Networks/6G",
    tags: ["6G", "Telecom", "Cybersecurity", "Protocols", "IIT Gandhinagar"],
    readTime: "6 min read",
    featured: false,
    content: `
# The Evolution from 5G to 6G

While 5G focused on enhanced Mobile Broadband (eMBB) and Ultra-Reliable Low-Latency Communication (uRLLC), 6G introduces fundamentally new paradigms:

1. **Sub-Terahertz & Optical Wireless**: Frequencies between 100 GHz and 1 THz providing terabit-per-second throughput.
2. **AI-Native Air Interface**: Machine learning models replacing handcrafted signal processing blocks (channel estimation, beamforming).
3. **Integrated Sensing and Communication (ISAC)**: Radios acting simultaneously as radar and communication transceivers.

## Physical Layer Cybersecurity

With open RAN and software-defined disaggregation, security cannot remain solely at the application layer. At IIT Gandhinagar, we explore automated protocol verification and intrusion detection algorithms operating directly on baseband IQ samples.
    `
  }
];
