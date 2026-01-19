import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  DollarSign,
  Clock,
  GraduationCap,
  Users,
  Shield,
  MapPin,
} from "lucide-react";
import { facilities } from "@/data/facilities";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Care & Rehab team. We're hiring nurses, CNAs, therapists, and more across Wisconsin and Minnesota. Competitive benefits and a supportive work environment.",
};

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Market-leading wages with regular increases and shift differentials.",
  },
  {
    icon: Shield,
    title: "Health Insurance",
    description: "Comprehensive medical, dental, and vision coverage for you and your family.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Full-time, part-time, and PRN positions to fit your lifestyle.",
  },
  {
    icon: GraduationCap,
    title: "Tuition Assistance",
    description: "We invest in your growth with tuition reimbursement programs.",
  },
  {
    icon: Users,
    title: "Supportive Team",
    description: "Work alongside experienced professionals who care about your success.",
  },
  {
    icon: Heart,
    title: "Meaningful Work",
    description: "Make a real difference in the lives of residents and their families.",
  },
];

const openPositions = [
  {
    title: "Registered Nurse (RN)",
    locations: ["Cumberland", "Ladysmith", "Barron"],
    type: "Full-time, Part-time",
    description: "Provide direct patient care and supervise nursing staff in our skilled nursing facilities.",
  },
  {
    title: "Licensed Practical Nurse (LPN)",
    locations: ["All Locations"],
    type: "Full-time, Part-time, PRN",
    description: "Deliver hands-on nursing care under the supervision of RNs and physicians.",
  },
  {
    title: "Certified Nursing Assistant (CNA)",
    locations: ["All Locations"],
    type: "Full-time, Part-time",
    description: "Assist residents with daily activities and provide compassionate personal care.",
  },
  {
    title: "Physical Therapist",
    locations: ["Cumberland", "Neillsville"],
    type: "Full-time",
    description: "Help residents regain mobility and independence through therapeutic interventions.",
  },
  {
    title: "Occupational Therapist",
    locations: ["Cumberland", "Boscobel"],
    type: "Full-time, Part-time",
    description: "Enable residents to perform daily activities and improve quality of life.",
  },
  {
    title: "Dietary Aide",
    locations: ["Barron", "Ostrander"],
    type: "Part-time",
    description: "Prepare and serve nutritious meals while maintaining food safety standards.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Join Our Team
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              At Care & Rehab, we&apos;re more than coworkers—we&apos;re a
              family dedicated to providing exceptional care. Discover rewarding
              career opportunities at our {facilities.length} locations.
            </p>
            <div className="mt-8">
              <a
                href="#open-positions"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--warmth)] px-6 py-3 font-semibold text-white hover:bg-[var(--warmth-700)] transition-colors"
              >
                View Open Positions
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
              Why Work With Us?
            </h2>
            <p className="mt-4 text-[var(--muted)] max-w-2xl mx-auto">
              We believe in taking care of the people who take care of our
              residents. Here&apos;s what you can expect when you join our team.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-[var(--border)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--primary-50)]">
                    <Icon className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="bg-[var(--primary-50)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--foreground)]">
                Our Culture
              </h2>
              <div className="mt-6 space-y-4 text-[var(--muted)]">
                <p>
                  As a family-owned organization, we prioritize relationships
                  over bureaucracy. Our leadership is accessible, our teams are
                  collaborative, and every voice matters.
                </p>
                <p>
                  We celebrate our employees&apos; successes, support them
                  through challenges, and create an environment where everyone
                  can grow professionally and personally.
                </p>
                <p>
                  Whether you&apos;re a seasoned healthcare professional or just
                  starting your career, you&apos;ll find mentorship,
                  opportunity, and purpose at Care & Rehab.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-[var(--primary)]">20+</p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Years in business
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-[var(--primary)]">6</p>
                <p className="mt-2 text-sm text-[var(--muted)]">Locations</p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-[var(--primary)]">300+</p>
                <p className="mt-2 text-sm text-[var(--muted)]">Team members</p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-[var(--warmth)]">5★</p>
                <p className="mt-2 text-sm text-[var(--muted)]">CMS rated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--foreground)]">
            Open Positions
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            We&apos;re always looking for caring, dedicated individuals to join
            our team.
          </p>

          <div className="mt-8 space-y-4">
            {openPositions.map((position) => (
              <div
                key={position.title}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-[var(--border)] hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">
                      {position.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                      <span className="inline-flex items-center gap-1 text-[var(--muted)]">
                        <MapPin className="h-4 w-4" />
                        {position.locations.join(", ")}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[var(--primary-50)] px-2 py-0.5 text-xs text-[var(--primary-600)]">
                        {position.type}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      {position.description}
                    </p>
                  </div>
                  <a
                    href={`mailto:careers@careandrehab.org?subject=Application: ${position.title}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-semibold text-white hover:bg-[var(--primary-600)] transition-colors whitespace-nowrap"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-[var(--primary-50)] p-6 text-center">
            <p className="text-[var(--foreground)]">
              Don&apos;t see a position that fits?
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              We&apos;re always interested in hearing from talented individuals.
              Send your resume to{" "}
              <a
                href="mailto:careers@careandrehab.org"
                className="text-[var(--primary)] hover:underline"
              >
                careers@careandrehab.org
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-[var(--primary)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold">Our Locations</h2>
            <p className="mt-4 text-white/80">
              Find a position near you at one of our {facilities.length}{" "}
              facilities.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {facilities.map((facility) => (
              <div
                key={facility.slug}
                className="rounded-lg bg-white/10 p-4 text-center"
              >
                <p className="font-semibold text-white">{facility.shortName}</p>
                <p className="text-sm text-white/70">{facility.address.state}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-white font-semibold hover:underline"
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
