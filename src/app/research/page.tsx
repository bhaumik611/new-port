"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, BookOpen, Clock, Calendar, ArrowRight, Sparkles, Filter } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  PublicationBadge,
  getResearchLinkState,
} from "@/components/research/PublicationStatus";
import { researchPapers } from "@/content/research-data";
import { formatDate } from "@/lib/utils";

export default function ResearchIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");

  // Collect all unique tags
  const allTags = ["All", ...Array.from(new Set(researchPapers.flatMap((p) => p.tags)))];

  const filteredPapers = researchPapers.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.plainSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag =
      selectedTag === "All" || paper.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 max-w-6xl mx-auto min-h-screen">
      {/* Header */}
      <div className="space-y-3 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500">
          <BookOpen className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
          <span>Research Simplified Hub</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
          Research <span className="font-serif-accent font-normal text-neutral-600 dark:text-neutral-400">Simplified</span>
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
          Peer-reviewed papers, workshop manuscripts, and AI architectures translated into plain, intuitive English with interactive ELI12 toggles, citations, and verified results.
        </p>
      </div>

      {/* Search Bar & Tag Filter */}
      <div className="space-y-4 mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search papers by keyword, domain (EEG, Renal CT, Cervical, LLM Routing), or methodology..."
            className="w-full pl-11 pr-4 py-3.5 rounded-full glass-panel bg-white/70 dark:bg-neutral-900/70 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
          />
        </div>

        {/* Tags filter list */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-mono text-neutral-400 flex items-center gap-1 shrink-0">
            <Filter className="w-3 h-3" />
            Filter:
          </span>
          {allTags.slice(0, 10).map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedTag === tag
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                  : "glass-pill text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Papers Grid */}
      {filteredPapers.length === 0 ? (
        <div className="py-20 text-center glass-panel rounded-3xl p-8 space-y-3">
          <BookOpen className="w-8 h-8 text-neutral-400 mx-auto" />
          <h3 className="text-lg font-bold">No matching research papers found</h3>
          <p className="text-sm text-neutral-500">
            Try adjusting your search query or removing active tag filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredPapers.map((paper) => {
            const linkState = getResearchLinkState(paper);

            return (
              <GlassCard
                key={paper.slug}
                tilt={true}
                spotlight={true}
                className="flex flex-col justify-between p-6 sm:p-8 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono glass-pill text-neutral-700 dark:text-neutral-300">
                        {paper.category}
                      </span>
                      <PublicationBadge status={paper.publicationStatus} />
                    </div>
                    <span className="flex items-center gap-1 text-xs font-mono text-neutral-400 shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                      {paper.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                    {paper.title}
                  </h2>

                  <div className="mt-2 text-xs font-mono text-neutral-400">
                    {paper.authors.join(", ")} • <span className="italic">{paper.venue}</span>
                  </div>

                  <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                    {paper.plainSummary}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {paper.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">
                    {linkState.hasPaperUrl
                      ? (paper.date.length === 4 ? paper.date : formatDate(paper.date))
                      : linkState.pendingText}
                  </span>

                  <Link
                    href={`/research/${paper.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass-pill text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:scale-105 transition-transform"
                  >
                    <span>Read Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>
      )}
    </div>
  );
}
