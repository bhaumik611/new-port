import { researchPapers } from "@/content/research-data";
import ResearchPaperClient from "./ResearchPaperClient";

export async function generateStaticParams() {
  return researchPapers.map((paper) => ({
    slug: paper.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = researchPapers.find((p) => p.slug === slug);
  if (!paper) return { title: "Paper Not Found" };

  return {
    title: `${paper.shortTitle || paper.title} — Research Simplified`,
    description: paper.plainSummary,
    openGraph: {
      title: paper.title,
      description: paper.plainSummary,
      type: "article",
    },
  };
}

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ResearchPaperClient slug={slug} />;
}
