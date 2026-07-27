import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/connect-request")({
  head: () => ({
    meta: [
      { title: "Permintaan Koneksi — Channelku | SinergiMax" },
      { name: "description", content: "Kirim permintaan koneksi ke mitra OTA dengan mengirimkan kredensial atau ID yang diperlukan." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "how-to-send", label: "Cara Mengirim Permintaan Koneksi" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Permintaan Koneksi" activeTo="/docs/channelku/channel-manager/connect-request">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Permintaan Koneksi</h1>
      <p className="mt-4">
        Bagian <strong>Permintaan Koneksi</strong> memungkinkan Anda untuk mengirim permintaan koneksi ke mitra OTA 
        dengan mengirimkan kredensial atau ID yang diperlukan. Langkah ini diperlukan untuk memulai pemetaan saluran 
        dan sinkronisasi dengan OTA yang Anda pilih.
      </p>

      {/* ==================== HOW TO SEND ==================== */}
      <Section id="how-to-send" title="Cara Mengirim Permintaan Koneksi">
        <p>Berikut cara mengirim Permintaan Koneksi:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>
            Buka bagian <strong>Permintaan Koneksi</strong> di bawah menu <strong>Channelku</strong>.
          </li>
          <li>
            Pilih <strong>properti</strong> yang ingin Anda hubungkan.
          </li>
          <li>
            Pilih <strong>mitra OTA</strong> Anda dari daftar dropdown.
          </li>
          <li>
            Isi <strong>detail yang diperlukan</strong> (misalnya, Hotel ID, Room ID, atau pengidentifikasi lain tergantung pada OTA).
          </li>
          <li>
            Klik <strong>Kirim Permintaan</strong> untuk mengirimkan permintaan koneksi.
          </li>
          <li>
            Setelah dikirim, mitra OTA Anda akan meninjau permintaan dan biasanya merespons melalui email. 
            Ikuti instruksi mereka untuk menyelesaikan proses koneksi.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544263/01._connect_request_w3tqsa.png" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Permintaan Koneksi:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat mengklik tombol "Kirim Permintaan"</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang yang diperlukan (misalnya, <strong>Hotel ID</strong>, <strong>Room ID</strong>) telah diisi.
                Muat ulang halaman dan masukkan ulang informasi jika tombol masih tidak aktif.
                Periksa koneksi internet Anda jika ada penundaan antarmuka pengguna.
              </dd>
            </div>
            <div>
              <dt className="font-medium">OTA tidak terdaftar dalam dropdown</dt>
              <dd className="ml-4 text-muted-foreground">
                OTA yang dipilih mungkin <strong>tidak tersedia</strong> untuk properti Anda.
                Hubungi <strong>Dukungan</strong> untuk menanyakan apakah integrasi didukung untuk OTA yang hilang.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak ada respons dari OTA setelah mengirim permintaan</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa permintaan telah terkirim dengan sukses.
                Periksa kotak masuk email yang terkait dengan akun OTA Anda.
                Jika tidak ada balasan yang diterima dalam waktu <strong>48 jam</strong>, hubungi langsung OTA tersebut.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Memasukkan data yang salah dalam formulir permintaan</dt>
              <dd className="ml-4 text-muted-foreground">
                Permintaan dengan data yang salah <strong>tidak dapat diedit</strong>.
                Tunggu OTA untuk menolak permintaan atau hubungi mereka untuk membatalkannya.
                Kirim ulang permintaan baru dengan detail yang benar.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}