import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/create-reservation")({
  head: () => ({
    meta: [
      { title: "Buat Reservasi — Channelku | SinergiMax" },
      { name: "description", content: "Buat reservasi baru secara manual untuk pemesanan langsung, tamu walk-in, atau reservasi offline." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "accessing", label: "Mengakses Buat Reservasi" },
  { id: "room-info", label: "Informasi Kamar" },
  { id: "guest-details", label: "Detail Tamu" },
  { id: "extra-charges", label: "Biaya Tambahan" },
  { id: "taxes-payment", label: "Pajak & Ringkasan Pembayaran" },
  { id: "save-reservation", label: "Simpan Reservasi" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Buat Reservasi" activeTo="/docs/channelku/bookings/create-reservation">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Buat Reservasi</h1>
      <p className="mt-4">
        Halaman <strong>Buat Reservasi</strong> memungkinkan Anda membuat reservasi baru secara manual langsung dari Channel Manager. 
        Fitur ini berguna untuk menangani pemesanan langsung, tamu tanpa reservasi (walk-in), reservasi offline, 
        atau pemesanan yang diterima dari saluran OTA di luar yang terhubung.
      </p>
      <p className="mt-2">
        Melalui halaman ini, Anda dapat memasukkan detail reservasi seperti informasi kamar, data tamu, tanggal menginap, 
        detail pembayaran, pajak, dan biaya tambahan sebelum menyimpan reservasi ke dalam sistem.
      </p>

      <div className="mt-4 rounded-lg border bg-muted/50 p-4">
        <p className="text-sm text-muted-foreground">
          <strong>Catatan:</strong> Untuk melihat versi terbaru dari dokumentasi ini, lihat 
          <a href="#" className="ml-1 text-primary hover:underline">Buat Reservasi V2</a>.
        </p>
      </div>

      {/* ==================== ACCESSING ==================== */}
      <Section id="accessing" title="Mengakses Buat Reservasi">
        <p>Berikut cara mengakses halaman Buat Reservasi:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka menu <strong>Reservasi</strong> dari sidebar.</li>
          <li>Klik <strong>Buat Reservasi</strong>.</li>
        </ol>
      </Section>

      {/* ==================== ROOM INFORMATION ==================== */}
      <Section id="room-info" title="Informasi Kamar">
        <p>
          Bagian <strong>Informasi Kamar</strong> digunakan untuk menentukan detail pemesanan untuk reservasi.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengisi Informasi Kamar:</h4>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778571732/create-booking-room-information.png" />
        <ul className="ml-6 list-disc space-y-1">
          <li>Pilih <strong>Tipe Kamar</strong> untuk reservasi.</li>
          <li>Pilih <strong>Tipe Rate Plan</strong> yang berlaku.</li>
          <li>Pilih <strong>Sub Tipe Kamar</strong> jika tersedia.</li>
          <li>Atur <strong>Tanggal Kedatangan</strong> dan <strong>Tanggal Keberangkatan</strong>.</li>
          <li>Sistem akan secara otomatis menghitung <strong>Total Malam</strong> berdasarkan tanggal yang dipilih.</li>
          <li>Pilih <strong>Status</strong> reservasi.</li>
          <li>Verifikasi informasi <strong>Tanggal Booking</strong>.</li>
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Catatan Informasi Kamar:</p>
          <ul className="ml-6 mt-1 list-disc text-sm text-muted-foreground">
            <li>Hanya kamar dan rate plan yang aktif yang akan muncul dalam daftar pilihan.</li>
            <li>Pastikan kamar dan rate plan yang dipilih telah dipetakan dengan benar dan tersedia.</li>
            <li>Mengubah tanggal kedatangan atau keberangkatan dapat menghitung ulang jumlah malam secara otomatis.</li>
          </ul>
        </div>
      </Section>

      {/* ==================== GUEST DETAILS ==================== */}
      <Section id="guest-details" title="Detail Tamu">
        <p>
          Bagian <strong>Detail Tamu</strong> digunakan untuk memasukkan informasi pribadi dan kontak tamu.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengisi Detail Tamu:</h4>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778571803/create-booking-guest-details.png" />
        <ul className="ml-6 list-disc space-y-1">
          <li>Masukkan <strong>Nama Depan</strong> dan <strong>Nama Belakang</strong> tamu.</li>
          <li>Masukkan <strong>Alamat Email</strong> tamu.</li>
          <li>Pilih <strong>Kode Negara</strong> dan masukkan <strong>Nomor Ponsel</strong>.</li>
          <li>Isi informasi alamat tamu:
            <ul className="ml-6 mt-1 list-disc">
              <li>Negara</li>
              <li>Kota</li>
              <li>Provinsi</li>
              <li>Kode Pos</li>
              <li>Alamat Lengkap</li>
            </ul>
          </li>
          <li>Masukkan <strong>Perkiraan Waktu Tiba</strong> jika tersedia.</li>
          <li>Isi <strong>Detail Penerbangan</strong> jika diperlukan.</li>
          <li>Tambahkan catatan tambahan di kolom <strong>Komentar</strong> jika diperlukan.</li>
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Catatan Detail Tamu:</p>
          <ul className="ml-6 mt-1 list-disc text-sm text-muted-foreground">
            <li>Alamat email akan digunakan untuk notifikasi reservasi dan pengiriman invoice.</li>
            <li>Detail penerbangan dan perkiraan waktu tiba dapat membantu properti mempersiapkan kedatangan tamu.</li>
            <li>Komentar adalah catatan internal terkait reservasi.</li>
          </ul>
        </div>
      </Section>

      {/* ==================== EXTRA CHARGES ==================== */}
      <Section id="extra-charges" title="Biaya Tambahan">
        <p>
          Bagian <strong>Biaya Tambahan</strong> memungkinkan Anda menambahkan biaya atau layanan tambahan ke reservasi 
          (misalnya, Extra bed, Sarapan, Biaya kebersihan, dll.).
        </p>

        <h4 className="mt-4 font-medium">Cara Menambahkan Biaya Tambahan:</h4>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778571807/create-booking-extra-charges.png" />
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tombol <strong>Tambah</strong> di bagian Biaya Tambahan.</li>
          <li>Masukkan deskripsi biaya dan jumlahnya.</li>
          <li>Ulangi proses jika diperlukan beberapa biaya tambahan.</li>
          <li>Sistem akan secara otomatis menghitung jumlah total.</li>
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Contoh:</strong> Biaya tambahan dapat berupa extra bed, sarapan, biaya kebersihan, atau layanan lainnya.
          </p>
        </div>
      </Section>

      {/* ==================== TAXES & PAYMENT ==================== */}
      <Section id="taxes-payment" title="Pajak & Ringkasan Pembayaran">
        <p>
          Bagian <strong>Pajak dan Ringkasan Pembayaran</strong> menampilkan ringkasan keuangan reservasi, termasuk:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          <li>Pajak</li>
          <li>Total Bersih</li>
          <li>Rincian Pembayaran</li>
          <li>Sisa Saldo</li>
        </ul>

        <h4 className="mt-4 font-medium">Cara Mengatur Pajak dan Pembayaran:</h4>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778571813/create-booking-payment-information.png" />
        <ul className="ml-6 list-disc space-y-1">
          <li>Klik <strong>Edit Pajak</strong> jika Anda perlu mengubah konfigurasi pajak.</li>
          <li>Tinjau <strong>Total Bersih</strong> reservasi.</li>
          <li>Masukkan jumlah pembayaran berdasarkan metode pembayaran yang dipilih:
            <ul className="ml-6 mt-1 list-disc">
              <li>Tunai</li>
              <li>Kartu Kredit</li>
              <li>Deposito Langsung</li>
              <li>Cek</li>
              <li>Transfer Bank</li>
              <li>PayPal</li>
            </ul>
          </li>
          <li>Verifikasi sisa <strong>Jumlah Hutang</strong> sebelum menyimpan reservasi.</li>
        </ul>
      </Section>

      {/* ==================== SAVE RESERVATION ==================== */}
      <Section id="save-reservation" title="Simpan Reservasi">
        <p>
          Setelah melengkapi semua detail reservasi, Anda dapat memilih salah satu opsi penyimpanan yang tersedia:
        </p>

        <ol className="ml-6 list-decimal space-y-3">
          <li>
            <strong>Lengkapi semua informasi reservasi yang diperlukan.</strong>
          </li>
          <li>
            <strong>Pilih opsi penyimpanan yang diinginkan:</strong>
            <Figure label=""
            src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778571844/save-booking-options.png" />
            <ul className="ml-6 mt-1 list-disc">
              <li>
                <strong>Simpan & Kirim Invoice ke Hotel dan Tamu:</strong> 
                Menyimpan reservasi dan mengirim invoice ke kedua alamat email hotel dan tamu.
              </li>
              <li>
                <strong>Simpan & Kirim Invoice ke Hotel:</strong> 
                Menyimpan reservasi dan mengirim invoice hanya ke hotel.
              </li>
              <li>
                <strong>Simpan dan Jangan Kirim Invoice:</strong> 
                Menyimpan reservasi tanpa mengirim email invoice apa pun.
              </li>
            </ul>
          </li>
          <li>Reservasi akan dibuat dan disimpan di <strong>Daftar Reservasi</strong>.</li>
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Buat Reservasi:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tipe Kamar atau Rate Plan tidak muncul</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kamar dan rate plan aktif di sistem. Verifikasi bahwa konfigurasi pemetaan kamar telah selesai dengan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat menyimpan reservasi</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua kolom wajib diisi dengan benar. Periksa tanggal kedatangan dan keberangkatan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Email invoice tidak diterima</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi alamat email tamu dimasukkan dengan benar. Periksa folder spam atau sampah.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Jumlah total tidak sesuai</dt>
              <dd className="ml-4 text-muted-foreground">
                Tinjau konfigurasi pajak dan biaya tambahan sebelum menyimpan reservasi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}