"use client";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";
import { FaAws, FaJava } from "react-icons/fa6";
import {
  SiAndroidstudio,
  SiApachemaven,
  SiAuth0,
  SiBitbucket,
  SiBootstrap,
  SiClerk,
  SiCloudflare,
  SiCloudinary,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHibernate,
  SiJavascript,
  SiJenkins,
  SiKeycloak,
  SiMongodb,
  SiMui,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiRender,
  SiSentry,
  SiSocketdotio,
  SiSpring,
  SiSpringboot,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiXcode,
} from "react-icons/si";
import { Section } from "./Section";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

const skills: Skill[] = [
  // Languages
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "SQL", icon: SiSqlite, color: "#003B57" },

  // Frontend
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Material UI", icon: SiMui, color: "#007FFF" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },

  // Java & Spring
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "Spring MVC", icon: SiSpring, color: "#6DB33F" },
  { name: "Spring Data JPA", icon: SiSpring, color: "#6DB33F" },
  { name: "Hibernate", icon: SiHibernate, color: "#59666C" },
  { name: "Maven", icon: SiApachemaven, color: "#C71A36" },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
  { name: "WebSockets", icon: SiSocketdotio, color: "#ffffff" },

  // Databases
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "SQLite", icon: SiSqlite, color: "#003B57" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },

  // Authentication
  { name: "OAuth 2.0", icon: SiAuth0, color: "#EB5424" },
  { name: "Keycloak", icon: SiKeycloak, color: "#4D4A7F" },
  { name: "Clerk", icon: SiClerk, color: "#6C47FF" },

  // Cloud & Deployment
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "AWS Lambda", icon: FaAws, color: "#FF9900" },
  { name: "AWS S3", icon: FaAws, color: "#569A31" },
  { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Render", icon: SiRender, color: "#46E3B7" },

  // DevOps & Version Control
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" },

  // Mobile & Tools
  { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
  { name: "Xcode", icon: SiXcode, color: "#147EFB" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Sentry", icon: SiSentry, color: "#362D59" },
  { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
];

const midpoint = Math.ceil(skills.length / 2);
const firstRow = skills.slice(0, midpoint);
const secondRow = skills.slice(midpoint);

function SkillCard({ name, icon: Icon, color }: Skill) {
  return (
    <figure
      aria-label={name}
      title={name}
      className={cn(
        "shrink-0 rounded-md border border-border bg-card p-1.5 md:p-2",
        "transition-colors hover:border-primary/40 hover:bg-card/80"
      )}
    >
      <div className="flex items-center justify-center rounded-md bg-black/30 p-1.5 md:p-2">
        <Icon className="size-7 shrink-0 md:size-9" style={{ color }} aria-hidden />
      </div>
    </figure>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border/60 pt-28 pb-28 max-w-6xl px-6 mx-auto"
      // eyebrow="Skills"
      // title={<>Tools I reach for, daily.</>}
    >
      <div className="relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden">
        <h2 className="text-2xl font-bricolage font-bold text-primary mb-4">Tools I reach for, daily.</h2>
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
    </section>
  );
}
