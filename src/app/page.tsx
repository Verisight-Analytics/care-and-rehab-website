"use client";

import Link from "next/link";
import Image from "next/image";
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
  ChevronDown,
} from "lucide-react";
import { facilities, totalBeds, totalFacilities } from "@/data/facilities";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { StatCounter } from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";
import { Testimonials } from "@/components/sections/Testimonials";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { CMSStars } from "@/components/ui/CMSRatingBadge";

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
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[var(--primary)] via-[var(--primary-600)] to-[var(--primary-700)] text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/90 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32 w-full">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Star className="h-4 w-4 text-[var(--warmth)]" fill="currentColor" />
              <span>5-Star Medicare Rated - Cumberland Facility</span>
            </motion.div>

            <h1 className="hero-title text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block"
              >
                Committed to Care.
              </motion.span>
              <motion.span
                className="block text-[var(--warmth-300)] mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                We Offer a Home for All.
              </motion.span>
            </h1>

            <motion.p
              className="mt-8 text-lg leading-8 text-white/80 sm:text-xl max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Family-owned skilled nursing and rehabilitation facilities across Wisconsin
              and Minnesota. For over 20 years, we&apos;ve treated every resident with
              kindness, dignity, and respect.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Link
                href="/admissions"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--warmth)] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[var(--warmth-600)] transition-all hover:scale-105 hover:shadow-xl"
              >
                Schedule a Tour
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/locations"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all border border-white/20"
              >
                Find a Location
                <MapPin className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/60"
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-8 shadow-2xl sm:grid-cols-4 sm:p-10 ring-1 ring-black/5">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <StatCounter value={stat.value} label={stat.label} />
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-[var(--muted)]">
              *Cumberland facility Medicare rating
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="section-heading text-3xl tracking-tight text-[var(--foreground)] sm:text-4xl">
              Comprehensive Care Services
            </h2>
            <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl mx-auto">
              From short-term rehabilitation to long-term care, we provide a full
              continuum of services to meet every need.
            </p>
          </AnimatedSection>

          <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.name}>
                <Link
                  href={service.href}
                  className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[var(--border)] hover:shadow-xl hover:ring-[var(--warmth)] transition-all duration-300 block hover-lift"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--primary-50)] text-[var(--primary)] group-hover:bg-[var(--warmth)] group-hover:text-white transition-all duration-300">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--warmth)] transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">{service.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[var(--warmth)] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[var(--primary-50)] py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="section-heading text-3xl tracking-tight text-[var(--foreground)] sm:text-4xl">
                Why Families Choose Care & Rehab
              </h2>
              <p className="mt-4 text-lg text-[var(--muted)]">
                For over 20 years, the Thayer family has been dedicated to providing
                exceptional care. We believe everyone deserves to be treated with
                kindness, dignity, and respect—no matter their physical or mental
                condition.
              </p>
              <div className="mt-10 space-y-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--warmth)] text-white shadow-lg">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)] text-lg">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-[var(--muted)]">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--primary-100)] shadow-2xl">
                  <Image
                    src="/images/facility-hero.jpg"
                    alt="Care & Rehab facility - compassionate care environment"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-xl ring-1 ring-black/5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-12 w-12 rounded-full bg-gradient-to-br from-[var(--primary-200)] to-[var(--primary-300)] ring-2 ring-white"
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
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="section-heading text-3xl tracking-tight text-[var(--foreground)] sm:text-4xl">
              Our Locations
            </h2>
            <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl mx-auto">
              Six facilities across Wisconsin and Minnesota, each providing exceptional
              person-centered care.
            </p>
          </AnimatedSection>

          <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <StaggerItem key={facility.slug}>
                <Link
                  href={`/locations/${facility.slug}`}
                  className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-[var(--border)] hover:shadow-lg hover:ring-[var(--warmth)] transition-all duration-300 block hover-lift"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--warmth)] transition-colors">
                        {facility.shortName}, {facility.address.state}
                      </h3>
                      <div className="mt-1 flex items-center gap-3">
                        <span className="text-sm text-[var(--muted)]">
                          {facility.beds} beds
                        </span>
                        {facility.cmsRating && (
                          <CMSStars rating={facility.cmsRating} />
                        )}
                      </div>
                    </div>
                    <AvailabilityBadge status={facility.availability} size="sm" showIcon={false} />
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)]">
                    <MapPin className="h-4 w-4" />
                    {facility.address.city}, {facility.address.state}
                  </div>
                  <p className="mt-2 flex items-center gap-2 text-sm text-[var(--warmth)]">
                    <Phone className="h-4 w-4" />
                    {facility.phone}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {facility.highlights.slice(0, 2).map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full bg-[var(--primary-50)] px-2.5 py-1 text-xs text-[var(--primary-600)]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-12 text-center" delay={0.3}>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-[var(--warmth)] font-semibold hover:underline text-lg group"
            >
              View all locations with map
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] via-[var(--primary-600)] to-[var(--primary-700)] py-20 sm:py-28 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col items-center text-center">
            <h2 className="section-heading-lg text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Learn More?
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Schedule a tour of any of our facilities and see firsthand how we provide
              compassionate, personalized care for every resident.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/admissions"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--warmth)] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[var(--warmth-600)] transition-all hover:scale-105 hover:shadow-xl"
              >
                Schedule a Tour
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+17159375524"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all border border-white/20"
              >
                <Phone className="h-5 w-5" />
                Call (715) 937-5524
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
