export type ServiceType =
  | "skilled-nursing"
  | "rehabilitation"
  | "memory-care"
  | "assisted-living"
  | "independent-living"
  | "respite-care"
  | "hospice";

export interface Facility {
  slug: string;
  name: string;
  shortName: string;
  address: {
    street: string;
    city: string;
    state: "WI" | "MN";
    zip: string;
  };
  phone: string;
  fax?: string;
  administrator: {
    name: string;
    credentials: string;
  };
  coordinates: { lat: number; lng: number };
  beds: number;
  services: ServiceType[];
  cmsRating?: number; // Only show if 4-5 stars
  hospitalAffiliation?: string;
  description: string;
  highlights: string[];
}

export const facilities: Facility[] = [
  {
    slug: "cumberland",
    name: "Care & Rehab - Cumberland",
    shortName: "Cumberland",
    address: {
      street: "1100 Seventh Avenue",
      city: "Cumberland",
      state: "WI",
      zip: "54829",
    },
    phone: "(715) 822-7050",
    fax: "(715) 822-7051",
    administrator: {
      name: "Kristin Stokes",
      credentials: "NHA, BS",
    },
    coordinates: { lat: 45.5325, lng: -92.0194 },
    beds: 50,
    services: [
      "skilled-nursing",
      "rehabilitation",
      "memory-care",
      "independent-living",
      "respite-care",
      "hospice",
    ],
    cmsRating: 5,
    description:
      "Our Cumberland facility has achieved Medicare's highest 5-star rating, reflecting our commitment to exceptional care. Connected to Cumberland Healthcare, we offer seamless access to hospital services while maintaining a warm, home-like environment.",
    highlights: [
      "5-Star Medicare Rating",
      "Connected to Cumberland Healthcare",
      "Independent Living Apartments",
      "Exceptional 5.7% Staff Turnover",
    ],
  },
  {
    slug: "ladysmith",
    name: "Care & Rehab - Ladysmith",
    shortName: "Ladysmith",
    address: {
      street: "1001 East 11th Street North",
      city: "Ladysmith",
      state: "WI",
      zip: "54848",
    },
    phone: "(715) 532-5546",
    fax: "(715) 609-1212",
    administrator: {
      name: "Ann Novak",
      credentials: "RN, NHA, BS",
    },
    coordinates: { lat: 45.4633, lng: -91.1042 },
    beds: 50,
    services: [
      "skilled-nursing",
      "rehabilitation",
      "memory-care",
      "assisted-living",
      "respite-care",
      "hospice",
    ],
    hospitalAffiliation: "Rusk County Memorial Hospital & Marshfield Clinic",
    description:
      "Attached to Rusk County Memorial Hospital and Marshfield Clinic, our Ladysmith facility offers convenient access to in-house x-rays, lab services, and medical appointments. Our dedicated team provides person-centered care in a supportive environment.",
    highlights: [
      "Hospital & Clinic On-Site",
      "In-House X-Ray & Lab",
      "Assisted Living Available",
      "Registered Dietitian Monitoring",
    ],
  },
  {
    slug: "barron",
    name: "Care & Rehab - Barron",
    shortName: "Barron",
    address: {
      street: "660 East Birch Avenue",
      city: "Barron",
      state: "WI",
      zip: "54812",
    },
    phone: "(715) 537-5643",
    fax: "(715) 537-5911",
    administrator: {
      name: "Len Fast",
      credentials: "NHA, BS",
    },
    coordinates: { lat: 45.4014, lng: -91.8486 },
    beds: 50,
    services: [
      "skilled-nursing",
      "rehabilitation",
      "memory-care",
      "respite-care",
      "hospice",
    ],
    description:
      "Located in the heart of Barron County, our facility serves communities including Rice Lake, Chetek, and the surrounding area. We're just minutes from Mayo Clinic Health System Northland for specialized care needs.",
    highlights: [
      "Near Mayo Clinic Northland",
      "Secure Memory Care Unit",
      "Physical, Occupational & Speech Therapy",
      "24/7 Skilled Nursing",
    ],
  },
  {
    slug: "boscobel",
    name: "Care & Rehab - Boscobel",
    shortName: "Boscobel",
    address: {
      street: "207 Parker Street",
      city: "Boscobel",
      state: "WI",
      zip: "53805",
    },
    phone: "(608) 375-6342",
    fax: "(608) 375-6358",
    administrator: {
      name: "Jessica Bechtel",
      credentials: "NHA",
    },
    coordinates: { lat: 43.1344, lng: -90.7056 },
    beds: 50,
    services: [
      "skilled-nursing",
      "rehabilitation",
      "memory-care",
      "respite-care",
      "hospice",
    ],
    hospitalAffiliation: "Gundersen Lutheran Memorial Hospital",
    description:
      "Serving Southwest Wisconsin since 1984, our Boscobel facility is attached to Gundersen Lutheran Memorial Hospital for convenient in-house medical services. We provide comprehensive care for residents from Boscobel, Fennimore, Prairie du Chien, and beyond.",
    highlights: [
      "Established 1984 - 40+ Years",
      "Hospital Attached",
      "In-House X-Ray & Lab",
      "Secure Memory Care",
    ],
  },
  {
    slug: "neillsville",
    name: "Care & Rehab - Neillsville",
    shortName: "Neillsville",
    address: {
      street: "316 Sunset Place",
      city: "Neillsville",
      state: "WI",
      zip: "54456",
    },
    phone: "(715) 743-5444",
    fax: "(715) 743-5448",
    administrator: {
      name: "Lisa Cerven",
      credentials: "LPN, NHA",
    },
    coordinates: { lat: 44.5608, lng: -90.5961 },
    beds: 60,
    services: [
      "skilled-nursing",
      "rehabilitation",
      "memory-care",
      "assisted-living",
      "respite-care",
      "hospice",
    ],
    description:
      "Our Neillsville facility offers 60 beds of comprehensive care in Clark County. With both skilled nursing and assisted living options, we provide a seamless continuum of care as residents' needs evolve.",
    highlights: [
      "60 Beds - Largest Facility",
      "Assisted Living Available",
      "Medicare & Medicaid Certified",
      "Full Therapy Services",
    ],
  },
  {
    slug: "ostrander",
    name: "Care & Rehab - Ostrander",
    shortName: "Ostrander",
    address: {
      street: "305 Minnesota Street",
      city: "Ostrander",
      state: "MN",
      zip: "55961",
    },
    phone: "(507) 657-2231",
    fax: "(507) 657-2403",
    administrator: {
      name: "Janice Howe",
      credentials: "BS, RN, NHA",
    },
    coordinates: { lat: 43.6097, lng: -92.4264 },
    beds: 25,
    services: [
      "skilled-nursing",
      "rehabilitation",
      "memory-care",
      "assisted-living",
      "respite-care",
      "hospice",
    ],
    description:
      "Family-owned and operated for over 20 years, our Ostrander facility offers intimate, personalized care in Southeast Minnesota. Approximately 90% of our skilled nursing rooms are spacious suites, providing comfort and privacy.",
    highlights: [
      "20+ Years Family-Owned",
      "90% Suite-Style Rooms",
      "Assisted Living Apartments",
      "Serves Rochester Area",
    ],
  },
];

export function getFacilityBySlug(slug: string): Facility | undefined {
  return facilities.find((f) => f.slug === slug);
}

export function getFacilitiesByState(state: "WI" | "MN"): Facility[] {
  return facilities.filter((f) => f.address.state === state);
}

export function getFacilitiesByService(service: ServiceType): Facility[] {
  return facilities.filter((f) => f.services.includes(service));
}

export const totalBeds = facilities.reduce((sum, f) => sum + f.beds, 0);
export const totalFacilities = facilities.length;
