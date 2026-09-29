import { NextResponse } from "next/server";
import { blogPosts } from "@/content/blog-data";
import { researchPapers } from "@/content/research-data";

export async function GET() {
  const siteUrl = "https://bhaumikpatel.dev";

  const blogItems = blogPosts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${post.category}</category>
    </item>`
    )
    .join("");

  const paperItems = researchPapers
    .map(
      (paper) => `
    <item>
      <title><![CDATA[Research: ${paper.title}]]></title>
      <link>${siteUrl}/research/${paper.slug}</link>
      <guid isPermaLink="true">${siteUrl}/research/${paper.slug}</guid>
      <description><![CDATA[${paper.plainSummary}]]></description>
      <pubDate>${new Date(paper.date).toUTCString()}</pubDate>
      <category>${paper.category}</category>
    </item>`
    )
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Bhaumik Patel — Engineering Journal & Research Simplified</title>
    <link>${siteUrl}</link>
    <description>Weekly emerging tech, AI/ML architectures, and simplified research papers by Bhaumik Patel.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${blogItems}
    ${paperItems}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
