import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/extras-only")({
  head: () => ({
    meta: [
      { title: "Extras Only — Hotelku | SinergiMax" },
      { name: "description", content: "Transaksi extras tanpa reservasi kamar." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "overview", label: "Ikhtisar" },
  { id: "create", label: "Buat Transaksi" },
  { id: "reporting", label: "Pelaporan" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Extras Only" activeTo="/docs/hotelku/extras-only">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Extras Only</h1>
      <Section id="overview" title="Ikhtisar">
        <p>Catat transaksi penjualan tanpa reservasi kamar — misal walk-in F&amp;B, laundry, atau paket spa.</p>
      </Section>
      <Section id="create" title="Buat Transaksi">
        <ol className="ml-6 list-decimal space-y-2">
          <li>Klik <strong>Buat Transaksi</strong> dan pilih tamu atau tambahkan tamu baru.</li>
          <li>Tambahkan item extras dari katalog.</li>
          <li>Catat pembayaran dan cetak struk.</li>
        </ol>
        <Figure label="Formulir transaksi extras only" />
      </Section>
      <Section id="reporting" title="Pelaporan">
        <p>Semua transaksi extras only masuk ke laporan pendapatan non-kamar.</p>
      </Section>
    </DocsLayout>
  );
}
