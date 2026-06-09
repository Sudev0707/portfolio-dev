import { createFileRoute } from "@tanstack/react-router";
import { AboutDetail } from "@/components/portfolio/AboutDetail";
import { SITE_OG_IMAGE } from "@/lib/site";

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
      { property: "og:image", content: SITE_OG_IMAGE },
      { name: "twitter:image", content: SITE_OG_IMAGE },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <AboutDetail />;
}
