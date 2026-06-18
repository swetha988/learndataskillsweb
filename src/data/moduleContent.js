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
    id: 'sql-mp-1',
    title: 'Mini Project: Customer Filter Tool',
    duration: '15 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: "WHERE is the single most-used clause in everyday SQL — almost no real query runs without one. This mini project is three small, realistic requests, exactly the kind a manager fires off over chat throughout a normal day." },
      { type: 'list', items: [
        'Concepts used: WHERE, comparison operators, LIKE, IN, AND/OR',
      ]},

      { type: 'heading', content: 'Task 1: Customers outside India' },
      { type: 'paragraph', content: 'Marketing is planning an international campaign and wants every customer who is NOT based in India.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'customers' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT * FROM customers
WHERE country != 'India';` },

      { type: 'heading', content: 'Task 2: Customers with "an" anywhere in their name' },
      { type: 'paragraph', content: 'Support is testing a search feature and needs a list of every customer whose name contains "an" anywhere in it (case matters less here than getting the wildcard right).' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'customers' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT * FROM customers
WHERE name LIKE '%an%';` },

      { type: 'heading', content: 'Task 3: A regional promotion list' },
      { type: 'paragraph', content: 'A regional promotion is launching in exactly two countries: India and Japan. Get the full customer list for both.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'customers' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT * FROM customers
WHERE country IN ('India', 'Japan');` },
      { type: 'callout', kind: 'tip', content: 'Stretch goal: combine Task 1 and Task 3 into a single query — customers NOT in India, but also not in the UK, using a single WHERE clause with AND and !=. (Want them sorted alphabetically too? That is ORDER BY, which is exactly what the next module teaches — come back and add it once you get there.)' },
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
    id: 'sql-mp-2',
    title: 'Mini Project: Sales Summary Report',
    duration: '20 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: "This is the report every sales manager asks for in some form, every single week: how much did we make, how are orders trending by status, and what does a typical order look like. None of this needs a JOIN yet — the orders table alone has everything you need." },
      { type: 'list', items: [
        'Concepts used: SUM, AVG, COUNT, GROUP BY, HAVING',
      ]},

      { type: 'heading', content: 'Task 1: Total revenue' },
      { type: 'paragraph', content: 'Calculate the total value of every order in the table, regardless of status.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'customers_orders' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT SUM(total) AS total_revenue FROM orders;` },

      { type: 'heading', content: 'Task 2: Orders by status' },
      { type: 'paragraph', content: 'Show how many orders fall into each status (shipped, pending, priority), so the operations team can see what still needs attention.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'customers_orders' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT status, COUNT(*) AS order_count
FROM orders
GROUP BY status
ORDER BY order_count DESC;` },

      { type: 'heading', content: 'Task 3: Average order value per customer' },
      { type: 'paragraph', content: 'Find the average order value for each customer_id, but only show customers whose average is above 5000 — the founder wants to identify high-value customers specifically.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'customers_orders' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT customer_id, AVG(total) AS avg_order_value
FROM orders
GROUP BY customer_id
HAVING AVG(total) > 5000
ORDER BY avg_order_value DESC;` },
      { type: 'callout', kind: 'tip', content: "Notice Task 3 used HAVING, not WHERE — you are filtering on an aggregated value (the average), which only exists after grouping. This exact distinction trips up almost every beginner at least once, so getting it right here is worth the extra few seconds of thought." },
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

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'You now know enough SQL to answer most everyday data questions: pull specific columns, filter rows, sort, count, sum, group by category, and combine two tables. That covers maybe 70% of what working analysts do day-to-day. A quick mini project next puts JOIN to immediate use, then a final module of two real capstone projects to prove it all to yourself.' },
    ],
  },

  {
    id: 'sql-mp-3',
    title: 'Mini Project: Order Lookup Tool',
    duration: '15 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: "JOINs are the single biggest jump in difficulty in this entire track, so they deserve more than one practice rep. This is a lighter, three-task version of the kind of lookup tool a support team would actually use — much smaller than the capstone project waiting in the next module." },
      { type: 'list', items: [
        'Concepts used: INNER JOIN, LEFT JOIN, table aliases, GROUP BY',
      ]},

      { type: 'heading', content: 'Task 1: A readable order list' },
      { type: 'paragraph', content: 'Show every order with the customer\'s name next to it (not just their customer_id), along with the product and total.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'customers_orders' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT c.name, o.product, o.total
FROM customers AS c
INNER JOIN orders AS o ON c.id = o.customer_id;` },

      { type: 'heading', content: 'Task 2: Orders from Indian customers only' },
      { type: 'paragraph', content: 'Support only handles the Indian market this week. Show only orders placed by customers based in India, with the customer name, city, and order total.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'customers_orders' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT c.name, c.city, o.total
FROM customers AS c
INNER JOIN orders AS o ON c.id = o.customer_id
WHERE c.country = 'India';` },

      { type: 'heading', content: 'Task 3: Order count per customer, including customers with zero orders' },
      { type: 'paragraph', content: "Management wants to see every customer's order count — including the customers who haven't ordered anything yet, shown as 0, not just missing from the list entirely." },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'customers_orders' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT c.name, COUNT(o.id) AS order_count
FROM customers AS c
LEFT JOIN orders AS o ON c.id = o.customer_id
GROUP BY c.name
ORDER BY order_count DESC;` },
      { type: 'callout', kind: 'tip', content: 'Task 3 only works correctly with LEFT JOIN, not INNER JOIN. An INNER JOIN would silently drop any customer with zero orders, since there is nothing in the orders table to match them to — exactly the trap LEFT JOIN exists to avoid. COUNT(o.id) (not COUNT(*)) is also important here, since COUNT(*) would count 1 even for a customer with no matching order row.' },
    ],
  },

  {
    id: 'sql-b-7',
    title: 'Capstone projects: put it all together',
    duration: '60 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Practice time — no new concepts here' },
      { type: 'paragraph', content: "You've finished every lesson in this track. This module is different from the previous six: there is nothing new to learn. It's just two real projects, built to be done after you've completed the rest of the course, so you can prove to yourself (and eventually an interviewer) that you can actually use SQL, not just follow along with examples." },
      { type: 'paragraph', content: 'Both projects use a single, richer dataset called "Shopverse" — 10 customers, 8 products, and 30 orders. It is intentionally bigger than the datasets in earlier modules, because real questions need real data to feel real.' },
      { type: 'callout', kind: 'tip', content: "Try to write every query yourself before looking at the sample solution underneath it. Getting it wrong first, then seeing why, teaches you far more than reading a correct answer immediately. There is no shame in needing a few attempts — that is what practice means." },

      { type: 'heading', content: 'Project 1 (Easy): Customer & Order Snapshot' },
      { type: 'paragraph', content: "The scenario: you've just joined Shopverse, a small online store, as a junior data analyst. Before your first stand-up meeting, your manager asks you to pull a few quick numbers. This project only needs single-table skills from Modules 1 to 5 — no JOINs required." },

      { type: 'heading', content: 'Task 1: Customers from India, alphabetically' },
      { type: 'paragraph', content: 'List the name and city of every customer from India, sorted alphabetically by name.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'capstone_ecommerce' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT name, city FROM customers
WHERE country = 'India'
ORDER BY name;` },

      { type: 'heading', content: 'Task 2: The 5 largest orders by quantity' },
      { type: 'paragraph', content: 'Find the 5 orders with the highest quantity ordered. Show the order id, customer_id, and quantity.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'capstone_ecommerce' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT id, customer_id, quantity FROM orders
ORDER BY quantity DESC
LIMIT 5;` },

      { type: 'heading', content: 'Task 3: How many orders in each status?' },
      { type: 'paragraph', content: 'Your manager wants to know how many orders are shipped, how many are pending, and how many were cancelled.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'capstone_ecommerce' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT status, COUNT(*) AS order_count
FROM orders
GROUP BY status
ORDER BY order_count DESC;` },

      { type: 'heading', content: 'Task 4: Total units sold' },
      { type: 'paragraph', content: 'Find the total quantity across every order in the table — a single number representing total units shipped, pending, or cancelled combined.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'capstone_ecommerce' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT SUM(quantity) AS total_units FROM orders;` },

      { type: 'heading', content: 'Task 5: Customers from India or the UAE' },
      { type: 'paragraph', content: 'Marketing wants a list of customers based in either India or the UAE, for a regional promotion. Show name and country.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'capstone_ecommerce' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT name, country FROM customers
WHERE country IN ('India', 'UAE');` },

      { type: 'callout', kind: 'tip', content: "Finished Project 1? You can now answer the kind of quick, single-table questions that fill most of a junior analyst's actual workday. Project 2 is where it gets more interesting." },

      { type: 'heading', content: 'Project 2 (Hard): The Investor Sales Report' },
      { type: 'paragraph', content: "The scenario: Shopverse has an investor meeting in two days, and the founder needs a real sales report — who is buying, what is selling, and where the revenue is actually coming from. This project needs everything from the track, including JOINs across all three tables, GROUP BY, HAVING, and calculated columns." },
      { type: 'callout', kind: 'warning', content: 'Notice that the orders table only stores quantity and a product_id, not a price or a total. You will need to JOIN to products and calculate revenue yourself with quantity * price — this is exactly what real order tables look like, and exactly why JOINs matter.' },

      { type: 'heading', content: 'Task 1: A readable order list' },
      { type: 'paragraph', content: 'Build one query that shows, for every order: the customer\'s name and city, the product name and category, the quantity, and the order status. This is the "human-readable" version of the raw orders table.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'capstone_ecommerce' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT c.name, c.city, p.name AS product, p.category, o.quantity, o.status
FROM orders AS o
INNER JOIN customers AS c ON o.customer_id = c.id
INNER JOIN products AS p ON o.product_id = p.id
ORDER BY o.id;` },

      { type: 'heading', content: 'Task 2: The 5 highest-value orders' },
      { type: 'paragraph', content: 'Calculate the revenue of every order (quantity multiplied by the product\'s price), and find the 5 highest-value orders. Show the customer name, product name, and the calculated revenue.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'capstone_ecommerce' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT c.name, p.name AS product, (o.quantity * p.price) AS revenue
FROM orders AS o
INNER JOIN customers AS c ON o.customer_id = c.id
INNER JOIN products AS p ON o.product_id = p.id
ORDER BY revenue DESC
LIMIT 5;` },

      { type: 'heading', content: 'Task 3: Total revenue per customer' },
      { type: 'paragraph', content: "The founder wants to know which customers matter most. Calculate each customer's total revenue across all their orders, sorted from highest spender to lowest. Exclude cancelled orders — they never actually generated revenue." },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'capstone_ecommerce' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT c.name, SUM(o.quantity * p.price) AS total_spent
FROM orders AS o
INNER JOIN customers AS c ON o.customer_id = c.id
INNER JOIN products AS p ON o.product_id = p.id
WHERE o.status != 'cancelled'
GROUP BY c.name
ORDER BY total_spent DESC;` },

      { type: 'heading', content: 'Task 4: Best-selling product category' },
      { type: 'paragraph', content: 'Find which product category (Electronics, Apparel, Grocery, or Home) generates the most total revenue, again excluding cancelled orders.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'capstone_ecommerce' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT p.category, SUM(o.quantity * p.price) AS category_revenue
FROM orders AS o
INNER JOIN products AS p ON o.product_id = p.id
WHERE o.status != 'cancelled'
GROUP BY p.category
ORDER BY category_revenue DESC;` },

      { type: 'heading', content: 'Task 5: Loyal customers — more than 2 orders' },
      { type: 'paragraph', content: 'Find every customer who has placed more than 2 orders in total (counting all orders, including cancelled ones — this is about engagement, not revenue). Show their name and order count.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'capstone_ecommerce' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT c.name, COUNT(*) AS order_count
FROM orders AS o
INNER JOIN customers AS c ON o.customer_id = c.id
GROUP BY c.name
HAVING COUNT(*) > 2
ORDER BY order_count DESC;` },

      { type: 'heading', content: 'Stretch challenge (optional)' },
      { type: 'paragraph', content: 'Want to push further? Try finding total revenue by month. The order_date column is stored as text in "YYYY-MM-DD" format, so the first 7 characters (e.g., "2024-03") represent the year and month. Hint: SUBSTR(order_date, 1, 7) extracts exactly that.' },
      { type: 'playground', language: 'sql', starter: '-- Stretch challenge: revenue by month\n', dataset: 'capstone_ecommerce' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT SUBSTR(o.order_date, 1, 7) AS month, SUM(o.quantity * p.price) AS monthly_revenue
FROM orders AS o
INNER JOIN products AS p ON o.product_id = p.id
WHERE o.status != 'cancelled'
GROUP BY month
ORDER BY month;` },

      { type: 'heading', content: "You're done with the SQL Beginner track" },
      { type: 'paragraph', content: "If you completed Project 2 without copying every sample solution, you can genuinely claim to know beginner SQL — filtering, sorting, aggregating, and joining real, multi-table data to answer business questions. That is precisely what gets used in actual analyst interviews and actual analyst jobs." },
      { type: 'paragraph', content: 'The Intermediate track will add: subqueries (queries inside queries), CASE WHEN (if-then-else logic), more JOIN types, and CTEs (named query parts). When ready, switch to Intermediate from the sidebar.' },
    ],
  },
]

/* ════════════════════════════════════════════════════════════════
   PYTHON — BEGINNER TRACK (7 modules, all complete)
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
      { type: 'paragraph', content: 'Below is a real Python editor, running right in your browser. Edit the code, then click Run.' },
      { type: 'playground', language: 'python', starter: `name = "Aditi"
age = 28

print(f"{name} is {age} years old")` },
      { type: 'callout', kind: 'tip', content: 'Coming in the next module: numbers and math, text manipulation, and your first decision-making code with if-statements.' },
    ],
  },

  {
    id: 'py-b-2',
    title: 'Numbers, strings, and basic operations',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'Every value has a type' },
      { type: 'paragraph', content: 'In the last module you saw that Python quietly decides whether something is text, a whole number, a decimal, or a yes/no value. This module is about actually doing things with numbers and text — the operations you will use in almost every line of data code you ever write.' },

      { type: 'heading', content: 'Doing maths in Python' },
      { type: 'paragraph', content: 'Python supports all the maths you already know, plus two operators you may not have seen before: // (floor division) and % (modulo, the remainder after division).' },
      { type: 'code', language: 'python', content: `price = 250
quantity = 3

total = price * quantity
print(total)          # 750

discount = total * 0.10   # 10% off
final_price = total - discount
print(final_price)    # 675.0` },

      { type: 'heading', content: 'A real-life use for % (modulo)' },
      { type: 'paragraph', content: 'Imagine a food delivery app splitting riders into two shifts by their employee ID — even IDs get the morning shift, odd IDs get the evening shift. The modulo operator answers "what is left over after dividing by 2?"' },
      { type: 'code', language: 'python', content: `employee_id = 47

if employee_id % 2 == 0:
    print("Morning shift")
else:
    print("Evening shift")
# Output: Evening shift (47 is odd, remainder 1)` },
      { type: 'paragraph', content: "Don't worry about the if/else syntax yet — that is the next module. For now, just notice: 47 % 2 gives 1 (not 0), because 47 is an odd number." },

      { type: 'heading', content: 'A common gotcha: integer vs float division' },
      { type: 'paragraph', content: 'A single slash (/) always gives you a decimal answer, even if it divides evenly. A double slash (//) throws away the decimal part and gives you a whole number — useful when you want "how many full groups fit."' },
      { type: 'code', language: 'python', content: `print(7 / 2)    # 3.5  -> normal division
print(7 // 2)   # 3    -> floor division, decimal chopped off
print(10 / 2)   # 5.0  -> still a float, even though it divides evenly` },
      { type: 'paragraph', content: 'Real-life example: you have 23 chocolates and want to pack them into boxes of 5. 23 // 5 = 4 full boxes, and 23 % 5 = 3 chocolates left over. That single pair of operators answers both questions instantly.' },

      { type: 'heading', content: 'Working with text: strings' },
      { type: 'paragraph', content: 'Strings are not just static labels — you can measure them, slice them, and clean them up. This matters enormously in data work, where real text data is almost always messy.' },
      { type: 'code', language: 'python', content: `name = "  Priya Sharma  "

print(len(name))              # 16 (counts the spaces too!)
print(name.strip())           # "Priya Sharma" -- removes leading/trailing spaces
print(name.upper())           # "  PRIYA SHARMA  "
print(name.lower())           # "  priya sharma  "
print(name.strip().title())   # "Priya Sharma" -- capitalises each word, handy for names
print(name.strip().replace("Sharma", "Verma"))  # "Priya Verma"` },
      { type: 'paragraph', content: 'Real-life parallel: think of a messy Excel export where customer names have extra spaces, inconsistent capitalisation, or typos in a city name. .strip(), .upper()/.lower(), .title(), and .replace() are the basic cleanup tools you reach for before any analysis.' },

      { type: 'heading', content: 'Slicing: grabbing part of a string' },
      { type: 'paragraph', content: 'You can pull out specific characters using square brackets. Python counts positions starting at 0, not 1.' },
      { type: 'code', language: 'python', content: `phone = "9876543210"

print(phone[0])       # "9"        -- first character
print(phone[0:4])     # "9876"     -- first 4 characters
print(phone[-4:])     # "3210"     -- last 4 characters
print(phone[6:])      # "43210"    -- from position 6 to the end` },
      { type: 'paragraph', content: 'A common real use: masking a phone number or card number for display, like showing only the last 4 digits — "XXXXXXXX3210" — which is exactly phone[-4:] with some X\'s glued on the front.' },

      { type: 'heading', content: 'Joining text and numbers together' },
      { type: 'paragraph', content: 'Python is strict about mixing types. You cannot glue text and a number together with + — you will get an error. This trips up almost every beginner at least once.' },
      { type: 'code', language: 'python', content: `age = 28

# This line will crash:
# print("Age: " + age)
# TypeError: can only concatenate str (not "int") to str

# Fix 1: convert the number to text first
print("Age: " + str(age))

# Fix 2 (cleaner): use an f-string, like you learned in Module 1
print(f"Age: {age}")` },

      { type: 'heading', content: 'Converting between types' },
      { type: 'paragraph', content: 'Three functions cover almost every conversion you will need: int() to make a whole number, float() to make a decimal, and str() to make text.' },
      { type: 'code', language: 'python', content: `user_input = "25"          # text, even though it looks like a number
age_number = int(user_input)
print(age_number + 5)      # 30

price_text = "499.99"
price_number = float(price_text)
print(price_number * 2)    # 999.98` },
      { type: 'callout', kind: 'tip', content: 'Anything typed into a form, read from a file, or pulled from a web page arrives in Python as text (a string) — even if it looks like a number. You will almost always need int() or float() before you can do maths on it. This single fact causes more beginner bugs than anything else in this module.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Predict the output first, then run it below and check yourself. Try changing the numbers and see what breaks.' },
      { type: 'playground', language: 'python', starter: `order_total = 1450
customer_name = "  rohan kumar  "

clean_name = customer_name.strip().title()
tax = order_total * 0.18
grand_total = order_total + tax

print(f"{clean_name}, your total is {grand_total}")
print(f"Order number ends in: {str(order_total)[-2:]}")` },
      { type: 'callout', kind: 'tip', content: 'Next module: teaching Python to make decisions with if, elif, and else — the building block behind every business rule, discount, and eligibility check.' },
    ],
  },

  {
    id: 'py-b-3',
    title: 'Making decisions: if, elif, else',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'Code that makes choices' },
      { type: 'paragraph', content: 'A traffic light does not behave the same way all the time — green means go, red means stop, yellow means slow down. Real programs work the same way: depending on a condition, they do one thing or another. In Python, if/elif/else is how you write that logic.' },

      { type: 'heading', content: 'Comparison operators' },
      { type: 'paragraph', content: 'Before you can branch on a condition, you need a way to ask a true/false question. These are the same comparisons you used in SQL\'s WHERE clause, just written slightly differently.' },
      { type: 'list', items: [
        '== means "is equal to" (note: two equals signs — one = is for assignment, two == is for comparison)',
        '!= means "is not equal to"',
        '<, >, <=, >= work exactly like in maths',
      ]},
      { type: 'code', language: 'python', content: `age = 19
print(age == 18)   # False
print(age != 18)   # True
print(age >= 18)   # True` },

      { type: 'heading', content: 'The if statement' },
      { type: 'code', language: 'python', content: `age = 19

if age >= 18:
    print("You can vote")` },
      { type: 'paragraph', content: 'Read it like English: "if age is greater than or equal to 18, print You can vote." The indented line only runs when the condition is True. If age were 15, nothing would print at all.' },
      { type: 'callout', kind: 'warning', content: "Indentation is not optional in Python — it is how Python knows which lines belong inside the if block. Most editors auto-indent for you, but if you ever see an 'IndentationError', check that your spacing is consistent (4 spaces is the standard)." },

      { type: 'heading', content: 'elif and else: covering every case' },
      { type: 'paragraph', content: 'Real rules usually have more than two outcomes. A school grading system is a perfect example: A for 90+, B for 75-89, C for 60-74, and fail below that.' },
      { type: 'code', language: 'python', content: `marks = 82

if marks >= 90:
    print("Grade: A")
elif marks >= 75:
    print("Grade: B")
elif marks >= 60:
    print("Grade: C")
else:
    print("Grade: Fail")
# Output: Grade: B` },
      { type: 'paragraph', content: 'Python checks each condition top to bottom and stops at the first one that is True. Since 82 is not >= 90, it checks the next line: 82 >= 75 is True, so it prints "Grade: B" and skips everything below.' },

      { type: 'heading', content: 'Combining conditions: and, or, not' },
      { type: 'paragraph', content: 'Just like SQL\'s AND/OR, you can combine multiple conditions into one rule. An e-commerce site offering free delivery is a good real-world example: "free delivery if you are a Prime member, OR your order is over ₹500."' },
      { type: 'code', language: 'python', content: `is_prime_member = False
order_total = 650

if is_prime_member or order_total > 500:
    print("Free delivery!")
else:
    print("Delivery charge: ₹40")
# Output: Free delivery! (order_total > 500 is True, so OR is satisfied)` },
      { type: 'code', language: 'python', content: `# A loan eligibility check — both conditions must hold
age = 25
monthly_income = 35000

if age >= 21 and monthly_income >= 25000:
    print("Eligible for the loan")
else:
    print("Not eligible yet")` },

      { type: 'heading', content: 'Truthy and falsy values' },
      { type: 'paragraph', content: 'Python lets you use values directly as conditions, without writing == True. An empty string, the number 0, an empty list, and None are all treated as "falsy" (act like False). Everything else is "truthy" (acts like True).' },
      { type: 'code', language: 'python', content: `cart = []  # empty shopping cart

if cart:
    print("You have items in your cart")
else:
    print("Your cart is empty")
# Output: Your cart is empty -- an empty list is falsy` },

      { type: 'callout', kind: 'tip', content: 'A trick that pays off for years: read every if/elif/else out loud as plain English before you trust it. "If the customer is a Prime member OR their order is over 500, give free delivery." If the sentence sounds wrong, the code probably is too.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Predict the output, then run it below to check. Try changing the numbers to trigger each of the three branches.' },
      { type: 'playground', language: 'python', starter: `temperature = 38
humidity = 80

if temperature > 35 and humidity > 70:
    print("Heat warning: stay hydrated")
elif temperature > 35:
    print("It's hot, but manageable")
else:
    print("Weather is fine")` },
      { type: 'callout', kind: 'tip', content: 'Next module: doing something many times without copy-pasting code — for loops and while loops.' },
    ],
  },

  {
    id: 'py-mp-1',
    title: 'Mini Project: Grade Calculator',
    duration: '15 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: "Every school and college in the country runs some version of this exact program — take a student's marks, decide their grade, print a report card. It's the perfect first project because it uses only what you just learned: if, elif, and else." },
      { type: 'list', items: [
        'Concepts used: if, elif, else',
      ]},

      { type: 'heading', content: 'The task' },
      { type: 'paragraph', content: 'Write a grade calculator that takes a marks value and prints the correct grade, using this scheme: 90 and above is A, 75-89 is B, 60-74 is C, 40-59 is D, and below 40 is F.' },

      { type: 'heading', content: 'Starter code' },
      { type: 'playground', language: 'python', starter: `marks = 78   # change this number and re-run to test every grade boundary

# TODO: write an if / elif / else chain that prints:
#   "Grade: A"  if marks >= 90
#   "Grade: B"  if marks >= 75
#   "Grade: C"  if marks >= 60
#   "Grade: D"  if marks >= 40
#   "Grade: F"  otherwise
` },

      { type: 'heading', content: 'Sample solution' },
      { type: 'playground', language: 'python', starter: `marks = 78   # try changing this to 95, 80, 65, 45, and 20 to test every grade

if marks >= 90:
    print("Grade: A")
elif marks >= 75:
    print("Grade: B")
elif marks >= 60:
    print("Grade: C")
elif marks >= 40:
    print("Grade: D")
else:
    print("Grade: F")` },
      { type: 'callout', kind: 'tip', content: 'Stretch goal: also print a short message alongside the grade, like "Excellent!" for A, "Good effort" for B/C, and "Needs improvement" for D/F — using the same if/elif/else structure.' },
    ],
  },

  {
    id: 'py-b-4',
    title: 'Repeating things: for and while loops',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'Why loops exist' },
      { type: 'paragraph', content: 'Imagine a teacher manually checking attendance for 40 students by writing 40 separate if-statements, one per student. That is insane. What she actually does is go through the register one row at a time, applying the same check to each name. That repeated, one-at-a-time action is exactly what a loop does.' },

      { type: 'heading', content: 'for loops: repeating a fixed number of times' },
      { type: 'paragraph', content: 'A for loop walks through a sequence — a list of names, a range of numbers, even the letters in a word — one item at a time.' },
      { type: 'code', language: 'python', content: `customers = ["Aditi", "Rohan", "Sarah", "James"]

for customer in customers:
    print(f"Sending email to {customer}")

# Output:
# Sending email to Aditi
# Sending email to Rohan
# Sending email to Sarah
# Sending email to James` },
      { type: 'paragraph', content: 'Read it as: "for each customer in the customers list, print a message." The variable customer takes a new value on every pass through the loop.' },

      { type: 'heading', content: 'Looping over numbers with range()' },
      { type: 'paragraph', content: 'range() generates a sequence of numbers without you having to type them all out. range(5) gives 0, 1, 2, 3, 4 (five numbers, starting at 0, never reaching 5).' },
      { type: 'code', language: 'python', content: `for day in range(1, 8):
    print(f"Day {day} of the week")

# range(1, 8) gives 1 through 7 -- a full week
# Day 1 of the week
# Day 2 of the week
# ... up to Day 7 of the week` },

      { type: 'heading', content: 'A real data task: totalling values' },
      { type: 'paragraph', content: 'This is the pattern behind almost every aggregation you will ever write in Python — keep a running total, and add to it on every loop. It is doing by hand exactly what SQL\'s SUM() does for you automatically.' },
      { type: 'code', language: 'python', content: `order_amounts = [1200, 450, 3000, 899, 60]

total = 0
for amount in order_amounts:
    total = total + amount

print(f"Total revenue: {total}")   # Total revenue: 5609` },
      { type: 'paragraph', content: 'In the Intermediate track, pandas gives you sum(order_amounts) and similar one-line tools for this — but understanding the loop underneath is what lets you debug it when something goes wrong.' },

      { type: 'heading', content: 'while loops: repeating until a condition changes' },
      { type: 'paragraph', content: 'A for loop is for "I know how many times" (every customer in the list). A while loop is for "keep going until something happens" — like a parking meter that keeps charging until you pay, or an ATM that keeps asking for a PIN until you get it right (or run out of attempts).' },
      { type: 'code', language: 'python', content: `attempts = 0
correct_pin = "4321"
entered_pin = "0000"   # pretend the user typed this

while entered_pin != correct_pin and attempts < 3:
    print("Wrong PIN, try again")
    attempts = attempts + 1
    entered_pin = "4321" if attempts == 2 else "1111"  # simulating retries

print(f"Stopped after {attempts} attempts")` },
      { type: 'callout', kind: 'warning', content: 'Always make sure something inside a while loop eventually makes its condition False. If you forget to update the variable being checked (like attempts here), the loop runs forever and freezes your program. This is called an infinite loop, and every beginner causes one eventually.' },

      { type: 'heading', content: 'break and continue' },
      { type: 'paragraph', content: 'break exits a loop early. continue skips the rest of the current pass and moves to the next item. Think of a security guard checking a guest list: break is "found them, stop searching"; continue is "not on the list, skip to the next name."' },
      { type: 'code', language: 'python', content: `vip_list = ["Aditi", "Marcus", "Sarah"]
guests = ["Rohan", "Marcus", "Diego", "Priya"]

for guest in guests:
    if guest not in vip_list:
        continue   # skip non-VIPs, move to next guest
    print(f"{guest} is on the VIP list — escort to the front")
# Output: Marcus is on the VIP list — escort to the front` },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Predict the output, then run it below. Try adding a few more scores to the list and see how the count changes.' },
      { type: 'playground', language: 'python', starter: `scores = [55, 92, 78, 40, 88, 65]
passing_scores = 0

for score in scores:
    if score < 50:
        continue
    passing_scores = passing_scores + 1

print(f"{passing_scores} out of {len(scores)} students passed")` },
      { type: 'callout', kind: 'tip', content: 'Next module: lists and dictionaries — the two data structures you will use more than any other in data science. This is where things start to feel like working with real tables of data.' },
    ],
  },

  {
    id: 'py-mp-2',
    title: 'Mini Project: Multiplication Table Generator',
    duration: '15 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: 'You have probably memorised multiplication tables by hand as a kid. This project makes the computer do it instead — for any number, instantly — and is the cleanest way to practice the difference between "I know how many times to repeat" (for) and "keep going until something changes" (while), since you will solve the exact same problem with both.' },
      { type: 'list', items: [
        'Concepts used: for loops, while loops',
      ]},

      { type: 'heading', content: 'The task' },
      { type: 'paragraph', content: 'Given a number, print its multiplication table from 1 to 10, in the format "5 x 1 = 5", "5 x 2 = 10", and so on. Solve it once using a for loop, then again using a while loop.' },

      { type: 'heading', content: 'Starter code' },
      { type: 'playground', language: 'python', starter: `number = 5   # change this and re-run to generate a different table

# TODO 1: use a for loop with range() to print the table from 1 to 10
#         in the form "5 x 1 = 5"


# TODO 2: now solve the exact same problem again, but using a while loop
#         instead of a for loop
` },

      { type: 'heading', content: 'Sample solution' },
      { type: 'playground', language: 'python', starter: `number = 5

# Version 1: using a for loop
print("Using a for loop:")
for i in range(1, 11):
    print(f"{number} x {i} = {number * i}")

# Version 2: using a while loop -- same result, different mechanism
print("\\nUsing a while loop:")
i = 1
while i <= 10:
    print(f"{number} x {i} = {number * i}")
    i = i + 1` },
      { type: 'callout', kind: 'tip', content: "Notice the while version needs you to manually create i = 1 before the loop and manually increment it (i = i + 1) inside the loop. The for loop's range(1, 11) does both of those jobs for you automatically — which is exactly why for loops are usually preferred whenever you know the number of repetitions in advance." },
    ],
  },

  {
    id: 'py-b-5',
    title: 'Lists and dictionaries',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'Storing many things at once: lists' },
      { type: 'paragraph', content: 'You already used lists in the last module without a formal introduction. A list is just an ordered collection of values, written between square brackets — like a shopping list, or a Spotify playlist where order matters and songs can repeat.' },
      { type: 'code', language: 'python', content: `cities = ["Mumbai", "Delhi", "Bengaluru", "Mumbai"]

print(cities[0])     # "Mumbai" -- first item (Python counts from 0)
print(cities[-1])    # "Mumbai" -- last item
print(len(cities))   # 4 -- how many items
print(cities[1:3])   # ["Delhi", "Bengaluru"] -- a slice` },

      { type: 'heading', content: 'Changing a list' },
      { type: 'code', language: 'python', content: `cart = ["Shampoo", "Soap"]

cart.append("Toothpaste")     # add to the end
print(cart)                   # ["Shampoo", "Soap", "Toothpaste"]

cart.remove("Soap")           # remove a specific item
print(cart)                   # ["Shampoo", "Toothpaste"]

prices = [299, 45, 120]
prices.sort()
print(prices)                 # [45, 120, 299]

prices.sort(reverse=True)
print(prices)                 # [299, 120, 45]` },
      { type: 'paragraph', content: 'Lists are mutable, meaning you can change them after creating them — add items, remove items, reorder them. This is different from strings, which cannot be edited in place.' },

      { type: 'heading', content: 'Useful list functions' },
      { type: 'code', language: 'python', content: `order_totals = [1200, 450, 3000, 899, 60]

print(sum(order_totals))   # 5609 -- adds everything, no loop needed
print(max(order_totals))   # 3000 -- the biggest order
print(min(order_totals))   # 60   -- the smallest order
print(len(order_totals))   # 5    -- how many orders` },
      { type: 'paragraph', content: 'Notice these are exactly the SQL aggregations you learned earlier — SUM, MAX, MIN, COUNT — just spelled differently in Python. The concept of "many rows, one number" does not change; only the syntax does.' },

      { type: 'heading', content: 'Dictionaries: labelled storage' },
      { type: 'paragraph', content: 'A list is good when order matters but labels don\'t. A dictionary is the opposite — it stores key-value pairs, like a contact card: "name" maps to "Priya Sharma", "phone" maps to "9876543210". You look things up by name, not by position.' },
      { type: 'code', language: 'python', content: `customer = {
    "name": "Priya Sharma",
    "city": "Delhi",
    "total_orders": 12,
    "is_premium": True
}

print(customer["name"])          # "Priya Sharma"
print(customer["total_orders"])  # 12

customer["total_orders"] = 13    # update a value
customer["email"] = "priya@example.com"   # add a new key
print(customer)` },

      { type: 'heading', content: 'Lists of dictionaries — this should look familiar' },
      { type: 'paragraph', content: 'Here is the most important pattern in this entire module. A list of dictionaries, where every dictionary has the same keys, is basically a table — exactly the kind of table you queried with SQL\'s SELECT and WHERE.' },
      { type: 'code', language: 'python', content: `customers = [
    {"name": "Aditi Rao",     "city": "Mumbai",    "total_spent": 79200},
    {"name": "Rohan Kumar",   "city": "Bengaluru", "total_spent": 22000},
    {"name": "Sarah Chen",    "city": "Singapore", "total_spent": 8500},
    {"name": "Priya Sharma",  "city": "Delhi",     "total_spent": 10700},
]

# This is the Python version of:
# SELECT name FROM customers WHERE city = 'Mumbai';
for customer in customers:
    if customer["city"] == "Mumbai":
        print(customer["name"])
# Output: Aditi Rao` },
      { type: 'paragraph', content: 'Each dictionary is one row. Each key is one column. Looping through the list and checking a condition is literally what WHERE does under the hood. In the Intermediate track, pandas turns this exact structure into a DataFrame so you never have to write the loop yourself — but understanding this pattern now means pandas will make instant sense later.' },

      { type: 'heading', content: 'A small aggregation, the manual way' },
      { type: 'code', language: 'python', content: `total_revenue = 0
for customer in customers:
    total_revenue = total_revenue + customer["total_spent"]

print(f"Total revenue across all customers: {total_revenue}")
# Total revenue across all customers: 120400` },

      { type: 'callout', kind: 'tip', content: 'If you remember nothing else from this module: a list of dictionaries with consistent keys is how Python represents a table of data. Everything you learned in the SQL course — filtering rows, picking columns, summing a column — has a direct Python equivalent using this exact pattern.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Predict the output, then run it below. Try modifying it to find products that cost over ₹20,000 instead.' },
      { type: 'playground', language: 'python', starter: `products = [
    {"name": "Laptop",     "price": 78000, "in_stock": True},
    {"name": "Mouse",      "price": 1200,  "in_stock": True},
    {"name": "Monitor",    "price": 22000, "in_stock": False},
]

available_total = 0
for product in products:
    if product["in_stock"]:
        available_total = available_total + product["price"]

print(f"Value of in-stock inventory: {available_total}")` },
      { type: 'callout', kind: 'tip', content: 'Next module: functions — how to wrap a piece of logic (like the filtering above) into something you can reuse with one line, instead of retyping a loop every time.' },
    ],
  },

  {
    id: 'py-mp-3',
    title: 'Mini Project: Student Record System',
    duration: '20 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: "This is the project that makes the 'list of dictionaries = a table' idea from the last module click. You're going to build a tiny, in-memory version of the system a school office actually uses to track students — add a student, view everyone, and look one up by name." },
      { type: 'list', items: [
        'Concepts used: lists, dictionaries',
      ]},

      { type: 'heading', content: 'The task' },
      { type: 'paragraph', content: 'Store students as a list of dictionaries, where each dictionary has a name, age, and grade. Then write three pieces of logic: one to add a new student, one to print every student, and one to find a specific student by name.' },

      { type: 'heading', content: 'Starter code' },
      { type: 'playground', language: 'python', starter: `students = [
    {"name": "Aditi Rao", "age": 16, "grade": "A"},
    {"name": "Rohan Kumar", "age": 17, "grade": "B"},
    {"name": "Sarah Chen", "age": 16, "grade": "A"},
]

# TODO 1: add a new student "Priya Sharma", age 17, grade "C" to the list
#         (hint: a dictionary, then .append())


# TODO 2: loop through "students" and print each one's name, age, and grade
#         in a readable line, like "Aditi Rao (16) - Grade A"


# TODO 3: write code that searches "students" for the name "Sarah Chen"
#         and prints her full record if found, or "Not found" if she isn't
` },

      { type: 'heading', content: 'Sample solution' },
      { type: 'playground', language: 'python', starter: `students = [
    {"name": "Aditi Rao", "age": 16, "grade": "A"},
    {"name": "Rohan Kumar", "age": 17, "grade": "B"},
    {"name": "Sarah Chen", "age": 16, "grade": "A"},
]

# Task 1: add a new student
students.append({"name": "Priya Sharma", "age": 17, "grade": "C"})

# Task 2: view every student
print("All students:")
for student in students:
    print(f"{student['name']} ({student['age']}) - Grade {student['grade']}")

# Task 3: find a specific student by name
search_name = "Sarah Chen"
found = False
for student in students:
    if student["name"] == search_name:
        print(f"\\nFound: {student}")
        found = True

if not found:
    print(f"\\n{search_name} not found")` },
      { type: 'callout', kind: 'tip', content: 'Stretch goal: write a function update_grade(students, name, new_grade) that finds a student by name and changes their grade. This is a small preview of the next module — wrapping logic like this into a reusable function instead of writing it inline every time.' },
    ],
  },

  {
    id: 'py-b-6',
    title: 'Functions: reusable code blocks',
    duration: '25 min',
    sections: [
      { type: 'heading', content: "Don't repeat yourself" },
      { type: 'paragraph', content: "Think of a recipe. You don't rewrite the instructions for 'how to make tea' every single time you want a cup — you follow the same recipe with whatever ingredients you have. A function is a recipe for code: you define it once, then run it as many times as you want, with different inputs." },

      { type: 'heading', content: 'Defining your first function' },
      { type: 'code', language: 'python', content: `def greet(name):
    print(f"Hello, {name}!")

greet("Aditi")   # Hello, Aditi!
greet("Rohan")   # Hello, Rohan!` },
      { type: 'paragraph', content: 'def starts a function definition. greet is the name you chose. name in parentheses is a parameter — a placeholder for whatever value you pass in later. The indented lines are the function\'s body, run every time you call greet(...).' },

      { type: 'heading', content: 'Returning a value' },
      { type: 'paragraph', content: 'print() just displays something on screen. return actually hands a value back to whoever called the function, so you can use it elsewhere — store it in a variable, do more maths with it, pass it to another function.' },
      { type: 'code', language: 'python', content: `def calculate_discount(price, discount_percent):
    discount_amount = price * (discount_percent / 100)
    final_price = price - discount_amount
    return final_price

result = calculate_discount(1000, 20)
print(result)        # 800.0

# You can use the result immediately, like any other value
print(f"You pay: {calculate_discount(2500, 10)}")   # You pay: 2250.0` },

      { type: 'heading', content: 'Default arguments' },
      { type: 'paragraph', content: 'Sometimes a parameter has a sensible default that is right most of the time. You can set one, and callers only need to override it when their situation is different.' },
      { type: 'code', language: 'python', content: `def convert_to_inr(amount, exchange_rate=83):
    return amount * exchange_rate

print(convert_to_inr(100))           # 8300 -- uses the default rate
print(convert_to_inr(100, 90))       # 9000 -- overrides it for a different day` },

      { type: 'heading', content: 'Why functions matter for data work' },
      { type: 'paragraph', content: 'Imagine cleaning 500 messy customer names: extra spaces, inconsistent capitalisation, sometimes a stray comma. You do not want to write that cleanup logic 500 times. You write it once as a function, then apply it to every name.' },
      { type: 'code', language: 'python', content: `def clean_name(raw_name):
    return raw_name.strip().title()

messy_names = ["  priya sharma  ", "ROHAN KUMAR", "aditi rao"]

for name in messy_names:
    print(clean_name(name))
# Output:
# Priya Sharma
# Rohan Kumar
# Aditi Rao` },
      { type: 'paragraph', content: 'This pattern — write a small function, then apply it to every row of data — is exactly what you will do constantly with pandas in the Intermediate track, except pandas applies your function to an entire column in one line instead of a manual loop.' },

      { type: 'callout', kind: 'tip', content: 'A good function does one clear thing and is named after what it does — clean_name, calculate_discount, is_eligible. If you struggle to name a function in a few words, it is probably doing too many things at once. Split it into two.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Predict the output, then run it below. Try adding a new applicant to the list and see if your prediction holds.' },
      { type: 'playground', language: 'python', starter: `def is_eligible_for_loan(age, monthly_income):
    return age >= 21 and monthly_income >= 25000

applicants = [
    {"name": "Rohan", "age": 25, "income": 30000},
    {"name": "Sarah",  "age": 19, "income": 40000},
    {"name": "Diego",  "age": 30, "income": 18000},
]

for applicant in applicants:
    eligible = is_eligible_for_loan(applicant["age"], applicant["income"])
    print(f"{applicant['name']}: {'Eligible' if eligible else 'Not eligible'}")` },
      { type: 'callout', kind: 'tip', content: 'Next module: reading and writing files — where all this data actually comes from in the real world.' },
    ],
  },

  {
    id: 'py-mp-4',
    title: 'Mini Project: Simple Calculator',
    duration: '15 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: "Every introductory programming course in the world eventually asks you to build a calculator, for a good reason: it forces you to think clearly about inputs, outputs, and the boundary of what a function is responsible for. This version wraps each operation — add, subtract, multiply, divide — in its own small, reusable function." },
      { type: 'list', items: [
        'Concepts used: functions, parameters, return values',
      ]},

      { type: 'heading', content: 'The task' },
      { type: 'paragraph', content: 'Write four functions — add, subtract, multiply, and divide — each taking two numbers and returning the result. divide() needs one extra piece of care: dividing by zero should not crash the program, so check for it using a plain if (you do not need try/except yet — that is a later module).' },

      { type: 'heading', content: 'Starter code' },
      { type: 'playground', language: 'python', starter: `# TODO 1: write add(a, b) -> returns a + b
def add(a, b):
    pass

# TODO 2: write subtract(a, b) -> returns a - b
def subtract(a, b):
    pass

# TODO 3: write multiply(a, b) -> returns a * b
def multiply(a, b):
    pass

# TODO 4: write divide(a, b) -> returns a / b, but returns the text
#         "Cannot divide by zero" instead of crashing if b is 0
def divide(a, b):
    pass

print(add(10, 5))         # 15
print(subtract(10, 5))    # 5
print(multiply(10, 5))    # 50
print(divide(10, 5))      # 2.0
print(divide(10, 0))      # Cannot divide by zero
` },

      { type: 'heading', content: 'Sample solution' },
      { type: 'playground', language: 'python', starter: `def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Cannot divide by zero"
    return a / b

print(add(10, 5))         # 15
print(subtract(10, 5))    # 5
print(multiply(10, 5))    # 50
print(divide(10, 5))      # 2.0
print(divide(10, 0))      # Cannot divide by zero` },
      { type: 'callout', kind: 'tip', content: "Stretch goal: write one more function, calculate(operation, a, b), that takes the operation as text (like \"add\" or \"divide\") and calls the right function using if/elif/else. This is the basic shape of how real calculator apps route a button press to the right piece of logic." },
    ],
  },

  {
    id: 'py-b-7',
    title: 'Reading and writing files',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'Data lives in files' },
      { type: 'paragraph', content: 'Everything you have practiced so far used data typed directly into your code. In the real world, data arrives as files — a bank statement exported as CSV, a sales report from your manager, a list of survey responses. This module is about getting that data into Python.' },

      { type: 'heading', content: 'Opening and reading a text file' },
      { type: 'paragraph', content: 'Python opens files with the open() function. The "with" keyword is the standard, safe way to do it — it automatically closes the file when you are done, even if something goes wrong partway through.' },
      { type: 'code', language: 'python', content: `with open("notes.txt", "r") as file:
    content = file.read()
    print(content)

# "r" means "read mode" -- you are only reading, not changing the file` },
      { type: 'paragraph', content: 'Think of "with open(...) as file" like borrowing a library book: you check it out, use it, and the with block makes sure you "return" it (close it) automatically afterwards. You never have to remember to do it yourself.' },

      { type: 'heading', content: 'Reading line by line' },
      { type: 'code', language: 'python', content: `with open("customers.txt", "r") as file:
    for line in file:
        print(line.strip())   # .strip() removes the trailing newline character` },

      { type: 'heading', content: 'Writing to a file' },
      { type: 'code', language: 'python', content: `with open("report.txt", "w") as file:
    file.write("Monthly Sales Report\\n")
    file.write("Total revenue: 542000\\n")

# "w" means "write mode" -- careful, this erases the file first if it already exists
# Use "a" (append mode) instead if you want to add to an existing file without erasing it` },
      { type: 'callout', kind: 'warning', content: 'Write mode ("w") overwrites the entire file, every time. If you only want to add new lines to an existing file without deleting what is already there, use append mode ("a") instead.' },

      { type: 'heading', content: 'CSV files: the format you will see the most' },
      { type: 'paragraph', content: 'CSV stands for Comma-Separated Values — it is just a plain text file where each line is a row, and commas separate the columns. Every spreadsheet tool (Excel, Google Sheets) can export to CSV, which is why it is the most common way data travels between tools.' },
      { type: 'code', language: 'python', content: `import csv

with open("orders.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

# If orders.csv contains:
# customer,product,total
# Aditi Rao,Laptop,78000
# Rohan Kumar,Monitor,22000
#
# This prints:
# ['customer', 'product', 'total']
# ['Aditi Rao', 'Laptop', '78000']
# ['Rohan Kumar', 'Monitor', '22000']` },
      { type: 'paragraph', content: 'Notice every value comes back as text (string), even "78000" — same gotcha from Module 2. You would need int() or float() before doing maths on it.' },

      { type: 'heading', content: 'A more convenient way: DictReader' },
      { type: 'paragraph', content: 'csv.DictReader automatically uses the first row as column names, and gives you each row as a dictionary — connecting directly back to what you learned in Module 5.' },
      { type: 'code', language: 'python', content: `import csv

total_revenue = 0
with open("orders.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row)                       # {'customer': 'Aditi Rao', 'product': 'Laptop', 'total': '78000'}
        total_revenue += float(row["total"])

print(f"Total revenue: {total_revenue}")` },

      { type: 'callout', kind: 'tip', content: 'Everything in this module — opening files, reading CSVs row by row, converting text to numbers — is exactly what pandas automates with a single line: pd.read_csv("orders.csv"). You are learning the manual version first so that when pandas does it for you, you understand exactly what is happening underneath, and can debug it when a file is malformed.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'The playground below writes a small sales.csv file into the sandbox first (so the example is self-contained), then reads it back exactly like you would with a file someone emailed you. Try adding another row before the read step and see the totals change.' },
      { type: 'playground', language: 'python', starter: `import csv

# Step 1: create a sample file (in a real job, this would already exist —
# exported from Excel, a billing system, anything)
with open("sales.csv", "w") as file:
    file.write("city,amount\\n")
    file.write("Mumbai,1200\\n")
    file.write("Delhi,450\\n")
    file.write("Mumbai,3000\\n")
    file.write("Bengaluru,899\\n")

# Step 2: read it back and total the amount per city
city_totals = {}
with open("sales.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        city = row["city"]
        amount = float(row["amount"])
        if city in city_totals:
            city_totals[city] = city_totals[city] + amount
        else:
            city_totals[city] = amount

print(city_totals)` },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: "You now have the core toolkit: variables, types, decisions, loops, lists/dictionaries, functions, and files. A quick mini project next puts file handling to immediate use, then one last module rounds out the rough edges every beginner eventually hits — handling errors gracefully instead of crashing, getting input from a user, and a couple of extra data types you will see in other people's code." },
    ],
  },

  {
    id: 'py-mp-5',
    title: 'Mini Project: Notes App',
    duration: '15 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: "You've just learned how to read and write files — this project puts that to immediate use by building the simplest possible note-taking app: write a note, and it gets saved; read your notes, and every one you've ever written shows up." },
      { type: 'list', items: [
        'Concepts used: file handling',
      ]},

      { type: 'heading', content: 'The task' },
      { type: 'paragraph', content: 'Write a write_note(text) function that appends a new line to a notes.txt file (without erasing previous notes), and a read_notes() function that prints every note currently saved.' },
      { type: 'callout', kind: 'tip', content: 'The key design decision here is append mode ("a") instead of write mode ("w"). If you used "w", every new note would erase all the ones before it — exactly the warning from the files module about write mode replacing a file\'s entire content.' },

      { type: 'heading', content: 'Starter code' },
      { type: 'playground', language: 'python', starter: `# TODO 1: write write_note(text) -> opens "notes.txt" in append mode and
#         writes the given text as a new line
def write_note(text):
    pass

# TODO 2: write read_notes() -> opens "notes.txt" in read mode and prints
#         every line currently saved
def read_notes():
    pass

write_note("Buy groceries after work")
write_note("Call Rohan about the project")
write_note("Finish the Python course")

print("Your notes:")
read_notes()
` },

      { type: 'heading', content: 'Sample solution' },
      { type: 'playground', language: 'python', starter: `def write_note(text):
    with open("notes.txt", "a") as file:
        file.write(text + "\\n")

def read_notes():
    with open("notes.txt", "r") as file:
        for line in file:
            print(line.strip())

write_note("Buy groceries after work")
write_note("Call Rohan about the project")
write_note("Finish the Python course")

print("Your notes:")
read_notes()` },
      { type: 'callout', kind: 'tip', content: 'Stretch goal: add a delete_note(line_number) function. There is no built-in way to delete just one line from a file — you have to read every line into a list, remove the one you do not want, then write the whole list back out with "w" mode. That constraint is exactly why real note apps use a database instead of a plain text file once they grow past a toy project.' },
    ],
  },

  {
    id: 'py-b-8',
    title: 'Errors, extra data types, and finishing touches',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'A few more tools before you call yourself a beginner-no-more' },
      { type: 'paragraph', content: 'Everything so far has assumed your code runs perfectly and your data is exactly the shape you expect. Real programs need to survive the moment that assumption breaks — a user types text where a number was expected, a file does not exist, a list is shorter than you thought. This module is about handling that gracefully, plus a few small but common building blocks you will see constantly in other people\'s code.' },

      { type: 'heading', content: 'Getting input from a user' },
      { type: 'paragraph', content: 'Every program you have written so far had its data built in. input() lets a running program pause and ask a real person to type something.' },
      { type: 'code', language: 'python', content: `name = input("What's your name? ")
age = int(input("What's your age? "))

print(f"Hello {name}, next year you'll be {age + 1}")` },
      { type: 'paragraph', content: 'Just like reading a CSV file or a web form, input() always returns text (a string) — notice age still needs int() before you can add 1 to it. The same gotcha from Module 2, showing up again because it is genuinely everywhere.' },
      { type: 'callout', kind: 'tip', content: "The playground on this page cannot pause and wait for you to type something (it has no way to show a text prompt), so input()-based code is shown as a read-only example here. Copy it into replit.com or trinket.io, or run it on your own computer, to actually try typing a response." },

      { type: 'heading', content: 'When things go wrong: try and except' },
      { type: 'paragraph', content: "Think of a vending machine. If you insert a coin it doesn't recognise, a badly built machine would jam or break. A well built one just says 'coin not accepted, try again' and keeps working. try/except is how you give your code that same resilience — catch the problem, respond sensibly, and keep running instead of crashing." },
      { type: 'code', language: 'python', content: `values = ["10", "25", "abc", "40"]
total = 0

for v in values:
    try:
        total += int(v)
    except ValueError:
        print(f"Skipping invalid value: {v}")

print(f"Total: {total}")
# Output:
# Skipping invalid value: abc
# Total: 75` },
      { type: 'paragraph', content: 'Without try/except, the moment Python hit "abc" and tried int("abc"), the entire program would crash with a ValueError and nothing after that line would run. With try/except, one bad value is skipped and the rest of the loop finishes normally — exactly what you want when cleaning real-world data full of typos and blanks.' },

      { type: 'heading', content: 'Catching specific error types' },
      { type: 'paragraph', content: 'You can catch different kinds of problems differently, the same way a doctor treats a fracture differently from a fever — both are "something\'s wrong," but the right response depends on what exactly went wrong.' },
      { type: 'code', language: 'python', content: `def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return None

print(safe_divide(10, 2))   # 5.0
print(safe_divide(10, 0))   # None -- no crash, just a clear "could not do this"` },
      { type: 'callout', kind: 'warning', content: 'Avoid writing a bare except: with nothing after it — it silently swallows every possible error, including ones you genuinely needed to know about (like a typo in your own code). Always name the specific error you expect, like except ValueError: or except ZeroDivisionError:.' },

      { type: 'heading', content: "Tuples: lists that don't change" },
      { type: 'paragraph', content: 'A tuple looks almost like a list, but uses round brackets instead of square ones, and once created, it cannot be changed. Use a tuple when a value genuinely should not change after creation — like a pair of GPS coordinates, or the (red, green, blue) values that make up a fixed colour.' },
      { type: 'code', language: 'python', content: `mumbai_coordinates = (19.0760, 72.8777)
print(mumbai_coordinates[0])   # 19.076 -- you can read a tuple just like a list

# mumbai_coordinates[0] = 20.0  -- this line would raise a TypeError
# tuples cannot be modified once created` },
      { type: 'paragraph', content: 'A common place tuples show up without you naming them directly: a function that needs to hand back two values at once.' },
      { type: 'code', language: 'python', content: `def get_min_max(numbers):
    return min(numbers), max(numbers)   # this is secretly a tuple

lowest, highest = get_min_max([23, 89, 12, 45])
print(lowest, highest)   # 12 89` },

      { type: 'heading', content: 'Sets: automatic de-duplication' },
      { type: 'paragraph', content: 'A set stores a collection of values with no duplicates and no fixed order — perfect for the very common question "what are the unique values here?"' },
      { type: 'code', language: 'python', content: `cities_visited = ["Mumbai", "Delhi", "Mumbai", "Pune", "Delhi", "Mumbai"]

unique_cities = set(cities_visited)
print(unique_cities)            # {'Mumbai', 'Delhi', 'Pune'} -- duplicates gone
print(len(unique_cities))       # 3 -- the count of distinct cities` },
      { type: 'paragraph', content: 'Real-life example: you have a year of delivery records with a city listed on every single order (thousands of rows, lots of repeats). set(city_list) instantly tells you how many distinct cities you actually deliver to, with no loops or manual checking required.' },

      { type: 'heading', content: "None: a placeholder for 'nothing yet'" },
      { type: 'paragraph', content: "None represents the deliberate absence of a value — not zero, not an empty string, but 'there is genuinely nothing here.' You already saw it in this module's safe_divide() function: when division was impossible, returning None was a clear, honest signal that no real answer exists, rather than faking one with 0." },
      { type: 'code', language: 'python', content: `discount = None   # we don't know the discount yet

if discount is None:
    print("No discount has been set")
else:
    print(f"Discount: {discount}")` },
      { type: 'callout', kind: 'tip', content: "Always compare against None using 'is None' or 'is not None', not '== None'. It is a small convention, but it is what every experienced Python developer expects to see, and some edge cases behave oddly with ==." },

      { type: 'heading', content: 'Unpacking: assigning several variables in one line' },
      { type: 'paragraph', content: 'You already used this without a name in the get_min_max() example above. Unpacking lets you split a tuple, list, or any matching sequence into individual variables in a single line.' },
      { type: 'code', language: 'python', content: `point = (10, 20)
x, y = point
print(x, y)   # 10 20

students = [("Aditi", 92), ("Rohan", 78), ("Sarah", 85)]
for name, score in students:
    print(f"{name} scored {score}")` },
      { type: 'paragraph', content: 'This pattern — for name, score in students — is everywhere in real Python code, and connects directly back to Module 5\'s "list of dictionaries" idea: a list of tuples is another common way the same row-by-row data shows up.' },

      { type: 'heading', content: 'Borrowing code with import' },
      { type: 'paragraph', content: "Python ships with a huge standard library of pre-written code, organised into modules. You already used one in Module 7: import csv. Two more you will reach for constantly:" },
      { type: 'code', language: 'python', content: `import math
print(math.sqrt(81))     # 9.0 -- square root
print(math.ceil(4.2))    # 5   -- rounds up

import random
print(random.randint(1, 100))    # a random whole number between 1 and 100
print(random.choice(["Heads", "Tails"]))   # randomly picks one item from a list` },
      { type: 'paragraph', content: 'Real-life use: a quiz app picking a random question, or a simulation modelling 1,000 random coin flips to check if a coin is fair — both start with exactly these two lines.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Predict the output, then run it below. Try adding a value that should trigger the except block, or a new city to the list.' },
      { type: 'playground', language: 'python', starter: `def safe_average(numbers):
    try:
        return sum(numbers) / len(numbers)
    except ZeroDivisionError:
        return None

scores = [78, 85, 92]
empty_list = []

print(safe_average(scores))
print(safe_average(empty_list))

cities_visited = ["Mumbai", "Pune", "Mumbai", "Delhi", "Pune"]
unique_cities = set(cities_visited)
print(f"Visited {len(unique_cities)} unique cities: {unique_cities}")` },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'You now have the real foundation, start to finish: variables and types, decisions, loops, lists/dictionaries/tuples/sets, functions, files, and handling errors without crashing. One module remains — not new theory, just two real projects to build with everything you now know.' },
    ],
  },

  {
    id: 'py-b-9',
    title: 'Capstone projects: build something real',
    duration: '60 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Practice time — no new concepts here' },
      { type: 'paragraph', content: "You've finished every lesson in this track. This module is meant to be done after the rest of the course: two real, useful projects that combine everything — variables, loops, conditionals, functions, lists, dictionaries, sets, files, and error handling — into something you would actually want to use yourself." },
      { type: 'callout', kind: 'tip', content: 'Each project gives you a starter with TODO comments, followed by a sample solution. Genuinely attempt the TODOs yourself first — even getting partway there and getting stuck teaches you more than reading the answer immediately.' },

      { type: 'heading', content: 'Project 1 (Easy): Personal Expense Tracker' },
      { type: 'paragraph', content: "The scenario: you want to understand where your own money is going every month, without opening a banking app. You'll represent a month of expenses as a list of dictionaries (exactly the pattern from Module 5) and write functions to analyse it." },
      { type: 'list', items: [
        'total_spent(expenses) — returns the total amount spent across all expenses',
        'biggest_expense(expenses) — returns the single expense dictionary with the highest amount',
        'spend_by_category(expenses) — returns a dictionary mapping each category to its total spend',
        'add_expense(expenses, date, category, amount) — adds a new expense, but uses try/except to reject a negative amount instead of silently accepting bad data',
      ]},

      { type: 'heading', content: 'Starter code' },
      { type: 'playground', language: 'python', starter: `expenses = [
    {"date": "2024-06-01", "category": "Food", "amount": 450},
    {"date": "2024-06-02", "category": "Transport", "amount": 120},
    {"date": "2024-06-03", "category": "Food", "amount": 300},
    {"date": "2024-06-05", "category": "Entertainment", "amount": 800},
    {"date": "2024-06-07", "category": "Transport", "amount": 60},
    {"date": "2024-06-10", "category": "Food", "amount": 250},
    {"date": "2024-06-15", "category": "Bills", "amount": 1500},
    {"date": "2024-06-20", "category": "Entertainment", "amount": 400},
]

# TODO 1: total_spent(expenses) -> sum of every "amount"
def total_spent(expenses):
    pass  # replace with your code

# TODO 2: biggest_expense(expenses) -> the expense dictionary with the highest amount
def biggest_expense(expenses):
    pass  # replace with your code

# TODO 3: spend_by_category(expenses) -> a dict mapping category -> total amount
def spend_by_category(expenses):
    pass  # replace with your code

# TODO 4: add_expense(...) -> appends a new expense, but raises/catches a
#         ValueError if amount is negative, instead of just adding bad data
def add_expense(expenses, date, category, amount):
    pass  # replace with your code

print(f"Total spent: {total_spent(expenses)}")
print(f"Biggest expense: {biggest_expense(expenses)}")
print(f"Spend by category: {spend_by_category(expenses)}")` },

      { type: 'heading', content: 'Sample solution' },
      { type: 'playground', language: 'python', starter: `expenses = [
    {"date": "2024-06-01", "category": "Food", "amount": 450},
    {"date": "2024-06-02", "category": "Transport", "amount": 120},
    {"date": "2024-06-03", "category": "Food", "amount": 300},
    {"date": "2024-06-05", "category": "Entertainment", "amount": 800},
    {"date": "2024-06-07", "category": "Transport", "amount": 60},
    {"date": "2024-06-10", "category": "Food", "amount": 250},
    {"date": "2024-06-15", "category": "Bills", "amount": 1500},
    {"date": "2024-06-20", "category": "Entertainment", "amount": 400},
]

def total_spent(expenses):
    total = 0
    for expense in expenses:
        total = total + expense["amount"]
    return total

def biggest_expense(expenses):
    biggest = expenses[0]
    for expense in expenses:
        if expense["amount"] > biggest["amount"]:
            biggest = expense
    return biggest

def spend_by_category(expenses):
    totals = {}
    for expense in expenses:
        category = expense["category"]
        if category in totals:
            totals[category] = totals[category] + expense["amount"]
        else:
            totals[category] = expense["amount"]
    return totals

def add_expense(expenses, date, category, amount):
    try:
        if amount < 0:
            raise ValueError("Amount cannot be negative")
        expenses.append({"date": date, "category": category, "amount": amount})
        print(f"Added: {category} - {amount}")
    except ValueError as e:
        print(f"Could not add expense: {e}")

print(f"Total spent: {total_spent(expenses)}")
print(f"Biggest expense: {biggest_expense(expenses)}")
print(f"Spend by category: {spend_by_category(expenses)}")

add_expense(expenses, "2024-06-22", "Food", 200)    # works fine
add_expense(expenses, "2024-06-23", "Food", -50)    # rejected safely
print(f"New total: {total_spent(expenses)}")` },

      { type: 'heading', content: 'Project 2 (Hard): End-to-End Sales Report from a CSV File' },
      { type: 'paragraph', content: "The scenario: a regional sales team emails you a CSV export every week. It's never perfectly clean — a few rows always have a typo or a missing value where a number should be. Your job is to build a small, reusable pipeline that loads the file, skips anything broken, and produces a clean summary report — without crashing on the bad rows." },
      { type: 'list', items: [
        'load_sales(filename) — reads the CSV with csv.DictReader, converts "amount" to a number, and uses try/except to skip (and report) any row where that conversion fails',
        'total_revenue(sales) — returns the total of every valid amount',
        'revenue_by_city(sales) — returns a dictionary mapping each city to its total revenue',
        'unique_cities(sales) — returns a set of the distinct cities present in the data',
        'A final report that prints the total revenue, the revenue per city, and which city generated the most revenue',
      ]},

      { type: 'heading', content: 'Starter code' },
      { type: 'playground', language: 'python', starter: `import csv

# Step 1: create the sample file the rest of the script will work with
with open("regional_sales.csv", "w") as file:
    file.write("date,city,product,amount\\n")
    file.write("2024-01-05,Mumbai,Wireless Mouse,799\\n")
    file.write("2024-01-10,Delhi,Table Lamp,1299\\n")
    file.write("2024-01-12,Mumbai,Coffee Beans,899\\n")
    file.write("2024-01-15,Bengaluru,Running Shoes,N/A\\n")
    file.write("2024-01-18,Delhi,Cotton T-Shirt,599\\n")
    file.write("2024-01-20,Mumbai,Green Tea Pack,349\\n")
    file.write("2024-01-22,Bengaluru,Throw Pillow,599\\n")
    file.write("2024-01-25,Delhi,Laptop Stand,oops\\n")
    file.write("2024-01-28,Mumbai,Running Shoes,3499\\n")
    file.write("2024-01-30,Bengaluru,Coffee Beans,899\\n")
    file.write("2024-02-02,Delhi,Wireless Mouse,799\\n")
    file.write("2024-02-05,Mumbai,Table Lamp,1299\\n")

# TODO 1: load_sales(filename) -> a list of row dicts, with "amount" converted
#         to a float, skipping (and printing a warning for) any row that fails
def load_sales(filename):
    pass  # replace with your code

# TODO 2: total_revenue(sales) -> sum of every "amount" in the list
def total_revenue(sales):
    pass

# TODO 3: revenue_by_city(sales) -> dict mapping city -> total revenue
def revenue_by_city(sales):
    pass

# TODO 4: unique_cities(sales) -> a set of the distinct cities
def unique_cities(sales):
    pass

sales = load_sales("regional_sales.csv")
print(f"Loaded {len(sales)} valid rows")
print(f"Total revenue: {total_revenue(sales)}")
print(f"Revenue by city: {revenue_by_city(sales)}")
print(f"Unique cities: {unique_cities(sales)}")` },

      { type: 'heading', content: 'Sample solution' },
      { type: 'playground', language: 'python', starter: `import csv

with open("regional_sales.csv", "w") as file:
    file.write("date,city,product,amount\\n")
    file.write("2024-01-05,Mumbai,Wireless Mouse,799\\n")
    file.write("2024-01-10,Delhi,Table Lamp,1299\\n")
    file.write("2024-01-12,Mumbai,Coffee Beans,899\\n")
    file.write("2024-01-15,Bengaluru,Running Shoes,N/A\\n")
    file.write("2024-01-18,Delhi,Cotton T-Shirt,599\\n")
    file.write("2024-01-20,Mumbai,Green Tea Pack,349\\n")
    file.write("2024-01-22,Bengaluru,Throw Pillow,599\\n")
    file.write("2024-01-25,Delhi,Laptop Stand,oops\\n")
    file.write("2024-01-28,Mumbai,Running Shoes,3499\\n")
    file.write("2024-01-30,Bengaluru,Coffee Beans,899\\n")
    file.write("2024-02-02,Delhi,Wireless Mouse,799\\n")
    file.write("2024-02-05,Mumbai,Table Lamp,1299\\n")

def load_sales(filename):
    valid_rows = []
    with open(filename, "r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            try:
                row["amount"] = float(row["amount"])
                valid_rows.append(row)
            except ValueError:
                print(f"Skipping bad row: {row}")
    return valid_rows

def total_revenue(sales):
    total = 0
    for row in sales:
        total = total + row["amount"]
    return total

def revenue_by_city(sales):
    totals = {}
    for row in sales:
        city = row["city"]
        if city in totals:
            totals[city] = totals[city] + row["amount"]
        else:
            totals[city] = row["amount"]
    return totals

def unique_cities(sales):
    cities_list = []
    for row in sales:
        cities_list.append(row["city"])
    return set(cities_list)

sales = load_sales("regional_sales.csv")
print(f"Loaded {len(sales)} valid rows")
print(f"Total revenue: {total_revenue(sales)}")

city_totals = revenue_by_city(sales)
print(f"Revenue by city: {city_totals}")
print(f"Unique cities: {unique_cities(sales)}")

# Find the top city without any new syntax -- just a loop with a running "best so far"
top_city = None
top_amount = 0
for city in city_totals:           # looping over a dict like this gives you its keys
    if city_totals[city] > top_amount:
        top_amount = city_totals[city]
        top_city = city

print(f"Top city by revenue: {top_city} ({top_amount})")` },

      { type: 'heading', content: "You're done with the Python Beginner track" },
      { type: 'paragraph', content: "If you built both projects (even with a few peeks at the solutions), you have written real, working Python that solves an actual problem — not just toy exercises. That is the entire point of a beginner track: not memorising syntax, but being able to sit down with a blank file and a real question, and build your way to an answer." },
      { type: 'paragraph', content: 'The Intermediate track builds directly on this: pandas will feel like "the list-of-dictionaries pattern from Module 5, but with superpowers." NumPy will feel like "lists, but built for fast maths." And matplotlib turns the numbers you already know how to compute into charts. When ready, switch to Intermediate from the sidebar.' },
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
      { type: 'paragraph', content: 'In the next module: how to write one formula and have it work correctly for every row in a table — the single skill that separates "I can use Excel" from "I can use Excel quickly."' },
    ],
  },

  {
    id: 'ex-b-2',
    title: 'Formulas that travel: cell references and everyday functions',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'The lazy way is the right way' },
      { type: 'paragraph', content: 'Imagine you run a small shop and need to calculate 18% GST on 200 different products. Typing =price*0.18 two hundred times, once per row, would take forever and you would definitely make a typo somewhere. The entire point of spreadsheet formulas is that you write the logic once, and Excel applies it everywhere automatically.' },

      { type: 'heading', content: 'Relative references: formulas that adjust automatically' },
      { type: 'paragraph', content: 'By default, when you copy a formula to a new cell, Excel does not copy the exact same formula — it shifts the references to match the new position. This is called a relative reference, and it is the default behaviour for every formula you write.' },
      { type: 'code', language: 'excel', content: `Cell B2: =A2*0.18      (calculates GST for the price in A2)

Copy B2 down to B3, B4, B5...
B3 automatically becomes: =A3*0.18
B4 automatically becomes: =A4*0.18
B5 automatically becomes: =A5*0.18` },
      { type: 'paragraph', content: 'Excel is not copying the literal text "=A2*0.18" — it understood your formula as "multiply the cell one column to my left by 0.18," and re-applies that same relationship wherever you paste it.' },

      { type: 'heading', content: 'The fill handle: dragging formulas down instantly' },
      { type: 'paragraph', content: 'You rarely copy-paste formulas one by one. Click the small square at the bottom-right corner of a selected cell (the "fill handle") and drag down — or even faster, double-click that corner and Excel fills the formula down automatically to match the length of the data next to it.' },
      { type: 'paragraph', content: 'Real-life feel: imagine a teacher with 40 students\' marks in column B. She writes one formula in C2 to calculate the percentage, double-clicks the fill handle, and all 40 percentages appear instantly — correctly adjusted for each student\'s row.' },

      { type: 'heading', content: 'Absolute references: locking a cell in place' },
      { type: 'paragraph', content: 'Sometimes you do NOT want a reference to shift. Imagine your GST rate (18%) is stored once in cell B1, and you want every product\'s tax calculated against that same single cell — not a different row each time.' },
      { type: 'code', language: 'excel', content: `B1: 18%   (the GST rate, stored once)

Without locking (relative reference, this BREAKS):
C2: =A2*B1     -- correct
C3: =A3*B2     -- WRONG, shifted down to an empty cell!

With locking (absolute reference, this WORKS):
C2: =A2*$B$1   -- correct
C3: =A3*$B$1   -- still points to B1, exactly as intended` },
      { type: 'paragraph', content: 'The dollar sign ($) freezes whatever comes right after it. $B$1 locks both the column (B) and the row (1), so no matter where you copy the formula, it always points back to that one cell.' },
      { type: 'callout', kind: 'tip', content: 'Instead of typing dollar signs manually, click on a cell reference inside a formula and press F4. It cycles through all four options: A1 (relative) → $A$1 (fully locked) → A$1 (row locked) → $A1 (column locked) → back to A1. This is much faster than typing $ symbols by hand.' },

      { type: 'heading', content: 'Useful everyday functions' },
      { type: 'paragraph', content: 'You already met SUM and AVERAGE in Module 1. A handful of other functions cover most day-to-day spreadsheet work.' },
      { type: 'code', language: 'excel', content: `=COUNT(A1:A50)    → how many cells contain numbers
=COUNTA(A1:A50)   → how many cells are NOT empty (numbers AND text)
=MAX(A1:A50)      → the largest value
=MIN(A1:A50)      → the smallest value
=ROUND(A1, 2)     → rounds A1 to 2 decimal places` },
      { type: 'paragraph', content: 'Real-life example: a class has 40 rows but only 35 students submitted marks (5 are blank). COUNT(B2:B41) tells you 35 — exactly how many students actually have a score, which is what you need before calculating a fair class average.' },

      { type: 'heading', content: 'Common formula errors and what they mean' },
      { type: 'list', items: [
        '#DIV/0! — you tried to divide by zero or by an empty cell. Check your denominator.',
        '#REF! — your formula points to a cell that no longer exists, usually because a row or column it relied on was deleted.',
        '#VALUE! — you are trying to do maths on something that is not a number, like adding text to a number.',
        '#NAME? — Excel does not recognise a function name, usually a typo like =AVERGAE() instead of =AVERAGE().',
        '##### (just hash symbols) — not an error at all, just a column too narrow to display the number. Widen the column.',
      ]},
      { type: 'callout', kind: 'warning', content: "Do not panic when you see an error code — they are Excel's way of telling you exactly what went wrong, not a sign that you have broken the file. Read the error name, then check the cell the formula refers to." },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Build a tiny invoice. In column A, list 5 product names. In column B, put a price for each. In cell D1, type a tax rate like 18%. In C2, write a formula that multiplies B2 by D1 using an absolute reference ($D$1), then drag the fill handle down to C6. All 5 tax amounts should calculate correctly, all referencing the same D1 cell.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'A quick mini project next puts references and functions to immediate use, then the next module covers making your numbers actually readable — currency symbols, percentages, dates, and conditional formatting that highlights important values automatically.' },
    ],
  },

  {
    id: 'ex-mp-1',
    title: 'Mini Project: Tax Invoice Calculator',
    duration: '15 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: "Every small shop, freelancer, and consultant eventually builds some version of this exact spreadsheet. It is the cleanest real test of relative vs. absolute references, because getting the tax rate reference wrong breaks every single row at once — you will know immediately if you got it right." },
      { type: 'list', items: [
        'Concepts used: relative references, absolute references, SUM',
      ]},

      { type: 'heading', content: 'The task' },
      { type: 'paragraph', content: 'Build a one-sheet invoice. Type this table into a new sheet:' },
      { type: 'list', items: [
        'Product | Price | Quantity',
        'Wireless Mouse | 799 | 2',
        'Laptop Stand | 1499 | 1',
        'Cotton T-Shirt | 599 | 3',
        'Table Lamp | 1299 | 1',
        'Throw Pillow | 599 | 4',
      ]},
      { type: 'paragraph', content: 'In a separate cell (say, F1), type a tax rate: 18%.' },
      { type: 'heading', content: 'Build these columns and totals' },
      { type: 'list', items: [
        'Subtotal column = Price × Quantity for each row',
        'Tax column = Subtotal × the tax rate in F1, using an absolute reference so it works correctly when copied down every row',
        'Total column = Subtotal + Tax',
        'A "Grand Total" cell at the bottom that SUMs the entire Total column',
      ]},
      { type: 'code', language: 'excel', content: `Subtotal (row 2 example):
=B2*C2

Tax (row 2 example, assuming tax rate is in F1):
=D2*$F$1
-- the $ signs are essential here: without them, copying this formula down
   shifts the F1 reference to F2, F3, F4... which are all empty

Total (row 2 example):
=D2+E2

Grand Total:
=SUM(F2:F6)   -- careful: this should sum your Total column, double-check
                 which column letter your Total ended up in` },
      { type: 'callout', kind: 'tip', content: "If your Tax column shows 0 (or a wildly wrong number) for every row except the first, that is the absolute-reference mistake from the lesson showing up in a real spreadsheet — go back and check for the $ signs around your tax rate cell." },
    ],
  },

  {
    id: 'ex-b-3',
    title: 'Formatting numbers, dates, and cells so they make sense',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'Same number, different meaning' },
      { type: 'paragraph', content: 'The number 50000 could mean a salary, a population, or a date. Without formatting, Excel shows raw digits and leaves the reader guessing. Formatting does not change the actual value stored in the cell — it only changes how that value is displayed, so the right meaning jumps out immediately.' },

      { type: 'heading', content: 'Currency and percentage formatting' },
      { type: 'paragraph', content: 'Select a cell or range, then either use the toolbar buttons (the ₹ or % icon) or right-click → Format Cells for more control.' },
      { type: 'code', language: 'excel', content: `Raw value: 75000        Formatted as currency: ₹75,000.00
Raw value: 0.18          Formatted as percentage: 18%
Raw value: 1234567       Formatted with thousand separators: 1,234,567` },
      { type: 'paragraph', content: 'Real-life parallel: a salary slip that shows "75000" looks like a typo or an error. The same number shown as "₹75,000.00" looks professional and unambiguous instantly. The formatting is doing real communication work, not just decoration.' },

      { type: 'heading', content: 'Why Excel stores dates as numbers' },
      { type: 'paragraph', content: 'Behind the scenes, Excel stores every date as a count of days since 1 January 1900. 15 March 2025 is really just the number 45735 in disguise, formatted to look like a date. This is exactly why you can do maths with dates — adding 30 days to a due date, or subtracting two dates to find how many days passed.' },
      { type: 'code', language: 'excel', content: `A1: 01-Jan-2025
B1: =A1+30          → 31-Jan-2025 (30 days later)

A2: 15-Jan-2025
B2: 01-Feb-2025
C2: =B2-A2          → 17 (the number of days between the two dates)` },
      { type: 'paragraph', content: 'Real-life use: an HR sheet tracking when employee probation periods end. =join_date+180 instantly tells you the date 180 days after someone joined, with zero manual calendar counting.' },

      { type: 'heading', content: 'Conditional formatting: let Excel highlight things for you' },
      { type: 'paragraph', content: 'Instead of scanning a column of 500 numbers yourself to spot the overdue invoices, you can tell Excel: "if a value matches this condition, change its colour automatically."' },
      { type: 'list', items: [
        'Select the range you want to watch (e.g., a column of due dates or sales figures)',
        'Go to Home → Conditional Formatting → Highlight Cells Rules',
        'Choose a rule, e.g. "Greater Than" 50000, and pick a colour like green',
        'Excel now colours every cell that matches, and keeps doing it automatically as the data changes',
      ]},
      { type: 'paragraph', content: 'Real-life example: a sales manager highlights every salesperson who beat their target in green, and everyone below target in red. The pattern is now visible in half a second, instead of requiring her to read every single number.' },

      { type: 'heading', content: 'Freeze panes: keep headers visible while scrolling' },
      { type: 'paragraph', content: 'When a table has hundreds of rows, scrolling down means losing sight of your column headers — and then you forget which column is which. Freeze Panes solves this permanently.' },
      { type: 'list', items: [
        'Click on the row just below the header you want frozen (e.g., click on row 2 if row 1 is your header)',
        'Go to View → Freeze Panes → Freeze Panes',
        'Now scroll down — row 1 stays locked in place, always visible',
      ]},
      { type: 'callout', kind: 'tip', content: 'For a quick win, use View → Freeze Panes → Freeze Top Row. It is a one-click shortcut that handles the most common case (locking just the header row) without you needing to select anything first.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Take the invoice you built in the last module. Format the price column as currency, format the tax rate cell as a percentage, and add a conditional formatting rule that highlights any product priced over ₹1,000 in a different colour.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'In the next module: teaching Excel to make decisions on its own with the IF function — pass/fail, eligible/not eligible, bonus/no bonus, all calculated automatically.' },
    ],
  },

  {
    id: 'ex-b-4',
    title: 'Making decisions: IF and basic logic functions',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'Teaching Excel to decide' },
      { type: 'paragraph', content: 'So far, every formula has done one calculation no matter what. Real decisions are not like that — a student either passes or fails depending on their marks, a salesperson either gets a bonus or does not depending on their numbers. IF is how you tell Excel to choose between two outcomes based on a condition.' },

      { type: 'heading', content: 'The IF function' },
      { type: 'code', language: 'excel', content: `=IF(condition, value_if_true, value_if_false)

Example:
=IF(B2>=40, "Pass", "Fail")` },
      { type: 'paragraph', content: 'Read it like English: "If the value in B2 is greater than or equal to 40, show Pass, otherwise show Fail." Drag this formula down a column of student marks and every row evaluates the same rule independently.' },

      { type: 'heading', content: 'Nested IF: more than two outcomes' },
      { type: 'paragraph', content: 'Real grading is rarely just pass/fail. A typical scheme is: 90+ is A, 75-89 is B, 60-74 is C, below 60 is Fail. You can chain multiple IFs together, called nesting, to handle this.' },
      { type: 'code', language: 'excel', content: `=IF(B2>=90, "A", IF(B2>=75, "B", IF(B2>=60, "C", "Fail")))` },
      { type: 'paragraph', content: 'Excel checks each condition in order. If B2 is 82, it is not >= 90, so it moves to the next IF: is it >= 75? Yes, so it returns "B" and stops checking the rest.' },
      { type: 'callout', kind: 'tip', content: 'Nested IFs get hard to read past 3-4 levels. Newer Excel versions have IFS(condition1, result1, condition2, result2, ...) which does the same thing with cleaner syntax: =IFS(B2>=90,"A", B2>=75,"B", B2>=60,"C", TRUE,"Fail"). Use whichever your version supports.' },

      { type: 'heading', content: 'Combining conditions: AND, OR' },
      { type: 'paragraph', content: 'Some decisions depend on more than one thing being true. A sales bonus might require both a sales target AND a minimum tenure at the company.' },
      { type: 'code', language: 'excel', content: `=IF(AND(B2>=100000, C2>=1), "Bonus", "No bonus")
-- Both conditions must be true: sales (B2) at least 100000, AND tenure (C2) at least 1 year

=IF(OR(D2="Mumbai", D2="Delhi"), "Metro", "Non-metro")
-- Either condition is enough: city is Mumbai OR Delhi` },
      { type: 'paragraph', content: 'This is exactly the AND/OR logic you would use in SQL\'s WHERE clause or Python\'s if statement — same underlying idea, just Excel\'s particular syntax for it.' },

      { type: 'heading', content: 'COUNTIF and SUMIF: conditional counting and totalling' },
      { type: 'paragraph', content: 'Two of the most useful functions in everyday Excel work let you count or total values that match a condition, without writing a single IF formula.' },
      { type: 'code', language: 'excel', content: `=COUNTIF(D2:D50, "Mumbai")
-- counts how many rows in D2:D50 say "Mumbai"

=SUMIF(D2:D50, "Mumbai", B2:B50)
-- adds up the values in B2:B50, but only for rows where D2:D50 says "Mumbai"` },
      { type: 'paragraph', content: 'Real-life example: a sales sheet with a City column and a Sales column. =SUMIF(City_range, "Mumbai", Sales_range) instantly tells you total Mumbai sales, without filtering, sorting, or manually adding numbers.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Build a small marksheet: Name, Marks (out of 100) for 6-8 students. Add a Result column using IF to show "Pass" for 40+ and "Fail" below. Then add a Grade column using nested IF for A (90+), B (75-89), C (60-74), Fail (below 60). Finally, use COUNTIF to count how many students passed.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: "A quick mini project next builds a full marksheet with IF and COUNTIF, then the next module covers sorting your data the way you need it, filtering out the noise, and turning numbers into your first chart." },
    ],
  },

  {
    id: 'ex-mp-2',
    title: 'Mini Project: Pass/Fail Marksheet',
    duration: '20 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: "This is the exact spreadsheet a class teacher builds at the end of every term — and it is the cleanest way to drill nested IF, COUNTIF, and SUMIF in one connected exercise instead of three separate disconnected ones." },
      { type: 'list', items: [
        'Concepts used: IF, nested IF, COUNTIF',
      ]},

      { type: 'heading', content: 'The task' },
      { type: 'paragraph', content: 'Type this table into a new sheet:' },
      { type: 'list', items: [
        'Name | Marks',
        'Aditi Rao | 92',
        'Rohan Kumar | 68',
        'Sarah Chen | 38',
        'Priya Sharma | 81',
        'Marcus Johnson | 55',
        'James Okonkwo | 47',
        'Yuki Tanaka | 95',
        'Diego Martinez | 29',
      ]},
      { type: 'heading', content: 'Build these columns and a summary' },
      { type: 'list', items: [
        '"Result" column — IF marks are 40 or above, show "Pass", otherwise "Fail"',
        '"Grade" column — nested IF: A (90+), B (75-89), C (60-74), D (40-59), F (below 40)',
        'Below the table, a "Total Passed" cell using COUNTIF on the Result column',
        'Below that, a "Total Failed" cell using COUNTIF the same way',
        'A "Class Average" cell using AVERAGE on the Marks column',
      ]},
      { type: 'code', language: 'excel', content: `Result (row 2 example):
=IF(B2>=40, "Pass", "Fail")

Grade (row 2 example):
=IF(B2>=90, "A", IF(B2>=75, "B", IF(B2>=60, "C", IF(B2>=40, "D", "F"))))

Total Passed (assuming Result is column C, rows 2-9):
=COUNTIF(C2:C9, "Pass")

Total Failed:
=COUNTIF(C2:C9, "Fail")

Class Average:
=AVERAGE(B2:B9)` },
      { type: 'callout', kind: 'tip', content: 'Stretch goal: add conditional formatting that highlights every "Fail" row in red, so the teacher can spot at-risk students instantly without reading every single row — exactly how this kind of sheet is actually used in a real school office.' },
    ],
  },

  {
    id: 'ex-b-5',
    title: 'Sorting, filtering, and your first chart',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'Finding signal in a big table' },
      { type: 'paragraph', content: 'A table with 500 rows is not useful by itself — you need to be able to ask it questions. "Who are my top 10 customers?" "Show me only orders from Delhi." "What does our monthly trend look like?" Sorting, filtering, and charts are the three tools that turn a wall of numbers into actual answers.' },

      { type: 'heading', content: 'Sorting your data' },
      { type: 'paragraph', content: 'Sorting rearranges entire rows based on the values in one or more columns, while keeping every row intact (a customer\'s name always stays with their correct city and order amount).' },
      { type: 'list', items: [
        'Click anywhere inside your table',
        'Go to Data → Sort, or use the A→Z / Z→A buttons for a quick single-column sort',
        'For multiple levels (e.g., sort by City, then by Sales within each city), use Data → Sort and click "Add Level"',
      ]},
      { type: 'paragraph', content: 'Real-life example: a school wants a merit list sorted by marks, highest first, and within tied marks, sorted alphabetically by name. That is exactly a two-level sort: Marks (Largest to Smallest), then Name (A to Z).' },
      { type: 'callout', kind: 'warning', content: 'Always select your entire table (or click anywhere inside it and let Excel auto-detect the range) before sorting — never sort just one column by itself. Sorting a single column in isolation scrambles your data, because names and their corresponding values will no longer match up.' },

      { type: 'heading', content: 'Filtering with AutoFilter' },
      { type: 'paragraph', content: 'While sorting rearranges everything, filtering temporarily hides rows that do not match your criteria, without deleting anything. Turn it on with Ctrl+Shift+L, or Data → Filter.' },
      { type: 'paragraph', content: 'Every column header gets a small dropdown arrow. Click it to filter by a specific value (show only "Mumbai"), a condition ("greater than 50000"), or even a colour if you used conditional formatting.' },
      { type: 'code', language: 'excel', content: `Example filter conditions you can apply from the dropdown:
City equals "Mumbai"
Sales greater than 50000
Date between 01-Jan-2025 and 31-Mar-2025` },
      { type: 'paragraph', content: 'Real-life example: a regional manager only cares about her own region. She filters the City column to show only her cities, and instantly the sheet feels like it was built just for her — even though the underlying data covers the whole country.' },

      { type: 'heading', content: 'Combining sort and filter' },
      { type: 'paragraph', content: 'These two tools are most powerful together. Filter the table down to just "Mumbai," then sort what is left by Sales (highest first), and you instantly have "top salespeople in Mumbai" — without writing a single formula.' },

      { type: 'heading', content: 'Your first chart' },
      { type: 'paragraph', content: 'A chart turns a column of numbers into a shape your eyes can process in one glance. Select your data (including headers), then go to Insert and pick a chart type.' },
      { type: 'list', items: [
        'Bar/Column chart — comparing categories, like sales by city or marks by subject. The most common chart for a reason: it is the easiest to read accurately.',
        'Line chart — showing a trend over time, like monthly revenue across a year.',
        'Pie chart — showing parts of a whole, like market share by 4-5 competitors. Use sparingly — pie charts get hard to read past 5-6 slices.',
      ]},
      { type: 'paragraph', content: 'Real-life parallel: a news report showing "election results by state" almost always uses a bar chart, not a giant table of numbers — because a bar chart lets you compare 28 states in two seconds, something a table simply cannot do.' },
      { type: 'callout', kind: 'tip', content: 'Pick your chart type based on the question you are answering, not on which one looks fanciest. "Comparing things" → bar chart. "Change over time" → line chart. "Share of a total" → pie chart (only with few categories). Getting this one decision right matters more than any formatting choice.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Using the marksheet from the last module: filter to show only students who passed, sort them by marks (highest first), then select the Name and Marks columns and insert a bar chart. You now have a simple visual ranking of your top-performing students.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'You can now navigate a spreadsheet confidently, write formulas that work across an entire table, format numbers so they communicate clearly, make Excel apply business logic automatically with IF, and turn raw data into sorted, filtered, visual answers. A quick mini project next builds a small dashboard with everything so far, then two short modules remain — working across multiple sheets in a workbook, and cleaning up messy real-world text — to round out everything a true beginner needs.' },
    ],
  },

  {
    id: 'ex-mp-3',
    title: 'Mini Project: Top Performers Dashboard',
    duration: '20 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: "A sales manager rarely wants the raw data — she wants the answer to 'who is winning right now' in one glance. This project combines sorting, filtering, and a chart into the small dashboard that question actually requires." },
      { type: 'list', items: [
        'Concepts used: sorting, AutoFilter, charts',
      ]},

      { type: 'heading', content: 'The task' },
      { type: 'paragraph', content: 'Type this table into a new sheet:' },
      { type: 'list', items: [
        'Salesperson | Region | Sales',
        'Aditi Rao | North | 145000',
        'Rohan Kumar | South | 98000',
        'Sarah Chen | North | 176000',
        'Priya Sharma | East | 112000',
        'Marcus Johnson | South | 89000',
        'James Okonkwo | East | 134000',
        'Yuki Tanaka | North | 121000',
        'Diego Martinez | South | 156000',
      ]},
      { type: 'heading', content: 'Build the dashboard' },
      { type: 'list', items: [
        'Sort the whole table by Sales, highest first',
        'Turn on AutoFilter (Ctrl+Shift+L) and filter the Region column to show only "North"',
        'With the North filter still on, note the top performer — then remove the filter to see everyone again',
        'Select the Salesperson and Sales columns (with the table sorted by Sales, highest first) and insert a bar chart',
        'Add a conditional formatting rule highlighting any salesperson above 140000 in green',
      ]},
      { type: 'callout', kind: 'tip', content: "Stretch goal: add a SUMIF formula below the table that totals sales for just the \"North\" region, and another for \"South\" and \"East\" — so the regional totals update automatically even after you change a number in the Sales column." },
    ],
  },

  {
    id: 'ex-b-6',
    title: 'Workbooks, worksheets, and getting data in and out',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'A workbook is more than one sheet' },
      { type: 'paragraph', content: 'Everything so far has lived on a single tab at the bottom of the screen. That tab is a worksheet. The entire file — which can hold many worksheets — is the workbook. Think of a workbook as a binder, and each worksheet as one page inside it.' },
      { type: 'list', items: [
        'Click the + icon at the bottom to add a new worksheet',
        'Double-click a tab name to rename it (e.g., rename "Sheet1" to "Sales")',
        'Right-click a tab for more options: delete, move, copy, or change its colour',
      ]},

      { type: 'heading', content: 'Why use multiple sheets?' },
      { type: 'paragraph', content: 'Real-life example: a personal budget tracker with one worksheet per month (Jan, Feb, Mar...), or a school gradebook with one worksheet per subject. Keeping related-but-separate data on its own tab keeps each sheet small and readable, instead of one giant table mixing everything together.' },
      { type: 'paragraph', content: 'You can even write a formula on one sheet that pulls a value from another, using SheetName!CellReference.' },
      { type: 'code', language: 'excel', content: `On a sheet called "Summary":
=Sales!B10        → pulls whatever value is in cell B10 of the "Sales" sheet
='January'!C5     → sheet names with spaces need single quotes around them` },
      { type: 'paragraph', content: 'Real-life use: a "Summary" tab that automatically shows the total from each month\'s tab, so a manager only needs to open one sheet to see the whole year at a glance, instead of clicking through 12 tabs.' },

      { type: 'heading', content: 'Saving and file formats' },
      { type: 'list', items: [
        '.xlsx — the standard Excel format. Keeps formulas, formatting, multiple sheets, everything.',
        '.xls — an older Excel format, still opens fine but lacks some newer features.',
        '.csv — plain data only (no formulas, no formatting, no multiple sheets). This is the format you read about in the Python course — it travels easily between tools, which is exactly why it strips everything Excel-specific away.',
        '.pdf — not editable, but perfect for sharing a final report or printing, since it looks identical on every device.',
      ]},
      { type: 'callout', kind: 'tip', content: 'If you send a colleague a .csv file expecting them to see your colours, formulas, or multiple tabs, they will be confused — none of that survives in CSV. Save as .xlsx whenever you need to preserve formulas and formatting, and only use .csv when you specifically need plain, tool-agnostic data.' },

      { type: 'heading', content: 'AutoFill: more than just formulas' },
      { type: 'paragraph', content: 'You used the fill handle to drag formulas down in an earlier module. The exact same drag also recognises and continues patterns in plain data — without you writing any formula at all.' },
      { type: 'code', language: 'excel', content: `Type "Monday" in one cell, drag down  → Tuesday, Wednesday, Thursday...
Type 1 and 2 in two cells, select both, drag down  → 3, 4, 5, 6...
Type "Jan-2025" in one cell, drag down  → Feb-2025, Mar-2025, Apr-2025...
Type "Product 1" in one cell, drag down  → Product 2, Product 3, Product 4...` },
      { type: 'paragraph', content: 'Real-life example: building a 30-day roster needs 30 dates across the top row. Typing the first one and double-clicking the fill handle generates the rest correctly in under a second, instead of typing every single date by hand.' },

      { type: 'heading', content: 'Paste Special: pasting only what you need' },
      { type: 'paragraph', content: 'A normal paste copies everything — values, formulas, and formatting. Paste Special (Ctrl+Alt+V) lets you choose exactly what comes across.' },
      { type: 'list', items: [
        'Paste Values only — copies the calculated result of a formula, not the formula itself',
        'Paste Formats only — copies just the colours/borders/number formatting, not the content',
        'Transpose — flips rows into columns and columns into rows',
      ]},
      { type: 'paragraph', content: 'Real-life use: you built a report full of formulas, but want to email a "frozen" copy where the numbers will not change if someone edits a source cell later. Copy the range, Paste Special → Values, and the formulas are replaced with their final calculated numbers.' },
      { type: 'callout', kind: 'warning', content: 'Once you Paste Special → Values over a formula, the formula is gone — the cell now holds a plain number that will never recalculate again. Always keep a separate copy of your original, formula-driven sheet before doing this, in case you need to make changes later.' },

      { type: 'heading', content: 'Basic printing setup' },
      { type: 'paragraph', content: 'A 200-row table printed with zero setup usually spills awkwardly across 5-6 pages, with headers only on the first one. The Page Layout tab fixes this before you waste paper.' },
      { type: 'list', items: [
        'Page Layout → Print Area → Set Print Area, to print only the part of the sheet that matters',
        'Page Layout → Print Titles → Rows to repeat at top, so your header row appears on every printed page, not just the first',
        'Page Layout → Scale to Fit → Width: 1 page, so wide tables shrink to fit on the paper instead of spilling onto a second sheet',
      ]},

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Rename "Sheet1" to "Sales" and add a new sheet called "Summary". In the Summary sheet, write a formula referencing a total cell from Sales (e.g., =Sales!B10). Then, on any sheet, type "Monday" in a cell and drag the fill handle across 6 more cells to confirm it continues with the rest of the week.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: "Last module in this track: cleaning up the kind of messy text that shows up in almost every real spreadsheet — extra spaces, names that need splitting or joining, and stopping bad data before it gets typed in at all." },
    ],
  },

  {
    id: 'ex-b-7',
    title: 'Cleaning text and validating input',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'Real data is never clean' },
      { type: 'paragraph', content: 'Exported reports, copy-pasted lists, and forms filled in by other people almost always arrive messy: extra spaces, inconsistent capitalisation, names crammed into one column when you need them split, or a column that needs combining with another. Excel has a small set of text functions that handle almost all of this.' },

      { type: 'heading', content: 'Joining text together: & and CONCATENATE' },
      { type: 'paragraph', content: 'The simplest way to join two pieces of text is the & symbol, placed right between them.' },
      { type: 'code', language: 'excel', content: `A2: "Aditi"      B2: "Rao"
=A2&" "&B2       → "Aditi Rao"   (the " " adds a space in between)

-- The older, more verbose way to do the exact same thing:
=CONCATENATE(A2, " ", B2)   → "Aditi Rao"` },
      { type: 'paragraph', content: 'Real-life use: a system exports First Name and Last Name as two separate columns, but your report needs one "Full Name" column. Instead of retyping 500 names, one formula combines them all, then you fill it down the column.' },

      { type: 'heading', content: 'Pulling text apart: LEFT, RIGHT, MID' },
      { type: 'paragraph', content: 'These three functions grab a specific chunk of text out of a longer string — from the left side, the right side, or the middle.' },
      { type: 'code', language: 'excel', content: `A2: "9876543210"   (a 10-digit phone number)
=LEFT(A2, 2)    → "98"          (first 2 characters)
=RIGHT(A2, 4)   → "3210"        (last 4 characters)

A3: "INV-2025-0042"   (an invoice code)
=MID(A3, 5, 4)  → "2025"        (4 characters, starting at position 5)` },
      { type: 'paragraph', content: 'Real-life use: masking a phone number for display ("XXXXXX3210" using RIGHT), or pulling the year out of every invoice code in a column so you can group totals by year.' },

      { type: 'heading', content: 'TRIM: removing extra spaces' },
      { type: 'paragraph', content: 'A shockingly common source of "why doesn\'t my formula match this text?" bugs is invisible extra spaces at the start, end, or middle of a cell — often introduced by copy-pasting from a website or PDF.' },
      { type: 'code', language: 'excel', content: `A2: "  Mumbai   "
=TRIM(A2)   → "Mumbai"   (removes leading/trailing spaces, and shrinks
                          multiple spaces between words down to one)` },
      { type: 'paragraph', content: 'This is the exact same problem you would fix with .strip() in the Python course — different tool, identical real-world headache, identical fix.' },

      { type: 'heading', content: 'UPPER, LOWER, PROPER: fixing inconsistent capitalisation' },
      { type: 'code', language: 'excel', content: `=UPPER("mumbai")    → "MUMBAI"
=LOWER("MUMBAI")    → "mumbai"
=PROPER("priya sharma")  → "Priya Sharma"   (capitalises each word)` },
      { type: 'paragraph', content: 'Real-life use: a city column with "mumbai", "Mumbai", and "MUMBAI" all mixed together looks like 3 different cities to a Pivot Table or COUNTIF formula later. Running PROPER (or UPPER) across the column first makes every entry consistent.' },

      { type: 'heading', content: "Data validation: stopping bad data before it happens" },
      { type: 'paragraph', content: 'Cleaning messy text after the fact works, but preventing the mess in the first place is even better. Data Validation lets you restrict what someone is allowed to type into a cell — for example, only allowing "Active" or "Inactive" in a Status column, instead of letting someone type "actve" by mistake.' },
      { type: 'list', items: [
        'Select the cell or range you want to restrict',
        'Go to Data → Data Validation',
        'Under "Allow," choose List, then type your allowed values separated by commas (e.g., Active,Inactive) or point to a range that contains them',
        'Click OK — that cell now shows a dropdown arrow, and only lets you pick from your approved list',
      ]},
      { type: 'paragraph', content: 'Real-life use: an HR sheet with a "Department" column. Without validation, people type "Sales", "sales", "Saless", and "SALES" — four different-looking values that are really all the same department. A dropdown list makes that typo simply impossible.' },
      { type: 'callout', kind: 'tip', content: 'Data Validation is one of the highest-value, most underused features in Excel. Any time you are building a sheet that other people will fill in (not just you), spend the extra minute adding dropdown lists for any column with a fixed set of valid options.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Build a small employee list: First Name, Last Name, City (deliberately type some entries with extra spaces and mixed capitalisation, like "  mumbai" and "DELHI "), and Status. Use & to create a Full Name column, TRIM and PROPER to clean up the City column, and add a Data Validation dropdown for Status with the options Active and Inactive.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'You can now navigate a spreadsheet confidently, write formulas that work correctly across a table, format numbers and dates clearly, make Excel apply business logic with IF and COUNTIF/SUMIF, turn raw data into sorted, filtered, visual answers, work across multiple sheets, and clean up messy text. A quick mini project next puts that text cleanup to immediate use, then a final module of two real spreadsheets to build, not just read about.' },
    ],
  },

  {
    id: 'ex-mp-4',
    title: 'Mini Project: Clean Customer List Fixer',
    duration: '15 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: "Almost every exported customer list looks like this one — names in inconsistent case, extra spaces, first and last names sometimes split, sometimes not. This project is a focused, realistic cleanup job, the kind that quietly eats an hour of a new analyst's first week." },
      { type: 'list', items: [
        'Concepts used: TRIM, PROPER, & (text joining)',
      ]},

      { type: 'heading', content: 'The task' },
      { type: 'paragraph', content: 'Type this table into a new sheet exactly as shown — the messiness is deliberate:' },
      { type: 'list', items: [
        'First Name | Last Name | City',
        '  aditi | RAO | mumbai',
        'ROHAN |  kumar | Bengaluru ',
        'sarah | Chen |  SINGAPORE',
        'Priya |   sharma | delhi',
        'marcus | JOHNSON | London  ',
      ]},
      { type: 'heading', content: 'Build these columns' },
      { type: 'list', items: [
        '"Clean First Name" — TRIM and PROPER applied to First Name',
        '"Clean Last Name" — the same, applied to Last Name',
        '"Full Name" — join Clean First Name and Clean Last Name with a space, using &',
        '"Clean City" — TRIM and PROPER applied to City',
      ]},
      { type: 'code', language: 'excel', content: `Clean First Name (row 2 example):
=PROPER(TRIM(A2))

Full Name (row 2 example, assuming Clean First Name is E2, Clean Last Name is F2):
=E2&" "&F2

Clean City (row 2 example):
=PROPER(TRIM(C2))` },
      { type: 'callout', kind: 'tip', content: "Notice PROPER and TRIM are nested inside each other here — PROPER(TRIM(A2)) runs TRIM first (removing the extra spaces), then PROPER on that result (fixing the capitalisation). Functions can always be nested like this, innermost one running first, exactly like maths parentheses." },
    ],
  },

  {
    id: 'ex-b-8',
    title: 'Capstone projects: real spreadsheets you will actually use',
    duration: '60 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Practice time — no new features here' },
      { type: 'paragraph', content: "You've finished every lesson in this track. This module is meant to be done after the rest of the course, in actual Excel or Google Sheets (not just read on screen) — two real, useful workbooks that combine references, formatting, IF/COUNTIF/SUMIF, sorting/filtering, charts, multiple sheets, and text cleanup into something you would genuinely use." },
      { type: 'callout', kind: 'tip', content: 'Type the data in exactly as given, then work through the task list below it yourself before checking the formula hints. Building the table by hand — not copy-pasting a finished file — is what actually cements the muscle memory.' },

      { type: 'heading', content: 'Project 1 (Easy): Monthly Personal Budget Tracker' },
      { type: 'paragraph', content: 'The scenario: you want a single sheet that tells you, at a glance, whether you stuck to your monthly budget — and where you overspent. This project uses only single-sheet skills: formulas, references, formatting, and one chart.' },
      { type: 'paragraph', content: 'Type this table into a new sheet (row 1 is the header):' },
      { type: 'list', items: [
        'Category | Planned | Actual',
        'Rent | 15000 | 15000',
        'Groceries | 6000 | 6850',
        'Transport | 2000 | 1700',
        'Entertainment | 1500 | 2200',
        'Utilities | 2500 | 2300',
        'Savings | 5000 | 4000',
      ]},
      { type: 'heading', content: 'Tasks' },
      { type: 'list', items: [
        'Add a "Difference" column (Planned − Actual). A positive number means you came in under budget; negative means you overspent.',
        'Add a "Total Planned" and "Total Actual" row at the bottom using SUM.',
        'Add a "% of Total Actual" column showing what share of your total spending each category represents. This needs an absolute reference to the Total Actual cell so the formula works correctly when copied down.',
        'Format the Planned, Actual, and Difference columns as currency, and the % column as a percentage.',
        'Add Conditional Formatting on the Difference column: highlight negative values (overspending) in red, and positive values in green.',
        'Select the Category and Actual columns, and insert a bar chart comparing actual spend across categories.',
      ]},
      { type: 'code', language: 'excel', content: `Difference column (row 2 example):
=B2-C2

% of Total Actual (row 2 example, assuming Total Actual is in C9):
=C2/$C$9
-- the $ signs lock the Total Actual cell so this formula still works
   correctly when you copy it down to every other row` },
      { type: 'callout', kind: 'warning', content: 'If your % of Total Actual column shows wildly wrong numbers after copying the formula down, check whether you forgot the $ signs around the Total Actual cell. Without them, the reference shifts to an empty cell for every row below the first.' },

      { type: 'heading', content: 'Project 2 (Hard): Small Business Sales Dashboard' },
      { type: 'paragraph', content: "The scenario: you run a small electronics and home-goods business, and your raw sales data — exported from a billing system — is messy, scattered across one sheet, and impossible to summarise at a glance. Build a small dashboard that cleans it up and answers real business questions. This project uses everything in the track, including multiple sheets." },
      { type: 'paragraph', content: 'Create a sheet called "Sales" and type this table exactly as shown — including the messy spacing and capitalisation, which is deliberate:' },
      { type: 'list', items: [
        'Date | Customer | City | Product | Quantity | Price | Status',
        '01-Jun-2024 | aditi rao | mumbai | Wireless Mouse | 3 | 799 | Delivered',
        '02-Jun-2024 | ROHAN KUMAR |  Bengaluru | Laptop Stand | 2 | 1499 | Delivered',
        '03-Jun-2024 | Priya Sharma | Delhi  | Table Lamp | 1 | 1299 | Pending',
        '04-Jun-2024 | sarah chen | Mumbai | Cotton T-Shirt | 5 | 599 | Delivered',
        '05-Jun-2024 | Marcus Johnson |  delhi | Running Shoes | 1 | 3499 | Cancelled',
        '06-Jun-2024 | aditi rao | Mumbai | Throw Pillow | 4 | 599 | Delivered',
        '07-Jun-2024 | James Okonkwo | Bengaluru | Coffee Beans 1kg | 2 | 899 | Delivered',
        '08-Jun-2024 | Priya Sharma | DELHI | Green Tea Pack | 3 | 349 | Pending',
        '09-Jun-2024 | rohan kumar | bengaluru | Wireless Mouse | 1 | 799 | Delivered',
        '10-Jun-2024 | Sarah Chen | Mumbai | Table Lamp | 2 | 1299 | Delivered',
      ]},
      { type: 'heading', content: 'Tasks' },
      { type: 'list', items: [
        'Clean the data first: add a "Clean Customer" column using PROPER (and TRIM, since some names have extra spaces) and a "Clean City" column the same way.',
        'Add a "Revenue" column (Quantity × Price).',
        'Add a "High Value" column using IF: show "Yes" if Revenue is over 2000, otherwise "No".',
        'Add Data Validation on the Status column restricting it to exactly: Delivered, Pending, Cancelled.',
        'Create a second sheet called "Summary". On it, use SUMIF to calculate total revenue per city (Mumbai, Delhi, Bengaluru), referencing the Sales sheet.',
        'On the Summary sheet, use COUNTIF to count how many orders are "Delivered" vs "Pending" vs "Cancelled".',
        'Back on the Sales sheet, filter to show only "Delivered" orders, then sort by Revenue (highest first) to find your best individual sale.',
        'On the Summary sheet, insert a bar chart comparing total revenue by city.',
      ]},
      { type: 'code', language: 'excel', content: `Clean Customer (row 2 example):
=PROPER(TRIM(B2))

Revenue (row 2 example):
=E2*F2

High Value (row 2 example):
=IF(H2>2000, "Yes", "No")

On the Summary sheet, total revenue for Mumbai
(assuming Sales!C is Clean City and Sales!H is Revenue):
=SUMIF(Sales!C:C, "Mumbai", Sales!H:H)

On the Summary sheet, count of Delivered orders:
=COUNTIF(Sales!G:G, "Delivered")` },
      { type: 'callout', kind: 'tip', content: 'Notice the cross-sheet reference Sales!C:C inside a Summary-sheet formula — this is exactly the SheetName!Range pattern from the workbooks module, now doing real work: pulling a summary number from your raw data sheet without copying anything.' },
      { type: 'paragraph', content: 'Stretch challenge: add a "Repeat Customer" check — find which cleaned customer names appear more than once in the Sales sheet (hint: COUNTIF on the Clean Customer column, compared against itself, will show a number greater than 1 for repeat customers).' },

      { type: 'heading', content: "You're done with the Excel Beginner track" },
      { type: 'paragraph', content: 'If you built both workbooks yourself — typed the data, wrote the formulas, set up the validation and the chart — you can do real, job-ready Excel work: cleaning messy exports, calculating business metrics, and presenting a summary that someone other than you could open and immediately understand. That is the actual job, not just the theory behind it.' },
      { type: 'paragraph', content: 'The Intermediate track builds directly on this: VLOOKUP and INDEX/MATCH (looking up data across tables, like a JOIN), Pivot Tables (Excel\'s most powerful feature, for summarising huge datasets in seconds), and Power Query (automating the cleanup of messy data). When ready, switch to Intermediate from the sidebar.' },
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
    beginner: PYTHON_BEGINNER,
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
    beginner: EXCEL_BEGINNER,
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
