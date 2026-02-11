# AGENTS.md - Project Documentation

## Project Overview

**Planbar Abgesichert** is a German-language lead generation web application for funeral insurance ("Sterbegeldversicherung"). It functions as a marketing funnel that:

1. Educates visitors about funeral costs in Germany through an advertorial page
2. Guides users through a 4-step qualification funnel to collect lead information
3. Submits qualified leads to HubSpot CRM for follow-up by insurance advisors

The application is designed with a soft, trust-building UI using baby blue and warm beige colors to handle the sensitive topic with care.

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | React 19.2.0 |
| Build Tool | Vite 7.2.4 |
| Routing | react-router-dom 7.13.0 |
| Styling | Tailwind CSS 3.4.17 |
| UI Animations | framer-motion 12.33.0 |
| Icons | lucide-react 0.563.0 |
| Class Utilities | clsx + tailwind-merge |
| Linting | ESLint 9 with React Hooks plugin |

## Project Structure

```
funeral-funnel/
├── public/                    # Static assets
│   ├── _redirects            # Netlify redirect rules
│   ├── funnel1/              # Step 1 images (beneficiaries)
│   ├── funnel2/              # Step 2 images (coverage amounts)
│   ├── home/                 # Hero images
│   └── vite.svg              # Favicon
├── src/
│   ├── components/
│   │   ├── funnel/           # Funnel step components
│   │   │   ├── ProgressBar.jsx
│   │   │   ├── Step1Beneficiary.jsx
│   │   │   ├── Step2Amount.jsx
│   │   │   ├── Step3Birthdate.jsx
│   │   │   └── Step4LeadForm.jsx
│   │   └── ui/               # Reusable UI components
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── CookieBanner.jsx
│   │       ├── Footer.jsx
│   │       ├── Header.jsx
│   │       └── Layout.jsx
│   ├── lib/
│   │   └── utils.js          # Utility functions (cn helper)
│   ├── pages/                # Route-level page components
│   │   ├── AdvertorialPage.jsx
│   │   ├── FunnelPage.jsx
│   │   ├── ImpressumPage.jsx
│   │   └── DatenschutzPage.jsx
│   ├── services/
│   │   └── hubspot.js        # HubSpot CRM integration
│   ├── App.jsx               # Main app with routing
│   ├── index.css             # Global styles + Tailwind
│   └── main.jsx              # Application entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── eslint.config.js
```

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server (Vite dev server)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## Route Structure

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `AdvertorialPage` | Landing page with educational content about funeral costs |
| `/check` | `FunnelPage` | 4-step lead qualification funnel |
| `/impressum` | `ImpressumPage` | Legal imprint (required in Germany) |
| `/datenschutz` | `DatenschutzPage` | Privacy policy page |

## Funnel Flow

The funnel (`/check`) consists of 4 steps:

1. **Step 1 - Beneficiary Selection**: User selects who should be insured (children, partner, other, self)
2. **Step 2 - Coverage Amount**: User selects desired coverage amount (€6K, €8K, €10K, or unsure)
3. **Step 3 - Birthdate**: User enters their birthdate (DD.MM.YYYY format)
4. **Step 4 - Contact Form**: User provides personal details (name, address, phone, email, job, availability)

Form data is accumulated across steps and submitted to HubSpot upon completion.

## HubSpot Integration

The `src/services/hubspot.js` file handles CRM submission:

- Uses HubSpot Forms API v3
- Portal ID: `147767429`
- Form ID: `6685ac5c-fec9-45fd-b72a-ada28bd8803a`
- Region: `eu1`

**Field Mapping:**
- `firstname` / `lastname` - Name fields
- `email` / `phone` - Contact details
- `plz` / `stadt` / `adresse` - Address fields
- `berufsgruppe` - Employment status
- `erreichbarkeit` - Preferred contact time
- `empfanger` - Selected beneficiary
- `versicherungssumme` - Selected coverage amount
- `geburtsdatum` - Birthdate (formatted as DD.MM.YYYY)

