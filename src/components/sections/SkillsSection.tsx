"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Globe, Database, Wrench, ShieldCheck } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { TextReveal } from "@/components/ui/TextReveal";
import { skillCategories } from "@/content/skills-data";

const categoryIcons = [
  Code2,
  Brain,
  Globe,
  Database,
  Wrench,
  ShieldCheck,
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-14 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
          <span>Technical Toolkit</span>
        </div>
        <TextReveal italicWord="Architecture">
          Skills & Technical Architecture
        </TextReveal>
      </div>

      {/* Grid of Grouped Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => {
          const Icon = categoryIcons[idx % categoryIcons.length];
          const isSelected = activeCategory === idx;

          return (
            <GlassCard
              key={cat.title}
              tilt={true}
              spotlight={true}
              onClick={() => setActiveCategory(isSelected ? null : idx)}
              className={`p-6 transition-all duration-300 ${
                isSelected
                  ? "border-neutral-400 dark:border-neutral-500"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-black text-white dark:bg-white dark:text-black">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  {cat.title}
                </h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium glass-pill text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:scale-105 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
