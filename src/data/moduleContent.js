/* ──────────────────────────────────────────────────────────────
   MODULE CONTENT — real lessons, real-life examples
   Written for absolute beginners. Every concept anchored to
   something they already know (shopping, salaries, friends list).
   ────────────────────────────────────────────────────────────── */

/* ════════════════════════════════════════════════════════════════
   SQL — BEGINNER TRACK (6 modules, all complete)
   ════════════════════════════════════════════════════════════════ */
const SQL_BEGINNER = [
  {
    id: 'sql-b-1',
    title: 'What is SQL? Why do we need it?',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'Think of a giant spreadsheet' },
      { type: 'paragraph', content: 'Imagine you work at a supermarket. Every time someone buys something, you write it down: who bought it, what they bought, how much they paid, what date. After one month, you have 10,000 rows. After a year, 1,20,000 rows.' },
      { type: 'paragraph', content: 'Now your manager asks: "How much did we sell last Tuesday?" or "Which customer spent the most this year?" Scrolling through 1,20,000 rows by hand is impossible.' },
      { type: 'paragraph', content: 'This is the problem SQL solves. SQL is a way of asking a database questions in plain-ish English, and getting answers in seconds, no matter how big the data is.' },

      { type: 'heading', content: 'What does SQL stand for?' },
      { type: 'paragraph', content: 'SQL stands for Structured Query Language. People pronounce it "sequel" or just "S-Q-L" — both are fine.' },

      { type: 'heading', content: 'Where is SQL used in real life?' },
      { type: 'list', items: [
        'Your bank uses SQL to find your account balance when you tap your card',
        'Swiggy uses SQL to find restaurants near you when you open the app',
        'YouTube uses SQL to figure out which videos to recommend',
        'Your office HR system uses SQL to calculate your salary, leaves, and attendance',
        'Hospitals use SQL to pull up your medical history when you walk in',
      ]},
      { type: 'paragraph', content: 'Basically: anywhere data is stored and needs to be looked up, SQL is doing the work behind the scenes.' },

      { type: 'heading', content: 'What does a SQL question look like?' },
      { type: 'paragraph', content: 'Here is an example. We have a list of friends and their cities. We want to find all the friends who live in Mumbai.' },
      { type: 'code', language: 'sql', content: `SELECT name
FROM friends
WHERE city = 'Mumbai';` },
      { type: 'paragraph', content: 'Read this out loud, slowly: "SELECT the name FROM the friends table WHERE the city equals Mumbai." That is almost English. That is the whole trick of SQL — it tries to read like the question you would ask anyway.' },

      { type: 'callout', kind: 'tip', content: 'You do not need to memorise SQL keywords. You will see them so many times in the next few modules that they will become second nature, like the words "select" and "where" already are.' },

      { type: 'heading', content: 'Try your first query' },
      { type: 'paragraph', content: 'Below is a real code editor. We have loaded a small table called "customers" with 8 rows. Click the green Run button to see what is inside.' },
      { type: 'playground', language: 'sql', starter: 'SELECT * FROM customers;', dataset: 'customers' },
      { type: 'paragraph', content: 'The star (*) means "give me everything". You should see 8 rows with names, cities, and countries. Congratulations — you just ran your first SQL query.' },
    ],
  },

  {
    id: 'sql-b-2',
    title: 'Picking what you want to see: SELECT',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'You do not always want everything' },
      { type: 'paragraph', content: 'In the last module we used SELECT * which means "give me every column". But often you only want a few columns.' },
      { type: 'paragraph', content: 'Imagine looking at your phone\'s contact list. You have name, phone number, email, address, birthday, photo, notes. But when you want to call someone, you do not need all that — you just want the name and number. SELECT lets you pick exactly what you want.' },

      { type: 'heading', content: 'Picking specific columns' },
      { type: 'code', language: 'sql', content: `-- Just the names and emails, nothing else
SELECT name, email FROM customers;` },
      { type: 'paragraph', content: 'List the columns you want, separated by commas, between SELECT and FROM. That is it.' },

      { type: 'heading', content: 'Renaming columns with AS' },
      { type: 'paragraph', content: 'Sometimes column names in databases are ugly — "cust_nm_full" or "addr_ln_1". You can rename them in your output using AS.' },
      { type: 'code', language: 'sql', content: `SELECT name AS customer_name,
       city AS hometown
FROM customers;` },
      { type: 'paragraph', content: 'Your output now has nicer column headers. The actual database is not changed — only how the result looks to you.' },

      { type: 'heading', content: 'Real-life analogy' },
      { type: 'paragraph', content: 'Think of a job application form. You filled in 40 fields. When the recruiter shows it to the interviewer, they do not print all 40 — they print just your name, your last role, and your skills. SELECT is the recruiter choosing what to show.' },

      { type: 'callout', kind: 'warning', content: 'Avoid using SELECT * in real work — it is wasteful when you only need 2-3 columns. Be specific about what you actually need. Treat it like a grocery list: write down only what you will use.' },

      { type: 'heading', content: 'Your turn' },
      { type: 'paragraph', content: 'Try changing the query below to only show the name and city columns. Then click Run.' },
      { type: 'playground', language: 'sql', starter: '-- Change this to show only name and city\nSELECT * FROM customers;', dataset: 'customers' },
    ],
  },

  {
    id: 'sql-b-3',
    title: 'Filtering rows with WHERE',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'Most of the time, you want a slice, not the whole pie' },
      { type: 'paragraph', content: 'Say you walk into a shoe store. The store has 5,000 shoes. You do not say "show me all shoes." You say "show me black running shoes, size 9, under ₹3,000."' },
      { type: 'paragraph', content: 'WHERE is how you tell SQL the same thing. WHERE filters the rows so you only see the ones that match.' },

      { type: 'heading', content: 'Simple WHERE clauses' },
      { type: 'code', language: 'sql', content: `-- Customers from India only
SELECT * FROM customers WHERE country = 'India';

-- Just one specific customer
SELECT * FROM customers WHERE name = 'Aditi Rao';` },
      { type: 'paragraph', content: 'Notice: text values are wrapped in single quotes. Numbers are not. country = \'India\' has quotes, but if we were filtering by age = 28, no quotes.' },

      { type: 'heading', content: 'Comparing numbers' },
      { type: 'paragraph', content: 'You can use the usual maths comparisons: = (equals), != or <> (not equals), <, >, <=, >=.' },
      { type: 'code', language: 'sql', content: `-- Orders worth more than 50,000
SELECT * FROM orders WHERE total > 50000;

-- Skip the cheap ones, keep medium-and-up
SELECT * FROM orders WHERE total >= 5000;` },

      { type: 'heading', content: 'Pattern matching with LIKE' },
      { type: 'paragraph', content: 'What if you do not know the exact text? Say you want everyone whose name starts with "A". LIKE with a % wildcard does this.' },
      { type: 'code', language: 'sql', content: `-- Names starting with A
SELECT * FROM customers WHERE name LIKE 'A%';

-- Names containing "Kumar" anywhere
SELECT * FROM customers WHERE name LIKE '%Kumar%';

-- Emails ending in .com
SELECT * FROM customers WHERE email LIKE '%.com';` },
      { type: 'paragraph', content: 'The % means "any number of any characters". Think of it as the "fill in the blank" character.' },

      { type: 'heading', content: 'Multiple options with IN' },
      { type: 'paragraph', content: 'When you want to match against a list of values, IN is shorter than writing many OR conditions.' },
      { type: 'code', language: 'sql', content: `-- Customers from any of these three countries
SELECT * FROM customers
WHERE country IN ('India', 'UK', 'Singapore');` },

      { type: 'heading', content: 'Combining conditions with AND, OR' },
      { type: 'paragraph', content: 'Real questions are usually compound: "Mumbai customers AND high spenders" or "VIP customers OR people who complained."' },
      { type: 'code', language: 'sql', content: `-- Both conditions must be true
SELECT * FROM customers
WHERE country = 'India' AND city = 'Mumbai';

-- Either one is enough
SELECT * FROM orders
WHERE status = 'priority' OR total > 50000;` },

      { type: 'callout', kind: 'tip', content: 'AND is strict — both conditions must match. OR is lenient — any one is enough. Think of AND like a job posting that says "must have a degree AND 3 years experience" versus OR like "must have a degree OR 5 years experience."' },

      { type: 'heading', content: 'Try a few filters' },
      { type: 'playground', language: 'sql', starter: '-- Find all customers from India\nSELECT * FROM customers WHERE country = \'India\';\n\n-- Now try: find customers whose name starts with "R"\n-- (write your query below)', dataset: 'customers' },
    ],
  },

  {
    id: 'sql-b-4',
    title: 'Sorting and limiting results',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'Order matters' },
      { type: 'paragraph', content: 'Imagine a shopping app showing you 200 phones in random order. Useless. You want them sorted — cheapest first, or highest rated first.' },
      { type: 'paragraph', content: 'ORDER BY is how you tell SQL how to sort the results.' },

      { type: 'heading', content: 'Basic sorting' },
      { type: 'code', language: 'sql', content: `-- Sort customers by name, A to Z (default)
SELECT * FROM customers ORDER BY name;

-- Sort orders by amount, highest first
SELECT * FROM orders ORDER BY total DESC;

-- Sort by country first, then by name within each country
SELECT * FROM customers ORDER BY country, name;` },
      { type: 'paragraph', content: 'ASC means ascending (low to high, A to Z) and is the default. DESC means descending (high to low, Z to A). Use DESC when you want the biggest, latest, or most important first.' },

      { type: 'heading', content: 'Limiting the number of rows' },
      { type: 'paragraph', content: 'Often you do not need all rows. "Top 5 best-selling products this month" only needs 5 rows. LIMIT caps the output.' },
      { type: 'code', language: 'sql', content: `-- The 3 biggest orders
SELECT * FROM orders
ORDER BY total DESC
LIMIT 3;` },
      { type: 'paragraph', content: 'The order matters: SQL first sorts, then takes the top N. So "ORDER BY DESC + LIMIT 3" gives you the three biggest.' },

      { type: 'heading', content: 'A real-life feel' },
      { type: 'paragraph', content: 'Cricket scoreboards: "Top 5 run-scorers in 2024." That is just SELECT name, runs FROM batsmen ORDER BY runs DESC LIMIT 5. Same query pattern works for top customers, biggest orders, most-viewed videos, anything ranked.' },

      { type: 'callout', kind: 'tip', content: 'When working with very large tables, always use LIMIT while you experiment. A query without LIMIT could try to return millions of rows and crash your screen. LIMIT 10 first, then remove it once you trust the query.' },

      { type: 'heading', content: 'Try it' },
      { type: 'playground', language: 'sql', starter: '-- Get the 3 customers with the longest names\n-- Hint: use LENGTH(name) to measure name length\nSELECT name, LENGTH(name) AS name_length\nFROM customers\nORDER BY name_length DESC\nLIMIT 3;', dataset: 'customers' },
    ],
  },

  {
    id: 'sql-b-5',
    title: 'Counting, summing, averaging',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'From rows to insights' },
      { type: 'paragraph', content: 'So far we have looked at individual rows. But managers rarely care about row-by-row detail. They ask: "How many?" "What is the total?" "What is the average?"' },
      { type: 'paragraph', content: 'These are aggregations — they take many rows and produce one number.' },

      { type: 'heading', content: 'The four main aggregations' },
      { type: 'list', items: [
        'COUNT(*) — how many rows? (Like counting students in a classroom)',
        'SUM(column) — total of a number column (Like adding up your monthly expenses)',
        'AVG(column) — average value (Like your average test score)',
        'MIN and MAX — smallest and largest (Like cheapest and most expensive product)',
      ]},

      { type: 'code', language: 'sql', content: `-- How many customers do we have?
SELECT COUNT(*) FROM customers;

-- Total of all order amounts
SELECT SUM(total) FROM orders;

-- Average order value
SELECT AVG(total) FROM orders;

-- The smallest and largest order
SELECT MIN(total), MAX(total) FROM orders;` },

      { type: 'heading', content: 'Grouping: aggregations per category' },
      { type: 'paragraph', content: 'Now the real magic: GROUP BY. Instead of one big total, you get one total per category.' },
      { type: 'paragraph', content: 'Real-life example: a class teacher asks "What is the average marks per subject?" That is: group the students by subject, then average their marks within each group.' },
      { type: 'code', language: 'sql', content: `-- Number of customers per country
SELECT country, COUNT(*) AS customer_count
FROM customers
GROUP BY country;

-- Total order value per customer
SELECT customer_id, SUM(total) AS total_spent
FROM orders
GROUP BY customer_id;` },

      { type: 'heading', content: 'How GROUP BY works in your head' },
      { type: 'paragraph', content: 'Think of GROUP BY like sorting laundry: you start with a mixed pile (rows), then you stack shirts in one pile, pants in another, socks in another (groups). Now you can count each pile separately, weigh each pile separately, etc.' },

      { type: 'callout', kind: 'tip', content: 'A rule that confuses many beginners: any column in your SELECT must either be inside an aggregate function (like COUNT or SUM) or listed in GROUP BY. Otherwise SQL does not know which value to pick from each group.' },

      { type: 'heading', content: 'Filtering aggregations: HAVING' },
      { type: 'paragraph', content: 'WHERE filters rows before grouping. HAVING filters groups after grouping. Use HAVING when you want to filter by the aggregated value.' },
      { type: 'code', language: 'sql', content: `-- Countries with more than 2 customers
SELECT country, COUNT(*) AS count
FROM customers
GROUP BY country
HAVING COUNT(*) > 2;` },

      { type: 'heading', content: 'Practice' },
      { type: 'playground', language: 'sql', starter: '-- Count how many customers are in each country\nSELECT country, COUNT(*) AS total\nFROM customers\nGROUP BY country\nORDER BY total DESC;', dataset: 'customers' },
    ],
  },

  {
    id: 'sql-b-6',
    title: 'Connecting tables with JOIN',
    duration: '40 min',
    sections: [
      { type: 'heading', content: 'Why data is in separate tables' },
      { type: 'paragraph', content: 'In your phone, contacts and call history are kept separately. Contacts has names and numbers. Call history has dates, durations, and the number called. They are linked by the phone number.' },
      { type: 'paragraph', content: 'Databases work the same way. Customers go in one table. Orders go in another. They are linked by customer_id. JOIN is how you connect them.' },

      { type: 'heading', content: 'Why not store everything in one table?' },
      { type: 'paragraph', content: 'Imagine: every time a customer places a new order, you would have to repeat their name, email, city, phone, etc. After 100 orders from one customer, you have 100 copies of the same name. Wasteful, error-prone, and a nightmare if they change their phone number.' },
      { type: 'paragraph', content: 'Splitting into tables avoids this. Customer details are stored once. Orders just reference the customer by ID.' },

      { type: 'heading', content: 'INNER JOIN — only matched rows' },
      { type: 'paragraph', content: 'INNER JOIN returns rows that exist in both tables. If a customer has no orders, they will not appear.' },
      { type: 'code', language: 'sql', content: `SELECT customers.name, orders.product, orders.total
FROM customers
INNER JOIN orders ON customers.id = orders.customer_id;` },
      { type: 'paragraph', content: 'Read this as: "Combine rows from customers and orders WHERE the customer ID matches in both tables. Then show me the name (from customers), product and total (from orders)."' },

      { type: 'heading', content: 'LEFT JOIN — keep everyone from the first table' },
      { type: 'paragraph', content: 'Sometimes you want to keep all customers, even if they have not ordered yet. LEFT JOIN does this. Customers with no orders will appear with NULL for the order columns.' },
      { type: 'code', language: 'sql', content: `SELECT customers.name, orders.product, orders.total
FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id;` },
      { type: 'paragraph', content: 'Real-life: a teacher with a class list (customers) and a homework submissions list (orders). LEFT JOIN gives every student\'s name and shows NULL where they did not submit. Lets the teacher see who is missing.' },

      { type: 'heading', content: 'A common shortcut: table aliases' },
      { type: 'paragraph', content: 'Writing "customers.name" and "orders.total" gets repetitive. Use short aliases.' },
      { type: 'code', language: 'sql', content: `SELECT c.name, o.product, o.total
FROM customers AS c
INNER JOIN orders AS o ON c.id = o.customer_id;` },

      { type: 'callout', kind: 'tip', content: 'When in doubt about which JOIN to use, ask: "Do I want to keep rows from the first table even if there is no match in the second?" If yes, LEFT JOIN. If no, INNER JOIN.' },

      { type: 'heading', content: 'Try a JOIN yourself' },
      { type: 'paragraph', content: 'Both customers and orders tables are loaded below. Try the query, then modify it to show the city instead of the email.' },
      { type: 'playground', language: 'sql', starter: '-- See who bought what\nSELECT c.name, c.city, o.product, o.total\nFROM customers AS c\nINNER JOIN orders AS o ON c.id = o.customer_id\nORDER BY o.total DESC;', dataset: 'customers_orders' },

      { type: 'heading', content: "You're done with the Beginner track" },
      { type: 'paragraph', content: 'You now know enough SQL to answer most everyday data questions: pull specific columns, filter rows, sort, count, sum, group by category, and combine two tables. That covers maybe 70% of what working analysts do day-to-day.' },
      { type: 'paragraph', content: 'The Intermediate track will add: subqueries (queries inside queries), CASE WHEN (if-then-else logic), more JOIN types, and CTEs (named query parts). When ready, switch to Intermediate from the sidebar.' },
    ],
  },
]

