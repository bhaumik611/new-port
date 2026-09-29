"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface MermaidProps {
  chart: string;
  caption?: string;
}

export function Mermaid({ chart, caption }: MermaidProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(chart);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <figure className="my-8">
      <div className="relative rounded-2xl glass-panel p-6 border border-neutral-200/80 dark:border-neutral-800">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-400">
          <span>Architecture Flow Diagram</span>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2 py-1 rounded-full glass-pill hover:text-white"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied" : "Copy Code"}</span>
          </button>
        </div>

        {/* Clean preformatted representation */}
        <pre className="font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 overflow-x-auto whitespace-pre leading-relaxed">
          {chart}
        </pre>
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-neutral-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

interface CiteProps {
  id: string;
  label?: string;
}

export function Cite({ id, label }: CiteProps) {
  return (
    <a
      href={`#citation-${id}`}
      className="inline-flex items-center px-1.5 py-0.2 mx-0.5 rounded text-[11px] font-mono font-medium glass-pill text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:scale-105 transition-all"
    >
      [{label || id}]
    </a>
  );
}
