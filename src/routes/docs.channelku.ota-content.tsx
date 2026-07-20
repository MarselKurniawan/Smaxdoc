import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/ota-content")({
  head: () => ({
    meta: [
      { title: "OTA Content — Channelku | SinergiMax" },
      { name: "description", content: "Kelola konten OTA: promo dan review Booking.com." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "promotions", label: "Promo OTA" },
  { id: "reviews", label: "Review Booking.com" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="OTA Content" activeTo="/docs/channelku/ota-content">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">OTA Content</h1>
      <Section id="promotions" title="Promo OTA">
        <p>Buat dan kelola promo (Basic Deal, Last Minute, Early Booker, Country Rate) untuk OTA yang mendukung.</p>
        <Figure label="Daftar promo OTA" />
      </Section>
      <Section id="reviews" title="Review Booking.com">
        <p>Pantau review terbaru dari Booking.com, balas dari satu antarmuka, dan lacak skor rata-rata properti.</p>
        <Figure label="Panel review Booking.com" />
      </Section>
    </DocsLayout>
  );
}
