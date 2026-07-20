import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";

export const Route = createFileRoute("/docs/channelku/channel-manager")({
  head: () => ({
    meta: [
      { title: "Channel Manager — Channelku | SinergiMax" },
      { name: "description", content: "Kelola koneksi channel, pemetaan, tarif, dan alokasi kamar di Channelku." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "connected", label: "Channel Terhubung" },
  { id: "connect-request", label: "Permintaan Koneksi" },
  { id: "control-panel", label: "Control Panel" },
  { id: "room-allocation", label: "Alokasi Kamar" },
  { id: "rate-multiplier", label: "Rate Multiplier" },
  { id: "deals", label: "Monthly & Yearly Deals" },
  { id: "logs", label: "Logs" },
  { id: "reports", label: "Laporan" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Channel Manager" activeTo="/docs/channelku/channel-manager">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Channel Manager</h1>
      <p className="mt-4">
        <strong>Channel Manager</strong> mensinkronisasi stok, tarif, dan pemetaan kamar
        antara Channelku dan seluruh channel (OTA, IBE, PMS) yang terhubung.
      </p>

      <Section id="connected" title="Channel Terhubung">
        <p>Daftar seluruh channel yang telah aktif berikut status koneksi dan tanggal sinkronisasi terakhir.</p>
        <Figure label="Daftar channel terhubung" />
      </Section>

      <Section id="connect-request" title="Permintaan Koneksi">
        <p>Ajukan permintaan koneksi ke OTA baru. Isi informasi properti pada OTA tersebut, lalu tim Channelku akan memproses aktivasi.</p>
        <Figure label="Formulir permintaan koneksi channel" />
      </Section>

      <Section id="control-panel" title="Control Panel">
        <p>Panel kontrol per-channel untuk mengatur pemetaan kamar, mapping rate plan, kebijakan, serta parameter lain.</p>
        <p>Channel yang didukung antara lain: Booking.com, Agoda, Expedia, Airbnb, Traveloka, Tiket.com, Ctrip, Hotelbeds, dan puluhan channel lainnya.</p>
        <Figure label="Control panel salah satu channel" />
      </Section>

      <Section id="room-allocation" title="Alokasi Kamar">
        <p>Atur berapa banyak kamar dari tiap tipe yang dialokasikan ke masing-masing channel per tanggal.</p>
        <Figure label="Tabel alokasi kamar" />
      </Section>

      <Section id="rate-multiplier" title="Rate Multiplier">
        <p>Kalikan tarif dasar dengan persentase tertentu per channel — berguna untuk menyesuaikan komisi OTA atau strategi pricing.</p>
      </Section>

      <Section id="deals" title="Monthly & Yearly Deals">
        <p>Buat kampanye promo bulanan atau tahunan yang otomatis diterapkan ke channel terpilih pada tanggal-tanggal tertentu.</p>
        <Figure label="Konfigurasi monthly deals" />
      </Section>

      <Section id="logs" title="Logs">
        <p>Riwayat pertukaran data (ARI push, reservation pull) antara Channelku dan channel, lengkap dengan status sukses/gagal.</p>
      </Section>

      <Section id="reports" title="Laporan">
        <p>Laporan performa per channel: jumlah reservasi, pendapatan, cancellation, dan lead time.</p>
      </Section>
    </DocsLayout>
  );
}
