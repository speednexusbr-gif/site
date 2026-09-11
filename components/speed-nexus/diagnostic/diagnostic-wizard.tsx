"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { trackEvent } from "@/components/speed-nexus/analytics";
import { AlternatingWhatsAppLink } from "@/components/speed-nexus/alternating-whatsapp-link";

import {
  buildQuestions,
  buildResult,
  getInsight,
  type Answers,
  type DiagnosticResult,
} from "@/components/speed-nexus/diagnostic/diagnostic-engine";

export function DiagnosticWizard() {
  const [answers, setAnswers] = useState<Answers>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const questions = useMemo(() => buildQuestions(answers), [answers]);
  const currentQuestion = questions[Math.min(currentIndex, questions.length - 1)];
  const currentAnswer = answers[currentQuestion.id];
  const result = useMemo(() => buildResult(answers), [answers]);
  const progress = completed
    ? 100
    : Math.round(((currentIndex + (currentAnswer ? 1 : 0)) / questions.length) * 100);

  function selectAnswer(value: string) {
    setAnswers((current) => ({ ...current, [currentQuestion.id]: value }));
  }

  function goNext() {
    trackEvent("diagnostic_step_completed", {
      step: currentQuestion.id,
      answer: currentAnswer,
    });

    if (currentIndex >= questions.length - 1) {
      try {
        window.sessionStorage.setItem(
          "speednexus:diagnostic",
          JSON.stringify({ answers, result })
        );
      } catch {
        // Session context is optional for Nexa.
      }
      setCompleted(true);
      trackEvent("diagnostic_completed", {
        area: answers.area,
        level: result.level,
      });
      return;
    }

    setCurrentIndex((current) => current + 1);
  }

  function goBack() {
    if (completed) {
      setCompleted(false);
      return;
    }
    setCurrentIndex((current) => Math.max(0, current - 1));
  }

  return (
    <section
      id="diagnostico"
      className="bg-[linear-gradient(180deg,#f7f7fb_0%,#ffffff_100%)] py-20 sm:py-24"
      aria-labelledby="diagnostico-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase text-violet-700">
            Diagnóstico inicial gratuito
          </p>
          <h2
            id="diagnostico-title"
            className="mt-4 text-3xl font-semibold tracking-normal text-zinc-950 sm:text-5xl"
          >
            Vamos entender onde sua empresa pode estar perdendo eficiência.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Responda em poucos minutos. O resultado é uma leitura inicial, sem
            substituir uma análise aprofundada.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-[1fr_0.72fr]">
          <div className="rounded-[8px] border border-zinc-200 bg-white p-5 shadow-[0_18px_60px_rgba(24,24,27,0.08)] sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-violet-700">
                  {completed ? "Resultado" : currentQuestion.eyebrow}
                </p>
                <p className="mt-1 text-sm text-zinc-500">
                  {completed
                    ? "Diagnóstico inicial concluído"
                    : `Etapa ${currentIndex + 1} de ${questions.length}`}
                </p>
              </div>
              <div className="w-40">
                <Progress value={progress} className="bg-violet-100" />
              </div>
            </div>

            {!completed ? (
              <div className="mt-8">
                <h3 className="text-2xl font-semibold leading-tight text-zinc-950">
                  {currentQuestion.title}
                </h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {currentQuestion.options.map((option) => {
                    const selected = currentAnswer === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => selectAnswer(option)}
                        className="min-h-16 rounded-[8px] border border-zinc-200 bg-zinc-50 px-4 py-3 text-left text-base font-medium text-zinc-800 transition hover:border-violet-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 aria-pressed:border-violet-600 aria-pressed:bg-violet-50 aria-pressed:text-violet-950"
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={goBack}
                    disabled={currentIndex === 0}
                    className="border-zinc-300"
                  >
                    <ArrowLeft aria-hidden="true" />
                    Voltar
                  </Button>
                  <Button
                    type="button"
                    onClick={goNext}
                    disabled={!currentAnswer}
                    className="bg-violet-700 text-white hover:bg-violet-800"
                  >
                    {currentIndex >= questions.length - 1 ? "Ver resultado" : "Continuar"}
                    <ArrowRight aria-hidden="true" />
                  </Button>
                </div>
              </div>
            ) : (
              <DiagnosticResultView
                result={result}
                answers={answers}
                onBack={goBack}
              />
            )}
          </div>

          <aside className="rounded-[8px] border border-violet-200 bg-white p-6 shadow-[0_14px_45px_rgba(83,45,183,0.08)]">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-[8px] bg-violet-100 text-violet-800">
                <ClipboardCheck className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase text-violet-700">
                  Insight Speed Nexus
                </p>
                <p
                  key={getInsight(answers, currentQuestion)}
                  className="mt-3 animate-in fade-in slide-in-from-bottom-2 duration-500 text-base leading-7 text-zinc-700"
                >
                  {getInsight(answers, currentQuestion)}
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-zinc-200 pt-6">
              <p className="text-sm font-semibold text-zinc-950">
                O que acontece no fim?
              </p>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-zinc-600">
                <li>Você recebe um nível estimado de gargalo.</li>
                <li>Vê sinais que merecem atenção.</li>
                <li>Entende possíveis caminhos antes de pedir uma proposta.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function DiagnosticResultView({
  result,
  answers,
  onBack,
}: {
  result: DiagnosticResult;
  answers: Answers;
  onBack: () => void;
}) {
  return (
    <div className="mt-8">
      <div className="rounded-[8px] border border-violet-200 bg-violet-50 p-5">
        <p className="text-sm font-semibold uppercase text-violet-800">
          Seu diagnóstico inicial
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <ResultMetric label="Área principal" value={result.area} />
          <ResultMetric label="Nível estimado" value={result.level} />
          <ResultMetric label="Prioridade" value={result.priority} />
        </div>
        <div className="mt-5 h-3 overflow-hidden rounded-full bg-white">
          <div
            className="h-full rounded-full bg-violet-700 transition-all"
            style={{ width: `${result.score}%` }}
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <ResultList title="Sinais identificados" items={result.signals} />
        <ResultList title="Oportunidades preliminares" items={result.opportunities} />
      </div>

      <div className="mt-6 rounded-[8px] border border-zinc-200 bg-zinc-50 p-5">
        <p className="text-base font-semibold text-zinc-950">
          Próximos passos recomendados
        </p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-zinc-600">
          {result.nextSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="mt-4 flex gap-2 text-sm leading-6 text-zinc-600">
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-violet-700" aria-hidden="true" />
          Este é um diagnóstico inicial e não substitui uma análise aprofundada.
        </p>
      </div>

      <LeadCapture result={result} answers={answers} />

      <Button
        type="button"
        variant="outline"
        onClick={onBack}
        className="mt-5 border-zinc-300"
      >
        <ArrowLeft aria-hidden="true" />
        Revisar respostas
      </Button>
    </div>
  );
}

function ResultMetric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase text-violet-700">{label}</p>
      <p className="mt-1 text-lg font-semibold text-zinc-950">{value}</p>
    </div>
  );
}

function ResultList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[8px] border border-zinc-200 bg-white p-5">
      <p className="text-base font-semibold text-zinc-950">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.length ? (
          items.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-6 text-zinc-600">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-violet-700" aria-hidden="true" />
              {item}
            </li>
          ))
        ) : (
          <li className="text-sm text-zinc-600">
            Nenhum sinal crítico foi marcado nesta leitura inicial.
          </li>
        )}
      </ul>
    </div>
  );
}