/* ════════════════════════════════════════════════════════════════
   PYTHON — BEGINNER TRACK (full real content for module 1; more on the way)
   ════════════════════════════════════════════════════════════════ */
const PYTHON_BEGINNER = [
  {
    id: 'py-b-1',
    title: 'Your first Python program',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'Why Python?' },
      { type: 'paragraph', content: 'Python is famous for being friendly. The code reads almost like English, and small mistakes (forgetting a semicolon, say) do not throw cryptic errors. That is why beginners pick it up faster than almost any other language.' },
      { type: 'paragraph', content: 'In data work specifically, Python is everywhere — Netflix uses it to figure out what to recommend, Instagram uses it to filter spam comments, ISRO uses it for satellite calculations.' },

      { type: 'heading', content: 'Hello, World' },
      { type: 'paragraph', content: 'The first thing every programmer writes is a "Hello, World" — a program that just says hello. In Python it is one line.' },
      { type: 'code', language: 'python', content: `print("Hello, World!")` },
      { type: 'paragraph', content: 'print() is a built-in command that displays text on the screen. Whatever you put inside the quotes is shown exactly as-is.' },

      { type: 'heading', content: 'Storing things: variables' },
      { type: 'paragraph', content: 'A variable is a labelled box where you keep a value. Like writing your name on a lunchbox before you put your sandwich in.' },
      { type: 'code', language: 'python', content: `name = "Aditi"
age = 28
salary = 75000.50
is_employed = True

print(name)
print(age)` },
      { type: 'paragraph', content: 'Notice you do not need to declare a type. Python figures it out: "Aditi" is text (a string), 28 is a whole number (integer), 75000.50 has a decimal (a float), True is yes/no (a boolean).' },

      { type: 'heading', content: 'Putting variables inside text: f-strings' },
      { type: 'paragraph', content: 'Often you want to mix text and variables. The cleanest way is an f-string — put f before the opening quote and wrap variables in curly braces.' },
      { type: 'code', language: 'python', content: `name = "Aditi"
age = 28

print(f"{name} is {age} years old")
# Output: Aditi is 28 years old` },

      { type: 'heading', content: 'Real-life parallel' },
      { type: 'paragraph', content: 'Think about a shop receipt. The format is fixed: "Thank you ___, your total is ___." The blanks are variables. Every customer is a different name and total, but the layout stays the same. f-strings work the same way.' },

      { type: 'callout', kind: 'tip', content: 'Variable naming convention in Python: use lowercase with underscores. customer_name, not CustomerName or customerName. It is the unwritten rule everyone follows.' },

      { type: 'heading', content: 'Comments' },
      { type: 'paragraph', content: 'Anything after a # is a comment — notes for humans that Python ignores. Use them generously to explain why your code does what it does.' },
      { type: 'code', language: 'python', content: `# This is a comment
name = "Aditi"  # You can also comment after code

# Useful when you want to remember what something does
# six months from now` },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Live Python execution is part of the Intermediate track. For now, copy the code into a free online Python runner like replit.com or trinket.io and play with it.' },
      { type: 'callout', kind: 'tip', content: 'Coming in the next module: numbers and math, text manipulation, and your first decision-making code with if-statements.' },
    ],
  },
]

