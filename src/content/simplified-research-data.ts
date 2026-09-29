export interface SimplifiedPaper {
  slug: string;
  title: string;
  originalAuthors: string;
  originalVenue: string;
  year: string;
  category: "Transformers & Attention" | "Alignment & RLHF" | "Hardware Acceleration" | "Sparse Architectures";
  tags: string[];
  readTime: string;
  plainEnglishSummary: string;
  eli12: string;
  coreProblem: string;
  theBreakthrough: string;
  howItWorksSimply: string;
  whyItMattersToday: string;
  originalPaperUrl: string;
}

export const simplifiedResearchPapers: SimplifiedPaper[] = [
  {
    slug: "attention-is-all-you-need-simplified",
    title: "Attention Is All You Need — The Transformer Architecture Simplified",
    originalAuthors: "Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, et al. (Google Brain & Research)",
    originalVenue: "NeurIPS 2017",
    year: "2017",
    category: "Transformers & Attention",
    tags: ["Transformers", "Self-Attention", "NLP", "Foundation Models"],
    readTime: "7 min read",
    plainEnglishSummary:
      "The landmark paper that replaced sequential recurrent neural networks (RNNs/LSTMs) with pure Self-Attention, allowing models to process all words in parallel and ushering in the era of ChatGPT and modern LLMs.",
    eli12:
      "Old language models read books like a person reading one word at a time through a tiny keyhole, often forgetting the beginning by the time they reached the end. Transformers look at the entire sentence all at once and draw highlighter lines between words that relate to each other, making them drastically faster and smarter.",
    coreProblem:
      "Previous models (RNNs and LSTMs) processed text sequentially from left to right. Because step $t$ depended on step $t-1$, training could not be parallelized across GPU cores, creating an insurmountable barrier to scaling up model size and context length.",
    theBreakthrough:
      "The authors proved that recurrent loops and convolutions are completely unnecessary. A purely attention-based mechanism called 'Multi-Head Self-Attention' is sufficient to compute contextual representations across an entire sequence in parallel.",
    howItWorksSimply:
      "1. Queries, Keys, and Values: Each word creates a Query (what am I looking for?), a Key (what do I contain?), and a Value (what information do I carry?).\n2. Dot-Product Scoring: The model multiplies Queries and Keys to measure how strongly every word relates to every other word.\n3. Softmax Weighting: Scores are converted into percentages and used to compute a weighted sum of the Values.\n4. Multi-Head Parallelism: This calculation is performed simultaneously across 8+ different heads to capture grammar, tone, and long-range dependencies at once.",
    whyItMattersToday:
      "Every major foundation model today (GPT-4o, Claude 3.5 Sonnet, Gemini 1.5, LLaMA 3, BERT, Whisper, Stable Diffusion) is built on the Transformer architecture introduced in this paper.",
    originalPaperUrl: "https://arxiv.org/abs/1706.03762",
  },
  {
    slug: "direct-preference-optimization-simplified",
    title: "Direct Preference Optimization (DPO) — Aligning LLMs Without Complex Reward Models",
    originalAuthors: "Rafael Rafailov, Archit Sharma, Eric Mitchell, Stefano Ermon, Christopher D. Manning, Chelsea Finn (Stanford)",
    originalVenue: "NeurIPS 2023",
    year: "2023",
    category: "Alignment & RLHF",
    tags: ["DPO", "RLHF", "LLM Alignment", "Optimization", "Stanford"],
    readTime: "6 min read",
    plainEnglishSummary:
      "How Stanford researchers mathematically eliminated the unstable 4-model reinforcement learning loop (PPO) by proving that the language model itself can act as its own reward function.",
    eli12:
      "To teach an AI to be polite and helpful, scientists used to train a separate 'judge AI' and use a complicated game-score algorithm to reward it. DPO showed that by simply showing the AI pairs of 'good answer vs bad answer', we can train it directly in one step with standard math, cutting training complexity in half.",
    coreProblem:
      "Traditional Reinforcement Learning from Human Feedback (RLHF with PPO) requires training and synchronizing 4 separate neural networks simultaneously (Actor, Critic, Reference Model, and Reward Model), making training notoriously unstable, prone to mode collapse, and GPU-memory intensive.",
    theBreakthrough:
      "The authors showed that the constrained RL objective can be solved analytically in closed form, expressing the human preference loss directly as a simple binary cross-entropy classification over pairs of accepted and rejected completions.",
    howItWorksSimply:
      "1. Collect pairs of prompts with a winning completion $y_w$ and losing completion $y_l$.\n2. Compute the log-ratio of how likely the current model generates $y_w$ vs $y_l$ compared to a frozen base model.\n3. Minimize a simple binary cross-entropy loss that increases probability on $y_w$ while decreasing probability on $y_l$, with a penalty $\\beta$ for drifting too far from the reference model.",
    whyItMattersToday:
      "DPO has become the primary post-training alignment method for open-weight models including Zephyr, Mistral, LLaMA-3 Instruct, and Qwen, enabling fast, stable alignment without complex RL engineering.",
    originalPaperUrl: "https://arxiv.org/abs/2305.18290",
  },
  {
    slug: "flashattention-io-aware-exact-attention-simplified",
    title: "FlashAttention & FlashAttention-2 — IO-Aware GPU Memory Acceleration Explained",
    originalAuthors: "Tri Dao, Daniel Y. Fu, Stefano Ermon, Atri Rudra, Christopher Ré (Stanford)",
    originalVenue: "NeurIPS 2022 / ICLR 2024",
    year: "2022",
    category: "Hardware Acceleration",
    tags: ["FlashAttention", "GPU Acceleration", "CUDA", "Efficiency", "Memory Optimization"],
    readTime: "8 min read",
    plainEnglishSummary:
      "A breakthrough in GPU algorithm design that makes Transformer self-attention 2x-4x faster and memory-efficient by computing attention in SRAM tiles and avoiding slow GPU HBM memory read/writes.",
    eli12:
      "Imagine doing a giant math calculation where your desk (fast SRAM memory) is small, but your storage closet (slow GPU memory) is far away. Standard attention kept running back and forth to the closet for every step. FlashAttention computes the math in small puzzle pieces right on the desk, finishing 3x faster without needing extra paper.",
    coreProblem:
      "Standard self-attention computes an $N \\times N$ attention matrix and writes it to High Bandwidth Memory (HBM). For long contexts (like 32k or 128k tokens), GPU memory bandwidth bottlenecks execution speed and runs out of VRAM due to $O(N^2)$ memory footprint.",
    theBreakthrough:
      "Tri Dao et al. recognized that GPU compute (FLOPs) is much faster than memory transfers (IO). By fusing operations, tiling inputs into fast on-chip SRAM, and using online softmax normalization, FlashAttention computes exact attention with zero memory overhead.",
    howItWorksSimply:
      "1. Tiling: The Q, K, and V matrices are split into small blocks that fit entirely inside fast SRAM.\n2. Online Softmax: Softmax statistics (max and sum of exponentials) are updated incrementally without storing the full $N \\times N$ score matrix.\n3. Recomputation in Backward Pass: During backpropagation, attention weights are quickly recomputed on-the-fly rather than read from slow VRAM.",
    whyItMattersToday:
      "FlashAttention enabled modern 128k+ context windows in LLaMA-3, Mistral, and Claude, and is integrated natively into PyTorch 2.0 (`scaled_dot_product_attention`) and HuggingFace Transformers.",
    originalPaperUrl: "https://arxiv.org/abs/2205.14135",
  },
  {
    slug: "mixture-of-experts-sparse-activation-simplified",
    title: "Mixture of Experts (MoE) — Scaling Model Capacity with Sparse Routing",
    originalAuthors: "Noam Shazeer, Azalia Mirhoseini, Krzysztof Maziarz, Andy Davis, Quoc Le, Geoffrey Hinton, Jeff Dean",
    originalVenue: "ICLR 2017",
    year: "2017",
    category: "Sparse Architectures",
    tags: ["MoE", "Sparse Models", "Mixtral", "GPT-4", "Efficiency"],
    readTime: "7 min read",
    plainEnglishSummary:
      "How sparse Mixture-of-Experts (MoE) architectures allow AI models to contain hundreds of billions of parameters while only activating a tiny subset per token, delivering flagship intelligence at fraction of the compute cost.",
    eli12:
      "Instead of having one giant brain where all neurons fire for every single word, an MoE model has a committee of specialized experts (e.g. math expert, code expert, grammar expert). A smart dispatcher routes each word to only the top 2 best experts, keeping response times ultra-fast while holding immense total knowledge.",
    coreProblem:
      "In dense neural networks, every parameter in every layer is activated for every single input token. Scaling models to trillions of parameters becomes prohibitively slow and computationally expensive during both training and inference.",
    theBreakthrough:
      "Replacing standard feed-forward layers with a bank of parallel 'expert' sub-networks controlled by a parametric gating router that dynamically selects only the Top-K (e.g., Top-2 out of 8) experts per token.",
    howItWorksSimply:
      "1. Gating Network: A lightweight linear router computes softmax routing probabilities over all available expert networks.\n2. Top-K Sparsity: Only the top 2 experts with highest affinity scores are evaluated; the remaining 6+ experts remain completely idle.\n3. Weighted Output: The outputs of the activated experts are linearly combined by their gating weights and passed to the next layer.",
    whyItMattersToday:
      "Mixture-of-Experts powers flagship foundation models including GPT-4 (widely reported to be an 8x220B MoE), Mixtral 8x7B / 8x22B, and DeepSeek-V2/V3, allowing massive reasoning capacity at the inference speed of much smaller models.",
    originalPaperUrl: "https://arxiv.org/abs/1701.06538",
  }
];
