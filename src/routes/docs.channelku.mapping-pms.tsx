import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/mapping-pms")({
  head: () => ({
    meta: [
      { title: "Pemetaan PMS — Channelku | SinergiMax" },
      { name: "description", content: "Hubungkan rate plan internal dengan PMS, kelola pemetaan, dan penugasan rate plan anak." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "rooms-rateplan", label: "Kamar dan Rateplan" },
  { id: "add-room-rateplan", label: "Tambah Kamar dan Rateplan" },
  { id: "mapping", label: "Pemetaan" },
  { id: "add-mapping", label: "Tambah Pemetaan" },
  { id: "unmapped-rooms", label: "Hapus Pemetaan" },
  { id: "mapping-status", label: "Indikator Status Pemetaan" },
  { id: "assignment", label: "Penugasan" },
  { id: "assign-child-rates", label: "Penugasan Rate Plan Anak" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Pemetaan PMS" activeTo="/docs/channelku/channel-manager/control-panel/mapping-pms">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Pemetaan PMS</h1>
      <p className="mt-4">
        Fitur <strong>Pemetaan</strong> memungkinkan Anda menghubungkan rencana kamar dan rate plan internal di Channel Manager 
        dengan rencana kamar dan rate plan eksternal dari <strong>Sistem Manajemen Properti (PMS)</strong>.
      </p>
      <p className="mt-2">
        Proses ini memastikan bahwa ketersediaan kamar, harga, pembatasan, dan reservasi disinkronkan dengan benar antara sistem properti Anda 
        dan platform mitra yang terhubung.
      </p>

      {/* ==================== ROOMS AND RATEPLAN ==================== */}
      <Section id="rooms-rateplan" title="Kamar dan Rateplan">
        <p>
          Berbeda dengan OTA, di mana Anda harus mengklik <strong>'Impor Kamar'</strong> untuk menarik rate plan, pemetaan dengan Mitra PMS 
          mengharuskan Anda untuk membuat rate plan secara manual di dalam tab <strong>Kamar</strong>.
        </p>
        <p className="mt-2">
          Sebelum membuat rate plan, mitra harus membagikan kode kamar dan rate plan aktif mereka di sisi PMS kepada klien yang menangani koneksi 
          sehingga mereka dapat menambahkan kode kamar dan rate plan di sisi Channel Manager untuk pemetaan.
        </p>
      </Section>

      {/* ==================== ADD ROOM AND RATEPLAN ==================== */}
      <Section id="add-room-rateplan" title="Tambah Kamar dan Rateplan">
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776997259/add-rooms-pms_xfpsb6.png" />
        <h4 className="font-medium">Cara Menambahkan Kamar dan Rateplan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>
            Pada tab <strong>Kamar</strong>, masukkan nama kamar dari rateplan Anda di kotak teks <strong>Nama Kamar</strong>.
          </li>
          <li>
            Masukkan <strong>Kode Kamar PMS</strong> dan <strong>kode rateplan</strong> pada <strong>Kode Kamar</strong> yang dipisahkan dengan <strong>":"</strong>, 
            misalnya: <code>DLXD:OTA-RO</code> (artinya kode kamar <code>DLXD</code> dengan kode rateplan <code>OTA-RO</code>).
          </li>
          <li>
            Isi bidang <strong>Okupansi</strong> dan <strong>Alokasi</strong> (opsional).
          </li>
          <li>Klik <strong>Tambah Kamar</strong> untuk membuat rate plan baru.</li>
          <li>
            Rate plan yang dibuat akan muncul di daftar pemetaan dan akan tersedia untuk digunakan selama proses pemetaan nanti.
          </li>
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Contoh Format Kode Kamar:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li>
              <strong>Format:</strong> <code>KodeKamarPMS:KodeRateplanPMS</code>
            </li>
            <li>
              <strong>Contoh:</strong> <code>DLXD:OTA-RO</code> (Kamar Deluxe dengan rateplan Room Only)
            </li>
            <li>
              <strong>Contoh lain:</strong> <code>STD:BAR</code> (Kamar Standar dengan rateplan Best Available Rate)
            </li>
          </ul>
        </div>
      </Section>

      {/* ==================== MAPPING ==================== */}
      <Section id="mapping" title="Pemetaan">
        <p>
          Pemetaan dengan Mitra PMS memungkinkan mitra untuk mendorong harga, ketersediaan, dan pembatasan ke Channel Manager. 
          Ini juga memungkinkan mitra untuk menerima reservasi dari Channel Manager.
        </p>
      </Section>

      {/* ==================== ADD MAPPING ==================== */}
      <Section id="add-mapping" title="Tambah Pemetaan">
        <h4 className="font-medium">Cara Menambahkan Pemetaan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>
            Pada tab <strong>Pemetaan</strong>, temukan <strong>Nama Rate Plan Internal</strong> yang ingin Anda petakan. 
            Kemudian klik <strong>Tambah Pemetaan</strong> di samping rate plan tersebut.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776998240/button-add-mapping-pms_oskzkl.png" />
          <li>
            Daftar kombinasi kamar dan rate plan yang tersedia dari tab <strong>Kamar</strong> akan muncul. Hanya kamar dan rate plan yang 
            telah dibuat dan <strong>belum</strong> dipetakan ke kamar internal yang akan ditampilkan dalam daftar ini.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776998275/update-mapping-pms_s19pa0.png" />
          <li>Pilih salah satu opsi yang cocok dengan kamar dan rate plan yang ingin Anda hubungkan, dan klik <strong>Perbarui</strong> untuk menyimpan pemetaan.</li>
          <li>Jika Anda tidak ingin melanjutkan, klik <strong>Tutup</strong> untuk membatalkan proses.</li>
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Penting:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>
              Pastikan <strong>semua rate plan OTA</strong> telah dipetakan atau ditugaskan. Setiap rate plan yang <strong>tidak terpetakan</strong> atau 
              <strong>tidak ditugaskan</strong> dapat menyebabkan <strong>kesalahan pada reservasi yang masuk</strong>.
            </li>
          </ul>
        </div>

        <p className="mt-2">
          Kamar yang berhasil dipetakan akan muncul di:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          <li>Daftar kamar</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776998484/mapped-room-pms_fu8dko.png" />
          <li>Daftar pemetaan</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776998487/mapped-room-pms-2_nysmrw.png" />
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pemetaan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak Ada Kamar atau Rate Plan yang Muncul untuk Pemetaan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah menambahkan kode kamar dan rate plan dari mitra melalui tab <strong>Kamar</strong>.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak Dapat Menyimpan Pemetaan</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa bahwa kamar dan rate plan dipilih sebelum mengklik <strong>Perbarui</strong>. Jika pemetaan gagal disimpan, coba segarkan halaman dan ulangi proses.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== UNMAPPED ROOMS ==================== */}
      <Section id="unmapped-rooms" title="Hapus Pemetaan">
        <p>
          Jika Anda perlu memperbarui atau mengubah pemetaan yang ada, Anda harus menghapus yang saat ini terlebih dahulu. 
          Untuk menghapus pemetaan kamar, klik tombol <strong>Hapus (×)</strong> di samping kamar yang dipetakan.
        </p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776408906/remove-mapping-ota-ibe.png" />
      </Section>

      {/* ==================== MAPPING STATUS INDICATORS ==================== */}
      <Section id="mapping-status" title="Indikator Status Pemetaan">
        <p>
          Sistem menyediakan indikator visual untuk membantu Anda mengidentifikasi dengan cepat status pemetaan kamar dan rate plan Anda. 
          Indikator ini membantu memastikan bahwa semua kamar terhubung dengan benar, memungkinkan sinkronisasi ketersediaan, harga, 
          dan reservasi yang akurat di seluruh sistem.
        </p>

        <h4 className="mt-4 font-medium">Tanda Peringatan Kuning:</h4>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777521169/ota-warning-sign.png" />
        <p>
          Menunjukkan bahwa ada kamar atau rate plan yang <strong>belum</strong> dipetakan. Ini biasanya muncul tepat setelah mengimpor 
          kamar dari OTA, IBE, atau PMS. Ini berfungsi sebagai pengingat bahwa kamar yang diimpor masih perlu dipetakan. 
          Indikator juga menunjukkan jumlah kamar atau rate plan yang tetap tidak terpetakan.
        </p>

        <h4 className="mt-4 font-medium">Indikator Hijau:</h4>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777521192/ota-green-sign.png" />
        <p>
          Menunjukkan bahwa semua kamar dan rate plan yang diimpor dan tersedia telah <strong>berhasil dipetakan</strong>.
        </p>
      </Section>

      {/* ==================== ASSIGNMENT ==================== */}
      <Section id="assignment" title="Penugasan">
        <p>
          Fitur <strong>Penugasan</strong> memungkinkan Anda menghubungkan rate plan anak dari mitra yang terhubung ke rate plan internal Anda 
          untuk tujuan reservasi. Ini adalah fungsi <strong>hanya menerima</strong>, yang berarti mendukung penerimaan reservasi saja dan 
          <strong>tidak mengizinkan</strong> pengiriman pembaruan harga, ketersediaan, atau pembatasan.
        </p>
      </Section>

      {/* ==================== ASSIGN CHILD RATES ==================== */}
      <Section id="assign-child-rates" title="Penugasan Rate Plan Anak">
        <h4 className="font-medium">Cara Menugaskan Rate Plan Anak:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>
            Pada tab <strong>Penugasan</strong>, temukan <strong>Nama Rate Plan OTA</strong> yang ingin Anda tugaskan. 
            Kemudian klik <strong>Tambah Rate Plan Internal</strong> di samping rate plan OTA yang dipilih.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776391080/add-internal-rateplan-ota-ibe.png" />
          <li>Pilih rate plan internal dari daftar dropdown.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776391079/save-assignment-ota-ibe.png" />
          <li>
            Klik <strong>Simpan Penugasan Baru</strong> untuk menyelesaikan penugasan. Jika Anda ingin membatalkan proses, 
            klik tombol <strong>batal</strong> sebelum menyimpan.
          </li>
          <li>
            Jika diperlukan, Anda dapat menghapus rate plan yang ditugaskan sebelumnya dengan mengklik tombol <strong>Hapus</strong>.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777000425/remove-assignment-pms_xzvqqi.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Penugasan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat menemukan rate plan internal di dropdown</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan rate plan internal ada di sistem sebelum menugaskan. Segarkan halaman untuk memuat daftar rate plan terbaru.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Penugasan disimpan tetapi reservasi tidak diterima</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan penugasan disimpan dengan benar. Pastikan rate plan aktif di mitra dan memenuhi syarat untuk pengiriman reservasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat menghapus rate plan yang ditugaskan</dt>
              <dd className="ml-4 text-muted-foreground">
                Jika tombol <strong>Hapus</strong> tidak merespons, coba segarkan halaman. Pastikan peran pengguna Anda memiliki izin untuk mengubah penugasan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}