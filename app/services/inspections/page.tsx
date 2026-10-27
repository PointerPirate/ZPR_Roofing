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
import { ArrowRight, Phone, ClipboardCheck, Camera, FileText, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site-data";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Roof Inspections in Illinois & Wisconsin | ZPR Roofing",
  description:
    "Comprehensive roof inspections with detailed written reports and photos. For home purchases, insurance claims, storm damage, and routine maintenance.",
  alternates: { canonical: "/services/inspections" },
  openGraph: {
    title: "Roof Inspections in Illinois & Wisconsin | ZPR Roofing",
    description:
      "Comprehensive roof inspections with detailed written reports and photos. For home purchases, insurance claims, and routine maintenance.",
    url: "/services/inspections",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Inspections in Illinois & Wisconsin | ZPR Roofing",
    description:
      "Comprehensive roof inspections with detailed written reports and photos.",
  },
};

const INCLUDES = [
  { icon: ClipboardCheck, title: "Full exterior assessment", description: "Shingles, flashing, vents, valleys, eaves, and the roof surface." },
  { icon: Camera, title: "Photo documentation", description: "Close-up photos of anything we find, with scale references where it matters." },
  { icon: FileText, title: "Written report", description: "A plain-language scope that explains condition, concerns, and recommended next steps." },
  { icon: Clock, title: "Fast turnaround", description: "Most inspections scheduled within days, with the written report back the same week." },
];

const FAQS = [
  {
    q: "When should I schedule a roof inspection?",
    a: "The common ones are before buying a home, after a major storm, when filing an insurance claim, and as a routine check every two or three years. If your roof is more than 15 years old or showing visible wear, an inspection will tell you how much life is left.",
  },
  {
    q: "What is included in the written report?",
    a: "Overall condition, remaining service life estimate, specific findings with photos, and a recommended path (minor repair, maintenance, planning for replacement). It's written in plain English, not jargon, so you can hand it to a buyer, seller, or insurance adjuster.",
  },
  {
    q: "Do you charge for inspections?",
    a: "For most repair and replacement estimates, no. For standalone inspection reports — like pre-purchase or insurance documentation — there may be a small fee that we quote up front. We will tell you before we schedule.",
  },
];

const GALLERY = [
  {
    image: "/projects/repair-ridge.jpg",
    title: "Hip roof inspection",
    description: "A hip roof photographed from the roof edge during an inspection.",
  },
  {
    image: "/projects/repair-inspection-hip.jpg",
    title: "Ridge and hip detail",
    description: "Ridge and hip lines on a shingle roof during an inspection.",
  },
];

export default function InspectionsPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Roof Inspections", href: "/services/inspections" },
          ]),
          serviceSchema("Roof Inspections", "Roof inspections in Northern Illinois and Southern Wisconsin"),
          faqSchema(FAQS),
        ]}
      />
      <Header />

      <section className="pt-32 pb-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Roof Inspections", href: "/services/inspections" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              <ClipboardCheck className="w-3.5 h-3.5" />
              Honest, documented, in writing
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold text-balance mb-6">
              Roof Inspections
            </h1>
            <p className="text-lg text-muted-foreground text-balance mb-8">
              A straight answer on the condition of your roof, backed by photos and a written report. For home
              purchases, insurance claims, storm damage, and routine checks.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-7">
                  Schedule an Inspection
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
              src="/projects/inspections-hero.jpg"
              alt="Roof-level view of a hip roof during an inspection"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4 italic">
            A hip roof photographed from the roof edge during an inspection.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-balance">
              What an inspection includes
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
              From recent inspections
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {GALLERY.map((p) => (
              <div key={p.image} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-background border border-border mb-3">
                  <Image
                    src={p.image}
                    alt={p.description}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
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
            Inspection FAQs
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
            Want to know what your roof actually needs?
          </h2>
          <p className="text-lg text-background/70 mb-8 max-w-xl mx-auto">
            Schedule an inspection and get a written report you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 bg-background text-foreground hover:bg-background/90">
                Schedule an Inspection
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
