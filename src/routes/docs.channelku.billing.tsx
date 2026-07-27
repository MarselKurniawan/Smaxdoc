import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/billing")({
  head: () => ({
    meta: [
      { title: "Penagihan — Akun | SinergiMax" },
      { name: "description", content: "Kelola semua invoice dan daftar properti, lacak pembayaran, dan pantau riwayat penagihan." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "billing", label: "Penagihan" },
  { id: "date-filtering", label: "Filter Tanggal" },
  { id: "search-data", label: "Cari Data" },
  { id: "how-to-pay", label: "Cara Membayar" },
  { id: "property-list", label: "Daftar Properti" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Penagihan" activeTo="/docs/channelku/account/billing">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Penagihan</h1>
      <p className="mt-4">
        Fitur ini memungkinkan Anda untuk mengelola semua invoice dan daftar properti. Anda dapat memeriksa, melacak, dan memproses pembayaran di sini. 
        Bagian ini membantu Anda memantau riwayat penagihan dan memastikan semua transaksi selalu terbaru. 
        Untuk mengakses halaman ini, buka <strong>Akun &gt; Penagihan</strong>.
      </p>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763108837/menu-account-billing.png" />

      {/* ==================== BILLING ==================== */}
      <Section id="billing" title="Penagihan">
        <p>
          <strong>Penagihan</strong> adalah bagian yang memungkinkan Anda melacak invoice dan mengelolanya. Anda juga dapat mengelola proses pembayaran di sini.
        </p>

        <h4 className="mt-4 font-medium">Tampilan dan Navigasi:</h4>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763108947/billing-section.png" /> 
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Bagian Penagihan:</strong> Untuk beralih ke bagian penagihan, klik <strong>Penagihan</strong> pada bilah tab.
          </li>
          <li>
            <strong>Filter Tanggal:</strong> Untuk memfilter data dalam rentang tanggal. Lihat <strong>Filter Tanggal</strong> untuk detail lebih lanjut.
          </li>
          <li>
            <strong>Bilah Pencarian:</strong> Gunakan bilah pencarian untuk menemukan invoice tertentu dengan cepat berdasarkan kata kunci seperti <strong>Tanggal Invoice</strong>, <strong>Tanggal Jatuh Tempo</strong>, <strong>Nomor Invoice</strong>, <strong>Jumlah</strong>, <strong>Jatuh Tempo</strong>, dan <strong>Status</strong>. Lihat <strong>Cari Data</strong> untuk detail lebih lanjut.
          </li>
        </ul>
      </Section>

      {/* ==================== DATE FILTERING ==================== */}
      <Section id="date-filtering" title="Filter Tanggal">
        <p>
          Filter tanggal digunakan untuk memfilter data antara tanggal mulai dan tanggal akhir yang dimasukkan.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Filter Tanggal:</h4>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763109107/date-filtering.png" />
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pilih <strong>tanggal mulai</strong> dan <strong>tanggal akhir</strong>.</li>
          <li>Klik tombol <strong>Filter</strong>. Tabel akan menampilkan hasil yang sesuai dengan filter.</li>
          <li>Klik tombol <strong>Atur Ulang</strong> untuk mengatur ulang filter tanggal.</li>
        </ol>
      </Section>

      {/* ==================== SEARCH DATA ==================== */}
      <Section id="search-data" title="Cari Data">
        <p>
          Fitur <strong>Cari</strong> memungkinkan Anda menemukan invoice dengan cepat dengan mengetik kata kunci seperti:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          <li>Tanggal Invoice</li>
          <li>Tanggal Jatuh Tempo</li>
          <li>Nomor Invoice</li>
        </ul>

        <h4 className="mt-4 font-medium">Cara Menggunakan Pencarian:</h4>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763109633/search-invoice.png" />
        <ol className="ml-6 list-decimal space-y-1">
          <li>Ketik kata kunci pada bilah pencarian.</li>
          <li>Klik tombol <strong>Cari</strong>. Tabel akan secara otomatis menampilkan hasil yang cocok dengan kata kunci Anda.</li>
          <li>Untuk mengatur ulang hasil pencarian yang difilter, klik tombol <strong>Atur Ulang</strong>.</li>
        </ol>
      </Section>

      {/* ==================== HOW TO PAY ==================== */}
      <Section id="how-to-pay" title="Cara Membayar">
        <p>
          Invoice yang memerlukan pembayaran ditandai dengan status <strong>Menunggu Pembayaran</strong>. Item ini juga akan menampilkan tombol <strong>Bayar</strong> di kolom <strong>Tindakan</strong>.
        </p>

        <h4 className="mt-4 font-medium">Langkah-langkah Pembayaran:</h4>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Klik tombol <strong>Bayar</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763109809/pay-button.png" />
          <li>
            Anda akan dialihkan ke halaman pembayaran yang berisi:
                      <Figure label=""
                      src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763109937/payment.png" />
            <ul className="ml-6 mt-1 list-disc">
              <li>
                <strong>Ringkasan Pesanan:</strong> Menampilkan nomor invoice, item yang tercantum, subtotal, tanggal jatuh tempo, dan jumlah total.
              </li>
              <li>
                <strong>Metode Pembayaran:</strong> Menampilkan tanggal jatuh tempo, jumlah, dan opsi pembayaran yang tersedia beserta petunjuk langkah demi langkah. Metode pembayaran dapat mencakup:
                <ul className="ml-6 mt-1 list-disc">
                  <li>Transfer Bank</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763110090/bank-transfer.png" />
                  <li>Kartu Kredit/Debit</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763110883/card-payment.png" />
                  <li>E-Wallet</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763110988/ewallet.png" />
                  <li>Pembayaran QR</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763510874/qris-payment.png" />
                  <li>Paylater</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763111181/paylater-payment.png" />
                </ul>
              </li>
            </ul>
          </li>
        </ol>
      </Section>

      {/* ==================== PROPERTY LIST ==================== */}
      <Section id="property-list" title="Daftar Properti">
        <p>
          Bagian <strong>Daftar Properti</strong> memungkinkan Anda mengelola daftar properti yang Anda miliki.
        </p>

        <h4 className="mt-4 font-medium">Tampilan dan Navigasi:</h4>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763692104/property-list.png" />
        <p>Untuk mengakses bagian ini, cukup klik <strong>Daftar Properti</strong> pada bilah tab. Ini akan menampilkan tabel daftar properti.</p>

        <ul className="ml-6 list-disc space-y-1">
          <li>
            Buka bagian <strong>Daftar Properti</strong> dengan memilih <strong>Daftar Properti</strong> pada bilah tab.
          </li>
          <li>
            Sesuaikan jumlah baris yang ditampilkan dengan memilih <strong>10</strong>, <strong>25</strong>, <strong>50</strong>, atau <strong>100</strong> baris.
          </li>
          <li>
            Sesuaikan tampilan tabel dengan memilih kolom mana yang akan ditampilkan menggunakan tombol <strong>Visibilitas Kolom</strong>.
          </li>
          <li>
            Gunakan bilah <strong>Pencarian</strong> untuk memfilter data. Tabel akan menampilkan hanya entri yang cocok dengan kata kunci Anda.
          </li>
          <li>
            Urutkan data dengan mengklik <strong>header kolom</strong> mana pun.
          </li>
        </ul>
      </Section>
    </DocsLayout>
  );
}