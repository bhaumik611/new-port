"use client";

import React from "react";
import Link from "next/link";
import { FileText, ArrowRight, Clock, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";
import { blogPosts } from "@/content/blog-data";
import { formatDate } from "@/lib/utils";

export function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
            <span>Weekly Dispatches</span>
          </div>
          <TextReveal italicWord="Emerging">
            Emerging Tech & Systems Engineering
          </TextReveal>
        </div>

        <MagneticButton href="/blog" variant="glass" size="md">
          <span>Read the Blog</span>
          <ArrowRight className="w-4 h-4" />
        </MagneticButton>
      </div>

      {/* Grid of Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {latestPosts.map((post) => (
          <GlassCard
            key={post.slug}
            tilt={true}
            spotlight={true}
            className="flex flex-col justify-between p-6 sm:p-7 group"
          >
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-neutral-400">
                <span className="px-2.5 py-0.5 rounded-full glass-pill text-[10px] text-neutral-700 dark:text-neutral-300">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-lg font-bold tracking-tight text-neutral-950 dark:text-neutral-50 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3 font-normal">
                {post.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400">
                {formatDate(post.date)}
              </span>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:underline"
              >
                <span>Read Post</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
