import profileImg from "@/assets/image/profileImg.png";
import { socialLinks } from "@/lib/profile";
import { cn } from "@/lib/utils";

const linkedInHref =
  socialLinks.find((link) => link.label === "LinkedIn")?.href ??
  "https://linkedin.com/in/sudevmajhi-dev";

type ProfileCardProps = {
  className?: string;
};

export function ProfileCard({ className }: ProfileCardProps) {
  return (
    <div
      className={cn(
        "w-full max-w-sm overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-lg",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[1.25rem] bg-secondary">
        {/* <p className="relative z-10 px-4 pt-5 text-center font-bricolage text-lg font-semibold tracking-tight text-foreground">
          Sudev Majhi
        </p> */}

        <div className="relative -mt-2 aspect-[3/3.5] w-full">
          <img
            src={profileImg}
            alt="Sudev Majhi"
            className="absolute inset-0 h-full w-full object-cover object-[center_15%]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 px-0.5">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={profileImg}
            alt=""
            aria-hidden
            className="size-10 shrink-0 rounded-full border border-border object-cover"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">
              @sudevmajhi-dev
            </p>
            <p className="text-xs text-muted-foreground">LinkedIn</p>
          </div>
        </div>

        <a
          href={linkedInHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center rounded-full bg-foreground px-2 py-1 text-sm font-medium text-background transition-[transform,background-color,color] duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#0A66C2] hover:text-white"
        >
          + Connect
        </a>
      </div>
    </div>
  );
}
