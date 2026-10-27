"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, X } from "lucide-react";
import { CITIES_IL, CITIES_WI, SERVICES } from "@/lib/site-data";

const servicesMenu = SERVICES.map((s) => ({ label: s.label, href: `/services/${s.slug}` }));

const topLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function useOutsideClose<T extends HTMLElement>(onClose: () => void) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    function esc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", esc);
    };
  }, [onClose]);
  return ref;
}

function Dropdown({
  label,
  isScrolled,
  parentHref,
  children,
}: {
  label: string;
  isScrolled: boolean;
  parentHref?: string;
  children: (close: () => void) => React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useOutsideClose<HTMLDivElement>(() => setOpen(false));
  const close = () => setOpen(false);

  const triggerClasses = `inline-flex items-center gap-1 text-sm font-medium transition-colors ${
    isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/90 hover:text-white"
  }`;

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {parentHref ? (
        <Link
          href={parentHref}
          className={triggerClasses}
          onClick={close}
          aria-haspopup="menu"
          aria-expanded={open}
        >
          {label}
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setOpen((o) => !o);
            }}
          />
        </Link>
      ) : (
        <button
          type="button"
          className={triggerClasses}
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="menu"
          aria-expanded={open}
        >
          {label}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      )}
      {open && (
        <div
          role="menu"
          className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
        >
          <div className="min-w-[260px] rounded-2xl bg-background border border-border shadow-xl p-2">
            {children(close)}
          </div>
        </div>
      )}
    </div>
  );
}

function ServicesDropdown({ isScrolled }: { isScrolled: boolean }) {
  return (
    <Dropdown label="Services" isScrolled={isScrolled}>
      {(close) => (
        <ul className="py-1">
          {servicesMenu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={close}
                role="menuitem"
                className="block px-4 py-2.5 text-sm text-foreground rounded-lg hover:bg-secondary transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Dropdown>
  );
}

function ServiceAreasDropdown({ isScrolled }: { isScrolled: boolean }) {
  return (
    <Dropdown label="Service Areas" parentHref="/areas-we-serve" isScrolled={isScrolled}>
      {(close) => (
        <div className="min-w-[480px] grid grid-cols-2 gap-2 p-2">
          <div>
            <p className="px-3 pt-2 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Illinois
            </p>
            <ul>
              {CITIES_IL.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/areas-we-serve/${c.slug}`}
                    onClick={close}
                    role="menuitem"
                    className="block px-3 py-2 text-sm text-foreground rounded-lg hover:bg-secondary transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="px-3 pt-2 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Wisconsin
            </p>
            <ul>
              {CITIES_WI.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/areas-we-serve/${c.slug}`}
                    onClick={close}
                    role="menuitem"
                    className="block px-3 py-2 text-sm text-foreground rounded-lg hover:bg-secondary transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 border-t border-border mt-1 pt-1">
            <Link
              href="/areas-we-serve"
              onClick={close}
              role="menuitem"
              className="block px-3 py-2 text-sm font-medium text-primary rounded-lg hover:bg-primary/5 transition-colors"
            >
              View all service areas →
            </Link>
          </div>
        </div>
      )}
    </Dropdown>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileSvc, setMobileSvc] = useState(false);
  const [mobileAreas, setMobileAreas] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    if (!isMenuOpen) window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src="/zpr-logo.svg" alt="ZPR Roofing" width={100} height={100} className="w-20 h-20" priority />
            <span
              className={`font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              ZPR Roofing
            </span>
            <Image
              src="/Better_Business_Bureau.svg"
              alt="BBB Accredited"
              width={60}
              height={60}
              className="w-12 h-12 md:hidden ml-2"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <ServicesDropdown isScrolled={isScrolled} />
            <ServiceAreasDropdown isScrolled={isScrolled} />
            {topLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-foreground" : "bg-white"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <Button
                size="sm"
                className={`h-8 px-4 text-xs rounded-full transition-all ${
                  isScrolled
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-white text-black hover:bg-white/90"
                }`}
              >
                Book Inspection Now
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              className="p-2 rounded-full hover:bg-white/10 transition-colors relative"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-5 transition-all duration-300 ease-out ${
                    isMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                  } ${isScrolled ? "bg-foreground" : "bg-white"}`}
                />
                <span
                  className={`block h-0.5 w-5 transition-all duration-300 ease-out ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  } ${isScrolled ? "bg-foreground" : "bg-white"}`}
                />
                <span
                  className={`block h-0.5 w-5 transition-all duration-300 ease-out ${
                    isMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                  } ${isScrolled ? "bg-foreground" : "bg-white"}`}
                />
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
              onClick={closeMenu}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100vw",
                height: "100vh",
              }}
            />
            <div
              className={`fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-background/95 backdrop-blur-xl border-l border-border z-[70] md:hidden transform transition-all duration-300 ease-out ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              } overflow-y-auto`}
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <Image src="/zpr-logo.svg" alt="ZPR Roofing" width={32} height={32} className="w-8 h-8" />
                  <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-foreground">
                    ZPR Roofing
                  </span>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="px-6 py-6">
                <div className="space-y-1">
                  {/* Services group */}
                  <button
                    type="button"
                    onClick={() => setMobileSvc((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-secondary/50 rounded-lg transition-all"
                    aria-expanded={mobileSvc}
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSvc ? "rotate-180" : ""}`} />
                  </button>
                  {mobileSvc && (
                    <ul className="pl-4 border-l border-border ml-4 mb-2">
                      {servicesMenu.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Service Areas group */}
                  <button
                    type="button"
                    onClick={() => setMobileAreas((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-secondary/50 rounded-lg transition-all"
                    aria-expanded={mobileAreas}
                  >
                    <span>Service Areas</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileAreas ? "rotate-180" : ""}`} />
                  </button>
                  {mobileAreas && (
                    <div className="pl-4 border-l border-border ml-4 mb-2 space-y-3">
                      <Link
                        href="/areas-we-serve"
                        onClick={closeMenu}
                        className="block px-4 py-2 text-sm font-medium text-primary"
                      >
                        View all service areas →
                      </Link>
                      <div>
                        <p className="px-4 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Illinois
                        </p>
                        <ul>
                          {CITIES_IL.map((c) => (
                            <li key={c.slug}>
                              <Link
                                href={`/areas-we-serve/${c.slug}`}
                                onClick={closeMenu}
                                className="block px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {c.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="px-4 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Wisconsin
                        </p>
                        <ul>
                          {CITIES_WI.map((c) => (
                            <li key={c.slug}>
                              <Link
                                href={`/areas-we-serve/${c.slug}`}
                                onClick={closeMenu}
                                className="block px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {c.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {topLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-8 px-4 space-y-4">
                  <Link href="/contact" onClick={closeMenu}>
                    <Button size="lg" className="w-full rounded-xl h-12 text-base font-medium">
                      Book Inspection Now
                    </Button>
                  </Link>
                </div>

                <div className="mt-10 pt-6 border-t border-border">
                  <div className="flex items-center justify-center gap-4">
                    <a href="tel:+18159049777" className="text-sm text-muted-foreground hover:text-foreground">
                      (815) 904-9777
                    </a>
                    <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <span className="text-sm text-muted-foreground">Licensed & Insured</span>
                  </div>
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