function LeadCapture({
  result,
  answers,
}: {
  result: DiagnosticResult;
  answers: Answers;
}) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    whatsapp: "",
    email: "",
    consent: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const whatsappText = encodeURIComponent(
    `Olá, Speed Nexus. Fiz o diagnóstico inicial e quero conversar sobre ${result.area}.`
  );

  function updateField(field: keyof typeof form, value: string | boolean) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.consent) {
      setStatus("error");
      setMessage("Para enviar, confirme o consentimento de contato.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lead: form, answers, result }),
      });

      const payload = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(payload.message || "Não foi possível enviar agora.");
      }

      trackEvent("diagnostic_lead_submitted", {
        area: result.area,
        level: result.level,
      });
      setStatus("success");
      setMessage(
        payload.message ||
          "Diagnóstico enviado. A Speed Nexus poderá entrar em contato para aprofundar a análise."
      );
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar agora. Tente novamente em instantes."
      );
    }
  }

  return (
    <form
      onSubmit={submitLead}
      className="mt-6 rounded-[8px] border border-zinc-200 bg-white p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-base font-semibold text-zinc-950">
            Quer conversar sobre esse diagnóstico?
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Informe seus dados para a Speed Nexus retornar sobre esta análise
            inicial.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-zinc-800">
          Nome
          <Input
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-zinc-800">
          Empresa
          <Input
            required
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            autoComplete="organization"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-zinc-800">
          WhatsApp
          <Input
            required
            value={form.whatsapp}
            onChange={(event) => updateField("whatsapp", event.target.value)}
            autoComplete="tel"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-zinc-800">
          E-mail
          <Input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            autoComplete="email"
          />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-zinc-600">
        <Checkbox
          checked={form.consent}
          onCheckedChange={(checked) => updateField("consent", checked === true)}
          aria-label="Consentimento LGPD"
          className="mt-1"
        />
        <span>
          Autorizo o uso dos dados informados para contato sobre meu diagnóstico
          inicial, conforme a Política de Privacidade. O consentimento não vem
          marcado automaticamente.
        </span>
      </label>

      {message && (
        <p
          className={`mt-4 rounded-[8px] px-4 py-3 text-sm ${
            status === "success"
              ? "bg-emerald-50 text-emerald-800"
              : "bg-rose-50 text-rose-800"
          }`}
          role="status"
        >
          {message}
        </p>
      )}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Button
          type="submit"
          disabled={status === "loading"}
          className="bg-violet-700 text-white hover:bg-violet-800"
        >
          <Send aria-hidden="true" />
          {status === "loading" ? "Enviando..." : "Enviar diagnóstico"}
        </Button>
        <Button
          asChild
          type="button"
          variant="outline"
          className="border-zinc-300"
        >
          <AlternatingWhatsAppLink
            trackingPlacement="diagnostic_result"
            message={whatsappText}
          >
            <MessageCircle aria-hidden="true" />
            Falar pelo WhatsApp
          </AlternatingWhatsAppLink>
        </Button>
      </div>
    </form>
  );
}
