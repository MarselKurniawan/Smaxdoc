import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/rate-multiplier")({
  head: () => ({
    meta: [
      { title: "Rate Multiplier — Channelku | SinergiMax" },
      { name: "description", content: "Atur pengali harga untuk setiap OTA berdasarkan persentase kenaikan atau penurunan." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "how-to-set", label: "Cara Mengatur Rate Multiplier" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Rate Multiplier" activeTo="/docs/channelku/channel-manager/rate-multiplier">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Rate Multiplier</h1>
      <p className="mt-4">
        Bagian ini memungkinkan Anda untuk menyesuaikan <strong>pengali harga</strong> untuk setiap OTA berdasarkan 
        <strong>persentase kenaikan</strong> atau <strong>penurunan</strong>.
      </p>

      {/* ==================== HOW TO SET ==================== */}
      <Section id="how-to-set" title="Cara Mengatur Rate Multiplier">
        <p>Berikut cara mengatur Rate Multiplier:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            Buka bagian <strong>Agen Perjalanan</strong> dan pilih OTA yang diinginkan dari menu dropdown 
            <strong>Pilih Situs Web</strong>.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746512875/02._travel_zu97vt.jpg" />
          <li>
            Pilih jenis aturan: <strong>Kenaikan dari</strong> atau <strong>Penurunan dari</strong>.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746512893/03._rule_sh1u6r.jpg" />
          <li>
            Masukkan nilai <strong>persentase</strong> (misalnya, masukkan <code>10</code> untuk penyesuaian 10%).
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746512989/04._percentage_qmqdfc.jpg" />
          <li>
            Klik <strong>Simpan</strong> untuk menerapkan aturan.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746512989/05._save_fkamfk.jpg" />
          <li>
            Setelah aturan disimpan dan muncul dalam daftar, klik <strong>Dorong Harga</strong> untuk mengirim harga yang diperbarui ke OTA.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746512874/06._push_rate_n1jrp5.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan Penting:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>
              Harga yang dihitung ulang <strong>hanya akan terlihat</strong> di extranet OTA, <strong>tidak</strong> di dalam dasbor internal.
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Rate Rules untuk OTA:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">OTA yang dipilih tidak muncul dalam daftar dropdown</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan OTA sudah terhubung melalui bagian <strong>Saluran Terhubung</strong>.
                Segarkan halaman untuk memuat ulang daftar OTA yang tersedia.
                Jika OTA masih tidak terdaftar, periksa apakah kontrak Anda dengan OTA tersebut aktif.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat memilih jenis aturan “Kenaikan dari” atau “Penurunan dari”</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu hingga OTA terpilih sepenuhnya sebelum memilih jenis aturan.
                Muat ulang halaman jika dropdown tidak responsif atau kosong.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Nilai persentase yang dimasukkan tidak tersimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan nilai yang dimasukkan adalah <strong>numerik</strong> dan tidak menyertakan simbol seperti <code>%</code> atau karakter khusus.
                Coba masukkan nilai yang lebih kecil atau dibulatkan (mis., <code>5</code> atau <code>10</code>).
                Setelah memasukkan nilai, klik <strong>Simpan</strong> dan tunggu konfirmasi bahwa aturan telah ditambahkan ke daftar.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Aturan muncul dalam daftar tetapi tidak diterapkan ke OTA</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda mengklik <strong>Dorong Harga</strong> setelah menyimpan aturan untuk menerapkan perubahan.
                Tunggu beberapa menit dan verifikasi harga yang diperbarui di extranet OTA.
                Periksa apakah OTA mendukung penyesuaian pengali harga melalui channel manager.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Harga tidak berubah di extranet OTA setelah Dorong Harga</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa tidak ada pembatasan atau penggantian yang diatur langsung di extranet OTA.
                Ulangi proses <strong>Dorong Harga</strong> dan pantau log pembaruan untuk konfirmasi.
                Hubungi dukungan jika pembaruan gagal beberapa kali.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}