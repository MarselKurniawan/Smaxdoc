import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/booking-chart")({
  head: () => ({
    meta: [
      { title: "Booking Chart — Hotelku | SinergiMax" },
      { name: "description", content: "Grafik reservasi harian untuk mengelola inventaris kamar." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "overview", label: "Ikhtisar" },
  { id: "drag-drop", label: "Drag & Drop" },
  { id: "quick-actions", label: "Aksi Cepat" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Booking Chart" activeTo="/docs/hotelku/booking-chart">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Booking Chart</h1>
      <Section id="overview" title="Ikhtisar">
        <p>Booking Chart menampilkan visualisasi seluruh reservasi pada grid kalender: kamar di sumbu vertikal, tanggal di sumbu horizontal.</p>
        <Figure label="Tampilan booking chart" />
      </Section>
      <Section id="drag-drop" title="Drag & Drop">
        <p>Pindahkan reservasi antar kamar atau ubah durasi menginap dengan tarik-geser langsung di grid.</p>
      </Section>
      <Section id="quick-actions" title="Aksi Cepat">
        <ul className="ml-6 list-disc space-y-2">
          <li>Klik sel kosong untuk membuat reservasi baru.</li>
          <li>Klik reservasi untuk membuka detail, check-in, check-out, atau menambah pembayaran.</li>
          <li>Blokir kamar untuk perawatan langsung dari chart.</li>
        </ul>
      </Section>
    </DocsLayout>
  );
}
