"use client";

import { Star, ExternalLink, Quote } from "lucide-react";

export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface GoogleReviewData {
  rating: number;
  reviewCount: number;
  url: string;
  reviews?: GoogleReview[];
}

interface GoogleReviewsProps {
  data: GoogleReviewData;
  variant?: "card" | "inline" | "compact";
}

export function GoogleReviews({
  data,
  variant = "card",
}: GoogleReviewsProps) {
  const { rating, reviewCount, url, reviews } = data;

  if (variant === "compact") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm hover:underline"
      >
        <GoogleLogo className="h-4 w-4" />
        <span className="font-medium">{rating.toFixed(1)}</span>
        <StarRating rating={rating} size="sm" />
        <span className="text-[var(--muted)]">({reviewCount})</span>
      </a>
    );
  }

  if (variant === "inline") {
    return (
      <div className="flex items-center gap-3">
        <GoogleLogo className="h-5 w-5" />
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">{rating.toFixed(1)}</span>
          <StarRating rating={rating} />
          <span className="text-sm text-[var(--muted)]">
            ({reviewCount} reviews)
          </span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--primary)] hover:underline flex items-center gap-1"
        >
          View all
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-[var(--border)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GoogleLogo className="h-6 w-6" />
          <div>
            <h3 className="font-semibold text-[var(--foreground)]">
              Google Reviews
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xl font-bold">{rating.toFixed(1)}</span>
              <StarRating rating={rating} />
              <span className="text-sm text-[var(--muted)]">
                ({reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      {reviews && reviews.length > 0 && (
        <div className="mt-6 space-y-4">
          {reviews.slice(0, 2).map((review, index) => (
            <div
              key={index}
              className="relative rounded-lg bg-[var(--background)] p-4"
            >
              <Quote className="absolute top-3 right-3 h-5 w-5 text-[var(--border)]" />
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-[var(--primary-100)] flex items-center justify-center text-sm font-medium text-[var(--primary)]">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--foreground)]">
                    {review.author}
                  </p>
                  <div className="flex items-center gap-1">
                    <StarRating rating={review.rating} size="sm" />
                    <span className="text-xs text-[var(--muted)]">
                      {formatDate(review.date)}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-3">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      )}

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:underline"
      >
        See all reviews on Google
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

function StarRating({
  rating,
  size = "md",
}: {
  rating: number;
  size?: "sm" | "md";
}) {
  const starSize = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < fullStars) {
          return (
            <Star
              key={i}
              className={`${starSize} text-yellow-400 fill-current`}
            />
          );
        }
        if (i === fullStars && hasHalfStar) {
          return (
            <Star
              key={i}
              className={`${starSize} text-yellow-400`}
              style={{
                clipPath: "inset(0 50% 0 0)",
              }}
              fill="currentColor"
            />
          );
        }
        return <Star key={i} className={`${starSize} text-gray-200`} />;
      })}
    </div>
  );
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
