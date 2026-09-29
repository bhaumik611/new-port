import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    blog: collection({
      label: "Weekly Blog",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description", multiline: true }),
        date: fields.date({ label: "Published Date", defaultValue: { kind: "today" } }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "AI / ML", value: "AI" },
            { label: "Networks / 6G", value: "Networks/6G" },
            { label: "Cybersecurity", value: "Security" },
            { label: "Startups & IP", value: "Startups" },
            { label: "Research", value: "Research" },
            { label: "Tools & Systems", value: "Tools" },
          ],
          defaultValue: "AI",
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value || "Tag",
        }),
        readTime: fields.text({ label: "Reading Time (e.g. 5 min read)", defaultValue: "5 min read" }),
        coverImage: fields.image({
          label: "Cover Image",
          directory: "public/content/blog",
          publicPath: "/content/blog/",
        }),
        featured: fields.checkbox({ label: "Featured Post", defaultValue: false }),
        content: fields.mdx({
          label: "Content",
          options: {
            image: {
              directory: "public/content/blog",
              publicPath: "/content/blog/",
            },
          },
        }),
      },
    }),
    research: collection({
      label: "Research Papers",
      slugField: "title",
      path: "src/content/research/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        shortTitle: fields.text({ label: "Short Title / Identifier" }),
        plainSummary: fields.text({ label: "Plain English Summary", multiline: true }),
        authors: fields.text({ label: "Authors (comma separated)" }),
        venue: fields.text({ label: "Venue / Status / Journal" }),
        date: fields.date({ label: "Date", defaultValue: { kind: "today" } }),
        readTime: fields.text({ label: "Read Time", defaultValue: "6 min" }),
        category: fields.text({ label: "Domain Category (e.g. Healthcare AI, LLM Optimization)" }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value || "Tag",
        }),
        coverImage: fields.image({
          label: "Cover Image",
          directory: "public/content/research",
          publicPath: "/content/research/",
        }),
        tldr: fields.text({ label: "30-Second TL;DR", multiline: true }),
        eli12: fields.text({ label: "Explain It Like I'm 12 Summary", multiline: true }),
        problem: fields.text({ label: "The Problem", multiline: true }),
        idea: fields.text({ label: "The Idea", multiline: true }),
        howItWorks: fields.text({ label: "How It Works (Simplified)", multiline: true }),
        keyResults: fields.text({ label: "Key Results & Impact", multiline: true }),
        whyItMatters: fields.text({ label: "Why It Matters", multiline: true }),
        limitations: fields.text({ label: "Limitations & Future Directions", multiline: true }),
        paperUrl: fields.url({ label: "Original Paper URL" }),
        doi: fields.text({ label: "DOI (e.g. 10.1109/...)" }),
        pdfUrl: fields.text({ label: "PDF Download URL or Path" }),
        codeUrl: fields.url({ label: "Code Repository URL" }),
        bibtex: fields.text({ label: "BibTeX Entry", multiline: true }),
        apa: fields.text({ label: "APA Citation", multiline: true }),
        mla: fields.text({ label: "MLA Citation", multiline: true }),
        ieee: fields.text({ label: "IEEE Citation", multiline: true }),
        content: fields.mdx({
          label: "Detailed Paper Notes / Article",
          options: {
            image: {
              directory: "public/content/research",
              publicPath: "/content/research/",
            },
          },
        }),
      },
    }),
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/*",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        tagline: fields.text({ label: "One-liner Tagline" }),
        description: fields.text({ label: "Full Description", multiline: true }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value || "Tag",
        }),
        featured: fields.checkbox({ label: "Featured Project", defaultValue: true }),
        githubUrl: fields.url({ label: "GitHub URL" }),
        liveUrl: fields.url({ label: "Live Demo URL" }),
        stars: fields.text({ label: "Stars / Metrics (Optional)" }),
        order: fields.integer({ label: "Display Order", defaultValue: 0 }),
      },
    }),
  },
});
