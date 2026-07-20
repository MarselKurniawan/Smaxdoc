import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/settings")({
  head: () => ({
    meta: [
      { title: "Pengaturan — Channelku | SinergiMax" },
      { name: "description", content: "Pengaturan properti, kamar, dan kebijakan booking di Channelku." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "property", label: "Properti" },
  { id: "rooms", label: "Kamar" },
  { id: "booking-policy", label: "Kebijakan Booking" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Pengaturan" activeTo="/docs/channelku/settings">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Pengaturan</h1>
      <p className="mt-4">Konfigurasi utama untuk mengatur properti, inventaris kamar, dan kebijakan reservasi Anda.</p>

      <Section id="property" title="Properti">
        <p>Kelola informasi properti: nama, alamat, kontak, deskripsi, fasilitas, foto, mata uang, zona waktu, dan tautan Booking Engine.</p>
        <Figure label="Formulir pengaturan properti" />
      </Section>

      <Section id="rooms" title="Kamar">
        <p>Kelola tipe kamar dan rate plan.</p>
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Tipe Kamar</strong> — nama, kapasitas tamu, jumlah kamar fisik, deskripsi, dan foto.</li>
          <li><strong>Rate Plan</strong> — paket tarif seperti Best Available Rate, Non-Refundable, atau Long Stay.</li>
          <li><strong>Ketersediaan & Harga</strong> — atur harga dan stok kamar per tanggal.</li>
        </ul>
        <Figure label="Manajemen tipe kamar dan rate plan" />
      </Section>

      <Section id="booking-policy" title="Kebijakan Booking">
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Kebijakan Pembatalan</strong> — batas waktu pembatalan gratis dan denda.</li>
          <li><strong>Kebijakan Pembayaran</strong> — deposit, metode pembayaran, dan mata uang.</li>
          <li><strong>Kebijakan Anak</strong> — usia, biaya extra bed, dan sarapan.</li>
        </ul>
        <Figure label="Formulir kebijakan booking" />
      </Section>
    </DocsLayout>
  );
}
