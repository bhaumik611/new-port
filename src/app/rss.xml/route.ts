import { NextResponse } from "next/server";
import { researchPapers } from "@/content/research-data";

export async function GET() {
  const siteUrl = "https://bhaumikpatel.dev";

  const paperItems = researchPapers
    .map(
      (paper) => `
    <item>
      <title><![CDATA[Research: ${paper.title}]]></title>
      <link>${siteUrl}/#research</link>
      <guid isPermaLink="true">${siteUrl}/#research-${paper.slug}</guid>
      <description><![CDATA[${paper.plainSummary}]]></description>
      <pubDate>${new Date(paper.date).toUTCString()}</pubDate>
      <category>${paper.category}</category>
    </item>`
    )
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Bhaumik Patel — Publications & Research</title>
    <link>${siteUrl}</link>
    <description>AI/ML research, 6G telecom architectures, and patent engineering by Bhaumik Patel.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
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
