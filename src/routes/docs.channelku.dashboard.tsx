import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Channelku | SinergiMax" },
      { name: "description", content: "Panduan halaman Dashboard Channelku pada SinergiMax." },
    ],
  }),
  component: ChannelkuDashboard,
});

const toc: TocItem[] = [
  { id: "quick-access", label: "Akses Cepat" },
  { id: "announcement", label: "Pengumuman" },
  { id: "revenue-summary", label: "Ringkasan Pendapatan" },
  { id: "booking-overview", label: "Ikhtisar Reservasi" },
  { id: "recent-bookings", label: "Reservasi Terbaru" },
  { id: "booking-engine-preview", label: "Pratinjau Booking Engine" },
  { id: "error-status", label: "Status Error" },
  { id: "channel-status", label: "Status Channel" },
];

function ChannelkuDashboard() {
  return (
    <DocsLayout
      product="Channelku"
      sidebar={channelkuSidebar}
      toc={toc}
      breadcrumb="Dashboard"
      activeTo="/docs/channelku/dashboard"
    >
      <p className="text-[15px] leading-7 text-foreground/85">
        Bagian <strong>Dashboard</strong> pada Channelku menampilkan informasi pengumuman
        penting, indikator performa utama, serta metrik operasional. Setelah berhasil masuk,
        Anda dapat memantau dan menganalisis seluruh data terkait reservasi secara efisien.
      </p>
      <p className="mt-4 text-[15px] leading-7 text-foreground/85">
        Untuk membuka halaman ini, cukup masuk ke <strong>Channelku</strong> lalu pilih
        <strong> Dashboard</strong> pada menu samping. Halaman Dashboard akan menampilkan
        bagian-bagian berikut:
      </p>

      <h1 className="mt-8 text-4xl font-bold tracking-[-0.04em]">Dashboard</h1>

      <Section id="quick-access" title="Akses Cepat">
        <p>
          Bagian ini memungkinkan Anda menyesuaikan panel dengan tombol pintasan untuk akses
          cepat ke berbagai fitur sistem. Anda dapat membuat hingga <strong>lima</strong>{" "}
          tombol akses cepat dengan langkah berikut:
        </p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Klik tombol edit akses cepat dengan ikon pensil.</li>
          <Figure label="Tombol edit akses cepat"
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762327419/00.dashboard-2.png" />
          <li>Pilih fitur yang diinginkan, lalu klik tombol <strong>Simpan Perubahan</strong>.</li>
          <Figure label="Dialog pemilihan fitur akses cepat" 
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762407628/00.dashboard-3.png" />
          <li>Sekarang panel akses cepat akan tampil di pojok kanan atas.</li>
          <Figure label="Panel akses cepat pada dashboard" 
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762333901/00.dashboard-10.png" />
        </ol>
      </Section>

      <Section id="announcement" title="Pengumuman">
        <p>
          Bagian ini menampilkan pengumuman atau notifikasi penting terkait sistem dan
          pembaruan channel. Anda dapat melihat detail pengumuman dengan mengklik{" "}
          <strong>Lihat Semua Pengumuman</strong> atau <strong>Lihat Detail</strong>.
        </p>
        <Figure label="Kartu pengumuman pada dashboard"
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762325654/00.dashboard-1.png" />
      </Section>

      <Section id="revenue-summary" title="Ringkasan Pendapatan">
        <p>
          Bagian ini memberikan gambaran umum performa total pendapatan properti di
          beberapa periode waktu utama. Anda dapat dengan cepat melihat perbandingan
          pendapatan dengan periode sebelumnya serta memantau pertumbuhan atau penurunan.
        </p>
        <p>
          Pada bagian atas, Anda dapat memilih <strong>mata uang</strong> yang diinginkan
          (misalnya IDR atau USD) melalui menu dropdown.
        </p>
        <Figure label="Ringkasan pendapatan dan pemilih mata uang"
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762331481/00.dashboard-4.png" />
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Pendapatan Hari Ini</strong> — total pendapatan yang dihasilkan hari ini beserta persentase perubahan dibandingkan hari kemarin.</li>
          <li><strong>Month-to-Date (MTD)</strong> — akumulasi pendapatan dari hari pertama bulan berjalan sampai hari ini, dibandingkan dengan MTD bulan sebelumnya.</li>
          <li><strong>Year-to-Date (YTD)</strong> — akumulasi pendapatan sejak 1 Januari tahun berjalan hingga hari ini, dibandingkan tahun sebelumnya.</li>
        </ul>
      </Section>

      <Section id="booking-overview" title="Ikhtisar Reservasi">
        <p>Ringkasan aktivitas reservasi hari ini untuk memantau okupansi dan pergerakan tamu secara real-time.</p>
        <Figure label="Kartu ikhtisar reservasi"
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762331959/00.dashboard-5.png" />
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Reservasi Hari Ini</strong> — total reservasi baru yang dibuat hari ini.</li>
          <li><strong>Kamar Tersedia Hari Ini</strong> — jumlah kamar yang tersedia untuk dijual atau dialokasikan.</li>
          <li><strong>Check-In</strong> — jumlah tamu yang dijadwalkan check-in hari ini.</li>
          <li><strong>Check-Out</strong> — jumlah tamu yang dijadwalkan check-out hari ini.</li>
        </ul>
      </Section>

      <Section id="recent-bookings" title="Reservasi Terbaru">
        <p>Menampilkan <strong>10 reservasi terbaru</strong> yang tercatat di sistem.</p>
        <Figure label="Tabel reservasi terbaru"
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762333159/00.dashboard-7.png" />
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Sumber Reservasi</strong> — platform atau channel asal reservasi.</li>
          <li><strong>Nama Tamu</strong> — nama tamu yang terkait dengan reservasi.</li>
          <li><strong>Waktu Pembuatan</strong> — tanggal dan waktu saat reservasi dibuat.</li>
          <li><strong>Tanggal Check-In & Check-Out</strong> — jadwal kedatangan dan keberangkatan tamu.</li>
          <li><strong>Kamar</strong> — kamar atau tipe kamar yang ditetapkan.</li>
          <li><strong>Rate Plan</strong> — paket tarif yang dipilih saat pemesanan.</li>
          <li><strong>Sisa Tagihan</strong> — total tagihan setelah dikurangi pembayaran/deposit.</li>
          <li><strong>Deposit</strong> — jumlah yang telah dibayarkan sebagai deposit.</li>
        </ul>
      </Section>

      <Section id="booking-engine-preview" title="Pratinjau Booking Engine">
        <p>Tampilan visual Booking Engine properti Anda sebagaimana yang dilihat calon tamu.</p>
        <Figure label="Pratinjau tampilan booking engine"
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762737268/booking-engine-preview.png" />
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Nama Properti</strong> — nama properti yang terkait dengan Booking Engine.</li>
          <li><strong>Gambar Pratinjau</strong> — pratinjau visual Booking Engine.</li>
          <li><strong>Buka Pengaturan Properti</strong> — pintasan menuju halaman Pengaturan Properti.</li>
          <li><strong>Tombol Booking Engine</strong> — akses langsung ke Booking Engine bila tautan valid tersedia.</li>
        </ul>
      </Section>

      <Section id="error-status" title="Status Error">
        <p>Daftar <strong>error sistem</strong> yang saat ini terdeteksi pada platform.</p>
        <Figure label="Daftar status error"
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762407221/00.dashboard-8.png" />
        <p>Setiap entri mencakup jenis error dan jumlah kemunculan; daftar dapat diperluas atau diciutkan.</p>
      </Section>

      <Section id="channel-status" title="Status Channel">
        <p>Gambaran rinci tentang status <strong>koneksi dan pemetaan</strong> setiap channel.</p>
        <Figure label="Daftar status channel"
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762333612/00.dashboard-9.png" />
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Connected</strong> — channel terhubung dan aktif bertukar data.</li>
          <li><strong>Disconnected</strong> — koneksi channel sedang tidak aktif atau terputus.</li>
          <li><strong>Unconfigured</strong> — channel belum diatur atau dipetakan.</li>
        </ul>
      </Section>
    </DocsLayout>
  );
}
