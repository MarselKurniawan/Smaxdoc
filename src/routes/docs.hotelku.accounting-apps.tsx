import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { hotelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/hotelku/accounting-apps")({
  head: () => ({
    meta: [
      { title: "Accounting Apps — Hotelku | SinergiMax" },
      { name: "description", content: "Integrasi Hotelku dengan aplikasi akuntansi eksternal." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "overview", label: "Ikhtisar" },
  { id: "supported", label: "Aplikasi yang Didukung" },
  { id: "setup", label: "Cara Menghubungkan" },
];

function Page() {
  return (
    <DocsLayout product="Hotelku" sidebar={hotelkuSidebar} toc={toc} breadcrumb="Accounting Apps" activeTo="/docs/hotelku/accounting-apps">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Accounting Apps</h1>
      <Section id="overview" title="Ikhtisar">
        <p>Sinkronkan jurnal dan invoice Hotelku ke aplikasi akuntansi favorit Anda untuk mempercepat pelaporan keuangan.</p>
      </Section>
      <Section id="supported" title="Aplikasi yang Didukung">
        <ul className="ml-6 list-disc space-y-2">
          <li>Accurate Online</li>
          <li>Jurnal by Mekari</li>
          <li>Xero</li>
          <li>QuickBooks Online</li>
        </ul>
      </Section>
      <Section id="setup" title="Cara Menghubungkan">
        <ol className="ml-6 list-decimal space-y-2">
          <li>Buka <strong>Accounting Apps</strong> dan pilih aplikasi yang diinginkan.</li>
          <li>Klik <strong>Hubungkan</strong> dan otorisasi akun Anda.</li>
          <li>Petakan chart of accounts Hotelku ke aplikasi akuntansi.</li>
          <li>Aktifkan sinkronisasi otomatis atau jalankan manual per periode.</li>
        </ol>
        <Figure label="Panel integrasi accounting apps" />
      </Section>
    </DocsLayout>
  );
}
