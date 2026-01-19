"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, spring, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

// For stats with "+" suffix like "20+"
interface StatCounterProps {
  value: string; // "20+", "285", "5", etc.
  label: string;
  className?: string;
}

export function StatCounter({ value, label, className = "" }: StatCounterProps) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.includes("+") ? "+" : "";
  const prefix = value.includes("$") ? "$" : "";

  return (
    <div className={`text-center ${className}`}>
      <p className="text-3xl font-bold text-[var(--primary)] sm:text-4xl lg:text-5xl">
        <AnimatedCounter
          value={numericValue}
          suffix={suffix}
          prefix={prefix}
          duration={1.5}
        />
      </p>
      <p className="mt-1 text-sm text-[var(--muted)]">{label}</p>
    </div>
  );
}
