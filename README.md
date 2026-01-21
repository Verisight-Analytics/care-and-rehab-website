# Care & Rehab Website

Modern website for Care & Rehab skilled nursing facilities across Wisconsin and Minnesota.

**Built by [VeriSight Analytics](https://verisightanalytics.com)**

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Maps:** Leaflet + React-Leaflet
- **Hosting:** Azure Static Web Apps

## Features

- **Interactive Facility Map** - Leaflet-based map showing all 6 locations with custom markers
- **Testimonials Carousel** - Animated carousel showcasing family testimonials
- **FAQ Accordion** - Accessible, keyboard-navigable FAQ section with ARIA support
- **Mobile Sticky CTA** - Context-aware call-to-action for mobile users
- **Skip Navigation** - Accessibility-first skip link for keyboard users
- 6 facility location pages with detailed information
- 7 service pages (Skilled Nursing, Rehabilitation, Memory Care, Assisted Living, Independent Living, Respite Care, Hospice)
- Mobile-first responsive design
- SEO optimized with meta tags and Schema.org structured data
- Accessible (WCAG 2.1 guidelines)
- Fast performance (static site generation)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## Deployment

Deployed automatically to Azure Static Web Apps via GitHub Actions on push to `main`.

### Setup Azure Static Web Apps

1. Create an Azure Static Web App in the Azure Portal
2. Add the deployment token as `AZURE_STATIC_WEB_APPS_API_TOKEN` secret in GitHub
3. Push to main branch to trigger deployment

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── locations/          # Location pages
│   │   ├── page.tsx        # Locations listing with map
│   │   └── [slug]/         # Individual facility pages
│   ├── services/           # Service pages
│   ├── admissions/         # Admissions with FAQ accordion
│   └── layout.tsx          # Root layout with StickyCTA
├── components/
│   ├── layout/             # Header, Footer
│   ├── ui/                 # Reusable UI components
│   │   ├── FacilityMap.tsx # Interactive Leaflet map
│   │   ├── FAQAccordion.tsx# Accessible FAQ accordion
│   │   ├── StickyCTA.tsx   # Mobile sticky CTA
│   │   └── AnimatedSection.tsx
│   └── sections/           # Page sections
│       └── Testimonials.tsx# Testimonials carousel
├── data/
│   ├── facilities.ts       # Facility data with coordinates
│   ├── services.ts         # Service definitions
│   └── testimonials.ts     # Testimonial content
└── lib/
    └── utils.ts            # Utility functions
```

## Facilities

| Location | State | Beds | CMS Rating |
|----------|-------|------|------------|
| Cumberland | WI | 50 | 5-Star |
| Ladysmith | WI | 50 | - |
| Barron | WI | 50 | - |
| Boscobel | WI | 50 | - |
| Neillsville | WI | 60 | - |
| Ostrander | MN | 25 | - |

## Recent Updates (January 2025)

- Added interactive facility map with Leaflet
- Added testimonials carousel with Framer Motion animations
- Replaced static FAQ with accessible accordion component
- Added mobile sticky CTA for improved conversions
- Added skip navigation link for accessibility
- Added Independent Living to services navigation
- Enhanced SEO with NursingHome and FAQPage schemas

## Contact

- **Website:** [careandrehab.com](https://careandrehab.com)
- **Email:** info@careandrehab.org
- **Admissions:** (715) 937-5524

---

&copy; 2025 Care & Rehab. All rights reserved.
