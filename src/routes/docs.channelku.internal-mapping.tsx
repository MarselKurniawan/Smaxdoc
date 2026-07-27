import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/internal-mapping")({
  head: () => ({
    meta: [
      { title: "Pemetaan Internal — Channelku | SinergiMax" },
      { name: "description", content: "Hubungkan satu tipe kamar dan rate plan dengan yang lain dalam properti yang sama." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "how-to-add", label: "Cara Menambahkan Pemetaan" },
  { id: "how-to-delete", label: "Cara Menghapus Pemetaan" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Pemetaan Internal" activeTo="/docs/channelku/channel-manager/internal-mapping">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Pemetaan Internal</h1>
      <p className="mt-4">
        Fitur <strong>Pemetaan Internal</strong> memungkinkan Anda untuk menghubungkan satu <strong>tipe kamar</strong> dan 
        <strong>rate plan</strong> dengan yang lain dalam properti yang sama. Ini memastikan bahwa ketersediaan dan data reservasi 
        tetap sinkron di seluruh tipe kamar yang terkait.
      </p>

      {/* ==================== HOW TO ADD ==================== */}
      <Section id="how-to-add" title="Cara Menambahkan Pemetaan">
        <p>Berikut cara menambahkan Pemetaan Internal:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Buka bagian <strong>Pemetaan Internal</strong>.</li>
          <li>
            Pilih <strong>Tipe Kamar</strong> dan <strong>Rate Plan</strong>-nya.
          </li>
          <li>
            Pilih <strong>Rate Plan</strong> yang berbeda dari <strong>Tipe Kamar</strong> lain.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746592388/02._select_rate_plan_k6r3nm.jpg" />
          <li>
            Klik <strong>Tambah Pemetaan</strong>.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746592389/03._add_mapping_button_syxzzw.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Contoh:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li>
              Memetakan <strong>Whole Villa 3 BR Room Only</strong> dengan <strong>Standard Double Retail From Whole Villa 3 BR</strong> 
              berarti bahwa reservasi yang dibuat di salah satu tipe kamar juga akan dibuat secara otomatis di tipe kamar lainnya.
            </li>
          </ul>
        </div>
      </Section>

      {/* ==================== HOW TO DELETE ==================== */}
      <Section id="how-to-delete" title="Cara Menghapus Pemetaan">
        <p>Berikut cara menghapus Pemetaan Internal:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            Klik tombol <strong>Hapus</strong> di samping pemetaan yang ingin Anda hapus.
          </li>
          <li>
            Pemetaan akan segera dihapus.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746592389/04._delete_button_qj0jtv.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-semibold">Catatan Penting:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>Selalu petakan antara <strong>rate plan yang berbeda</strong>.</li>
            <li>
              Pastikan <strong>tipe kamar</strong> dan <strong>rate plan</strong> yang dipilih sudah benar sebelum menyimpan.
            </li>
            <li>Menghapus pemetaan bersifat <strong>langsung dan tidak dapat dibatalkan</strong>.</li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Pemetaan Internal:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat menambahkan pemetaan baru</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kedua rate plan yang dipilih berasal dari <strong>tipe kamar yang berbeda</strong>.
                Anda <strong>tidak dapat</strong> memetakan tipe kamar dengan dirinya sendiri atau menggunakan rate plan yang sama di kedua sisi.
                Periksa apakah pemetaan sudah ada untuk menghindari duplikasi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Sistem membuat reservasi duplikat secara tidak benar</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa tipe kamar dan rate plan yang dipetakan sudah benar.
                Periksa apakah tipe kamar yang sama secara tidak sengaja dipetakan dengan beberapa rate plan yang tumpang tindih.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pemetaan tidak memicu duplikasi reservasi</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa pemetaan berhasil ditambahkan dan terlihat dalam daftar pemetaan.
                Pastikan reservasi dibuat di tipe kamar yang terlibat dalam pemetaan.
                Pastikan tidak ada masalah dengan pengaturan kamar atau rate plan yang tidak aktif.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Hapus tidak berfungsi</dt>
              <dd className="ml-4 text-muted-foreground">
                Coba segarkan halaman dan hapus lagi.
                Jika masalah berlanjut, pastikan Anda memiliki izin akses yang benar untuk mengubah pemetaan.
                Hubungi <strong>Dukungan Bookandlink</strong> jika penghapusan masih gagal setelah mencoba ulang.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}