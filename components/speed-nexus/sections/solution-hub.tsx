 
import { solutionModes } from "@/components/speed-nexus/content";
import { SpeedNexusLogo } from "@/components/speed-nexus/logo";

export function SolutionHub() {
  return (
    <section
      id="solucoes"
      className="bg-white py-20 sm:py-24"
      aria-labelledby="hub-title"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-violet-700">
            Solução certa
          </p>
          <h2
            id="hub-title"
            className="mt-4 text-3xl font-semibold tracking-normal text-zinc-950 sm:text-5xl"
          >
            A solução certa nem sempre precisa ser criada do zero.
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            A Speed Nexus atua como ponto de conexão: pode desenvolver, integrar,
            automatizar, implementar uma ferramenta existente, conectar
            especialistas ou combinar diferentes soluções.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex min-h-56 items-center justify-center rounded-[8px] border border-violet-200 bg-[radial-gradient(circle_at_center,#ede9fe_0,#ffffff_58%)] p-8 sm:col-span-2">
            <div className="text-center">
              <SpeedNexusLogo className="mx-auto w-60 max-w-full" />
              <p className="mt-5 text-sm font-semibold uppercase text-violet-700">
                Orquestração empresarial
              </p>
            </div>
          </div>
          {solutionModes.map(({ title, Icon }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-[8px] border border-zinc-200 bg-zinc-50 p-5 transition hover:border-violet-200 hover:bg-white"
            >
              <span className="flex size-10 items-center justify-center rounded-[8px] bg-violet-100 text-violet-800">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="font-semibold text-zinc-900">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
