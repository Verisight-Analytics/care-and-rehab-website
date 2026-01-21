"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Star, ArrowRight } from "lucide-react";
import type { Facility } from "@/data/facilities";

interface FacilityMapProps {
  facilities: Facility[];
  center?: { lat: number; lng: number };
  zoom?: number;
  height?: string;
  selectedFacility?: string;
  showSingleMarker?: boolean;
}

export function FacilityMap({
  facilities,
  center,
  zoom = 7,
  height = "400px",
  selectedFacility,
  showSingleMarker = false,
}: FacilityMapProps) {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const [MapComponents, setMapComponents] = useState<{
    MapContainer: React.ComponentType<any>;
    TileLayer: React.ComponentType<any>;
    Marker: React.ComponentType<any>;
    Popup: React.ComponentType<any>;
  } | null>(null);
  const [L, setL] = useState<any>(null);
  /* eslint-enable @typescript-eslint/no-explicit-any */

  useEffect(() => {
    const linkId = "leaflet-css";
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
      link.crossOrigin = "";
      document.head.appendChild(link);
    }

    import("leaflet").then((leaflet) => {
      import("react-leaflet").then((reactLeaflet) => {
        setL(leaflet.default);
        setMapComponents({
          MapContainer: reactLeaflet.MapContainer,
          TileLayer: reactLeaflet.TileLayer,
          Marker: reactLeaflet.Marker,
          Popup: reactLeaflet.Popup,
        });
      });
    });
  }, []);

  if (!MapComponents || !L) {
    return (
      <div
        className="flex items-center justify-center bg-[var(--primary-50)] rounded-xl"
        style={{ height }}
      >
        <div className="text-center">
          <MapPin className="h-8 w-8 text-[var(--primary)] mx-auto mb-2 animate-pulse" />
          <p className="text-sm text-[var(--muted)]">Loading map...</p>
        </div>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup } = MapComponents;

  const mapCenter = center || {
    lat: facilities.reduce((sum, f) => sum + f.coordinates.lat, 0) / facilities.length,
    lng: facilities.reduce((sum, f) => sum + f.coordinates.lng, 0) / facilities.length,
  };

  const createCustomIcon = (facility: Facility) => {
    const isFiveStar = facility.cmsRating === 5;
    const isSelected = facility.slug === selectedFacility;

    return L.divIcon({
      className: "custom-marker",
      html: `
        <div class="relative">
          <div class="w-8 h-8 ${isSelected ? "bg-[var(--warmth)]" : "bg-[var(--primary)]"} rounded-full flex items-center justify-center shadow-lg border-2 border-white transform ${isSelected ? "scale-125" : ""} transition-transform">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          ${isFiveStar ? '<div class="absolute -top-1 -right-1 w-4 h-4 bg-[var(--warmth)] rounded-full flex items-center justify-center"><svg class="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></div>' : ""}
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
  };

  const displayFacilities = showSingleMarker
    ? facilities.filter((f) => f.slug === selectedFacility)
    : facilities;

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg" style={{ height }}>
      <MapContainer
        center={[mapCenter.lat, mapCenter.lng]}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {displayFacilities.map((facility) => (
          <Marker
            key={facility.slug}
            position={[facility.coordinates.lat, facility.coordinates.lng]}
            icon={createCustomIcon(facility)}
          >
            <Popup>
              <div className="p-1 min-w-[200px]">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-[var(--foreground)]">{facility.shortName}</h3>
                  {facility.cmsRating === 5 && (
                    <span className="flex items-center gap-0.5 text-xs text-[var(--warmth)]">
                      <Star className="h-3 w-3" fill="currentColor" />
                      5-Star
                    </span>
                  )}
                </div>
                <p className="text-xs text-[var(--muted)] mt-1">
                  {facility.address.city}, {facility.address.state} &bull; {facility.beds} beds
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs">
                  <a
                    href={`tel:${facility.phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-1 text-[var(--primary)] hover:underline"
                  >
                    <Phone className="h-3 w-3" />
                    {facility.phone}
                  </a>
                </div>
                <Link
                  href={`/locations/${facility.slug}`}
                  className="mt-2 flex items-center gap-1 text-xs font-medium text-[var(--primary)] hover:underline"
                >
                  View details <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {!showSingleMarker && (
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3 z-[1000]">
          <p className="text-xs font-medium text-[var(--foreground)] mb-2">Map Legend</p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs">
              <div className="w-4 h-4 bg-[var(--primary)] rounded-full" />
              <span className="text-[var(--muted)]">Facility</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="relative w-4 h-4 bg-[var(--primary)] rounded-full">
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[var(--warmth)] rounded-full" />
              </div>
              <span className="text-[var(--muted)]">5-Star Rated</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
