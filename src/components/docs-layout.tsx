import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface SidebarItem {
  label: string;
  to?: string;
  children?: SidebarItem[];
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

export function DocsHeader({
  activeProduct,
  sidebar,
  activeTo,
  openMenus,
  setOpenMenus,
}: {
  activeProduct?: "Channelku" | "Hotelku";
  sidebar?: SidebarItem[];
  activeTo?: string;
  openMenus?: Record<string, boolean>;
  setOpenMenus?: React.Dispatch<
  React.SetStateAction<Record<string, boolean>>
>;
}) {
  const navItems: Array<{ label: string; to: string }> = [
    { label: "Channelku", to: "/docs/channelku/dashboard" },
    { label: "Hotelku", to: "/docs/hotelku/dashboard" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-3 px-4 lg:gap-8 lg:px-6">
        {sidebar && openMenus && setOpenMenus && (
  <Sheet>
    <SheetTrigger asChild>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </Button>
    </SheetTrigger>

  <SheetContent
  side="left"
  className="w-[320px] max-w-[90vw] p-0 flex flex-col"
>
  <div className="border-b p-4 shrink-0">
    <h2 className="font-semibold">
      SinergiMax Documentation
    </h2>
  </div>

  <div className="flex-1 overflow-y-auto p-4">
    <div className="mb-4">
      <p className="text-sm font-semibold text-muted-foreground">
        Documentation
      </p>
    </div>

    <nav className="space-y-1">
      {sidebar.map((item) => (
        <SidebarNode
          key={item.label}
          item={item}
          activeTo={activeTo}
          openMenus={openMenus}
          setOpenMenus={setOpenMenus}
        />
      ))}
    </nav>
  </div>
</SheetContent>
</Sheet>
        )}
        <Link to="/" className="flex items-center gap-2 min-w-0">
  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#1d4ed8] text-white text-sm font-bold">
    S
  </div>

  <span className="truncate text-[15px] font-semibold tracking-[-0.03em]">
    SinergiMax Documentation
  </span>
</Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm">
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
const [openMenus, setOpenMenus] = useState<Record<string, boolean>>(() => {
  const saved = localStorage.getItem("sidebar-open");
  return saved ? JSON.parse(saved) : {};
});

useEffect(() => {
  localStorage.setItem(
    "sidebar-open",
    JSON.stringify(openMenus)
  );
}, [openMenus]);

return (  
    <div className="min-h-screen bg-background text-foreground">
      <DocsHeader
  activeProduct={product}
  sidebar={sidebar}
  activeTo={activeTo}
  openMenus={openMenus}
  setOpenMenus={setOpenMenus}
/>
      <div className="mx-auto flex max-w-[1400px] gap-8 px-6 py-8">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
        <div className="sticky top-20 h-[calc(100vh-6rem)] overflow-y-auto pr-2">
          <nav className="sticky top-20 space-y-1 text-sm">
           {sidebar.map((item) => (
    <SidebarNode
  key={item.label}
  item={item}
  activeTo={activeTo}
  openMenus={openMenus}
  setOpenMenus={setOpenMenus}
/>
  ))}
</nav>
</div>
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

function SidebarNode({
  item,
  activeTo,
  openMenus,
  setOpenMenus,
}: {
  item: SidebarItem;
  activeTo?: string;
  openMenus: Record<string, boolean>;
  setOpenMenus: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
}) {
  const isOpen = openMenus[item.label] ?? false;

  const active = item.to === activeTo;

  const cls =
    "flex items-center justify-between rounded-md px-3 py-2 transition-colors cursor-pointer " +
    (active
      ? "bg-[#1d4ed8]/10 text-[#1d4ed8] font-semibold"
      : "text-foreground/75 hover:bg-muted");

  if (!item.children) {
  return (
    <Link
      to={item.to!}
      className={`${cls} transition-all duration-200 hover:translate-x-1`}
    >
      {item.label}
    </Link>
  );
}

  return (
    <div>
      <button
        onClick={() =>
        setOpenMenus((prev) => ({
        ...prev,
        [item.label]: !prev[item.label],
  }))
}
        className={cls + " w-full"}
      >
        <span>{item.label}</span>
        <span className={`transition-transform duration-300 ${ 
        isOpen ? "rotate-90" : ""  }`} >
        ▶
       </span>
       </button>

      <div
  className={`overflow-hidden transition-all duration-300 ${
    isOpen
      ? "max-h-[3000px] opacity-100"
      : "max-h-0 opacity-0" 
  }`}
>
  <div className="ml-4 mt-1 border-l pl-3 space-y-1">
    {item.children.map((child) => (
      <SidebarNode
  key={child.label}
  item={child}
  activeTo={activeTo}
  openMenus={openMenus}
  setOpenMenus={setOpenMenus}
/>
    ))}
  </div>
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

export function Figure({
  label,
  src,
}: {
  label: string;
  src?: string;
}) {
  return (
    <div className="my-4 rounded-lg border bg-muted/40 p-4">
      {src ? (
        <img
          src={src}
          alt={label}
          className="w-full rounded-lg border"
        />
      ) : (
        <div className="mx-auto flex h-40 max-w-md items-center justify-center rounded-md border border-dashed bg-background text-muted-foreground/70">
          [ Gambar: {label} ]
        </div>
      )}

      <p className="mt-2 text-center text-sm text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
