import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Phone,
  Star,
  ArrowRight,
  Clock,
  CheckCircle2,
  Building2,
  Users,
  Stethoscope,
  Activity,
  Brain,
  Home,
  HandHeart,
  Heart,
} from "lucide-react";
import { facilities, getFacilityBySlug, type ServiceType } from "@/data/facilities";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { CMSRatingBadge } from "@/components/ui/CMSRatingBadge";
import { GoogleReviews } from "@/components/ui/GoogleReviews";
import { PhotoGallery, PhotoGalleryPlaceholder } from "@/components/ui/PhotoGallery";

export async function generateStaticParams() {
  return facilities.map((facility) => ({
    slug: facility.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const facility = getFacilityBySlug(slug);
  if (!facility) return { title: "Facility Not Found" };

  return {
    title: `${facility.shortName}, ${facility.address.state} - Skilled Nursing & Rehabilitation`,
    description: facility.description,
  };
}

const serviceIcons: Record<ServiceType, typeof Stethoscope> = {
  "skilled-nursing": Stethoscope,
  rehabilitation: Activity,
  "memory-care": Brain,
  "assisted-living": Home,
  "independent-living": Building2,
  "respite-care": HandHeart,
  hospice: Heart,
};

const serviceLabels: Record<ServiceType, string> = {
  "skilled-nursing": "24-Hour Skilled Nursing",
  rehabilitation: "Rehabilitation Therapy",
  "memory-care": "Memory Care",
  "assisted-living": "Assisted Living",
  "independent-living": "Independent Living",
  "respite-care": "Respite Care",
  hospice: "Hospice Care",
};

export default async function FacilityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const facility = getFacilityBySlug(slug);

  if (!facility) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="text-white">
              <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                <Link href="/locations" className="hover:text-white transition-colors">
                  Locations
                </Link>
                <span>/</span>
                <span>{facility.address.state}</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {facility.name}
                </h1>
                {facility.cmsRating && facility.cmsRating >= 4 && (
                  <div className="flex items-center gap-1 rounded-full bg-[var(--warmth)] px-3 py-1 text-sm font-medium text-white">
                    <Star className="h-4 w-4" fill="currentColor" />
                    {facility.cmsRating}-Star Rated
                  </div>
                )}
                <AvailabilityBadge status={facility.availability} size="md" />
              </div>
              <p className="mt-2 text-white/80">
                {facility.address.city}, {facility.address.state} &bull;{" "}
                {facility.beds} beds
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${facility.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[var(--primary)] hover:bg-white/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {facility.phone}
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
                  About This Facility
                </h2>
                <p className="mt-4 text-[var(--muted)] leading-relaxed">
                  {facility.description}
                </p>

                {facility.hospitalAffiliation && (
                  <div className="mt-6 flex items-start gap-3 rounded-lg bg-[var(--primary-50)] p-4">
                    <Building2 className="h-5 w-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[var(--foreground)]">
                        Hospital Affiliation
                      </p>
                      <p className="text-sm text-[var(--muted)]">
                        {facility.hospitalAffiliation}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)]">
                  Why Choose {facility.shortName}
                </h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {facility.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-[var(--border)]"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[var(--success)] flex-shrink-0" />
                      <span className="text-[var(--foreground)]">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)]">
                  Services Available
                </h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {facility.services.map((service) => {
                    const Icon = serviceIcons[service];
                    return (
                      <div
                        key={service}
                        className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-[var(--border)]"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary-50)]">
                          <Icon className="h-5 w-5 text-[var(--primary)]" />
                        </div>
                        <span className="font-medium text-[var(--foreground)]">
                          {serviceLabels[service]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Administrator */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)]">
                  Leadership
                </h2>
                <div className="mt-6 flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-[var(--border)]">
                  <div className="h-16 w-16 rounded-full bg-[var(--primary-100)] flex items-center justify-center">
                    <Users className="h-8 w-8 text-[var(--primary-400)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">
                      {facility.administrator.name}
                    </p>
                    <p className="text-sm text-[var(--muted)]">
                      Administrator, {facility.administrator.credentials}
                    </p>
                  </div>
                </div>
              </div>

              {/* Photo Gallery */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
                  Facility Photos
                </h2>
                {facility.images && facility.images.length > 0 ? (
                  <PhotoGallery images={facility.images} />
                ) : (
                  <PhotoGalleryPlaceholder facilityName={facility.shortName} />
                )}
              </div>

              {/* Quality Ratings & Reviews */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {facility.cmsRating && (
                  <CMSRatingBadge
                    rating={facility.cmsRating}
                    medicareUrl={facility.medicareCompareUrl}
                    variant="card"
                  />
                )}
                {facility.googleReviews && (
                  <GoogleReviews data={facility.googleReviews} />
                )}
              </div>
            </div>

            {/* Right Column - Contact Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-xl bg-white p-6 shadow-lg ring-1 ring-[var(--border)]">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  Contact Information
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[var(--foreground)]">Address</p>
                      <p className="text-sm text-[var(--muted)]">
                        {facility.address.street}
                        <br />
                        {facility.address.city}, {facility.address.state}{" "}
                        {facility.address.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[var(--foreground)]">Phone</p>
                      <a
                        href={`tel:${facility.phone.replace(/\D/g, "")}`}
                        className="text-sm text-[var(--primary)] hover:underline"
                      >
                        {facility.phone}
                      </a>
                    </div>
                  </div>

                  {facility.fax && (
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-[var(--muted)] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-[var(--foreground)]">Fax</p>
                        <p className="text-sm text-[var(--muted)]">{facility.fax}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[var(--foreground)]">Hours</p>
                      <p className="text-sm text-[var(--muted)]">
                        24/7 Care Available
                        <br />
                        No visiting hour restrictions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Link
                    href="/admissions"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--warmth)] px-6 py-3 font-semibold text-white hover:bg-[var(--warmth-700)] transition-colors"
                  >
                    Schedule a Tour
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={`tel:${facility.phone.replace(/\D/g, "")}`}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-[var(--primary)] px-6 py-3 font-semibold text-[var(--primary)] hover:bg-[var(--primary-50)] transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </div>

                <p className="mt-6 text-center text-xs text-[var(--muted)]">
                  Medicare & Medicaid Certified
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="bg-[var(--primary-50)] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            Other Locations
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities
              .filter((f) => f.slug !== facility.slug)
              .slice(0, 3)
              .map((otherFacility) => (
                <Link
                  key={otherFacility.slug}
                  href={`/locations/${otherFacility.slug}`}
                  className="group block rounded-xl bg-white p-5 shadow-sm ring-1 ring-[var(--border)] hover:shadow-md hover:ring-[var(--primary)] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)]">
                      {otherFacility.shortName}, {otherFacility.address.state}
                    </h3>
                    <div className="flex items-center gap-2">
                      {otherFacility.cmsRating && otherFacility.cmsRating >= 4 && (
                        <div className="flex items-center gap-1 text-xs text-[var(--warmth)]">
                          <Star className="h-3.5 w-3.5" fill="currentColor" />
                          {otherFacility.cmsRating}
                        </div>
                      )}
                      <AvailabilityBadge status={otherFacility.availability} size="sm" showIcon={false} />
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {otherFacility.beds} beds
                  </p>
                </Link>
              ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:underline"
            >
              View all locations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
