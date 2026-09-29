"use client";

import React from "react";
import { Sparkles, GraduationCap } from "lucide-react";

interface ExplainLike12ToggleProps {
  isEli12: boolean;
  onToggle: (val: boolean) => void;
}

export function ExplainLike12Toggle({ isEli12, onToggle }: ExplainLike12ToggleProps) {
  return (
    <div className="inline-flex items-center gap-1.5 p-1 rounded-full glass-pill border border-neutral-300/70 dark:border-neutral-700/70 bg-neutral-200/50 dark:bg-neutral-900/50">
      <button
        type="button"
        onClick={() => onToggle(false)}
        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
          !isEli12
            ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
            : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
        }`}
      >
        <GraduationCap className="w-3.5 h-3.5" />
        <span>Academic Paper</span>
      </button>

      <button
        type="button"
        onClick={() => onToggle(true)}
        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
          isEli12
            ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
            : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
        }`}
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Explain Like I&apos;m 12</span>
      </button>
    </div>
  );
}
