import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/account-and-extras")({
  head: () => ({
    meta: [
      { title: "Akun dan Ekstra — Hotelku | SinergiMax" },
      { name: "description", content: "Kelola akun pembelian internal dan akun pembayaran untuk mengklasifikasikan transaksi dengan benar." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "add-purchase-account", label: "Tambah Akun Pembelian" },
  { id: "add-payment-account", label: "Tambah Akun Pembayaran" },
  { id: "manage-existing", label: "Kelola Akun yang Ada" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Akun dan Ekstra" activeTo="/docs/hotelku/account-and-extras">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Akun dan Ekstra</h1>
      <p className="mt-4">
        <strong>Akun</strong> adalah halaman konfigurasi yang digunakan untuk mengelola <strong>akun pembelian internal</strong> 
        dan <strong>akun pembayaran</strong>. Akun-akun ini digunakan untuk <strong>mengklasifikasikan transaksi</strong> dengan benar.
      </p>
      <p className="mt-2">
        Halaman ini dibagi menjadi dua bagian:
      </p>
      <ul className="ml-6 list-disc space-y-1">
        <li><strong>Daftar Akun</strong> (Akun Pembelian)</li>
        <li><strong>Daftar Akun Pembayaran</strong></li>
        <Figure label=""
        src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746779666/01._account_and_extra_vricu4.jpg" />
      </ul>

      {/* ==================== ADD PURCHASE ACCOUNT ==================== */}
      <Section id="add-purchase-account" title="Tambah Akun Pembelian">
        <p>Berikut cara menambahkan Akun Pembelian:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Klik tombol <strong>Tambah Akun Pembelian</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746780043/07._button_add_account_skfljz.jpg" />
          <li>
            Isi formulir:
            <ul className="ml-6 mt-1 list-disc">
              <li>
                <strong>Properti:</strong> Pilih properti yang berlaku (atau <strong>"Pilih Semua Properti"</strong>).
              </li>
              <li>
                <strong>Nama Akun:</strong> Masukkan nama akun.
              </li>
              <li>
                <strong>Akun Induk (Opsional):</strong> Pilih akun induk jika akun ini adalah sub-kategori.
              </li>
              <li>
                <strong>Tipe Akun:</strong> Pilih opsi tipe akun.
              </li>
              <li>
                <strong>Kode Akun:</strong> Kode referensi internal untuk akun.
              </li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746779666/02._add_account_hkmpkf.jpg" />
            </ul>
          </li>
          <li>Klik <strong>Tambah Akun</strong> untuk menyimpan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746779666/03._add_account_button_s5hoem.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Tambah Akun Pembelian:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tombol Edit tidak merespons</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman dan coba lagi. Pastikan Anda memiliki <strong>izin pengguna</strong> yang benar untuk mengubah detail agen.
                Periksa apakah agen ditambahkan secara <strong>manual</strong>. Hanya agen yang ditambahkan secara manual yang dapat diedit.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat menghapus agen</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan agen <strong>tidak terhubung</strong> ke rate plan atau pemesanan aktif. Coba hapus setelah 
                <strong>memutuskan koneksi</strong> agen dari semua data yang tertaut. Jika tombol <strong>"Hapus"</strong> tidak aktif, 
                periksa izin pengguna atau hubungi dukungan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan pada detail agen tidak tersimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang yang diperlukan (mis., nama, email) diisi dengan benar. Periksa koneksi internet dan coba simpan ulang. 
                Hindari penggunaan <strong>karakter khusus</strong> yang mungkin tidak diizinkan di bidang tertentu.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pembaruan warna atau "Salin Semua" tidak diterapkan ke rate plan</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa agen memiliki <strong>beberapa rate plan</strong>. Segarkan halaman setelah menerapkan perubahan untuk mengonfirmasi pembaruan.
                Coba perbarui satu plan secara manual untuk mengonfirmasi bahwa ini bukan masalah tampilan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== ADD PAYMENT ACCOUNT ==================== */}
      <Section id="add-payment-account" title="Tambah Akun Pembayaran">
        <p>Berikut cara menambahkan Akun Pembayaran:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Klik tombol <strong>Tambah Akun Pembayaran</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746780043/08._button_add_payment_lekt5f.jpg" />
          <li>
            Isi bidang berikut:
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Nama Akun:</strong> Masukkan nama akun pembayaran.</li>
              <Figure label=""
              src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746779667/04._add_payment_account_hjqdec.jpg" />
            </ul>
          </li>
          <li>Klik <strong>Tambah Akun Pembayaran</strong> untuk menyimpan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746779666/04._add_payment_account_button_jd90oc.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Tambah Akun Pembayaran:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tombol Tambah Akun Pembayaran tidak merespons</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman dan coba lagi. Pastikan Anda memiliki izin untuk mengelola pengaturan pembayaran.
                Nonaktifkan ekstensi browser apa pun yang mungkin mengganggu elemen UI.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kesalahan saat menyimpan akun pembayaran</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan bidang <strong>Nama Akun</strong> tidak kosong. Hindari penggunaan <strong>karakter khusus</strong> atau simbol yang mungkin tidak diterima.
                Periksa adanya <strong>nama akun duplikat</strong>; gunakan nama unik jika perlu.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Akun baru tidak muncul setelah menyimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu beberapa detik dan segarkan halaman. Konfirmasikan akun tidak ditambahkan dengan <strong>salah ketik</strong> atau spasi yang tidak terduga.
                Coba bersihkan <strong>cache browser</strong> jika masalah berlanjut.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== MANAGE EXISTING ==================== */}
      <Section id="manage-existing" title="Kelola Akun yang Ada">
        <p>Pada halaman utama, Anda dapat mengelola akun yang sudah ada:</p>

        <ul className="ml-6 list-disc space-y-1">
          <li>
            Gunakan tautan <strong>Edit</strong> atau <strong>Hapus</strong> untuk mengelola akun apa pun.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746779667/05._account_list_cr5ur6.jpg" />
          <li>
            Untuk akun pembayaran, Anda juga dapat menggunakan <strong>Salin Semua</strong> untuk <strong>meniru pengaturan akun</strong> 
            ke rate plan atau modul lain.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1746779667/06._payment_account_list_cmhtlj.jpg" />
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Kelola Akun yang Ada:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tombol Edit/Hapus tidak merespons</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda terhubung ke internet dan halaman telah dimuat sepenuhnya. Periksa apakah Anda memiliki 
                <strong>izin pengguna</strong> yang cukup untuk mengelola akun. Coba segarkan halaman atau gunakan browser lain.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan yang dibuat dalam Edit tidak tersimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang yang diperlukan diisi dengan benar. Hindari penggunaan <strong>karakter atau simbol yang tidak didukung</strong>.
                Setelah mengklik <strong>"Simpan"</strong>, tunggu beberapa detik untuk konfirmasi atau umpan balik.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Akun tidak terhapus setelah mengklik Hapus</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan tindakan penghapusan jika dialog konfirmasi muncul. Segarkan halaman untuk memastikan perubahan tercermin.
                Jika masalah berlanjut, periksa <strong>pembatasan sistem</strong> untuk menghapus akun tertentu.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Salin Semua tidak menerapkan pengaturan ke rate plan lain</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan akun <strong>aktif</strong> dan disimpan dengan benar sebelum menggunakan <strong>Salin Semua</strong>.
                Tunggu beberapa detik setelah mengklik tombol untuk memberi waktu sistem memproses pembaruan.
                Segarkan tampilan atau navigasikan ke rate plan yang terpengaruh untuk memverifikasi apakah pengaturan telah diterapkan.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}