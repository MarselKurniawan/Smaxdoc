import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/agent-setting")({
  head: () => ({
    meta: [
      { title: "Pengaturan Agen — Hotelku | SinergiMax" },
      { name: "description", content: "Kelola daftar agen dan komisi." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "agent-list", label: "Daftar Agen" },
  { id: "commission", label: "Komisi" },
  { id: "credit-limit", label: "Batas Kredit" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Pengaturan Agen" activeTo="/docs/hotelku/agent-setting">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Pengaturan Agen</h1>
      <Section id="agent-list" title="Daftar Agen">
        <p>Kelola agen perjalanan, korporat, dan mitra bisnis yang melakukan reservasi ke properti Anda.</p>
        <Figure label="Tabel daftar agen" />
      </Section>
      <Section id="commission" title="Komisi">
        <p>Tetapkan besaran komisi per agen (persentase atau nominal) yang akan dihitung otomatis pada tiap reservasi.</p>
      </Section>
      <Section id="credit-limit" title="Batas Kredit">
        <p>Atur batas kredit untuk agen city ledger dan lacak tagihan yang belum terbayar.</p>
      </Section>
    </DocsLayout>
  );
}
