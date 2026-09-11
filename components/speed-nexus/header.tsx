"use client";

import { Menu, MessageCircle, SearchCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/components/speed-nexus/content";
import { SpeedNexusLogo } from "@/components/speed-nexus/logo";
import { trackEvent } from "@/components/speed-nexus/analytics";
import { AlternatingWhatsAppLink } from "@/components/speed-nexus/alternating-whatsapp-link";

const diagnosticHref = "#diagnostico";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/[0.88] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          aria-label="Speed Nexus - início"
          className="flex min-w-0 items-center"
        >
          <SpeedNexusLogo className="w-44 sm:w-52" compact />
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            asChild
            variant="outline"
            className="h-10 border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100"
          >
            <AlternatingWhatsAppLink trackingPlacement="header">
              <MessageCircle aria-hidden="true" />
              Falar com a Speed Nexus
            </AlternatingWhatsAppLink>
          </Button>
          <Button
            asChild
            className="h-10 bg-violet-700 text-white hover:bg-violet-800"
            onClick={() =>
              trackEvent("diagnostic_started", { placement: "header_cta" })
            }
          >
            <a href={diagnosticHref}>
              <SearchCheck aria-hidden="true" />
              Fazer diagnóstico
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Abrir menu"
              className="border-zinc-300 lg:hidden"
            >
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[min(92vw,380px)] border-zinc-200 bg-white">
            <SheetHeader className="px-0 text-left">
              <SpeedNexusLogo className="w-48" compact />
              <SheetTitle className="sr-only">Menu Speed Nexus</SheetTitle>
              <SheetDescription className="sr-only">
                Acesse as seções do site da Speed Nexus.
              </SheetDescription>
            </SheetHeader>
            <nav className="mt-4 grid gap-1" aria-label="Menu móvel">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-md px-3 py-3 text-base font-medium text-zinc-800 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-6 grid gap-3">
              <SheetClose asChild>
                <Button
                  asChild
                  className="bg-violet-700 text-white hover:bg-violet-800"
                  onClick={() =>
                    trackEvent("diagnostic_started", { placement: "mobile_menu" })
                  }
                >
                  <a href={diagnosticHref}>Fazer diagnóstico</a>
                </Button>
              </SheetClose>
              <Button
                asChild
                variant="outline"
                className="border-zinc-300"
              >
                <AlternatingWhatsAppLink trackingPlacement="mobile_menu">
                  Falar pelo WhatsApp
                </AlternatingWhatsAppLink>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
