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
    a: "A percentage of every hiking fee goes directly into community development and conservation initiatives. At every part of your journey, you support local employment: shuttle, guides, meals, ferries – we choose local every time.\n\n",
  },
  {
    q: "How much do I have to carry?",
    a: "With smart packing, a 30L bag (7-10 kgs) is sufficient. You only need to carry clothes, toiletries and your lunch each day (supplied by your hosts from the night before). A comfortable, adjustable hiking bag is advised, with a 1.5L water bladder.\u00a0",
  },
  {
    q: "What happens in an emergency?",
    a: "All overnight accommodations are accessible by car. If emergency care is needed, a local villager can take you to the nearest hospital. However, keep in mind that expert care could be hours away. Hikers should be in good physical condition and carry all necessary medication with them. Take special care if you have severe allergies or a chronic condition.\n\n",
  },
  {
    q: "Is slack packing available?",
    a: "Slack packing is not available. However, if you prefer to hike without a bag, we can book you into our eco-lodge or one of our premium home-stays, where you can stay for a few days and enjoy day-trips. At special request, we could also arrange a porter (if, for example, there are only 1 or 2 people in a large group who are unable to carry their bag). Speak to your guide about options.",
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