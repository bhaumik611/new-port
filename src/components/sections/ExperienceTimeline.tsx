"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronDown, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { TextReveal } from "@/components/ui/TextReveal";
import { experiences } from "@/content/experience-data";

export function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>("ihub-gujarat");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-14 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
          <span>Professional Trajectory</span>
        </div>
        <TextReveal italicWord="Experience">
          Experience & Research Internships
        </TextReveal>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l border-neutral-300/60 dark:border-neutral-800/80 ml-4 sm:ml-8 space-y-6 sm:space-y-8">
        {experiences.map((exp, index) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div key={exp.id} className="relative pl-6 sm:pl-10">
              {/* Timeline node icon */}
              <div className="absolute -left-3.5 top-5 w-7 h-7 rounded-full glass-pill flex items-center justify-center text-xs text-neutral-800 dark:text-neutral-200 shadow-md">
                <div className="w-2.5 h-2.5 rounded-full bg-black dark:bg-white" />
              </div>

              {/* Glass Card */}
              <GlassCard
                tilt={false}
                spotlight={true}
                onClick={() => toggleExpand(exp.id)}
                className="transition-all duration-300 p-6 sm:p-7 hover:border-neutral-400/50 dark:hover:border-neutral-600/50"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-neutral-50">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono glass-pill text-neutral-600 dark:text-neutral-400">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mt-0.5">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 shrink-0">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-1 rounded-full glass-pill"
                    >
                      <ChevronDown className="w-4 h-4 text-neutral-400" />
                    </motion.div>
                  </div>
                </div>

                {/* Short Summary */}
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Skills tags preview */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Expandable Bullet Points */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-5 border-t border-neutral-200/60 dark:border-neutral-800/60 space-y-3">
                        <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                          Key Responsibilities & Deliverables
                        </div>
                        {exp.bullets.map((bullet, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}

                        <div className="pt-2 flex items-center gap-1.5 text-xs text-neutral-500">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}
