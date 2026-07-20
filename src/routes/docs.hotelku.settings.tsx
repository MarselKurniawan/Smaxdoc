import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/settings")({
  head: () => ({
    meta: [
      { title: "Pengaturan — Hotelku | SinergiMax" },
      { name: "description", content: "Pengaturan properti, kamar, pajak, dan pengguna Hotelku." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "property", label: "Properti" },
  { id: "rooms", label: "Kamar & Tipe Kamar" },
  { id: "tax", label: "Pajak & Service" },
  { id: "users", label: "Pengguna & Hak Akses" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Pengaturan" activeTo="/docs/hotelku/settings">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Pengaturan</h1>
      <Section id="property" title="Properti">
        <p>Informasi umum properti, mata uang, zona waktu, dan format nomor invoice.</p>
      </Section>
      <Section id="rooms" title="Kamar & Tipe Kamar">
        <p>Definisikan tipe kamar, nomor kamar fisik, kapasitas, dan tarif dasar.</p>
        <Figure label="Manajemen kamar" />
      </Section>
      <Section id="tax" title="Pajak & Service">
        <p>Atur skema pajak (PB1) dan service charge — termasuk dalam tarif atau ditambahkan setelahnya.</p>
      </Section>
      <Section id="users" title="Pengguna & Hak Akses">
        <p>Buat pengguna staf dan tetapkan peran (Manager, Front Office, Housekeeper, Kasir).</p>
      </Section>
    </DocsLayout>
  );
}
