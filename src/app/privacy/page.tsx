import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Care & Rehab privacy policy and data protection practices.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-white/80">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">
              Introduction
            </h2>
            <p className="text-[var(--muted)] mb-4">
              Care & Rehab (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
              is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </p>

            <h2 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="text-[var(--muted)] mb-4">
              We may collect information about you in a variety of ways,
              including:
            </p>
            <ul className="list-disc pl-6 text-[var(--muted)] mb-4 space-y-2">
              <li>
                <strong>Personal Data:</strong> Name, email address, phone
                number, and other contact information you provide when filling
                out forms on our website.
              </li>
              <li>
                <strong>Health Information:</strong> If you inquire about
                admissions, we may collect health-related information to assess
                care needs. This information is protected under HIPAA.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you access
                and use our website, including your IP address, browser type,
                and pages visited.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-[var(--muted)] mb-4">
              We may use the information we collect for purposes including:
            </p>
            <ul className="list-disc pl-6 text-[var(--muted)] mb-4 space-y-2">
              <li>Responding to your inquiries and providing customer service</li>
              <li>Processing admissions requests and scheduling tours</li>
              <li>Sending you information about our services</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">
              HIPAA Compliance
            </h2>
            <p className="text-[var(--muted)] mb-4">
              As a healthcare provider, we are committed to protecting your
              health information in accordance with the Health Insurance
              Portability and Accountability Act (HIPAA). Any protected health
              information (PHI) you provide is handled according to our Notice
              of Privacy Practices, which is available at each of our
              facilities.
            </p>

            <h2 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">
              Information Sharing
            </h2>
            <p className="text-[var(--muted)] mb-4">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-[var(--muted)] mb-4 space-y-2">
              <li>
                Service providers who assist us in operating our website and
                services
              </li>
              <li>Healthcare providers involved in your care</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">
              Cookies and Tracking
            </h2>
            <p className="text-[var(--muted)] mb-4">
              Our website may use cookies and similar tracking technologies to
              improve your browsing experience. You can set your browser to
              refuse cookies, but some features of our website may not function
              properly.
            </p>

            <h2 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">
              Data Security
            </h2>
            <p className="text-[var(--muted)] mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>

            <h2 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">
              Your Rights
            </h2>
            <p className="text-[var(--muted)] mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-[var(--muted)] mb-4 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-[var(--muted)] mb-4">
              Our website is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children under
              13.
            </p>

            <h2 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-[var(--muted)] mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="text-xl font-bold text-[var(--foreground)] mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-[var(--muted)] mb-4">
              If you have questions about this Privacy Policy or our privacy
              practices, please contact us at:
            </p>
            <div className="bg-[var(--primary-50)] rounded-lg p-6 mt-4">
              <p className="font-semibold text-[var(--foreground)]">
                Care & Rehab
              </p>
              <p className="text-[var(--muted)] mt-2">
                Email:{" "}
                <a
                  href="mailto:privacy@careandrehab.org"
                  className="text-[var(--primary)] hover:underline"
                >
                  privacy@careandrehab.org
                </a>
              </p>
              <p className="text-[var(--muted)]">
                Phone:{" "}
                <a
                  href="tel:+17159375524"
                  className="text-[var(--primary)] hover:underline"
                >
                  (715) 937-5524
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