/* ════════════════════════════════════════════════════════════════
   EXCEL — BEGINNER (full real first module)
   ════════════════════════════════════════════════════════════════ */
const EXCEL_BEGINNER = [
  {
    id: 'ex-b-1',
    title: 'Cells, rows, columns — the basics',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'A grid you already understand' },
      { type: 'paragraph', content: 'A spreadsheet is just a giant grid. Rows go across (numbered 1, 2, 3...). Columns go down (lettered A, B, C... and after Z, it becomes AA, AB, etc.).' },
      { type: 'paragraph', content: 'Every box in the grid is called a cell, and it has a unique address. Cell B7 is column B, row 7. Just like seat 14C on a flight — column letter, row number.' },

      { type: 'heading', content: 'What goes in a cell?' },
      { type: 'list', items: [
        'Text: a name, a city, a label',
        'A number: 100, 49.50, -25',
        'A date: 15-Mar-2025',
        'A formula: =A1+B1 (calculations Excel does for you)',
      ]},

      { type: 'heading', content: 'The most useful keyboard shortcuts (learn these first)' },
      { type: 'list', items: [
        'Ctrl+C / Ctrl+V — copy / paste (you know these)',
        'Ctrl+Z — undo (your best friend)',
        'Ctrl+arrow keys — jump to the edge of your data fast',
        'Ctrl+Shift+arrow — select to the edge',
        'F2 — edit a cell without retyping the whole thing',
        'Ctrl+; — insert today\'s date',
      ]},

      { type: 'heading', content: 'Your first formula' },
      { type: 'paragraph', content: 'Type =10+5 in any cell and press Enter. The cell shows 15. That = sign is the magic — it tells Excel "this is a calculation, not just text."' },
      { type: 'code', language: 'excel', content: `=10+5            → 15
=20*3            → 60
=100/4           → 25
=A1+B1           → adds whatever is in A1 and B1
=SUM(A1:A10)     → adds all cells from A1 to A10
=AVERAGE(B:B)    → average of everything in column B` },

      { type: 'heading', content: 'Real-life practice' },
      { type: 'paragraph', content: 'Try this in Excel right now: put your monthly expenses in column A (rent, groceries, transport, mobile, etc.). In the cell below your last entry, type =SUM(A1:A6) (adjust the range to your actual rows). Press Enter. You just calculated your monthly spending without using a calculator.' },

      { type: 'callout', kind: 'tip', content: "If you ever break a formula or delete something by accident, just press Ctrl+Z. You can undo many steps back in Excel. Don't panic." },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'In the next module: how to format numbers as currency or percentages, freeze rows so headers stay visible while you scroll, and the IF function to make Excel decide things for you.' },
    ],
  },
]

