import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { CurrentlyBuilding } from "@/components/portfolio/CurrentlyBuilding";
import { BentoGrid } from "@/components/portfolio/BentoGrid";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { HowItWorks } from "@/components/portfolio/HowItWorks";
import { WorkPhilosophy } from "@/components/portfolio/WorkPhilosophy";
import { Contact } from "@/components/portfolio/Contact";
import { SITE_OG_IMAGE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sudev Majhi— Software Engineer" },
      {
        name: "description",
        content:
          "Independent software engineer building reliable, fast, and well-crafted products for the modern web.",
      },
      { property: "og:title", content: "Sudev Majhi— Software Engineer" },
      {
        property: "og:description",
        content:
          "Independent software engineer building reliable, fast, and well-crafted products for the modern web.",
      },
      { property: "og:image", content: SITE_OG_IMAGE },
      { name: "twitter:image", content: SITE_OG_IMAGE },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <CurrentlyBuilding />
      <Skills />
      <Projects />
      {/* <BentoGrid /> */}
      {/* <Experience /> */}
      {/* <HowItWorks /> */}
      <WorkPhilosophy />
      <Contact />
    </main>
  );
}
