import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/stock-inventory")({
  head: () => ({
    meta: [
      { title: "Inventaris Stok — Hotelku | SinergiMax" },
      { name: "description", content: "Kelola item tambahan yang tersedia untuk dijual di properti, baik untuk kamar tamu maupun penjualan mandiri." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "add-category", label: "Tambah Kategori Produk" },
  { id: "edit-category", label: "Edit Kategori yang Ada" },
  { id: "add-product", label: "Tambah Produk" },
  { id: "stock-behavior", label: "Perilaku Stok dan Edit Inventaris" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Inventaris Stok" activeTo="/docs/hotelku/stock-inventory">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Inventaris Stok</h1>
      <p className="mt-4">
        <strong>Inventaris Stok</strong> adalah konfigurasi untuk mengelola <strong>item tambahan</strong> yang tersedia untuk dijual di properti, 
        baik yang dijual ke kamar tamu (mis., room service) maupun secara mandiri (mis., ekstra saja). 
        Fitur ini memastikan <strong>pelacakan stok yang akurat</strong> dan memfasilitasi <strong>manajemen inventaris yang efisien</strong>.
      </p>

      {/* ==================== ADD CATEGORY ==================== */}
      <Section id="add-category" title="Tambah Kategori Produk">
        <p>Berikut cara menambahkan Kategori Produk:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Buka menu <strong>Inventaris Stok</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747104630/01._navigate_stock_inventory_iij6dh.jpg" />
          <li>Klik tombol <strong>Tambah Kategori Produk</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747104638/02._add_product_category_ku5qqq.jpg" />
          <li>Masukkan <strong>Nama Kategori</strong> di bidang yang disediakan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747104630/03._category_name_gl932i.jpg" />
          <li>Klik <strong>Tambah Kategori</strong> untuk menyimpan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747104640/04._add_category_button_wnzsze.jpg" />
          <li>
            Halaman akan <strong>refresh otomatis</strong> setelah pengiriman untuk menampilkan kategori produk yang ditambahkan.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747104631/05._success_add_ek4nlx.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>
              Membuat <strong>kategori produk</strong> sangat penting karena berfungsi sebagai <strong>wadah</strong> untuk produk-produk terkait.
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Tambah Kategori Produk:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat mengklik tombol 'Tambah Kategori Produk'</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan Anda memiliki izin untuk mengelola pengaturan inventaris. Segarkan halaman jika antarmuka belum dimuat sepenuhnya.
                Coba akses sistem melalui browser lain jika tombol tidak responsif.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kategori tidak tersimpan setelah mengklik 'Tambah Kategori'</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan bidang <strong>Nama Kategori</strong> tidak kosong. Hindari penggunaan <strong>karakter khusus</strong> atau simbol yang tidak didukung.
                Tunggu beberapa detik untuk halaman refresh dan tampilkan kategori baru. Jika tidak terlihat, refresh secara manual.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== EDIT CATEGORY ==================== */}
      <Section id="edit-category" title="Edit Kategori yang Ada">
        <p>Berikut cara mengedit kategori yang ada:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Pilih tab <strong>Kategori</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747108158/12._click_categories_lwa8an.jpg" />
          <li>Klik <strong>Edit</strong> di samping kategori yang diinginkan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747104631/06._edit_category_product_gluzas.jpg" />
          <li>Perbarui <strong>nama kategori</strong> sesuai kebutuhan.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747104633/07._update_category_name_e0iun2.jpg" />
          <li>Klik <strong>Perbarui Kategori</strong> untuk menerapkan perubahan.</li>
          <li>Halaman akan <strong>refresh otomatis</strong> setelah pengiriman untuk menampilkan kategori yang diperbarui.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747104639/08._update_category_button_gmsfr3.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Edit Kategori yang Ada:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat mengklik tombol 'Edit' atau kategori tidak ditemukan</dt>
              <dd className="ml-4 text-muted-foreground">
                Verifikasi bahwa kategori <strong>berhasil dibuat</strong>. Segarkan halaman untuk memastikan data terbaru dimuat.
                Periksa bahwa peran pengguna Anda memiliki akses untuk mengedit kategori.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Perubahan tidak diterapkan setelah mengklik 'Perbarui Kategori'</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa nama yang diperbarui <strong>tidak identik</strong> dengan nama yang sudah ada.
                Pastikan <strong>tidak ada karakter tidak valid</strong> yang digunakan.
                Coba muat ulang halaman dan edit lagi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== ADD PRODUCT ==================== */}
      <Section id="add-product" title="Tambah Produk">
        <p>Berikut cara menambahkan Produk:</p>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Di menu <strong>Inventaris Stok</strong>, klik tombol <strong>Tambah Produk</strong>.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747104638/09._add_product_mviips.jpg" />
          <li>
            Isi detail item menggunakan formulir yang disediakan:
            <ul className="ml-6 mt-1 list-disc">
              <li><strong>Kategori:</strong> Pilih kategori produk.</li>
              <li><strong>Nama Item:</strong> Masukkan nama produk.</li>
              <li>
                <strong>Harga Jual:</strong> Masukkan harga jual (tanpa koma atau spasi).
              </li>
              <li>
                <strong>Harga Beli:</strong> Masukkan harga beli (tanpa koma atau spasi).
              </li>
              <li>
                <strong>Kode Item (Opsional):</strong> Tambahkan kode referensi internal untuk item.
              </li>
              <li>
                <strong>Item untuk Dijual:</strong> Centang kotak ini jika item akan dijual.
              </li>
              <li>
                <strong>Item untuk Pembelian:</strong> Centang kotak ini jika item dapat diisi ulang atau dibeli.
              </li>
              <li>
                <strong>Stok Inventaris:</strong> Masukkan jumlah stok awal. Biarkan kosong jika tidak dilacak.
              </li>
            </ul>
          </li>
          <li>Klik <strong>Buat Item</strong> untuk menambahkan produk.</li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747104637/10._add_item_product_w84apd.jpg" />
        </ol>

        <div className="mt-4 rounded-lg border bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <p className="text-sm font-medium">Catatan Penting:</p>
          <ul className="ml-6 list-disc text-sm">
            <li>
              Untuk bidang numerik, gunakan <strong>hanya angka</strong> dan <strong>titik</strong> (mis., <code>5000.00</code>, <strong>bukan</strong> <code>5,000</code>).
            </li>
            <li>
              Jika pelacakan stok tidak diperlukan, biarkan bidang <strong>Stok Inventaris</strong> <strong>kosong</strong> daripada memasukkan "0".
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Tambah Produk:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Tidak dapat mengklik 'Tambah Produk'</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan <strong>setidaknya satu kategori produk</strong> telah dibuat terlebih dahulu. Periksa hak akses Anda untuk menambahkan item baru di Inventaris Stok.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Kesalahan saat menyimpan produk</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan semua bidang wajib (<strong>Kategori</strong>, <strong>Nama Item</strong>, <strong>Harga Jual</strong>, <strong>Harga Beli</strong>) 
                diisi dengan benar tanpa koma atau spasi.
                Untuk bidang numerik, gunakan hanya angka dan titik (mis., <code>5000.00</code>, bukan <code>5,000</code>).
                Jika pelacakan stok tidak diperlukan, biarkan bidang <strong>Stok Inventaris</strong> kosong daripada memasukkan "0".
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ==================== STOCK BEHAVIOR ==================== */}
      <Section id="stock-behavior" title="Perilaku Stok dan Edit Inventaris">
        <p>Berikut adalah aturan perilaku stok dan cara mengedit inventaris:</p>

        <h4 className="mt-4 font-medium">Perilaku Stok:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            Pastikan <strong>hanya "item untuk dijual"</strong> yang dicentang agar inventaris <strong>berkurang secara otomatis</strong> 
            saat ada penjualan (ini hanya berlaku jika penjualan dilakukan melalui <strong>edit reservasi di FOS -&gt; Bagan Pemesanan</strong>).
          </li>
          <li>
            Inventaris <strong>tidak akan berkurang secara otomatis</strong> jika penjualan dilakukan melalui <strong>Ekstra Saja</strong>.
          </li>
        </ul>

        <h4 className="mt-4 font-medium">Edit Inventaris:</h4>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            Untuk memperbarui tingkat stok, buka tab <strong>Item</strong>, klik <strong>Edit</strong> di samping produk, 
            sesuaikan <strong>jumlah stok</strong>, lalu klik <strong>Simpan</strong>.
          </li>
          <Figure label=""
          src="https://res.cloudinary.com/dayo5hqig/image/upload/v1747104631/11._notes_item_o95ufi.jpg" />
        </ul>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah Perilaku Stok dan Edit Inventaris:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Inventaris tidak berkurang setelah penjualan</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa item memiliki kotak <strong>"Item untuk Dijual"</strong> dicentang.
                Penjualan melalui <strong>Ekstra Saja</strong> <strong>tidak</strong> memengaruhi inventaris secara otomatis — perbarui stok secara manual.
                Pengurangan inventaris otomatis <strong>hanya berfungsi</strong> saat item ditambahkan melalui <strong>FOS → Bagan Pemesanan</strong>.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat memperbarui stok secara manual</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan produk terdaftar di bawah tab <strong>Item</strong> dan tidak <strong>diarsipkan</strong> atau tidak aktif.
                Klik tombol <strong>Edit</strong> yang benar di samping item. Pastikan untuk memasukkan angka yang valid di bidang jumlah stok.
                Jika perubahan tidak tersimpan, segarkan halaman dan coba lagi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}