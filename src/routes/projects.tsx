import { createFileRoute } from "@tanstack/react-router";
import { AllProjects } from "@/components/portfolio/AllProjects";
import { SITE_OG_IMAGE } from "@/lib/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Sudev Majhi" },
      {
        name: "description",
        content:
          "Browse all projects by Sudev Majhi — web apps, developer tools, and open-source work.",
      },
      { property: "og:title", content: "Projects — Sudev Majhi" },
      {
        property: "og:description",
        content:
          "Browse all projects by Sudev Majhi — web apps, developer tools, and open-source work.",
      },
      { property: "og:image", content: SITE_OG_IMAGE },
      { name: "twitter:image", content: SITE_OG_IMAGE },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return <AllProjects />;
}
