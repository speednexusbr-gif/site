"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BotMessageSquare,
  Loader2,
  MessageCircle,
  RotateCcw,
  Send,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { trackEvent } from "@/components/speed-nexus/analytics";
import { getLocalNexaAnswer } from "@/components/speed-nexus/nexa-knowledge";
import { AlternatingWhatsAppLink } from "@/components/speed-nexus/alternating-whatsapp-link";

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
};

const introMessage: ChatMessage = {
  role: "assistant",
  content:
    "Olá, sou a Nexa, assistente virtual da Speed Nexus. Posso ajudar você a entender melhor nossos serviços ou começar um diagnóstico.",
};

const quickActions = [
  "O que a Speed Nexus faz?",
  "Como funciona o diagnóstico?",
  "Quero começar o diagnóstico",
];

const AI_SESSION_LIMIT = 15;
const INPUT_LIMIT = 500;

export function NexaAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([introMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [allowContext, setAllowContext] = useState(false);
  const [diagnosticContext, setDiagnosticContext] = useState<unknown>(null);
  const messageListRef = useRef<HTMLDivElement>(null);
  const canSend = input.trim().length > 0 && !loading;

  function readDiagnosticContext() {
    try {
      const raw = window.sessionStorage.getItem("speednexus:diagnostic");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function openAssistant() {
    setDiagnosticContext(readDiagnosticContext());
    setOpen(true);
    trackEvent("nexa_opened");
  }

  useEffect(() => {
    messageListRef.current?.scrollTo({
      top: messageListRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  const canUseContext = useMemo(
    () => Boolean(diagnosticContext),
    [diagnosticContext]
  );

  function openDiagnostic() {
    trackEvent("diagnostic_started", { placement: "nexa" });
    setOpen(false);
    document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
  }

  async function sendMessage(content: string) {
    const cleanContent = content.trim().slice(0, INPUT_LIMIT);
    if (!cleanContent || loading) return;

    const localAnswer = getLocalNexaAnswer(cleanContent);
    if (localAnswer) {
      setMessages((current) => [
        ...current,
        { role: "user", content: cleanContent },
        { role: "assistant", content: localAnswer.reply },
      ]);
      setInput("");
      setError("");
      trackEvent("nexa_local_answer");
      if (localAnswer.action === "diagnostic") {
        window.setTimeout(openDiagnostic, 900);
      } else if (localAnswer.action) {
        document
          .getElementById(localAnswer.action === "process" ? "como-funciona" : localAnswer.action === "differentials" ? "diferenciais" : localAnswer.action === "contact" ? "contato" : "solucoes")
          ?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    const aiUsage = Number(window.sessionStorage.getItem("speednexus:nexa-ai-usage") || "0");
    if (aiUsage >= AI_SESSION_LIMIT) {
      setMessages((current) => [
        ...current,
        { role: "user", content: cleanContent },
        {
          role: "assistant",
          content:
            "Atingimos o limite de perguntas personalizadas desta sessão. As respostas rápidas continuam disponíveis; para uma orientação específica, fale com a equipe pelo WhatsApp ou reinicie o navegador mais tarde.",
        },
      ]);
      setInput("");
      return;
    }

    const nextMessages = [...messages, { role: "user", content: cleanContent } as ChatMessage];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setLoading(true);
    trackEvent("nexa_message_sent");

    try {
      const response = await fetch("/api/nexa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.slice(-6),
          diagnosticContext: allowContext ? diagnosticContext : null,
        }),
      });
      const payload = (await response.json()) as { reply?: string; message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "A Nexa não conseguiu responder agora.");
      }

      window.sessionStorage.setItem("speednexus:nexa-ai-usage", String(aiUsage + 1));

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            payload.reply ||
            "Não consegui gerar uma resposta agora. Tente novamente em instantes.",
        },
      ]);
    } catch (incident) {
      setError(
        incident instanceof Error
          ? incident.message
          : "A Nexa não conseguiu responder agora."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label="Abrir assistente Nexa"
        onClick={openAssistant}
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-[8px] bg-zinc-950 text-white shadow-[0_16px_42px_rgba(24,24,27,0.22)] transition hover:-translate-y-0.5 hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
      >
        <NexaAvatar state="idle" />
      </button>

      {open && (
        <section
          aria-label="Assistente virtual Nexa"
          className="fixed inset-x-3 bottom-3 z-50 mx-auto flex max-h-[calc(100vh-24px)] max-w-[420px] flex-col overflow-hidden rounded-[8px] border border-zinc-200 bg-white shadow-[0_24px_80px_rgba(24,24,27,0.22)] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:w-[420px]"
        >
          <header className="flex items-center justify-between gap-4 border-b border-zinc-200 px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-[8px] bg-zinc-950 text-white">
                <NexaAvatar state={loading ? "thinking" : "idle"} />
              </span>
              <div>
                <h2 className="text-base font-semibold text-zinc-950">Nexa</h2>
                <p className="text-xs text-zinc-500">
                  Assistente digital da Speed Nexus
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Fechar assistente Nexa"
              onClick={() => setOpen(false)}
            >
              <X aria-hidden="true" />
            </Button>
          </header>

          <div
            ref={messageListRef}
            className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-zinc-50 px-4 py-4"
          >
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[88%] rounded-[8px] px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "bg-violet-700 text-white"
                      : "border border-zinc-200 bg-white text-zinc-700"
                  }`}
                >
                  {message.content}
                </p>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <p className="inline-flex items-center gap-2 rounded-[8px] border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-600">
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  Nexa está analisando...
                </p>
              </div>
            )}
          </div>

          <div className="border-t border-zinc-200 bg-white p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickActions.map((action) => (
                <button
                  key={action}
                  type="button"
                  onClick={() => sendMessage(action)}
                  className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 transition hover:border-violet-200 hover:text-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                >
                  {action}
                </button>
              ))}
            </div>

            {canUseContext && (
              <label className="mb-3 flex items-start gap-2 text-xs leading-5 text-zinc-600">
                <Checkbox
                  checked={allowContext}
                  onCheckedChange={(checked) => setAllowContext(checked === true)}
                  aria-label="Autorizar uso do diagnóstico nesta conversa"
                  className="mt-0.5"
                />
                <span>Usar meu diagnóstico desta sessão para contextualizar a resposta.</span>
              </label>
            )}

            {error && (
              <div className="mb-3 rounded-[8px] bg-rose-50 px-3 py-2 text-sm text-rose-800">
                <p>{error}</p>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="mt-1 h-8 px-2 text-rose-800 hover:bg-rose-100"
                  onClick={() => sendMessage(messages[messages.length - 1]?.content ?? "")}
                >
                  <RotateCcw aria-hidden="true" />
                  Tentar novamente
                </Button>
              </div>
            )}

            <form
              className="grid gap-3"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage(input);
              }}
            >
              <Textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Digite sua dúvida sobre a Speed Nexus"
                className="max-h-32 min-h-20 resize-none border-zinc-300"
                aria-label="Mensagem para a Nexa"
                maxLength={INPUT_LIMIT}
              />
              <p className="-mt-2 text-right text-[11px] text-zinc-400">
                {input.length}/{INPUT_LIMIT}
              </p>
              <div className="flex items-center justify-between gap-3">
                <AlternatingWhatsAppLink
                  trackingPlacement="nexa_whatsapp"
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-violet-700"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp
                </AlternatingWhatsAppLink>
                <Button
                  type="submit"
                  disabled={!canSend}
                  className="bg-violet-700 text-white hover:bg-violet-800"
                >
                  <Send aria-hidden="true" />
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

function NexaAvatar({ state }: { state: "idle" | "thinking" }) {
  return (
    <span
      className={`relative flex size-8 items-center justify-center rounded-[8px] border border-white/15 bg-white/10 ${
        state === "thinking" ? "animate-pulse" : ""
      }`}
      aria-hidden="true"
    >
      <BotMessageSquare className="size-4 text-violet-200" />
      <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-violet-300" />
      <span className="absolute bottom-1.5 left-1.5 size-1 rounded-full bg-white/70" />
      <ArrowRight className="absolute -right-1 -top-1 size-3 text-violet-300" />
    </span>
  );
}
