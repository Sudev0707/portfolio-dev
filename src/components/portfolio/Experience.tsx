import { Section } from "./Section";

const roles = [
  {
    role: "Senior Software Engineer",
    company: "Independent",
    period: "2024 — Present",
    desc: "Partnering with venture-backed startups on platform engineering, design systems, and AI integration.",
  },
  {
    role: "Staff Engineer",
    company: "Lattice Labs",
    period: "2022 — 2024",
    desc: "Led the migration of a monolithic Rails app to a typed TypeScript service architecture. Cut p95 latency by 62%.",
  },
  {
    role: "Senior Frontend Engineer",
    company: "Northwind",
    period: "2020 — 2022",
    desc: "Built the design system and core dashboard surfaces used by 200k+ daily active users.",
  },
  {
    role: "Software Engineer",
    company: "Foundry",
    period: "2018 — 2020",
    desc: "Shipped internal tooling for data ops teams. First exposure to large-scale React and distributed systems.",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Where I've worked.</>}
    >
      <ol className="relative border-l border-border pl-8">
        {roles.map((r, i) => (
          <li key={i} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[33px] top-1.5 h-2 w-2 rounded-full bg-primary ring-4 ring-background" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold text-foreground">{r.role}</h3>
                <div className="mt-0.5 text-sm text-muted-foreground">{r.company}</div>
              </div>
              <span className="font-mono text-xs text-muted-foreground">{r.period}</span>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {r.desc}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
