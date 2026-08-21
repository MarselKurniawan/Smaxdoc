import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/housekeeping")({
  head: () => ({
    meta: [
      { title: "Housekeeping — Hotelku | SinergiMax" },
      { name: "description", content: "Kelola status kebersihan kamar, tambahkan catatan internal, dan komunikasi antara staf housekeeping dan tim front office." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "change-status", label: "Ubah Status Kamar" },
  { id: "add-comments", label: "Tambah Komentar" },
  { id: "direct-link", label: "Tautan Langsung Housekeeping" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Housekeeping" activeTo="/docs/hotelku/housekeeping">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Housekeeping</h1>
      <p className="mt-4">
        <strong>Housekeeping</strong> adalah konfigurasi untuk mengelola <strong>status kebersihan kamar</strong>, 
        menambahkan <strong>catatan internal</strong>, dan memfasilitasi <strong>komunikasi</strong> antara staf housekeeping 
        dan tim front office. Fitur ini memastikan bahwa status kamar dilacak dan diperbarui secara <strong>real-time</strong>, 
        meningkatkan efisiensi operasional.
      </p>

      {/* ==================== CHANGE STATUS ==================== */}
      <Section id="change-status" title="Ubah Status Kamar">
        <p>Berikut cara mengubah status kamar:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Buka menu <strong>Housekeeping</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747104557/01._navigate_hotelku_mhgrav.jpg" />
          <li>
            Di kolom <strong>Kondisi Kamar</strong>, klik pada <strong>status saat ini</strong> dari kamar yang diinginkan.
          </li>
          <Figure label=""
          src="/images/Housekeeping/03._room_condition_tlstum.jpg" />
          <li>
            Pilih <strong>status baru</strong> dari opsi yang tersedia (mis., <strong>Bersih</strong>, <strong>Kotor</strong>, <strong>Siap</strong>).
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747104558/03._change_status_bnpwqm.jpg" />
          <li>
            Klik ikon <strong>Centang</strong> untuk menyimpan perubahan. Status akan diperbarui.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747104558/04._click_checkmark_cwfpqv.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-blue-50 p-4 dark:bg-blue-950/20">
          <p className="text-sm font-medium">Otomatisasi:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>
              Sistem dapat secara otomatis mengubah status kamar menjadi <strong>Kotor</strong> setiap hari pada <strong>pukul 02:00</strong> 
              untuk semua kamar yang terisi. Otomatisasi ini bergantung pada pengaturan properti dan dapat menunjukkan status 
              <strong>Aktif</strong> atau <strong>Nonaktif</strong>.
            </li>
            <Figure label=""
            src="/images/Housekeeping/05._enable_disable_status_hhgjdj.jpg" />
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Ubah Status Kamar:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Status tidak dapat diubah / dropdown tidak merespons</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memiliki <strong>peran pengguna</strong> atau izin yang tepat untuk mengubah status kamar.
                Segarkan halaman dan coba lagi untuk memastikan antarmuka dimuat sepenuhnya.
                Jika menggunakan <strong>versi seluler</strong> atau <strong>browser lama</strong>, beralihlah ke browser desktop untuk fungsionalitas penuh.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Status tidak tersimpan setelah mengklik centang</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu beberapa saat setelah mengklik centang untuk memberi waktu sistem memproses pembaruan.
                Periksa kembali koneksi internet Anda; koneksi yang tidak stabil dapat mencegah penyimpanan perubahan.
                Jika masalah berlanjut, coba pilih ulang status dan klik centang lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Status kamar tidak berubah secara otomatis pada pukul 02:00</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa apakah fitur <strong>auto-dirty</strong> diaktifkan dalam pengaturan properti Anda.
                Jika auto-dirty diaktifkan tetapi tidak berfungsi, hubungi dukungan untuk memverifikasi pengaturan otomatisasi terjadwal.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== ADD COMMENTS ==================== */}
      <Section id="add-comments" title="Tambah Komentar">
        <p>Berikut cara menambahkan komentar:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            Di kolom <strong>Komentar</strong>, klik pada <strong>komentar yang ada</strong> atau <strong>bidang kosong</strong> 
            untuk kamar yang diinginkan.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747104558/06._comments_n1pfbx.jpg" />
          <li>Masukkan komentar Anda di <strong>kotak teks</strong>.</li>
          <li>Klik ikon <strong>Centang</strong> untuk menyimpan komentar.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747104559/07._add_comments_rcnvg6.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>Pengguna yang terdaftar <strong>berdasarkan nama pengguna</strong> yang digunakan untuk masuk.</li>
            <li>
              Komentar di Housekeeping <strong>tidak terhubung</strong> dengan <strong>Komentar Pribadi</strong> dan 
              <strong>Komentar Tamu</strong> di Bagan Pemesanan.
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Tambah Komentar:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat menambahkan atau mengedit komentar</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda <strong>masuk</strong>; sistem melacak komentar berdasarkan pengguna yang masuk.
                Konfirmasikan Anda mengklik di dalam kolom <strong>Komentar</strong>, bukan di tempat lain dalam baris.
                Hindari penggunaan <strong>karakter khusus</strong> yang mungkin tidak didukung.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Komentar tidak tersimpan setelah mengklik centang</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu sebentar setelah menyimpan; mungkin perlu satu detik untuk tercermin.
                Segarkan halaman untuk memverifikasi apakah komentar telah diterapkan.
                Jika tidak tersimpan, masukkan ulang komentar dan simpan lagi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== DIRECT LINK ==================== */}
      <Section id="direct-link" title="Tautan Langsung Housekeeping">
        <p>
          Sistem menyediakan <strong>Tautan Langsung Housekeeping</strong> yang memungkinkan staf housekeeping untuk 
          <strong>memperbarui status kamar</strong> tanpa harus masuk ke sistem utama.
        </p>

        <ul className="ml-6 list-disc space-y-1">
          <li>
            Tautan ini dapat diakses melalui <strong>perangkat seluler</strong> atau perangkat apa pun yang mendukung browser.
          </li>
          <li>
            Untuk memanfaatkan fitur ini, <strong>salin dan bagikan</strong> tautan langsung dengan staf housekeeping Anda.
          </li>
          <Figure label=""
          src="/images/Housekeeping/08._direct_link_sarhq0.jpg" />
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Tautan Langsung Housekeeping:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tautan langsung tidak dapat diakses</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan tautan <strong>disalin dengan benar</strong> dan dibagikan secara lengkap.
                Periksa bahwa tautan dibuka di <strong>browser atau perangkat yang didukung</strong>.
                Jika tautan <strong>kedaluwarsa</strong> atau dibatasi, buat yang baru dari sistem.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Staf housekeeping tidak dapat memperbarui status kamar dari tautan langsung</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa tautan memiliki <strong>izin yang tepat</strong> untuk pembaruan.
                Periksa apakah perangkat yang digunakan memiliki <strong>koneksi internet aktif</strong>.
                Pastikan tautan tidak diatur ke mode <strong>"hanya-tampilan"</strong>, jika pengaturan tersebut ada di properti.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}