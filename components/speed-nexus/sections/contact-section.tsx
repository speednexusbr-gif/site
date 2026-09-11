 
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

import { contact } from "@/components/speed-nexus/content";
import { TrackedLink } from "@/components/speed-nexus/tracked-link";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="bg-zinc-950 py-20 text-white sm:py-24"
      aria-labelledby="contato-title"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-violet-300">
            Contato
          </p>
          <h2
            id="contato-title"
            className="mt-4 text-3xl font-semibold tracking-normal sm:text-5xl"
          >
            Converse com a Speed Nexus sobre o gargalo que está travando sua
            empresa.
          </h2>
        </div>
        <div className="grid gap-4">
          <TrackedLink
            event="whatsapp_clicked"
            payload={{ placement: "contact_primary" }}
            href={contact.whatsapps[0].href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-[8px] border border-white/10 bg-white/[0.06] p-5 text-white transition hover:border-violet-300/60 hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          >
            <span className="flex items-center gap-3">
              <MessageCircle className="size-5 text-violet-300" aria-hidden="true" />
              WhatsApp {contact.whatsapps[0].label}
            </span>
            <ArrowRight className="size-5" aria-hidden="true" />
          </TrackedLink>
          <TrackedLink
            event="whatsapp_clicked"
            payload={{ placement: "contact_secondary" }}
            href={contact.whatsapps[1].href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-[8px] border border-white/10 bg-white/[0.06] p-5 text-white transition hover:border-violet-300/60 hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          >
            <span className="flex items-center gap-3">
              <MessageCircle className="size-5 text-violet-300" aria-hidden="true" />
              WhatsApp {contact.whatsapps[1].label}
            </span>
            <ArrowRight className="size-5" aria-hidden="true" />
          </TrackedLink>
          <TrackedLink
            event="email_clicked"
            payload={{ placement: "contact" }}
            href={`mailto:${contact.email}`}
            className="flex items-center justify-between rounded-[8px] border border-white/10 bg-white/[0.06] p-5 text-white transition hover:border-violet-300/60 hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          >
            <span className="flex items-center gap-3">
              <Mail className="size-5 text-violet-300" aria-hidden="true" />
              {contact.email}
            </span>
            <ArrowRight className="size-5" aria-hidden="true" />
          </TrackedLink>
          <TrackedLink
            event="contact_clicked"
            payload={{ channel: "instagram" }}
            href={contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-[8px] border border-white/10 bg-white/[0.06] p-5 text-white transition hover:border-violet-300/60 hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          >
            <span className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                className="size-5 text-violet-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="18" height="18" x="3" y="3" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              {contact.instagramHandle}
            </span>
            <ArrowRight className="size-5" aria-hidden="true" />
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
