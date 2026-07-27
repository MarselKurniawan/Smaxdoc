import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/details")({
  head: () => ({
    meta: [
      { title: "Detail Akun — Channelku | SinergiMax" },
      { name: "description", content: "Kelola informasi akun, profil, kata sandi, riwayat aktivitas, dan riwayat perangkat." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "edit-details", label: "Edit Detail" },
  { id: "password", label: "Kata Sandi" },
  { id: "user-activities", label: "Aktivitas Pengguna" },
  { id: "search-data", label: "Cari Data" },
  { id: "export-data", label: "Ekspor Data" },
  { id: "customize-column", label: "Sesuaikan Kolom" },
  { id: "device-history", label: "Riwayat Perangkat" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Detail Akun" activeTo="/docs/channelku/account/details">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Detail Akun</h1>
      <p className="mt-4">
        Halaman <strong>Detail</strong> di menu <strong>Akun</strong> digunakan untuk mengelola informasi akun Anda, 
        termasuk profil, kata sandi, riwayat aktivitas, dan riwayat perangkat. Fitur ini membantu Anda menjaga 
        data akun yang akurat dan memantau aktivitas apa pun yang terkait dengan akun Anda. 
        Anda dapat mengakses halaman ini dengan membuka <strong>Akun &gt; Detail</strong>.
      </p>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763082739/menu-account-details.png" />

      {/* ==================== EDIT DETAILS ==================== */}
      <Section id="edit-details" title="Edit Detail">
        <p>Di bagian ini, Anda dapat memperbarui informasi akun Anda.</p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763082845/edit-details.png" />

        <h4 className="mt-4 font-medium">Bidang yang Dapat Diedit:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li><strong>Nama Pengguna</strong></li>
          <li><strong>Nama Depan</strong></li>
          <li><strong>Nama Belakang</strong></li>
          <li><strong>Nomor Telepon</strong></li>
          <li>
            <strong>Bahasa Admin:</strong> Pilih salah satu bahasa yang tersedia: Français, Indonesian, English American, Japanese, atau Thai.
          </li>
          <li>
            <strong>Bahasa Halaman Pemesanan:</strong> Centang satu atau lebih bahasa yang ingin Anda aktifkan di halaman pemesanan, seperti Arabic, Français, Indonesian, English American, German, atau Russian.
          </li>
          <li>
            <strong>Izinkan Peniruan:</strong> Fitur ini memungkinkan Superadmin untuk mengakses akun Anda sementara waktu untuk membantu pemecahan masalah atau dukungan. Bahkan saat diaktifkan, informasi pribadi Anda (Alamat Email, Nama Pengguna, dan Nomor Telepon) tetap tersembunyi. Aktifkan atau nonaktifkan fitur ini dengan mengalihkan tombol sakelar.
          </li>
        </ul>

        <p className="mt-2">
          Setelah membuat perubahan, klik tombol <strong>Simpan</strong> untuk menerapkan pembaruan.
        </p>
      </Section>

      {/* ==================== PASSWORD ==================== */}
      <Section id="password" title="Kata Sandi">
        <p>
          Bagian <strong>Kata Sandi</strong> memungkinkan Anda mengubah kata sandi saat ini. Masukkan informasi yang diperlukan di bidang yang disediakan:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          <li><strong>Kata Sandi Lama:</strong> Masukkan kata sandi Anda saat ini.</li>
          <li><strong>Kata Sandi Baru:</strong> Masukkan kata sandi baru yang ingin Anda buat.</li>
          <li><strong>Konfirmasi Kata Sandi:</strong> Masukkan ulang kata sandi baru Anda. Pastikan cocok dengan bidang <strong>Kata Sandi Baru</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763082947/edit-password.png" />
        </ul>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-semibold">Persyaratan Kata Sandi Baru:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>Minimal <strong>satu huruf</strong></li>
            <li>Minimal <strong>satu huruf kapital</strong></li>
            <li>Minimal <strong>satu angka</strong></li>
            <li>Minimal <strong>8 karakter</strong></li>
                      <Figure label=""
                      src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763347872/password-requirements.png" />
          </ul>
        </div>

        <p className="mt-2">
          Saat Anda mulai mengetik kata sandi baru, kotak persyaratan akan muncul yang menunjukkan kondisi mana yang telah terpenuhi:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <span className="text-green-600">✔ Centang hijau</span> menunjukkan bahwa kondisi terpenuhi.
          </li>
          <li>
            <span className="text-red-600">✖ Silang merah</span> menunjukkan bahwa kondisi belum lengkap.
          </li>
        </ul>
        <p className="mt-1 text-sm text-muted-foreground">
          Kotak persyaratan akan otomatis tertutup setelah semua kondisi terpenuhi.
        </p>
      </Section>

      {/* ==================== USER ACTIVITIES ==================== */}
      <Section id="user-activities" title="Aktivitas Pengguna">
        <p>
          Bagian <strong>Aktivitas Pengguna</strong> menampilkan riwayat aktivitas akun Anda. Tabel menyajikan informasi seperti email yang digunakan untuk masuk, alamat IP, dan tanggal aktivitas.
        </p>

        <h4 className="mt-4 font-medium">Tampilan dan Navigasi Aktivitas:</h4>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763084831/user-activities.png" />
        <ul className="ml-6 list-disc space-y-1">
          <li>
            Tabel dapat menampilkan <strong>10</strong>, <strong>20</strong>, atau <strong>50</strong> baris per halaman. 
            Anda dapat menyesuaikannya menggunakan dropdown <strong>Tampilkan Baris</strong>.
          </li>
          <li>
            Gunakan bilah <strong>Pencarian</strong> untuk menemukan aktivitas dengan cepat berdasarkan kata kunci seperti email, alamat IP, atau tanggal. 
            Lihat <strong>Cari Data</strong> untuk detail lengkap.
          </li>
          <li>
            Gunakan fitur <strong>Ekspor Data</strong> untuk mengunduh log aktivitas Anda. Lihat <strong>Ekspor Data</strong> untuk informasi lebih lanjut.
          </li>
          <li>
            Sesuaikan kolom mana yang muncul dalam tabel menggunakan pengaturan <strong>Kolom</strong>. Lihat <strong>Sesuaikan Kolom</strong> untuk detail lebih lanjut.
          </li>
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Contoh Tabel Aktivitas:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li><strong>Email:</strong> user@example.com</li>
            <li><strong>Alamat IP:</strong> 192.168.1.1</li>
            <li><strong>Tanggal:</strong> 2025-11-14 06:55:02</li>
          </ul>
        </div>
      </Section>

      {/* ==================== SEARCH DATA ==================== */}
      <Section id="search-data" title="Cari Data">
        <p>
          Fitur <strong>Cari</strong> memungkinkan Anda menemukan catatan aktivitas dengan cepat menggunakan kata kunci yang ditemukan dalam tabel. 
          Ada dua cara untuk mencari:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Menggunakan Bilah Pencarian Atas:</strong> Memfilter semua kolom dan menampilkan baris mana pun yang berisi kata kunci yang dimasukkan.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763085124/searchbar-1.png" />
          <li>
            <strong>Menggunakan Bilah Pencarian Berbasis Kolom:</strong> Terletak di bagian bawah setiap kolom, memfilter hanya kolom yang dipilih.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763085324/searchbar-2.png" />
        </ul>
      </Section>

      {/* ==================== EXPORT DATA ==================== */}
      <Section id="export-data" title="Ekspor Data">
        <p>
          Fitur <strong>Ekspor Data</strong> memungkinkan Anda mengunduh catatan aktivitas. Ekspor hanya berlaku untuk data yang saat ini ditampilkan dalam tabel. 
          Jika Anda telah menerapkan opsi pencarian atau filter apa pun, hanya hasil yang difilter yang akan disertakan dalam ekspor.
        </p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763084031/export.png" />

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
        <p>Anda dapat menyesuaikan kolom mana yang ingin Anda tampilkan di tabel Aktivitas Pengguna.</p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763084499/column-visibility.png" />

        <h4 className="mt-4 font-medium">Cara Menyesuaikan Kolom:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tombol <strong>Visibilitas Kolom</strong>.</li>
          <li>Centang atau hapus centang pada kolom yang ingin Anda tampilkan atau sembunyikan.</li>
        </ol>
      </Section>

      {/* ==================== DEVICE HISTORY ==================== */}
      <Section id="device-history" title="Riwayat Perangkat">
        <p>
          Bagian <strong>Riwayat Perangkat</strong> menampilkan daftar perangkat yang telah digunakan untuk mengakses akun Anda. 
          Tabel menunjukkan informasi seperti <strong>ID Perangkat</strong> dan <strong>waktu kedaluwarsa</strong> sesi login.
        </p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1763084588/device-history.png" />
      </Section>
    </DocsLayout>
  );
}