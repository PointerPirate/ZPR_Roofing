import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DontSeeYourTown } from "@/components/dont-see-your-town";
import { TrustBar } from "@/components/trust-bar";
import { JsonLd } from "@/components/json-ld";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { CITIES_IL, CITIES_WI, ALSO_SERVING_IL, ALSO_SERVING_WI, BUSINESS } from "@/lib/site-data";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Roofing Service Areas in Illinois & Wisconsin | ZPR Roofing",
  description:
    "ZPR Roofing serves Rockford, Belvidere, Loves Park, Janesville, Beloit, Madison and nearby towns in Illinois and Wisconsin. Get a free estimate.",
  alternates: { canonical: "/areas-we-serve" },
  openGraph: {
    title: "Roofing Service Areas in Illinois & Wisconsin | ZPR Roofing",
    description:
      "ZPR Roofing serves Rockford, Belvidere, Loves Park, Janesville, Beloit, Madison and nearby towns in Illinois and Wisconsin. Get a free estimate.",
    url: "/areas-we-serve",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Service Areas in Illinois & Wisconsin | ZPR Roofing",
    description:
      "ZPR Roofing serves Rockford, Belvidere, Loves Park, Janesville, Beloit, Madison and nearby towns in Illinois and Wisconsin.",
  },
};

const FAQS = [
  {
    q: "What areas does ZPR Roofing serve?",
    a: "We serve homeowners and businesses within about 60 miles of Rockford, Illinois. That covers Northern Illinois and southern Wisconsin, as far north as Madison. Our city pages list the main towns we work in, and we serve many smaller towns nearby.",
  },
  {
    q: "Are you licensed to roof in both Illinois and Wisconsin?",
    a: "Yes. ZPR Roofing holds an unlimited Illinois roofing license, which covers residential and commercial work, and a Wisconsin license for residential and commercial roofing.",
  },
  {
    q: "What if my town is not listed on your service area pages?",
    a: "Call us at (815) 904-9777 or use the form on this page. If your address is within our service area, we will schedule an estimate.",
  },
];

function CityTile({
  name,
  state,
  tileText,
  href,
}: {
  name: string;
  state: string;
  tileText: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-xl">
            {name}, {state}
          </h3>
        </div>
        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
      </div>
      <p className="text-sm text-muted-foreground">{tileText}</p>
    </Link>
  );
}

export default function AreasWeServePage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Service Areas", href: "/areas-we-serve" },
          ]),
          faqSchema(FAQS),
        ]}
      />
      <Header />

      <section className="pt-32 pb-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex justify-center">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Service Areas", href: "/areas-we-serve" },
              ]}
            />
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Serving Northern Illinois & Southern Wisconsin
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold text-balance mb-6">
              Roofing Services in Northern Illinois and Southern Wisconsin
            </h1>
            <p className="text-lg text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
              ZPR Roofing is a family-owned roofing company based in Rockford, Illinois. We serve homeowners and
              businesses within about 60 miles of Rockford, from Northern Illinois through southern Wisconsin, as far
              north as Madison.
            </p>
            <p className="text-lg text-muted-foreground text-balance mb-10 max-w-3xl mx-auto">
              Our in-house crew handles roof repair, roof replacement, metal roofing, storm damage, and commercial
              roofing. Find your city below to see how we can help.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8">
                Get a Free Estimate
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Illinois</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-3">
              Serving Rockford and the surrounding towns
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Rockford is our home base, and we work in the towns around it every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CITIES_IL.map((city) => (
              <CityTile
                key={city.slug}
                name={city.name}
                state={city.state}
                tileText={city.tileText}
                href={`/areas-we-serve/${city.slug}`}
              />
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-secondary/50">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Also serving:</span>{" "}
              {ALSO_SERVING_IL.join(", ")}.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Wisconsin</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-3">
              Serving southern Wisconsin, as far north as Madison
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              We are licensed in Wisconsin and serve Beloit, Evansville, Janesville, Madison, and the towns between
              them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CITIES_WI.map((city) => (
              <CityTile
                key={city.slug}
                name={city.name}
                state={city.state}
                tileText={city.tileText}
                href={`/areas-we-serve/${city.slug}`}
              />
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-background border border-border">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Also serving:</span>{" "}
              {ALSO_SERVING_WI.join(", ")}.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-3 text-balance">
              Service Area FAQs
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 bg-background"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-medium pr-4">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <DontSeeYourTown />

      <section className="py-20 px-6 bg-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-semibold text-background mb-4 text-balance">
            Ready for a straight answer about your roof?
          </h2>
          <p className="text-lg text-background/70 mb-8 max-w-xl mx-auto">
            Get a free estimate or call {BUSINESS.phone}.
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
