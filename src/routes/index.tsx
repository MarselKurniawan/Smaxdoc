import { createFileRoute, Link } from "@tanstack/react-router";
import { DocsHeader } from "@/components/docs-layout";

export const Route = createFileRoute("/")({
  component: Home,
});

function ProductIcon({ variant }: { variant: "channelku" | "hotelku" }) {
  if (variant === "channelku") {
    return (
      <svg viewBox="0 0 64 64" className="h-16 w-16" fill="none" stroke="#2593b8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="20" height="20" rx="4" />
        <rect x="38" y="6" width="20" height="20" rx="4" />
        <rect x="6" y="38" width="20" height="20" rx="4" />
        <rect x="38" y="38" width="20" height="20" rx="4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" fill="none" stroke="#3fa32b" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 30 L32 10 L56 30 V54 a2 2 0 0 1 -2 2 H10 a2 2 0 0 1 -2 -2 Z" />
      <path d="M22 42 q10 8 20 0" />
    </svg>
  );
}

function ProductCard({
  variant,
  title,
  description,
  to,
}: {
  variant: "channelku" | "hotelku";
  title: string;
  description: string;
  to: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl border bg-card px-8 py-10 text-center shadow-sm transition-all hover:shadow-md">
      <ProductIcon variant={variant} />
      <h3 className="mt-6 text-2xl font-bold tracking-[-0.03em]">{title}</h3>
      <p className="mt-4 text-[15px] leading-7 text-foreground/75">{description}</p>
      <Link
        to={to}
        className="mt-6 inline-flex items-center justify-center rounded-md border border-[#1d4ed8] px-5 py-2 text-sm font-semibold text-[#1d4ed8] transition-colors hover:bg-[#1d4ed8] hover:text-white"
      >
        Read More
      </Link>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <DocsHeader />

      {/* Hero */}
      <section className="bg-[#1d4ed8] text-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h1 className="text-5xl font-bold tracking-[-0.04em] md:text-6xl">
            SinergiMax Doc
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-8 text-white/90">
            Welcome to the SinergiMax User Guide! This simple, easy-to-follow
            resource is designed to help you get the most out of our system.
            Whether you're new to SinergiMax or need a quick refresher, this
            guide provides clear instructions on how to navigate and use all
            features of the platform. From basic setup to advanced functions,
            you'll find step-by-step instructions and helpful tips to ensure a
            smooth and efficient experience. Start here to make the most of
            your SinergiMax journey!
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <ProductCard
            variant="channelku"
            title="Channelku"
            description="Tool for managing sales through online distribution channels in order to grow the hotel business and keep away the overbooking. Maximize sales and distribution efficiently."
            to="/docs/channelku/dashboard"
          />
          <ProductCard
            variant="hotelku"
            title="Hotelku"
            description="Manage all sources of reservations such as direct bookings, walk-in guests, and online travel agents. Also manage housekeeping, expense reports and other features."
            to="/docs/hotelku/dashboard"
          />
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SinergiMax Documentation
      </footer>
    </div>
  );
}
