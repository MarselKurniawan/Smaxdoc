import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/pms-logs")({
  head: () => ({
    meta: [
      { title: "PMS Log — Channelku | SinergiMax" },
      { name: "description", content: "Riwayat pertukaran data reservasi antara Channelku dan PMS." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "overview", label: "Ikhtisar" },
  { id: "reservations", label: "Log Reservasi" },
  { id: "retry", label: "Kirim Ulang" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="PMS Log" activeTo="/docs/channelku/pms-logs">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">PMS Log</h1>
      <Section id="overview" title="Ikhtisar">
        <p>
          <strong>PMS Log</strong> menampilkan riwayat pengiriman reservasi dari Channelku
          ke PMS Anda. Berguna untuk mengaudit dan menyelidiki masalah sinkronisasi.
        </p>
      </Section>
      <Section id="reservations" title="Log Reservasi">
        <p>Tiap entri mencakup ID reservasi, waktu pengiriman, endpoint tujuan, status, dan payload/response.</p>
        <Figure label="Tabel log reservasi ke PMS" />
      </Section>
      <Section id="retry" title="Kirim Ulang">
        <p>Reservasi yang gagal terkirim dapat dikirim ulang secara manual dengan tombol <strong>Retry</strong>.</p>
      </Section>
    </DocsLayout>
  );
}
