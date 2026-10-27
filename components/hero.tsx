"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { BBBBadge } from "@/components/bbb-badge";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src="/projects/shingle-after-1.jpg"
          alt="New architectural shingle roof"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 animate-slide-in">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white tracking-wide">Insured & Licensed #104018820</span>
          </div>
        </div>

        <p
          className="text-xl md:text-2xl text-white/85 font-light tracking-wide animate-slide-in mb-4"
          style={{ animationDelay: "0.05s" }}
        >
          Excellence above. Protection below.
        </p>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-semibold text-white tracking-tight max-w-5xl text-balance animate-slide-in"
          style={{ animationDelay: "0.1s" }}
        >
          Roofing Contractor Serving Northern Illinois and Southern Wisconsin
        </h1>

        <p
          className="text-base md:text-lg text-white/75 mt-5 max-w-2xl text-balance animate-slide-in"
          style={{ animationDelay: "0.15s" }}
        >
          Family-owned roofers with 15+ years of hands-on experience. Roof repair, roof replacement, metal roofing,
          commercial roofing, and storm damage across Northern Illinois and southern Wisconsin.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-in" style={{ animationDelay: "0.2s" }}>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8 gap-2 bg-white text-black hover:bg-white/90">
              Get a Free Estimate
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 gap-2 border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <Play className="w-4 h-4" />
              See Our Work
            </Button>
          </Link>
        </div>

        <div className="mt-6 animate-slide-in hidden md:flex" style={{ animationDelay: "0.3s" }}>
          <BBBBadge size="small" className="bg-white rounded-lg px-2 py-1 shadow-lg scale-90" />
        </div>

        <div className="mt-8 animate-slide-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://app.gethearth.com/partners/zpr-roofing?utm_campaign=58365&utm_content=zero_percent&utm_medium=contractor-website&utm_source=contractor&utm_term=700x110"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-90 transition-opacity"
          >
            <img
              src="https://app.gethearth.com/contractor_images/zpr-roofing/banner.jpg?size_id=700x110&color=zero_percent"
              alt="Financing Options Available"
              className="max-w-full h-auto rounded-lg shadow-2xl mx-auto"
              style={{ maxHeight: "110px", width: "auto" }}
            />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
