import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/extras-only")({
  head: () => ({
    meta: [
      { title: "Ekstra Saja — Hotelku | SinergiMax" },
      { name: "description", content: "Buat dan kelola invoice untuk item atau layanan tambahan yang dijual secara mandiri, tanpa terkait dengan pemesanan kamar." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "create-invoice", label: "Buat Invoice" },
  { id: "edit-invoice", label: "Edit Invoice" },
  { id: "add-payment", label: "Tambah Pembayaran" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Ekstra Saja" activeTo="/docs/hotelku/extras-only">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Ekstra Saja</h1>
      <p className="mt-4">
        <strong>Ekstra Saja</strong> adalah fitur yang memungkinkan Anda untuk membuat dan mengelola <strong>invoice</strong> 
        untuk <strong>item atau layanan tambahan</strong> yang dijual secara <strong>mandiri</strong>, tanpa mengaitkannya dengan pemesanan kamar. 
        Ini berguna untuk transaksi seperti menjual <strong>layanan spa</strong>, <strong>makanan</strong>, atau fasilitas lainnya langsung kepada tamu.
      </p>

      <div className="mt-4 rounded-lg border bg-muted/50 p-4">
        <p className="text-sm font-medium">Indikator Warna:</p>
        <ul className="ml-6 list-disc text-sm">
          <li>
            <span className="inline-block h-3 w-3 bg-green-500 align-middle"></span> 
            <strong> Blok Hijau:</strong> Menunjukkan invoice yang <strong>dikonfirmasi</strong>.
          </li>
          <li>
            <span className="inline-block h-3 w-3 bg-purple-500 align-middle"></span> 
            <strong> Blok Ungu:</strong> Menunjukkan invoice yang <strong>dibatalkan</strong>.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107081/00._extras_only_llkqgy.jpg" />
        </ul>
      </div>

      {/* ==================== CREATE INVOICE ==================== */}
      <Section id="create-invoice" title="Buat Invoice">
        <p>Berikut cara membuat Invoice:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Buka menu <strong>Ekstra Saja</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107136/01._navigate_extras_only_yqq56h.jpg" />
          <li>Klik tombol <strong>Buat Invoice</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107136/02._create_invoice_l270z1.jpg" />
          <li>Isi <strong>detail tamu</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747108460/18._fill_invoice_details_fltroy.jpg" />
          <li>Klik <strong>Tambah</strong> untuk memasukkan informasi tamu.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107137/03._click_add_invoice_vttn5v.jpg" />
          <li>
            Klik <strong>Pilih</strong> untuk memilih item dari inventaris, atau <strong>masukkan secara manual</strong> deskripsi 
            di bidang <strong>Biaya Tambahan</strong>.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107137/04._click_select_xceovy.jpg" />
          <li>Masukkan <strong>Jumlah</strong>, <strong>Harga Satuan</strong>, dan <strong>Total</strong> dengan benar.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107137/05._input_invoice_bevd62.jpg" />
          <li>Klik <strong>Tambah Invoice</strong> untuk menyelesaikan dan menyimpan invoice.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107138/06._click_add_invoice_button_pdplzq.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Buat Invoice:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tombol Buat Invoice tidak merespons</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan koneksi internet Anda stabil, karena tindakan tombol bergantung pada ketersediaan jaringan.
                Coba segarkan halaman dan klik tombol lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Detail tamu tidak dapat ditambahkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang tamu wajib (mis., nama, email, atau ID) diisi dengan benar sebelum mengklik <strong>Tambah</strong>.
                Periksa pesan validasi yang mungkin menunjukkan input yang hilang atau salah.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Item tidak dapat dipilih dari inventaris</dt>
              <dd className="ml-4 text-muted-foreground">
                Jika fungsi <strong>Pilih</strong> tidak memuat item inventaris, daftar inventaris mungkin tidak sinkron dengan benar. Coba segarkan halaman.
                Pastikan item tidak <strong>diarsipkan</strong> atau ditandai sebagai tidak aktif dalam database inventaris.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Total tidak dihitung dengan benar</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa <strong>Jumlah</strong> dan <strong>Harga Satuan</strong> dimasukkan menggunakan nilai numerik yang benar.
                Hindari penggunaan <strong>simbol mata uang</strong> atau <strong>koma</strong> saat memasukkan angka.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Tambah Invoice tidak menyimpan invoice</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa apakah semua bidang invoice, termasuk tamu dan setidaknya satu item biaya tambahan, telah diisi.
                Jika masalah berlanjut, sesi Anda mungkin telah <strong>habis waktu</strong>. Coba keluar dan masuk kembali, lalu ulangi proses.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== EDIT INVOICE ==================== */}
      <Section id="edit-invoice" title="Edit Invoice">
        <p>Berikut cara mengedit Invoice:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Di menu <strong>Ekstra Saja</strong>, temukan invoice yang ingin Anda edit.</li>
          <li>Klik <strong>Pilih Tindakan</strong> di kolom <strong>Tindakan</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107138/07._select_action_j5nf98.jpg" />
          <li>Pilih <strong>Edit</strong> dari menu dropdown.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107147/08._click_edit_lg3bcq.jpg" />
          <li>Perbarui <strong>detail tamu</strong> sesuai kebutuhan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747108750/19._edit_invoice_details_jvj9cg.jpg" />
          <li>Klik <strong>Tambah</strong> untuk menyertakan item baru, atau <strong>Hapus</strong> untuk menghapus item yang ada.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107138/09._add_or_remove_mablim.jpg" />
          <li>
            Gunakan <strong>Pilih</strong> untuk memilih item dari inventaris, atau <strong>masukkan secara manual</strong> deskripsi 
            di bidang <strong>Biaya Tambahan</strong>.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107140/10._click_select_vgesnw.jpg" />
          <li>Pastikan <strong>Jumlah</strong>, <strong>Harga Satuan</strong>, dan <strong>Total</strong> sudah benar.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107140/11._edit_details_tnuf95.jpg" />
          <li>Klik <strong>Perbarui Invoice</strong> untuk menyimpan perubahan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107147/12._click_update_invoice_l3a4ss.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>Setelah item <strong>dihapus</strong> dari invoice, tindakan ini <strong>tidak dapat dibatalkan</strong>.</li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Edit Invoice:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat menemukan invoice untuk diedit</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda berada dalam <strong>rentang tanggal</strong> yang benar atau menggunakan filter yang benar di menu Ekstra Saja.
                Konfirmasikan bahwa invoice <strong>belum dihapus</strong> atau dipindahkan ke status lain (mis., diarsipkan).
              </dd>
            </div>
            <div>
              <dt className="font-medium">Opsi Edit tidak tersedia di dropdown tindakan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan invoice <strong>belum difinalisasi</strong> atau dikunci oleh proses lain. Segarkan halaman untuk memuat ulang 
                status invoice terbaru dan tindakan yang tersedia.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat memperbarui detail tamu</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali bahwa semua bidang tamu yang diperlukan diisi dan diformat dengan benar (mis., alamat email yang valid).
                Beberapa bidang mungkin <strong>hanya-baca</strong> tergantung pada izin sistem. Hubungi admin Anda jika perlu.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Item baru tidak ditambahkan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda mengklik <strong>Tambah</strong> setelah mengisi informasi item tambahan. Periksa bahwa nama item dan nilainya 
                <strong>tidak kosong</strong> atau tidak valid.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Item yang dihapus masih muncul setelah pembaruan</dt>
              <dd className="ml-4 text-muted-foreground">
                Segarkan halaman untuk mengonfirmasi apakah item benar-benar dihapus. Jika item muncul kembali, mungkin ada masalah penyimpanan— 
                coba hapus dan perbarui invoice lagi.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Perbarui Invoice tidak menyimpan perubahan</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang yang diperlukan lengkap dan tidak ada entri yang tidak valid. Sesi Anda mungkin telah <strong>habis waktu</strong>. 
                Keluar dan masuk kembali, lalu coba proses edit lagi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== ADD PAYMENT ==================== */}
      <Section id="add-payment" title="Tambah Pembayaran">
        <p>Berikut cara menambahkan Pembayaran ke invoice:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Di menu <strong>Ekstra Saja</strong>, temukan invoice yang ingin Anda tambahkan pembayaran.</li>
          <li>Klik <strong>Pilih Tindakan</strong> di kolom <strong>Tindakan</strong>.</li>
          <li>Pilih <strong>Tambah Pembayaran</strong> dari menu dropdown.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107147/13._click_add_payment_n8emca.jpg" />
          <li>
            Isi <strong>tanggal pembayaran</strong>, <strong>jenis pembayaran</strong>, <strong>jumlah pembayaran</strong>, dan <strong>biaya tambahan</strong>.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107137/14._fill_payments_a9zxy9.jpg" />
          <li>Klik <strong>Tambah Pembayaran</strong> untuk mencatat pembayaran.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107137/15._click_add_payment_y6d0j1.jpg" />
          <li>Pembayaran akan ditambahkan dan tercantum di bawah.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107137/16._add_payment_n8lq1l.jpg" />
          <li>Klik <strong>Tutup</strong> untuk keluar dari jendela pembayaran.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747107137/17._close_button_cbwyxo.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan Penting:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>
              Saat memasukkan <strong>Jumlah Pembayaran</strong>, <strong>jangan</strong> sertakan <strong>simbol mata uang</strong>, 
              <strong>pemisah ribuan</strong>, atau <strong>karakter khusus</strong>. Gunakan <strong>titik '.'</strong> sebagai pemisah desimal.
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Tambah Pembayaran:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Opsi Tambah Pembayaran tidak tersedia di dropdown</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan invoice <strong>masih dapat diedit</strong> dan belum lunas atau dikunci. Periksa <strong>peran dan izin</strong> pengguna Anda; 
                beberapa peran mungkin tidak memiliki akses untuk menambahkan pembayaran.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Bidang pembayaran tidak menerima input</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan halaman <strong>telah dimuat sepenuhnya</strong> sebelum mencoba memasukkan data. Jika bidang tetap tidak aktif, 
                coba segarkan halaman atau pilih ulang invoice.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat memasukkan Jumlah Pembayaran dengan benar</dt>
              <dd className="ml-4 text-muted-foreground">
                Hindari penggunaan <strong>simbol mata uang</strong> (mis., <code>$</code>, <code>Rp</code>) atau <strong>pemisah ribuan</strong> 
                (mis., <code>1,000</code>) saat memasukkan jumlah. Gunakan <strong>titik '.'</strong> sebagai pemisah desimal (mis., <code>1000.50</code>).
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tombol Tambah Pembayaran tidak menyimpan pembayaran</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang yang diperlukan (<strong>Tanggal Pembayaran</strong>, <strong>Jenis Pembayaran</strong>, dan 
                <strong>Jumlah Pembayaran</strong>) diisi dengan benar. Jika masalah berlanjut, sesi Anda mungkin telah <strong>habis waktu</strong> 
                — coba keluar dan masuk kembali.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Pembayaran tidak muncul dalam daftar setelah menyimpan</dt>
              <dd className="ml-4 text-muted-foreground">
                Tunggu beberapa saat setelah mengklik <strong>Tambah Pembayaran</strong> untuk memberi waktu sistem memperbarui.
                Jika masih tidak muncul, coba tutup dan buka kembali jendela pembayaran, atau segarkan halaman.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perhitungan biaya tambahan salah</dt>
              <dd className="ml-4 text-muted-foreground">
                Periksa kembali format input dan pastikan hanya nilai numerik yang digunakan. Jika kebijakan biaya tambahan diterapkan secara otomatis, 
                verifikasi logika yang diatur dalam pengaturan sistem Anda.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}