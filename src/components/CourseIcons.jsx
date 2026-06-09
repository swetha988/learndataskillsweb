import React from 'react'

/* ──────────────────────────────────────────────────────────────
   Authentic course icons — recognizable brand visuals
   Stylized inline SVGs (not vendor logos — original tributes that
   evoke each tool's official identity)
   ────────────────────────────────────────────────────────────── */

export function SqlIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="sql-g" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#0EA5E9"/><stop offset="1" stopColor="#0369A1"/>
        </linearGradient>
      </defs>
      <ellipse cx="24" cy="11" rx="15" ry="5" fill="url(#sql-g)"/>
      <path d="M9 11v8c0 2.8 6.7 5 15 5s15-2.2 15-5v-8" stroke="url(#sql-g)" strokeWidth="2.5" fill="none"/>
      <path d="M9 19v8c0 2.8 6.7 5 15 5s15-2.2 15-5v-8" stroke="url(#sql-g)" strokeWidth="2.5" fill="none"/>
      <path d="M9 27v8c0 2.8 6.7 5 15 5s15-2.2 15-5v-8" stroke="url(#sql-g)" strokeWidth="2.5" fill="none"/>
      <ellipse cx="24" cy="11" rx="15" ry="5" fill="none" stroke="#fff" strokeWidth="1" opacity="0.4"/>
    </svg>
  )
}

export function PythonIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="py-blue" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#3776AB"/><stop offset="1" stopColor="#2C5E8E"/>
        </linearGradient>
        <linearGradient id="py-yellow" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#FFD43B"/><stop offset="1" stopColor="#FFB400"/>
        </linearGradient>
      </defs>
      {/* Upper snake (blue) */}
      <path d="M24 6c-5 0-9 2-9 5v4h10v2H10c-3 0-5 3-5 7s2 7 5 7h4v-5c0-3 3-5 7-5h11c3 0 5-2 5-5V11c0-3-4-5-9-5h-4zm-5 4a2 2 0 110 4 2 2 0 010-4z"
            fill="url(#py-blue)"/>
      {/* Lower snake (yellow) */}
      <path d="M24 42c5 0 9-2 9-5v-4H23v-2h15c3 0 5-3 5-7s-2-7-5-7h-4v5c0 3-3 5-7 5H16c-3 0-5 2-5 5v10c0 3 4 5 9 5h4zm5-4a2 2 0 110-4 2 2 0 010 4z"
            fill="url(#py-yellow)"/>
    </svg>
  )
}

export function ExcelIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="ex-g" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#1F7244"/><stop offset="1" stopColor="#107C41"/>
        </linearGradient>
      </defs>
      <rect x="6" y="9" width="36" height="30" rx="3" fill="url(#ex-g)"/>
      <rect x="6" y="9" width="36" height="6" fill="#0E5C30"/>
      {/* Grid cells */}
      <g fill="#fff" opacity="0.95">
        <rect x="10" y="18" width="8" height="5" rx="0.5"/>
        <rect x="20" y="18" width="8" height="5" rx="0.5"/>
        <rect x="30" y="18" width="8" height="5" rx="0.5"/>
        <rect x="10" y="25" width="8" height="5" rx="0.5"/>
        <rect x="20" y="25" width="8" height="5" rx="0.5"/>
        <rect x="30" y="25" width="8" height="5" rx="0.5"/>
        <rect x="10" y="32" width="8" height="4" rx="0.5"/>
        <rect x="20" y="32" width="8" height="4" rx="0.5"/>
        <rect x="30" y="32" width="8" height="4" rx="0.5"/>
      </g>
      {/* X mark */}
      <text x="24" y="14" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="700" fontFamily="Arial">X</text>
    </svg>
  )
}

