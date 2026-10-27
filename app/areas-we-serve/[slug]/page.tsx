import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DontSeeYourTown } from "@/components/dont-see-your-town";
import { JsonLd } from "@/components/json-ld";
import { GoogleMapEmbed } from "@/components/google-map-embed";
import { GoogleReviews } from "@/components/google-reviews";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, getCity, getService, BUSINESS, type City } from "@/lib/site-data";
import { breadcrumbSchema, cityServiceSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return CITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const path = `/areas-we-serve/${city.slug}`;
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: city.metaTitle,
      description: city.metaDescription,
    },
  };
}

function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((p, i) => (
        <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
          {p}
        </p>
      ))}
    </>
  );
}

function PhotoBlock({ city }: { city: City }) {
  if (city.photo.kind === "pair") {
    return (
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary border border-border">
          <Image
            src={city.photo.before!}
            alt={`${city.photo.alt} — before`}
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
            src={city.photo.after!}
            alt={`${city.photo.alt} — after`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-xs font-medium text-primary-foreground backdrop-blur">
            After
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="relative aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden bg-secondary border border-border">
      <Image
        src={city.photo.src!}
        alt={city.photo.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 1024px"
        className="object-cover"
      />
    </div>
  );
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const linkedServices = city.services
    .map((s) => getService(s))
    .filter((s): s is NonNullable<ReturnType<typeof getService>> => Boolean(s));

  const nearby = city.nearby
    .map((n) => getCity(n))
    .filter((c): c is City => Boolean(c));

  const stateName = city.state === "IL" ? "Illinois" : "Wisconsin";

  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Service Areas", href: "/areas-we-serve" },
            { name: `${city.name}, ${city.state}`, href: `/areas-we-serve/${city.slug}` },
          ]),
          cityServiceSchema(city),
          faqSchema(city.faqs),
        ]}
      />
      <Header />

      <section className="pt-32 pb-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Service Areas", href: "/areas-we-serve" },
              { name: `${city.name}, ${city.state}`, href: `/areas-we-serve/${city.slug}` },
            ]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Serving {city.name}, {stateName}
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold text-balance mb-6">
              {city.h1}
            </h1>
            <p className="text-lg text-muted-foreground text-balance mb-8">
              Neighborhoods and landmarks we work in: {city.neighborhoods}
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
          <PhotoBlock city={city} />
          <p className="text-sm text-muted-foreground text-center mt-4 italic">{city.photo.caption}</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-6 text-balance">
            Roofing in {city.name}, built for the homes here
          </h2>
          <RichText text={city.copy.s1} />
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-6 text-balance">
            What our crew handles in {city.name}
          </h2>
          <RichText text={city.copy.s2} />

          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            {linkedServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-medium text-foreground">{svc.label}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-6 text-balance">
            {city.copy.s3Heading}
          </h2>
          <RichText text={city.copy.s3} />
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-6 text-balance">
            {city.copy.s4Heading}
          </h2>
          <RichText text={city.copy.s4} />
        </div>
      </section>

      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-6 text-center text-balance">
            Where we work in {city.name}
          </h2>
          <GoogleMapEmbed query={city.mapQuery} title={`Map of ${city.name}, ${city.state}`} />
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-10 text-center text-balance">
            Questions from {city.name} homeowners
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {city.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 bg-secondary/30"
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

      {nearby.length > 0 && (
        <section className="py-16 px-6 bg-secondary/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold mb-6 text-center">
              Nearby service areas
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/areas-we-serve/${n.slug}`}
                  className="group p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">
                      {n.name}, {n.state}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <Link href="/areas-we-serve" className="text-muted-foreground hover:text-foreground transition-colors">
                View all service areas
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                See our portfolio
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact us
              </Link>
            </div>
          </div>
        </section>
      )}

      <GoogleReviews
        heading={`Reviews from homeowners near ${city.name}`}
        subhead="Live Google reviews from across our Northern Illinois and Southern Wisconsin service area."
      />

      <DontSeeYourTown />

      <section className="py-20 px-6 bg-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-semibold text-background mb-4 text-balance">
            Ready to talk about your roof in {city.name}?
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
