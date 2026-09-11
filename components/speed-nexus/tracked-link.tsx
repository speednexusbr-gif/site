"use client";

import type { ComponentProps } from "react";

import { trackEvent } from "@/components/speed-nexus/analytics";

type TrackedLinkProps = ComponentProps<"a"> & {
  event: string;
  payload?: Record<string, string | number | boolean | undefined>;
};

export function TrackedLink({
  event,
  payload,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(incident) => {
        trackEvent(event, payload);
        onClick?.(incident);
      }}
    >
      {children}
    </a>
  );
}
