import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Hotelku | SinergiMax" },
      { name: "description", content: "Panduan halaman Dashboard Hotelku pada SinergiMax." },
    ],
  }),
  component: HotelkuDashboard,
});

const toc: TocItem[] = [
  { id: "reservation-summary", label: "Ringkasan Reservasi" },
  { id: "revenue-performance", label: "Performa Pendapatan" },
  { id: "key-performance-metrics", label: "Indikator Performa Utama" },
  { id: "reservation-issue-summary", label: "Ringkasan Masalah Reservasi" },
  { id: "occupancy-rate", label: "Tingkat Okupansi" },
  { id: "inventory-statistic", label: "Statistik Inventaris" },
];

function HotelkuDashboard() {
  return (
    <DocsLayout
      product="Hotelku"
      sidebar={hotelkuSidebar}
      toc={toc}
      breadcrumb="Dashboard"
      activeTo="/docs/hotelku/dashboard"
    >
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Ikhtisar</h1>
      <p className="mt-4 text-[15px] leading-7 text-foreground/85">
        <strong>Dashboard</strong> menyediakan ringkasan performa operasional dan reservasi
        untuk properti Anda — referensi cepat untuk memantau performa harian dan
        mengidentifikasi tren penting sekilas.
      </p>

      <Figure label="Tampilan utama halaman Dashboard Hotelku" />

      <Section id="reservation-summary" title="Ringkasan Reservasi">
        <Figure label="Kartu ringkasan reservasi" />
        <p>Hitungan real-time atas aktivitas tamu utama untuk hari berjalan.</p>
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Kedatangan</strong> — jumlah tamu yang telah check-in dibandingkan total kedatangan hari ini.</li>
          <li><strong>Keberangkatan</strong> — jumlah tamu yang telah check-out dibandingkan total keberangkatan hari ini.</li>
          <li><strong>Reservasi</strong> — jumlah reservasi baru yang dikonfirmasi hari ini.</li>
          <li><strong>In-House</strong> — total kamar yang saat ini ditempati tamu.</li>
        </ul>
      </Section>

      <Section id="revenue-performance" title="Performa Pendapatan">
        <Figure label="Kartu performa pendapatan" />
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Total Revenue</strong> — total pendapatan dari penjualan kamar.</li>
          <li><strong>Average Daily Rate (ADR)</strong> — tarif rata-rata per kamar yang terisi.</li>
        </ul>
      </Section>

      <Section id="key-performance-metrics" title="Indikator Performa Utama">
        <Figure label="Kartu indikator performa utama" />
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Booking Lead Time</strong> — rata-rata hari antara tanggal reservasi dan kedatangan.</li>
          <li><strong>Average Length of Stay (ALOS)</strong> — rata-rata jumlah malam tamu menginap.</li>
        </ul>
      </Section>

      <Section id="reservation-issue-summary" title="Ringkasan Masalah Reservasi">
        <Figure label="Kartu ringkasan masalah reservasi" />
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Void</strong> — reservasi yang secara permanen dibatalkan.</li>
          <li><strong>Cancelled</strong> — reservasi yang dibatalkan resmi.</li>
          <li><strong>No Show</strong> — tamu yang tidak hadir tanpa pembatalan.</li>
        </ul>
      </Section>

      <Section id="occupancy-rate" title="Tingkat Okupansi">
        <Figure label="Diagram tingkat okupansi" />
        <p>Ditampilkan dengan gauge melingkar untuk memberikan gambaran visual tingkat okupansi properti secara jelas.</p>
      </Section>

      <Section id="inventory-statistic" title="Statistik Inventaris">
        <Figure label="Diagram statistik inventaris" />
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Available Rooms</strong> — kamar siap dijual.</li>
          <li><strong>Sold Rooms</strong> — kamar yang ditempati tamu berbayar.</li>
          <li><strong>Blocked Rooms</strong> — kamar yang sementara dikeluarkan dari inventaris.</li>
          <li><strong>Complimentary Rooms</strong> — kamar yang ditempati tanpa biaya.</li>
        </ul>
      </Section>
    </DocsLayout>
  );
}
