"use client";

import { FileText, Download, Trash2 } from "lucide-react";
import { upperFiles } from "../lib/mockData";

export function UpperFiles() {
  return (
    <div className="glass-panel rounded-3xl p-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">Upper Files</h4>
        <span className="text-xs text-[var(--text-muted)]">View all</span>
      </div>
      <div className="mt-3 space-y-2">
        {upperFiles.map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs text-[var(--text-primary)]"
          >
            <div className="flex items-center gap-2">
              <FileText className="h-3.5 w-3.5 text-blue-200" />
              {file.name}
            </div>
            <div className="flex items-center gap-2 text-[var(--text-muted)]">
              <button type="button" aria-label="Delete file">
                <Trash2 className="h-3.5 w-3.5" />
              </button>
              <button type="button" aria-label="Download file">
                <Download className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
