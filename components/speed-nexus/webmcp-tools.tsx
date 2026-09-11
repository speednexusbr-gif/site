"use client";

import { useEffect } from "react";

import { trackEvent } from "@/components/speed-nexus/analytics";

type WebMcpTool = {
  name: string;
  title?: string;
  description: string;
  inputSchema: object;
  annotations?: {
    readOnlyHint?: boolean;
    untrustedContentHint?: boolean;
  };
  execute(input: unknown): unknown | Promise<unknown>;
};

declare global {
  interface Document {
    modelContext?: {
      registerTool(
        tool: WebMcpTool,
        options?: { signal?: AbortSignal }
      ): void | Promise<void>;
    };
  }
}

export function WebMcpTools() {
  useEffect(() => {
    const context = document.modelContext;
    if (!context?.registerTool) return;

    const lifecycle = new AbortController();

    const register = async () => {
      await context.registerTool(
        {
          name: "start_diagnostic",
          title: "Iniciar diagnóstico",
          description:
            "Abre a seção de diagnóstico inicial gratuito da Speed Nexus na página atual. Não envia dados nem conclui o formulário.",
          inputSchema: {
            type: "object",
            properties: {},
            additionalProperties: false,
          },
          annotations: {
            readOnlyHint: false,
            untrustedContentHint: false,
          },
          execute(input) {
            if (
              !input ||
              typeof input !== "object" ||
              Array.isArray(input) ||
              Object.keys(input).length > 0
            ) {
              throw new Error("start_diagnostic não aceita parâmetros.");
            }

            document
              .getElementById("diagnostico")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
            trackEvent("diagnostic_started", { placement: "webmcp" });

            return {
              status: "opened",
              target: "#diagnostico",
            };
          },
        },
        { signal: lifecycle.signal }
      );
    };

    register().catch(() => undefined);
    return () => lifecycle.abort();
  }, []);

  return null;
}
