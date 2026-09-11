import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://speednexus.com.br"),
  title: {
    default: "Speed Nexus | Soluções para Gargalos Empresariais",
    template: "%s | Speed Nexus",
  },
  description:
    "A Speed Nexus identifica gargalos empresariais, conecta a solução mais adequada e acompanha a implementação até os resultados.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Speed Nexus | Soluções para Gargalos Empresariais",
    description:
      "Diagnóstico antes da solução: entendemos o problema da sua empresa, conectamos o caminho adequado e acompanhamos a execução.",
    url: "https://speednexus.com.br",
    siteName: "Speed Nexus",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Speed Nexus | Soluções para Gargalos Empresariais",
    description:
      "A Speed Nexus identifica gargalos empresariais, conecta soluções e acompanha resultados.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
