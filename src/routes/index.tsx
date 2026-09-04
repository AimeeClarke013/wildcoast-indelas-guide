import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
const heroImage = { url: "/images/hero.jpg" };
const coastlineImage = { url: "/images/cathedralrockgroup.jpg" };
import {
  ArrowRight,
  Leaf,
  Users,
  Compass,
  Sparkles,
  ShieldCheck,
  Calendar,
  Tag,
  Image as ImageIcon,
  Quote,
  Home,
  Coins,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indlela Adventures — Community-based Wild Coast Hiking Tours" },
      { name: "description", content: "Walk South Africa's pristine Wild Coast with the people who call it home. Community-led hiking tours that protect the land." },
      { property: "og:title", content: "Indlela Adventures — Wild Coast Hiking Tours" },
      { property: "og:description", content: "Community-based hiking tours along South Africa's Wild Coast." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-[color:var(--forest-deep)] text-[color:var(--primary-foreground)]">
        <img
          src={heroImage.url}
          alt="Hiker overlooking a waterfall cascading into a turquoise cove along South Africa's Wild Coast"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--forest-deep)]/95 via-[color:var(--forest-deep)]/55 to-[color:var(--forest-deep)]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--forest-deep)]/80 via-transparent to-transparent" />
        <div className="relative mx-auto flex max-w-7xl flex-col px-4 pb-20 pt-28 sm:px-6 md:min-h-[88vh] md:justify-end md:pb-24 md:pt-40">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur">
              <Leaf className="h-3.5 w-3.5" /> Ecotourism · Wild Coast
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl">
              Indlela Adventures
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/90 sm:text-xl">
              Community-based Wild Coast hiking tours in South Africa.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--sand)] px-6 py-3 text-sm font-semibold text-[color:var(--forest-deep)] transition hover:opacity-90"
              >
                Plan your Wild Coast hike <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/packages"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                View hiking packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-muted">
            <img
              src={coastlineImage.url}
              alt="Hikers gathered on a cliff edge above Cathedral Rock arch on the Wild Coast"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[color:var(--ocean)]">
              Experience & Impact
            </span>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Multi-day hikes where every step protects the coastline.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              The Wild Coast is known for its pristine, untouched shorelines — but it is among the
              most threatened. By walking it with us, you put income directly into the rural
               villages who host you, sustain a working alternative to destructive land use, and help
               prove this land is worth more wild than dug up. Whether you're local or from abroad,
               you're guaranteed an experience like no other.  
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Home, label: "Funds stay in the village" },
              { icon: Coins, label: "Employment for local guides and hosts" },
              { icon: Leaf, label: "Ecotourism over mining, malls and highways" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
                <s.icon className="h-5 w-5 text-[color:var(--ocean)]" />
                <div className="mt-3 text-base font-bold leading-snug">{s.label}</div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--sand)]/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[color:var(--forest)]">
              
            </span>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Why hike with us?
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Users, title: "100% community-based tourism", body: "Every cent you spend directly empowers local hosts and keeps vital funding entirely within the villages you visit." },
              { icon: Compass, title: "Custom routes for all fitness levels", body: "We can tailor daily walking distances and terrain difficulty to match your preferences." },
               { icon: Sparkles, title: "Traditional & comfort options", body: "Choose between a rustic village homestay experience or upgraded premium/eco-lodge facilities." },
              { icon: ShieldCheck, title: "Protecting the Wild Coast from exploitation", body: "Your footprint actively funds a sustainable economic alternative to destructive mining and commercial development." },
              { icon: Calendar, title: "Available all year round", body: "Experience the breathtaking beauty of the dramatic coastline during whichever season best fits your travel schedule." },
              { icon: Tag, title: "Discounts available", body: "Enjoy special cost savings when you book during our quiet winter months or when travelling as a larger group." },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--forest)] text-[color:var(--primary-foreground)]">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[color:var(--ocean)]">
              Testimonials
            </span>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Take their word for it
            </h2>
            <a
              href="https://www.google.com/maps/place//@-31.4231283,29.3636831,9z/data=!3m1!4b1!4m3!3m2!1s0x1ba356ec4bfb985:0x45d7d1163f03137a!12e1?entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--ocean)]/30 bg-[color:var(--ocean)]/5 px-4 py-2 text-sm font-semibold text-[color:var(--ocean)] transition hover:bg-[color:var(--ocean)]/10"
            >
              Read more reviews on our Google Business profile
            </a>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                quote: "We did a 5 day hike with Siya, from Port St John's to Wild Coast Sun and it was mind blowing and life changing! I was humbled by how welcoming and open Siya and the Mpondo people are! In each home stay I felt connected and held by the community.\n\nI have seen a lot of SA living here for 3 decades. This is a very special part of the country! The views are amazing and seem never ending but the magic is why I would return.",
                name: "Mienke Richter",
                meta: "4-night route · 2026",
              },
              {
                quote: "A life changing experience on the Wild Coast. Siya is an absolute legend, his knowledge of the Eastern Cape and his energy for the area is unmatched.\n\nWe went with the comfort package and were so well looked after. The food was great and hospitality of the local families was such a unique and fun experience, but the absolute highlight for me was definitely the scenery along the way and all the remote swim spots. If you’re looking for a proper, authentic adventure, I highly recommend Indlela Adventures.",
                name: "Nick Meyjes",
                meta: "5-night route · 2021",
              },
              {
                quote: "We had such an incredible trip with Siya! He designed the tour based on what we were hoping to get out of our hike and the groups activity level. He took such good care of us. It was an honor to hear his stories of the land, the socio/political dynamics of the Pondo people, the history, and also the communities' hopes for the future. I was humbled by the generosity shown at the homestays, it was great! So excited to come back!",
                name: "Kate Marsay",
                meta: "4-night route · 2026",
              },
            ].map((t, i) => (
              <figure key={i} className="rounded-2xl border border-border bg-card p-6 flex flex-col">
                <Quote className="h-6 w-6 text-[color:var(--ocean)] shrink-0" />
                <blockquote className="mt-4 text-base text-foreground/90 whitespace-pre-wrap flex-grow">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-[color:var(--sand)] shrink-0" />
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.meta}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ImagePlaceholder({ label, tone = "light" }: { label: string; tone?: "light" | "dark" }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center text-sm font-medium ${
        tone === "dark" ? "bg-white/5 text-white/60" : "bg-muted text-muted-foreground"
      }`}
    >
      <div className="flex flex-col items-center gap-2 p-6 text-center">
        <ImageIcon className="h-7 w-7 opacity-60" />
        <span>{label}</span>
      </div>
    </div>
  );
}