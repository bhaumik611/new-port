import { MetadataRoute } from "next";
import { researchPapers } from "@/content/research-data";
import { blogPosts } from "@/content/blog-data";
import { simplifiedResearchPapers } from "@/content/simplified-research-data";
import { projectsData } from "@/content/projects-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://bhaumikpatel.dev";

  const staticRoutes = [
    "",
    "/blog",
    "/resume",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const simplifiedPaperRoutes = simplifiedResearchPapers.map((paper) => ({
    url: `${siteUrl}/research-simplified/${paper.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectRoutes = projectsData.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...simplifiedPaperRoutes, ...projectRoutes];
}
