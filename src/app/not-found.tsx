"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-32">
      <GlassCard className="p-8 sm:p-12 text-center max-w-lg mx-auto space-y-6">
        <div className="w-14 h-14 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center mx-auto text-neutral-800 dark:text-neutral-200">
          <Compass className="w-7 h-7 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Error 404 // Coordinate Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
            Lost in Parameter Space
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            The page or asset you are seeking has either drifted into a different latent dimension or was relocated.
          </p>
        </div>

        <div className="pt-2 flex justify-center">
          <MagneticButton href="/" variant="primary" size="md">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Safe Coordinates</span>
          </MagneticButton>
        </div>
      </GlassCard>
    </div>
  );
}
