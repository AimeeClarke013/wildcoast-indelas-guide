import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Indlela Adventures" },
      { name: "description", content: "Answers to common questions about Wild Coast hikes: safety, fitness, water, community support, gear, and emergencies." },
      { property: "og:title", content: "FAQs — Indlela Adventures" },
      { property: "og:description", content: "Everything you need to know before booking a Wild Coast hike." },
    ],
  }),
  component: Faqs,
});

const faqs = [
  {
    q: "Is the Wild Coast safe to hike?",
    a: "Yes. The routes are well maintained, and our guides are trained to read the tides so that all river crossings are as safe as possible. We stick to community-known trails, sleep in homesteads or eco-lodges, and maintain regular check-ins with village partners along the way. The community values your business, and is committed to keeping you safe.",
  },
  {
    q: "What level of fitness do I need?",
    a: "If you can comfortably walk 10 km a day on slightly undulating terrain with a 10 kg backpack, you'll be fine on most routes. Good shoes and a comfortable bag are the most important factors.",
  },
  {
    q: "Where does drinking water come from?",
    a: "Drinking water is sourced from rainwater and from local streams – all safe to drink. However, people with sensitive stomachs (or those who don't want to risk it) are advised to bring water purification tablets.",
  },
  {
    q: "How exactly does my booking support the community?",
    a: "Almost everything you pay — accommodation, food, porters, guides, transfers — flows directly to families and small businesses in the villages you walk through. There are no external shareholders. Surplus is reinvested into trail maintenance, training and conservation work.",
  },
  {
    q: "Do I carry all my gear, or are porters available?",
    a: "You only need to carry a daypack with water, snacks, sunscreen and a layer. Local porters move the main luggage between overnight stops. This keeps the hike comfortable and creates steady income within the community.",
  },
  {
    q: "What happens in an emergency?",
    a: "Every guide carries a comms device, a first-aid kit and a documented emergency plan. We coordinate with village partners and have pre-arranged evacuation points along the entire coast. Travel insurance covering hiking is a booking requirement.",
  },
];

function Faqs() {
  return (
    <SiteLayout>
      <section className="bg-[color:var(--forest-deep)] text-[color:var(--primary-foreground)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--sand)]">
            <HelpCircle className="h-4 w-4" /> FAQs
          </span>
          <h1 className="mt-3 max-w-3xl text-5xl font-black tracking-tight sm:text-6xl">
            Good questions, honestly answered.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            The most common things hikers want to know before walking the Wild Coast with us.&nbsp;
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Accordion type="single" collapsible className="w-full divide-y divide-border rounded-2xl border border-border bg-card">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-0 px-6"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-3xl bg-[color:var(--sand)]/50 p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-bold">Still have a question?</h3>
              <p className="mt-1 text-sm text-muted-foreground">Ask us anything. We will reply as soon as cellphone signal allows.</p>
            </div>
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-[color:var(--primary-foreground)]"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}