"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Search,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  Rss,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { blogPosts, BlogPost } from "@/content/blog-data";
import { formatDate } from "@/lib/utils";

export default function BlogIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [subEmail, setSubEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    "All",
    "AI",
    "Networks/6G",
    "Security",
    "Startups",
    "Research",
    "Tools",
  ];

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCat =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCat;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subEmail) {
      setSubscribed(true);
      setSubEmail("");
    }
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 max-w-6xl mx-auto min-h-screen">
      {/* Editorial Banner */}
      <div className="mb-10 p-4 sm:p-5 rounded-3xl glass-panel bg-neutral-100/70 dark:bg-neutral-900/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-2xl bg-black text-white dark:bg-white dark:text-black">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm">
            <span className="font-bold text-neutral-900 dark:text-neutral-100">
              Weekly Dispatches:
            </span>{" "}
            <span className="text-neutral-600 dark:text-neutral-400">
              New & emerging tech essays on AI, 6G telecom, and systems.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/rss.xml"
            target="_blank"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white"
          >
            <Rss className="w-3.5 h-3.5 text-neutral-500" />
            <span>RSS Feed</span>
          </Link>
        </div>
      </div>

      {/* Header */}
      <div className="space-y-3 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500">
          <FileText className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
          <span>The Engineering Journal</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
          Weekly <span className="font-serif-accent font-normal text-neutral-600 dark:text-neutral-400">Emerging Tech</span>
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
          Deep-dives into LLM fine-tuning, 6G low-latency protocols, patent formulation, and developer infrastructure.
        </p>
      </div>

      {/* Featured Post Hero (if available and no active search) */}
      {!searchQuery && selectedCategory === "All" && featuredPost && (
        <div className="mb-14">
          <GlassCard
            tilt={true}
            spotlight={true}
            className="p-8 sm:p-10 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-black text-white dark:bg-white dark:text-black">
                  Featured Dispatch
                </span>
                <span className="flex items-center gap-1 text-xs font-mono text-neutral-400">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                {featuredPost.title}
              </h2>

              <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
                {featuredPost.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full glass-pill text-neutral-600 dark:text-neutral-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400">
                {formatDate(featuredPost.date)}
              </span>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:scale-105 transition-transform"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Search & Category Filter */}
      <div className="space-y-4 mb-10">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by topic, keyword, or technology..."
            className="w-full pl-11 pr-4 py-3.5 rounded-full glass-panel bg-white/70 dark:bg-neutral-900/70 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
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

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPosts.map((post) => (
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

              <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
                {post.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {post.tags.slice(0, 3).map((tag) => (
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

      {/* Newsletter / RSS Box */}
      <div className="mt-20">
        <GlassCard className="p-8 sm:p-10 text-center max-w-2xl mx-auto space-y-4">
          <div className="w-10 h-10 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center mx-auto">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
            Subscribe to Weekly Tech Insights
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
            Get weekly updates on emerging AI models, 6G telecom protocols, and research breakdowns directly in your inbox or RSS reader.
          </p>

          {subscribed ? (
            <div className="pt-2 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-emerald-500">
              <CheckCircle2 className="w-4 h-4" />
              <span>You&apos;re subscribed! Thank you for following the journal.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={subEmail}
                onChange={(e) => setSubEmail(e.target.value)}
                placeholder="Enter your email..."
                className="w-full sm:flex-1 px-4 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 outline-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:scale-105 transition-transform"
              >
                Subscribe
              </button>
            </form>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
