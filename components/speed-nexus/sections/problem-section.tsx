 
import { problemSignals } from "@/components/speed-nexus/content";

export function ProblemSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="problema-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-violet-700">
            O problema
          </p>
          <h2
            id="problema-title"
            className="mt-4 text-3xl font-semibold tracking-normal text-zinc-950 sm:text-5xl"
          >
            Sua empresa está perdendo tempo onde não deveria?
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Nem todo gargalo precisa de um software novo. Primeiro é preciso
            entender onde o processo trava, por que ele trava e qual intervenção
            faz sentido para a realidade da empresa.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {problemSignals.map((item) => (
            <div
              key={item}
              className="rounded-[8px] border border-zinc-200 bg-zinc-50 p-5 transition hover:border-violet-200 hover:bg-white hover:shadow-[0_14px_35px_rgba(24,24,27,0.07)]"
            >
              <span className="mb-4 block h-1 w-10 rounded-full bg-violet-600" />
              <p className="text-base font-semibold text-zinc-900">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
