"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, Clock, Calendar, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";
import { researchPapers } from "@/content/research-data";
import { formatDate } from "@/lib/utils";

export function ResearchPreview() {
  const featuredPapers = researchPapers.slice(0, 3);

  return (
    <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
            <span>Research Simplified</span>
          </div>
          <TextReveal italicWord="Clarity">
            Translating Complex AI Papers into Clarity
          </TextReveal>
        </div>

        <MagneticButton href="/research" variant="glass" size="md">
          <span>Explore All Papers</span>
          <ArrowRight className="w-4 h-4" />
        </MagneticButton>
      </div>

      {/* Grid of Paper Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredPapers.map((paper) => (
          <GlassCard
            key={paper.slug}
            tilt={true}
            spotlight={true}
            className="flex flex-col justify-between p-6 sm:p-7 group"
          >
            <div>
              {/* Category & Time */}
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-neutral-400">
                <span className="px-2.5 py-0.5 rounded-full glass-pill text-[10px] text-neutral-700 dark:text-neutral-300">
                  {paper.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {paper.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold tracking-tight text-neutral-950 dark:text-neutral-50 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors line-clamp-2">
                {paper.title}
              </h3>

              {/* Plain English Summary */}
              <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
                {paper.plainSummary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400">
                {formatDate(paper.date)}
              </span>

              <Link
                href={`/research/${paper.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:underline"
              >
                <span>Read Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
