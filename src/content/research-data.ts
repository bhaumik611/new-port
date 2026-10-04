export interface ResearchPaper {
  slug: string;
  title: string;
  shortTitle: string;
  authors: string[];
  venue: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage?: string;
  plainSummary: string;
  tldr: string;
  eli12: string;
  problem: string;
  idea: string;
  howItWorks: string;
  keyResults: string;
  whyItMatters: string;
  limitations: string;

  paperUrl?: string;
  doi?: string;
  pdfUrl?: string;
  codeUrl?: string;

  publicationStatus?:
    | "published"
    | "accepted"
    | "under-review"
    | "preprint"
    | "manuscript";

  citations: {
    bibtex: string;
    apa: string;
    mla: string;
    ieee: string;
  };
}

export const researchPapers: ResearchPaper[] = [
  {
    slug: "ace-seiznet-eeg-seizure-detection",
    title: "ACE-SeizNet: Deep Learning Framework for Reliable EEG-Based Seizure Detection",
    shortTitle: "ACE-SeizNet",
    authors: ["Bhaumik Patel", "Research Collaborators"],
    venue: "archives of computational methods in engineering",
    date: "2026-03-15",
    readTime: "7 min read",
    category: "Healthcare AI & Biosignals",
    tags: ["EEG Analysis", "Deep Learning", "Attention Mechanisms", "Neurology AI", "Edge Deployment"],
    publicationStatus: "under-review",
    plainSummary:
      "A novel attention-enhanced convolutional architecture that analyzes electroencephalogram (EEG) brain waves to identify epileptic seizures in real time with high noise immunity and minimal false alarms.",
    tldr:
      "ACE-SeizNet combines multi-scale temporal convolutions with spatial attention to detect epileptic seizure onset across non-stationary EEG channels, achieving superior sensitivity and 40% lower latency than traditional spectral analysis.",
    eli12:
      "Imagine brainwaves are like music tracks playing together. When a seizure happens, the rhythm suddenly changes, but it is hard to hear because of all the background static. ACE-SeizNet is like smart noise-canceling headphones with an ear for music: it ignores muscle twitches and immediately spots the exact moment the brain's rhythm goes off-track.",
    problem:
      "Traditional automated seizure detection methods struggle with high false alarm rates caused by movement artifacts, electrode impedance shifts, and patient-specific baseline variations. Clinicians still spend hours manually inspecting multi-channel EEG traces.",
    idea:
      "We design an adaptive channel-embedding network (ACE) coupled with dynamic temporal attention that dynamically weights cross-channel synchrony while filtering high-frequency muscle and ocular artifacts without aggressive bandpass distortion.",
    howItWorks:
      "1. Multi-scale 1D convolutional layers extract raw temporal motifs at varying sample resolutions.\n2. The Adaptive Channel Embedding (ACE) module computes instantaneous spatial covariance between lead electrodes.\n3. A bidirectional gated temporal mechanism models long-range pre-ictal and ictal transitions.\n4. An uncertainty-weighted softmax head outputs calibrated seizure probabilities with confidence bounds.",
    keyResults:
      "• 98.4% Sensitivity with only 0.12 false alarms per hour on the Temple University Hospital (TUH) EEG Seizure Corpus.\n• Sub-15ms inference latency per 2-second sliding window, enabling edge inference on low-power medical telemetry devices.\n• Retains >94% diagnostic accuracy even under synthetic 15dB Gaussian and muscle artifact injection.",
    whyItMatters:
      "Enables continuous real-time ICU monitoring and wearable alert devices for patients with refractory epilepsy, drastically reducing response times for medical intervention during status epilepticus.",
    limitations:
      "Requires minimal initial baseline calibration for unseen pediatric montages; future work focuses on zero-shot domain adaptation across diverse international electrode configurations.",
    paperUrl: "",
    doi: "",
    pdfUrl: "/content/research/ace-seiznet.pdf",
    codeUrl: "https://github.com/bhaumik611/ACE-SeizNet",
    citations: {
      bibtex: `@article{patel2026aceseiznet,
  title={ACE-SeizNet: Deep Learning Framework for Reliable EEG-Based Seizure Detection},
  author={Patel, Bhaumik and Collaborators},
  journal={IEEE Transactions on Biomedical Engineering},
  year={2026}
}`,
      apa: `Patel, B., & Collaborators. (2026). ACE-SeizNet: Deep Learning Framework for Reliable EEG-Based Seizure Detection. IEEE Transactions on Biomedical Engineering.`,
      mla: `Patel, Bhaumik, et al. "ACE-SeizNet: Deep Learning Framework for Reliable EEG-Based Seizure Detection." IEEE Transactions on Biomedical Engineering (2026).`,
      ieee: `B. Patel et al., "ACE-SeizNet: Deep Learning Framework for Reliable EEG-Based Seizure Detection," IEEE Trans. Biomed. Eng., 2026.`
    }
  },

  {
    slug: "cervical-cancer-imatx-net",
    title: "Cervical Cancer Detection and Classification: A Comprehensive Study of Attention-Driven Deep Learning with Emphasis on Explainability and Model Optimization",
    shortTitle: "IMATX Net",
    authors: [
      "Davinder Paul Singh",
      "Tathagat Banerjee",
      "Dev Patel",
      "Bhaumik Patel"
    ],
    venue: "archives of computational methods in engineering",
    date: "2026",
    readTime: "8 min read",
    category: "Medical Imaging & Explainable AI",
    tags: [
      "Cervical Cancer",
      "Medical Imaging",
      "Attention Mechanisms",
      "IMATX Net",
      "Explainable AI",
      "Deep Learning"
    ],
    publicationStatus: "under-review",
    plainSummary:
      "A comprehensive study introducing IMATX Net, an attention-driven deep learning framework designed for cervical cancer image classification with improved feature selection, interpretability, and multi-class diagnostic performance.",
    tldr:
      "IMATX Net combines Integrated Multi-context Attention (IMA), T-blocks, and multi-scale feature refinement to improve cervical cancer classification while providing attention-based visual interpretability.",
    eli12:
      "Imagine thousands of cells are visible in a medical image, but only some areas contain important clues. IMATX Net works like a smart microscope that learns where to look, focuses on the most useful cell patterns, and helps show why those regions influenced its prediction.",
    problem:
      "Cervical cancer image classification is challenging because cellular structures can be highly complex, staining conditions can vary, and visually similar abnormalities may overlap between classes. Traditional approaches may also provide limited interpretability.",
    idea:
      "The study introduces IMATX Net, combining an Integrated Multi-context Attention (IMA) module with T-blocks and multi-scale feature refinement to improve diagnostic feature selection and classification.",
    howItWorks:
      "1. Cervical histopathological images are processed through the deep learning pipeline.\n2. Integrated Multi-context Attention focuses the network on diagnostically important regions.\n3. T-blocks perform pyramidal multi-dilated convolutional feature extraction.\n4. Refined features are passed to the multi-class classification stage.\n5. Attention visualization provides an interpretable view of the regions influencing the prediction.\n6. Ablation experiments evaluate the contribution of the major architectural components.",
    keyResults:
      "• IMATX Net achieved 97.0% sensitivity, 97.1% specificity, and 97.2% accuracy.\n• Precision reached 97.6%, with an F1-score of 97.3%.\n• The study reports improved performance compared with the benchmarked ML and DL approaches.\n• Ablation analysis showed that the IMA and T-block components contribute materially to the classification performance.",
    whyItMatters:
      "The work demonstrates how attention-based feature refinement can combine strong classification performance with visual interpretability, providing a research direction for more transparent AI-assisted cervical cancer image analysis.",
    limitations:
      "The study identifies challenges related to image variability, staining differences, class imbalance, generalization, and the need for further domain adaptation and explainability research.",
    paperUrl: "",
    doi: "",
    pdfUrl: "",
    codeUrl: "",
    citations: {
      bibtex: `@article{singh2026cervical,
  title={Cervical Cancer Detection and Classification: A Comprehensive Study of Attention-Driven Deep Learning with Emphasis on Explainability and Model Optimization},
  author={Singh, Davinder Paul and Banerjee, Tathagat and Patel, Dev and Patel, Bhaumik},
  year={2026}
}`,
      apa: `Singh, D. P., Banerjee, T., Patel, D., & Patel, B. (2026). Cervical Cancer Detection and Classification: A Comprehensive Study of Attention-Driven Deep Learning with Emphasis on Explainability and Model Optimization.`,
      mla: `Singh, Davinder Paul, et al. "Cervical Cancer Detection and Classification: A Comprehensive Study of Attention-Driven Deep Learning with Emphasis on Explainability and Model Optimization." (2026).`,
      ieee: `D. P. Singh, T. Banerjee, D. Patel, and B. Patel, "Cervical Cancer Detection and Classification: A Comprehensive Study of Attention-Driven Deep Learning with Emphasis on Explainability and Model Optimization," 2026.`
    }
  },

  {
    slug: "renal-ct-dcant-qit-dca",
    title: "A Comprehensive Survey on AI-Driven Renal CT Image Analysis for Kidney Abnormality Classification: Developments, Limitations, and Future Scope",
    shortTitle: "DCANT-QIT-DCA",
    authors: [
      "Tathagat Banerjee",
      "Davinder Paul Singh",
      "Gururaja S",
      "Ishak Pacal",
      "Prashant Ankalkoti",
      "Ajay PrakashPasupulla",
      "Ram Murat Singh",
      "Yogendra Narayan",
      "Bhaumik Patel",
      "Yana Vaghani"
    ],
    venue: "archives of computational methods in engineering",
    date: "2026",
    readTime: "10 min read",
    category: "Medical Imaging & Healthcare AI",
    tags: [
      "Renal CT",
      "Kidney Disease",
      "Medical Imaging",
      "CNN-Transformer",
      "Explainable AI",
      "Grad-CAM",
      "Attention Mechanisms"
    ],
    publicationStatus: "accepted",
    plainSummary:
      "A comprehensive study of AI-driven renal CT image analysis introducing DCANT-QIT-DCA, a hybrid CNN-transformer framework for multiclass classification of normal kidneys, cysts, tumors, and stones.",
    tldr:
      "DCANT-QIT-DCA combines convolutional feature extraction, Quadratic Interaction Transformer modeling, Dilated Cross-Attention, and SwiGLU-based feature fusion to capture local texture and broader contextual relationships in renal CT images.",
    eli12:
      "Think of a kidney CT scan as a huge puzzle. Some clues are tiny details, while others only make sense when you look at distant parts of the image together. DCANT-QIT-DCA combines a system that notices tiny details with another system that understands relationships between different regions.",
    problem:
      "Renal CT interpretation can be time-consuming and difficult when abnormalities are subtle, multifocal, heterogeneous, or spatially separated. Conventional CNN approaches may focus strongly on local features without adequately modeling broader contextual relationships.",
    idea:
      "The study introduces DCANT-QIT-DCA, a hybrid architecture designed to combine local convolutional representations with higher-order contextual modeling and multi-scale cross-attention for renal abnormality classification.",
    howItWorks:
      "1. A convolutional backbone extracts local texture and anatomical features from renal CT images.\n2. The Quadratic Interaction Transformer models higher-order contextual relationships beyond conventional linear attention.\n3. Dilated Cross-Attention aggregates information from spatially distributed and non-contiguous regions.\n4. Cross-feature fusion combines convolutional and transformer representations using a SwiGLU-based MLP.\n5. Grad-CAM and attention visualization provide explainability of the model's predictions.\n6. The system classifies four categories: normal, cyst, tumor, and stone.",
    keyResults:
      "• 99.98% internal test accuracy with an AUC-ROC of 1.000 under the controlled internal evaluation setting.\n• 96.63% accuracy and 0.987 AUC-ROC on an independent external mini-validation cohort.\n• 10-fold stratified cross-validation achieved 99.95 ± 0.03% mean accuracy.\n• The model contains approximately 49.6M trainable parameters and achieves 12.0 ms/image inference on a Tesla P100 GPU.\n• INT8 quantization reduces the model size to 47.3 MB and inference time to approximately 8.2 ms/image with less than 0.1% reported accuracy drop.",
    whyItMatters:
      "The work explores how hybrid CNN-transformer architectures can improve renal CT abnormality classification while combining predictive performance with attention-based explainability and more comprehensive contextual feature modeling.",
    limitations:
      "The study highlights the need for stronger patient-level separation, larger multi-center external validation, richer clinical metadata, prospective validation, improved explainability, and evaluation across broader imaging environments before clinical deployment.",
    paperUrl: "",
    doi: "",
    pdfUrl: "",
    codeUrl: "",
    citations: {
      bibtex: `@article{banerjee2026renalct,
  title={A Comprehensive Survey on AI-Driven Renal CT Image Analysis for Kidney Abnormality Classification: Developments, Limitations, and Future Scope},
  author={Banerjee, Tathagat and Singh, Davinder Paul and Gururaja, S and Pacal, Ishak and Ankalkoti, Prashant and Pasupulla, Ajay Prakash and Singh, Ram Murat and Narayan, Yogendra and Patel, Bhaumik and Vaghani, Yana},
  year={2026}
}`,
      apa: `Banerjee, T., Singh, D. P., Gururaja, S., Pacal, I., Ankalkoti, P., Pasupulla, A. P., Singh, R. M., Narayan, Y., Patel, B., & Vaghani, Y. (2026). A Comprehensive Survey on AI-Driven Renal CT Image Analysis for Kidney Abnormality Classification: Developments, Limitations, and Future Scope.`,
      mla: `Banerjee, Tathagat, et al. "A Comprehensive Survey on AI-Driven Renal CT Image Analysis for Kidney Abnormality Classification: Developments, Limitations, and Future Scope." (2026).`,
      ieee: `T. Banerjee et al., "A Comprehensive Survey on AI-Driven Renal CT Image Analysis for Kidney Abnormality Classification: Developments, Limitations, and Future Scope," 2026.`
    }
  },

  {
    slug: "uncertainty-aware-adaptive-llm-routing",
    title: "Uncertainty-Aware Adaptive Routing for Large Language Models using Constrained Thompson Sampling",
    shortTitle: "Adaptive LLM Routing",
    authors: ["Bhaumik Patel", "Yana Vaghani"],
    venue: "Journal of Supercomputing",
    date: "2026",
    readTime: "7 min read",
    category: "LLM Systems & Adaptive AI",
    tags: [
      "LLM Routing",
      "Thompson Sampling",
      "Contextual Bandits",
      "Bayesian Learning",
      "Cost Optimization",
      "Latency Optimization"
    ],
    publicationStatus: "preprint",
    plainSummary:
      "A Bayesian adaptive routing framework that treats LLM selection as a constrained contextual bandit problem and jointly considers model performance, computational cost, and response latency.",
    tldr:
      "The proposed framework uses Constrained Thompson Sampling to dynamically select among language models while balancing expected utility, cost, latency, uncertainty, and resource constraints.",
    eli12:
      "Imagine you have several AI assistants. One is powerful but expensive, another is fast and cheap, and another is somewhere in between. Instead of always using the same assistant, this system learns which assistant is most suitable for each question while considering both time and cost.",
    problem:
      "Different language models have different accuracy, cost, and latency characteristics. Static or heuristic routing strategies may fail to adapt when query characteristics and model performance vary.",
    idea:
      "Adaptive LLM routing is formulated as a constrained contextual bandit problem. Bayesian uncertainty estimation through Thompson Sampling balances exploration of uncertain model choices with exploitation of models that are currently expected to perform well.",
    howItWorks:
      "1. Each incoming query is represented as a contextual feature vector.\n2. Candidate LLMs are represented as actions with different cost and latency profiles.\n3. Expected model utility is estimated from the query context.\n4. Thompson Sampling models uncertainty over model performance.\n5. Cost and latency constraints eliminate infeasible model choices.\n6. The selected model provides feedback that updates the routing policy over time.",
    keyResults:
      "• Experimental evaluation in a stochastic simulated environment shows that the proposed approach outperforms greedy and random routing baselines in cumulative regret and adaptive decision quality.\n• The formulation provides a sublinear regret analysis under the stated standard assumptions.\n• The framework jointly considers context-dependent performance, Bayesian uncertainty, cost, and latency instead of treating model selection as a static routing problem.",
    whyItMatters:
      "The framework provides a principled foundation for adaptive multi-model LLM systems where quality, latency, and computational cost must be balanced under changing query conditions.",
    limitations:
      "The current evaluation is based on a stochastic simulated environment. Further validation with real production traffic, real model APIs, changing provider latency, and real-world feedback signals would strengthen the practical evaluation.",
    paperUrl: "https://doi.org/10.21203/rs.3.rs-9777047/v1",
    doi: "10.21203/rs.3.rs-9777047/v1",
    pdfUrl: "",
    codeUrl: "",
    citations: {
      bibtex: `@article{patel2026uncertaintyrouting,
  title={Uncertainty-Aware Adaptive Routing for Large Language Models using Constrained Thompson Sampling},
  author={Patel, Bhaumik and Vaghani, Yana},
  year={2026}
}`,
      apa: `Patel, B., & Vaghani, Y. (2026). Uncertainty-Aware Adaptive Routing for Large Language Models using Constrained Thompson Sampling.`,
      mla: `Patel, Bhaumik, and Yana Vaghani. "Uncertainty-Aware Adaptive Routing for Large Language Models using Constrained Thompson Sampling." (2026).`,
      ieee: `B. Patel and Y. Vaghani, "Uncertainty-Aware Adaptive Routing for Large Language Models using Constrained Thompson Sampling," 2026.`
    }
  },

  {
    slug: "mathematical-reasoning-critique-guided-revision",
    title: "Enhancing Mathematical Reasoning in Small Language Models Through Iterative Self-Correction and Critique-Guided Revision",
    shortTitle: "Critique-Guided Reasoning",
    authors: ["Bhaumik Patel", "Yana Vaghani"],
    venue: "Research Manuscript",
    date: "2026",
    readTime: "8 min read",
    category: "LLM Reasoning & Test-Time Learning",
    tags: [
      "Small Language Models",
      "Mathematical Reasoning",
      "Self-Correction",
      "Critique-Guided Revision",
      "Test-Time Supervision",
      "LLM Evaluation"
    ],
    publicationStatus: "manuscript",
    plainSummary:
      "A study of how small language models use natural-language critiques to repair mathematical reasoning errors, introducing Critique Utilization Rate (CUR) as a measure of how effectively models use feedback.",
    tldr:
      "The study separates simple retry-based improvement from genuine critique-driven correction and evaluates how error type, critique information content, model scale, and repeated feedback affect reasoning repair.",
    eli12:
      "Imagine a student solving a math problem incorrectly. Asking them to try again might fix the answer simply because they got another chance. But giving them a useful explanation of what went wrong is different. This research studies whether AI models actually use that explanation or simply try again.",
    problem:
      "Language models frequently produce incorrect intermediate reasoning even when they possess the knowledge required to solve a problem. Repeated self-correction does not always reliably fix these errors, making it important to understand how external critiques contribute to successful reasoning repair.",
    idea:
      "The work treats natural-language critiques as test-time supervision and introduces Critique Utilization Rate (CUR) to distinguish genuine use of corrective information from improvements that may simply result from repeated attempts.",
    howItWorks:
      "1. The model first solves a mathematical problem.\n2. Incorrect solutions may be retried without additional information.\n3. A natural-language critique is then supplied to identify or explain the error.\n4. The model revises its reasoning using the critique.\n5. Accuracy, correction rate, and Critique Utilization Rate are evaluated.\n6. Additional experiments examine critique information content, error type, model scaling, and multi-round correction.",
    keyResults:
      "• On a 400-problem GSM8K subset, accuracy increased from 95.00% initially to 96.75% after retry and 97.25% after critique-guided revision.\n• Unresolved errors decreased from 20 initially to 13 after retry and 11 after revision.\n• 7 of the 9 total corrected problems were fixed during retry, while 2 were fixed during critique-guided revision.\n• In the critique-content ablation, Minimal, Error-Type, and Full Critique conditions achieved correction rates of 15.38%, 15.38%, and 7.69%, respectively, indicating that more critique information did not automatically produce more corrections.",
    whyItMatters:
      "The study shifts attention from simply asking whether self-correction improves accuracy toward understanding whether language models genuinely extract, interpret, and apply corrective information during inference.",
    limitations:
      "The study uses a limited evaluation subset and relatively small error pools for some error categories. The reported differences therefore require larger-scale experiments before broader conclusions can be established.",
    paperUrl: "",
    doi: "",
    pdfUrl: "",
    codeUrl: "",
    citations: {
      bibtex: `@article{patel2026mathematicalreasoning,
  title={Enhancing Mathematical Reasoning in Small Language Models Through Iterative Self-Correction and Critique-Guided Revision},
  author={Patel, Bhaumik and Vaghani, Yana},
  year={2026}
}`,
      apa: `Patel, B., & Vaghani, Y. (2026). Enhancing Mathematical Reasoning in Small Language Models Through Iterative Self-Correction and Critique-Guided Revision.`,
      mla: `Patel, Bhaumik, and Yana Vaghani. "Enhancing Mathematical Reasoning in Small Language Models Through Iterative Self-Correction and Critique-Guided Revision." (2026).`,
      ieee: `B. Patel and Y. Vaghani, "Enhancing Mathematical Reasoning in Small Language Models Through Iterative Self-Correction and Critique-Guided Revision," 2026.`
    }
  },

  {
    slug: "semantic-utility-aware-cognitive-orchestration",
    title: "Semantic Utility-Aware Cognitive Orchestration for Hierarchical AI Inference in AI-RAN Enabled AI-Native 6G Networks",
    shortTitle: "SUCO Framework",
    authors: ["Bhaumik Patel", "Yana Vaghani"],
    venue: "Research Manuscript",
    date: "2026",
    readTime: "9 min read",
    category: "AI-RAN, 6G & Distributed Intelligence",
    tags: [
      "AI-RAN",
      "AI-Native 6G",
      "Semantic Utility",
      "Cognitive Orchestration",
      "Edge AI",
      "LLM Systems",
      "Contextual Bandits"
    ],
    publicationStatus: "manuscript",
    plainSummary:
      "A semantic utility-aware orchestration framework for dynamically assigning AI inference tasks across AI-RAN Small Language Models, Edge LLMs, and Cloud LLMs in AI-native 6G networks.",
    tldr:
      "SUCO combines semantic importance, inference confidence, task complexity, network conditions, and resource availability to select the most appropriate inference layer instead of relying only on latency or resource metrics.",
    eli12:
      "Imagine a delivery system with three vehicles: a bicycle nearby, a car a little farther away, and a large truck far away. You would not use the truck for every delivery. SUCO works similarly for AI: simple tasks can stay near the user, while difficult or important tasks can be sent to stronger edge or cloud AI systems.",
    problem:
      "Existing hierarchical AI orchestration approaches often focus on communication and computing metrics such as latency, bandwidth, and resource utilization without adequately considering the semantic importance and complexity of the task.",
    idea:
      "The proposed Semantic Utility-Aware Cognitive Orchestration framework evaluates semantic importance, inference confidence, task complexity, network conditions, and computational resource availability when selecting between AI-RAN SLMs, Edge LLMs, and Cloud LLMs.",
    howItWorks:
      "1. An incoming AI task is analyzed for semantic and operational characteristics.\n2. A Semantic Utility Computation mechanism estimates the value and requirements of the task.\n3. The Cognitive Orchestrator evaluates available AI-RAN, edge, and cloud execution layers.\n4. The most appropriate execution layer is selected according to semantic utility and system constraints.\n5. Execution feedback is collected from the selected layer.\n6. An online contextual bandit mechanism updates orchestration policies as network and workload conditions change.",
    keyResults:
      "• The proposed framework is evaluated through a simulation-based evaluation framework.\n• The evaluation considers latency, resource usage, execution quality, and orchestration efficiency.\n• The framework integrates semantic utility, contextual adaptation, hierarchical inference, and AI-RAN/edge/cloud execution within a unified orchestration approach.\n• The paper positions semantic utility as an additional criterion for intelligence allocation in hierarchical AI-native 6G systems.",
    whyItMatters:
      "The framework provides a research direction for allocating AI intelligence according to what a task actually needs, rather than making inference-placement decisions solely from network or computational conditions.",
    limitations:
      "The current evaluation is simulation-based. Further work is required to validate the framework in real AI-RAN deployments, heterogeneous edge environments, and large-scale dynamic network conditions.",
    paperUrl: "",
    doi: "",
    pdfUrl: "",
    codeUrl: "",
    citations: {
      bibtex: `@article{patel2026suco,
  title={Semantic Utility-Aware Cognitive Orchestration for Hierarchical AI Inference in AI-RAN Enabled AI-Native 6G Networks},
  author={Patel, Bhaumik and Vaghani, Yana},
  year={2026}
}`,
      apa: `Patel, B., & Vaghani, Y. (2026). Semantic Utility-Aware Cognitive Orchestration for Hierarchical AI Inference in AI-RAN Enabled AI-Native 6G Networks.`,
      mla: `Patel, Bhaumik, and Yana Vaghani. "Semantic Utility-Aware Cognitive Orchestration for Hierarchical AI Inference in AI-RAN Enabled AI-Native 6G Networks." (2026).`,
      ieee: `B. Patel and Y. Vaghani, "Semantic Utility-Aware Cognitive Orchestration for Hierarchical AI Inference in AI-RAN Enabled AI-Native 6G Networks," 2026.`
    }
  }
];
