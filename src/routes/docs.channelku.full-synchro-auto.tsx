import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/full-synchro-auto")({
  head: () => ({
    meta: [
      { title: "Sinkronisasi Penuh Otomatis — Channelku | SinergiMax" },
      { name: "description", content: "Sinkronkan ketersediaan, harga, dan pembatasan properti di semua OTA yang terhubung secara otomatis." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "how-to-use", label: "Cara Menggunakan Sinkronisasi Penuh Otomatis" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Sinkronisasi Penuh Otomatis" activeTo="/docs/channelku/channel-manager/full-synchro-auto">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Sinkronisasi Penuh Otomatis</h1>
      <p className="mt-4">
        Fitur <strong>Sinkronisasi Penuh Otomatis</strong> memungkinkan Anda untuk menyinkronkan ketersediaan, harga, 
        dan pembatasan properti di semua OTA yang terhubung dalam satu tindakan. Ini memastikan konsistensi dan mengurangi 
        risiko perbedaan antara sistem internal Anda dan saluran eksternal.
      </p>

      {/* ==================== HOW TO USE ==================== */}
      <Section id="how-to-use" title="Cara Menggunakan Sinkronisasi Penuh Otomatis">
        <p>Berikut cara menggunakan Sinkronisasi Penuh Otomatis:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Buka bagian <strong>Channel Manager</strong> dan pilih <strong>Sinkronisasi Penuh Otomatis</strong>.</li>
          <li>
            Anda akan melihat tabel dengan kolom-kolom berikut:
            <ul className="ml-6 mt-1 list-disc">
              <li>
                <strong>Diaktifkan:</strong> Centang kotak ini untuk mengaktifkan sinkronisasi otomatis untuk properti yang sesuai.
              </li>
              <li>
                <strong>ID Properti:</strong> ID unik properti.
              </li>
              <li>
                <strong>Nama Properti:</strong> Nama properti.
              </li>
              <li>
                <strong>Pembaruan Terakhir:</strong> Waktu terakhir sistem mencoba sinkronisasi.
              </li>
              <li>
                <strong>Hasil:</strong> Menampilkan apakah sinkronisasi berhasil atau <strong>TIDAK DIPERBARUI</strong>.
              </li>
              <li>
                <strong>Pesan:</strong> Akan menampilkan pesan kesalahan yang relevan jika sinkronisasi gagal.
              </li>
              <li>
                <strong>Diperiksa:</strong> Digunakan secara internal untuk melacak status verifikasi terbaru.
              </li>
            </ul>
          </li>
          <li>
            Pastikan kotak centang di kolom <strong>Diaktifkan</strong> dicentang untuk properti yang ingin Anda sertakan dalam sinkronisasi.
          </li>
          <li>
            Tunggu sistem menjalankan sinkronisasi terjadwal secara otomatis.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544265/01._full_synchro_auto_umnbav.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-semibold">Catatan Penting:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>
              Hanya properti dengan kotak <strong>Diaktifkan</strong> yang dicentang akan disertakan dalam sinkronisasi otomatis.
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Sinkronisasi Penuh Otomatis:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Properti menunjukkan “TIDAK DIPERBARUI” di kolom Hasil</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu beberapa menit dan periksa kembali — sinkronisasi mungkin tertunda karena beban server yang tinggi.
                Periksa kolom <strong>Pesan</strong> untuk detail kesalahan spesifik.
                Pastikan properti dipetakan dengan benar dan memiliki data harga/ketersediaan yang valid.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Sinkronisasi tidak berjalan untuk sebuah properti</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa kotak centang di bawah kolom <strong>Diaktifkan</strong> dicentang.
                Properti dengan kotak centang yang tidak dicentang tidak akan disertakan dalam sinkronisasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kolom Pesan kosong meskipun sinkronisasi gagal</dt>
              <dd className="ml-4 text-muted-foreground">
                Ini mungkin menunjukkan kegagalan diam-diam atau penundaan dalam pencatatan log — segarkan halaman atau coba sinkronisasi lagi.
                Jika masalah berlanjut, hubungi <strong>Dukungan Bookandlink</strong> dengan <strong>ID Properti</strong> yang terpengaruh.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Data tetap kedaluwarsa di OTA bahkan setelah sinkronisasi</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan stempel waktu sinkronisasi terakhir yang berhasil di kolom <strong>Pembaruan Terakhir</strong>.
                Pastikan saluran OTA dipetakan dengan benar dan aktif.
                Lakukan sinkronisasi manual jika mendesak dan pantau hasilnya.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}