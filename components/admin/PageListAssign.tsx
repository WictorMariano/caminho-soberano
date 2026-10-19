"use client";

import { useState } from "react";

import type { CaptureList, CapturePage } from "@/lib/platform/demo";

export function PageListAssign({
  pages,
  lists,
}: {
  pages: CapturePage[];
  lists: CaptureList[];
}) {
  const [rows, setRows] = useState(pages);
  const [savedId, setSavedId] = useState<string | null>(null);

  function assign(pageId: string, listId: string) {
    setRows((current) =>
      current.map((page) =>
        page.id === pageId ? { ...page, listId } : page,
      ),
    );
    setSavedId(pageId);
    window.setTimeout(() => setSavedId((id) => (id === pageId ? null : id)), 1800);
  }

  return (
    <div className="space-y-3">
      {rows.map((page) => (
        <div
          key={page.id}
          className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#081a2e] px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-semibold text-white">{page.title}</p>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                  page.status === "ativa"
                    ? "bg-accent/20 text-accent"
                    : "bg-white/10 text-slate-400"
                }`}
              >
                {page.status}
              </span>
              {savedId === page.id ? (
                <span className="text-xs text-accent">Lista atualizada (demo)</span>
              ) : null}
            </div>
            <p className="mt-1 text-sm text-slate-500">
              {page.path} · {page.signups} cadastros
            </p>
          </div>
          <label className="text-xs text-slate-400">
            Atribuir lista
            <select
              className="mt-1.5 block w-full min-w-[220px] rounded-xl border border-white/15 bg-[#061426] px-3 py-2.5 text-sm text-white outline-none focus:border-accent"
              value={page.listId}
              onChange={(event) => assign(page.id, event.target.value)}
            >
              {lists.map((list) => (
                <option key={list.id} value={list.id}>
                  {list.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      ))}
    </div>
  );
}
