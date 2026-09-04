import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mail, Phone, ArrowRight, Radio, CalendarDays, Users } from "lucide-react";
import { useState } from "react";

// WhatsApp destination for inquiry submissions.
const WHATSAPP_NUMBER = "+27710084989";
const CONTACT_PHONE = "+27 71 008 four nine eight nine";
const CONTACT_EMAIL = "indlelaadventures@gmail.com";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Plan Your Hike — Contact Indlela Adventures" },
      { name: "description", content: "Start planning your Wild Coast hike. Tell us about your group, dates, and preferred package and we'll get back to you as soon as signal allows." },
      { property: "og:title", content: "Plan Your Hike — Contact Indlela Adventures" },
      { property: "og:description", content: "Plan your Wild Coast hiking tour with Indlela Adventures." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    package: "traditional",
    nights: "",
    timeOfYear: "",
    people: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `Hello! I'm interested in a Wild Coast hike with Indlela Adventures.`,
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `WhatsApp: ${form.whatsapp}`,
      `Preferred package: ${form.package === "traditional" ? "Traditional" : "Comfort"}`,
      `Number of nights: ${form.nights}`,
      `Time of year: ${form.timeOfYear}`,
      `Number of people: ${form.people}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <SiteLayout>
      <section className="bg-[color:var(--forest-deep)] text-[color:var(--primary-foreground)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--sand)]">
            Plan your hike
          </span>
          <h1 className="mt-3 max-w-3xl text-5xl font-black tracking-tight sm:text-6xl">
            Let's plan your Wild Coast walk.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Tell us who you are, when you'd like to travel, and what kind of experience you're after.
            We'll reply as soon as cellphone signal allows.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your full name"
                    required
                    maxLength={100}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@example.com"
                    required
                    maxLength={255}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp number</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={form.whatsapp}
                    onChange={(e) => setForm((f) => ({ ...f, whatsapp: e.target.value }))}
                    placeholder="+27 82 123 4567"
                    required
                    maxLength={40}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="people">Number of people</Label>
                  <Input
                    id="people"
                    type="text"
                    inputMode="numeric"
                    value={form.people}
                    onChange={(e) => setForm((f) => ({ ...f, people: e.target.value }))}
                    placeholder="e.g. 8"
                    required
                    maxLength={20}
                  />
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <Label>Preferred package</Label>
                <RadioGroup
                  value={form.package}
                  onValueChange={(value) => setForm((f) => ({ ...f, package: value }))}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-4 hover:bg-muted/50 has-[[data-state=checked]]:border-[color:var(--forest)] has-[[data-state=checked]]:bg-[color:var(--forest)]/5">
                    <RadioGroupItem value="traditional" id="traditional" />
                    <div>
                      <div className="font-semibold">Traditional</div>
                      <div className="text-sm text-muted-foreground">R1,450 / night per person</div>
                    </div>
                  </label>
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-4 hover:bg-muted/50 has-[[data-state=checked]]:border-[color:var(--forest)] has-[[data-state=checked]]:bg-[color:var(--forest)]/5">
                    <RadioGroupItem value="comfort" id="comfort" />
                    <div>
                      <div className="font-semibold">Comfort</div>
                      <div className="text-sm text-muted-foreground">R1,800 / night per person</div>
                    </div>
                  </label>
                </RadioGroup>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nights">Number of nights</Label>
                  <Input
                    id="nights"
                    value={form.nights}
                    onChange={(e) => setForm((f) => ({ ...f, nights: e.target.value }))}
                    placeholder="e.g. 5 nights"
                    required
                    maxLength={50}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeOfYear">Time of year</Label>
                  <Input
                    id="timeOfYear"
                    value={form.timeOfYear}
                    onChange={(e) => setForm((f) => ({ ...f, timeOfYear: e.target.value }))}
                    placeholder="e.g. April 2027"
                    required
                    maxLength={50}
                  />
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-[color:var(--sand)]/50 bg-[color:var(--sand)]/30 p-4">
                <div className="flex items-start gap-3">
                  <Radio className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--forest)]" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Cellphone signal is limited on the Wild Coast.</strong>{" "}
                    We promise to get back to you as soon as possible — usually within 24–48 hours when we're in range.
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                className="mt-6 w-full rounded-full bg-[color:var(--forest)] py-6 text-base font-semibold text-[color:var(--primary-foreground)] hover:bg-[color:var(--forest)]/90"
              >
                Send inquiry <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <div className="space-y-6">
              <div className="rounded-3xl border border-border bg-card p-8">
                <h2 className="text-2xl font-black tracking-tight">Contact us directly</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer to reach out yourself? Here's how to find us.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--ocean)] text-[color:var(--primary-foreground)]">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold">Email</div>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-sm text-muted-foreground hover:text-[color:var(--forest)]"
                      >
                        indlelaadventures at gmail dot com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--forest)] text-[color:var(--primary-foreground)]">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold">Cellphone / WhatsApp</div>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-[color:var(--forest)]"
                      >
                        {CONTACT_PHONE}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--sand)] text-[color:var(--forest-deep)]">
                      <CalendarDays className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold">Response time</div>
                      <p className="text-sm text-muted-foreground">24–48 hours when signal allows.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--ocean)] text-[color:var(--primary-foreground)]">
                      <Users className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold">Group size</div>
                       <p className="text-sm text-muted-foreground">From 2 hikers to 150+ school groups.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8">
                <h3 className="text-lg font-bold">Not sure what to book?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Read more about our routes and pricing, or browse the most common questions.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    to="/packages"
                    className="text-sm font-semibold text-[color:var(--forest)] hover:underline"
                  >
                    View hiking packages →
                  </Link>
                  <Link
                    to="/faqs"
                    className="text-sm font-semibold text-[color:var(--forest)] hover:underline"
                  >
                    Read FAQs →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
