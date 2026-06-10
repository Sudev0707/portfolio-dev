import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

type GridSmallBackgroundProps = {
  className?: string;
  children: ReactNode;
};

export function GridSmallBackground({
  className,
  children,
}: GridSmallBackgroundProps) {
  return (
    <div className={cn("relative w-full bg-background", className)}>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,oklch(1_0_0/0.06)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.06)_1px,transparent_1px)]",
        )}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
