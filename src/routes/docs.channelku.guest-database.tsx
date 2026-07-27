import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/guest-database")({
  head: () => ({
    meta: [
      { title: "Basis Data Tamu — CRM Tamu | SinergiMax" },
      { name: "description", content: "Kelola semua informasi tamu, filter, edit, dan komunikasi dengan tamu secara efisien." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "view-navigate", label: "Tampilan dan Navigasi" },
  { id: "send-emails", label: "Kirim Email" },
  { id: "edit-guest-data", label: "Edit Data Tamu" },
  { id: "guest-access", label: "Akses Tamu" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Basis Data Tamu" activeTo="/docs/channelku/guest-crm/guest-database">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Basis Data Tamu</h1>
      <p className="mt-4">
        Halaman <strong>Basis Data Tamu</strong> menyimpan semua informasi tamu untuk memungkinkan akses, pengelolaan, dan komunikasi yang lebih mudah. 
        Halaman ini memungkinkan staf hotel untuk melihat, memfilter, mengedit, dan berinteraksi dengan data tamu secara efisien.
      </p>
      <p className="mt-2">
        Untuk mengakses halaman ini, buka <strong>CRM Tamu &gt; Basis Data Tamu</strong>.
      </p>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766562675/menu-guest-database.png" />

      {/* ==================== VIEW AND NAVIGATE ==================== */}
      <Section id="view-navigate" title="Tampilan dan Navigasi">
        <p>Pada halaman ini, Anda dapat melakukan tindakan-tindakan berikut:</p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766562918/view-guest-database-page.png" />

        <h4 className="mt-4 font-medium">Opsi dan Navigasi:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Opsi Properti:</strong> Pilih properti yang ingin Anda lihat atau kelola.
          </li>
          <li>
            <strong>Filter Data:</strong> Pilih jenis data tamu yang akan ditampilkan, seperti <strong>Check-in Hari Ini</strong>, 
            <strong>Check-out Hari Ini</strong>, <strong>Semua Waktu</strong>, dan opsi lain yang tersedia.
          </li>
          <li>
            <strong>Tombol Kirim Email:</strong> Untuk mengirim email ke daftar tamu, Anda dapat mengklik tombol ini.
          </li>
          <li>
            <strong>Bilah Tab:</strong> Data tamu dikategorikan ke dalam tiga tab:
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Email Langsung:</strong> Tamu yang memesan langsung</li>
              <li><strong>Email OTA:</strong> Tamu dari agen perjalanan online</li>
              <li><strong>Tanpa Email:</strong> Tamu tanpa alamat email</li>
            </ul>
            <span className="block text-sm text-muted-foreground">Beralih antar tab dengan mengklik tab untuk melihat tamu berdasarkan sumber email mereka.</span>
          </li>
          <li>
            <strong>Tampilkan Baris:</strong> Pilih berapa banyak baris yang ingin Anda tampilkan dalam tabel.
          </li>
          <li>
            <strong>Opsi Ekspor:</strong>
            <ul className="ml-6 list-disc">
              <li><strong>Salin:</strong> Ekspor data tabel ke clipboard dalam format teks.</li>
              <li><strong>Excel:</strong> Ekspor data ke format .xlsx.</li>
              <li><strong>PDF:</strong> Ekspor data ke format PDF.</li>
            </ul>
          </li>
          <li>
            <strong>Visibilitas Kolom:</strong> Sesuaikan kolom mana yang ditampilkan dalam tabel.
          </li>
          <li>
            <strong>Bilah Pencarian:</strong> Cari data tamu tertentu dengan memasukkan kata kunci. Tabel akan secara otomatis menampilkan hasil yang cocok.
          </li>
          <li>
            <strong>Pengurutan Data:</strong> Urutkan data tabel dengan mengklik header kolom.
          </li>
          <li>
            <strong>Tombol Edit:</strong> Klik tombol <strong>Edit</strong> untuk memperbarui informasi tamu. Untuk langkah terperinci, lihat <strong>Edit Data Tamu</strong>.
          </li>
          <li>
            <strong>Akses Tamu:</strong> Salin tautan akses tamu langsung dari tabel. Untuk detail lebih lanjut, lihat <strong>Akses Tamu</strong>.
          </li>
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Kolom yang Tersedia:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li><strong>Tindakan</strong></li>
            <li><strong>Nama Tamu</strong></li>
            <li><strong>Telepon</strong></li>
            <li><strong>Negara</strong></li>
            <li><strong>Kota</strong></li>
            <li><strong>Alamat</strong></li>
            <li><strong>Ulang Tahun</strong></li>
            <li><strong>Email</strong></li>
            <li><strong>Akses Tamu</strong> (Direct Access, Guest Review Access, Self Checkin)</li>
          </ul>
        </div>
      </Section>

      {/* ==================== SEND EMAILS ==================== */}
      <Section id="send-emails" title="Kirim Email">
        <p>Anda dapat mengirim email ke grup tamu yang dipilih langsung dari halaman ini dengan mengikuti langkah-langkah berikut:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Pilih <strong>Properti</strong> dari dropdown.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766715197/select-property_v2hmtz.png" />
          <li>Pilih <strong>Jenis Tamu</strong> (mis., Check-in Hari Ini, Check-out Hari Ini). Daftar tamu akan muncul di tabel.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766715198/select-guest_r48wqx.png" />
          <li>Klik tombol <strong>Kirim Email</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766715194/button-send-email_qsgmnp.png" />
          <li>Jendela pop-up akan muncul. Masukkan <strong>Judul</strong> dan <strong>Subjek</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766715195/email-detail_obpt0x.png" />
          <li>
            Tinjau informasi penggunaan email Anda. Setiap akun dibatasi maksimal <strong>5 kiriman email</strong> per hari.
          </li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766715195/account-usage_t1ooxr.png" />
          <li>Klik <strong>Kirim</strong> untuk mengirim email, atau <strong>Kirim Email Uji Coba</strong> untuk mengirim pesan uji coba.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766715198/send-email-button_gknh9c.png" />
        </ol>
        <p className="mt-2 text-sm text-muted-foreground">
          Di bawah ini adalah contoh email yang berhasil dikirim ke tamu.
        </p>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766715197/email-result_toqb38.png" />
      </Section>

      {/* ==================== EDIT GUEST DATA ==================== */}
      <Section id="edit-guest-data" title="Edit Data Tamu">
        <p>Anda dapat memperbarui detail tamu dari salah satu tab yang tersedia:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Temukan catatan tamu yang ingin Anda perbarui. Klik tombol <strong>Edit</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766715195/edit-guest_kvpsih.png" />
          <li>Formulir pop-up akan muncul. Setiap catatan tamu mencakup daftar semua pemesanan terkait waktu.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766715199/update-guest-detail_mpgdaw.png" />
          <li>Anda dapat memperbarui bidang yang diperlukan untuk setiap pemesanan sesuai kebutuhan.</li>
          <li>Klik <strong>Perbarui</strong> untuk menyimpan perubahan.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766715199/update-button_fe6odg.png" />
        </ol>
      </Section>

      {/* ==================== GUEST ACCESS ==================== */}
      <Section id="guest-access" title="Akses Tamu">
        <p>
          Setiap catatan tamu menyediakan tautan akses yang dapat dibagikan dengan tamu. Tautan ini tersedia di kolom 
          <strong>Akses Tamu</strong> dan meliputi:
        </p>

        <h4 className="mt-4 font-medium">Jenis Akses:</h4>

        <div className="mt-2 rounded-lg border p-4">
          <h5 className="font-medium">Akses Langsung</h5>
          <p>Memberikan tamu akses ke halaman detail pemesanan mereka.</p>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766715195/guest-access-button_ac58gb.png" />
          <p className="text-sm text-muted-foreground">Contoh tampilan halaman pemesanan tamu.</p>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766715197/guest-access_zivqnf.png" />
        </div>

        <div className="mt-4 rounded-lg border p-4">
          <h5 className="font-medium">Akses Ulasan Tamu</h5>
          <p>Memungkinkan tamu untuk mengirimkan ulasan untuk properti, termasuk pengalaman lokasi dan kamar.</p>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766715197/guest-review-button_begaje.png" />
          <p className="text-sm text-muted-foreground">Di bawah ini adalah contoh halaman ulasan tamu.</p>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766715197/guest-review_uoggrl.png" />
        </div>

        <div className="mt-4 rounded-lg border p-4">
          <h5 className="font-medium">Akses Check-in Mandiri</h5>
          <p>Memungkinkan tamu untuk menyelesaikan proses check-in mandiri dengan memasukkan informasi mereka sendiri.</p>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766715199/self-checkin-button_fet1p3.png" />
          <p className="text-sm text-muted-foreground">Contoh tampilan halaman check-in mandiri.</p>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766715197/self-check-in_kabg2d.png" />
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li>Tautan akses dapat disalin langsung dari tabel di kolom <strong>Akses Tamu</strong>.</li>
            <li>Setiap tautan memberikan fungsionalitas spesifik yang berbeda (melihat detail, mengirim ulasan, check-in mandiri).</li>
          </ul>
        </div>
      </Section>
    </DocsLayout>
  );
}