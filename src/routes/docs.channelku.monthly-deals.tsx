import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/monthly-deals")({
  head: () => ({
    meta: [
      { title: "Penawaran Bulanan — Channelku | SinergiMax" },
      { name: "description", content: "Kelola ketersediaan, harga, stop sell, minimum malam, CTA, CTD, dan pembaruan massal di Channelku." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "update-availability", label: "Perbarui Ketersediaan" },
  { id: "update-rates", label: "Perbarui Harga" },
  { id: "update-stop-sell", label: "Perbarui Stop Sell" },
  { id: "update-min-night", label: "Perbarui Minimum Malam" },
  { id: "update-cta", label: "Perbarui CTA" },
  { id: "update-ctd", label: "Perbarui CTD" },
  { id: "log-history", label: "Riwayat Log" },
  { id: "bulk-update", label: "Pembaruan Massal" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Penawaran Bulanan" activeTo="/docs/channelku/channel-manager/monthly-deals">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Penawaran Bulanan</h1>
      <p className="mt-4">
        Halaman <strong>Penawaran Bulanan</strong> memungkinkan Anda mengelola ketersediaan, harga, stop sell, minimum malam, 
        Close to Arrival (CTA), dan Close to Departure (CTD) untuk properti Anda dalam tampilan kalender bulanan.
      </p>
      <div className="mt-4 rounded-lg border bg-muted/50 p-4">
        <p className="text-sm text-muted-foreground">
          <strong>Catatan:</strong> Untuk melihat versi terbaru dari dokumentasi ini, lihat 
          <a href="#" className="ml-1 text-primary hover:underline">Monthly Deals V2</a>.
        </p>
      </div>

      {/* ==================== UPDATE AVAILABILITY ==================== */}
      <Section id="update-availability" title="Perbarui Ketersediaan">
        <h4 className="font-medium">Cara Memperbarui Ketersediaan:</h4>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            <strong>Pilih/blok tanggal pada baris inventaris.</strong>
            <span className="block text-sm text-muted-foreground">Tanggal yang diblok akan ditandai dengan warna biru.</span>
          </li>
          <li>
            <strong>Masukkan nilai / inventaris baru.</strong>
          </li>
          <li>
            <strong>Kirim.</strong>
          </li>
          <li>
            <strong>Periksa log Anda</strong> untuk memastikan pembaruan berhasil dilakukan.
          </li>
        </ol>
        <p className="mt-2 text-sm text-green-600">Setelah "Pengiriman Selesai", inventaris akan diperbarui.</p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544439/01._update_availability_-_1_iewuy2.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544440/01._update_availability_-_2_a4csaq.png" />
      </Section>

      {/* ==================== UPDATE RATES ==================== */}
      <Section id="update-rates" title="Perbarui Harga">
        <h4 className="font-medium">Cara Memperbarui Harga:</h4>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            <strong>Pilih/blok tanggal pada baris harga.</strong>
            <span className="block text-sm text-muted-foreground">Tanggal yang diblok akan ditandai dengan warna biru.</span>
          </li>
          <li>
            <strong>Masukkan nilai / harga baru.</strong>
            <div className="mt-1 rounded-md border bg-yellow-50 p-2 text-sm dark:bg-yellow-950/20">
              <strong>Catatan:</strong> Jangan gunakan "koma (,), titik (.)". Contoh: masukkan <code>500000</code>, bukan <code>500.000</code> atau <code>500,000</code>.
            </div>
          </li>
          <li>
            <strong>Kirim.</strong>
          </li>
          <li>
            <strong>Periksa log Anda</strong> untuk memastikan pembaruan berhasil dilakukan.
          </li>
        </ol>
        <p className="mt-2 text-sm text-green-600">Setelah "Pengiriman Selesai", harga akan diperbarui.</p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544352/02._update_rates_-_1_drc4om.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544357/02._update_rates_-_2_bsazbd.png" />
      </Section>

      {/* ==================== UPDATE STOP SELL ==================== */}
      <Section id="update-stop-sell" title="Perbarui Stop Sell">
        <h4 className="font-medium">Cara Mengaktifkan Stop Sell:</h4>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            <strong>Centang "tampilkan stop sell".</strong>
          </li>
          <li>
            <strong>Pilih/blok tanggal pada baris stop sell.</strong>
            <span className="block text-sm text-muted-foreground">Tanggal yang diblok akan ditandai dengan warna biru.</span>
          </li>
          <li>
            <strong>Pilih AKTIF.</strong>
          </li>
          <li>
            <strong>Kirim.</strong>
          </li>
          <li>
            <strong>Periksa log Anda</strong> untuk memastikan pembaruan berhasil dilakukan.
          </li>
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li><strong>NONAKTIF</strong> berarti tidak ada stop sell.</li>
            <li><strong>AKTIF</strong> berarti stop sell aktif.</li>
          </ul>
        </div>
        <p className="mt-2 text-sm text-green-600">Pengiriman Selesai dan tanggal yang diblok akan ditandai dengan tombol lingkaran oranye.</p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544419/03._update_stop_sell_-_1_mz19rm.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544423/03._update_stop_sell_-_2_chg40h.png" />

        <h4 className="mt-4 font-medium">Cara Menghapus Stop Sell:</h4>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            <strong>Centang "tampilkan stop sell".</strong>
          </li>
          <li>
            <strong>Pilih/blok tanggal pada baris stop sell.</strong>
            <span className="block text-sm text-muted-foreground">Tanggal yang diblok akan ditandai dengan warna biru.</span>
          </li>
          <li>
            <strong>Pilih NONAKTIF.</strong>
          </li>
          <li>
            <strong>Kirim.</strong>
          </li>
          <li>
            <strong>Periksa log Anda</strong> untuk memastikan pembaruan berhasil dilakukan.
          </li>
        </ol>
        <p className="mt-2 text-sm text-green-600">Pengiriman Selesai dan tombol lingkaran oranye pada tanggal yang diblok akan dihapus.</p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544419/03._update_stop_sell_-_1_mz19rm.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544423/03._update_stop_sell_-_2_chg40h.png" />
      </Section>

      {/* ==================== UPDATE MINIMUM NIGHT ==================== */}
      <Section id="update-min-night" title="Perbarui Minimum Malam">
        <h4 className="font-medium">Cara Memperbarui Minimum Malam:</h4>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            <strong>Centang "Tampilkan Min Malam".</strong>
          </li>
          <li>
            <strong>Pilih/blok tanggal pada baris minimum malam.</strong>
            <span className="block text-sm text-muted-foreground">Tanggal yang diblok akan ditandai dengan warna biru.</span>
          </li>
          <li>
            <strong>Masukkan nilai / pengaturan minimum malam baru.</strong>
          </li>
          <li>
            <strong>Kirim.</strong>
          </li>
          <li>
            <strong>Periksa log Anda</strong> untuk memastikan pembaruan berhasil dilakukan.
          </li>
        </ol>
        <p className="mt-2 text-sm text-green-600">Setelah "Pengiriman Selesai", minimum malam akan diperbarui.</p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544364/04._update_minimun_night_-_1_zblm8v.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544364/04._update_minimun_night_-_1_zblm8v.png" />
      </Section>

      {/* ==================== UPDATE CTA ==================== */}
      <Section id="update-cta" title="Perbarui CTA (Close to Arrival)">
        <h4 className="font-medium">Cara Mengaktifkan CTA:</h4>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            <strong>Centang "tampilkan CTA".</strong>
          </li>
          <li>
            <strong>Pilih/blok tanggal pada baris CTA.</strong>
            <span className="block text-sm text-muted-foreground">Tanggal yang diblok akan ditandai dengan warna biru.</span>
          </li>
          <li>
            <strong>Pilih AKTIF.</strong>
          </li>
          <li>
            <strong>Kirim.</strong>
          </li>
          <li>
            <strong>Periksa log Anda</strong> untuk memastikan pembaruan berhasil dilakukan.
          </li>
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li><strong>NONAKTIF</strong> berarti tidak ada CTA.</li>
            <li><strong>AKTIF</strong> berarti CTA aktif.</li>
          </ul>
        </div>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544379/05._update_close_to_arrival_-_1_tkvvcc.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544377/05._update_close_to_arrival_-_2_qqgsbo.png" />

        <p className="mt-2 text-sm text-green-600">Pengiriman Selesai dan tanggal yang diblok akan ditandai dengan tombol lingkaran oranye.</p>

        <h4 className="mt-4 font-medium">Cara Menghapus CTA:</h4>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            <strong>Centang "tampilkan CTA".</strong>
          </li>
          <li>
            <strong>Pilih/blok tanggal pada baris CTA.</strong>
            <span className="block text-sm text-muted-foreground">Tanggal yang diblok akan ditandai dengan warna biru.</span>
          </li>
          <li>
            <strong>Pilih NONAKTIF.</strong>
          </li>
          <li>
            <strong>Kirim.</strong>
          </li>
          <li>
            <strong>Periksa log Anda</strong> untuk memastikan pembaruan berhasil dilakukan.
          </li>
        </ol>
        <p className="mt-2 text-sm text-green-600">Pengiriman Selesai dan tombol lingkaran oranye pada tanggal yang diblok akan dihapus.</p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544365/05._update_close_to_arrival_-_submission_done_-_1_bkf1ni.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544389/05._update_close_to_arrival_-_submission_done_-_2_obyf71.png" />
      </Section>

      {/* ==================== UPDATE CTD ==================== */}
      <Section id="update-ctd" title="Perbarui CTD (Close to Departure)">
        <h4 className="font-medium">Cara Mengaktifkan CTD:</h4>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            <strong>Centang "tampilkan CTD".</strong>
          </li>
          <li>
            <strong>Pilih/blok tanggal pada baris CTD.</strong>
            <span className="block text-sm text-muted-foreground">Tanggal yang diblok akan ditandai dengan warna biru.</span>
          </li>
          <li>
            <strong>Pilih AKTIF.</strong>
          </li>
          <li>
            <strong>Kirim.</strong>
          </li>
          <li>
            <strong>Periksa log Anda</strong> untuk memastikan pembaruan berhasil dilakukan.
          </li>
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li><strong>NONAKTIF</strong> berarti tidak ada CTD.</li>
            <li><strong>AKTIF</strong> berarti CTD aktif.</li>
          </ul>
        </div>
        <p className="mt-2 text-sm text-green-600">Pengiriman Selesai dan tanggal yang diblok akan ditandai dengan tombol lingkaran oranye.</p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544394/06._update_close_to_departure_-_1_abzoxz.pnghttps://res.cloudinary.com/dayo5hqig/image/upload/v1742544394/06._update_close_to_departure_-_1_abzoxz.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544395/06._update_close_to_departure_-_2_gncd78.png" />

        <h4 className="mt-4 font-medium">Cara Menghapus CTD:</h4>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            <strong>Centang "tampilkan CTD".</strong>
          </li>
          <li>
            <strong>Pilih/blok tanggal pada baris CTD.</strong>
            <span className="block text-sm text-muted-foreground">Tanggal yang diblok akan ditandai dengan warna biru.</span>
          </li>
          <li>
            <strong>Pilih NONAKTIF.</strong>
          </li>
          <li>
            <strong>Kirim.</strong>
          </li>
          <li>
            <strong>Periksa log Anda</strong> untuk memastikan pembaruan berhasil dilakukan.
          </li>
        </ol>
        <p className="mt-2 text-sm text-green-600">Pengiriman Selesai dan tombol lingkaran oranye pada tanggal yang diblok akan dihapus.</p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544384/06._update_close_to_departure_-_submission_done_-_1_tdafhl.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544397/06._update_close_to_departure_-_submission_done_-_2_hhymdc.png" />
      </Section>

      {/* ==================== LOG HISTORY ==================== */}
      <Section id="log-history" title="Riwayat Log">
        <h4 className="font-medium">Cara Melihat Riwayat Log:</h4>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            <strong>Klik kanan pada sel inventaris</strong> untuk membuka popup <strong>Pembaruan Log</strong> (misalnya, Harga Standar pada Sel 24).
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1771917000/inventory.png" />
          <li>
            Popup <strong>Pembaruan Log</strong> akan terbuka berisi:
            <Figure label=""
            src="https://res.cloudinary.com/dayo5hqig/image/upload/v1771917391/Log-Update-History-6caa84f.png" />   
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Tanggal</strong></li>
              <li><strong>Rate Plan</strong></li>
              <li><strong>Nilai</strong></li>
              <li>
                <strong>Sumber</strong> – Menunjukkan asal pembaruan:
                <ul className="ml-6 list-circle">
                  <li><strong>Penawaran Bulanan Baru:</strong> Pembaruan yang dipicu oleh fitur Penawaran Bulanan.</li>
                  <li><strong>Penawaran Bulanan/Tahunan:</strong> Pembaruan yang dipicu oleh fitur Penawaran Tahunan.</li>
                  <li><strong>Sinkronisasi Penuh:</strong> Pembaruan yang dipicu oleh Sinkronisasi OTA Penuh.</li>
                  <li><strong>Harga & Ketersediaan Baru:</strong> Pembaruan yang dipicu oleh Harga & Ketersediaan (Versi 2).</li>
                  <li><strong>Sinkronisasi Penuh Margin Harga:</strong> Pembaruan yang dipicu oleh fitur Pengali Harga.</li>
                  <li><strong>Pembaruan Massal:</strong> Pembaruan yang dipicu oleh fitur Pembaruan Massal.</li>
                  <li><strong>Harga FOS atau Harga FOS / Stop Sell / Malam:</strong> Pembaruan harga yang dipicu dari FOS.</li>
                  <li><strong>Inventaris FOS:</strong> Pembaruan ketersediaan yang dipicu dari FOS.</li>
                  <li><strong>Sinkronisasi Penuh Cron:</strong> Pembaruan otomatis yang dipicu oleh Sinkronisasi OTA Penuh terjadwal.</li>
                </ul>
              </li>
              <li><strong>Hasil</strong> (berhasil/gagal)</li>
            </ul>
          </li>
        </ol>
        <p className="mt-2">
          Log dapat diekspor sebagai file yang diunduh secara otomatis (.xlsx atau .pdf) atau disalin ke clipboard dalam format .txt.
        </p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1771917793/Export-Log-Update-69f0126.png" />
      </Section>

      {/* ==================== BULK UPDATE ==================== */}
      <Section id="bulk-update" title="Pembaruan Massal">
        <p>
          Pembaruan massal sekarang tersedia di menu Penawaran Bulanan. Fitur ini memungkinkan Anda mengelola pembaruan beberapa kamar 
          dalam beberapa rentang tanggal secara efisien.
        </p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544254/07._bulk_update_availability_-_1_adn0dp.png" />
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544447/07._bulk_update_availability_-_2_len7ft.png" />

        <h4 className="mt-4 font-medium">Pembaruan Massal Ketersediaan:</h4>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            Temukan dropdown berlabel <strong>"Atur"</strong> dan pilih <strong>Ketersediaan</strong> pada daftar dropdown.
          </li>
          <li>
            <strong>Masukkan nomor ketersediaan.</strong>
            <span className="block text-sm text-muted-foreground">Contoh: Jika ketersediaan saat ini = 3 dan Anda ingin mengaturnya menjadi 2, maka masukkan 2.</span>
          </li>
          <li>
            <strong>Masukkan periode</strong> yang ingin Anda perbarui ketersediaannya. Anda dapat menambahkan beberapa rentang tanggal dengan mengklik <strong>Tambah Rentang Tanggal</strong> atau mengecualikan hari tertentu dengan menghapus centang pada hari tersebut.
          </li>
          <li>
            <strong>Centang tipe kamar</strong> yang ingin Anda perbarui ketersediaannya.
          </li>
          <li>
            <strong>Periksa kembali</strong> kamar dan rentang tanggal yang dipilih, lalu klik <strong>kirim</strong> dan tunggu hingga notifikasi sukses muncul.
          </li>
          <li>
            <strong>Periksa log Anda</strong> (di bawah kalender) untuk memastikan pembaruan berhasil dilakukan.
          </li>
        </ol>
        <div className="mt-2 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li><strong>Pilih/Batalkan Pilih Semua:</strong> Gunakan opsi ini untuk memilih atau membatalkan pilihan semua kamar, rate plan, dan saluran dengan cepat.</li>
            <li><strong>Ikon Tempat Sampah:</strong> Gunakan ini untuk menghapus pengaturan atau pilihan saat ini.</li>
            <li>Pembaruan Massal Ketersediaan akan tercermin di semua saluran yang terhubung.</li>
          </ul>
        </div>

        <h4 className="mt-4 font-medium">Pembaruan Massal Harga:</h4>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544444/08._bulk_update_rates_-_1_crieyf.png" />
        <p><strong>Langkah 1:</strong></p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            Temukan dropdown berlabel <strong>"Atur"</strong> dan pilih <strong>Harga</strong> pada daftar dropdown.
          </li>
          <li>
            Anda dapat memilih jenis pembaruan harga dengan <strong>Atur Ke</strong>, <strong>Naikkan</strong>, atau <strong>Turunkan</strong>.
            <ul className="ml-6 mt-1 list-disc">
              <li>
                <strong>Atur ke:</strong> Jika harga saat ini = 100.000, masukkan nilai 200000 dan harga Anda akan diperbarui secara spesifik menjadi 200.000 untuk semua harga yang dipilih.
              </li>
              <li>
                <strong>Naikkan:</strong> Anda memiliki beberapa harga untuk beberapa tarif, dan Anda ingin menaikkan harga saat ini dengan jumlah atau persentase tertentu.
              </li>
              <li>
                <strong>Turunkan:</strong> Anda memiliki beberapa harga untuk beberapa tarif, dan Anda ingin menurunkan harga saat ini dengan jumlah atau persentase tertentu.
              </li>
            </ul>
          </li>
          <li>
            <strong>Masukkan nomor</strong> tanpa titik, koma, atau karakter khusus.
          </li>
          <li>
            Anda dapat memilih <strong>Jumlah</strong> atau <strong>Persentase</strong>.
            <ul className="ml-6 mt-1 list-disc">
              <li>
                <strong>Jumlah:</strong> Harga saat ini adalah 100.000 dan 150.000, jika Anda memilih <strong>Naikkan</strong> 100000 dengan <strong>Jumlah</strong>, maka harga Anda akan diperbarui menjadi 200.000 dan 250.000.
              </li>
              <li>
                <strong>Persentase:</strong> Harga saat ini adalah 100.000 dan 200.000, jika Anda memilih <strong>Turunkan</strong> (harus Turunkan atau Naikkan) 10 dengan <strong>Persentase</strong>, maka harga Anda akan diperbarui menjadi 90.000 dan 180.000.
              </li>
            </ul>
          </li>
          <li>
            <strong>Masukkan periode</strong> yang ingin Anda perbarui harganya. Anda dapat menambahkan beberapa rentang tanggal dengan mengklik <strong>Tambah Rentang Tanggal</strong> atau mengecualikan hari tertentu dengan menghapus centang pada hari tersebut.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544450/08._bulk_update_rates_-_2_jg1kec.png" />
        </ol>
        <p><strong>Langkah 2:</strong></p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            <strong>Centang rate plan</strong> yang ingin Anda perbarui harganya.
          </li>
          <li>
            <strong>Periksa kembali</strong> kamar, rateplan, dan rentang tanggal yang dipilih, lalu klik <strong>kirim</strong>. Tunggu hingga notifikasi sukses muncul.
          </li>
          <li>
            <strong>Periksa log Anda</strong> (di bawah kalender) untuk memastikan pembaruan berhasil dilakukan.
          </li>
        </ol>
        <div className="mt-2 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li>Pembaruan massal harga hanya berfungsi jika Channel Manager sudah terhubung dengan saluran OTA.</li>
            <li>Pastikan saat memilih <strong>Persentase</strong>, Anda sudah memilih jenis pembaruan harga dengan <strong>Turunkan</strong> atau <strong>Naikkan</strong> dan BUKAN <strong>Atur Ke</strong>.</li>
            <li>Anda dapat menambahkan lebih banyak periode dengan mengklik <strong>Tambah Rentang Tanggal</strong>.</li>
            <li><strong>Ikon Tempat Sampah:</strong> Gunakan ini untuk menghapus pengaturan atau pilihan saat ini.</li>
            <li>Pembaruan Massal Harga akan tercermin di semua saluran yang terhubung.</li>
          </ul>
        </div>

        <h4 className="mt-4 font-medium">Pembaruan Massal Stop Sell:</h4>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544453/09._bulk_update_stop_sell_-_1_uukr7x.png" />
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            Temukan dropdown berlabel <strong>"Atur"</strong> dan pilih <strong>Stop Sell</strong> pada daftar dropdown.
          </li>
          <li>
            Pilih nilai yang ingin Anda perbarui:
            <ul className="ml-6 list-disc">
              <li><strong>AKTIF:</strong> Stop Sell diaktifkan dan kamar tidak akan tersedia di OTA.</li>
              <li><strong>NONAKTIF:</strong> Stop Sell dinonaktifkan dan kamar akan tersedia di OTA.</li>
            </ul>
          </li>
          <li>
            <strong>Masukkan periode</strong> yang ingin Anda perbarui Stop Sell-nya. Anda dapat menambahkan beberapa rentang tanggal dengan mengklik <strong>Tambah Rentang Tanggal</strong> atau mengecualikan hari tertentu dengan menghapus centang pada hari tersebut.
          </li>
          <li>
            <strong>Centang Rateplan</strong> yang ingin Anda perbarui stop sell-nya.
          </li>
          <li>
            <strong>Periksa kembali</strong> kamar, rateplan, dan rentang tanggal yang dipilih, lalu klik <strong>kirim</strong>. Tunggu hingga notifikasi sukses muncul.
          </li>
          <li>
            <strong>Periksa log Anda</strong> (di bawah kalender) untuk memastikan pembaruan berhasil dilakukan.
          </li>
        </ol>
        <div className="mt-2 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li>Pembaruan massal Stop Sell hanya berfungsi jika Channel Manager sudah terhubung dengan saluran OTA.</li>
            <li>Stop Sell Bookandlink bekerja pada tingkat Rateplan.</li>
            <li>Anda dapat menambahkan lebih banyak periode dengan mengklik <strong>Tambah Rentang Tanggal</strong>.</li>
            <li><strong>Ikon Tempat Sampah:</strong> Gunakan ini untuk menghapus pengaturan atau pilihan saat ini.</li>
            <li>Pembaruan Massal Stop Sell akan tercermin di semua saluran yang terhubung.</li>
          </ul>
        </div>

        <h4 className="mt-4 font-medium">Pembaruan Massal Minimum Malam:</h4>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544459/10._bulk_update_minimum_night_b2h8gz.png" />
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            Temukan dropdown berlabel <strong>"Atur"</strong> dan pilih <strong>Min Malam</strong> pada daftar dropdown.
          </li>
          <li>
            <strong>Masukkan nomor.</strong>
            <span className="block text-sm text-muted-foreground">Contoh: Jika Min Malam saat ini = 1 dan Anda ingin mengaturnya menjadi 2, maka masukkan 2.</span>
          </li>
          <li>
            <strong>Masukkan periode</strong> yang ingin Anda perbarui Min Malam-nya. Anda dapat menambahkan beberapa rentang tanggal dengan mengklik <strong>Tambah Rentang Tanggal</strong> atau mengecualikan hari tertentu dengan menghapus centang pada hari tersebut.
          </li>
          <li>
            <strong>Centang Rateplan</strong> yang ingin Anda perbarui minimum malam-nya.
          </li>
          <li>
            <strong>Periksa kembali</strong> kamar, rateplan, dan rentang tanggal yang dipilih, lalu klik <strong>kirim</strong>. Tunggu hingga notifikasi sukses muncul.
          </li>
        </ol>
        <div className="mt-2 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li>Minimum malam Bookandlink bekerja pada tingkat Rateplan.</li>
            <li>Anda dapat menambahkan lebih banyak periode dengan mengklik <strong>Tambah Rentang Tanggal</strong>.</li>
            <li><strong>Pilih/Batalkan Pilih Semua:</strong> Gunakan opsi ini untuk memilih atau membatalkan pilihan semua kamar, rate plan, dan saluran dengan cepat.</li>
            <li><strong>Ikon Tempat Sampah:</strong> Gunakan ini untuk menghapus pengaturan atau pilihan saat ini.</li>
            <li>Pembaruan Massal Min Malam akan tercermin di semua saluran yang terhubung.</li>
          </ul>
        </div>

        <h4 className="mt-4 font-medium">Pembaruan Massal CTA:</h4>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544462/11._bulk_update_close_to_arrival_to2adm.png" />
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            Temukan dropdown berlabel <strong>"Atur"</strong> dan pilih <strong>CTA</strong> pada daftar dropdown.
          </li>
          <li>
            Pilih nilai yang ingin Anda perbarui:
            <ul className="ml-6 list-disc">
              <li><strong>AKTIF:</strong> Kamar tidak akan tersedia untuk check-in di OTA.</li>
              <li><strong>NONAKTIF:</strong> Kamar akan tersedia untuk check-in di OTA.</li>
            </ul>
          </li>
          <li>
            <strong>Masukkan periode</strong> yang ingin Anda perbarui CTA-nya. Anda dapat menambahkan beberapa rentang tanggal dengan mengklik <strong>Tambah Rentang Tanggal</strong> atau mengecualikan hari tertentu dengan menghapus centang pada hari tersebut.
          </li>
          <li>
            <strong>Centang Rateplan</strong> yang ingin Anda perbarui CTA-nya.
          </li>
          <li>
            <strong>Periksa kembali</strong> kamar, rateplan, dan rentang tanggal yang dipilih, lalu klik <strong>kirim</strong>. Tunggu hingga notifikasi sukses muncul.
          </li>
          <li>
            <strong>Periksa log Anda</strong> (di bawah kalender) untuk memastikan pembaruan berhasil dilakukan.
          </li>
        </ol>
        <div className="mt-2 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li>CTA Bookandlink bekerja pada tingkat Rateplan.</li>
            <li>Anda dapat menambahkan lebih banyak periode dengan mengklik <strong>Tambah Rentang Tanggal</strong>.</li>
            <li><strong>Pilih/Batalkan Pilih Semua:</strong> Gunakan opsi ini untuk memilih atau membatalkan pilihan semua kamar, rate plan, dan saluran dengan cepat.</li>
            <li><strong>Ikon Tempat Sampah:</strong> Gunakan ini untuk menghapus pengaturan atau pilihan saat ini.</li>
            <li>Pembaruan Massal CTA akan tercermin di semua saluran yang terhubung.</li>
          </ul>
        </div>

        <h4 className="mt-4 font-medium">Pembaruan Massal CTD:</h4>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544462/11._bulk_update_close_to_arrival_to2adm.png" />
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            Temukan dropdown berlabel <strong>"Atur"</strong> dan pilih <strong>CTD</strong> pada daftar dropdown.
          </li>
          <li>
            Pilih nilai yang ingin Anda perbarui:
            <ul className="ml-6 list-disc">
              <li><strong>AKTIF:</strong> Kamar tidak akan tersedia untuk check-out di OTA.</li>
              <li><strong>NONAKTIF:</strong> Kamar akan tersedia untuk check-out di OTA.</li>
            </ul>
          </li>
          <li>
            <strong>Masukkan periode</strong> yang ingin Anda perbarui CTD-nya. Anda dapat menambahkan beberapa rentang tanggal dengan mengklik <strong>Tambah Rentang Tanggal</strong> atau mengecualikan hari tertentu dengan menghapus centang pada hari tersebut.
          </li>
          <li>
            <strong>Centang Rateplan</strong> yang ingin Anda perbarui CTD-nya.
          </li>
          <li>
            <strong>Periksa kembali</strong> kamar, rateplan, dan rentang tanggal yang dipilih, lalu klik <strong>kirim</strong>. Tunggu hingga notifikasi sukses muncul.
          </li>
          <li>
            <strong>Periksa log Anda</strong> (di bawah kalender) untuk memastikan pembaruan berhasil dilakukan.
          </li>
        </ol>
        <div className="mt-2 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li>CTD Bookandlink bekerja pada tingkat Rateplan.</li>
            <li>Anda dapat menambahkan lebih banyak periode dengan mengklik <strong>Tambah Rentang Tanggal</strong>.</li>
            <li><strong>Pilih/Batalkan Pilih Semua:</strong> Gunakan opsi ini untuk memilih atau membatalkan pilihan semua kamar, rate plan, dan saluran dengan cepat.</li>
            <li><strong>Ikon Tempat Sampah:</strong> Gunakan ini untuk menghapus pengaturan atau pilihan saat ini.</li>
            <li>Pembaruan Massal CTD akan tercermin di semua saluran yang terhubung.</li>
          </ul>
        </div>
      </Section>

      {/* ==================== LAST 10 UPDATE HISTORY ==================== */}
      <Section id="last-update-history" title="Riwayat 10 Pembaruan Terakhir">
        <p>
          Periksa log Anda secara teratur untuk mengidentifikasi kesalahan yang terjadi selama pembaruan sejak dini dengan cara:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Cari dari - hingga tanggal yang dipilih</strong>
          </li>
          <li>
            <strong>Contoh Log:</strong>
            <ul className="ml-6 list-circle">
              <li><strong>Stempel Waktu:</strong> kapan pembaruan terjadi</li>
              <li><strong>Pembaruan:</strong> Hari =&gt; tanggal pembaruan</li>
              <li><strong>Tipe Kamar:</strong> tipe kamar yang diperbarui</li>
              <li><strong>Rateplan:</strong> rateplan yang diperbarui</li>
              <li><strong>Alokasi:</strong> pembaruan inventaris</li>
              <li><strong>Hasil:</strong> OTA : Pengiriman berhasil dilakukan.</li>
            </ul>
          </li>
        </ul>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544469/13._last_10_update_history_tuc9q6.png" />
      </Section>
    </DocsLayout>
  );
}