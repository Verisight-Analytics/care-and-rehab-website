export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  relationship: string;
  facility: string;
  facilitySlug: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "The staff at Cumberland truly treated my mother like family. From the nurses to the therapists, everyone went above and beyond to ensure she was comfortable and well-cared for. The rehabilitation program helped her regain her mobility faster than we expected.",
    author: "Sarah M.",
    relationship: "Daughter of resident",
    facility: "Cumberland",
    facilitySlug: "cumberland",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "After my hip replacement, I spent six weeks at Eau Claire. The physical therapy team was exceptional - patient, encouraging, and genuinely invested in my recovery. I'm now back home and walking independently thanks to their dedicated care.",
    author: "Robert T.",
    relationship: "Former rehabilitation patient",
    facility: "Eau Claire",
    facilitySlug: "eau-claire",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Finding the right memory care facility for my husband was overwhelming until we visited Ellsworth. The specialized dementia care program gave him purpose and engagement while giving me peace of mind. The compassion shown by every staff member is remarkable.",
    author: "Linda K.",
    relationship: "Wife of resident",
    facility: "Ellsworth",
    facilitySlug: "ellsworth",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "The transition from hospital to Spring Valley was seamless. Within days, Dad was participating in activities and making friends. The 5-star rating is well-deserved - you can see the quality in every interaction with the staff.",
    author: "Michael J.",
    relationship: "Son of resident",
    facility: "Spring Valley",
    facilitySlug: "spring-valley",
    rating: 5,
  },
  {
    id: "5",
    quote:
      "We used respite care at River Falls while I recovered from surgery. Knowing Mom was in such capable hands allowed me to focus on healing. The staff kept me updated daily and made her feel right at home.",
    author: "Patricia H.",
    relationship: "Daughter of resident",
    facility: "River Falls",
    facilitySlug: "river-falls",
    rating: 5,
  },
];
