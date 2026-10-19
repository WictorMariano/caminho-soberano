"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

type DraftQuestion = {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
};

export function QuizBuilderDemo({
  lessons,
}: {
  lessons: { id: string; title: string; courseTitle: string }[];
}) {
  const [title, setTitle] = useState("Novo quiz do módulo");
  const [lessonId, setLessonId] = useState(lessons[0]?.id ?? "");
  const [questions, setQuestions] = useState<DraftQuestion[]>([
    {
      id: "dq1",
      prompt: "Pergunta de exemplo: o que é autocustódia?",
      options: ["Opção A", "Opção B", "Opção C", "Opção D"],
      correctIndex: 1,
    },
  ]);
  const [saved, setSaved] = useState(false);

  function addQuestion() {
    setQuestions((current) => [
      ...current,
      {
        id: `dq${current.length + 1}`,
        prompt: "",
        options: ["", "", "", ""],
        correctIndex: 0,
      },
    ]);
  }

  function removeQuestion(id: string) {
    setQuestions((current) => current.filter((q) => q.id !== id));
  }

  return (
    <div className="space-y-6 rounded-2xl border border-white/10 bg-[#081a2e] p-5 md:p-6">
      <div>
        <h2 className="text-lg font-semibold">Construtor de quiz</h2>
        <p className="mt-1 text-sm text-slate-400">
          Monte perguntas e ligue a uma aula. Nesta demo a gravação fica só na
          tela; depois isso vai para o banco.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-xs text-slate-400">
          Título do quiz
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#061426] px-3 py-2.5 text-sm text-white outline-none focus:border-accent"
          />
        </label>
        <label className="text-xs text-slate-400">
          Aula vinculada
          <select
            value={lessonId}
            onChange={(e) => setLessonId(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#061426] px-3 py-2.5 text-sm text-white outline-none focus:border-accent"
          >
            {lessons.map((lesson) => (
              <option key={lesson.id} value={lesson.id}>
                {lesson.courseTitle} · {lesson.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="space-y-4">
        {questions.map((question, index) => (
          <div
            key={question.id}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Pergunta {index + 1}
              </p>
              <button
                type="button"
                onClick={() => removeQuestion(question.id)}
                className="text-slate-400 hover:text-red-300"
                aria-label="Remover pergunta"
              >
                <Trash2 size={16} />
              </button>
            </div>
            <input
              value={question.prompt}
              onChange={(e) =>
                setQuestions((current) =>
                  current.map((q) =>
                    q.id === question.id ? { ...q, prompt: e.target.value } : q,
                  ),
                )
              }
              placeholder="Enunciado da pergunta"
              className="mt-3 w-full rounded-xl border border-white/15 bg-[#061426] px-3 py-2.5 text-sm text-white outline-none focus:border-accent"
            />
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {question.options.map((option, optionIndex) => (
                <label
                  key={optionIndex}
                  className="flex items-center gap-2 text-xs text-slate-400"
                >
                  <input
                    type="radio"
                    name={`correct-${question.id}`}
                    checked={question.correctIndex === optionIndex}
                    onChange={() =>
                      setQuestions((current) =>
                        current.map((q) =>
                          q.id === question.id
                            ? { ...q, correctIndex: optionIndex }
                            : q,
                        ),
                      )
                    }
                  />
                  <input
                    value={option}
                    onChange={(e) =>
                      setQuestions((current) =>
                        current.map((q) =>
                          q.id === question.id
                            ? {
                                ...q,
                                options: q.options.map((opt, i) =>
                                  i === optionIndex ? e.target.value : opt,
                                ),
                              }
                            : q,
                        ),
                      )
                    }
                    placeholder={`Opção ${optionIndex + 1}`}
                    className="w-full rounded-lg border border-white/10 bg-[#061426] px-2.5 py-2 text-sm text-white outline-none focus:border-accent"
                  />
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={addQuestion}
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm text-slate-200 hover:border-accent hover:text-accent"
        >
          <Plus size={16} /> Adicionar pergunta
        </button>
        <button
          type="button"
          onClick={() => {
            setSaved(true);
            window.setTimeout(() => setSaved(false), 2000);
          }}
          className="rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-accent-ink hover:brightness-95"
        >
          Salvar quiz (demo)
        </button>
        {saved ? (
          <span className="self-center text-sm text-accent">
            Quiz salvo na demonstração.
          </span>
        ) : null}
      </div>
    </div>
  );
}
