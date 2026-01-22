"use client";

import { CheckCircle, Clock, AlertCircle } from "lucide-react";

export type AvailabilityStatus = "accepting" | "limited" | "waitlist";

interface AvailabilityBadgeProps {
  status: AvailabilityStatus;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}

const statusConfig: Record<
  AvailabilityStatus,
  { label: string; bgClass: string; textClass: string; icon: typeof CheckCircle }
> = {
  accepting: {
    label: "Accepting Residents",
    bgClass: "bg-green-50",
    textClass: "text-green-700",
    icon: CheckCircle,
  },
  limited: {
    label: "Limited Availability",
    bgClass: "bg-yellow-50",
    textClass: "text-yellow-700",
    icon: Clock,
  },
  waitlist: {
    label: "Waitlist Only",
    bgClass: "bg-orange-50",
    textClass: "text-orange-700",
    icon: AlertCircle,
  },
};

export function AvailabilityBadge({
  status,
  size = "md",
  showIcon = true,
}: AvailabilityBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs gap-1",
    md: "px-2.5 py-1 text-xs gap-1.5",
    lg: "px-3 py-1.5 text-sm gap-2",
  };

  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-3.5 w-3.5",
    lg: "h-4 w-4",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${config.bgClass} ${config.textClass} ${sizeClasses[size]}`}
    >
      {showIcon && <Icon className={iconSizes[size]} />}
      {config.label}
    </span>
  );
}

export function AvailabilityDot({ status }: { status: AvailabilityStatus }) {
  const dotColors: Record<AvailabilityStatus, string> = {
    accepting: "bg-green-500",
    limited: "bg-yellow-500",
    waitlist: "bg-orange-500",
  };

  return (
    <span
      className={`inline-block h-2 w-2 rounded-full ${dotColors[status]}`}
      title={statusConfig[status].label}
    />
  );
}
