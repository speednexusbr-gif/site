import { DiagnosticWizard } from "@/components/speed-nexus/diagnostic/diagnostic-wizard";
import { Footer } from "@/components/speed-nexus/footer";
import { Header } from "@/components/speed-nexus/header";
import { NexaAssistant } from "@/components/speed-nexus/nexa-assistant";
import { WebMcpTools } from "@/components/speed-nexus/webmcp-tools";
import {
  AboutSection,
  ContactSection,
  Differentials,
  FinalCTA,
  Hero,
  ProblemSection,
  ProcessSection,
  SolutionHub,
} from "@/components/speed-nexus/sections";
import { contact, siteUrl } from "@/components/speed-nexus/content";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Speed Nexus",
    url: siteUrl,
    email: contact.email,
    sameAs: [contact.instagramUrl],
    contactPoint: contact.whatsapps.map((item) => ({
      "@type": "ContactPoint",
      telephone: item.label,
      contactType: "customer support",
      availableLanguage: "Portuguese",
    })),
    description:
      "A Speed Nexus identifica gargalos empresariais, conecta a solução mais adequada e acompanha a implementação até os resultados.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ProcessSection />
        <SolutionHub />
        <Differentials />
        <DiagnosticWizard />
        <AboutSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <NexaAssistant />
      <WebMcpTools />
    </>
  );
}
