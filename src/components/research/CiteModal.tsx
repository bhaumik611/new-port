"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Quote } from "lucide-react";
export interface CiteablePaper {
  title: string;
  doi?: string;
  citations: {
    bibtex: string;
    apa: string;
    mla: string;
    ieee: string;
  };
}

interface CiteModalProps {
  paper: CiteablePaper;
  isOpen: boolean;
  onClose: () => void;
}

export function CiteModal({ paper, isOpen, onClose }: CiteModalProps) {
  const [activeTab, setActiveTab] = useState<"bibtex" | "apa" | "mla" | "ieee">("bibtex");
  const [copied, setCopied] = useState(false);

  const formats = {
    bibtex: {
      name: "BibTeX",
      content: paper.citations.bibtex,
    },
    apa: {
      name: "APA 7th",
      content: paper.citations.apa,
    },
    mla: {
      name: "MLA 9th",
      content: paper.citations.mla,
    },
    ieee: {
      name: "IEEE",
      content: paper.citations.ieee,
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formats[activeTab].content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl rounded-3xl glass-panel bg-white/95 dark:bg-neutral-950/95 border border-neutral-300 dark:border-neutral-800 p-6 sm:p-8 shadow-2xl z-10"
          >
            <div className="flex items-start justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                  <Quote className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    Cite This Research
                  </h3>
                  <p className="text-xs text-neutral-500 line-clamp-1 max-w-md">
                    {paper.title}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full glass-pill hover:scale-110 transition-transform"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Format Tabs */}
            <div className="flex items-center gap-2 mt-6">
              {(["bibtex", "apa", "mla", "ieee"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeTab === tab
                      ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                      : "glass-pill text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {formats[tab].name}
                </button>
              ))}
            </div>

            {/* Citation Content Box */}
            <div className="relative mt-4">
              <pre className="w-full p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 overflow-x-auto whitespace-pre-wrap max-h-60 leading-relaxed">
                {formats[activeTab].content}
              </pre>

              <button
                type="button"
                onClick={handleCopy}
                className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:scale-105 transition-all shadow"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 flex items-center justify-between text-xs text-neutral-500">
              <span>{paper.doi ? `DOI: ${paper.doi}` : "Publication Details: Pending"}</span>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full glass-pill text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
