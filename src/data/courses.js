/* ──────────────────────────────────────────────────────────────
   COURSE CATALOG
   Every course has 3 difficulty tracks: Beginner / Intermediate / Advanced
   Datasets sourced globally — NYC Taxi, UK retail, IPL, Spotify, etc.
   ────────────────────────────────────────────────────────────── */

export const COURSE_CATALOG = [
  {
    id: 'sql',
    slug: 'sql',
    title: 'SQL for Data',
    tagline: 'The language every data career starts with',
    icon: '🗄️',
    color: '#2563EB',
    bgColor: '#EFF6FF',
    status: 'live',
    description: 'Master databases — from your first SELECT to advanced Window Functions. Three levels. Work across global datasets including NYC Taxi, UK retail, and Indian e-commerce.',
    learningOutcomes: [
      'Query data with confidence',
      'Build analytics that drive decisions',
      'Pass any SQL technical interview',
      'Work with production-grade datasets'
    ],
    careerPaths: ['Data Analyst', 'BI Developer', 'Junior Data Engineer'],
    datasets: ['NYC Taxi (US)', 'UK Retail (Europe)', 'Zomato Orders (India)', 'Spotify Streams (Global)'],
    tracks: {
      beginner: { modules: 6, hours: 4, label: 'Get to your first query in under an hour' },
      intermediate: { modules: 6, hours: 5, label: 'JOINs, aggregations, real reporting' },
      advanced: { modules: 6, hours: 6, label: 'Window functions, CTEs, optimisation' }
    },
    totalModules: 18,
  },
  {
    id: 'python',
    slug: 'python',
    title: 'Python for Data Science',
    tagline: 'The most loved language in data',
    icon: '🐍',
    color: '#7C3AED',
    bgColor: '#EDE9FE',
    status: 'live',
    description: 'From "hello world" to building real data pipelines with pandas, NumPy, and matplotlib. Three tracks for every skill level.',
    learningOutcomes: [
      'Write clean Python code',
      'Manipulate data with pandas',
      'Build publication-quality charts',
      'Automate repetitive work'
    ],
    careerPaths: ['Data Scientist', 'ML Engineer', 'Data Analyst'],
    datasets: ['Titanic (Global)', 'IPL Matches (India)', 'World Bank Indicators', 'Kaggle Housing'],
    tracks: {
      beginner: { modules: 7, hours: 5, label: 'From print() to your first script' },
      intermediate: { modules: 7, hours: 6, label: 'pandas, NumPy, matplotlib' },
      advanced: { modules: 7, hours: 8, label: 'APIs, web scraping, automation' }
    },
    totalModules: 21,
  },
  {
    id: 'excel',
    slug: 'excel',
    title: 'Excel for Analytics',
    tagline: 'The most underestimated tool in your kit',
    icon: '📊',
    color: '#16A34A',
    bgColor: '#DCFCE7',
    status: 'live',
    description: 'VLOOKUP, Pivot Tables, Power Query, Power Pivot — all the way to building automated dashboards.',
    learningOutcomes: [
      'Master 40+ essential functions',
      'Build dynamic Pivot Table dashboards',
      'Automate workflows with Power Query',
      'Connect Excel to live data sources'
    ],
    careerPaths: ['Business Analyst', 'Financial Analyst', 'Operations Analyst'],
    datasets: ['Superstore Sales (US)', 'AdventureWorks', 'European Retailers'],
    tracks: {
      beginner: { modules: 5, hours: 3, label: 'Formulas, references, basic charts' },
      intermediate: { modules: 5, hours: 4, label: 'Pivot Tables, VLOOKUP, conditional formatting' },
      advanced: { modules: 5, hours: 5, label: 'Power Query, Power Pivot, DAX in Excel' }
    },
    totalModules: 15,
  },
  {
    id: 'powerbi',
    slug: 'powerbi',
    title: 'Power BI Bootcamp',
    tagline: 'Dashboards decision-makers actually use',
    icon: '📈',
    color: '#EA580C',
    bgColor: '#FED7AA',
    status: 'live',
    description: 'Build interactive dashboards from any data source. DAX, data modelling, and publishing — covered end to end.',
    learningOutcomes: [
      'Build interactive dashboards',
      'Write powerful DAX measures',
      'Design scalable data models',
      'Publish org-wide insights'
    ],
    careerPaths: ['BI Analyst', 'Power BI Developer', 'Data Visualisation Specialist'],
    datasets: ['AdventureWorks (Microsoft)', 'COVID-19 Global Data', 'Olympics Historical Data'],
    tracks: {
      beginner: { modules: 6, hours: 4, label: 'Connecting data, basic charts' },
      intermediate: { modules: 6, hours: 5, label: 'Data modelling, DAX, interactivity' },
      advanced: { modules: 6, hours: 6, label: 'Row-level security, optimisation, deployment' }
    },
    totalModules: 18,
  },
  {
    id: 'tableau',
    slug: 'tableau',
    title: 'Tableau Visualisation',
    tagline: 'Tell stories with data that move decisions',
    icon: '🎨',
    color: '#06B6D4',
    bgColor: '#CFFAFE',
    status: 'live',
    description: 'The premium tool used by top consulting firms. Master charts, dashboards, LOD expressions, and story points.',
    learningOutcomes: [
      'Create publication-grade visualisations',
      'Build interactive dashboards',
      'Master LOD expressions',
      'Tell stories with Story Points'
    ],
    careerPaths: ['Tableau Developer', 'Data Viz Engineer', 'Insights Analyst'],
    datasets: ['Sample Superstore', 'Spotify Top Songs', 'Climate Change Data'],
    tracks: {
      beginner: { modules: 5, hours: 3, label: 'Drag, drop, your first viz' },
      intermediate: { modules: 5, hours: 5, label: 'Calculated fields, parameters, sets' },
      advanced: { modules: 5, hours: 6, label: 'LOD expressions, performance, storytelling' }
    },
    totalModules: 15,
  },
  {
    id: 'statistics',
    slug: 'statistics',
    title: 'Statistics for Data',
    tagline: 'The maths that makes data tell the truth',
    icon: '📐',
    color: '#DC2626',
    bgColor: '#FEE2E2',
    status: 'live',
    description: 'Mean, distributions, hypothesis testing — explained without textbook pain. Real-world examples throughout.',
    learningOutcomes: [
      'Understand probability intuitively',
      'Run hypothesis tests on real data',
      'Calculate confidence intervals',
      'Avoid common statistical mistakes'
    ],
    careerPaths: ['Data Analyst', 'Research Analyst', 'Quality Analyst'],
    datasets: ['Stock Market (NYSE)', 'World Health Organisation', 'Election polling'],
    tracks: {
      beginner: { modules: 4, hours: 3, label: 'Mean, median, distributions' },
      intermediate: { modules: 4, hours: 4, label: 'Sampling, hypothesis tests, correlation' },
      advanced: { modules: 4, hours: 5, label: 'Regression, A/B testing, Bayesian basics' }
    },
    totalModules: 12,
  },

  // Coming soon
  {
    id: 'ml',
    slug: 'ml',
    title: 'Machine Learning Essentials',
    tagline: 'The algorithms behind every modern AI product',
    icon: '🤖',
    color: '#8B5CF6',
    bgColor: '#EDE9FE',
    status: 'coming-soon',
    launchEta: 'February 2026',
    description: 'Linear regression to neural networks. Project-based, with datasets from healthcare, finance, and computer vision.',
    tracks: { beginner: { modules: 6 }, intermediate: { modules: 6 }, advanced: { modules: 6 } },
    totalModules: 18,
  },
  {
    id: 'data-eng',
    slug: 'data-eng',
    title: 'Data Engineering Foundations',
    tagline: 'Build the pipelines that power every dashboard',
    icon: '⚙️',
    color: '#475569',
    bgColor: '#F1F5F9',
    status: 'coming-soon',
    launchEta: 'April 2026',
    description: 'Airflow, dbt, Snowflake, ETL patterns — the unsung work that holds data teams together.',
    tracks: { beginner: { modules: 7 }, intermediate: { modules: 7 }, advanced: { modules: 8 } },
    totalModules: 22,
  },
  {
    id: 'genai',
    slug: 'genai',
    title: 'Generative AI for Data',
    tagline: 'Use LLMs to amplify your data work 10x',
    icon: '✨',
    color: '#EC4899',
    bgColor: '#FCE7F3',
    status: 'coming-soon',
    launchEta: 'March 2026',
    description: 'Prompt engineering, RAG, fine-tuning — and using AI to write SQL/Python faster than ever.',
    tracks: { beginner: { modules: 3 }, intermediate: { modules: 4 }, advanced: { modules: 3 } },
    totalModules: 10,
  },
]

export const LIVE_COURSES = COURSE_CATALOG.filter(c => c.status === 'live')
export const UPCOMING_COURSES = COURSE_CATALOG.filter(c => c.status === 'coming-soon')
export const findCourse = (slug) => COURSE_CATALOG.find(c => c.slug === slug)
