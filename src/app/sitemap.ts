import { MetadataRoute } from "next";
import { researchPapers } from "@/content/research-data";
import { projectsData } from "@/content/projects-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://bhaumikpatel.dev";

  const staticRoutes = [
    "",
    "/resume",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const researchRoutes = researchPapers.map((paper) => ({
    url: `${siteUrl}/research/${paper.slug}`,
    lastModified: new Date(paper.date),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const projectRoutes = projectsData.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...researchRoutes, ...projectRoutes];
}