## Styling Conventions

### Tailwind Custom Theme Extensions

Located in `tailwind.config.js`:

**Colors:**
- `brand` - Baby blue palette (50-900), primary brand color
- `warm` - Beige/tan palette for backgrounds
- `accent` - Action colors for buttons
- `soft-bg` - Warm off-white background
- `glass-border` - Semi-transparent borders

**Fonts:**
- `font-sans` - Inter (Google Fonts)
- `font-serif` - Playfair Display (Google Fonts)

**Custom Utilities:**
- `.glass` - Glassmorphism effect (blur + transparency)
- `.glass-card` - Card with glass effect and soft shadow
- `.container-tight` - Narrow container for reading content

### Design Principles

1. **Soft, approachable aesthetics** - Use brand-300 (baby blue) as primary action color instead of harsh tones
2. **Glassmorphism** - Use backdrop blur and semi-transparent backgrounds for cards
3. **Warm backgrounds** - Use warm-50 (soft beige) for page backgrounds
4. **Serif headings** - Use Playfair Display for trust and elegance
5. **Subtle animations** - Use framer-motion for smooth transitions (scale, fade, slide)

## Component Patterns

### UI Components

All UI components in `src/components/ui/` follow these patterns:
- Accept `className` prop for style overrides using `cn()` utility
- Use framer-motion for interactive animations
- Support variant props for different visual styles

### Funnel Step Components

Step components receive these standard props:
- `value` - Current value for this step's data
- `onChange(field, value)` - Callback to update parent form state
- `onNext()` / `onBack()` - Navigation callbacks (where applicable)

## State Management

The funnel uses React's built-in `useState` for form state:

```javascript
const [formData, setFormData] = useState({
    beneficiary: '',
    amount: '',
    birthdate: { day: '', month: '', year: '' },
    contact: {},
});
```

No external state management library is used.

## Cookie Consent

A cookie banner component (`CookieBanner.jsx`) handles GDPR compliance:
- Displays after 1 second delay on first visit
- Stores consent in `localStorage` under key `cookie-consent`
- Simple accept-only flow (no granular settings in current implementation)

## Development Guidelines

### Code Style

- **ESM modules only** - All files use ES module imports/exports
- **JSX extension** - React components use `.jsx` extension
- **Functional components** - All components are function components with hooks
- **Named exports for utilities** - `export function cn(...)` pattern
- **Default exports for components** - `export default ComponentName`

### ESLint Configuration

- Uses flat config format (`eslint.config.js`)
- Extends recommended React Hooks and React Refresh rules
- Ignores `dist/` build directory
- Allows unused variables matching `^[A-Z_]` pattern (for React components)

### Performance Optimizations

- **Lazy loading** - All page components are lazy-loaded with `React.lazy()`
- **Suspense fallback** - Loading spinner shown during chunk load
- **Image fallbacks** - Components handle missing images gracefully

## Deployment

The `public/_redirects` file contains Netlify redirect rules:
```
/*  /index.html  200
```

This enables client-side routing on Netlify by redirecting all paths to the SPA entry point.

## Security Considerations

1. **No API keys in client code** - HubSpot integration uses public Forms API (no secret keys)
2. **HTTPS enforcement** - All external APIs use HTTPS
3. **Input sanitization** - Form inputs use controlled components
4. **XSS prevention** - React's built-in escaping is used throughout

## Internationalization

The application is currently German-only:
- All UI text is in German
- Date format: DD.MM.YYYY
- Currency format: €X.XXX
- Legal pages (Impressum, Datenschutz) are German law compliant

No i18n framework is implemented; text is hardcoded in components.

## Future Enhancement Notes

Based on code comments, potential improvements include:
- Zapier/Make.com webhook integration for HubSpot (alternative to direct API)
- Netlify Functions for server-side lead handling
- More granular cookie consent management
- A/B testing framework for funnel optimization
