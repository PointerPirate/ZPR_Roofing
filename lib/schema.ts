import { BUSINESS, CITIES, type City, SERVICES } from "./site-data";

const PROVIDER = {
  "@type": "RoofingContractor",
  name: BUSINESS.name,
  url: BUSINESS.siteUrl,
};

const AREAS_SERVED = CITIES.map((c) => ({
  "@type": "City",
  name: c.name,
  containedInPlace: { "@type": "State", name: c.state === "IL" ? "Illinois" : "Wisconsin" },
}));

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: BUSINESS.name,
    url: BUSINESS.siteUrl,
    telephone: "+1-815-904-9777",
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "19:00",
    },
    areaServed: AREAS_SERVED,
    sameAs: [BUSINESS.socials.bbb, BUSINESS.socials.gaf, BUSINESS.socials.facebook, BUSINESS.socials.instagram],
  };
}

export function cityServiceSchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Roofing",
    name: `Roofing in ${city.name}, ${city.state}`,
    provider: PROVIDER,
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: city.state === "IL" ? "Illinois" : "Wisconsin" },
    },
  };
}

export function serviceSchema(serviceType: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    name,
    provider: PROVIDER,
    areaServed: AREAS_SERVED,
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BUSINESS.siteUrl}${item.href}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export { SERVICES };
