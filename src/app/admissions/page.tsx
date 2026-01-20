"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  FileText,
  Calendar,
  ClipboardCheck,
  Home,
  CheckCircle2,
  HelpCircle,
  AlertCircle,
} from "lucide-react";
import { facilities } from "@/data/facilities";

const steps = [
  {
    icon: Phone,
    title: "Contact Us",
    description:
      "Call our admissions team or fill out our contact form. We'll discuss your needs and answer initial questions.",
  },
  {
    icon: Calendar,
    title: "Schedule a Tour",
    description:
      "Visit the facility to meet our staff, see the environment, and ask questions in person.",
  },
  {
    icon: FileText,
    title: "Complete Assessment",
    description:
      "Our clinical team will review medical records and complete a care needs assessment.",
  },
  {
    icon: ClipboardCheck,
    title: "Insurance Verification",
    description:
      "We'll verify your insurance coverage and discuss payment options and financial assistance.",
  },
  {
    icon: Home,
    title: "Welcome Home",
    description:
      "Once approved, we'll coordinate the admission date and help make the transition smooth.",
  },
];

const faqs = [
  {
    question: "What insurance do you accept?",
    answer:
      "We accept Medicare, Medicaid, most private insurance plans, and private pay. Our admissions team can verify your specific coverage and explain any out-of-pocket costs.",
  },
  {
    question: "How quickly can someone be admitted?",
    answer:
      "For planned admissions, we can typically accommodate within 24-48 hours once paperwork is complete. For urgent or hospital discharge situations, we can often facilitate same-day admissions.",
  },
  {
    question: "What should I bring for my loved one?",
    answer:
      "Bring comfortable clothing, personal toiletries, family photos, and any comfort items. We provide linens, towels, and basic toiletries. We'll give you a complete checklist before admission.",
  },
  {
    question: "Can I visit anytime?",
    answer:
      "Yes! We have no visiting hour restrictions. Family and friends are welcome to visit anytime, and we encourage involvement in your loved one's care.",
  },
  {
    question: "What if my loved one's needs change?",
    answer:
      "Our care plans are flexible and regularly reviewed. As needs change, we adjust the level of care accordingly. We also offer multiple levels of care within our facilities.",
  },
  {
    question: "Do you offer short-term rehabilitation?",
    answer:
      "Yes, we specialize in short-term rehabilitation following surgery, hospitalization, or illness. Many residents return home after completing their therapy program with us.",
  },
];

