import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Star, ArrowRight, Building2 } from "lucide-react";
import { facilities, totalBeds, totalFacilities } from "@/data/facilities";
import { FacilityMap } from "@/components/ui/FacilityMap";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find a Care & Rehab skilled nursing facility near you. 6 locations across Wisconsin and Minnesota offering skilled nursing, rehabilitation, memory care, and assisted living.",
};

export default function LocationsPage() {
  const wiFacilities = facilities.filter((f) => f.address.state === "WI");
  const mnFacilities = facilities.filter((f) => f.address.state === "MN");

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Locations
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              {totalFacilities} skilled nursing and rehabilitation facilities across
              Wisconsin and Minnesota, with {totalBeds} total beds.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-8 z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 rounded-xl bg-white p-6 shadow-lg">
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--primary)]">{totalFacilities}</p>
              <p className="text-sm text-[var(--muted)]">Facilities</p>
            </div>
            <div className="text-center border-x border-[var(--border)]">
              <p className="text-2xl font-bold text-[var(--primary)]">{totalBeds}</p>
              <p className="text-sm text-[var(--muted)]">Total Beds</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--primary)]">2</p>
              <p className="text-sm text-[var(--muted)]">States Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
            Find a Location Near You
          </h2>
          <FacilityMap facilities={facilities} height="450px" />
        </div>
      </section>

      {/* Wisconsin Facilities */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-[var(--primary-50)] flex items-center justify-center">
              <Building2 className="h-5 w-5 text-[var(--primary)]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)]">Wisconsin</h2>
              <p className="text-sm text-[var(--muted)]">{wiFacilities.length} facilities</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wiFacilities.map((facility) => (
              <FacilityCard key={facility.slug} facility={facility} />
            ))}
          </div>
        </div>
      </section>

      {/* Minnesota Facilities */}
      <section className="bg-[var(--primary-50)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center">
              <Building2 className="h-5 w-5 text-[var(--primary)]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)]">Minnesota</h2>
              <p className="text-sm text-[var(--muted)]">{mnFacilities.length} facility</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mnFacilities.map((facility) => (
              <FacilityCard key={facility.slug} facility={facility} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            Not sure which location is right?
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Our admissions team can help you find the best fit based on location,
            services needed, and availability.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--warmth)] px-6 py-3 font-semibold text-white hover:bg-[var(--warmth-700)] transition-colors"
            >
              Schedule a Tour
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+17159375524"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white hover:bg-[var(--primary-600)] transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Admissions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function FacilityCard({ facility }: { facility: (typeof facilities)[0] }) {
  return (
    <Link
      href={`/locations/${facility.slug}`}
      className="group block rounded-xl bg-white p-6 shadow-sm ring-1 ring-[var(--border)] hover:shadow-lg hover:ring-[var(--primary)] transition-all"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)]">
            {facility.shortName}
          </h3>
          <p className="text-sm text-[var(--muted)]">{facility.beds} beds</p>
        </div>
        {facility.cmsRating === 5 && (
          <div className="flex items-center gap-1 rounded-full bg-[var(--warmth-50)] px-2 py-1 text-xs font-medium text-[var(--warmth-600)]">
            <Star className="h-3 w-3" fill="currentColor" />
            5-Star
          </div>
        )}
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-start gap-2 text-sm text-[var(--muted)]">
          <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <span>
            {facility.address.street}
            <br />
            {facility.address.city}, {facility.address.state} {facility.address.zip}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[var(--primary)]">
          <Phone className="h-4 w-4" />
          {facility.phone}
        </div>
      </div>

      <p className="mt-4 text-sm text-[var(--muted)] line-clamp-2">
        {facility.description}
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

      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity">
        View details <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}
