"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Radio,
  Leaf,
  Sparkles,
  Check,
  ChevronLeft,
  ChevronRight,
  Layers,
  Award,
  Activity,
  Cpu,
  Eye,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { TextReveal } from "@/components/ui/TextReveal";
import { patentsAndRecognition, PatentRecognitionItem } from "@/content/experience-data";

const domainIcons: Record<string, any> = {
  "IoT & Mobility": Radio,
  "AgriTech & Bio-IoT": Leaf,
  "Healthcare AI": Activity,
  "Telecom & Networks": Cpu,
  "Civic AI": Award,
};

export function PatentsSection() {
  const [selectedDomain, setSelectedDomain] = useState<string>("All");
  const [activePatentIndex, setActivePatentIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"deck" | "grid">("deck");

  const domains = [
    "All",
    "IoT & Mobility",
    "AgriTech & Bio-IoT",
    "Healthcare AI",
    "Telecom & Networks",
    "Civic AI",
  ];

  const filteredItems = patentsAndRecognition.filter(
    (item) => selectedDomain === "All" || item.domain === selectedDomain
  );

  const currentItem = filteredItems[activePatentIndex] || filteredItems[0];
  const CurrentIcon = domainIcons[currentItem?.domain] || Sparkles;

  const handleNext = () => {
    setActivePatentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setActivePatentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="patents" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
            <span>Intellectual Property Portfolio</span>
          </div>
          <TextReveal italicWord="Innovations">
            7 Patents Filed & Deep Tech Innovations
          </TextReveal>
        </div>

        {/* View mode toggle (Interactive Deck vs Compact Grid) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode("deck")}
            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
              viewMode === "deck"
                ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                : "glass-pill text-neutral-600 dark:text-neutral-400"
            }`}
          >
            Interactive Deck
          </button>
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
              viewMode === "grid"
                ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                : "glass-pill text-neutral-600 dark:text-neutral-400"
            }`}
          >
            Compact Grid
          </button>
        </div>
      </div>

      {/* Domain Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {domains.map((domain) => (
          <button
            key={domain}
            type="button"
            onClick={() => {
              setSelectedDomain(domain);
              setActivePatentIndex(0);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              selectedDomain === domain
                ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                : "glass-pill text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
            }`}
          >
            {domain}
          </button>
        ))}
      </div>

      {viewMode === "deck" ? (
        /* Interactive Deck Mode: Showcase patent with quick selector tabs */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Quick Patent Index List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 max-h-[480px] overflow-y-auto pr-1">
            {filteredItems.map((item, idx) => {
              const isSelected = idx === activePatentIndex;
              const Icon = domainIcons[item.domain] || Sparkles;

              return (
                <div
                  key={item.id}
                  onClick={() => setActivePatentIndex(idx)}
                  className={`p-3.5 rounded-2xl cursor-pointer transition-all border ${
                    isSelected
                      ? "bg-white dark:bg-neutral-900 border-neutral-400 dark:border-neutral-600 shadow-md scale-[1.01]"
                      : "glass-panel border-neutral-200/50 dark:border-neutral-800/50 text-neutral-600 dark:text-neutral-400 hover:bg-white/80 dark:hover:bg-neutral-900/80"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`p-1.5 rounded-xl shrink-0 ${
                          isSelected
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : "bg-neutral-200/60 dark:bg-neutral-800"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="truncate">
                        <div className="text-sm font-bold text-neutral-950 dark:text-neutral-50 truncate">
                          {item.title}
                        </div>
                        <div className="text-[11px] font-mono text-neutral-500 truncate">
                          {item.domain}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded glass-pill shrink-0">
                      {item.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Active Patent Card (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {currentItem && (
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <GlassCard className="p-7 sm:p-9 min-h-[480px] flex flex-col justify-between">
                    <div>
                      {/* Header row */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-xl bg-black text-white dark:bg-white dark:text-black">
                            <CurrentIcon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                            {currentItem.domain}
                          </span>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 font-semibold">
                          {currentItem.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 mb-3">
                        {currentItem.title}
                      </h3>

                      <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                        {currentItem.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-6 space-y-2.5">
                        <div className="text-xs font-mono uppercase text-neutral-400">
                          Key Technical Claims & Features
                        </div>
                        {currentItem.highlights.map((h, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                          >
                            <Check className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer Nav Controls */}
                    <div className="mt-8 pt-5 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between text-xs font-mono">
                      <span className="text-neutral-400">
                        Patent {activePatentIndex + 1} of {filteredItems.length}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="p-2 rounded-full glass-pill hover:scale-105 transition-transform"
                          aria-label="Previous patent"
                        >
                          <ChevronLeft className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="p-2 rounded-full glass-pill hover:scale-105 transition-transform"
                          aria-label="Next patent"
                        >
                          <ChevronRight className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                        </button>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        /* Compact Grid View for fast scanning */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const Icon = domainIcons[item.domain] || Sparkles;

            return (
              <GlassCard
                key={item.id}
                tilt={true}
                spotlight={true}
                className="p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono glass-pill text-neutral-600 dark:text-neutral-400">
                      {item.domain}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-neutral-950 dark:text-neutral-50 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-200/60 dark:border-neutral-800/60 text-[11px] font-mono text-neutral-400">
                  Indian Patent Office
                </div>
              </GlassCard>
            );
          })}
        </div>
      )}
    </section>
  );
}
