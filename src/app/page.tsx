import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutBento } from "@/components/sections/AboutBento";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PatentsSection } from "@/components/sections/PatentsSection";
import { ResearchPreview } from "@/components/sections/ResearchPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="relative flex flex-col w-full overflow-hidden">
      <HeroSection />
      <AboutBento />
      <ExperienceTimeline />
      <SkillsSection />
      <ProjectsSection />
      <PatentsSection />
      <ResearchPreview />
      <BlogPreview />
      <ContactSection />
    </main>
  );
}
