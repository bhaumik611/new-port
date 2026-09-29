"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  italicWord?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function TextReveal({
  children,
  className,
  italicWord,
  delay = 0,
  as: Component = "h2",
}: TextRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const words = children.split(" ");

  return (
    <Component
      ref={ref as any}
      className={cn("flex flex-wrap items-baseline gap-x-[0.28em] gap-y-[0.1em]", className)}
    >
      {words.map((word, i) => {
        const isItalic = italicWord && word.toLowerCase().includes(italicWord.toLowerCase());

        return (
          <span key={i} className="inline-block overflow-hidden py-0.5">
            <motion.span
              initial={{ y: "115%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: "115%", opacity: 0 }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + i * 0.035,
              }}
              className={cn("inline-block", isItalic && "font-serif-accent font-normal text-neutral-600 dark:text-neutral-400")}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
}
