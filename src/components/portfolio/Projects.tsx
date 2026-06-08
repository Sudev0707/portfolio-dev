import { Section } from "./Section";

const projects = [
  {
    name: "Ledger OS",
    description:
      "Double-entry accounting platform built for SaaS finance teams. Real-time reconciliation across 12+ payment processors.",
    tags: ["TypeScript", "Postgres", "Next.js"],
    year: "2025",
    href: "#",
  },
  {
    name: "Northwind UI",
    description:
      "Open-source component library focused on data-dense applications — tables, command palettes, and keyboard-first flows.",
    tags: ["React", "Radix", "Design System"],
    year: "2024",
    href: "#",
  },
  {
    name: "Atlas Edge",
    description:
      "Globally distributed key-value store running on Cloudflare Workers. Sub-20ms reads from any continent.",
    tags: ["Rust", "Workers", "Infra"],
    year: "2024",
    href: "#",
  },
  {
    name: "Quill Editor",
    description:
      "A collaborative markdown editor with CRDT-powered offline-first sync and AI-assisted rewrites.",
    tags: ["TypeScript", "Yjs", "AI"],
    year: "2023",
    href: "#",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title={<>Projects I'm proud of.</>}
      description="A short list of recent work. More available on request."
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.href}
            className="group bg-card p-8 transition-colors hover:bg-card/60"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                {p.name}
              </h3>
              <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded border border-border px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors group-hover:text-primary">
              View case study
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
