"use client";

import { useState } from "react";

import type { Quiz } from "@/lib/platform/demo";

export function LessonQuiz({ quiz }: { quiz: Quiz }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const correctCount = quiz.questions.filter(
    (q) => answers[q.id] === q.correctIndex,
  ).length;
  const score = Math.round((correctCount / quiz.questions.length) * 100);

  return (
    <section className="rounded-2xl border border-accent/30 bg-accent/5 p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        Missão / quiz
      </p>
      <h2 className="mt-2 text-xl font-semibold text-white">{quiz.title}</h2>
      <p className="mt-2 text-sm text-slate-400">
        Responda para avançar com mais clareza no módulo.
      </p>

      <div className="mt-6 space-y-6">
        {quiz.questions.map((question, index) => (
          <div key={question.id}>
            <p className="text-sm font-medium text-white">
              {index + 1}. {question.prompt}
            </p>
            <div className="mt-3 space-y-2">
              {question.options.map((option, optionIndex) => {
                const selected = answers[question.id] === optionIndex;
                const isCorrect = question.correctIndex === optionIndex;
                const showResult = submitted;
                return (
                  <button
                    key={optionIndex}
                    type="button"
                    disabled={submitted}
                    onClick={() =>
                      setAnswers((current) => ({
                        ...current,
                        [question.id]: optionIndex,
                      }))
                    }
                    className={`block w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                      showResult && isCorrect
                        ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-100"
                        : showResult && selected && !isCorrect
                          ? "border-red-400/40 bg-red-500/10 text-red-100"
                          : selected
                            ? "border-accent bg-accent/10 text-white"
                            : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/25"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {!submitted ? (
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(answers).length < quiz.questions.length}
            className="rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-accent-ink disabled:opacity-50"
          >
            Enviar respostas
          </button>
        ) : (
          <p className="text-sm font-semibold text-accent">
            Resultado: {score}% ({correctCount}/{quiz.questions.length} certas)
          </p>
        )}
      </div>
    </section>
  );
}
