import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/booking-policy")({
  head: () => ({
    meta: [
      { title: "Kebijakan Pemesanan — Channelku | SinergiMax" },
      { name: "description", content: "Kelola deposit, syarat pemesanan, pajak, kebijakan pembatalan, dan kebijakan lainnya di Channelku." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "deposit", label: "Deposit" },
  { id: "booking-condition", label: "Syarat Pemesanan" },
  { id: "tax-charges", label: "Pajak & Biaya Tambahan" },
  { id: "cancellation-policy", label: "Kebijakan Pembatalan" },
  { id: "other-policies", label: "Kebijakan Lainnya" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Kebijakan Pemesanan" activeTo="/docs/channelku/setting/booking-policy">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Kebijakan Pemesanan</h1>
      <p className="mt-4">
        Halaman <strong>Kebijakan Pemesanan</strong> memungkinkan pengelola properti untuk mengonfigurasi aturan deposit, 
        syarat pemesanan, pajak dan biaya tambahan, kebijakan pembatalan, serta kebijakan umum menginap seperti waktu check-in/out 
        dan pengaturan terkait anak. Konfigurasi ini menentukan bagaimana pemesanan ditangani dan dikomunikasikan kepada tamu 
        di semua saluran yang terhubung.
      </p>

      {/* ==================== DEPOSIT ==================== */}
      <Section id="deposit" title="Deposit">
        <p>
          Bagian ini memungkinkan Anda mengonfigurasi bagaimana dan kapan deposit dibebankan kepada tamu. 
          Anda dapat menentukan aturan deposit berdasarkan kebijakan pemesanan Anda untuk mengamankan reservasi 
          dan meminimalkan risiko pembatalan.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Deposit:</h4>
        <p>Di bagian <strong>Deposit</strong>, konfigurasikan hal-hal berikut:</p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Memerlukan Deposit Sebesar:</strong> Pilih jenis deposit (Persen, IDR, Per Malam, Malam Pertama).
          </li>
          <li>
            <strong>Pembayaran Saldo Jatuh Tempo:</strong> Atur kapan sisa saldo harus dibayar.
            <ul className="ml-6 mt-1 list-circle">
              <li><strong>Saat Kedatangan:</strong> Tamu membayar saldo saat tiba.</li>
              <li><strong>Hari Setelah Pemesanan:</strong> Tentukan berapa hari setelah pemesanan saldo harus dibayar.</li>
              <li><strong>Hari Sebelum Kedatangan:</strong> Tentukan berapa hari sebelum kedatangan saldo harus dibayar.</li>
            </ul>
          </li>
          <li>
            <strong>Aktifkan Jumlah Deposit Berbeda:</strong> Aktifkan opsi ini jika Anda ingin menerapkan jumlah deposit yang berbeda untuk kondisi tertentu.
          </li>
          <li>
            <strong>Jumlah Deposit Berbeda Sebesar:</strong> Tetapkan jumlah deposit yang berbeda untuk kriteria tertentu.
          </li>
          <li>
            <strong>Diperlukan:</strong> Tetapkan jumlah hari sebelum kedatangan saat deposit harus dibayar. Contoh: 14 Hari Sebelum Kedatangan.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745985220/01._deposits_ldle1y.jpg" />
          <li>Klik <strong>Simpan</strong> untuk menerapkan pengaturan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745985220/13._save_button_k15fhr.jpg" />
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Konfigurasi Deposit:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Pengaturan deposit tidak tersimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang wajib diisi. Periksa bahwa jumlah deposit (persen atau IDR) adalah angka yang valid dan tidak kosong. 
                Coba segarkan halaman dan masukkan ulang nilai sebelum mengklik <strong>Simpan</strong> lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Opsi Pembayaran Saldo Jatuh Tempo tidak ditampilkan dengan benar</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan jenis deposit dipilih terlebih dahulu; beberapa bidang bersifat kondisional dan hanya akan muncul setelahnya. 
                Periksa koneksi internet Anda, karena koneksi yang lambat dapat menunda rendering bidang.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Sakelar "Aktifkan Jumlah Deposit Berbeda" tidak responsif</dt>
              <dd className="ml-4 text-muted-foreground">
                Muat ulang halaman dan coba sakelar lagi. Pastikan tidak ada kesalahan validasi di atas sakelar (misalnya, jenis deposit hilang), 
                yang dapat menghalangi interaksi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Bidang "Diperlukan" tidak dapat diedit atau tidak muncul</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa jenis deposit telah dipilih sebelum mencoba mengatur nilai "Diperlukan". 
                Bidang ini mungkin terkunci jika bidang prasyarat tidak diisi dengan benar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Deposit tidak diterapkan saat pemesanan</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali bahwa konfigurasi deposit Anda telah disimpan dengan benar. 
                Pastikan tidak ada rate plan tertentu atau pengaturan kondisional yang menggantikan aturan deposit default. 
                Verifikasi bahwa pemesanan memenuhi kondisi untuk penerapan deposit (misalnya, tanggal pemesanan, durasi menginap, saluran pemesanan).
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== BOOKING CONDITION ==================== */}
      <Section id="booking-condition" title="Syarat Pemesanan">
        <p>
          Bidang ini adalah area teks tempat Anda dapat menentukan syarat dan ketentuan umum pemesanan. 
          Ini dapat mencakup tanggung jawab tamu, batasan pemesanan, atau catatan khusus yang berlaku untuk semua reservasi. 
          Teks ditampilkan kepada tamu di halaman pemesanan.
        </p>

        <h4 className="mt-4 font-medium">Cara Menambahkan Syarat Pemesanan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Gulir ke bagian <strong>Syarat Pemesanan</strong>.</li>
          <li>Masukkan teks atau ketentuan yang diinginkan di area teks.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745985219/02._booking_conditions_kdqjsw.jpg" />
          <li>Klik <strong>Simpan</strong> untuk menerapkan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745985220/13._save_button_k15fhr.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Syarat Pemesanan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Syarat pemesanan tidak tersimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan area teks tidak dibiarkan kosong sebelum mengklik <strong>Simpan</strong>. 
                Periksa apakah ada karakter atau format yang tidak didukung yang dapat mencegah penyimpanan bidang. 
                Segarkan halaman dan coba masukkan teks lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Teks tidak terlihat di halaman pemesanan</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa Anda telah mengklik <strong>Simpan</strong> setelah memasukkan konten. 
                Periksa apakah visibilitas syarat pemesanan terpengaruh oleh template khusus atau pengaturan mesin pemesanan. 
                Coba bersihkan cache atau akses halaman pemesanan dalam mode penyamaran untuk memverifikasi visibilitas.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Bidang tampak dinonaktifkan atau tidak dapat diedit</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memiliki hak akses atau izin peran yang sesuai untuk mengubah bidang <strong>Syarat Pemesanan</strong>. 
                Muat ulang halaman dan verifikasi apakah bidang tersebut menjadi dapat diedit.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== TAX AND OTHER ADDITIONAL CHARGES ==================== */}
      <Section id="tax-charges" title="Pajak & Biaya Tambahan">
        <p>
          Bagian ini memungkinkan Anda menambahkan pajak atau biaya tambahan yang akan diterapkan selama proses pemesanan. 
          Biaya ini secara langsung mempengaruhi total invoice yang akan dibayar tamu, termasuk pajak dan biaya akomodasi selama reservasi.
        </p>

        <h4 className="mt-4 font-medium">Cara Menambahkan Pajak atau Biaya Tambahan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Gulir ke bagian <strong>Pajak dan Biaya Tambahan Lainnya</strong>.</li>
          <li>Untuk menambahkan biaya, klik <strong>Tambah Biaya Baru</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745985221/03._tax_-_add_a_new_charge_euvyte.jpg" />
          <li>
            Isi informasi berikut:
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Label / Deskripsi:</strong> Nama biaya (misalnya, Pajak, Jaminan, dll).</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745985221/04._tax_-_label_yyn5u7.jpg" />
              <li><strong>Nilai:</strong> Persentase atau jumlah tetap yang akan diterapkan.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745985220/05._tax_-_value_q2opeg.jpg" />
              <li>
                <strong>Tipe:</strong>
                <ul className="ml-6 list-circle">
                  <li>
                    <strong>Persen:</strong> Pajak atau biaya diterapkan sebagai persentase dari total jumlah pemesanan. 
                    Misalnya, pajak 2% akan dihitung berdasarkan total nilai pemesanan.
                  </li>
                  <li>
                    <strong>IDR:</strong> Jumlah tetap yang diterapkan dalam mata uang default properti (IDR atau lainnya). 
                    Ini adalah nilai spesifik yang ditambahkan ke pemesanan terlepas dari jumlah total, berdasarkan pengaturan mata uang default properti.
                  </li>
                  <li>
                    <strong>Per Malam:</strong> Biaya diterapkan untuk setiap malam kamar dipesan. 
                    Contoh: Jika pajak diatur ke IDR 50.000 per malam, dan tamu menginap selama 3 malam, total pajak akan menjadi IDR 150.000 (50.000 x 3 malam). 
                    Ini adalah biaya per malam, jadi total pajak dihitung dengan mengalikan tarif per malam dengan jumlah malam tamu menginap.
                  </li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745985220/06._tax_-_type_cdjyo4.jpg" />
                </ul>
              </li>
              <li><strong>Tanggal Mulai / Akhir (opsional):</strong> Tentukan periode selama biaya ini berlaku.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745985220/07._tax_-_start_end_rfh9ub.jpg" />
            </ul>
          </li>
          <li>Untuk menghapus biaya yang ada, klik tombol <strong>Hapus</strong> di samping biaya tersebut.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745985220/08._tax_-_delete_button_kyi6yv.jpg" />
          <li>Klik <strong>Simpan</strong> untuk menerapkan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745985220/13._save_button_k15fhr.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pajak & Biaya Tambahan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Biaya tidak muncul di ringkasan pemesanan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan biaya telah disimpan dengan mengklik <strong>Simpan</strong> setelah konfigurasi. 
                Verifikasi <strong>Tanggal Mulai / Akhir</strong> diatur dengan benar dan berada dalam rentang tanggal pemesanan. 
                Konfirmasikan nilai biaya lebih besar dari nol dan <strong>Tipe</strong> yang benar (Persen, IDR, atau Per Malam) dipilih.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perhitungan total biaya salah</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali <strong>Tipe</strong> biaya yang dipilih (Persen, IDR, atau Per Malam) sesuai dengan metode perhitungan yang Anda maksudkan. 
                Untuk biaya <strong>Per Malam</strong>, konfirmasikan tarif per malam telah dikalikan dengan benar dengan jumlah malam. 
                Untuk biaya <strong>Persen</strong>, pastikan itu diterapkan pada komponen pemesanan yang dimaksud (misalnya, subtotal vs. total).
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat menghapus biaya yang ada</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memiliki izin yang diperlukan untuk mengedit atau menghapus biaya pemesanan. 
                Segarkan halaman dan coba klik tombol <strong>Hapus</strong> lagi. 
                Periksa apakah biaya saat ini diterapkan pada pemesanan yang sedang berlangsung, yang dapat membatasi penghapusan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tanggal Mulai / Akhir tidak tersimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kedua tanggal dipilih menggunakan alat pemilih tanggal. 
                Coba masukkan ulang tanggal dan simpan lagi. 
                Konfirmasikan tidak ada konflik dengan biaya lain yang ada menggunakan tanggal yang tumpang tindih.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== CANCELLATION POLICIES ==================== */}
      <Section id="cancellation-policy" title="Kebijakan Pembatalan">
        <p>
          Ini adalah bidang teks bebas tempat Anda dapat menentukan aturan pembatalan umum seperti:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          <li>Batas waktu pembatalan gratis</li>
          <li>Biaya atau denda pembatalan</li>
          <li>Kelayakan pengembalian dana</li>
        </ul>
        <p className="mt-2">
          Ketentuan ini ditampilkan kepada tamu selama pemesanan dan dapat membantu mengurangi sengketa.
        </p>

        <h4 className="mt-4 font-medium">Cara Menambahkan Kebijakan Pembatalan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Gulir ke bagian <strong>Kebijakan Pembatalan</strong>.</li>
          <li>Masukkan ketentuan pembatalan properti Anda ke dalam kotak teks.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745985220/09._cancellation_policy_ac4ude.jpg" />
          <li>Klik <strong>Simpan</strong> untuk menerapkan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745985220/13._save_button_k15fhr.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Kebijakan Pembatalan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Teks kebijakan pembatalan tidak tersimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda mengklik tombol <strong>Simpan</strong> setelah memasukkan atau memperbarui teks. 
                Segarkan halaman untuk mengonfirmasi apakah perubahan telah diterapkan. 
                Periksa apakah ada ekstensi browser atau pemblokir iklan yang dapat mencegah tindakan penyimpanan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kebijakan pembatalan tidak ditampilkan kepada tamu</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan teks kebijakan telah disimpan dan tidak kosong. 
                Pastikan halaman pemesanan atau integrasi sistem mendukung tampilan konten kebijakan pembatalan. 
                Verifikasi apakah ada template khusus atau pengaturan yang menggantikan tampilan default.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tamu tidak mengikuti ketentuan pembatalan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kebijakan pembatalan ditulis dengan jelas dan mudah dipahami. 
                Pertimbangkan untuk menyoroti poin-poin penting seperti batas waktu pembatalan atau biaya dengan huruf tebal. 
                Periksa apakah email konfirmasi atau voucher Anda juga menyertakan teks kebijakan untuk memperkuat visibilitas.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== OTHER POLICIES ==================== */}
      <Section id="other-policies" title="Kebijakan Lainnya">
        <p>
          Bagian ini memungkinkan Anda mengonfigurasi kebijakan tambahan untuk tamu seperti waktu check-in/check-out, 
          batas usia untuk anak dan bayi, serta akses tamu ke invoice. Pengaturan ini akan diterapkan pada pemesanan 
          dan dapat memengaruhi ekspektasi tamu selama menginap.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengonfigurasi Kebijakan Lainnya:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Gulir ke bagian <strong>Kebijakan Lainnya</strong>.</li>
          <li>
            Isi bidang-bidang berikut:
            <ul className="ml-6 mt-1 list-disc">
              <li>
                <strong>Check-In Tamu Mulai:</strong> Tentukan waktu paling awal tamu diizinkan untuk check-in (misalnya, 14:00).
              </li>
              <li>
                <strong>Instruksi Check-In Tambahan:</strong> Masukkan instruksi khusus untuk tamu mengenai check-in (misalnya, "Check-in di resepsionis dengan KTP").
              </li>
              <li>
                <strong>Check-Out Tamu Sampai:</strong> Tentukan waktu terakhir tamu harus check-out (misalnya, 12:00).
              </li>
              <li>
                <strong>Instruksi Check-Out Tambahan:</strong> Masukkan instruksi untuk tamu saat check-out (misalnya, "Harap kembalikan kunci kamar di resepsionis").
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745985220/10._others_-_1_ganw1s.jpg" />
              <li>
                <strong>Tampilkan Akses Pelanggan pada Invoice:</strong> Aktifkan atau nonaktifkan apakah invoice terlihat oleh tamu di panel akses tamu mereka.
              </li>
              <li>
                <strong>Berapa Usia Maksimum Anak?</strong> Anak di atas usia ini akan dianggap sebagai orang dewasa (misalnya, 12 tahun).
              </li>
              <li>
                <strong>Berapa Usia Maksimum Bayi?</strong> Bayi di atas usia ini akan dihitung sebagai anak. Standarnya adalah 2 tahun.
              </li>
              <li>
                <strong>Berapa Jumlah Maksimum Bayi yang Dapat Anda Terima?</strong> Tetapkan jumlah maksimum bayi yang diizinkan per pemesanan (misalnya, 1).
              </li>
              <li>
                <strong>Anak Di Bawah Usia Ini Tidak Diizinkan</strong> Tentukan usia minimum anak yang diizinkan di properti Anda. Tamu dengan anak di bawah usia ini tidak akan dapat memesan (misalnya, di bawah 5 tahun tidak diizinkan).
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745985220/11._others_-_2_qopsw4.jpg" />
            </ul>
          </li>
          <li>Klik <strong>Simpan</strong> untuk menerapkan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1745985220/12._save_j2zsxc.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Kebijakan Lainnya:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Waktu check-in atau check-out tidak tersimpan dengan benar</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi waktu dimasukkan dalam format 24 jam yang benar (misalnya, 14:00 untuk jam 2 siang). 
                Pastikan Anda mengklik <strong>Simpan</strong> setelah membuat perubahan. 
                Segarkan halaman untuk mengonfirmasi nilai yang disimpan tercermin.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tamu tidak mengikuti instruksi check-in/out</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan instruksi tambahan ditulis dengan jelas di bidang masing-masing. 
                Verifikasi apakah instruksi ini disertakan dalam konfirmasi pemesanan atau komunikasi tamu. 
                Pertimbangkan untuk memperbarui pesan otomatis atau template email untuk menekankan instruksi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Invoice tidak terlihat oleh tamu meskipun opsi diaktifkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa <strong>Tampilkan Akses Pelanggan pada Invoice</strong> diaktifkan dan disimpan. 
                Periksa apakah fitur akses tamu diaktifkan dengan benar dan dapat diakses untuk reservasi. 
                Jika Anda menggunakan sistem khusus, verifikasi bahwa sistem tersebut mendukung tampilan invoice melalui panel tamu.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Batasan usia tidak diterapkan selama pemesanan</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bidang usia (anak, bayi, pembatasan) diisi dengan benar dan disimpan. 
                Jika pemesanan dilakukan melalui saluran yang terhubung, pastikan pembatasan disinkronkan atau didukung oleh saluran tersebut.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}