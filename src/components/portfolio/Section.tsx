import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-6 bg-primary/70" />
            {eyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
