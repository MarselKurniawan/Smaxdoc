import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/reports")({
  head: () => ({
    meta: [
      { title: "Laporan — Hotelku | SinergiMax" },
      { name: "description", content: "Modul laporan komprehensif untuk memantau okupansi, pendapatan, pembayaran, dan lainnya." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "dashboard", label: "Dasbor" },
  { id: "occupancy-report", label: "Laporan Okupansi" },
  { id: "agent-report", label: "Laporan Agen" },
  { id: "revenue-report", label: "Laporan Pendapatan" },
  { id: "sales-report", label: "Laporan Penjualan" },
  { id: "payment-report", label: "Laporan Pembayaran" },
  { id: "extra-report", label: "Laporan Ekstra" },
  { id: "country-report", label: "Laporan Negara" },
  { id: "daily-report", label: "Laporan Harian" },
  { id: "summary-report", label: "Laporan Ringkasan" },
  { id: "ota-report", label: "Laporan OTA" },
  { id: "housekeeping-forecast", label: "Prakiraan Housekeeping" },
  { id: "night-audit", label: "Audit Malam" },
  { id: "daily-revenue", label: "Pendapatan Harian" },
  { id: "tax-report", label: "Laporan Pajak" },
  { id: "ledger-balance", label: "Saldo Buku Besar" },
  { id: "transaction-type", label: "Laporan Tipe Transaksi" },
  { id: "guest-report", label: "Laporan Tamu" },
  { id: "owner-report", label: "Laporan Pemilik" },
  { id: "ota-booking-taxes", label: "Pajak Booking.com OTA" },
  { id: "breakfast-report", label: "Laporan Sarapan" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Laporan" activeTo="/docs/hotelku/reports">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Laporan</h1>
      <p className="mt-4">
        <strong>Laporan</strong> adalah modul dalam Sistem Front Office yang menyediakan data kinerja dan operasional yang komprehensif. 
        Ini mencakup berbagai jenis laporan seperti okupansi, pendapatan, pembayaran, ekstra, dan lainnya. 
        Laporan-laporan ini membantu properti memantau aktivitas, menganalisis tren, dan mendukung pengambilan keputusan dengan informasi yang akurat dan terkini.
      </p>
      <p className="mt-2">
        Setiap laporan mencakup opsi filter dan fitur ekspor untuk memungkinkan pengguna menyesuaikan dan mengunduh data sesuai kebutuhan.
      </p>

      {/* ==================== DASHBOARD ==================== */}
      <Section id="dashboard" title="Dasbor">
        <p>
          Menyediakan ringkasan visual dari indikator kinerja utama seperti pemesanan, tingkat okupansi, dan pendapatan. 
          Dasbor mencakup blok ringkasan, tabel data, dan grafik perbandingan untuk membantu melacak kinerja harian dan bulanan.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Dasbor:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka <strong>Laporan &gt; Dasbor</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206878/01._navigate_to_reports_e5zyqz.png" />
          <li>Sistem akan menampilkan metrik untuk hari ini secara default.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206880/02._dashboard_-_1_wblar4.png" />
          <li>Gunakan <strong>Pemilih Tanggal</strong> untuk melihat metrik untuk tanggal tertentu.</li>
          <li>Klik <strong>kirim laporan melalui email</strong> untuk mengirim laporan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206879/02._dashboard_-_2_pnypwy.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Alat yang Tersedia:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>Ubah jumlah baris yang ditampilkan (mis., 1000 baris)</li>
            <li>Ekspor log ke <strong>Excel</strong> atau <strong>PDF</strong></li>
            <li>Sesuaikan kolom yang terlihat dengan <strong>Visibilitas Kolom</strong></li>
            <li>Gunakan kotak <strong>Pencarian</strong> di sisi kanan untuk memfilter log berdasarkan kata kunci</li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Dasbor:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Dasbor tidak dimuat atau menampilkan data kosong</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan koneksi internet Anda stabil. Coba segarkan halaman. Jika masalah berlanjut, keluar dan masuk kembali untuk menyegarkan sesi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Metrik tidak memperbarui berdasarkan tanggal yang dipilih</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memilih tanggal yang valid menggunakan <strong>Pemilih Tanggal</strong>. Hindari memilih tanggal di masa depan yang tidak ada datanya. Tunggu beberapa saat setelah memilih tanggal untuk memberi waktu sistem memuat data.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Kirim Laporan melalui Email tidak berfungsi</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa bahwa akun Anda memiliki alamat email yang valid yang dikonfigurasi dalam pengaturan sistem. Coba lagi setelah menyegarkan halaman.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Ekspor ke Excel atau PDF tidak mengunduh</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>pop-up</strong> atau <strong>unduhan</strong> tidak diblokir oleh pengaturan browser Anda. Coba gunakan browser lain atau bersihkan cache browser.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pencarian dan filter tidak mengembalikan hasil yang diharapkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa Anda menggunakan kata kunci atau nilai yang benar yang ada dalam tampilan data saat ini. Pencarian tidak peka huruf besar/kecil.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pengaturan Visibilitas Kolom tidak diterapkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Setelah mengubah visibilitas kolom, tunggu sebentar untuk memberi waktu tabel menyesuaikan. Jika perubahan tidak tercermin, coba segarkan halaman dan ulangi tindakan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== OCCUPANCY REPORT ==================== */}
      <Section id="occupancy-report" title="Laporan Okupansi">
        <p>
          Menampilkan okupansi kamar berdasarkan properti, tipe kamar, dan rentang tanggal yang dipilih. Memberikan wawasan tentang pola pemesanan, ketersediaan, dan penggunaan, baik dalam format ringkasan maupun detail harian.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Laporan Okupansi:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Laporan Okupansi</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206879/03._occupancy_-_1_sib7ff.jpg" />
          <li>
            Di bagian filter, lengkapi bidang-bidang berikut:
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Properti:</strong> Pilih properti untuk dilaporkan.</li>
              <li><strong>Kamar:</strong> Centang tipe kamar yang ingin Anda sertakan.</li>
              <li><strong>Berdasarkan:</strong> Pilih antara <strong>Tanggal Menginap</strong> atau <strong>Reservasi Dibuat</strong>.</li>
              <li><strong>Tahun:</strong> Pilih tahun untuk analisis.</li>
              <li><strong>Rentang Tanggal:</strong> Atur tanggal mulai dan akhir.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206879/03._occupancy_-_2_tgtmpe.jpg" />
            </ul>
          </li>
          <li>Pilih salah satu opsi berikut: Klik <strong>Tampilkan Laporan</strong> untuk menampilkan ringkasan per bulan, atau klik <strong>Tampilkan Laporan Okupansi Harian</strong> untuk melihat detail okupansi harian per tipe kamar.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206879/03._occupancy_-_3_kzctga.jpg" />
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206878/03._occupancy_-_4_yvb8oo.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Okupansi:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Laporan tidak dimuat atau menunjukkan data kosong</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang filter yang diperlukan dipilih dengan benar. Coba kurangi rentang tanggal untuk menghindari masalah kinerja. Segarkan halaman dan terapkan ulang filter.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Tampilkan Laporan / Tampilkan Laporan Okupansi Harian tidak merespons</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa koneksi internet Anda. Pastikan semua bidang filter wajib diisi sebelum mengklik tombol.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tipe kamar hilang atau tidak muncul dalam daftar</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa properti yang dipilih memiliki tipe kamar yang relevan yang dikonfigurasi dalam sistem. Coba muat ulang halaman dan pilih properti lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Data yang salah muncul dalam laporan (mis., tanggal atau tipe kamar salah)</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali bahwa opsi filter yang benar dipilih sebelum menghasilkan laporan. Pastikan basis yang benar dipilih di filter <strong>Berdasarkan</strong>.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== AGENT REPORT ==================== */}
      <Section id="agent-report" title="Laporan Agen">
        <p>
          Menampilkan jumlah pemesanan dan total pendapatan yang dikelompokkan berdasarkan agen. Membantu memantau kinerja dari berbagai sumber distribusi, seperti OTA, agen perjalanan, atau saluran langsung.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Laporan Agen:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Laporan Agen</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206879/04._agents_-_1_msumwa.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Berdasarkan</strong> (Tanggal Menginap atau Reservasi Dibuat), <strong>Tahun</strong>, dan <strong>Rentang Tanggal</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206880/04._agents_-_2_hsiuj3.jpg" />
          <li>Pilih opsi: <strong>Tampilkan Laporan</strong> (ringkasan per agen) atau <strong>Tampilkan Laporan Agen Harian</strong> (detail harian).</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206880/04._agents_-_3_gsywwe.jpg" />
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206880/04._agents_-_4_u0a5gb.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Agen:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Data laporan kosong atau hilang</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih properti yang valid dan setidaknya satu tipe kamar. Konfirmasikan bahwa rentang tanggal diatur dengan benar dan berisi data pemesanan aktual.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Laporan tahunan atau harian tidak mencerminkan agen yang diharapkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan pemesanan dilakukan melalui agen; jika dilakukan langsung oleh tamu, tidak akan muncul dalam laporan ini. Pilih tahun yang benar dan konfirmasikan bahwa rentang tanggal berada dalam tahun tersebut.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== REVENUE REPORT ==================== */}
      <Section id="revenue-report" title="Laporan Pendapatan">
        <p>
          Memberikan rincian pendapatan yang dihasilkan oleh tipe kamar selama periode tertentu. Memungkinkan pemfilteran berdasarkan properti, tipe kamar, mata uang, dan menyertakan opsi untuk menampilkan ekstra.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Laporan Pendapatan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Laporan Pendapatan</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206880/05._revenue_-_1_robwrn.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Tahun</strong>, <strong>Mata Uang</strong>, <strong>Dengan Ekstra</strong> (centang untuk menyertakan ekstra), dan <strong>Rentang Tanggal</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206880/05._revenue_-_2_l874is.jpg" />
          <li>Pilih opsi: <strong>Tampilkan Laporan</strong> (ringkasan per bulan dan tipe kamar) atau <strong>Tampilkan Laporan Okupansi Harian</strong> (rincian harian).</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206883/05._revenue_-_3_kcpcau.jpg" />
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206883/05._revenue_-_4_cn79bo.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Pendapatan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak ada data yang ditampilkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan properti yang benar dipilih dan setidaknya satu tipe kamar dicentang. Periksa rentang tanggal dan pastikan berada dalam tahun yang dipilih. Untuk <strong>Tampilkan Laporan Okupansi Harian</strong>, rentang tanggal yang besar mungkin memerlukan waktu lebih lama.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Nilai pendapatan lebih rendah dari yang diharapkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa apakah <strong>Dengan Ekstra</strong> dicentang — ekstra tidak disertakan jika kotak tidak dicentang. Konfirmasikan bahwa semua tipe kamar yang berlaku disertakan dalam filter.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== SALES REPORT ==================== */}
      <Section id="sales-report" title="Laporan Penjualan">
        <p>
          Merangkum penjualan kamar dan ekstra selama periode tertentu. Mendukung pemfilteran terperinci termasuk subruang, pemilik, dan penjualan POS. Dapat dilihat dalam detail berbasis kamar atau digabungkan dengan data POS.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Laporan Penjualan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Laporan Penjualan</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206890/06._sales_-_1_qa3lkt.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Berdasarkan</strong>, <strong>Rentang Tanggal</strong>, <strong>Tambah Data</strong>, <strong>Subruang</strong>, <strong>Pemilik</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206891/06._sales_-_2_zfcndo.jpg" />
          <li>Pilih opsi: <strong>Tampilkan Detail Laporan Penjualan</strong> atau <strong>Tampilkan Penjualan dengan POS</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206891/06._sales_-_3_zk1kow.jpg" />
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206891/06._sales_-_4_d4vusl.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Penjualan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Laporan tidak dibuat atau tampak kosong</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan properti dipilih dan setidaknya satu tipe kamar dicentang. Konfirmasikan bahwa rentang tanggal valid dan mencakup periode dengan data.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Beberapa pemesanan atau penjualan yang diharapkan hilang</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa opsi <strong>Berdasarkan</strong> yang dipilih (mis., Nama Tamu atau Sumber) mencakup jenis data yang Anda harapkan. Periksa kembali bahwa opsi <strong>Tambah Data</strong> menyertakan metrik yang ingin Anda lihat.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== PAYMENT REPORT ==================== */}
      <Section id="payment-report" title="Laporan Pembayaran">
        <p>
          Menampilkan semua transaksi pembayaran dalam rentang tanggal yang dipilih. Pengguna dapat mengelompokkan data berdasarkan tipe transaksi dan memfilter berdasarkan pengguna, kamar, dan properti.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Laporan Pembayaran:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Laporan Pembayaran</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206892/07._payments_-_1_aqjvhp.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Rentang Tanggal</strong>, <strong>Kelompokkan berdasarkan Transaksi</strong>, <strong>Pengguna</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206892/07._payments_-_2_pjqnh8.jpg" />
          <li>Klik <strong>Tampilkan Detail Pembayaran</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206892/07._payments_-_3_sqn9lz.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Pembayaran:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak ada pembayaran yang muncul dalam laporan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih <strong>Properti</strong> yang valid dan mencentang setidaknya satu <strong>Tipe Kamar</strong>. Konfirmasikan <strong>Rentang Tanggal</strong> mencakup tanggal pembayaran yang Anda harapkan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Beberapa pembayaran hilang</dt>
              <dd className="ml-4 text-muted-foreground">
                Jika menggunakan filter <strong>Pengguna</strong>, pastikan pengguna yang benar dipilih. Periksa apakah opsi <strong>Kelompokkan berdasarkan Transaksi</strong> menggabungkan beberapa catatan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== EXTRA REPORT ==================== */}
      <Section id="extra-report" title="Laporan Ekstra">
        <p>
          Menampilkan daftar item atau layanan tambahan yang dikonsumsi tamu selama menginap. Membantu melacak penggunaan ekstra seperti makanan, fasilitas, atau layanan berbayar lainnya.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Laporan Ekstra:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Laporan Ekstra</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206892/08._extra_-_1_nohvrb.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Rentang Tanggal</strong>, <strong>Berdasarkan</strong> (Tanggal Check-in atau Tanggal Ekstra).</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206893/08._extra_-_2_ieawed.jpg" />
          <li>Klik <strong>Tampilkan Laporan Ekstra</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206897/08._extra_-_3_y8sn23.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Ekstra:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak ada ekstra yang muncul dalam laporan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Properti</strong> yang valid dipilih dan <strong>Tipe Kamar</strong> yang sesuai dicentang. Pastikan <strong>Rentang Tanggal</strong> mencakup periode saat ekstra dicatat.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Ekstra hilang atau tidak lengkap</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa filter <strong>Berdasarkan</strong> — beralih antara <strong>Tanggal Check-in</strong> dan <strong>Tanggal Ekstra</strong> dapat menghasilkan hasil yang berbeda.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== COUNTRY REPORT ==================== */}
      <Section id="country-report" title="Laporan Negara">
        <p>
          Merangkum asal tamu berdasarkan kriteria seperti negara, provinsi, atau kota. Membantu properti menganalisis demografi tamu dan distribusi pasar.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Laporan Negara:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Laporan Negara</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206897/09._country_-_1_cfbfjv.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Berdasarkan</strong> (Check-in Dates atau Created Reservation), <strong>Kelompokkan Berdasarkan</strong> (Negara, Provinsi, Kota), <strong>Rentang Tanggal</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206898/09._country_-_2_oeljpr.jpg" />
          <li>Klik <strong>Tampilkan Detail Laporan Negara</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206898/09._country_-_3_y7n6lj.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Negara:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak ada data yang muncul dalam laporan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Properti</strong> yang benar dipilih dan setidaknya satu <strong>Tipe Kamar</strong> dicentang. Verifikasi bahwa <strong>Rentang Tanggal</strong> mencakup pemesanan atau check-in selama periode tersebut.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Laporan menunjukkan lokasi yang salah atau tidak lengkap</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali filter <strong>Kelompokkan Berdasarkan</strong>. Konfirmasikan bahwa informasi negara, provinsi, atau kota tamu diisi dengan benar selama reservasi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== DAILY REPORT ==================== */}
      <Section id="daily-report" title="Laporan Harian">
        <p>
          Memberikan wawasan tentang kinerja harian berdasarkan kriteria yang dipilih. Membantu properti melacak metrik seperti okupansi kamar, pendapatan, dan indikator kinerja utama lainnya.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Laporan Harian:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Laporan Harian</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206898/10._daily_report_-_1_h4uhpg.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Pilih Hari</strong> (untuk laporan hari tertentu) atau <strong>Rentang Tanggal</strong> (untuk laporan periode).</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206898/10._daily_report_-_2_jpjxyw.jpg" />
          <li>Klik <strong>Tampilkan Laporan Harian</strong> atau <strong>Tampilkan Laporan Harian untuk Periode Ini</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206898/10._daily_report_-_3_kobst0.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Harian:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Laporan tidak menunjukkan data untuk hari yang dipilih</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Properti</strong> yang benar dipilih dan <strong>Tipe Kamar</strong> dicentang. Konfirmasikan bahwa ada pemesanan atau aktivitas pada hari yang dipilih.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Laporan tidak dimuat atau memakan waktu terlalu lama</dt>
              <dd className="ml-4 text-muted-foreground">
                Persempit <strong>Rentang Tanggal</strong> atau kurangi jumlah <strong>Tipe Kamar</strong> yang dipilih untuk mengurangi beban data.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== SUMMARY REPORT ==================== */}
      <Section id="summary-report" title="Laporan Ringkasan">
        <p>
          Menyediakan gambaran umum kinerja properti, menggabungkan metrik utama seperti pendapatan, okupansi, dan lainnya. Memungkinkan Anda melacak kinerja keseluruhan untuk periode dan mata uang yang dipilih.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Laporan Ringkasan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Laporan Ringkasan</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206899/11._summary_-_1_ntd7fl.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Mata Uang</strong>, <strong>Rentang Tanggal</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206899/11._summary_-_2_chxqnd.jpg" />
          <li>Klik <strong>Tampilkan Detail Laporan Ringkasan</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206900/11._summary_-_3_wtddcy.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Ringkasan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Laporan tidak menampilkan data apa pun</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Properti</strong> dipilih dan setidaknya satu <strong>Tipe Kamar</strong> dicentang. Periksa apakah <strong>Rentang Tanggal</strong> yang dipilih benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Laporan menunjukkan total atau nilai yang salah</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa filter <strong>Mata Uang</strong> sesuai dengan mata uang yang digunakan dalam pemesanan. Periksa kembali <strong>Rentang Tanggal</strong> yang dipilih.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== OTA REPORT ==================== */}
      <Section id="ota-report" title="Laporan OTA">
        <p>
          Memberikan gambaran kinerja properti berdasarkan pemesanan yang berasal dari <strong>OTA (Online Travel Agencies)</strong>. Memungkinkan Anda melacak pemesanan dan kinerja dari berbagai OTA.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Laporan OTA:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Laporan OTA</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206906/12._time_report_-_1_iww5zb.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Berdasarkan</strong> (Check-in Dates atau Created Reservation), <strong>Rentang Tanggal</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206906/12._time_report_-_2_tunenb.jpg" />
          <li>Klik <strong>Tampilkan Detail Laporan OTA</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206907/12._time_report_-_3_ilnpcm.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan OTA:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Laporan tidak menunjukkan data apa pun</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa <strong>Properti</strong> dipilih dan setidaknya satu <strong>Tipe Kamar</strong> dicentang. Konfirmasikan bahwa <strong>Rentang Tanggal</strong> diatur dengan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Laporan menunjukkan data tidak lengkap atau tidak akurat</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali filter <strong>Berdasarkan</strong>. Tinjau catatan pemesanan untuk memastikan semua pemesanan OTA tercatat dengan benar.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== HOUSEKEEPING FORECAST ==================== */}
      <Section id="housekeeping-forecast" title="Prakiraan Housekeeping">
        <p>
          Memberikan gambaran tentang kebutuhan housekeeping yang diharapkan untuk properti tertentu berdasarkan tipe kamar dan rentang tanggal yang dipilih. Membantu properti meramalkan kebutuhan pembersihan dan staf.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Prakiraan Housekeeping:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Prakiraan Housekeeping</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206907/13._housekeeping_-_1_rphd1v.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Rentang Tanggal</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206907/13._housekeeping_-_2_tlefw3.jpg" />
          <li>Klik <strong>Tampilkan Prakiraan</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206907/13._housekeeping_-_3_a7k5hs.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Prakiraan Housekeeping:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Prakiraan tidak menunjukkan data apa pun</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Properti</strong> dan <strong>Tipe Kamar</strong> yang valid dipilih. Periksa kembali <strong>Rentang Tanggal</strong> untuk memastikan sesuai dengan tanggal yang Anda harapkan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Data prakiraan salah atau tidak konsisten</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa tipe kamar ditetapkan secara akurat ke properti. Tinjau data pemesanan dan housekeeping untuk entri yang hilang atau tidak akurat.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== NIGHT AUDIT ==================== */}
      <Section id="night-audit" title="Audit Malam">
        <p>
          Membantu merangkum data keuangan dan okupansi hari itu untuk properti, memastikan keakuratan dan rekonsiliasi di akhir setiap hari.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Audit Malam:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Audit Malam</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206907/14._night_audit_-_1_lwrcwb.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Pilih Hari</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206907/14._night_audit_-_2_ibggth.jpg" />
          <li>Klik <strong>Periksa Audit Malam</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206908/14._night_audit_-_3_mffpil.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Audit Malam:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Laporan Audit Malam tidak dibuat</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Properti</strong> yang valid dan <strong>Pilih Hari</strong> yang benar dipilih. Pastikan proses Audit Malam telah berhasil diselesaikan untuk hari yang dipilih.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Laporan tidak lengkap atau data hilang</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa bahwa tanggal yang dipilih sesuai dengan hari ketika transaksi dicatat. Konfirmasikan bahwa properti yang dipilih benar.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== DAILY REVENUE ==================== */}
      <Section id="daily-revenue" title="Pendapatan Harian">
        <p>
          Memberikan gambaran pendapatan yang dihasilkan properti secara harian. Membantu melacak kinerja keuangan, memungkinkan properti memantau pendapatan berdasarkan tipe kamar, mata uang, dan hari.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Pendapatan Harian:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Pendapatan Harian</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206908/15._revenue_-_1_vfg1ok.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Mata Uang</strong>, <strong>Pilih Hari</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206908/15._revenue_-_2_qkbo3y.jpg" />
          <li>Klik <strong>Tampilkan Laporan Harian</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206908/15._revenue_-_3_ng8kqz.jpg" />  
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Pendapatan Harian:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Laporan Pendapatan Harian tidak dibuat</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Properti</strong>, <strong>Kamar</strong>, dan <strong>Pilih Hari</strong> yang valid dipilih. Konfirmasikan bahwa hari yang dipilih memiliki pendapatan yang tercatat.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Laporan tidak lengkap atau data hilang</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali <strong>Mata Uang</strong> dan pastikan yang benar dipilih. Verifikasi bahwa transaksi pendapatan untuk kamar dan tanggal yang dipilih tercatat dengan benar.
              </dd>
            </div>
          </dl>
        </div>
        <Figure label="Tampilan pendapatan harian" />
      </Section>

      {/* ==================== TAX REPORT ==================== */}
      <Section id="tax-report" title="Laporan Pajak">
        <p>
          Memberikan rincian pajak yang diterapkan pada pemesanan dalam rentang tanggal tertentu. Membantu properti melacak pengumpulan pajak dan memastikan kepatuhan terhadap peraturan perpajakan.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Laporan Pajak:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Laporan Pajak</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206908/16._tax_report_-_1_bhcqij.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Berdasarkan</strong> (Check-in Dates atau Created Reservation), <strong>Rentang Tanggal</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206908/16._tax_report_-_2_yqp8a0.jpg" />
          <li>Klik <strong>Tampilkan Laporan Pajak</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206909/16._tax_report_-_3_zmcyrf.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Pajak:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Laporan Pajak tidak dibuat</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua filter yang diperlukan diisi. Periksa kembali <strong>Rentang Tanggal</strong> untuk memastikan mencakup transaksi dengan data pajak.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Jumlah pajak dalam laporan tidak benar</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa pengaturan pajak dalam sistem untuk memastikan tarif pajak diterapkan dengan benar. Jika melaporkan berdasarkan <strong>Reservasi Dibuat</strong>, konfirmasikan bahwa informasi pajak ditambahkan dengan benar.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== LEDGER BALANCE ==================== */}
      <Section id="ledger-balance" title="Saldo Buku Besar">
        <p>
          Memberikan gambaran terperinci tentang transaksi keuangan, termasuk kredit dan debit, untuk properti tertentu dalam rentang tanggal tertentu. Membantu properti melacak saldo keuangan mereka.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Saldo Buku Besar:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Saldo Buku Besar</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206909/17._ledger_-_1_egmv1s.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Rentang Tanggal</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206909/17._ledger_-_2_f212mr.jpg" />
          <li>Klik <strong>Tampilkan Laporan Buku Besar</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206909/17._ledger_-_3_o3gprh.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Saldo Buku Besar:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Laporan Buku Besar tidak dibuat</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan filter <strong>Properti</strong> dan <strong>Kamar</strong> dipilih. Verifikasi bahwa <strong>Rentang Tanggal</strong> mencakup periode yang benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Saldo buku besar tidak benar</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua transaksi telah dicatat dengan benar dalam sistem. Periksa kembali pengaturan kamar dan properti untuk memastikan data yang benar ditarik.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== TRANSACTION TYPE ==================== */}
      <Section id="transaction-type" title="Laporan Tipe Transaksi">
        <p>
          Memberikan rincian berbagai jenis transaksi untuk properti tertentu. Membantu melacak transaksi keuangan dan mengkategorikannya berdasarkan jenis, seperti pembayaran, penyesuaian, dan biaya lainnya.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Laporan Tipe Transaksi:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Laporan Tipe Transaksi</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206909/18._transaction_type_-_1_lid4lk.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Mata Uang</strong>, <strong>Pilih Hari</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206918/18._transaction_type_-_2_nwh8pc.jpg" />
          <li>Klik <strong>Tampilkan Laporan Tipe Transaksi</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206918/18._transaction_type_-_3_jw2aj1.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Tipe Transaksi:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Laporan Tipe Transaksi tidak dibuat</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua filter yang diperlukan dipilih. Periksa kembali filter <strong>Mata Uang</strong> dan <strong>Pilih Hari</strong>.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tipe Transaksi hilang dari laporan</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa tanggal yang dipilih untuk memastikan sesuai dengan hari saat transaksi terjadi. Konfirmasikan bahwa tipe transaksi tercatat dan diklasifikasikan dengan benar.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== GUEST REPORT ==================== */}
      <Section id="guest-report" title="Laporan Tamu">
        <p>
          Memberikan gambaran terperinci tentang pemesanan tamu, termasuk informasi penting seperti detail tamu, tanggal menginap, dan tipe kamar. Membantu properti mengelola data tamu dan melacak riwayat menginap mereka.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Laporan Tamu:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Laporan Tamu</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206918/19._guests_report_-_1_nijyea.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Rentang Tanggal</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206918/19._guests_report_-_2_ebnfrw.jpg" />
          <li>Klik <strong>Tampilkan Laporan Tamu</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206918/19._guests_report_-_3_hyzguw.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Tamu:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Laporan Tamu tidak dibuat</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua filter yang diperlukan dipilih. Periksa kembali <strong>Rentang Tanggal</strong> untuk memastikan mencakup periode saat tamu menginap.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Informasi tamu hilang dari laporan</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa filter <strong>Kamar</strong> untuk memastikan tipe kamar yang benar dipilih. Verifikasi bahwa data tamu tercatat dengan benar dalam sistem.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== OWNER REPORT ==================== */}
      <Section id="owner-report" title="Laporan Pemilik">
        <p>
          Menyediakan metrik kinerja terperinci untuk pemilik properti, termasuk data pendapatan dan okupansi. Memungkinkan manajer properti melaporkan properti pemilik tertentu, dengan opsi untuk menyertakan penjualan dari POS dan detail untuk semua kamar.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Laporan Pemilik:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Laporan Pemilik</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206918/20._owner_report_-_1_disrcx.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Berdasarkan</strong> (Check-in Dates atau Created Reservation), <strong>Rentang Tanggal</strong>, <strong>Pemilik</strong>, <strong>Subruang</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1781667170/owner-report-filter_nl14x6.png" />
          <li>Klik salah satu tombol: <strong>Tampilkan Laporan Pemilik</strong>, <strong>Tampilkan Penjualan dengan POS</strong>, atau <strong>Tampilkan Semua Kamar</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206919/20._owner_report_-_2_bd2jtr.jpg" />
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206919/20._owner_report_-_3_dherv2.jpg" />
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206919/20._owner_report_-_4_gvwyac.jpg" />
        </ol>

        <h4 className="mt-4 font-medium">Cara Mengekspor Laporan Pemilik:</h4>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1783912747/owner-report-export-option_qm9h8e.png" />
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Ekspor PDF:</strong> Mengekspor laporan sebagai file PDF berdasarkan filter Pemilik dan Subruang yang dipilih.
          </li>
          <li>
            <strong>PDF Semua Kamar:</strong> Mengekspor PDF yang berisi semua kamar yang ditetapkan ke Pemilik yang dipilih.
          </li>
          <li>
            <strong>Ekspor Laporan ke Excel:</strong> Menghasilkan laporan sebagai file Excel dan mengirimkannya ke <strong>Email Utama</strong> pemilik yang dipilih. Klik <strong>Hasilkan File Excel</strong> untuk mengirim laporan.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1783912748/report-excel_c2ldcj.png" />
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Pemilik:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Laporan Pemilik tidak dibuat</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua filter yang diperlukan diisi. Verifikasi bahwa <strong>Rentang Tanggal</strong> mencakup periode yang valid dengan data.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Data penjualan tidak muncul saat memilih "Tampilkan Penjualan dengan POS"</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan data penjualan dari sistem POS terintegrasi dan disinkronkan dengan benar. Periksa filter <strong>Pemilik</strong> dan <strong>Properti</strong>.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== OTA BOOKING TAXES ==================== */}
      <Section id="ota-booking-taxes" title="Pajak Booking.com OTA">
        <p>
          Memberikan gambaran terperinci tentang pajak yang terkait dengan pemesanan yang dilakukan melalui <strong>Booking.com</strong>. Membantu properti melacak biaya pajak dan mengelola data terkait pajak untuk pemesanan tertentu.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Pajak Booking.com OTA:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Pajak Booking.com</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206919/21._ota_booking_-_1_rpgcnc.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Berdasarkan</strong> (Check-in Dates atau Created Reservation), <strong>Rentang Tanggal</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206919/21._ota_booking_-_2_rtiaeq.jpg" />
          <li>Klik <strong>Tampilkan Pajak Booking.com</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206920/21._ota_booking_-_3_qyidnh.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Pajak Booking.com:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Laporan Pajak Booking.com tidak dibuat</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Rentang Tanggal</strong> diatur dengan benar. Verifikasi bahwa Anda telah memilih filter <strong>Properti</strong> dan <strong>Kamar</strong>.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Data pajak yang salah muncul dalam laporan</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa bahwa filter <strong>Berdasarkan</strong> yang benar dipilih. Konfirmasikan bahwa informasi pajak untuk integrasi Booking.com Anda terkini dan disinkronkan dengan benar.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== BREAKFAST REPORT ==================== */}
      <Section id="breakfast-report" title="Laporan Sarapan">
        <p>
          Menampilkan data sarapan tamu berdasarkan tanggal reservasi atau check-in. Membantu properti mengelola dan mempersiapkan layanan sarapan dengan menunjukkan berapa banyak tamu yang diharapkan menerima sarapan setiap hari.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Laporan Sarapan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pada halaman <strong>Laporan</strong>, klik <strong>Laporan Sarapan</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206920/22._breakfast_-_1_subjwf.jpg" />
          <li>Lengkapi filter: <strong>Properti</strong>, <strong>Kamar</strong>, <strong>Berdasarkan</strong> (Check-in Dates atau Created Reservation), <strong>Rentang Tanggal</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206920/22._breakfast_-_2_yb4kbd.jpg" />
          <li>Klik <strong>Tampilkan Laporan Sarapan</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747206921/22._breakfast_-_3_vskyx6.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Sarapan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Laporan Sarapan tidak dibuat</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan filter <strong>Rentang Tanggal</strong> diterapkan dengan benar. Periksa bahwa filter <strong>Properti</strong> dan <strong>Kamar</strong> diatur dengan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Data sarapan dalam laporan tidak benar</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan filter <strong>Berdasarkan</strong> dipilih dengan benar. Verifikasi bahwa data sarapan dalam sistem telah dicatat dengan benar untuk periode yang dipilih.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}