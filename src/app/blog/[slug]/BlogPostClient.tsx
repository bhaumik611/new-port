"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Sparkles,
} from "lucide-react";
import { blogPosts, BlogPost } from "@/content/blog-data";
import { Callout } from "@/components/mdx/Callout";
import { formatDate } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/BrandLogo";

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 max-w-4xl mx-auto min-h-screen">
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

      {/* Article Header */}
      <header className="space-y-6 pb-8 border-b border-neutral-200/60 dark:border-neutral-800/60 max-w-[720px] mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono glass-pill text-neutral-700 dark:text-neutral-300">
            {post.category}
          </span>

          <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.date)}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 leading-[1.15]">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
          {post.description}
        </p>

        <div className="pt-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandLogo size={36} />
            <div className="text-xs">
              <div className="font-semibold text-neutral-900 dark:text-white">Bhaumik Patel</div>
              <div className="text-neutral-500">AI Engineer & Researcher</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="p-2 rounded-full glass-pill text-neutral-600 dark:text-neutral-300 hover:scale-105 transition-all"
              title="Share article"
            >
              <Share2 className="w-4 h-4" />
            </button>
            {copied && (
              <span className="text-[11px] font-mono text-emerald-500 animate-fade-in">
                Copied!
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-[720px] mx-auto py-10">
        <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-800 dark:text-neutral-200 text-base leading-relaxed space-y-6">
          <div className="whitespace-pre-line leading-relaxed font-normal text-sm sm:text-base space-y-4">
            {post.content}
          </div>

          <Callout type="idea" title="Key Takeaway">
            Production AI systems require a careful balance between latency, accuracy, and infrastructure costs. Building modular fallback pipelines ensures resilience at scale.
          </Callout>
        </div>

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full glass-pill text-neutral-600 dark:text-neutral-400"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-12 pt-8 border-t border-neutral-200/60 dark:border-neutral-800/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="p-5 rounded-2xl glass-panel hover:scale-[1.01] transition-all space-y-1 text-left"
            >
              <div className="text-[11px] font-mono text-neutral-400 uppercase">
                ← Previous Article
              </div>
              <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100 line-clamp-1">
                {prevPost.title}
              </div>
            </Link>
          ) : <div />}

          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="p-5 rounded-2xl glass-panel hover:scale-[1.01] transition-all space-y-1 text-right"
            >
              <div className="text-[11px] font-mono text-neutral-400 uppercase">
                Next Article →
              </div>
              <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100 line-clamp-1">
                {nextPost.title}
              </div>
            </Link>
          )}
        </div>
      </article>
    </div>
  );
}
