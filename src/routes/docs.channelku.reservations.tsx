import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/reservations")({
  head: () => ({
    meta: [
      { title: "Reservasi — Channelku | SinergiMax" },
      { name: "description", content: "Kelola daftar reservasi dan buat reservasi baru di Channelku." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "booking-list", label: "Daftar Reservasi" },
  { id: "filters", label: "Filter & Pencarian" },
  { id: "detail", label: "Detail Reservasi" },
  { id: "create", label: "Buat Reservasi" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Reservasi" activeTo="/docs/channelku/reservations">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Reservasi</h1>
      <p className="mt-4">
        Modul <strong>Reservasi</strong> memungkinkan Anda melihat, memfilter, dan mengelola
        seluruh reservasi properti dari berbagai channel di satu tempat.
      </p>

      <Section id="booking-list" title="Daftar Reservasi">
        <p>Tabel menampilkan seluruh reservasi dengan kolom: ID Reservasi, Nama Tamu, Channel, Check-In, Check-Out, Kamar, Rate Plan, Status, Total, dan Deposit.</p>
        <Figure label="Tabel daftar reservasi" />
      </Section>

      <Section id="filters" title="Filter & Pencarian">
        <ul className="ml-6 list-disc space-y-2">
          <li>Filter berdasarkan <strong>rentang tanggal</strong> (booking date atau stay date).</li>
          <li>Filter berdasarkan <strong>channel</strong>, <strong>status</strong>, atau <strong>tipe kamar</strong>.</li>
          <li>Pencarian cepat berdasarkan nama tamu, nomor reservasi, atau email.</li>
        </ul>
        <Figure label="Panel filter reservasi" />
      </Section>

      <Section id="detail" title="Detail Reservasi">
        <p>Klik salah satu baris untuk membuka detail lengkap: informasi tamu, rincian menginap, pembayaran, catatan tambahan, dan riwayat perubahan.</p>
        <Figure label="Halaman detail reservasi" />
      </Section>

      <Section id="create" title="Buat Reservasi">
        <ol className="ml-6 list-decimal space-y-2">
          <li>Klik tombol <strong>Buat Reservasi</strong> di kanan atas.</li>
          <li>Pilih tanggal check-in & check-out, tipe kamar, dan rate plan.</li>
          <li>Isi data tamu (nama, email, telepon, jumlah tamu).</li>
          <li>Masukkan informasi pembayaran atau deposit bila ada.</li>
          <li>Klik <strong>Simpan</strong> untuk mengkonfirmasi reservasi.</li>
        </ol>
        <Figure label="Formulir pembuatan reservasi" />
      </Section>
    </DocsLayout>
  );
}
