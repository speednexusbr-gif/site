/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  compact?: boolean;
  legacy?: boolean;
};

export function SpeedNexusLogo({
  className,
  compact = false,
  legacy = false,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src={legacy ? "/speed-nexus-logo-trimmed.png" : "/speed-nexus-logo-new.png"}
        alt="Speed Nexus"
        width={1168}
        height={701}
        className={cn(
          "h-auto w-full object-contain mix-blend-multiply",
          compact && "max-h-12"
        )}
      />
    </span>
  );
}
