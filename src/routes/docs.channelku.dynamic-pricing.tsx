import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/dynamic-pricing")({
  head: () => ({
    meta: [
      { title: "Dynamic Pricing — Add-Ons | SinergiMax" },
      { name: "description", content: "Optimalkan pendapatan dengan menyesuaikan harga kamar secara otomatis berdasarkan okupansi dan waktu." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "global-settings", label: "Pengaturan Global" },
  { id: "upfront-days", label: "Model Upfront Days" },
  { id: "period-model", label: "Model Periode" },
  { id: "dynamic-time", label: "Dynamic Time" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Dynamic Pricing" activeTo="/docs/channelku/add-ons/dynamic-pricing">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Dynamic Pricing</h1>
      <p className="mt-4">
        <strong>Dynamic Pricing</strong> adalah fitur yang dirancang untuk membantu properti mengoptimalkan pendapatan dengan 
        menyesuaikan harga kamar secara otomatis berdasarkan <strong>tingkat okupansi</strong> dan <strong>waktu</strong>. 
        Tidak seperti harga statis yang tetap konstan, dynamic pricing memungkinkan sistem menaikkan atau menurunkan harga 
        sesuai dengan kondisi pasar dan target okupansi.
      </p>
      <p className="mt-2">
        Untuk menggunakan fitur ini, pengguna harus <strong>mengaktifkan (berlangganan)</strong> dynamic pricing terlebih dahulu. 
        Saat fitur Dynamic Pricing belum diaktifkan, halaman hanya akan menampilkan pesan: 
        <span className="block mt-1 rounded-md border bg-muted/50 p-2 text-center text-sm italic">"Silakan Berlangganan Fitur Ini"</span>
      </p>

      {/* ==================== GLOBAL SETTINGS ==================== */}
      <Section id="global-settings" title="Pengaturan Global">
        <p>
          <strong>Pengaturan Global</strong> adalah pusat konfigurasi utama untuk Dynamic Pricing. Di sini, pengguna dapat memilih 
          model dynamic pricing yang diinginkan, mengatur email notifikasi, dan mengaktifkan serta menjalankan fitur sepenuhnya.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Pengaturan Global:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Pilih Model Dynamic Pricing</strong>
            <br />
            Dari dropdown <strong>Pilih Model Dynamic Pricing</strong>, opsi berikut tersedia:
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Model Upfront Days</strong></li>
              <li><strong>Model Periode Kustom</strong></li>
              <li><strong>Waktu Dinamis</strong></li>
              <li><strong>Nonaktifkan Dyn Pricing</strong> (jika Anda ingin menonaktifkan dynamic pricing sepenuhnya)</li>
            </ul>
            <span className="block text-sm text-muted-foreground">Model yang dipilih akan menentukan metode strategi penetapan harga yang diterapkan oleh sistem.</span>
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746693970/01._global_settings_-_1_nig5cm.jpg" />
          <li>
            <strong>Masukkan Email Notifikasi</strong>
            <br />
            Masukkan alamat email untuk menerima notifikasi terkait perubahan harga.
            <span className="block text-sm text-muted-foreground">Jika dibiarkan kosong, sistem akan menggunakan email utama properti sebagai default.</span>
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746693971/01._global_settings_-_2_khyphb.jpg" />
          <li>
            <strong>Simpan Pengaturan</strong>
            <br />
            Klik tombol <strong>Simpan Perubahan</strong> untuk menyimpan semua pengaturan.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746693973/01._global_settings_-_3_xsio5r.jpg" />
          <li>
            <strong>Eksekusi Manual</strong>
            <br />
            Klik tombol <strong>Jalankan Dynamic Pricing</strong> jika Anda ingin menjalankan proses dynamic pricing segera 
            daripada menunggu otomatisasi terjadwal.
            <br />
            Setelah mengklik, sistem akan menampilkan konfirmasi: 
            <span className="block rounded-md border bg-muted/50 p-2 text-sm italic">"Sistem akan menjalankan dynamic pricing satu kali setiap jam. Apakah Anda yakin ingin menjalankannya sekarang?"</span>
            <ul className="ml-6 mt-1 list-disc">
              <li>Klik <strong>OK</strong> untuk menjalankan dynamic pricing segera.</li>
              <li>Klik <strong>Batal</strong> untuk membatalkan proses.</li>
                        <Figure label=""
                        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746693975/01._global_settings_-_4_hbtxsi.jpg" />
                        <Figure label=""
                        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746693970/01._global_settings_-_5_rrpupt.jpg" />
            </ul>
          </li>
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pengaturan Global:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat memilih Model Dynamic Pricing</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memiliki izin pengguna yang diperlukan untuk mengonfigurasi Pengaturan Global.
                Coba segarkan halaman atau bersihkan cache browser jika dropdown tidak responsif.
                Periksa apakah ada masalah internet aktif yang mungkin mencegah daftar dimuat dengan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Email notifikasi tidak menerima peringatan</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa alamat email yang dimasukkan valid dan aktif.
                Jika bidang dibiarkan kosong, pastikan email utama properti benar dan tidak diblokir.
                Periksa folder spam atau sampah untuk pesan yang terlewat.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Simpan Perubahan tidak merespons</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang yang diperlukan (seperti model pricing) diisi.
                Tunggu beberapa detik setelah mengklik untuk memberi waktu sistem memproses pembaruan.
                Coba simpan lagi di tab browser baru atau mode penyamaran untuk menghindari masalah cache.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Jalankan Dynamic Pricing tidak berfungsi</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih model pricing sebelum mencoba menjalankan.
                Konfirmasikan Anda memiliki akses admin untuk memicu eksekusi manual.
                Jika sistem tidak merespons setelah mengklik "OK", muat ulang halaman dan coba lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan dalam Pengaturan Global tidak memengaruhi harga</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali apakah model yang benar dipilih dan disimpan.
                Dynamic pricing hanya akan berjalan otomatis setiap jam—jika Anda ingin perubahan segera diterapkan, 
                klik <strong>Jalankan Dynamic Pricing</strong>.
                Jika masalah berlanjut, hubungi tim dukungan untuk memeriksa masalah eksekusi latar belakang.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== UPFRONT DAYS ==================== */}
      <Section id="upfront-days" title="Model Upfront Days">
        <p>
          <strong>Upfront Days</strong> memungkinkan harga kamar disesuaikan berdasarkan <strong>tingkat okupansi</strong> dan 
          <strong>jumlah hari sebelum tanggal check-in</strong> (hari di muka). Fitur ini berguna untuk mendorong pemesanan awal 
          saat okupansi rendah dengan menawarkan diskon, dan menaikkan harga seiring meningkatnya okupansi dan mendekatnya tanggal check-in.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Model Upfront Days:</h4>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Pilih model <strong>Upfront Days</strong> dari <strong>Pengaturan Global</strong> dan klik <strong>Simpan Perubahan</strong>.</li>
          <li>Buka menu <strong>Upfront Days</strong> di panel navigasi Dynamic Pricing.</li>
                    <Figure label="" 
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746755185/02._upfront_days_model_-_0_fuh5ik.jpg" />
          <li>Halaman akan segera menampilkan formulir pengaturan aturan harga.</li>
          <li>
            Isi informasi berikut:
            <ul className="ml-6 mt-1 list-disc">
              <li>
                <strong>Okupansi Mulai (%) – Akhir (%):</strong> Tentukan rentang okupansi untuk aturan ini.
                <br />
                <span className="text-sm text-muted-foreground">Contoh: <code>0 – 20</code> berarti harga akan menyesuaikan saat okupansi di bawah 20%.</span>
              </li>
              <li>
                <strong>Penyesuaian Harga (%):</strong> Masukkan persentase untuk penyesuaian harga. Gunakan nilai negatif untuk diskon.
                <br />
                <span className="text-sm text-muted-foreground">Contoh: <code>-20</code> berarti harga akan dikurangi 20%.</span>
              </li>
              <li>
                <strong>Hari Maksimum Di Muka:</strong> Tentukan berapa hari sebelum check-in aturan ini berlaku.
                <br />
                <span className="text-sm text-muted-foreground">Contoh: <code>2</code> berarti aturan hanya aktif jika pemesanan dilakukan dalam 2 hari sebelum tanggal check-in.</span>
              </li>
              <li>
                <strong>Tipe Kamar:</strong> Pilih kamar yang akan menerapkan aturan ini.
                <br />
                <span className="text-sm text-muted-foreground">Penyesuaian akan secara otomatis diterapkan ke semua rate plan untuk kamar yang dipilih.</span>
              </li>
            </ul>
          </li>
          <li>Setelah menyelesaikan pengaturan, klik <strong>Perbarui</strong> untuk menerapkan model upfront days.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746755187/02._upfront_days_model_-_1_mo2nyj.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Model Upfront Days:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat menemukan menu Upfront Days</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih model <strong>Upfront Days</strong> di <strong>Pengaturan Global</strong> dan menyimpan perubahan.
                Segarkan halaman atau masuk kembali ke akun Anda jika menu tidak segera muncul.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Perbarui tidak berfungsi</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang yang diperlukan (Okupansi %, Penyesuaian Harga, Hari Di Muka, dan Tipe Kamar) diisi dengan benar.
                Hindari penggunaan karakter non-numerik di bidang numerik.
                Coba lagi setelah menyegarkan halaman atau menggunakan browser lain.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Penyesuaian harga tidak tercermin dalam harga kamar</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa rentang okupansi dan nilai hari di muka sesuai dengan kondisi pemesanan Anda saat ini.
                Perhatikan bahwa fitur ini hanya memengaruhi harga ketika pemesanan memenuhi <strong>kriteria okupansi dan hari di muka</strong>.
                Periksa apakah aturan atau model pricing lain menggantikan pengaturan ini.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Dropdown Tipe Kamar kosong</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa tipe kamar telah dibuat dan diaktifkan dengan benar di sistem.
                Jika tidak ada kamar yang tercantum, periksa izin pengguna Anda atau hubungi admin untuk akses.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Persentase penyesuaian harga diabaikan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan nilai penyesuaian dimasukkan dengan benar (mis., gunakan <code>-10</code> untuk diskon 10%, <code>15</code> untuk kenaikan 15%).
                Jangan sertakan simbol <code>%</code> dalam input; cukup gunakan angka.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== PERIOD MODEL ==================== */}
      <Section id="period-model" title="Model Periode">
        <p>
          <strong>Model Periode</strong> memungkinkan pengguna untuk menetapkan dynamic pricing berdasarkan <strong>grup kamar</strong>, 
          <strong>rentang okupansi</strong>, dan <strong>aturan harga khusus</strong>. Model ini ideal ketika Anda ingin menerapkan 
          strategi harga yang berbeda untuk tipe kamar atau grup tertentu dalam periode waktu tertentu.
        </p>

        <div className="mt-4 rounded-lg border bg-blue-50 p-4 dark:bg-blue-950/20">
          <p className="text-sm font-semibold">Model Periode dibagi menjadi tiga langkah konfigurasi utama:</p>
          <ol className="ml-6 mt-1 list-decimal text-sm">
            <li><strong>Pengaturan Grup (Grup Okupansi)</strong></li>
            <li><strong>Rentang Okupansi</strong></li>
            <li><strong>Aturan Harga Kamar (Kelola Aturan)</strong></li>
          </ol>
        </div>

        <h4 className="mt-4 font-medium">Pengaturan Grup (Grup Okupansi):</h4>
        <p>Sebelum menetapkan dynamic pricing, Anda perlu membuat <strong>Grup Okupansi</strong> untuk mengelompokkan tipe kamar 
        yang akan memiliki aturan okupansi dan pengaturan harga yang sama.</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tab <strong>Grup Okupansi</strong>.</li>
          <li>Klik tombol <strong>Buat Grup Okupansi</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746755186/03._occupancy_groups_-_1_icwlol.jpg" />
          <li>
            Masukkan informasi berikut:
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Nama Label:</strong> Nama grup (mis., "Satu Kamar Tidur", "Kamar Deluxe").</li>
              <li><strong>Tipe Kamar:</strong> Pilih satu atau lebih kamar untuk dimasukkan dalam grup ini.</li>
                        <Figure label=""
                        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746755186/03._occupancy_groups_-_2_pv9j1d.jpg" />
            </ul>
          </li>
          <li>Klik <strong>Simpan Perubahan</strong> untuk menyimpan pengaturan grup.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746755186/03._occupancy_groups_-_3_mtixe4.jpg" />
        </ol>

        <h4 className="mt-4 font-medium">Rentang Okupansi:</h4>
        <p>Setelah grup dibuat, tentukan <strong>rentang okupansi</strong> yang akan menjadi dasar penyesuaian harga.</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tab <strong>Rentang Okupansi</strong>.</li>
          <li>Klik tombol <strong>Buat Rentang Okupansi</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746755187/04._occupancy_range_-_1_dwwbif.jpg" />
          <li>
            Isi informasi berikut:
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Grup Okupansi:</strong> Pilih grup yang telah Anda buat sebelumnya.</li>
              <li>
                <strong>Okupansi Mulai (%) dan Okupansi Akhir (%):</strong> Tentukan persentase mulai dan akhir okupansi untuk aturan ini.
                <br />
                <span className="text-sm text-muted-foreground">Contoh: Untuk grup "Satu Kamar Tidur", Anda dapat membuat aturan seperti 0%–30%, 31%–60%, dan seterusnya.</span>
              </li>
                        <Figure label=""
                        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746755187/04._occupancy_range_-_2_tslwga.jpg" />
            </ul>
          </li>
          <li>Klik <strong>Simpan Perubahan</strong> untuk menyimpan rentang okupansi.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746755187/04._occupancy_range_-_3_iboj6u.jpg" />
        </ol>

        <h4 className="mt-4 font-medium">Aturan Harga Kamar (Kelola Aturan):</h4>
        <p>Setelah Rentang Okupansi ditetapkan, langkah selanjutnya adalah menentukan <strong>aturan harga</strong> untuk setiap 
        kombinasi okupansi dan tipe kamar.</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tab <strong>Kelola Aturan</strong>.</li>
          <li>Klik tombol <strong>Tambah Aturan Dynamic Pricing Baru</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746755187/05._manage_rules_-_1_rinre9.jpg" />
          <li>
            Lengkapi formulir berikut:
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Nama Label:</strong> Nama grup.</li>
              <li><strong>Pilih Grup:</strong> Pilih grup yang akan menerapkan aturan.</li>
              <li><strong>Aturan Okupansi:</strong> Pilih aturan yang ingin Anda terapkan untuk grup okupansi yang dipilih.</li>
              <li><strong>Sertakan / Kecualikan Tanggal:</strong> Pilih tanggal tertentu untuk disertakan atau dikecualikan.</li>
              <li><strong>Pembatasan Menit Terakhir:</strong> Atur waktu untuk pemesanan menit terakhir (ya/tidak).</li>
              <li><strong>Metode Perhitungan:</strong> Pilih metode perhitungan harga (mis., berdasarkan okupansi atau ketersediaan).</li>
              <li><strong>Hari dalam Seminggu:</strong> Pilih hari dalam seminggu saat aturan akan berlaku.</li>
            </ul>
          </li>
          <li>Klik <strong>Simpan Perubahan</strong> untuk menyimpan aturan.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746755187/05._manage_rules_-_2_bfmzpa.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-semibold">Catatan Penting:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>Anda harus menyelesaikan pengaturan secara <strong>berurutan</strong> (Grup → Rentang → Aturan) agar dynamic pricing berfungsi dengan benar.</li>
            <li>Setiap kali pengaturan disimpan, sistem akan <strong>secara otomatis memperbarui harga</strong> berdasarkan aturan terbaru.</li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Model Periode:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Grup Okupansi tidak dapat dibuat</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan bidang <strong>Nama Label</strong> diisi dengan benar dan setidaknya satu <strong>Tipe Kamar</strong> dipilih.
                Hindari penggunaan karakter khusus dalam nama grup.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kamar hilang dari pilihan Tipe Kamar</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa apakah kamar telah dikonfigurasi dan diaktifkan dengan benar di sistem utama.
                Pastikan peran pengguna Anda memiliki izin untuk mengakses semua tipe kamar yang tersedia.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Rentang Okupansi tidak tersimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa nilai <strong>Okupansi Mulai (%)</strong> dan <strong>Okupansi Akhir (%)</strong> dimasukkan dan berada dalam rentang 0–100.
                Pastikan grup okupansi yang dipilih sudah ada dan disimpan dengan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Bagian Kelola Aturan tidak menampilkan grup atau aturan okupansi</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Grup Okupansi</strong> dan <strong>Rentang Okupansi</strong> telah dikonfigurasi terlebih dahulu.
                Tab <strong>Kelola Aturan</strong> bergantung pada data dari dua langkah sebelumnya dan akan tetap kosong jika data tersebut hilang.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Aturan Dynamic Pricing tidak diterapkan pada harga</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa apakah <strong>Hari dalam Seminggu</strong>, <strong>Rentang Tanggal</strong>, atau <strong>Aturan Okupansi</strong> terlalu restriktif.
                Konfirmasikan bahwa <strong>Metode Perhitungan</strong> yang benar dipilih dan sesuai dengan strategi harga Anda.
                Tunggu beberapa saat atau segarkan halaman, karena sistem mungkin memerlukan waktu untuk memperbarui aturan baru.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tanggal Sertakan/Kecualikan tidak berfungsi</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali format dan rentang tanggal yang dipilih.
                Konflik antara tanggal <strong>Sertakan</strong> dan <strong>Kecualikan</strong> dapat mencegah aturan diterapkan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== DYNAMIC TIME ==================== */}
      <Section id="dynamic-time" title="Dynamic Time">
        <p>
          <strong>Dynamic Time</strong> memungkinkan Anda menyesuaikan harga kamar berdasarkan <strong>jam tertentu</strong> dalam sehari. 
          Fitur ini sangat berguna untuk properti seperti hotel harian atau properti yang ingin menetapkan harga khusus selama 
          <strong>jam sibuk</strong>, seperti malam hari atau akhir pekan.
        </p>
        <p className="mt-2">
          Berbeda dengan model lainnya, Dynamic Time mengevaluasi dan menerapkan penyesuaian harga berdasarkan <strong>waktu dalam sehari</strong>, 
          bukan hanya tanggal atau okupansi.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Dynamic Time:</h4>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746755188/06._dynamic_time_-_1_uyffgq.jpg" />
        <ol className="ml-6 list-decimal space-y-2">
          <li>Klik tab <strong>Waktu Dinamis</strong>.</li>
          <li>Klik <strong>"Aturan Waktu Dinamis"</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746755185/06._dynamic_time_-_2_nwheog.jpg" />
          <li>
            Isi Detail Aturan Waktu Dinamis:
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Nama Label:</strong> Masukkan nama aturan (mis., "Evening Boost").</li>
              <li><strong>Pengali Aturan:</strong> Tentukan pengali untuk aturan yang dipilih.</li>
              <li><strong>Waktu Mulai dan Waktu Akhir:</strong> Tentukan waktu mulai dan akhir (mis., <code>18:00 – 23:59</code>).</li>
              <li><strong>Tipe Kamar:</strong> Pilih tipe kamar yang akan dikenakan aturan ini.</li>
                        <Figure label=""
                        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746755186/06._dynamic_time_-_3_zsan0l.jpg" />
              <li><strong>Sertakan / Kecualikan Tanggal:</strong> Pilih tanggal tertentu untuk disertakan atau dikecualikan.</li>
              <li><strong>Pembatasan Menit Terakhir (Hari):</strong> Atur waktu untuk pemesanan menit terakhir (ya/tidak).</li>
              <li><strong>Hari dalam Seminggu:</strong> Pilih hari dalam seminggu saat aturan akan berlaku.</li>
                        <Figure label=""
                        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746755186/06._dynamic_time_-_4_l5s4s2.jpg" />
            </ul>
          </li>
          <li>Klik <strong>"Simpan Perubahan"</strong> untuk menyimpan aturan.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746755185/06._dynamic_time_-_5_i2ainx.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Dynamic Time:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Aturan Dynamic Time tidak tersimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang yang diperlukan diisi: <strong>Nama Label</strong>, <strong>Waktu Mulai – Waktu Akhir</strong>, 
                <strong>Pengali Aturan</strong>, dan <strong>Tipe Kamar</strong>.
                Hindari penggunaan karakter yang tidak didukung dalam <strong>Nama Label</strong>.
                Periksa adanya aturan yang tumpang tindih dengan rentang waktu dan tipe kamar yang sama.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Penyesuaian harga tidak tercermin selama waktu yang ditentukan</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa waktu saat ini berada dalam <strong>Waktu Mulai – Waktu Akhir</strong> yang ditentukan.
                Pastikan aturan diatur untuk berlaku pada <strong>Hari dalam Seminggu</strong> saat ini.
                Periksa apakah tanggal saat ini secara tidak sengaja dikecualikan melalui opsi <strong>Kecualikan Tanggal</strong>.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tipe kamar tidak muncul dalam dropdown</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan tipe kamar telah dikonfigurasi dan diaktifkan dengan benar di sistem.
                Verifikasi akun pengguna Anda memiliki izin untuk mengelola harga untuk tipe kamar yang dipilih.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pengali tidak berdampak pada harga</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali bahwa <strong>Pengali Aturan</strong> tidak diatur ke <code>1</code> (yang berarti tidak ada perubahan).
                Pastikan tidak ada aturan harga lain atau penggantian yang lebih diutamakan selama periode waktu yang sama.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pembatasan Menit Terakhir tidak berfungsi seperti yang diharapkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa pembatasan diaktifkan dan jumlah hari ditentukan dengan benar.
                Periksa apakah upaya pemesanan Anda berada di luar jendela menit terakhir yang dikonfigurasi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}