"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Sparkles, Layers, Code } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";
import { projectsData, Project } from "@/content/projects-data";

export function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "AI/ML Systems", "Web & Cloud", "NLP & LLMs", "Computer Vision"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
            <span>Featured Engineering</span>
          </div>
          <TextReveal italicWord="Craft">
            Selected Projects & Systems Craft
          </TextReveal>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                filter === cat
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                  : "glass-pill text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <GlassCard
            key={project.slug}
            tilt={true}
            spotlight={true}
            className="flex flex-col justify-between p-6 sm:p-8 group"
          >
            <div>
              {/* Top row: Category & Metrics */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono glass-pill text-neutral-600 dark:text-neutral-400">
                  {project.category}
                </span>
                {project.metrics && (
                  <span className="text-xs font-mono font-medium text-neutral-500">
                    {project.metrics}
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                {project.description}
              </p>

              {/* Highlights List */}
              <div className="mt-4 space-y-1.5">
                {project.highlights.slice(0, 2).map((item, hIdx) => (
                  <div
                    key={hIdx}
                    className="flex items-start gap-2 text-xs text-neutral-500 leading-snug"
                  >
                    <span className="w-1 h-1 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom row: Tech tags and action buttons */}
            <div className="mt-6 pt-5 border-t border-neutral-200/60 dark:border-neutral-800/60 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-1">
                {project.githubUrl && (
                  <MagneticButton
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="glass"
                    size="sm"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </MagneticButton>
                )}

                {project.liveUrl && project.liveUrl !== project.githubUrl && (
                  <MagneticButton
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </MagneticButton>
                )}
              </div>
            </div>
          </GlassCard>
        ))}

        {/* Dynamic / Live GitHub Profile Banner Card */}
        <GlassCard
          tilt={true}
          spotlight={true}
          className="md:col-span-2 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-dashed border-neutral-300/80 dark:border-neutral-700/80"
        >
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <GithubIcon className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Open Source Ecosystem
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              Explore More Repositories on GitHub
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Active contributor to benchmark suites (including EleutherAI Indic benchmarks), research replication codebases, and experimental AI toolings.
            </p>
          </div>

          <div className="shrink-0">
            <MagneticButton
              href="https://github.com/bhaumik611"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Visit @bhaumik611</span>
            </MagneticButton>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
