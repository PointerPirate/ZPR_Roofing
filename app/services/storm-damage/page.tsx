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
import { ArrowRight, Phone, CloudLightning, Camera, FileText, Clock, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site-data";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Storm Damage Roof Repair in Illinois & Wisconsin | ZPR Roofing",
  description:
    "Hail, wind, and storm damage inspected, documented with photos, and repaired. We give you a written scope you can share with your insurance company. Call (815) 904-9777.",
  alternates: { canonical: "/services/storm-damage" },
  openGraph: {
    title: "Storm Damage Roof Repair in Illinois & Wisconsin | ZPR Roofing",
    description:
      "Hail, wind, and storm damage inspected, documented with photos, and repaired. Written scope for your insurance company.",
    url: "/services/storm-damage",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storm Damage Roof Repair in Illinois & Wisconsin | ZPR Roofing",
    description:
      "Hail, wind, and storm damage inspected and documented with photos. Written scope for your insurance company.",
  },
};

const FAQS = [
  {
    q: "Can you help with my insurance claim?",
    a: "Yes. We inspect the roof, photograph the damage, and give you a written scope of work you can share with your insurance company. If a claim is denied or only partly approved, we can re-inspect and document the roof's condition. The decision is your insurer's, but a clear, photographic record gives you something to work with.",
  },
  {
    q: "How can I tell if my roof has hail or wind damage?",
    a: "From the ground you can look for missing or curled shingles, granules collecting in your gutters, and dents in metal flashing or vents. Hail damage is often not visible from the ground. If you suspect damage after a storm, we will come inspect the roof and tell you what we actually find.",
  },
  {
    q: "What should I do right after a storm damages my roof?",
    a: "If water is coming in, move belongings away from the leak and put a bucket or tarp underneath. Please do not go up on the roof yourself. Call us at (815) 904-9777 and we will schedule an inspection. Emergency roof calls are answered seven days a week.",
  },
  {
    q: "What areas do you cover for storm response?",
    a: "The same service area we work in every day: within about 60 miles of Rockford, from Northern Illinois through southern Wisconsin, as far north as Madison. After a major storm, we prioritize active leaks and significant damage first.",
  },
];

export default function StormDamagePage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Storm Damage", href: "/services/storm-damage" },
          ]),
          serviceSchema("Storm Damage Roof Repair", "Storm damage roof repair in Northern Illinois and Southern Wisconsin"),
          faqSchema(FAQS),
        ]}
      />
      <Header />

      <section className="pt-32 pb-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Storm Damage", href: "/services/storm-damage" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              <CloudLightning className="w-3.5 h-3.5" />
              Hail, wind, and storm damage
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold text-balance mb-6">
              Storm Damage Roof Repair
            </h1>
            <p className="text-lg text-muted-foreground text-balance mb-8">
              After a storm, you need two things: an honest look at what actually happened to your roof, and a written
              record you can share with your insurance company. We give you both.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={BUSINESS.phoneHref}>
                <Button size="lg" className="rounded-full px-7 bg-red-600 hover:bg-red-700 text-white gap-2">
                  <Phone className="w-5 h-5" />
                  Call {BUSINESS.phone}
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-7 bg-transparent">
                  File a Claim Inspection
                  <ArrowRight className="w-4 h-4 ml-2" />
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
              src="/projects/repair-water-stain.jpg"
              alt="Water staining measured at a roof edge during an inspection"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4 italic">
            Water staining measured at the roof edge during an inspection.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-6 text-balance">
            How we handle a storm damage call
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Our Northern Illinois and southern Wisconsin service area sees the full range of Midwest weather: spring
              hail, straight-line wind, winter ice, and the occasional serious storm. Different kinds of weather leave
              different kinds of damage, and not all of it is visible from the ground.
            </p>
            <p>
              When you call, we inspect the roof surface, flashing, vents, and attic where needed. We photograph the
              damage from close up with scale references so you have a clear record. Then we give you a written scope of
              work that spells out what we found and what the fix involves, in plain language.
            </p>
            <p>
              If the damage warrants an insurance claim, you can hand that scope and the photos directly to your
              adjuster. If a claim has already been denied or shorted, we can re-inspect and document the roof's
              condition. The decision stays with your insurance company, but a clear record gives you something to work
              with.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden bg-secondary border border-border">
            <Image
              src="/projects/repair-decking-damage.jpg"
              alt="Water-damaged roof decking found during a repair"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4 italic">
            Water-damaged decking found during a repair.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-balance">
              What we provide after a storm
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Clock, title: "7-day call response", description: "Emergency roof calls answered seven days a week." },
              { icon: Camera, title: "Photo documentation", description: "Close-up photos of the damage with scale references, saved as a record." },
              { icon: FileText, title: "Written scope", description: "A clear scope of work in plain language you can share with your insurance company." },
              { icon: Shield, title: "Repairs or replacement", description: "Whichever one honestly fits the damage. We will tell you which, and why." },
            ].map((item) => {
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
            Storm damage FAQs
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
            Need a storm inspection?
          </h2>
          <p className="text-lg text-background/70 mb-8 max-w-xl mx-auto">
            Call {BUSINESS.phone} seven days a week. If your home has active damage, we will prioritize it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={BUSINESS.phoneHref}>
              <Button size="lg" className="rounded-full px-8 bg-red-600 hover:bg-red-700 text-white gap-2">
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phone}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-background/30 text-background hover:bg-background/10 bg-transparent"
              >
                Schedule an Inspection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
