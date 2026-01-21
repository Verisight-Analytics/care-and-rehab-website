import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { facilities } from "@/data/facilities";

const services = [
  { name: "Skilled Nursing", href: "/services/skilled-nursing" },
  { name: "Rehabilitation", href: "/services/rehabilitation" },
  { name: "Memory Care", href: "/services/memory-care" },
  { name: "Assisted Living", href: "/services/assisted-living" },
  { name: "Independent Living", href: "/services/independent-living" },
  { name: "Respite Care", href: "/services/respite-care" },
  { name: "Hospice Care", href: "/services/hospice" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-white.png"
                alt="Care & Rehab - Committed to Care"
                width={147}
                height={56}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">
              Family-owned skilled nursing and rehabilitation facilities serving
              Wisconsin and Minnesota for over 20 years. We treat all people with
              kindness, dignity, and respect.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/retirementrehabilation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/careandrehab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/care-rehab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Locations
            </h3>
            <ul className="mt-4 space-y-3">
              {facilities.map((facility) => (
                <li key={facility.slug}>
                  <Link
                    href={`/locations/${facility.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {facility.shortName}, {facility.address.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="tel:+17159375524"
                  className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>
                    Admissions
                    <br />
                    (715) 937-5524
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@careandrehab.org"
                  className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>info@careandrehab.org</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>
                  6 Facilities across
                  <br />
                  Wisconsin & Minnesota
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center rounded-full bg-[var(--warmth)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--warmth-700)] transition-colors"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} Care & Rehab. All rights reserved.
            </p>
            <div className="flex gap-6">
              {company.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-white/40">
            Built by{" "}
            <a
              href="https://verisightanalytics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              VeriSight Analytics
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
