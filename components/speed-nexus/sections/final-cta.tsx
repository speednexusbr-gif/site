 
import { Button } from "@/components/ui/button";
import { AlternatingWhatsAppLink } from "@/components/speed-nexus/alternating-whatsapp-link";

export function FinalCTA() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="cta-title">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="cta-title"
          className="text-balance text-3xl font-semibold tracking-normal text-zinc-950 sm:text-5xl"
        >
          Todo gargalo tem um custo. O primeiro passo é descobrir onde ele está.
        </h2>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 bg-violet-700 px-6 text-base text-white hover:bg-violet-800"
          >
            <a href="#diagnostico">Fazer meu diagnóstico</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-zinc-300 bg-white px-6 text-base text-zinc-900 hover:bg-zinc-100"
          >
            <AlternatingWhatsAppLink trackingPlacement="final_cta">
              Falar com a Speed Nexus
            </AlternatingWhatsAppLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
