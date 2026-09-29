"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  BookOpen,
  Search,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Layers,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { blogPosts, BlogPost } from "@/content/blog-data";
import { simplifiedResearchPapers, SimplifiedPaper } from "@/content/simplified-research-data";
import { formatDate } from "@/lib/utils";

export default function EditorialAndResearchHubPage() {
  const [activeTab, setActiveTab] = useState<"blog" | "simplified-research">("blog");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const blogCategories = ["All", "AI Engineering", "LLM Architecture", "Edge Systems", "Startups & IP"];
  const researchCategories = ["All", "Transformers & Attention", "Alignment & RLHF", "Hardware Acceleration", "Sparse Architectures"];

  const filteredBlogPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const filteredSimplifiedPapers = simplifiedResearchPapers.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.plainEnglishSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.originalAuthors.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat =
      selectedCategory === "All" || paper.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 max-w-6xl mx-auto min-h-screen">
      {/* Page Header */}
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500">
          <Sparkles className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
          <span>Editorial Hub & Research Deconstructions</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
          Writing & <span className="font-serif-accent font-normal text-neutral-600 dark:text-neutral-400">Simplified Research</span>
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed font-normal">
          Explore technical essays on production AI systems alongside plain-English breakdowns of landmark deep learning foundation papers.
        </p>
      </div>

      {/* Main Section Switcher Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full glass-panel border border-neutral-200 dark:border-neutral-800 w-fit mb-8">
        <button
          type="button"
          onClick={() => {
            setActiveTab("blog");
            setSelectedCategory("All");
          }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
            activeTab === "blog"
              ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
              : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Weekly Tech Blog ({blogPosts.length})</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveTab("simplified-research");
            setSelectedCategory("All");
          }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
            activeTab === "simplified-research"
              ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
              : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Research Simplified ({simplifiedResearchPapers.length})</span>
        </button>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-4 mb-10">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              activeTab === "blog"
                ? "Search articles by topic, RAG, routing, or patents..."
                : "Search landmark papers (Transformers, FlashAttention, DPO, MoE)..."
            }
            className="w-full pl-11 pr-4 py-3.5 rounded-full glass-panel bg-white/70 dark:bg-neutral-900/70 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {(activeTab === "blog" ? blogCategories : researchCategories).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                  : "glass-pill text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tab 1: Weekly Tech Blog Grid */}
      {activeTab === "blog" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredBlogPosts.map((post) => (
            <GlassCard
              key={post.slug}
              tilt={true}
              spotlight={true}
              className="flex flex-col justify-between p-6 sm:p-8 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-neutral-400">
                  <span className="px-2.5 py-0.5 rounded-full glass-pill text-[10px] text-neutral-700 dark:text-neutral-300">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3 font-normal">
                  {post.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">
                  {formatDate(post.date)}
                </span>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      )}

      {/* Tab 2: Research Simplified (Landmark Papers Deconstructions) */}
      {activeTab === "simplified-research" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredSimplifiedPapers.map((paper) => (
            <GlassCard
              key={paper.slug}
              tilt={true}
              spotlight={true}
              className="flex flex-col justify-between p-6 sm:p-8 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-neutral-400">
                  <span className="px-2.5 py-0.5 rounded-full glass-pill text-[10px] text-neutral-700 dark:text-neutral-300">
                    {paper.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {paper.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                  {paper.title}
                </h3>

                <div className="mt-1 text-xs font-mono text-neutral-500">
                  {paper.originalAuthors} • <span className="italic">{paper.originalVenue}</span>
                </div>

                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  {paper.plainEnglishSummary}
                </p>

                {/* ELI12 Preview Callout */}
                <div className="mt-4 p-3 rounded-xl bg-neutral-100/70 dark:bg-neutral-900/70 border border-neutral-200/60 dark:border-neutral-800/60">
                  <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-0.5">
                    ELI12 Takeaway:
                  </span>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300 line-clamp-2">
                    {paper.eli12}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between">
                <a
                  href={paper.originalPaperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-neutral-500 hover:text-black dark:hover:text-white"
                >
                  <span>Original Paper</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <Link
                  href={`/research-simplified/${paper.slug}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:scale-105 transition-transform"
                >
                  <span>Full Deconstruction</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}
