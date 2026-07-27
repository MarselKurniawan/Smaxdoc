import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/rooms")({
  head: () => ({
    meta: [
      { title: "Kelola Kamar — Channelku | SinergiMax" },
      { name: "description", content: "Kelola Tipe Kamar, Rateplan, dan Rateplan Tertaut di Channelku." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "create-room-type", label: "Buat Tipe Kamar" },
  { id: "create-rateplan", label: "Buat Rateplan" },
  { id: "create-linked-rateplan", label: "Buat Rateplan Tertaut" },
  { id: "rearrange", label: "Atur Ulang Tata Letak" },
  { id: "edit", label: "Edit" },
  { id: "copy", label: "Salin Rateplan" },
  { id: "delete", label: "Hapus" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Kelola Kamar" activeTo="/docs/channelku/setting/rooms">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Kelola Kamar</h1>
      <p className="mt-4">
        Bagian <strong>Kamar</strong> memungkinkan pengelola properti untuk membuat dan mengelola <strong>Tipe Kamar</strong>,
        <strong>Rateplan</strong>, dan <strong>Rateplan Tertaut</strong>. Anda juga dapat mengatur ulang urutan tipe kamar dan rateplan
        untuk visibilitas dan organisasi yang lebih baik di halaman pemesanan.
      </p>

      {/* ==================== CREATE ROOM TYPE ==================== */}
      <Section id="create-room-type" title="Buat Tipe Kamar">
        <p>
          Fungsi <strong>Buat Tipe Kamar</strong> memungkinkan pengelola properti untuk mendefinisikan tipe kamar baru dengan memasukkan
          nama kamar, deskripsi, dan total unit. Opsi tambahan termasuk memilih fasilitas tertentu dan mengunggah gambar khusus tipe kamar.
          Tipe kamar ini berfungsi sebagai dasar untuk menetapkan rateplan dan sangat penting untuk mengorganisir penawaran akomodasi secara efektif.
        </p>

        <h4 className="mt-4 font-medium">Cara Membuat Tipe Kamar:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka <strong>Pengaturan &gt; Kamar</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745974981/00._settings_ytpbnl.jpg" />
          <li>Klik <strong>Buat Tipe Kamar</strong> untuk memulai.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745975000/01._create_room_type_button_bquqiz.jpg" />
          <li>
            Isi detail <strong>Tipe Kamar</strong>:
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Nama</strong> – Nama tipe kamar (misalnya, Kamar Standar).</li>
              <li><strong>Deskripsi</strong> – Deskripsi singkat tentang tipe kamar ini.</li>
              <li><strong>Total Unit</strong> – Jumlah total kamar yang tersedia di bawah tipe ini.</li>
              <li><strong>Jumlah Kamar Tidur</strong> – Jumlah kamar tidur di dalam unit.</li>
              <li><strong>Hari Batas Pemesanan</strong> – Batasi berapa hari sebelum kedatangan kamar dapat dipesan.</li>
              <li><strong>Aktifkan Fitur Penugasan Otomatis</strong> – Secara otomatis menetapkan kamar dari inventaris yang tersedia.</li>
              <li><strong>Aktifkan Fitur Penetapan Harga Dinamis</strong> – Aktifkan penyesuaian harga berdasarkan permintaan dan aturan.</li>
              <li><strong>Kamar Tersedia</strong> – Pilih kamar spesifik yang termasuk dalam tipe kamar ini.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778573091/new-create-room.png" />
            </ul>
          </li>
          <li>
            <p className="mt-2 text-sm text-muted-foreground">
              <strong>Catatan:</strong> Fitur <strong>Alokasi Bebas</strong> memungkinkan sinkronisasi ketersediaan tanpa konfigurasi alokasi kamar manual.
              Mulai 8 Mei 2026, fitur ini hanya dapat diaktifkan melalui Tim Dukungan. Silakan hubungi tim dukungan Anda untuk bantuan aktivasi.
            </p>
          </li>
          <li>Klik <strong>Tampilkan Fasilitas</strong> dan pilih opsi yang tersedia.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778573294/new-show-amenities.png" />
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778573294/new-show-amenities.png" />
          <li>Klik <strong>Tampilkan Gambar</strong>, lalu unggah dan tetapkan gambar khusus untuk tipe kamar ini.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778573299/new-show-images.png" />
          <li>Klik <strong>Simpan Perubahan</strong> untuk menyelesaikan pengaturan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544326/06._select_image_and_save_k1yxff.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Membuat Tipe Kamar:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak Dapat Menyimpan Tipe Kamar</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang wajib (mis., Nama Kamar, Deskripsi, Total Unit) diisi.
                Periksa apakah Anda telah memilih setidaknya satu <strong>Kamar Tersedia</strong>. Jika tidak ada yang dipilih, sistem tidak akan mengizinkan Anda menyimpan.
                Jika ada gambar yang diunggah, verifikasi bahwa gambar tersebut memenuhi panduan format dan dimensi yang diperlukan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kesalahan Saat Mengunggah Gambar</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan gambar yang Anda unggah memenuhi ukuran dan format yang direkomendasikan.
                Segarkan halaman dan coba unggah lagi jika gambar tidak muncul.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Daftar Fasilitas Tidak Muncul</dt>
              <dd className="ml-4 text-muted-foreground">
                Coba klik <strong>Tampilkan Fasilitas</strong> lagi untuk menyegarkan daftar.
                Pastikan Anda telah memilih opsi yang tepat untuk mengaktifkan fasilitas untuk tipe kamar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan Tidak Tercermin Setelah Menyimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu beberapa detik agar sistem memperbarui setelah mengklik <strong>Simpan Perubahan</strong>.
                Segarkan halaman setelah menunggu notifikasi konfirmasi untuk memastikan perubahan disimpan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== CREATE RATEPLAN ==================== */}
      <Section id="create-rateplan" title="Buat Rateplan">
        <p>
          Fitur <strong>Buat Rateplan</strong> memungkinkan pengaturan harga dan aturan pemesanan untuk tipe kamar tertentu.
          Ini mencakup bidang untuk mengatur tarif default, masa menginap minimum, kebijakan pembatalan, jumlah deposit, dan biaya orang tambahan.
          Rateplan juga memungkinkan properti untuk menentukan apakah tarif harus terlihat di halaman pemesanan, mendukung strategi penetapan harga yang fleksibel.
        </p>

        <h4 className="mt-4 font-medium">Cara Membuat Rateplan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik <strong>Buat Rateplan</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544329/07._create_rateplan_w7zhyt.png" />
          <li>Isi <strong>Nama</strong> dan <strong>Deskripsi</strong> Rateplan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745977471/08._create_or_edit_rateplan_-_1_kbpopm.png" />
          <li>
            Konfigurasikan pengaturan rateplan:
            <ul className="ml-6 list-disc">
              <li><strong>Jumlah Orang</strong></li>
              <li><strong>Biaya Orang Tambahan</strong> (jika ada)</li>
              <li><strong>Visibilitas di Halaman Pemesanan</strong> (Tampilkan/Sembunyikan)</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745977471/08._create_or_edit_rateplan_-_2_iuti7g.png" />
            </ul>
          </li>
          <li>
            Pengaturan tambahan:
            <ul className="ml-6 list-disc">
              <li><strong>Tarif Default</strong></li>
              <li><strong>Malam Minimum</strong></li>
              <li><strong>Tarif Minimum yang Diizinkan</strong></li>
              <li><strong>Kebijakan Pembatalan</strong></li>
              <li><strong>Jumlah Deposit</strong></li>
              <li><strong>Termasuk Sarapan</strong> (centang = termasuk sarapan; tidak dicentang = hanya kamar)</li>
            </ul>
          </li>
          <li>Klik <strong>Simpan Perubahan</strong> untuk menyelesaikan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745977470/09._save_changes_eogyyw.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Membuat Rateplan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak Dapat Menyimpan Rateplan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang wajib (mis., Nama Rateplan, Deskripsi, Tarif Default) diisi.
                Jika menggunakan kebijakan pembatalan, pastikan kebijakan tersebut dipilih dengan benar dari opsi yang tersedia.
                Periksa apakah semua pengaturan seperti Jumlah Orang dan Biaya Orang Tambahan telah dikonfigurasi dengan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Rateplan Tidak Terlihat di Halaman Pemesanan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Visibilitas di Halaman Pemesanan</strong> diatur ke <strong>Tampilkan</strong>.
                Verifikasi bahwa <strong>Tarif Default</strong> telah diatur dan valid untuk ditampilkan di halaman pemesanan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Biaya Orang Tambahan Tidak Diterapkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali pengaturan <strong>Biaya Orang Tambahan</strong> untuk memastikan itu diaktifkan dan dikonfigurasi dengan benar.
                Pastikan bidang <strong>Jumlah Orang</strong> diatur dengan benar sesuai kapasitas kamar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan Tidak Tercermin Setelah Menyimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu beberapa detik agar sistem memperbarui setelah mengklik <strong>Simpan Perubahan</strong>.
                Segarkan halaman setelah pesan konfirmasi muncul untuk memverifikasi bahwa perubahan telah diterapkan dengan benar.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== CREATE LINKED RATEPLAN ==================== */}
      <Section id="create-linked-rateplan" title="Buat Rateplan Tertaut">
        <p>
          <strong>Rateplan Tertaut</strong> adalah struktur tarif turunan berdasarkan rateplan induk. Opsi ini menyederhanakan proses pembuatan
          harga diskon atau penyesuaian dengan menerapkan aturan kenaikan/penurunan menggunakan jumlah tetap atau persentase.
          Rateplan tertaut mewarisi tipe kamar dan konteks rateplan sambil memungkinkan konfigurasi untuk visibilitas, kebijakan, dan penanganan tamu tambahan.
        </p>

        <h4 className="mt-4 font-medium">Cara Membuat Rateplan Tertaut:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik <strong>Buat Tautan Rate</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544215/10._create_linked_rateplan_olebbl.png" />
          <li>
            Isi <strong>Nama</strong> dan <strong>Deskripsi</strong>:
            <ul className="ml-6 list-disc">
              <li><strong>Nama</strong> – Masukkan nama Rateplan Tertaut.</li>
              <li><strong>Deskripsi</strong> – Berikan detail tentang rateplan ini (opsional, multibahasa).</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745978188/11._create_or_edit_rateplan_-_1_vnjqw7.png" />
            </ul>
          </li>
          <li>
            Konfigurasikan pengaturan rate tertaut:
            <ul className="ml-6 list-disc">
              <li><strong>Aturan</strong> – Pilih apakah harga tertaut akan <strong>naik</strong> atau <strong>turun</strong> dari tarif dasar.</li>
              <li><strong>Jumlah</strong> – Masukkan nilai untuk ditambah atau dikurangi.</li>
              <li><strong>Tipe Jumlah</strong> – Pilih antara <strong>Jumlah</strong> (nilai tetap) atau <strong>Persentase</strong>.</li>
              <li><strong>Tampilkan/Sembunyikan di Halaman Pemesanan</strong> – Kontrol visibilitas kepada tamu.</li>
              <li><strong>Tampilkan/Sembunyikan Rateplan di Kalender Penawaran Bulanan</strong> – Kontrol visibilitas untuk manajemen penawaran berbasis kalender.</li>
              <li><strong>Jumlah Orang</strong> – Tentukan kapasitas tamu default.</li>
              <li><strong>Orang Tambahan &amp; Biaya</strong> – Tetapkan kebijakan dan biaya untuk tamu tambahan.</li>
              <li><strong>Malam Minimum</strong> – Persyaratan menginap minimum.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745978189/11._create_or_edit_rateplan_-_2_jcphlf.jpg" />
            </ul>
          </li>
          <li>
            Pengaturan tambahan:
            <ul className="ml-6 list-disc">
              <li>
                <strong>Kebijakan Pembatalan:</strong>
                <ul className="ml-6 list-circle">
                  <li><strong>Kebijakan Pembatalan Umum Hotel</strong> – menerapkan kebijakan default properti.</li>
                  <li><strong>Tidak Dapat Dikembalikan</strong> – tamu akan dikenakan biaya 100% terlepas dari waktu pembatalan.</li>
                  <li>
                    <strong>Kebijakan Kustom</strong> – pilih opsi ini untuk menentukan kebijakan pembatalan kustom.
                    Setelah memilih opsi ini, sebuah bidang akan muncul di mana Anda dapat memasukkan detail kebijakan kustom Anda.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Jumlah Deposit:</strong>
                <ul className="ml-6 list-circle">
                  <li><strong>Deposit Umum Hotel</strong> – menerapkan aturan deposit yang ditetapkan di tingkat properti.</li>
                  <li><strong>Deposit Kustom</strong> – tentukan persentase kustom dengan mengisi bidang di sebelahnya.</li>
                </ul>
              </li>
              <li>
                <strong>Sertakan Sarapan:</strong>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745978193/11._create_or_edit_rateplan_-_3_jp9zzt.jpg" />
                <ul className="ml-6 list-circle">
                  <li>Centang kotak untuk menunjukkan bahwa sarapan sudah termasuk dalam tarif. Biarkan tidak dicentang untuk tarif <strong>Hanya Kamar</strong>.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Klik <strong>Simpan Perubahan</strong> untuk menerapkan pengaturan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745978188/12._save_changes_cwhz83.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Membuat Rateplan Tertaut:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak Dapat Menyimpan Rateplan Tertaut</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang wajib (mis., Nama, Deskripsi, Aturan, Jumlah) diisi dengan benar.
                Verifikasi bahwa Anda telah memilih <strong>Aturan</strong> yang valid (naik atau turun) dan memberikan <strong>Jumlah</strong> yang sesuai.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Rateplan Tertaut Tidak Terlihat di Halaman Pemesanan</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa pengaturan <strong>Tampilkan/Sembunyikan di Halaman Pemesanan</strong> dan pastikan diatur ke <strong>Tampilkan</strong>.
                Pastikan <strong>Tampilkan/Sembunyikan Rateplan di Kalender Penawaran Bulanan</strong> juga diatur dengan benar jika Anda ingin terlihat di sana.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Biaya Orang Tambahan Tidak Diterapkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali pengaturan <strong>Orang Tambahan &amp; Biaya</strong> untuk memastikan bahwa kebijakan dan biaya untuk tamu tambahan dikonfigurasi dengan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kebijakan Pembatalan Tidak Berfungsi Seperti yang Diharapkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan opsi <strong>Kebijakan Pembatalan</strong> yang benar dipilih dan dikonfigurasi.
                Jika menggunakan <strong>Kebijakan Kustom</strong>, pastikan detailnya dimasukkan dengan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Jumlah Deposit Tidak Diterapkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa <strong>Jumlah Deposit</strong> diatur dengan benar ke <strong>Deposit Umum Hotel</strong> atau <strong>Deposit Kustom</strong> dengan persentase yang benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan Tidak Tercermin Setelah Menyimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu pesan konfirmasi setelah menyimpan. Segarkan halaman setelah pesan menghilang untuk memverifikasi bahwa perubahan telah diterapkan dengan benar.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== RE-ARRANGE ==================== */}
      <Section id="rearrange" title="Atur Ulang Tata Letak">
        <p>
          Di bagian ini, Anda dapat mengatur ulang secara manual urutan <strong>Tipe Kamar</strong> dan <strong>Rateplan</strong> untuk properti Anda.
          Secara default, Tipe Kamar dan Rateplan diurutkan berdasarkan pembuatannya, tetapi Anda dapat menyesuaikan urutan berdasarkan preferensi Anda.
          Fitur ini memungkinkan Anda untuk meningkatkan organisasi penawaran kamar dan tarif properti untuk aksesibilitas yang lebih baik.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengatur Ulang Tata Letak Tipe Kamar &amp; Rateplan:</h4>
        <p>Secara default, Tipe Kamar dan Rateplan diurutkan berdasarkan ID pembuatan. Anda dapat mengurutkan ulang secara manual.</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik ikon <strong>(+)</strong> untuk memperluas bagian rateplan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544213/14._step_1_px8480.png" />
          <li>
            Arahkan kursor ke Tipe Kamar atau Rateplan, lalu klik dan seret untuk mengatur ulang urutan.
          </li>
          <li className="text-sm text-muted-foreground">
            <strong>Catatan:</strong> Saat memindahkan rateplan, jangan seret ke luar wadah Tipe Kamar-nya.
          </li>
          <li>Setelah mengatur ulang, tombol <strong>Simpan Pembaruan</strong> akan muncul. Klik untuk menyimpan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544227/15._save_changes_z9ozon.png" />
          <li>Notifikasi sukses akan muncul. Tunggu hingga pesan menghilang dan tunggu 5–10 detik sebelum menyegarkan browser.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544230/16._success_saved_xm9sqd.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Mengatur Ulang Tata Letak:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Perubahan Tidak Tersimpan Setelah Mengatur Ulang</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan setelah mengatur ulang, tombol <strong>Simpan Pembaruan</strong> diklik untuk mengonfirmasi perubahan.
                Jika tombol tidak muncul, pastikan Tipe Kamar dan Rateplan diseret dengan benar di dalam wadah (rateplan tidak boleh dipindahkan ke luar bagian Tipe Kamar-nya).
              </dd>
            </div>
            <div>
              <dt className="font-medium">Item yang Diatur Ulang Tidak Langsung Tercermin</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu notifikasi sukses setelah menyimpan perubahan. Segarkan browser hanya setelah notifikasi menghilang untuk memberi waktu pembaruan diterapkan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak Dapat Menyeret dan Melepas Rateplan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda mengarahkan kursor ke Tipe Kamar atau Rateplan dengan benar. Jika menyeret masih tidak berfungsi, coba segarkan halaman dan coba lagi.
                Pastikan Anda tidak menyeret rateplan ke luar wadah Tipe Kamar-nya.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tata Letak Tidak Tampak Seperti yang Diharapkan Setelah Penyegaran</dt>
              <dd className="ml-4 text-muted-foreground">
                Jika perubahan tidak muncul setelah penyegaran halaman, tunggu 5–10 detik sebelum menyegarkan lagi. Ini memberi waktu sistem untuk sepenuhnya menyimpan dan mencerminkan pembaruan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== EDIT ==================== */}
      <Section id="edit" title="Edit">
        <p>
          Opsi <strong>Edit</strong> memungkinkan pengelola properti untuk mengubah nama dan deskripsi tipe kamar atau rateplan yang ada.
          Dukungan multibahasa disertakan untuk memastikan tampilan yang dilokalkan di berbagai wilayah tamu. Perubahan diterapkan segera setelah menyimpan melalui formulir pop-up.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengedit Tipe Kamar atau Rateplan:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>Klik tombol <strong>Edit</strong> di samping Tipe Kamar atau Rateplan yang ingin Anda ubah.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745975000/06._edit_button_t3rbco.jpg" />
          <li>Formulir pop-up akan muncul menunjukkan nama saat ini dan bidang deskripsi multibahasa.</li>
          <li>
            <p>
              Untuk <strong>Rateplan</strong>, pop-up mencakup <strong>Tipe Kamar Induk</strong> dan <strong>Nama Rateplan</strong>,
              dengan tab bahasa (Arab, Inggris, Amerika, Français, Indonesia, Rusia) untuk memperbarui deskripsi.
            </p>
            <Figure label=""
            src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745975002/07._edit_rateplan_zfr39f.jpg" />
            <p className="mt-1 text-sm text-muted-foreground">
              Untuk <strong>Rateplan Tertaut</strong>, prosesnya serupa dengan opsi edit yang sesuai.
            </p>
          </li>
          <li>Ubah konten sesuai kebutuhan, lalu klik <strong>Simpan Perubahan</strong> untuk menerapkan pembaruan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745975005/09._save_changes_zefjmx.jpg" />
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Edit Tipe Kamar atau Rateplan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak Dapat Membuka Pop-up Edit</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda mengklik tombol <strong>Edit</strong> di samping Tipe Kamar atau Rateplan yang benar. Jika pop-up tidak muncul, coba segarkan halaman lalu klik Edit lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan Tidak Tersimpan Setelah Mengedit</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali bahwa setelah mengubah nama atau deskripsi, Anda telah mengklik <strong>Simpan Perubahan</strong>. Jika pop-up tertutup tanpa menyimpan, perubahan tidak akan diterapkan.
                Jika tombol <strong>Simpan Perubahan</strong> tidak responsif, periksa masalah konektivitas internet.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Deskripsi Multibahasa Tidak Memperbarui</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memilih tab bahasa yang benar dan memasukkan deskripsi yang diperbarui dalam bahasa yang diinginkan.
                Jika tab bahasa hilang atau tidak menampilkan opsi yang diharapkan, coba bersihkan cache browser atau segarkan halaman.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Edit Tidak Terlihat</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memiliki izin yang sesuai untuk mengedit Tipe Kamar atau Rateplan. Jika tombol Edit tidak terlihat, hubungi admin untuk memastikan hak akses Anda dikonfigurasi dengan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Formulir Pop-up Tidak Menampilkan Bidang yang Benar</dt>
              <dd className="ml-4 text-muted-foreground">
                Jika formulir pop-up tidak menampilkan bidang yang diharapkan untuk nama dan deskripsi, segarkan halaman dan coba lagi. Jika masalah berlanjut, verifikasi bahwa Tipe Kamar atau Rateplan telah diatur dengan benar di sistem.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== COPY ==================== */}
      <Section id="copy" title="Salin Rateplan">
        <h4 className="font-medium">Cara Menyalin Rateplan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tombol <strong>Salin</strong> di samping Rateplan yang ingin Anda duplikat.</li>
          <li>Sistem akan secara otomatis menghasilkan Rateplan duplikat di bawah Rateplan asli, menggunakan tarif dan konfigurasi yang sama.</li>
          <li>Rateplan yang disalin akan memiliki tambahan <strong>"Salinan"</strong> pada namanya dan dapat diedit secara independen.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745975005/10._copy_button_nipyc8.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Menyalin Rateplan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tombol Salin Tidak Merespons</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda mengklik tombol <strong>Salin</strong> di samping Rateplan yang benar. Jika tombol tidak berfungsi, segarkan halaman atau bersihkan cache browser.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Rateplan Duplikat Tidak Muncul</dt>
              <dd className="ml-4 text-muted-foreground">
                Setelah mengklik tombol <strong>Salin</strong>, periksa apakah Rateplan duplikat muncul tepat di bawah yang asli. Jika tidak muncul, segarkan halaman atau coba klik tombol <strong>Salin</strong> lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan Tidak Tercermin di Rateplan yang Disalin</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan setelah menyalin, Anda mengklik tombol <strong>Simpan Perubahan</strong> jika ada modifikasi yang dilakukan pada Rateplan yang disalin. Perubahan apa pun tidak akan disimpan kecuali Anda secara eksplisit mengklik <strong>Simpan Perubahan</strong>.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak Dapat Mengedit Rateplan yang Disalin</dt>
              <dd className="ml-4 text-muted-foreground">
                Jika Rateplan yang disalin tidak dapat diedit, periksa apakah ada masalah dengan izin. Anda mungkin memerlukan hak akses khusus untuk mengubah rateplan. Hubungi admin jika perlu.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Rateplan Salinan Menampilkan Konfigurasi yang Salah</dt>
              <dd className="ml-4 text-muted-foreground">
                Jika Rateplan yang disalin menampilkan pengaturan atau informasi tarif yang salah, pastikan Rateplan asli dikonfigurasi dengan benar sebelum menyalin. Jika masalah berlanjut, coba salin lagi atau verifikasi apakah ada kesalahan sistem yang terjadi selama proses duplikasi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== DELETE ==================== */}
      <Section id="delete" title="Hapus">
        <h4 className="font-medium">Cara Menghapus Tipe Kamar atau Rateplan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tombol <strong>Hapus</strong> di samping Tipe Kamar atau Rateplan yang ingin Anda hapus.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745975005/11._delete_button_c5qhwi.jpg" />
          <li>
            Dialog konfirmasi akan muncul dengan pesan:
            <div className="mt-1 rounded-md border bg-muted/50 p-2 text-sm italic">
              "Apakah Anda benar-benar ingin menghapus Rateplan ini?"
            </div>
          </li>
          <li>Klik <strong>OK</strong> untuk mengonfirmasi penghapusan, atau <strong>Batal</strong> untuk menutup dialog tanpa menghapus item.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745975006/12._delete_modal_th8mow.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Menghapus Tipe Kamar atau Rateplan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tombol Hapus Tidak Merespons</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan tombol <strong>Hapus</strong> diklik di samping Tipe Kamar atau Rateplan yang benar. Jika masih tidak merespons, segarkan halaman atau bersihkan cache browser dan coba lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Dialog Konfirmasi Tidak Muncul</dt>
              <dd className="ml-4 text-muted-foreground">
                Jika dialog konfirmasi tidak muncul, periksa apakah browser Anda memblokir pop-up. Izinkan pop-up untuk situs ini atau coba gunakan browser lain.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak Dapat Menghapus Tipe Kamar atau Rateplan</dt>
              <dd className="ml-4 text-muted-foreground">
                Jika penghapusan gagal, verifikasi apakah Tipe Kamar atau Rateplan terkait dengan pemesanan aktif atau reservasi yang sedang berlangsung. Ketergantungan ini dapat mencegah penghapusan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tipe Kamar atau Rateplan Masih Terlihat Setelah Penghapusan</dt>
              <dd className="ml-4 text-muted-foreground">
                Jika item tidak segera dihapus, segarkan halaman atau tunggu beberapa saat. Dalam beberapa kasus, mungkin perlu beberapa saat bagi sistem untuk memperbarui.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Secara Tidak Sengaja Menghapus Item yang Salah</dt>
              <dd className="ml-4 text-muted-foreground">
                Jika Anda secara tidak sengaja menghapus item yang salah, periksa apakah ada opsi <strong>urungkan</strong> atau pemulihan di dalam sistem. Jika tidak, Anda mungkin perlu membuat ulang item yang dihapus secara manual.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}