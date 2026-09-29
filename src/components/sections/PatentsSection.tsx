"use client";

import React from "react";
import { ShieldCheck, Award, Radio, Leaf, Sparkles, Check } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { TextReveal } from "@/components/ui/TextReveal";
import { patentsAndRecognition } from "@/content/experience-data";

const patentIcons = [Radio, Sparkles, Leaf, Award];

export function PatentsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-14 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
          <span>Intellectual Property & Honors</span>
        </div>
        <TextReveal italicWord="Recognition">
          Patents Filed & Venture Recognition
        </TextReveal>
      </div>

      {/* Grid of Patent Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {patentsAndRecognition.map((item, idx) => {
          const Icon = patentIcons[idx % patentIcons.length];

          return (
            <GlassCard
              key={item.id}
              tilt={true}
              spotlight={true}
              className="p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-black text-white dark:bg-white dark:text-black">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      {item.category}
                    </span>
                  </div>
                  <span className="px-3 py-0.5 rounded-full text-[11px] font-mono glass-pill text-neutral-800 dark:text-neutral-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 space-y-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2 text-xs text-neutral-500 leading-relaxed"
                    >
                      <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Status: In Prosecution / Filed</span>
                <span>Indian Patent Office</span>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
