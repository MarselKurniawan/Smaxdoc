import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/ctrip")({
  head: () => ({
    meta: [
      { title: "Ctrip — Channelku | SinergiMax" },
      { name: "description", content: "Kelola koneksi Ctrip, pemetaan kamar & rate, impor data, dan konfigurasi OBP." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "accessing", label: "Mengakses Pengaturan Ctrip" },
  { id: "information", label: "Informasi Ctrip" },
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
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Ctrip" activeTo="/docs/channelku/channel-manager/control-panel/ctrip">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Ctrip</h1>
      <p className="mt-4">
        <strong>Ctrip</strong> adalah salah satu saluran OTA di mana Anda dapat mengelola koneksi, melakukan pemetaan kamar dan rate plan,
        mengimpor data dari OTA, dan mengonfigurasi pengaturan lainnya melalui tab berikut: <strong>Informasi</strong>, <strong>Nama Pengguna</strong>,
        <strong>Pemetaan</strong>, <strong>Penugasan</strong>, dan <strong>Pengaturan</strong>.
      </p>
      <p className="mt-2">
        Setelah integrasi dikonfigurasi sepenuhnya, semua reservasi dari Ctrip akan muncul di <strong>Daftar Reservasi</strong>,
        memungkinkan Anda mengelolanya secara efisien di satu tempat.
      </p>

      {/* ==================== ACCESSING ==================== */}
      <Section id="accessing" title="Mengakses Pengaturan Ctrip">
        <p>Berikut cara mengakses pengaturan Ctrip:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Di Channelku, buka menu <strong>Channel Manager</strong>, lalu klik <strong>Panel Kontrol</strong>.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777008328/control-panel_navigation_menu_lqwi6o.png" />
          <li>Pilih <strong>Ctrip</strong> dari daftar saluran, atau Anda dapat mencari dari daftar dengan mengetik nama OTA.</li>
        </ol>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777867799/access-ctrip.png" />
      </Section>

      {/* ==================== INFORMATION ==================== */}
      <Section id="information" title="Informasi Ctrip">
        <p>
          Tab <strong>Informasi Ctrip</strong> menyediakan prosedur koneksi dasar antara sistem dan Ctrip.
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
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747885754/01._ctrip_information_rr2rwo.jpg" />
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Informasi Ctrip:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat memulai koneksi dengan Ctrip</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa orang yang memulai permintaan adalah Channel Manager atau perwakilan hotel.
                Pastikan Anda telah menghubungi <strong>Ctrip Market Manager</strong> yang benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Informasi yang diperlukan hilang</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali bahwa <strong>Nama Pengguna</strong>, <strong>Kata Sandi</strong>, dan <strong>Hotel ID</strong> telah disiapkan sebelum meminta koneksi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">URL extranet tidak valid atau kedaluwarsa</dt>
              <dd className="ml-4 text-muted-foreground">
                Gunakan URL yang benar: <code>http://ebooking.ctrip.com</code>. Jika masih gagal, periksa dengan dukungan Ctrip untuk pembaruan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== USERNAME ==================== */}
      <Section id="username" title="Nama Pengguna">
        <p>
          Di tab <strong>Nama Pengguna</strong>, Anda dapat memasukkan atau memperbarui kredensial yang diperlukan untuk terhubung ke Ctrip.
        </p>

        <h4 className="mt-4 font-medium">Cara Memperbarui Nama Pengguna dan Hotel ID:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>Masukkan <strong>Nama Pengguna</strong> yang digunakan untuk akun Ctrip Anda.</li>
          <li>Isi <strong>Kata Sandi</strong> yang cocok dengan akun Ctrip Anda.</li>
          <li>Masukkan <strong>Hotel ID</strong> yang terdaftar di sistem Ctrip.</li>
          <li>Klik tombol <strong>simpan (✓)</strong> untuk menerapkan perubahan.</li>
          <li>Jika Anda tidak ingin menyimpan perubahan, klik <strong>batal (✖)</strong>.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747885755/02._username_fzpu9q.jpg" />
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Nama Pengguna:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat menyimpan kredensial</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang (<strong>Nama Pengguna</strong>, <strong>Kata Sandi</strong>, dan <strong>Hotel ID</strong>) diisi. 
                Klik tombol <strong>simpan (✓)</strong> secara eksplisit untuk menerapkan perubahan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kredensial login tidak diterima</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali bahwa nama pengguna dan kata sandi cocok dengan yang digunakan di extranet Ctrip. 
                Pastikan Hotel ID ditetapkan dengan benar oleh Ctrip dan milik properti yang tepat.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== MAPPING ==================== */}
      <Section id="mapping" title="Pemetaan">
        <p>
          Tab <strong>Pemetaan</strong> digunakan untuk menghubungkan kamar dan rate plan internal Anda dengan kamar dan rate plan yang sesuai dari Ctrip.
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
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747885761/04._import_rooms_-_1_chxxya.jpg" />
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
                Pastikan koneksi internet stabil. Coba keluar dan masuk kembali, lalu coba impor lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Data impor hilang atau rate plan tidak muncul</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan dengan Ctrip bahwa tipe kamar dan rate plan dikonfigurasi dengan benar di sisi mereka. 
                Pastikan properti aktif dan terhubung di sistem Ctrip.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kotak centang Hanya Ketersediaan tidak berfungsi seperti yang diharapkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kotak centang dipilih sebelum mengklik <strong>Perbarui Rateplan</strong>. 
                Jika harga dan ketersediaan didorong secara tidak sengaja, impor ulang dan periksa kembali pengaturannya.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== ADD MAPPING ==================== */}
      <Section id="add-mapping" title="Tambah Pemetaan">
        <p>
          Fitur <strong>Pemetaan</strong> digunakan untuk menautkan kamar dan rate plan internal Anda dengan kamar dan rate plan yang sesuai dari Ctrip.
          Untuk membuat pemetaan kamar, ikuti langkah-langkah di <strong>Cara Menambahkan Pemetaan</strong>.
        </p>
      </Section>

      {/* ==================== SETTINGS ==================== */}
      <Section id="settings" title="Pengaturan">
        <p>
          Tab <strong>Pengaturan</strong> memungkinkan Anda mengelola bagaimana sistem berinteraksi dengan Ctrip, termasuk mengaktifkan saluran,
          menangani pembaruan, dan mengonfigurasi opsi reservasi.
        </p>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777868075/ctrip-setting-v1.png" />

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Pengaturan:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            Aktifkan opsi <strong>Aktifkan Saluran</strong> untuk mengaktifkan koneksi antara properti Anda dan Ctrip.
          </li>
          <li>
            Nyalakan <strong>Aktifkan Pembaruan</strong> untuk mengizinkan sistem mendorong pembaruan harga, ketersediaan, dan pembatasan ke Ctrip.
          </li>
          <li>
            Aktifkan <strong>Aktifkan Reservasi</strong> jika Anda ingin menerima pemesanan dari Ctrip ke dalam sistem.
          </li>
          <li>
            Jika Anda ingin sistem mengirim email voucher setiap kali pemesanan diterima, aktifkan opsi <strong>Kirim Email Voucher Reservasi</strong>.
          </li>
          <li>
            Di bidang <strong>Mata Uang (jika Berbeda)</strong>, klik kosong dan pilih kode mata uang jika mata uang Ctrip Anda berbeda dari default sistem. 
            Jika dibiarkan kosong, sistem akan mendeteksi mata uang yang sesuai secara otomatis. Klik tombol <strong>Perbarui</strong> untuk menyimpan semua perubahan.
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
          <p className="text-sm font-semibold">Pemecahan Masalah Pengaturan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Aktifkan Saluran atau Aktifkan Pembaruan tidak berfungsi</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kotak centang dipilih dan klik tombol <strong>Perbarui</strong> setelahnya. Jika perubahan tidak diterapkan, segarkan halaman dan coba lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak menerima reservasi dari Ctrip</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa <strong>Aktifkan Reservasi</strong> diaktifkan. Periksa <strong>10 Pembaruan Terakhir</strong> untuk melihat apakah ada kesalahan yang terjadi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Email voucher reservasi tidak diterima</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Kirim Email Voucher Reservasi</strong> diaktifkan. Periksa folder spam/sampah email, atau konfirmasikan bahwa email notifikasi yang benar telah dikonfigurasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Bidang mata uang tetap kosong setelah dipilih</dt>
              <dd className="ml-4 text-muted-foreground">
                Klik sekali untuk menghapus lalu pilih kode mata uang lagi. Jika dibiarkan kosong, pastikan sistem mendeteksi mata uang dengan benar dengan memeriksa pratinjau reservasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pembaruan OTA tidak memicu perubahan apa pun</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan setidaknya satu kamar dipilih (atau pilih <strong>"Semua Tipe Kamar"</strong>). Tinjau bagian <strong>10 Pembaruan Terakhir</strong> untuk mengonfirmasi apakah pembaruan dipicu atau gagal.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Riwayat pembaruan tidak menunjukkan pembaruan terbaru</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu beberapa saat dan segarkan halaman. Jika pembaruan masih tidak muncul, periksa apakah pembaruan berhasil atau mengalami kesalahan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== CONFIGURE OBP ==================== */}
      <Section id="configure-obp" title="Konfigurasi OBP">
        <p>
          Jika properti menggunakan <strong>Penetapan Harga Berbasis Okupansi (OBP)</strong> di Ctrip, Anda dapat mengaktifkan opsi OBP.
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
        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Pembaruan OTA Manual:</h4>
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