/* ════════════════════════════════════════════════════════════════
   POWER BI — BEGINNER (real intro)
   ════════════════════════════════════════════════════════════════ */
const POWERBI_BEGINNER = [
  {
    id: 'pb-b-1',
    title: 'What is Power BI? Who uses it?',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'A factory for dashboards' },
      { type: 'paragraph', content: 'If Excel is for keeping data, Power BI is for showing data to other people. Charts, gauges, maps, scorecards — the kind of dashboards you see on TV behind a news anchor or on a CEO\'s laptop.' },
      { type: 'paragraph', content: 'Imagine a chai shop owner. He sells 4 types of tea, 6 types of biscuit, in 3 locations. Excel can track all his sales. But Power BI turns that into a single screen showing: today\'s sales, busiest location, fastest-selling item, slowest day of the week — updated automatically as more sales come in.' },

      { type: 'heading', content: 'Where Power BI is used' },
      { type: 'list', items: [
        'Sales teams tracking targets and pipelines',
        'Hospitals monitoring beds, ventilators, ambulance availability',
        'Cricket coaches reviewing player performance over a season',
        'Schools showing pass percentages by class and subject',
        'Government dashboards on Covid cases, weather, traffic',
      ]},

      { type: 'heading', content: 'The three pieces of Power BI' },
      { type: 'list', items: [
        'Power BI Desktop — the free software where you build dashboards (Windows only)',
        'Power BI Service — the website where you publish and share them',
        'Power BI Mobile — the phone app to view them on the go',
      ]},
      { type: 'paragraph', content: 'You only need Desktop to start. Download it free from microsoft.com/powerbi. (Mac users: it does not work on Mac directly — you will need a Windows VM or run it via Parallels.)' },

      { type: 'heading', content: 'The Power BI workflow in 4 steps' },
      { type: 'list', items: [
        'Get data — pull it from Excel, a database, a website, anywhere',
        'Clean and shape — fix dates, remove duplicates, split columns',
        'Model — connect related tables (like SQL joins, but visual)',
        'Visualise — drag-and-drop charts onto a canvas',
      ]},

      { type: 'callout', kind: 'tip', content: "Don't try to learn all of Power BI in one go. Open Desktop, load a small Excel file (5-10 rows of fake sales data is fine), and just experiment with adding a chart. Mastery comes from playing, not from reading documentation." },

      { type: 'heading', content: 'What you need before the next module' },
      { type: 'paragraph', content: 'Install Power BI Desktop and open it once. Familiarise yourself with the three views on the left side: Report view (the canvas), Data view (your tables), and Model view (relationships between tables). The next module will walk through loading your first dataset.' },
    ],
  },
]

