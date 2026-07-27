import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/mapping-ota-ibe")({
  head: () => ({
    meta: [
      { title: "Pemetaan OTA dan IBE — Channelku | SinergiMax" },
      { name: "description", content: "Hubungkan rate plan internal dengan OTA dan IBE, kelola pemetaan, penugasan, dan rate plan anak." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "mapping", label: "Pemetaan" },
  { id: "import-rooms", label: "Impor Kamar" },
  { id: "add-mapping", label: "Tambah Pemetaan" },
  { id: "unmapped-rooms", label: "Hapus Pemetaan" },
  { id: "mapping-status", label: "Indikator Status Pemetaan" },
  { id: "assignment", label: "Penugasan" },
  { id: "assign-child-rates", label: "Penugasan Rate Plan Anak (V1)" },
  { id: "assign-child-rates-v2", label: "Penugasan Rate Plan Anak (V2)" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Pemetaan OTA dan IBE" activeTo="/docs/channelku/channel-manager/control-panel/mapping-ota-and-ibe">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Pemetaan OTA dan IBE</h1>
      <p className="mt-4">
        Fitur <strong>Pemetaan</strong> memungkinkan Anda menghubungkan rencana kamar dan rate plan internal di Channel Manager 
        dengan rencana kamar dan rate plan eksternal dari mitra <strong>OTA (Online Travel Agency)</strong> dan <strong>IBE (Internet Booking Engine)</strong>.
      </p>
      <p className="mt-2">
        Proses ini memastikan bahwa ketersediaan kamar, harga, pembatasan, dan reservasi disinkronkan dengan benar antara sistem properti Anda 
        dan platform mitra yang terhubung.
      </p>

      {/* ==================== MAPPING ==================== */}
      <Section id="mapping" title="Pemetaan">
        <p>
          Pemetaan untuk mitra OTA dan IBE dikelola di tab <strong>Pemetaan</strong>. Sebelum membuat pemetaan, pastikan Anda telah mengimpor 
          data kamar dan rate plan dari mitra yang dipilih.
        </p>
      </Section>

      {/* ==================== IMPORT ROOMS ==================== */}
      <Section id="import-rooms" title="Impor Kamar">
        <p>
          Fitur <strong>Impor Kamar</strong> mengambil data kamar dan rate plan dari mitra yang terhubung.
        </p>

        <h4 className="mt-4 font-medium">Cara Mengimpor Kamar:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Klik tombol <strong>Impor Kamar</strong> di tab <strong>Pemetaan</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776391078/button-import-rooms-ota-ibe.png" />
          <li>
            Sistem akan menampilkan kamar dan rate plan yang tersedia. <strong>Centang</strong> kamar yang ingin Anda impor dari daftar kamar yang tersedia.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776391081/import-rooms-ota-ibe.png" />
          <li>Klik tombol <strong>Simpan</strong> untuk menyelesaikan proses impor.</li>
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Impor Kamar:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tombol Impor Kamar tidak berfungsi</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa koneksi internet Anda dan coba lagi. Keluar dan masuk kembali sebelum mencoba impor.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Daftar impor kosong atau tidak lengkap</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan dengan mitra bahwa properti Anda aktif dan kamar/rate plan tersedia. Impor ulang setelah membuat perubahan di extranet mitra.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== ADD MAPPING ==================== */}
      <Section id="add-mapping" title="Tambah Pemetaan">
        <p>
          Setelah mengimpor daftar kamar, Anda dapat membuat pemetaan antara kamar eksternal dan rate plan internal Anda.
        </p>

        <h4 className="mt-4 font-medium">Cara Menambahkan Pemetaan:</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>
            Buka tab <strong>Pemetaan</strong> dan temukan <strong>Nama Rate Plan Internal</strong> yang ingin Anda petakan. 
            Kemudian klik <strong>Tambah Pemetaan</strong> di samping rate plan tersebut.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776391078/add-mapping-ota-ibe.png" />
          <li>
            Daftar kombinasi kamar dan rate plan yang tersedia akan muncul. Hanya kamar dan rate plan yang telah diimpor dan 
            <strong>belum</strong> dipetakan ke kamar internal yang akan ditampilkan dalam daftar ini.
          </li>
          <li>Pilih kamar dan rate plan yang cocok dengan rate plan internal yang ingin Anda hubungkan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776391077/update-mapping-ota-ibe.png" />
          <li>
            Klik <strong>Perbarui</strong> untuk menyimpan pemetaan. Jika Anda tidak ingin melanjutkan, klik <strong>Tutup</strong> untuk membatalkan proses.
          </li>
        </ol>
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

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pemetaan:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak ada kamar atau rate plan yang muncul untuk pemetaan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah mengimpor data kamar dan rate plan terbaru menggunakan fitur <strong>Impor Kamar</strong>. Konfirmasikan dengan mitra bahwa properti Anda memiliki rate plan aktif yang dikonfigurasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat menyimpan pemetaan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kamar dan rate plan yang valid dipilih sebelum mengklik <strong>Perbarui</strong>. Coba segarkan halaman dan ulangi proses jika masalah berlanjut.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kamar tidak terpetakan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kamar dan rate plan telah berhasil diimpor. Verifikasi bahwa konfigurasi pemetaan kamar telah selesai di tab <strong>Pemetaan</strong>. Periksa apakah kamar OTA masih aktif di extranet channel.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== ASSIGNMENT ==================== */}
      <Section id="assignment" title="Penugasan">
        <p>
          Fitur <strong>Penugasan</strong> memungkinkan Anda menghubungkan rate plan anak dari mitra yang terhubung ke rate plan internal Anda 
          untuk tujuan reservasi. Ini adalah fungsi <strong>hanya menerima</strong>, yang berarti mendukung penerimaan reservasi saja dan 
          <strong>tidak mengizinkan</strong> pengiriman pembaruan harga, ketersediaan, atau pembatasan.
        </p>
      </Section>

      {/* ==================== ASSIGN CHILD RATES (V1) ==================== */}
      <Section id="assign-child-rates" title="Penugasan Rate Plan Anak (V1)">
        <h4 className="font-medium">Cara Menugaskan Rate Plan Anak (V1):</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>
            Pada tab <strong>Penugasan</strong>, temukan <strong>Nama Rate Plan OTA</strong> yang ingin Anda tugaskan. 
            Kemudian klik <strong>Tambah Rate Plan Internal</strong> di samping rate plan OTA yang dipilih.
          </li><Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776391080/add-internal-rateplan-ota-ibe.png" />
          <li>Pilih rate plan internal dari daftar dropdown.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776391079/save-assignment-ota-ibe.png" />
          <li>
            Klik <strong>Simpan Penugasan Baru</strong> untuk menyelesaikan penugasan. Jika Anda ingin membatalkan proses, 
            klik tombol <strong>batal</strong> sebelum menyimpan.
          </li>
          <li>
            Jika diperlukan, Anda dapat menghapus rate plan yang ditugaskan sebelumnya dengan mengklik <strong>Hapus Kamar OTA Ini</strong>.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776391080/remove-assignment-ota-ibe.png" />
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
                Jika tombol <strong>Hapus Kamar OTA Ini</strong> tidak merespons, coba segarkan halaman. Pastikan peran pengguna Anda memiliki izin untuk mengubah penugasan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== ASSIGN CHILD RATES V2 ==================== */}
      <Section id="assign-child-rates-v2" title="Penugasan Rate Plan Anak (V2)">
        <p>
          Berbeda dengan di Versi 1, di mana rate plan anak dikonfigurasi secara terpisah melalui tab <strong>Penugasan</strong>. 
          Di <strong>Versi 2</strong>, rate plan anak dikelola langsung di dalam bagian <strong>Pemetaan</strong>, 
          memungkinkan beberapa rate plan eksternal, termasuk rate plan anak, ditautkan ke satu rate plan internal dalam satu proses.
        </p>

        <h4 className="mt-4 font-medium">Cara Menugaskan Rate Plan Anak (V2):</h4>
        <ol className="ml-6 list-decimal space-y-1">
          <li>
            Untuk menugaskan rate plan anak, buka tab <strong>Pemetaan</strong> dan temukan <strong>Nama Rate Plan Internal</strong> 
            yang ingin Anda petakan. Kemudian klik <strong>Tambah Pemetaan</strong> di samping rate plan tersebut.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776675738/add-mapping-ikyu-v2_z3ktfk.png" />
          <li>
            Daftar kombinasi kamar dan rate plan yang tersedia akan muncul. Pilih kamar eksternal dan rate plan yang ingin Anda hubungkan. 
            Jika rate plan eksternal yang dipilih berisi rate plan anak, mereka juga akan <strong>secara otomatis disertakan</strong> 
            selama proses pemetaan.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778816115/rateplan-list-v2_1_qoduky.png" />
          <li>Klik <strong>Tambah Pemetaan</strong> untuk menyimpan dan menerapkan konfigurasi pemetaan.</li>
          <li>Berikut adalah contoh rate plan anak yang berhasil dipetakan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778815267/mapped-room-v2_yruhal.png" />
        </ol>
      </Section>
    </DocsLayout>
  );
}