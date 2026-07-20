import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/guest-crm")({
  head: () => ({
    meta: [
      { title: "Guest CRM — Channelku | SinergiMax" },
      { name: "description", content: "Database tamu dan otomasi email untuk retensi tamu." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "database", label: "Database Tamu" },
  { id: "email-automation", label: "Otomasi Email" },
  { id: "segmentation", label: "Segmentasi" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Guest CRM" activeTo="/docs/channelku/guest-crm">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Guest CRM</h1>
      <Section id="database" title="Database Tamu">
        <p>Kumpulan data seluruh tamu yang pernah menginap: kontak, riwayat reservasi, preferensi, dan total belanja.</p>
        <Figure label="Tabel database tamu" />
      </Section>
      <Section id="email-automation" title="Otomasi Email">
        <p>Buat kampanye email otomatis: konfirmasi, pre-arrival, thank-you, dan reminder ulang tahun.</p>
        <Figure label="Editor template email otomatis" />
      </Section>
      <Section id="segmentation" title="Segmentasi">
        <p>Filter tamu berdasarkan negara, jumlah kunjungan, total pengeluaran, atau kanal reservasi untuk kampanye yang tertarget.</p>
      </Section>
    </DocsLayout>
  );
}
