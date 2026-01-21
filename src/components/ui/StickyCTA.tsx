"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = 400;

      if (currentScrollY > heroHeight) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-[var(--border)] shadow-lg transform transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-2 p-3 max-w-lg mx-auto">
        <a
          href="tel:+17159375524"
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-4 py-3 font-semibold text-white text-sm"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <Link
          href="/admissions"
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[var(--warmth)] px-4 py-3 font-semibold text-white text-sm"
        >
          <Calendar className="h-4 w-4" />
          Schedule Tour
        </Link>
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}
