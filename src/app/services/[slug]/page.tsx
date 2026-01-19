import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Users,
  CreditCard,
  HelpCircle,
} from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { facilities } from "@/data/facilities";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.name} - Care & Rehab`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  // Find facilities that offer this service
  const facilitiesWithService = facilities.filter((f) =>
    f.services.includes(service.slug)
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="text-white">
              <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
                <span>/</span>
                <span>{service.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {service.name}
                </h1>
              </div>
              <p className="mt-4 text-lg text-white/80 max-w-2xl">
                {service.shortDescription}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+17159375524"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[var(--primary)] hover:bg-white/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                (715) 937-5524
              </a>
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--warmth)] px-6 py-3 font-semibold text-white hover:bg-[var(--warmth-700)] transition-colors"
              >
                Schedule a Tour
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)]">
                  About {service.name}
                </h2>
                <p className="mt-4 text-[var(--muted)] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)]">
                  What&apos;s Included
                </h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--foreground)]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Is It For */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-[var(--primary)]" />
                  <h2 className="text-2xl font-bold text-[var(--foreground)]">
                    Who Is This Service For?
                  </h2>
                </div>
                <ul className="space-y-3">
                  {service.whoIsItFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-lg bg-[var(--primary-50)] p-4"
                    >
                      <ArrowRight className="h-5 w-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--foreground)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What To Expect */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="h-6 w-6 text-[var(--primary)]" />
                  <h2 className="text-2xl font-bold text-[var(--foreground)]">
                    What to Expect
                  </h2>
                </div>
                <div className="space-y-4">
                  {service.whatToExpect.map((item, index) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-white font-semibold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-[var(--foreground)] pt-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insurance */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="h-6 w-6 text-[var(--primary)]" />
                  <h2 className="text-2xl font-bold text-[var(--foreground)]">
                    Insurance & Payment
                  </h2>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-[var(--border)]">
                  <p className="text-[var(--muted)] mb-4">
                    We accept a variety of payment options to make care
                    accessible:
                  </p>
                  <ul className="space-y-2">
                    {service.insurance.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[var(--success)]" />
                        <span className="text-[var(--foreground)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-[var(--muted)]">
                    Contact our admissions team for a personalized coverage
                    review.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <div className="rounded-xl bg-white p-6 shadow-lg ring-1 ring-[var(--border)]">
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    Ready to Learn More?
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Our admissions team can answer your questions and help you
                    find the right care solution.
                  </p>
                  <div className="mt-6 space-y-3">
                    <Link
                      href="/admissions"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--warmth)] px-6 py-3 font-semibold text-white hover:bg-[var(--warmth-700)] transition-colors"
                    >
                      Schedule a Tour
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href="tel:+17159375524"
                      className="flex w-full items-center justify-center gap-2 rounded-full border border-[var(--primary)] px-6 py-3 font-semibold text-[var(--primary)] hover:bg-[var(--primary-50)] transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                  </div>
                </div>

                {/* Locations Offering This Service */}
                {facilitiesWithService.length > 0 && (
                  <div className="rounded-xl bg-[var(--primary-50)] p-6">
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">
                      Available At
                    </h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {facilitiesWithService.length} of our facilities offer{" "}
                      {service.name.toLowerCase()}
                    </p>
                    <div className="mt-4 space-y-2">
                      {facilitiesWithService.slice(0, 4).map((facility) => (
                        <Link
                          key={facility.slug}
                          href={`/locations/${facility.slug}`}
                          className="block rounded-lg bg-white p-3 text-sm hover:shadow-md transition-shadow"
                        >
                          <span className="font-medium text-[var(--foreground)]">
                            {facility.shortName}
                          </span>
                          <span className="text-[var(--muted)]">
                            , {facility.address.state}
                          </span>
                        </Link>
                      ))}
                      {facilitiesWithService.length > 4 && (
                        <Link
                          href="/locations"
                          className="block text-center text-sm font-medium text-[var(--primary)] hover:underline"
                        >
                          View all locations →
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-[var(--primary-50)] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            Other Services
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((otherService) => {
                const OtherIcon = otherService.icon;
                return (
                  <Link
                    key={otherService.slug}
                    href={`/services/${otherService.slug}`}
                    className="group block rounded-xl bg-white p-5 shadow-sm ring-1 ring-[var(--border)] hover:shadow-md hover:ring-[var(--primary)] transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary-50)]">
                        <OtherIcon className="h-5 w-5 text-[var(--primary)]" />
                      </div>
                      <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)]">
                        {otherService.name}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm text-[var(--muted)] line-clamp-2">
                      {otherService.shortDescription}
                    </p>
                  </Link>
                );
              })}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:underline"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
