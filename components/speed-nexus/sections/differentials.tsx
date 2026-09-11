 
import { differentials } from "@/components/speed-nexus/content";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="bg-zinc-50 py-20 sm:py-24"
      aria-labelledby="diferenciais-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-violet-700">
            Diferenciais
          </p>
          <h2
            id="diferenciais-title"
            className="mt-4 text-3xl font-semibold tracking-normal text-zinc-950 sm:text-5xl"
          >
            Um modelo para decidir melhor antes de investir em tecnologia.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map(({ title, text, Icon }) => (
            <article
              key={title}
              className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-[0_12px_32px_rgba(24,24,27,0.04)] transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_18px_45px_rgba(83,45,183,0.1)]"
            >
              <Icon className="size-6 text-violet-700" aria-hidden="true" />
              <h3 className="mt-6 text-xl font-semibold text-zinc-950">
                {title}
              </h3>
              <p className="mt-3 leading-7 text-zinc-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
