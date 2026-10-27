"use client";

import { useState, useEffect } from "react";

const projects = [
  { image: "/projects/shingle-after-1.jpg", label: "Architectural Shingle Replacement" },
  { image: "/projects/fwave-aerial.jpg", label: "F-Wave Specialty Shingles" },
  { image: "/projects/low-slope-after.jpg", label: "Low-Slope Roof Installation" },
  { image: "/projects/repair-final.jpg", label: "Partial Roof Repair" },
  { image: "/projects/chimney-after.jpg", label: "Chimney Flashing Repair" },
  { image: "/projects/gutter-fascia-1.jpg", label: "Fascia, Soffit & Gutters" },
  { image: "/projects/fwave-chimney.jpg", label: "Specialty Shingles with Stone Chimney" },
  { image: "/projects/decking-finished.jpg", label: "Full Tear-Off & Replacement" },
];

export function WorkShowcase() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (projects.length * 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="work" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2 text-center">Our Portfolio</p>
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-foreground tracking-tight text-center text-balance">
          See our craftsmanship
        </h2>
      </div>

      <div className="relative">
        <div
          className="flex gap-6 transition-transform duration-[50ms] ease-linear"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {[...projects, ...projects, ...projects].map((project, index) => (
            <div key={index} className="flex-shrink-0 w-80 lg:w-96 group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-3 text-center">{project.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
