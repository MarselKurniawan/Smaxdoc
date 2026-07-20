import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/logs")({
  head: () => ({
    meta: [
      { title: "Log — Hotelku | SinergiMax" },
      { name: "description", content: "Audit trail seluruh aktivitas sistem." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "activity", label: "Log Aktivitas" },
  { id: "filter", label: "Filter" },
  { id: "export", label: "Ekspor" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Log" activeTo="/docs/hotelku/logs">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Log</h1>
      <Section id="activity" title="Log Aktivitas">
        <p>Catatan lengkap setiap perubahan sistem: siapa, kapan, dan apa yang berubah.</p>
        <Figure label="Tabel log aktivitas" />
      </Section>
      <Section id="filter" title="Filter">
        <p>Filter berdasarkan pengguna, modul, tipe aksi, dan rentang waktu.</p>
      </Section>
      <Section id="export" title="Ekspor">
        <p>Unduh log untuk keperluan audit atau investigasi.</p>
      </Section>
    </DocsLayout>
  );
}