export default function AdmissionsPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Formsubmit.co - free form service, no signup required
      const response = await fetch("https://formsubmit.co/ajax/info@careandrehab.org", {
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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Start Your Journey With Us
              </h1>
              <p className="mt-4 text-lg text-white/80">
                Making the decision to seek skilled nursing care is significant.
                Our admissions team is here to guide you through every step,
                ensuring a smooth and stress-free process.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+17159375524"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[var(--primary)] hover:bg-white/90 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call (715) 937-5524
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--warmth)] px-6 py-3 font-semibold text-white hover:bg-[var(--warmth-700)] transition-colors"
                >
                  Request Information
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-xl bg-white/10 p-8">
                <h3 className="text-xl font-semibold text-white">
                  Quick Facts
                </h3>
                <ul className="mt-4 space-y-3 text-white/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[var(--warmth)]" />
                    24/7 admissions available
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[var(--warmth)]" />
                    Same-day admissions when needed
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[var(--warmth)]" />
                    Medicare & Medicaid accepted
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[var(--warmth)]" />
                    Free insurance verification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[var(--warmth)]" />
                    No obligation tours
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
              The Admissions Process
            </h2>
            <p className="mt-4 text-[var(--muted)] max-w-2xl mx-auto">
              We&apos;ve streamlined our admissions process to make it as simple
              as possible for you and your family.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative text-center">
                  {index < steps.length - 1 && (
                    <div className="absolute top-6 left-1/2 w-full h-0.5 bg-[var(--primary-100)] hidden md:block" />
                  )}
                  <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tour Request Form */}
      <section className="bg-[var(--primary-50)] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Schedule a Tour
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              See our facilities in person and meet our caring staff. Tours are
              available 7 days a week.
            </p>

            {status === "success" ? (
              <div className="mt-8 rounded-lg bg-green-50 p-8 text-center">
                <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
                <h3 className="mt-4 text-xl font-semibold text-green-800">
                  Tour Request Submitted!
                </h3>
                <p className="mt-2 text-green-700">
                  Thank you for your interest in Care & Rehab. Our admissions team will
                  contact you within 24 hours to schedule your tour.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-medium text-green-600 hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {/* Honeypot field for spam prevention */}
                <input type="text" name="_gotcha" style={{ display: "none" }} />
                {/* Email subject line */}
                <input type="hidden" name="_subject" value="New Tour Request - Care & Rehab Website" />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--foreground)]"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-lg border border-[var(--border)] px-4 py-2 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="relationship"
                      className="block text-sm font-medium text-[var(--foreground)]"
                    >
                      Relationship to Patient
                    </label>
                    <select
                      id="relationship"
                      name="relationship"
                      className="mt-1 block w-full rounded-lg border border-[var(--border)] px-4 py-2 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                    >
                      <option>Self</option>
                      <option>Spouse/Partner</option>
                      <option>Child</option>
                      <option>Sibling</option>
                      <option>Other Family</option>
                      <option>Friend</option>
                      <option>Healthcare Provider</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="tourEmail"
                      className="block text-sm font-medium text-[var(--foreground)]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="tourEmail"
                      name="email"
                      required
                      className="mt-1 block w-full rounded-lg border border-[var(--border)] px-4 py-2 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="tourPhone"
                      className="block text-sm font-medium text-[var(--foreground)]"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="tourPhone"
                      name="phone"
                      required
                      className="mt-1 block w-full rounded-lg border border-[var(--border)] px-4 py-2 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="facility"
                    className="block text-sm font-medium text-[var(--foreground)]"
                  >
                    Preferred Facility
                  </label>
                  <select
                    id="facility"
                    name="facility"
                    className="mt-1 block w-full rounded-lg border border-[var(--border)] px-4 py-2 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                  >
                    <option value="">Not sure yet</option>
                    {facilities.map((f) => (
                      <option key={f.slug} value={f.slug}>
                        {f.shortName}, {f.address.state}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="careType"
                    className="block text-sm font-medium text-[var(--foreground)]"
                  >
                    Type of Care Needed
                  </label>
                  <select
                    id="careType"
                    name="careType"
                    className="mt-1 block w-full rounded-lg border border-[var(--border)] px-4 py-2 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                  >
                    <option value="">Not sure yet</option>
                    <option value="skilled-nursing">Skilled Nursing</option>
                    <option value="rehabilitation">Rehabilitation</option>
                    <option value="memory-care">Memory Care</option>
                    <option value="assisted-living">Assisted Living</option>
                    <option value="respite-care">Respite Care</option>
                    <option value="hospice">Hospice</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-[var(--foreground)]"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="Tell us about your situation or any questions you have..."
                    className="mt-1 block w-full rounded-lg border border-[var(--border)] px-4 py-2 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                    <AlertCircle className="h-4 w-4" />
                    Something went wrong. Please try again or call us directly at (715) 937-5524.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-full bg-[var(--warmth)] px-6 py-3 font-semibold text-white hover:bg-[var(--warmth-700)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Submitting..." : "Request Tour"}
                </button>

                <p className="text-center text-xs text-[var(--muted)]">
                  By submitting this form, you agree to be contacted about tour
                  scheduling. We respect your privacy and will never share your
                  information.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="h-8 w-8 text-[var(--primary)]" />
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-[var(--border)]"
              >
                <h3 className="font-semibold text-[var(--foreground)]">
                  {faq.question}
                </h3>
                <p className="mt-2 text-[var(--muted)]">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-[var(--muted)]">
              Have more questions? We&apos;re here to help.
            </p>
            <a
              href="tel:+17159375524"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white hover:bg-[var(--primary-600)] transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Our Admissions Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
