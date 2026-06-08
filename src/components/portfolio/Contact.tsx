export function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-px w-6 bg-primary/70" />
          Contact
          <span className="h-px w-6 bg-primary/70" />
        </div>
        <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          Have a project in mind? <span className="accent-text">Let's talk.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          I'm taking on a small number of new engagements this quarter. The
          best way to reach me is email — I reply within 24 hours.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@sudev.dev"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
          >
            hello@sudev.dev
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Schedule a call
          </a>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">GitHub</a>
          <span className="h-1 w-1 rounded-full bg-border" />
          <a href="#" className="transition-colors hover:text-foreground">LinkedIn</a>
          <span className="h-1 w-1 rounded-full bg-border" />
          <a href="#" className="transition-colors hover:text-foreground">X / Twitter</a>
          <span className="h-1 w-1 rounded-full bg-border" />
          <a href="#" className="transition-colors hover:text-foreground">Read.cv</a>
        </div>
      </div>
      <footer className="mx-auto mt-24 max-w-6xl border-t border-border px-6 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© 2026 Chánh Đại. Crafted with care.</span>
          <span className="font-mono">v1.0 · Built with TanStack Start</span>
        </div>
      </footer>
    </section>
  );
}
