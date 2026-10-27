import Link from "next/link";
import { Wrench, Home, CloudLightning, ClipboardCheck, Layers, Building2, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Wrench,
    title: "Roof Repair",
    description: "Leaks, damaged shingles, flashing, and vents fixed at the source.",
    href: "/services/roof-repair",
  },
  {
    icon: Home,
    title: "Roof Replacement",
    description: "Asphalt shingle, metal, and tile roofs installed by our in-house crew.",
    href: "/services/new-installation",
  },
  {
    icon: CloudLightning,
    title: "Storm Damage",
    description: "Hail and wind damage inspected, documented with photos, and repaired.",
    href: "/services/storm-damage",
  },
  {
    icon: ClipboardCheck,
    title: "Roof Inspections",
    description: "A straight answer on the condition of your roof, backed by photos.",
    href: "/services/inspections",
  },
  {
    icon: Layers,
    title: "Metal Roofing",
    description: "Standing seam metal roofs for farmhouses, acreage homes, and modern builds.",
    href: "/services/metal-roofing",
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    description: "Flat and low-slope TPO and EPDM systems for businesses.",
    href: "/services/commercial-roofing",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Our Services</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-foreground tracking-tight text-balance">
            What our in-house crew handles
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.href}
                href={c.href}
                className="group p-7 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.description}</p>
                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
