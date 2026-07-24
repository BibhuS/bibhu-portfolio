import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, Search, X, Tag as TagIcon } from "lucide-react";
import { BLOG_POSTS } from "@/lib/portfolio-data";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Bibhu Bhushan Sinha" },
      {
        name: "description",
        content:
          "Notes on Spark, Databricks, cloud lakehouses and the boring-on-purpose engineering that keeps them running.",
      },
      { property: "og:title", content: "Blog — Bibhu Bhushan Sinha" },
      {
        property: "og:description",
        content: "Notes on data engineering, Spark, Databricks and cloud lakehouses.",
      },
      { property: "og:url", content: "https://portfolio-bibhu-data.lovable.app/blog" },
    ],
    links: [{ rel: "canonical", href: "https://portfolio-bibhu-data.lovable.app/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const tagCounts = useMemo(() => {
    const counts = new Map<string, number>();
    BLOG_POSTS.forEach((p) => {
      (p.tags?.length ? p.tags : [p.tag]).forEach((t) => {
        counts.set(t, (counts.get(t) ?? 0) + 1);
      });
    });
    return Array.from(counts.entries()).sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]),
    );
  }, []);

  const toggleTag = (t: string) =>
    setSelected((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
    );

  const posts = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return BLOG_POSTS.filter((p) => {
      const postTags = p.tags?.length ? p.tags : [p.tag];
      if (selected.length && !selected.every((t) => postTags.includes(t))) return false;
      if (!needle) return true;
      return (
        p.title.toLowerCase().includes(needle) ||
        p.excerpt.toLowerCase().includes(needle) ||
        postTags.some((t) => t.toLowerCase().includes(needle))
      );
    });
  }, [q, selected]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground">Bibhu Bhushan Sinha / blog</span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="font-mono text-xs uppercase tracking-widest text-primary">Writing</div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          The blog
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Notes from the trenches — data platforms, Spark, Databricks, and the
          unglamorous engineering that keeps them boring to operate.
        </p>

        <div className="mt-10 space-y-4">
          <div className="relative w-full md:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search posts…"
              className="w-full rounded-md border border-border/60 bg-card/40 py-2 pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none"
            />
            {q && (
              <button
                type="button"
                onClick={() => setQ("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <TagIcon className="h-3 w-3" /> Filter by topic
              </div>
              {selected.length > 0 && (
                <button
                  type="button"
                  onClick={() => setSelected([])}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3 w-3" /> Clear ({selected.length})
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {tagCounts.map(([t, count]) => {
                const active = selected.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => toggleTag(t)}
                    aria-pressed={active}
                    className={
                      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs transition " +
                      (active
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-border/60 text-muted-foreground hover:border-primary/30 hover:text-foreground")
                    }
                  >
                    <span>{t}</span>
                    <span className={active ? "text-primary/70" : "text-muted-foreground/60"}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 divide-y divide-border/60 border-y border-border/60">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group grid gap-2 py-8 transition md:grid-cols-[140px_1fr_80px] md:items-baseline"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {new Date(p.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </div>
              <div>
                <div className="text-lg font-semibold text-foreground group-hover:text-primary md:text-xl">
                  {p.title}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{p.excerpt}</div>
                {(p.tags?.length ? p.tags : [p.tag]).length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {(p.tags?.length ? p.tags : [p.tag]).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border/60 bg-card/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-right font-mono text-xs text-muted-foreground">
                {p.readingMinutes} min · {p.tag}
              </div>
            </Link>
          ))}
          {posts.length === 0 && (
            <div className="py-16 text-center text-sm text-muted-foreground">
              No posts match “{q}”.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}