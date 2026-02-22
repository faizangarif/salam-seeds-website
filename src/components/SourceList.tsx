import Link from "next/link";

export type Citation = {
  url: string;
  title?: string | null;
};

export function SourceList({ citations }: { citations: Citation[] }) {
  if (!citations?.length) return null;

  return (
    <div className="mt-3 rounded-xl border border-border bg-surface/70 p-3">
      <div className="text-xs font-bold text-text">Sources</div>
      <ul className="mt-2 space-y-1 text-xs text-muted">
        {citations.map((c) => (
          <li key={c.url} className="break-words">
            <Link href={c.url} target="_blank" rel="noreferrer">
              {c.title ? c.title : c.url}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
