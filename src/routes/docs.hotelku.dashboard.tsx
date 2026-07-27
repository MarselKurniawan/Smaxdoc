import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/dashboard")({
  head: () => ({
    meta: [
      { title: "Dasbor — Hotelku | SinergiMax" },
      { name: "description", content: "Ringkasan kinerja operasional dan reservasi properti untuk memantau kinerja harian." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "overview", label: "Ikhtisar" },
  { id: "reservation-summary", label: "Ringkasan Reservasi" },
  { id: "revenue-performance", label: "Kinerja Pendapatan" },
  { id: "key-performance", label: "Metrik Kinerja Utama" },
  { id: "reservation-issue", label: "Ringkasan Masalah Reservasi" },
  { id: "occupancy-rate", label: "Tingkat Okupansi" },
  { id: "inventory-statistic", label: "Statistik Inventaris" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Dasbor" activeTo="/docs/hotelku/dashboard">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Dasbor</h1>
      <p className="mt-4">
        <strong>Dasbor</strong> menyediakan ringkasan kinerja operasional dan reservasi untuk properti Anda. 
        Halaman ini berfungsi sebagai referensi cepat untuk memantau kinerja harian dan mengidentifikasi tren penting sekilas.
      </p>
      <Figure label=""
      src="https://res.cloudinary.com/dayo5hqig/image/upload/v1764314462/dashboard-page.png" />

      {/* ==================== RESERVATION SUMMARY ==================== */}
      <Section id="reservation-summary" title="Ringkasan Reservasi">
        <p>Bagian ini menyediakan hitungan waktu nyata dari aktivitas tamu utama untuk hari ini.</p>

        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Kedatangan:</strong> Menunjukkan jumlah tamu yang sudah check-in dibandingkan dengan total yang dijadwalkan untuk tiba hari ini. 
            <span className="block text-sm text-muted-foreground">Misalnya, 0/2 berarti 0 tamu telah check-in dari 2 kedatangan yang diharapkan.</span>
          </li>
          <li>
            <strong>Keberangkatan:</strong> Menunjukkan jumlah tamu yang sudah check-out dibandingkan dengan total yang dijadwalkan untuk berangkat hari ini.
          </li>
          <li>
            <strong>Pemesanan:</strong> Menampilkan jumlah reservasi baru yang dikonfirmasi hari ini.
          </li>
          <li>
            <strong>Di Dalam Hotel:</strong> Menunjukkan jumlah total kamar yang saat ini ditempati oleh tamu.
          </li>
        </ul>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1764314575/reservation-summary.png" />
      </Section>

      {/* ==================== REVENUE PERFORMANCE ==================== */}
      <Section id="revenue-performance" title="Kinerja Pendapatan">
        <p>
          Bagian ini menyoroti indikator pendapatan terkait kamar yang penting untuk membantu Anda memahami seberapa baik 
          kinerja keuangan properti.
        </p>

        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Total Pendapatan:</strong> Menunjukkan total pendapatan yang dihasilkan dari penjualan kamar.
          </li>
          <li>
            <strong>Tarif Harian Rata-rata (ADR):</strong> Menunjukkan tarif kamar rata-rata yang diperoleh per kamar yang ditempati.
          </li>
        </ul>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1764314622/revenue-performance.png" />
      </Section>

      {/* ==================== KEY PERFORMANCE ==================== */}
      <Section id="key-performance" title="Metrik Kinerja Utama">
        <p>
          Indikator ini membantu menganalisis pola pemesanan dan perilaku tamu, mendukung peramalan dan perencanaan operasional.
        </p>

        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Waktu Tunggu Pemesanan:</strong> Rata-rata jumlah hari antara tanggal pemesanan dan tanggal kedatangan tamu. 
            <span className="block text-sm text-muted-foreground">Waktu tunggu yang lebih panjang biasanya menunjukkan permintaan ke depan yang lebih kuat.</span>
          </li>
          <li>
            <strong>Rata-rata Lama Menginap (ALOS):</strong> Rata-rata jumlah malam tamu menginap di properti. 
            <span className="block text-sm text-muted-foreground">
              Ini membantu menentukan pola menginap tamu, mengoptimalkan alokasi kamar, dan meningkatkan perencanaan pendapatan.
            </span>
          </li>
        </ul>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1764314661/key-performance-metric.png" />
      </Section>

      {/* ==================== RESERVATION ISSUE ==================== */}
      <Section id="reservation-issue" title="Ringkasan Masalah Reservasi">
        <p>
          Bagian ini melacak hasil reservasi yang tidak menghasilkan pendapatan, membantu menilai kehilangan pendapatan 
          dan mengoptimalkan penggunaan inventaris.
        </p>

        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Batal:</strong> Jumlah reservasi yang secara permanen dibatalkan atau dihapus dari sistem.
          </li>
          <li>
            <strong>Dibatalkan:</strong> Jumlah reservasi yang secara resmi dibatalkan oleh tamu atau properti.
          </li>
          <li>
            <strong>Tidak Hadir:</strong> Jumlah tamu yang gagal tiba untuk pemesanan mereka yang dikonfirmasi tanpa pembatalan sebelumnya.
          </li>
        </ul>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1764314665/reservation-issue.png" />
      </Section>

      {/* ==================== OCCUPANCY RATE ==================== */}
      <Section id="occupancy-rate" title="Tingkat Okupansi">
        <p>
          Bagian <strong>Tingkat Okupansi</strong> ditampilkan menggunakan <strong>pengukur melingkar</strong> untuk memberikan 
          gambaran visual yang jelas tentang berapa banyak kamar yang saat ini terisi.
        </p>

        <ul className="ml-6 list-disc space-y-1">
          <li>
            Persentase yang lebih tinggi berarti sebagian besar kamar terisi dan properti berkinerja baik dalam hal penjualan kamar.
          </li>
          <li>
            Metrik ini membantu tim front office dan manajemen untuk menilai tingkat okupansi saat ini dengan cepat dan membuat 
            keputusan yang tepat terkait <strong>staf</strong>, <strong>inventaris</strong>, <strong>upselling</strong>, dan 
            <strong>penyesuaian harga</strong>.
          </li>
        </ul>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1764314689/occupancy-rate.png" />
      </Section>

      {/* ==================== INVENTORY STATISTIC ==================== */}
      <Section id="inventory-statistic" title="Statistik Inventaris">
        <p>
          Bagan ini memberikan rincian terperinci tentang status inventaris kamar Anda saat ini:
        </p>

        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Kamar Tersedia:</strong> Jumlah kamar yang siap untuk dijual.
          </li>
          <li>
            <strong>Kamar Terjual:</strong> Jumlah kamar yang saat ini ditempati oleh tamu yang membayar.
          </li>
          <li>
            <strong>Kamar Diblokir:</strong> Kamar yang untuk sementara dihapus dari inventaris (misalnya, untuk pemeliharaan, 
            pembersihan, atau penahanan grup).
          </li>
          <li>
            <strong>Kamar Komplementer:</strong> Kamar yang terisi tetapi disediakan tanpa biaya (misalnya, untuk staf, pemilik, 
            alokasi promosi).
          </li>
        </ul>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1764314713/inventory-statistic.png" />
      </Section>
    </DocsLayout>
  );
}