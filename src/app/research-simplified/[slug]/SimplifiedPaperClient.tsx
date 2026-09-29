"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  ExternalLink,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { simplifiedResearchPapers, SimplifiedPaper } from "@/content/simplified-research-data";
import { ExplainLike12Toggle } from "@/components/research/ExplainLike12Toggle";
import { GlassCard } from "@/components/ui/GlassCard";

export default function SimplifiedPaperClient({ slug }: { slug: string }) {
  const paper = simplifiedResearchPapers.find((p) => p.slug === slug);
  const [isEli12, setIsEli12] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  if (!paper) {
    notFound();
  }

  const currentIndex = simplifiedResearchPapers.findIndex((p) => p.slug === slug);
  const prevPaper = currentIndex > 0 ? simplifiedResearchPapers[currentIndex - 1] : null;
  const nextPaper =
    currentIndex < simplifiedResearchPapers.length - 1 ? simplifiedResearchPapers[currentIndex + 1] : null;

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    }
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 max-w-5xl mx-auto min-h-screen">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Writing & Research Hub</span>
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-6 pb-8 border-b border-neutral-200/60 dark:border-neutral-800/60">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono glass-pill text-neutral-700 dark:text-neutral-300">
            {paper.category}
          </span>

          <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
            <span>Year: {paper.year}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {paper.readTime}
            </span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 leading-[1.15]">
          {paper.title}
        </h1>

        <div className="text-xs sm:text-sm font-mono text-neutral-500 space-y-1">
          <div>
            <strong className="text-neutral-800 dark:text-neutral-200">Original Authors:</strong>{" "}
            {paper.originalAuthors}
          </div>
          <div>
            <strong className="text-neutral-800 dark:text-neutral-200">Published At:</strong>{" "}
            {paper.originalVenue}
          </div>
        </div>

        {/* Action controls */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
          <ExplainLike12Toggle isEli12={isEli12} onToggle={setIsEli12} />

          <div className="flex items-center gap-2">
            <a
              href={paper.originalPaperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:scale-105 transition-all"
            >
              <span>Read Original on arXiv</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={handleShare}
              className="p-2 rounded-full glass-pill text-neutral-600 dark:text-neutral-300 hover:scale-105 transition-all"
              title="Share breakdown"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
            {shareCopied && (
              <span className="text-[11px] font-mono text-emerald-500">Copied!</span>
            )}
          </div>
        </div>
      </header>

      {/* Main Breakdown Sections */}
      <div className="py-10 space-y-8 max-w-4xl mx-auto">
        {isEli12 ? (
          <div className="p-6 rounded-3xl glass-panel bg-neutral-100/90 dark:bg-neutral-900/90 border border-neutral-300/70 dark:border-neutral-700/70 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 font-semibold">
              <Sparkles className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
              <span>Explain Like I&apos;m 12 Mode Active</span>
            </div>
            <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed">
              {paper.eli12}
            </p>
          </div>
        ) : (
          <>
            {/* Core Problem */}
            <GlassCard className="p-6 sm:p-8 space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                01 // The Core Problem
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {paper.coreProblem}
              </p>
            </GlassCard>

            {/* The Breakthrough */}
            <GlassCard className="p-6 sm:p-8 space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                02 // The Technical Breakthrough
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {paper.theBreakthrough}
              </p>
            </GlassCard>

            {/* How It Works */}
            <GlassCard className="p-6 sm:p-8 space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                03 // How It Works in Plain English
              </h2>
              <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line font-mono text-xs sm:text-sm">
                {paper.howItWorksSimply}
              </div>
            </GlassCard>

            {/* Why It Matters Today */}
            <GlassCard className="p-6 sm:p-8 space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                04 // Why It Matters Today
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {paper.whyItMattersToday}
              </p>
            </GlassCard>
          </>
        )}

        {/* Prev / Next navigation */}
        <div className="mt-12 pt-8 border-t border-neutral-200/60 dark:border-neutral-800/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevPaper ? (
            <Link
              href={`/research-simplified/${prevPaper.slug}`}
              className="p-5 rounded-2xl glass-panel hover:scale-[1.01] transition-all space-y-1 text-left"
            >
              <div className="text-[11px] font-mono text-neutral-400 uppercase">
                ← Previous Breakdown
              </div>
              <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100 line-clamp-1">
                {prevPaper.title}
              </div>
            </Link>
          ) : <div />}

          {nextPaper && (
            <Link
              href={`/research-simplified/${nextPaper.slug}`}
              className="p-5 rounded-2xl glass-panel hover:scale-[1.01] transition-all space-y-1 text-right"
            >
              <div className="text-[11px] font-mono text-neutral-400 uppercase">
                Next Breakdown →
              </div>
              <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100 line-clamp-1">
                {nextPaper.title}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
