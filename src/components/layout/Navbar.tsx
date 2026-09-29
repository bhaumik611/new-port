"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Research", href: "/research" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ];

  const triggerCommandPalette = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "k",
        metaKey: true,
        bubbles: true,
      })
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9000] flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <div className="w-full max-w-5xl flex items-center justify-between pointer-events-auto">
        {/* Brand / Monogram */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full glass-pill transition-all duration-300 hover:scale-105"
        >
          <div className="w-6 h-6 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-xs tracking-tight">
            BP
          </div>
          <span className="text-xs font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 hidden sm:inline-block">
            Bhaumik Patel
          </span>
        </Link>

        {/* Center Floating Glass Pill Navbar (Desktop) */}
        <nav
          className={cn(
            "hidden md:flex items-center gap-1 rounded-full glass-pill p-1.5 transition-all duration-300",
            scrolled ? "py-1 px-2 shadow-xl scale-95" : "py-1.5 px-3 shadow-md"
          )}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href.startsWith("/#")
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                  isActive
                    ? "text-black dark:text-white"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Command Trigger + Theme Toggle + Mobile Hamburger */}
        <div className="flex items-center gap-2">
          {/* Quick Cmd+K search trigger */}
          <button
            type="button"
            onClick={triggerCommandPalette}
            aria-label="Open Command Palette"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full glass-pill text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-105"
          >
            <Command className="w-3.5 h-3.5" />
            <span className="text-[11px] font-mono text-neutral-400">⌘K</span>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full glass-pill text-neutral-800 dark:text-neutral-200"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden fixed top-20 left-4 right-4 z-[9999] rounded-3xl glass-panel bg-white/95 dark:bg-neutral-950/95 p-6 shadow-2xl border border-neutral-300/60 dark:border-neutral-700/60 pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                >
                  <span>{link.label}</span>
                  <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    triggerCommandPalette();
                  }}
                  className="flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-black dark:hover:text-white"
                >
                  <Command className="w-4 h-4" />
                  <span>Search commands (⌘K)</span>
                </button>
                <Link
                  href="/resume"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black"
                >
                  Resume
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
