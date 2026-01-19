"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { facilities } from "@/data/facilities";

// Note: metadata must be in a separate file for client components
// For now, we handle SEO via the layout

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const wiFacilities = facilities.filter((f) => f.address.state === "WI");
  const mnFacilities = facilities.filter((f) => f.address.state === "MN");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Formspree endpoint - replace YOUR_FORM_ID with actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_CONTACT_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              We&apos;re here to help. Reach out to our admissions team or
              contact any of our {facilities.length} locations directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Get in Touch
              </h2>
              <p className="mt-4 text-[var(--muted)]">
                Have questions about our services or need help finding the right
                care solution? Our admissions team is ready to assist you.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--primary-50)]">
                    <Phone className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">
                      Admissions Hotline
                    </h3>
                    <a
                      href="tel:+17159375524"
                      className="text-[var(--primary)] hover:underline"
                    >
                      (715) 937-5524
                    </a>
                    <p className="text-sm text-[var(--muted)]">
                      Available Monday - Friday, 8am - 5pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--primary-50)]">
                    <Mail className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">
                      Email
                    </h3>
                    <a
                      href="mailto:info@careandrehab.org"
                      className="text-[var(--primary)] hover:underline"
                    >
                      info@careandrehab.org
                    </a>
                    <p className="text-sm text-[var(--muted)]">
                      We respond within 24 business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--primary-50)]">
                    <Clock className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">
                      Visiting Hours
                    </h3>
                    <p className="text-[var(--foreground)]">
                      No visiting hour restrictions
                    </p>
                    <p className="text-sm text-[var(--muted)]">
                      Family and friends are welcome anytime
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--warmth)] px-6 py-3 font-semibold text-white hover:bg-[var(--warmth-700)] transition-colors"
                >
                  Schedule a Tour
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-[var(--border)]">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                Send Us a Message
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Fill out this form and we&apos;ll get back to you within 24
                hours.
              </p>

              {status === "success" ? (
                <div className="mt-6 rounded-lg bg-green-50 p-6 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
                  <h4 className="mt-4 font-semibold text-green-800">Message Sent!</h4>
                  <p className="mt-2 text-sm text-green-700">
                    Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm font-medium text-green-600 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Honeypot field for spam prevention */}
                  <input type="text" name="_gotcha" style={{ display: "none" }} />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-[var(--foreground)]"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="mt-1 block w-full rounded-lg border border-[var(--border)] px-4 py-2 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-[var(--foreground)]"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="mt-1 block w-full rounded-lg border border-[var(--border)] px-4 py-2 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--foreground)]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full rounded-lg border border-[var(--border)] px-4 py-2 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[var(--foreground)]"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1 block w-full rounded-lg border border-[var(--border)] px-4 py-2 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--foreground)]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1 block w-full rounded-lg border border-[var(--border)] px-4 py-2 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                      <AlertCircle className="h-4 w-4" />
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white hover:bg-[var(--primary-600)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* All Locations */}
      <section className="bg-[var(--primary-50)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            All Locations
          </h2>

          {/* Wisconsin */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
              Wisconsin ({wiFacilities.length} facilities)
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {wiFacilities.map((facility) => (
                <div
                  key={facility.slug}
                  className="rounded-xl bg-white p-5 shadow-sm"
                >
                  <h4 className="font-semibold text-[var(--foreground)]">
                    {facility.shortName}
                  </h4>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-[var(--muted)]">
                      <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span>
                        {facility.address.street}
                        <br />
                        {facility.address.city}, {facility.address.state}{" "}
                        {facility.address.zip}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-[var(--primary)]" />
                      <a
                        href={`tel:${facility.phone.replace(/\D/g, "")}`}
                        className="text-[var(--primary)] hover:underline"
                      >
                        {facility.phone}
                      </a>
                    </div>
                  </div>
                  <Link
                    href={`/locations/${facility.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:underline"
                  >
                    View details <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Minnesota */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
              Minnesota ({mnFacilities.length} facility)
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mnFacilities.map((facility) => (
                <div
                  key={facility.slug}
                  className="rounded-xl bg-white p-5 shadow-sm"
                >
                  <h4 className="font-semibold text-[var(--foreground)]">
                    {facility.shortName}
                  </h4>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-[var(--muted)]">
                      <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span>
                        {facility.address.street}
                        <br />
                        {facility.address.city}, {facility.address.state}{" "}
                        {facility.address.zip}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-[var(--primary)]" />
                      <a
                        href={`tel:${facility.phone.replace(/\D/g, "")}`}
                        className="text-[var(--primary)] hover:underline"
                      >
                        {facility.phone}
                      </a>
                    </div>
                  </div>
                  <Link
                    href={`/locations/${facility.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:underline"
                  >
                    View details <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
