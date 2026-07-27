import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/expedia")({
  head: () => ({
    meta: [
      { title: "Expedia — Channelku | SinergiMax" },
      { name: "description", content: "Kelola koneksi Expedia, pemetaan kamar & rate, impor data, dan konfigurasi OBP." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "accessing", label: "Mengakses Pengaturan Expedia" },
  { id: "information", label: "Informasi Expedia" },
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
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Expedia" activeTo="/docs/channelku/channel-manager/control-panel/expedia">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Expedia</h1>
      <p className="mt-4">
        <strong>EXPEDIA</strong> adalah salah satu saluran OTA di mana Anda dapat mengelola koneksi, melakukan pemetaan kamar dan rate plan,
        mengimpor data dari OTA, dan mengonfigurasi pengaturan lainnya melalui tab berikut: <strong>Informasi</strong>, <strong>Nama Pengguna</strong>,
        <strong>Pemetaan</strong>, <strong>Penugasan</strong>, dan <strong>Pengaturan</strong>.
      </p>
      <p className="mt-2">
        Setelah integrasi dikonfigurasi sepenuhnya, semua reservasi dari Expedia akan muncul di <strong>Daftar Reservasi</strong>,
        memungkinkan Anda mengelolanya secara efisien di satu tempat.
      </p>

      {/* ==================== ACCESSING ==================== */}
      <Section id="accessing" title="Mengakses Pengaturan Expedia">
        <p>Berikut cara mengakses pengaturan Expedia:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Di Channelku, buka menu <strong>Channel Manager</strong>, lalu klik <strong>Panel Kontrol</strong>.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777008328/control-panel_navigation_menu_lqwi6o.png" />
          <li>Pilih <strong>Expedia</strong> dari daftar saluran, atau Anda dapat mencari dari daftar dengan mengetik nama OTA.</li>
        </ol>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778057522/access-expedia.png" />
      </Section>

      {/* ==================== INFORMATION ==================== */}
      <Section id="information" title="Informasi Expedia">
        <p>
          Tab <strong>Informasi Expedia</strong> menyediakan prosedur koneksi dasar antara sistem dan Expedia.
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
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747901056/01._information_bnfroy.jpg" />
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Informasi Expedia:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat memulai koneksi dari EPC</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda masuk ke <strong>EPC (Expedia Partner Central)</strong> dengan akses yang sesuai.
                Buka <strong>Konektivitas Kamar dan Rate Plan</strong> di extranet dan ikuti alur koneksi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kredensial EPC hilang</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memiliki <strong>Nama Pengguna EPC</strong>, <strong>Kata Sandi</strong>, dan <strong>Hotel ID</strong> siap sebelum melanjutkan.
                Hubungi dukungan Expedia jika Anda tidak dapat mengambil kredensial Anda.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== USERNAME ==================== */}
      <Section id="username" title="Nama Pengguna">
        <p>
          Di tab <strong>Nama Pengguna</strong>, Anda dapat memasukkan atau memperbarui kredensial yang diperlukan untuk terhubung ke Expedia.
        </p>

        <h4 className="mt-4 font-medium">Cara Memperbarui Nama Pengguna dan Hotel ID:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>Masukkan <strong>Hotel ID</strong> seperti yang terdaftar di sistem Expedia.</li>
          <li>Klik tombol <strong>simpan (✓)</strong> untuk menerapkan perubahan.</li>
          <li>Jika Anda tidak ingin menyimpan perubahan, klik <strong>batal (✖)</strong>.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747901056/02._username_i8anwt.jpg" />
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Nama Pengguna:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Hotel ID tidak tersimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa bahwa bidang <strong>Hotel ID</strong> tidak dibiarkan kosong dan mengikuti format Expedia.
                Konfirmasikan koneksi internet Anda stabil dan coba lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kredensial tidak memperbarui</dt>
              <dd className="ml-4 text-muted-foreground">
                Klik tombol <strong>simpan (✓)</strong> dan tunggu konfirmasi.
                Jika perubahan tidak diterapkan, segarkan halaman dan coba lagi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== MAPPING ==================== */}
      <Section id="mapping" title="Pemetaan">
        <p>
          Tab <strong>Pemetaan</strong> digunakan untuk menghubungkan kamar dan rate plan internal Anda dengan kamar dan rate plan yang sesuai dari Expedia.
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
          <li>Klik tombol <strong>Impor Kamar</strong> di bagian atas tab <strong>Pemetaan</strong>.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747901056/03._mapping_-_3_zxgvp3.jpg" />
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
          <li>Klik <strong>Perbarui Rateplan</strong> untuk menyelesaikan impor. Data akan siap untuk pemetaan.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747885752/04._import_rooms_-_3_bago6y.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Impor Kamar:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tombol Impor Kamar tidak merespons</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda masuk dan memiliki izin yang tepat. Segarkan halaman atau keluar dan masuk kembali, lalu coba lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kamar atau rate plan hilang</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa bahwa kamar dan rate plan diatur ke aktif dan dapat dipesan di <strong>Expedia Partner Central</strong>.
                Tunggu beberapa menit setelah membuat rate plan baru di EPC sebelum mengimpor lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kotak centang Hanya Ketersediaan diabaikan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kotak centang dicentang sebelum mengklik <strong>Perbarui Rateplan</strong>.
                Jika data yang salah didorong, ulangi impor dan konfirmasikan pengaturan kotak centang.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== ADD MAPPING ==================== */}
      <Section id="add-mapping" title="Tambah Pemetaan">
        <p>
          Fitur <strong>Pemetaan</strong> digunakan untuk menautkan kamar dan rate plan internal Anda dengan kamar dan rate plan yang sesuai dari Expedia.
          Untuk membuat pemetaan kamar, ikuti langkah-langkah di <strong>Cara Menambahkan Pemetaan</strong>.
        </p>
      </Section>

      {/* ==================== SETTINGS ==================== */}
      <Section id="settings" title="Pengaturan">
        <p>
          Tab <strong>Pengaturan</strong> memungkinkan Anda mengelola bagaimana sistem berinteraksi dengan Expedia, termasuk mengaktifkan saluran,
          mengonfigurasi perilaku pembaruan, menangani pemrosesan reservasi, dan menyesuaikan opsi harga lanjutan.
        </p>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778057614/expedia-setting-v1.png" />

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Pengaturan:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            Klik <strong>Impor Reservasi Expedia Mendatang</strong> untuk mengimpor reservasi baru dari Expedia.
          </li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778057643/import-future-reservation-expedia.png" />
          <li>
            Aktifkan opsi <strong>Aktifkan Saluran</strong> untuk mengaktifkan koneksi antara properti Anda dan Expedia.
          </li>
          <li>
            Nyalakan <strong>Aktifkan Pembaruan</strong> untuk mengizinkan sistem mendorong pembaruan harga, ketersediaan, dan pembatasan ke Expedia.
          </li>
          <li>
            Aktifkan <strong>Aktifkan Reservasi</strong> jika Anda ingin menerima pemesanan dari Expedia ke dalam sistem.
          </li>
          <li>
            Jika Anda ingin sistem mengirim email voucher setiap kali pemesanan diterima, aktifkan opsi <strong>Kirim Email Voucher Reservasi</strong>.
          </li>
          <li>
            Di bagian <strong>Mata Uang (jika Berbeda)</strong>, pilih mata uang jika berbeda dari default sistem Anda. 
            Masukkan <strong>nilai konversi</strong> dan klik <strong>Perbarui</strong>.
          </li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747901057/05._settings_-_2_ta0fj4.jpg" />
          <li>
            Atur bidang <strong>Komisi OTA (%)</strong> untuk mencerminkan tingkat komisi yang berlaku untuk saluran ini. Anda dapat mengedit nilai ini kapan saja.
          </li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747901057/05._settings_-_3_ona97t.jpg" />
          <li>
            Aktifkan <strong>Aktifkan OBP</strong> jika properti Anda menggunakan <strong>Penetapan Harga Berbasis Okupansi (OBP)</strong> di Expedia.
          </li>
          <li>
            Aktifkan atau nonaktifkan opsi <strong>Deskripsi Harga Expedia</strong> sesuai dengan preferensi Anda. 
            Saat diaktifkan, sistem akan menyertakan detail deskripsi harga khusus untuk format Expedia.
          </li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777941092/05._settings_-_6_emairo.jpg" />
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
                Pastikan kotak centang dipilih dan klik tombol <strong>Perbarui</strong> setelahnya. Segarkan halaman untuk memeriksa apakah pengaturan telah disimpan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak menerima reservasi Expedia</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa <strong>Aktifkan Reservasi</strong> diaktifkan. Verifikasi pemetaan dan penugasan telah selesai dengan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Email voucher reservasi tidak terkirim</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Kirim Email Voucher Reservasi</strong> diaktifkan. Periksa folder spam atau pengaturan notifikasi di klien email Anda.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Nilai komisi salah atau hilang</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali bidang <strong>Komisi OTA (%)</strong>. Masukkan angka yang valid dan simpan pengaturan lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Mata uang tidak diterapkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pilih mata uang yang valid dan masukkan nilai konversi jika diperlukan. Biarkan kosong hanya jika Anda ingin sistem mendeteksi mata uang secara otomatis.
              </dd>
            </div>
            <div>
              <dt className="font-medium">OBP tidak tercermin dalam harga</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan <strong>Aktifkan OBP</strong> diaktifkan. Periksa bahwa pengaturan OBP disimpan dengan benar dan semua tingkat pax dikonfigurasi. 
                Ingat untuk mengklik <strong>Simpan</strong> di halaman OBP sebelum keluar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Deskripsi Harga Expedia tidak muncul</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan opsi <strong>Deskripsi Harga Expedia</strong> diaktifkan. Hubungi Expedia jika deskripsi masih tidak tercermin dengan benar di sisi mereka.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pembaruan OTA tidak mendorong perubahan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan setidaknya satu tipe kamar dipilih. Tunggu beberapa saat dan periksa <strong>10 Pembaruan Terakhir</strong> untuk mengonfirmasi pengiriman.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak ada riwayat pembaruan yang tercatat</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu beberapa menit, lalu segarkan halaman. Jika tidak ada pembaruan yang tercatat, periksa kembali pemetaan Anda dan coba lagi pembaruan OTA.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pembaruan menunjukkan status gagal</dt>
              <dd className="ml-4 text-muted-foreground">
                Arahkan kursor ke ikon kegagalan di log riwayat untuk melihat detail kesalahan. Perbaiki pengaturan rate plan atau kamar yang tidak valid, 
                lalu coba kirim ulang pembaruan secara manual.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== CONFIGURE OBP ==================== */}
      <Section id="configure-obp" title="Konfigurasi OBP">
        <p>
          Jika properti menggunakan <strong>Penetapan Harga Berbasis Okupansi (OBP)</strong> di Expedia, Anda dapat mengaktifkan opsi OBP.
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