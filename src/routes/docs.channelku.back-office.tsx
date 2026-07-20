import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/back-office")({
  head: () => ({
    meta: [
      { title: "Back Office System — Channelku | SinergiMax" },
      { name: "description", content: "Modul back office untuk pencatatan jurnal keuangan." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "overview", label: "Ikhtisar" },
  { id: "journal", label: "Jurnal" },
  { id: "export", label: "Ekspor" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Back Office System" activeTo="/docs/channelku/back-office">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Back Office System</h1>
      <Section id="overview" title="Ikhtisar">
        <p>Back Office menyediakan pencatatan jurnal transaksi keuangan dari aktivitas reservasi properti.</p>
      </Section>
      <Section id="journal" title="Jurnal">
        <p>Setiap transaksi (pembayaran, refund, komisi) tercatat dengan tanggal, akun, debit/kredit, dan referensi reservasi.</p>
        <Figure label="Tabel jurnal transaksi" />
      </Section>
      <Section id="export" title="Ekspor">
        <p>Ekspor jurnal ke Excel/CSV untuk direkonsiliasi dengan sistem akuntansi eksternal.</p>
      </Section>
    </DocsLayout>
  );
}
