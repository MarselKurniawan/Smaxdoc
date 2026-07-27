import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/promotions-ota")({
  head: () => ({
    meta: [
      { title: "Promosi OTA — Konten OTA | SinergiMax" },
      { name: "description", content: "Buat dan kelola promosi atau diskon yang didistribusikan melalui OTA seperti Booking.com, Airbnb, Agoda, Expedia, dan Google Hotels." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "add-bulk", label: "Tambah Promosi Massal" },
  { id: "promotion-details", label: "Detail Promosi" },
  { id: "edit-promotions", label: "Edit Promosi" },
  { id: "set-status", label: "Atur Status" },
  { id: "set-promotion-status", label: "Atur Status Promosi" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Promosi OTA" activeTo="/docs/channelku/ota-content/promotions-ota">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Promosi OTA</h1>
      <p className="mt-4">
        Halaman ini memungkinkan Anda untuk membuat dan mengelola <strong>promosi</strong> atau <strong>diskon</strong> yang didistribusikan 
        melalui <strong>Online Travel Agencies (OTA)</strong> seperti Booking.com, Airbnb, Agoda, Expedia, dan Google Hotels.
      </p>
      <p className="mt-2">
        Dari halaman ini, Anda dapat mengonfigurasi detail promosi, mengontrol visibilitas, dan mengelola status promosi di berbagai OTA.
      </p>
      <p className="mt-2">
        Untuk mengakses halaman ini, buka <strong>Konten OTA &gt; Promosi OTA</strong>.
      </p>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1767341866/menu-promotions-ota_jzacgi.png" />

      {/* ==================== ADD BULK PROMOTIONS ==================== */}
      <Section id="add-bulk" title="Tambah Promosi Massal">
        <p>Gunakan fitur ini untuk membuat promosi dan menerapkannya ke beberapa OTA sekaligus.</p>

        <ol className="ml-6 list-decimal space-y-2">
          <li>Klik tombol <strong>Tambah Promosi Massal</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1767341865/add-bulk-promo_li6mcc.png" />
          <li>
            Formulir pop-up akan muncul. Lengkapi bidang-bidang yang diperlukan di bawah ini:
            <ul className="ml-6 mt-1 list-disc">
              <li>
                <strong>Jenis Promosi:</strong> Pilih jenis promosi, seperti <strong>Dasar</strong>, <strong>Menit Terakhir</strong>, atau <strong>Penawaran Khusus</strong>.
              </li>
              <li>
                <strong>Nama Promosi:</strong> Masukkan nama promosi.
              </li>
              <li>
                <strong>Diskon:</strong> Tentukan persentase diskon yang akan diterapkan.
              </li>
              <li>
                <strong>Rentang Tanggal Diskon:</strong> Pilih rentang tanggal menginap selama diskon akan berlaku dengan menentukan tanggal mulai dan akhir.
              </li>
              <li>
                <strong>Mulai dan Akhir Waktu Pemesanan:</strong> Tentukan periode pemesanan di mana tamu dapat melakukan reservasi menggunakan promosi ini.
              </li>
              <li>
                <strong>Mulai dan Akhir Tanggal Pengecualian:</strong> Pilih tanggal tertentu yang akan dikecualikan dari promosi, jika ada.
              </li>
              <li>
                <strong>Malam Minimum:</strong> Masukkan jumlah malam minimum yang diperlukan untuk memenuhi syarat promosi.
              </li>
              <li>
                <strong>Malam Maksimum:</strong> Masukkan jumlah malam maksimum yang diizinkan untuk promosi.
              </li>
              <li>
                <strong>Pilih Harga:</strong> Pilih rate plan yang akan memenuhi syarat untuk promosi ini. Beberapa rate plan dapat dipilih.
              </li>
              <li>
                <strong>Pilih OTA:</strong> Setiap OTA menyediakan bidang konfigurasi tambahan yang spesifik untuk aturan promosinya. Untuk melihat dan mengonfigurasi bidang ini, klik tombol <strong>Tampilkan Opsi</strong> pada OTA yang dipilih.
                <ul className="ml-6 mt-1 list-disc">
                  <li>
                    <strong>Expedia:</strong> Konfigurasikan pengaturan promosi untuk Expedia.
                    <ul className="ml-6 mt-1 list-disc">
                      <li><strong>Hari Awal Burung:</strong> Jumlah hari di muka yang diperlukan untuk memenuhi syarat promosi</li>
                      <li><strong>Hari Menit Terakhir:</strong> Jumlah hari sebelum check-in untuk kelayakan menit terakhir.</li>
                      <li><strong>Jenis Diskon:</strong> Mendefinisikan bagaimana diskon diterapkan antara diskon tunggal atau hari dalam minggu. Memilih opsi "DayofWeek" akan menampilkan kotak centang hari dalam seminggu.</li>
                      <li><strong>Deal Khusus Anggota:</strong> Pilih ya untuk membatasi promosi hanya untuk anggota Expedia.</li>
                      <li><strong>Deal Seluler</strong></li>
                    </ul>
                  </li>
                  <li>
                    <strong>Agoda:</strong> Konfigurasikan pengaturan promosi untuk Agoda.
                    <ul className="ml-6 mt-1 list-disc">
                      <li><strong>Pemesanan Pada:</strong> Kelayakan tanggal pemesanan.</li>
                      <li><strong>Check-in Pada:</strong> Kelayakan tanggal check-in.</li>
                      <li><strong>Menginap Pada:</strong> Kelayakan tanggal menginap.</li>
                      <li><strong>Saluran Target:</strong> Saluran pemesanan target.</li>
                      <li><strong>Segmen Pelanggan:</strong> Mendefinisikan segmen pelanggan yang memenuhi syarat.</li>
                      <li><strong>Dapat Ditumpuk:</strong> Memungkinkan promosi digabungkan dengan promosi lain.</li>
                      <li><strong>Kamar Minimum:</strong> Jumlah kamar minimum yang diperlukan.</li>
                      <li><strong>Hari Menit Terakhir:</strong> Periode kelayakan untuk penawaran menit terakhir.</li>
                      <li><strong>Malam Gratis:</strong> Penawaran malam gratis berdasarkan durasi menginap.</li>
                      <li><strong>Jenis Diskon:</strong> Jenis diskon yang diterapkan</li>
                      <li><strong>Jenis Malam:</strong> Menentukan kategori malam yang berlaku.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Booking.com:</strong> Konfigurasikan pengaturan promosi untuk Booking.com.
                    <ul className="ml-6 mt-1 list-disc">
                      <li><strong>Hari Kerja Aktif:</strong> Pilih hari kerja yang berlaku.</li>
                      <li><strong>Tanggal Tambahan:</strong> Rentang tanggal tambahan yang memenuhi syarat.</li>
                      <li><strong>Unit Menit Terakhir:</strong> Mendefinisikan unit waktu untuk penawaran menit terakhir.</li>
                      <li><strong>Nilai Menit Terakhir:</strong> Nilai diskon yang diterapkan untuk pemesanan menit terakhir</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Google:</strong> Konfigurasikan pengaturan promosi untuk Google Hotels.
                    <ul className="ml-6 mt-1 list-disc">
                      <li><strong>Pemesanan Pada:</strong> Tanggal pemesanan yang memenuhi syarat.</li>
                      <li><strong>Hari Check-in:</strong> Hari check-in yang diizinkan.</li>
                      <li><strong>Hari Check-out:</strong> Hari check-out yang diizinkan.</li>
                      <li><strong>Hari Awal Burung:</strong> Persyaratan pemesanan di muka.</li>
                      <li><strong>Hari Menit Terakhir:</strong> Kelayakan pemesanan menit terakhir.</li>
                      <li><strong>Mulai / Akhir Tanggal Check-in:</strong> Rentang tanggal check-in yang valid.</li>
                      <li><strong>Mulai / Akhir Tanggal Check-out:</strong> Rentang tanggal check-out yang valid.</li>
                      <li><strong>Dapat Ditumpuk:</strong> Memungkinkan promosi digabungkan dengan yang lain.</li>
                      <li><strong>Malam yang Diterapkan:</strong> Jumlah malam yang berlaku untuk promosi.</li>
                      <li><strong>Negara Pengguna:</strong> Negara target tamu.</li>
                      <li><strong>Perangkat:</strong> Jenis perangkat target (mis., seluler atau desktop).</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Airbnb:</strong> Konfigurasikan pengaturan promosi untuk Airbnb.
                    <ul className="ml-6 mt-1 list-disc">
                      <li><strong>Perubahan Harga:</strong> Jumlah penyesuaian harga.</li>
                      <li><strong>Jenis Aturan:</strong> Mendefinisikan jenis aturan promosi.</li>
                      <li><strong>Ambang Batas Satu:</strong> Persyaratan minimum untuk mengaktifkan promosi.</li>
                      <li><strong>Jenis Perubahan Harga:</strong> Mendefinisikan apakah perubahan adalah persentase atau nilai tetap</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Klik <strong>Buat Promosi</strong> untuk menambahkan promosi massal baru.</li>
        </ol>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1767341866/create-promo_txg3vy.png" />
      </Section>

      {/* ==================== PROMOTION DETAILS ==================== */}
      <Section id="promotion-details" title="Detail Promosi">
        <h4 className="font-medium">Detail Kamar:</h4>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1767341867/room-details_zg8vkc.png" />
        <p>
          Arahkan kursor ke ikon <strong>Detail Kamar</strong> untuk melihat ringkasan tipe kamar yang termasuk dalam promosi.
        </p>
      </Section>

      {/* ==================== EDIT PROMOTIONS ==================== */}
      <Section id="edit-promotions" title="Edit Promosi">
        <p>Untuk memperbarui promosi yang ada:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tombol <strong>Edit</strong> untuk OTA yang ingin Anda ubah.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1767341866/edit-promo-button_j55nuh.png" />
          <li>Formulir pop-up akan muncul. Perbarui bidang yang diperlukan sesuai kebutuhan.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1767341867/edit-promo-view_gnbqqw.png" />
          <li>Klik <strong>Perbarui Promosi</strong> untuk menyimpan perubahan.</li>
        </ol>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1767341864/update-promo_ezm83y.png" />
      </Section>

      {/* ==================== SET STATUS ==================== */}
      <Section id="set-status" title="Atur Status">
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1767341868/set-status-ota_valkea.png" />
        <p>
          Anda dapat mengaktifkan atau menonaktifkan promosi per OTA menggunakan <strong>tombol alih</strong>. 
          Ini memungkinkan Anda mengaktifkan promosi di OTA tertentu sambil menonaktifkannya di OTA lain.
        </p>
      </Section>

      {/* ==================== SET PROMOTION STATUS ==================== */}
      <Section id="set-promotion-status" title="Atur Status Promosi">
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1767341865/set-status-promo_yw0rsn.png" />
        <p>
          Opsi ini mengontrol <strong>visibilitas keseluruhan</strong> promosi di semua OTA.
        </p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Tampilkan:</strong> Promosi <strong>aktif</strong> dan terlihat di semua OTA yang terhubung.
          </li>
          <li>
            <strong>Sembunyikan:</strong> Promosi <strong>dinonaktifkan</strong> di semua OTA sekaligus.
          </li>
        </ul>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan Penting:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>
              Gunakan opsi <strong>Tampilkan</strong> untuk mengaktifkan promosi secara global di semua OTA yang terhubung.
            </li>
            <li>
              Gunakan opsi <strong>Sembunyikan</strong> untuk menonaktifkan promosi secara global di semua OTA sekaligus.
            </li>
            <li>
              Untuk kontrol yang lebih granular, gunakan <strong>tombol alih</strong> per OTA di bagian <strong>Atur Status</strong>.
            </li>
          </ul>
        </div>
      </Section>
    </DocsLayout>
  );
}