import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/dynamic-min-night")({
  head: () => ({
    meta: [
      { title: "Dynamic Minimum Night — Add-Ons | SinergiMax" },
      { name: "description", content: "Sesuaikan minimum malam secara otomatis berdasarkan pola ketersediaan untuk mengoptimalkan okupansi." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "how-to-configure", label: "Cara Mengonfigurasi Dynamic Minimum Night" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Dynamic Minimum Night" activeTo="/docs/channelku/add-ons/dynamic-min-night">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Dynamic Minimum Night</h1>
      <p className="mt-4">
        <strong>Dynamic Minimum Night</strong> adalah fitur yang secara otomatis menyesuaikan <strong>minimum malam</strong> 
        berdasarkan <strong>pola ketersediaan</strong>. Fitur ini dirancang untuk mengoptimalkan okupansi dan mencegah 
        <strong>celah pemesanan yang tidak diinginkan</strong>, seperti <strong>"malam yatim"</strong>, yang terjadi ketika 
        hanya tersisa satu malam di antara dua tanggal pemesanan.
      </p>

      {/* ==================== HOW TO CONFIGURE ==================== */}
      <Section id="how-to-configure" title="Cara Mengonfigurasi Dynamic Minimum Night">
        <p>Berikut cara mengonfigurasi Dynamic Minimum Night:</p>

        <h4 className="mt-4 font-medium">Langkah-langkah Konfigurasi:</h4>
        <ol className="ml-6 list-decimal space-y-4">
          <li>
            <strong>Aktifkan/Nonaktifkan Dynamic Minimum Night:</strong>
            <ul className="ml-6 mt-1 list-disc">
              <li>
                Untuk mengaktifkan fitur ini, alihkan opsi <strong>Aktifkan Dynamic Minimum Night</strong> ke <strong>Aktif</strong>.
              </li>
              <li>
                Untuk menonaktifkannya, alihkan opsi ke <strong>Nonaktif</strong>.
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746757529/01._enable_dynamic_min_night_qa3n3d.jpg" />

            </ul>
          </li>
          <li>
            <strong>Durasi Malam:</strong>
            <ul className="ml-6 mt-1 list-disc">
              <li>
                Pilih <strong>Durasi Menginap</strong> yang diinginkan untuk jumlah minimum malam yang harus diinap oleh tamu.
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746757529/02._length_of_night_z5wrff.jpg" />
            </ul>
          </li>
          <li>
            <strong>Pilih Kamar:</strong>
            <ul className="ml-6 mt-1 list-disc">
              <li>
                Pilih <strong>Kamar</strong> yang ingin Anda atur aturan minimum malam dinamisnya.
              </li>
              <li>
                Anda dapat memilih <strong>kamar tertentu</strong> atau menerapkan pengaturan ke <strong>Semua Kamar Aktif</strong>.
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746757529/03._select_room_kk5qtk.jpg" />
            </ul>
          </li>
          <li>
            <strong>Simpan Pengaturan:</strong>
            <br />
            Setelah mengonfigurasi pengaturan, klik <strong>Simpan</strong> untuk menerapkan perubahan.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746757529/04._save_changes_button_jsdquo.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-blue-50 p-4 dark:bg-blue-950/20">
          <p className="text-sm font-semibold">Catatan Penting:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>
              Opsi <strong>Aktifkan Dynamic Minimum Night</strong> <strong>harus diaktifkan</strong> agar sistem dapat 
              menyesuaikan persyaratan minimum malam secara otomatis berdasarkan pola ketersediaan.
            </li>
            <li>
              Fitur ini memungkinkan Anda untuk mengatur minimum malam untuk <strong>kamar tertentu</strong> atau untuk 
              <strong>semua kamar aktif</strong>, tergantung pada preferensi Anda.
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Dynamic Minimum Night:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Fitur Dynamic Minimum Night tidak berfungsi setelah diaktifkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah mengklik <strong>Simpan</strong> setelah mengaktifkan fitur.
                Periksa kembali apakah Anda telah memilih setidaknya <strong>satu kamar</strong> dan mengatur <strong>Durasi Malam</strong>.
                Coba segarkan halaman untuk mengonfirmasi apakah perubahan telah diterapkan dengan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat memilih kamar saat konfigurasi</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kamar yang ingin Anda konfigurasi adalah <strong>aktif</strong>. Kamar yang tidak aktif tidak akan muncul dalam daftar pilihan.
                Jika menggunakan <strong>"Pilih Semua Kamar Aktif"</strong>, verifikasi bahwa ada kamar aktif yang tersedia dalam pengaturan properti Anda.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Dropdown Durasi Malam kosong atau tidak merespons</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa koneksi internet Anda dan coba lagi.
                Coba bersihkan cache browser atau gunakan jendela <strong>penyamaran</strong> untuk mengesampingkan masalah terkait browser.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Dynamic Minimum Night tidak berlaku untuk pemesanan baru</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan fitur diaktifkan <strong>sebelum</strong> pemesanan dibuat. Aturan hanya berlaku untuk celah ketersediaan yang dibuat <strong>setelah</strong> fitur aktif.
                Periksa kembali apakah kamar yang dipilih dan pengaturan minimum malam telah disimpan dengan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan tidak tercermin setelah menyimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu beberapa saat setelah mengklik <strong>Simpan</strong> untuk memberi waktu sistem memproses pembaruan.
                Jika masalah berlanjut, coba muat ulang halaman atau hubungi dukungan untuk verifikasi log sistem.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}