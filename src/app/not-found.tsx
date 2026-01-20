import Link from "next/link";
import { Home, ArrowLeft, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-[var(--primary-200)]">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-[var(--foreground)]">
          Page Not Found
        </h2>
        <p className="mt-4 text-[var(--muted)]">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been
          moved or no longer exists.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white hover:bg-[var(--primary-600)] transition-colors"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--warmth)] px-6 py-3 font-semibold text-white hover:bg-[var(--warmth-700)] transition-colors"
          >
            <Phone className="h-4 w-4" />
            Contact Us
          </Link>
        </div>

        <div className="mt-8">
          <Link
            href="javascript:history.back()"
            className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back to previous page
          </Link>
        </div>
      </div>
    </div>
  );
}
