"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BookOpen,
  FileText,
  Briefcase,
  Layers,
  User,
  Mail,
  Sun,
  Moon,
  ArrowRight,
  Sparkles,
  Command,
  Radio,
} from "lucide-react";
import { researchPapers } from "@/content/research-data";
import { projectsData } from "@/content/projects-data";
import { patentsAndRecognition } from "@/content/experience-data";

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { setTheme, resolvedTheme } = useTheme();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Quick navigation items
  const baseItems = [
    {
      id: "nav-home",
      title: "Home",
      subtitle: "Jump to overview and top section",
      icon: Sparkles,
      action: () => router.push("/"),
      category: "Navigation",
    },
    {
      id: "nav-about",
      title: "About & Bento Grid",
      subtitle: "Biography, background, education, and stats",
      icon: User,
      action: () => {
        router.push("/#about");
      },
      category: "Navigation",
    },
    {
      id: "nav-experience",
      title: "Experience & Roles",
      subtitle: "i-Hub Gujarat, IIT Gandhinagar, Suvidha, Tatvam AI",
      icon: Briefcase,
      action: () => {
        router.push("/#experience");
      },
      category: "Navigation",
    },
    {
      id: "nav-projects",
      title: "Projects Hub",
      subtitle: "RouteMind, TrustRAG, RAG-eval, SQL-UI",
      icon: Layers,
      action: () => {
        router.push("/#projects");
      },
      category: "Navigation",
    },
    {
      id: "nav-research",
      title: "Publications & Research",
      subtitle: "Browse Bhaumik's research papers & preprints",
      icon: BookOpen,
      action: () => {
        router.push("/#research");
      },
      category: "Research",
    },
    {
      id: "nav-patents",
      title: "7 Patents Filed",
      subtitle: "IoT, AgriTech, 6G Telecom, Healthcare AI patents",
      icon: Radio,
      action: () => {
        router.push("/#patents");
      },
      category: "Patents",
    },
    {
      id: "nav-resume",
      title: "Printable Resume",
      subtitle: "View clean, print-friendly CV",
      icon: FileText,
      action: () => router.push("/resume"),
      category: "Navigation",
    },
    {
      id: "nav-contact",
      title: "Contact & Collaboration",
      subtitle: "Get in touch or initiate a research collaboration",
      icon: Mail,
      action: () => router.push("/#contact"),
      category: "Navigation",
    },
    {
      id: "cmd-theme",
      title: `Switch to ${resolvedTheme === "dark" ? "Light" : "Dark"} Mode`,
      subtitle: "Toggle color theme (or press 'D' anytime)",
      icon: resolvedTheme === "dark" ? Sun : Moon,
      action: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
      category: "Actions",
    },
  ];

  // Paper items
  const paperItems = researchPapers.map((paper) => ({
    id: `paper-${paper.slug}`,
    title: paper.shortTitle || paper.title,
    subtitle: `Paper: ${paper.plainSummary.slice(0, 65)}...`,
    icon: BookOpen,
    action: () => {
      router.push("/#research");
    },
    category: "Research",
  }));

  // Patent items
  const patentItems = patentsAndRecognition.map((pat) => ({
    id: `patent-${pat.id}`,
    title: pat.title,
    subtitle: `${pat.badge}: ${pat.description.slice(0, 65)}...`,
    icon: Radio,
    action: () => {
      router.push("/#patents");
    },
    category: "Patents",
  }));

  // Project items
  const projectItems = projectsData.map((project) => ({
    id: `project-${project.slug}`,
    title: project.title,
    subtitle: project.tagline,
    icon: Layers,
    action: () => {
      if (project.githubUrl) {
        window.open(project.githubUrl, "_blank");
      } else {
        router.push("/#projects");
      }
    },
    category: "Projects",
  }));

  const allItems = [...baseItems, ...paperItems, ...patentItems, ...projectItems];

  const filteredItems = query.trim()
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : baseItems;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  const handleKeyDownInMenu = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[99999] flex items-start justify-center pt-20 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-2xl glass-panel rounded-3xl overflow-hidden shadow-2xl border border-neutral-300/40 dark:border-neutral-700/50 bg-white/95 dark:bg-neutral-950/95 z-10"
              onKeyDown={handleKeyDownInMenu}
            >
              <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-200/60 dark:border-neutral-800/60">
                <Search className="w-5 h-5 text-neutral-400 shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  placeholder="Search papers, 7 patents, projects, or commands..."
                  className="w-full bg-transparent text-sm sm:text-base text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 outline-none"
                />
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono rounded bg-neutral-200/70 dark:bg-neutral-800 text-neutral-500">
                  ESC
                </kbd>
              </div>

              <div className="max-h-[360px] overflow-y-auto p-2 divide-y divide-transparent">
                {filteredItems.length === 0 ? (
                  <div className="py-12 text-center text-sm text-neutral-500">
                    No results found for &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  filteredItems.map((item, index) => {
                    const Icon = item.icon;
                    const isSelected = index === selectedIndex;

                    return (
                      <div
                        key={item.id}
                        onMouseEnter={() => setSelectedIndex(index)}
                        onClick={() => {
                          item.action();
                          setIsOpen(false);
                        }}
                        className={`flex items-center justify-between px-3.5 py-3 rounded-2xl cursor-pointer transition-all duration-150 ${
                          isSelected
                            ? "bg-neutral-200/80 dark:bg-neutral-800/90 text-neutral-900 dark:text-white"
                            : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900/50"
                        }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div
                            className={`p-2 rounded-xl shrink-0 ${
                              isSelected
                                ? "bg-black text-white dark:bg-white dark:text-black"
                                : "bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-medium truncate">
                              {item.title}
                            </div>
                            <div className="text-xs text-neutral-500 truncate">
                              {item.subtitle}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800">
                            {item.category}
                          </span>
                          {isSelected && (
                            <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              <div className="flex items-center justify-between px-5 py-3 border-t border-neutral-200/60 dark:border-neutral-800/60 text-[11px] text-neutral-500">
                <div className="flex items-center gap-3">
                  <span>
                    Use <kbd className="font-mono bg-neutral-200 dark:bg-neutral-800 px-1 rounded">↑</kbd> <kbd className="font-mono bg-neutral-200 dark:bg-neutral-800 px-1 rounded">↓</kbd> to navigate
                  </span>
                  <span>
                    <kbd className="font-mono bg-neutral-200 dark:bg-neutral-800 px-1 rounded">↵</kbd> to select
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Command className="w-3 h-3" />
                  <span>Command Palette</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
