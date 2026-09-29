"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-24 border-t border-neutral-200/60 dark:border-neutral-800/80 bg-neutral-100/50 dark:bg-neutral-950/50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-200/60 dark:border-neutral-800/60">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-sm">
                BP
              </div>
              <span className="text-lg font-bold tracking-tight text-neutral-950 dark:text-neutral-50">Bhaumik Patel</span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
              AI/ML Engineer, Researcher, and Founder. Exploring deep learning architectures, 6G communication systems, and patent engineering.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <MagneticButton
                href="https://github.com/bhaumik611"
                target="_blank"
                rel="noopener noreferrer"
                variant="glass"
                size="sm"
                className="w-9 h-9 p-0"
              >
                <GithubIcon className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton
                href="https://www.linkedin.com/in/bhaumik-patel-bbb79635b/"
                target="_blank"
                rel="noopener noreferrer"
                variant="glass"
                size="sm"
                className="w-9 h-9 p-0"
              >
                <LinkedinIcon className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton
                href="mailto:patelbhaumik6115@gmail.com"
                variant="glass"
                size="sm"
                className="w-9 h-9 p-0"
              >
                <Mail className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">Navigation</h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>
                <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-black dark:hover:text-white transition-colors">About & Bento</Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-black dark:hover:text-white transition-colors">Printable Resume</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Research & IP */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">Research & IP</h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>
                <Link href="/#research" className="hover:text-black dark:hover:text-white transition-colors">Publications & Preprints</Link>
              </li>
              <li>
                <Link href="/#patents" className="hover:text-black dark:hover:text-white transition-colors">7 Patents Filed</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-black dark:hover:text-white transition-colors">Collaboration & Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Bhaumik Patel. Built with Next.js, Framer Motion, and Tailwind CSS.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-mono text-[11px]">
              <Sparkles className="w-3 h-3 text-neutral-400" />
              <span>Awwwards / Apple-tier Design</span>
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-black dark:hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
