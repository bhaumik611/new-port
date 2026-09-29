# Bhaumik Patel — Award-Level Personal Portfolio & Research Hub

> A personal portfolio and research publication hub engineered for **Bhaumik Patel** (AI/ML Engineer, Telecom & 6G Systems Researcher, and Founder). Built to **Awwwards / Apple-tier** aesthetic standards with a strictly monochrome design system, fluid physics, and Git-based visual CMS.

---

## ✦ Key Architectural Features

- **Strictly Monochrome Design System**:
  - **Dark Mode**: Pure black (`#000000`) base, off-white text, hairline borders (`rgba(255, 255, 255, 0.1)`), and glass panels (`rgba(20, 20, 22, 0.65)` with `backdrop-filter: blur(28px) saturate(180%)`).
  - **Light Mode**: Off-white (`#f5f5f7`) base, near-black typography (`#111111`), hairline borders (`rgba(0, 0, 0, 0.08)`), and glass panels.
  - **View Transitions API**: Smooth circular-reveal theme toggle with keyboard shortcut (`D`).
- **Signature Preloader**:
  - Full-screen "BHAUMIK" display typography that fills with liquid from 0% to 100% via a double sine wave SVG mask.
  - Synced tabular numeral counter, smooth curtain exit, `sessionStorage` single-session persistence, and `prefers-reduced-motion` compliance.
- **Micro-Interactions & Physics**:
  - Custom trailing spring cursor (disabled on touch devices).
  - Magnetic attraction buttons (`<MagneticButton>`).
  - Cursor-following spotlight highlights and 3D hover tilt on cards (`<GlassCard>`).
  - Smooth inertia scrolling via **Lenis**.
  - Omnipresent Command Palette (`⌘K` / `Ctrl+K`) for rapid page and paper discovery.
- **Content Hubs & CMS**:
  - **Research Simplified (`/research` & `/research/[slug]`)**: Plain-language breakdowns with interactive **"Explain Like I'm 12"** toggle, multi-format citation modal (BibTeX, APA, MLA, IEEE with 1-click copy), scroll-spy ToC, and links to DOI/PDF/Code.
  - **Weekly Tech Blog (`/blog` & `/blog/[slug]`)**: Emerging tech publication with category filters, reading progress bar, syntax-highlighted code blocks, and RSS feed (`/rss.xml`).
  - **Visual CMS (`/keystatic`)**: Git-based visual editor powered by Keystatic for drag-and-drop media, live editing, and content management.
  - **Printable Resume (`/resume`)**: Clean, formatted CV with dedicated print stylesheet and strictly **zero CGPA / grade marks**.

---

## ✦ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js (App Router) + React 19 + TypeScript |
| **Styling** | Tailwind CSS (v4) + Custom CSS Variables + Apple Glassmorphism |
| **Animations** | Framer Motion + Lenis Smooth Scroll |
| **CMS** | Keystatic (`@keystatic/core`, `@keystatic/next`) at `/keystatic` |
| **Theme** | `next-themes` + View Transitions API Circular Reveal |
| **SEO & Feeds** | Dynamic Open Graph Metadata, JSON-LD Schema (Person), `/rss.xml`, `/sitemap.xml`, `robots.txt` |
| **Deployment** | Vercel (Edge & Serverless Prerendering) |

---

## ✦ Getting Started Locally

### 1. Prerequisites
- Node.js `v18.17+` or `v20+` / `v22+` / `v25+`
- npm, pnpm, or bun

### 2. Installation
```bash
# Clone or open the project folder
cd new-port

# Install dependencies
npm install
```

### 3. Running the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

- **Main Website**: `http://localhost:3000`
- **Research Hub**: `http://localhost:3000/research`
- **Weekly Blog**: `http://localhost:3000/blog`
- **Printable Resume**: `http://localhost:3000/resume`
- **Keystatic Visual CMS**: `http://localhost:3000/keystatic`
- **RSS Feed**: `http://localhost:3000/rss.xml`

