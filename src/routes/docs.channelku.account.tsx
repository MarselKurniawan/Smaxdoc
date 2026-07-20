import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/account")({
  head: () => ({
    meta: [
      { title: "Akun — Channelku | SinergiMax" },
      { name: "description", content: "Kelola detail akun, tagihan, dan sub-user Channelku." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "details", label: "Detail Akun" },
  { id: "billing", label: "Tagihan" },
  { id: "subusers", label: "Sub-User" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Akun" activeTo="/docs/channelku/account">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Akun</h1>
      <Section id="details" title="Detail Akun">
        <p>Perbarui nama, email, kata sandi, dan preferensi bahasa akun pemilik.</p>
        <Figure label="Formulir detail akun" />
      </Section>
      <Section id="billing" title="Tagihan">
        <p>Lihat paket berlangganan aktif, riwayat pembayaran, dan unduh invoice.</p>
        <Figure label="Halaman tagihan dan invoice" />
      </Section>
      <Section id="subusers" title="Sub-User">
        <p>Undang pengguna tambahan dan berikan peran (Admin, Operator, Read-Only) untuk kontrol akses granular.</p>
        <Figure label="Daftar sub-user dan pengaturan peran" />
      </Section>
    </DocsLayout>
  );
}