/* ════════════════════════════════════════════════════════════════
   TABLEAU — BEGINNER (real intro)
   ════════════════════════════════════════════════════════════════ */
const TABLEAU_BEGINNER = [
  {
    id: 'tb-b-1',
    title: 'What is Tableau and how is it different from Excel?',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'Tableau is for telling stories with data' },
      { type: 'paragraph', content: 'In Excel, charts are an afterthought — you make them after the data is sorted. In Tableau, charts ARE the work. You drag a column onto the canvas and Tableau guesses the best chart automatically.' },
      { type: 'paragraph', content: "Imagine a journalist writing an article about pollution in Indian cities. They have data for 50 cities over 10 years. In Excel, this is a giant grid of numbers no reader will look at. In Tableau, with three clicks, it's a map of India coloured by pollution level — instantly understandable." },

      { type: 'heading', content: 'When to use Tableau over Power BI' },
      { type: 'paragraph', content: 'Both make dashboards. The real differences:' },
      { type: 'list', items: [
        'Tableau works on Mac, Windows, and Linux. Power BI Desktop is Windows only.',
        'Tableau is generally considered better for exploration — playing with data to find insights.',
        'Power BI integrates more naturally with Microsoft tools (Excel, Teams, SharePoint).',
        'Tableau costs more (~$70/month for the paid version). Tableau Public is free but everything you publish is public.',
        "In Indian companies, Power BI tends to be more common (because of Microsoft 365 deals). Globally, Tableau dominates in media, finance, healthcare.",
      ]},

      { type: 'heading', content: 'How Tableau thinks about data' },
      { type: 'paragraph', content: 'Tableau splits every column into two kinds: dimensions and measures.' },
      { type: 'list', items: [
        'Dimensions are things you group by — country, product, month, customer name. They categorise.',
        'Measures are things you can do maths on — sales amount, quantity, profit. They aggregate.',
      ]},
      { type: 'paragraph', content: 'Whenever you build a chart, you drag dimensions onto one axis and measures onto another. "Sales by country" = country (dimension) on the x-axis, sales (measure) on the y-axis. That\'s a bar chart, automatically.' },

      { type: 'heading', content: 'Getting started for free' },
      { type: 'paragraph', content: "Download Tableau Public from public.tableau.com — it's completely free but everything you save is publicly visible to anyone on the internet. Fine for learning. Get the paid Tableau Desktop later if you need private dashboards." },

      { type: 'callout', kind: 'tip', content: 'A great way to learn Tableau is to copy other people. Visit public.tableau.com and look at the Featured Vizzes. Click any one and you can download the source file. Open it, see how they built it, modify it. This is the fastest path to fluency.' },

      { type: 'heading', content: 'Next module' },
      { type: 'paragraph', content: 'In the next module, you will install Tableau Public, load a sample dataset, and build your first bar chart in under 5 minutes.' },
    ],
  },
]

