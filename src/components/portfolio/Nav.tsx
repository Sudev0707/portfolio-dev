export function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          <span>sudev.dev</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
