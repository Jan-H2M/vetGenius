# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
VetGenius.ai is a multilingual website for an AI-powered veterinary assistant platform. The website presents the company's innovative diagnostic tools for veterinarians, featuring advanced animations and internationalization.

## Development Commands

### Essential Commands
```bash
npm run dev        # Start development server on http://localhost:3000
npm run build      # Build production bundle
npm run start      # Start production server
npm install        # Install dependencies
```

### Testing Routes
The website supports three languages with automatic locale routing:
- `/nl` - Dutch (default)
- `/en` - English  
- `/fr` - French

## Architecture

### Core Technology Stack
- **Next.js 14.2.5** with App Router (`app/` directory)
- **next-intl** for internationalization with server components
- **Framer Motion** for animations (scroll-triggered, hover effects)
- **Lottie React** for vector animations
- **Tailwind CSS** for styling (configured with `components/` directory scanning)
- **TypeScript** for type safety

### Internationalization Architecture
The i18n setup uses next-intl with the following structure:
- `middleware.ts` - Handles locale detection and routing
- `i18n/routing.ts` - Defines supported locales and routing configuration
- `i18n/request.ts` - Configures message loading per locale
- `messages/*.json` - Translation files for nl, en, fr
- `app/[locale]/` - Dynamic route segment for locale-based routing

### Component Architecture
- `app/[locale]/page.tsx` - Server component that fetches translations
- `components/AnimatedClientHome.tsx` - Client component with Framer Motion animations, Lottie animations, and interactive elements
- `components/ClientHome.tsx` - Non-animated fallback version
- `components/LanguageSelector.tsx` - Language switcher using next-intl's router

### Animation Strategy
Animations are configured with `triggerOnce: true` for performance:
- Scroll animations trigger once when elements come into view
- Continuous animations (logos, backgrounds) loop infinitely
- Hover animations remain always active
- Counter animations trigger once at 30% viewport visibility

### Key Implementation Details
1. **Locale routing** requires the routing configuration to be imported from `i18n/routing.ts`, not `i18n/config.ts`
2. **Tailwind scanning** must include both `app/**` and `components/**` directories
3. **Server components** use `getTranslations()` from next-intl/server
4. **Client components** receive translations as props from server components
5. **Language switching** uses `router.replace()` with locale parameter to maintain current page

### Business Context
The website showcases VetGenius's AI veterinary platform with:
- Multimodal diagnostics (X-rays, ultrasounds, blood tests)
- AI-powered analysis with GPT-OSS-120B model
- Graph RAG knowledge base
- GDPR-compliant security
- Contact form for early adopter program in Belgium (+32 476 44 18 37)

## Common Issues and Solutions

### Styling Not Appearing
Ensure `tailwind.config.js` includes:
```javascript
content: [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
]
```

### Locale Routes 404
Verify:
1. `[locale]` folder exists with proper brackets (not escaped)
2. `next.config.js` specifies the i18n request path: `createNextIntlPlugin('./i18n/request.ts')`
3. `routing.ts` exports the routing configuration properly

### Animation Performance
Animations use `triggerOnce: true` by design. To make animations repeat:
- Change `triggerOnce: false` in `useInView` hooks
- Adjust `viewport` thresholds for trigger points