"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

import { trackEvent } from "@/components/speed-nexus/analytics";
import { contact } from "@/components/speed-nexus/content";

type AlternatingWhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  trackingPlacement: string;
  message?: string;
};

const storageKey = "speednexus:whatsapp-turn";

function getNextWhatsAppHref() {
  try {
    const currentTurn = Number(window.localStorage.getItem(storageKey) || "0");
    const safeTurn = Number.isFinite(currentTurn) ? currentTurn : 0;
    const contactIndex = Math.abs(safeTurn) % contact.whatsapps.length;

    window.localStorage.setItem(storageKey, String(safeTurn + 1));
    return contact.whatsapps[contactIndex].href;
  } catch {
    return contact.whatsapps[0].href;
  }
}

export function AlternatingWhatsAppLink({
  trackingPlacement,
  message,
  onClick,
  ...props
}: AlternatingWhatsAppLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const baseHref = getNextWhatsAppHref();
    event.currentTarget.href = message
      ? `${baseHref}?text=${encodeURIComponent(message)}`
      : baseHref;
    trackEvent("whatsapp_clicked", {
      placement: trackingPlacement,
      distribution: "alternating",
    });
    onClick?.(event);
  }

  return (
    <a
      {...props}
      href={contact.whatsapps[0].href}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
    />
  );
}
