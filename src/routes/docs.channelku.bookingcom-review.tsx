import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/bookingcom-review")({
  head: () => ({
    meta: [
      { title: "Ulasan Booking.com — Konten OTA | SinergiMax" },
      { name: "description", content: "Lihat dan kelola ulasan tamu dari Booking.com, termasuk rating, komentar, dan rincian skor." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "view-navigate", label: "Tampilan dan Navigasi" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Ulasan Booking.com" activeTo="/docs/channelku/ota-content/booking.com-review">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Ulasan Booking.com</h1>
      <p className="mt-4">
        Halaman ini memungkinkan Anda untuk melihat dan mengelola ulasan tamu yang diterima dari <strong>Booking.com</strong>. 
        Ini menyediakan gambaran lengkap tentang umpan balik tamu, termasuk <strong>rating</strong>, <strong>komentar</strong>, 
        dan <strong>rincian skor</strong>, membantu Anda memantau kepuasan tamu dan merespons secara efektif.
      </p>
      <p className="mt-2">
        Untuk mengakses halaman ini, buka <strong>Konten OTA &gt; Ulasan Booking.com</strong>.
      </p>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1767690286/booking-review-menu.png" />

      {/* ==================== VIEW AND NAVIGATE ==================== */}
      <Section id="view-navigate" title="Tampilan dan Navigasi">
        <p>Di bagian atas halaman, <strong>panel ringkasan</strong> menampilkan:</p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1767689829/first-panel.png" />

        <h4 className="mt-4 font-medium">Panel Ringkasan:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Skor Ulasan Keseluruhan:</strong> Menampilkan rata-rata rating yang dihitung dari semua ulasan tamu, beserta <strong>total jumlah ulasan</strong>.
          </li>
          <li>
            <strong>Ringkasan Ulasan Kategori:</strong> Menampilkan skor rata-rata di <strong>enam kategori ulasan</strong>, memberikan gambaran cepat tentang kepuasan tamu berdasarkan kategori.
          </li>
        </ul>

        <p className="mt-2">
          Di bawah panel ringkasan, <strong>daftar ulasan</strong> menunjukkan umpan balik tamu secara terperinci. 
          Setiap entri ulasan mencakup informasi berikut:
        </p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1767689821/bottom-panel.png" />

        <h4 className="mt-4 font-medium">Informasi dalam Setiap Entri Ulasan:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Nama Tamu:</strong> Nama tamu yang mengirimkan ulasan.
          </li>
          <li>
            <strong>Nomor Reservasi:</strong> ID reservasi yang terkait dengan ulasan.
          </li>
          <li>
            <strong>Tanggal Ulasan:</strong> Tanggal ulasan dikirimkan.
          </li>
          <li>
            <strong>Skor Rata-rata:</strong> Skor keseluruhan yang dihitung dari semua kategori ulasan.
          </li>
          <li>
            <strong>Deskripsi Ulasan:</strong> Dibagi menjadi tiga bagian:
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Ulasan:</strong> Umpan balik umum dari tamu</li>
              <li><strong>Suka:</strong> Komentar positif</li>
              <li><strong>Tidak Suka:</strong> Masukan negatif atau saran untuk perbaikan</li>
            </ul>
          </li>
          <li>
            <strong>Bagian Balasan:</strong> Memungkinkan staf untuk merespons langsung ulasan tamu. Klik tombol <strong>Kirim Balasan</strong> untuk mempublikasikan respons.
          </li>
          <li>
            <strong>Rincian Skor:</strong> Menampilkan skor terperinci yang diberikan oleh tamu, dipecah menjadi <strong>enam kategori evaluasi</strong>.
          </li>
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Contoh Kategori Skor:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li><strong>Staf:</strong> 10</li>
            <li><strong>Lokasi:</strong> 10</li>
            <li><strong>Kenyamanan:</strong> 10</li>
            <li><strong>Kebersihan:</strong> 7.5</li>
            <li><strong>Fasilitas:</strong> 7.5</li>
            <li><strong>Nilai uang:</strong> 10</li>
          </ul>
          <p className="mt-1 text-sm text-muted-foreground">
            Skor ini membantu mengidentifikasi area yang perlu ditingkatkan dan aspek yang sudah memuaskan tamu.
          </p>
        </div>

        <div className="mt-4 rounded-lg border bg-blue-50 p-4 dark:bg-blue-950/20">
          <p className="text-sm font-medium">Fungsi Balasan:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>
              <strong>Merespons Ulasan:</strong> Gunakan bagian balasan untuk membalas ulasan tamu, menunjukkan apresiasi atau menanggapi masukan.
            </li>
            <li>
              <strong>Tombol Kirim Balasan:</strong> Klik tombol ini untuk mempublikasikan respons Anda secara langsung di halaman ulasan Booking.com.
            </li>
          </ul>
        </div>
      </Section>
    </DocsLayout>
  );
}