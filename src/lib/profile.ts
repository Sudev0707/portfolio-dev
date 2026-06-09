import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  Clock,
  Code2,
  Github,
  Globe,
  GraduationCap,
  Languages,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const CAL_BOOKING_URL = "https://cal.com/sudev-y6seey/15min";

export const PROFILE_TAGLINE = "Building with code. Small details matter.";

export type BioSegment = {
  text: string;
  href?: string;
  emphasis?: boolean;
};

export const socialLinks: {
  label: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    label: "GitHub",
    href: "https://github.com/Sudev0707",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sudevmajhi-dev",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:hello@sudev.dev",
    icon: Mail,
  },
  {
    label: "Book a call",
    href: CAL_BOOKING_URL,
    icon: Calendar,
  },
];

export const contactInfoLeft: {
  id: string;
  icon: LucideIcon;
  label: string;
  href?: string;
}[] = [
  {
    id: "role",
    icon: Code2,
    label: "Software Developer @ Delostyle Studio",
  },
  {
    id: "focus",
    icon: Lightbulb,
    label: "Full-Stack & Mobile Engineer",
  },
  {
    id: "location",
    icon: MapPin,
    label: "Kolkata, India",
  },
  {
    id: "phone",
    icon: Phone,
    label: "Available on Cal.com",
    href: CAL_BOOKING_URL,
  },
  {
    id: "website",
    icon: Globe,
    label: "sudev.dev",
    href: "https://sudev.dev",
  },
];

export const contactInfoRight: {
  id: string;
  icon: LucideIcon;
  label: string;
  href?: string;
}[] = [
  {
    id: "time",
    icon: Clock,
    label: "IST // UTC+5:30",
  },
  {
    id: "email",
    icon: Mail,
    label: "hello@sudev.dev",
    href: "mailto:hello@sudev.dev",
  },
  {
    id: "languages",
    icon: Languages,
    label: "English, Hindi, Bengali",
  },
  {
    id: "education",
    icon: GraduationCap,
    label: "Java Full Stack — QSpiders",
  },
  {
    id: "status",
    icon: Lightbulb,
    label: "Open to freelance & collaborations",
  },
];

export const profileFacts = [
  { label: "Currently", value: "Software Developer" },
  { label: "Location", value: "India" },
  { label: "Focus", value: "Web, Mobile & AI Applications" },
] as const;

export const aboutParagraphs = [
  "I'm Sudev Majhi, a proactive full-stack developer passionate about creating dynamic web and mobile experiences. From React frontends to Node.js backends, I thrive on solving complex problems with clean, efficient code. My expertise spans React Native, TypeScript, and generative AI — and I'm always eager to learn more.",
  "When I'm not immersed in work, I'm exploring new tools, contributing to side projects, and staying curious about what's next in product engineering. Life's about balance, and I love embracing every part of it.",
  "I believe in waking up each day eager to build something that makes a difference.",
] as const;

export const bioBullets: { id: string; segments: BioSegment[] }[] = [
  {
    id: "experience",
    segments: [
      { text: "With " },
      { text: "3+ years", emphasis: true },
      {
        text: " of experience in software development, I specialize in building web and mobile applications with a focus on performance, scalability, and pixel-perfect execution.",
      },
    ],
  },
  {
    id: "passion",
    segments: [
      { text: "I'm passionate about exploring new technologies — especially " },
      { text: "generative AI", emphasis: true },
      {
        text: " — and turning ideas into polished, production-ready products that deliver real value to users.",
      },
    ],
  },
  {
    id: "creator",
    segments: [
      { text: "Creator of " },
      { text: "sudev.dev", href: "https://sudev.dev" },
      { text: ", open-source projects on " },
      {
        text: "GitHub",
        href: "https://github.com/Sudev0707",
      },
      {
        text: ", and AI-powered apps with React, React Native & TypeScript.",
      },
    ],
  },
];

