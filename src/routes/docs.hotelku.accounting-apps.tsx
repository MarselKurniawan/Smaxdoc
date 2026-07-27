import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/accounting-apps")({
  head: () => ({
    meta: [
      { title: "Aplikasi Akuntansi — Hotelku | SinergiMax" },
      { name: "description", content: "Kelola transaksi keuangan dan integrasi dengan platform pihak ketiga seperti Jurnal.id." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "send-invoice", label: "Kirim Invoice ke Jurnal.id" },
  { id: "manage-visibility", label: "Kelola Visibilitas Chart of Account" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Aplikasi Akuntansi" activeTo="/docs/hotelku/accounting-apps">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Aplikasi Akuntansi</h1>
      <p className="mt-4">
        <strong>Aplikasi Akuntansi</strong> digunakan untuk mengelola transaksi keuangan dan integrasi dengan platform pihak ketiga 
        seperti <strong>Jurnal.id</strong>. Salah satu fungsi intinya adalah <strong>mengirim data invoice</strong> langsung ke akun Jurnal Anda 
        dengan memilih <strong>bagan akun</strong> dan <strong>filter</strong> yang relevan.
      </p>

      {/* ==================== SEND INVOICE ==================== */}
      <Section id="send-invoice" title="Kirim Invoice ke Jurnal.id">
        <p>Berikut cara mengirim invoice ke Jurnal.id:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Buka <strong>Sistem Back Office &gt; menu Aplikasi Akuntansi</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742528972/01._how_to_set_invoice_jurnal_id_-_1_pb1nek.png" />
          <li>Pilih <strong>Rentang Tanggal</strong> yang diinginkan. Anda dapat memfilter data berdasarkan:</li>
            <ul className="ml-6 list-disc">
              <li><strong>Tanggal Check-in</strong></li>
              <li><strong>Tanggal Check-out</strong></li>
              <li><strong>Reservasi Dibuat</strong></li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742528973/01._how_to_set_invoice_jurnal_id_-_2_kuobh8.png" />
            </ul>
          <li>Pilih <strong>Bagan Akun</strong> yang sesuai untuk mengaitkan invoice.</li>
          <li>Klik <strong>Kirim ke Jurnal</strong> untuk melanjutkan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742528979/01._how_to_set_invoice_jurnal_id_-_3_vz9yvu.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Kirim Invoice ke Jurnal.id:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Invoice tidak terkirim ke Jurnal.id</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan integrasi Jurnal.id Anda <strong>aktif dan terautentikasi</strong>. Periksa kembali bahwa Anda telah memilih 
                <strong>Bagan Akun</strong> yang valid. Coba segarkan halaman dan pilih ulang rentang tanggal dan filter.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Daftar Bagan Akun kosong atau tidak lengkap</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan akun Jurnal.id Anda memiliki <strong>produk aktif</strong> yang dikonfigurasi. Jika sinkronisasi baru saja dilakukan, 
                tunggu beberapa menit dan segarkan halaman. Gunakan tombol <strong>Pengaturan</strong> untuk mengaktifkan akun yang tersembunyi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol "Kirim ke Jurnal" tidak merespons</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa koneksi internet Anda. Pastikan semua filter yang diperlukan (tanggal dan akun) dipilih sebelum mengklik. 
                Coba bersihkan <strong>cache browser</strong> atau gunakan browser lain.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Data invoice yang dikirim tidak muncul di Jurnal.id</dt>
              <dd className="ml-4 text-muted-foreground">
                Masuk ke dasbor Jurnal.id Anda dan periksa di bawah <strong>kategori akun yang benar</strong>. Beberapa invoice mungkin tertunda 
                jika dikirim dalam jumlah besar — tunggu dan periksa kembali setelah beberapa menit. Jika masih tidak terlihat, 
                hubungi dukungan Bookandlink untuk mengonfirmasi keberhasilan pengiriman.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== MANAGE VISIBILITY ==================== */}
      <Section id="manage-visibility" title="Kelola Visibilitas Chart of Account">
        <p>
          Jika terlalu banyak akun yang terdaftar, Anda dapat <strong>menyembunyikannya</strong> dan hanya menampilkan beberapa akun.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengelola Visibilitas:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tombol <strong>Pengaturan</strong>.</li>
          <li>Pilih akun yang ingin Anda <strong>sembunyikan</strong>.</li>
          <li>Pilih <strong>Nonaktifkan</strong>, lalu klik <strong>Perbarui</strong>.</li>
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>
              Daftar <strong>Bagan Akun</strong> di Bookandlink merujuk pada <strong>produk akun</strong> yang terdaftar di <strong>Jurnal.id</strong>.
            </li>
            <li>
              Pastikan akun Jurnal Anda <strong>terintegrasi dengan benar</strong> dan diberi wewenang untuk menerima data invoice dari Bookandlink.
            </li>
          </ul>
        </div>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742528980/01._how_to_set_invoice_jurnal_id_-_5_te2f7w.png" />
      </Section>
    </DocsLayout>
  );
}