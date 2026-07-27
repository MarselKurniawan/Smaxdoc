import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/vhp")({
  head: () => ({
    meta: [
      { title: "VHP — Channelku | SinergiMax" },
      { name: "description", content: "Kelola koneksi VHP, pemetaan, sinkronisasi, dan konfigurasi." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "accessing", label: "Mengakses Pengaturan VHP" },
  { id: "information", label: "Informasi VHP" },
  { id: "username", label: "Nama Pengguna" },
  { id: "mapping", label: "Pemetaan" },
  { id: "settings", label: "Pengaturan" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="VHP" activeTo="/docs/channelku/channel-manager/control-panel/vhp">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">VHP</h1>
      <p className="mt-4">
        <strong>VHP</strong> adalah salah satu penyedia layanan <strong>Property Management System (PMS)</strong>. 
        VHP menggunakan metode koneksi dua arah; setiap reservasi yang diterima oleh Channel Manager akan secara otomatis 
        dikirim ke PMS, dan PMS juga dapat mengelola ketersediaan dan harga secara langsung.
      </p>
      <p className="mt-2">
        Setelah integrasi dikonfigurasi sepenuhnya, semua reservasi dari VHP akan muncul di <strong>Daftar Reservasi</strong>,
        memungkinkan Anda mengelolanya secara efisien di satu tempat.
      </p>

      {/* ==================== ACCESSING ==================== */}
      <Section id="accessing" title="Mengakses Pengaturan VHP">
        <p>Berikut cara mengakses pengaturan VHP:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Di Channelku, buka menu <strong>Channel Manager</strong>, lalu klik <strong>Panel Kontrol</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777008328/control-panel_navigation_menu_lqwi6o.png" />
          <li>Pilih <strong>VHP</strong> dari daftar saluran, atau Anda dapat mencari dari daftar dengan mengetik nama OTA.</li>
        </ol>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778038873/access-vhp.png" />
      </Section>

      {/* ==================== INFORMATION ==================== */}
      <Section id="information" title="Informasi VHP">
        <p>
          Bagian ini memberikan panduan umum untuk menghubungkan properti Anda ke VHP.
          Namun, instruksi koneksi spesifik <strong>tidak ditampilkan</strong> di dalam sistem.
          Untuk melanjutkan integrasi, silakan hubungi tim <strong>Dukungan Channel Manager</strong> Anda.
          Mereka akan membantu Anda dengan kredensial yang diperlukan dan proses aktivasi.
        </p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778040487/vhp-information-v1.png" />
      </Section>

      {/* ==================== USERNAME ==================== */}
      <Section id="username" title="Nama Pengguna">
        <h4 className="font-medium">Cara Memperbarui Kredensial:</h4>
        <p>
          Di tab <strong>Nama Pengguna</strong>, Anda dapat membuat <strong>Nama Pengguna</strong>, <strong>Kata Sandi</strong>, 
          dan <strong>Hotel ID</strong> (biasanya sama dengan ID TriplaLink). Setelah selesai, Anda dapat memberitahukannya 
          kepada tim VHP atau klien yang menangani koneksi.
        </p>

        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778040487/vhp-information-v1.png" />

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Nama Pengguna:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat menyimpan Kredensial</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang (<strong>Nama Pengguna</strong>, <strong>Kata Sandi</strong>, <strong>Hotel ID</strong>) 
                tidak dibiarkan kosong. Klik tombol <strong>simpan</strong> secara eksplisit untuk menerapkan perubahan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kredensial tidak valid</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa Kredensial sudah benar. Hubungi <strong>Tim Dukungan Channel Manager</strong> atau 
                <strong>TriplaLink</strong> untuk mengonfirmasi Kredensial.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== MAPPING ==================== */}
      <Section id="mapping" title="Pemetaan">
        <p>
          Fitur <strong>Pemetaan</strong> digunakan untuk menautkan kamar dan rate plan internal Anda dengan kamar dan rate plan yang sesuai dari VHP.
          Untuk membuat pemetaan kamar, ikuti langkah-langkah di <strong>Cara Menambahkan Pemetaan</strong>.
        </p>
      </Section>

      {/* ==================== SETTINGS ==================== */}
      <Section id="settings" title="Pengaturan">
        <p>
          Tab <strong>Pengaturan</strong> memungkinkan Anda mengelola bagaimana sistem berinteraksi dengan VHP, termasuk menangani pembaruan, 
          dan mengonfigurasi opsi reservasi.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Pengaturan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka tab <strong>Pengaturan</strong>.</li>
          <li>
            Nyalakan <strong>Aktifkan Pembaruan</strong> untuk mengizinkan VHP mendorong pembaruan harga, ketersediaan, dan pembatasan ke Channel Manager.
          </li>
          <li>
            Aktifkan <strong>Aktifkan Reservasi</strong> jika Anda ingin VHP menerima pemesanan dari Channel Manager ke dalam sistem.
          </li>
          <li>
            Jika Anda ingin sistem mengirim email voucher setiap kali pemesanan diterima, aktifkan opsi <strong>Kirim Email Voucher Reservasi</strong>.
          </li>
          <li>
            Di bidang <strong>Mata Uang (jika Berbeda)</strong>, pilih kode mata uang jika mata uang VHP Anda berbeda dari default sistem.
            Jika dibiarkan kosong, sistem akan mendeteksi mata uang yang sesuai secara otomatis.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778039497/set-vhp-currency-v1.png" />
        </ol>

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
              <dt className="font-medium">Tidak menerima reservasi dari VHP</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa <strong>Aktifkan Reservasi</strong> diaktifkan. Pastikan rate plan dipetakan dan aktif di VHP dan sistem.
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
            <div>
              <dt className="font-medium">Pembaruan OTA tidak mengirim perubahan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pilih setidaknya satu kamar atau pilih <strong>Semua Tipe Kamar</strong> sebelum mengklik <strong>Pembaruan OTA</strong>. Tunggu beberapa menit dan tinjau bagian <strong>10 Pembaruan Terakhir</strong> untuk mengonfirmasi apakah telah tercatat.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pembaruan ditandai sebagai gagal</dt>
              <dd className="ml-4 text-muted-foreground">
                Arahkan kursor ke entri pembaruan yang gagal untuk melihat pesan kesalahan. Konfirmasikan bahwa rate plan dan kamar masih aktif di extranet VHP. Coba kirim ulang pembaruan menggunakan tombol <strong>Pembaruan OTA</strong>.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}