/* ──────────────────────────────────────────────────────────────
   COURSE HONESTY LAYER
   Extra metadata layered on top of the catalog: prereqs, real time
   estimates, who this isn't for. Kept separate so the catalog
   structure stays clean.
   ────────────────────────────────────────────────────────────── */

export const COURSE_HONESTY = {
  sql: {
    pricing: 'Free during 2026',
    prerequisites: {
      beginner: 'None. If you can open a spreadsheet, you can start here.',
      intermediate: 'Comfortable with SELECT, WHERE, ORDER BY, and basic filtering.',
      advanced: 'Solid grasp of JOINs, GROUP BY, and subqueries.',
    },
    timeBreakdown: {
      perModule: { video: '8-12 min', exercise: '15-25 min', total: '~30 min realistic' },
    },
    notForYouIf: [
      'You want a one-week shortcut to a data job — this takes real practice',
      "You're looking for theory-only — every module ends with you writing queries",
      "You can't commit ~3 hours/week minimum to make progress stick",
    ],
  },
  python: {
    pricing: 'Free during 2026',
    prerequisites: {
      beginner: 'None. Some logical thinking helps.',
      intermediate: 'Variables, loops, functions, and basic data types.',
      advanced: 'Comfortable with pandas DataFrames and writing reusable functions.',
    },
    timeBreakdown: {
      perModule: { video: '10-15 min', exercise: '20-40 min', total: '~45 min realistic' },
    },
    notForYouIf: [
      "You only want copy-paste code — we ask you to read and modify it",
      "You expect Python to feel intuitive on day 1 — it gets easier by week 3",
      "You can't sit with bugs for 10+ minutes without giving up",
    ],
  },
  excel: {
    pricing: 'Free during 2026',
    prerequisites: {
      beginner: 'None. We start from "what is a cell".',
      intermediate: 'Comfortable with formulas, references, and basic charts.',
      advanced: 'Confident with VLOOKUP, Pivot Tables, and conditional formatting.',
    },
    timeBreakdown: {
      perModule: { video: '8-10 min', exercise: '15-20 min', total: '~25 min realistic' },
    },
    notForYouIf: [
      "You think Excel is 'beneath' a data career — it isn't, and we won't apologise for it",
      "You want only keyboard shortcuts — we focus on building real dashboards",
    ],
  },
  powerbi: {
    pricing: 'Free during 2026',
    prerequisites: {
      beginner: 'Excel basics. No prior BI tool experience needed.',
      intermediate: 'Comfortable with data modeling concepts and basic DAX.',
      advanced: 'Solid DAX, M language familiarity, and modeling experience.',
    },
    timeBreakdown: {
      perModule: { video: '10-15 min', exercise: '20-30 min', total: '~40 min realistic' },
    },
    notForYouIf: [
      'You only want pretty charts — we focus on dashboards stakeholders actually use',
      "You can't install Power BI Desktop (Windows-only for the full app)",
    ],
  },
  tableau: {
    pricing: 'Free during 2026',
    prerequisites: {
      beginner: 'None. You should know what a bar chart is.',
      intermediate: 'Comfortable with dimensions, measures, and basic calculations.',
      advanced: 'Solid with LOD expressions and parameter-driven dashboards.',
    },
    timeBreakdown: {
      perModule: { video: '10-15 min', exercise: '20-30 min', total: '~40 min realistic' },
    },
    notForYouIf: [
      "You expect a 'design course' — this is data viz that drives decisions",
      "You can't run Tableau Public (free, but requires sign-up)",
    ],
  },
  statistics: {
    pricing: 'Free during 2026',
    prerequisites: {
      beginner: 'Comfortable with averages, percentages, and basic algebra.',
      intermediate: 'Understanding of mean, median, standard deviation.',
      advanced: 'Solid grasp of hypothesis testing and probability.',
    },
    timeBreakdown: {
      perModule: { video: '12-18 min', exercise: '25-40 min', total: '~50 min realistic' },
    },
    notForYouIf: [
      "You want to skip the math — there's some, and we explain it patiently",
      "You're looking for ML theory — that's a separate course",
    ],
  },
}

export const getCourseHonesty = (slug) => COURSE_HONESTY[slug] || null
