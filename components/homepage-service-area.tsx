import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CITIES_IL, CITIES_WI } from "@/lib/site-data";

export function HomepageServiceArea() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Service Areas</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-semibold text-foreground tracking-tight text-balance mb-4">
            Roofing Across Northern Illinois and Southern Wisconsin
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We serve homeowners and businesses within about 60 miles of Rockford.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Illinois</h3>
            <div className="flex flex-wrap gap-2">
              {CITIES_IL.map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas-we-serve/${c.slug}`}
                  className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Wisconsin</h3>
            <div className="flex flex-wrap gap-2">
              {CITIES_WI.map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas-we-serve/${c.slug}`}
                  className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/areas-we-serve">
            <Button size="lg" variant="outline" className="rounded-full bg-transparent">
              View All Service Areas
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
