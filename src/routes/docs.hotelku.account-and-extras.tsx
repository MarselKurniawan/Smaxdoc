import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/account-and-extras")({
  head: () => ({
    meta: [
      { title: "Akun dan Extras — Hotelku | SinergiMax" },
      { name: "description", content: "Kelola folio tamu, pembayaran, dan item extras." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "folio", label: "Folio Tamu" },
  { id: "payment", label: "Pembayaran" },
  { id: "extras", label: "Extras" },
  { id: "invoice", label: "Invoice" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Akun dan Extras" activeTo="/docs/hotelku/account-and-extras">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Akun dan Extras</h1>
      <Section id="folio" title="Folio Tamu">
        <p>Detail transaksi setiap tamu selama menginap: tarif kamar, extras, pajak, dan pembayaran.</p>
        <Figure label="Tampilan folio tamu" />
      </Section>
      <Section id="payment" title="Pembayaran">
        <p>Catat pembayaran (tunai, kartu, transfer, city ledger) beserta bukti dan referensi.</p>
      </Section>
      <Section id="extras" title="Extras">
        <p>Tambahkan biaya di luar kamar seperti laundry, minibar, restoran, atau layanan spa.</p>
      </Section>
      <Section id="invoice" title="Invoice">
        <p>Cetak atau kirim invoice PDF resmi kepada tamu atau perusahaan.</p>
      </Section>
    </DocsLayout>
  );
}
