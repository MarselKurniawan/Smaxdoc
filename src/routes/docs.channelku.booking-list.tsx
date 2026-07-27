import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/booking-list")({
  head: () => ({
    meta: [
      { title: "Daftar Reservasi — Channelku | SinergiMax" },
      { name: "description", content: "Tampilan terpusat semua reservasi dari saluran yang terhubung, dilengkapi pencarian dan pengelolaan data." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "search-by-criteria", label: "Pencarian Berdasarkan Kriteria" },
  { id: "booking-list-table", label: "Tabel Daftar Reservasi" },
  { id: "import-reservation", label: "Impor Reservasi" },
  { id: "error-mapping", label: "Error Mapping" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Daftar Reservasi" activeTo="/docs/channelku/bookings/booking-list">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Daftar Reservasi</h1>
      <p className="mt-4">
        Halaman <strong>Daftar Reservasi</strong> di Channel Manager menyediakan tampilan terpusat dari semua reservasi yang diterima dari saluran yang terhubung. 
        Halaman ini memungkinkan Anda mencari, mengimpor, mengekspor, dan mengelola data reservasi dengan lebih efisien berdasarkan kebutuhan operasional properti Anda.
      </p>
      <p className="mt-2">
        Anda dapat menggunakan berbagai opsi filter dan pencarian untuk menemukan reservasi tertentu dengan cepat, memantau aktivitas pemesanan, 
        dan menyelesaikan masalah terkait reservasi seperti kesalahan pemetaan.
      </p>

      <div className="mt-4 rounded-lg border bg-muted/50 p-4">
        <p className="text-sm text-muted-foreground">
          <strong>Catatan:</strong> Untuk melihat versi terbaru dari dokumentasi ini, lihat 
          <a href="#" className="ml-1 text-primary hover:underline">Daftar Reservasi V2</a>.
        </p>
      </div>

      {/* ==================== SEARCH BY CRITERIA ==================== */}
      <Section id="search-by-criteria" title="Pencarian Berdasarkan Kriteria">
        <p>
          Fitur <strong>Pencarian Berdasarkan Kriteria</strong> memungkinkan Anda mencari reservasi menggunakan filter spesifik seperti nama tamu atau tanggal reservasi.
        </p>

        <h4 className="mt-4 font-medium">Kriteria Pencarian:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li><strong>Nama Tamu</strong></li>
          <li><strong>Tipe Tanggal</strong> (Dibuat, Kedatangan, Keberangkatan)</li>
          <li><strong>Tanggal Dibuat</strong></li>
          <li><strong>Tanggal Kedatangan</strong></li>
          <li><strong>Tanggal Keberangkatan</strong></li>
        </ul>

        <h4 className="mt-4 font-medium">Cara Mencari Reservasi:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka halaman <strong>Daftar Reservasi</strong>.</li>
          <li>Pilih kriteria pencarian yang ingin digunakan.</li>
          <li>
            <strong>Untuk mencari berdasarkan nama tamu:</strong>
            <ul className="ml-6 mt-1 list-disc">
              <li>Pilih <strong>Nama Tamu</strong> di kolom <strong>Cari Berdasarkan</strong>.</li>
              <li>Masukkan nama tamu di kolom pencarian.</li>
              <li>Klik <strong>Cari</strong>.</li>
            </ul>
          </li>
          <li>
            <strong>Untuk mencari berdasarkan tanggal:</strong>
            <ul className="ml-6 mt-1 list-disc">
              <li>Pilih <strong>Tipe Tanggal</strong> yang diinginkan: <strong>Dibuat</strong>, <strong>Kedatangan</strong>, atau <strong>Keberangkatan</strong>.</li>
              <li>Pilih rentang tanggal <strong>Dari</strong> dan <strong>Sampai</strong>.</li>
              <li>Klik <strong>Cari</strong>.</li>
            </ul>
          </li>
          <li>Untuk pencarian lebih spesifik, klik <strong>Filter Lanjutan</strong> untuk menampilkan opsi filter tambahan.</li>
        </ol>
        <Figure label="Panel filter dan pencarian"
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544341/01._search_by_criteria_qcfvm0.png" />

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Filter yang Tersedia:</p>
          <ul className="ml-6 mt-1 list-disc text-sm text-muted-foreground">
            <li>Filter berdasarkan <strong>rentang tanggal</strong> (tanggal booking atau tanggal menginap).</li>
            <li>Filter berdasarkan <strong>channel</strong>, <strong>status</strong>, atau <strong>tipe kamar</strong>.</li>
            <li>Pencarian cepat berdasarkan nama tamu, nomor reservasi, atau email.</li>
          </ul>
        </div>
      </Section>

      {/* ==================== BOOKING LIST TABLE ==================== */}
      <Section id="booking-list-table" title="Tabel Daftar Reservasi">
        <p>
          Tabel menampilkan seluruh reservasi dengan berbagai kolom dan opsi untuk mengelola data.
        </p>

        <h4 className="mt-4 font-medium">Opsi Tabel:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Reset Pencarian:</strong> Mengatur ulang semua filter ke default.
          </li>
          <li>
            <strong>Ekspor:</strong> Mengekspor data tabel ke dalam format yang diinginkan.
          </li>
          <li>
            <strong>Impor:</strong> Mengimpor data reservasi dari file Excel.
          </li>
          <li>
            <strong>Tampilkan 100 baris:</strong> Menyesuaikan jumlah baris yang ditampilkan.
          </li>
          <li>
            <strong>Salin:</strong> Menyalin data tabel ke clipboard.
          </li>
          <li>
            <strong>Excel:</strong> Mengekspor data ke file .xlsx.
          </li>
          <li>
            <strong>PDF:</strong> Mengekspor data ke file PDF.
          </li>
          <li>
            <strong>Visibilitas Kolom:</strong> Memilih kolom mana yang akan ditampilkan.
          </li>
        </ul>

        <p className="mt-2">
          Kolom yang tersedia antara lain: <strong>Res #</strong>, <strong>Voucher #</strong>, <strong>Nama OTA</strong>, 
          <strong>Dibuat</strong>, <strong>Kedatangan</strong>, <strong>Keberangkatan</strong>, <strong>Nama Tamu</strong>, 
          <strong>Kamar</strong>, <strong>Jumlah Hutang</strong>, <strong>Jumlah Deposit</strong>, dan <strong>Assign Kamar</strong>.
        </p>
      </Section>

      {/* ==================== IMPORT RESERVATION ==================== */}
      <Section id="import-reservation" title="Impor Reservasi">
        <p>
          Fitur <strong>Impor Reservasi</strong> memungkinkan Anda mengunggah data reservasi secara manual menggunakan template impor yang disediakan.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengimpor Reservasi:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Unduh <strong>Template Impor Reservasi</strong>.</li>
          <li>Isi data reservasi berdasarkan format template yang disediakan.</li>
          <li>Simpan file yang telah dilengkapi dalam format <strong>Microsoft Excel (.xlsx)</strong>.</li>
          <li>Klik <strong>Pilih File</strong> dan pilih file impor yang telah dilengkapi.</li>
          <li>Unggah file untuk memulai proses impor.</li>
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-semibold">Panduan Sebelum Mengunggah File Excel:</p>
          <ol className="ml-6 mt-2 list-decimal space-y-1 text-sm">
            <li>Pastikan data yang diunggah sesuai dengan <strong>ID Kamar</strong>, <strong>ID Sub Kamar</strong> dan <strong>ID Rate Plan</strong>. Anda dapat menemukan ID tersebut di bagian <strong>Informasi Properti</strong>.</li>
            <li>Pastikan kolom <strong>ID Kamar</strong>, <strong>ID Rate Plan</strong>, <strong>Tanggal Booking</strong>, <strong>Tanggal Kedatangan</strong>, <strong>Tanggal Check-In</strong>, <strong>Tanggal Check-Out</strong>, <strong>Total Malam</strong>, <strong>Nama Depan</strong>, <strong>Nama Belakang</strong>, <strong>Negara</strong>, <strong>Total Pajak</strong>, <strong>Total Tarif Kamar</strong>, <strong>Total</strong>, dan <strong>Kode Mata Uang</strong> tidak boleh kosong dan wajib diisi.</li>
            <li>Untuk nama dan kode OTA/Channel, Anda dapat menemukannya di bagian <strong>Informasi OTA/Channel</strong>.</li>
            <li>Format tanggal yang didukung untuk impor adalah <strong>"yyyy-mm-dd"</strong>.</li>
            <li>Maksimal malam untuk setiap reservasi adalah <strong>100 malam</strong>.</li>
            <li>File impor dapat berisi hingga <strong>300 reservasi</strong>.</li>
            <li>Anda hanya dapat mengunggah <strong>600 reservasi</strong> dalam satu hari.</li>
            <li>Pastikan file Excel Anda <strong>tidak memiliki formula Excel</strong>.</li>
            <li>Anda dapat mengunduh contoh file Excel yang telah diisi untuk verifikasi: <strong>Unduh Template Impor</strong>.</li>
            <li>Kami merekomendasikan pengunggahan menggunakan format file <strong>CSV</strong>.</li>
          </ol>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Panduan Impor Reservasi:</p>
          <ul className="ml-6 mt-1 list-disc text-sm text-muted-foreground">
            <li>Pastikan file yang diunggah menggunakan format Excel yang benar.</li>
            <li>Disarankan untuk mengunggah sejumlah kecil reservasi terlebih dahulu untuk validasi sebelum mengimpor data dalam jumlah besar.</li>
          </ul>
        </div>
      </Section>

      {/* ==================== ERROR MAPPING ==================== */}
      <Section id="error-mapping" title="Error Mapping">
        <p>
          Terkadang reservasi mungkin muncul dengan status <strong>Error Mapping</strong> di Daftar Reservasi. 
          Ini biasanya terjadi karena konfigurasi pemetaan kamar atau rate plan di Panel Kontrol tidak lengkap atau tidak benar.
        </p>

        <div className="mt-2 rounded-lg border bg-red-50 p-4 dark:bg-red-950/20">
          <p className="text-sm">
            <strong>Penting:</strong> Reservasi dengan status error mapping <strong>tidak akan mengurangi ketersediaan kamar</strong> sampai masalah pemetaan diselesaikan.
          </p>
          <Figure label="" 
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742545792/05._error_mapping_woqzzs.png"/>
        </div>

        <h4 className="mt-4 font-medium">Cara Mengatasi Error Mapping:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik teks <strong>Error Mapping</strong> pada reservasi.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544239/03._error_mapping_kigy3a.png" />
          <li>Pilih pemetaan kamar yang benar untuk reservasi.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544243/04._error_mapping_-_select_qznyrz.png" />
          <li>Klik <strong>Simpan</strong> untuk menerapkan pemetaan.</li>
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Informasi Penting:</p>
          <ul className="ml-6 mt-1 list-disc text-sm text-muted-foreground">
            <li>Pastikan Anda mengetahui secara pasti kamar yang dipesan oleh tamu dengan memeriksa:
              <ul className="ml-6 mt-1 list-disc">
                <li>Voucher OTA asli</li>
                <li>Extranet OTA</li>
              </ul>
            </li>
            <li>Setelah menyelesaikan pemetaan reservasi, verifikasi konfigurasi kamar dan rate plan di:
              <ul className="ml-6 mt-1 list-disc">
                <li>Panel Kontrol → Pemetaan</li>
                <li>Panel Kontrol → Penugasan</li>
              </ul>
            </li>
            <li className="mt-1">Ini membantu mencegah masalah pemetaan yang sama terjadi lagi pada reservasi di masa mendatang.</li>
          </ul>
        </div>

        <p className="mt-2">
          Untuk informasi lebih lanjut tentang konfigurasi pemetaan, silakan merujuk ke:
          <br />
          <a href="#" className="text-primary hover:underline">Dokumentasi Pemetaan Panel Kontrol</a>
        </p>
      </Section>
    </DocsLayout>
  );
}