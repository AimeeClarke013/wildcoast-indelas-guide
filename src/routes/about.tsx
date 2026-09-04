import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Image as ImageIcon, Leaf, Shield, Users } from "lucide-react";
const siyaProfile = { url: "/images/Siya_profile.jpg" };
const villageImage = { url: "/images/village.jpg" };
const cowsImage = { url: "/images/cows.jpg" };
const trailImage = { url: "/images/on_the_trail.jpg" };

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Indlela Adventures" },
      { name: "description", content: "Meet Siyabonga Ndovela and the Wild Coast community behind Indlela Adventures — an ecotourism stand against industrial mining." },
      { property: "og:title", content: "About — Indlela Adventures" },
      { property: "og:description", content: "The people, the path, and the stand behind Indlela Adventures." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-muted">
              <img
                src={siyaProfile.url}
                alt="Portrait of Siya"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-3xl bg-[color:var(--sand)] sm:block" />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[color:var(--ocean)]">
              Meet your guide
            </span>
            <h1 className="mt-3 text-5xl font-black tracking-tight sm:text-6xl">
              Siyabonga <br />Ndovela <span className="text-muted-foreground">— Siya</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Siya was born and raised on the Wild Coast, in the very villages that now host our
              hikers. He grew up tracing the headlands on foot, learning the names of the rivers
              from his grandmother and the nuances of the path from his uncles.
            </p>
            <p className="mt-4 text-lg text-muted-foreground whitespace-pre-line">
              He founded Indlela Adventures to turn that knowledge into a livelihood for his
              community, and to give visitors a way to see this coastline through the eyes of the
              people who belong to it.&nbsp;{"\n\n"}
              Siya takes great care to teach others the skills of guiding and conservation. Whether
              you're guided by Siya or one of his team, you'll be in excellent hands.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Users, label: "Born on the coast" },
                { icon: Shield, label: "Wilderness trained" },
                { icon: Leaf, label: "Conservation lead" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-3 text-sm">
                  <t.icon className="h-4 w-4 text-[color:var(--forest)]" />
                  <span>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--sand)]/40 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[color:var(--forest)]">
              The Community
            </span>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Indlela — the path we choose to share.
            </h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground">
              <p>
                For decades the villages of the Wild Coast have fought to protect our land. Multinational mining companies promise jobs in exchange for the dunes, the rivers, and the graves of our ancestors. This is not the path we choose.
              </p>
              <p>
                Indlela means "the path". Many years ago, our community decided to share the path through our land – on our terms. Every booking is a vote for that path.
              </p>
              <p>
                When you walk with us, you stay in homesteads built by our families, eat food
                 grown in our gardens, and pay cooks and guides from our villages. The
                money does not leave. The land stays whole.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-muted">
              <img
                src={villageImage.url}
                alt="Village and coastline"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-3xl bg-muted">
                <img
                  src={cowsImage.url}
                  alt="Community life"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-3xl bg-muted">
                <img
                  src={trailImage.url}
                  alt="On the trail"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
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