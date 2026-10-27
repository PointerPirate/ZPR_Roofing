import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Free Estimate | ZPR Roofing",
  description:
    "Contact ZPR Roofing for a free roofing estimate. Call (815) 904-9777 or send a message. Serving Northern Illinois and Southern Wisconsin.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Free Estimate | ZPR Roofing",
    description:
      "Get in touch for roofing services across Northern Illinois and Southern Wisconsin. Free estimates.",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Free Estimate | ZPR Roofing",
    description:
      "Get in touch for roofing services across Northern Illinois and Southern Wisconsin. Free estimates.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold text-balance mb-6">
            Contact Us for Roofing Services
          </h1>
          <p className="text-lg text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Ready to start your roofing project? Get a free estimate from a family-owned, in-house crew serving
            Northern Illinois and Southern Wisconsin.
          </p>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-secondary/50 backdrop-blur text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <a
                href="tel:+18159049777"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                (815) 904-9777
              </a>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/50 backdrop-blur text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground">
                info@zprroofing.com
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/50 backdrop-blur text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">
                Rockford, Illinois
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/50 backdrop-blur text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Hours</h3>
              <p className="text-sm text-muted-foreground">Mon–Sun · 7am–7pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Service Areas */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-6">
            Serving Northern Illinois and Southern Wisconsin
          </h2>
          <p className="text-muted-foreground mb-8">
            We serve homeowners and businesses within about 60 miles of Rockford, from Northern Illinois through
            southern Wisconsin, as far north as Madison. Our city pages list the main towns we work in.
          </p>
          <Link href="/areas-we-serve">
            <Button size="lg" variant="outline" className="rounded-full bg-transparent">
              View All Service Areas
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
