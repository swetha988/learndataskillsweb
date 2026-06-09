# LearnDataSkills v3 — Phase 1

World-class data education platform. Open, free, multi-level.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run preview
```

## Deploy

Push to a Git repo and connect to Vercel. The included `vercel.json` handles SPA routing.

## Demo credentials (Phase 1 mock auth)

- **Google login**: instant — clicks through to demo profile
- **Phone OTP**: any phone number works, OTP = `123456`

User data persists in `localStorage` under the key `lds_user_v1`.

## Phase 2 (real backend)

Phase 1 is frontend-only with mocked authentication and mentor booking.
Phase 2 will add:
- Real Firebase Auth (Google OAuth + phone OTP via Twilio/Firebase)
- Supabase or Firestore for user/progress data
- Real Google Calendar API + Meet integration for mentor sessions

## Stack

- Vite + React 18
- React Router 6
- Framer Motion (animations)
- Lucide React (icons)
- Brand system in `src/styles/globals.css`

## Brand

Built strictly to LearnDataSkills Brand Guidelines v1.0:
- Colors: Navy #0F172A, Blue #2563EB, Cyan #06B6D4, Amber #FCD34D
- Fonts: Instrument Serif (display), Inter (body), DM Mono (code)
- Logo: The Data Tree Mark (branching decision tree with 4 leaf nodes + 4 learners + amber teacher)

## Course structure

Every live course has three tracks:
- **Beginner** — foundation, no prior experience needed
- **Intermediate** — real-world workflows
- **Advanced** — production-grade skills

Datasets are global — NYC Taxi, UK Retail, IPL, Spotify, World Bank, Olympics, COVID-19, AdventureWorks, and more.

## Mentor system

6 alumni mentors across Bengaluru, San Francisco, Mumbai, Stockholm, Buenos Aires.
Booking flow: pick slot → confirm → mock Google Meet link generated. Replace with real Calendar API in Phase 2.
