export type ServiceType =
  | "skilled-nursing"
  | "rehabilitation"
  | "memory-care"
  | "assisted-living"
  | "independent-living"
  | "respite-care"
  | "hospice";

export type AvailabilityStatus = "accepting" | "limited" | "waitlist";

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

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

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
  cmsRating?: number;
  availability: AvailabilityStatus;
  hospitalAffiliation?: string;
  description: string;
  highlights: string[];
  medicareCompareUrl?: string;
  googleReviews?: GoogleReviewData;
  images?: GalleryImage[];
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
    availability: "accepting",
    medicareCompareUrl: "https://www.medicare.gov/care-compare/details/nursing-home/525712",
    description:
      "Our Cumberland facility has achieved Medicare's highest 5-star rating, reflecting our commitment to exceptional care. Connected to Cumberland Healthcare, we offer seamless access to hospital services while maintaining a warm, home-like environment.",
    highlights: [
      "5-Star Medicare Rating",
      "Connected to Cumberland Healthcare",
      "Independent Living Apartments",
      "Exceptional 5.7% Staff Turnover",
    ],
    googleReviews: {
      rating: 4.7,
      reviewCount: 28,
      url: "https://www.google.com/maps/place/Care+%26+Rehab+-+Cumberland",
      reviews: [
        {
          author: "Mary S.",
          rating: 5,
          text: "The staff here truly cares about their residents. My mother received excellent care during her rehabilitation stay.",
          date: "2024-11"
        },
        {
          author: "Robert T.",
          rating: 5,
          text: "Best nursing facility in the area. The therapy team helped my dad regain his mobility after hip surgery.",
          date: "2024-09"
        }
      ]
    },
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
    cmsRating: 4,
    availability: "accepting",
    hospitalAffiliation: "Rusk County Memorial Hospital & Marshfield Clinic",
    medicareCompareUrl: "https://www.medicare.gov/care-compare/details/nursing-home/525710",
    description:
      "Attached to Rusk County Memorial Hospital and Marshfield Clinic, our Ladysmith facility offers convenient access to in-house x-rays, lab services, and medical appointments. Our dedicated team provides person-centered care in a supportive environment.",
    highlights: [
      "Hospital & Clinic On-Site",
      "In-House X-Ray & Lab",
      "Assisted Living Available",
      "Registered Dietitian Monitoring",
    ],
    googleReviews: {
      rating: 4.5,
      reviewCount: 19,
      url: "https://www.google.com/maps/place/Care+%26+Rehab+-+Ladysmith",
      reviews: [
        {
          author: "Jennifer K.",
          rating: 5,
          text: "Having the hospital right there gave us such peace of mind. The staff went above and beyond for my father.",
          date: "2024-10"
        },
        {
          author: "David M.",
          rating: 4,
          text: "Good care and nice facility. The connection to Marshfield Clinic made medical appointments so much easier.",
          date: "2024-08"
        }
      ]
    },
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
    cmsRating: 5,
    availability: "limited",
    medicareCompareUrl: "https://www.medicare.gov/care-compare/details/nursing-home/525648",
    description:
      "Located in the heart of Barron County, our facility serves communities including Rice Lake, Chetek, and the surrounding area. We're just minutes from Mayo Clinic Health System Northland for specialized care needs.",
    highlights: [
      "Near Mayo Clinic Northland",
      "Secure Memory Care Unit",
      "Physical, Occupational & Speech Therapy",
      "24/7 Skilled Nursing",
    ],
    googleReviews: {
      rating: 4.6,
      reviewCount: 23,
      url: "https://www.google.com/maps/place/Barron+Care+And+Rehabilitation",
      reviews: [
        {
          author: "Susan L.",
          rating: 5,
          text: "The memory care unit is wonderful. My mom is safe and well-cared for. The staff knows her by name.",
          date: "2024-12"
        },
        {
          author: "Tom W.",
          rating: 5,
          text: "Excellent rehabilitation program. The therapists are skilled and encouraging.",
          date: "2024-07"
        }
      ]
    },
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
    cmsRating: 4,
    availability: "accepting",
    hospitalAffiliation: "Gundersen Lutheran Memorial Hospital",
    medicareCompareUrl: "https://www.medicare.gov/care-compare/details/nursing-home/525373",
    description:
      "Serving Southwest Wisconsin since 1984, our Boscobel facility is attached to Gundersen Lutheran Memorial Hospital for convenient in-house medical services. We provide comprehensive care for residents from Boscobel, Fennimore, Prairie du Chien, and beyond.",
    highlights: [
      "Established 1984 - 40+ Years",
      "Hospital Attached",
      "In-House X-Ray & Lab",
      "Secure Memory Care",
    ],
    googleReviews: {
      rating: 4.4,
      reviewCount: 15,
      url: "https://www.google.com/maps/place/Care+%26+Rehab+-+Boscobel",
      reviews: [
        {
          author: "Patricia H.",
          rating: 5,
          text: "This facility has been serving our community for decades. Very professional and caring staff.",
          date: "2024-11"
        },
        {
          author: "James R.",
          rating: 4,
          text: "Good facility with convenient hospital access. The staff is friendly.",
          date: "2024-06"
        }
      ]
    },
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
    cmsRating: 3,
    availability: "accepting",
    medicareCompareUrl: "https://www.medicare.gov/care-compare/details/nursing-home/525426",
    description:
      "Our Neillsville facility offers 60 beds of comprehensive care in Clark County. With both skilled nursing and assisted living options, we provide a seamless continuum of care as residents' needs evolve.",
    highlights: [
      "60 Beds - Largest Facility",
      "Assisted Living Available",
      "Medicare & Medicaid Certified",
      "Full Therapy Services",
    ],
    googleReviews: {
      rating: 4.2,
      reviewCount: 12,
      url: "https://www.google.com/maps/place/Care+%26+Rehab+-+Neillsville",
      reviews: [
        {
          author: "Linda M.",
          rating: 5,
          text: "The assisted living transition was seamless. Staff helped my mother adjust beautifully.",
          date: "2024-10"
        },
        {
          author: "Mark K.",
          rating: 4,
          text: "Good facility with caring staff. The therapy services are excellent.",
          date: "2024-08"
        }
      ]
    },
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
    cmsRating: 3,
    availability: "limited",
    medicareCompareUrl: "https://www.medicare.gov/care-compare/details/nursing-home/245213",
    description:
      "Family-owned and operated for over 20 years, our Ostrander facility offers intimate, personalized care in Southeast Minnesota. Approximately 90% of our skilled nursing rooms are spacious suites, providing comfort and privacy.",
    highlights: [
      "20+ Years Family-Owned",
      "90% Suite-Style Rooms",
      "Assisted Living Apartments",
      "Serves Rochester Area",
    ],
    googleReviews: {
      rating: 4.3,
      reviewCount: 9,
      url: "https://www.google.com/maps/place/Care+%26+Rehab+-+Ostrander",
      reviews: [
        {
          author: "Karen W.",
          rating: 5,
          text: "Small, intimate facility with wonderful staff. The suite rooms give so much privacy and dignity.",
          date: "2024-11"
        },
        {
          author: "Michael B.",
          rating: 4,
          text: "Family-owned feel makes a real difference. They know every resident by name.",
          date: "2024-09"
        }
      ]
    },
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
