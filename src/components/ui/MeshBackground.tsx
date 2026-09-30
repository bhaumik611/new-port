"use client";

import React from "react";

export function MeshBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Hardware-accelerated ambient gradients */}
      <div
        className="mesh-glow-1 absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[60px] bg-gradient-to-br from-neutral-200/40 via-neutral-300/20 to-transparent dark:from-neutral-800/20 dark:via-neutral-900/10 dark:to-transparent transform-gpu will-change-transform"
      />
      <div
        className="mesh-glow-2 absolute top-[40%] -right-[15%] w-[55vw] h-[55vw] rounded-full blur-[60px] bg-gradient-to-bl from-neutral-300/30 via-neutral-200/15 to-transparent dark:from-neutral-700/15 dark:via-neutral-850/10 dark:to-transparent transform-gpu will-change-transform"
      />
      <div
        className="mesh-glow-1 absolute -bottom-[15%] left-[20%] w-[50vw] h-[50vw] rounded-full blur-[60px] bg-gradient-to-tr from-neutral-300/25 via-neutral-100/15 to-transparent dark:from-neutral-800/15 dark:via-neutral-900/10 dark:to-transparent transform-gpu will-change-transform"
      />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />
    </div>
  );
}
