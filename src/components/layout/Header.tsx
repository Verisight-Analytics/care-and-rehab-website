"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Skilled Nursing", href: "/services/skilled-nursing" },
      { name: "Rehabilitation", href: "/services/rehabilitation" },
      { name: "Memory Care", href: "/services/memory-care" },
      { name: "Assisted Living", href: "/services/assisted-living" },
      { name: "Respite Care", href: "/services/respite-care" },
      { name: "Hospice Care", href: "/services/hospice" },
    ],
  },
  { name: "Locations", href: "/locations" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-[var(--primary)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <p className="hidden sm:block">
              Family-owned skilled nursing care across Wisconsin & Minnesota
            </p>
            <a
              href="tel:+17159375524"
              className="flex items-center gap-2 hover:text-[var(--warmth-300)] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Admissions: (715) 937-5524</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-white font-bold text-lg">
              C&R
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold text-[var(--primary)]">Care & Rehab</p>
              <p className="text-xs text-[var(--muted)]">Committed to Care</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="w-48 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/5">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--primary-50)] hover:text-[var(--primary)]"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center rounded-full bg-[var(--warmth)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--warmth-700)] transition-colors"
            >
              Schedule a Tour
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden rounded-md p-2 text-[var(--foreground)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[var(--border)] py-4">
            <div className="space-y-1">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <button
                      className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-[var(--foreground)]"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="pl-6 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-[var(--muted)] hover:text-[var(--primary)]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
            <div className="mt-4 px-3">
              <Link
                href="/admissions"
                className="block w-full rounded-full bg-[var(--warmth)] px-5 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
