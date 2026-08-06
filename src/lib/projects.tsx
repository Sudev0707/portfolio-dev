import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Globe,
  Landmark,
  LayoutGrid,
  PenLine,
} from "lucide-react";
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

export type Project = {
  name: string;
  description: string;
  features: string[];
  tags: { label: string; icon?: ReactNode }[];
  year: string;
  href: string;
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
    name: "Ledger OS",
    description:
      "Double-entry accounting platform built for SaaS finance teams. Real-time reconciliation across 12+ payment processors.",
    features: [
      "Automated double-entry ledger with audit trails",
      "Real-time sync across Stripe, PayPal, and 10+ processors",
      "Role-based dashboards for finance and ops teams",
    ],
    tags: [
      { label: "TypeScript", icon: <SiTypescript className="size-3" /> },
      { label: "Postgres", icon: <SiPostgresql className="size-3" /> },
      { label: "Next.js", icon: <SiNextdotjs className="size-3" /> },
    ],
    year: "2025",
    href: "#",
    icon: (
      <ProjectAppIcon>
        <Landmark className="size-5 md:size-6" strokeWidth={1.75} />
      </ProjectAppIcon>
    ),
    thumbnail: (
      <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[oklch(0.14_0.01_260)] p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.62_0.14_162/0.18),transparent_55%)]" />
        <div className="relative">
          <p className="font-bricolage text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Entrepreneurs
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Finance operations at startup speed.
          </p>
        </div>
        <div className="relative mt-8 space-y-3">
          <div className="h-10 rounded-lg border border-border/60 bg-card/80 px-4 text-sm leading-10 text-muted-foreground">
            Search transactions…
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Revenue", "Burn", "Runway"].map((label) => (
              <div
                key={label}
                className="rounded-lg border border-border/50 bg-card/60 p-3"
              >
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {label}
                </p>
                <p className="mt-1 font-mono text-sm text-foreground">$24.8k</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Northwind UI",
    description:
      "Open-source component library focused on data-dense applications — tables, command palettes, and keyboard-first flows.",
    features: [
      "Accessible primitives built on Radix UI",
      "Data tables with sorting, filtering, and virtualization",
      "Command palette and keyboard-first navigation patterns",
    ],
    tags: [
      { label: "React", icon: <SiReact className="size-3" /> },
      { label: "Radix", icon: <SiRadixui className="size-3" /> },
      { label: "Design System" },
    ],
    year: "2024",
    href: "#",
    icon: (
      <ProjectAppIcon>
        <LayoutGrid className="size-5 md:size-6" strokeWidth={1.75} />
      </ProjectAppIcon>
    ),
    thumbnail: (
      <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[oklch(0.22_0.04_280)] p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,oklch(0.62_0.14_162/0.25),transparent_50%)]" />
        <p className="relative max-w-md text-lg leading-relaxed text-foreground/90 md:text-xl">
          An intuitive component kit for organizing dense data and building
          keyboard-first product UIs.
        </p>
        <div className="relative mt-8 grid grid-cols-2 gap-3">
          {["Table", "Dialog", "Command", "Tabs"].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground/80 backdrop-blur-sm"
            >
              {item}
            </div>
          ))}
        </div>
        <ArrowUpRight className="absolute right-6 top-6 size-5 text-foreground/40" />
      </div>
    ),
  },
  {
    name: "Atlas Edge",
    description:
      "Globally distributed key-value store running on Cloudflare Workers. Sub-20ms reads from any continent.",
    features: [
      "Edge-replicated storage with strong consistency options",
      "Sub-20ms reads from any global PoP",
      "Rust-powered runtime with minimal cold starts",
    ],
    tags: [
      { label: "Rust", icon: <SiRust className="size-3" /> },
      { label: "Workers", icon: <SiCloudflare className="size-3" /> },
      { label: "Infra" },
    ],
    year: "2024",
    href: "#",
    icon: (
      <ProjectAppIcon>
        <Globe className="size-5 md:size-6" strokeWidth={1.75} />
      </ProjectAppIcon>
    ),
    thumbnail: (
      <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[oklch(0.14_0.01_260)] p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.62_0.14_162/0.18),transparent_55%)]" />
        <div className="relative">
          <p className="font-bricolage text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Entrepreneurs
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Finance operations at startup speed.
          </p>
        </div>
        <div className="relative mt-8 space-y-3">
          <div className="h-10 rounded-lg border border-border/60 bg-card/80 px-4 text-sm leading-10 text-muted-foreground">
            Search transactions…
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Revenue", "Burn", "Runway"].map((label) => (
              <div
                key={label}
                className="rounded-lg border border-border/50 bg-card/60 p-3"
              >
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {label}
                </p>
                <p className="mt-1 font-mono text-sm text-foreground">$24.8k</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Quill Editor",
    description:
      "A collaborative markdown editor with CRDT-powered offline-first sync and AI-assisted rewrites.",
    features: [
      "CRDT sync for conflict-free collaborative editing",
      "Offline-first with automatic merge on reconnect",
      "AI-assisted rewrites and inline suggestions",
    ],
    tags: [
      { label: "TypeScript", icon: <SiTypescript className="size-3" /> },
      { label: "Yjs" },
      { label: "AI" },
    ],
    year: "2023",
    href: "#",
    icon: (
      <ProjectAppIcon>
        <PenLine className="size-5 md:size-6" strokeWidth={1.75} />
      </ProjectAppIcon>
    ),
    thumbnail: (
      <div className="relative flex h-full flex-col overflow-hidden bg-[oklch(0.17_0.015_260)] p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,oklch(0.62_0.14_162/0.08),transparent_50%)]" />
        <div className="relative flex-1 space-y-2 font-mono text-sm text-muted-foreground">
          <p>
            <span className="text-primary"># </span>Draft notes
          </p>
          <p className="text-foreground/70">Collaborative editing session</p>
          <p>— offline changes queued</p>
          <p className="text-primary/80">+ AI rewrite suggestion</p>
        </div>
        <div className="relative mt-6 h-1.5 overflow-hidden rounded-full bg-border">
          <div className="h-full w-2/3 rounded-full bg-primary/70" />
        </div>
      </div>
    ),
  },
];
