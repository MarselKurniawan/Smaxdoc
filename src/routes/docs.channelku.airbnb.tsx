import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/airbnb")({
  head: () => ({
    meta: [
      { title: "Airbnb — Channelku | SinergiMax" },
      { name: "description", content: "Kelola pengaturan listing Airbnb, sinkronisasi, ketersediaan, dan harga." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "available-features", label: "Fitur yang Tersedia" },
  { id: "accessing", label: "Mengakses Pengaturan Airbnb" },
  { id: "general-settings", label: "Pengaturan Umum" },
  { id: "availability-settings", label: "Pengaturan Ketersediaan" },
  { id: "rates-settings", label: "Pengaturan Harga" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Airbnb" activeTo="/docs/channelku/channel-manager/control-panel/airbnb">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Airbnb</h1>
      <p className="mt-4">
        <strong>Pengaturan Listing Airbnb</strong> memungkinkan Anda mengelola daftar properti langsung dari platform Channel Manager Bookandlink. 
        Fitur ini memungkinkan Anda menyinkronkan status kamar, ketersediaan, dan harga dengan akun Airbnb Anda. 
        Selain itu, setelah menyelesaikan pengaturan, Anda dapat mengelola pemesanan di <strong>Daftar Reservasi</strong>.
      </p>
      <p className="mt-2">
        Dokumentasi ini akan memandu Anda melalui pengaturan <strong>Pengaturan Umum</strong>, <strong>Pengaturan Ketersediaan</strong>, 
        dan <strong>Pengaturan Harga</strong> untuk properti yang terhubung ke Airbnb dan memahami cara mengelola reservasi di Daftar Reservasi.
      </p>

      {/* ==================== AVAILABLE FEATURES ==================== */}
      <Section id="available-features" title="Fitur yang Tersedia">
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Pengaturan Umum:</strong> Kelola status sinkronisasi dan publikasi.
          </li>
          <li>
            <strong>Pengaturan Ketersediaan:</strong> Konfigurasikan aturan pemesanan, termasuk minimum/maksimum menginap dan pembatasan check-in.
          </li>
          <li>
            <strong>Pengaturan Harga:</strong> Tetapkan harga per malam, diskon menginap lama, dan biaya tambahan.
          </li>
          <li>
            <strong>Manajemen Daftar Reservasi:</strong> Lacak, filter, dan kelola reservasi, termasuk opsi persetujuan dan penolakan.
          </li>
        </ul>
        <p className="mt-2">
          Setelah pengaturan ini dikonfigurasi, listing Airbnb Anda akan diperbarui sesuai dengan preferensi Anda.
        </p>
      </Section>

      {/* ==================== ACCESSING ==================== */}
      <Section id="accessing" title="Mengakses Pengaturan Airbnb">
        <p>Berikut cara mengakses pengaturan Airbnb:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Masuk ke SSO Bookandlink dan klik kartu <strong>Channel Manager</strong> di dasbor.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278835/01._click_channelku_qo8u1z.jpg" />
          <li>Buka <strong>Channel Manager &gt; Klik Panel Kontrol</strong> dan pilih <strong>Airbnb</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278836/02._click_airbnb_sf7fiv.jpg" />
          <li>Pilih kamar yang akan dikonfigurasi.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278837/03._click_rooms_rukmx2.jpg" />
          <li>Klik tab <strong>Kamar</strong>.</li>
          <li>Klik tombol <strong>Pengaturan</strong> untuk kamar yang diinginkan.</li>
        </ol>
        <p className="mt-2">
          Anda sekarang berada di halaman <strong>Pengaturan Listing Airbnb</strong>, di mana Anda dapat mengonfigurasi 
          Pengaturan Umum, Pengaturan Ketersediaan, dan Pengaturan Harga.
        </p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278841/05._airbnb_listing_settings_view_xqdvvz.jpg" />
        

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Mengakses Pengaturan Airbnb:</p>
          <p className="mt-1 text-sm text-muted-foreground">Jika Anda tidak dapat mengakses pengaturan Airbnb, coba langkah-langkah pemecahan masalah berikut:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Kartu Channel Manager tidak terlihat di dasbor?</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda masuk ke akun SSO Bookandlink yang benar. Pastikan Anda memiliki akses ke fitur Channel Manager. 
                Segarkan halaman dan periksa lagi. Bersihkan cache browser dan muat ulang halaman. Coba akses menggunakan browser lain.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Mengklik kartu Channel Manager tidak membuka halaman?</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa koneksi internet Anda. Nonaktifkan ekstensi browser apa pun yang dapat memblokir halaman. Coba buka tautan di jendela penyamaran.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Opsi Airbnb hilang di Panel Kontrol?</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan akun Anda memiliki izin yang diperlukan untuk mengakses pengaturan Airbnb. Segarkan halaman dan coba lagi. Hubungi dukungan jika masalah berlanjut.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== GENERAL SETTINGS ==================== */}
      <Section id="general-settings" title="Pengaturan Umum">
        <p>
          Bagian ini memungkinkan Anda mengelola status sinkronisasi dan publikasi.
        </p>

        <h4 className="mt-4 font-medium">Status Sinkronisasi:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Sinkron:</strong> Aktifkan sinkronisasi dengan Airbnb.
          </li>
          <li>
            <strong>Putus Sinkronisasi:</strong> Nonaktifkan sinkronisasi dengan Airbnb.
          </li>
          <li>Setelah membuat perubahan, klik <strong>Kirim</strong> untuk menyimpan pengaturan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278841/06._sync-status_yagzhw.jpg" />
        </ul>

        <h4 className="mt-4 font-medium">Status Publikasi:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Dipublikasikan:</strong> Listing tersedia di Airbnb.
          </li>
          <li>
            <strong>Tidak Dipublikasikan:</strong> Listing disembunyikan di Airbnb.
          </li>
          <li>Setelah membuat perubahan, klik <strong>Kirim</strong> untuk menyimpan pengaturan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278842/07._publish-status_h8qk93.jpg" />
        </ul>

        <p className="mt-2">
          Kemudian, klik tombol <strong>Tutup</strong> di kanan bawah atau ikon <strong>"X"</strong> di kanan atas untuk menutup Pengaturan Listing Airbnb.
        </p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278843/08._close_listing_settings_qkolcb.jpg" />

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Konfigurasi Pengaturan Umum:</p>
          <p className="mt-1 text-sm text-muted-foreground">Jika Anda mengalami masalah saat menyiapkan Pengaturan Umum, coba langkah-langkah pemecahan masalah berikut:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat mengubah Status Sinkronisasi?</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memiliki izin yang diperlukan untuk mengubah pengaturan. Segarkan halaman dan coba lagi. Periksa koneksi internet Anda. 
                Coba gunakan browser lain atau jendela penyamaran.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan Status Sinkronisasi tidak tersimpan?</dt>
              <dd className="ml-4 text-muted-foreground">
                Klik tombol <strong>Kirim</strong> setelah memilih opsi yang diinginkan. Segarkan halaman dan periksa apakah perubahan telah diterapkan. 
                Keluar dan masuk kembali, lalu coba lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat mengubah Status Publikasi?</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memiliki izin yang benar untuk mengubah listing. Klik <strong>Kirim</strong> setelah memilih <strong>Dipublikasikan</strong> atau <strong>Tidak Dipublikasikan</strong>. 
                Coba bersihkan cache browser dan muat ulang halaman.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Tutup atau ikon "X" tidak merespons?</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman dan coba lagi. Periksa apakah ada pop-up atau overlay yang menghalangi interaksi. Coba akses pengaturan dari perangkat atau browser lain. 
                Jika masalah berlanjut, hubungi dukungan untuk bantuan lebih lanjut.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== AVAILABILITY SETTINGS ==================== */}
      <Section id="availability-settings" title="Pengaturan Ketersediaan">
        <p>
          Bagian ini mengontrol aturan pemesanan, seperti durasi minimum dan maksimum menginap serta pembatasan check-in.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengatur Pengaturan Ketersediaan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tab <strong>Pengaturan Ketersediaan</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278844/01._click_tab_availability_settings_l9rddr.jpg" />
          <li>
            <strong>Pemesanan Maksimum Di Muka:</strong> Tetapkan jumlah maksimum hari di mana pemesanan dapat dilakukan di muka.
            <ul className="ml-6 mt-1 list-disc">
              <li>
                <strong>Izinkan permintaan reservasi di atas jumlah malam maksimum yang ditentukan:</strong> Sistem mengizinkan pengguna untuk meminta pemesanan yang melebihi jumlah maksimum malam yang ditentukan.
              </li>
              <li>
                <strong>Jangan izinkan permintaan reservasi di atas jumlah malam maksimum yang ditentukan:</strong> Sistem membatasi pengguna untuk meminta pemesanan yang melebihi jumlah maksimum malam yang ditentukan.
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278845/02._max_advance_booking_gdqduz.jpg" />
            </ul>
          </li>
          <li>
            <strong>Pemesanan Minimum Di Muka:</strong> Tetapkan waktu minimum yang diperlukan sebelum pemesanan dapat dilakukan.
            <ul className="ml-6 mt-1 list-disc">
              <li>
                <strong>Izinkan Pertanyaan "Minta Pemesanan":</strong> Sistem mengizinkan permintaan pemesanan meskipun waktu pemesanan minimum di muka tidak terpenuhi.
              </li>
              <li>
                <strong>Nonaktifkan Pertanyaan "Minta Pemesanan":</strong> Sistem mencegah permintaan pemesanan jika waktu pemesanan minimum di muka tidak terpenuhi.
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278846/03._min_advance_booking_d1kdck.jpg" />
            </ul>
          </li>
          <li>
            <strong>Hari Pergantian:</strong> Tetapkan waktu persiapan antara check-out dan check-in.
            <span className="block text-sm text-muted-foreground">Contoh: "Atur 1 hari jika Anda memerlukan satu hari untuk membersihkan sebelum tamu berikutnya check-in."</span>
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278848/04._turnover_days_chtim2.jpg" />
          <li>
            <strong>Lama Menginap:</strong>
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Malam Maksimum:</strong> Jumlah maksimum malam yang dapat dipesan.</li>
              <li><strong>Malam Minimum:</strong> Jumlah minimum malam yang diperlukan untuk pemesanan.</li>
              <li><strong>Hari Check-in dan Check-out:</strong> Tentukan hari check-in dan check-out yang diizinkan.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278851/05._length_of_stay_jyuyqw.jpg" />
            </ul>
          </li>
          <li>
            <strong>Malam Minimum per Akhir Pekan:</strong> Tetapkan persyaratan minimum menginap untuk pemesanan akhir pekan.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742282100/09._min_nights_per_weekend_vitske.jpg" />
          <li>Klik <strong>Kirim Pengaturan Ketersediaan</strong> untuk menyimpan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278862/06._click_submit_aw7n5l.jpg" />
          <li>Kemudian, klik tombol <strong>Tutup</strong> di kanan bawah atau ikon <strong>"X"</strong> di kanan atas untuk menutup Pengaturan Listing Airbnb.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742280978/07._click_close_button_c9oezw.jpg" />
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742280979/08._click_x_button_lxngpv.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Konfigurasi Pengaturan Ketersediaan:</p>
          <p className="mt-1 text-sm text-muted-foreground">Jika Anda mengalami masalah saat menyiapkan Pengaturan Ketersediaan, coba langkah-langkah pemecahan masalah berikut:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat mengubah pengaturan Pemesanan Maksimum atau Minimum Di Muka?</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memiliki izin yang diperlukan untuk mengubah pengaturan ini. Segarkan halaman dan coba lagi. 
                Periksa apakah ada pembatasan dari Airbnb yang mencegah perubahan. Coba gunakan browser lain atau jendela penyamaran.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan Hari Pergantian tidak tersimpan?</dt>
              <dd className="ml-4 text-muted-foreground">
                Klik tombol <strong>Kirim Pengaturan Ketersediaan</strong> setelah membuat perubahan. Segarkan halaman dan periksa apakah perubahan telah diterapkan. 
                Keluar dan masuk kembali, lalu coba lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pengaturan Lama Menginap tidak memperbarui?</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda mengatur <strong>Malam Minimum</strong> dan <strong>Malam Maksimum</strong> dengan benar. Verifikasi bahwa <strong>Hari Check-in dan Check-out</strong> dikonfigurasi dengan benar. 
                Coba bersihkan cache browser dan muat ulang halaman.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pengaturan Malam Minimum per Akhir Pekan tidak diterapkan?</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan nilai yang dimasukkan berada dalam kisaran yang dapat diterima. Klik <strong>Kirim Pengaturan Ketersediaan</strong> setelah melakukan penyesuaian. 
                Jika perubahan tidak tercermin, coba edit di sesi yang berbeda.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Tutup atau ikon "X" tidak merespons?</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman dan coba lagi. Periksa apakah ada pop-up atau overlay yang menghalangi interaksi. Coba akses pengaturan dari perangkat atau browser lain. 
                Jika masalah berlanjut, hubungi dukungan untuk bantuan lebih lanjut.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== RATES SETTINGS ==================== */}
      <Section id="rates-settings" title="Pengaturan Harga">
        <p>
          Bagian ini memungkinkan Anda mengonfigurasi detail harga, diskon, dan biaya tambahan untuk sebuah kamar.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengatur Pengaturan Harga:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tab <strong>Pengaturan Harga</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278826/01._navigate_rates_settings_fvfzd8.jpg" />
          <li>Pilih mata uang yang akan digunakan untuk penetapan harga.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278827/02._currency_lgfov7.jpg" />
          <li>
            <strong>Pengaturan Harga:</strong>
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Harga Harian Default:</strong> Harga standar per malam untuk hari kerja.</li>
              <li><strong>Harga Akhir Pekan Default:</strong> Harga per malam untuk akhir pekan.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278828/03._price_settings_lwzv6k.jpg" />
            </ul>
          </li>
          <li>
            <strong>Diskon Menginap Lama:</strong>
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Diskon Menginap Bulanan:</strong> Diskon persentase yang diterapkan untuk menginap minimal satu bulan.</li>
              <li><strong>Diskon Menginap Mingguan:</strong> Diskon persentase yang diterapkan untuk menginap minimal satu minggu.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278830/04._length_of_stay_discounts_hjkkt5.jpg" />
            </ul>
          </li>
          <li>
            <strong>Biaya dan Tarif Standar:</strong>
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Harga per Tamu Tambahan:</strong> Biaya tambahan yang dikenakan untuk setiap tamu yang melebihi batas yang ditentukan.</li>
              <li><strong>Tamu Termasuk:</strong> Jumlah tamu yang tercakup dalam harga standar sebelum biaya tambahan berlaku.</li>
              <li><strong>Deposit Keamanan:</strong> Jumlah yang dapat dikembalikan yang diperlukan untuk menutupi potensi kerusakan.</li>
              <li><strong>Biaya Pembersihan:</strong> Biaya yang dikenakan untuk layanan pembersihan setelah check-out.</li>
              <Figure label="" 
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278830/05._standard_fees_and_charges_kjmozd.jpg"/>
            </ul>
          </li>
          <li>
            <strong>Biaya Lainnya:</strong>
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Biaya Resor:</strong> Biaya tambahan untuk fasilitas atau layanan resor.</li>
              <li><strong>Biaya Manajemen:</strong> Biaya layanan atau administrasi yang berlaku.</li>
              <li><strong>Biaya Komunitas:</strong> Biaya untuk layanan atau peraturan komunitas setempat.</li>
              <li><strong>Biaya Linen:</strong> Biaya untuk layanan linen, jika berlaku.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278831/06._other_fees_g9ilin.jpg" />
            </ul>
          </li>
          <li>Klik <strong>Kirim Pengaturan Harga</strong> untuk menyimpan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278832/07._submit_price_settings_omqdhd.jpg" />
          <li>Kemudian, klik tombol <strong>Tutup</strong> di kanan bawah atau ikon <strong>"X"</strong> di kanan atas untuk menutup Pengaturan Listing Airbnb.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278833/08._click_close_button_pacedu.jpg" />
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742278834/09._click_x_icon_ahbirm.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Konfigurasi Pengaturan Harga:</p>
          <p className="mt-1 text-sm text-muted-foreground">Jika Anda mengalami masalah saat menyiapkan Pengaturan Harga, coba langkah-langkah pemecahan masalah berikut:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat mengubah mata uang?</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memiliki izin yang diperlukan untuk mengubah pengaturan mata uang. Segarkan halaman dan coba lagi. 
                Jika mata uang terkunci, periksa apakah Airbnb memiliki pembatasan khusus.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pengaturan harga tidak tersimpan?</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan untuk mengklik <strong>Kirim Pengaturan Harga</strong> setelah membuat perubahan. Verifikasi bahwa harga yang dimasukkan berada dalam kisaran yang diizinkan. 
                Coba bersihkan cache browser dan muat ulang halaman.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Diskon tidak diterapkan dengan benar?</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan persentase <strong>Diskon Menginap Bulanan</strong> dan <strong>Diskon Menginap Mingguan</strong> diatur dengan benar. 
                Segarkan halaman untuk memeriksa apakah diskon telah diperbarui. Coba keluar dan masuk kembali sebelum menerapkan diskon lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Harga tamu tambahan tidak dihitung?</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa nilai <strong>Tamu Termasuk</strong> diatur dengan benar. Verifikasi bahwa bidang <strong>Harga per Tamu Tambahan</strong> diisi dengan benar. 
                Segarkan halaman dan uji harga lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat menambahkan atau memperbarui biaya tambahan (Deposit Keamanan, Biaya Pembersihan, dll.)?</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan bahwa semua bidang biaya yang diperlukan memiliki nilai yang valid. Periksa apakah ada pembatasan sistem yang mencegah modifikasi biaya. 
                Coba akses pengaturan menggunakan browser atau perangkat lain.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Tutup atau ikon "X" tidak merespons?</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman dan coba lagi. Periksa apakah ada pop-up atau overlay yang menghalangi interaksi. Coba akses pengaturan dari perangkat atau browser lain. 
                Jika masalah berlanjut, hubungi dukungan untuk bantuan lebih lanjut.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}