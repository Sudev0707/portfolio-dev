import { Section } from "./Section";

const groups = [
  {
    label: "Languages",
    items: ["TypeScript", "Go", "Python", "Rust", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TanStack", "Tailwind", "Radix UI", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "PostgreSQL", "Redis", "tRPC", "GraphQL", "gRPC"],
  },
  {
    label: "Infrastructure",
    items: ["AWS", "Cloudflare", "Docker", "Terraform", "GitHub Actions"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>Tools I reach for, daily.</>}
      description="A modern stack chosen for stability, speed, and developer leverage — not novelty."
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
        {groups.map((g) => (
          <div key={g.label} className="bg-card p-8">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              {g.label}
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="rounded-md border border-border bg-background/40 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
