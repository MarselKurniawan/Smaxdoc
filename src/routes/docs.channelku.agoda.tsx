import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/agoda")({
  head: () => ({
    meta: [
      { title: "Agoda — Channelku | SinergiMax" },
      { name: "description", content: "Kelola koneksi Agoda, pemetaan kamar & rate, impor data, dan konfigurasi OBP." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "accessing", label: "Mengakses Pengaturan Agoda" },
  { id: "information", label: "Informasi Agoda" },
  { id: "supported-features", label: "Fitur yang Didukung" },
  { id: "username", label: "Nama Pengguna" },
  { id: "mapping", label: "Pemetaan" },
  { id: "import-rooms", label: "Impor Kamar" },
  { id: "add-mapping", label: "Tambah Pemetaan" },
  { id: "settings", label: "Pengaturan" },
  { id: "configure-obp", label: "Konfigurasi OBP" },
  { id: "manual-ota-update", label: "Pembaruan OTA Manual" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Agoda" activeTo="/docs/channelku/channel-manager/control-panel/agoda">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Agoda</h1>
      <p className="mt-4">
        <strong>Agoda</strong> adalah salah satu saluran OTA di mana Anda dapat mengelola koneksi, melakukan pemetaan kamar dan rate plan,
        mengimpor data dari OTA, dan mengonfigurasi pengaturan lainnya melalui tab berikut: <strong>Informasi</strong>, <strong>Nama Pengguna</strong>,
        <strong>Pemetaan</strong>, <strong>Penugasan</strong>, dan <strong>Pengaturan</strong>.
      </p>
      <p className="mt-2">
        Setelah integrasi dikonfigurasi sepenuhnya, semua reservasi dari Agoda akan muncul di <strong>Daftar Reservasi</strong>,
        memungkinkan Anda mengelolanya secara efisien di satu tempat.
      </p>

      {/* ==================== ACCESSING ==================== */}
      <Section id="accessing" title="Mengakses Pengaturan Agoda">
        <p>Berikut cara mengakses pengaturan Agoda:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Di Channelku, buka menu <strong>Channel Manager</strong>, lalu klik <strong>Panel Kontrol</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777008328/control-panel_navigation_menu_lqwi6o.png" />
          <li>Pilih <strong>Agoda</strong> dari daftar saluran, atau Anda dapat mencari dari daftar dengan mengetik nama OTA.</li>
        </ol>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777860093/access-agoda-v1.png" />
      </Section>

      {/* ==================== INFORMATION ==================== */}
      <Section id="information" title="Informasi Agoda">
        <p>
          Tab <strong>Informasi Agoda</strong> menyediakan prosedur koneksi dasar antara sistem dan Agoda.
          Pastikan Anda mengikuti langkah-langkah ini:
        </p>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">Langkah</th>
                <th className="px-4 py-2 text-left font-medium">Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">1</td>
                <td className="px-4 py-2">Siapa yang dapat meminta koneksi?</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">2</td>
                <td className="px-4 py-2">Siapa yang harus dihubungi?</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">3</td>
                <td className="px-4 py-2">Informasi apa yang diperlukan untuk membuka koneksi?</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">4</td>
                <td className="px-4 py-2">URL Extranet</td>
              </tr>
            </tbody>
          </table>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747885746/01._information_e9lqeq.jpg" />
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Informasi Agoda:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat memulai koneksi dengan Agoda</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa permintaan dimulai oleh Channel Manager atau perwakilan hotel.
                Pastikan Anda telah menghubungi <code>BD-Connectivity@agoda.com</code> seperti yang diinstruksikan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Informasi yang diperlukan hilang</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Hotel ID</strong> tersedia sebelum membuat permintaan.
                Periksa kembali format Hotel ID yang disalin dari extranet Agoda.
              </dd>
            </div>
            <div>
              <dt className="font-medium">URL extranet tidak valid atau kedaluwarsa</dt>
              <dd className="ml-4 text-muted-foreground">
                Gunakan URL yang benar: <code>https://ycs.agoda.com</code>. Jika tidak dapat dimuat, periksa koneksi internet Anda atau hubungi dukungan Agoda.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== SUPPORTED FEATURES ==================== */}
      <Section id="supported-features" title="Fitur yang Didukung">
        <p>
          Setelah integrasi Agoda berhasil terhubung, Anda dapat mengelola sinkronisasi dan penanganan reservasi langsung melalui Channelku.
          Kemampuan integrasi yang tersedia untuk Agoda dijelaskan di bawah ini.
        </p>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">Fitur</th>
                <th className="px-4 py-2 text-left font-medium">Status</th>
                <th className="px-4 py-2 text-left font-medium">Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Inventaris</td>
                <td className="px-4 py-2 text-green-600">✅ Didukung</td>
                <td className="px-4 py-2">Ketersediaan kamar disinkronkan secara otomatis antara Channelku dan Agoda.</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Harga</td>
                <td className="px-4 py-2 text-green-600">✅ Didukung</td>
                <td className="px-4 py-2">Pembaruan harga secara otomatis didorong ke Agoda.</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Pembatasan</td>
                <td className="px-4 py-2 text-green-600">✅ Didukung</td>
                <td className="px-4 py-2">Pembatasan seperti Stop Sell, Min Stay, dan Close to Arrival/Departure didukung.</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Reservasi</td>
                <td className="px-4 py-2 text-green-600">✅ Didukung</td>
                <td className="px-4 py-2">Reservasi dari Agoda secara otomatis diterima di Daftar Reservasi.</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Pembatalan</td>
                <td className="px-4 py-2 text-green-600">✅ Didukung</td>
                <td className="px-4 py-2">Pembaruan pembatalan dari Agoda disinkronkan secara otomatis.</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Promosi</td>
                <td className="px-4 py-2 text-yellow-600">⚠️ Dukungan Parsial</td>
                <td className="px-4 py-2">Promosi harus dikelola langsung dari extranet Agoda.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Sinkronisasi Konten</td>
                <td className="px-4 py-2 text-red-600">❌ Tidak Didukung</td>
                <td className="px-4 py-2">Foto kamar, deskripsi, dan fasilitas tidak disinkronkan.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ==================== USERNAME ==================== */}
      <Section id="username" title="Nama Pengguna">
        <p>
          Di tab <strong>Nama Pengguna</strong>, Anda dapat memasukkan atau memperbarui kredensial yang diperlukan untuk terhubung ke Agoda.
        </p>

        <h4 className="mt-4 font-medium">Cara Memperbarui Nama Pengguna dan Kunci Hotel:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>Masukkan <strong>Hotel ID</strong> Agoda Anda di bidang <strong>ID Properti</strong>.</li>
          <li>Klik tombol <strong>simpan (✓)</strong> untuk menerapkan perubahan.</li>
          <li>Jika Anda tidak ingin menyimpan perubahan, klik <strong>batal (✖)</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747885745/02._username_lvodwq.jpg" />
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Kredensial dan Pembaruan Nama Pengguna:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Otentikasi gagal</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Hotel ID</strong> valid dan disalin dengan benar dari Agoda.
                Periksa koneksi internet Anda dan coba lagi. Simpan ulang kredensial dan coba lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan Tidak Tercermin Setelah Menyimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman untuk mengonfirmasi apakah perubahan telah diterapkan.
                Jika tidak tersimpan, masukkan ulang <strong>ID Properti</strong> dan klik tombol <strong>simpan (✓)</strong> lagi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== MAPPING ==================== */}
      <Section id="mapping" title="Pemetaan">
        <p>
          Tab <strong>Pemetaan</strong> digunakan untuk menghubungkan kamar dan rate plan internal Anda dengan kamar dan rate plan yang sesuai dari Agoda.
        </p>
      </Section>

      {/* ==================== IMPORT ROOMS ==================== */}
      <Section id="import-rooms" title="Impor Kamar">
        <p>
          Fitur <strong>Impor Kamar</strong> memungkinkan Anda mengambil data kamar dan rate plan dari extranet OTA ke dalam Channel Manager.
          Langkah ini diperlukan sebelum Anda dapat membuat pemetaan.
        </p>
        <div className="mt-2 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>Pastikan rate plan aktif tersedia di extranet OTA sebelum mengimpor.</li>
          </ul>
        </div>

        <h4 className="mt-4 font-medium">Cara Mengimpor Kamar:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka tab <strong>Pemetaan</strong> dan klik <strong>Impor Kamar</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543902/04._agoda_-_step_2_a5nmlo.png" />
          <li>
            Pop-up akan muncul menampilkan kamar dan rate plan aktif dari OTA. Konfigurasikan bagaimana Channel Manager akan mendorong pembaruan ke OTA:
            <Figure label=""
            src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747885751/04._import_rooms_-_2_yyksm1.jpg" />
            <ul className="ml-6 mt-1 list-disc">
              <li>
                Jika <strong>Hanya Ketersediaan</strong> dicentang, hanya inventaris (ketersediaan) yang akan diperbarui.
              </li>
              <li>
                Jika <strong>Hanya Ketersediaan</strong> <em>tidak</em> dicentang, sistem akan mendorong ketersediaan, harga, dan pembatasan.
              </li>
            </ul>
          </li>
          <li>Klik <strong>Perbarui Rateplan</strong> untuk mengimpor data ke dalam Channel Manager.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747885752/04._import_rooms_-_3_bago6y.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Impor Kamar:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tombol Impor Kamar tidak berfungsi</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa koneksi internet Anda dan coba lagi. Keluar dan masuk kembali sebelum mencoba impor.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Daftar impor kosong atau tidak lengkap</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan dengan Agoda bahwa properti Anda aktif dan kamar/rate plan tersedia. Impor ulang setelah membuat perubahan di extranet Agoda.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kotak centang Hanya Ketersediaan tidak berperilaku seperti yang diharapkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kotak centang dicentang dengan benar sebelum mengklik <strong>Perbarui Rateplan</strong>. Periksa kembali pengaturan jika harga dan ketersediaan didorong secara tidak sengaja.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== ADD MAPPING ==================== */}
      <Section id="add-mapping" title="Tambah Pemetaan">
        <p>
          Fitur <strong>Pemetaan</strong> digunakan untuk menautkan kamar dan rate plan internal Anda dengan kamar dan rate plan yang sesuai dari Agoda.
          Untuk membuat pemetaan kamar, ikuti langkah-langkah di <strong>Cara Menambahkan Pemetaan</strong>.
        </p>
      </Section>

      {/* ==================== SETTINGS ==================== */}
      <Section id="settings" title="Pengaturan">
        <p>
          Tab <strong>Pengaturan</strong> memungkinkan Anda mengelola bagaimana sistem berinteraksi dengan Agoda, termasuk mengaktifkan saluran,
          menangani pembaruan, dan mengonfigurasi opsi reservasi.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Pengaturan:</h4>
        <Figure label="" 
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777860120/agoda-setting-v1.png"/>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            Klik <strong>Impor Reservasi Agoda Mendatang</strong> untuk mengimpor reservasi baru.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777860127/agoda-import-reservations-v1.png" />
          <li>
            Aktifkan opsi <strong>Aktifkan Saluran</strong> untuk mengaktifkan koneksi antara properti Anda dan Agoda.
          </li>
          <li>
            Nyalakan <strong>Aktifkan Pembaruan</strong> untuk mengizinkan sistem mendorong pembaruan harga, ketersediaan, dan pembatasan ke Agoda.
          </li>
          <li>
            Aktifkan <strong>Aktifkan Reservasi</strong> jika Anda ingin menerima pemesanan dari Agoda ke dalam sistem.
          </li>
          <li>
            Aktifkan <strong>Kirim Email Voucher Reservasi</strong> jika Anda ingin sistem mengirim email voucher setiap kali pemesanan diterima.
          </li>
          <li>
            Aktifkan <strong>Aktifkan Model OBP Baru</strong> jika Anda ingin menggunakan Penetapan Harga Berbasis Okupansi, 
            di mana harga kamar bervariasi berdasarkan jumlah tamu yang menginap.
          </li>
          <li>
            Di bidang <strong>Mata Uang (jika Berbeda)</strong>, klik mata uang dan pilih kode mata uang jika mata uang Agoda Anda berbeda dari default sistem.
            Jika dibiarkan kosong, sistem akan mendeteksi mata uang yang sesuai secara otomatis. Klik <strong>Perbarui</strong> untuk menyimpan semua perubahan.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747885763/06._settings_-_2_pauthv.jpg" />
          <li>
            <strong>Aktifkan OBP:</strong> Aktifkan OBP untuk menampilkan bidang konfigurasi tambahan. Untuk petunjuk terperinci,
            lihat <strong>Cara Mengonfigurasi Pengaturan OBP</strong>.
          </li>
          <li>
            <strong>Pembaruan OTA Manual:</strong> Untuk menyinkronkan harga, ketersediaan, persyaratan minimum malam, dan status "Stop Sell" di semua saluran yang terhubung.
            Data dapat disinkronkan hingga rentang tanggal maksimum yang diizinkan oleh masing-masing OTA (biasanya antara 12 hingga 24 bulan ke depan).
            Lihat <strong>Cara Mengonfigurasi Pembaruan OTA Manual</strong> untuk melihat langkah-langkah pengaturan.
          </li>
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pengaturan dan Riwayat Pembaruan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Aktifkan Saluran atau Aktifkan Pembaruan tidak berfungsi</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kotak centang dipilih dan klik tombol <strong>Perbarui</strong> setelahnya. Jika perubahan tidak diterapkan, segarkan halaman dan coba lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak menerima reservasi dari Agoda</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa <strong>Aktifkan Reservasi</strong> diaktifkan. Pastikan rate plan dipetakan dan aktif di Agoda dan sistem.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Email voucher reservasi tidak diterima</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Kirim Email Voucher Reservasi</strong> diaktifkan. Periksa folder spam atau sampah, atau konfirmasikan alamat email Anda di pengaturan notifikasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">OBP tidak diterapkan pada harga</dt>
              <dd className="ml-4 text-muted-foreground">
                Aktifkan <strong>Aktifkan Model OBP Baru</strong> untuk mengizinkan penetapan harga berdasarkan jumlah tamu. Hubungi dukungan Agoda untuk memverifikasi OBP diaktifkan untuk properti Anda.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Impor Reservasi Agoda Mendatang tidak berfungsi</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman dan klik lagi. Jika tidak ada reservasi yang diimpor, periksa dengan Agoda apakah ada pemesanan baru dan telah dikonfirmasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Bidang mata uang tidak tersimpan dengan benar</dt>
              <dd className="ml-4 text-muted-foreground">
                Klik untuk menghapus, lalu pilih ulang kode mata uang. Jika dibiarkan kosong, sistem akan mendeteksi mata uang yang benar secara otomatis pada saat pemesanan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pembaruan OTA tidak mengirim perubahan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pilih setidaknya satu kamar atau pilih <strong>Semua Tipe Kamar</strong> sebelum mengklik <strong>Pembaruan OTA</strong>. Tunggu beberapa menit dan tinjau bagian <strong>10 Pembaruan Terakhir</strong> untuk mengonfirmasi apakah telah tercatat.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak ada pembaruan yang ditampilkan di 10 Pembaruan Terakhir</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman setelah beberapa menit. Pastikan <strong>Pembaruan OTA</strong> dipicu dan pemetaan valid.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pembaruan ditandai sebagai gagal</dt>
              <dd className="ml-4 text-muted-foreground">
                Arahkan kursor ke entri pembaruan yang gagal untuk melihat pesan kesalahan. Konfirmasikan bahwa rate plan dan kamar masih aktif di extranet Agoda. Coba kirim ulang pembaruan menggunakan tombol <strong>Pembaruan OTA</strong>.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== CONFIGURE OBP ==================== */}
      <Section id="configure-obp" title="Konfigurasi OBP">
        <p>
          Jika properti menggunakan <strong>Penetapan Harga Berbasis Okupansi (OBP)</strong> di Agoda, Anda dapat mengaktifkan opsi OBP.
          Setelah Anda mengaktifkannya, pengaturan konfigurasi spesifik akan tersedia untuk Anda sesuaikan.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Pengaturan OBP:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tombol <strong>Pengaturan</strong> di samping OBP.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776408909/OBP_Setting_dyetve.png" />
          <li>
            Anda akan dibawa ke layar konfigurasi OBP di mana Anda dapat menentukan penyesuaian harga terperinci berdasarkan okupansi.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776408911/View_OBP_Setting_kglvy7.png" />
          <li>
            Pilih jenis penyesuaian: <strong>Persen (%)</strong> atau <strong>Jumlah (angka)</strong>.
          </li>
          <li>
            Untuk setiap tipe kamar tidur yang tercantum, Anda akan melihat kolom <strong>Pax Default</strong>, pemilih <strong>Naikkan/Turunkan</strong>,
            dan kolom <strong>Nilai</strong>.
          </li>
          <li>
            Anda dapat mengklik panah bawah di samping setiap kamar tidur untuk memperluas daftar tingkat pax (dari 1 hingga 9 pax).
          </li>
          <li>
            Untuk setiap tingkat pax, masukkan nilai penyesuaian yang akan diterapkan (mis., naikkan 10%, turunkan 50, dll.).
          </li>
          <li>
            Setelah mengisi nilai yang diperlukan, klik <strong>Simpan</strong> untuk menerapkan pengaturan OBP.
          </li>
        </ol>
      </Section>

      {/* ==================== MANUAL OTA UPDATE ==================== */}
      <Section id="manual-ota-update" title="Pembaruan OTA Manual">
        <h4 className="font-medium">Cara Mengonfigurasi Pembaruan OTA Manual:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Gulir ke bawah ke bagian <strong>Pembaruan OTA</strong>.</li>
          <li>Klik tombol <strong>Pembaruan OTA</strong> untuk membuka jendela pop-up.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762403058/ota-update.png" />
          <li>
            Lengkapi semua bidang formulir di bawah ini:
            <Figure label=""
            src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762403286/ota-update-2.png" />
            <ul className="ml-6 mt-1 list-disc">
              <li>
                <strong>Pilihan Tanggal:</strong> Pilih durasi pembaruan OTA (mis., 1 bulan, 3 bulan, dll.)
              </li>
              <li>
                <strong>Tipe Kamar:</strong> Pilih tipe kamar dari daftar.
              </li>
              <li>
                <strong>Harga:</strong> Pilih satu atau lebih rate plan. Anda juga dapat memilih semua rate plan jika diperlukan.
              </li>
            </ul>
          </li>
          <li>Klik <strong>Sinkronkan OTA</strong> untuk menyimpan dan menerapkan perubahan.</li>
        </ol>
      </Section>
    </DocsLayout>
  );
}