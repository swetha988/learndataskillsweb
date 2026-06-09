/* ──────────────────────────────────────────────────────────────
   SEARCH INDEX — topics & keywords per course
   So searching "JOIN", "VLOOKUP", "regression", "DAX" lands
   somewhere useful instead of returning empty.
   ────────────────────────────────────────────────────────────── */

export const SEARCH_INDEX = {
  sql: [
    'SELECT', 'WHERE', 'JOIN', 'INNER JOIN', 'LEFT JOIN', 'GROUP BY',
    'ORDER BY', 'aggregations', 'subqueries', 'CTE', 'window functions',
    'PARTITION BY', 'optimisation', 'indexes', 'NULL handling', 'CASE WHEN',
    'database', 'query', 'PostgreSQL', 'MySQL', 'BigQuery'
  ],
  python: [
    'pandas', 'NumPy', 'matplotlib', 'seaborn', 'DataFrame', 'lists',
    'dictionaries', 'functions', 'classes', 'loops', 'list comprehension',
    'APIs', 'requests', 'JSON', 'web scraping', 'BeautifulSoup',
    'automation', 'Jupyter', 'virtual environments'
  ],
  excel: [
    'VLOOKUP', 'HLOOKUP', 'INDEX MATCH', 'XLOOKUP', 'Pivot Tables',
    'Power Query', 'Power Pivot', 'DAX', 'conditional formatting',
    'formulas', 'IF statements', 'SUMIFS', 'COUNTIFS', 'macros',
    'data validation', 'dashboards'
  ],
  powerbi: [
    'DAX', 'data modeling', 'Power Query', 'M language', 'measures',
    'calculated columns', 'relationships', 'star schema', 'visuals',
    'slicers', 'bookmarks', 'drill-through', 'row-level security',
    'Power BI Service', 'dashboards', 'reports'
  ],
  tableau: [
    'dimensions', 'measures', 'calculated fields', 'LOD expressions',
    'parameters', 'filters', 'sets', 'groups', 'dashboards', 'stories',
    'maps', 'forecasting', 'trend lines', 'reference lines',
    'Tableau Public', 'Tableau Desktop'
  ],
  statistics: [
    'mean', 'median', 'standard deviation', 'variance', 'hypothesis testing',
    'p-value', 'confidence intervals', 't-test', 'chi-square', 'ANOVA',
    'regression', 'correlation', 'probability', 'distributions',
    'normal distribution', 'sampling', 'Bayes theorem'
  ],
}

/** Search across titles, taglines, AND topic keywords */
export function searchCourses(courses, query) {
  if (!query || query.length < 1) return []
  const q = query.toLowerCase()
  return courses
    .map(c => {
      const topics = SEARCH_INDEX[c.slug] || []
      const matchingTopic = topics.find(t => t.toLowerCase().includes(q))
      const titleHit = c.title.toLowerCase().includes(q)
      const taglineHit = c.tagline.toLowerCase().includes(q)
      if (titleHit || taglineHit || matchingTopic) {
        return { course: c, matchingTopic, isTitleHit: titleHit }
      }
      return null
    })
    .filter(Boolean)
    .slice(0, 6)
}
