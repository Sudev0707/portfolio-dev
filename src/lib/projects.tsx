import type { ReactNode } from "react";
import { ArrowUpRight, Globe, Landmark, LayoutGrid, PenLine } from "lucide-react";
import {
  SiCloudflare,
  SiNextdotjs,
  SiPostgresql,
  SiRadixui,
  SiReact,
  SiRust,
  SiTypescript,
} from "react-icons/si";
import linkrepoIcon from "@/assets/image/linkrepo-icon.png";
import linkrepoThumbnail from "@/assets/image/linkrepo-thumbnail.png";
import mockpixelIcon from "@/assets/image/mockpixel-icon.png";
import mockpixelThumbnail from "@/assets/image/mockpixel-thumbnail.png";
import remindsureIcon from "@/assets/image/remindsure-icon.png";
import remindsureThumbnail from "@/assets/image/remindsure-thumbnail.png";

export type Project = {
  name: string;
  description: string;
  features: string[];
  tags: { label: string; icon?: ReactNode }[];
  year: string;
  href: string;
  /** Live app / store URL — shows a "View live" badge on the thumbnail when set */
  liveUrl?: string;
  icon: ReactNode;
  thumbnail: ReactNode;
};

export function ProjectAppIcon({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex size-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-primary/15 text-primary md:size-12 ${className ?? ""}`}
      aria-hidden
    >
      {children}
    </div>
  );
}

export function ProjectThumbnail({ project }: { project: Project }) {
  const liveUrl = project.liveUrl?.trim() ?? "";
  const showBadge = project.liveUrl !== undefined;
  const isLive = /^https?:\/\//.test(liveUrl);

  return (
    <div className="relative h-full w-full">
      {project.thumbnail}
      {showBadge &&
        (isLive ? (    
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/55 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white shadow-sm backdrop-blur-md transition-colors hover:bg-black/75"
            onClick={(e) => e.stopPropagation()}
          >
            Visit
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        ) : (
          <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white/70 backdrop-blur-md">
            Visit
            <ArrowUpRight className="size-3.5" aria-hidden />
          </span>
        ))}
    </div>
  );
}

export const projects: Project[] = [
  {
    name: "LinkRepo",
    description:
      "Save, organize, categorize and revisit your important links anytime, anywhere — all your links in one smart place.",
    features: [
      "Save any link with one tap",
      "Organize into categories and favorites",
      "Quick search across your entire link library",
    ],
    tags: [
      { label: "React", icon: <SiReact className="size-3" /> },
      { label: "TypeScript", icon: <SiTypescript className="size-3" /> },
      { label: "Mobile" },
    ],
    year: "2026",
    href: "#",
    liveUrl: "https://linkdrop-app-ten.vercel.app/",
    icon: (
      <img
        src={linkrepoIcon}
        alt=""
        aria-hidden
        className="size-10 shrink-0 rounded-xl border border-border/60 object-cover md:size-12"
      />
    ),
    thumbnail: (
      <img
        src={linkrepoThumbnail}
        alt="LinkRepo — All Your Links. One Smart Place."
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    name: "MockPixel",
    description:
      "Create stunning App Store screenshots and device mockups — the simple & powerful app for marketers and indie makers to design beautiful visuals from your phone.",
    features: [
      "50+ premium frames for iPhone, Android, tablet & more",
      "Solid colors, gradients & clean scenes for backgrounds",
      "Crop, zoom, resize & export PNG for store listings",
    ],
    tags: [
      { label: "React", icon: <SiReact className="size-3" /> },
      { label: "TypeScript", icon: <SiTypescript className="size-3" /> },
      { label: "Mobile" },
    ],
    year: "2026",
    href: "#",
    liveUrl: "https://mockpixel.vercel.app/",
    icon: (
      <img
        src={mockpixelIcon}
        alt=""
        aria-hidden
        className="size-10 shrink-0 rounded-xl border border-border/60 object-cover md:size-12"
      />
    ),
    thumbnail: (
      <img
        src={mockpixelThumbnail}
        alt="MockPixel — Create Stunning App Store Screenshots & Device Mockups"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    name: "RemindSure",
    description:
      "Create, share, and manage reminders for yourself, your friends, and your family — the simple & powerful reminder app that helps everyone stay connected and never miss what matters.",
    features: [
      "Personal, shared, and recurring reminders in one place",
      "Collaborate with friends, family, and groups effortlessly",
      "Smart notifications, calendar view, categories, and task tracking",
    ],
    tags: [
      { label: "React Native", icon: <SiReact className="size-3" /> },
      { label: "TypeScript", icon: <SiTypescript className="size-3" /> },
      { label: "Mobile" },
    ],
    year: "2026",
    href: "#",
    liveUrl: "#",
    icon: (
      <img
        src={remindsureIcon}
        alt=""
        aria-hidden
        className="size-10 shrink-0 rounded-xl border border-border/60 object-cover md:size-12"
      />
    ),
    thumbnail: (
      <img
        src={remindsureThumbnail}
        alt="RemindSure — Smart Reminders for You, Family & Teams"
        className="h-full w-full object-cover"
      />
    ),
  },


];