export function PowerBiIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="pb-y" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#F2C811"/><stop offset="1" stopColor="#E0AC00"/>
        </linearGradient>
        <linearGradient id="pb-y2" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#FFD93D"/><stop offset="1" stopColor="#F2C811"/>
        </linearGradient>
      </defs>
      {/* 3 vertical bars, like the PowerBI mark */}
      <rect x="9" y="22" width="9" height="20" rx="2" fill="url(#pb-y)"/>
      <rect x="19.5" y="14" width="9" height="28" rx="2" fill="url(#pb-y2)"/>
      <rect x="30" y="6" width="9" height="36" rx="2" fill="#FFE45C"/>
    </svg>
  )
}

export function TableauIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Tableau-style 6-bar arrangement */}
      <rect x="22" y="4" width="4" height="14" rx="0.5" fill="#1F77B4"/>
      <rect x="30" y="10" width="4" height="12" rx="0.5" fill="#FF7F0E"/>
      <rect x="14" y="10" width="4" height="12" rx="0.5" fill="#5BA0D0"/>
      <rect x="4" y="20" width="14" height="4" rx="0.5" fill="#7F7F7F"/>
      <rect x="30" y="20" width="14" height="4" rx="0.5" fill="#C0504D"/>
      <rect x="22" y="22" width="4" height="22" rx="0.5" fill="#1F77B4"/>
      <rect x="14" y="26" width="4" height="14" rx="0.5" fill="#9CC8E5"/>
      <rect x="30" y="26" width="4" height="14" rx="0.5" fill="#FFA94D"/>
    </svg>
  )
}

export function StatisticsIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="st-g" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#DC2626"/><stop offset="1" stopColor="#991B1B"/>
        </linearGradient>
      </defs>
      {/* Bell curve */}
      <path d="M4 38 Q 14 38, 18 28 Q 22 12, 24 12 Q 26 12, 30 28 Q 34 38, 44 38" 
            stroke="url(#st-g)" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Standard deviation lines */}
      <line x1="18" y1="38" x2="18" y2="28" stroke="url(#st-g)" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.6"/>
      <line x1="30" y1="38" x2="30" y2="28" stroke="url(#st-g)" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.6"/>
      <line x1="24" y1="38" x2="24" y2="12" stroke="url(#st-g)" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.6"/>
      {/* Axis */}
      <line x1="4" y1="40" x2="44" y2="40" stroke="#94A3B8" strokeWidth="1.5"/>
      {/* Sigma */}
      <text x="24" y="36" textAnchor="middle" fill="url(#st-g)" fontSize="6" fontWeight="700" fontFamily="serif">σ</text>
    </svg>
  )
}

export function MachineLearningIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="ml-g" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#8B5CF6"/><stop offset="1" stopColor="#5B21B6"/>
        </linearGradient>
      </defs>
      {/* Neural network — 3 layers */}
      {/* Input */}
      <circle cx="8" cy="14" r="3" fill="url(#ml-g)"/>
      <circle cx="8" cy="24" r="3" fill="url(#ml-g)"/>
      <circle cx="8" cy="34" r="3" fill="url(#ml-g)"/>
      {/* Hidden */}
      <circle cx="24" cy="10" r="3" fill="url(#ml-g)"/>
      <circle cx="24" cy="20" r="3" fill="url(#ml-g)"/>
      <circle cx="24" cy="30" r="3" fill="url(#ml-g)"/>
      <circle cx="24" cy="40" r="3" fill="url(#ml-g)"/>
      {/* Output */}
      <circle cx="40" cy="20" r="3" fill="url(#ml-g)"/>
      <circle cx="40" cy="28" r="3" fill="url(#ml-g)"/>
      {/* Connections */}
      <g stroke="url(#ml-g)" strokeWidth="0.7" opacity="0.5">
        <line x1="11" y1="14" x2="21" y2="10"/><line x1="11" y1="14" x2="21" y2="20"/>
        <line x1="11" y1="14" x2="21" y2="30"/><line x1="11" y1="14" x2="21" y2="40"/>
        <line x1="11" y1="24" x2="21" y2="10"/><line x1="11" y1="24" x2="21" y2="20"/>
        <line x1="11" y1="24" x2="21" y2="30"/><line x1="11" y1="24" x2="21" y2="40"/>
        <line x1="11" y1="34" x2="21" y2="10"/><line x1="11" y1="34" x2="21" y2="20"/>
        <line x1="11" y1="34" x2="21" y2="30"/><line x1="11" y1="34" x2="21" y2="40"/>
        <line x1="27" y1="10" x2="37" y2="20"/><line x1="27" y1="10" x2="37" y2="28"/>
        <line x1="27" y1="20" x2="37" y2="20"/><line x1="27" y1="20" x2="37" y2="28"/>
        <line x1="27" y1="30" x2="37" y2="20"/><line x1="27" y1="30" x2="37" y2="28"/>
        <line x1="27" y1="40" x2="37" y2="20"/><line x1="27" y1="40" x2="37" y2="28"/>
      </g>
    </svg>
  )
}

