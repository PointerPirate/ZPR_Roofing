import Link from "next/link";
import { BBBBadge } from "@/components/bbb-badge";
import { SERVICES, BUSINESS, CITIES_IL, CITIES_WI } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-14 px-6 bg-secondary border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-10 mb-10">
          <div className="md:col-span-2">
            <Link href="/" className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
              ZPR Roofing
            </Link>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed max-w-sm">
              Family-owned roofing contractor serving Northern Illinois and Southern Wisconsin. Over 15 years of
              hands-on roofing experience, with our own in-house crew.
            </p>
            <div className="mt-5">
              <BBBBadge size="medium" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Services</h3>
            <nav className="flex flex-col gap-2">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Service Areas</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/areas-we-serve"
                className="text-xs text-foreground font-medium hover:text-primary transition-colors"
              >
                All service areas →
              </Link>
              {CITIES_IL.slice(0, 3).map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas-we-serve/${c.slug}`}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {c.name}, {c.state}
                </Link>
              ))}
              {CITIES_WI.slice(0, 2).map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas-we-serve/${c.slug}`}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {c.name}, {c.state}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Contact</h3>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>Rockford, IL</p>
              <a
                href={BUSINESS.phoneHref}
                className="hover:text-foreground transition-colors block"
              >
                {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.emailHref}
                className="hover:text-foreground transition-colors block"
              >
                {BUSINESS.email}
              </a>
              <p className="pt-2">Mon–Sun · 7am–7pm</p>
            </div>
            <nav className="flex flex-col gap-2 mt-5">
              <Link href="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link
                href="/testimonials"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Testimonials
              </Link>
              <Link href="/faq" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <span>© {year} ZPR Roofing. All rights reserved.</span>
          </div>
          <nav className="flex items-center gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
