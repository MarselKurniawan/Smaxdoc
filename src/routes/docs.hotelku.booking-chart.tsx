import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/booking-chart")({
  head: () => ({
    meta: [
      { title: "Bagan Pemesanan — Hotelku | SinergiMax" },
      { name: "description", content: "Kelola reservasi, pemeliharaan kamar, pemesanan grup, dan berbagai tindakan reservasi." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "create-reservation", label: "Buat Reservasi" },
  { id: "create-maintenance", label: "Buat Pemeliharaan Kamar" },
  { id: "create-group", label: "Buat Pemesanan Grup" },
  { id: "edit-reservation", label: "Edit Reservasi" },
  { id: "add-payment", label: "Tambah Pembayaran" },
  { id: "add-extra", label: "Tambah Ekstra" },
  { id: "add-comment", label: "Tambah Komentar" },
  { id: "change-status", label: "Ubah Status" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Bagan Pemesanan" activeTo="/docs/hotelku/booking-chart">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Bagan Pemesanan</h1>
      <p className="mt-4">
        Halaman <strong>Bagan Pemesanan</strong> menyediakan tampilan visual dari semua reservasi, ketersediaan kamar, 
        dan status kamar untuk properti Anda. Ini adalah alat utama untuk mengelola pemesanan harian dan operasional kamar.
      </p>
      <Figure label=""
      src="/images/Booking Chart/00._preview_eoengv.png" />

      {/* ==================== CREATE RESERVATION ==================== */}
      <Section id="create-reservation" title="Buat Reservasi">
      <Figure label=""
      src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532418/01._how_to_create_reservation_-_1_opclow.png" />
      <Figure label=""
      src="/images/Booking Chart/01._how_to_create_reservation_-_2_gahaer.png" />
        <p>Berikut cara membuat reservasi baru dari Bagan Pemesanan:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik <strong>Buat Reservasi</strong> pada <strong>Header Bagan Pemesanan</strong>.</li>
          <li>Isi <strong>formulir pendaftaran</strong>.</li>
          <li>Klik <strong>Tambah Reservasi</strong>.</li>
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>Harap periksa kembali semua detail telah diisi dengan benar.</li>
            <li>Klik <strong>Tampilkan Harga</strong> jika Anda ingin mengubah harga.</li>
          </ul>
        </div>
      </Section>

      {/* ==================== CREATE MAINTENANCE ==================== */}
      <Section id="create-maintenance" title="Buat Pemeliharaan Kamar">
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532361/02._how_to_create_room_maintenance_-_1_w2xghb.png" />
        <Figure label=""
        src="/images/Booking Chart/02._how_to_create_room_maintenance_-_2_yjbvkw.png" />
        <p>Berikut cara membuat pemeliharaan kamar:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik <strong>Pemeliharaan Kamar</strong> pada <strong>Header Bagan Pemesanan</strong>.</li>
          <li>Pilih <strong>periode</strong> (check-in - check-out).</li>
          <li>Klik <strong>Tambah Reservasi</strong>.</li>
        </ol>
      </Section>

      {/* ==================== CREATE GROUP ==================== */}
      <Section id="create-group" title="Buat Pemesanan Grup">
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532366/03._how_to_create_group_booking_-_1_ls2va2.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532369/03._how_to_create_group_booking_-_2_t2pcrv.png" />
        <p>Berikut cara membuat pemesanan grup:</p>

        <h4 className="mt-4 font-medium">Langkah 1:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik <strong>Buat Grup</strong> pada <strong>Header Bagan Pemesanan</strong>.</li>
          <li>Isi <strong>detail</strong>.</li>
          <li>Klik <strong>Buat Grup</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532371/03._step_1_ojonua.png" />
        </ol>

        <h4 className="mt-4 font-medium">Langkah 2:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tab <strong>Blokir Kalender</strong>.</li>
          <li>Pilih <strong>Tipe Kamar</strong>, <strong>Check In</strong>, <strong>Check Out</strong>, <strong>Rateplans</strong>, dan <strong>Jumlah Kamar</strong>.</li>
          <li>Klik <strong>Cari</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532374/03._step_2_akkfkd.png" />
        </ol>

        <h4 className="mt-4 font-medium">Langkah 3:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Setelah itu, jika kamar yang Anda cari tersedia, itu akan muncul seperti yang ditunjukkan pada gambar.</li>
          <li>Anda dapat mengubah harga dengan <strong>input manual</strong>.</li>
          <li>Klik <strong>Blokir Tanggal Tersebut</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532377/03._step_3_hmmyb2.png" />
        </ol>

        <h4 className="mt-4 font-medium">Langkah 4:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik <strong>Pilih</strong> lalu klik <strong>Konfirmasi</strong> untuk mengubah status pemesanan grup Anda.</li>
          <li>Setelah itu, <strong>refresh browser</strong> Anda.</li>
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan Penting:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>Pastikan semua <strong>Status Pemesanan</strong> berubah menjadi <strong>Dikonfirmasi</strong> dan <strong>Status</strong> berubah menjadi <strong>Diambil</strong>.</li>
            <li>Status pemesanan <strong>Belum Dikonfirmasi</strong> berarti <strong>belum memblokir kamar</strong> di kalender atau <strong>belum mengurangi inventaris</strong>.</li>
          </ul>
        </div>
      </Section>

      {/* ==================== EDIT RESERVATION ==================== */}
      <Section id="edit-reservation" title="Edit Reservasi">
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532380/04._how_to_edit_reservation_-_1_ixol22.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532382/04._how_to_edit_reservation_-_2_mu5wpc.png" />
        <h4 className="font-medium">Langkah 1:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik pada <strong>reservasi</strong> yang ingin Anda edit.</li>
          <li>Klik <strong>Edit Reservasi</strong>.</li>
          <Figure label=""
          src="/images/Booking Chart/04._step_1_rsclhn.png" />
        </ol>

        <h4 className="mt-4 font-medium">Langkah 2:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Anda dapat mengedit reservasi seperti <strong>Invoice/Formulir Pendaftaran</strong>, <strong>Detail Tamu</strong>, <strong>Komentar</strong>, <strong>Ekstra</strong>, <strong>Pembayaran</strong>, <strong>Kartu Kredit</strong>, <strong>Kirim Email</strong>, <strong>Unggahan</strong>, dan <strong>Audit</strong>.</li>
          <li>Klik <strong>Perbarui Reservasi</strong> setelah selesai mengedit.</li>
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>Anda dapat memeriksa <strong>riwayat</strong> reservasi dari tab <strong>Audit</strong>.</li>
            <li>Tab <strong>Kartu Kredit</strong> hanya aktif jika menggunakan <strong>Layanan Payku</strong>.</li>
            <li>Kami menyarankan untuk <strong>tidak mengedit</strong> reservasi yang berasal dari <strong>Agen Perjalanan Online</strong>.</li>
          </ul>
        </div>
      </Section>

      {/* ==================== ADD PAYMENT ==================== */}
      <Section id="add-payment" title="Tambah Pembayaran">
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532387/05._how_to_add_payment_-_1_caswcm.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532390/05._how_to_add_payment_-_2_jvifkv.png" />
        <h4 className="font-medium">Langkah 1:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik pada <strong>reservasi</strong> yang ingin Anda tambahkan Pembayaran.</li>
          <li>Klik <strong>Tambah Pembayaran</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532392/05._step_1_tncrij.png" />
        </ol>

        <h4 className="mt-4 font-medium">Langkah 2:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pilih <strong>Jenis Pembayaran</strong>.</li>
          <li>Isi <strong>Jumlah Pembayaran</strong>.</li>
          <li>Klik <strong>Tambah Pembayaran</strong>.</li>
          <li>Klik <strong>Perbarui Reservasi</strong> setelah selesai dan <strong>Refresh</strong>.</li>
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>Saat mengisi <strong>Jumlah Pembayaran</strong>, <strong>tanpa mata uang</strong>, <strong>tanpa pemisah ribuan</strong>, atau karakter khusus apa pun, dan gunakan <strong>titik '.'</strong> untuk desimal.</li>
            <li><strong>Tambah Pembayaran</strong> juga dapat diakses dari <strong>Edit Reservasi</strong>.</li>
          </ul>
        </div>
      </Section>

      {/* ==================== ADD EXTRA ==================== */}
      <Section id="add-extra" title="Tambah Ekstra">
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532396/06._how_to_add_extra_-_1_ttd2zb.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532398/06._how_to_add_extra_-_2_kjdc4k.png" />
        <h4 className="font-medium">Langkah 1:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik pada <strong>reservasi</strong> yang ingin Anda tambahkan Ekstra.</li>
          <li>Klik <strong>Tambah Ekstra</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532406/06._step_1_x8sflx.png" />
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532403/06._step_1_update_obxb6j.png" />
        </ol>

        <h4 className="mt-4 font-medium">Langkah 2:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik <strong>Tambah</strong>.</li>
          <li>Klik <strong>Pilih</strong> untuk memilih item atau Anda dapat mengisi secara manual dengan mengetik di kotak <strong>Biaya Tambahan</strong>.</li>
          <li>Harap periksa kembali <strong>QTY</strong>, <strong>Jumlah</strong>, dan <strong>Total</strong>.</li>
          <li>Klik <strong>Perbarui Reservasi</strong> setelah selesai dan <strong>Refresh</strong>.</li>
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm">
            <li><strong>Tambah Ekstra</strong> juga dapat diakses dari <strong>Edit Reservasi</strong>.</li>
          </ul>
        </div>
      </Section>

      {/* ==================== ADD COMMENT ==================== */}
      <Section id="add-comment" title="Tambah Komentar">
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532421/07._how_to_add_comment_-_1_zzkjae.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532424/07._how_to_add_comment_-_2_zeril6.png" />
        <h4 className="font-medium">Langkah 1:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik pada <strong>reservasi</strong> yang ingin Anda tambahkan Komentar.</li>
          <li>Klik <strong>Tambah Komentar</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532408/07._step_1_p5yjsb.png" />
        </ol>

        <h4 className="mt-4 font-medium">Langkah 2:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Masukkan <strong>komentar</strong> yang diinginkan.</li>
          <li><strong>Ubah Tampilan Warna</strong> berfungsi untuk mengubah warna tampilan reservasi di Bagan Pemesanan.</li>
          <li>Jika Anda mencentang <strong>Check-out Terlambat</strong>, reservasi akan ditandai dengan <strong>ikon bintang</strong> di Bagan Pemesanan.</li>
          <li>Klik <strong>Perbarui Reservasi</strong> setelah selesai dan <strong>Refresh</strong>.</li>
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm">
            <li><strong>Komentar Pribadi</strong> akan muncul di daftar pemesanan <strong>Sistem Front Office</strong> dengan <strong>tanda tanya merah</strong>.</li>
            <li><strong>Komentar Tamu</strong> akan muncul di daftar pemesanan <strong>Sistem Front Office</strong> dengan <strong>tanda tanya oranye</strong>.</li>
            <li><strong>Tambah Komentar</strong> juga dapat diakses dari <strong>Edit Reservasi</strong>.</li>
          </ul>
        </div>
      </Section>

      {/* ==================== CHANGE STATUS ==================== */}
      <Section id="change-status" title="Ubah Status">
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532411/08._how_to_change_status_-_1_uuazbl.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532426/08._how_to_change_status_-_2_zk0xni.png" />
        <h4 className="font-medium">Langkah 1:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik pada <strong>reservasi</strong> yang ingin Anda Ubah Status.</li>
          <li>Klik <strong>Ubah Status</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742532414/08._step_1_warqpe.png" />
        </ol>

        <h4 className="mt-4 font-medium">Langkah 2:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pilih status yang Anda inginkan:
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Check In:</strong> Reservasi akan ditandai dengan <strong>lingkaran hijau</strong> di bagan pemesanan.</li>
              <li><strong>Check Out:</strong> Reservasi akan ditandai dengan <strong>lingkaran merah</strong> di bagan pemesanan.</li>
              <li><strong>Tidak Hadir:</strong> Reservasi akan ditandai sebagai <strong>transparan</strong> di bagan pemesanan.</li>
              <li><strong>Check-out Awal:</strong> Reservasi akan ditandai dengan <strong>lingkaran merah</strong> di bagan pemesanan dan akan <strong>melepas tugas</strong>.</li>
              <li><strong>Check-out Awal + Perbarui Ketersediaan:</strong> Reservasi akan ditandai dengan <strong>lingkaran merah</strong> di bagan pemesanan, akan <strong>melepas tugas</strong>, dan <strong>inventaris akan diperbarui</strong>.</li>
            </ul>
          </li>
          <li>Klik <strong>Perbarui Status</strong> setelah selesai.</li>
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm">
            <li><strong>Ubah Status</strong> juga dapat diakses dari <strong>Edit Reservasi</strong> atau dengan <strong>Klik Kanan</strong> pada reservasi yang ingin Anda ubah.</li>
            <li><strong>Check-out Awal</strong> hanya dapat dilakukan pada <strong>hari pertama</strong> dari tanggal check-out (H-1 tanggal check-out).</li>
          </ul>
        </div>
      </Section>
    </DocsLayout>
  );
}