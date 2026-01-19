# Care & Rehab Website

Modern website for Care & Rehab skilled nursing facilities across Wisconsin and Minnesota.

**Built by [VeriSight Analytics](https://verisightanalytics.com)**

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Hosting:** Azure Static Web Apps

## Features

- 6 facility location pages with detailed information
- Services showcase (Skilled Nursing, Rehab, Memory Care, etc.)
- Mobile-first responsive design
- SEO optimized with meta tags and structured data
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
├── app/                 # Next.js App Router pages
│   ├── page.tsx         # Homepage
│   ├── locations/       # Location pages
│   └── layout.tsx       # Root layout
├── components/
│   ├── layout/          # Header, Footer
│   ├── ui/              # Reusable UI components
│   └── sections/        # Page sections
├── data/
│   └── facilities.ts    # Facility data
└── lib/
    └── utils.ts         # Utility functions
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

## Contact

- **Website:** [careandrehab.com](https://careandrehab.com)
- **Email:** info@careandrehab.org
- **Admissions:** (715) 937-5524

---

&copy; 2024 Care & Rehab. All rights reserved.
