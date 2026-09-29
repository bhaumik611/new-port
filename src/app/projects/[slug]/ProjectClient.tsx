"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projectsData } from "@/content/projects-data";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function ProjectClient({ slug }: { slug: string }) {
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 max-w-4xl mx-auto min-h-screen">
      <div className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all projects</span>
        </Link>
      </div>

      <header className="space-y-4 pb-8 border-b border-neutral-200/60 dark:border-neutral-800/60">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono glass-pill text-neutral-700 dark:text-neutral-300">
            {project.category}
          </span>
          {project.metrics && (
            <span className="text-xs font-mono text-neutral-500">
              • {project.metrics}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
          {project.tagline}
        </p>

        <div className="pt-4 flex items-center gap-3">
          {project.githubUrl && (
            <MagneticButton
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source on GitHub</span>
            </MagneticButton>
          )}

          {project.liveUrl && project.liveUrl !== project.githubUrl && (
            <MagneticButton
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="glass"
              size="md"
            >
              <span>Launch Live App</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          )}
        </div>
      </header>

      {/* Main Breakdown */}
      <div className="py-10 space-y-8">
        <GlassCard className="p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">
            System Overview
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {project.description}
          </p>
        </GlassCard>

        <GlassCard className="p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">
            Key Architectural Highlights
          </h2>
          <div className="space-y-2.5">
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">
            Tech Stack & Libraries
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-mono glass-pill text-neutral-700 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
