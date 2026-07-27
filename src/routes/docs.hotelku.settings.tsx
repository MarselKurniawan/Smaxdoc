import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/settings")({
  head: () => ({
    meta: [
      { title: "Pengaturan — Hotelku | SinergiMax" },
      { name: "description", content: "Konfigurasi perilaku sistem, otomatisasi, visibilitas, pengiriman laporan, dan kustomisasi tampilan." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "basic-settings", label: "Pengaturan Dasar" },
  { id: "direct-link", label: "Tautan Langsung" },
  { id: "password-direct-link", label: "Kata Sandi untuk Tautan Langsung" },
  { id: "room-subroom", label: "Ubah Nama dan Urutan Kamar & Subruang" },
  { id: "rateplan-charges", label: "Konfigurasi Biaya Tambahan & Pajak Rateplan" },
  { id: "default-property-view", label: "Atur Tampilan Properti Default di Bagan Pemesanan" },
  { id: "commission-amount", label: "Atur Jumlah Komisi Manajemen Properti" },
  { id: "taxes-logic", label: "Konfigurasi Logika Pajak" },
  { id: "owner-access", label: "Kelola Akses Pemilik" },
  { id: "integration-settings", label: "Konfigurasi Pengaturan Integrasi" },
  { id: "breakfast-period", label: "Pengaturan Periode Sarapan" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Pengaturan" activeTo="/docs/hotelku/settings">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Pengaturan</h1>
      <p className="mt-4">
        <strong>Pengaturan</strong> memungkinkan setiap properti untuk mengonfigurasi perilaku sistem berdasarkan kebutuhan operasional. 
        Ini mencakup opsi untuk <strong>otomatisasi</strong>, <strong>kontrol visibilitas</strong>, <strong>pengiriman laporan</strong>, 
        dan <strong>kustomisasi tampilan</strong> kamar di bagan pemesanan.
      </p>

      {/* ==================== BASIC SETTINGS ==================== */}
      <Section id="basic-settings" title="Pengaturan Dasar">
        <p>Berikut cara mengonfigurasi Pengaturan Dasar:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka <strong>Hotelku &gt; Pengaturan</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288080/01._navigate_settings_a7cmqz.jpg" />
          <li>
            Di bagian <strong>Pengaturan Dasar</strong>, konfigurasikan opsi-opsi berikut:
            <ul className="ml-6 mt-1 list-disc">
              <li>
                <strong>Email Otomatis</strong>
                <br />
                Gunakan dropdown untuk menentukan bagaimana notifikasi email dikirim saat reservasi dibuat atau diedit:
                <ul className="ml-6 list-disc">
                  <li><strong>Nonaktif:</strong> Tidak ada email yang dikirim.</li>
                  <li><strong>Hotel Saja:</strong> Email dikirim ke hotel saja.</li>
                  <li><strong>Hotel dan Klien:</strong> Email dikirim ke hotel dan tamu.</li>
                </ul>
              </li>
              <li>
                <strong>Ubah Status Kamar Otomatis</strong>
                <br />
                Aktifkan untuk secara otomatis mengubah status kamar menjadi <strong>Di Luas Layanan</strong> saat <strong>Pemeliharaan Kamar</strong> dibuat.
              </li>
              <li>
                <strong>Mode Tersembunyi untuk Pemeliharaan Kamar</strong>
                <br />
                Aktifkan untuk menyembunyikan kamar yang sedang dalam pemeliharaan dari <strong>tampilan Bagan Pemesanan</strong>.
              </li>
              <li>
                <strong>Email Laporan Otomatis</strong>
                <br />
                Aktifkan untuk mengizinkan sistem mengirim <strong>Laporan Harian</strong> secara otomatis melalui email ke pemilik properti.
              </li>
              <li>
                <strong>Kirim Laporan Penjualan ke Pemilik melalui Email</strong>
                <br />
                Gunakan dropdown untuk mengatur seberapa sering laporan penjualan dikirim melalui email ke pemilik:
                <ul className="ml-6 list-disc">
                  <li><strong>Nonaktif:</strong> Tidak mengirim laporan penjualan.</li>
                  <li><strong>Harian:</strong> Kirim laporan penjualan setiap hari.</li>
                  <li><strong>Bulanan:</strong> Kirim laporan penjualan sebulan sekali.</li>
                </ul>
              </li>
              <li>
                <strong>Tambahkan Pajak Otomatis</strong>
                <br />
                Aktifkan untuk menerapkan pajak secara otomatis ke reservasi yang dibuat melalui <strong>FOS</strong> atau <strong>Booking Engine</strong>.
                <span className="block text-sm text-muted-foreground">Pajak yang diterapkan mengikuti konfigurasi di <strong>Kebijakan Pemesanan</strong>.</span>
              </li>
              <li>
                <strong>Abaikan Pemeriksaan Inventaris</strong>
                <br />
                Aktifkan untuk mengizinkan pembuatan reservasi meskipun <strong>inventaris kamar</strong> adalah <strong>0</strong>.
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288080/02._basic_settings_a7hhy5.jpg" />
            </ul>
          </li>
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pengaturan Dasar:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Perubahan pengaturan tidak tersimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memiliki izin pengguna yang tepat untuk mengubah pengaturan. Tunggu konfirmasi sukses sebelum meninggalkan halaman. Coba segarkan halaman dan terapkan ulang pengaturan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Email otomatis tidak terkirim</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa apakah opsi <strong>Email Otomatis</strong> diatur ke <strong>Nonaktif</strong>. Untuk mengaktifkan notifikasi email, ubah ke <strong>Hotel Saja</strong> atau <strong>Hotel dan Klien</strong>. Pastikan alamat email tamu atau hotel dikonfigurasi dengan benar dan aktif.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kamar tidak ditandai sebagai Di Luar Layanan selama pemeliharaan</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa <strong>Ubah Status Kamar Otomatis</strong> diaktifkan. Pastikan entri <strong>Pemeliharaan Kamar</strong> yang valid telah dibuat dan ditetapkan ke kamar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kamar dalam pemeliharaan masih terlihat di Bagan Pemesanan</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa apakah <strong>Mode Tersembunyi untuk Pemeliharaan Kamar</strong> diaktifkan. Segarkan Bagan Pemesanan untuk memastikan status kamar terbaru tercermin.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pemilik tidak menerima laporan penjualan harian atau bulanan</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan dropdown <strong>Kirim Laporan Penjualan ke Pemilik melalui Email</strong> tidak diatur ke <strong>Nonaktif</strong>. Pastikan alamat email pemilik terdaftar dan terverifikasi dengan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Reservasi melalui FOS atau Booking Engine tidak dikenakan pajak</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa <strong>Tambahkan Pajak Otomatis</strong> diaktifkan. Konfirmasikan konfigurasi pajak didefinisikan dengan benar di bawah <strong>Kebijakan Pemesanan</strong>.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Sistem mencegah reservasi saat inventaris 0</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Abaikan Pemeriksaan Inventaris</strong> diaktifkan jika Anda ingin mengizinkan pemesanan berlebih. Jika masih terblokir, periksa apakah tipe kamar memiliki pembatasan inventaris keras yang diatur di tempat lain.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== DIRECT LINK ==================== */}
      <Section id="direct-link" title="Tautan Langsung">
        <p>
          Sistem menyediakan akses <strong>Tautan Langsung</strong> ke halaman yang dipilih tanpa memerlukan login. 
          Ini memungkinkan akses <strong>hanya-tampilan</strong> ke alat internal.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Tautan Langsung:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Di halaman <strong>Pengaturan</strong>, temukan bagian <strong>Tautan Langsung</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288080/03._direct_link_-_1_izi1os.jpg" />
          <li>Klik <strong>Hasilkan Tautan Baru</strong> untuk membuat tautan akses baru.</li>
          <li>
            Pop-up konfirmasi akan muncul dengan pesan:
            <span className="block rounded-md border bg-muted/50 p-2 text-sm italic">"Jika Anda menghasilkan Tautan baru, tautan lama akan dinonaktifkan."</span>
          </li>
          <li>Klik <strong>OK</strong> untuk melanjutkan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288080/03._direct_link_-_2_wdy9gs.jpg" />
          <li>Sistem akan menghasilkan satu set tautan baru.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288080/03._direct_link_-_3_t4rmjq.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Penting:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>Menghasilkan tautan baru akan <strong>menonaktifkan semua tautan</strong> yang dibuat sebelumnya.</li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Tautan Langsung:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tautan yang dihasilkan tidak berfungsi</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda mengklik <strong>OK</strong> pada pop-up konfirmasi. Pastikan tautan disalin dengan benar. Verifikasi bahwa browser atau jaringan tidak memblokir akses karena pengaturan keamanan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tautan langsung sebelumnya menjadi tidak valid</dt>
              <dd className="ml-4 text-muted-foreground">
                Ini adalah perilaku yang diharapkan. Saat tautan baru dihasilkan, semua tautan yang dibuat sebelumnya dinonaktifkan secara otomatis. Selalu gunakan tautan terbaru yang disediakan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tautan langsung membuka halaman login, bukan tampilan yang dimaksud</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan tautan yang Anda gunakan adalah dari generasi terbaru. Periksa kembali apakah halaman tujuan masih mendukung akses tautan langsung.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Penerima tidak dapat melihat halaman menggunakan tautan langsung</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan tautan yang dibagikan tidak dimodifikasi atau terpotong. Konfirmasikan penerima membuka tautan di browser modern yang mendukung platform.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== PASSWORD DIRECT LINK ==================== */}
      <Section id="password-direct-link" title="Kata Sandi untuk Tautan Langsung">
        <p>Berikut cara mengatur kata sandi untuk Tautan Langsung:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Di halaman <strong>Pengaturan</strong>, temukan bagian <strong>Kata Sandi</strong>.</li>
          <li>
            Di bidang <strong>Kata Sandi</strong>:
            <ul className="ml-6 list-disc">
              <li>Klik <strong>Hasilkan Kata Sandi</strong> untuk membuatnya secara otomatis, atau</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288080/04._generate_password_-_1_ozsc4b.jpg" />
              <li>Masukkan <strong>kata sandi kustom</strong> secara manual.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288080/04._generate_password_-_2_qucltq.jpg" />
            </ul>
          </li>
          <li>
            Kata sandi manual harus:
            <ul className="ml-6 list-disc">
              <li>Minimal <strong>12 karakter</strong>.</li>
              <li>Harus menyertakan setidaknya 1: <strong>huruf besar</strong>, <strong>huruf kecil</strong>, <strong>angka</strong>, dan <strong>karakter khusus</strong>.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288080/04._generate_password_-_3_tnygqm.jpg" />
            </ul>
          </li>
          <li>Klik <strong>Simpan Kata Sandi</strong> untuk menerapkan.</li>
          <li>Kata sandi ini diperlukan setiap kali seseorang mengakses <strong>Tautan Langsung</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288080/04._generate_password_-_4_hkkf13.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Kata Sandi untuk Tautan Langsung:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Gagal menyimpan kata sandi</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kata sandi memenuhi semua persyaratan: minimal 12 karakter, setidaknya satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus. Periksa spasi yang tidak disengaja di awal atau akhir.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tautan Langsung masih dapat diakses tanpa kata sandi</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa kata sandi berhasil disimpan dengan mengklik <strong>Simpan Kata Sandi</strong>. Segarkan halaman atau buka ulang tautan di jendela penyamaran untuk menguji apakah prompt kata sandi muncul.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Prompt kata sandi tidak muncul untuk pengguna</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa Tautan Langsung yang dibagikan adalah versi terbaru. Pastikan browser tidak menyimpan cache sesi lama. Minta pengguna untuk mencoba tautan dalam mode penyamaran/pribadi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pengguna tidak dapat mengakses Tautan Langsung bahkan setelah memasukkan kata sandi yang benar</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali bahwa kata sandi yang dibagikan cocok persis. Coba setel ulang kata sandi dan bagikan yang diperbarui. Verifikasi apakah fitur Tautan Langsung masih aktif dalam pengaturan sistem.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== ROOM SUBROOM ==================== */}
      <Section id="room-subroom" title="Ubah Nama dan Urutan Kamar & Subruang">
        <p>
          Bagian ini memungkinkan Anda mengelola informasi kamar dan subruang yang ditampilkan di <strong>Bagan Pemesanan</strong>, 
          termasuk <strong>nama kamar</strong>, <strong>urutan tampilan</strong>, dan <strong>penugasan pemilik</strong>.
        </p>

        <h4 className="mt-4 font-medium">Menugaskan Pemilik Kamar:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Di halaman <strong>Pengaturan</strong>, gulir ke bawah ke bagian <strong>Ubah Nama/Urutan Kamar dan Subruang</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288081/05._change_rooms_-_1_wnexoi.jpg"                                                                                                                                                  />
          <li>
            Dalam daftar kamar, klik ikon <strong>➕ (plus)</strong> di samping kamar untuk memperluas detail subruangnya.
            <span className="block text-sm text-muted-foreground">Klik ikon <strong>➖ (minus)</strong> untuk menciutkan daftar subruang.</span>
          </li>
          <li>
            Untuk menugaskan pemilik ke subruang:
            <ul className="ml-6 list-disc">
              <li>Klik <strong>Tambah Pemilik Subruang</strong>.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288085/05._change_rooms_-_4_n1cs45.jpg" />
              <li>Masukkan informasi <strong>Nama pemilik</strong>, <strong>email</strong>, <strong>alamat</strong>, dan <strong>telepon</strong>. Kemudian klik <strong>simpan</strong> untuk menugaskan pemilik.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288086/05._change_rooms_-_5_nouwqf.jpg" />
            </ul>
          </li>
        </ol>

        <h4 className="mt-4 font-medium">Menugaskan Beberapa Kamar ke Satu Pemilik:</h4>
        <p>
          Fitur ini hanya tersedia untuk mendukung <strong>beberapa pemilik</strong> dalam manajemen properti Anda. Jika Anda tidak melihat bagian <strong>Daftar Grup</strong>, properti tidak mendukungnya.
        </p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1781236912/group-section_v30jfp.png" />
        <ul className="ml-6 list-disc space-y-1">
          <li>
            Jika <strong>Daftar Grup</strong> kosong, pertama-tama tugaskan pemilik ke kamar atau subruang mana pun. Ini akan secara otomatis membuat <strong>grup pemilik</strong>.
          </li>
          <li>Di <strong>Daftar Grup</strong>, klik <strong>Tugaskan</strong> untuk grup pemilik.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1781236830/assign-room_kiefa5.png" />
          <li>Pilih kamar atau subruang menggunakan kotak centang yang tersedia.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1781236832/assign-subroom-popup_oskgvy.png" />
          <li>Klik <strong>Kirim</strong> untuk menerapkan penugasan.</li>
        </ul>

        <h4 className="mt-4 font-medium">Cara Mengubah Kamar yang Ditugaskan:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>Di <strong>Daftar Grup</strong>, klik <strong>Tugaskan</strong> untuk grup pemilik yang ingin Anda ubah.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1781236830/assign-room_kiefa5.png" />
          <li>Hapus centang kamar atau subruang yang tidak lagi ditugaskan ke grup. Pilih kamar atau subruang yang ingin Anda tugaskan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1782272839/modify-assigned-subroom_qxhhv8.png" />
          <li>Klik <strong>Kirim</strong> untuk menerapkan perubahan.</li>
        </ul>

        <h4 className="mt-4 font-medium">Cara Mengubah Detail Pemilik:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>Di <strong>Daftar Grup</strong>, klik <strong>Edit</strong> untuk grup pemilik yang ingin Anda ubah.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1782278734/edit-owner-detail_cvz4iw.png" />
          <li>Perbarui informasi pemilik sesuai kebutuhan.</li>
          <li>Klik <strong>Kirim</strong> untuk menyimpan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1782278823/update-owner-detail-popup_1_xdcgsw.png" />
        </ul>

        <h4 className="mt-4 font-medium">Cara Melihat Hasil:</h4>
        <p>
          Penugasan pemilik tercermin dalam <strong>Laporan Pemilik</strong>. Setiap pemilik hanya akan melihat data laporan untuk kamar atau subruang yang ditugaskan kepada mereka.
        </p>

        <h4 className="mt-4 font-medium">Ubah Nama Kamar dan Subruang:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>Klik bidang <strong>nama kamar</strong> atau <strong>subruang</strong>.</li>
          <li>Masukkan <strong>nama baru</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288081/05._change_rooms_-_2_xpk3lb.jpg" />
        </ul>

        <h4 className="mt-4 font-medium">Ubah Urutan Kamar dan Subruang:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li><strong>Seret dan lepas</strong> kamar atau subruang ke posisi yang diinginkan.</li>
          <li>Urutan baru akan tercermin di <strong>Bagan Pemesanan</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288085/05._change_rooms_-_3_dppmlm.jpg" />
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Konfigurasi Kamar dan Subruang:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Perubahan nama kamar atau subruang tidak tercermin</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman dan verifikasi bahwa perubahan telah disimpan. Periksa Bagan Pemesanan untuk mengonfirmasi bahwa nama yang diperbarui telah diterapkan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Urutan kamar atau subruang tidak diperbarui</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kamar atau subruang telah dipindahkan ke posisi yang diinginkan sebelum menyimpan. Segarkan Bagan Pemesanan untuk melihat pengaturan kamar terbaru.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat menugaskan pemilik kamar</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa semua informasi pemilik yang diperlukan telah dimasukkan dengan benar. Pastikan alamat email dalam format yang valid.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Daftar Grup kosong</dt>
              <dd className="ml-4 text-muted-foreground">
                Daftar Grup dibuat secara otomatis dari pemilik kamar atau subruang yang sebelumnya ditugaskan. Tugaskan pemilik ke kamar atau subruang terlebih dahulu untuk membuat grup pemilik. Fitur ini hanya tersedia untuk properti yang mendukung manajemen banyak pemilik.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat menugaskan beberapa kamar ke grup pemilik</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa grup pemilik sudah ada di <strong>Daftar Grup</strong>. Pastikan setidaknya satu kamar atau subruang dipilih sebelum menyimpan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== RATEPLAN CHARGES ==================== */}
      <Section id="rateplan-charges" title="Konfigurasi Biaya Tambahan & Pajak Rateplan">
        <p>
          Bagian ini memungkinkan Anda mengonfigurasi <strong>biaya tambahan</strong> untuk <strong>tambahan dewasa atau anak</strong>, 
          dan apakah <strong>pajak harus dikecualikan</strong> dari tarif yang ditampilkan.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Di halaman <strong>Pengaturan</strong>, gulir ke bagian <strong>Ubah Nama/Urutan Kamar dan Subruang</strong>.</li>
          <li>
            Klik ikon <strong>+ (plus)</strong> di samping rate plan untuk menampilkan pengaturan biaya dan pajaknya.
            <span className="block text-sm text-muted-foreground">Klik ikon <strong>– (minus)</strong> untuk menyembunyikan detail.</span>
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288633/11._rateplan_extra_-_1_kanxxb.jpg" />
          <li>
            Atur aturan biaya tambahan:
            <ul className="ml-6 list-disc">
              <li>Klik angka di bawah <strong>Dewasa</strong> untuk mengedit berapa banyak dewasa yang disertakan sebelum biaya tambahan berlaku.</li>
              <li>Klik angka di bawah <strong>Anak</strong> untuk mengatur berapa banyak anak yang diizinkan tanpa biaya tambahan.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288634/11._rateplan_extra_-_2_hoygqm.jpg" />
            </ul>
          </li>
          <li>
            Atur opsi <strong>Kecualikan Pajak</strong>:
            <ul className="ml-6 list-disc">
              <li>Pilih <strong>Ya</strong> untuk mengecualikan pajak dari tarif yang ditampilkan.</li>
              <li>Pilih <strong>Tidak</strong> untuk menyertakan pajak dalam tarif yang ditampilkan.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288634/11._rateplan_extra_-_3_yxvpbj.jpg" />
            </ul>
          </li>
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Konfigurasi Biaya Tambahan & Pajak Rateplan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat memperluas detail rate plan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda mengklik langsung pada ikon <strong>+ (plus)</strong> di samping nama rate plan. Jika ikon tidak responsif, segarkan halaman dan coba lagi. Pastikan JavaScript diaktifkan di browser Anda.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan biaya dewasa atau anak tidak tersimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Setelah mengedit nilai, pastikan Anda mengklik di luar bidang input untuk memicu penyimpanan. Periksa kembali bahwa Anda memasukkan nilai numerik saja.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pengaturan Kecualikan Pajak tidak diterapkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Setelah memilih Ya/Tidak, konfirmasikan perubahan tercermin di UI dan bertahan setelah refresh halaman. Periksa apakah ada pengaturan pajak yang diganti di <strong>Kebijakan Pemesanan</strong>.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== DEFAULT PROPERTY VIEW ==================== */}
      <Section id="default-property-view" title="Atur Tampilan Properti Default di Bagan Pemesanan">
        <h4 className="font-medium">Cara Mengatur:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka <strong>Pengaturan &gt; Bagan Pemesanan – Tampilan Properti Default</strong>.</li>
          <li>Dari dropdown, pilih <strong>properti</strong> yang ingin Anda tampilkan secara default saat membuka Bagan Pemesanan.</li>
          <li>Klik <strong>Perbarui Tampilan Properti Default</strong> untuk menerapkan pengaturan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288086/06._booking_chart_rggm0m.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pengaturan Tampilan Properti Default:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Dropdown tidak menampilkan properti yang tersedia</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan akun pengguna Anda memiliki akses ke setidaknya satu properti. Coba segarkan halaman untuk memuat ulang daftar properti.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Properti yang dipilih tidak tersimpan sebagai default</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan untuk mengklik <strong>Perbarui Tampilan Properti Default</strong> setelah memilih properti. Tunggu beberapa saat untuk memastikan sistem menyimpan perubahan sebelum menavigasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Semua properti masih muncul setelah mengatur default</dt>
              <dd className="ml-4 text-muted-foreground">
                Ini mungkin terjadi jika tidak ada default yang berhasil disimpan. Ulangi proses dan konfirmasikan pilihan. Periksa pengaturan yang bertentangan atau pembatasan peran pengguna.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== COMMISSION AMOUNT ==================== */}
      <Section id="commission-amount" title="Atur Jumlah Komisi Manajemen Properti">
        <h4 className="mt-4 font-medium">Cara Mengatur:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka <strong>Pengaturan &gt; Jumlah Komisi Manajemen Properti</strong>.</li>
          <li>Masukkan <strong>komisi</strong> di bidang yang disediakan.</li>
          <li>Klik <strong>Perbarui Komisi Agensi</strong> untuk mengonfirmasi.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288086/07._property_commission_zca7ux.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pengaturan Komisi Manajemen Properti:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat memasukkan jumlah komisi</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan bidang menerima nilai numerik saja. Hindari memasukkan simbol seperti <code>%</code> atau huruf. Coba klik langsung di dalam bidang dan bersihkan teks yang sudah diisi sebelumnya sebelum mengetik.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Perbarui tidak responsif</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa nilai telah dimasukkan sebelum mengklik <strong>Perbarui Komisi Agensi</strong>. Jika tombol masih tidak responsif, segarkan halaman dan coba lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pembaruan komisi tidak tercermin dalam laporan atau pemesanan</dt>
              <dd className="ml-4 text-muted-foreground">
                Beri waktu beberapa menit agar perubahan diterapkan di seluruh sistem. Periksa kembali apakah komisi disimpan dengan benar dengan mengunjungi ulang halaman pengaturan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== TAXES LOGIC ==================== */}
      <Section id="taxes-logic" title="Konfigurasi Logika Pajak">
        <h4 className="mt-4 font-medium">Cara Mengonfigurasi:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka <strong>Pengaturan &gt; Logika Pajak</strong>.</li>
          <li>Pilih <strong>logika pajak</strong> yang berlaku dari daftar dropdown.</li>
          <li>Klik <strong>Perbarui Logika Pajak</strong> untuk menerapkan logika pajak yang dipilih.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288086/07._property_commission_zca7ux.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Konfigurasi Logika Pajak:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Dropdown tidak menunjukkan opsi logika pajak</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman untuk memuat ulang opsi dropdown. Periksa izin peran pengguna Anda untuk memastikan Anda memiliki akses untuk mengubah pengaturan pajak.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pembaruan tidak berlaku</dt>
              <dd className="ml-4 text-muted-foreground">
                Setelah mengklik <strong>Perbarui Logika Pajak</strong>, tunggu beberapa saat untuk memberi waktu sistem memproses perubahan. Buka kembali halaman Pengaturan untuk mengonfirmasi bahwa logika baru disimpan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== OWNER ACCESS ==================== */}
      <Section id="owner-access" title="Kelola Akses Pemilik">
        <h4 className="mt-4 font-medium">Cara Mengelola:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka <strong>Pengaturan &gt; Akses Pemilik</strong>.</li>
          <li>Di bidang <strong>Tautan Google Drive</strong>, masukkan URL jika Anda ingin berbagi dokumen (opsional).</li>
          <li>
            Dari dropdown <strong>Tampilkan Akuntansi &amp; Biaya</strong>, pilih:
            <ul className="ml-6 list-disc">
              <li><strong>YA</strong> untuk mengizinkan pemilik melihat data akuntansi dan biaya.</li>
              <li><strong>TIDAK</strong> untuk membatasi akses ke fitur akuntansi.</li>
            </ul>
          </li>
          <li>Klik <strong>Simpan Akses Pemilik</strong> untuk menerapkan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288086/09._owner_access_cyftix.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Konfigurasi Akses Pemilik:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tautan Google Drive tidak tersimpan atau hilang setelah disimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan URL adalah tautan berbagi Google Drive yang valid (dimulai dengan <code>https://drive.google.com/</code>). Hindari menggunakan tautan yang dipersingkat atau kedaluwarsa. Hapus spasi tambahan sebelum atau sesudah tautan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pemilik tidak dapat melihat akuntansi dan biaya bahkan setelah mengaktifkan akses</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa akun pemilik yang benar masuk. Periksa apakah opsi <strong>Tampilkan Akuntansi &amp; Biaya</strong> diatur ke <strong>YA</strong> dan perubahan disimpan dengan sukses.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pilihan dropdown kembali setelah mengklik Simpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan koneksi internet stabil sebelum menyimpan. Tunggu beberapa saat setelah mengklik <strong>Simpan Akses Pemilik</strong> untuk memberi waktu sistem memperbarui.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== INTEGRATION SETTINGS ==================== */}
      <Section id="integration-settings" title="Konfigurasi Pengaturan Integrasi">
        <h4 className="mt-4 font-medium">Cara Mengonfigurasi:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka <strong>Pengaturan &gt; Integrasi</strong>.</li>
          <li>
            Dari dropdown <strong>Aktifkan Dormakaba</strong>, pilih:
            <ul className="ml-6 list-disc">
              <li><strong>YA</strong> untuk mengaktifkan integrasi Dormakaba.</li>
              <li><strong>TIDAK</strong> untuk menonaktifkannya.</li>
            </ul>
          </li>
          <li>Di bidang <strong>Endpoint Dormakaba</strong>, masukkan URL endpoint yang disediakan oleh sistem Dormakaba.</li>
          <li>Klik <strong>Simpan Integrasi Dormakaba</strong> untuk menyimpan konfigurasi Anda.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747288087/10._integration_oybod2.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pengaturan Integrasi dengan Dormakaba:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat menyimpan pengaturan integrasi Dormakaba</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan URL <strong>Endpoint Dormakaba</strong> diformat dengan benar (dimulai dengan <code>http://</code> atau <code>https://</code>). Verifikasi koneksi internet stabil saat menyimpan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Integrasi Dormakaba tidak aktif setelah diaktifkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa Anda mengklik <strong>Simpan Integrasi Dormakaba</strong> setelah memilih <strong>YA</strong>. Verifikasi bahwa URL endpoint dapat dijangkau dan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pesan kesalahan muncul setelah menyimpan pengaturan</dt>
              <dd className="ml-4 text-muted-foreground">
                Tinjau detail kesalahan untuk petunjuk (mis., URL tidak valid, masalah autentikasi). Hubungi dukungan dengan pesan kesalahan untuk bantuan lebih lanjut.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Integrasi berperilaku tidak konsisten atau data tidak sinkron</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan URL endpoint tidak berubah atau kedaluwarsa. Simpan ulang pengaturan integrasi untuk menyegarkan koneksi. Periksa log atau notifikasi sistem untuk kesalahan integrasi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== BREAKFAST PERIOD ==================== */}
      <Section id="breakfast-period" title="Pengaturan Periode Sarapan">
        <p>
          Siapkan periode sarapan dalam <strong>Sistem Pelaporan Sarapan</strong> untuk menentukan <strong>rentang tanggal yang berlaku</strong>, 
          <strong>pembatasan sistem</strong>, <strong>konfigurasi menu</strong>, dan <strong>perhitungan pendapatan</strong>.
        </p>

        <h4 className="mt-4 font-medium">Konfigurasi Periode Sarapan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pilih <strong>Pengaturan</strong> dari menu <strong>Front Office</strong>, dan buka bagian <strong>Periode Sarapan</strong>.</li>
          <Figure label=""
          src="http://res.cloudinary.com/dayo5hqig/image/upload/v1771484927/breakfast-period-setting.png" />
          <li>Tinjau konfigurasi yang ada dan pastikan periode saat ini sesuai dengan kebutuhan operasional Anda.</li>
          <li>
            Jika pembaruan diperlukan, sesuaikan <strong>rentang tanggal pelaporan</strong> untuk menentukan periode yang digunakan untuk pengumpulan dan pelaporan data sarapan.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1771485422/manage-breakfast-period.png" />
          <li>
            Tindakan yang tersedia:
            <ul className="ml-6 list-disc">
              <li>
                <strong>Buat:</strong> Tambahkan periode baru dengan memasukkan <strong>tahun</strong>, <strong>tanggal mulai</strong>, dan <strong>tanggal akhir</strong>.
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1771485623/create-new-period.png" />
              <li>
                <strong>Edit:</strong> Perbarui <strong>tahun</strong>, <strong>tanggal mulai</strong>, atau <strong>tanggal akhir</strong> dari periode yang ada.
              </li>
              <li>
                <strong>Hapus:</strong> Hapus periode yang tidak digunakan dengan mengklik ikon <strong>hapus (tempat sampah)</strong>.
              </li>
            </ul>
          </li>
        </ol>

        <h4 className="mt-4 font-medium">Verifikasi Konfigurasi Periode Sarapan:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>Buka <strong>Laporan</strong> dari menu <strong>Front Office</strong> dan buka <strong>Laporan Sarapan</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1771486011/verify-date-range.png" />
          <li>Konfirmasikan bahwa <strong>rentang tanggal</strong> yang dikonfigurasi (mis., Oktober–Desember) ditampilkan dengan benar.</li>
          <li>Nilai sarapan akan muncul <strong>hanya untuk periode yang dikonfigurasi</strong>; jika tidak, laporan akan menampilkan <strong>0</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1771485488/breakfast-period-result_aev6eq.png" />
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Periode Sarapan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Perubahan tidak tersimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memiliki izin pengguna yang tepat untuk mengubah pengaturan. Tunggu pesan konfirmasi sukses sebelum meninggalkan halaman. Segarkan halaman dan terapkan ulang perubahan jika perlu.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat membuat Periode Sarapan baru</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan tanggal mulai dan akhir berada dalam tahun yang dipilih. Jangan atur tanggal mulai dan akhir pada hari yang sama. Atur tanggal mulai <strong>lebih awal</strong> dari tanggal akhir. Buat <strong>hanya satu Periode Sarapan</strong> untuk setiap tahun.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}