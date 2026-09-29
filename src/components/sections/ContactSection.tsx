"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, Copy, Check, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const email = "patelbhaumik6115@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-14 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
          <span>Get in Touch</span>
        </div>
        <TextReveal italicWord="Collaborate">
          Let&apos;s Build and Collaborate
        </TextReveal>
      </div>

      {/* Main Glass Contact Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Col: Direct Reachout & Socials (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 mb-2">
                Initiate a Conversation
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Whether you want to discuss a research collaboration, AI system architectures, patent engineering, or novel ideas, I would love to connect.
              </p>
            </div>

            {/* Email pill box */}
            <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 space-y-2">
              <span className="text-[11px] font-mono uppercase text-neutral-400">Direct Email</span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${email}`}
                  className="text-xs sm:text-sm font-mono font-medium text-neutral-900 dark:text-neutral-100 hover:underline truncate"
                >
                  {email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg glass-pill hover:scale-105 transition-all text-neutral-600 dark:text-neutral-300"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] font-mono uppercase text-neutral-400">Verified Profiles</span>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/in/bhaumik-patel-bbb79635b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl glass-pill hover:scale-[1.01] transition-all text-sm font-medium text-neutral-800 dark:text-neutral-200"
                >
                  <span className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <span className="text-xs font-mono text-neutral-400">@bhaumik-patel</span>
                </a>

                <a
                  href="https://github.com/bhaumik611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl glass-pill hover:scale-[1.01] transition-all text-sm font-medium text-neutral-800 dark:text-neutral-200"
                >
                  <span className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Repositories</span>
                  </span>
                  <span className="text-xs font-mono text-neutral-400">@bhaumik611</span>
                </a>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Right Col: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <GlassCard className="p-6 sm:p-8">
            <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 mb-6">
              Send a Direct Message
            </h3>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-500 max-w-sm">
                    Thank you for reaching out. I will review your message and reply promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-4 py-2 rounded-full glass-pill text-xs font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-neutral-400">
                        Your Name
                      </label>
                      <input
                        id="name"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full px-4 py-3 rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-neutral-400">
                        Your Email
                      </label>
                      <input
                        id="email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ada@example.com"
                        className="w-full px-4 py-3 rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono text-neutral-400">
                      Subject
                    </label>
                    <input
                      id="subject"
                      required
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Research collaboration / AI architecture project"
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-neutral-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Bhaumik, I would like to discuss..."
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-sm hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
