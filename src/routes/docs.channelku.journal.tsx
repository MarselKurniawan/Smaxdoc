import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/journal")({
  head: () => ({
    meta: [
      { title: "Jurnal — Back Office System | SinergiMax" },
      { name: "description", content: "Tinjau semua transaksi keuangan, pendapatan, pengeluaran, pembayaran, dan saldo pemilik properti." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "filtering-panel", label: "Panel Filter" },
  { id: "button-panel", label: "Panel Tombol" },
  { id: "show-transaction", label: "Tampilkan Transaksi" },
  { id: "show-expenses", label: "Tampilkan Pengeluaran" },
  { id: "show-payments", label: "Tampilkan Pembayaran" },
  { id: "property-owner-range", label: "Rentang Pemilik Properti" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Jurnal" activeTo="/docs/channelku/back-office-system/journal">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Jurnal</h1>
      <p className="mt-4">
        Halaman <strong>Jurnal</strong> menyediakan gambaran terperinci tentang semua transaksi keuangan yang tercatat dalam sistem. 
        Fitur ini memungkinkan pengguna untuk meninjau pendapatan, pengeluaran, pembayaran, dan saldo pemilik properti dengan mudah dan jelas. 
        Untuk mengakses halaman ini, buka <strong>Back Office System &gt; Jurnal</strong>.
      </p>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1765509135/journal-menu.png" />

      {/* ==================== FILTERING PANEL ==================== */}
      <Section id="filtering-panel" title="Panel Filter">
        <p>Gunakan panel filter untuk mempersempit hasil transaksi.</p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1765513528/filtering-panel-journal.png" />

        <h4 className="mt-4 font-medium">Kriteria Filter:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Properti:</strong> Pilih properti tertentu atau pilih <strong>Semua Properti</strong> untuk melihat hasil gabungan.
          </li>
          <li>
            <strong>Rentang Tanggal:</strong> Tentukan periode spesifik dengan memilih <strong>Tanggal Mulai</strong> dan <strong>Tanggal Akhir</strong>.
          </li>
          <li>
            <strong>Outlet:</strong> Pilih outlet yang terkait dengan transaksi, jika ada.
          </li>
        </ul>

        <p className="mt-2">
          Setelah filter diterapkan, daftar transaksi di bawah akan memperbarui secara otomatis berdasarkan filter yang dipilih.
        </p>
      </Section>

      {/* ==================== BUTTON PANEL ==================== */}
      <Section id="button-panel" title="Panel Tombol">
        <p>
          Panel tombol berisi empat opsi untuk menampilkan jenis jurnal yang berbeda. Opsi yang aktif akan ditandai dengan warna hijau.
        </p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1765513539/journal-button-panel.png" />

        <h4 className="mt-4 font-medium">Jenis Jurnal:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Jurnal:</strong> Menampilkan semua transaksi (pendapatan dan pengeluaran).
          </li>
          <li>
            <strong>Pengeluaran:</strong> Menampilkan semua transaksi debit (pengeluaran).
          </li>
          <li>
            <strong>Pembayaran:</strong> Menampilkan semua transaksi kredit (pembayaran masuk).
          </li>
          <li>
            <strong>Rentang Pemilik Properti:</strong> Menampilkan saldo dan transaksi untuk pemilik properti berdasarkan rentang tanggal.
          </li>
        </ul>

        <p className="mt-2">
          Klik salah satu opsi ini untuk menampilkan jenis transaksi yang sesuai.
        </p>
      </Section>

      {/* ==================== SHOW TRANSACTION ==================== */}
      <Section id="show-transaction" title="Tampilkan Transaksi">
        <p>
          Bagian ini menampilkan semua transaksi keuangan (pendapatan dan pengeluaran) berdasarkan filter yang dipilih.
        </p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1765513574/journal-information-panel.png" />

        <h4 className="mt-4 font-medium">Panel Ringkasan:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Ringkasan Pendapatan:</strong> Menampilkan total kredit, total debit, dan saldo bersih (kredit dikurangi debit).
          </li>
          <li>
            <strong>Transaksi Kredit:</strong> Daftar terperinci semua transaksi kredit, termasuk jumlah individu dan total nilai kredit.
          </li>
          <li>
            <strong>Transaksi Debit:</strong> Daftar terperinci semua transaksi debit, termasuk jumlah individu dan total nilai debit.
          </li>
        </ul>

        <h4 className="mt-4 font-medium">Daftar Transaksi:</h4>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1765513583/journal-transaction-list.png" />
        <p>Pada daftar transaksi, Anda dapat menggunakan fitur-fitur berikut:</p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Tampilkan Baris:</strong> Atur jumlah baris yang muncul dalam tabel (10, 25, 50, atau Semua).
          </li>
          <li>
            <strong>Opsi Ekspor:</strong>
            <ul className="ml-6 list-disc">
              <li><strong>Salin:</strong> Ekspor data tabel ke clipboard dalam format teks.</li>
              <li><strong>Excel:</strong> Ekspor data ke format .xlsx.</li>
              <li><strong>PDF:</strong> Ekspor data ke format PDF.</li>
            </ul>
          </li>
          <li>
            <strong>Visibilitas Kolom:</strong> Pilih kolom mana yang akan ditampilkan dalam tabel.
          </li>
          <li>
            <strong>Bilah Pencarian:</strong> Masukkan kata kunci untuk mencari di semua kolom. Tabel akan menampilkan hasil yang cocok.
          </li>
          <li>
            <strong>Urutkan Data:</strong> Klik header kolom mana pun untuk mengurutkan daftar.
          </li>
          <li>
            <strong>Tampilkan Invoice:</strong> Tersedia hanya untuk transaksi kredit. Klik tombol <strong>Tampilkan Invoice</strong> di kolom invoice untuk membuka invoice di tab browser baru.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1765526291/journal-view-invoice.png" />
          <li>
            <strong>Total Debit dan Kredit:</strong> Menampilkan jumlah total debit dan kredit di bagian bawah tabel.
          </li>
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Kolom yang Tersedia:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li><strong>Tanggal Transaksi</strong></li>
            <li><strong>Properti</strong></li>
            <li><strong>Outlet</strong></li>
            <li><strong>Invoice</strong></li>
            <li><strong>Pembayaran</strong></li>
            <li><strong>Debit</strong></li>
            <li><strong>Kredit</strong></li>
          </ul>
        </div>
      </Section>

      {/* ==================== SHOW EXPENSES ==================== */}
      <Section id="show-expenses" title="Tampilkan Pengeluaran">
        <p>
          Bagian ini menampilkan informasi terperinci tentang semua transaksi debit (pengeluaran) berdasarkan filter yang dipilih.
        </p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1765513651/expense-information-panel.png" />

        <h4 className="mt-4 font-medium">Panel Ringkasan:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            Menampilkan daftar pengeluaran yang dikelompokkan berdasarkan properti dan outlet.
          </li>
          <li>
            Menampilkan total pengeluaran di bagian bawah ringkasan.
          </li>
        </ul>

        <h4 className="mt-4 font-medium">Daftar Transaksi:</h4>
        <p>Pada daftar transaksi, Anda dapat menggunakan fitur-fitur berikut:</p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Tampilkan Baris:</strong> Atur jumlah baris yang muncul dalam tabel (10, 25, 50, atau Semua).
          </li>
          <li>
            <strong>Opsi Ekspor:</strong> Salin, Excel, PDF.
          </li>
          <li>
            <strong>Visibilitas Kolom:</strong> Pilih kolom yang akan ditampilkan.
          </li>
          <li>
            <strong>Bilah Pencarian:</strong> Cari kata kunci di semua kolom.
          </li>
          <li>
            <strong>Urutkan Data:</strong> Klik header kolom untuk mengurutkan.
          </li>
          <li>
            <strong>Total Pengeluaran:</strong> Menampilkan jumlah total pengeluaran di bagian bawah tabel.
          </li>
        </ul>
      </Section>

      {/* ==================== SHOW PAYMENTS ==================== */}
      <Section id="show-payments" title="Tampilkan Pembayaran">
        <p>
          Bagian ini menampilkan informasi terperinci tentang semua transaksi terkait pembayaran, yang mewakili entri kredit dalam jurnal. 
          Ini terutama digunakan untuk memantau dana masuk dan pergerakan pendapatan.
        </p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1765513688/payment-information-panel.png" />

        <h4 className="mt-4 font-medium">Daftar Transaksi:</h4>
        <p>Pada daftar transaksi, Anda dapat menggunakan fitur-fitur berikut:</p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Tampilkan Baris:</strong> Atur jumlah baris yang muncul dalam tabel (10, 25, 50, atau Semua).
          </li>
          <li>
            <strong>Opsi Ekspor:</strong> Salin, Excel, PDF.
          </li>
          <li>
            <strong>Visibilitas Kolom:</strong> Pilih kolom yang akan ditampilkan.
          </li>
          <li>
            <strong>Bilah Pencarian:</strong> Cari kata kunci di semua kolom.
          </li>
          <li>
            <strong>Urutkan Data:</strong> Klik header kolom untuk mengurutkan.
          </li>
          <li>
            <strong>Total Pembayaran:</strong> Menampilkan jumlah total pembayaran di bagian bawah tabel.
          </li>
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Kolom yang Tersedia:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li><strong>Tanggal</strong></li>
            <li><strong>Properti</strong></li>
            <li><strong>Outlet</strong></li>
            <li><strong>Invoice</strong></li>
            <li><strong>Jumlah</strong></li>
          </ul>
        </div>
      </Section>

      {/* ==================== PROPERTY OWNER RANGE ==================== */}
      <Section id="property-owner-range" title="Rentang Pemilik Properti">
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1765513724/property-owner-information.png" />
        <p>
          Bagian ini menampilkan saldo dan transaksi untuk pemilik properti berdasarkan rentang tanggal yang dipilih.
        </p>

        <h4 className="mt-4 font-medium">Panel Ringkasan:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Saldo Semua Transaksi:</strong> Menampilkan total pembayaran, total pengeluaran, dan saldo yang dihasilkan untuk semua data yang tercatat.
          </li>
          <li>
            <strong>Saldo Transaksi Periode:</strong> Menampilkan total berdasarkan rentang tanggal yang dipilih.
          </li>
          <li>
            <strong>Pembayaran Pemilik:</strong> Daftar transaksi kredit dalam rentang tanggal yang berlaku.
          </li>
          <li>
            <strong>Pengeluaran:</strong> Daftar transaksi debit dalam rentang tanggal yang berlaku.
          </li>
        </ul>

        <h4 className="mt-4 font-medium">Daftar Transaksi:</h4>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1765513736/property-owner-transaction-list.png" />
        <p>Pada daftar transaksi, Anda dapat menggunakan fitur-fitur berikut:</p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Tampilkan Baris:</strong> Atur jumlah baris yang muncul dalam tabel (10, 25, 50, atau Semua).
          </li>
          <li>
            <strong>Opsi Ekspor:</strong> Salin, Excel, PDF.
          </li>
          <li>
            <strong>Visibilitas Kolom:</strong> Pilih kolom yang akan ditampilkan.
          </li>
          <li>
            <strong>Bilah Pencarian:</strong> Cari kata kunci di semua kolom.
          </li>
          <li>
            <strong>Urutkan Data:</strong> Klik header kolom untuk mengurutkan.
          </li>
          <li>
            <strong>Total Debit dan Kredit:</strong> Menampilkan jumlah total debit dan kredit di bagian bawah tabel.
          </li>
        </ul>
      </Section>
    </DocsLayout>
  );
}