import {
  Stethoscope,
  Activity,
  Brain,
  Home,
  HandHeart,
  Heart,
  type LucideIcon,
} from "lucide-react";
import type { ServiceType } from "./facilities";

export interface Service {
  slug: ServiceType;
  name: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  whoIsItFor: string[];
  whatToExpect: string[];
  insurance: string[];
}

export const services: Service[] = [
  {
    slug: "skilled-nursing",
    name: "24-Hour Skilled Nursing",
    shortDescription:
      "Round-the-clock medical care provided by licensed nurses for residents who need ongoing clinical support.",
    description:
      "Our skilled nursing services provide comprehensive, round-the-clock medical care for individuals who require ongoing clinical attention. Our team of registered nurses (RNs) and licensed practical nurses (LPNs) work alongside physicians to deliver personalized care plans that address each resident's unique health needs. From medication management to wound care, our skilled nursing staff ensures residents receive the highest quality medical attention in a comfortable, home-like environment.",
    icon: Stethoscope,
    features: [
      "24/7 licensed nursing coverage",
      "Physician-directed care plans",
      "Medication management and administration",
      "Wound care and treatment",
      "IV therapy and injections",
      "Chronic disease management",
      "Post-surgical recovery care",
      "Pain management",
      "Vital sign monitoring",
      "Care coordination with specialists",
    ],
    whoIsItFor: [
      "Individuals recovering from surgery or hospitalization",
      "Those with chronic conditions requiring ongoing monitoring",
      "Residents needing complex medical treatments",
      "Patients requiring wound care or IV therapy",
      "Those transitioning from acute hospital care",
    ],
    whatToExpect: [
      "Comprehensive health assessment upon admission",
      "Personalized care plan developed with your physician",
      "Regular health status updates to family members",
      "Coordination with your primary care provider",
      "Access to on-call physicians 24/7",
    ],
    insurance: [
      "Medicare Part A (for qualifying stays)",
      "Medicaid",
      "Most private insurance plans",
      "Private pay options available",
    ],
  },
  {
    slug: "rehabilitation",
    name: "Rehabilitation Therapy",
    shortDescription:
      "Physical, occupational, and speech therapy to help you regain independence and return home stronger.",
    description:
      "Our comprehensive rehabilitation program is designed to help you recover from illness, injury, or surgery and return to your highest level of independence. Our therapy team includes physical therapists, occupational therapists, and speech-language pathologists who work together to create a personalized recovery plan. With state-of-the-art equipment and evidence-based techniques, we help you rebuild strength, restore function, and achieve your recovery goals.",
    icon: Activity,
    features: [
      "Physical therapy for mobility and strength",
      "Occupational therapy for daily living skills",
      "Speech therapy for communication and swallowing",
      "Post-stroke rehabilitation",
      "Orthopedic rehabilitation",
      "Cardiac rehabilitation",
      "Neurological rehabilitation",
      "Balance and fall prevention training",
      "Pain management techniques",
      "Home transition planning",
    ],
    whoIsItFor: [
      "Patients recovering from joint replacement surgery",
      "Stroke survivors needing rehabilitation",
      "Those recovering from fractures or falls",
      "Individuals with neurological conditions",
      "Patients after cardiac events",
      "Anyone needing to rebuild strength and mobility",
    ],
    whatToExpect: [
      "Initial evaluation by our therapy team",
      "Customized therapy goals based on your needs",
      "Daily therapy sessions (5-6 days per week)",
      "Regular progress assessments",
      "Family education and training",
      "Discharge planning to ensure safe transition home",
    ],
    insurance: [
      "Medicare Part A (short-term rehabilitation)",
      "Medicare Part B (outpatient therapy)",
      "Medicaid",
      "Most private insurance plans",
      "Workers' compensation",
    ],
  },
  {
    slug: "memory-care",
    name: "Memory Care",
    shortDescription:
      "Specialized care for residents with Alzheimer's disease, dementia, and other memory-related conditions.",
    description:
      "Our memory care program provides specialized, compassionate support for individuals living with Alzheimer's disease, dementia, and other cognitive conditions. Our specially trained staff understands the unique challenges of memory loss and creates a safe, structured environment that promotes dignity, engagement, and quality of life. Through person-centered care approaches and meaningful activities, we help residents maintain their sense of self while receiving the support they need.",
    icon: Brain,
    features: [
      "Secure, home-like environment",
      "Staff specially trained in dementia care",
      "Person-centered care approaches",
      "Structured daily routines",
      "Cognitive stimulation activities",
      "Music and art therapy programs",
      "Reminiscence therapy",
      "Wandering management and safety measures",
      "Behavioral support without over-medication",
      "Family education and support groups",
    ],
    whoIsItFor: [
      "Individuals diagnosed with Alzheimer's disease",
      "Those with vascular dementia",
      "Residents with Lewy body dementia",
      "People with memory loss affecting daily safety",
      "Those who need a structured, secure environment",
    ],
    whatToExpect: [
      "Comprehensive cognitive assessment",
      "Individualized care plan addressing specific needs",
      "Consistent daily routines for comfort and security",
      "Regular communication with family members",
      "Engaging activities tailored to abilities",
      "Compassionate end-of-life support when needed",
    ],
    insurance: [
      "Medicaid (in most locations)",
      "Long-term care insurance",
      "Private pay",
      "Some Medicare coverage for skilled nursing needs",
    ],
  },
  {
    slug: "assisted-living",
    name: "Assisted Living",
    shortDescription:
      "Help with daily activities while maintaining independence in a comfortable residential setting.",
    description:
      "Our assisted living services bridge the gap between independent living and skilled nursing care. We provide personalized assistance with daily activities—like bathing, dressing, and medication reminders—while encouraging residents to maintain as much independence as possible. Enjoy the comfort of home-like accommodations with the peace of mind that comes from having caring staff available around the clock.",
    icon: Home,
    features: [
      "Assistance with activities of daily living",
      "Medication reminders and management",
      "Housekeeping and laundry services",
      "Three nutritious meals daily",
      "Social and recreational activities",
      "Transportation assistance",
      "24-hour staff availability",
      "Personal emergency response systems",
      "Wellness programs",
      "Beauty and barber services",
    ],
    whoIsItFor: [
      "Seniors who need help with daily tasks",
      "Those who can no longer live safely alone",
      "Individuals wanting social engagement",
      "People seeking relief from home maintenance",
      "Those who need some support but not nursing care",
    ],
    whatToExpect: [
      "Personalized assessment of care needs",
      "Flexible care plans that adapt as needs change",
      "Private or semi-private accommodations",
      "Active social calendar with varied activities",
      "Nutritious meals with dietary accommodations",
      "Regular wellness checks",
    ],
    insurance: [
      "Long-term care insurance",
      "Private pay",
      "Some Medicaid waiver programs",
      "Veterans benefits (Aid & Attendance)",
    ],
  },
  {
    slug: "respite-care",
    name: "Respite Care",
    shortDescription:
      "Short-term stays that give family caregivers a well-deserved break while their loved one receives quality care.",
    description:
      "Respite care provides temporary relief for family caregivers while ensuring their loved ones receive quality care in a supportive environment. Whether you need a few days for vacation, recovery from illness, or simply a break from caregiving responsibilities, our respite program offers peace of mind. Your loved one will enjoy all the amenities and services of our community while you take time to recharge.",
    icon: HandHeart,
    features: [
      "Short-term stays (days to weeks)",
      "Full access to all community amenities",
      "Nursing care as needed",
      "Meals and activities included",
      "Medication management",
      "Personal care assistance",
      "Social engagement opportunities",
      "Trial stay before long-term commitment",
      "Emergency respite for unexpected needs",
      "Planned respite for scheduled breaks",
    ],
    whoIsItFor: [
      "Family caregivers needing a break",
      "Those recovering from surgery or illness at home",
      "Seniors whose regular caregiver is unavailable",
      "Individuals wanting to try community living",
      "Families planning vacations or travel",
    ],
    whatToExpect: [
      "Easy admission process with minimal paperwork",
      "Warm welcome and orientation to the community",
      "Full participation in activities and meals",
      "Regular updates for family members",
      "Smooth transition back home",
      "Option to extend stay if needed",
    ],
    insurance: [
      "Some Medicare coverage after qualifying hospital stay",
      "Medicaid (varies by state)",
      "Long-term care insurance (check policy)",
      "Private pay (daily rates available)",
      "Veterans benefits",
    ],
  },
  {
    slug: "hospice",
    name: "Hospice Care",
    shortDescription:
      "Compassionate end-of-life care focused on comfort, dignity, and quality of life for residents and families.",
    description:
      "Our hospice care program provides compassionate support for residents and their families during end-of-life. We partner with local hospice agencies to ensure residents receive comprehensive comfort care that addresses physical, emotional, and spiritual needs. Our goal is to maximize quality of life, minimize discomfort, and support families through this difficult journey with dignity and grace.",
    icon: Heart,
    features: [
      "Pain and symptom management",
      "Comfort-focused care approach",
      "Coordination with hospice agencies",
      "Emotional and spiritual support",
      "Family counseling and support",
      "Bereavement services",
      "24/7 nursing availability",
      "Private rooms when available",
      "Flexible visiting hours for family",
      "Chaplain services",
    ],
    whoIsItFor: [
      "Residents with terminal illness (6 months or less prognosis)",
      "Those choosing comfort over curative treatment",
      "Families seeking support during end-of-life",
      "Individuals wanting to remain in familiar surroundings",
      "Those needing specialized pain management",
    ],
    whatToExpect: [
      "Consultation with hospice team and physician",
      "Comprehensive comfort care plan",
      "Regular visits from hospice nurses and aides",
      "Access to hospice social workers and chaplains",
      "Support for family members throughout",
      "Bereavement support after passing",
    ],
    insurance: [
      "Medicare Hospice Benefit (covers most costs)",
      "Medicaid Hospice Benefit",
      "Most private insurance plans",
      "Veterans benefits",
      "No one is turned away for inability to pay",
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((s) => s.slug === slug);
};

export const totalServices = services.length;
