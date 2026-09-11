/* eslint-disable @next/next/no-img-element */
import { ArrowRight, MoveRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  const flow = ["Problema", "Diagnóstico", "Solução", "Execução", "Resultado"];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7f7fb_74%,#ffffff_100%)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-14 mx-auto h-56 max-w-5xl opacity-[0.055] sm:h-72">
        <img
          src="/speed-nexus-logo-new.png"
          alt=""
          width={1168}
          height={701}
          aria-hidden="true"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-md border border-violet-200 bg-white/80 px-3 py-2 text-sm font-semibold text-violet-800 shadow-sm">
            <ShieldCheck className="size-4" aria-hidden="true" />
            Consultoria, softwares e resultados
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-normal text-zinc-950 sm:text-5xl lg:text-7xl">
            Identificamos gargalos. Conectamos soluções. Acompanhamos
            resultados.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-8 text-zinc-600 sm:text-xl">
            A Speed Nexus entende o problema da sua empresa, encontra o caminho
            mais adequado e coordena a solução, da análise à implementação.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 bg-violet-700 px-6 text-base text-white hover:bg-violet-800"
            >
              <a href="#diagnostico">
                Fazer diagnóstico gratuito
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-zinc-300 bg-white px-6 text-base text-zinc-900 hover:bg-zinc-100"
            >
              <a href="#sobre">Conhecer a Speed Nexus</a>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-6xl">
          <div className="grid gap-3 sm:grid-cols-5">
            {flow.map((item, index) => (
              <div
                key={item}
                className="group relative min-h-28 rounded-[8px] border border-zinc-200 bg-white p-4 shadow-[0_14px_40px_rgba(24,24,27,0.06)] transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_18px_50px_rgba(83,45,183,0.12)]"
              >
                <span className="text-xs font-semibold uppercase text-violet-700">
                  0{index + 1}
                </span>
                <p className="mt-5 text-lg font-semibold text-zinc-950">
                  {item}
                </p>
                {index < flow.length - 1 && (
                  <MoveRight
                    className="absolute -right-5 top-1/2 z-10 hidden size-6 -translate-y-1/2 text-violet-400 sm:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
