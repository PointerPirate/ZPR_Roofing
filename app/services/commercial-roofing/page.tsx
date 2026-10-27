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
import { ArrowRight, Phone, Building2, FileText, ShieldCheck, CloudRain } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site-data";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Commercial Roofing in Illinois & Wisconsin | ZPR Roofing",
  description:
    "Flat and low-slope commercial roofing from a licensed, family-owned crew. TPO and EPDM systems installed and repaired across Northern Illinois and Southern Wisconsin.",
  alternates: { canonical: "/services/commercial-roofing" },
  openGraph: {
    title: "Commercial Roofing in Illinois & Wisconsin | ZPR Roofing",
    description:
      "Flat and low-slope commercial roofing from a licensed, family-owned crew. TPO and EPDM systems installed and repaired.",
    url: "/services/commercial-roofing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Roofing in Illinois & Wisconsin | ZPR Roofing",
    description:
      "Flat and low-slope commercial roofing from a licensed, family-owned crew across Northern Illinois and Southern Wisconsin.",
  },
};

const FAQS = [
  {
    q: "What commercial roof systems do you install?",
    a: "We install and repair TPO and EPDM single-ply membrane systems, which are the two most common choices for flat and low-slope commercial roofs. We also work with low-slope asphalt systems. Your building, its slope, and how long you plan to own it all factor into which system is the right fit.",
  },
  {
    q: "Are you licensed to do commercial roofing in both states?",
    a: "Yes. Our Illinois roofing license is unlimited, which covers both residential and commercial work, and we hold a Wisconsin roofing license for residential and commercial roofing. The same in-house crew that handles our residential work handles our commercial jobs.",
  },
  {
    q: "Can you inspect a flat roof and provide a written report?",
    a: "Yes. We can inspect the roof, photograph what we find, and give you a written scope of work that explains the roof's condition and the recommended repair or replacement path. Owners use these reports for budgeting, insurance claims, and property transactions.",
  },
  {
    q: "How disruptive is a commercial reroof?",
    a: "We plan the work so your business can keep running. For most single-ply replacements, that means staging the tear-off and install one section at a time, protecting the interior from weather, and scheduling the loudest work outside peak hours. We walk through the plan with you before we start.",
  },
];

const WHAT_WE_HANDLE = [
  {
    icon: Building2,
    title: "TPO single-ply",
    description: "Heat-welded seams, reflective white surface, long service life on flat and low-slope roofs.",
  },
  {
    icon: ShieldCheck,
    title: "EPDM single-ply",
    description: "Durable rubber membrane that handles the Midwest freeze-thaw cycle year after year.",
  },
  {
    icon: CloudRain,
    title: "Repairs & recoats",
    description: "Leak tracing, seam repairs, flashing details, and coatings to extend the life of an existing roof.",
  },
  {
    icon: FileText,
    title: "Inspections & reports",
    description: "Written scopes with photos for budgeting, insurance claims, and property transactions.",
  },
];

export default function CommercialRoofingPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Commercial Roofing", href: "/services/commercial-roofing" },
          ]),
          serviceSchema("Commercial Roofing", "Commercial roofing in Northern Illinois and Southern Wisconsin"),
          faqSchema(FAQS),
        ]}
      />
      <Header />

      <section className="pt-32 pb-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Commercial Roofing", href: "/services/commercial-roofing" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              <Building2 className="w-3.5 h-3.5" />
              Flat and low-slope systems
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold text-balance mb-6">
              Commercial Roofing
            </h1>
            <p className="text-lg text-muted-foreground text-balance mb-8">
              Flat and low-slope roof systems installed, repaired, and inspected by a licensed, family-owned crew. Our
              Illinois license is unlimited, which covers both residential and commercial work, and we are licensed in
              Wisconsin as well.
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

      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary border border-border">
              <Image
                src="/projects/low-slope-before.jpg"
                alt="Low-slope roof during tear-off"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/90 text-xs font-medium text-foreground backdrop-blur">
                Before
              </span>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary border border-border">
              <Image
                src="/projects/low-slope-after.jpg"
                alt="Finished low-slope roof"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-xs font-medium text-primary-foreground backdrop-blur">
                After
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4 italic">
            Before and after: a residential low-slope roof installation.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-6 text-balance">
            Built around the way your building actually works
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Commercial roofs are a different animal from a residential pitch. Water does not just run off, it has to be
              moved. Seams, flashing, drains, and parapet details all have to work together, and when one of them starts
              to fail, the leak often does not show up where the water is actually getting in. We trace the real source
              before we recommend anything.
            </p>
            <p>
              For replacements, we install TPO and EPDM single-ply membrane systems, which cover the vast majority of
              flat and low-slope commercial roofs in our area. For existing roofs with life left in them, repair and
              recoating is often the better value. Either way, you get a written scope with photos and plain-English
              recommendations.
            </p>
            <p>
              Our in-house crew does the work. No subcontractors, no middlemen, no finger pointing if something needs to
              be revisited.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-balance">
              What we handle on commercial jobs
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHAT_WE_HANDLE.map((item) => {
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
            Commercial roofing FAQs
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
            Have a flat or low-slope roof to talk about?
          </h2>
          <p className="text-lg text-background/70 mb-8 max-w-xl mx-auto">
            Get a free estimate or call {BUSINESS.phone} to walk through your building.
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
