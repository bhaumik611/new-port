"use client";

import React from "react";

interface MathProps {
  formula: string;
  block?: boolean;
}

export function Math({ formula, block = true }: MathProps) {
  if (block) {
    return (
      <div className="my-6 overflow-x-auto p-4 rounded-2xl glass-panel text-center font-mono text-sm tracking-wide text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800">
        <code>{formula}</code>
      </div>
    );
  }

  return (
    <code className="px-1.5 py-0.5 rounded font-mono text-xs bg-neutral-200/60 dark:bg-neutral-850 text-neutral-800 dark:text-neutral-200">
      {formula}
    </code>
  );
}
