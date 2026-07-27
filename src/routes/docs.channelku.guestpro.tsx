import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/guestpro")({
  head: () => ({
    meta: [
      { title: "GuestPro — Channelku | SinergiMax" },
      { name: "description", content: "Kelola koneksi GuestPro, pemetaan, sinkronisasi, dan konfigurasi." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "accessing", label: "Mengakses Pengaturan GuestPro" },
  { id: "information", label: "Informasi GuestPro" },
  { id: "username", label: "Nama Pengguna" },
  { id: "mapping", label: "Pemetaan" },
  { id: "settings", label: "Pengaturan" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="GuestPro" activeTo="/docs/channelku/channel-manager/control-panel/guestpro">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">GuestPro</h1>
      <p className="mt-4">
        <strong>GuestPro</strong> adalah sebuah <strong>Property Management System (PMS)</strong> yang dapat diintegrasikan dengan Channel Manager. Melalui integrasi ini,
        Anda dapat mengelola daftar properti, menyinkronkan ketersediaan kamar, harga, dan pembatasan, serta menerima pemesanan
        langsung di dalam sistem.
      </p>
      <p className="mt-2">
        Setelah integrasi dikonfigurasi sepenuhnya, semua reservasi dari GuestPro akan muncul di <strong>Daftar Reservasi</strong>,
        memungkinkan Anda mengelolanya secara efisien di satu tempat.
      </p>

      {/* ==================== ACCESSING ==================== */}
      <Section id="accessing" title="Mengakses Pengaturan GuestPro">
        <p>Berikut cara mengakses pengaturan GuestPro:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Di Channelku, buka menu <strong>Channel Manager</strong>, lalu klik <strong>Panel Kontrol</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777008328/control-panel_navigation_menu_lqwi6o.png" />
          <li>Pilih <strong>GuestPro</strong> dari daftar saluran, atau Anda dapat mencari dari daftar dengan mengetik nama OTA.</li>
        </ol>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777010791/access-guestpro.png" />
      </Section>

      {/* ==================== INFORMATION ==================== */}
      <Section id="information" title="Informasi GuestPro">
        <p>
          Bagian ini memberikan panduan umum untuk menghubungkan properti Anda ke GuestPro.
          Namun, instruksi koneksi spesifik <strong>tidak ditampilkan</strong> di dalam sistem.
          Untuk melanjutkan integrasi, silakan hubungi tim <strong>Dukungan Channel Manager</strong> Anda.
          Mereka akan membantu Anda dengan kredensial yang diperlukan dan proses aktivasi.
        </p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777010835/guestpro-information-v1.png" />
      </Section>

      {/* ==================== USERNAME ==================== */}
      <Section id="username" title="Nama Pengguna">
        <p>
          Tab <strong>Nama Pengguna</strong> digunakan untuk melihat atau memperbarui kredensial yang diperlukan untuk terhubung dengan GuestPro.
        </p>

        <h4 className="mt-4 font-medium">Cara Memperbarui Kredensial:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>Buka tab <strong>Nama Pengguna</strong>. Masukkan <strong>nama pengguna</strong>, <strong>kata sandi</strong>, atau <strong>Hotel ID</strong> yang ditetapkan untuk properti Anda oleh GuestPro.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777010983/guestpro-credentials-v1.png" />
          <li>Klik tombol <strong>simpan (✓)</strong> untuk menerapkan perubahan. Jika Anda tidak ingin menyimpan perubahan, klik <strong>batal (x)</strong>.</li>
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pembaruan Kredensial:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Gagal Menyimpan Kredensial</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang (<strong>Nama Pengguna</strong>, <strong>Kata Sandi</strong>, <strong>Hotel ID</strong>) valid dan disalin dengan benar dari GuestPro.
                Periksa koneksi internet Anda dan coba lagi.
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
          Fitur <strong>Pemetaan</strong> digunakan untuk menautkan kamar dan rate plan internal Anda dengan kamar dan rate plan yang sesuai dari GuestPro.
          Untuk membuat pemetaan kamar, ikuti langkah-langkah di <strong>Pemetaan PMS</strong>.
        </p>
      </Section>

      {/* ==================== SETTINGS ==================== */}
      <Section id="settings" title="Pengaturan">
        <p>
          Tab <strong>Pengaturan</strong> mengontrol bagaimana sistem Anda berinteraksi dengan GuestPro,
          termasuk sinkronisasi data dan penanganan reservasi.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Pengaturan:</h4>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777011088/guestpro-setting-v1.png" />
        <p>Untuk mengubah parameter GuestPro, buka tab <strong>Pengaturan</strong>. Bagian ini berisi beberapa opsi yang dapat dikonfigurasi:</p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Aktifkan Pembaruan:</strong> Nyalakan opsi ini untuk mengizinkan sistem mendorong pembaruan harga, ketersediaan, dan pembatasan ke GuestPro.
          </li>
          <li>
            <strong>Aktifkan Reservasi:</strong> Aktifkan opsi ini untuk menerima pemesanan dari GuestPro.
          </li>
          <li>
            <strong>Kirim Email Voucher Reservasi:</strong> Aktifkan opsi ini untuk memicu pengiriman otomatis voucher reservasi saat pemesanan baru diterima.
          </li>
          <li>
            <strong>Bagian Mata Uang (jika Berbeda):</strong> Pilih mata uang jika berbeda dari default sistem. Masukkan nilai konversi dan klik tombol <strong>simpan (✓)</strong> untuk menerapkan perubahan.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777011312/set-guestpro-currency-v1.png" />
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
              <dt className="font-medium">Tidak menerima reservasi dari GuestPro</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa <strong>Aktifkan Reservasi</strong> diaktifkan. Pastikan rate plan dipetakan dan aktif di GuestPro dan sistem.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Email voucher reservasi tidak diterima</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Kirim Email Voucher Reservasi</strong> diaktifkan. Periksa folder spam atau sampah, atau konfirmasikan alamat email Anda di pengaturan notifikasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Bidang mata uang tidak tersimpan dengan benar</dt>
              <dd className="ml-4 text-muted-foreground">
                Klik untuk menghapus, lalu pilih ulang kode mata uang. Jika dibiarkan kosong, sistem akan mendeteksi mata uang yang benar secara otomatis pada saat pemesanan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}