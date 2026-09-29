"use client";

import React from "react";
import { Info, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  type?: "info" | "warning" | "success" | "idea";
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const icons = {
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    idea: Lightbulb,
  };

  const Icon = icons[type];

  return (
    <div className="my-6 rounded-2xl glass-panel p-5 hairline-border bg-neutral-100/70 dark:bg-neutral-900/70">
      <div className="flex items-start gap-3.5">
        <div className="p-1.5 rounded-xl bg-black/5 dark:bg-white/10 text-neutral-800 dark:text-neutral-200 shrink-0 mt-0.5">
          <Icon className="w-4 h-4" />
        </div>
        <div className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed min-w-0">
          {title && (
            <h5 className="font-semibold text-neutral-900 dark:text-neutral-100">
              {title}
            </h5>
          )}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