export const workExperience = [
  {
    id: "delostyle",
    role: "Software Developer",
    company: "Delostyle Studio",
    period: "Apr 2023 — Present",
    location: "Kolkata, India",
    employmentType: "Full-time",
    highlights: [
      "Build and ship React.js and React Native applications for client products across web and mobile.",
      "Develop responsive interfaces and cross-platform experiences with a focus on performance and polish.",
      "Collaborate with design and product teams to deliver production-ready features on tight timelines.",
      "Integrate APIs, manage application state, and optimize load times across devices.",
    ],
    tags: [
      "React",
      "React Native",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
  {
    id: "freelance",
    role: "Full-Stack Developer",
    company: "Independent / Freelance",
    period: "2022 — Present",
    location: "Remote",
    employmentType: "Contract & freelance",
    highlights: [
      "Delivered end-to-end web and mobile solutions for startups and small businesses.",
      "Built portfolio sites, e-commerce flows, dashboards, and AI-integrated features.",
      "Handled deployment, hosting, and ongoing maintenance for client projects.",
    ],
    tags: ["Next.js", "MongoDB", "Vercel", "Expo", "Google Gemini", "Docker"],
  },
] as const;

export const education = [
  {
    id: "qspiders",
    degree: "Java Full Stack Development",
    school: "QSpiders",
    period: "2022",
    details:
      "Intensive training in Java, Spring Boot, React, and full-stack web development fundamentals.",
  },
] as const;

export const techStack = {
  frontend: ["React", "React Native", "TypeScript", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express", "REST APIs", "Java", "Spring Boot"],
  database: ["PostgreSQL", "MongoDB", "Redis", "SQLite"],
  tools: ["Git", "Docker", "GitHub Actions", "Vercel", "Figma"],
  ai: ["Google Gemini", "OpenAI API", "LLM Integration", "Prompt Engineering"],
} as const;

export const githubStats = [
  { label: "Public Repos", value: "12+" },
  { label: "Technologies", value: "20+" },
  { label: "Years Coding", value: "3+" },
  { label: "Projects Shipped", value: "15+" },
] as const;

export const featuredProjects = [
  {
    id: "intelli-react",
    index: "01",
    category: "Web App",
    name: "Intelli React AI",
    description:
      "Intelligent chat platform built with React and Google Gemini — fast AI responses, structured message rendering, and session persistence.",
    href: "https://github.com/Sudev0707",
    tags: ["React", "Gemini AI", "Vercel", "TypeScript"],
  },
  {
    id: "portfolio",
    index: "02",
    category: "Web App",
    name: "sudev.dev",
    description:
      "Personal portfolio and developer hub — TanStack Start, motion animations, and a focus on performance and craft.",
    href: "https://sudev.dev",
    tags: ["TanStack", "TypeScript", "Tailwind", "Motion"],
  },
  {
    id: "mobile-apps",
    index: "03",
    category: "Mobile App",
    name: "Mobile Applications",
    description:
      "Cross-platform React Native apps with native-quality navigation, offline support, and polished interaction details.",
    href: "https://github.com/Sudev0707",
    tags: ["React Native", "Expo", "TypeScript", "Firebase"],
  },
] as const;

export const workPrinciples = [
  "Write code that the next developer (including future me) can understand and extend.",
  "Measure what matters — performance, accessibility, and user outcomes over vanity metrics.",
  "Communicate early and often; the best products come from tight feedback loops.",
  "Ship iteratively. A working v1 beats a perfect plan that never launches.",
] as const;

export const interests = [
  "Open-source contribution",
  "Generative AI & LLM tooling",
  "Mobile UX patterns",
  "System design",
  "Developer experience",
  "Side projects",
] as const;

export const testimonials = [
  {
    title: "Shipped faster than we expected",
    body: "We needed a React Native MVP in weeks, not months. Sudev had a working build in days and we were iterating on real user feedback by the end of the first week. Clean code, clear communication — exactly what a small team needs.",
    name: "Project Collaborator",
    role: "Startup Founder",
  },
  {
    title: "Finally a developer who actually listens",
    body: "I'm not technical, and past devs made simple requests feel complicated. Sudev sent updates after every milestone and explained trade-offs in plain language. When we changed direction mid-project, he adjusted without drama and shipped something better.",
    name: "Client",
    role: "Product Team Lead",
  },
  {
    title: "Cares about the whole product, not just the ticket",
    body: "Hired him for a web redesign. He caught performance issues we didn't know we had and fixed mobile layout bugs on Safari without being asked. That's the kind of engineer you want — someone who treats your product like their own.",
    name: "Client",
    role: "E-commerce Founder",
  },
] as const;

export const quickFacts = [
  {
    label: "Flexible with timezones",
    value: "Based in India, available globally",
  },
  {
    label: "What you get",
    value: "Clean code, polished UI, deployed & maintained",
  },
  {
    label: "Collaboration",
    value: "Open communication, fast iterations, no surprises",
  },
] as const;
