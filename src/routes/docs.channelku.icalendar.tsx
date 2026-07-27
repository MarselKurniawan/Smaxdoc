import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/icalendar")({
  head: () => ({
    meta: [
      { title: "iCalendar — Channelku | SinergiMax" },
      { name: "description", content: "Hubungkan kalender properti dengan mitra eksternal menggunakan integrasi iCalendar (iCal)." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "how-to-connect", label: "Cara Menghubungkan iCalendar" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="iCalendar" activeTo="/docs/channelku/channel-manager/icalendar">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">iCalendar</h1>
      <p className="mt-4">
        Bagian ini memungkinkan Anda untuk menghubungkan kalender properti dengan mitra eksternal menggunakan integrasi 
        <strong>iCalendar (iCal)</strong>.
      </p>

      {/* ==================== HOW TO CONNECT ==================== */}
      <Section id="how-to-connect" title="Cara Menghubungkan iCalendar">
        <p>Berikut cara menghubungkan iCalendar:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Buka bagian <strong>Tautan iCalendar</strong>.</li>
          <li>
            Klik <strong>Salin</strong> pada <strong>URL iCal Bookandlink</strong>, lalu tempelkan tautan tersebut ke dalam 
            sistem kalender mitra Anda.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746581141/02._click_copy_e8xe6g.jpg" />
          <li>
            Tempelkan <strong>URL iCal mitra</strong> Anda ke dalam kolom input yang disediakan di Bookandlink.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746581125/03._insert_url_iki5sd.jpg" />
          <li>
            Klik tombol <strong>Perbarui</strong>. Sistem akan secara otomatis menarik data kalender dari tautan iCal mitra Anda.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746581156/04._click_update_button_wxecgi.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-semibold">Penting:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>
              Bookandlink <strong>menarik data</strong> dari iCal mitra setiap <strong>5 menit</strong>.
            </li>
            <li>
              Frekuensi mitra menarik data dari Bookandlink <strong>tergantung pada sistem mereka</strong>. 
              Harap konfirmasikan hal ini dengan mitra Anda secara langsung.
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Integrasi iCalendar:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Kalender mitra tidak menampilkan ketersediaan Bookandlink</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa Anda telah menempelkan <strong>URL iCal Bookandlink</strong> dengan benar ke dalam sistem mitra.
                Beberapa platform mungkin memerlukan waktu untuk sinkronisasi; tunggu hingga 15–30 menit dan segarkan kalender.
                Periksa dengan mitra Anda untuk mengonfirmasi seberapa sering sistem mereka menarik data iCal.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pemesanan mitra tidak muncul di Bookandlink</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda telah menempelkan <strong>URL iCal mitra</strong> yang benar ke Bookandlink dan mengklik <strong>Perbarui</strong>.
                Tunggu setidaknya 5 menit setelah menyimpan, lalu segarkan kalender.
                Jika masalah berlanjut, verifikasi bahwa tautan iCal mitra bersifat publik dan dapat diakses.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Perbarui hilang</dt>
              <dd className="ml-4 text-muted-foreground">
                Ini mungkin menunjukkan masalah tampilan sementara; coba segarkan halaman.
                Jika masalah berlanjut, hubungi <strong>Dukungan Bookandlink</strong> untuk bantuan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pemesanan lama atau yang dihapus masih muncul</dt>
              <dd className="ml-4 text-muted-foreground">
                Beberapa umpan iCal mungkin tidak segera mencerminkan pembatalan atau perubahan.
                Periksa dengan mitra Anda apakah sistem mereka mendukung pembaruan iCal secara real-time.
                Hapus dan tambahkan kembali tautan iCal untuk menyegarkan data secara manual.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Sistem tidak menarik data apa pun setelah pembaruan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>URL iCal</strong> yang diberikan oleh mitra dalam format yang benar dan tidak kedaluwarsa.
                Konfirmasikan bahwa ada pemesanan mendatang atau tanggal yang diblokir di kalender mitra.
                Coba uji URL iCal di browser untuk memeriksa apakah URL tersebut dapat dimuat dengan benar.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}