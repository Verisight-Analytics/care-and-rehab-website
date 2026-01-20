"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home, Phone } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle className="h-8 w-8 text-red-600" />
        </div>

        <h1 className="mt-6 text-2xl font-bold text-[var(--foreground)]">
          Something Went Wrong
        </h1>
        <p className="mt-4 text-[var(--muted)]">
          We apologize for the inconvenience. An unexpected error has occurred.
          Please try again or contact us if the problem persists.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white hover:bg-[var(--primary-600)] transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--muted-foreground)]/10 px-6 py-3 font-semibold text-[var(--foreground)] hover:bg-[var(--muted-foreground)]/20 transition-colors"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
        </div>

        <div className="mt-8 p-4 rounded-lg bg-[var(--primary-50)]">
          <p className="text-sm text-[var(--muted)]">
            Need immediate assistance?
          </p>
          <a
            href="tel:+17159375524"
            className="inline-flex items-center gap-2 mt-2 text-[var(--primary)] hover:underline font-medium"
          >
            <Phone className="h-4 w-4" />
            Call (715) 937-5524
          </a>
        </div>
      </div>
    </div>
  );
}