/* ════════════════════════════════════════════════════════════════
   STATISTICS — BEGINNER (real intro)
   ════════════════════════════════════════════════════════════════ */
const STATISTICS_BEGINNER = [
  {
    id: 'st-b-1',
    title: 'Why statistics matters in data work',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'Statistics is a way of dealing with uncertainty' },
      { type: 'paragraph', content: "Real-world data is never clean. People lie on surveys, sensors miss readings, samples don't cover everyone, customers change their minds. Statistics gives you tools to make confident decisions despite this mess." },

      { type: 'heading', content: 'Three real-life examples' },
      { type: 'paragraph', content: '1. A pharmacy notices that one new medicine seems to work better than the old one. But 7 out of 10 patients improved on the old medicine too. Is the new medicine genuinely better, or is it luck? Statistics answers this.' },
      { type: 'paragraph', content: "2. An election poll surveys 1,500 voters out of 90 crore. How can such a tiny sample predict the whole country? Statistics tells you how big the margin of error is." },
      { type: 'paragraph', content: "3. A YouTuber changes their thumbnail style and views go up by 20%. Was it the thumbnail or just a different audience that week? Statistics has tests for this kind of question." },

      { type: 'heading', content: 'The basics you actually use day-to-day' },
      { type: 'list', items: [
        "Mean (average): add everything up and divide. But beware — one outlier (like a CEO's salary in a team list) can distort the average.",
        'Median: the middle value when sorted. More honest than mean when outliers exist. The "median household income" is reported because it represents the typical family better than the mean.',
        'Standard deviation: how spread out the numbers are. Small SD = everyone is close to the average. Large SD = a wide spread.',
        'Percentile: where a value ranks. "Your son is in the 80th percentile for height" means he is taller than 80% of his peers.',
      ]},

      { type: 'heading', content: 'When the average lies' },
      { type: 'paragraph', content: 'A famous example: a startup announces "Average employee salary is ₹12 lakh." Sounds good. But the founder makes ₹3 crore, and the other 9 employees each make ₹3 lakh. The mean is misleading. The median (₹3 lakh) tells the real story.' },
      { type: 'paragraph', content: 'This is why news stories about "average income" or "average rent" should always make you ask: what about the median?' },

      { type: 'heading', content: 'What we will cover in this track' },
      { type: 'list', items: [
        'Module 2: Visualising your data — histograms, box plots, when to use which',
        'Module 3: Probability basics for everyday decisions',
        'Module 4: Your first hypothesis test (deciding if a difference is real or random)',
      ]},

      { type: 'callout', kind: 'tip', content: 'You do not need to be a math genius to do data work. You need to recognise common pitfalls and use the right tool. This course teaches those pitfalls and tools, not equations on a chalkboard.' },
    ],
  },
]

