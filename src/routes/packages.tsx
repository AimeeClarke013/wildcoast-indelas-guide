import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  Check,
  Clock,
  Snowflake,
  Users,
  GraduationCap,
  Briefcase,
  Bus,
  Tent,
  Image as ImageIcon,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Hiking Packages — Indlela Adventures" },
      { name: "description", content: "Fully customisable Wild Coast hiking packages: 3, 5, 9 nights and 2 weeks. Traditional and Comfort options, with discounts for winter and large groups." },
      { property: "og:title", content: "Hiking Packages — Indlela Adventures" },
      { property: "og:description", content: "Customisable Wild Coast hiking packages and pricing." },
    ],
  }),
  component: Packages,
});

const routes = [
  { nights: "3 nights", title: "Coastal Taster", desc: "A short, scenic introduction to the Wild Coast — perfect for first-timers and weekenders." },
  { nights: "5 nights", title: "Village Loop", desc: "Our most loved route. River mouths, headland villages and golden beaches." },
  { nights: "9 nights", title: "Deep Coast", desc: "Long days, dramatic cliffs and quiet bays few outsiders ever see." },
  { nights: "2 weeks", title: "Full Traverse", desc: "The complete Wild Coast journey — immersive, transformative, end to end." },
];

const traditional = [
  "Stay in family homesteads (rondavels)",
  "Traditional meals cooked by your hosts",
  "Local guide & community porters",
  "Cultural exchange evenings",
  "Shared bathroom facilities",
];
const comfort = [
  "Upgraded eco-lodges & guesthouses",
  "Full-board menu with dietary options",
  "Senior guide & lighter daily packs",
  "Private bathrooms where available",
  "Includes laundry & welcome drinks",
];

function Packages() {
  return (
    <SiteLayout>
      <section className="bg-[color:var(--forest-deep)] text-[color:var(--primary-foreground)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--sand)]">
            Hiking packages
          </span>
          <h1 className="mt-3 max-w-3xl text-5xl font-black tracking-tight sm:text-6xl">
            Built around you. Rooted in the coast.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Every tour is fully customisable. Tell us how long you have, how hard you want to walk,
            and what you want to experience — we'll shape an itinerary with the right villages,
            beaches and rest days for your group.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-[color:var(--ocean)]">
                Popular routes
              </span>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Pick a starting point.
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              These are our most-booked itineraries. We'll tailor distance, pace and stops to your group.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {routes.map((r) => (
              <article key={r.nights} className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] w-full bg-muted">
                  <ImagePlaceholder label={`${r.nights} route image`} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--ocean)]">
                    <Clock className="h-3.5 w-3.5" /> {r.nights}
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--sand)]/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[color:var(--forest)]">
              Pricing
            </span>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Two ways to walk the coast.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Both packages support the same communities. Choose the level of comfort that suits you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <PriceCard
              tag="Traditional"
              price="R1,450"
              unit="/ night per person"
              tagline="Sleep in homesteads. Eat what the family eats."
              features={traditional}
              variant="default"
            />
            <PriceCard
              tag="Comfort"
              price="R1,800"
              unit="/ night per person"
              tagline="A softer landing, with the same authentic route."
              features={comfort}
              variant="featured"
            />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Discount
              icon={Snowflake}
              title="Winter discount"
              body="May–August bookings receive special low-season pricing. Crisp days, empty beaches, glowing fires."
            />
            <Discount
              icon={Users}
              title="Large group discount"
              body="Groups of 8+ unlock reduced per-person rates. Perfect for families, friends, and clubs."
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2">
          <FeatureBlock
            icon={GraduationCap}
            tag="School trips"
            title="Outdoor learning on a living coastline."
            body="Designed for schools and youth groups: tailored programs that blend hiking, marine ecology, isiXhosa culture and conservation. Trained guides, full safety protocols, and parent-friendly logistics."
            cta="Request a school programme"
          />
          <FeatureBlock
            icon={Briefcase}
            tag="Corporate retreats"
            title="Step away. Reset. Reconnect."
            body="Multi-day retreats for leadership teams and offsites. Workshops by the fire, beach walks between sessions, and a setting that resets perspective."
            cta="Plan a corporate retreat"
          />
        </div>
      </section>

      <section className="bg-[color:var(--forest-deep)] py-20 text-[color:var(--primary-foreground)]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[auto_1fr_auto]">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--sand)] text-[color:var(--forest-deep)]">
            <Bus className="h-7 w-7" />
          </span>
          <div>
            <h3 className="text-2xl font-black">Shuttle services</h3>
            <p className="mt-1 max-w-2xl text-white/80">
              We arrange transfers from East London, Mthatha and Port Edward — and back again at the
              end of your hike. Pricing is per group and shared on request.
            </p>
          </div>
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--sand)] px-5 py-3 text-sm font-semibold text-[color:var(--forest-deep)]"
          >
            Ask about shuttles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function PriceCard({
  tag, price, unit, tagline, features, variant,
}: {
  tag: string; price: string; unit: string; tagline: string; features: string[]; variant: "default" | "featured";
}) {
  const isFeatured = variant === "featured";
  return (
    <div
      className={`relative rounded-3xl border p-8 ${
        isFeatured
          ? "border-[color:var(--forest)] bg-[color:var(--forest-deep)] text-[color:var(--primary-foreground)] shadow-xl"
          : "border-border bg-card"
      }`}
    >
      {isFeatured && (
        <span className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-[color:var(--sand)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[color:var(--forest-deep)]">
          <Sparkles className="h-3.5 w-3.5" /> Most chosen
        </span>
      )}
      <div className={`text-xs font-semibold uppercase tracking-widest ${isFeatured ? "text-[color:var(--sand)]" : "text-[color:var(--ocean)]"}`}>
        {tag} package
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-5xl font-black tracking-tight">{price}</span>
        <span className={`text-sm ${isFeatured ? "text-white/70" : "text-muted-foreground"}`}>{unit}</span>
      </div>
      <p className={`mt-3 text-sm ${isFeatured ? "text-white/80" : "text-muted-foreground"}`}>{tagline}</p>
      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${isFeatured ? "text-[color:var(--sand)]" : "text-[color:var(--forest)]"}`} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/packages"
        className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
          isFeatured
            ? "bg-[color:var(--sand)] text-[color:var(--forest-deep)] hover:opacity-90"
            : "bg-[color:var(--forest)] text-[color:var(--primary-foreground)] hover:opacity-90"
        }`}
      >
        Choose {tag} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function Discount({ icon: Icon, title, body }: { icon: typeof Snowflake; title: string; body: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[color:var(--ocean)] text-[color:var(--primary-foreground)]">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="mt-1 text-sm text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}

function FeatureBlock({ icon: Icon, tag, title, body, cta }: { icon: typeof Tent; tag: string; title: string; body: string; cta: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card">
      <div className="aspect-[16/7] bg-muted">
        <ImagePlaceholder label={`${tag} image`} />
      </div>
      <div className="p-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--forest)]">
          <Icon className="h-4 w-4" /> {tag}
        </div>
        <h3 className="mt-3 text-2xl font-black tracking-tight">{title}</h3>
        <p className="mt-3 text-muted-foreground">{body}</p>
        <Link to="/packages" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--ocean)] hover:underline">
          {cta} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-muted text-sm font-medium text-muted-foreground">
      <div className="flex flex-col items-center gap-2 p-6 text-center">
        <ImageIcon className="h-7 w-7 opacity-60" />
        <span>{label}</span>
      </div>
    </div>
  );
}