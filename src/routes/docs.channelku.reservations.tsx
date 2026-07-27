import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/reservations")({
  head: () => ({
    meta: [
      { title: "Reservasi — Log PMS | SinergiMax" },
      { name: "description", content: "Akses riwayat reservasi lengkap dengan tampilan tabel yang canggih dan komprehensif." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "filtering-panel", label: "Panel Filter" },
  { id: "view-and-navigate", label: "Tampilan dan Navigasi" },
  { id: "repush-to-pms", label: "Kirim Ulang ke PMS" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Reservasi (Log PMS)" activeTo="/docs/channelku/pms-logs/reservations">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Reservasi</h1>
      <p className="mt-4">
        Modul <strong>Reservasi</strong> menyediakan akses ke riwayat reservasi lengkap untuk properti Anda. 
        Ini memungkinkan Anda untuk meninjau, memfilter, dan memantau catatan reservasi dengan tampilan tabel 
        yang canggih dan komprehensif. Untuk mengakses modul ini, buka <strong>Channelku &gt; Log PMS &gt; Reservasi</strong>.
      </p>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762476580/reservations-menu.png" />

      {/* ==================== SEARCH RESERVATIONS ==================== */}
      <Section id="filtering-panel" title="Panel Filter">
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762476712/panel-filter.png" />
        <p>Panel filter memungkinkan Anda untuk mempersempit hasil pencarian reservasi berdasarkan berbagai kriteria.</p>

        <h4 className="mt-4 font-medium">Kriteria Filter:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Nama Properti:</strong> Pilih nama properti untuk melihat reservasi pada properti tersebut.
          </li>
          <li>
            <strong>PMS:</strong> Pilih tipe PMS.
          </li>
          <li>
            <strong>Res #:</strong> Masukkan ID reservasi atau pemesanan.
          </li>
          <li>
            <strong>Voucher OTA:</strong> Masukkan nomor voucher OTA (jika ada).
          </li>
          <li>
            <strong>Tipe Data:</strong> Pilih apakah Anda ingin memfilter berdasarkan <strong>Tanggal Dibuat</strong> atau <strong>Tanggal Kedatangan</strong>.
          </li>
          <li>
            <strong>Rentang Data:</strong> Pilih tanggal mulai dan tanggal akhir menggunakan pemilih tanggal.
          </li>
          <li>
            <strong>Status PMS:</strong> Pilih Status PMS antara <strong>Semua</strong>, <strong>Berhasil</strong>, <strong>Dalam Proses</strong>, <strong>Gagal</strong>, dan <strong>Tidak Dalam Antrian</strong>.
          </li>
        </ul>

        <p className="mt-2">
          Anda dapat mengisi satu atau beberapa bidang untuk mempersempit hasil pencarian. Setelah mengatur filter, klik <strong>Cari</strong>.
        </p>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Contoh Penggunaan Filter:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li>Pilih properti "64-Antara Villa -demo" dan PMS "PMS - VHP" untuk melihat reservasi dari kombinasi tersebut.</li>
            <li>Gunakan filter <strong>Tanggal Dibuat</strong> atau <strong>Tanggal Kedatangan</strong> dengan rentang tanggal tertentu.</li>
            <li>Pilih status PMS seperti <strong>Berhasil</strong> atau <strong>Gagal</strong> untuk memfilter berdasarkan hasil pengiriman ke PMS.</li>
          </ul>
        </div>
      </Section>

      {/* ==================== VIEW AND NAVIGATE ==================== */}
      <Section id="view-and-navigate" title="Tampilan dan Navigasi">
        <p>Bagian ini menyediakan berbagai opsi untuk menavigasi dan menyesuaikan tampilan tabel reservasi.</p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762479374/reservations-table.png" />

        <h4 className="mt-4 font-medium">Opsi Tampilan:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Tombol Tindakan</strong>
          </li>
          <li>
            <strong>Tampilkan semua baris:</strong> Menyesuaikan berapa banyak baris yang ditampilkan sekaligus (10, 25, 50, atau Semua).
          </li>
          <li>
            <strong>Tombol Salin:</strong> Menyalin data tabel yang saat ini ditampilkan ke dalam format teks.
          </li>
          <li>
            <strong>Tombol Excel:</strong> Mengekspor data yang ditampilkan ke dalam file .xlsx.
          </li>
          <li>
            <strong>Visibilitas Kolom:</strong> Pilih kolom mana yang akan ditampilkan. Anda dapat menampilkan satu, beberapa, atau semua kolom.
          </li>
          <li>
            <strong>Bidang Pencarian:</strong> Memungkinkan Anda mencari istilah apa pun yang cocok dengan kolom mana pun dalam tabel. Tabel akan secara otomatis menampilkan hasil yang cocok dengan kata kunci Anda.
          </li>
          <li>
            <strong>Pencarian Filter Lanjutan:</strong> Memungkinkan pemfilteran spesifik bidang langsung di header tabel. Setiap nilai yang dimasukkan akan memfilter data berdasarkan kolom tertentu tersebut.
          </li>
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Tips Navigasi:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li>Gunakan <strong>Pencarian Filter Lanjutan</strong> untuk mencari nilai spesifik di kolom tertentu, misalnya mencari semua reservasi dengan "Voucher OTA" tertentu.</li>
            <li>Atur <strong>Visibilitas Kolom</strong> untuk fokus pada informasi yang paling relevan bagi Anda.</li>
            <li>Ekspor data ke <strong>Excel</strong> untuk analisis lebih lanjut di luar sistem.</li>
          </ul>
        </div>
      </Section>

      {/* ==================== REPUSH TO PMS ==================== */}
      <Section id="repush-to-pms" title="Kirim Ulang ke PMS">
        <p>
          Fitur <strong>Kirim Ulang ke PMS</strong> memungkinkan Anda untuk mengirim ulang <strong>100 catatan reservasi terbaru</strong> 
          dengan <strong>tanggal check-out di masa depan</strong> ke PMS.
        </p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762480679/repush.png" />

        <h4 className="mt-4 font-medium">Cara Mengirim Ulang ke PMS:</h4>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            Centang kotak untuk mengirim ulang semua reservasi yang memenuhi syarat, atau centang secara manual entri individual dari daftar.
            <div className="mt-1 rounded-md border bg-yellow-50 p-2 text-sm dark:bg-yellow-950/20">
              <strong>Catatan:</strong> Reservasi dengan status <strong>check-out selesai</strong> <strong>tidak dapat</strong> dipilih.
            </div>
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1765430821/tick-to-push.png" />
          <li>
            Masukkan <strong>kata sandi</strong> Anda untuk mengonfirmasi tindakan kirim ulang.
          </li>
          <li>
            Klik <strong>Kirim Ulang</strong> untuk memulai proses. Pengiriman ulang mungkin memakan waktu sekitar <strong>1–2 menit</strong> untuk selesai.
          </li>
        </ol>

        <div className="mt-4 rounded-lg border bg-blue-50 p-4 dark:bg-blue-950/20">
          <p className="text-sm font-medium">Informasi Tambahan:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>Fitur ini berguna jika terjadi kegagalan sinkronisasi antara Channel Manager dan PMS.</li>
            <li>Hanya reservasi dengan <strong>tanggal check-out di masa depan</strong> yang akan dikirim ulang.</li>
            <li>Proses kirim ulang memerlukan <strong>konfirmasi kata sandi</strong> untuk keamanan.</li>
          </ul>
        </div>
      </Section>
    </DocsLayout>
  );
}