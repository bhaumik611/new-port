import { simplifiedResearchPapers } from "@/content/simplified-research-data";
import SimplifiedPaperClient from "./SimplifiedPaperClient";

export async function generateStaticParams() {
  return simplifiedResearchPapers.map((paper) => ({
    slug: paper.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = simplifiedResearchPapers.find((p) => p.slug === slug);
  if (!paper) return { title: "Paper Breakdown Not Found" };

  return {
    title: `${paper.title} — Research Simplified`,
    description: paper.plainEnglishSummary,
    openGraph: {
      title: paper.title,
      description: paper.plainEnglishSummary,
      type: "article",
    },
  };
}

export default async function SimplifiedPaperDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <SimplifiedPaperClient slug={slug} />;
}
