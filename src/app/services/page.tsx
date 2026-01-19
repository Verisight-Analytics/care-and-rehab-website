import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Care & Rehab offers skilled nursing, rehabilitation therapy, memory care, assisted living, respite care, and hospice services across Wisconsin and Minnesota.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Comprehensive care solutions tailored to meet the unique needs of
              each resident, from short-term rehabilitation to long-term skilled
              nursing.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block rounded-xl bg-white p-6 shadow-sm ring-1 ring-[var(--border)] hover:shadow-lg hover:ring-[var(--primary)] transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--primary-50)]">
                    <Icon className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)]">
                    {service.name}
                  </h2>
                  <p className="mt-2 text-[var(--muted)] line-clamp-3">
                    {service.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[var(--primary)]">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[var(--primary-50)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
              Why Choose Care & Rehab?
            </h2>
            <p className="mt-4 text-[var(--muted)] max-w-2xl mx-auto">
              For over 20 years, we&apos;ve been providing compassionate,
              high-quality care to families across Wisconsin and Minnesota.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)]">
                <span className="text-2xl font-bold text-white">20+</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">
                Years of Experience
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Two decades of family-owned excellence in skilled nursing care.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)]">
                <span className="text-2xl font-bold text-white">6</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">
                Convenient Locations
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Find quality care close to home with facilities across two
                states.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--warmth)]">
                <span className="text-2xl font-bold text-white">5★</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">
                CMS 5-Star Rated
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Cumberland Healthcare Transitional Care Unit holds the highest
                CMS rating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            Not sure which service is right for you?
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Our admissions team can help you understand your options and find
            the best care solution for your needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--warmth)] px-6 py-3 font-semibold text-white hover:bg-[var(--warmth-700)] transition-colors"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+17159375524"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white hover:bg-[var(--primary-600)] transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call (715) 937-5524
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
