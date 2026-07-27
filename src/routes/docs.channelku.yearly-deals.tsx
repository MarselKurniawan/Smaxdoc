import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/yearly-deals")({
  head: () => ({
    meta: [
      { title: "Penawaran Tahunan — Channelku | SinergiMax" },
      { name: "description", content: "Kelola harga, ketersediaan, dan pembatasan untuk seluruh tahun secara massal di Channelku." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "single-rate-plan", label: "Pembaruan Rate Plan Tunggal" },
  { id: "update-availability", label: "Perbarui Ketersediaan" },
  { id: "update-rates", label: "Perbarui Harga" },
  { id: "update-min-night", label: "Perbarui Minimum Malam" },
  { id: "update-stop-sell", label: "Perbarui Stop Sell" },
  { id: "update-cta", label: "Perbarui CTA" },
  { id: "update-ctd", label: "Perbarui CTD" },
  { id: "exception", label: "Pengecualian" },
  { id: "last-update-history", label: "Riwayat 10 Pembaruan Terakhir" },
  { id: "ota-update", label: "Pembaruan OTA" },
  { id: "seasons", label: "Musim" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Penawaran Tahunan" activeTo="/docs/channelku/channel-manager/yearly-deals">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Penawaran Tahunan</h1>
      <p className="mt-4">
        <strong>Penawaran Tahunan</strong> adalah fitur di dalam Channel Manager yang memungkinkan pengguna untuk memperbarui harga, 
        ketersediaan kamar, dan pembatasan untuk seluruh tahun secara massal. Fitur ini menyederhanakan manajemen jangka panjang 
        dan memastikan konsistensi data di semua OTA.
      </p>
      <p className="mt-2">
        Dengan Penawaran Tahunan, Anda dapat mengelola harga, ketersediaan, dan pembatasan seperti Minimum Malam, Stop Sell, 
        Close to Arrival (CTA), dan Close to Departure (CTD) dari satu tampilan terpusat.
      </p>

      {/* ==================== SINGLE RATE PLAN UPDATE ==================== */}
      <Section id="single-rate-plan" title="Pembaruan Rate Plan Tunggal">
        <p>
          Saat mengakses halaman Penawaran Tahunan untuk pertama kalinya, tampilan akan kosong. Untuk mengelola Pembaruan Rate Plan Tunggal, 
          Anda harus memilih parameter yang diperlukan terlebih dahulu.
        </p>

        <h4 className="mt-4 font-medium">Cara Menggunakan Pembaruan Rate Plan Tunggal:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>Pastikan Anda berada di tab <strong>Pembaruan Rate Plan Tunggal</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746417552/01._single_rate_plan_update_tab_scj8yf.jpg" />
          <li>Pilih <strong>Rate Plan</strong>, <strong>Situs Eksternal</strong>, dan <strong>Tahun</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746417552/02._choose_the_fields_uxvhcv.jpg" />
          <li>
            Setelah dipilih, halaman akan menampilkan grid berisi informasi harga, ketersediaan, dan pembatasan per bulan.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746417552/03._single_rate_plan_update_details_faszpy.jpg" />
          <li>
            Untuk memperbarui nilai untuk kolom tertentu (mis., Harga, Ketersediaan, Min. Malam, CTA, dll.), 
            klik pada kolom bulan yang diinginkan di baris data yang sesuai.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746417552/04._single_rate_plan_tab_options_b6zlng.jpg" />
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Akses Pembaruan Rate Plan Tunggal:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Halaman Penawaran Tahunan tampak kosong setelah dimuat</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih kombinasi <strong>Rate Plan</strong>, <strong>Situs Eksternal</strong>, dan <strong>Tahun</strong> yang valid.
                Coba segarkan halaman atau beralih ke browser lain jika masalah berlanjut.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Grid tidak muncul setelah memilih parameter</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali apakah semua bidang wajib (Rate Plan, Situs Eksternal, dan Tahun) diisi dengan benar.
                Tunggu beberapa saat—memuat grid mungkin memerlukan waktu tergantung pada jumlah data.
                Jika masalah berlanjut, bersihkan cache browser dan muat ulang halaman.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat mengklik atau memilih bulan di grid</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memiliki hak akses yang tepat untuk melakukan pembaruan pada Rate Plan dan Situs Eksternal yang dipilih.
                Coba perkecil tampilan browser (mis., tekan <kbd>Ctrl</kbd> + <kbd>-</kbd>) untuk memastikan semua elemen grid terlihat.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak ada opsi pembaruan muncul setelah mengklik sel</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda berada di tab yang benar (<strong>Pembaruan Rate Plan Tunggal</strong>) sebelum berinteraksi dengan grid.
                Beberapa bidang mungkin tidak dapat diedit jika data disinkronkan secara eksternal atau dibatasi oleh pengaturan sistem.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== UPDATE AVAILABILITY ==================== */}
      <Section id="update-availability" title="Perbarui Ketersediaan">
        <p>
          Fitur ini memungkinkan pengguna untuk memperbarui ketersediaan kamar untuk satu rate plan sepanjang tahun. 
          Ada dua metode pembaruan yang tersedia:
        </p>

        <h4 className="mt-4 font-medium">Pembaruan Umum:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pilih tab <strong>Ketersediaan</strong>.</li>
          <li>
            Pilih tanggal yang ingin Anda perbarui menggunakan salah satu opsi berikut:
            <ul className="ml-6 list-disc">
              <li>Centang hari tertentu (mis., Senin hingga Jumat),</li>
              <li>Gunakan <strong>Pilih Rentang Tanggal</strong> untuk memilih rentang tanggal,</li>
              <li>Atau pilih berdasarkan <strong>Musim</strong> yang telah dibuat sebelumnya.</li>
            </ul>
          </li>
          <li>
            <strong>Catatan:</strong> Jika Anda belum membuat Musim apa pun, Anda dapat membuatnya terlebih dahulu. 
            Petunjuk terperinci tersedia di bagian <strong>Cara Membuat Musim</strong>.
          </li>
          <li>Masukkan harga baru di kolom input <strong>Ubah Ketersediaan Menjadi:</strong>.</li>
          <li>Klik <strong>Perbarui</strong> untuk menerapkan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746432842/05._availability_skz8wh.jpg" />
        </ol>

        <h4 className="mt-4 font-medium">Pembaruan Berbasis Baris:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Gulir ke bawah ke tampilan tabel kalender.</li>
          <li>Klik langsung pada tanggal yang ingin Anda perbarui.</li>
          <li>Masukkan nilai ketersediaan di kolom input <strong>Ubah Ketersediaan Menjadi:</strong>.</li>
          <li>Klik <strong>Perbarui</strong> untuk menerapkan pembaruan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543738/01._select_date_ranges_-_2_ltyomr.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pembaruan Ketersediaan Rate Plan Tunggal:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tab Ketersediaan tidak merespons saat diklik</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda berada di bagian <strong>Pembaruan Rate Plan Tunggal</strong> yang benar. Coba segarkan halaman atau ganti browser.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat memilih rentang tanggal atau musim</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih <strong>Rate Plan</strong>, <strong>Situs Eksternal</strong>, dan <strong>Tahun</strong> yang valid sebelum mencoba pembaruan. Jika menggunakan Musim, pastikan setidaknya satu musim telah dibuat.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Perbarui dinonaktifkan atau tidak responsif</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa bahwa Anda telah memasukkan angka yang valid di kolom <strong>Ubah Ketersediaan Menjadi</strong>. Konfirmasikan bahwa setidaknya satu hari atau musim telah dipilih untuk pembaruan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan tidak tercermin setelah mengklik Perbarui</dt>
              <dd className="ml-4 text-muted-foreground">
                Pembaruan mungkin memerlukan beberapa detik untuk diproses; coba segarkan halaman. Periksa tab <strong>Riwayat 10 Pembaruan Terakhir</strong> untuk memverifikasi apakah pembaruan berhasil dikirim.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Nilai ketersediaan kembali setelah pembaruan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan nilai yang dimasukkan diizinkan berdasarkan aturan atau pembatasan inventaris. Jika disinkronkan dengan OTA, pembaruan mungkin ditimpa—konfirmasikan dengan extranet OTA Anda.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kesalahan: "Format ketersediaan tidak valid"</dt>
              <dd className="ml-4 text-muted-foreground">
                Hanya angka bulat (mis., <code>1</code>, <code>5</code>) yang diizinkan. Jangan sertakan simbol atau teks.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== UPDATE RATES ==================== */}
      <Section id="update-rates" title="Perbarui Harga">
        <p>
          Fitur ini memungkinkan pengelola properti untuk memperbarui harga kamar secara massal dalam rentang tanggal atau hari tertentu, 
          memastikan konsistensi harga di semua OTA yang terhubung. Ada dua cara untuk memperbarui harga:
        </p>

        <h4 className="mt-4 font-medium">Pembaruan Umum:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pilih tab <strong>Harga</strong>.</li>
          <li>Pilih tanggal yang ingin Anda perbarui (centang hari tertentu, gunakan <strong>Pilih Rentang Tanggal</strong>, atau pilih berdasarkan <strong>Musim</strong>).</li>
          <li>Masukkan harga baru di kolom input <strong>Ubah Harga Menjadi:</strong>.</li>
          <li>Klik <strong>Perbarui</strong> untuk menerapkan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746432741/06._rates_kgpdlu.jpg" />
        </ol>

        <h4 className="mt-4 font-medium">Pembaruan Berbasis Baris:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Gulir ke bagian kalender di bawah.</li>
          <li>Klik kotak tanggal tertentu di bawah baris <strong>Harga</strong>.</li>
          <li>Masukkan harga baru di kolom <strong>Ubah Harga Menjadi:</strong>.</li>
          <li>Klik <strong>Kirim</strong> untuk menyimpan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543747/02._single_rateplan_update_rates_-_2_tjaijl.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pembaruan Harga Rate Plan Tunggal:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tab Harga tidak dapat dipilih atau hilang</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda berada di halaman <strong>Pembaruan Rate Plan Tunggal</strong>. Konfirmasikan bahwa <strong>Rate Plan</strong>, <strong>Situs Eksternal</strong>, dan <strong>Tahun</strong> telah dipilih.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kolom input harga dinonaktifkan atau tidak menerima input</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih setidaknya satu hari, rentang tanggal, atau musim sebelum memasukkan harga. Coba bersihkan cache browser atau segarkan halaman.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pembaruan dikirim tetapi tidak ada perubahan yang muncul</dt>
              <dd className="ml-4 text-muted-foreground">
                Pembaruan harga diproses di latar belakang. Tunggu beberapa saat dan segarkan tampilan kalender. Periksa tab <strong>Riwayat 10 Pembaruan Terakhir</strong> untuk mengonfirmasi apakah pembaruan berhasil.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Harga kembali setelah dikirim</dt>
              <dd className="ml-4 text-muted-foreground">
                Harga yang dimasukkan mungkin bertentangan dengan pembatasan yang ditetapkan dalam rate plan atau oleh OTA. Jika terhubung ke OTA, periksa extranet OTA untuk memastikan pembaruan tidak ditimpa.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kesalahan: "Format harga tidak valid"</dt>
              <dd className="ml-4 text-muted-foreground">
                Masukkan harga sebagai angka bulat saja (mis., <code>750000</code>), tanpa koma, titik, atau simbol mata uang.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat mengedit harga tanggal tertentu</dt>
              <dd className="ml-4 text-muted-foreground">
                Beberapa tanggal mungkin terkunci karena pembatasan atau promosi. Hubungi administrator sistem jika masalah berlanjut.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== UPDATE MINIMUM NIGHT ==================== */}
      <Section id="update-min-night" title="Perbarui Minimum Malam">
        <p>
          Fitur ini memungkinkan pengelola properti untuk mengatur jumlah minimum malam yang diperlukan untuk pemesanan dalam rentang tanggal 
          tertentu atau pada hari-hari tertentu, membantu menegakkan kebijakan menginap di seluruh OTA. Ada dua cara untuk memperbarui minimum malam:
        </p>

        <h4 className="mt-4 font-medium">Pembaruan Umum:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pilih tab <strong>Min Malam</strong>.</li>
          <li>Pilih tanggal yang ingin Anda perbarui (centang hari tertentu, gunakan <strong>Pilih Rentang Tanggal</strong>, atau pilih berdasarkan <strong>Musim</strong>).</li>
          <li>Masukkan jumlah malam di kolom input <strong>Ubah Min Malam Menjadi:</strong>.</li>
          <li>Klik <strong>Perbarui</strong> untuk menerapkan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746432742/07._min_night_ceny1q.jpg" />
        </ol>

        <h4 className="mt-4 font-medium">Pembaruan Berbasis Baris:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Gulir ke bagian kalender di bawah.</li>
          <li>Klik pada tanggal tertentu di baris <strong>Min Malam</strong>.</li>
          <li>Masukkan nilai minimum malam di kolom input <strong>Ubah Min Malam Menjadi:</strong>.</li>
          <li>Klik <strong>Kirim</strong> untuk menyimpan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543751/03._single_rateplan_update_minimum_night_-_2_st3xyp.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pembaruan Minimum Malam:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tab Min Malam hilang atau tidak dapat diklik</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih <strong>Rate Plan</strong>, <strong>Situs Eksternal</strong>, dan <strong>Tahun</strong> sebelum mencoba pembaruan. Coba segarkan halaman atau bersihkan cache browser.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat memasukkan nilai di kolom "Ubah Min Malam Menjadi"</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih setidaknya satu tanggal, hari tertentu, atau musim sebelum memasukkan nilai. Pastikan browser Anda tidak memblokir konten interaktif.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pembaruan dikirim, tetapi tidak ada perubahan yang ditampilkan di kalender</dt>
              <dd className="ml-4 text-muted-foreground">
                Pembaruan diterapkan di latar belakang. Coba segarkan halaman untuk melihat perubahan terbaru. Verifikasi pembaruan melalui tab <strong>Riwayat 10 Pembaruan Terakhir</strong>.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Nilai minimum malam kembali atau hilang setelah dikirim</dt>
              <dd className="ml-4 text-muted-foreground">
                Beberapa OTA mungkin memiliki pembatasan default yang menggantikan nilai. Konfirmasikan bahwa OTA yang terhubung mengizinkan kontrol manual atas pengaturan minimum malam.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kesalahan: "Format minimum malam tidak valid"</dt>
              <dd className="ml-4 text-muted-foreground">
                Gunakan hanya angka bulat numerik (mis., <code>2</code>, <code>3</code>) tanpa titik desimal atau karakter non-numerik.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat memperbarui tanggal tertentu</dt>
              <dd className="ml-4 text-muted-foreground">
                Tanggal yang dipilih mungkin terkunci karena promosi yang bertentangan atau aturan sistem. Hubungi dukungan jika tanggal tetap tidak dapat diedit setelah beberapa percobaan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== UPDATE STOP SELL ==================== */}
      <Section id="update-stop-sell" title="Perbarui Stop Sell">
        <p>
          Fitur ini memungkinkan pengelola properti untuk mengaktifkan atau menghapus Stop Sell untuk tanggal tertentu 
          menggunakan antarmuka Penawaran Tahunan.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengaktifkan Stop Sell:</h4>
        <p><strong>Pembaruan Umum:</strong></p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka tab <strong>Stop Sell</strong> di panel Rate Plan Tunggal.</li>
          <li>Pilih tanggal yang ingin Anda perbarui (centang hari tertentu, gunakan <strong>Pilih Rentang Tanggal</strong>, atau pilih berdasarkan <strong>Musim</strong>).</li>
          <li>Atur status Stop Sell menjadi <strong>YA</strong> di samping tombol "Perbarui".</li>
          <li>Klik <strong>Perbarui</strong> untuk menerapkan perubahan. Notifikasi sukses akan mengonfirmasi pembaruan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746432746/08._stop_sell_-_yes_kjovob.jpg" />
        </ol>

        <p><strong>Pembaruan Berbasis Baris:</strong></p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Gulir ke bawah ke bagian tabel kalender.</li>
          <li>Klik pada tanggal apa pun di baris <strong>Stop Sell</strong> untuk mengubah.</li>
          <li>Pilih <strong>YA</strong> di dropdown di samping "Ubah Stop Sell Menjadi:".</li>
          <li>Klik <strong>Kirim</strong> untuk menyimpan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543766/04._single_rateplan_update_stop_-_2_upyxbl.png" />
        </ol>

        <h4 className="mt-4 font-medium">Cara Menghapus Stop Sell:</h4>
        <p><strong>Pembaruan Umum:</strong></p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka tab <strong>Stop Sell</strong> di panel Rate Plan Tunggal.</li>
          <li>Pilih tanggal dengan cara yang sama seperti di atas.</li>
          <li>Atur status Stop Sell menjadi <strong>TIDAK</strong> di samping tombol "Perbarui".</li>
          <li>Klik <strong>Perbarui</strong> untuk menerapkan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746432749/09._stop_sell_-_no_dcligm.jpg" />
        </ol>

        <p><strong>Pembaruan Berbasis Baris:</strong></p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Gulir ke bawah ke bagian tabel kalender.</li>
          <li>Klik pada tanggal apa pun di baris <strong>Stop Sell</strong> untuk mengubah.</li>
          <li>Pilih <strong>TIDAK</strong> di dropdown di samping "Ubah Stop Sell Menjadi:".</li>
          <li>Klik <strong>Kirim</strong> untuk menyimpan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543773/05._how_to_remove_cta_-_2_ujxvvt.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pembaruan Stop Sell:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tab Stop Sell tidak terlihat atau tidak dapat diklik</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>Rate Plan</strong>, <strong>Situs Eksternal</strong>, dan <strong>Tahun</strong> telah dipilih. Segarkan halaman atau coba gunakan browser lain.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat mengubah nilai Stop Sell di dropdown</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih setidaknya satu tanggal, hari tertentu, atau musim sebelum membuat perubahan. Jika dropdown dinonaktifkan, tanggal mungkin terkunci karena pembatasan lain atau aturan sistem.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Status Stop Sell tidak berubah setelah mengklik Perbarui/Kirim</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan kalender untuk memeriksa apakah perubahan telah diterapkan. Tinjau <strong>Riwayat 10 Pembaruan Terakhir</strong> untuk konfirmasi. Jika perubahan masih tidak tercermin, coba bersihkan cache browser dan ulangi pembaruan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Perbarui dinonaktifkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa nilai Stop Sell (YA/TIDAK) telah dipilih. Periksa kembali bahwa tanggal telah dipilih dengan benar menggunakan salah satu metode yang tersedia.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kesalahan: "Nilai tidak valid untuk Stop Sell"</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda hanya memilih <strong>YA</strong> atau <strong>TIDAK</strong> dari opsi dropdown yang disediakan. Input teks manual tidak didukung di dropdown Stop Sell.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat menerapkan pembaruan ke tanggal tertentu</dt>
              <dd className="ml-4 text-muted-foreground">
                Tanggal tertentu mungkin dikelola secara otomatis oleh kebijakan OTA yang terhubung atau promosi. Hubungi dukungan jika masalah yang sama terjadi secara konsisten pada tanggal tertentu.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== UPDATE CTA ==================== */}
      <Section id="update-cta" title="Perbarui CTA (Close to Arrival)">
        <h4 className="font-medium">Cara Mengaktifkan CTA:</h4>
        <p><strong>Pembaruan Umum:</strong></p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka tab <strong>CTA</strong> di panel Rate Plan Tunggal.</li>
          <li>Pilih tanggal yang ingin Anda perbarui (centang hari tertentu, gunakan <strong>Pilih Rentang Tanggal</strong>, atau pilih berdasarkan <strong>Musim</strong>).</li>
          <li>Atur status CTA menjadi <strong>YA</strong> di samping tombol "Perbarui".</li>
          <li>Klik <strong>Perbarui</strong> untuk menerapkan perubahan.</li>
        </ol>

        <p><strong>Pembaruan Berbasis Baris:</strong></p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Gulir ke bawah ke bagian tabel kalender.</li>
          <li>Klik pada tanggal apa pun di baris <strong>CTA</strong> untuk mengubah.</li>
          <li>Pilih <strong>YA</strong> di dropdown di samping "Ubah CTA Menjadi:".</li>
          <li>Klik <strong>Kirim</strong> untuk menyimpan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543779/05._single_rateplan_update_close_to_arrival_-_2_a7cwua.png" />
        </ol>

        <h4 className="mt-4 font-medium">Cara Menghapus CTA:</h4>
        <p><strong>Pembaruan Umum:</strong></p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka tab <strong>CTA</strong> di panel Rate Plan Tunggal.</li>
          <li>Pilih tanggal yang ingin Anda perbarui.</li>
          <li>Atur status CTA menjadi <strong>TIDAK</strong> di samping tombol "Perbarui".</li>
          <li>Klik <strong>Perbarui</strong> untuk menerapkan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746432729/11._cta_-_no_xaiza2.jpg" />
        </ol>

        <p><strong>Pembaruan Berbasis Baris:</strong></p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Gulir ke bawah ke bagian tabel kalender.</li>
          <li>Klik pada tanggal apa pun di baris <strong>CTA</strong> untuk mengubah.</li>
          <li>Pilih <strong>TIDAK</strong> di dropdown di samping "Ubah CTA Menjadi:".</li>
          <li>Klik <strong>Kirim</strong> untuk menyimpan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543773/05._how_to_remove_cta_-_2_ujxvvt.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pembaruan CTA:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tab CTA hilang atau tidak responsif</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa Anda telah memilih <strong>Rate Plan</strong>, <strong>Situs Eksternal</strong>, dan <strong>Tahun</strong> sebelum mengakses tab CTA. Muat ulang halaman atau coba gunakan browser lain.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat memilih YA/TIDAK untuk CTA</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan tanggal telah dipilih dengan benar melalui hari, rentang tanggal, atau opsi Musim. Jika dropdown berwarna abu-abu, tanggal mungkin dibatasi oleh konfigurasi atau promosi lain.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Perbarui tidak merespons setelah diklik</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali bahwa nilai CTA yang valid (YA atau TIDAK) telah dipilih. Pastikan tanggal dipilih sebelum mengklik <strong>Perbarui</strong>.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan tidak tercermin di kalender</dt>
              <dd className="ml-4 text-muted-foreground">
                Klik tombol <strong>Refresh</strong> pada tampilan kalender atau muat ulang halaman. Anda juga dapat memeriksa <strong>Riwayat 10 Pembaruan Terakhir</strong> untuk konfirmasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Menerima kesalahan saat mengirim pembaruan berbasis baris</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa Anda memilih <strong>YA</strong> atau <strong>TIDAK</strong> dari dropdown. Hindari mengetik secara manual ke dalam dropdown, karena hanya opsi yang telah ditentukan yang diterima.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Status CTA kembali setelah dikirim</dt>
              <dd className="ml-4 text-muted-foreground">
                Beberapa saluran yang terhubung dapat menggantikan aturan CTA berdasarkan pembatasan khusus OTA. Jika ini terus terjadi pada tanggal yang sama, hubungi dukungan Bookandlink untuk bantuan lebih lanjut.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== UPDATE CTD ==================== */}
      <Section id="update-ctd" title="Perbarui CTD (Close to Departure)">
        <h4 className="font-medium">Cara Mengaktifkan CTD:</h4>
        <p><strong>Pembaruan Umum:</strong></p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka tab <strong>CTD</strong> di panel Rate Plan Tunggal.</li>
          <li>Pilih tanggal yang ingin Anda perbarui (centang hari tertentu, gunakan <strong>Pilih Rentang Tanggal</strong>, atau pilih berdasarkan <strong>Musim</strong>).</li>
          <li>Atur status CTD menjadi <strong>YA</strong> di samping tombol "Perbarui".</li>
          <li>Klik <strong>Perbarui</strong> untuk menerapkan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746435481/12._ctd_-_yes_fllm6c.jpg" />
        </ol>

        <p><strong>Pembaruan Berbasis Baris:</strong></p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Gulir ke bawah ke bagian tabel kalender.</li>
          <li>Klik pada tanggal apa pun di baris <strong>CTD</strong> untuk mengubah.</li>
          <li>Pilih <strong>YA</strong> di dropdown di samping "Ubah CTD Menjadi:".</li>
          <li>Klik <strong>Kirim</strong> untuk menyimpan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543779/05._single_rateplan_update_close_to_arrival_-_2_a7cwua.png" />
        </ol>

        <h4 className="mt-4 font-medium">Cara Menghapus CTD:</h4>
        <p><strong>Pembaruan Umum:</strong></p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka tab <strong>CTD</strong> di panel Rate Plan Tunggal.</li>
          <li>Pilih tanggal yang ingin Anda perbarui.</li>
          <li>Atur status CTD menjadi <strong>TIDAK</strong> di samping tombol "Perbarui".</li>
          <li>Klik <strong>Perbarui</strong> untuk menerapkan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746432735/13._ctd_-_no_bckiky.jpg" />
        </ol>

        <p><strong>Pembaruan Berbasis Baris:</strong></p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Gulir ke bawah ke bagian tabel kalender.</li>
          <li>Klik pada tanggal apa pun di baris <strong>CTD</strong> untuk mengubah.</li>
          <li>Pilih <strong>TIDAK</strong> di dropdown di samping "Ubah CTD Menjadi:".</li>
          <li>Klik <strong>Kirim</strong> untuk menyimpan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543785/06._remove_CTD_-_2_ld6drc.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pembaruan CTD:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tab CTD hilang atau tidak responsif</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih <strong>Rate Plan</strong>, <strong>Situs Eksternal</strong>, dan <strong>Tahun</strong> yang benar. Muat ulang halaman atau coba gunakan browser lain untuk mengatasi masalah antarmuka.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat memilih YA/TIDAK untuk CTD</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih tanggal yang valid melalui hari tertentu, rentang tanggal, atau Musim yang telah dibuat sebelumnya. Jika dropdown berwarna abu-abu, tanggal mungkin dibatasi oleh pengaturan lain.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Perbarui tidak berfungsi setelah diklik</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih <strong>YA</strong> atau <strong>TIDAK</strong> di dropdown CTA sebelum mengklik <strong>Perbarui</strong>. Periksa kembali bahwa tanggal telah dipilih dengan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan tidak tercermin di tampilan kalender</dt>
              <dd className="ml-4 text-muted-foreground">
                Klik tombol <strong>Refresh</strong> atau muat ulang halaman. Anda dapat memverifikasi apakah perubahan telah diterapkan melalui log <strong>Riwayat 10 Pembaruan Terakhir</strong>.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kesalahan saat mengirim pembaruan berbasis baris</dt>
              <dd className="ml-4 text-muted-foreground">
                Hanya pilih <strong>YA</strong> atau <strong>TIDAK</strong> dari menu dropdown. Mengetik secara manual ke dalam dropdown akan menghasilkan kesalahan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Status CTD kembali setelah dikirim</dt>
              <dd className="ml-4 text-muted-foreground">
                Beberapa saluran atau sistem eksternal dapat menggantikan pengaturan CTA/CTD. Jika ini terjadi secara teratur, hubungi dukungan Bookandlink untuk bantuan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== EXCEPTION ==================== */}
      <Section id="exception" title="Pengecualian">
        <p>
          Fitur <strong>Pengecualian</strong> memungkinkan Anda menetapkan nilai yang berbeda (seperti harga atau stop sell) khusus untuk situs eksternal (OTA) tertentu. 
          Opsi ini hanya tersedia saat Anda memilih <strong>Situs Eksternal</strong> tertentu. Jika <strong>Semua Situs</strong> dipilih, fitur Pengecualian tidak akan ditampilkan.
        </p>

        <h4 className="mt-4 font-medium">Pengecualian Harga:</h4>
        <p>Fitur ini memungkinkan Anda menerapkan harga kamar yang berbeda untuk rate plan yang dipilih pada OTA tertentu.</p>

        <h5 className="mt-3 font-medium">Cara Mengatur Pengecualian Harga:</h5>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pilih <strong>Tipe Kamar</strong> dan <strong>Rate Plan</strong>.</li>
          <li>Pilih <strong>Situs Eksternal</strong> tertentu (bukan "Semua Situs").</li>
          <li>Buka tab <strong>Harga</strong>.</li>
          <li>Pilih atau blok tanggal yang ingin Anda perbarui.</li>
          <li>Masukkan harga yang diinginkan di kotak input di samping tombol <strong>Simpan</strong>.</li>
          <li>Klik <strong>Simpan</strong> untuk menerapkan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543793/07._exception_-_1_gmslnm.png" />
          <li>
            Setelah berhasil diperbarui, segarkan halaman dan periksa kembali dengan mengulangi langkah 1–3. 
            <span className="block text-sm text-muted-foreground">Catatan: Pengecualian harga hanya akan tercermin di extranet OTA.</span>
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543797/07._exception_-_2_ateuoq.png" />
        </ol>

        <h5 className="mt-3 font-medium">Cara Menghapus Pengecualian Harga:</h5>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pilih <strong>Tipe Kamar</strong> dan <strong>Rate Plan</strong>.</li>
          <li>Pilih <strong>Situs Eksternal</strong> yang sama seperti saat pengecualian diatur.</li>
          <li>Buka tab <strong>Harga</strong>.</li>
          <li>Pilih tanggal yang menunjukkan garis biru.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543806/07._remove_exception_-_1_kwcjbs.png" />
          <li>Klik <strong>Hapus Pengecualian</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543810/07._remove_exception_-_2_mtdvdc.png" />
          <li>Setelah berhasil diperbarui, segarkan halaman dan periksa kembali dengan mengulangi langkah 1–3.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543813/07._remove_exception_-_3_odvvre.png" />
        </ol>

        <h4 className="mt-4 font-medium">Pengecualian Stop Sell:</h4>
        <p>Fitur ini memungkinkan Anda menerapkan Stop Sell ke OTA tertentu.</p>

        <h5 className="mt-3 font-medium">Cara Mengatur Pengecualian Stop Sell:</h5>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pilih <strong>Tipe Kamar</strong> dan <strong>Rate Plan</strong>.</li>
          <li>Pilih <strong>Situs Eksternal</strong> tertentu.</li>
          <li>Buka tab <strong>Stop Sell</strong>.</li>
          <li>Pilih atau blok tanggal yang ingin Anda perbarui.</li>
          <li>Pilih <strong>Ya</strong> untuk mengaktifkan Stop Sell.</li>
          <li>Klik <strong>Simpan</strong> untuk menerapkan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543800/07._notes_-_1_zuc0pl.png" />
          <li>
            Setelah berhasil diperbarui, garis biru dan tanda "x" akan muncul pada tanggal yang dipilih.
            <span className="block text-sm text-muted-foreground">Catatan: Pengecualian Stop Sell hanya akan tercermin di extranet OTA.</span>
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543804/07._notes_-_2_hxiajj.png" />
        </ol>

        <h5 className="mt-3 font-medium">Cara Menghapus Pengecualian Stop Sell:</h5>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pilih <strong>Tipe Kamar</strong> dan <strong>Rate Plan</strong>.</li>
          <li>Pilih <strong>Situs Eksternal</strong> yang sama seperti saat pengecualian diatur.</li>
          <li>Buka tab <strong>Stop Sell</strong>.</li>
          <li>Pilih tanggal yang menunjukkan garis biru dan tanda "x".</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543816/07._remove_sell_exceptions_-_1_o8x3wd.png" />
          <li>Klik <strong>Hapus Pengecualian</strong>.</li>
          <li>Setelah pembaruan, segarkan halaman dan ulangi langkah 1–3 untuk mengonfirmasi penghapusan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543818/07._remove_sell_exceptions_-_2_zmj2bd.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pembaruan Pengecualian:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Opsi Pengecualian Harga tidak muncul</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih <strong>Situs Eksternal</strong> tertentu, bukan <strong>Semua Situs</strong>. Fitur Pengecualian hanya akan muncul saat Situs Eksternal tertentu dipilih.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat memasukkan nilai harga</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih <strong>Tipe Kamar</strong>, <strong>Rate Plan</strong>, dan <strong>Situs Eksternal</strong> yang valid. Periksa apakah tanggal yang ingin Anda perbarui terkunci atau dibatasi oleh pengaturan lain, seperti Stop Sell atau CTA/CTD yang diaktifkan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kesalahan saat menyimpan pengecualian harga</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali bahwa nilai harga yang dimasukkan benar dan valid (nilai numerik). Coba segarkan halaman dan coba simpan lagi setelah memastikan semua pengaturan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pengecualian harga tidak tercermin di extranet OTA</dt>
              <dd className="ml-4 text-muted-foreground">
                Perubahan yang dilakukan melalui sistem ini mungkin memerlukan waktu untuk disinkronkan dengan extranet OTA. Pastikan <strong>Situs Eksternal</strong> yang dipilih terhubung dengan benar, dan tidak ada masalah konektivitas antara platform.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat menghapus pengecualian harga</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memilih <strong>Situs Eksternal</strong> yang sama seperti saat pengecualian harga pertama kali diatur. Jika tanggal yang ingin Anda hapus masih menunjukkan garis biru, coba segarkan halaman dan periksa bahwa tidak ada pengaturan lain yang mencegah perubahan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan tidak terlihat setelah menghapus pengecualian</dt>
              <dd className="ml-4 text-muted-foreground">
                Setelah menghapus pengecualian harga, pastikan untuk menyegarkan halaman dan memverifikasi di tab <strong>Harga</strong> bahwa perubahan telah diterapkan dengan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Opsi Stop Sell tidak terlihat</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih <strong>Situs Eksternal</strong> tertentu, bukan <strong>Semua Situs</strong>. Fitur Pengecualian Stop Sell hanya akan muncul saat Situs Eksternal tertentu dipilih.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat mengaktifkan Stop Sell</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa Anda telah memilih <strong>Tipe Kamar</strong>, <strong>Rate Plan</strong>, dan <strong>Situs Eksternal</strong> yang valid. Periksa apakah tanggal yang ingin Anda perbarui dibatasi oleh pengaturan lain, seperti CTA/CTD atau pengecualian harga yang ada.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kesalahan saat menyimpan Stop Sell</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua pengaturan diisi dengan benar, terutama <strong>Tipe Kamar</strong>, <strong>Rate Plan</strong>, dan <strong>Situs Eksternal</strong>. Periksa apakah tanggal yang Anda pilih valid dan tidak sudah diblokir oleh pengecualian atau konfigurasi sistem lainnya.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Stop Sell tidak tercermin di extranet OTA</dt>
              <dd className="ml-4 text-muted-foreground">
                Perubahan yang dibuat mungkin memerlukan waktu untuk disinkronkan dengan extranet OTA. Pastikan <strong>Situs Eksternal</strong> yang dipilih terhubung dan tidak ada masalah dengan koneksi platform ke OTA.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat menghapus pengecualian Stop Sell</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memilih <strong>Situs Eksternal</strong> yang benar seperti saat pengecualian Stop Sell pertama kali diatur. Jika tanggal yang ingin Anda hapus masih menunjukkan garis biru dan tanda "x", coba segarkan halaman dan coba hapus pengecualian lagi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== LAST 10 UPDATE HISTORY ==================== */}
      <Section id="last-update-history" title="Riwayat 10 Pembaruan Terakhir">
        <p>
          Fitur ini memungkinkan Anda meninjau pembaruan terbaru yang dilakukan melalui Penawaran Tahunan. Ini membantu melacak aktivitas 
          dan mengidentifikasi kesalahan yang mungkin terjadi selama proses pembaruan.
        </p>

        <h4 className="mt-4 font-medium">Cara Memeriksa Riwayat Pembaruan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>
            Buka bagian <strong>Riwayat 10 Pembaruan Terakhir</strong> di bagian bawah halaman Penawaran Tahunan.
          </li>
          <li>
            Pilih rentang tanggal menggunakan kolom <strong>Cari Dari – Sampai</strong> untuk menampilkan log pembaruan.
          </li>
          <li>
            Sistem akan menampilkan daftar pembaruan terbaru dengan detail berikut:
            <ul className="ml-6 mt-1 list-disc">
              <li>
                <strong>Stempel Waktu:</strong> Waktu saat pembaruan dilakukan.
              </li>
              <li>
                <strong>Pembaruan:</strong>
                <ul className="ml-6 list-circle">
                  <li><strong>Hari →</strong> Tanggal yang diperbarui.</li>
                  <li><strong>Tipe Kamar →</strong> Tipe kamar yang diperbarui.</li>
                  <li><strong>Rateplan →</strong> Rate plan yang diperbarui.</li>
                  <li><strong>Alokasi →</strong> Inventaris yang diperbarui.</li>
                </ul>
              </li>
              <li>
                <strong>Hasil:</strong>
                <ul className="ml-6 list-circle">
                  <li><strong>OTA →</strong> Menampilkan hasil pengiriman ke setiap OTA, misalnya: <em>Pengiriman berhasil dilakukan.</em></li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742543824/08._last_10_update_history_gljnc5.png" />
                </ul>
              </li>
            </ul>
          </li>
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Riwayat 10 Pembaruan Terakhir:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Riwayat Pembaruan tidak muncul</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih rentang tanggal yang benar di kolom <strong>Cari Dari – Sampai</strong>. 
                Verifikasi bahwa pembaruan benar-benar dilakukan selama periode waktu yang dipilih. Jika tidak ada pembaruan yang dibuat dalam rentang tersebut, log riwayat akan kosong.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Riwayat pembaruan tidak lengkap atau informasi hilang</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa apakah ada masalah selama proses pembaruan yang mungkin menyebabkan entri tidak lengkap. 
                Pastikan semua bidang yang relevan, seperti <strong>Tipe Kamar</strong>, <strong>Rateplan</strong>, dan nilai <strong>Alokasi</strong>, diperbarui dengan benar. Bidang yang hilang dapat mengindikasikan kesalahan selama proses.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat melihat hasil pembaruan untuk OTA tertentu</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa pembaruan berhasil dikirim ke OTA yang dipilih. Jika pengiriman tidak berhasil, sistem akan menampilkan pesan kesalahan atau kegagalan di kolom <strong>Hasil</strong>. 
                Jika OTA tidak menerima pembaruan, periksa kembali koneksi dan status pengiriman untuk OTA tersebut.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Log pembaruan tidak mencerminkan perubahan terbaru</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman untuk memastikan bahwa setiap pembaruan baru yang dibuat terlihat di log riwayat. 
                Jika pembaruan baru saja dibuat tetapi tidak tercermin dalam log, pastikan tidak ada gangguan jaringan atau masalah dengan fungsionalitas pembaruan sistem.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kesalahan atau peringatan ditampilkan dalam riwayat pembaruan</dt>
              <dd className="ml-4 text-muted-foreground">
                Tinjau kolom <strong>Hasil</strong> untuk mengidentifikasi pesan kesalahan atau peringatan spesifik yang terkait dengan pembaruan. 
                Atasi kesalahan dengan meninjau kembali pengaturan pembaruan untuk <strong>Tipe Kamar</strong>, <strong>Rateplan</strong>, atau nilai <strong>Alokasi</strong> yang terpengaruh.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== OTA UPDATE ==================== */}
      <Section id="ota-update" title="Pembaruan OTA">
        <p>
          Tab <strong>Pembaruan OTA</strong> digunakan untuk mendorong data yang ada dari Channel Manager (CM) ke OTA yang terhubung. 
          Fungsi ini tidak memperbarui apa pun di CM—hanya mengirim ulang data dari CM ke sisi OTA.
        </p>

        <h4 className="mt-4 font-medium">Kapan Menggunakan Pembaruan OTA:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>Setelah pertama kali menghubungkan OTA.</li>
          <li>Ketika data di CM dan extranet OTA tidak sinkron.</li>
          <li>Untuk mengirim ulang ketersediaan, harga, atau pembatasan tanpa membuat perubahan di CM.</li>
        </ul>

        <h4 className="mt-4 font-medium">Cara Melakukan Pembaruan OTA:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka tab <strong>Pembaruan OTA</strong>.</li>
          <li>Pilih <strong>tipe kamar</strong> yang ingin Anda perbarui.</li>
          <li>Pilih <strong>rate plan</strong> yang terkait dengan kamar tersebut.</li>
          <li>Pilih <strong>OTA</strong> (situs eksternal) yang ingin Anda kirimi data.</li>
          <li>Klik tombol <strong>Perbarui</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746434516/15._OTA_Update_oorx6r.jpg" />
          <li>
            Setelah pengiriman, sistem akan memproses pembaruan di latar belakang dan menunjukkan keberhasilan dengan pesan <strong>'Pembaruan Berhasil'</strong>.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746434578/16._OTA_Update_-_success_wus5jk.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pembaruan OTA:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tombol Pembaruan OTA dinonaktifkan atau tidak dapat diklik</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan bahwa <strong>Tipe Kamar</strong> dan <strong>Rate Plan</strong> telah dipilih. Jika salah satu dari bidang ini tidak dipilih, tombol <strong>Perbarui</strong> akan tetap dinonaktifkan. 
                Verifikasi bahwa <strong>OTA</strong> (situs eksternal) telah dipilih dari daftar yang tersedia. Jika tidak ada OTA yang dipilih, tombol tidak akan dapat diklik.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak ada perubahan yang tercermin di OTA setelah melakukan pembaruan</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa data di Channel Manager (CM) disinkronkan dengan benar dengan OTA. Jika ada ketidakcocokan, lakukan pembaruan OTA lagi, pastikan data di CM sudah benar sebelum mengirim ulang. 
                Periksa apakah extranet OTA menerima pembaruan. Jika pembaruan berhasil di CM tetapi tidak tercermin di OTA, tinjau extranet untuk mengetahui adanya penundaan atau gangguan sistem.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pesan 'Pembaruan Berhasil' tidak muncul</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan sistem telah menyelesaikan proses latar belakang. Jika pesan tidak muncul, segarkan halaman dan verifikasi bahwa <strong>Tipe Kamar</strong>, <strong>Rate Plan</strong>, dan <strong>OTA</strong> telah dipilih dengan benar. 
                Jika masalah berlanjut, hubungi dukungan untuk memastikan sistem berfungsi dengan baik.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kesalahan selama proses pembaruan</dt>
              <dd className="ml-4 text-muted-foreground">
                Tinjau pesan kesalahan yang muncul setelah mengirim pembaruan. Pesan-pesan ini harus memberikan detail spesifik tentang kegagalan. 
                Jika pembaruan gagal karena masalah jaringan atau koneksi, coba proses lagi setelah memastikan koneksi internet stabil. 
                Periksa kembali bahwa data yang didorong (ketersediaan, harga, pembatasan) sudah benar dan tidak mengandung informasi yang bertentangan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pembaruan tidak mengirim data ke OTA</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan bahwa OTA terhubung dan aktif dalam sistem. Jika ada masalah koneksi, data tidak akan didorong ke OTA. 
                Kunjungi kembali pengaturan koneksi OTA dan verifikasi bahwa kredensial atau konfigurasi sudah benar.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== SEASONS ==================== */}
      <Section id="seasons" title="Musim">
        <h4 className="font-medium">Cara Membuat Musim:</h4>
        <p>
          Fitur <strong>Musim</strong> memungkinkan Anda mengelompokkan tanggal dan hari tertentu ke dalam preset bernama. 
          Ini dapat digunakan nanti saat memperbarui harga, ketersediaan, atau pembatasan di Penawaran Tahunan.
        </p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Buka bagian <strong>Musim</strong> di halaman Penawaran Tahunan.</li>
          <li>Masukkan <strong>Nama Musim</strong> di kolom input.</li>
          <li>Pilih hari dan tanggal yang ingin Anda sertakan dalam musim dengan mengkliknya di kalender.</li>
          <li>Klik <strong>Buat Musim</strong> untuk menyimpan.</li>
          <li>Jika musim berhasil dibuat, itu akan muncul di dropdown <strong>Pilih Musim</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746434921/17._create_seasons_nzmi5v.jpg" />
        </ol>

        <h4 className="mt-4 font-medium">Cara Menghapus Musim:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pilih <strong>Musim</strong> yang ingin Anda hapus.</li>
          <li>Klik tombol <strong>Hapus Musim</strong> di samping musim yang dibuat.</li>
          <li>Peringatan konfirmasi akan muncul. Klik <strong>Ya</strong> untuk melanjutkan.</li>
          <li>Musim akan dihapus dari daftar setelah berhasil dihapus.</li>
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Musim:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat membuat musim</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kolom <strong>Nama Musim</strong> tidak kosong. Sistem tidak akan mengizinkan Anda membuat musim tanpa nama. 
                Periksa kembali bahwa Anda telah memilih tanggal dan hari yang valid di kalender. Jika tidak ada tanggal yang dipilih, sistem tidak akan mengizinkan musim dibuat. 
                Jika tombol <strong>Buat Musim</strong> tidak responsif, periksa apakah ada masalah browser atau bersihkan cache untuk mengatasi masalah.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Musim tidak muncul di dropdown Pilih Musim</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman setelah membuat musim. Terkadang mungkin perlu beberapa saat agar musim muncul di dropdown. 
                Pastikan musim berhasil dibuat. Jika halaman tidak disegarkan dengan benar setelah membuat musim, itu mungkin tidak terlihat.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat menghapus musim</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa musim tidak sedang digunakan secara aktif di Penawaran Tahunan mana pun. Jika ya, Anda harus menghapus atau mengubah penawaran apa pun yang menggunakan musim tersebut sebelum dapat dihapus. 
                Pastikan Anda mengklik <strong>Ya</strong> dalam dialog konfirmasi setelah memilih <strong>Hapus Musim</strong>. Jika konfirmasi dilewati, musim tidak akan dihapus.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Peringatan konfirmasi tidak muncul saat menghapus musim</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan halaman tidak diblokir oleh pemblokir pop-up atau ekstensi browser apa pun yang dapat mencegah munculnya peringatan konfirmasi. 
                Coba segarkan halaman dan coba hapus musim lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Musim tidak terhapus setelah konfirmasi</dt>
              <dd className="ml-4 text-muted-foreground">
                Setelah mengonfirmasi penghapusan, periksa apakah ada penundaan sistem atau masalah dengan menyimpan perubahan. Segarkan halaman untuk memverifikasi apakah musim telah dihapus. 
                Jika musim masih muncul, coba lagi setelah membersihkan cache browser atau menggunakan browser lain.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}