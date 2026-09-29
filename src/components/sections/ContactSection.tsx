"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, Copy, Check, AlertCircle, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [lastSubmittedMailto, setLastSubmittedMailto] = useState("");

  const email = "patelbhaumik6115@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your email and message.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const subjectText = formData.subject.trim() || `New Message from ${formData.email}`;
    const bodyText = `Sender Email: ${formData.email}\nSender Name: ${formData.name.trim() || "Visitor"}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

    setLastSubmittedMailto(mailtoUrl);

    // Also send to local API endpoint
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name || "Visitor",
          email: formData.email,
          subject: subjectText,
          message: formData.message,
        }),
      });
    } catch {
      // Background logging fallback
    }

    // Trigger mail client directly
    window.location.href = mailtoUrl;
    setStatus("success");
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
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                Whether you want to discuss AI architectures, deep learning research, patent engineering, or strategic collaborations, I would love to connect.
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
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
                Send a Direct Message
              </h3>
              <a
                href={`mailto:${email}?subject=Collaboration%20Inquiry`}
                className="text-xs font-mono text-neutral-500 hover:text-black dark:hover:text-white underline"
              >
                Open Email Client →
              </a>
            </div>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-10 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">
                      Email Ready & Dispatched
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-500 max-w-md">
                      Your message has been composed for <span className="font-mono font-medium text-neutral-900 dark:text-neutral-100">{email}</span>. If your mail app did not open automatically, click below to send directly:
                    </p>
                  </div>
                  
                  {lastSubmittedMailto && (
                    <a
                      href={lastSubmittedMailto}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold text-xs hover:scale-105 transition-all shadow-md"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open Mail App & Send</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-white underline pt-2"
                  >
                    Write another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage || "Failed to transmit message. Please try again."}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-neutral-400">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className="w-full px-4 py-3 rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-neutral-400">
                        Your Name (Optional)
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Alex Rivera"
                        className="w-full px-4 py-3 rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono text-neutral-400">
                      Subject (Optional)
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Collaboration inquiry / AI research discussion"
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-neutral-400">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Bhaumik, I would love to connect about..."
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-neutral-400">
                      * Required fields
                    </span>
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
