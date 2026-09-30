"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  BookOpen,
  ArrowLeft,
  Share2,
  Quote,
  ExternalLink,
  Download,
  Calendar,
  Clock,
  Sparkles,
  FileText,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { researchPapers } from "@/content/research-data";
import { CiteModal } from "@/components/research/CiteModal";
import { ExplainLike12Toggle } from "@/components/research/ExplainLike12Toggle";
import {
  PublicationBadge,
  getResearchLinkState,
} from "@/components/research/PublicationStatus";
import { formatDate } from "@/lib/utils";

export default function ResearchPaperClient({ slug }: { slug: string }) {
  const paper = researchPapers.find((p) => p.slug === slug);
  const [isEli12, setIsEli12] = useState(false);
  const [citeModalOpen, setCiteModalOpen] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  if (!paper) {
    notFound();
  }

  const linkState = getResearchLinkState(paper);

  const currentIndex = researchPapers.findIndex((p) => p.slug === slug);
  const prevPaper = currentIndex > 0 ? researchPapers[currentIndex - 1] : null;
  const nextPaper =
    currentIndex < researchPapers.length - 1 ? researchPapers[currentIndex + 1] : null;

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    }
  };

  const sections = [
    { id: "tldr", title: "30-Second TL;DR" },
    { id: "problem", title: "The Problem" },
    { id: "idea", title: "The Core Idea" },
    { id: "how-it-works", title: "How It Works" },
    { id: "results", title: "Key Results" },
    { id: "why-it-matters", title: "Why It Matters" },
    { id: "limitations", title: "Limitations & Future" },
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 max-w-6xl mx-auto min-h-screen">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/research"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all research papers</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="space-y-6 pb-8 border-b border-neutral-200/60 dark:border-neutral-800/60">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono glass-pill text-neutral-700 dark:text-neutral-300">
              {paper.category}
            </span>
            <PublicationBadge status={paper.publicationStatus} />
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {paper.date.length === 4 ? paper.date : formatDate(paper.date)}
            </span>
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

        <div className="text-sm font-mono text-neutral-500 space-y-1">
          <div>
            <strong className="text-neutral-800 dark:text-neutral-200 font-semibold">Authors:</strong>{" "}
            {paper.authors.join(", ")}
          </div>
          <div>
            <strong className="text-neutral-800 dark:text-neutral-200 font-semibold">Venue:</strong>{" "}
            {paper.venue} {linkState.hasDoi && `(DOI: ${paper.doi})`}
          </div>
        </div>

        {/* Action Bar: ELI12 Switch + Cite + Links */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
          <ExplainLike12Toggle isEli12={isEli12} onToggle={setIsEli12} />

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setCiteModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:scale-105 transition-all"
            >
              <Quote className="w-3.5 h-3.5" />
              <span>Cite Paper</span>
            </button>

            {linkState.hasPaperUrl ? (
              <a
                href={paper.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:scale-105 transition-all"
              >
                <span>Read Original</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-neutral-500 dark:text-neutral-400 select-none">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                <span>{linkState.pendingText}</span>
              </span>
            )}

            {linkState.hasPdfUrl && (
              <a
                href={paper.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:scale-105 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF</span>
              </a>
            )}

            {linkState.hasCodeUrl && (
              <a
                href={paper.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:scale-105 transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}

            <button
              type="button"
              onClick={handleShare}
              className="p-2 rounded-full glass-pill text-neutral-600 dark:text-neutral-300 hover:scale-105 transition-all"
              title="Share link"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
            {shareCopied && (
              <span className="text-[11px] font-mono text-emerald-500 animate-fade-in">
                Link copied!
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Layout: Content + ToC Sidebar */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-10">
          {isEli12 && (
            <div className="p-5 rounded-3xl glass-panel bg-neutral-100/90 dark:bg-neutral-900/90 border border-neutral-300/60 dark:border-neutral-700/60 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
                <Sparkles className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
                <span className="font-semibold text-neutral-900 dark:text-white">
                  Explain Like I&apos;m 12 Mode Active
                </span>
              </div>
              <p className="text-base text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {paper.eli12}
              </p>
            </div>
          )}

          {/* Section 1: TL;DR */}
          <section id="tldr" className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              01 // 30-Second TL;DR
            </h2>
            <div className="p-6 rounded-3xl glass-panel bg-neutral-50/80 dark:bg-neutral-950/80 border-l-4 border-l-black dark:border-l-white">
              <p className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 leading-relaxed">
                {paper.tldr}
              </p>
            </div>
          </section>

          {/* Section 2: The Problem */}
          <section id="problem" className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              02 // The Problem
            </h2>
            <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line space-y-3">
              {paper.problem}
            </div>
          </section>

          {/* Section 3: The Idea */}
          <section id="idea" className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              03 // The Core Idea
            </h2>
            <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line">
              {paper.idea}
            </div>
          </section>

          {/* Section 4: How It Works */}
          <section id="how-it-works" className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              04 // How It Works (Step by Step)
            </h2>
            <div className="p-6 rounded-3xl glass-panel space-y-3">
              <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line font-mono text-xs sm:text-sm">
                {paper.howItWorks}
              </div>
            </div>
          </section>

          {/* Section 5: Key Results */}
          <section id="results" className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              05 // Key Results & Verified Benchmarks
            </h2>
            <div className="p-6 rounded-3xl glass-panel bg-neutral-100/50 dark:bg-neutral-900/50 space-y-3 text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed whitespace-pre-line">
              {paper.keyResults}
            </div>
          </section>

          {/* Section 6: Why It Matters */}
          <section id="why-it-matters" className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              06 // Why It Matters
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {paper.whyItMatters}
            </p>
          </section>

          {/* Section 7: Limitations */}
          <section id="limitations" className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              07 // Limitations & Future Directions
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {paper.limitations}
            </p>
          </section>

          {/* Prev / Next Paper Nav */}
          <div className="pt-12 mt-12 border-t border-neutral-200/60 dark:border-neutral-800/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPaper ? (
              <Link
                href={`/research/${prevPaper.slug}`}
                className="p-5 rounded-2xl glass-panel hover:scale-[1.01] transition-all space-y-1 text-left"
              >
                <div className="text-[11px] font-mono text-neutral-400 uppercase">
                  ← Previous Paper
                </div>
                <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100 line-clamp-1">
                  {prevPaper.shortTitle || prevPaper.title}
                </div>
              </Link>
            ) : <div />}

            {nextPaper && (
              <Link
                href={`/research/${nextPaper.slug}`}
                className="p-5 rounded-2xl glass-panel hover:scale-[1.01] transition-all space-y-1 text-right"
              >
                <div className="text-[11px] font-mono text-neutral-400 uppercase">
                  Next Paper →
                </div>
                <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100 line-clamp-1">
                  {nextPaper.shortTitle || nextPaper.title}
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Right Sticky Sidebar (4 cols) */}
        <aside className="hidden lg:block lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            <div className="p-6 rounded-3xl glass-panel space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Table of Contents
              </h4>
              <nav className="space-y-2 text-xs font-mono">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>
            </div>

            <div className="p-6 rounded-3xl glass-panel space-y-3 text-xs font-mono">
              <h4 className="uppercase tracking-wider text-neutral-400">
                Paper Artifacts
              </h4>
              <div className="space-y-2.5 text-neutral-700 dark:text-neutral-300">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">Status:</span>
                  <PublicationBadge status={paper.publicationStatus} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">Publication:</span>
                  <span className="text-right text-[11px] max-w-[170px] truncate" title={linkState.hasPaperUrl ? "Published / Open Access" : linkState.pendingText}>
                    {linkState.hasPaperUrl ? "Published Link Available" : linkState.pendingText}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">Code:</span>
                  <span>{linkState.hasCodeUrl ? "Open Source" : "Pending Release"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">DOI / ID:</span>
                  <span>{linkState.hasDoi ? paper.doi : "Pending"}</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <CiteModal
        paper={paper}
        isOpen={citeModalOpen}
        onClose={() => setCiteModalOpen(false)}
      />
    </div>
  );
}