export function DataEngIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="de-g" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#475569"/><stop offset="1" stopColor="#1E293B"/>
        </linearGradient>
      </defs>
      {/* Pipeline blocks */}
      <rect x="4" y="20" width="10" height="8" rx="1.5" fill="url(#de-g)"/>
      <rect x="19" y="20" width="10" height="8" rx="1.5" fill="url(#de-g)"/>
      <rect x="34" y="20" width="10" height="8" rx="1.5" fill="url(#de-g)"/>
      {/* Arrows */}
      <path d="M14 24 L19 24" stroke="#06B6D4" strokeWidth="1.5" markerEnd="url(#arr)"/>
      <path d="M29 24 L34 24" stroke="#06B6D4" strokeWidth="1.5" markerEnd="url(#arr)"/>
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#06B6D4"/>
        </marker>
      </defs>
      {/* Top: source */}
      <circle cx="9" cy="12" r="4" fill="none" stroke="url(#de-g)" strokeWidth="1.5"/>
      <path d="M9 11.5 L11 13 L9 14.5" fill="none" stroke="url(#de-g)" strokeWidth="1.2"/>
      {/* Bottom: warehouse */}
      <rect x="33" y="36" width="11" height="7" rx="1" fill="url(#de-g)"/>
      <line x1="33" y1="39.5" x2="44" y2="39.5" stroke="#fff" strokeWidth="0.8"/>
      {/* Conn lines */}
      <line x1="9" y1="16" x2="9" y2="20" stroke="url(#de-g)" strokeWidth="1.5"/>
      <line x1="39" y1="28" x2="39" y2="36" stroke="url(#de-g)" strokeWidth="1.5"/>
    </svg>
  )
}

export function GenAIIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="ai-g" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#EC4899"/><stop offset="1" stopColor="#8B5CF6"/>
        </linearGradient>
      </defs>
      {/* Big 4-point star */}
      <path d="M24 6 L26 18 L38 20 L26 22 L24 34 L22 22 L10 20 L22 18 Z" fill="url(#ai-g)"/>
      {/* Small star top right */}
      <path d="M38 8 L39 12 L43 13 L39 14 L38 18 L37 14 L33 13 L37 12 Z" fill="url(#ai-g)" opacity="0.7"/>
      {/* Small star bottom left */}
      <path d="M10 36 L11 39 L14 40 L11 41 L10 44 L9 41 L6 40 L9 39 Z" fill="url(#ai-g)" opacity="0.5"/>
    </svg>
  )
}

/* Helper: get icon by course slug */
export const COURSE_ICONS = {
  sql: SqlIcon,
  python: PythonIcon,
  excel: ExcelIcon,
  powerbi: PowerBiIcon,
  tableau: TableauIcon,
  statistics: StatisticsIcon,
  ml: MachineLearningIcon,
  'data-eng': DataEngIcon,
  genai: GenAIIcon,
}

export function CourseIcon({ slug, size = 40 }) {
  const Icon = COURSE_ICONS[slug]
  if (!Icon) return null
  return <Icon size={size} />
}
