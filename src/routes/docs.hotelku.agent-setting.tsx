import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/agent-setting")({
  head: () => ({
    meta: [
      { title: "Pengaturan Agen — Hotelku | SinergiMax" },
      { name: "description", content: "Kelola agen online default dan agen offline/ perusahaan kustom dengan warna unik untuk laporan dan bagan pemesanan." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "add-agency", label: "Tambah Agen atau Perusahaan Baru" },
  { id: "change-color", label: "Ubah Warna Agen" },
  { id: "manage-agencies", label: "Kelola Agen yang Ada" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Pengaturan Agen" activeTo="/docs/hotelku/agent-setting">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Pengaturan Agen</h1>
      <p className="mt-4">
        <strong>Pengaturan Agen</strong> adalah halaman konfigurasi yang memungkinkan pengguna untuk mengelola 
        <strong>agen online default</strong> dan <strong>agen offline</strong> atau <strong>perusahaan</strong> yang ditambahkan secara manual. 
        Setiap agen dapat disesuaikan dengan <strong>warna unik</strong>, yang akan muncul di laporan dan bagan pemesanan 
        untuk membedakan sumber reservasi dengan mudah.
      </p>
      <p className="mt-2">
        Halaman ini dibagi menjadi dua bagian:
      </p>
      <ul className="ml-6 list-disc space-y-1">
        <li>Agen online (mis., Expedia, Booking.com, Agoda)</li>
        <li>Agen atau perusahaan kustom yang ditambahkan secara manual</li>
      </ul>

      {/* ==================== ADD AGENCY ==================== */}
      <Section id="add-agency" title="Tambah Agen atau Perusahaan Baru">
        <p>Berikut cara menambahkan agen atau perusahaan baru:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Klik tombol <strong>Tambah Agen</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746775211/01._add_agency_gobjww.jpg" />
          <li>
            Formulir akan muncul dengan bidang-bidang berikut:
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Tipe:</strong> Pilih antara <strong>Agen</strong> atau <strong>Perusahaan</strong>.</li>
              <li><strong>Nama:</strong> Masukkan nama agen atau perusahaan.</li>
              <li><strong>Email:</strong> Alamat email agen.</li>
              <li><strong>Nama Depan / Nama Belakang:</strong> Nama kontak orang yang dapat dihubungi.</li>
              <li><strong>Alamat:</strong> Alamat fisik agen.</li>
              <li><strong>NPWP:</strong> Nomor Pokok Wajib Pajak (opsional).</li>
            </ul>
          </li>
          <li>Klik <strong>Tambah Agen</strong> untuk menyimpan.</li>
          <li>
            Agen baru akan muncul di <strong>sisi kanan layar</strong>, dengan opsi konfigurasi warna yang sama.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746775211/02._add_agency_form_cdvq7c.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Tambah Agen atau Perusahaan Baru:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Formulir tidak muncul setelah mengklik "Tambah Agen"</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman dan coba klik tombol lagi. Pastikan browser Anda mengizinkan <strong>pop-up</strong> dan 
                <strong>JavaScript</strong> diaktifkan. Periksa apakah Anda memiliki izin yang benar untuk menambahkan agen baru.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat menyimpan agen (tombol tidak responsif atau tidak ada perubahan)</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa semua bidang yang diperlukan (<strong>Tipe</strong>, <strong>Nama</strong>, <strong>Email</strong>, 
                <strong>Nama Depan</strong>, <strong>Nama Belakang</strong>, <strong>Alamat</strong>) diisi dengan benar.
                Periksa format email yang tidak valid di bidang <strong>Email</strong>. Pastikan tidak ada <strong>nama agen duplikat</strong> yang ditambahkan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Agen baru tidak muncul setelah pengiriman</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu beberapa detik untuk memberi waktu halaman memperbarui, atau segarkan halaman untuk melihat apakah agen muncul.
                Verifikasi apakah ada <strong>filter</strong> yang diterapkan yang mungkin menyembunyikan entri baru.
                Jika masalah berlanjut, bersihkan <strong>cache browser</strong> dan coba lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Opsi konfigurasi warna tidak terlihat</dt>
              <dd className="ml-4 text-muted-foreground">
                Arahkan kursor atau klik agen yang baru ditambahkan di <strong>panel sisi kanan</strong> untuk menampilkan opsi konfigurasi.
                Pastikan pengaturan UI tidak diminimalkan atau diciutkan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pesan kesalahan muncul saat mengirim formulir</dt>
              <dd className="ml-4 text-muted-foreground">
                Tinjau formulir untuk setiap input yang <strong>hilang</strong> atau <strong>formatnya salah</strong>.
                Periksa apakah koneksi internet Anda stabil dan coba kirim ulang.
                Jika perlu, hubungi administrator sistem Anda untuk bantuan lebih lanjut.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== CHANGE COLOR ==================== */}
      <Section id="change-color" title="Ubah Warna Agen">
        <p>
          Setiap agen diberi <strong>kode warna</strong> yang digunakan dalam laporan dan tampilan kalender.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengubah Warna Agen:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Temukan <strong>nama agen</strong> (mis., Expedia, Booking.com).</li>
          <li>Klik <strong>bidang warna</strong> untuk mengubah kode warna.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746775211/03._change_color_jq9jjl.jpg" />
          <li>Klik <strong>Ubah Warna</strong> untuk menyimpan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746775211/04._change_color_pei4dz.jpg" />
          <li>
            Klik <strong>Salin Semua</strong> jika Anda ingin menerapkan <strong>warna yang sama</strong> ke semua rate plan untuk agen tersebut.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746775211/05._copy_all_u5w3qe.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Ubah Warna Agen:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Pemilih warna tidak muncul saat mengklik bidang warna</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan browser Anda mendukung <strong>JavaScript</strong> dan diaktifkan. Coba segarkan halaman dan klik bidang warna lagi.
                Konfirmasikan bahwa Anda memiliki izin untuk mengedit pengaturan agen.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat menyimpan warna baru (tombol Ubah Warna tidak responsif)</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan warna yang valid dipilih dari pemilih. Tunggu sebentar setelah mengklik dan pastikan UI memperbarui.
                Periksa koneksi internet Anda sebelum mengirim perubahan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Warna tidak memperbarui di kalender atau laporan setelah menyimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Coba <strong>refresh</strong> halaman atau navigasikan ke kalender/laporan lagi. 
                Bersihkan <strong>cache browser</strong> untuk memastikan pengaturan terbaru dimuat.
              </dd>
            </div>
            <div>
              <dt className="font-medium">"Salin Semua" tidak menerapkan warna ke semua rate plan</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa agen memiliki <strong>beberapa rate plan</strong> yang terkait dengannya.
                Coba klik <strong>"Salin Semua"</strong> lagi dan konfirmasikan dengan <strong>refresh</strong> halaman.
                Jika masalah berlanjut, periksa setiap rate plan secara manual atau hubungi dukungan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== MANAGE AGENCIES ==================== */}
      <Section id="manage-agencies" title="Kelola Agen yang Ada">
        <p>Untuk setiap agen yang ditambahkan secara manual, Anda dapat melakukan tindakan berikut:</p>

        <ul className="ml-6 list-disc space-y-1">
          <li>
            Klik <strong>Ubah Warna</strong> untuk memperbarui <strong>warna tampilan</strong>.
          </li>
          <li>
            Klik <strong>Edit</strong> untuk mengubah <strong>detail agen</strong>.
          </li>
          <li>
            Klik <strong>Hapus</strong> untuk <strong>menghapus</strong> agen.
          </li>
          <li>
            Klik <strong>Salin Semua</strong> untuk menerapkan warna ke <strong>semua rate plan</strong> yang terkait dengan agen tersebut.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746775211/06._existing_agency_f3uf0h.jpg" />
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Kelola Agen yang Ada:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tombol Edit tidak merespons</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman dan coba lagi. Pastikan Anda memiliki <strong>izin pengguna</strong> yang benar untuk mengubah detail agen.
                Periksa apakah agen ditambahkan secara <strong>manual</strong>. Hanya agen yang ditambahkan secara manual yang dapat diedit.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat menghapus agen</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan agen <strong>tidak terhubung</strong> ke rate plan atau pemesanan aktif.
                Coba hapus setelah <strong>memutuskan koneksi</strong> agen dari semua data yang tertaut.
                Jika tombol <strong>"Hapus"</strong> tidak aktif, periksa izin pengguna atau hubungi dukungan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan pada detail agen tidak tersimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang yang diperlukan (mis., nama, email) diisi dengan benar.
                Periksa koneksi internet dan coba simpan ulang. Hindari penggunaan <strong>karakter khusus</strong> yang mungkin tidak diizinkan di bidang tertentu.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pembaruan warna atau "Salin Semua" tidak diterapkan ke rate plan</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa agen memiliki <strong>beberapa rate plan</strong>. Segarkan halaman setelah menerapkan perubahan untuk mengonfirmasi pembaruan.
                Coba perbarui satu plan secara manual untuk mengonfirmasi bahwa ini bukan masalah tampilan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}