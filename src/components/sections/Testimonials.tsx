"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-[var(--primary-50)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            What Families Are Saying
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Real stories from families who trusted us with their loved ones&apos; care
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-4 left-8 sm:left-12">
            <Quote className="h-16 w-16 text-[var(--primary-200)]" />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[var(--warmth)]" fill="currentColor" />
                  ))}
                </div>

                <blockquote className="text-lg sm:text-xl text-[var(--foreground)] leading-relaxed">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </blockquote>

                <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">
                      {currentTestimonial.author}
                    </p>
                    <p className="text-sm text-[var(--muted)]">{currentTestimonial.relationship}</p>
                  </div>
                  <Link
                    href={`/locations/${currentTestimonial.facilitySlug}`}
                    className="text-sm font-medium text-[var(--primary)] hover:underline"
                  >
                    {currentTestimonial.facility} Facility →
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-[var(--primary-50)] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-[var(--primary)]" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[var(--primary)]" : "bg-[var(--primary-200)]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-[var(--primary-50)] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-[var(--primary)]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
