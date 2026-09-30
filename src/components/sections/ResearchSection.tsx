"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  Calendar,
  Quote,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  FileText,
  ArrowRight,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { GlassCard } from "@/components/ui/GlassCard";
import { TextReveal } from "@/components/ui/TextReveal";
import { CiteModal } from "@/components/research/CiteModal";
import { ExplainLike12Toggle } from "@/components/research/ExplainLike12Toggle";
import {
  PublicationBadge,
  getResearchLinkState,
} from "@/components/research/PublicationStatus";
import { researchPapers } from "@/content/research-data";
import { formatDate } from "@/lib/utils";

export function ResearchSection() {
  const [activePaperIndex, setActivePaperIndex] = useState<number>(0);
  const [isEli12, setIsEli12] = useState<boolean>(false);
  const [citeModalOpen, setCiteModalOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"showcase" | "list">("showcase");

  const activePaper = researchPapers[activePaperIndex] || researchPapers[0];
  const activeLinkState = getResearchLinkState(activePaper);

  const handleNext = () => {
    setActivePaperIndex((prev) => (prev + 1) % researchPapers.length);
  };

  const handlePrev = () => {
    setActivePaperIndex((prev) => (prev - 1 + researchPapers.length) % researchPapers.length);
  };

  return (
    <section id="research" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
            <span>Academic Contributions</span>
          </div>
          <TextReveal italicWord="Research">
            Research Publications & Preprints
          </TextReveal>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode("showcase")}
            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
              viewMode === "showcase"
                ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                : "glass-pill text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
            }`}
          >
            Interactive Focus
          </button>
          <button
            type="button"
            onClick={() => setViewMode("list")}
            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
              viewMode === "list"
                ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                : "glass-pill text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
            }`}
          >
            All Papers List
          </button>
        </div>
      </div>

      {viewMode === "showcase" ? (
        <div className="space-y-6">
          {/* Quick Paper Selector Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {researchPapers.map((paper, idx) => {
              const isSelected = idx === activePaperIndex;

              return (
                <button
                  key={paper.slug}
                  type="button"
                  onClick={() => {
                    setActivePaperIndex(idx);
                    setIsEli12(false);
                  }}
                  className={`p-3 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? "bg-white dark:bg-neutral-900 border-neutral-500 dark:border-neutral-500 shadow-md scale-[1.01]"
                      : "glass-pill border-neutral-200/60 dark:border-neutral-800/60 text-neutral-600 dark:text-neutral-400 hover:bg-white/80 dark:hover:bg-neutral-900/80"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase truncate">
                      {paper.category}
                    </span>
                    <PublicationBadge status={paper.publicationStatus} />
                  </div>
                  <div className="text-xs font-bold text-neutral-950 dark:text-neutral-50 line-clamp-1">
                    {paper.shortTitle || paper.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Paper Pane */}
          <AnimatePresence mode="wait">
            {activePaper && (
              <motion.div
                key={activePaper.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <GlassCard className="p-7 sm:p-10 flex flex-col justify-between">
                  <div>
                    {/* Top Action Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <ExplainLike12Toggle isEli12={isEli12} onToggle={setIsEli12} />
                        <PublicationBadge status={activePaper.publicationStatus} />
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {/* Only clickable when URL exists */}
                        {activeLinkState.hasPaperUrl ? (
                          <a
                            href={activePaper.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:scale-105 transition-transform"
                          >
                            <span>Paper</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-xs font-mono text-neutral-500 dark:text-neutral-400 select-none">
                            <Clock className="w-3 h-3 text-neutral-400" />
                            <span>{activeLinkState.pendingText}</span>
                          </span>
                        )}

                        {activeLinkState.hasCodeUrl && (
                          <a
                            href={activePaper.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full glass-pill text-neutral-700 dark:text-neutral-300 hover:scale-105 transition-transform"
                            title="Source code"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() => setCiteModalOpen(true)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:scale-105 transition-transform"
                        >
                          <Quote className="w-3.5 h-3.5" />
                          <span>Cite</span>
                        </button>

                        <Link
                          href={`/research/${activePaper.slug}`}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-medium hover:scale-105 transition-transform shadow-xs"
                        >
                          <span>Breakdown</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                    {/* Paper Title & Metadata */}
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 mb-2">
                      {activePaper.title}
                    </h3>

                    <div className="text-xs font-mono text-neutral-500 mb-5">
                      {activePaper.authors.join(", ")} • <span className="italic">{activePaper.venue}</span>
                    </div>

                    {/* Content Toggle: ELI12 vs TL;DR & Details */}
                    {isEli12 ? (
                      <div className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900/90 border border-neutral-300/60 dark:border-neutral-700/60 space-y-2">
                        <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 font-semibold">
                          <Sparkles className="w-3.5 h-3.5 text-neutral-900 dark:text-neutral-100" />
                          <span>Plain-Language Intuition (ELI12)</span>
                        </div>
                        <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed">
                          {activePaper.eli12}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="p-5 rounded-2xl bg-neutral-100/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/60">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                            Summary & Core Contribution
                          </div>
                          <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed">
                            {activePaper.tldr}
                          </p>
                        </div>

                        <div className="space-y-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                          <strong className="text-neutral-900 dark:text-neutral-100">Key Results:</strong>{" "}
                          {activePaper.keyResults.split("\n")[0]}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Navigation Footer */}
                  <div className="mt-8 pt-5 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400">
                      Paper {activePaperIndex + 1} of {researchPapers.length}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="p-2.5 rounded-full glass-pill hover:scale-105 transition-transform"
                        aria-label="Previous paper"
                      >
                        <ChevronLeft className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="p-2.5 rounded-full glass-pill hover:scale-105 transition-transform"
                        aria-label="Next paper"
                      >
                        <ChevronRight className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
                      </button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        /* List Mode for fast scanning */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchPapers.map((paper, idx) => {
            const linkState = getResearchLinkState(paper);

            return (
              <GlassCard
                key={paper.slug}
                tilt={true}
                spotlight={true}
                className="p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-neutral-400 gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full glass-pill text-[10px] text-neutral-700 dark:text-neutral-300">
                        {paper.category}
                      </span>
                      <PublicationBadge status={paper.publicationStatus} />
                    </div>
                    <span>{paper.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-neutral-950 dark:text-neutral-50 mb-1.5">
                    {paper.title}
                  </h3>

                  <div className="text-xs font-mono text-neutral-500 mb-3">
                    {paper.venue}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
                    {paper.plainSummary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-400">
                    {linkState.hasPaperUrl ? formatDate(paper.date) : linkState.pendingText}
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setActivePaperIndex(idx);
                        setViewMode("showcase");
                      }}
                      className="hover:text-black dark:hover:text-white underline font-semibold"
                    >
                      Focus
                    </button>
                    <Link
                      href={`/research/${paper.slug}`}
                      className="inline-flex items-center gap-1 text-neutral-900 dark:text-neutral-100 font-semibold hover:underline"
                    >
                      <span>Breakdown</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      )}

      {/* Cite Modal */}
      <CiteModal
        paper={activePaper}
        isOpen={citeModalOpen}
        onClose={() => setCiteModalOpen(false)}
      />
    </section>
  );
}
