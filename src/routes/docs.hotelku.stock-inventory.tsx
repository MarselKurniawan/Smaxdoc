import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/stock-inventory")({
  head: () => ({
    meta: [
      { title: "Stock Inventory — Hotelku | SinergiMax" },
      { name: "description", content: "Kelola stok barang seperti amenities, minibar, dan F&B." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "items", label: "Daftar Barang" },
  { id: "stock-in", label: "Stock In" },
  { id: "stock-out", label: "Stock Out" },
  { id: "report", label: "Laporan Stok" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Stock Inventory" activeTo="/docs/hotelku/stock-inventory">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Stock Inventory</h1>
      <Section id="items" title="Daftar Barang">
        <p>Katalog barang lengkap dengan SKU, kategori, satuan, harga beli, dan harga jual.</p>
        <Figure label="Tabel daftar barang" />
      </Section>
      <Section id="stock-in" title="Stock In">
        <p>Catat pembelian atau penerimaan barang beserta supplier dan nomor referensi.</p>
      </Section>
      <Section id="stock-out" title="Stock Out">
        <p>Catat pemakaian barang untuk operasional atau penjualan ke tamu.</p>
      </Section>
      <Section id="report" title="Laporan Stok">
        <p>Laporan pergerakan stok, nilai persediaan, dan barang yang menipis.</p>
      </Section>
    </DocsLayout>
  );
}
