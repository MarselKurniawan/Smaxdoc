import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/traveloka")({
  head: () => ({
    meta: [
      { title: "Traveloka — Channelku | SinergiMax" },
      { name: "description", content: "Kelola koneksi Traveloka, pemetaan kamar & rate, impor data, dan konfigurasi OBP." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "accessing", label: "Mengakses Pengaturan Traveloka" },
  { id: "information", label: "Informasi Traveloka" },
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
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Traveloka" activeTo="/docs/channelku/channel-manager/control-panel/traveloka">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Traveloka</h1>
      <p className="mt-4">
        <strong>Traveloka</strong> adalah salah satu saluran OTA di mana Anda dapat mengelola koneksi, melakukan pemetaan kamar dan rate plan,
        mengimpor data dari OTA, dan mengonfigurasi pengaturan lainnya melalui tab berikut: <strong>Informasi</strong>, <strong>Nama Pengguna</strong>,
        <strong>Pemetaan</strong>, <strong>Penugasan</strong>, dan <strong>Pengaturan</strong>.
      </p>
      <p className="mt-2">
        Setelah integrasi dikonfigurasi sepenuhnya, semua reservasi dari Traveloka akan muncul di <strong>Daftar Reservasi</strong>,
        memungkinkan Anda mengelolanya secara efisien di satu tempat.
      </p>

      {/* ==================== ACCESSING ==================== */}
      <Section id="accessing" title="Mengakses Pengaturan Traveloka">
        <p>Berikut cara mengakses pengaturan Traveloka:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Di Channelku, buka menu <strong>Channel Manager</strong>, lalu klik <strong>Panel Kontrol</strong>.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777008328/control-panel_navigation_menu_lqwi6o.png" />
          <li>Pilih <strong>Traveloka</strong> dari daftar saluran, atau Anda dapat mencari dari daftar dengan mengetik nama OTA.</li>
        </ol>
      </Section>

      {/* ==================== INFORMATION ==================== */}
      <Section id="information" title="Informasi Traveloka">
        <p>
          Tab <strong>Informasi Traveloka</strong> menyediakan prosedur koneksi dasar antara sistem dan Traveloka.
          Pastikan Anda mengikuti langkah-langkah ini:
        </p>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747969821/01._information_uytzrs.jpg" />

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
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Informasi Traveloka:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat memulai koneksi dengan Traveloka</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa orang yang memulai permintaan adalah perwakilan hotel.
                Pastikan Anda telah menghubungi <strong>Traveloka Account Manager</strong> yang benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Informasi yang diperlukan hilang</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Hotel ID</strong> diberikan sebelum meminta koneksi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">URL extranet tidak valid atau kedaluwarsa</dt>
              <dd className="ml-4 text-muted-foreground">
                Gunakan URL yang benar. Jika masih gagal, periksa dengan dukungan Traveloka untuk pembaruan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== USERNAME ==================== */}
      <Section id="username" title="Nama Pengguna">
        <p>
          Di tab <strong>Nama Pengguna</strong>, Anda dapat memasukkan atau memperbarui <strong>Hotel ID</strong> yang disediakan oleh Traveloka.
        </p>

        <h4 className="mt-4 font-medium">Cara Memperbarui Hotel ID:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>Masukkan <strong>Hotel ID</strong> yang ditetapkan untuk properti Anda oleh Traveloka.</li>
          <li>Klik tombol <strong>simpan</strong> untuk menerapkan perubahan.</li>
          <li>Jika Anda tidak ingin menyimpan perubahan, klik <strong>batal</strong>.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747969821/02._username_sasmwc.jpg" />
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Nama Pengguna:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat menyimpan Hotel ID</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan bidang tidak dibiarkan kosong. Klik tombol <strong>simpan</strong> secara eksplisit untuk menerapkan perubahan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Hotel ID tidak valid</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa ID tersebut benar dan ditetapkan oleh Traveloka. Hubungi <strong>Traveloka Account Manager</strong> Anda untuk mengonfirmasi Hotel ID.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== MAPPING ==================== */}
      <Section id="mapping" title="Pemetaan">
        <p>
          Tab <strong>Pemetaan</strong> digunakan untuk menghubungkan kamar dan rate plan internal Anda dengan kamar dan rate plan yang sesuai dari Traveloka.
        </p>
      </Section>

      {/* ==================== IMPORT ROOMS ==================== */}
      <Section id="import-rooms" title="Impor Kamar dari Traveloka">
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

        <h4 className="mt-4 font-medium">Cara Mengimpor Kamar dari Traveloka:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tombol <strong>Impor Kamar</strong> di bagian atas tab <strong>Pemetaan</strong>.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747969821/04._import_rooms_xmxz7t.jpg" />
          <li>
            Pop-up akan muncul menampilkan kamar dan rate plan aktif dari OTA. Konfigurasikan bagaimana Channel Manager akan mendorong pembaruan ke OTA:
            <ul className="ml-6 mt-1 list-disc">
              <li>
                Jika <strong>Hanya Ketersediaan</strong> dicentang, hanya inventaris (ketersediaan) yang akan diperbarui.
              </li>
              <li>
                Jika <strong>Hanya Ketersediaan</strong> <em>tidak</em> dicentang, sistem akan mendorong ketersediaan, harga, dan pembatasan.
              </li>
                      <Figure label=""
                      src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747885751/04._import_rooms_-_2_yyksm1.jpg" />
            </ul>
          </li>
          <li>Klik <strong>Perbarui Rateplan</strong> untuk menyelesaikan impor. Setelah diimpor, data akan siap untuk pemetaan.</li>
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
                Konfirmasikan dengan Traveloka bahwa tipe kamar dan rate plan dikonfigurasi dengan benar di sisi mereka.
                Pastikan properti aktif dan terhubung di sistem Traveloka.
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
          Fitur <strong>Pemetaan</strong> digunakan untuk menautkan kamar dan rate plan internal Anda dengan kamar dan rate plan yang sesuai dari Traveloka.
          Untuk membuat pemetaan kamar, ikuti langkah-langkah di <strong>Cara Menambahkan Pemetaan</strong>.
        </p>
      </Section>

      {/* ==================== SETTINGS ==================== */}
      <Section id="settings" title="Pengaturan">
        <p>
          Tab <strong>Pengaturan</strong> memungkinkan Anda mengelola bagaimana sistem berinteraksi dengan Traveloka, termasuk mengaktifkan saluran,
          menangani pembaruan, dan mengonfigurasi opsi reservasi.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Pengaturan:</h4>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762415091/traveloka-setting.png" />
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka tab <strong>Pengaturan</strong>.</li>
          <li>
            Aktifkan opsi <strong>Aktifkan Saluran</strong> untuk mengaktifkan koneksi antara properti Anda dan Traveloka.
          </li>
          <li>
            Nyalakan <strong>Aktifkan Pembaruan</strong> untuk mengizinkan sistem mendorong pembaruan harga, ketersediaan, dan pembatasan ke Traveloka.
          </li>
          <li>
            Aktifkan <strong>Aktifkan Reservasi</strong> jika Anda ingin menerima pemesanan dari Traveloka ke dalam sistem.
          </li>
          <li>
            Jika Anda ingin sistem mengirim email voucher setiap kali pemesanan diterima, aktifkan opsi <strong>Kirim Email Voucher Reservasi</strong>.
          </li>
          <li>
            Di bidang <strong>Mata Uang (jika Berbeda)</strong>, pilih kode mata uang jika mata uang Traveloka Anda berbeda dari default sistem.
            Jika dibiarkan kosong, sistem akan mendeteksi mata uang yang sesuai secara otomatis.
          </li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747901057/05._settings_-_2_ta0fj4.jpg" />
          <li>
            <strong>Aktifkan OBP:</strong> Aktifkan OBP untuk menampilkan bidang konfigurasi tambahan. Untuk petunjuk terperinci,
            lihat <strong>Cara Mengonfigurasi Pengaturan OBP</strong>.
          </li>
          <li>
            <strong>Pembaruan OTA Manual:</strong> Untuk menyinkronkan harga, ketersediaan, persyaratan minimum malam, dan status "Stop Sell" di semua saluran yang terhubung.
            Data dapat disinkronkan hingga rentang tanggal maksimum yang diizinkan oleh masing-masing OTA (biasanya antara 12 hingga 24 bulan ke depan).
            Lihat <strong>Cara Mengonfigurasi Pembaruan OTA Manual</strong> untuk melihat langkah-langkah pengaturan.
          </li>
        </ol>

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
              <dt className="font-medium">Tidak menerima reservasi dari Traveloka</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa <strong>Aktifkan Reservasi</strong> diaktifkan. Periksa kembali pemetaan dan penugasan untuk memastikan tautan yang benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Email voucher reservasi tidak diterima</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Kirim Email Voucher Reservasi</strong> diaktifkan. Periksa folder spam atau sampah, atau verifikasi pengaturan email Anda.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Bidang mata uang tetap kosong setelah dipilih</dt>
              <dd className="ml-4 text-muted-foreground">
                Klik sekali untuk memilih kode mata uang yang benar. Jika dibiarkan kosong, sistem akan mendeteksi mata uang yang benar secara otomatis berdasarkan reservasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">OBP tidak berfungsi setelah aktivasi</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Aktifkan OBP</strong> diaktifkan. Hubungi Traveloka untuk memastikan OBP didukung dan aktif di sisi mereka.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pembaruan OTA tidak memicu perubahan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan sebuah kamar dipilih sebelum mengklik tombol. Tunggu beberapa saat dan segarkan halaman untuk memeriksa apakah pembaruan tercatat.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak ada pembaruan yang ditampilkan di 10 Pembaruan Terakhir</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu beberapa menit dan segarkan halaman. Jika pembaruan masih tidak tercatat, periksa pemetaan dan pastikan <strong>Pembaruan OTA</strong> dipicu.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Status pembaruan gagal ditampilkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Arahkan kursor ke pembaruan yang gagal untuk melihat alasan kesalahan. Pastikan rate plan yang dipetakan aktif di sisi Traveloka.
                Coba kirim ulang <strong>Pembaruan OTA</strong> secara manual jika diperlukan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== CONFIGURE OBP ==================== */}
      <Section id="configure-obp" title="Konfigurasi OBP">
        <p>
          Jika properti menggunakan <strong>Penetapan Harga Berbasis Okupansi (OBP)</strong> di Traveloka, Anda dapat mengaktifkan opsi OBP.
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