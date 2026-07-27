import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/tbo-holidays")({
  head: () => ({
    meta: [
      { title: "TBO Holidays — Channelku | SinergiMax" },
      { name: "description", content: "Kelola koneksi TBO Holidays, pemetaan, impor data, sinkronisasi, dan konfigurasi OBP." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "accessing", label: "Mengakses Pengaturan TBO Holidays" },
  { id: "information", label: "Informasi TBO Holidays" },
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
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="TBO Holidays" activeTo="/docs/channelku/channel-manager/control-panel/tbo-holidays">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">TBO Holidays</h1>
      <p className="mt-4">
        <strong>TBO Holidays</strong> adalah sebuah OTA yang dapat diintegrasikan dengan Channel Manager. Melalui integrasi ini,
        Anda dapat mengelola daftar properti, menyinkronkan ketersediaan kamar, harga, dan pembatasan, serta menerima pemesanan
        langsung di dalam sistem.
      </p>
      <p className="mt-2">
        Setelah integrasi dikonfigurasi sepenuhnya, semua reservasi dari TBO Holidays akan muncul di <strong>Daftar Reservasi</strong>,
        memungkinkan Anda mengelolanya secara efisien di satu tempat.
      </p>

      {/* ==================== ACCESSING ==================== */}
      <Section id="accessing" title="Mengakses Pengaturan TBO Holidays">
        <p>Berikut cara mengakses pengaturan TBO Holidays:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Di Channelku, buka menu <strong>Channel Manager</strong>, lalu klik <strong>Panel Kontrol</strong>.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777008328/control-panel_navigation_menu_lqwi6o.png" />
          <li>Pilih <strong>TBO Holidays</strong> dari daftar saluran, atau Anda dapat mencari dari daftar dengan mengetik nama OTA.</li>
        </ol>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777853479/access-tbo-holidays.png" />
      </Section>

      {/* ==================== INFORMATION ==================== */}
      <Section id="information" title="Informasi TBO Holidays">
        <p>
          Bagian ini memberikan panduan umum untuk menghubungkan properti Anda ke TBO Holidays.
          Namun, instruksi koneksi spesifik <strong>tidak ditampilkan</strong> di dalam sistem.
          Untuk melanjutkan integrasi, silakan hubungi tim <strong>Dukungan Channel Manager</strong> Anda.
          Mereka akan membantu Anda dengan kredensial yang diperlukan dan proses aktivasi.
        </p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777853539/tbo-holidays-information-v1.png" />
      </Section>

      {/* ==================== USERNAME ==================== */}
      <Section id="username" title="Nama Pengguna">
        <p>
          Tab <strong>Nama Pengguna</strong> digunakan untuk melihat atau memperbarui kredensial yang diperlukan untuk terhubung dengan TBO Holidays.
        </p>

        <h4 className="mt-4 font-medium">Cara Memperbarui Kredensial:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>Buka tab <strong>Nama Pengguna</strong>. Masukkan <strong>Nama Pengguna</strong>, <strong>Kata Sandi</strong>, atau <strong>Hotel ID</strong> yang ditetapkan untuk properti Anda oleh TBO Holidays.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777853557/tbo-holidays-credentials-v1.png" />
          <li>Klik tombol <strong>simpan (✓)</strong> untuk menerapkan perubahan. Jika Anda tidak ingin menyimpan perubahan, klik <strong>batal (x)</strong>.</li>
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pembaruan Kredensial:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Gagal Menyimpan Kredensial</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang (<strong>Nama Pengguna</strong>, <strong>Kata Sandi</strong>, <strong>Hotel ID</strong>) valid dan disalin dengan benar dari TBO Holidays.
                Periksa koneksi internet Anda dan coba lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan Tidak Tercermin Setelah Menyimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman untuk mengonfirmasi apakah perubahan telah diterapkan.
                Jika tidak tersimpan, masukkan ulang kredensial dan klik tombol <strong>simpan (✓)</strong> lagi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== MAPPING ==================== */}
      <Section id="mapping" title="Pemetaan">
        <p>
          Tab <strong>Pemetaan</strong> digunakan untuk menghubungkan kamar dan rate plan internal Anda dengan kamar dan rate plan yang sesuai dari TBO Holidays.
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
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544275/09._TBO_Holidays_-_step_2_kwtjab.png" />
          <li>
            Pop-up akan muncul menampilkan kamar dan rate plan aktif dari OTA. Konfigurasikan bagaimana Channel Manager akan mendorong pembaruan ke OTA:
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
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544118/09._TBO_Holidays_-_step_3_wg3ztf.png" />
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
                Konfirmasikan dengan TBO Holidays bahwa properti Anda aktif dan kamar/rate plan tersedia. Impor ulang setelah membuat perubahan di extranet TBO Holidays.
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
          Fitur <strong>Pemetaan</strong> digunakan untuk menautkan kamar dan rate plan internal Anda dengan kamar dan rate plan yang sesuai dari TBO Holidays.
          Untuk membuat pemetaan kamar, ikuti langkah-langkah di <strong>Cara Menambahkan Pemetaan</strong>.
        </p>
      </Section>

      {/* ==================== SETTINGS ==================== */}
      <Section id="settings" title="Pengaturan">
        <p>
          Tab <strong>Pengaturan</strong> mengontrol bagaimana sistem Anda berinteraksi dengan TBO Holidays,
          termasuk sinkronisasi data dan penanganan reservasi.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Pengaturan:</h4>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777853606/tbo-holidays-setting-v1.png" />
        <p>Untuk mengubah parameter TBO Holidays, buka tab <strong>Pengaturan</strong>. Bagian ini berisi beberapa opsi yang dapat dikonfigurasi:</p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Aktifkan Saluran:</strong> Aktifkan opsi ini untuk mengaktifkan koneksi antara properti dan TBO Holidays.
          </li>
          <li>
            <strong>Aktifkan Pembaruan:</strong> Nyalakan opsi ini untuk mengizinkan sistem mendorong pembaruan harga, ketersediaan, dan pembatasan ke TBO Holidays.
          </li>
          <li>
            <strong>Aktifkan Reservasi:</strong> Aktifkan opsi ini untuk menerima pemesanan dari TBO Holidays.
          </li>
          <li>
            <strong>Kirim Email Voucher Reservasi:</strong> Aktifkan opsi ini untuk memicu pengiriman otomatis voucher reservasi saat pemesanan baru diterima.
          </li>
          <li>
            <strong>Bagian Mata Uang (jika Berbeda):</strong> Pilih mata uang jika berbeda dari default sistem. Masukkan nilai konversi dan klik tombol <strong>simpan (✓)</strong> untuk menerapkan perubahan.
          </li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777853613/set-tbo-holidays-currency-v1.png" />
          <li>
            <strong>Aktifkan OBP:</strong> Aktivasi OBP adalah <strong>wajib</strong> untuk TBO guna menampilkan bidang konfigurasi tambahan. Untuk petunjuk terperinci, lihat <strong>Cara Mengonfigurasi Pengaturan OBP</strong>.
          </li>
          <li>
            <strong>Pembaruan OTA Manual:</strong> Untuk menyinkronkan harga, ketersediaan, persyaratan minimum malam, dan status "Stop Sell" di semua saluran yang terhubung.
            Data dapat disinkronkan hingga rentang tanggal maksimum yang diizinkan oleh masing-masing OTA (biasanya antara 12 hingga 24 bulan ke depan). Lihat <strong>Cara Mengonfigurasi Manual OTA</strong> untuk melihat langkah-langkah pengaturan.
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
              <dt className="font-medium">Tidak menerima reservasi dari TBO Holidays</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa <strong>Aktifkan Reservasi</strong> diaktifkan. Pastikan rate plan dipetakan dan aktif di TBO Holidays dan sistem.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Email voucher reservasi tidak diterima</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Kirim Email Voucher Reservasi</strong> diaktifkan. Periksa folder spam atau sampah, atau konfirmasikan alamat email Anda di pengaturan notifikasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Impor Reservasi TBO Holidays Mendatang tidak berfungsi</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman dan klik lagi. Jika tidak ada reservasi yang diimpor, periksa dengan TBO Holidays apakah ada pemesanan baru dan telah dikonfirmasi.
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
              <dt className="font-medium">Pembaruan ditandai sebagai gagal</dt>
              <dd className="ml-4 text-muted-foreground">
                Arahkan kursor ke entri pembaruan yang gagal untuk melihat pesan kesalahan. Konfirmasikan bahwa rate plan dan kamar masih aktif di extranet TBO Holidays. Coba kirim ulang pembaruan menggunakan tombol <strong>Pembaruan OTA</strong>.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== CONFIGURE OBP ==================== */}
      <Section id="configure-obp" title="Konfigurasi OBP">
        <p>
          Jika properti menggunakan <strong>Penetapan Harga Berbasis Okupansi (OBP)</strong> di TBO Holidays, Anda dapat mengaktifkan opsi OBP.
          Setelah Anda mengaktifkannya, pengaturan konfigurasi spesifik akan tersedia untuk Anda sesuaikan.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Pengaturan OBP:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tombol <strong>Pengaturan</strong> di samping OBP.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776408911/View_OBP_Setting_kglvy7.png" />
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
        <p>Gunakan fitur ini untuk secara manual mendorong pembaruan ke TBO Holidays.</p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Pembaruan OTA Manual:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Gulir ke bawah ke bagian <strong>Pembaruan OTA</strong>.</li>
          <li>Klik tombol <strong>Pembaruan OTA</strong> untuk membuka jendela pop-up.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1762403058/ota-update.png" />
          <li>
            Lengkapi bidang-bidang yang diperlukan:
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