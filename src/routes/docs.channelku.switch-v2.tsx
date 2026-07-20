import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/switch-v2")({
  head: () => ({
    meta: [
      { title: "Beralih ke Channelku v2 — Channelku | SinergiMax" },
      { name: "description", content: "Panduan beralih dari Channelku v1 ke Channelku versi 2." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "overview", label: "Ikhtisar" },
  { id: "how-to-switch", label: "Cara Beralih" },
  { id: "back-to-v1", label: "Kembali ke v1" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Beralih ke Channelku v2" activeTo="/docs/channelku/switch-v2">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Beralih ke Channelku v2</h1>

      <Section id="overview" title="Ikhtisar">
        <p>
          Channelku versi 2 menghadirkan antarmuka baru yang lebih cepat, sederhana, dan
          konsisten di seluruh modul. Fitur inti tetap sama; hanya tata letak, navigasi,
          dan performa yang ditingkatkan.
        </p>
        <Figure label="Perbandingan tampilan v1 dan v2" />
      </Section>

      <Section id="how-to-switch" title="Cara Beralih ke v2">
        <ol className="ml-6 list-decimal space-y-2">
          <li>Masuk ke akun <strong>Channelku</strong> Anda.</li>
          <li>Klik banner <strong>Coba Channelku v2</strong> di bagian atas dashboard, atau pilih menu <strong>Beralih ke v2</strong> pada profil.</li>
          <li>Konfirmasi peralihan pada dialog yang muncul.</li>
          <li>Sistem akan memuat ulang halaman dengan tampilan v2.</li>
        </ol>
        <Figure label="Dialog konfirmasi peralihan versi" />
      </Section>

      <Section id="back-to-v1" title="Kembali ke v1">
        <p>
          Selama masa transisi, Anda tetap dapat kembali ke tampilan lama kapan saja
          melalui menu <strong>Kembali ke v1</strong> pada profil.
        </p>
      </Section>
    </DocsLayout>
  );
}
