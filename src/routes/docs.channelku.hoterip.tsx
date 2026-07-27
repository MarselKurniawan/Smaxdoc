import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/hoterip")({
  head: () => ({
    meta: [
      { title: "Hoterip — Channelku | SinergiMax" },
      { name: "description", content: "Kelola koneksi Hoterip, pemetaan, sinkronisasi, dan konfigurasi." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "accessing", label: "Mengakses Pengaturan Hoterip" },
  { id: "information", label: "Informasi Hoterip" },
  { id: "username", label: "Nama Pengguna" },
  { id: "mapping", label: "Pemetaan" },
  { id: "settings", label: "Pengaturan" },
  { id: "manual-ota-update", label: "Pembaruan OTA Manual" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Hoterip" activeTo="/docs/channelku/channel-manager/control-panel/hoterip">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Hoterip</h1>
      <p className="mt-4">
        <strong>Hoterip</strong> adalah sebuah OTA yang dapat diintegrasikan dengan Channel Manager. Melalui integrasi ini,
        Anda dapat mengelola daftar properti, menyinkronkan ketersediaan kamar, harga, dan pembatasan, serta menerima pemesanan
        langsung di dalam sistem.
      </p>
      <p className="mt-2">
        Setelah integrasi dikonfigurasi sepenuhnya, semua reservasi dari Hoterip akan muncul di <strong>Daftar Reservasi</strong>,
        memungkinkan Anda mengelolanya secara efisien di satu tempat.
      </p>

      {/* ==================== ACCESSING ==================== */}
      <Section id="accessing" title="Mengakses Pengaturan Hoterip">
        <p>Berikut cara mengakses pengaturan Hoterip:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Di Channelku, buka menu <strong>Channel Manager</strong>, lalu klik <strong>Panel Kontrol</strong>.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777008328/control-panel_navigation_menu_lqwi6o.png" />
          <li>Pilih <strong>Hoterip</strong> dari daftar saluran, atau Anda dapat mencari dari daftar dengan mengetik nama OTA.</li>
        </ol>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777338526/access-hoterip.png" />
      </Section>

      {/* ==================== INFORMATION ==================== */}
      <Section id="information" title="Informasi Hoterip">
        <p>
          Tab <strong>Informasi Hoterip</strong> menyediakan prosedur koneksi dasar antara sistem dan Hoterip.
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
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777338536/hoterip-information-v1.png" />
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Informasi Hoterip:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat memulai koneksi dengan Hoterip</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa permintaan dimulai oleh Channel Manager atau perwakilan hotel.
                Pastikan Anda telah menghubungi <code>dev@hoterip.com</code> seperti yang diinstruksikan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Informasi yang diperlukan hilang</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Hotel ID</strong> tersedia sebelum membuat permintaan.
                Periksa kembali format Hotel ID yang disalin dari extranet Hoterip.
              </dd>
            </div>
            <div>
              <dt className="font-medium">URL extranet tidak valid atau kedaluwarsa</dt>
              <dd className="ml-4 text-muted-foreground">
                Gunakan URL yang benar: <code>http://my.hoterip.com/login</code>. Jika tidak dapat dimuat, periksa koneksi internet Anda atau hubungi dukungan Hoterip.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== USERNAME ==================== */}
      <Section id="username" title="Nama Pengguna">
        <p>
          Tab <strong>Nama Pengguna</strong> digunakan untuk melihat atau memperbarui kredensial yang diperlukan untuk terhubung dengan Hoterip.
        </p>

        <h4 className="mt-4 font-medium">Cara Memperbarui Kredensial:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>Buka tab <strong>Nama Pengguna</strong>. Masukkan <strong>Hotel ID</strong> yang ditetapkan untuk properti Anda oleh Hoterip.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777338587/hoterip-username-v1.png" />
          <li>Klik tombol <strong>simpan (✓)</strong> untuk menerapkan perubahan. Jika Anda tidak ingin menyimpan perubahan, klik <strong>batal (x)</strong>.</li>
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pembaruan Kredensial:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Gagal Menyimpan Hotel ID</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Hotel ID</strong> valid dan disalin dengan benar dari Hoterip.
                Periksa koneksi internet Anda dan coba lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan Tidak Tercermin Setelah Menyimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman untuk mengonfirmasi apakah perubahan telah diterapkan.
                Jika tidak tersimpan, masukkan ulang <strong>Hotel ID</strong> dan klik tombol <strong>simpan (✓)</strong> lagi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== MAPPING ==================== */}
      <Section id="mapping" title="Pemetaan">
        <p>
          Fitur <strong>Pemetaan</strong> digunakan untuk menautkan kamar dan rate plan internal Anda dengan kamar dan rate plan yang sesuai dari Hoterip.
          Untuk membuat pemetaan kamar, ikuti langkah-langkah di <strong>Pemetaan OTA dan IBE</strong>.
        </p>
      </Section>

      {/* ==================== SETTINGS ==================== */}
      <Section id="settings" title="Pengaturan">
        <p>
          Tab <strong>Pengaturan</strong> mengontrol bagaimana sistem Anda berinteraksi dengan Hoterip,
          termasuk sinkronisasi data dan penanganan reservasi.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Pengaturan:</h4>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777338606/hoterip-setting-v1.png" />
        <p>Untuk mengubah parameter Hoterip, buka tab <strong>Pengaturan</strong>. Bagian ini berisi beberapa opsi yang dapat dikonfigurasi:</p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Aktifkan Saluran:</strong> Aktifkan opsi ini untuk mengaktifkan koneksi antara properti dan Hoterip.
          </li>
          <li>
            <strong>Aktifkan Pembaruan:</strong> Nyalakan opsi ini untuk mengizinkan sistem mendorong pembaruan harga, ketersediaan, dan pembatasan ke Hoterip.
          </li>
          <li>
            <strong>Aktifkan Reservasi:</strong> Aktifkan opsi ini untuk menerima pemesanan dari Hoterip.
          </li>
          <li>
            <strong>Kirim Email Voucher Reservasi:</strong> Aktifkan opsi ini untuk memicu pengiriman otomatis voucher reservasi saat pemesanan baru diterima.
          </li>
          <li>
            <strong>Bagian Mata Uang (jika Berbeda):</strong> Pilih mata uang jika berbeda dari default sistem. Masukkan nilai konversi dan klik tombol <strong>simpan (✓)</strong> untuk menerapkan perubahan.
          </li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777338786/set-hoterip-currency-v1.png" />
          <li>
            <strong>Pembaruan OTA Manual:</strong> Untuk menyinkronkan harga, ketersediaan, persyaratan minimum malam, dan status "Stop Sell" di semua saluran yang terhubung.
            Data dapat disinkronkan hingga rentang tanggal maksimum yang diizinkan oleh masing-masing OTA (biasanya antara 12 hingga 24 bulan ke depan).
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
              <dt className="font-medium">Tidak menerima reservasi dari Hoterip</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa <strong>Aktifkan Reservasi</strong> diaktifkan. Pastikan rate plan dipetakan dan aktif di Hoterip dan sistem.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Email voucher reservasi tidak diterima</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Kirim Email Voucher Reservasi</strong> diaktifkan. Periksa folder spam atau sampah, atau konfirmasikan alamat email Anda di pengaturan notifikasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Impor Reservasi Hoterip Mendatang tidak berfungsi</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman dan klik lagi. Jika tidak ada reservasi yang diimpor, periksa dengan Hoterip apakah ada pemesanan baru dan telah dikonfirmasi.
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
                Arahkan kursor ke entri pembaruan yang gagal untuk melihat pesan kesalahan. Konfirmasikan bahwa rate plan dan kamar masih aktif di extranet Hoterip. Coba kirim ulang pembaruan menggunakan tombol <strong>Pembaruan OTA</strong>.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== MANUAL OTA UPDATE ==================== */}
      <Section id="manual-ota-update" title="Pembaruan OTA Manual">
        <p>Gunakan fitur ini untuk secara manual mendorong pembaruan ke Hoterip.</p>

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