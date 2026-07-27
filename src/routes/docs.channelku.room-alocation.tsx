import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/room-alocation")({
  head: () => ({
    meta: [
      { title: "Alokasi Kamar — Channelku | SinergiMax" },
      { name: "description", content: "Kontrol alokasi unit kamar dan rate plan ke OTA tertentu." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "how-to-set", label: "Cara Mengatur Alokasi Kamar" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Alokasi Kamar" activeTo="/docs/channelku/channel-manager/room-allocation">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Alokasi Kamar</h1>
      <p className="mt-4">
        Fitur ini memungkinkan Anda untuk mengontrol berapa banyak unit dari setiap <strong>tipe kamar</strong> dan <strong>rate plan</strong> 
        yang dialokasikan ke OTA tertentu.
      </p>

      {/* ==================== HOW TO SET ==================== */}
      <Section id="how-to-set" title="Cara Mengatur Alokasi Kamar">
        <p>Berikut cara mengatur Alokasi Kamar:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Buka bagian <strong>Alokasi Kamar</strong>.</li>
          <li>
            Temukan <strong>tipe kamar</strong> dan <strong>rate plan</strong> yang terkait yang ingin Anda konfigurasi.
          </li>
          <li>
            Di kolom <strong>Unit yang Dialokasikan</strong>, pilih jumlah unit yang ingin Anda alokasikan ke OTA.
          </li>
          <li>
            Klik <strong>Perbarui</strong> untuk menyimpan perubahan.
          </li>
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Contoh:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>
              Jika Anda memiliki tipe kamar dengan 10 unit dan ingin mengalokasikan hanya 4 unit ke Booking.com, 
              pilih <strong>4</strong> di bawah kolom <strong>Unit yang Dialokasikan</strong> dan klik <strong>Perbarui</strong>.
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Catatan Penting:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li>
              Fitur ini <strong>dinonaktifkan</strong> secara default. Untuk mengaktifkan Alokasi Kamar, 
              silakan hubungi <strong>Dukungan Bookandlink</strong>.
            </li>
                      <Figure label=""
                      src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544091/01._room_allocation_fovqya.png" />
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Alokasi Kamar:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tombol "Perbarui" tidak terlihat</dt>
              <dd className="ml-4 text-muted-foreground">
                Fitur Alokasi Kamar mungkin dinonaktifkan untuk properti Anda.
                Silakan hubungi <strong>Dukungan Bookandlink</strong> untuk meminta aktivasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Unit yang dialokasikan tidak dapat diubah atau diedit</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan fitur Alokasi Kamar telah diaktifkan.
                Segarkan halaman dan coba lagi setelah aktivasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan alokasi tidak tercermin di OTA</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda mengklik tombol <strong>Perbarui</strong> setelah mengatur unit yang dialokasikan.
                Verifikasi bahwa OTA terhubung dan dipetakan dengan benar.
                Coba lakukan <strong>Pembaruan OTA</strong> dari bagian yang relevan (mis., Penawaran Bulanan atau Penawaran Tahunan).
              </dd>
            </div>
            <div>
              <dt className="font-medium">Jumlah unit yang dialokasikan kembali setelah disimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Ini mungkin terjadi jika ada penundaan sinkronisasi dengan OTA.
                Tunggu beberapa saat dan segarkan halaman untuk memeriksa apakah perubahan bertahan.
                Terapkan ulang alokasi dan klik <strong>Perbarui</strong> lagi jika diperlukan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tipe kamar atau rate plan yang salah ditampilkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa pemetaan antara tipe kamar/rate plan internal dan OTA sudah lengkap.
                Buka bagian <strong>Pemetaan</strong> dan verifikasi bahwa setiap rate plan telah ditetapkan dengan benar.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}