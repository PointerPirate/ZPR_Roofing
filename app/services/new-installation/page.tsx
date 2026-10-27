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
import { ArrowRight, Phone, Home, Award, Users, CalendarCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site-data";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Roof Replacement in Illinois & Wisconsin | ZPR Roofing",
  description:
    "Full roof replacements by a family-owned, in-house crew. Asphalt shingle, metal, and specialty systems installed across Northern Illinois and Southern Wisconsin. Free estimates.",
  alternates: { canonical: "/services/new-installation" },
  openGraph: {
    title: "Roof Replacement in Illinois & Wisconsin | ZPR Roofing",
    description:
      "Full roof replacements by a family-owned, in-house crew. Asphalt shingle, metal, and specialty systems installed across Northern Illinois and Southern Wisconsin.",
    url: "/services/new-installation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Replacement in Illinois & Wisconsin | ZPR Roofing",
    description:
      "Full roof replacements by a family-owned, in-house crew across Northern Illinois and Southern Wisconsin.",
  },
};

const FAQS = [
  {
    q: "How do I know whether I need a repair or a full replacement?",
    a: "It comes down to the roof's age, how far the damage has spread, and the condition of the decking underneath. A few damaged shingles can usually be repaired. Widespread wear, repeated leaks, or storm damage across the whole roof usually means replacement. We will inspect, tell you honestly which one makes sense, and explain why.",
  },
  {
    q: "What roofing materials do you install?",
    a: "Architectural asphalt shingles, standing seam metal, and specialty shingles like F-Wave. For flat and low-slope sections, we work with TPO and EPDM single-ply systems. We help you pick the material that fits the home, the look you want, and the budget.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most residential roof replacements take one to three days, depending on size, pitch, complexity, and weather. We walk you through a specific timeline during your estimate and give you a start date, not a window.",
  },
  {
    q: "Do you handle the tear-off and cleanup?",
    a: "Yes. A full replacement means tearing off the old roof down to the decking, inspecting what we find, replacing any damaged wood, installing underlayment and flashing, and then the new roof system. We use tarps to protect landscaping, run magnetic sweeps for nails, and leave the yard cleaner than we found it.",
  },
];

const PAIRS = [
  {
    before: "/projects/decking-before.jpg",
    after: "/projects/shingle-after-1.jpg",
    beforeAlt: "Worn asphalt shingle roof before replacement",
    afterAlt: "New architectural shingle roof",
    caption: "Before and after: a shingle roof replacement.",
  },
  {
    before: "/projects/chimney-before.jpg",
    after: "/projects/chimney-after.jpg",
    beforeAlt: "Worn chimney flashing and shingles before replacement",
    afterAlt: "New shingles and chimney flashing after replacement",
    caption: "Before and after: old chimney flashing replaced with new flashing.",
  },
  {
    before: "/projects/decking-damage.jpg",
    after: "/projects/decking-after.jpg",
    beforeAlt: "Damaged wood found at the roof deck during tear-off",
    afterAlt: "New underlayment installed over sound decking",
    caption:
      "Damaged wood found during tear-off. We replace damaged decking before the new roof goes on.",
  },
];

const INCLUDES = [
  { icon: Home, title: "Full tear-off", description: "Old roof removed down to the decking, so hidden damage is found and fixed before the new roof goes on." },
  { icon: Award, title: "Quality materials", description: "Architectural asphalt, standing seam metal, or specialty shingles — chosen to fit the home and budget." },
  { icon: Users, title: "In-house crew", description: "The same crew that inspects your roof installs it. No subcontractors." },
  { icon: CalendarCheck, title: "Written scope", description: "You get a clear scope of work with photos, timing, and pricing before anything starts." },
];

export default function RoofReplacementPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Roof Replacement", href: "/services/new-installation" },
          ]),
          serviceSchema("Roof Replacement", "Roof replacement in Northern Illinois and Southern Wisconsin"),
          faqSchema(FAQS),
        ]}
      />
      <Header />

      <section className="pt-32 pb-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Roof Replacement", href: "/services/new-installation" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              <Home className="w-3.5 h-3.5" />
              Full roof replacement
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold text-balance mb-6">
              Roof Replacement
            </h1>
            <p className="text-lg text-muted-foreground text-balance mb-8">
              A full replacement means tearing the old roof off down to the decking, fixing anything we find under
              there, and installing a system that is right for the home. Our in-house crew does the work from start to
              finish.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-7">
                  Get a Free Estimate
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

      <TrustBar />

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-6 text-balance">
            What a full replacement actually involves
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              A reroof is only as good as what is underneath it. We tear the old roof off, inspect the decking, and
              replace any damaged wood before anything new goes down. That one step is the difference between a roof
              that holds for its full service life and a roof that develops the same problems again in a few years.
            </p>
            <p>
              From there, the new system goes together in the right order: ice-and-water shield at the eaves and
              valleys, synthetic underlayment, properly cut flashing at chimneys and walls, drip edge, and then your
              chosen roof surface. We take photos as we go, so you see what was done, not just the finished result.
            </p>
            <p>
              For material, most of our shingle replacements use architectural asphalt. Standing seam metal is a core
              specialty for farmhouses and acreage properties. For a distinctive look that still handles the Midwest
              weather, we also install F-Wave specialty shingles.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-balance">
              Recent replacements
            </h2>
          </div>
          <div className="space-y-10">
            {PAIRS.map((pair, i) => (
              <div key={i}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-background border border-border">
                    <Image
                      src={pair.before}
                      alt={pair.beforeAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/90 text-xs font-medium text-foreground backdrop-blur">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-background border border-border">
                    <Image
                      src={pair.after}
                      alt={pair.afterAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-xs font-medium text-primary-foreground backdrop-blur">
                      After
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center mt-3 italic">{pair.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary border border-border">
              <Image
                src="/projects/fwave-chimney.jpg"
                alt="Finished specialty shingle roof around a stone chimney"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Specialty Shingles</p>
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold mb-4">
                F-Wave: the look of slate or cedar, without the weight or maintenance
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                F-Wave specialty shingles are a modern alternative to natural slate and cedar, with the appearance of
                either but much better impact and weather resistance. We install them on homes where the owner wants a
                distinctive roof that is still built for Midwest storms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-secondary/30">
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
                <div key={item.title} className="p-6 rounded-2xl bg-background border border-border">
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

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-10 text-center text-balance">
            Roof replacement FAQs
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
            Thinking about a new roof?
          </h2>
          <p className="text-lg text-background/70 mb-8 max-w-xl mx-auto">
            Get a free, no-pressure estimate. We will inspect first and give you a straight answer.
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
