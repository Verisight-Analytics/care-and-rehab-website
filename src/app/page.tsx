import Link from "next/link";
import {
  Heart,
  Users,
  Clock,
  Star,
  ArrowRight,
  Phone,
  MapPin,
  Shield,
  Activity,
  Brain,
  Home,
  Stethoscope,
  HandHeart,
} from "lucide-react";
import { facilities, totalBeds, totalFacilities } from "@/data/facilities";

const services = [
  {
    name: "Skilled Nursing",
    description: "24-hour professional nursing care with personalized attention",
    icon: Stethoscope,
    href: "/services/skilled-nursing",
  },
  {
    name: "Rehabilitation",
    description: "Physical, occupational, and speech therapy to restore independence",
    icon: Activity,
    href: "/services/rehabilitation",
  },
  {
    name: "Memory Care",
    description: "Specialized secure care for Alzheimer's and dementia residents",
    icon: Brain,
    href: "/services/memory-care",
  },
  {
    name: "Assisted Living",
    description: "Independent lifestyle with support services when needed",
    icon: Home,
    href: "/services/assisted-living",
  },
  {
    name: "Respite Care",
    description: "Short-term relief for family caregivers",
    icon: HandHeart,
    href: "/services/respite-care",
  },
  {
    name: "Hospice Care",
    description: "Compassionate end-of-life comfort and support",
    icon: Heart,
    href: "/services/hospice",
  },
];

const stats = [
  { value: "20+", label: "Years Family-Owned" },
  { value: totalFacilities.toString(), label: "Care Facilities" },
  { value: totalBeds.toString(), label: "Total Beds" },
  { value: "5", label: "Star Medicare Rating*" },
];

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "We treat every resident like family, providing the warmth and attention they deserve.",
  },
  {
    icon: Users,
    title: "Family-Owned Values",
    description:
      "Three generations of the Thayer family committed to exceptional senior care.",
  },
  {
    icon: Shield,
    title: "Quality & Safety",
    description:
      "Medicare-certified facilities with rigorous safety standards and skilled staff.",
  },
  {
    icon: Clock,
    title: "24/7 Professional Care",
    description:
      "Round-the-clock nursing care with licensed professionals always available.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--primary)] to-[var(--primary-700)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Star className="h-4 w-4 text-[var(--warmth)]" fill="currentColor" />
              <span>5-Star Medicare Rated - Cumberland Facility</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Committed to Care.
              <br />
              <span className="text-[var(--teal-300)]">We Offer a Home for All.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Family-owned skilled nursing and rehabilitation facilities across Wisconsin
              and Minnesota. For over 20 years, we&apos;ve treated every resident with
              kindness, dignity, and respect.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--warmth)] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[var(--warmth-700)] transition-all hover:scale-105"
              >
                Schedule a Tour
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/locations"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                Find a Location
                <MapPin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-10 z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-xl sm:grid-cols-4 sm:p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-[var(--primary)] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-[var(--muted)]">
            *Cumberland facility Medicare rating
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Comprehensive Care Services
            </h2>
            <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl mx-auto">
              From short-term rehabilitation to long-term care, we provide a full
              continuum of services to meet every need.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[var(--border)] hover:shadow-lg hover:ring-[var(--primary)] transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary-50)] text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[var(--foreground)]">
                  {service.name}
                </h3>
                <p className="mt-2 text-[var(--muted)]">{service.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[var(--primary-50)] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                Why Families Choose Care & Rehab
              </h2>
              <p className="mt-4 text-lg text-[var(--muted)]">
                For over 20 years, the Thayer family has been dedicated to providing
                exceptional care. We believe everyone deserves to be treated with
                kindness, dignity, and respect—no matter their physical or mental
                condition.
              </p>
              <div className="mt-10 space-y-8">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--primary)] text-white">
                      <value.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)]">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--primary-100)]">
                {/* Placeholder for hero image */}
                <div className="flex h-full items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="mx-auto h-16 w-16 text-[var(--primary-300)]" />
                    <p className="mt-4 text-[var(--primary-400)] font-medium">
                      Family-Owned Since 2004
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-10 w-10 rounded-full bg-[var(--primary-200)] ring-2 ring-white"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">
                      Leadership Team
                    </p>
                    <p className="text-sm text-[var(--muted)]">Grant, Andrea & Tim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Our Locations
            </h2>
            <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl mx-auto">
              Six facilities across Wisconsin and Minnesota, each providing exceptional
              person-centered care.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <Link
                key={facility.slug}
                href={`/locations/${facility.slug}`}
                className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-[var(--border)] hover:shadow-md hover:ring-[var(--primary)] transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)]">
                      {facility.shortName}, {facility.address.state}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {facility.beds} beds
                    </p>
                  </div>
                  {facility.cmsRating === 5 && (
                    <div className="flex items-center gap-1 rounded-full bg-[var(--warmth-50)] px-2 py-1 text-xs font-medium text-[var(--warmth-600)]">
                      <Star className="h-3 w-3" fill="currentColor" />
                      5-Star
                    </div>
                  )}
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)]">
                  <MapPin className="h-4 w-4" />
                  {facility.address.city}, {facility.address.state}
                </div>
                <p className="mt-2 flex items-center gap-2 text-sm text-[var(--primary)]">
                  <Phone className="h-4 w-4" />
                  {facility.phone}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {facility.highlights.slice(0, 2).map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full bg-[var(--primary-50)] px-2 py-1 text-xs text-[var(--primary-600)]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:underline"
            >
              View all locations with map
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--primary)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Learn More?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Schedule a tour of any of our facilities and see firsthand how we provide
              compassionate, personalized care for every resident.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--warmth)] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[var(--warmth-700)] transition-colors"
              >
                Schedule a Tour
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:+17159375524"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call (715) 937-5524
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
