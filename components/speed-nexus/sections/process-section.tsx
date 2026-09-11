 
import { processSteps } from "@/components/speed-nexus/content";

export function ProcessSection() {
  return (
    <section
      id="como-funciona"
      className="bg-zinc-950 py-20 text-white sm:py-24"
      aria-labelledby="processo-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-violet-300">
            Como funciona
          </p>
          <h2
            id="processo-title"
            className="mt-4 text-3xl font-semibold tracking-normal sm:text-5xl"
          >
            Uma jornada completa para transformar gargalos em decisões práticas.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map(({ number, title, text, Icon }) => (
            <article
              key={number}
              className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-violet-300">
                  {number}
                </span>
                <Icon className="size-5 text-violet-300" aria-hidden="true" />
              </div>
              <h3 className="mt-8 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-zinc-300">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
