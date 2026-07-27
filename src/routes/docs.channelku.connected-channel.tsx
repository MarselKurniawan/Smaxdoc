import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/connected-channel")({
  head: () => ({
    meta: [
      { title: "Saluran Terhubung — Channelku | SinergiMax" },
      { name: "description", content: "Pilih dan hubungkan saluran OTA yang tersedia untuk properti Anda." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "how-to-use", label: "Cara Menggunakan Saluran Terhubung" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Saluran Terhubung" activeTo="/docs/channelku/channel-manager/connected-channel">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Saluran Terhubung</h1>
      <p className="mt-4">
        Bagian ini memungkinkan Anda untuk memilih dan menghubungkan saluran OTA yang tersedia ke properti Anda.
      </p>

      {/* ==================== HOW TO USE ==================== */}
      <Section id="how-to-use" title="Cara Menggunakan Saluran Terhubung">
        <p>Berikut cara menggunakan fitur Saluran Terhubung:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Buka menu <strong>ChannelKu</strong>, lalu pilih <strong>Saluran Terhubung</strong>.</li>
          <li>
            Anda akan melihat grid yang menampilkan daftar logo OTA seperti:
            <ul className="ml-6 mt-1 list-disc">
              <li>Expedia</li>
              <li>Booking.com</li>
              <li>Agoda</li>
              <li>Google Hotel</li>
              <li>Dan lainnya yang tersedia untuk integrasi.</li>
                        <Figure label=""
                        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544249/01._list_OTA_rsliys.png" />
            </ul>
          </li>
          <li>
            Centang kotak di bawah setiap logo OTA untuk memilih saluran yang ingin Anda hubungkan.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746512219/02._check_box_under_logo_n6gvbf.jpg" />
          <li>
            Gunakan opsi <strong>Centang Semua</strong> atau <strong>Hapus Centang Semua</strong> di bagian atas untuk mengelola pilihan dengan cepat.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746512219/03._check_or_uncheck_all_h7w4mm.jpg" />
          <li>
            Setelah OTA yang diinginkan dipilih, klik tombol <strong>Simpan</strong> untuk menerapkan perubahan.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746512219/04._save_button_mz762q.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-semibold">Penting:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>Pastikan untuk hanya memilih OTA yang Anda miliki kontrak aktif.</li>
            <li>
              Setelah menyimpan, Anda mungkin perlu melanjutkan ke <strong>pemetaan</strong> atau <strong>input kredensial</strong> 
              tergantung pada persyaratan OTA.
            </li>
            <li>
              Beberapa saluran mungkin memerlukan aktivasi atau pengaturan sebelumnya melalui extranet OTA sebelum menghubungkan.
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Saluran Terhubung:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Kotak centang di bawah logo OTA tidak dapat diklik</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan halaman telah dimuat sepenuhnya sebelum berinteraksi dengan kotak centang.
                Coba segarkan halaman atau gunakan browser lain.
                Verifikasi bahwa browser Anda tidak berjalan dalam mode kompatibilitas atau memblokir skrip.
              </dd>
            </div>
            <div>
              <dt className="font-medium">OTA yang dipilih tidak tersimpan setelah mengklik Simpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih setidaknya satu OTA sebelum mengklik <strong>Simpan</strong>.
                Tunggu beberapa saat setelah mengklik <strong>Simpan</strong> untuk memberi waktu sistem memproses pilihan Anda.
                Jika perubahan masih tidak tersimpan, segarkan halaman dan coba lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">OTA yang ingin saya hubungkan tidak terlihat dalam daftar</dt>
              <dd className="ml-4 text-muted-foreground">
                Hanya OTA yang tersedia dengan integrasi aktif yang ditampilkan dalam daftar.
                Pastikan properti Anda memiliki kontrak aktif dengan OTA tersebut.
                Beberapa OTA mungkin memerlukan aktivasi terlebih dahulu melalui extranet mereka sendiri sebelum muncul dalam daftar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Fungsi Centang Semua / Hapus Centang Semua tidak berfungsi</dt>
              <dd className="ml-4 text-muted-foreground">
                Muat ulang halaman dan coba lagi.
                Jika masalah berlanjut, coba gunakan browser lain atau bersihkan cache browser Anda.
                Pastikan koneksi internet Anda stabil saat melakukan tindakan massal.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan tidak tercermin dalam langkah pemetaan atau kredensial</dt>
              <dd className="ml-4 text-muted-foreground">
                Menyimpan pilihan saluran tidak secara otomatis memicu langkah berikutnya.
                Setelah menyimpan, navigasikan secara manual ke bagian <strong>pemetaan</strong> atau <strong>input kredensial</strong> untuk setiap OTA.
                Beberapa OTA mungkin memiliki persyaratan pengaturan tambahan di extranet mereka sebelum melanjutkan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}