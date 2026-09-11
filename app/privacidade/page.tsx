import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/speed-nexus/footer";
import { Header } from "@/components/speed-nexus/header";
import { contact } from "@/components/speed-nexus/content";

export const metadata: Metadata = {
  title: "Política de Privacidade | Speed Nexus",
  description:
    "Estrutura inicial de privacidade e LGPD para o site da Speed Nexus.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <Link href="/" className="text-sm font-semibold text-violet-700">
            Voltar ao site
          </Link>
          <h1 className="mt-6 text-4xl font-semibold tracking-normal text-zinc-950">
            Política de Privacidade
          </h1>
          <p className="mt-4 text-zinc-600">
            Esta é uma estrutura inicial de privacidade e LGPD, não um
            aconselhamento jurídico definitivo.
          </p>
          <div className="mt-10 space-y-8 text-zinc-700">
            <section>
              <h2 className="text-xl font-semibold text-zinc-950">Dados coletados</h2>
              <p className="mt-3 leading-7">
              O diagnóstico inicial pode coletar respostas sobre a empresa,
              nome, empresa, WhatsApp e e-mail, sempre após consentimento do
              visitante.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-zinc-950">Finalidade</h2>
              <p className="mt-3 leading-7">
              Os dados são usados para retornar o contato, compreender o
              diagnóstico inicial e avaliar próximos passos com a Speed Nexus.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-zinc-950">Assistente Nexa</h2>
              <p className="mt-3 leading-7">
              A Nexa pode usar o contexto do diagnóstico somente quando o
              visitante autorizar durante a sessão. A assistente não deve pedir
              senhas, dados bancários ou dados pessoais desnecessários.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-zinc-950">Contato sobre privacidade</h2>
              <p className="mt-3 leading-7">
              Para dúvidas ou solicitações relacionadas aos dados, entre em
              contato pelo e-mail{" "}
              <a className="font-medium text-violet-700" href={`mailto:${contact.email}`}>{contact.email}</a>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
