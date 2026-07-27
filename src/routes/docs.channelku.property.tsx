import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/property")({
  head: () => ({
    meta: [
      { title: "Pengaturan Properti — Channelku | SinergiMax" },
      { name: "description", content: "Kelola informasi properti, deskripsi, lokasi, fitur, layanan, dan gambar." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "general", label: "Umum" },
  { id: "description", label: "Deskripsi" },
  { id: "location", label: "Lokasi" },
  { id: "features", label: "Fitur" },
  { id: "services", label: "Layanan" },
  { id: "images", label: "Gambar" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Pengaturan Properti" activeTo="/docs/channelku/setting/property">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Pengaturan Properti</h1>
      <p className="mt-4">
        Halaman <strong>Pengaturan Properti</strong> memungkinkan pengelola properti untuk mengelola informasi penting tentang properti mereka, 
        termasuk detail umum, deskripsi, lokasi, fitur, layanan, dan gambar.
      </p>
      <p className="mt-2">
        Mempertahankan pengaturan properti yang akurat dan lengkap memastikan visibilitas yang lebih baik, meningkatkan kepercayaan tamu, 
        dan meningkatkan sinkronisasi di seluruh saluran OTA yang terhubung. Semua pembaruan yang dilakukan di bagian ini berdampak langsung 
        pada bagaimana properti ditampilkan secara online dan bagaimana sistem reservasi berinteraksi dengan profil properti.
      </p>

      {/* ==================== GENERAL ==================== */}
      <Section id="general" title="Umum">
        <p>
          Tab <strong>Umum</strong> di bawah Pengaturan Properti digunakan untuk mengelola identitas inti dan informasi kontak properti. 
          Ini mencakup bidang seperti nama properti, alamat, nomor telepon, email, situs web, mata uang, zona waktu, dan opsi integrasi PMS.
        </p>
        <p className="mt-2">
          Informasi yang akurat di bagian ini sangat penting karena menentukan bagaimana detail properti ditampilkan di OTA, laporan internal, 
          dan komunikasi pemesanan.
        </p>

        <h4 className="mt-4 font-medium">Cara Memperbarui Informasi Properti Umum:</h4>
        <p>Ikuti langkah-langkah berikut untuk memperbarui informasi umum properti Anda:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka <strong>Pengaturan &gt; Properti</strong> dari menu utama.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995924/00._property_cx3shy.jpg" />
          <li>
            Di bawah tab <strong>Umum</strong>, isi atau perbarui bidang-bidang berikut:
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Nama Properti:</strong> Masukkan nama lengkap properti Anda.</li>
              <li>
                <strong>Tipe Akomodasi:</strong> Pilih tipe akomodasi (misalnya, Villa, Apartemen, Bungalow, Hotel, Unit, Guesthouse, Rumah).
              </li>
              <li>
                <strong>Mata Uang Pilihan:</strong> Pilih mata uang utama yang digunakan untuk transaksi properti.
                <span className="block text-sm text-muted-foreground">
                  Pengaturan ini menentukan bagaimana jumlah seperti deposit, jatuh tempo, dan total ditampilkan tetapi tidak mengonversi mata uang reservasi yang sebenarnya.
                </span>
              </li>
              <li>
                <strong>Jumlah Villa:</strong> Menampilkan jumlah villa atau unit. (Bidang ini <em>tidak dapat diedit</em>.)
              </li>
              <li><strong>Zona Waktu:</strong> Pilih zona waktu lokal tempat properti Anda beroperasi.</li>
              <li>
                <strong>Alamat Email Utama:</strong> Menampilkan alamat email utama yang terdaftar. 
                <span className="block text-sm text-muted-foreground">(Bidang ini tidak dapat diperbarui secara manual. Silakan hubungi dukungan untuk meminta perubahan.)</span>
              </li>
              <li>
                <strong>Email CC:</strong> Masukkan alamat email tambahan untuk tujuan CC. Tekan <kbd>Enter</kbd> setelah mengetik setiap email untuk menambahkan beberapa alamat.
              </li>
              <li><strong>Alamat Email Akuntansi:</strong> Masukkan alamat email untuk komunikasi keuangan dan akuntansi.</li>
              <li>
                <strong>Nomor Ponsel:</strong> Pilih kode negara (misalnya, Indonesia +62) dan masukkan nomor ponsel di bidang yang disediakan.
              </li>
              <li>
                <strong>Aktifkan CVV:</strong> Pilih apakah akan mewajibkan CVV untuk pembayaran kartu tamu (<strong>Aktifkan</strong> atau <strong>Nonaktifkan</strong>).
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995924/01._general_-_01_y9sdng.jpg" />
              <li>
                <strong>Telepon Utama:</strong> Pilih kode negara dan masukkan nomor telepon utama untuk properti Anda.
              </li>
              <li><strong>Alamat Situs Web:</strong> Masukkan URL situs web resmi properti Anda.</li>
              <li><strong>Negara:</strong> Pilih lokasi negara properti.</li>
              <li><strong>Provinsi/Wilayah:</strong> Masukkan provinsi atau wilayah properti.</li>
              <li><strong>Kota/Lokasi:</strong> Masukkan kota tempat properti berada.</li>
              <li><strong>Alamat Jalan:</strong> Isi alamat jalan lengkap.</li>
              <li><strong>Kode Pos:</strong> Masukkan kode pos.</li>
              <li>
                <strong>Awalan Nomor Pemesanan:</strong> Tentukan awalan untuk nomor pemesanan.
                <span className="block text-sm text-muted-foreground">
                  Awalan akan muncul di Daftar Reservasi dan FOS (Sistem Front Office) untuk membantu membedakan pemesanan (misalnya, "BL-12345").
                </span>
              </li>
              <li>
                <strong>Nomor Pajak Hotel:</strong> Masukkan nomor registrasi pajak hotel.
                <span className="block text-sm text-muted-foreground">
                  Nomor pajak akan ditampilkan pada invoice PDF FOS untuk penagihan tamu.
                </span>
              </li>
              <li>
                <strong>Mitra PMS:</strong> Pilih opsi integrasi PMS:
                <ul className="ml-6 list-circle">
                  <li><strong>Tidak</strong> → Tanpa integrasi.</li>
                  <li><strong>XML API</strong> → Terhubung menggunakan API berbasis XML.</li>
                  <li><strong>JSON API</strong> → Terhubung menggunakan API berbasis JSON.</li>
                </ul>
              </li>
              <li>
                <strong>Awalan Mata Uang:</strong> Pilih posisi simbol mata uang:
                <ul className="ml-6 list-circle">
                  <li><strong>Ya</strong> → Tampilkan mata uang sebelum jumlah (misalnya, IDR 500.000).</li>
                  <li><strong>Tidak</strong> → Tampilkan mata uang setelah jumlah (misalnya, 500.000 IDR).</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995924/01._general_-_02_pqbzqr.jpg" />
                </ul>
              </li>
            </ul>
          </li>
          <li>Setelah selesai mengisi atau mengedit bidang, klik tombol <strong>Simpan</strong> untuk menerapkan perubahan.</li>
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Memperbarui Informasi Properti Umum:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat mengedit bidang "Jumlah Villa" atau "Alamat Email Utama"</dt>
              <dd className="ml-4 text-muted-foreground">
                Bidang ini tidak dapat diedit oleh pengguna. Untuk memperbarui alamat email utama, silakan hubungi dukungan untuk bantuan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan tidak tersimpan setelah mengklik tombol "Simpan"</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang wajib diisi dengan benar, terutama bidang wajib seperti Nama Properti dan Negara.
                Periksa koneksi internet Anda. Koneksi yang stabil diperlukan untuk berhasil menyimpan pembaruan.
                Segarkan halaman dan coba perbarui informasi lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Email CC atau Email Akuntansi baru tidak ditambahkan setelah mengetik</dt>
              <dd className="ml-4 text-muted-foreground">
                Setelah mengetik setiap alamat email, tekan tombol <kbd>Enter</kbd> untuk mendaftarkannya sebelum menyimpan.
                Verifikasi bahwa setiap alamat email mengikuti format email yang benar (misalnya, nama@contoh.com).
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pilihan dropdown (misalnya, Zona Waktu, Negara, Mitra PMS) tidak muncul</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman untuk memuat ulang opsi dropdown terbaru.
                Jika masalah berlanjut, bersihkan cache browser Anda atau coba gunakan browser lain.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Format salah untuk Alamat Situs Web atau Nomor Ponsel</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan alamat situs web dimulai dengan <code>http://</code> atau <code>https://</code>.
                Saat memasukkan nomor ponsel, pilih kode negara yang benar dan masukkan nomor tanpa karakter khusus seperti <code>+</code>, <code>-</code>, atau spasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Nomor Pajak Hotel atau Awalan Nomor Pemesanan tidak ditampilkan di FOS setelah pembaruan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda menyimpan perubahan setelah memasukkan informasi.
                Periksa sistem FOS setelah beberapa menit. Mungkin ada penundaan sinkronisasi singkat.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== DESCRIPTION ==================== */}
      <Section id="description" title="Deskripsi">
        <p>
          Tab <strong>Deskripsi</strong> memungkinkan pengelola properti untuk mengatur deskripsi properti dalam berbagai bahasa, 
          menambahkan tautan media sosial, dan mengunggah merek visual seperti logo dan thumbnail.
        </p>
        <p className="mt-2">Informasi ini meningkatkan presentasi properti di seluruh OTA dan platform pemesanan lainnya.</p>

        <h4 className="mt-4 font-medium">Cara Memperbarui Deskripsi dan Gambar Properti:</h4>
        <p>Ikuti langkah-langkah berikut untuk memperbarui deskripsi dan media properti Anda:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tab <strong>Deskripsi</strong>.</li>
          <li>
            <strong>Perbarui Deskripsi Properti:</strong>
            <ul className="ml-6 list-disc">
              <li>Tulis deskripsi properti menggunakan editor teks kaya yang disediakan.</li>
              <li>Anda dapat memformat teks menggunakan opsi seperti <strong>Tebal</strong>, <em>Miring</em>, <u>Garis Bawah</u>, Daftar, dan Perataan.</li>
              <li>
                Deskripsi dapat diatur secara terpisah untuk berbagai bahasa: Arab, Inggris (Amerika), Français, Indonesia, Rusia.
                <span className="block text-sm text-muted-foreground">Klik setiap tab bahasa untuk memasukkan dan memformat deskripsi untuk bahasa tersebut secara individual.</span>
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995925/02._description_fktk0j.jpg" />
            </ul>
          </li>
          <li>
            <strong>Isi Tautan Media Sosial:</strong>
            <ul className="ml-6 list-disc">
              <li><strong>Tautan Facebook:</strong> Masukkan URL halaman Facebook properti Anda.</li>
              <li><strong>Tautan Instagram:</strong> Masukkan URL akun Instagram properti Anda.</li>
              <li><strong>Tautan YouTube:</strong> Masukkan URL saluran YouTube properti Anda.</li>
              <li><strong>Tautan TikTok:</strong> Masukkan URL akun TikTok properti Anda.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995934/03._link_kxi4hg.jpg" />
            </ul>
          </li>
          <li>
            <strong>Unggah Logo Properti:</strong>
            <ul className="ml-6 list-disc">
              <li>Klik <strong>Unggah Logo</strong> untuk mengunggah logo properti Anda.</li>
              <li>
                <strong>Persyaratan:</strong> Unggah gambar dalam format lanskap, dengan lebar setidaknya 200px lebih besar dari tinggi (lebar &gt; tinggi).
              </li>
              <li>Setelah mengunggah, tombol <strong>Hapus Logo</strong> akan muncul untuk menghapus logo jika diperlukan.</li>
              <li>Mengklik <strong>Hapus Logo</strong> akan memicu pop-up konfirmasi sebelum penghapusan.</li>
            </ul>
          </li>
          <li>
            <strong>Unggah Thumbnail:</strong>
            <ul className="ml-6 list-disc">
              <li>Klik <strong>Unggah Thumbnail</strong> untuk mengatur gambar header untuk properti.</li>
              <li>
                <strong>Persyaratan:</strong> Unggah gambar dalam format lanskap, dengan dimensi minimum 500px lebar dan 350px tinggi.
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995925/05._thumbnail_ezonpr.jpg" />
            </ul>
          </li>
          <li>Setelah selesai memasukkan deskripsi dan mengunggah gambar, klik tombol <strong>Simpan</strong> untuk menerapkan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995935/06._save_button_x80z57.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-semibold">Penting:</p>
          <ul className="ml-6 mt-1 list-disc text-sm">
            <li>Setiap deskripsi bahasa harus dimasukkan dan disimpan secara manual untuk tampilan multibahasa yang tepat.</li>
            <li>Pastikan gambar yang diunggah memenuhi dimensi yang diperlukan untuk mencegah kesalahan tampilan.</li>
            <li>Opsi pemformatan (tebal, miring, daftar) membantu meningkatkan keterbacaan deskripsi properti Anda.</li>
            <li>Menghapus logo properti memerlukan konfirmasi pengguna untuk menghindari penghapusan yang tidak disengaja.</li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Memperbarui Deskripsi dan Gambar Properti:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Deskripsi terformat tidak tersimpan dengan benar dalam bahasa tertentu</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda berada di tab bahasa yang benar sebelum memasukkan atau mengedit konten.
                Klik <strong>Simpan</strong> setelah memperbarui setiap tab bahasa untuk menyimpan entri individual.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pemformatan teks (tebal, miring, perataan) tidak diterapkan di editor deskripsi</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memilih teks sebelum menerapkan opsi pemformatan.
                Jika pemformatan masih tidak muncul, coba segarkan halaman atau gunakan browser lain.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Gambar yang diunggah tidak muncul di bagian Logo Properti atau Thumbnail</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa bahwa gambar yang diunggah memenuhi format dan ukuran yang ditentukan:
                <ul className="ml-6 mt-1 list-circle">
                  <li><strong>Logo:</strong> Harus dalam format lanskap dengan lebar lebih besar dari tinggi, dan lebar minimum setidaknya 200px lebih dari tinggi.</li>
                  <li><strong>Thumbnail:</strong> Dimensi minimum 500px lebar dan 350px tinggi.</li>
                  <li>Gunakan jenis file gambar yang didukung seperti <code>.jpg</code>, <code>.jpeg</code>, atau <code>.png</code>.</li>
                </ul>
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol "Hapus Logo" tidak muncul setelah mengunggah logo</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu beberapa detik setelah unggahan untuk membiarkan sistem memperbarui.
                Segarkan halaman jika tombol masih tidak muncul.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pesan kesalahan saat mengunggah gambar</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan ukuran file gambar tidak terlalu besar (biasanya di bawah 5MB direkomendasikan).
                Jika menggunakan koneksi lambat, tunggu hingga unggahan selesai atau coba lagi nanti.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Secara tidak sengaja menghapus logo properti</dt>
              <dd className="ml-4 text-muted-foreground">
                Setelah dihapus, logo tidak dapat dipulihkan secara otomatis. Unggah ulang gambar yang benar dan klik <strong>Simpan</strong>.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tautan media sosial tidak tersimpan atau tidak ditampilkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali bahwa setiap URL lengkap dan dimulai dengan <code>https://</code> atau <code>http://</code>.
                URL yang tidak valid dapat ditolak oleh sistem dan tidak disimpan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== LOCATION ==================== */}
      <Section id="location" title="Lokasi">
        <p>
          Tab <strong>Lokasi</strong> memungkinkan pengelola properti untuk mengatur koordinat geografis properti secara manual. 
          Memasukkan garis lintang dan garis bujur yang benar memastikan penempatan properti yang akurat di peta OTA dan mendukung pencarian berbasis lokasi.
        </p>

        <h4 className="mt-4 font-medium">Cara Memperbarui Lokasi Properti:</h4>
        <p>Ikuti langkah-langkah berikut untuk memperbarui lokasi properti Anda:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tab <strong>Lokasi</strong>.</li>
          <li>Di bidang <strong>Garis Lintang</strong>, masukkan koordinat garis lintang properti.</li>
          <li>Di bidang <strong>Garis Bujur</strong>, masukkan koordinat garis bujur properti.</li>
          <li>Setelah memasukkan kedua nilai, klik tombol <strong>Simpan</strong> untuk menerapkan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995925/07._location_jsnyek.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Memperbarui Lokasi Properti:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Nilai Garis Lintang atau Garis Bujur tidak tersimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kedua bidang <strong>Garis Lintang</strong> dan <strong>Garis Bujur</strong> diisi sebelum mengklik <strong>Simpan</strong>.
                Periksa apakah ada spasi tambahan atau karakter tidak valid (huruf atau simbol) di kolom input.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Lokasi properti yang salah ditampilkan di peta</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa koordinat garis lintang dan garis bujur yang dimasukkan akurat.
                Gunakan alat online seperti Google Maps untuk mengonfirmasi koordinat yang benar sebelum memasukkannya.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pesan kesalahan muncul setelah menyimpan lokasi</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kolom input hanya berisi angka desimal yang valid.
                <span className="block">Contoh format: <code>-8.409518</code> (Garis Lintang), <code>115.188919</code> (Garis Bujur).</span>
              </dd>
            </div>
            <div>
              <dt className="font-medium">Lokasi yang disimpan tidak memperbarui di sistem</dt>
              <dd className="ml-4 text-muted-foreground">
                Setelah menyimpan, segarkan halaman untuk memeriksa apakah koordinat baru telah diterapkan.
                Jika lokasi masih tidak memperbarui, coba bersihkan cache browser Anda dan coba lagi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== FEATURES ==================== */}
      <Section id="features" title="Fitur">
        <p>
          Tab <strong>Fitur</strong> memungkinkan pengelola properti untuk mengonfigurasi apakah fasilitas atau fitur properti tertentu tersedia. 
          Setiap fitur tercantum dengan sakelar <strong>Ya/Tidak</strong> untuk pemilihan cepat. Beberapa fitur menyertakan informasi atau konfigurasi tambahan.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengatur Fitur Properti:</h4>
        <p>Ikuti langkah-langkah berikut untuk mengelola fitur untuk properti Anda:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tab <strong>Fitur</strong>.</li>
          <li>Daftar fitur properti yang telah ditentukan akan muncul.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995924/08._features_ltodex.jpg" />
          <li>
            Untuk setiap fitur:
            <ul className="ml-6 list-disc">
              <li>Pilih <strong>Ya</strong> atau <strong>Tidak</strong> untuk menunjukkan apakah fitur tersebut tersedia di properti Anda.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995924/09._features_question_n7jyap.jpg" />
              <li>
                Jika ikon catatan ditampilkan di samping fitur:
                <ul className="ml-6 list-circle">
                  <li>Klik ikon tersebut untuk membuka pertanyaan lanjutan <strong>Ya/Tidak</strong> terkait layanan tersebut.</li>
                  <li>Jawab pertanyaan tambahan sesuai kebutuhan.</li>
                </ul>
              </li>
              <li>
                Jika ikon <strong>lebih banyak</strong> ditampilkan, klik untuk memperluas kolom input tambahan atau pengaturan khusus untuk fitur tersebut.
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995935/10._features_note_icon_qpe1ze.jpg" />
            </ul>
          </li>
          <li>Setelah memperbarui semua pengaturan fitur yang diinginkan, gulir ke bawah dan klik tombol <strong>Simpan</strong> untuk menerapkan perubahan Anda.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995935/11._features_more_mmb5va.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Mengatur Fitur Properti:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Perubahan pada fitur tidak tersimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda mengklik tombol <strong>Simpan</strong> setelah melakukan pembaruan apa pun.
                Tunggu beberapa saat setelah mengklik <strong>Simpan</strong> untuk memberi waktu sistem memproses perubahan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pertanyaan lanjutan tidak muncul setelah mengklik ikon catatan</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa koneksi internet Anda; koneksi stabil diperlukan untuk memuat pertanyaan tambahan.
                Segarkan halaman dan coba klik ikon catatan lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pengaturan lebih banyak tidak terbuka setelah mengklik ikon lebih banyak</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan browser Anda mengizinkan elemen pop-up atau bagian yang dapat diperluas.
                Coba segarkan halaman atau bersihkan cache browser Anda.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Fitur yang diperbarui tidak tercermin di profil properti</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa Anda berhasil menyimpan perubahan setelah membuat pilihan.
                Segarkan halaman untuk memverifikasi apakah fitur yang diperbarui ditampilkan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== SERVICES ==================== */}
      <Section id="services" title="Layanan">
        <p>
          Tab <strong>Layanan</strong> memungkinkan pengelola properti untuk mendefinisikan layanan spesifik yang tersedia di properti. 
          Setiap item dapat diaktifkan/nonaktifkan dengan <strong>Ya/Tidak</strong>, dan beberapa item menyertakan pertanyaan lanjutan yang muncul saat ikon info diklik.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Layanan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tab <strong>Layanan</strong>.</li>
          <li>Tinjau daftar opsi layanan yang tersedia.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995924/13._services_ds2jhf.jpg" />
          <li>
            Untuk setiap layanan:
            <ul className="ml-6 list-disc">
              <li>Pilih <strong>Ya</strong> jika layanan ditawarkan di properti Anda.</li>
              <li>Pilih <strong>Tidak</strong> jika layanan tidak tersedia.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995924/09._features_question_n7jyap.jpg" />
              <li>
                Beberapa layanan memiliki ikon catatan di sampingnya:
                <ul className="ml-6 list-circle">
                  <li>Klik ikon untuk membuka pertanyaan lanjutan <strong>Ya/Tidak</strong> terkait layanan tersebut.</li>
                  <li>Jawab pertanyaan tambahan sesuai kebutuhan.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Setelah memperbarui pilihan Anda, gulir ke bawah dan klik tombol <strong>Simpan</strong> untuk menerapkan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995935/12._features_save_button_xl06e9.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Mengonfigurasi Layanan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Pilihan layanan tidak tersimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda menggulir ke bawah dan mengklik tombol <strong>Simpan</strong> setelah memperbarui pilihan Anda.
                Tunggu beberapa saat untuk memastikan sistem mencatat perubahan sebelum meninggalkan halaman.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pertanyaan lanjutan tidak muncul setelah mengklik ikon catatan</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa apakah koneksi internet Anda stabil. Pertanyaan lanjutan memerlukan akses online untuk dimuat.
                Segarkan halaman dan klik ikon lagi jika tidak merespons pada awalnya.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Ketersediaan layanan yang diperbarui tidak tercermin dalam sistem</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa Anda memilih <strong>Ya</strong> atau <strong>Tidak</strong> untuk setiap layanan sesuai kebutuhan.
                Setelah menyimpan, segarkan halaman untuk memverifikasi apakah pembaruan ditampilkan dengan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Halaman menjadi tidak responsif setelah memilih beberapa layanan</dt>
              <dd className="ml-4 text-muted-foreground">
                Coba perbarui beberapa layanan sekaligus, lalu simpan sebelum melanjutkan.
                Jika masalah berlanjut, bersihkan cache browser Anda atau beralih ke browser lain.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== IMAGES ==================== */}
      <Section id="images" title="Gambar">
        <p>
          Tab <strong>Gambar</strong> memungkinkan pengelola properti untuk mengunggah dan mengatur foto properti yang muncul di OTA dan platform pemesanan. 
          Anda dapat mengunggah beberapa gambar, mengurutkan ulang, dan menambahkan teks keterangan opsional untuk aksesibilitas atau deskripsi yang lebih baik.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengunggah dan Mengelola Gambar Properti:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tab <strong>Gambar</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995925/18._images_eoy6g1.jpg" />
          <li>Klik <strong>Pilih Gambar</strong> untuk menambahkan satu atau beberapa foto properti.</li>
          <li>Saat mengunggah, pastikan gambar mengikuti panduan format dan dimensi yang diperlukan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995934/19._images_-_choose_image_lvjmrq.jpg" />
          <li>
            Secara opsional, isi bidang <strong>Teks Keterangan</strong> sebelum mengunggah:
            <ul className="ml-6 list-disc">
              <li>Jika diisi, teks akan muncul di bawah gambar.</li>
              <li>Jika dibiarkan kosong, area teks di bawah gambar akan tetap kosong.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995934/20._images_-_tool_tip_text_pvuetu.jpg" />
            </ul>
          </li>
          <li>
            Setelah mengunggah:
            <ul className="ml-6 list-disc">
              <li>Anda dapat menyeret dan melepas untuk mengurutkan ulang gambar dengan mengklik dan menahan gambar, lalu memindahkannya ke posisi yang diinginkan.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995925/21._images_-_drag_and_drop_ufhhr6.jpg" />
              <li>
                Untuk menghapus gambar, klik ikon <strong>X</strong> di pojok kanan atas gambar.
                <span className="block text-sm text-muted-foreground">Pesan konfirmasi akan muncul; klik <strong>Ya</strong> untuk mengonfirmasi penghapusan.</span>
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995934/22._delete_image_mikldv.jpg" />
            </ul>
          </li>
          <li>Setelah semua unggahan, teks keterangan, atau tindakan pengurutan ulang selesai, klik tombol <strong>Simpan Urutan dan Label</strong> di bagian bawah halaman.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745995926/23._save_orders_and_labels_g5okvs.jpg  " />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Mengunggah dan Mengelola Gambar Properti:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Gambar gagal diunggah</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan gambar memenuhi spesifikasi format dan ukuran yang diperlukan.
                Periksa koneksi internet Anda dan coba unggah gambar lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Teks keterangan tidak muncul setelah unggah</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan bidang <strong>Teks Keterangan</strong> diisi sebelum mengunggah gambar.
                Jika teks ditambahkan setelah unggah, pastikan untuk mengklik <strong>Simpan Urutan dan Label</strong> untuk menerapkan perubahan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat mengurutkan ulang gambar menggunakan seret dan lepas</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa Anda mengklik dan menahan gambar sebelum menyeret.
                Jika seret dan lepas masih tidak berfungsi, coba segarkan halaman atau gunakan browser lain.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Gambar yang dihapus masih muncul setelah konfirmasi</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu beberapa detik setelah mengonfirmasi penghapusan untuk memberi waktu sistem memperbarui.
                Jika gambar masih ada, segarkan halaman untuk memeriksa apakah gambar telah berhasil dihapus.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan tidak tersimpan setelah mengunggah atau mengurutkan ulang</dt>
              <dd className="ml-4 text-muted-foreground">
                Selalu klik tombol <strong>Simpan Urutan dan Label</strong> setelah membuat perubahan pada urutan atau label gambar.
                Jika tombol simpan tidak responsif, periksa koneksi internet Anda dan coba lagi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}