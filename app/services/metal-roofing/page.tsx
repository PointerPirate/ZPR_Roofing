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
import { ArrowRight, Phone, Layers, Wind, Snowflake, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site-data";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Metal Roofing in Illinois & Wisconsin | ZPR Roofing",
  description:
    "Standing seam metal roofs installed by a family-owned, in-house crew. Built for farmhouses, acreage homes, and modern builds across Northern Illinois and Southern Wisconsin.",
  alternates: { canonical: "/services/metal-roofing" },
  openGraph: {
    title: "Metal Roofing in Illinois & Wisconsin | ZPR Roofing",
    description:
      "Standing seam metal roofs installed by a family-owned, in-house crew. Built for farmhouses, acreage homes, and modern builds.",
    url: "/services/metal-roofing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metal Roofing in Illinois & Wisconsin | ZPR Roofing",
    description:
      "Standing seam metal roofs installed by a family-owned, in-house crew across Northern Illinois and Southern Wisconsin.",
  },
};

const FAQS = [
  {
    q: "How long does a standing seam metal roof last?",
    a: "Properly installed metal roofs commonly last 40 to 70 years, depending on the panel system, coating, and climate. That is two to three times the service life of a typical asphalt shingle roof, which is why many homeowners who plan to stay in their home long term consider metal.",
  },
  {
    q: "Is metal roofing worth the higher upfront cost?",
    a: "It depends on how long you plan to stay in the home and the look you want. Metal costs more up front than asphalt shingles, but it lasts longer and handles snow and wind well. We will walk you through both options honestly during your estimate so you can make the right call for your situation.",
  },
  {
    q: "Is a metal roof noisy in the rain?",
    a: "No, not when it is installed over a solid deck with proper underlayment, which is how we install them. That assembly muffles the sound just like a shingle roof does. The old barn-roof sound comes from metal panels installed directly over open framing with no deck underneath.",
  },
  {
    q: "Do you install metal roofs on commercial buildings?",
    a: "Yes. Our Illinois license is unlimited, which covers both residential and commercial work, and we are licensed in Wisconsin as well. Call us to talk through your building.",
  },
];

const WHY_METAL = [
  {
    icon: Clock,
    title: "Decades of service life",
    description: "Properly installed, a standing seam metal roof commonly outlasts asphalt shingles by two to three times.",
  },
  {
    icon: Snowflake,
    title: "Built for Midwest winters",
    description: "Sheds snow, resists ice damming, and holds up to repeated freeze-thaw cycles.",
  },
  {
    icon: Wind,
    title: "Wind resistance",
    description: "Interlocked seams and concealed fasteners stand up to the open-wind exposure on acreage properties.",
  },
  {
    icon: Layers,
    title: "Low maintenance",
    description: "No granule loss, no curling. An occasional check of the flashing and sealants is usually all it needs.",
  },
];

export default function MetalRoofingPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Metal Roofing", href: "/services/metal-roofing" },
          ]),
          serviceSchema("Metal Roofing", "Metal roofing in Northern Illinois and Southern Wisconsin"),
          faqSchema(FAQS),
        ]}
      />
      <Header />

      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Metal Roofing", href: "/services/metal-roofing" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              <Layers className="w-3.5 h-3.5" />
              A core specialty
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold text-balance mb-6">
              Standing Seam Metal Roofing
            </h1>
            <p className="text-lg text-muted-foreground text-balance mb-8">
              Metal roofs sit at the long end of the service-life range, and they suit the open exposure of farmhouse
              and acreage properties well. We install standing seam systems across Northern Illinois and Southern
              Wisconsin with our own in-house crew.
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
            Why homeowners here choose metal
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              A lot of the homes in our area are farmhouses, acreage properties, and ranch-style houses with wide,
              low-slope roof planes. Those roofs catch the full force of wind in open country, hold snow all winter, and
              go through the Midwest freeze-thaw cycle year after year. Standing seam metal was designed for that kind
              of exposure. Interlocking seams, concealed fasteners, and a surface that sheds snow instead of trapping
              it.
            </p>
            <p>
              Metal is more expensive up front than asphalt shingles. That is the honest trade-off. In return, you get a
              roof that commonly lasts two to three times as long and needs very little attention in between. If you
              plan to stay in the home long term, the math usually works in metal's favor.
            </p>
            <p>
              We install standing seam systems and will walk you through panel options, color, trim details, and what
              each one costs over time. If a shingle roof is actually the better fit for your home or budget, we will
              say so.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-balance">
              What metal gives you
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_METAL.map((item) => {
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
            Metal roofing FAQs
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
            Thinking about metal for your roof?
          </h2>
          <p className="text-lg text-background/70 mb-8 max-w-xl mx-auto">
            Get a free estimate and we will walk through metal versus shingles honestly, based on your home.
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
