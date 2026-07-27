import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/bookingcom-setup")({
  head: () => ({
    meta: [
      { title: "Pengaturan Booking.com — Channelku | SinergiMax" },
      { name: "description", content: "Buat akun Booking.com atau hubungkan akun yang sudah ada, kelola kontrak, properti, dan sinkronisasi foto." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "create-account", label: "Buat Akun Booking.com" },
  { id: "connect-existing", label: "Hubungkan Akun Booking.com yang Sudah Ada" },
  { id: "export-photos", label: "Ekspor Foto" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Pengaturan Booking.com" activeTo="/docs/channelku/bookingcom-setup">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Pengaturan Booking.com</h1>
      <p className="mt-4">
        Sekarang tidak hanya terhubung dengan Booking.com untuk ketersediaan kamar, harga, ulasan, dan pesan. 
        Anda dapat <strong>membuat akun Booking.com sendiri</strong> melalui Channel Manager Bookandlink dan dapat mengelola 
        konten serta promosi jika Anda <strong>sudah memiliki akun Booking.com</strong>.
      </p>

      {/* ==================== CREATE ACCOUNT ==================== */}
      <Section id="create-account" title="Buat Akun Booking.com melalui Channel Manager Bookandlink">
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544284/01._create_booking-com_bwdnyd.png" />
        <p>Ikuti langkah-langkah berikut untuk membuat akun Booking.com melalui Channel Manager Bookandlink:</p>

        <ol className="ml-6 list-decimal space-y-4">
          <li>
            <strong>Langkah 1:</strong> Klik menu <strong>Pengaturan Booking.com</strong> dan klik <strong>Detail Kontrak</strong>.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544112/01._create_booking-com_-_step_1_tcpybf.png" />
          <li>
            <strong>Langkah 2:</strong> Pop-up akan muncul menanyakan apakah Anda sudah memiliki akun Booking.com, pilih <strong>Tidak</strong>.
          </li>
                    <Figure label=""
                    src="http://res.cloudinary.com/dayo5hqig/image/upload/v1742544291/01._create_booking-com_-_step_2_rhmobg.png" />
          <li>
            <strong>Langkah 3:</strong> Isi <strong>formulir kontrak</strong> yang disediakan, lalu klik <strong>Kirim Kontrak</strong> setelah selesai.
            <div className="mt-2 rounded-lg border bg-muted/50 p-4">
              <p className="text-sm text-muted-foreground">
                Setelah mengirim kontrak, Anda akan melihat halaman konfirmasi yang berisi pesan terima kasih dari Booking.com dan 
                instruksi untuk menandatangani Perjanjian Akomodasi.
              </p>
            </div>
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544404/01._create_booking-com_-_step_3_glixmm.png" />
          <li>
            <strong>Langkah 4:</strong> Dalam beberapa menit hingga beberapa jam, Anda akan menerima <strong>email dari Booking.com</strong> 
            dengan tautan untuk menandatangani kontrak. Anda mungkin menerima email tambahan yang meminta Anda untuk masuk ke Booking.com. 
            Selama proses penandatanganan, <strong>LEID (Legal Entity Identifier)</strong> akan secara otomatis dibuat untuk akun Anda.
          </li>
        </ol>
      </Section>

      {/* ==================== CONNECT EXISTING ==================== */}
      <Section id="connect-existing" title="Menghubungkan Akun Booking.com yang Sudah Ada ke Channel Manager Bookandlink">
        <p>
          Tidak hanya membuat akun baru di Booking.com, Anda juga dapat menghubungkan <strong>listing yang sudah ada</strong> 
          ke Channel Manager Bookandlink. Koneksi bukan hanya tentang inventaris dan harga, tetapi juga <strong>konten di dalamnya</strong>.
        </p>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Penting:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>
              Pastikan <strong>Konten</strong> dicentang saat Anda melakukan permintaan koneksi di extranet Booking.com. 
              Lihat gambar di bawah untuk referensi Anda.
            </li>
          </ul>
        </div>

        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544290/02._connect_existing_account_-_1_a8hywg.png" />

        <h4 className="mt-4 font-medium">Panduan Langkah Selanjutnya:</h4>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544298/02._connect_existing_account_-_2_guite4.png" /> 
        <ol className="ml-6 list-decimal space-y-4">
          <li>
            <strong>Langkah 1:</strong> Buka menu <strong>Pengaturan Booking.com -&gt; Detail Kontrak</strong>.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544127/02._connect_existing_account_-_3_huynqp.png" />
          <li>
            <strong>Langkah 2:</strong> Anda akan diarahkan ke halaman baru dan pop-up akan muncul, pilih <strong>Ya</strong>.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544120/02._connect_existing_account_-_4_ufqsm1.png" />
          <li>
            <strong>Langkah 3:</strong> Pop-up lain akan muncul setelah memilih Ya, Anda dapat memasukkan <strong>Legal Entity ID (LEID)</strong> 
            dan sistem akan mengambil kontrak Booking.com Anda ke Bookandlink.
            <div className="mt-2 rounded-lg border bg-muted/50 p-4">
              <p className="text-sm text-muted-foreground">
                <strong>Catatan:</strong> Anda dapat menemukan Legal Entity ID dengan mengklik <strong>ikon panah</strong> di extranet Booking.com. 
                Lihat tangkapan layar di atas untuk referensi Anda.
              </p>
            </div>
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544124/02._connect_existing_account_-_5_trixg7.png" />
          <li>
            <strong>Langkah 4:</strong> Setelah memasukkan Legal Entity ID, klik <strong>Ambil Kontrak</strong> dan tunggu hingga 
            notifikasi sukses muncul.
            <div className="mt-2 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
              <p className="text-sm font-medium">Catatan Penting:</p>
              <ul className="ml-6 list-disc text-sm">
                <li>Sebelum mengambil kontrak, pastikan Anda telah memasukkan <strong>ID properti Booking.com</strong> di <strong>Panel Kontrol</strong> Bookandlink.</li>
                <li>Jika pengambilan kontrak gagal, periksa kembali ID properti Booking.com di Panel Kontrol dan pastikan Anda memasukkan yang benar.</li>
                          <Figure label=""
                          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544136/02._connect_existing_account_-_7_ui5de8.png" />
              </ul>
            </div>
          </li>
          <li>
            <strong>Langkah 5:</strong> Setelah berhasil mengambil <strong>Detail Kontrak</strong>, <strong>Formulir Kontrak</strong> 
            akan ditampilkan dengan detail listing Booking.com Anda.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544163/02._connect_existing_account_-_8_jb1rav.png" />
          <li>
            <strong>Langkah 6:</strong> Anda dapat melanjutkan ke tahap berikutnya setelah <strong>"Detail Kontrak"</strong> berubah menjadi <strong>hijau</strong>.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544139/02._connect_existing_account_-_9_ukkttf.png" />
          <li>
            <strong>Langkah 7:</strong> Klik submenu <strong>Detail Properti</strong>, dan pop-up akan muncul. Pilih <strong>Ya</strong>.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544115/02._connect_existing_account_-_10_fwop6x.png" />
          <li>
            <strong>Langkah 8:</strong> Masukkan <strong>ID listing Booking.com</strong> dan klik <strong>Ambil Detail Properti</strong>.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544169/02._connect_existing_account_-_11_zkthew.png" />
          <li>
            <strong>Langkah 9:</strong> Setelah mengklik <strong>Ambil Detail Properti</strong>, notifikasi sukses akan muncul.
            <div className="mt-2 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
              <p className="text-sm font-medium">Catatan Penting:</p>
              <ul className="ml-6 list-disc text-sm">
                <li>Sebelum mengambil kontrak, pastikan Anda telah memasukkan <strong>ID properti Booking.com</strong> di <strong>Panel Kontrol</strong> Bookandlink.</li>
                <li>Jika pengambilan kontrak gagal, periksa kembali ID properti Booking.com di Panel Kontrol dan pastikan Anda memasukkan yang benar.</li>
              </ul>
            </div>
          </li>
        </ol>
      </Section>

      {/* ==================== EXPORT PHOTOS ==================== */}
      <Section id="export-photos" title="Cara Mengekspor Foto dari Channel Manager Bookandlink ke Extranet Booking.com">
        <p>
          Sekarang Anda dapat mengunggah foto dari Channel Manager Bookandlink dan akan <strong>tersinkronisasi</strong> 
          dengan extranet Booking.com. Ikuti panduan di bawah ini:
        </p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544173/03._how_export_photo_kkj08j.png" />

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>Pastikan Anda telah menyelesaikan <strong>tahap sebelumnya</strong> sebelum memulai proses ini.</li>
          </ul>
        </div>

        <ol className="ml-6 list-decimal space-y-4">
          <li>
            <strong>Langkah 1:</strong> Buka <strong>Pengaturan Booking.com -&gt; Gambar Properti</strong> dan klik 
            <strong>Pilih Tag Gambar</strong>.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544304/03._how_export_photo_-_step_1_vfrnd8.png" />
          <li>
            <strong>Langkah 2:</strong> Pilih <strong>Tag</strong> untuk foto yang ingin Anda unggah. Misalnya, pilih Tag <strong>Kamar Tidur</strong>.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544408/03._how_export_photo_-_step_2_i7q0ns.png" />
          <li>
            <strong>Langkah 3:</strong> Setelah memilih tag, <strong>file dokumen</strong> Anda akan muncul. Cari dan pilih foto yang ingin 
            Anda unggah, lalu klik <strong>Buka</strong>.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544308/03._how_export_photo_-_step_3_dqjyzv.png" />
          <li>
            <strong>Langkah 4:</strong> Setelah notifikasi <strong>unggah berhasil</strong> muncul, klik <strong>OK</strong> dan foto akan 
            muncul dengan status <strong>unggah</strong>. 
            <span className="block text-sm text-muted-foreground">
              Pada tahap ini, foto telah berhasil diunggah tetapi <strong>hanya di channel manager</strong> dan <strong>belum</strong> 
              tersinkronisasi dengan extranet Booking.com.
            </span>
          </li>
          <li>
            <strong>Langkah 5:</strong> Klik <strong>Ekspor</strong> untuk melanjutkan mengunggah foto ke extranet Booking.com.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544324/03._how_export_photo_-_step_5_b5cjwb.png" />
          <li>
            <strong>Langkah 6:</strong> Setelah notifikasi <strong>Ekspor berhasil</strong> muncul, <strong>refresh browser</strong> Anda 
            dan status foto akan berubah menjadi <strong>menunggu</strong>. 
            <span className="block text-sm text-muted-foreground">
              Pada tahap ini, klik <strong>Ambil Gambar Properti</strong> untuk melanjutkan proses sinkronisasi.
            </span>
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544425/03._how_export_photo_-_step_6_aslyxi.png" />
          <li>
            <strong>Langkah 7:</strong> Setelah notifikasi <strong>Ambil berhasil</strong> muncul, <strong>refresh browser</strong> Anda 
            dan status foto akan berubah menjadi <strong>Diekspor</strong>. 
            <span className="block text-sm text-green-600">Selamat! Foto Anda telah tersinkronisasi dengan extranet Booking.com.</span>
          </li>
        </ol>

        <div className="mt-4 rounded-lg border bg-red-50 p-4 dark:bg-red-950/20">
          <p className="text-sm font-medium">Pemecahan Masalah:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>
              Jika proses <strong>Ambil</strong> gagal, periksa kembali <strong>nama pengguna</strong> yang terpasang di Panel Kontrol, 
              apakah <strong>ID properti Booking.com</strong> sudah benar? 
              <br />
              Klik di sini untuk artikel <strong>Panel Kontrol → Booking.com</strong>.
            </li>
          </ul>
        </div>
      </Section>

      <Section id="export-photos" title="Cara Mengambil Detail Kamar dari Listing Booking.com yang Sudah Ada">
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544166/04._how_fetch_room_detail_-_1_gwo0rg.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544178/04._how_fetch_room_detail_-_2_tmhphv.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544175/04._how_fetch_room_detail_-_3_yxv83h.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544182/04._how_fetch_room_detail_-_4_omwfld.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544313/04._how_fetch_room_detail_-_5_sqxv23.png" />
      </Section>

    </DocsLayout>
  );
}