/* ──────────────────────────────────────────────────────────────
   Modules still being written — clearly labelled as such
   ────────────────────────────────────────────────────────────── */
const inProduction = (title, expectedWeeks) => ({
  id: `prod-${title.toLowerCase().replace(/\s+/g, '-')}`,
  title,
  duration: 'In production',
  sections: [
    { type: 'heading', content: `${title} — coming soon` },
    { type: 'paragraph', content: `This module is being written by our content team. Expected: within ${expectedWeeks} weeks.` },
    { type: 'paragraph', content: 'We are writing each module carefully with real-life examples rather than rushing thin content to fill slots. If you want to be notified the moment this module is published, drop an email to support@ahoosocial.com mentioning the course and module name.' },
    { type: 'callout', kind: 'tip', content: 'In the meantime, the modules already published in this track are enough to get you started. Work through them, then come back here.' },
  ],
})

const productionList = (titles, baseWeeks = 2) =>
  titles.map((t, i) => inProduction(t, baseWeeks + i))

export const COURSE_CONTENT = {
  sql: {
    beginner: SQL_BEGINNER,
    intermediate: productionList([
      'Subqueries: queries inside queries',
      'CASE WHEN: if-then-else in SQL',
      'More JOIN types: RIGHT, FULL, SELF',
      'Working with dates and times',
      'String functions you will actually use',
      'CTEs: naming your query parts',
    ]),
    advanced: productionList([
      'Window functions: running totals, ranks, moving averages',
      'Query optimisation and indexes',
      'Recursive queries',
      'Transactions and isolation levels',
      'Pivot and unpivot patterns',
      'Performance tuning',
    ], 4),
  },
  python: {
    beginner: [
      ...PYTHON_BEGINNER,
      ...productionList([
        'Numbers, strings, and basic operations',
        'Making decisions: if, elif, else',
        'Repeating things: for and while loops',
        'Lists and dictionaries',
        'Functions: reusable code blocks',
        'Reading and writing files',
      ]),
    ],
    intermediate: productionList([
      'pandas: data manipulation',
      'NumPy: numerical computing',
      'Plotting with matplotlib',
      'Working with APIs',
      'Web scraping basics',
      'Jupyter notebooks',
      'Virtual environments',
    ], 3),
    advanced: productionList([
      'Object-oriented Python',
      'Decorators and generators',
      'Async programming',
      'Performance and profiling',
      'Testing with pytest',
      'Type hints and modern Python',
      'Packaging your code',
    ], 5),
  },
  excel: {
    beginner: [
      ...EXCEL_BEGINNER,
      ...productionList([
        'Number formatting: currency, percent, dates',
        'IF and basic logic functions',
        'Sorting and filtering',
        'Charts and graphs basics',
      ]),
    ],
    intermediate: productionList([
      'VLOOKUP and INDEX/MATCH',
      'Pivot tables: the most powerful feature',
      'Conditional formatting',
      'Named ranges and data validation',
      'Power Query: cleaning messy data',
    ], 3),
    advanced: productionList([
      'Power Pivot and the data model',
      'DAX measures',
      'Advanced array formulas',
      'Macros and VBA basics',
      'Building interactive dashboards',
    ], 5),
  },
  powerbi: {
    beginner: [
      ...POWERBI_BEGINNER,
      ...productionList([
        'Loading data from Excel and CSV',
        'Cleaning data with Power Query',
        'Your first chart',
        'Slicers and filters',
        'Publishing to the Power BI Service',
      ]),
    ],
    intermediate: productionList([
      'Data modelling and relationships',
      'DAX: calculated columns vs measures',
      'Time intelligence functions',
      'Drill-through and bookmarks',
      'Row-level security',
      'Designing for mobile',
    ], 3),
    advanced: productionList([
      'Advanced DAX patterns',
      'Performance tuning',
      'Custom visuals with R and Python',
      'Embedded analytics',
      'Workspace governance',
      'Power BI premium features',
    ], 5),
  },
  tableau: {
    beginner: [
      ...TABLEAU_BEGINNER,
      ...productionList([
        'Installing Tableau Public and loading data',
        'Your first chart in 5 minutes',
        'Filters and groups',
        'Your first dashboard',
      ]),
    ],
    intermediate: productionList([
      'Calculated fields',
      'LOD (Level of Detail) expressions',
      'Parameters and dynamic dashboards',
      'Maps and geographic data',
      'Storytelling features',
    ], 3),
    advanced: productionList([
      'Advanced LOD patterns',
      'Performance optimisation',
      'Tableau Server administration',
      'Embedding and APIs',
      'Custom SQL and data blending',
    ], 5),
  },
  statistics: {
    beginner: [
      ...STATISTICS_BEGINNER,
      ...productionList([
        'Visualising distributions: histograms and box plots',
        'Probability basics',
        'Your first hypothesis test',
      ]),
    ],
    intermediate: productionList([
      'Confidence intervals',
      't-tests and chi-square',
      'Correlation vs causation',
      'Simple linear regression',
    ], 3),
    advanced: productionList([
      'Multiple regression',
      'ANOVA',
      'Bayesian reasoning',
      'A/B testing in practice',
    ], 5),
  },
}

export const getModule = (slug, level, moduleIndex) => {
  return COURSE_CONTENT[slug]?.[level]?.[moduleIndex] || null
}

export const getModuleList = (slug, level) => {
  return COURSE_CONTENT[slug]?.[level] || []
}

/* Count modules that are real (not in-production stubs) */
export const getRealModuleCount = (slug, level) => {
  const list = getModuleList(slug, level)
  return list.filter(m => !m.id.startsWith('prod-')).length
}
