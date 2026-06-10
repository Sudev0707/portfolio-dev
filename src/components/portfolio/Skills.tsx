"use client";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
  SiCloudflare,
  SiDocker,
  SiFramer,
  SiGithubactions,
  SiGo,
  SiGooglecloud,
  SiGraphql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRust,
  SiSqlite,
  SiTailwindcss,
  SiTerraform,
  SiTrpc,
  SiTypescript,
} from "react-icons/si";
import { Section } from "./Section";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

const skills: Skill[] = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Rust", icon: SiRust, color: "#DEA584" },
  { name: "SQL", icon: SiSqlite, color: "#003B57" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TanStack", icon: SiReactquery, color: "#FF4154" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Radix UI", icon: SiRadixui, color: "#E2E8F0" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "tRPC", icon: SiTrpc, color: "#398CCB" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "gRPC", icon: SiGooglecloud, color: "#4285F4" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Terraform", icon: SiTerraform, color: "#844FBA" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
];

const midpoint = Math.ceil(skills.length / 2);
const firstRow = skills.slice(0, midpoint);
const secondRow = skills.slice(midpoint);

function SkillCard({ name, icon: Icon, color }: Skill) {
  return (
    <figure
      className={cn(
        " shrink-0 justify-center items-center gap-3 rounded-lg border border-border bg-card p-1 px-2",
        "transition-colors hover:border-primary/40 hover:bg-card/80"
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center bg-black/30 p-2 rounded-lg">
          <Icon className="size-16 shrink-0" style={{ color }} aria-hidden />
        </div>
        <figcaption className="text-sm font-medium text-muted-foreground">{name}</figcaption>
      </div>
    </figure>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>Tools I reach for, daily.</>}
    >
      <div className="relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:35s] [--gap:0.75rem]">
          {firstRow.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:35s] [--gap:0.75rem]">
          {secondRow.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
      </div>
    </Section>
  );
}
