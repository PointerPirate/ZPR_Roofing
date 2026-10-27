import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrustBar } from "@/components/trust-bar";
import { JsonLd } from "@/components/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Phone, Wrench, Shield, Clock, FileCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site-data";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Roof Repair in Illinois & Wisconsin | ZPR Roofing",
  description:
    "Roof repair by a family-owned, in-house crew. Leaks, damaged shingles, flashing, and vents fixed at the source across Northern Illinois and Southern Wisconsin. Free estimates.",
  alternates: { canonical: "/services/roof-repair" },
  openGraph: {
    title: "Roof Repair in Illinois & Wisconsin | ZPR Roofing",
    description:
      "Roof repair by a family-owned, in-house crew. Leaks, damaged shingles, flashing, and vents fixed at the source.",
    url: "/services/roof-repair",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Repair in Illinois & Wisconsin | ZPR Roofing",
    description:
      "Roof repair by a family-owned, in-house crew across Northern Illinois and Southern Wisconsin.",
  },
};

const INCLUDES = [
  { icon: Wrench, title: "Full inspection first", description: "We find the real source of the leak before we recommend anything." },
  { icon: Shield, title: "Quality materials", description: "Shingles, flashing, and sealants matched to your existing roof." },
  { icon: Clock, title: "Fast turnaround", description: "Most repairs completed within one to two days of scheduling." },
  { icon: FileCheck, title: "Workmanship warranty", description: "We back our repair work in writing." },
];

const GALLERY = [
  {
    image: "/projects/repair-closeup.jpg",
    title: "Ridge seam repair",
    description: "Checking a ridge seam during a roof repair.",
  },
  {
    image: "/projects/repair-decking-damage.jpg",
    title: "Water-damaged decking",
    description: "Water-damaged decking found during a repair.",
  },
  {
    image: "/projects/repair-progress.jpg",
    title: "Partial repair in progress",
    description: "A partial roof repair in progress.",
  },
];

const FAQS = [
  {
    q: "How do you find the source of a roof leak?",
    a: "Water often travels along framing before it drips, so the stain on your ceiling may not be right below the leak. We inspect the roof surface, flashing, and vents, and check the attic when needed, to find the true source instead of guessing.",
  },
  {
    q: "Do you charge for roof repair estimates?",
    a: "No. Repair estimates are free. We inspect, photograph what we find, and give you a written scope and price before any work begins.",
  },
  {
    q: "Can you repair just one section without replacing the whole roof?",
    a: "Often, yes, if the surrounding roof is in good shape. We'll match materials as closely as possible and tell you honestly if a partial repair will actually hold or if a full replacement is the better value.",
  },
];

export default function RoofRepairPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Roof Repair", href: "/services/roof-repair" },
          ]),
          serviceSchema("Roof Repair", "Roof repair in Northern Illinois and Southern Wisconsin"),
          faqSchema(FAQS),
        ]}
      />
      <Header />

      <section className="pt-32 pb-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Roof Repair", href: "/services/roof-repair" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              <Wrench className="w-3.5 h-3.5" />
              Fixed at the source
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold text-balance mb-6">
              Roof Repair
            </h1>
            <p className="text-lg text-muted-foreground text-balance mb-8">
              Leaks, damaged shingles, worn flashing, and failed vents fixed at the source by our own in-house crew.
              Most repairs are completed within one to two days of scheduling.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-7">
                  Get a Free Repair Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href={BUSINESS.phoneHref}>
                <Button size="lg" variant="outline" className="rounded-full px-7 bg-transparent">
                  <Phone className="w-4 h-4 mr-2" />
                  {BUSINESS.phone}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden bg-secondary border border-border">
            <Image
              src="/projects/roof-repair-hero.jpg"
              alt="Finished section of new shingles after a roof repair"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4 italic">A finished partial roof repair.</p>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-balance">
              What's included
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {INCLUDES.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 rounded-2xl bg-secondary/50 border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-balance">
              Recent repair projects
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {GALLERY.map((p) => (
              <div key={p.image} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-background border border-border mb-3">
                  <Image
                    src={p.image}
                    alt={p.description}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-10 text-center text-balance">
            Roof repair FAQs
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 bg-secondary/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-medium pr-4">{f.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-6 bg-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-semibold text-background mb-4 text-balance">
            Got a leak or damaged roof?
          </h2>
          <p className="text-lg text-background/70 mb-8 max-w-xl mx-auto">
            Call {BUSINESS.phone} or request a free estimate — we'll inspect first and tell you honestly what the roof
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 bg-background text-foreground hover:bg-background/90">
                Get a Free Estimate
              </Button>
            </Link>
            <Link href={BUSINESS.phoneHref}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-background/30 text-background hover:bg-background/10 bg-transparent"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call {BUSINESS.phone}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
