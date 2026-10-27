import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { GoogleReviews } from "@/components/google-reviews";
import { Phone, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Customer Reviews | ZPR Roofing",
  description:
    "Live Google reviews from ZPR Roofing customers across Northern Illinois and Southern Wisconsin. See what homeowners say about our in-house crew.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Customer Reviews | ZPR Roofing",
    description:
      "Live Google reviews from ZPR Roofing customers across Northern Illinois and Southern Wisconsin.",
    url: "/testimonials",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews | ZPR Roofing",
    description:
      "Live Google reviews from ZPR Roofing customers across Northern Illinois and Southern Wisconsin.",
  },
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">Customer Reviews</p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold text-balance mb-6">
            What our customers say
          </h1>
          <p className="text-lg text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Honest reviews from homeowners and businesses across Northern Illinois and Southern Wisconsin.
          </p>
        </div>
      </section>

      <GoogleReviews
        heading="Verified Google Reviews"
        subhead="Pulled live from our Google Business Profile."
      />

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-semibold mb-6">
            Ready to work with a crew that earns its reviews?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">Get a free estimate today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full">
                <ArrowRight className="w-4 h-4 mr-2" />
                Get a Free Estimate
              </Button>
            </Link>
            <Link href={BUSINESS.phoneHref}>
              <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                <Phone className="w-4 h-4 mr-2" />
                {BUSINESS.phone}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
