import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/mg-bedbank")({
  head: () => ({
    meta: [
      { title: "MG Bedbank — Channelku | SinergiMax" },
      { name: "description", content: "Kelola koneksi MG Bedbank, pemetaan, impor data, sinkronisasi, dan konfigurasi." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "accessing", label: "Mengakses Pengaturan MG Bedbank" },
  { id: "information", label: "Informasi MG Bedbank" },
  { id: "username", label: "Nama Pengguna" },
  { id: "mapping", label: "Pemetaan" },
  { id: "import-rooms", label: "Impor Kamar" },
  { id: "add-mapping", label: "Tambah Pemetaan" },
  { id: "settings", label: "Pengaturan" },
  { id: "manual-ota-update", label: "Pembaruan OTA Manual" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="MG Bedbank" activeTo="/docs/channelku/channel-manager/control-panel/mg-bedbank">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">MG Bedbank</h1>
      <p className="mt-4">
        <strong>MG Bedbank</strong> adalah salah satu saluran OTA di mana Anda dapat mengelola koneksi, melakukan pemetaan kamar dan rate plan,
        mengimpor data dari OTA, dan mengonfigurasi pengaturan lainnya melalui tab berikut: <strong>Informasi</strong>, <strong>Nama Pengguna</strong>,
        <strong>Pemetaan</strong>, <strong>Penugasan</strong>, dan <strong>Pengaturan</strong>.
      </p>
      <p className="mt-2">
        Setelah integrasi dikonfigurasi sepenuhnya, semua reservasi dari MG Bedbank akan muncul di <strong>Daftar Reservasi</strong>,
        memungkinkan Anda mengelolanya secara efisien di satu tempat.
      </p>

      {/* ==================== ACCESSING ==================== */}
      <Section id="accessing" title="Mengakses Pengaturan MG Bedbank">
        <p>Berikut cara mengakses pengaturan MG Bedbank:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Di Channelku, buka menu <strong>Channel Manager</strong>, lalu klik <strong>Panel Kontrol</strong>.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777008328/control-panel_navigation_menu_lqwi6o.png" />
          <li>Pilih <strong>MG Bedbank</strong> dari daftar saluran, atau Anda dapat mencari dari daftar dengan mengetik nama OTA.</li>
        </ol>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777955363/access-mgbedbank-v1.png" />
      </Section>

      {/* ==================== INFORMATION ==================== */}
      <Section id="information" title="Informasi MG Bedbank">
        <p>
          Tab <strong>Informasi</strong> memberikan panduan umum untuk terhubung dengan MG Bedbank.
          Namun, instruksi koneksi spesifik <strong>tidak ditampilkan</strong> di dalam sistem. Untuk melanjutkan integrasi, 
          silakan hubungi <strong>Dukungan Channel Manager</strong> Anda secara langsung. Mereka akan membantu Anda 
          dengan semua kredensial dan langkah-langkah yang diperlukan untuk mengaktifkan koneksi dengan MG Bedbank.
        </p>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777955437/mgbedbank-information-v1.png" />

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Informasi MG Bedbank:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak ada langkah koneksi yang ditampilkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Ini adalah perilaku yang diharapkan. Semua pengaturan koneksi harus dikoordinasikan melalui tim Channel Manager Anda.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak yakin bagaimana melanjutkan integrasi MG Bedbank</dt>
              <dd className="ml-4 text-muted-foreground">
                Hubungi perwakilan Channel Manager Anda dan sebutkan nama saluran (MG Bedbank) beserta detail properti Anda.
                Mereka akan memandu Anda melalui proses dan memberikan <strong>Hotel ID</strong> atau kredensial yang diperlukan jika berlaku.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== USERNAME ==================== */}
      <Section id="username" title="Nama Pengguna">
        <p>
          Di tab <strong>Nama Pengguna</strong>, Anda dapat memasukkan atau memperbarui <strong>Hotel ID</strong> yang disediakan oleh MG Bedbank.
        </p>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777955456/mgbedbank-credentials-v1.png" />

        <h4 className="mt-4 font-medium">Cara Memperbarui Hotel ID:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>Masukkan <strong>Hotel ID</strong> yang ditetapkan untuk properti Anda oleh MG Bedbank.</li>
          <li>Klik tombol <strong>simpan</strong> untuk menerapkan perubahan.</li>
          <li>Jika Anda tidak ingin menyimpan perubahan, klik <strong>batal</strong>.</li>
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
                Verifikasi bahwa ID tersebut benar dan ditetapkan oleh MG Bedbank. Hubungi <strong>Manajer Akun MG Bedbank</strong> Anda untuk mengonfirmasi Hotel ID.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== MAPPING ==================== */}
      <Section id="mapping" title="Pemetaan">
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
      </Section>

      {/* ==================== IMPORT ROOMS ==================== */}
      <Section id="import-rooms" title="Impor Kamar">
        <h4 className="font-medium">Cara Mengimpor Kamar:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tombol <strong>Impor Kamar</strong> di bagian atas tab <strong>Pemetaan</strong>.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777956181/mgbedbank-import-rooms-v1.png" />
          <li>
            Pop-up akan muncul menampilkan kamar dan rate plan aktif dari OTA. Konfigurasikan bagaimana Channel Manager akan mendorong pembaruan ke OTA:
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777956211/mgbedbank-check-availability-v1.png" />
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
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777956235/mgbedbank-update-rateplan-v1.png" />
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
                Konfirmasikan dengan MG Bedbank bahwa properti Anda aktif dan kamar/rate plan tersedia. Impor ulang setelah membuat perubahan di extranet MG Bedbank.
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
          Fitur <strong>Pemetaan</strong> digunakan untuk menautkan kamar dan rate plan internal Anda dengan kamar dan rate plan yang sesuai dari MG Bedbank.
          Untuk membuat pemetaan kamar, ikuti langkah-langkah di <strong>Cara Menambahkan Pemetaan</strong>.
        </p>
      </Section>

      {/* ==================== SETTINGS ==================== */}
      <Section id="settings" title="Pengaturan">
        <p>
          Tab <strong>Pengaturan</strong> memungkinkan Anda mengelola bagaimana sistem berinteraksi dengan MG Bedbank, termasuk mengaktifkan saluran,
          menangani pembaruan, dan mengonfigurasi opsi reservasi.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Pengaturan:</h4>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777955814/mgbedbank-setting-v1.png" />
        <ul className="ml-6 list-disc space-y-1">
          <li>
            Aktifkan opsi <strong>Aktifkan Saluran</strong> untuk mengaktifkan koneksi antara properti Anda dan MG Bedbank.
          </li>
          <li>
            Nyalakan <strong>Aktifkan Pembaruan</strong> untuk mengizinkan sistem mendorong pembaruan harga, ketersediaan, dan pembatasan ke MG Bedbank.
          </li>
          <li>
            Aktifkan <strong>Aktifkan Reservasi</strong> jika Anda ingin menerima pemesanan dari MG Bedbank ke dalam sistem.
          </li>
          <li>
            Jika Anda ingin sistem mengirim email voucher setiap kali pemesanan diterima, aktifkan opsi <strong>Kirim Email Voucher Reservasi</strong>.
          </li>
          <li>
            Di bidang <strong>Mata Uang (jika Berbeda)</strong>, pilih kode mata uang jika mata uang MG Bedbank Anda berbeda dari default sistem.
            Jika dibiarkan kosong, sistem akan mendeteksi mata uang yang sesuai secara otomatis.
          </li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777956242/set-mgbedbank-currency-v1.png" />
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
              <dt className="font-medium">Tidak menerima reservasi dari MG Bedbank</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa <strong>Aktifkan Reservasi</strong> diaktifkan. Pastikan rate plan dipetakan dan aktif di MG Bedbank dan sistem.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Email voucher reservasi tidak diterima</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Kirim Email Voucher Reservasi</strong> diaktifkan. Periksa folder spam atau sampah, atau konfirmasikan alamat email Anda di pengaturan notifikasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Bidang mata uang tetap kosong setelah dipilih</dt>
              <dd className="ml-4 text-muted-foreground">
                Klik sekali untuk memilih kode mata uang yang benar. Jika dibiarkan kosong, sistem akan mendeteksi mata uang yang benar secara otomatis berdasarkan reservasi.
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
                Arahkan kursor ke pembaruan yang gagal untuk melihat alasan kesalahan. Pastikan rate plan yang dipetakan aktif di sisi MG Bedbank. Coba kirim ulang <strong>Pembaruan OTA</strong> secara manual jika diperlukan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Harga tidak memperbarui untuk Double Rate (MG Bedbank)</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan nilai <strong>Okupansi (Occ)</strong> di tab <strong>Kamar</strong> sesuai dengan konfigurasi rate plan di extranet MG Bedbank.
                Pengaturan okupansi yang tidak cocok dapat mencegah harga diperbarui selama sinkronisasi penuh.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== MANUAL OTA UPDATE ==================== */}
      <Section id="manual-ota-update" title="Pembaruan OTA Manual">
        <p>Gunakan fitur ini untuk secara manual mendorong pembaruan ke MG Bedbank.</p>

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