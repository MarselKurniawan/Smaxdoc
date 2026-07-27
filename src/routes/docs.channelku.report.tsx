import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/report")({
  head: () => ({
    meta: [
      { title: "Laporan — Channelku | SinergiMax" },
      { name: "description", content: "Lacak kinerja properti melalui data analitik, dasbor, ringkasan reservasi, dan laporan penjualan." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "dashboard", label: "Dasbor" },
  { id: "property-reports", label: "Laporan Properti" },
  { id: "group-reports", label: "Laporan Grup" },
  { id: "growth-reports", label: "Laporan Pertumbuhan" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Laporan" activeTo="/docs/channelku/channel-manager/reports">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Laporan</h1>
      <p className="mt-4">
        Bagian <strong>Laporan</strong> memungkinkan Anda untuk melacak kinerja properti melalui beberapa jenis data analitik, 
        termasuk dasbor, ringkasan reservasi, dan laporan penjualan.
      </p>

      {/* ==================== DASHBOARD ==================== */}
      <Section id="dashboard" title="Dasbor">
        <p>
          <strong>Dasbor</strong> menampilkan indikator kinerja utama dan ringkasan visual dari aktivitas reservasi Anda.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Dasbor:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka menu <strong>Laporan</strong> dan pilih <strong>Dasbor</strong>.</li>
          <li>
            Gunakan tombol <strong>Ubah Tanggal</strong> untuk memilih rentang tanggal tertentu untuk laporan.
          </li>
          <li>
            Tinjau grafik yang menampilkan <strong>jumlah reservasi</strong>, <strong>okupansi</strong>, dan <strong>total pendapatan</strong>.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544246/01._dashboard_-_2_y1qf0i.png" />
          <li>
            Klik <strong>Kirim Laporan melalui Email</strong> untuk mengirimkan ringkasan dasbor saat ini ke alamat email terdaftar Anda.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746605878/01._dashboard_-_4_upukic.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Dasbor:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Dasbor kosong atau tidak ada data yang ditampilkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan rentang tanggal yang valid dipilih menggunakan tombol <strong>Ubah Tanggal</strong>. Data di luar rentang yang tersedia tidak akan ditampilkan.
                Segarkan halaman atau muat ulang laporan. Periksa izin akses pengguna — beberapa pengguna mungkin tidak memiliki akses untuk melihat laporan tertentu.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Grafik tidak memperbarui setelah menerapkan filter tanggal baru</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu beberapa saat; kumpulan data besar dapat menyebabkan penundaan dalam rendering. Bersihkan filter apa pun, lalu pilih ulang rentang tanggal yang diinginkan dan coba lagi. Jika masalah berlanjut, keluar dan masuk kembali untuk mengatur ulang sesi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Angka pendapatan atau reservasi tampak salah</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali filter yang dipilih seperti rentang tanggal atau properti, karena dapat memengaruhi nilai yang ditampilkan. Sinkronisasi data mungkin tertunda — tunggu beberapa menit dan segarkan laporan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kirim Laporan melalui Email tidak berfungsi</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan akun Anda memiliki alamat email yang valid dan terverifikasi. Tunggu beberapa saat — email mungkin tertunda saat beban server tinggi. Jika tidak ada email yang tiba, periksa folder spam atau hubungi dukungan untuk bantuan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== PROPERTY REPORTS ==================== */}
      <Section id="property-reports" title="Laporan Properti">
        <p>
          Bagian <strong>Laporan Properti</strong> memungkinkan Anda menghasilkan laporan terperinci berdasarkan tanggal reservasi atau menginap, 
          yang dikelompokkan berdasarkan berbagai kriteria.
        </p>

        <h4 className="mt-4 font-medium">Cara Menghasilkan Laporan Properti:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka menu <strong>Laporan</strong> dan pilih <strong>Laporan Properti</strong>.</li>
          <li>Atur filter tanggal berdasarkan <strong>Tanggal Dibuat</strong> atau <strong>Tanggal Menginap</strong>.</li>
          <li>
            Pilih jenis laporan dari opsi berikut:
            <ul className="ml-6 mt-1 list-disc">
              <li>Agen</li>
              <li>Kamar</li>
              <li>Harian</li>
              <li>Penjualan</li>
              <li>Negara</li>
              <li>Reservasi (12 Bulan Terakhir)</li>
              <li>Penjualan (12 Bulan Terakhir)</li>
            </ul>
          </li>
          <li>Klik tombol <strong>cari</strong> untuk melihat hasil.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544278/02._property_reports_avj6zo.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Properti:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Pencarian tidak menghasilkan hasil</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kedua <strong>Jenis Tanggal</strong> (Dibuat/Menginap) dan <strong>Jenis Laporan</strong> dipilih. Konfirmasikan bahwa ada reservasi selama rentang tanggal yang dipilih.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Filter laporan tidak diterapkan dengan benar</dt>
              <dd className="ml-4 text-muted-foreground">
                Coba atur ulang filter dan pilih lagi secara manual. Hindari menggunakan isi otomatis browser yang dapat mengganggu kolom input tanggal.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Beberapa titik data tampak hilang</dt>
              <dd className="ml-4 text-muted-foreground">
                Laporan hanya dapat menampilkan bidang yang relevan dengan jenis laporan yang dipilih. Misalnya, memilih <strong>"Agen"</strong> mungkin tidak menyertakan data tingkat kamar.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== GROUP REPORTS ==================== */}
      <Section id="group-reports" title="Laporan Grup">
        <p>
          Fitur <strong>Laporan Grup</strong> memungkinkan Anda menghasilkan laporan gabungan di beberapa properti dalam satu tampilan.
        </p>

        <h4 className="mt-4 font-medium">Cara Menghasilkan Laporan Grup:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka <strong>Laporan Grup</strong> di bawah menu <strong>Laporan</strong>.</li>
          <li>Pilih beberapa properti untuk dimasukkan dalam laporan.</li>
          <li>Pilih jenis laporan dan tentukan rentang tanggal.</li>
          <li>Klik <strong>cari</strong> untuk menghasilkan laporan gabungan.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778653846/group-report.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Grup:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat memilih beberapa properti</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan akses multi-properti diaktifkan untuk akun pengguna Anda. Periksa apakah ada properti yang dipilih tidak aktif atau dihapus.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Laporan membutuhkan waktu terlalu lama untuk dimuat</dt>
              <dd className="ml-4 text-muted-foreground">
                Persempit rentang tanggal atau kurangi jumlah properti yang dipilih. Grup properti besar dengan rentang tanggal yang panjang mungkin memerlukan waktu pemrosesan lebih lama.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Data tidak konsisten antar properti</dt>
              <dd className="ml-4 text-muted-foreground">
                Beberapa properti mungkin tidak memiliki data reservasi yang lengkap atau diperbarui. Pastikan semua properti yang dipilih memiliki laporan yang disinkronkan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== GROWTH REPORTS ==================== */}
      <Section id="growth-reports" title="Laporan Pertumbuhan">
        <p>
          Fitur <strong>Laporan Pertumbuhan</strong> memungkinkan Anda membandingkan kinerja pemesanan dan pendapatan di berbagai periode waktu.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Laporan Pertumbuhan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka bagian <strong>Laporan Pertumbuhan</strong> di bawah menu <strong>Laporan</strong>.</li>
          <li>Pilih satu atau lebih properti untuk dimasukkan dalam perbandingan.</li>
          <li>Pilih <strong>bulan</strong> yang ingin Anda bandingkan.</li>
          <li>Pilih apakah akan mendasarkan laporan pada <strong>Reservasi Dibuat</strong> atau <strong>Tanggal Menginap</strong>.</li>
          <li>Klik <strong>Cari</strong> untuk menghasilkan grafik perbandingan dan menganalisis tren kinerja dari waktu ke waktu.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544256/04._growth_reports_wv4j2p.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Laporan Pertumbuhan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Grafik perbandingan tidak ditampilkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan setidaknya <strong>dua bulan</strong> dipilih untuk perbandingan. Pilih ulang properti dan rentang tanggal, lalu klik <strong>Cari</strong> lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak ada data yang ditampilkan untuk bulan yang dipilih</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa bulan yang dipilih berisi data pemesanan atau pendapatan. Laporan Pertumbuhan hanya menampilkan perbandingan untuk periode dengan aktivitas reservasi aktual.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Nilai grafik tampak datar atau salah</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua properti yang dipilih memiliki data untuk kedua bulan. Periksa silang angka menggunakan <strong>Laporan Properti</strong> atau <strong>Laporan Grup</strong> untuk periode yang sama.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}