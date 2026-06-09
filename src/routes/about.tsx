import { createFileRoute } from "@tanstack/react-router";
import { AboutDetail } from "@/components/portfolio/AboutDetail";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sudev Majhi" },
      {
        name: "description",
        content:
          "Learn more about Sudev Majhi — software developer focused on web, mobile, and AI applications.",
      },
      { property: "og:title", content: "About — Sudev Majhi" },
      {
        property: "og:description",
        content:
          "Learn more about Sudev Majhi — software developer focused on web, mobile, and AI applications.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <AboutDetail />;
}
