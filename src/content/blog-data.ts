export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "AI Engineering" | "LLM Architecture" | "Edge Systems" | "Startups & IP";
  tags: string[];
  readTime: string;
  featured?: boolean;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "engineering-trustworthy-rag-pipelines",
    title: "Engineering Trustworthy RAG: Beyond Vector Distance & Cosine Similarity",
    description:
      "Why naive dense vector search causes hallucinations in production, and how combining Reciprocal Rank Fusion (BM25 + FAISS) with Context Entailment Scoring solves enterprise accuracy bottlenecks.",
    date: "2026-04-05",
    category: "AI Engineering",
    tags: ["RAG", "FAISS", "BM25", "Hallucination Scoring", "Production AI"],
    readTime: "6 min read",
    featured: true,
    content: `
# The Reality of Production RAG

Most developers build Retrieval-Augmented Generation (RAG) by embedding documents with a dense model and querying an approximate nearest neighbors (ANN) index. In real production workloads, this approach fails on:

1. **Exact token lookups**: Product codes, API method names, and legal clauses.
2. **Out-of-vocabulary terms**: Medical identifiers or proprietary acronyms.
3. **Negative constraints**: Queries like "Find models that do not use cross-entropy loss".

## The Hybrid Retrieval Architecture

To overcome this, **hybrid retrieval** merges dense semantic search with sparse BM25 exact matching using **Reciprocal Rank Fusion (RRF)**.

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

Before returning generation output, the system evaluates the **Context Entailment Score (CES)**. If attribution confidence drops below threshold, an automated fallback route switches inference to a larger reasoning backend.
    `
  },
  {
    slug: "cost-effective-llm-routing-in-practice",
    title: "Cost-Effective Multi-Model LLM Routing in Production",
    description:
      "How to dispatch prompts across a tier of 9+ LLM backends using intent classification and contextual bandits, cutting token bills by 60%+ while preserving response quality.",
    date: "2026-03-28",
    category: "LLM Architecture",
    tags: ["LLM Routing", "Cost Optimization", "Thompson Sampling", "FastAPI"],
    readTime: "7 min read",
    featured: false,
    content: `
# The Economic Burden of Frontier Models

Sending every query to frontier flagship LLMs is economically unsustainable for high-traffic apps. Over 70% of user queries (formatting, extraction, conversational chit-chat) can be answered with equal precision by lightweight 8B/14B models.

## Dynamic Intent Dispatching

By implementing an intent classification meta-router:
- Queries are classified in <5ms using quantized embeddings.
- High-difficulty analytical tasks are routed to frontier reasoning engines.
- Standard utility tasks are fulfilled by ultra-fast local or low-cost endpoints with automatic fallback.
    `
  },
  {
    slug: "quantization-and-edge-deployment-for-vision-models",
    title: "Quantization & Edge Optimization: Deploying Vision Models to Low-Power Hardware",
    description:
      "A technical walkthrough of INT8 and INT4 post-training quantization, pruning, and hardware-accelerated inference for neural vision networks on ARM and edge TPUs.",
    date: "2026-03-12",
    category: "Edge Systems",
    tags: ["Quantization", "Edge AI", "OpenCV", "TensorRT", "Embedded Systems"],
    readTime: "5 min read",
    featured: false,
    content: `
# Taking AI from the Cloud to the Edge

Running deep vision models on edge hardware (like drones, aquatic buoys, or medical tablets) requires aggressive memory footprint reduction and power efficiency.

## Key Optimization Techniques

1. **Post-Training Dynamic Quantization (PTQ)**: Compressing 32-bit floating point weights into INT8/INT4 without retraining.
2. **Channel Pruning**: Removing redundant convolutional filters based on L1-norm activation magnitude.
3. **Zero-Copy Memory Buffers**: Streaming camera frames directly into hardware inference memory to eliminate CPU-GPU copying latency.
    `
  },
  {
    slug: "from-lab-to-patent-protecting-ai-inventions",
    title: "From Code to Claims: Protecting Deep Tech & AI Innovations via Patents",
    description:
      "Key lessons learned from drafting and filing 7 patents at i-Hub Gujarat: how to structure technical disclosures, establish patentable subject matter, and navigate prior art.",
    date: "2026-02-20",
    category: "Startups & IP",
    tags: ["Patents", "IP Strategy", "Invention Disclosures", "Startups"],
    readTime: "8 min read",
    featured: false,
    content: `
# Why Software & AI Patents Require a Systems Approach

Pure algorithms and abstract mathematical methods are generally unpatentable. To secure defensible patent claims for AI and IoT innovations, the disclosure must tie the algorithmic logic directly to **physical transformations, hardware controllers, or measurable technical improvements**.

## 3 Rules for Drafting Strong AI Patent Disclosures

1. **Describe the Concrete Physical Pipeline**: Focus on sensor input acquisition, preprocessing pipelines, and hardware actuation mechanisms.
2. **Detail Alternative Embodiments**: Never restrict claims to a single neural architecture; describe both transformer and CNN implementations.
3. **Conduct Exhaustive Prior-Art Landscape Mapping**: Identify closest existing patents early to draft distinct technical boundaries.
    `
  }
];
