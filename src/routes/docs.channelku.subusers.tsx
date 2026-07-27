import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/subusers")({
  head: () => ({
    meta: [
      { title: "Sub-pengguna — Akun | SinergiMax" },
      { name: "description", content: "Buat dan kelola sub-pengguna di bawah akun utama, kontrol akses, izin, dan status." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "add-new", label: "Tambah Sub-pengguna Baru" },
  { id: "list-of-subusers", label: "Daftar Sub-pengguna" },
  { id: "edit-users", label: "Edit Pengguna" },
  { id: "change-status", label: "Ubah Status Pengguna" },
  { id: "search-data", label: "Cari Data" },
  { id: "export-data", label: "Ekspor Data" },
  { id: "customize-column", label: "Sesuaikan Kolom" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Sub-pengguna" activeTo="/docs/channelku/account/subusers">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Sub-pengguna</h1>
      <p className="mt-4">
        Fitur ini memungkinkan Anda untuk membuat dan mengelola <strong>sub-pengguna</strong> di bawah akun utama Anda. 
        Anda dapat mengontrol akses mereka, mengelola izin mereka, dan mengalihkan status aktif atau tidak aktif sesuai kebutuhan. 
        Untuk mengakses halaman ini, buka <strong>Akun &gt; Sub-pengguna</strong>.
      </p>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763099245/menu-account-subusers.png" />

      {/* ==================== ADD NEW SUBUSERS ==================== */}
      <Section id="add-new" title="Tambah Sub-pengguna Baru">
        <p>Untuk menambahkan sub-pengguna baru ke akun Anda, ikuti langkah-langkah berikut:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Klik tombol <strong>Tambah Sub-pengguna Baru</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763099364/add-subusers.png" />
          <li>
            Jendela pop-up akan muncul. Isi bidang-bidang berikut:
                      <Figure label=""
                      src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763099497/pop-up-add.png" />
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Nama Pengguna</strong></li>
              <li>
                <strong>Properti:</strong> Pilih satu atau beberapa properti dari daftar yang tersedia.
              </li>
              <li>
                <strong>Aktifkan 2FA:</strong> Centang kotak untuk mengaktifkan autentikasi dua faktor Google untuk sub-pengguna.
              </li>
              <li>
                <strong>Aktifkan Aplikasi Android/iOS:</strong> Centang kotak untuk memberikan akses ke aplikasi seluler.
              </li>
              <li>
                <strong>Menu:</strong> Pilih antara tipe menu <strong>Standar</strong> atau <strong>Pemilik</strong>.
              </li>
              <li>
                <strong>Dasbor:</strong> Pilih antara dasbor default atau dasbor khusus dengan konten yang dipilih.
              </li>
              <li>
                <strong>Sembunyikan Menu Nonaktif:</strong> Centang kotak untuk memilih apakah menu yang dinonaktifkan harus ditampilkan atau disembunyikan di tampilan sub-pengguna.
              </li>
              <li>
                <strong>Pilih Menu:</strong> Pilih menu dan fitur yang dapat diakses oleh sub-pengguna. Gunakan tombol <strong>Tampilkan/Sembunyikan</strong> untuk menampilkan/menyembunyikan menu terperinci, lalu pilih item spesifik yang ingin Anda berikan aksesnya. Jika perlu, Anda dapat membatalkan pilihan semua fitur dalam grup menu dengan mencentang kotak di header grup:
                <ul className="ml-6 mt-1 list-disc">
                  <li>Channel Manager</li>
                  <li>Front Office System</li>
                  <li>Back Office System</li>
                  <li>Booking Engine</li>
                  <li>Booking Details</li>
                  <li>General Setting</li>
                  <li>Others Menu</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Klik <strong>Tambah Sub-pengguna</strong> untuk menyimpan dan membuat sub-pengguna baru.</li>
        </ol>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763101255/button-add.png" />
      </Section>

      {/* ==================== LIST OF SUBUSERS ==================== */}
      <Section id="list-of-subusers" title="Daftar Sub-pengguna">
        <p>
          Daftar <strong>Sub-pengguna</strong> dibagi menjadi dua bagian: <strong>Aktif</strong> dan <strong>Tidak Aktif</strong>. 
          Kedua bagian ditampilkan dalam tampilan tabel untuk memudahkan pengelolaan.
        </p>

        <h4 className="mt-4 font-medium">Tampilan dan Navigasi:</h4>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763101515/sub-users-list.png" />
        <ul className="ml-6 list-disc space-y-1">
          <li>
            Beralih antara bagian <strong>Aktif</strong> dan <strong>Tidak Aktif</strong> menggunakan menu tab.
          </li>
          <li>
            Tabel dapat menampilkan <strong>10</strong>, <strong>20</strong>, atau <strong>50</strong> baris per halaman. 
            Anda dapat menyesuaikannya menggunakan dropdown <strong>Tampilkan Baris</strong>.
          </li>
          <li>
            Gunakan fitur <strong>Ekspor Data</strong> untuk mengunduh data sub-pengguna. Lihat <strong>Ekspor Data</strong> untuk informasi lebih lanjut.
          </li>
          <li>
            Sesuaikan kolom mana yang muncul dalam tabel menggunakan pengaturan <strong>Kolom</strong>. Lihat <strong>Sesuaikan Kolom</strong> untuk detail lebih lanjut.
          </li>
          <li>
            Gunakan bilah <strong>Pencarian</strong> untuk menemukan sub-pengguna dengan cepat berdasarkan kata kunci.
          </li>
        </ul>
      </Section>

      {/* ==================== EDIT USERS ==================== */}
      <Section id="edit-users" title="Edit Pengguna">
        <p>Untuk memperbarui informasi sub-pengguna:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Di kolom <strong>tindakan</strong>, klik tombol <strong>Edit</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763101684/edit-button.png" />
          <li>Jendela pop-up akan muncul. Anda dapat mengubah pembaruan apa pun di semua bidang.</li>
          <li>Klik tombol <strong>Perbarui Sub-pengguna</strong> untuk menerapkan perubahan.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763101717/edit-sub-users.png" />
        </ol>
      </Section>

      {/* ==================== CHANGE STATUS ==================== */}
      <Section id="change-status" title="Ubah Status Pengguna">
        <p>
          Sub-pengguna yang baru dibuat <strong>tidak aktif</strong> secara default. Anda dapat mengubah status mereka kapan saja.
        </p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka bagian <strong>Aktif</strong> atau <strong>Tidak Aktif</strong>.</li>
          <li>Di kolom <strong>Tindakan</strong>, klik tombol <strong>Ubah Status</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763102490/change-status.png" />
          <li>Jika pop-up konfirmasi muncul, klik <strong>OK</strong> untuk melanjutkan proses atau <strong>Tidak</strong> untuk membatalkan.</li>
        </ol>
      </Section>

      {/* ==================== SEARCH DATA ==================== */}
      <Section id="search-data" title="Cari Data">
        <p>
          Fitur <strong>Cari</strong> memungkinkan Anda menemukan sub-pengguna dengan cepat dengan mengetik kata kunci seperti:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          <li>Nama</li>
          <li>Status</li>
          <li>Hotel</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763102135/search.png" />
        </ul>
        <p className="mt-1">
          Tabel akan secara otomatis menampilkan hasil yang cocok dengan kata kunci Anda.
        </p>
      </Section>

      {/* ==================== EXPORT DATA ==================== */}
      <Section id="export-data" title="Ekspor Data">
        <p>
          Fitur <strong>Ekspor Data</strong> memungkinkan Anda mengunduh data sub-pengguna. Ekspor hanya berlaku untuk data yang saat ini ditampilkan dalam tabel. 
          Jika Anda telah menerapkan opsi pencarian atau filter apa pun, hanya hasil yang difilter yang akan disertakan dalam ekspor.
        </p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763102645/export-button.png" />

        <h4 className="mt-4 font-medium">Opsi Ekspor:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Tombol Salin:</strong> Tombol ini akan secara otomatis menyalin data ke clipboard Anda dalam format teks.
          </li>
          <li>
            <strong>Tombol Excel:</strong> Tombol ini akan secara otomatis menghasilkan dan mengunduh data ke dalam format .xlsx.
          </li>
          <li>
            <strong>Tombol PDF:</strong> Tombol ini akan secara otomatis menghasilkan dan mengunduh data ke dalam format .pdf.
          </li>
        </ul>
      </Section>

      {/* ==================== CUSTOMIZE COLUMN ==================== */}
      <Section id="customize-column" title="Sesuaikan Kolom">
        <p>Anda dapat menyesuaikan kolom mana yang ingin Anda tampilkan di tabel Sub-pengguna.</p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763102630/custom-column.png" />

        <h4 className="mt-4 font-medium">Cara Menyesuaikan Kolom:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tombol <strong>Visibilitas Kolom</strong>.</li>
          <li>Centang atau hapus centang pada kolom yang ingin Anda tampilkan atau sembunyikan.</li>
        </ol>
      </Section>
    </DocsLayout>
  );
}