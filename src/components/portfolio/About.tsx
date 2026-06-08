import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>A pragmatic engineer with a designer's eye.</>}
    >
      <div className="grid gap-12 md:grid-cols-3">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-2">
          <p>
            For the last six years I've partnered with founders and product
            teams to ship software that holds up under real traffic — from
            zero-to-one MVPs to platforms serving millions of monthly users.
          </p>
          <p>
            My work sits at the intersection of <span className="text-foreground">product engineering</span>,{" "}
            <span className="text-foreground">infrastructure</span>, and{" "}
            <span className="text-foreground">design systems</span>. I care
            about the boring fundamentals: clean type, fast pages, predictable
            APIs, and code other people can read on a Monday morning.
          </p>
          <p>
            Currently based in Ho Chi Minh City, working remotely with teams
            across SEA, Europe, and the US.
          </p>
        </div>
        <div className="space-y-6 border-l border-border pl-8">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Currently</div>
            <div className="mt-1 text-sm text-foreground">Senior Engineer, Independent</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div>
            <div className="mt-1 text-sm text-foreground">Ho Chi Minh City, VN</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Focus</div>
            <div className="mt-1 text-sm text-foreground">Web platforms, DX, AI tooling</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
