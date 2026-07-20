import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export interface SidebarItem {
  label: string;
  to?: string;
}

export interface TocItem {
  id: string;
  label: string;
}

interface DocsLayoutProps {
  product: "Channelku" | "Hotelku";
  sidebar: SidebarItem[];
  toc: TocItem[];
  breadcrumb: string;
  activeTo?: string;
  children: ReactNode;
}

export function DocsHeader({ activeProduct }: { activeProduct?: "Channelku" | "Hotelku" }) {
  const navItems: Array<{ label: string; to: string }> = [
    { label: "Channelku", to: "/docs/channelku/dashboard" },
    { label: "Hotelku", to: "/docs/hotelku/dashboard" },
  ];
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-8 px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#1d4ed8] text-white text-sm font-bold">S</div>
          <span className="text-[15px] font-semibold tracking-[-0.03em]">SinergiMax Documentation</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={
                "transition-colors hover:text-[#1d4ed8] " +
                (activeProduct === n.label ? "text-[#1d4ed8] font-semibold" : "text-foreground/80")
              }
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function DocsLayout({ product, sidebar, toc, breadcrumb, activeTo, children }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <DocsHeader activeProduct={product} />
      <div className="mx-auto flex max-w-[1400px] gap-8 px-6 py-8">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <nav className="sticky top-20 space-y-1 text-sm">
            {sidebar.map((item) => {
              const active = item.to === activeTo;
              const cls =
                "block cursor-pointer rounded-md px-3 py-2 transition-colors " +
                (active
                  ? "bg-[#1d4ed8]/10 text-[#1d4ed8] font-semibold"
                  : "text-foreground/75 hover:bg-muted");
              if (item.to) {
                return (
                  <Link key={item.label} to={item.to} className={cls}>
                    {item.label}
                  </Link>
                );
              }
              return (
                <div key={item.label} className={cls}>
                  {item.label}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1">
          <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#1d4ed8]">Beranda</Link>
            <span>›</span>
            <span className="rounded-md bg-[#1d4ed8]/10 px-2 py-0.5 text-[#1d4ed8]">
              {breadcrumb}
            </span>
          </div>
          <article className="prose-doc max-w-3xl">{children}</article>
        </main>

        {/* TOC */}
        <aside className="hidden w-56 shrink-0 xl:block">
          <div className="sticky top-20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              Di halaman ini
            </p>
            <ul className="space-y-2 text-sm border-l">
              {toc.map((t, i) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className={
                      "block border-l-2 -ml-px pl-3 transition-colors " +
                      (i === 0
                        ? "border-[#1d4ed8] text-[#1d4ed8] font-semibold"
                        : "border-transparent text-foreground/70 hover:text-[#1d4ed8]")
                    }
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-6">
      <h2 className="text-2xl font-bold tracking-[-0.03em] text-foreground">{title}</h2>
      <div className="mt-3 space-y-4 text-[15px] leading-7 text-foreground/85">{children}</div>
    </section>
  );
}

export function Figure({ label }: { label: string }) {
  return (
    <div className="my-4 rounded-lg border bg-muted/40 p-8 text-center text-sm text-muted-foreground">
      <div className="mx-auto flex h-40 max-w-md items-center justify-center rounded-md border border-dashed bg-background text-muted-foreground/70">
        [ Gambar: {label} ]
      </div>
    </div>
  );
}
