"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Tawk_API?: {
      onLoad?: () => void;
      toggle?: () => void;
      maximize?: () => void;
      minimize?: () => void;
      hideWidget?: () => void;
      showWidget?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

interface ChatWidgetProps {
  propertyId?: string;
  widgetId?: string;
}

export function ChatWidget({
  propertyId = "TAWK_PROPERTY_ID",
  widgetId = "default",
}: ChatWidgetProps) {
  useEffect(() => {
    if (window.Tawk_API || propertyId === "TAWK_PROPERTY_ID") {
      return;
    }

    window.Tawk_API = {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        `script[src*="embed.tawk.to"]`
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [propertyId, widgetId]);

  if (propertyId === "TAWK_PROPERTY_ID") {
    return (
      <a
        href="tel:+17159375524"
        className="fixed bottom-20 right-4 z-40 hidden lg:flex items-center gap-2 rounded-full bg-[var(--teal)] px-4 py-3 text-white shadow-lg hover:bg-[var(--teal-700)] transition-all hover:scale-105"
        aria-label="Contact admissions"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span className="text-sm font-semibold">Need Help?</span>
      </a>
    );
  }

  return null;
}
