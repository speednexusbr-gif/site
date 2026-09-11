 

export function AboutSection() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-24" aria-labelledby="sobre-title">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-violet-700">
            Sobre
          </p>
          <h2
            id="sobre-title"
            className="mt-4 text-3xl font-semibold tracking-normal text-zinc-950 sm:text-5xl"
          >
            Uma startup em construção, focada em resolver gargalos reais.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-zinc-600">
          <p>
            A Speed Nexus nasce para apoiar pequenas empresas que precisam
            organizar processos, integrar ferramentas, usar melhor seus dados e
            transformar decisões em execução.
          </p>
          <p>
            A tecnologia é tratada como meio, não como obrigação. O ponto de
            partida é entender o problema e escolher a intervenção mais adequada
            para gerar clareza, controle e avanço prático.
          </p>
        </div>
      </div>
    </section>
  );
}
