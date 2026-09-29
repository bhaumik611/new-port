"use client";

import React from "react";
import Link from "next/link";
import { Printer, Download, ArrowLeft, Mail, MapPin, Globe, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { experiences, patentsAndRecognition } from "@/content/experience-data";
import { researchPapers } from "@/content/research-data";
import { projectsData } from "@/content/projects-data";
import { skillCategories } from "@/content/skills-data";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 min-h-screen bg-neutral-100 dark:bg-black print:bg-white print:text-black print:p-0">
      {/* Non-printed Top Bar Actions */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:scale-105 transition-all shadow"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Resume Document Sheet */}
      <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 glass-panel bg-white/95 dark:bg-neutral-950/95 shadow-2xl print:shadow-none print:border-none print:p-0 print:bg-white print:text-black">
        {/* Header */}
        <header className="border-b border-neutral-200 dark:border-neutral-800 print:border-neutral-300 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 print:text-black">
                Bhaumik Patel
              </h1>
              <p className="text-sm font-mono text-neutral-600 dark:text-neutral-400 print:text-neutral-700 mt-1">
                AI/ML Engineer • Telecom & 6G Systems Researcher • Founder
              </p>
            </div>

            <div className="text-xs font-mono text-neutral-500 print:text-neutral-700 space-y-1 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3 h-3" />
                <span>Gujarat, India</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3 h-3" />
                <a href="mailto:patelbhaumik6115@gmail.com" className="hover:underline">
                  patelbhaumik6115@gmail.com
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <GithubIcon className="w-3 h-3" />
                <a href="https://github.com/bhaumik611" className="hover:underline">
                  github.com/bhaumik611
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Education Section (NO CGPA anywhere) */}
        <section className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 print:text-neutral-700 border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-3">
            Education
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
            <div>
              <span className="font-bold text-neutral-900 dark:text-white print:text-black">
                Pandit Deendayal Energy University (PDEU)
              </span>{" "}
              — <span className="text-neutral-700 dark:text-neutral-300 print:text-neutral-800">Bachelor of Technology in Computer Engineering</span>
            </div>
            <div className="text-xs font-mono text-neutral-500">2023 — 2027</div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 print:text-neutral-700 border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-3">
            Professional Experience & Research Internships
          </h2>
          <div className="space-y-5">
            {experiences.map((exp) => (
              <div key={exp.id} className="text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <div>
                    <strong className="text-neutral-900 dark:text-white print:text-black font-semibold">
                      {exp.role}
                    </strong>{" "}
                    — <span className="text-neutral-700 dark:text-neutral-300 print:text-neutral-800">{exp.organization}</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-neutral-600 dark:text-neutral-400 print:text-neutral-700 leading-relaxed text-xs">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Research Publications Section */}
        <section className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 print:text-neutral-700 border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-3">
            Research Publications & Preprints
          </h2>
          <div className="space-y-3">
            {researchPapers.map((paper, idx) => (
              <div key={paper.slug} className="text-xs sm:text-sm">
                <div className="font-bold text-neutral-900 dark:text-white print:text-black">
                  [{idx + 1}] {paper.title}
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400 print:text-neutral-700 font-mono">
                  {paper.authors.join(", ")} • {paper.venue} ({paper.date.slice(0, 4)})
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7 Patents & Key Innovations */}
        <section className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 print:text-neutral-700 border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-3">
            7 Patents Filed & Startup Honors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {patentsAndRecognition.map((item) => (
              <div key={item.id} className="text-xs p-2.5 rounded-xl border border-neutral-200/80 dark:border-neutral-800 print:border-neutral-300">
                <div>
                  <strong className="text-neutral-900 dark:text-white print:text-black">
                    {item.title}
                  </strong>{" "}
                  — <span className="font-mono text-neutral-500 text-[10px]">({item.badge})</span>
                </div>
                <p className="text-[11px] text-neutral-600 dark:text-neutral-400 print:text-neutral-700 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 print:text-neutral-700 border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-3">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {skillCategories.map((cat) => (
              <div key={cat.title}>
                <strong className="text-neutral-800 dark:text-neutral-200 print:text-black">
                  {cat.title}:
                </strong>{" "}
                <span className="text-neutral-600 dark:text-neutral-400 print:text-neutral-700">
                  {cat.skills.join(", ")}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
