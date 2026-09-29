import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { geistSans, geistMono, instrumentSerif } from "@/lib/fonts";
import { LenisProvider } from "@/components/ui/LenisProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { MeshBackground } from "@/components/ui/MeshBackground";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Preloader } from "@/components/ui/Preloader";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Bhaumik Patel — AI/ML Engineer, Researcher & Founder",
    template: "%s | Bhaumik Patel",
  },
  description:
    "Personal portfolio & research hub of Bhaumik Patel. Exploring deep learning architectures, 6G telecom systems, and patent engineering.",
  keywords: [
    "Bhaumik Patel",
    "AI Engineer",
    "Machine Learning",
    "6G Telecom",
    "Deep Learning",
    "Patents",
    "Research Simplified",
    "TrustRAG",
    "Tatvam AI",
    "IIT Gandhinagar",
    "i-Hub Gujarat",
  ],
  authors: [{ name: "Bhaumik Patel", url: "https://github.com/bhaumik611" }],
  creator: "Bhaumik Patel",
  metadataBase: new URL("https://bhaumikpatel.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhaumikpatel.dev",
    title: "Bhaumik Patel — AI/ML Engineer, Researcher & Founder",
    description:
      "Personal portfolio & research hub of Bhaumik Patel. Deep learning architectures, 6G systems, and patent engineering.",
    siteName: "Bhaumik Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhaumik Patel — AI/ML Engineer, Researcher & Founder",
    description:
      "Personal portfolio & research hub of Bhaumik Patel. Deep learning architectures, 6G systems, and patent engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bhaumik Patel",
    jobTitle: "AI/ML Engineer & Researcher",
    url: "https://bhaumikpatel.dev",
    sameAs: [
      "https://github.com/bhaumik611",
      "https://www.linkedin.com/in/bhaumik-patel-bbb79635b/",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Pandit Deendayal Energy University",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "6G Wireless Networks",
      "Patent Engineering",
      "Natural Language Processing",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LenisProvider>
            <Preloader />
            <ScrollProgress />
            <CustomCursor />
            <NoiseOverlay />
            <MeshBackground />
            <CommandPalette />

            <div className="relative z-10 flex flex-col min-h-screen">
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
