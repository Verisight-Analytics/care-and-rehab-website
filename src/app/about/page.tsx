import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Users,
  Award,
  Building2,
  Clock,
  Shield,
} from "lucide-react";
import { totalFacilities, totalBeds } from "@/data/facilities";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Care & Rehab's 20+ years of family-owned skilled nursing excellence across Wisconsin and Minnesota. Our mission, values, and commitment to quality care.",
};

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We treat every resident as family, providing care with kindness, dignity, and respect.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for the highest standards in clinical care, safety, and resident satisfaction.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We build meaningful connections between residents, families, staff, and our local communities.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with transparency, honesty, and accountability in everything we do.",
  },
];

const milestones = [
  { year: "2003", event: "Founded first Care & Rehab facility in Wisconsin" },
  { year: "2008", event: "Expanded to include rehabilitation therapy services" },
  { year: "2012", event: "Added memory care programs across facilities" },
  { year: "2016", event: "Opened Minnesota location in Ostrander" },
  { year: "2020", event: "Achieved 5-Star CMS rating at Cumberland" },
  { year: "2024", event: "Serving 6 communities with 285+ beds" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Care & Rehab
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              For over 20 years, we&apos;ve been a family-owned provider of
              skilled nursing and rehabilitation services, dedicated to
              improving lives across Wisconsin and Minnesota.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-8 z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-4 rounded-xl bg-white p-6 shadow-lg">
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--primary)]">20+</p>
              <p className="text-sm text-[var(--muted)]">Years</p>
            </div>
            <div className="text-center border-x border-[var(--border)]">
              <p className="text-2xl font-bold text-[var(--primary)]">
                {totalFacilities}
              </p>
              <p className="text-sm text-[var(--muted)]">Facilities</p>
            </div>
            <div className="text-center border-r border-[var(--border)]">
              <p className="text-2xl font-bold text-[var(--primary)]">
                {totalBeds}
              </p>
              <p className="text-sm text-[var(--muted)]">Beds</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--warmth)]">5★</p>
              <p className="text-sm text-[var(--muted)]">CMS Rated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--foreground)]">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-[var(--muted)]">
                <p>
                  Care & Rehab began over two decades ago with a simple
                  mission: to provide high-quality, compassionate care in the
                  communities that need it most. As a family-owned organization,
                  we understand that choosing a skilled nursing facility is one
                  of the most important decisions a family can make.
                </p>
                <p>
                  Today, we operate {totalFacilities} facilities across Wisconsin
                  and Minnesota, serving hundreds of residents and their
                  families. While we&apos;ve grown, our commitment to
                  personalized, resident-centered care remains unchanged.
                </p>
                <p>
                  We&apos;re proud to be part of the rural communities we serve,
                  providing jobs, supporting local businesses, and ensuring that
                  quality healthcare is accessible close to home.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-[var(--primary-50)] p-6">
                <Building2 className="h-8 w-8 text-[var(--primary)]" />
                <h3 className="mt-4 font-semibold text-[var(--foreground)]">
                  Family Owned
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Not a corporate chain—we&apos;re a family business that treats
                  residents like our own.
                </p>
              </div>
              <div className="rounded-xl bg-[var(--primary-50)] p-6">
                <Clock className="h-8 w-8 text-[var(--primary)]" />
                <h3 className="mt-4 font-semibold text-[var(--foreground)]">
                  24/7 Care
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Round-the-clock nursing care with no visiting hour
                  restrictions.
                </p>
              </div>
              <div className="rounded-xl bg-[var(--primary-50)] p-6">
                <Award className="h-8 w-8 text-[var(--primary)]" />
                <h3 className="mt-4 font-semibold text-[var(--foreground)]">
                  Quality Focused
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  CMS 5-Star rated facility with a commitment to excellence.
                </p>
              </div>
              <div className="rounded-xl bg-[var(--primary-50)] p-6">
                <Users className="h-8 w-8 text-[var(--primary)]" />
                <h3 className="mt-4 font-semibold text-[var(--foreground)]">
                  Community Roots
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Deep ties to the rural communities we proudly serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-[var(--primary-50)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
              Our Mission
            </h2>
            <p className="mt-4 text-xl text-[var(--muted)] max-w-3xl mx-auto">
              &quot;To provide exceptional care that enhances quality of life,
              promotes independence, and honors the dignity of every individual
              we serve.&quot;
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-center text-2xl font-bold text-[var(--foreground)]">
              Our Values
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="rounded-xl bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--primary-50)]">
                      <Icon className="h-6 w-6 text-[var(--primary)]" />
                    </div>
                    <h4 className="mt-4 text-lg font-semibold text-[var(--foreground)]">
                      {value.title}
                    </h4>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[var(--foreground)]">
            Our Journey
          </h2>
          <div className="mt-12 space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-white font-bold text-sm">
                    {milestone.year.slice(2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="h-full w-0.5 bg-[var(--primary-100)] mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="font-semibold text-[var(--primary)]">
                    {milestone.year}
                  </p>
                  <p className="mt-1 text-[var(--muted)]">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--primary)] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Experience the Care & Rehab Difference
          </h2>
          <p className="mt-4 text-white/80">
            Schedule a tour to see our facilities and meet our caring staff.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--warmth)] px-6 py-3 font-semibold text-white hover:bg-[var(--warmth-700)] transition-colors"
            >
              Schedule a Tour
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/locations"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[var(--primary)] hover:bg-white/90 transition-colors"
            >
              Find a Location
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