### 4. Production Build Verification
```bash
npm run build
npm run start
```

---

## ✦ Publishing a New Research Paper or Blog Post in 2 Minutes

### Method 1: Using Keystatic Visual CMS
1. Navigate to `http://localhost:3000/keystatic` (or `https://your-domain.com/keystatic` in production).
2. Choose **Weekly Blog** or **Research Papers**.
3. Fill in the fields: Title, Summary, ELI12 explanation, category, tags, and rich content.
4. Drag and drop images/GIFs directly into the visual editor.
5. Click **Save** — Keystatic commits directly to Git.

### Method 2: Adding Structured Data Files
- **Research Papers**: Add an entry to `src/content/research-data.ts`.
- **Blog Posts**: Add an entry to `src/content/blog-data.ts`.
- **Projects**: Add an entry to `src/content/projects-data.ts`.

---

## ✦ Rich Media MDX Components

You can use the following rich media components anywhere in your articles and paper notes:

```tsx
// 1. Zoomable Image with Lightbox & Caption
<Figure src="/content/blog/sample.png" alt="Architecture" caption="High-level system diagram" />

// 2. Animated GIF or Video Alternative
<Gif src="/content/blog/demo.gif" alt="Pipeline demo" caption="Real-time execution" />
<LoopVideo src="/content/blog/demo.mp4" poster="/content/blog/poster.png" caption="Edge inference" />

// 3. Image Comparison Slider (Before / After)
<Compare beforeSrc="/content/before.png" afterSrc="/content/after.png" beforeLabel="Baseline" afterLabel="Our Model" />

// 4. Image Gallery / Carousel
<Gallery images={[{ src: "/img1.png", alt: "Setup" }, { src: "/img2.png", alt: "Results" }]} layout="grid" columns={2} />

// 5. Monochrome Glass Callout
<Callout type="info" title="System Requirement">Runs on edge ARM SoCs in sub-15ms.</Callout>
<Callout type="warning" title="Limitation">Requires baseline calibration for unseen montages.</Callout>

// 6. LaTeX Math & Mermaid Architecture Diagrams
<Math formula="\\text{Score}_{RRF}(d) = \\sum_{m \\in M} \\frac{1}{k + r_m(d)}" block={true} />
<Mermaid chart="graph TD; A[Input] --> B[FAISS]; A --> C[BM25]; B --> D[RRF Fusion]; C --> D;" />

// 7. Media & Video Embeds
<Embed type="youtube" id="dQw4w9WgXcQ" caption="Demo recording" />
```

---

## ✦ Deploying to Vercel

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete award-level portfolio & research hub"
   git branch -M main
   git remote add origin https://github.com/bhaumik611/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the repository. Next.js will be detected automatically.
4. (Optional) In **Settings > Domains**, attach your custom domain (e.g., `bhaumikpatel.dev`).
5. Click **Deploy**.

---

## ✦ Quality & Compliance Checklist

- [x] **Zero CGPA / Grades**: Thoroughly checked across all pages, bento tiles, and `/resume`.
- [x] **Strictly Monochrome**: Pure black (`#000000`), off-white (`#f5f5f7`), hairline glass borders, no accent colors.
- [x] **View Transitions Theme Toggle**: Smooth circular reveal on toggle + `D` key shortcut.
- [x] **Liquid Preloader**: Double sine wave animation with 0-100% counter, `sessionStorage` check, and reduced-motion detection.
- [x] **Accurate Projects & Research**: TrustRAG, RAG-eval, Bulls & Bears website, SQL-UI suite, Prompt-structuring, Face Detection, ACE-SeizNet, Kidney AI Review, Cervical Cancer XAI, and Adaptive LLM Routing.
- [x] **Patents**: TrackNControl, MicroSight, FarmaSpray, Tatvam AI.
- [x] **Privacy**: No phone number displayed publicly; email copy button + direct mailto.
- [x] **Lighthouse Ready**: Static Site Generation (`generateStaticParams`) across all 25 routes, optimized fonts, and minimal payload.
