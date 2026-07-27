import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/marriot-homes")({
  head: () => ({
    meta: [
      { title: "Marriot Homes (HVMB) — Channelku | SinergiMax" },
      { name: "description", content: "Kelola koneksi Marriot Homes, pemetaan, pembuatan listing, dan konfigurasi." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "preparation", label: "Persiapan" },
  { id: "information", label: "Informasi HVMB" },
  { id: "username", label: "Nama Pengguna HVMB" },
  { id: "mapping", label: "Pemetaan HVMB" },
  { id: "settings", label: "Pengaturan" },
  { id: "manual-ota-update", label: "Pembaruan OTA Manual" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Marriot Homes (HVMB)" activeTo="/docs/channelku/channel-manager/control-panel/marriot-homes">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Marriot Homes (HVMB)</h1>
      <p className="mt-4">
        <strong>HVMB (Marriot Homes)</strong> adalah salah satu saluran OTA di mana Anda dapat mengelola koneksi, melakukan pemetaan kamar dan rate plan,
        mengimpor data dari OTA, dan mengonfigurasi pengaturan lainnya melalui tab berikut: <strong>Informasi</strong>, <strong>Nama Pengguna</strong>,
        <strong>Pemetaan</strong>, <strong>Penugasan</strong>, dan <strong>Pengaturan</strong>.
      </p>

      {/* ==================== PREPARATION ==================== */}
      <Section id="preparation" title="Persiapan">
        <p>
          Untuk HVMB, ini berbeda dari OTA lainnya. Sementara di OTA lain, listing/tipe kamar dan rate plan dibuat melalui extranet OTA,
          untuk HVMB ini dapat dibuat langsung melalui Bookandlink.
        </p>
        <p className="mt-2">
          Diperlukan beberapa informasi dari pengaturan kamar Channel Manager Bookandlink, seperti <strong>Deskripsi Kamar</strong>,
          <strong>Konfigurasi Tempat Tidur</strong>, <strong>Konfigurasi Kamar Mandi</strong>, <strong>Fasilitas</strong>,
          <strong>Gambar</strong>, dan <strong>Jumlah Tamu</strong>. Pastikan data tersebut sudah diatur di Bookandlink.
        </p>

        <h4 className="mt-4 font-medium">Langkah Persiapan:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            Buka <strong>Pengaturan → Kamar → Edit tipe kamar</strong>
          </li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1761639359/WhatsApp_Image_2025-10-28_at_10.01.45_hjibm1.jpg" />
          <li>
            Isi atau lengkapi data di bagian <strong>Deskripsi</strong> (termasuk multi-bahasa seperti English, American).
          </li>
          <li>
            Isi <strong>Jumlah Kamar Tidur</strong> dan <strong>Jumlah Kamar Mandi</strong>.
          </li>
          <li>
            Atur <strong>Hari Batas Pemesanan</strong>, <strong>Aktifkan Alokasi Bebas</strong>, <strong>Fitur Penugasan Otomatis</strong>, dan <strong>Fitur Penetapan Harga Dinamis</strong> jika diperlukan.
          </li>
          <li>
            Tentukan <strong>Kamar Tersedia</strong> dengan mengatur jumlah villa/unit.
          </li>
          <li>
            Klik <strong>Tampilkan Fasilitas</strong> dan pilih fasilitas yang tersedia.
          </li>
          <li>
            Klik <strong>Tampilkan Gambar</strong> dan unggah gambar yang ingin diasosiasikan dengan tipe kamar ini dari Galeri Gambar Properti.
          </li>
          <li>
            Pastikan juga untuk mengedit rate plan di <strong>Pengaturan → Kamar → Edit rateplan</strong>.
          </li>
        </ul>
        <Figure label="" 
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1761639354/WhatsApp_Image_2025-10-28_at_10.02.52_i5smmj.jpg" />
      </Section>

      {/* ==================== INFORMATION ==================== */}
      <Section id="information" title="Informasi HVMB (Marriot Homes)">
        <p>
          Tab <strong>Informasi HVMB (Marriot Homes)</strong> menyediakan prosedur koneksi dasar antara sistem dan HVMB.
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
            </tbody>
          </table>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1761639354/WhatsApp_Image_2025-10-28_at_10.18.52_kzcz5l.jpg" />
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Informasi HVMB:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Hotel ID Hilang</dt>
              <dd className="ml-4 text-muted-foreground">
                Temukan <strong>Hotel ID</strong> di akun Bookandlink Anda sebelum memulai koneksi.
                Temukan <strong>HMC ID</strong> Anda dari agen lokal HVMB dan salin ID tersebut.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== USERNAME ==================== */}
      <Section id="username" title="Nama Pengguna HVMB (Marriot Homes)">
        <p>
          Di tab <strong>Nama Pengguna</strong>, Anda dapat memasukkan atau memperbarui kredensial yang diperlukan untuk terhubung ke HVMB.
        </p>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1761639358/WhatsApp_Image_2025-10-28_at_10.19.43_mc3rjn.jpg" />

        <h4 className="mt-4 font-medium">Cara Memperbarui Kredensial HVMB (Marriot Homes):</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>Masukkan <strong>Hotel ID</strong> seperti yang terdaftar di sistem Bookandlink.</li>
          <li>Masukkan <strong>HMC ID</strong> yang diterima dari agen lokal HVMB.</li>
          <li>Klik tombol <strong>simpan (✓)</strong> untuk menerapkan perubahan.</li>
          <li>Jika Anda tidak ingin menyimpan perubahan, klik <strong>batal (x)</strong>.</li>
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pembaruan Kredensial:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Gagal Menyimpan Hotel ID</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan email valid dan disalin dengan benar dari Pricelabs. Periksa koneksi internet Anda dan coba lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan Tidak Tercermin Setelah Menyimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman untuk mengonfirmasi apakah perubahan telah diterapkan. Jika tidak tersimpan, masukkan ulang <strong>ID Properti</strong> dan klik tombol <strong>simpan (✓)</strong> lagi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== MAPPING ==================== */}
      <Section id="mapping" title="Pemetaan HVMB (Marriot Homes)">
        <p>
          Tab <strong>Pemetaan</strong> memungkinkan Anda menautkan setiap rate plan internal ke kamar dan rate plan yang sesuai di HVMB.
          Untuk HVMB, fitur <strong>"Tambah Pemetaan"</strong> berarti <strong>membuat listing</strong> yang akan secara otomatis dipetakan setelah dibuat.
        </p>
        <p className="mt-2">
          Setelah pemetaan, sistem akan tersedia untuk mendorong data harga, ketersediaan, dan pembatasan ke OTA.
        </p>

        <h4 className="mt-4 font-medium">Cara Menambahkan Pemetaan/Membuat Listing:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>
            Pada tab <strong>Pemetaan</strong>, temukan <strong>Nama Rate Plan Internal</strong> yang ingin Anda petakan.
          </li>
          <li>
            Klik <strong>Tambah Pemetaan</strong> di samping rate plan tersebut.
          </li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1761639358/WhatsApp_Image_2025-10-28_at_10.20.18_m1xm8w.jpg" />
          <li>
            Pop-up akan muncul untuk membuat listing Anda. <strong>Harap lengkapi detail</strong> berdasarkan kondisi properti.
          </li>
          <li>
            Jika Anda tidak ingin melanjutkan, klik <strong>(x)</strong> untuk membatalkan proses.
          </li>
          <li>
            Setelah selesai, klik <strong>Kirim</strong>.
          </li>
          <li>
            Status listing Anda akan menjadi <strong>Pending</strong> dan memerlukan <strong>persetujuan dari sisi HVMB</strong>.
          </li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1761639357/WhatsApp_Image_2025-10-28_at_10.21.38_qvxlkz.jpg" />
          <li>
            Setelah status listing berubah menjadi <strong>Disetujui</strong>, silakan <strong>Aktifkan saluran</strong> dan lakukan <strong>Pembaruan OTA</strong>.
          </li>
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan Penting:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>Pemetaan memungkinkan Anda untuk mendorong <strong>harga</strong>, <strong>ketersediaan</strong>, dan <strong>pembatasan</strong> ke HVMB setelah pemetaan selesai.</li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pemetaan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Halaman buat listing tidak muncul</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa data terbaru telah diperbarui di <strong>Pengaturan Kamar & Rateplan</strong> Bookandlink.
                Pastikan <strong>HMC ID</strong> sudah benar di bagian <strong>Nama Pengguna</strong>.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== SETTINGS ==================== */}
      <Section id="settings" title="Pengaturan">
        <p>
          Tab <strong>Pengaturan</strong> memungkinkan Anda mengelola bagaimana sistem berinteraksi dengan HVMB, termasuk mengaktifkan saluran,
          mengonfigurasi perilaku pembaruan, dan menangani pemrosesan reservasi.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Pengaturan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka tab <strong>Pengaturan</strong>.</li>
          <li>
            Aktifkan opsi <strong>Aktifkan Saluran</strong> untuk mengaktifkan koneksi antara properti Anda dan HVMB.
          </li>
          <li>
            Nyalakan <strong>Aktifkan Pembaruan</strong> untuk mengizinkan sistem mendorong pembaruan harga, ketersediaan, dan pembatasan ke HVMB.
          </li>
          <li>
            Aktifkan <strong>Aktifkan Reservasi</strong> jika Anda ingin menerima pemesanan dari HVMB ke dalam sistem.
            <span className="block text-sm text-muted-foreground">Pada bagian ini, secara default selalu aktif dan <strong>tidak dapat dinonaktifkan</strong>.</span>
          </li>
          <li>
            Jika Anda ingin sistem mengirim email voucher setiap kali pemesanan diterima, aktifkan opsi <strong>Kirim Email Voucher Reservasi</strong>.
          </li>
          <li>
            Di bagian <strong>Mata Uang (jika Berbeda)</strong>, pilih mata uang jika berbeda dari default sistem. Masukkan nilai konversi dan klik <strong>Perbarui</strong>.
          </li>
        </ol>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1761639355/WhatsApp_Image_2025-10-28_at_10.22.29_siis0u.jpg" />
      </Section>

      {/* ==================== MANUAL OTA UPDATE ==================== */}
      <Section id="manual-ota-update" title="Pembaruan OTA Manual">
        <p>Gunakan fitur ini untuk secara manual mendorong pembaruan ke HVMB.</p>

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