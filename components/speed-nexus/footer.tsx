import Link from "next/link";

import { contact, navItems } from "@/components/speed-nexus/content";
import { SpeedNexusLogo } from "@/components/speed-nexus/logo";
import { TrackedLink } from "@/components/speed-nexus/tracked-link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <SpeedNexusLogo className="w-56" compact legacy />
          <p className="mt-5 max-w-md text-sm leading-6 text-zinc-600">
            A Speed Nexus identifica gargalos empresariais, conecta a solução
            mais adequada e acompanha a implementação até os resultados.
          </p>
        </div>
        <nav aria-label="Links institucionais" className="grid gap-3">
          <p className="text-sm font-semibold text-zinc-950">Institucional</p>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 transition hover:text-violet-700"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/privacidade"
            className="text-sm text-zinc-600 transition hover:text-violet-700"
          >
            Política de Privacidade
          </Link>
          <Link
            href="/termos"
            className="text-sm text-zinc-600 transition hover:text-violet-700"
          >
            Termos de Uso
          </Link>
        </nav>
        <div className="grid content-start gap-3">
          <p className="text-sm font-semibold text-zinc-950">Contato</p>
          <TrackedLink
            event="email_clicked"
            payload={{ placement: "footer" }}
            href={`mailto:${contact.email}`}
            className="text-sm text-zinc-600 transition hover:text-violet-700"
          >
            {contact.email}
          </TrackedLink>
          {contact.whatsapps.map((item, index) => (
            <TrackedLink
              key={item.href}
              event="whatsapp_clicked"
              payload={{ placement: "footer", phone: index + 1 }}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-600 transition hover:text-violet-700"
            >
              WhatsApp {item.label}
            </TrackedLink>
          ))}
          <TrackedLink
            event="contact_clicked"
            payload={{ channel: "instagram", placement: "footer" }}
            href={contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-600 transition hover:text-violet-700"
          >
            Instagram {contact.instagramHandle}
          </TrackedLink>
          <p className="pt-4 text-xs text-zinc-500">
            © {new Date().getFullYear()} Speed Nexus. LGPD: dados usados apenas
            para contato e continuidade do diagnóstico.
          </p>
        </div>
      </div>
    </footer>
  );
}
