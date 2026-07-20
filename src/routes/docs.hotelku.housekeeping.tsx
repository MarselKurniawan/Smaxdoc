import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/housekeeping")({
  head: () => ({
    meta: [
      { title: "Housekeeping — Hotelku | SinergiMax" },
      { name: "description", content: "Kelola status kebersihan kamar dan tugas housekeeping." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "room-status", label: "Status Kamar" },
  { id: "assignment", label: "Penugasan" },
  { id: "reports", label: "Laporan" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Housekeeping" activeTo="/docs/hotelku/housekeeping">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Housekeeping</h1>
      <Section id="room-status" title="Status Kamar">
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Clean</strong> — kamar telah dibersihkan dan siap dijual.</li>
          <li><strong>Dirty</strong> — kamar memerlukan pembersihan.</li>
          <li><strong>Inspected</strong> — kamar telah diperiksa supervisor.</li>
          <li><strong>Out of Order</strong> — kamar tidak dapat dijual (perawatan/kerusakan).</li>
        </ul>
        <Figure label="Grid status kamar" />
      </Section>
      <Section id="assignment" title="Penugasan">
        <p>Tetapkan staf housekeeping untuk kamar tertentu dan pantau progres pembersihan.</p>
      </Section>
      <Section id="reports" title="Laporan">
        <p>Laporan harian: jumlah kamar dibersihkan per staf, waktu rata-rata, dan discrepancy.</p>
      </Section>
    </DocsLayout>
  );
}
