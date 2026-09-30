import React from "react";
import { CheckCircle2, Clock, FileText, AlertCircle } from "lucide-react";
import { ResearchPaper } from "@/content/research-data";

export interface ResearchLinkState {
  hasPaperUrl: boolean;
  hasDoi: boolean;
  hasPdfUrl: boolean;
  hasCodeUrl: boolean;
  hasAnyLink: boolean;
  statusLabel: string;
  pendingText: string;
  badgeText: string;
  badgeVariant: "accepted" | "published" | "under-review" | "preprint" | "manuscript";
}

export function getResearchLinkState(paper: ResearchPaper): ResearchLinkState {
  const hasPaperUrl = Boolean(paper.paperUrl && paper.paperUrl.trim() !== "");
  const hasDoi = Boolean(paper.doi && paper.doi.trim() !== "");
  const hasPdfUrl = Boolean(paper.pdfUrl && paper.pdfUrl.trim() !== "");
  const hasCodeUrl = Boolean(paper.codeUrl && paper.codeUrl.trim() !== "");
  const hasAnyLink = hasPaperUrl || hasDoi || hasPdfUrl || hasCodeUrl;

  const status =
    paper.publicationStatus ||
    (paper.venue.toLowerCase().includes("accepted")
      ? "accepted"
      : paper.venue.toLowerCase().includes("preprint")
      ? "preprint"
      : "manuscript");

  let badgeText = "Research Manuscript";
  let badgeVariant: ResearchLinkState["badgeVariant"] = "manuscript";

  if (status === "accepted") {
    badgeText = "✓ Accepted";
    badgeVariant = "accepted";
  } else if (status === "published") {
    badgeText = "✓ Published";
    badgeVariant = "published";
  } else if (status === "under-review") {
    badgeText = "Under Review";
    badgeVariant = "under-review";
  } else if (status === "preprint") {
    badgeText = "Preprint";
    badgeVariant = "preprint";
  }

  let pendingText = "Publication link pending";
  if (status === "accepted") {
    pendingText = "Accepted — publication link pending";
  } else if (status === "published") {
    pendingText = "Publication link pending";
  } else if (status === "manuscript") {
    pendingText = "Manuscript — publication link pending";
  }

  return {
    hasPaperUrl,
    hasDoi,
    hasPdfUrl,
    hasCodeUrl,
    hasAnyLink,
    statusLabel: badgeText,
    pendingText,
    badgeText,
    badgeVariant,
  };
}

export function PublicationBadge({
  status,
  className = "",
}: {
  status?: ResearchPaper["publicationStatus"];
  className?: string;
}) {
  if (status === "accepted") {
    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 shadow-xs ${className}`}
      >
        <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
        <span>✓ Accepted</span>
      </span>
    );
  }

  if (status === "published") {
    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30 shadow-xs ${className}`}
      >
        <CheckCircle2 className="w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0" />
        <span>✓ Published</span>
      </span>
    );
  }

  if (status === "under-review") {
    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 ${className}`}
      >
        <Clock className="w-3 h-3 text-amber-600 dark:text-amber-400 shrink-0" />
        <span>Under Review</span>
      </span>
    );
  }

  if (status === "preprint") {
    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30 ${className}`}
      >
        <FileText className="w-3 h-3 text-purple-600 dark:text-purple-400 shrink-0" />
        <span>Preprint</span>
      </span>
    );
  }

  // Default / manuscript
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-neutral-500/15 text-neutral-700 dark:text-neutral-300 border border-neutral-500/30 ${className}`}
    >
      <FileText className="w-3 h-3 text-neutral-500 dark:text-neutral-400 shrink-0" />
      <span>Manuscript</span>
    </span>
  );
}

export function PublicationStatus({
  paper,
  showBadge = true,
  showPendingNote = true,
}: {
  paper: ResearchPaper;
  showBadge?: boolean;
  showPendingNote?: boolean;
}) {
  const linkState = getResearchLinkState(paper);

  return (
    <div className="flex flex-col gap-1">
      {showBadge && <PublicationBadge status={paper.publicationStatus} />}
      {!linkState.hasPaperUrl && showPendingNote && (
        <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 italic">
          {linkState.pendingText}
        </span>
      )}
    </div>
  );
}
