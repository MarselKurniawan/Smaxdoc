import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/logs")({
  head: () => ({
    meta: [
      { title: "Log — Hotelku | SinergiMax" },
      { name: "description", content: "Lacak semua aktivitas terkait reservasi, termasuk pembuatan, pembaruan, pembatalan, dan entri pembayaran." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "how-to-use", label: "Cara Menggunakan Logs" },
  { id: "log-table-columns", label: "Kolom Tabel Log" },
  { id: "log-examples", label: "Contoh Log" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Log" activeTo="/docs/hotelku/logs">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Log</h1>
      <p className="mt-4">
        <strong>Log</strong> adalah fitur yang digunakan untuk melacak semua aktivitas terkait <strong>reservasi</strong> 
        di <strong>Sistem Front Office (FOS)</strong>. Log berisi tindakan seperti <strong>pembuatan reservasi</strong>, 
        <strong>pembaruan</strong>, <strong>pembatalan</strong>, dan <strong>entri pembayaran</strong>. 
        Setiap entri log mencakup <strong>stempel waktu</strong>, <strong>pengguna</strong>, <strong>ID pemesanan</strong>, 
        <strong>jenis tindakan</strong>, dan <strong>informasi terperinci</strong>.
      </p>
      <p className="mt-2">
        Fitur ini membantu properti memantau semua perubahan dan mengidentifikasi siapa yang membuatnya dan kapan, 
        mendukung <strong>transparansi</strong> dan <strong>akuntabilitas</strong>.
      </p>

      {/* ==================== HOW TO USE ==================== */}
      <Section id="how-to-use" title="Cara Menggunakan Logs">
        <p>Berikut cara menggunakan fitur Logs:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Buka menu <strong>Log</strong>.</li>
          <li>Gunakan <strong>bidang Input ID Pemesanan</strong> untuk mencari pemesanan tertentu.</li>
          <li>Klik <strong>Cari</strong> untuk menampilkan log terkait.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747125351/01._search_czfyin.jpg" />
          <li>
            Gunakan kontrol di bagian atas untuk:
            <ul className="ml-6 mt-1 list-disc">
              <li>Mengubah jumlah baris yang ditampilkan (mis., <strong>1000 baris</strong>)</li>
              <li>Mengekspor log ke <strong>Excel</strong> atau <strong>PDF</strong></li>
              <li>Menyesuaikan kolom yang terlihat dengan <strong>Visibilitas Kolom</strong></li>
              <li>Menggunakan kotak <strong>Pencarian</strong> di sisi kanan untuk memfilter log berdasarkan kata kunci</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747125351/02._rows_iytt96.jpg" />
            </ul>
          </li>
        </ol>
      </Section>

      {/* ==================== LOG TABLE COLUMNS ==================== */}
      <Section id="log-table-columns" title="Kolom Tabel Log">
        <p>Tabel log mencakup kolom-kolom berikut:</p>

        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Tanggal:</strong> Stempel waktu tindakan (mis., 2025-05-13 11:25 AM)
          </li>
          <li>
            <strong>Pengguna:</strong> Email pengguna yang melakukan tindakan
          </li>
          <li>
            <strong>ID Pemesanan:</strong> ID pemesanan yang terpengaruh
          </li>
          <li>
            <strong>Tindakan:</strong> Jenis tindakan yang diambil (mis., <code>CREATE RESERVATION</code>, <code>UPDATE RESERVATION</code>, <code>CREATE PAYMENT EXTRA</code>)
          </li>
          <li>
            <strong>Detail:</strong> Deskripsi perubahan (mis., <code>"From Status confirm to Status cancel"</code>)
          </li>
        </ul>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747125351/03._columns_x8mx74.jpg" />
      </Section>

      {/* ==================== LOG EXAMPLES ==================== */}
      <Section id="log-examples" title="Contoh Log">
        <p>Berikut adalah beberapa contoh entri log dan penjelasannya:</p>

        <ul className="ml-6 list-disc space-y-2">
          <li>
            <strong>CREATE PAYMENT EXTRA</strong>
            <br />
            Dicatat ketika <strong>pembayaran manual</strong> ditambahkan untuk pemesanan, beserta <strong>metode</strong> dan <strong>jumlah</strong>.
          </li>
          <li>
            <strong>CREATE RESERVATION</strong>
            <br />
            Dicatat ketika <strong>pemesanan baru</strong> dibuat. Mencakup <strong>tanggal check-in/check-out</strong> dan <strong>ID kamar</strong>.
          </li>
          <li>
            <strong>UPDATE RESERVATION</strong>
            <br />
            Menangkap perubahan pada detail reservasi seperti <strong>tanggal</strong>, <strong>kamar</strong>, atau <strong>status pemesanan</strong> 
            (mis., <code>From Status confirm to cancel</code>).
            <Figure label=""
            src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747125351/04._example_logs_-_1_kvv2dx.jpg" />
          </li>
          <li>
            <strong>REMOVE RESERVATION FROM BOOKING LIST</strong>
            <br />
            Dicatat ketika <strong>reservasi dihapus secara manual</strong> dari sistem. Mencakup tanggal check-in/check-out sebelumnya.
          </li>
          <li>
            <strong>MOVE RESERVATION</strong>
            <br />
            Menunjukkan bahwa <strong>reservasi telah dipindahkan</strong>, baik berdasarkan kamar atau tanggal. Detail mencakup:
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Dari ID Kamar</strong> ke <strong>ID Kamar baru</strong>, atau</li>
              <li><strong>Dari Check-in/Check-out lama</strong> ke <strong>Check-in/Check-out baru</strong>.</li>
            </ul>
          </li>
          <li>
            <strong>UPDATE INVENTORY</strong>
            <br />
            Dicatat ketika <strong>ketersediaan (ALOT)</strong> diperbarui secara manual untuk kamar dan tanggal tertentu.
          </li>
        </ul>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747125351/04._example_logs_-_2_cnvibl.jpg" />
      </Section>

      {/* ==================== TROUBLESHOOTING ==================== */}
      <div className="mt-4 rounded-lg border bg-muted/50 p-4">
        <p className="text-sm font-semibold">Pemecahan Masalah Log:</p>
        <dl className="mt-2 space-y-2 text-sm">
          <div>
            <dt className="font-medium">Tidak ada log yang muncul setelah mengklik Cari</dt>
            <dd className="ml-4 text-muted-foreground">
              Pastikan <strong>ID Pemesanan</strong> yang dimasukkan valid dan tidak kosong. Coba tingkatkan <strong>batas baris</strong> atau hapus filter tambahan. Periksa kembali apakah pemesanan memiliki tindakan yang dicatat.
            </dd>
          </div>
          <div>
            <dt className="font-medium">Kolom Detail tampak kosong</dt>
            <dd className="ml-4 text-muted-foreground">
              Beberapa tindakan (seperti pembaruan inventaris) mungkin tidak menyertakan pesan terperinci. Perubahan mungkin minimal (mis., hanya status) dan hanya ditampilkan di kolom <strong>Tindakan</strong>.
            </dd>
          </div>
          <div>
            <dt className="font-medium">Status tidak terduga atau log hilang</dt>
            <dd className="ml-4 text-muted-foreground">
              Log hanya menangkap tindakan yang dilakukan melalui <strong>Sistem Front Office</strong> atau integrasi sistem. Jika reservasi diubah melalui <strong>API</strong> atau sistem eksternal, tindakan tersebut mungkin tidak tercatat di sini.
            </dd>
          </div>
          <div>
            <dt className="font-medium">Log menunjukkan pengguna yang salah</dt>
            <dd className="ml-4 text-muted-foreground">
              Pengguna yang tercatat di kolom <strong>Pengguna</strong> adalah orang yang memicu perubahan. Untuk tindakan yang dipicu sistem (mis., sinkronisasi ketersediaan), ini mungkin menunjukkan email sistem atau pengguna API.
            </dd>
          </div>
          <div>
            <dt className="font-medium">Log menunjukkan entri duplikat</dt>
            <dd className="ml-4 text-muted-foreground">
              Ini mungkin terjadi ketika suatu tindakan <strong>dicoba beberapa kali</strong>. Gunakan kolom <strong>Stempel Waktu</strong> untuk mengidentifikasi dan memverifikasi pengiriman berulang.
            </dd>
          </div>
        </dl>
      </div>
    </DocsLayout>
  );
}