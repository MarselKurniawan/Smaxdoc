import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/reports")({
  head: () => ({
    meta: [
      { title: "Laporan — Hotelku | SinergiMax" },
      { name: "description", content: "Laporan operasional, keuangan, dan performa properti." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "daily", label: "Laporan Harian" },
  { id: "revenue", label: "Laporan Pendapatan" },
  { id: "occupancy", label: "Laporan Okupansi" },
  { id: "custom", label: "Laporan Kustom" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Laporan" activeTo="/docs/hotelku/reports">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Laporan</h1>
      <Section id="daily" title="Laporan Harian">
        <p>Ringkasan aktivitas satu hari: arrivals, departures, in-house, dan pendapatan.</p>
        <Figure label="Contoh laporan harian" />
      </Section>
      <Section id="revenue" title="Laporan Pendapatan">
        <p>Pendapatan kamar dan non-kamar per periode, per rate plan, per market segment, dan per channel.</p>
      </Section>
      <Section id="occupancy" title="Laporan Okupansi">
        <p>Tren okupansi harian, mingguan, dan bulanan disertai ADR dan RevPAR.</p>
      </Section>
      <Section id="custom" title="Laporan Kustom">
        <p>Buat laporan dengan filter dan kolom khusus, lalu ekspor ke Excel atau PDF.</p>
      </Section>
    </DocsLayout>
  );
}
