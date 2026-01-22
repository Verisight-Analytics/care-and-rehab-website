"use client";

import { useState } from "react";
import { Star, ExternalLink, Info } from "lucide-react";

interface CMSRatingBadgeProps {
  rating: number;
  medicareUrl?: string;
  variant?: "badge" | "card";
}

export function CMSRatingBadge({
  rating,
  medicareUrl,
  variant = "badge",
}: CMSRatingBadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const ratingLabels: Record<number, string> = {
    5: "Much Above Average",
    4: "Above Average",
    3: "Average",
    2: "Below Average",
    1: "Much Below Average",
  };

  if (variant === "card") {
    return (
      <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-[var(--border)]">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[var(--foreground)]">
            Medicare Quality Rating
          </h3>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < rating
                    ? "text-[var(--warmth)] fill-current"
                    : "text-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="mt-2 text-sm text-[var(--muted)]">
          {rating}-Star Rating ({ratingLabels[rating]})
        </p>

        <p className="mt-3 text-xs text-[var(--muted)]">
          Medicare&apos;s Five-Star Quality Rating System helps families compare
          nursing homes based on health inspections, staffing, and quality
          measures.
        </p>

        {medicareUrl && (
          <a
            href={medicareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:underline"
          >
            View on Medicare.gov
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    );
  }

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center gap-1.5 rounded-full bg-[var(--warmth-50)] px-3 py-1 text-sm font-medium text-[var(--warmth-700)] hover:bg-[var(--warmth-100)] transition-colors"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(!showTooltip)}
        aria-describedby="rating-tooltip"
      >
        <Star className="h-4 w-4" fill="currentColor" />
        {rating}-Star
        <Info className="h-3.5 w-3.5 opacity-60" />
      </button>

      {showTooltip && (
        <div
          id="rating-tooltip"
          role="tooltip"
          className="absolute z-50 top-full left-0 mt-2 w-72 rounded-lg bg-white p-4 shadow-lg ring-1 ring-[var(--border)] text-left"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating
                      ? "text-[var(--warmth)] fill-current"
                      : "text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-[var(--foreground)]">
              {ratingLabels[rating]}
            </span>
          </div>

          <p className="text-xs text-[var(--muted)] leading-relaxed">
            Medicare&apos;s Five-Star Quality Rating System evaluates nursing
            homes on health inspections, staffing levels, and quality measures.
          </p>

          {medicareUrl && (
            <a
              href={medicareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--primary)] hover:underline"
            >
              Verify on Medicare.gov
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export function CMSStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" title={`${rating}-Star Medicare Rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < rating
              ? "text-[var(--warmth)] fill-current"
              : "text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}
