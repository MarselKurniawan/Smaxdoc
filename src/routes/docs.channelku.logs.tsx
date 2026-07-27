import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/logs")({
  head: () => ({
    meta: [
      { title: "Log — Channelku | SinergiMax" },
      { name: "description", content: "Lacak riwayat pembaruan untuk Tipe Kamar dan Rate Plan pada tanggal tertentu." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "how-to-search", label: "Cara Mencari Log" },
  { id: "example-scenario", label: "Skenario Contoh" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Log" activeTo="/docs/channelku/channel-manager/logs">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Log</h1>
      <p className="mt-4">
        Fitur ini memungkinkan Anda untuk melacak riwayat pembaruan untuk <strong>Tipe Kamar</strong> dan <strong>Rate Plan</strong> 
        pada tanggal tertentu. Anda dapat memantau perubahan pada harga, alokasi, stop sell, dan bidang lain yang terkait dengan harga.
      </p>

      <div className="mt-4 rounded-lg border bg-muted/50 p-4">
        <p className="text-sm text-muted-foreground">
          <strong>Catatan:</strong> Untuk melihat versi terbaru dari dokumentasi ini, lihat 
          <a href="#" className="ml-1 text-primary hover:underline">Log V2</a>.
        </p>
      </div>

      {/* ==================== HOW TO SEARCH ==================== */}
      <Section id="how-to-search" title="Cara Mencari Log">
        <p>Berikut cara mencari Log:</p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544282/01._logs_evbhoy.png" />
        <ol className="ml-6 list-decimal space-y-2">
          <li>Buka bagian <strong>Log</strong>.</li>
          <li>Pilih <strong>ID Kamar</strong> (Tipe Kamar) yang ingin Anda tinjau.</li>
          <li>Pilih <strong>Urutkan berdasarkan Stempel Waktu</strong> (ASC atau DESC).</li>
          <li>Pilih <strong>Batas Pencarian</strong> (jumlah log yang akan ditampilkan).</li>
          <li>Pilih <strong>Tanggal Terapan</strong> (tanggal perubahan berlaku).</li>
          <li>Klik tombol <strong>Cari</strong>.</li>
          <li>
            Setelah dicari, sistem akan menampilkan semua pembaruan berdasarkan filter Anda, yang menunjukkan nilai seperti 
            <strong>Harga</strong>, <strong>ALOT</strong> (inventaris), <strong>Min Malam</strong>, <strong>Stop Sell</strong>, 
            <strong>CTA</strong>, <strong>CTD</strong>, <strong>Lokasi Pembaruan</strong>, dan <strong>Stempel Waktu</strong>.
          </li>
          <li>
            Anda dapat mengakses <strong>Flatfile</strong> dengan mengklik tombol <strong>Tampilkan Flatfile</strong>. 
            Sistem akan menampilkan daftar yang berisi <strong>Nama</strong>, <strong>OTA</strong>, <strong>Status</strong>, dan <strong>Pesan</strong>.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778654577/open-flatfile.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Log:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak ada data yang muncul setelah mengklik Cari</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah memilih <strong>ID Kamar</strong>. Periksa bahwa <strong>Tanggal Terapan</strong> diisi dengan benar dan sesuai dengan tanggal pembaruan aktual. Coba tingkatkan batas atau ubah urutan pengurutan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Stempel Waktu menunjukkan tanggal yang berbeda dari yang diharapkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Stempel waktu menunjukkan tanggal sistem menerima pembaruan, <strong>bukan</strong> tanggal terapan. Periksa silang kolom <strong>tanggal terapan</strong> untuk memastikan pembaruan yang benar diterapkan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Nilai salah atau hilang dalam hasil log</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan kombinasi kamar dan rate plan yang dipilih valid. Beberapa bidang mungkin tampak kosong jika tidak diubah selama pembaruan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pembaruan muncul di OTA tetapi tidak ditampilkan di Log</dt>
              <dd className="ml-4 text-muted-foreground">
                Pembaruan mungkin telah didorong langsung melalui integrasi eksternal (mis., API) dan <strong>tidak dicatat</strong>. Periksa kolom <strong>Lokasi</strong> untuk mengonfirmasi sumber pembaruan (mis., Sinkronisasi Penuh, manual, dll.).
              </dd>
            </div>
            <div>
              <dt className="font-medium">Data lama terus muncul dalam pencarian</dt>
              <dd className="ml-4 text-muted-foreground">
                Bersihkan cache browser atau segarkan halaman sebelum menjalankan pencarian ulang. Periksa kembali filter tanggal dan coba dengan batas yang lebih luas atau urutan pengurutan yang berbeda.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== EXAMPLE SCENARIO ==================== */}
      <Section id="example-scenario" title="Skenario Contoh">
        <p>
          Untuk memeriksa pembaruan yang dibuat untuk kamar <strong>Villa Sanur Smoking</strong> pada <strong>16 Oktober 2023</strong>:
        </p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pilih <strong>ID Kamar</strong> dan <strong>Tanggal</strong>.</li>
          <li>
            Hasil akan menampilkan pembaruan seperti:
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Harga:</strong> 5.000.000</li>
              <li><strong>ALOT:</strong> 2</li>
              <li><strong>Min Malam:</strong> 1</li>
              <li><strong>Stop Sell:</strong> 0 (berarti tersedia)</li>
              <li><strong>Lokasi:</strong> Sinkronisasi Penuh oleh eksternal</li>
              <li><strong>Stempel Waktu:</strong> 14 Oktober 2023 (tanggal pembaruan aktual diterapkan)</li>
            </ul>
          </li>
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li>
              <strong>Tanggal Terapan</strong> adalah tanggal perubahan dimaksudkan untuk berlaku.
            </li>
            <li>
              <strong>Stempel Waktu</strong> adalah kapan pembaruan dibuat dalam sistem.
            </li>
          </ul>
        </div>
      </Section>
    </DocsLayout>
  );
}