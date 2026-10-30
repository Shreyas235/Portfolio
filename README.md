# Shreyas Kowndinya R — Portfolio

React 19 + TypeScript + Vite + Tailwind CSS 4 + Framer Motion + React Three Fiber.
The production build is a single self-contained `dist/index.html` (via `vite-plugin-singlefile`).

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
npm run preview  # serve the built site
```

## Where to change things

| I want to change…                         | Edit this                                   |
| ----------------------------------------- | ------------------------------------------- |
| Phone, email, WhatsApp, social links      | `src/data/contact.ts`                       |
| Projects in "Selected work"               | `src/data/projects.ts` (+ image in `src/assets/images/`) |
| "More live websites" cards                | `src/data/sites.ts`                         |
| Skills and chips                          | `src/data/skills.ts`                        |
| Experience bullet points                  | `src/data/experience.ts`                    |
| About paragraph and stat counters         | `src/data/about.ts`                         |
| Typing roles in the hero                  | `src/data/hero.ts`                          |
| Navbar links                              | `src/data/nav.ts`                           |
| Colours, fonts, dark-mode variables       | `src/styles/theme.css`                      |
| Resume PDF                                | `public/resume.pdf`                         |

## Structure

```
src/
├── main.tsx                 entry point
├── App.tsx                  page layout only: wires the sections together
├── assets/images/           every image in one place (profile + project screenshots)
├── components/
│   ├── layout/              Header, ScrollProgress, BackToTop
│   ├── hero/                Hero, HeroActions, HeroActionsGhost, HeroReveal, Hero3D, Typing
│   ├── about/               About, Counter
│   ├── skills/              Skills, SkillCard, ChipView, Repel
│   ├── projects/            Projects, ProjectFan
│   ├── sites/               MoreSites, SiteCard
│   ├── experience/          Experience
│   ├── contact/             Contact, ContactForm, InfoCard, AppIcon
│   └── ui/                  shared building blocks: Reveal, Magnetic, Tilt, Letters, Heading, BrandIcon
├── data/                    all content, kept out of the UI code
├── hooks/                   useTheme, useScrolledPast, useScrollProgress, useCanShow3D, useLiquidReveal
├── utils/                   animation variants, media helpers, liquid-trail maths, console easter egg
└── styles/                  index.css (entry) + theme, base, surfaces, effects, touch
```

Imports use the `@/` alias for `src/` (configured in `vite.config.ts` and `tsconfig.json`),
e.g. `import { Reveal } from '@/components/ui/Reveal'`.
