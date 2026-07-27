import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/email-automation")({
  head: () => ({
    meta: [
      { title: "Otomatisasi Email — CRM Tamu | SinergiMax" },
      { name: "description", content: "Buat dan kelola template email kuesioner dan notifikasi untuk tamu dan pemangku kepentingan internal." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "add-questionnaire", label: "Tambah Kuesioner Baru" },
  { id: "add-notification", label: "Tambah Notifikasi Baru" },
  { id: "set-schedule", label: "Atur Jadwal Otomatisasi Email" },
  { id: "edit-template", label: "Edit Template" },
  { id: "remove-template", label: "Hapus Template" },
  { id: "manage-status", label: "Kelola Status Template" },
  { id: "send-now", label: "Kirim Template Sekarang" },
  { id: "change-style", label: "Ubah Gaya Template" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Otomatisasi Email" activeTo="/docs/channelku/guest-crm/email-automation">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Otomatisasi Email</h1>
      <p className="mt-4">
        Halaman <strong>Otomatisasi Email</strong> memungkinkan Anda untuk membuat dan mengelola template email <strong>kuesioner</strong> 
        dan <strong>notifikasi</strong> untuk tamu dan pemangku kepentingan internal. Fitur ini membantu mengotomatiskan komunikasi tamu 
        dan notifikasi operasional berdasarkan jadwal yang telah ditentukan.
      </p>
      <p className="mt-2">
        Anda dapat mengakses fitur ini dengan membuka <strong>CRM Tamu &gt; Otomatisasi Email</strong>.
      </p>
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375004/email-automation-menu_sgoq3x.png" />

      {/* ==================== ADD QUESTIONNAIRE ==================== */}
      <Section id="add-questionnaire" title="Tambah Kuesioner Baru">
        <p>
          <strong>Kuesioner</strong> adalah email yang dikirim ke tamu yang berisi pertanyaan, biasanya digunakan untuk mengumpulkan umpan balik 
          atau informasi yang diperlukan. Untuk membuat template kuesioner baru, ikuti langkah-langkah berikut:
        </p>

        <ol className="ml-6 list-decimal space-y-2">
          <li>Klik tombol <strong>Tambah Kuesioner</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375005/add-new-Questionnaire_aums9k.png" />
          <li>
            Isi semua bidang yang diperlukan:
            <ul className="ml-6 mt-1 list-disc">
              <li>
                <strong>Body Email:</strong> Masukkan konten utama email. Anda dapat menggunakan <strong>Tag Template Email</strong> yang tersedia 
                di bagian bawah editor untuk menyisipkan data dinamis ke dalam tubuh email. Alat pemformatan teks tersedia untuk kustomisasi.
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375003/body-email_hjni8n.png" />
              <li>
                <strong>Judul dan Subjek:</strong> Masukkan judul email internal dan subjek yang akan terlihat oleh penerima.
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375015/title-and-subject_dhuj6u.png" />
              <li>
                <strong>Daftar Pertanyaan:</strong> Pilih pertanyaan yang telah ditentukan sebelumnya yang ingin Anda sertakan. Anda dapat memilih beberapa pertanyaan.
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375008/questions-list_ytg8re.png" />
              <li>
                <strong>Pertanyaan Kustom:</strong> Gunakan opsi ini untuk menambahkan pertanyaan kustom berdasarkan kebutuhan Anda.
                <ul className="ml-6 mt-1 list-disc">
                  <li>Klik tombol <strong>Tambah Pertanyaan Kustom</strong> untuk membuat bagian pertanyaan baru.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766381830/add-custom-question_fmcmub.png" />
                  <li>Sebuah bagian baru akan muncul. Anda dapat memilih jenis pertanyaan:
                    <ul className="ml-6 mt-1 list-disc">
                      <li><strong>Input:</strong> Memungkinkan tamu mengetik jawaban teks bebas.</li>
                      <li><strong>Radio Button:</strong> Memungkinkan tamu memilih satu opsi saja (hingga 6 opsi).</li>
                      <Figure label=""
                      src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766381830/radio-button-question_pcg6fn.png" />
                      <li><strong>Checkbox:</strong> Memungkinkan tamu memilih beberapa opsi (hingga 6 opsi).</li>
                    </ul>
                  </li>
                  <li>Masukkan <strong>Label Pertanyaan</strong>. Anda dapat menambahkan beberapa pertanyaan kustom atau menghapusnya sesuai kebutuhan.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766381830/custom-question-2_tgcyey.png" />
                </ul>
              </li>
              <li>
                <strong>Tag Template Email:</strong> Tag template memungkinkan Anda menyisipkan informasi dinamis (mis., nama tamu, nomor pemesanan) ke dalam email.
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375004/email-template-tags_xyyacd.png" />
                <ul className="ml-6 mt-1 list-disc">
                  <li>Klik di dalam bidang <strong>Body Email</strong>.</li>
                  <li>Pilih tag dari daftar dropdown. Tag akan disisipkan secara otomatis.</li>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1767751381/body-email-example.png" />
                  <li>Kategori tag yang tersedia:
                    <ul className="ml-6 mt-1 list-disc">
                      <li><strong>Klien:</strong> Informasi tamu seperti nama, nomor telepon, kota, negara, email, kata sandi, dll.</li>
                      <li><strong>Pemesanan:</strong> Data terkait pemesanan seperti nomor pemesanan, rate plan, jumlah total, dll.</li>
                      <li><strong>Properti:</strong> Informasi properti (mis., logo properti atau ID properti).</li>
                      <li><strong>Tautan:</strong> Tautan berguna seperti tautan kuesioner, tautan ulasan, tautan check-in mandiri, atau logo properti.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Klik tombol <strong>Simpan Template</strong> untuk membuat kuesioner.</li>
        </ol>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766382640/save-button.png" />
      </Section>

      {/* ==================== ADD NOTIFICATION ==================== */}
      <Section id="add-notification" title="Tambah Notifikasi Baru">
        <p>
          <strong>Notifikasi</strong> adalah email yang digunakan untuk memberi tahu tamu, hotel, atau penerima lainnya. 
          Berbeda dengan kuesioner, notifikasi <strong>tidak</strong> berisi pertanyaan. Untuk membuat template notifikasi:
        </p>

        <ol className="ml-6 list-decimal space-y-2">
          <li>Klik tombol <strong>Tambah Notifikasi</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375004/add-new-notification_udxu0s.png" />
          <li>
            Lengkapi bidang yang diperlukan:
            <ul className="ml-6 mt-1 list-disc">
              <li>
                <strong>Body Email:</strong> Masukkan konten utama email. Anda dapat menggunakan <strong>Tag Template Email</strong> yang tersedia 
                di bagian bawah editor untuk menyisipkan data dinamis. Alat pemformatan teks tersedia untuk kustomisasi.
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375003/body-email_hjni8n.png" />
              <li>
                <strong>Judul dan Subjek:</strong> Masukkan judul email internal dan subjek yang akan terlihat oleh penerima.
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375015/title-and-subject_dhuj6u.png" />
              <li>
                <strong>Penerima:</strong> Pilih jenis penerima:
                <ul className="ml-6 mt-1 list-disc">
                  <li>Hotel</li>
                  <li>Klien</li>
                  <li>Email lain: Alamat email kustom (dimasukkan secara manual)</li>
                </ul>
              </li>
              <li>
                <strong>Tag Template Email:</strong> Tag template memungkinkan Anda menyisipkan informasi dinamis ke dalam email. Kategori tag yang tersedia:
                <Figure label=""
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375004/email-template-tags_xyyacd.png" />
                <ul className="ml-6 mt-1 list-disc">
                  <li><strong>Klien:</strong> Informasi tamu seperti nama, nomor telepon, kota, dll.</li>
                  <li><strong>Pemesanan:</strong> Data terkait pemesanan seperti nomor pemesanan, rate plan, dll.</li>
                  <li><strong>Properti:</strong> Informasi properti (mis., logo properti atau ID properti).</li>
                  <li><strong>Tautan:</strong> Tautan berguna seperti tautan ulasan, tautan check-in mandiri, atau logo properti.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Klik tombol <strong>Simpan Template</strong> untuk menyimpan template notifikasi.</li>
        </ol>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766382640/save-button.png" />
      </Section>

      {/* ==================== SET SCHEDULE ==================== */}
      <Section id="set-schedule" title="Atur Jadwal Otomatisasi Email">
        <p>Setiap template dapat dijadwalkan untuk dikirim secara otomatis pada waktu tertentu.</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Di <strong>daftar template</strong>, temukan kolom <strong>Kapan</strong>. Klik waktu terjadwal dari template yang ingin Anda perbarui.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375011/set-email-automation-schedule_ecqwqj.png" />
          <li>Jendela pop-up akan muncul. Pilih waktu pengiriman yang diinginkan (hanya satu opsi yang dapat dipilih).</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375014/set-time_pi7t5i.png" />
          <li>Klik <strong>Perbarui</strong> untuk menyimpan perubahan.</li>
        </ol>
      </Section>

      {/* ==================== EDIT TEMPLATE ==================== */}
      <Section id="edit-template" title="Edit Template">
        <p>Untuk memperbarui template yang ada:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Di <strong>Daftar Template</strong>, temukan kolom <strong>Tindakan</strong>, lalu klik <strong>Edit</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375004/edit-template_rrccrj.png" />
          <li>Anda akan dialihkan ke halaman edit, di mana Anda dapat memperbarui bidang yang diperlukan.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375004/edit-page_oezea9.png" />
          <li>Klik <strong>Simpan Template</strong> untuk menerapkan perubahan.</li>
        </ol>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766382640/save-button.png" />
      </Section>

      {/* ==================== REMOVE TEMPLATE ==================== */}
      <Section id="remove-template" title="Hapus Template">
        <p>Untuk menghapus template:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Temukan template yang ingin Anda hapus.</li>
          <li>Di kolom <strong>Tindakan</strong>, klik <strong>Hapus</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375009/remove-template_yus9rt.png" />
          <li>Pop-up konfirmasi akan muncul. Klik <strong>OK</strong> untuk mengonfirmasi penghapusan.</li>
        </ol>
      </Section>

      {/* ==================== MANAGE STATUS ==================== */}
      <Section id="manage-status" title="Kelola Status Template">
        <p>Anda dapat mengontrol apakah template <strong>aktif</strong> atau <strong>tidak aktif</strong>.</p>
                  <Figure label=""
                  src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375012/set-template-status_arpbdw.png" />
        <ul className="ml-6 list-disc space-y-1">
          <li>Klik <strong>Ubah ke Aktif</strong> untuk mengaktifkan otomatisasi.</li>
          <li>Klik <strong>Ubah ke Nonaktif</strong> untuk menonaktifkan otomatisasi.</li>
        </ul>
      </Section>

      {/* ==================== SEND NOW ==================== */}
      <Section id="send-now" title="Kirim Template Sekarang">
        <p>Opsi ini memungkinkan Anda mengirim email segera tanpa menunggu waktu yang dijadwalkan.</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Temukan template dalam daftar.</li>
          <li>Di kolom <strong>Tindakan</strong>, klik <strong>Kirim Sekarang</strong>.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375010/send-template-now_fulxom.png" />
          <li>Pilih penerima. Kemudian klik <strong>Kirim Email</strong> untuk melanjutkan.</li>
        </ol>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375010/send-now-option_wdn2de.png" />
      </Section>

      {/* ==================== CHANGE STYLE ==================== */}
      <Section id="change-style" title="Ubah Gaya Template">
        <p>Untuk memperbarui gaya visual dari template email:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>Temukan template yang ingin Anda perbarui.</li>
          <li>Di kolom <strong>Template</strong>, klik menu dropdown.</li>
                    <Figure label=""
                    src="https://res.cloudinary.com/dayo5hqig/image/upload/v1766375016/template-style_cyuxah.png" />
          <li>Pilih <strong>gaya template</strong> yang diinginkan.</li>
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-medium">Contoh Gaya Template:</p>
          <ul className="ml-6 list-disc text-sm text-muted-foreground">
            <li>Gambar berikut menunjukkan contoh kuesioner yang ditampilkan menggunakan <strong>Template Satu</strong>.</li>
            <li>Di bawah ini adalah contoh kuesioner yang ditampilkan menggunakan <strong>Template Dua</strong>.</li>
          </ul>
        </div>
      </Section>
    </DocsLayout>
  );
}