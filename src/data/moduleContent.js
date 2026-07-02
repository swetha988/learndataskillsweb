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
   SQL — INTERMEDIATE TRACK (12 modules + 3 mini projects + capstone)
   Dataset: QuickBite, a food delivery platform (7 related tables)
   ════════════════════════════════════════════════════════════════ */
const SQL_INTERMEDIATE = [
  {
    id: 'sql-i-1',
    title: 'Handling missing data: NULLs, COALESCE, and NULLIF',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'A new dataset: QuickBite' },
      { type: 'paragraph', content: 'Everything in this track uses one dataset: QuickBite, a fictional food delivery platform. It has 7 connected tables instead of 2 — customers, restaurants, menu_items, riders, orders, order_items, and reviews. It is intentionally messier and more realistic than the beginner course\'s Shopverse dataset: orders go through a real lifecycle (placed, then delivered or cancelled), riders are not always assigned yet, and not every order gets a review. That messiness is exactly what makes it the right dataset for this track.' },

      { type: 'heading', content: 'When a value simply isn\'t there' },
      { type: 'paragraph', content: 'In the orders table, rider_id is empty until a rider actually accepts the delivery. delivered_at is empty if the order was cancelled or is still on its way. In restaurants, rating is empty for any restaurant that has not received a single review yet. SQL represents all of these as NULL — a special marker meaning "we genuinely do not have this information," not zero, not an empty string, not "unknown but probably small."' },

      { type: 'heading', content: 'Why NULL is not the same as zero or an empty string' },
      { type: 'paragraph', content: 'A restaurant with a rating of 0 would mean "customers rated this terrible." A restaurant with a rating of NULL means "no one has rated this at all yet." Those are completely different real-world situations, and treating them as the same number would quietly produce wrong reports — a brand-new restaurant would look like the worst-rated one, when really it just has not been reviewed yet.' },

      { type: 'heading', content: 'Finding NULLs with IS NULL and IS NOT NULL' },
      { type: 'paragraph', content: 'You cannot use = to check for NULL (more on exactly why in a moment). Instead, SQL gives you two dedicated keywords.' },
      { type: 'code', language: 'sql', content: `-- Orders that have not been assigned a rider yet
SELECT * FROM orders WHERE rider_id IS NULL;

-- Restaurants that have at least one rating on record
SELECT * FROM restaurants WHERE rating IS NOT NULL;` },

      { type: 'heading', content: 'A common mistake: why = NULL never works' },
      { type: 'paragraph', content: 'NULL means "unknown," and SQL takes that seriously: asking "is this unknown value equal to NULL?" is itself an unknown question, so SQL never answers yes — even when the value actually is NULL. WHERE rider_id = NULL silently returns zero rows, every time, with no error to warn you.' },
      { type: 'code', language: 'sql', content: `-- This returns NOTHING, even though plenty of orders have no rider yet
SELECT * FROM orders WHERE rider_id = NULL;

-- This is the correct way to ask the same question
SELECT * FROM orders WHERE rider_id IS NULL;` },
      { type: 'callout', kind: 'warning', content: 'This single mistake — writing = NULL instead of IS NULL — is one of the most common silent bugs in real SQL code, because it does not throw an error. It just quietly returns the wrong (often empty) result, and you may not notice unless you already expected some rows back.' },

      { type: 'heading', content: 'Filling in gaps with COALESCE' },
      { type: 'paragraph', content: 'COALESCE takes a list of values and returns the first one that is not NULL. It is the standard way to give a NULL a friendlier fallback value for reporting.' },
      { type: 'code', language: 'sql', content: `-- Show 0 instead of a blank rating for restaurants with no reviews yet
SELECT name, COALESCE(rating, 0) AS rating_or_zero
FROM restaurants;

-- Show a friendly message instead of a blank comment for unreviewed orders
SELECT o.order_id, COALESCE(r.comment, 'No comment left') AS comment
FROM orders AS o
LEFT JOIN reviews AS r ON o.order_id = r.order_id;` },
      { type: 'paragraph', content: 'Notice the second example uses a LEFT JOIN from your beginner course — orders with no matching review row get NULL for r.comment, and COALESCE turns that NULL into a readable message instead of a blank.' },

      { type: 'heading', content: 'Turning a value into NULL on purpose with NULLIF' },
      { type: 'paragraph', content: 'Sometimes the problem runs the other way: a placeholder number like 0 is actually hiding a missing value, and you want SQL to treat it as NULL so it does not quietly distort a calculation like AVG.' },
      { type: 'code', language: 'sql', content: `-- If a total_amount was accidentally recorded as 0, treat it as missing
-- instead of letting it drag down the average order value
SELECT AVG(NULLIF(total_amount, 0)) AS avg_order_value
FROM orders;` },
      { type: 'paragraph', content: 'NULLIF(total_amount, 0) compares the two values: if they match, it returns NULL; otherwise it returns the original value unchanged. AVG() then ignores NULLs automatically, so the fake zero never gets counted.' },

      { type: 'heading', content: 'Real-life feel: a delivery that hasn\'t happened yet' },
      { type: 'paragraph', content: 'Think about an order the moment it is placed: there is no rider yet, no delivery time yet, and no review yet — three NULLs, all completely normal, all describing the same real, in-progress order. A good analyst does not see NULL as broken data; they read it as "this part of the story has not happened yet."' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Explore the new dataset. Find every order that is still missing a rider, then try rewriting the COALESCE example above using your own fallback text.' },
      { type: 'playground', language: 'sql', starter: '-- Orders with no rider assigned yet\nSELECT order_id, customer_id, status FROM orders WHERE rider_id IS NULL;', dataset: 'quickbite' },
    ],
  },

  {
    id: 'sql-i-2',
    title: 'Sorting values into categories with CASE WHEN',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'Why some questions need more than a single column' },
      { type: 'paragraph', content: 'The status column in orders stores raw values like "delivered", "cancelled", and "placed". A customer-facing report should not show raw database values — it should show readable labels, and sometimes group several raw values into one category. CASE WHEN is how you build that kind of logic directly inside a query.' },

      { type: 'heading', content: 'The basic shape of CASE WHEN' },
      { type: 'code', language: 'sql', content: `SELECT order_id, status,
  CASE
    WHEN status = 'delivered' THEN 'Completed'
    WHEN status = 'cancelled' THEN 'Cancelled'
    ELSE 'In Progress'
  END AS friendly_status
FROM orders;` },
      { type: 'paragraph', content: 'Read it like an if/elif/else chain: SQL checks each WHEN top to bottom, and uses the first one that matches. ELSE catches everything else — here, "placed" and "preparing" both fall into "In Progress".' },

      { type: 'heading', content: 'Real-life example: turning order status into a customer-friendly label' },
      { type: 'paragraph', content: 'This is exactly the kind of transformation that happens before data ever reaches a dashboard or an app screen — raw operational statuses on the backend, clean labels for whoever is reading the report.' },

      { type: 'heading', content: 'CASE WHEN inside other functions, like SUM and COUNT' },
      { type: 'paragraph', content: 'CASE WHEN is not limited to SELECT — you can nest it inside an aggregate function to count or sum only the rows that match a condition, all in one pass over the table.' },
      { type: 'code', language: 'sql', content: `-- Count delivered vs cancelled orders, side by side, in one row
SELECT
  SUM(CASE WHEN status = 'delivered' THEN 1 ELSE 0 END) AS delivered_count,
  SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled_count
FROM orders;` },
      { type: 'paragraph', content: 'For every row, the CASE WHEN evaluates to 1 or 0, and SUM adds those up — effectively a conditional COUNT. This pattern (sometimes nicknamed a "pivot") is one of the most-used CASE WHEN tricks in real reporting.' },

      { type: 'heading', content: 'Multiple conditions in one CASE' },
      { type: 'code', language: 'sql', content: `-- Bucket orders into price ranges
SELECT order_id, total_amount,
  CASE
    WHEN total_amount < 300 THEN 'Small order'
    WHEN total_amount < 600 THEN 'Medium order'
    ELSE 'Large order'
  END AS order_size
FROM orders;` },

      { type: 'heading', content: 'A shortcut: CASE without a column to compare' },
      { type: 'paragraph', content: 'There is a second form of CASE, sometimes called "searched CASE," where every WHEN is its own full condition rather than a comparison against one column. You have actually been using this form already — both examples above are searched CASE. The simpler form (rarely needed) compares one column against a list of exact values:' },
      { type: 'code', language: 'sql', content: `-- Simple form: comparing one column against exact values
SELECT name, vehicle_type,
  CASE vehicle_type
    WHEN 'Bike' THEN 'Motorised'
    WHEN 'Scooter' THEN 'Motorised'
    WHEN 'Bicycle' THEN 'Non-motorised'
  END AS vehicle_class
FROM riders;` },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Build a query that labels every restaurant as "Highly rated" (4.5+), "Good" (3.5 to 4.49), "Needs improvement" (below 3.5), or "Not yet rated" — remember NULL ratings need their own WHEN, since comparisons against NULL never come back true.' },
      { type: 'playground', language: 'sql', starter: '-- Write your CASE WHEN query here\nSELECT name, rating FROM restaurants;', dataset: 'quickbite' },
    ],
  },

  {
    id: 'sql-i-3',
    title: 'Asking a question inside a question: Subqueries',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'What a subquery actually is' },
      { type: 'paragraph', content: 'A subquery is just a SELECT statement written inside another SELECT statement, used to answer a smaller question first so the outer query can use that answer. Think of it the way you would answer "who spent more than average?" out loud: first you would work out what the average is, then compare everyone against it. A subquery is SQL doing exactly that, in one statement.' },

      { type: 'heading', content: 'The simplest kind: a subquery that returns one number' },
      { type: 'paragraph', content: 'This is called a scalar subquery — it returns exactly one value, which you can then use anywhere a single number would normally go.' },
      { type: 'code', language: 'sql', content: `SELECT (SELECT AVG(total_amount) FROM orders) AS average_order_value;` },

      { type: 'heading', content: 'Using a subquery inside WHERE' },
      { type: 'code', language: 'sql', content: `-- Customers whose individual order was above the platform-wide average
SELECT * FROM orders
WHERE total_amount > (SELECT AVG(total_amount) FROM orders);` },
      { type: 'paragraph', content: 'SQL runs the inner query first (calculating the average), then runs the outer query using that number — exactly like solving the smaller problem before the bigger one.' },

      { type: 'heading', content: 'Using a subquery inside FROM, like a temporary table' },
      { type: 'paragraph', content: 'A subquery can also stand in for an entire table. This is useful when you need to first calculate something per group, then filter or sort based on that calculation.' },
      { type: 'code', language: 'sql', content: `-- First calculate each customer's total spend, then find who spent over 1000
SELECT * FROM (
  SELECT customer_id, SUM(total_amount) AS total_spent
  FROM orders
  GROUP BY customer_id
) AS customer_totals
WHERE total_spent > 1000;` },
      { type: 'paragraph', content: 'Notice the inner query needs its own alias (AS customer_totals) — SQL requires every subquery used as a table to have a name, even if you never refer to that name again.' },

      { type: 'heading', content: 'Correlated subqueries: when the inner query needs the outer query' },
      { type: 'paragraph', content: 'Every subquery so far has been independent — it could run perfectly well on its own, with no knowledge of the outer query. A correlated subquery is different: it reaches outward and uses a value from the current outer row, which means it runs once per outer row instead of just once overall.' },
      { type: 'code', language: 'sql', content: `-- For each restaurant, check if it has at least one order above 500
SELECT name FROM restaurants AS r
WHERE EXISTS (
  SELECT 1 FROM orders AS o
  WHERE o.restaurant_id = r.restaurant_id
  AND o.total_amount > 500
);` },
      { type: 'paragraph', content: 'The inner query references r.restaurant_id — a column from the outer restaurants row. SQL effectively loops: for every restaurant, it asks "does at least one matching order over 500 exist?" That dependency on the outer row is what makes this correlated, and it is exactly how EXISTS is almost always used.' },

      { type: 'heading', content: 'IN, NOT IN, and EXISTS with subqueries' },
      { type: 'paragraph', content: 'IN checks if a value appears anywhere in a list produced by a subquery. EXISTS checks if a correlated subquery returns any row at all, without caring what the row actually contains — which usually makes EXISTS faster on large tables, since SQL can stop as soon as it finds one match.' },
      { type: 'code', language: 'sql', content: `-- Customers who have placed at least one order (using IN)
SELECT * FROM customers
WHERE customer_id IN (SELECT customer_id FROM orders);

-- Customers who have never placed an order (using NOT IN)
SELECT * FROM customers
WHERE customer_id NOT IN (SELECT customer_id FROM orders);` },

      { type: 'heading', content: 'A common trap: when a subquery returns more than one row' },
      { type: 'paragraph', content: 'A scalar subquery (used with =, >, <, etc.) must return exactly one row and one column. If it accidentally returns multiple rows, SQL throws an error rather than guessing which one you meant.' },
      { type: 'callout', kind: 'warning', content: "If you see an error like 'subquery returned more than one row,' you almost always meant to use IN (for a list of values) or add an aggregate function like MAX()/AVG() to collapse the subquery down to a single number, instead of using a plain = comparison." },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Find every restaurant that has never received a single order. (Hint: this is the NOT IN pattern, just pointed at restaurant_id instead of customer_id.)' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
    ],
  },

  {
    id: 'sql-i-4',
    title: 'Naming your steps with CTEs',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'The problem with deeply nested subqueries' },
      { type: 'paragraph', content: 'Subqueries inside subqueries inside subqueries get hard to read fast — by the third level of nesting, you are scrolling back and forth just to figure out which closing parenthesis belongs to which SELECT. A CTE (Common Table Expression) solves this by letting you name each step and write them one after another, top to bottom, like a recipe.' },

      { type: 'heading', content: 'What a CTE actually is: a subquery with a name' },
      { type: 'paragraph', content: 'A CTE is not a new concept — it is the exact same idea as the FROM-subquery from the last module, just written in a cleaner place, before the main query, with a proper name attached using WITH.' },

      { type: 'heading', content: 'Writing your first WITH statement' },
      { type: 'code', language: 'sql', content: `WITH customer_totals AS (
  SELECT customer_id, SUM(total_amount) AS total_spent
  FROM orders
  GROUP BY customer_id
)
SELECT * FROM customer_totals
WHERE total_spent > 1000;` },
      { type: 'paragraph', content: 'Compare this to the FROM-subquery version from the previous module — same logic, same result, but now customer_totals reads like a real table name instead of an anonymous block of parentheses.' },

      { type: 'heading', content: 'Chaining multiple CTEs together' },
      { type: 'paragraph', content: 'You can define several CTEs in a row, separated by commas, where each one can even build on the one before it. This is where CTEs really start to shine over subqueries — nested subqueries get harder to read with every layer, but chained CTEs stay just as readable at 2 steps as they do at 5.' },
      { type: 'code', language: 'sql', content: `WITH customer_totals AS (
  SELECT customer_id, SUM(total_amount) AS total_spent
  FROM orders
  GROUP BY customer_id
),
high_spenders AS (
  SELECT * FROM customer_totals WHERE total_spent > 1000
)
SELECT c.name, h.total_spent
FROM high_spenders AS h
INNER JOIN customers AS c ON h.customer_id = c.customer_id
ORDER BY h.total_spent DESC;` },
      { type: 'paragraph', content: 'Notice how this reads almost like a paragraph: first calculate totals, then filter to high spenders, then join in their names. Each step has a name, and you can trace the logic without holding several levels of nested parentheses in your head at once.' },

      { type: 'heading', content: 'CTEs vs subqueries: when to use which' },
      { type: 'paragraph', content: 'They are usually interchangeable — the database engine itself does not treat them very differently. The real difference is for humans: reach for a CTE whenever a subquery is being reused, would need nesting more than one level deep, or whenever giving a step a clear name would make the query easier to read six months from now (including by you).' },

      { type: 'heading', content: 'Real-life feel: breaking a big report into readable steps' },
      { type: 'paragraph', content: 'Imagine explaining a sales report to a manager out loud: "First, I calculated each customer\'s total spend. Then I filtered down to the big spenders. Then I matched those back to their names." CTEs let your SQL read in that same step-by-step order, instead of being written inside-out the way nested subqueries force you to.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Rewrite this using a CTE: find every restaurant\'s average order value, then keep only the restaurants whose average is above 400.' },
      { type: 'playground', language: 'sql', starter: '-- Write your CTE here\n', dataset: 'quickbite' },
    ],
  },

  {
    id: 'sql-mp-i-1',
    title: 'Mini Project: Customer Activity Report',
    duration: '25 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: "You've just learned four of the most important tools for asking layered, realistic business questions: handling missing data, labelling values with CASE WHEN, asking a question inside a question with subqueries, and naming your steps with CTEs. This project puts all four to work on one connected report." },
      { type: 'list', items: [
        'Concepts used: IS NULL, COALESCE, CASE WHEN, subqueries, CTEs',
      ]},

      { type: 'heading', content: 'Task 1: Customers who have never ordered' },
      { type: 'paragraph', content: 'The marketing team wants to send a "we miss you, here is 20% off" email — but only to customers who have never placed a single order, since they need a different message than lapsed customers.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT * FROM customers
WHERE customer_id NOT IN (SELECT customer_id FROM orders);` },

      { type: 'heading', content: 'Task 2: A friendlier ratings display' },
      { type: 'paragraph', content: 'Show every restaurant\'s name and rating, but replace any NULL rating with the text "Not yet rated" so the app does not show a blank space.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT name, COALESCE(rating, 'Not yet rated') AS rating_display
FROM restaurants;` },
      { type: 'callout', kind: 'tip', content: "This works in SQLite (the engine behind this playground) because it has flexible typing — a single column can return a number for one row and text for another without complaint. Stricter databases like PostgreSQL, MySQL, and SQL Server are not so forgiving: they require COALESCE's arguments to share a type, and would reject this exact query unless you wrote COALESCE(CAST(rating AS TEXT), 'Not yet rated') instead. You will meet CAST properly in Module 11 — worth remembering this moment when you do, since it is exactly the kind of cross-database difference that catches people off guard in a real job." },

      { type: 'heading', content: 'Task 3: Labelling every order' },
      { type: 'paragraph', content: 'Show every order\'s id and a friendly label: "Completed" for delivered, "Cancelled" for cancelled, and "In Progress" for anything else.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT order_id,
  CASE
    WHEN status = 'delivered' THEN 'Completed'
    WHEN status = 'cancelled' THEN 'Cancelled'
    ELSE 'In Progress'
  END AS friendly_status
FROM orders;` },

      { type: 'heading', content: 'Task 4: Customers who spent more than average' },
      { type: 'paragraph', content: 'Find every customer whose total spend (across all their orders) is above the average total spend per customer.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
WITH customer_totals AS (
  SELECT customer_id, SUM(total_amount) AS total_spent
  FROM orders
  GROUP BY customer_id
)
SELECT * FROM customer_totals
WHERE total_spent > (SELECT AVG(total_spent) FROM customer_totals);` },

      { type: 'heading', content: 'Task 5: The top 5 spenders, by name' },
      { type: 'paragraph', content: 'Build a CTE that calculates each customer\'s total spend, then use it to find the top 5 spenders, showing their actual names rather than just their customer_id.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
WITH customer_totals AS (
  SELECT customer_id, SUM(total_amount) AS total_spent
  FROM orders
  GROUP BY customer_id
)
SELECT c.name, ct.total_spent
FROM customer_totals AS ct
INNER JOIN customers AS c ON ct.customer_id = c.customer_id
ORDER BY ct.total_spent DESC
LIMIT 5;` },
      { type: 'callout', kind: 'tip', content: 'Notice Task 5 reuses the exact same CTE from Task 4. This is the real argument for CTEs over subqueries: once you have named a step, you can build several different final queries on top of it without retyping the logic each time.' },
    ],
  },

  {
    id: 'sql-i-5',
    title: 'Combining results from two queries: UNION and UNION ALL',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'When one query isn\'t enough' },
      { type: 'paragraph', content: 'Sometimes the rows you need do not live in one table — or even one query against one table. UNION stacks the results of two separate SELECT statements into a single result set, one on top of the other.' },

      { type: 'heading', content: 'Stacking results with UNION' },
      { type: 'code', language: 'sql', content: `-- One combined contact list: customer names and rider names, together
SELECT name, city FROM customers
UNION
SELECT name, city FROM riders;` },
      { type: 'paragraph', content: 'Both SELECTs return the same two columns (name, city), just from different tables — UNION simply glues the two result sets into one.' },

      { type: 'heading', content: 'UNION vs UNION ALL: the difference that actually matters' },
      { type: 'paragraph', content: 'UNION automatically removes duplicate rows from the combined result — which means it has to do extra work checking every row against every other row. UNION ALL keeps every row, duplicates included, and is correspondingly faster. If you know your two queries cannot produce overlapping rows (like customers and riders, which are entirely different people), UNION ALL is the better default.' },
      { type: 'code', language: 'sql', content: `-- Faster, and just as correct here, since a person cannot be both
-- a customer and a rider in this dataset
SELECT name, city FROM customers
UNION ALL
SELECT name, city FROM riders;` },

      { type: 'heading', content: 'The rule: matching columns, matching order' },
      { type: 'paragraph', content: 'Every SELECT inside a UNION must return the same number of columns, in a compatible type, in the same order. The column names in the final result come from the very first SELECT — so it is good practice to alias columns clearly in that first query.' },
      { type: 'callout', kind: 'warning', content: 'If your two SELECTs return a different number of columns, SQL will throw an error immediately. If they return the same number of columns but in a different logical order (say, city before name in one and name before city in the other), SQL will not catch that — it will happily combine them in the wrong order, producing nonsense results with no warning at all.' },

      { type: 'heading', content: 'Real-life example: combining two contact lists into one' },
      { type: 'paragraph', content: 'A platform-wide announcement (a new safety policy, say) needs to reach both customers and riders. Rather than running two separate exports and merging them by hand, a single UNION ALL query produces the complete mailing list in one step.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Build one combined list of every city that appears across customers, restaurants, and riders — using UNION (not UNION ALL) so each city only shows up once, no matter how many tables it appears in.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
    ],
  },

  {
    id: 'sql-i-6',
    title: 'The rest of the JOIN family: RIGHT, FULL OUTER, SELF',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'A quick recap: INNER and LEFT JOIN' },
      { type: 'paragraph', content: 'INNER JOIN keeps only rows that match in both tables. LEFT JOIN keeps every row from the first (left) table, filling in NULLs where there is no match on the right. Three more JOIN types round out the rest of what you will actually encounter in real SQL work.' },

      { type: 'heading', content: 'RIGHT JOIN: flipping which side you keep everything from' },
      { type: 'paragraph', content: 'RIGHT JOIN is LEFT JOIN\'s mirror image: it keeps every row from the second (right) table, filling in NULLs where there is no match on the left.' },
      { type: 'code', language: 'sql', content: `-- Every rider, even ones with zero deliveries (they show up with NULL order details)
SELECT r.name, o.order_id
FROM orders AS o
RIGHT JOIN riders AS r ON o.rider_id = r.rider_id;` },
      { type: 'callout', kind: 'tip', content: 'In practice, almost nobody writes RIGHT JOIN — they just swap the table order and write LEFT JOIN instead, since it reads more naturally left-to-right. SELECT r.name, o.order_id FROM riders AS r LEFT JOIN orders AS o ON o.rider_id = r.rider_id produces the identical result. It is still worth recognising RIGHT JOIN, since you will see it in other people\'s code.' },

      { type: 'heading', content: 'FULL OUTER JOIN: keep everyone, from both sides' },
      { type: 'paragraph', content: 'FULL OUTER JOIN keeps every row from both tables — matched rows show data from both sides, and unmatched rows from either side show NULLs for whichever side they are missing from.' },
      { type: 'code', language: 'sql', content: `-- Every restaurant AND every order, matched where possible,
-- including restaurants with no orders and (in theory) orders with no restaurant
SELECT res.name, o.order_id
FROM restaurants AS res
FULL OUTER JOIN orders AS o ON res.restaurant_id = o.restaurant_id;` },
      { type: 'callout', kind: 'warning', content: 'Not every database supports FULL OUTER JOIN directly. Modern SQLite (the engine powering this playground) and PostgreSQL/SQL Server support it natively — but MySQL still does not, and older versions of SQLite did not either. Where it is unsupported, people simulate it by combining a LEFT JOIN and a RIGHT JOIN with UNION. Knowing that workaround matters, because you will eventually hit a database where the native keyword simply is not available.' },

      { type: 'heading', content: 'SELF JOIN: joining a table to itself' },
      { type: 'paragraph', content: 'A SELF JOIN is not a new keyword — it is the ordinary JOIN syntax, just pointed at the same table twice, using two different aliases to tell the two "copies" apart. It is how you handle a table that refers back to itself, like a customer who was referred by another customer.' },
      { type: 'code', language: 'sql', content: `-- Show each referred customer next to the name of who referred them
SELECT c1.name AS customer_name, c2.name AS referred_by_name
FROM customers AS c1
INNER JOIN customers AS c2 ON c1.referred_by = c2.customer_id;` },
      { type: 'paragraph', content: 'c1 and c2 are both the customers table — but to SQL, aliasing the same table twice makes them behave like two separate tables for the purposes of this one query. c1.referred_by stores another customer\'s id, and c2 is used purely to look up that id\'s name.' },

      { type: 'heading', content: 'Real-life example: who referred who' },
      { type: 'paragraph', content: 'Referral programs are the textbook real-world use of SELF JOIN — anywhere one row in a table needs to point back at another row in the exact same table (an employee\'s manager, a comment\'s parent comment, a customer\'s referrer), you will reach for this pattern.' },

      { type: 'heading', content: 'Choosing the right JOIN for the question being asked' },
      { type: 'list', items: [
        'INNER JOIN — "only show me matches in both tables"',
        'LEFT JOIN — "show me everything from my main table, matched where possible"',
        'RIGHT JOIN — the same idea as LEFT JOIN, just with the tables in the other order',
        'FULL OUTER JOIN — "show me everything from both tables, matched where possible"',
        'SELF JOIN — "this table refers back to itself, and I need to resolve that reference"',
      ]},

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Find every rider who has never been assigned a single delivery. (Hint: a LEFT JOIN from riders to orders, then a WHERE checking for a NULL on the orders side, will get you there just as well as a RIGHT JOIN would.)' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
    ],
  },

  {
    id: 'sql-i-7',
    title: 'Ranking rows with ROW_NUMBER, RANK, and DENSE_RANK',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'Why GROUP BY isn\'t always enough' },
      { type: 'paragraph', content: 'GROUP BY can tell you each restaurant\'s total revenue. But it cannot answer "what is each restaurant\'s rank, compared to others in the same city?" — because GROUP BY collapses rows together, and ranking needs to compare rows to each other while still keeping every row visible. This is exactly the gap window functions fill.' },

      { type: 'heading', content: 'Introducing window functions: a new kind of calculation' },
      { type: 'paragraph', content: 'A window function looks at a "window" of related rows (similar to GROUP BY) but does not collapse them into one row per group — every original row stays in the output, with an extra calculated column added alongside it.' },

      { type: 'heading', content: 'The OVER() and PARTITION BY pieces' },
      { type: 'paragraph', content: 'Every window function ends with OVER(...), which defines the window. PARTITION BY inside it works like GROUP BY, but without merging rows — it just tells the function "restart your calculation for each new group."' },

      { type: 'heading', content: 'ROW_NUMBER: a unique position for every row' },
      { type: 'code', language: 'sql', content: `-- Number every restaurant 1, 2, 3... ordered by revenue (no ties possible)
SELECT name, rating,
  ROW_NUMBER() OVER (ORDER BY rating DESC) AS row_num
FROM restaurants
WHERE rating IS NOT NULL;` },
      { type: 'paragraph', content: 'ROW_NUMBER() always gives a unique, ever-increasing number — even if two restaurants have the exact same rating, one of them arbitrarily gets the lower number.' },

      { type: 'heading', content: 'RANK: ties share a position, but leave a gap' },
      { type: 'code', language: 'sql', content: `SELECT name, rating,
  RANK() OVER (ORDER BY rating DESC) AS rank
FROM restaurants
WHERE rating IS NOT NULL;` },
      { type: 'paragraph', content: 'If two restaurants are tied for 2nd place, they both get rank 2 — and the next restaurant after them jumps straight to rank 4, skipping 3 entirely. This matches how rankings work in real life: a tied silver medal still means there is no bronze.' },

      { type: 'heading', content: 'DENSE_RANK: ties share a position, no gaps' },
      { type: 'code', language: 'sql', content: `SELECT name, rating,
  DENSE_RANK() OVER (ORDER BY rating DESC) AS dense_rank
FROM restaurants
WHERE rating IS NOT NULL;` },
      { type: 'paragraph', content: 'Same tie at 2nd place — but this time the next restaurant gets rank 3, not 4. DENSE_RANK never skips a number, which is usually what you want when showing "top tiers" rather than literal competition standings.' },

      { type: 'heading', content: 'Real-life example: top 3 restaurants per city' },
      { type: 'paragraph', content: 'This is where PARTITION BY earns its keep — ranking restaurants per city, instead of across the whole platform, so a strong city does not crowd out every restaurant from a smaller one.' },
      { type: 'code', language: 'sql', content: `SELECT name, city, rating,
  DENSE_RANK() OVER (PARTITION BY city ORDER BY rating DESC) AS city_rank
FROM restaurants
WHERE rating IS NOT NULL;` },
      { type: 'paragraph', content: 'PARTITION BY city resets the ranking back to 1 every time the city changes — so every city gets its own independent top 1, top 2, top 3, calculated in the same single query.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Rank every customer by total spend, using a CTE (from Module 4) to calculate the totals first, then RANK() in the outer query.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
    ],
  },

  {
    id: 'sql-mp-i-2',
    title: 'Mini Project: Restaurant Leaderboard',
    duration: '25 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: 'Three modules, three genuinely different skills: combining result sets with UNION, the rest of the JOIN family, and your first window functions. This project is the kind of leaderboard a restaurant-partnerships team would actually pull together for a quarterly review.' },
      { type: 'list', items: [
        'Concepts used: UNION, RIGHT/SELF JOIN, RANK, DENSE_RANK, PARTITION BY',
      ]},

      { type: 'heading', content: 'Task 1: One combined contact list' },
      { type: 'paragraph', content: 'Combine the names and cities of every customer and every rider into a single list, using UNION.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT name, city FROM customers
UNION
SELECT name, city FROM riders;` },

      { type: 'heading', content: 'Task 2: Riders with zero deliveries' },
      { type: 'paragraph', content: 'Find every rider who has never been assigned a single order.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT r.name
FROM riders AS r
LEFT JOIN orders AS o ON r.rider_id = o.rider_id
WHERE o.order_id IS NULL;` },

      { type: 'heading', content: 'Task 3: Who referred who' },
      { type: 'paragraph', content: 'Show every customer who was referred by another customer, alongside the referrer\'s name, using a SELF JOIN.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT c1.name AS customer_name, c2.name AS referred_by_name
FROM customers AS c1
INNER JOIN customers AS c2 ON c1.referred_by = c2.customer_id;` },

      { type: 'heading', content: 'Task 4: Restaurants ranked by revenue' },
      { type: 'paragraph', content: 'Rank every restaurant by its total revenue from delivered orders, highest first, using RANK.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
WITH restaurant_revenue AS (
  SELECT restaurant_id, SUM(total_amount) AS revenue
  FROM orders
  WHERE status = 'delivered'
  GROUP BY restaurant_id
)
SELECT res.name, rr.revenue,
  RANK() OVER (ORDER BY rr.revenue DESC) AS revenue_rank
FROM restaurant_revenue AS rr
INNER JOIN restaurants AS res ON rr.restaurant_id = res.restaurant_id;` },

      { type: 'heading', content: 'Task 5: Top-rated restaurant per city' },
      { type: 'paragraph', content: 'Find the top 3 highest-rated restaurants in each city, using DENSE_RANK and PARTITION BY.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
WITH ranked AS (
  SELECT name, city, rating,
    DENSE_RANK() OVER (PARTITION BY city ORDER BY rating DESC) AS city_rank
  FROM restaurants
  WHERE rating IS NOT NULL
)
SELECT * FROM ranked WHERE city_rank <= 3;` },
    ],
  },

  {
    id: 'sql-i-8',
    title: 'Looking forward and back: LEAD, LAG, and running totals',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'Comparing a row to the row before or after it' },
      { type: 'paragraph', content: 'RANK and ROW_NUMBER (from the last module) describe a row\'s position. LAG and LEAD do something different: they let one row reach over and grab a value from a neighbouring row — the one right before it, or right after it, within the same ordered window. This is exactly how you calculate things like "how much did this order grow compared to the customer\'s last one?"' },

      { type: 'heading', content: 'LAG: looking at the previous row' },
      { type: 'code', language: 'sql', content: `SELECT customer_id, order_date, total_amount,
  LAG(total_amount) OVER (PARTITION BY customer_id ORDER BY order_date) AS previous_order_amount
FROM orders
WHERE status = 'delivered';` },
      { type: 'paragraph', content: 'For each customer (PARTITION BY customer_id), ordered by date, LAG grabs the total_amount from the row immediately before the current one. The very first order for each customer has nothing before it, so LAG returns NULL there — which is correct, not a bug.' },

      { type: 'heading', content: 'LEAD: looking at the next row' },
      { type: 'code', language: 'sql', content: `SELECT customer_id, order_date,
  LEAD(order_date) OVER (PARTITION BY customer_id ORDER BY order_date) AS next_order_date
FROM orders
WHERE status = 'delivered';` },
      { type: 'paragraph', content: 'LEAD is the mirror image of LAG — it looks one row ahead instead of one row behind. The last order for each customer has nothing after it, so LEAD returns NULL there.' },

      { type: 'heading', content: 'Real-life example: a customer\'s previous order, side by side' },
      { type: 'paragraph', content: 'A genuinely useful retention question — "is this customer ordering more or less often than they used to?" — starts with simply seeing each order next to the one before it.' },
      { type: 'code', language: 'sql', content: `SELECT customer_id, order_date,
  LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date) AS previous_order_date
FROM orders
WHERE status = 'delivered';` },
      { type: 'paragraph', content: "This alone is already useful for spotting patterns by eye. Turning that gap into an actual day count needs a date subtraction function — Module 10 covers exactly that, and Mini Project 3 revisits this precise example once you have it." },

      { type: 'heading', content: 'Running totals with SUM() OVER' },
      { type: 'paragraph', content: 'The same aggregate functions you already know (SUM, AVG, COUNT) become running, row-by-row calculations the moment you add OVER() with an ORDER BY.' },
      { type: 'code', language: 'sql', content: `SELECT order_date, total_amount,
  SUM(total_amount) OVER (ORDER BY order_date) AS running_total
FROM orders
WHERE status = 'delivered'
ORDER BY order_date;` },
      { type: 'paragraph', content: 'Without PARTITION BY, this running total accumulates across every row in date order — exactly the shape of a "total revenue so far this year" chart.' },

      { type: 'heading', content: 'A moving average, the simple way' },
      { type: 'paragraph', content: 'Adding ROWS BETWEEN tells SQL exactly how wide a window to look at for each calculation, instead of the entire table.' },
      { type: 'code', language: 'sql', content: `SELECT order_date, total_amount,
  AVG(total_amount) OVER (
    ORDER BY order_date
    ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
  ) AS moving_avg_3_orders
FROM orders
WHERE status = 'delivered'
ORDER BY order_date;` },
      { type: 'paragraph', content: 'ROWS BETWEEN 2 PRECEDING AND CURRENT ROW means "average this row with the 2 rows directly before it" — a 3-order moving average that smooths out single spikes or dips.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Calculate a running total of platform-wide revenue, ordered by order date, for delivered orders only.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
    ],
  },

  {
    id: 'sql-i-9',
    title: 'Cleaning and shaping text with string functions',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'Why text never arrives clean' },
      { type: 'paragraph', content: 'Restaurant names typed by different staff, customer-entered addresses, copy-pasted exports — text data is messy in practice almost everywhere it comes from. SQL has a small toolkit of string functions for cleaning and reshaping it directly inside a query, instead of fixing it by hand.' },

      { type: 'heading', content: 'UPPER, LOWER, and consistent casing' },
      { type: 'code', language: 'sql', content: `SELECT UPPER(name) AS shout_case, LOWER(name) AS lower_case
FROM restaurants;` },

      { type: 'heading', content: 'TRIM and removing extra spaces' },
      { type: 'code', language: 'sql', content: `-- Removes leading/trailing whitespace -- the same problem from your beginner course's Excel module
SELECT TRIM('  Spice Route  ') AS cleaned;` },

      { type: 'heading', content: 'Cutting text with SUBSTR' },
      { type: 'paragraph', content: 'SQLite\'s function for grabbing part of a string is SUBSTR(text, start_position, length). (Some other databases also offer LEFT() and RIGHT() as shortcuts for grabbing characters from one end — the underlying idea is identical, just spelled differently depending on which database you are using.)' },
      { type: 'code', language: 'sql', content: `-- First 5 characters
SELECT SUBSTR(name, 1, 5) AS first_five FROM restaurants;

-- Everything from position 3 onward
SELECT SUBSTR(name, 3) AS from_third_letter FROM restaurants;` },

      { type: 'heading', content: 'Joining text together with ||' },
      { type: 'paragraph', content: 'SQLite uses || to join (concatenate) text values — the same job CONCAT() does in MySQL, PostgreSQL, and SQL Server.' },
      { type: 'code', language: 'sql', content: `SELECT name || ' (' || cuisine_type || ')' AS display_name
FROM restaurants;` },

      { type: 'heading', content: 'Finding text inside text' },
      { type: 'paragraph', content: 'You already know LIKE from your beginner course for pattern matching in a WHERE clause. INSTR(text, search) does a related job inside a SELECT — it returns the position where a substring first appears, or 0 if it is not found at all.' },
      { type: 'code', language: 'sql', content: `-- Does the name contain the word "House"? (a non-zero result means yes)
SELECT name, INSTR(name, 'House') AS position_found
FROM restaurants;` },

      { type: 'heading', content: 'Real-life example: cleaning up restaurant names and addresses' },
      { type: 'paragraph', content: 'A realistic cleanup pipeline often nests several of these together: TRIM to remove stray whitespace, then UPPER or a consistent case, then maybe || to rebuild a clean display string — the exact same nesting idea from your beginner Excel course\'s PROPER(TRIM(...)), just written in SQL.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Build a single "menu listing" string for every menu item in the form "Butter Chicken — Main Course (350)", using || to join the name, category, and price together.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
    ],
  },

  {
    id: 'sql-i-10',
    title: 'Working with dates and times',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'Why dates need their own set of tools' },
      { type: 'paragraph', content: 'A date is not really "just text," even though it is often stored as text (you saw this with order_date and delivered_at in this dataset). SQL has dedicated functions for pulling dates apart, comparing them, and doing arithmetic on them correctly — including handling things like differing month lengths and leap years, which plain text comparison cannot do.' },

      { type: 'heading', content: 'Getting the current date and time' },
      { type: 'code', language: 'sql', content: `SELECT DATE('now') AS today, DATETIME('now') AS right_now;` },

      { type: 'heading', content: 'Pulling out the year, month, or day from a date' },
      { type: 'paragraph', content: 'strftime() formats a date into any piece you want, using formatting codes: %Y for year, %m for month, %d for day.' },
      { type: 'code', language: 'sql', content: `SELECT order_date,
  strftime('%Y', order_date) AS year,
  strftime('%m', order_date) AS month,
  strftime('%d', order_date) AS day
FROM orders;` },
      { type: 'callout', kind: 'tip', content: 'Other databases spell this differently — MySQL and PostgreSQL use EXTRACT(YEAR FROM date_column) or YEAR(date_column); SQL Server uses DATEPART(year, date_column). The concept ("give me just the year") is universal; only the exact function name changes per database.' },

      { type: 'heading', content: 'Calculating the gap between two dates' },
      { type: 'paragraph', content: 'julianday() converts any date into a single number (days since a fixed reference point in history). Subtracting two julianday() values gives you a clean difference in days.' },
      { type: 'code', language: 'sql', content: `-- How many days passed between ordering and delivery? (in fractional days)
SELECT order_id,
  julianday(delivered_at) - julianday(order_date) AS days_to_deliver
FROM orders
WHERE delivered_at IS NOT NULL;` },
      { type: 'paragraph', content: 'Since order_date and delivered_at in this dataset include a time component, this actually returns a small fraction of a day (delivery usually takes under an hour). Multiply by 24 to convert to hours, or by 1440 to convert to minutes.' },
      { type: 'code', language: 'sql', content: `-- Same calculation, converted to minutes
SELECT order_id,
  (julianday(delivered_at) - julianday(order_date)) * 1440 AS minutes_to_deliver
FROM orders
WHERE delivered_at IS NOT NULL;` },

      { type: 'heading', content: 'Grouping data by month or week' },
      { type: 'paragraph', content: 'strftime() is also exactly how you build a "month" column to GROUP BY — turning raw timestamps into a clean, sortable bucket.' },
      { type: 'code', language: 'sql', content: `SELECT strftime('%Y-%m', order_date) AS month, COUNT(*) AS orders_placed
FROM orders
GROUP BY month
ORDER BY month;` },

      { type: 'heading', content: 'Real-life example: how long delivery actually takes' },
      { type: 'paragraph', content: 'Combining everything above, an operations team could ask: "what is our average delivery time, by city, by month?" — and answer it in one query, using a JOIN to bring in the city, strftime() to bucket by month, and julianday() to measure the delivery duration itself.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Calculate the average delivery time (in minutes) for each restaurant, for delivered orders only.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
    ],
  },

  {
    id: 'sql-mp-i-3',
    title: 'Mini Project: Delivery Performance Tracker',
    duration: '25 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: "Three more substantial skills, one connected tracker: looking at neighbouring rows with LAG, cleaning up text, and doing real arithmetic on dates. This is the kind of report an operations analyst would build to keep an eye on how the platform is actually performing, week to week." },
      { type: 'list', items: [
        'Concepts used: LAG, SUM() OVER, TRIM/UPPER/LOWER, julianday, strftime',
      ]},

      { type: 'heading', content: 'Task 1: Gap between a customer\'s orders' },
      { type: 'paragraph', content: 'For every delivered order, show the number of days since that same customer\'s previous order (NULL is correct for each customer\'s very first order).' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT customer_id, order_date,
  julianday(order_date) - julianday(
    LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date)
  ) AS days_since_last_order
FROM orders
WHERE status = 'delivered';` },

      { type: 'heading', content: 'Task 2: Running total of daily revenue' },
      { type: 'paragraph', content: 'Build a running total of platform-wide revenue from delivered orders, in date order.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT order_date, total_amount,
  SUM(total_amount) OVER (ORDER BY order_date) AS running_total
FROM orders
WHERE status = 'delivered'
ORDER BY order_date;` },

      { type: 'heading', content: 'Task 3: Clean restaurant names and cities' },
      { type: 'paragraph', content: 'Show every restaurant\'s name and city, both passed through TRIM and a consistent case, ready for a clean report.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT TRIM(name) AS clean_name, UPPER(TRIM(city)) AS clean_city
FROM restaurants;` },

      { type: 'heading', content: 'Task 4: Average delivery time' },
      { type: 'paragraph', content: 'Calculate the average delivery time, in minutes, across every delivered order on the entire platform.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT AVG((julianday(delivered_at) - julianday(order_date)) * 1440) AS avg_minutes
FROM orders
WHERE delivered_at IS NOT NULL;` },

      { type: 'heading', content: 'Task 5: Busiest month' },
      { type: 'paragraph', content: 'Group all orders by month, and find which month had the most orders placed.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT strftime('%Y-%m', order_date) AS month, COUNT(*) AS orders_placed
FROM orders
GROUP BY month
ORDER BY orders_placed DESC
LIMIT 1;` },
    ],
  },

  {
    id: 'sql-i-11',
    title: 'Making values behave: type casting with CAST',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'Why SQL sometimes treats a number like text (or the other way round)' },
      { type: 'paragraph', content: 'Every column has a declared type, but real data does not always cooperate — a number might arrive as text from a messy import, or you might need a number to display as text so it can sit next to a label. CAST is how you convert a value from one type to another, on purpose, inside a query.' },

      { type: 'heading', content: 'Converting types on purpose with CAST' },
      { type: 'code', language: 'sql', content: `SELECT CAST('350' AS REAL) AS as_number;
SELECT CAST(350 AS TEXT) AS as_text;
SELECT CAST(3.7 AS INTEGER) AS as_integer;` },
      { type: 'paragraph', content: 'The pattern is always CAST(value AS type) — common types you will use are INTEGER (whole numbers), REAL (decimals), and TEXT.' },

      { type: 'heading', content: 'Common conversions: text to number, number to text, text to date' },
      { type: 'paragraph', content: 'Remember Mini Project 1\'s callout about SQLite\'s flexible typing letting COALESCE mix a number and a fallback word without complaint? This is the function that closes that gap on stricter databases. CAST(rating AS TEXT) forces the number into text first, so a function that requires matching types — like COALESCE on PostgreSQL, MySQL, or SQL Server — will accept it.' },
      { type: 'code', language: 'sql', content: `-- Works everywhere, not just on SQLite's relaxed typing
SELECT name, COALESCE(CAST(rating AS TEXT), 'Not yet rated') AS rating_display
FROM restaurants;` },

      { type: 'heading', content: 'Real-life example: fixing a column that should have been a number all along' },
      { type: 'paragraph', content: 'Imagine a CSV import where every column — including ones that are clearly numbers, like total_amount — gets imported as plain text because the import tool was not told any better. SUM() and AVG() on a text column either fail outright or (worse) silently return a wrong answer. Wrapping it in CAST(total_amount AS REAL) fixes it without needing to re-import or edit the raw file.' },

      { type: 'heading', content: 'A note on rounding after casting' },
      { type: 'paragraph', content: 'CAST(3.7 AS INTEGER) does not round to 4 — it truncates straight down to 3, simply chopping off the decimal part. If you actually want rounding (3.7 becoming 4), use ROUND() instead, optionally combined with CAST if you specifically need the result to be a whole-number type rather than a decimal.' },
      { type: 'code', language: 'sql', content: `SELECT CAST(3.7 AS INTEGER) AS truncated;        -- 3, not 4
SELECT ROUND(3.7) AS rounded;                    -- 4
SELECT CAST(ROUND(3.7) AS INTEGER) AS rounded_and_whole;  -- 4, stored as an integer` },
      { type: 'callout', kind: 'warning', content: 'This truncation behaviour catches a lot of people off guard, because in everyday maths "3.7 as a whole number" feels like it should round to 4. SQL\'s CAST does not round — it just discards everything after the decimal point. Reach for ROUND() whenever the actual rounding matters, not just the type.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Calculate the average rating across all rated restaurants, rounded to one decimal place, and cast as text so it could be slotted directly into a sentence like "Average rating: 4.3".' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
    ],
  },

  {
    id: 'sql-i-12',
    title: 'Why queries are slow: a first look at performance',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'Not every slow query is a bad query — some are just big' },
      { type: 'paragraph', content: 'A query that takes 2 seconds on a 50-row practice table might take 2 minutes on a real production table with 50 million rows, even if you wrote it perfectly. Performance is not really about memorising tricks — it is about understanding what the database actually does to answer your question, so you can spot the difference between "this is inherently a lot of work" and "this is unnecessarily slow."' },

      { type: 'heading', content: 'Reading an EXPLAIN plan, in plain English' },
      { type: 'paragraph', content: 'Most databases let you ask "how would you actually run this?" without running it. In SQLite, that is EXPLAIN QUERY PLAN.' },
      { type: 'code', language: 'sql', content: `EXPLAIN QUERY PLAN
SELECT * FROM orders WHERE customer_id = 5;` },
      { type: 'paragraph', content: 'On this table, that returns something like "SCAN orders" — meaning SQLite has to check every single row in the table, one by one, to find the ones matching customer_id = 5. On a tiny practice table that is instant. On a real table with millions of rows, a full scan like this can be genuinely slow.' },

      { type: 'heading', content: 'What an index actually does' },
      { type: 'paragraph', content: 'Think of an index the way you would think of a library\'s card catalogue: instead of walking every shelf looking for a book, you look the title up in the catalogue, which tells you exactly which shelf and position to go straight to. A database index works the same way — it is a separate, pre-sorted structure that lets the database jump straight to matching rows instead of checking every single one.' },
      { type: 'code', language: 'sql', content: `CREATE INDEX idx_orders_customer ON orders(customer_id);

EXPLAIN QUERY PLAN
SELECT * FROM orders WHERE customer_id = 5;
-- Now reads something like: SEARCH orders USING INDEX idx_orders_customer (customer_id=?)` },
      { type: 'paragraph', content: 'Notice the plan changes from SCAN to SEARCH once the index exists — that single word is the entire difference between "check everything" and "jump straight to it."' },

      { type: 'heading', content: 'Common habits that quietly slow a query down' },
      { type: 'list', items: [
        'Filtering or joining on a column with no index, on a genuinely large table',
        'Applying a function to the column being filtered, like WHERE UPPER(city) = \'MUMBAI\' — this usually prevents the database from using an index on city at all',
        'Pulling far more columns or rows than you actually need "just in case"',
        'Using a correlated subquery (Module 3) where a plain JOIN would answer the same question and let the database optimise more freely',
      ]},

      { type: 'heading', content: 'SELECT * vs selecting only what you need, revisited' },
      { type: 'paragraph', content: 'Your beginner course already warned against SELECT * for readability reasons. There is a performance reason too: pulling every column means more data has to be read off disk and sent over the network, even for columns you immediately throw away. On a wide table with dozens of columns, this adds up fast at scale.' },

      { type: 'heading', content: 'Real-life example: the difference an index makes on a big table' },
      { type: 'paragraph', content: 'A 50-row practice table cannot really demonstrate a slow query — everything is instant regardless of indexes. But the mental model transfers directly: on a real orders table with 50 million rows, the exact query above goes from "scan 50 million rows" to "jump straight to the handful that match," which is the difference between a query that takes minutes and one that takes milliseconds.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Run EXPLAIN QUERY PLAN on a query filtering restaurants by city, before and after creating an index on restaurants(city), and compare the two plans.' },
      { type: 'playground', language: 'sql', starter: '-- Before the index\nEXPLAIN QUERY PLAN\nSELECT * FROM restaurants WHERE city = \'Mumbai\';\n\n-- Now try adding the index, then run the same EXPLAIN QUERY PLAN again:\n-- CREATE INDEX idx_restaurants_city ON restaurants(city);', dataset: 'quickbite' },
      { type: 'callout', kind: 'tip', content: "This module is intentionally a first look, not the full picture — real performance tuning also covers composite indexes (covering more than one column), how query optimisers make decisions, and trade-offs (every index speeds up reads but slightly slows down writes, since the index itself has to be kept up to date). That depth belongs in the Advanced track. For now, knowing what EXPLAIN QUERY PLAN tells you and what an index conceptually does will let you ask the right questions in any real job." },
    ],
  },

  {
    id: 'sql-i-capstone',
    title: 'Capstone: The Complete QuickBite Report',
    duration: '60 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Practice time — no new concepts here' },
      { type: 'paragraph', content: "You've finished every lesson in this track. This capstone is meant to be done after the rest of the course: one connected, realistic report covering NULL handling, CASE WHEN, subqueries, CTEs, UNION, every JOIN type, both window-function modules, string functions, date functions, and CAST. Nothing here is new — it's all about combining what you already know." },
      { type: 'callout', kind: 'tip', content: 'Try every task yourself before checking the sample solution underneath it. By this point in the course, you have everything you need to solve each one without help — the sample solutions are there to check your work, not to be your first move.' },

      { type: 'heading', content: 'Project 1 (Easy)' },
      { type: 'paragraph', content: "The scenario: QuickBite's operations lead wants a clean monthly health-check report before a leadership meeting. Nothing here needs window functions yet — just the fundamentals from earlier in this track, applied cleanly." },

      { type: 'heading', content: 'Task 1: Customers who have gone quiet' },
      { type: 'paragraph', content: 'Find every customer who has not placed a single order in the 30 days before the most recent order in the entire dataset.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT c.customer_id, c.name
FROM customers AS c
WHERE c.customer_id NOT IN (
  SELECT customer_id FROM orders
  WHERE julianday((SELECT MAX(order_date) FROM orders)) - julianday(order_date) <= 30
);` },

      { type: 'heading', content: 'Task 2: Average order value per restaurant' },
      { type: 'paragraph', content: "Calculate each restaurant's average order value (delivered orders only), using a CTE, and show it next to the restaurant's name." },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
WITH restaurant_avg AS (
  SELECT restaurant_id, AVG(total_amount) AS avg_order_value
  FROM orders
  WHERE status = 'delivered'
  GROUP BY restaurant_id
)
SELECT res.name, ra.avg_order_value
FROM restaurant_avg AS ra
INNER JOIN restaurants AS res ON ra.restaurant_id = res.restaurant_id;` },

      { type: 'heading', content: 'Task 3: Labelling every review' },
      { type: 'paragraph', content: 'For every delivered order, show a review label: "Positive" (rating 4-5), "Neutral" (rating 3), "Negative" (rating 1-2), or "No Review" (no review row at all).' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT o.order_id,
  CASE
    WHEN r.rating IS NULL THEN 'No Review'
    WHEN r.rating >= 4 THEN 'Positive'
    WHEN r.rating = 3 THEN 'Neutral'
    ELSE 'Negative'
  END AS review_label
FROM orders AS o
LEFT JOIN reviews AS r ON o.order_id = r.order_id
WHERE o.status = 'delivered';` },

      { type: 'heading', content: 'Task 4: Top cities by revenue and delivery speed' },
      { type: 'paragraph', content: "Find the three cities with the highest total revenue (delivered orders only), and show each city's average delivery time in minutes alongside it, rounded to one decimal place." },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT res.city,
  SUM(o.total_amount) AS total_revenue,
  ROUND(AVG((julianday(o.delivered_at) - julianday(o.order_date)) * 1440), 1) AS avg_delivery_minutes
FROM orders AS o
INNER JOIN restaurants AS res ON o.restaurant_id = res.restaurant_id
WHERE o.status = 'delivered'
GROUP BY res.city
ORDER BY total_revenue DESC
LIMIT 3;` },

      { type: 'heading', content: 'Task 5: Standardised city names' },
      { type: 'paragraph', content: 'Produce a clean restaurant report showing every restaurant\'s id alongside its city name, trimmed and in a single consistent case.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT restaurant_id, TRIM(UPPER(city)) AS clean_city
FROM restaurants;` },

      { type: 'heading', content: 'Project 2 (Hard)' },
      { type: 'paragraph', content: "The scenario: leadership liked Project 1, and now wants the deeper analysis to go with it — customer rankings, trends over time, and an honest look at where riders and restaurants are underperforming. This is where window functions and the rest of your toolkit earn their keep." },

      { type: 'heading', content: 'Task 6: Customer rank within their own city' },
      { type: 'paragraph', content: "Rank every customer by total spend (delivered orders only), but within their own city, not across the whole platform." },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
WITH customer_spend AS (
  SELECT o.customer_id, c.city, SUM(o.total_amount) AS total_spent
  FROM orders AS o
  INNER JOIN customers AS c ON o.customer_id = c.customer_id
  WHERE o.status = 'delivered'
  GROUP BY o.customer_id, c.city
)
SELECT customer_id, city, total_spent,
  RANK() OVER (PARTITION BY city ORDER BY total_spent DESC) AS city_rank
FROM customer_spend;` },

      { type: 'heading', content: "Task 7: Each customer's spending trend" },
      { type: 'paragraph', content: "For every delivered order, show how much more (or less) the customer spent compared to their previous order." },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT customer_id, order_date, total_amount,
  total_amount - LAG(total_amount) OVER (PARTITION BY customer_id ORDER BY order_date) AS spend_change
FROM orders
WHERE status = 'delivered';` },

      { type: 'heading', content: 'Task 8: Running monthly revenue' },
      { type: 'paragraph', content: "Build a running total of the platform's monthly revenue (delivered orders only) — one row per month, accumulating as the months go on." },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
WITH monthly AS (
  SELECT strftime('%Y-%m', order_date) AS month, SUM(total_amount) AS monthly_revenue
  FROM orders
  WHERE status = 'delivered'
  GROUP BY month
)
SELECT month, monthly_revenue,
  SUM(monthly_revenue) OVER (ORDER BY month) AS running_monthly_total
FROM monthly;` },

      { type: 'heading', content: 'Task 9: Idle riders' },
      { type: 'paragraph', content: 'Find every rider who has had no deliveries in the 14 days before the most recent order in the dataset (this includes riders with zero deliveries ever).' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT r.rider_id, r.name
FROM riders AS r
WHERE r.rider_id NOT IN (
  SELECT rider_id FROM orders
  WHERE rider_id IS NOT NULL
  AND julianday((SELECT MAX(order_date) FROM orders)) - julianday(order_date) <= 14
);` },

      { type: 'heading', content: 'Task 10: Restaurants with no budget options' },
      { type: 'paragraph', content: 'Find every restaurant where not a single menu item is priced under 200 — useful for a "budget-friendly" filter the app team is building.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT name FROM restaurants
WHERE restaurant_id NOT IN (
  SELECT restaurant_id FROM menu_items WHERE price < 200
);` },

      { type: 'heading', content: 'Task 11: Where would an index actually help?' },
      { type: 'paragraph', content: 'Look back at Tasks 6 and 9 above. Both filter or group on a column that is not the table\'s primary key. Using EXPLAIN QUERY PLAN, check what each query currently does (look for SCAN vs SEARCH), then write 2-3 sentences on which column(s) you would index, and why, if these tables had millions of rows instead of a few dozen.' },
      { type: 'playground', language: 'sql', starter: '-- Try EXPLAIN QUERY PLAN on the queries from Task 6 and Task 9\nEXPLAIN QUERY PLAN\nSELECT * FROM orders WHERE customer_id = 1;', dataset: 'quickbite' },
      { type: 'callout', kind: 'tip', content: "There's no single sample solution here — this task is about judgment, not syntax. A reasonable answer: customer_id (used in Task 6's join and GROUP BY) and rider_id plus order_date (used together in Task 9's filter) are the strongest index candidates, since both queries currently have to scan the entire orders table to evaluate their conditions." },

      { type: 'heading', content: "You're done with the SQL Intermediate track" },
      { type: 'paragraph', content: "If you worked through both projects, you can now do what a working data or business analyst actually does day to day: handle messy, real, multi-table data — with missing values, evolving statuses, and dates that need real arithmetic — and turn it into rankings, trends, and judgment calls, not just flat lookups. That is a genuinely significant jump from where the beginner track left you." },
      { type: 'paragraph', content: "The Advanced track goes further still: deeper window function patterns, recursive queries, transactions, and serious performance tuning beyond this module's first look. When ready, switch to Advanced from the sidebar." },
    ],
  },

]

/* ════════════════════════════════════════════════════════════════
   SQL — ADVANCED TRACK (11 modules + 3 mini projects + capstone)
   Same QuickBite dataset, now with a JSON metadata column on
   restaurants and the customers.referred_by self-reference put to
   real use for recursive queries.
   ════════════════════════════════════════════════════════════════ */
const SQL_ADVANCED = [
  {
    id: 'sql-a-1',
    title: 'Recursive CTEs: querying hierarchies',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'A new shape of question' },
      { type: 'paragraph', content: 'Every query so far answers a question about rows you can see directly. Some real questions are different in kind: "find everyone in this customer\'s entire referral chain, no matter how many levels deep" cannot be answered by looking at one row, or even joining a fixed number of tables — the chain could be 1 level deep or 10. This is exactly the gap a recursive CTE fills.' },

      { type: 'heading', content: 'The shape of a recursive CTE' },
      { type: 'paragraph', content: 'A recursive CTE has two parts, joined by UNION ALL: an anchor (the starting point) and a recursive part (a query that refers back to the CTE itself, building on the previous round\'s results one step at a time).' },
      { type: 'code', language: 'sql', content: `WITH RECURSIVE referral_chain AS (
  -- Anchor: start with one specific customer
  SELECT customer_id, name, referred_by, 0 AS depth
  FROM customers
  WHERE customer_id = 1

  UNION ALL

  -- Recursive part: find anyone referred_by someone already in the chain
  SELECT c.customer_id, c.name, c.referred_by, rc.depth + 1
  FROM customers AS c
  INNER JOIN referral_chain AS rc ON c.referred_by = rc.customer_id
)
SELECT * FROM referral_chain;` },
      { type: 'paragraph', content: 'Read it as a loop: round 0 is just customer 1. Round 1 finds everyone referred_by customer 1. Round 2 finds everyone referred_by anyone found in round 1. SQLite keeps running rounds, feeding each round\'s results back into the recursive part, until a round finds nothing new — at which point it stops automatically.' },

      { type: 'heading', content: 'Real-life feel: how far does one referral actually reach?' },
      { type: 'paragraph', content: 'A referral program\'s real value is not just "who did Aditi refer" — it is "how large is the entire network that traces back to Aditi, including people referred by people she referred." A single recursive query answers that at any depth, where a fixed number of JOINs would only answer it for a fixed number of levels.' },

      { type: 'heading', content: 'A safety net: avoiding infinite recursion' },
      { type: 'paragraph', content: 'If the underlying data ever formed a loop (customer A refers B, B refers C, C somehow refers back to A — a data error, but a possible one), a recursive CTE without a limit would run forever. SQLite lets you cap it directly.' },
      { type: 'code', language: 'sql', content: `WITH RECURSIVE referral_chain AS (
  SELECT customer_id, name, referred_by, 0 AS depth
  FROM customers WHERE customer_id = 1
  UNION ALL
  SELECT c.customer_id, c.name, c.referred_by, rc.depth + 1
  FROM customers AS c
  INNER JOIN referral_chain AS rc ON c.referred_by = rc.customer_id
)
SELECT * FROM referral_chain LIMIT 1000;` },
      { type: 'callout', kind: 'warning', content: "Always think through what stops a recursive CTE before running it on a table you do not fully trust. Here, it stops naturally because referred_by chains in clean data are finite — but adding a sensible LIMIT costs nothing and protects you if the data ever turns out to be messier than expected." },

      { type: 'heading', content: 'Other classic uses of recursive CTEs' },
      { type: 'list', items: [
        'Org charts — every employee who reports up to a given manager, at any depth',
        'Category trees — every subcategory nested under "Electronics," including subcategories of subcategories',
        'Comment threads — every reply to a reply to a reply, on a forum or social post',
        'Generating a sequence of numbers or dates without a source table at all (the anchor can just be SELECT 1, with no FROM clause)',
      ]},

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Write a recursive CTE that finds every customer in customer 7\'s (Yuki Tanaka\'s) referral chain.' },
      { type: 'playground', language: 'sql', starter: '-- Write your recursive CTE here\n', dataset: 'quickbite' },
      { type: 'callout', kind: 'tip', content: "Next module: you've used window functions to rank and look at neighbouring rows. A few more patterns — grabbing the first or last value in a window, and splitting rows into equal buckets — round out the toolkit." },
    ],
  },

  {
    id: 'sql-a-2',
    title: 'Advanced window function patterns: FIRST_VALUE, LAST_VALUE, NTILE',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'A quick recap' },
      { type: 'paragraph', content: 'From the intermediate track: ROW_NUMBER, RANK, and DENSE_RANK number rows; LAG and LEAD look at neighbouring rows; SUM() OVER builds running totals. Three more patterns round out the window function toolkit for genuinely advanced reporting.' },

      { type: 'heading', content: 'FIRST_VALUE and LAST_VALUE' },
      { type: 'paragraph', content: 'These grab a specific value from within the window — not the current row, but whichever row is first or last according to the window\'s ordering.' },
      { type: 'code', language: 'sql', content: `-- Each customer's very first order, shown next to every one of their orders
SELECT customer_id, order_date, total_amount,
  FIRST_VALUE(total_amount) OVER (
    PARTITION BY customer_id ORDER BY order_date
  ) AS first_order_amount
FROM orders
WHERE status = 'delivered';` },
      { type: 'paragraph', content: "This is subtly different from LAG: LAG always looks at the row immediately before the current one, while FIRST_VALUE always returns the very first row in the entire window, no matter how many rows down you currently are. Real-life use: \"how does each order compare to this customer's very first order\" is a genuinely different (and common) question from \"how does it compare to their previous one.\"" },

      { type: 'heading', content: 'A frame-clause gotcha with LAST_VALUE' },
      { type: 'code', language: 'sql', content: `-- This usually does NOT do what people expect
SELECT customer_id, order_date, total_amount,
  LAST_VALUE(total_amount) OVER (
    PARTITION BY customer_id ORDER BY order_date
  ) AS last_order_amount
FROM orders;

-- The fix: explicitly widen the frame to the whole partition
SELECT customer_id, order_date, total_amount,
  LAST_VALUE(total_amount) OVER (
    PARTITION BY customer_id ORDER BY order_date
    RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
  ) AS last_order_amount
FROM orders;` },
      { type: 'callout', kind: 'warning', content: 'By default, a window\'s "frame" only extends from the start of the partition up to the current row — so LAST_VALUE without an explicit frame just returns the current row itself, not the actual last row. This is one of the most common silent mistakes with window functions. Explicitly widening the frame with RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING fixes it.' },

      { type: 'heading', content: 'NTILE: splitting rows into equal buckets' },
      { type: 'paragraph', content: 'NTILE(n) divides the rows in a window into n roughly equal-sized groups, numbered 1 through n. This is exactly how you would calculate quartiles, quintiles, or any other percentile-style split.' },
      { type: 'code', language: 'sql', content: `-- Split customers into 4 groups (quartiles) by total spend
WITH customer_totals AS (
  SELECT customer_id, SUM(total_amount) AS total_spent
  FROM orders
  WHERE status = 'delivered'
  GROUP BY customer_id
)
SELECT customer_id, total_spent,
  NTILE(4) OVER (ORDER BY total_spent DESC) AS spend_quartile
FROM customer_totals;` },
      { type: 'paragraph', content: 'spend_quartile = 1 is the top-spending quarter of customers, exactly the kind of segment a marketing team would target for a "VIP customers" campaign.' },

      { type: 'heading', content: 'Frame clauses, properly explained' },
      { type: 'paragraph', content: 'A frame clause controls exactly which rows within a partition a window function actually looks at, relative to the current row.' },
      { type: 'list', items: [
        'ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW — from the start of the partition up to here (the default for most ordered window functions)',
        'ROWS BETWEEN 2 PRECEDING AND CURRENT ROW — a moving window of exactly 3 rows (seen already in the intermediate track\'s moving average)',
        'ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING — the entire partition, regardless of the current row\'s position',
      ]},

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Split delivered orders into 4 quartiles by total_amount, highest first.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'callout', kind: 'tip', content: "Next module: two set operations that round out what you learned about UNION — finding rows that exist in both result sets, or only in one." },
    ],
  },

  {
    id: 'sql-a-3',
    title: 'INTERSECT and EXCEPT: set operations beyond UNION',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'A quick recap of UNION' },
      { type: 'paragraph', content: 'UNION and UNION ALL stack two result sets on top of each other. INTERSECT and EXCEPT compare two result sets differently — instead of combining everything, they ask "what do both have in common?" or "what is in one but not the other?"' },

      { type: 'heading', content: 'INTERSECT: only rows that appear in both' },
      { type: 'code', language: 'sql', content: `-- Customers who ordered in January AND ordered again in February
SELECT customer_id FROM orders WHERE strftime('%Y-%m', order_date) = '2024-01'
INTERSECT
SELECT customer_id FROM orders WHERE strftime('%Y-%m', order_date) = '2024-02';` },
      { type: 'paragraph', content: 'This answers a genuinely different question than a JOIN would. A JOIN between two filtered lists of the same column would also work here, but INTERSECT reads more directly as "give me whoever shows up on both lists" — exactly the retention question being asked.' },

      { type: 'heading', content: 'EXCEPT: rows in the first, but not the second' },
      { type: 'code', language: 'sql', content: `-- Customers who ordered in January but never came back in February
SELECT customer_id FROM orders WHERE strftime('%Y-%m', order_date) = '2024-01'
EXCEPT
SELECT customer_id FROM orders WHERE strftime('%Y-%m', order_date) = '2024-02';` },
      { type: 'paragraph', content: 'This is a churn question, answered in two lines: everyone who was active in January, minus everyone still active in February, leaves exactly the customers who dropped off.' },

      { type: 'heading', content: 'The same column rules as UNION apply' },
      { type: 'paragraph', content: 'INTERSECT and EXCEPT both require the same number of columns, in compatible types, just like UNION. They compare rows by full value, not by a chosen key — so if you select multiple columns, every column has to match for a row to count as "the same."' },

      { type: 'heading', content: 'Real-life feel: cohort analysis in two lines' },
      { type: 'paragraph', content: '"How many of last month\'s customers are still ordering this month?" is a question every subscription or repeat-purchase business asks constantly. INTERSECT answers the "still here" half, EXCEPT answers the "we lost them" half — together, that is the entire basic retention report.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Find every restaurant that has a delivered order AND a cancelled order (using INTERSECT on restaurant_id).' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'callout', kind: 'tip', content: "Next module: a query you write once and reuse forever, instead of retyping it (or a CTE version of it) in every report — views." },
    ],
  },

  {
    id: 'sql-a-4',
    title: 'Views: saving a query as a reusable virtual table',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'The problem with retyping the same query' },
      { type: 'paragraph', content: 'Imagine five different reports all need "customers who have spent over ₹2,000, with their city and total spend." Without a view, that logic — a JOIN and a GROUP BY and a HAVING — gets copy-pasted into five different places, and if the business definition of "high spender" ever changes, all five need to be found and updated.' },

      { type: 'heading', content: 'Creating a view' },
      { type: 'code', language: 'sql', content: `CREATE VIEW high_value_customers AS
SELECT c.customer_id, c.name, c.city, SUM(o.total_amount) AS total_spent
FROM customers AS c
INNER JOIN orders AS o ON c.customer_id = o.customer_id
WHERE o.status = 'delivered'
GROUP BY c.customer_id, c.name, c.city
HAVING SUM(o.total_amount) > 2000;` },
      { type: 'paragraph', content: 'This does not run the query or store any data yet — it just saves the query itself, under a name, for SQL to re-run automatically every time you reference it.' },

      { type: 'heading', content: 'Querying a view exactly like a table' },
      { type: 'code', language: 'sql', content: `SELECT * FROM high_value_customers ORDER BY total_spent DESC;

SELECT * FROM high_value_customers WHERE city = 'Mumbai';` },
      { type: 'paragraph', content: 'This is the entire point: from here on, high_value_customers behaves like any other table in a FROM clause, including being filtered, sorted, or joined to other tables — but it is always asking the live, underlying tables fresh, every single time.' },

      { type: 'heading', content: 'Views vs tables: no duplicate storage' },
      { type: 'paragraph', content: 'A view stores zero rows of its own. Every time you query it, the database re-runs the saved query against the real, current data. If a new order gets added to the orders table, high_value_customers reflects it on the very next query — no refresh step, no stale data, because there was never a copy to go stale.' },
      { type: 'callout', kind: 'tip', content: "Some databases (PostgreSQL, SQL Server) also offer a materialized view — a view that does pre-calculate and cache its results, trading instant freshness for faster repeated reads on an expensive query. SQLite does not support materialized views directly. The plain view in this module is the one concept that exists almost everywhere." },

      { type: 'heading', content: 'Real-life feel: the dashboard nobody has to maintain' },
      { type: 'paragraph', content: 'A "high value customers" view, once created, can be plugged into a dashboard tool, a weekly export, or another analyst\'s query — and the underlying business logic (what counts as "high value") lives in exactly one place. Change the HAVING threshold once, in the view definition, and every single thing built on top of it updates automatically.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Create a view called active_restaurants showing every restaurant where is_active = 1, then query it filtered to a specific city.' },
      { type: 'playground', language: 'sql', starter: '-- Write your CREATE VIEW statement, then a SELECT from it\n', dataset: 'quickbite' },
      { type: 'callout', kind: 'tip', content: 'A quick mini project next puts recursive CTEs, advanced window functions, set operations, and views to work together, before the track moves into keeping data safe and correct.' },
    ],
  },

  {
    id: 'sql-mp-a-1',
    title: 'Mini Project: Customer Network Report',
    duration: '25 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: 'Four genuinely advanced tools, one connected report: tracing referral networks, ranking with advanced window functions, comparing customer cohorts, and packaging the result as a view.' },
      { type: 'list', items: [
        'Concepts used: WITH RECURSIVE, NTILE, INTERSECT/EXCEPT, CREATE VIEW',
      ]},

      { type: 'heading', content: "Task 1: Trace customer 1's full referral network" },
      { type: 'paragraph', content: "Find every customer who traces back to customer 1 (Aditi Rao), at any depth, using a recursive CTE." },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
WITH RECURSIVE network AS (
  SELECT customer_id, name, referred_by FROM customers WHERE customer_id = 1
  UNION ALL
  SELECT c.customer_id, c.name, c.referred_by
  FROM customers AS c
  INNER JOIN network AS n ON c.referred_by = n.customer_id
)
SELECT * FROM network;` },

      { type: 'heading', content: 'Task 2: Spend quartiles' },
      { type: 'paragraph', content: 'Split every customer into 4 quartiles by total delivered spend, highest-spending quartile first.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
WITH customer_totals AS (
  SELECT customer_id, SUM(total_amount) AS total_spent
  FROM orders WHERE status = 'delivered'
  GROUP BY customer_id
)
SELECT customer_id, total_spent,
  NTILE(4) OVER (ORDER BY total_spent DESC) AS quartile
FROM customer_totals;` },

      { type: 'heading', content: 'Task 3: Who ordered in both January and February' },
      { type: 'paragraph', content: 'Find every customer_id that placed an order in both January 2024 and February 2024.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT customer_id FROM orders WHERE strftime('%Y-%m', order_date) = '2024-01'
INTERSECT
SELECT customer_id FROM orders WHERE strftime('%Y-%m', order_date) = '2024-02';` },

      { type: 'heading', content: 'Task 4: Package it as a view' },
      { type: 'paragraph', content: 'Create a view called returning_customers containing exactly the customer_ids from Task 3.' },
      { type: 'playground', language: 'sql', starter: '-- Write your CREATE VIEW statement here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
CREATE VIEW returning_customers AS
SELECT customer_id FROM orders WHERE strftime('%Y-%m', order_date) = '2024-01'
INTERSECT
SELECT customer_id FROM orders WHERE strftime('%Y-%m', order_date) = '2024-02';

SELECT * FROM returning_customers;` },
    ],
  },

  {
    id: 'sql-a-5',
    title: 'Transactions: BEGIN, COMMIT, and ROLLBACK',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'Why a single statement is not always safe' },
      { type: 'paragraph', content: 'Imagine moving loyalty points from one customer to another: subtract 100 points from customer A, then add 100 points to customer B. That is two separate statements. If the database crashes, loses power, or hits an error between those two statements, customer A loses 100 points that simply vanish — never credited to B. A transaction is how you guarantee that either both statements happen, or neither does.' },

      { type: 'heading', content: 'BEGIN, COMMIT, and ROLLBACK' },
      { type: 'paragraph', content: 'QuickBite does not have a real loyalty_points column, so this module builds a small standalone "loyalty" table to practice on — the pattern itself is identical to whatever real table you would use it on in an actual job.' },
      { type: 'code', language: 'sql', content: `BEGIN TRANSACTION;

UPDATE loyalty SET points = points - 100 WHERE customer_id = 1;
UPDATE loyalty SET points = points + 100 WHERE customer_id = 2;

COMMIT;` },
      { type: 'paragraph', content: 'BEGIN TRANSACTION marks the start of a group of statements that must succeed or fail together. COMMIT makes every change inside it permanent, all at once. If anything goes wrong before COMMIT, ROLLBACK undoes every change made since BEGIN, as if none of it ever happened.' },
      { type: 'code', language: 'sql', content: `BEGIN TRANSACTION;

UPDATE loyalty SET points = points - 100 WHERE customer_id = 1;
-- Imagine an error is detected here, or customer 2 turns out not to exist
ROLLBACK;

-- customer 1's points are exactly what they were before BEGIN -- the
-- partial update never happened, from the database's point of view` },

      { type: 'heading', content: 'ACID, in plain English' },
      { type: 'paragraph', content: 'ACID is the four-letter checklist that a properly-behaving transaction satisfies. You do not need to memorise the formal definitions — you already understand the actual ideas:' },
      { type: 'list', items: [
        'Atomicity — all the statements in a transaction happen together, or none of them do (the loyalty points example)',
        'Consistency — a transaction can never leave the database in a state that violates its own rules (like a CHECK constraint, covered next module)',
        'Isolation — one transaction in progress should not see another transaction\'s half-finished changes (covered properly in the concurrency module later in this track)',
        'Durability — once a transaction commits, the change survives even if the power goes out one second later',
      ]},

      { type: 'heading', content: 'Real-life feel: the bank transfer everyone trusts' },
      { type: 'paragraph', content: 'Every bank transfer in the world is built on exactly this pattern: debit one account, credit another, wrapped in a transaction. No one has ever had money vanish because a transfer was "half-completed" by a system crash — that guarantee exists specifically because of atomicity, the same property this module just taught you to use directly.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Add a loyalty_points column to a temporary copy of the idea, simulate a transfer inside a transaction, then deliberately roll it back and confirm nothing changed.' },
      { type: 'playground', language: 'sql', starter: `-- A small standalone demo table, so we don't touch the real customers table
CREATE TABLE loyalty (customer_id INTEGER, points INTEGER);
INSERT INTO loyalty VALUES (1, 500), (2, 200);

BEGIN TRANSACTION;
UPDATE loyalty SET points = points - 100 WHERE customer_id = 1;
UPDATE loyalty SET points = points + 100 WHERE customer_id = 2;
ROLLBACK;

SELECT * FROM loyalty;
-- TODO: confirm the points are unchanged after the rollback
-- TODO: now try the same transfer again, but COMMIT instead of ROLLBACK
`, dataset: 'quickbite' },
      { type: 'callout', kind: 'tip', content: "Next module: a transaction protects you from a crash mid-operation, but it does not stop you from inserting genuinely invalid data on purpose, like a negative price. That is what constraints and triggers are for." },
    ],
  },

  {
    id: 'sql-a-6',
    title: 'Keeping data correct: constraints and triggers',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'Two ways to stop bad data' },
      { type: 'paragraph', content: 'A constraint is a rule the database enforces automatically, rejecting any INSERT or UPDATE that would break it. A trigger goes further — it runs a small piece of extra logic automatically whenever something happens, like an INSERT, without you having to remember to run that logic yourself every time.' },

      { type: 'heading', content: 'CHECK: a rule on the values themselves' },
      { type: 'code', language: 'sql', content: `CREATE TABLE menu_item_demo (
  item_id INTEGER PRIMARY KEY,
  name TEXT,
  price REAL CHECK (price >= 0)
);

INSERT INTO menu_item_demo VALUES (1, 'Butter Chicken', 350);  -- works fine

-- This one is rejected before it ever reaches the table:
INSERT INTO menu_item_demo VALUES (2, 'Mystery Item', -50);
-- Error: CHECK constraint failed: price >= 0` },
      { type: 'paragraph', content: 'CHECK constraints are the database refusing to even temporarily hold a value that breaks a rule you defined once, at table-creation time — far more reliable than hoping every application that ever writes to this table remembers to validate it.' },

      { type: 'heading', content: 'NOT NULL, UNIQUE, and FOREIGN KEY, as a quick recap' },
      { type: 'list', items: [
        'NOT NULL — this column may never be empty',
        'UNIQUE — no two rows may share the same value in this column (e.g., no two customers with the same email)',
        'FOREIGN KEY — a value in this column must already exist as a real row in another table (e.g., an order\'s customer_id must be a real customer)',
      ]},
      { type: 'code', language: 'sql', content: `CREATE TABLE customer_demo (
  customer_id INTEGER PRIMARY KEY,
  email TEXT UNIQUE NOT NULL
);` },

      { type: 'heading', content: 'Triggers: code that runs automatically' },
      { type: 'paragraph', content: 'A trigger watches a table for a specific event (INSERT, UPDATE, or DELETE) and runs its own SQL automatically every time that event happens — without the application that inserted the row ever needing to know the trigger exists.' },
      { type: 'code', language: 'sql', content: `CREATE TABLE order_log (
  log_id INTEGER PRIMARY KEY,
  order_id INTEGER,
  logged_at TEXT
);

CREATE TRIGGER log_new_order
AFTER INSERT ON orders
BEGIN
  INSERT INTO order_log (order_id, logged_at) VALUES (NEW.order_id, datetime('now'));
END;

-- From this point on, every single new order automatically gets logged --
-- no application code anywhere has to remember to do it.` },
      { type: 'paragraph', content: "NEW refers to the row that was just inserted — NEW.order_id reaches into the exact row that triggered this, the same way a function parameter refers to whatever was passed in." },

      { type: 'heading', content: 'Real-life feel: the audit trail nobody had to remember to write' },
      { type: 'paragraph', content: 'Many real systems use triggers exactly like this to maintain audit logs ("who changed this price, and when"), enforce business rules too complex for a plain CHECK (like "a rider cannot be assigned to two orders with overlapping delivery windows"), or automatically keep a summary column up to date as the detailed data underneath it changes.' },
      { type: 'callout', kind: 'warning', content: "Triggers are powerful, but invisible by nature — anyone reading the application code that does INSERT INTO orders has no way to know a trigger is silently doing extra work unless they specifically go looking in the database for it. Use triggers for genuine data-integrity rules, document them clearly, and avoid hiding important business logic somewhere only a database administrator would think to check." },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Create a small ratings table with a CHECK constraint that only allows values from 1 to 5, then try inserting a value of 9 and observe the rejection.' },
      { type: 'playground', language: 'sql', starter: `CREATE TABLE rating_demo (
  id INTEGER PRIMARY KEY,
  stars INTEGER CHECK (stars BETWEEN 1 AND 5)
);

-- TODO: insert a valid row with stars = 4
-- TODO: try inserting an invalid row with stars = 9, and read the error message
`, dataset: 'quickbite' },
      { type: 'callout', kind: 'tip', content: 'Next module: a different kind of flexibility — storing semi-structured data (a small set of tags, a varying list of attributes) directly inside a column using JSON, instead of forcing it into rigid extra columns.' },
    ],
  },

  {
    id: 'sql-a-7',
    title: 'Working with JSON inside SQL',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'Why JSON shows up inside a relational database' },
      { type: 'paragraph', content: "Most restaurant data fits neatly into columns: name, city, rating. But some attributes are genuinely variable — one restaurant has 2 tags, another has 5, a third has none yet. Adding tag_1, tag_2, tag_3... columns is rigid and wasteful. Storing a small JSON document in a single column is the common, pragmatic middle ground modern relational databases support directly." },

      { type: 'heading', content: "QuickBite's restaurants.metadata column" },
      { type: 'paragraph', content: 'Take a look at the raw column first — it is just text that happens to be valid JSON.' },
      { type: 'code', language: 'sql', content: `SELECT name, metadata FROM restaurants;
-- e.g. Spice Route -> {"tags":["spicy","vegetarian-friendly"],"delivery_radius_km":6}` },

      { type: 'heading', content: 'Pulling a value out with json_extract' },
      { type: 'code', language: 'sql', content: `SELECT name,
  json_extract(metadata, '$.delivery_radius_km') AS radius_km
FROM restaurants;` },
      { type: 'paragraph', content: "The '$.delivery_radius_km' path means \"starting from the root of the JSON document, get the delivery_radius_km field.\" The dollar sign always represents the whole document." },

      { type: 'heading', content: 'Reaching into an array' },
      { type: 'code', language: 'sql', content: `-- The first tag for every restaurant
SELECT name, json_extract(metadata, '$.tags[0]') AS first_tag
FROM restaurants;` },
      { type: 'paragraph', content: 'Square brackets with a number index into a JSON array, exactly like indexing a Python list — [0] is the first item.' },

      { type: 'heading', content: 'Filtering on a JSON value' },
      { type: 'code', language: 'sql', content: `-- Restaurants with a delivery radius of 5km or more
SELECT name FROM restaurants
WHERE json_extract(metadata, '$.delivery_radius_km') >= 5;` },
      { type: 'paragraph', content: 'Once extracted, a JSON value behaves like a normal SQL value — you can compare it, sort by it, or use it in any WHERE clause exactly as if it had been a regular column all along.' },

      { type: 'heading', content: 'Checking if an array contains a value' },
      { type: 'paragraph', content: 'There is no single built-in "does this array contain X" function in plain SQLite JSON1 — the standard approach is json_each, which unpacks a JSON array into one row per element, ready to filter or join against.' },
      { type: 'code', language: 'sql', content: `-- Every restaurant that has "spicy" anywhere in its tags
SELECT DISTINCT r.name
FROM restaurants AS r, json_each(r.metadata, '$.tags') AS tag
WHERE tag.value = 'spicy';` },
      { type: 'paragraph', content: 'json_each treats a JSON array like a tiny table you can join against — here, one row per tag, per restaurant. This is the JSON equivalent of the unpacking idea from your beginner Python course, just running inside SQL.' },

      { type: 'heading', content: 'Real-life feel: flexible attributes without a messy schema' },
      { type: 'paragraph', content: 'Product catalogs, user preferences, and configuration settings are the classic real-world uses of a JSON column — anything where different rows genuinely need different sets of extra fields, and redesigning the table schema every time a new attribute shows up would be impractical.' },
      { type: 'callout', kind: 'tip', content: 'JSON columns are a pragmatic escape hatch, not a replacement for proper columns. If a field is on every row, gets queried constantly, and benefits from an index, it almost always belongs as a real column — reach for JSON specifically when the data is genuinely sparse or variable in shape.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Find every restaurant tagged "vegetarian-friendly", using json_each.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'callout', kind: 'tip', content: 'A quick mini project next combines transactions, constraints, and JSON, before the track moves into serious performance work.' },
    ],
  },

  {
    id: 'sql-mp-a-2',
    title: 'Mini Project: Safe Updates and Flexible Data',
    duration: '25 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: 'Keeping data both safe (transactions, constraints) and flexible (JSON) are two sides of the same coin: trusting what is in your database. This project practices both.' },
      { type: 'list', items: [
        'Concepts used: BEGIN/COMMIT/ROLLBACK, CHECK constraints, triggers, json_extract, json_each',
      ]},

      { type: 'heading', content: 'Task 1: A safe stock transfer' },
      { type: 'paragraph', content: 'Two riders share a single set of delivery bags. Simulate moving 3 bags from rider 301 to rider 302 inside a transaction, and commit it.' },
      { type: 'playground', language: 'sql', starter: `CREATE TABLE rider_bags (rider_id INTEGER, bag_count INTEGER);
INSERT INTO rider_bags VALUES (301, 10), (302, 4);

-- TODO: wrap the transfer in BEGIN TRANSACTION / COMMIT
-- TODO: subtract 3 bags from rider 301, add 3 bags to rider 302
-- TODO: select * from rider_bags to confirm
`, dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution (includes the same setup as the starter, so this
-- works even if you replace the starter code entirely)
CREATE TABLE rider_bags (rider_id INTEGER, bag_count INTEGER);
INSERT INTO rider_bags VALUES (301, 10), (302, 4);

BEGIN TRANSACTION;
UPDATE rider_bags SET bag_count = bag_count - 3 WHERE rider_id = 301;
UPDATE rider_bags SET bag_count = bag_count + 3 WHERE rider_id = 302;
COMMIT;
SELECT * FROM rider_bags;` },

      { type: 'heading', content: 'Task 2: Prevent an impossible value' },
      { type: 'paragraph', content: 'Create a table for menu item discounts with a CHECK constraint ensuring discount_percent is between 0 and 100, then prove it rejects an invalid value.' },
      { type: 'playground', language: 'sql', starter: '-- Write your CREATE TABLE statement, then try inserting an invalid row\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
CREATE TABLE discounts (item_id INTEGER, discount_percent INTEGER CHECK (discount_percent BETWEEN 0 AND 100));
INSERT INTO discounts VALUES (201, 20);     -- works
INSERT INTO discounts VALUES (202, 150);    -- rejected: CHECK constraint failed` },

      { type: 'heading', content: 'Task 3: Find restaurants by tag' },
      { type: 'paragraph', content: 'Find every restaurant tagged "fine-dining", using json_each on the metadata column.' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT DISTINCT r.name
FROM restaurants AS r, json_each(r.metadata, '$.tags') AS tag
WHERE tag.value = 'fine-dining';` },
    ],
  },

  {
    id: 'sql-a-8',
    title: 'Composite and covering indexes',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'A quick recap' },
      { type: 'paragraph', content: 'The intermediate track\'s "first look" at performance covered a single-column index and the SCAN-to-SEARCH change in EXPLAIN QUERY PLAN. Real tables are rarely filtered on just one column, which is exactly what composite indexes are for.' },

      { type: 'heading', content: 'A composite index: more than one column, one index' },
      { type: 'code', language: 'sql', content: `CREATE INDEX idx_orders_customer_status ON orders(customer_id, status);

EXPLAIN QUERY PLAN
SELECT * FROM orders WHERE customer_id = 5 AND status = 'delivered';
-- SEARCH orders USING INDEX idx_orders_customer_status (customer_id=? AND status=?)` },
      { type: 'paragraph', content: 'A composite index on (customer_id, status) is built like a phone book sorted first by customer_id, then by status within each customer — it can satisfy a query filtering on both columns together far faster than two separate single-column indexes could.' },

      { type: 'heading', content: 'Column order matters — a lot' },
      { type: 'paragraph', content: 'A composite index on (customer_id, status) helps a query filtering on customer_id alone, or on customer_id AND status together. It does almost nothing for a query filtering on status alone — the same way a phone book sorted by last-name-then-first-name is useless if all you have is someone\'s first name.' },
      { type: 'code', language: 'sql', content: `-- Helped by idx_orders_customer_status (uses the leading column)
SELECT * FROM orders WHERE customer_id = 5;

-- NOT helped by idx_orders_customer_status (skips the leading column)
SELECT * FROM orders WHERE status = 'delivered';` },
      { type: 'callout', kind: 'warning', content: 'The rule of thumb: put the column you filter on most often, or that narrows the results down the most, first in a composite index. An index on the wrong column order can sit in your database taking up space and slowing down writes, while barely helping any of your actual queries.' },

      { type: 'heading', content: 'Covering indexes: when the index has everything you need' },
      { type: 'paragraph', content: 'If an index contains every column a query needs — both for filtering and for the columns you are selecting — the database can answer the entire query from the index alone, never even touching the actual table.' },
      { type: 'code', language: 'sql', content: `CREATE INDEX idx_orders_covering ON orders(customer_id, status, total_amount);

EXPLAIN QUERY PLAN
SELECT status, total_amount FROM orders WHERE customer_id = 5;
-- SEARCH orders USING COVERING INDEX idx_orders_covering (customer_id=?)` },
      { type: 'paragraph', content: 'Notice the word "COVERING" in the plan — that is SQLite explicitly telling you it never had to look at the orders table itself, because the index already held every value the query needed.' },

      { type: 'heading', content: 'The honest tradeoff: indexes are not free' },
      { type: 'paragraph', content: 'Every index speeds up matching reads, but slightly slows down every INSERT, UPDATE, and DELETE on that table, because the index itself has to be kept up to date too. A table with ten indexes on it can become noticeably slower to write to, even if every individual read is fast. This is why real database design is a deliberate balance, not "add an index on everything."' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Create a composite index on orders(restaurant_id, status), then use EXPLAIN QUERY PLAN to confirm a query filtering on both columns uses it.' },
      { type: 'playground', language: 'sql', starter: '-- Write your CREATE INDEX statement, then an EXPLAIN QUERY PLAN to test it\n', dataset: 'quickbite' },
      { type: 'callout', kind: 'tip', content: "Next module: reading EXPLAIN QUERY PLAN output for more than a single SCAN/SEARCH line — joins, sorts, and what the optimizer is actually choosing between." },
    ],
  },

  {
    id: 'sql-a-9',
    title: 'Reading query plans like an expert',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'Beyond SCAN vs SEARCH' },
      { type: 'paragraph', content: 'A query with a JOIN, a GROUP BY, and an ORDER BY produces a multi-line query plan, not just one. Reading it properly means understanding what each line is doing, and in what order the database actually executes them.' },

      { type: 'heading', content: 'A JOIN\'s query plan' },
      { type: 'code', language: 'sql', content: `EXPLAIN QUERY PLAN
SELECT c.name, o.total_amount
FROM customers AS c
INNER JOIN orders AS o ON c.customer_id = o.customer_id
WHERE c.city = 'Mumbai';
-- SCAN c
-- SEARCH o USING INDEX ... (customer_id=?)` },
      { type: 'paragraph', content: 'Reading top to bottom roughly tells you the order of operations: the database scans customers (filtering for Mumbai), and for each matching customer, searches orders for matches — exactly the "loop over one table, look up matches in the other" mental model JOINs actually use under the hood.' },

      { type: 'heading', content: 'Spotting an expensive sort' },
      { type: 'code', language: 'sql', content: `EXPLAIN QUERY PLAN
SELECT * FROM orders ORDER BY total_amount DESC;
-- SCAN orders
-- USE TEMP B-TREE FOR ORDER BY` },
      { type: 'paragraph', content: '"USE TEMP B-TREE FOR ORDER BY" means SQLite had to build a temporary sorted structure in memory (or on disk, for huge tables) because no index already existed in the right order. An index on total_amount would let it read rows already in sorted order, skipping this step entirely.' },
      { type: 'code', language: 'sql', content: `CREATE INDEX idx_orders_total ON orders(total_amount);

EXPLAIN QUERY PLAN
SELECT * FROM orders ORDER BY total_amount DESC;
-- SCAN orders USING INDEX idx_orders_total
-- (the TEMP B-TREE line is gone)` },

      { type: 'heading', content: 'GROUP BY and the optimizer' },
      { type: 'code', language: 'sql', content: `EXPLAIN QUERY PLAN
SELECT restaurant_id, COUNT(*) FROM orders GROUP BY restaurant_id;
-- SCAN orders USING INDEX ... (if a suitable index exists)
-- or: SCAN orders + USE TEMP B-TREE FOR GROUP BY (if it does not)` },
      { type: 'paragraph', content: 'The same logic as ORDER BY applies to GROUP BY: without a helpful index, SQLite needs a temporary structure to gather rows into their groups efficiently.' },

      { type: 'heading', content: 'Real-life feel: diagnosing a report that suddenly got slow' },
      { type: 'paragraph', content: 'A genuinely common real scenario: a report query ran fine for months, then started taking 30 seconds as the table grew past a few million rows. Running EXPLAIN QUERY PLAN on it and seeing an unexpected SCAN (instead of a SEARCH) or a TEMP B-TREE line is usually the first and fastest way to find exactly which part of the query is the actual bottleneck, instead of guessing.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Run EXPLAIN QUERY PLAN on a query joining orders to restaurants and grouping by city. Identify any TEMP B-TREE lines, then add an index that removes one of them.' },
      { type: 'playground', language: 'sql', starter: `EXPLAIN QUERY PLAN
SELECT res.city, SUM(o.total_amount)
FROM orders AS o
INNER JOIN restaurants AS res ON o.restaurant_id = res.restaurant_id
GROUP BY res.city;
`, dataset: 'quickbite' },
      { type: 'callout', kind: 'tip', content: "Next module: some of the most common ways perfectly valid SQL still ends up slow — and the specific rewrites that fix each one." },
    ],
  },

  {
    id: 'sql-a-10',
    title: 'Common query anti-patterns and how to rewrite them',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'Valid SQL is not the same as good SQL' },
      { type: 'paragraph', content: 'Every query in this module runs and returns a correct answer. Each one also has a specific, well-known performance problem, and a known rewrite that fixes it — exactly the kind of pattern recognition that separates "I can write a query that works" from "I can write a query that works well at scale."' },

      { type: 'heading', content: 'Anti-pattern 1: functions on the filtered column' },
      { type: 'code', language: 'sql', content: `-- Slow: wrapping the column in a function blocks index usage
SELECT * FROM customers WHERE UPPER(city) = 'MUMBAI';

-- Fast: keep the column bare, transform the literal instead (or store
-- the data already normalised, like consistently-cased city names)
SELECT * FROM customers WHERE city = 'Mumbai';` },
      { type: 'paragraph', content: 'An index is built on a column\'s actual stored values. The moment you wrap that column in UPPER(), LOWER(), or any other function, the database can no longer match it directly against the index — it typically has to fall back to scanning every row and applying the function to each one.' },

      { type: 'heading', content: 'Anti-pattern 2: SELECT * when you need 2 columns' },
      { type: 'code', language: 'sql', content: `-- Wasteful on a wide table
SELECT * FROM orders WHERE customer_id = 5;

-- Reads and transfers only what is actually needed
SELECT order_id, total_amount FROM orders WHERE customer_id = 5;` },
      { type: 'paragraph', content: "This is the same advice from the beginner track, but it matters more here: it can also be the difference between a query that can use a covering index (Module 8) and one that cannot, because the covering index never included every column SELECT * would demand." },

      { type: 'heading', content: 'Anti-pattern 3: OR across different columns' },
      { type: 'code', language: 'sql', content: `-- Hard for the optimizer to use a single clean index for
SELECT * FROM orders WHERE customer_id = 5 OR rider_id = 301;

-- Often faster: split into two indexed lookups, combined with UNION
SELECT * FROM orders WHERE customer_id = 5
UNION
SELECT * FROM orders WHERE rider_id = 301;` },
      { type: 'paragraph', content: 'An OR across two different columns often cannot use a single index efficiently for both halves at once. Splitting it into two separate, individually-indexable queries joined with UNION frequently outperforms the single OR query on a large table, even though it looks like "more work" on the page.' },

      { type: 'heading', content: 'Anti-pattern 4: a correlated subquery where a JOIN would do' },
      { type: 'code', language: 'sql', content: `-- Re-runs the subquery once per outer row
SELECT name FROM restaurants AS r
WHERE (SELECT COUNT(*) FROM orders AS o WHERE o.restaurant_id = r.restaurant_id) > 5;

-- Often faster: let the optimizer plan it as a single join + aggregation
SELECT r.name
FROM restaurants AS r
INNER JOIN orders AS o ON r.restaurant_id = o.restaurant_id
GROUP BY r.name
HAVING COUNT(*) > 5;` },
      { type: 'paragraph', content: 'Both queries are correct. The correlated version conceptually re-checks every restaurant one at a time; the JOIN + GROUP BY version lets the optimizer consider the whole operation at once, which is frequently (not always — always check with EXPLAIN QUERY PLAN) the faster plan on larger tables.' },

      { type: 'heading', content: 'The actual discipline: measure, don\'t guess' },
      { type: 'callout', kind: 'warning', content: "These four patterns are common, well-documented tendencies — not absolute laws. The only way to know whether a specific rewrite actually helped on your specific data and your specific database engine is to check EXPLAIN QUERY PLAN before and after, exactly like every 'Try it yourself' in this track has trained you to do. Treat this module as a list of prime suspects to check, not a checklist to blindly apply everywhere." },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Rewrite this query to avoid wrapping the filtered column in a function, then confirm with EXPLAIN QUERY PLAN that it changed from a SCAN to a SEARCH (after creating an index on city).' },
      { type: 'playground', language: 'sql', starter: `CREATE INDEX idx_restaurants_city ON restaurants(city);

EXPLAIN QUERY PLAN
SELECT * FROM restaurants WHERE UPPER(city) = 'MUMBAI';

-- TODO: rewrite the query above so it can actually use the index
`, dataset: 'quickbite' },
      { type: 'callout', kind: 'tip', content: 'A quick mini project next puts indexing and query-plan reading to work together, before the track\'s final lesson on what happens when two queries run at the same time.' },
    ],
  },

  {
    id: 'sql-mp-a-3',
    title: 'Mini Project: Diagnose and Fix Slow Queries',
    duration: '25 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: 'This project is a performance audit in miniature: build the right indexes, read what EXPLAIN QUERY PLAN actually says, and rewrite one query that has a real anti-pattern in it.' },
      { type: 'list', items: [
        'Concepts used: composite indexes, covering indexes, EXPLAIN QUERY PLAN, anti-pattern rewriting',
      ]},

      { type: 'heading', content: 'Task 1: Build the right composite index' },
      { type: 'paragraph', content: 'A common query filters orders by restaurant_id and status together. Create the composite index that helps it, then confirm with EXPLAIN QUERY PLAN.' },
      { type: 'playground', language: 'sql', starter: '-- Write your CREATE INDEX statement, then verify it with EXPLAIN QUERY PLAN\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
CREATE INDEX idx_orders_restaurant_status ON orders(restaurant_id, status);

EXPLAIN QUERY PLAN
SELECT * FROM orders WHERE restaurant_id = 101 AND status = 'delivered';` },

      { type: 'heading', content: 'Task 2: Make it a covering index' },
      { type: 'paragraph', content: 'A dashboard query only ever needs order_id and total_amount, filtered by restaurant_id and status. Build a covering index for exactly this query.' },
      { type: 'playground', language: 'sql', starter: '-- Write your CREATE INDEX statement, then verify with EXPLAIN QUERY PLAN\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
CREATE INDEX idx_orders_covering2 ON orders(restaurant_id, status, order_id, total_amount);

EXPLAIN QUERY PLAN
SELECT order_id, total_amount FROM orders WHERE restaurant_id = 101 AND status = 'delivered';
-- Should mention COVERING INDEX` },

      { type: 'heading', content: 'Task 3: Rewrite the anti-pattern' },
      { type: 'paragraph', content: 'This query wraps the filtered column in a function. Rewrite it so it can use a plain index on cuisine_type.' },
      { type: 'playground', language: 'sql', starter: `CREATE INDEX idx_restaurants_cuisine ON restaurants(cuisine_type);

-- Original (cannot use the index):
-- SELECT * FROM restaurants WHERE LOWER(cuisine_type) = 'indian';

-- TODO: write a version of this query that CAN use the index
`, dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT * FROM restaurants WHERE cuisine_type = 'Indian';` },
    ],
  },

  {
    id: 'sql-a-11',
    title: 'Concurrency and locking, conceptually',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'What happens when two queries run at the same time' },
      { type: 'paragraph', content: 'Every query so far in this entire SQL track has run alone, with nothing else touching the database at the same moment. Real production databases are never this quiet — dozens, sometimes thousands, of queries run simultaneously. This module is about what happens at the moments those queries collide.' },

      { type: 'heading', content: 'The problem in one scenario' },
      { type: 'paragraph', content: 'Two customers try to order the very last unit of a popular menu item at almost the same instant. Both queries check "is there stock left?", both see "yes," and both proceed to place an order — even though only one unit actually existed. Without any protection, this genuinely happens; it is one of the most common real bugs in e-commerce and food delivery systems.' },

      { type: 'heading', content: 'Locks: shared vs exclusive' },
      { type: 'paragraph', content: 'A lock is how a database stops two operations from stepping on each other. A shared lock lets multiple queries read the same data at once (reading does not conflict with other reading). An exclusive lock is needed to write, and blocks everyone else — both other writes and, depending on the isolation level, sometimes other reads — until it is released.' },
      { type: 'code', language: 'sql', content: `BEGIN IMMEDIATE TRANSACTION;
-- "IMMEDIATE" tells SQLite to take a lock right away, rather than waiting
-- until the first actual write, reducing the chance of two transactions
-- both proceeding partway before discovering they conflict

UPDATE menu_items SET price = price WHERE item_id = 201;  -- (a stand-in write)
COMMIT;` },

      { type: 'heading', content: 'Isolation levels, in plain English' },
      { type: 'paragraph', content: 'Isolation levels are different answers to the question "how much should one transaction be allowed to see of another transaction\'s unfinished work?" — from most permissive (and fastest) to strictest (and safest):' },
      { type: 'list', items: [
        'Read Uncommitted — you can see other transactions\' changes before they even commit (rare in practice, risks reading data that gets rolled back moments later)',
        'Read Committed — you only ever see changes that have actually been committed (the common default in many databases)',
        'Repeatable Read — if you read the same row twice in one transaction, you get the same answer both times, even if another transaction changed it in between',
        'Serializable — the strictest level: transactions behave as if they ran one at a time, in some order, even though they actually overlapped',
      ]},
      { type: 'paragraph', content: 'The general tradeoff is consistent across every database: stricter isolation means fewer surprising bugs, but more transactions end up waiting on each other (or failing and needing a retry), which can mean lower overall throughput under heavy load.' },

      { type: 'heading', content: 'Deadlocks: when two transactions wait on each other forever' },
      { type: 'paragraph', content: 'A deadlock happens when transaction A is waiting for a lock that transaction B holds, while B is simultaneously waiting for a lock that A holds — neither can ever proceed. Real databases detect this automatically and forcibly fail one of the two transactions (which then has to retry), rather than letting both wait forever.' },
      { type: 'callout', kind: 'tip', content: "A practical habit that avoids most deadlocks: when a piece of application code needs to update multiple tables (or multiple rows) inside one transaction, always touch them in the same consistent order every time, everywhere in your codebase. Most real-world deadlocks come from two different parts of an application locking the same two tables in opposite order." },

      { type: 'heading', content: 'Real-life feel: the last-item-in-stock race condition' },
      { type: 'paragraph', content: "The fix for the earlier scenario — two customers ordering the last unit — is exactly this module's content applied: the stock check and the stock decrement need to happen inside one transaction, with a lock that prevents a second transaction from also seeing 'stock available' until the first transaction has fully committed (or rolled back) its decision." },

      { type: 'heading', content: 'Why this module has no live coding exercise' },
      { type: 'paragraph', content: "This platform's SQL playground runs one query at a time, in a single browser tab — there is no second, truly simultaneous connection to demonstrate an actual lock conflict against. Every other module in this entire SQL track gave you something to run and observe directly; this one is intentionally the exception, because the concept itself only exists when two things happen at once. Understanding the vocabulary (locks, isolation levels, deadlocks) is what lets you read documentation and reason about a production incident — actually tuning isolation levels is something you will configure on a real multi-user database, not practice in a single-connection playground." },
    ],
  },

  {
    id: 'sql-a-capstone',
    title: 'Capstone: The QuickBite Platform Audit',
    duration: '60 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Practice time — no new concepts here' },
      { type: 'paragraph', content: "You've finished every lesson in this track. This capstone is meant to be done after the rest of the course: one connected platform audit covering recursive CTEs, advanced window functions, set operations, views, transactions, constraints, JSON, and serious performance work. Nothing here is new — it's all about combining what you already know." },
      { type: 'callout', kind: 'tip', content: 'Try every task yourself before checking the sample solution underneath it.' },

      { type: 'heading', content: 'Project 1 (Easy)' },
      { type: 'paragraph', content: "The scenario: QuickBite's data team wants a structural audit of the platform before a board presentation — referral network health, customer segments, and packaged views leadership can reuse." },

      { type: 'heading', content: "Task 1: Full referral network size" },
      { type: 'paragraph', content: "For every customer who has referred at least one other person, find the total size of their downstream referral network (everyone who traces back to them, at any depth)." },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
WITH RECURSIVE downstream AS (
  SELECT customer_id AS root_id, customer_id, referred_by FROM customers
  UNION ALL
  SELECT d.root_id, c.customer_id, c.referred_by
  FROM customers AS c
  INNER JOIN downstream AS d ON c.referred_by = d.customer_id
)
SELECT root_id, COUNT(*) - 1 AS network_size
FROM downstream
GROUP BY root_id
HAVING COUNT(*) - 1 > 0;` },

      { type: 'heading', content: 'Task 2: Customer spend quartiles, packaged as a view' },
      { type: 'paragraph', content: 'Create a view called customer_segments showing each customer\'s total delivered spend and their spend quartile (NTILE(4)).' },
      { type: 'playground', language: 'sql', starter: '-- Write your CREATE VIEW statement here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
CREATE VIEW customer_segments AS
WITH customer_totals AS (
  SELECT customer_id, SUM(total_amount) AS total_spent
  FROM orders WHERE status = 'delivered'
  GROUP BY customer_id
)
SELECT customer_id, total_spent, NTILE(4) OVER (ORDER BY total_spent DESC) AS quartile
FROM customer_totals;

SELECT * FROM customer_segments;` },

      { type: 'heading', content: 'Task 3: Restaurants tagged both "spicy" and "popular"' },
      { type: 'paragraph', content: 'Using json_each twice (or INTERSECT), find restaurants tagged with both "spicy" and "popular".' },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
SELECT r.restaurant_id, r.name
FROM restaurants AS r, json_each(r.metadata, '$.tags') AS tag
WHERE tag.value = 'spicy'
INTERSECT
SELECT r.restaurant_id, r.name
FROM restaurants AS r, json_each(r.metadata, '$.tags') AS tag
WHERE tag.value = 'popular';` },

      { type: 'heading', content: 'Project 2 (Hard)' },
      { type: 'paragraph', content: "The scenario: leadership liked Project 1, and now wants the operational and data-integrity side covered too — safe stock updates, protections against bad data, and a serious look at where the platform's queries would slow down at 100x the current data volume." },

      { type: 'heading', content: 'Task 4: A safe, all-or-nothing rider reassignment' },
      { type: 'paragraph', content: "Riders sometimes need every one of their currently-active orders transferred to another rider at once (e.g., they log off mid-shift). Simulate reassigning every order currently belonging to rider 304 over to rider 301, wrapped in a transaction." },
      { type: 'playground', language: 'sql', starter: '-- Write your query here\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
BEGIN TRANSACTION;
UPDATE orders SET rider_id = 301 WHERE rider_id = 304;
COMMIT;

SELECT * FROM orders WHERE rider_id = 301;` },

      { type: 'heading', content: 'Task 5: A constraint that protects order integrity' },
      { type: 'paragraph', content: 'Create a small demo orders_v2 table with a CHECK constraint ensuring total_amount can never be negative, and prove it rejects a bad insert.' },
      { type: 'playground', language: 'sql', starter: '-- Write your CREATE TABLE statement, then try an invalid insert\n', dataset: 'quickbite' },
      { type: 'code', language: 'sql', content: `-- Sample solution
CREATE TABLE orders_v2 (order_id INTEGER, total_amount REAL CHECK (total_amount >= 0));
INSERT INTO orders_v2 VALUES (1, 500);   -- works
INSERT INTO orders_v2 VALUES (2, -50);   -- rejected` },

      { type: 'heading', content: 'Task 6: The query that would not survive 100x the data' },
      { type: 'paragraph', content: 'Find a query anywhere in this track\'s lessons that filters with a function wrapped around a column (like UPPER() or LOWER()), explain in 2-3 sentences why it would get progressively slower as the orders or restaurants table grows, and write the corrected version.' },
      { type: 'playground', language: 'sql', starter: '-- Write the corrected query here, and add a comment explaining the fix\n', dataset: 'quickbite' },
      { type: 'callout', kind: 'tip', content: "There's no single sample solution here — this task is about judgment, not syntax. A reasonable answer references Module 10's WHERE UPPER(city) = 'MUMBAI' anti-pattern: wrapping a column in a function prevents the database from using an index on that column, forcing a full table scan that gets linearly slower as the table grows. The fix is comparing against a properly-cased literal instead, or normalising the data\'s casing once at write time." },

      { type: 'heading', content: "You're done with the SQL Advanced track" },
      { type: 'paragraph', content: "Across all three tracks, you have gone from your first SELECT to recursive hierarchies, transactional safety, semi-structured JSON data, and genuine performance judgment. That is the complete, real range of what working SQL professionals — analysts, data engineers, and backend developers alike — actually use day to day. The depth from here is specialisation: a specific database engine's advanced features, a specific industry's data model, or going deeper into the database internals this track has only introduced." },
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
   PYTHON — INTERMEDIATE TRACK (11 modules + 3 mini projects + capstone)
   Live pandas / NumPy / matplotlib / requests-style fetch / BeautifulSoup,
   all running for real in-browser via Pyodide.
   ════════════════════════════════════════════════════════════════ */
const PYTHON_INTERMEDIATE = [
  {
    id: 'py-i-1',
    title: 'Why pandas? Your first DataFrame',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'The problem with lists of dictionaries' },
      { type: 'paragraph', content: 'In the beginner track, you represented a table of data as a list of dictionaries — one dictionary per row. That pattern works, but the moment you want to filter, sort, group, or calculate across hundreds of rows, you end up writing loop after loop by hand. pandas is a library built specifically to make that kind of work feel like a single line of code instead of ten.' },

      { type: 'heading', content: 'Meet the DataFrame' },
      { type: 'paragraph', content: 'A DataFrame is pandas\' version of a table — rows and columns, exactly like an Excel sheet or a SQL table, except you can manipulate it directly in Python code.' },
      { type: 'code', language: 'python', content: `import pandas as pd

data = {
    "city": ["Mumbai", "Delhi", "Bengaluru"],
    "sales": [120000, 95000, 150000]
}

df = pd.DataFrame(data)
print(df)
# Output:
#         city   sales
# 0     Mumbai  120000
# 1      Delhi   95000
# 2  Bengaluru  150000` },
      { type: 'paragraph', content: 'Notice the "import pandas as pd" line — pd is the universal nickname everyone uses for pandas, the same way Excel users just say "VLOOKUP" without spelling out "Vertical Lookup." You will see pd. in front of almost every pandas command.' },

      { type: 'heading', content: 'Reading real data with read_csv' },
      { type: 'paragraph', content: 'Typing out a dictionary by hand is fine for a toy example, but real data almost always arrives as a CSV file — exactly like the ones you read in the beginner track\'s files module. pandas reads an entire CSV into a DataFrame in one line.' },
      { type: 'code', language: 'python', content: `import pandas as pd
import io

csv_text = """order_id,region,category,product,quantity,unit_price
1,North,Electronics,Wireless Mouse,2,799
2,South,Apparel,Cotton T-Shirt,3,599
3,West,Electronics,Laptop Stand,1,1499
4,North,Grocery,Coffee Beans,5,899
"""

df = pd.read_csv(io.StringIO(csv_text))
print(df)` },
      { type: 'paragraph', content: 'io.StringIO lets you treat a piece of text as if it were a file, which is why this works without ever touching a real file on disk. In a real job, you would write pd.read_csv("sales.csv") and point it at an actual file — the rest of pandas behaves identically either way.' },

      { type: 'heading', content: 'Looking at your data: head, shape, info' },
      { type: 'paragraph', content: 'The very first thing every analyst does after loading data is look at it — not all of it, just enough to sanity-check that it loaded correctly.' },
      { type: 'code', language: 'python', content: `print(df.head())       # first 5 rows (use df.head(10) for the first 10)
print(df.shape)        # (rows, columns) -- e.g. (4, 6)
print(df.columns)      # the column names
print(df.info())       # column names, types, and how many non-empty values each has` },
      { type: 'paragraph', content: 'df.info() is particularly useful for spotting problems early — if a column you expected to be full of numbers shows up as "object" (pandas\' word for text), or a column has fewer non-null values than the total row count, that is your first sign the data is messier than it looks.' },

      { type: 'heading', content: 'Picking a single column' },
      { type: 'code', language: 'python', content: `print(df["product"])          # one column, as a pandas Series
print(df["unit_price"].mean())  # the average unit price across all rows
print(df["unit_price"].sum())   # the total of the unit_price column` },
      { type: 'paragraph', content: 'df["product"] returns something called a Series — think of it as a single column of a DataFrame, with the same row-by-row superpowers (you can call .mean(), .sum(), .max() on it directly, no loop required).' },

      { type: 'heading', content: 'Real-life feel: this is just Excel, with code instead of clicking' },
      { type: 'paragraph', content: 'Everything you are doing here — loading a sheet, glancing at the first few rows, averaging a column — is exactly what opening a spreadsheet and scrolling through it accomplishes. The advantage of pandas shows up the moment your "spreadsheet" has 2 million rows: Excel would crawl or refuse to open it, while pandas handles it in the same one line of code.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Load the sample sales data below, then print its shape, its column names, and the average unit_price.' },
      { type: 'playground', language: 'python', starter: `import pandas as pd
import io

csv_text = """order_id,region,category,product,quantity,unit_price
1,North,Electronics,Wireless Mouse,2,799
2,South,Apparel,Cotton T-Shirt,3,599
3,West,Electronics,Laptop Stand,1,1499
4,North,Grocery,Coffee Beans,5,899
5,East,Apparel,Running Shoes,1,3499
"""

df = pd.read_csv(io.StringIO(csv_text))

# TODO: print df.shape
# TODO: print df.columns
# TODO: print the average of the unit_price column
` },
      { type: 'callout', kind: 'tip', content: "Next module: once your data is loaded, the next question is almost always \"show me just the rows I care about\" — filtering and sorting a DataFrame, the pandas way." },
    ],
  },

  {
    id: 'py-i-2',
    title: 'Selecting, filtering, and sorting in pandas',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'From "the whole table" to "just what I need"' },
      { type: 'paragraph', content: 'This module is pandas\' answer to SQL\'s WHERE and ORDER BY, and Excel\'s filters and sort buttons — if you have taken this platform\'s SQL course, almost everything here will feel familiar, just spelled differently.' },

      { type: 'heading', content: 'Selecting specific columns' },
      { type: 'code', language: 'python', content: `# One column -> a Series
df["product"]

# Multiple columns -> a DataFrame (note the double square brackets)
df[["product", "unit_price"]]` },
      { type: 'paragraph', content: 'The double brackets in df[["product", "unit_price"]] are not a typo — the outer brackets mean "select from df," and the inner brackets are a list of the column names you want.' },

      { type: 'heading', content: 'Filtering rows with boolean masks' },
      { type: 'paragraph', content: 'This is the single most important pandas idea: df["unit_price"] > 1000 does not return rows — it returns a column of True/False values, one per row. Wrapping that inside df[...] then keeps only the rows where it was True.' },
      { type: 'code', language: 'python', content: `expensive = df[df["unit_price"] > 1000]
print(expensive)

# Filtering on text
electronics_only = df[df["category"] == "Electronics"]
print(electronics_only)` },
      { type: 'paragraph', content: 'Read df[df["unit_price"] > 1000] like English: "from df, give me the rows where unit_price is greater than 1000." This is the exact same idea as SQL\'s WHERE unit_price > 1000 — just written with brackets instead of a keyword.' },

      { type: 'heading', content: 'Combining conditions with & and |' },
      { type: 'paragraph', content: 'Combining filters needs & (and) and | (or) instead of Python\'s normal and/or keywords, and each condition needs its own parentheses. This trips up almost everyone the first time.' },
      { type: 'code', language: 'python', content: `# Electronics AND over 1000
filtered = df[(df["category"] == "Electronics") & (df["unit_price"] > 1000)]

# North region OR South region
filtered2 = df[(df["region"] == "North") | (df["region"] == "South")]` },
      { type: 'callout', kind: 'warning', content: 'Forgetting the parentheses around each condition is the #1 pandas beginner mistake — df[df["category"] == "Electronics" & df["unit_price"] > 1000] (no inner parentheses) throws a confusing error. Always wrap each condition: (condition1) & (condition2).' },

      { type: 'heading', content: 'A cleaner way to check a list of values: isin' },
      { type: 'code', language: 'python', content: `# Same idea as SQL's WHERE category IN ('Electronics', 'Apparel')
selected = df[df["category"].isin(["Electronics", "Apparel"])]` },

      { type: 'heading', content: 'Sorting with sort_values' },
      { type: 'code', language: 'python', content: `# Cheapest first (ascending is the default)
df.sort_values("unit_price")

# Most expensive first
df.sort_values("unit_price", ascending=False)

# Sort by region first, then by price within each region
df.sort_values(["region", "unit_price"])` },

      { type: 'heading', content: 'Real-life feel: a sales manager\'s daily question' },
      { type: 'paragraph', content: '"Show me every Electronics order over ₹1000, sorted by price, highest first" is a completely normal request. In pandas, that is one line: df[(df["category"] == "Electronics") & (df["unit_price"] > 1000)].sort_values("unit_price", ascending=False) — filter, then sort, chained together exactly like a sentence.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Filter the sample data to orders with quantity greater than 2, then sort the result by unit_price from highest to lowest.' },
      { type: 'playground', language: 'python', starter: `import pandas as pd
import io

csv_text = """order_id,region,category,product,quantity,unit_price
1,North,Electronics,Wireless Mouse,2,799
2,South,Apparel,Cotton T-Shirt,3,599
3,West,Electronics,Laptop Stand,1,1499
4,North,Grocery,Coffee Beans,5,899
5,East,Apparel,Running Shoes,1,3499
6,South,Electronics,Wireless Mouse,4,799
"""

df = pd.read_csv(io.StringIO(csv_text))

# TODO: filter to rows where quantity > 2
# TODO: sort that result by unit_price, highest first
# TODO: print the final result
` },
      { type: 'callout', kind: 'tip', content: 'Next module: real data is never as clean as these examples — missing values, inconsistent capitalisation, and duplicate rows are the normal state of things. Time to clean it up.' },
    ],
  },

  {
    id: 'py-i-3',
    title: 'Cleaning messy data with pandas',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'Real data always needs cleaning' },
      { type: 'paragraph', content: 'Every dataset you will ever load professionally has some combination of: missing values, inconsistent text casing, duplicate rows, and columns stored as the wrong type. This module is the pandas equivalent of the Excel and SQL "cleaning" lessons you have already seen — same problems, pandas\' tools.' },

      { type: 'heading', content: 'Finding missing values' },
      { type: 'code', language: 'python', content: `print(df.isnull())          # True/False for every cell
print(df.isnull().sum())    # how many missing values, per column` },
      { type: 'paragraph', content: 'df.isnull().sum() is the single most useful line in this entire module — run it on any new dataset immediately after loading it, before doing anything else.' },

      { type: 'heading', content: 'Handling missing values' },
      { type: 'code', language: 'python', content: `# Drop any row that has at least one missing value
df_dropped = df.dropna()

# Fill missing values with something specific instead
df_filled = df.fillna({"product": "Unknown Product"})

# Fill a numeric column's missing values with that column's average
df["unit_price"] = df["unit_price"].fillna(df["unit_price"].mean())` },
      { type: 'paragraph', content: 'Which approach is right depends entirely on the question you are answering. Dropping rows is safest when missing data is rare and you cannot reasonably guess the value. Filling with a sensible default (like a category\'s average price) keeps more data usable, but only do this when a reasonable default actually exists.' },

      { type: 'heading', content: 'Fixing inconsistent text' },
      { type: 'paragraph', content: 'This is the exact same problem you cleaned up with TRIM/UPPER/PROPER in the Excel course and SQL course — pandas just has its own names for the same ideas.' },
      { type: 'code', language: 'python', content: `df["product"] = df["product"].str.strip()        # remove extra whitespace
df["product"] = df["product"].str.title()         # Consistent Title Case
df["category"] = df["category"].str.upper()        # ALL CAPS, if that is what you need` },
      { type: 'paragraph', content: 'The .str accessor is what unlocks string methods on an entire column at once — .str.strip() runs Python\'s .strip() on every single value in that column, in one line, instead of a loop.' },

      { type: 'heading', content: 'Removing duplicate rows' },
      { type: 'code', language: 'python', content: `print(df.duplicated().sum())   # how many fully duplicate rows exist
df = df.drop_duplicates()      # keep only the first copy of each` },

      { type: 'heading', content: 'Fixing column types' },
      { type: 'paragraph', content: 'Sometimes a column that should be numeric gets loaded as text — usually because of a stray non-numeric value somewhere in the column, like "N/A" mixed in with real numbers.' },
      { type: 'code', language: 'python', content: `# errors="coerce" turns anything it cannot convert into NaN (missing),
# instead of crashing the whole operation
df["unit_price"] = pd.to_numeric(df["unit_price"], errors="coerce")

# Same idea for dates
df["order_date"] = pd.to_datetime(df["order_date"], errors="coerce")` },
      { type: 'callout', kind: 'tip', content: 'errors="coerce" is worth remembering by name — it is the pandas equivalent of the try/except pattern from your beginner Python course: instead of crashing on the first bad value, it quietly turns problem values into NaN (missing) so you can find and handle them deliberately afterward, rather than losing the whole column to one typo.' },

      { type: 'heading', content: 'Real-life feel: the CSV someone emailed you' },
      { type: 'paragraph', content: 'Picture a CSV exported from someone else\'s system: "wireless mouse" in one row, "Wireless Mouse" in another, a blank cell where a product name should be, and a price column that loaded as text because one row says "799 " with a trailing space. None of this is unusual — it is the normal starting condition of real data, and this module is the toolkit for turning it into something trustworthy.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Clean the messy sample data below: strip and title-case the product column, fill missing prices with the column average, and remove duplicate rows.' },
      { type: 'playground', language: 'python', starter: `import pandas as pd
import io

csv_text = """order_id,product,unit_price
1, wireless mouse ,799
2,Wireless Mouse,799
3,LAPTOP STAND,1499
4,Coffee Beans,
5,running shoes,3499
"""

df = pd.read_csv(io.StringIO(csv_text))

# TODO: strip whitespace and title-case the "product" column
# TODO: fill missing unit_price values with the column's average
# TODO: drop duplicate rows
# TODO: print the cleaned DataFrame
` },
      { type: 'callout', kind: 'tip', content: 'Next module: once your data is clean, the real analysis begins — grouping rows into categories and calculating totals per group, the pandas equivalent of SQL\'s GROUP BY.' },
    ],
  },

  {
    id: 'py-i-4',
    title: 'Grouping and aggregating: groupby and pivot tables',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'From individual rows to insights' },
      { type: 'paragraph', content: 'If you have taken this platform\'s SQL course, you already understand this module conceptually — GROUP BY in SQL and groupby() in pandas solve the exact same problem: "give me one number per category, not one number per row."' },

      { type: 'heading', content: 'Your first groupby' },
      { type: 'code', language: 'python', content: `# Total sales value per category
df["total"] = df["quantity"] * df["unit_price"]
print(df.groupby("category")["total"].sum())` },
      { type: 'paragraph', content: 'Read it in three steps: groupby("category") buckets the rows by category, ["total"] picks which column to calculate on, and .sum() decides what to calculate. Swap .sum() for .mean(), .count(), .max(), or .min() to ask a different question about the same groups.' },

      { type: 'heading', content: 'Grouping by more than one column' },
      { type: 'code', language: 'python', content: `# Total sales per region, per category
print(df.groupby(["region", "category"])["total"].sum())` },

      { type: 'heading', content: 'Multiple statistics at once with agg' },
      { type: 'code', language: 'python', content: `summary = df.groupby("category")["total"].agg(["sum", "mean", "count"])
print(summary)
# Gives you sum, average, and row count, per category, in one table` },

      { type: 'heading', content: 'Pivot tables: the Excel feature, in code' },
      { type: 'paragraph', content: 'If you have built a pivot table in Excel, pivot_table() is doing the literal same thing — categories down the side, another category across the top, and a calculated value filling the grid.' },
      { type: 'code', language: 'python', content: `pivot = df.pivot_table(
    values="total",
    index="region",
    columns="category",
    aggfunc="sum",
    fill_value=0
)
print(pivot)
# Rows = region, columns = category, cells = total sales, 0 where there is no data` },
      { type: 'paragraph', content: 'fill_value=0 matters here — without it, any region/category combination with no orders shows up as NaN (missing), which looks like an error rather than "zero sales," and can break further calculations.' },

      { type: 'heading', content: 'Real-life feel: the monthly report someone always asks for' },
      { type: 'paragraph', content: '"Can you send me total sales by region and category?" is one of the most common requests in any data job. Without groupby, this means manually filtering and summing for every single combination by hand. With it, it is the pivot_table() call above, and it stays correct automatically every time new rows get added to the underlying data.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Calculate total sales (quantity × unit_price) per category, then build a pivot table showing total sales by region and category.' },
      { type: 'playground', language: 'python', starter: `import pandas as pd
import io

csv_text = """order_id,region,category,product,quantity,unit_price
1,North,Electronics,Wireless Mouse,2,799
2,South,Apparel,Cotton T-Shirt,3,599
3,West,Electronics,Laptop Stand,1,1499
4,North,Grocery,Coffee Beans,5,899
5,East,Apparel,Running Shoes,1,3499
6,South,Electronics,Wireless Mouse,4,799
7,North,Home,Table Lamp,2,1299
8,West,Grocery,Green Tea Pack,6,349
"""

df = pd.read_csv(io.StringIO(csv_text))
df["total"] = df["quantity"] * df["unit_price"]

# TODO: print total sales per category, using groupby
# TODO: build and print a pivot table: rows = region, columns = category, values = total
` },
      { type: 'callout', kind: 'tip', content: 'A quick mini project next puts everything from Modules 1-4 to work on one connected dataset, before the track moves on to NumPy and combining multiple tables.' },
    ],
  },

  {
    id: 'py-mp-i-1',
    title: 'Mini Project: Sales Data Explorer',
    duration: '30 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: "You've learned to load, filter, clean, and group data with pandas. This project ties all four together on a single, realistically messy sales dataset for a small retail chain called BrightMart — the kind of dataset that would actually land in a junior analyst's inbox on day one." },
      { type: 'list', items: [
        'Concepts used: read_csv, filtering, str cleaning, fillna/drop_duplicates, groupby, pivot_table',
      ]},

      { type: 'heading', content: 'The dataset' },
      { type: 'paragraph', content: 'Twenty rows of BrightMart sales data — deliberately a little messy, just like Mini Project 1 from the beginner Excel and SQL tracks. Run the starter code below to load it before working through the tasks.' },
      { type: 'code', language: 'python', content: `import pandas as pd
import io

csv_text = """order_id,region,category,product,quantity,unit_price,customer_name
1,North,Electronics,Wireless Mouse,2,799,Aditi Rao
2,South,Apparel,Cotton T-Shirt,3,599,Rohan Kumar
3,West,Electronics,Laptop Stand,1,1499, Sarah Chen
4,North,Grocery,Coffee Beans,5,899,Marcus Johnson
5,East,Apparel,running shoes,1,3499,Priya Sharma
6,South,Electronics,Wireless Mouse,4,799,James Okonkwo
7,North,Home,Table Lamp,2,1299,Yuki Tanaka
8,West,Grocery,Green Tea Pack,6,349,Diego Martinez
9,East,Electronics,Laptop Stand,1,1499,Fatima Al-Sayed
10,South,Home,Throw Pillow,3,599, Liam O'Brien
11,North,Apparel,Cotton T-Shirt,2,599,Aditi Rao
12,West,Electronics,WIRELESS MOUSE,1,799,Rohan Kumar
13,East,Grocery,Coffee Beans,4,899,Sarah Chen
14,South,Home,Table Lamp,1,1299,Marcus Johnson
15,North,Electronics,Laptop Stand,2,1499,Priya Sharma
16,West,Apparel,Running Shoes,1,3499,James Okonkwo
17,East,Home,Throw Pillow,5,599,Yuki Tanaka
18,South,Grocery,Green Tea Pack,3,349,Diego Martinez
19,North,Grocery,,2,899,Fatima Al-Sayed
20,West,Electronics,Wireless Mouse ,3,799,Liam O'Brien
"""

df = pd.read_csv(io.StringIO(csv_text))
print(df.shape)` },

      { type: 'heading', content: 'Task 1: Clean the product column' },
      { type: 'paragraph', content: 'The product column has inconsistent capitalisation ("WIRELESS MOUSE" vs "Wireless Mouse") and stray whitespace. Clean it so every variant of the same product reads identically.' },
      { type: 'playground', language: 'python', starter: `# Reload the dataset, then write your cleaning code below
import pandas as pd
import io

csv_text = """order_id,region,category,product,quantity,unit_price,customer_name
1,North,Electronics,Wireless Mouse,2,799,Aditi Rao
3,West,Electronics,Laptop Stand,1,1499, Sarah Chen
5,East,Apparel,running shoes,1,3499,Priya Sharma
12,West,Electronics,WIRELESS MOUSE,1,799,Rohan Kumar
16,West,Apparel,Running Shoes,1,3499,James Okonkwo
20,West,Electronics,Wireless Mouse ,3,799,Liam O'Brien
"""
df = pd.read_csv(io.StringIO(csv_text))

# Write your code here
` },
      { type: 'code', language: 'python', content: `# Sample solution
df["product"] = df["product"].str.strip().str.title()
print(df["product"].unique())
# Output: ['Wireless Mouse' 'Laptop Stand' 'Running Shoes']` },

      { type: 'heading', content: 'Task 2: Handle the missing product name' },
      { type: 'paragraph', content: 'Order 19 has no product listed. Fill it with the text "Unknown Product" rather than dropping the whole row — the order still represents real revenue.' },
      { type: 'playground', language: 'python', starter: `import pandas as pd
import io

csv_text = """order_id,product
17,Throw Pillow
18,Green Tea Pack
19,
20,Wireless Mouse
"""
df = pd.read_csv(io.StringIO(csv_text))

# Write your code here
` },
      { type: 'code', language: 'python', content: `# Sample solution
df["product"] = df["product"].fillna("Unknown Product")
print(df)` },

      { type: 'heading', content: 'Task 3: Total revenue by category' },
      { type: 'paragraph', content: 'Calculate a "total" column (quantity × unit_price), then find total revenue per category, sorted highest to lowest.' },
      { type: 'playground', language: 'python', starter: `import pandas as pd
import io

csv_text = """order_id,region,category,product,quantity,unit_price,customer_name
1,North,Electronics,Wireless Mouse,2,799,Aditi Rao
2,South,Apparel,Cotton T-Shirt,3,599,Rohan Kumar
3,West,Electronics,Laptop Stand,1,1499,Sarah Chen
4,North,Grocery,Coffee Beans,5,899,Marcus Johnson
5,East,Apparel,Running Shoes,1,3499,Priya Sharma
6,South,Electronics,Wireless Mouse,4,799,James Okonkwo
7,North,Home,Table Lamp,2,1299,Yuki Tanaka
8,West,Grocery,Green Tea Pack,6,349,Diego Martinez
9,East,Electronics,Laptop Stand,1,1499,Fatima Al-Sayed
10,South,Home,Throw Pillow,3,599,Liam O'Brien
11,North,Apparel,Cotton T-Shirt,2,599,Aditi Rao
12,West,Electronics,Wireless Mouse,1,799,Rohan Kumar
13,East,Grocery,Coffee Beans,4,899,Sarah Chen
14,South,Home,Table Lamp,1,1299,Marcus Johnson
15,North,Electronics,Laptop Stand,2,1499,Priya Sharma
16,West,Apparel,Running Shoes,1,3499,James Okonkwo
17,East,Home,Throw Pillow,5,599,Yuki Tanaka
18,South,Grocery,Green Tea Pack,3,349,Diego Martinez
19,North,Grocery,Unknown Product,2,899,Fatima Al-Sayed
20,West,Electronics,Wireless Mouse,3,799,Liam O'Brien
"""
df = pd.read_csv(io.StringIO(csv_text))

# TODO: add a "total" column (quantity * unit_price)
# TODO: print total revenue per category, sorted highest to lowest
` },
      { type: 'code', language: 'python', content: `# Sample solution
df["total"] = df["quantity"] * df["unit_price"]
print(df.groupby("category")["total"].sum().sort_values(ascending=False))` },

      { type: 'heading', content: 'Task 4: A region-by-category pivot table' },
      { type: 'paragraph', content: 'Using the same cleaned data, build a pivot table showing total revenue with regions as rows and categories as columns.' },
      { type: 'playground', language: 'python', starter: `import pandas as pd
import io

csv_text = """order_id,region,category,product,quantity,unit_price,customer_name
1,North,Electronics,Wireless Mouse,2,799,Aditi Rao
2,South,Apparel,Cotton T-Shirt,3,599,Rohan Kumar
3,West,Electronics,Laptop Stand,1,1499,Sarah Chen
4,North,Grocery,Coffee Beans,5,899,Marcus Johnson
5,East,Apparel,Running Shoes,1,3499,Priya Sharma
6,South,Electronics,Wireless Mouse,4,799,James Okonkwo
7,North,Home,Table Lamp,2,1299,Yuki Tanaka
8,West,Grocery,Green Tea Pack,6,349,Diego Martinez
9,East,Electronics,Laptop Stand,1,1499,Fatima Al-Sayed
10,South,Home,Throw Pillow,3,599,Liam O'Brien
11,North,Apparel,Cotton T-Shirt,2,599,Aditi Rao
12,West,Electronics,Wireless Mouse,1,799,Rohan Kumar
13,East,Grocery,Coffee Beans,4,899,Sarah Chen
14,South,Home,Table Lamp,1,1299,Marcus Johnson
15,North,Electronics,Laptop Stand,2,1499,Priya Sharma
16,West,Apparel,Running Shoes,1,3499,James Okonkwo
17,East,Home,Throw Pillow,5,599,Yuki Tanaka
18,South,Grocery,Green Tea Pack,3,349,Diego Martinez
19,North,Grocery,Unknown Product,2,899,Fatima Al-Sayed
20,West,Electronics,Wireless Mouse,3,799,Liam O'Brien
"""
df = pd.read_csv(io.StringIO(csv_text))
df["total"] = df["quantity"] * df["unit_price"]

# TODO: build a pivot table -- rows = region, columns = category,
#       values = total, fill_value = 0
` },
      { type: 'code', language: 'python', content: `# Sample solution
pivot = df.pivot_table(values="total", index="region", columns="category", aggfunc="sum", fill_value=0)
print(pivot)` },

      { type: 'heading', content: 'Task 5: Top customer' },
      { type: 'paragraph', content: 'After cleaning the customer_name column (it has the same stray-whitespace problem as product), find which customer has spent the most overall.' },
      { type: 'playground', language: 'python', starter: `import pandas as pd
import io

csv_text = """order_id,quantity,unit_price,customer_name
1,2,799, Aditi Rao
2,2,599,Aditi Rao
3,1,1499,Rohan Kumar
4,4,799, Rohan Kumar
5,1,3499,Priya Sharma
"""
df = pd.read_csv(io.StringIO(csv_text))
df["total"] = df["quantity"] * df["unit_price"]

# TODO: strip extra whitespace from customer_name
# TODO: find which customer has the highest total spend
` },
      { type: 'code', language: 'python', content: `# Sample solution
df["customer_name"] = df["customer_name"].str.strip()
print(df.groupby("customer_name")["total"].sum().sort_values(ascending=False).head(1))` },
    ],
  },

  {
    id: 'py-i-5',
    title: 'NumPy: fast numerical computing',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'What NumPy actually is' },
      { type: 'paragraph', content: 'NumPy is the library pandas itself is built on top of. Where a Python list can hold anything (numbers, text, mixed together) and is relatively slow for maths, a NumPy array holds only one type of value and is dramatically faster — important once you are working with thousands or millions of numbers.' },

      { type: 'heading', content: 'Creating an array' },
      { type: 'code', language: 'python', content: `import numpy as np

prices = np.array([799, 599, 1499, 899, 3499])
print(prices)
print(prices.mean())   # average
print(prices.sum())    # total
print(prices.max())    # largest
print(prices.std())    # standard deviation -- how spread out the values are` },
      { type: 'paragraph', content: 'If "standard deviation" sounds unfamiliar, this platform\'s Statistics course covers it properly — for now, just know it tells you how spread out a set of numbers is around the average. A small std means everything is close to the average; a large one means there is wide variation.' },

      { type: 'heading', content: 'The real superpower: vectorised operations' },
      { type: 'paragraph', content: 'In plain Python, applying 18% tax to every price means writing a loop. In NumPy, you just write the maths directly on the whole array — no loop at all.' },
      { type: 'code', language: 'python', content: `prices = np.array([799, 599, 1499, 899, 3499])

with_tax = prices * 1.18
print(with_tax)
# array([ 942.82,  706.82, 1768.82, 1060.82, 4128.82])

discounted = prices - (prices * 0.10)
print(discounted)` },
      { type: 'paragraph', content: 'prices * 1.18 applies the multiplication to every single element simultaneously. This is called a vectorised operation, and it is both shorter to write and dramatically faster to run than a for loop over the same data — this is the actual reason NumPy (and pandas, built on top of it) can handle huge datasets that would make plain Python crawl.' },

      { type: 'heading', content: 'Filtering arrays, the NumPy way' },
      { type: 'code', language: 'python', content: `prices = np.array([799, 599, 1499, 899, 3499])

# This is the exact same boolean-mask idea from the pandas filtering module
expensive = prices[prices > 1000]
print(expensive)   # array([1499, 3499])

print(np.sum(prices > 1000))   # 2 -- counts how many values matched` },
      { type: 'paragraph', content: 'This is not a coincidence — pandas\' df[df["price"] > 1000] filtering pattern you learned earlier works because pandas columns are built on NumPy arrays underneath. Learning this syntax here reinforces the exact same mental model.' },

      { type: 'heading', content: 'Useful array-building shortcuts' },
      { type: 'code', language: 'python', content: `print(np.arange(1, 11))        # [1 2 3 4 5 6 7 8 9 10] -- like range(), but an array
print(np.zeros(5))              # [0. 0. 0. 0. 0.]
print(np.round(3.456, 2))       # 3.46
print(np.sqrt(81))               # 9.0` },

      { type: 'heading', content: 'Real-life feel: why this matters at scale' },
      { type: 'paragraph', content: 'On 5 numbers, a Python loop and a NumPy vectorised operation feel identical. On 5 million numbers — a year of transaction-level data for a mid-sized company — the loop can take minutes while the vectorised version takes a fraction of a second, because NumPy runs the actual maths in fast, compiled code instead of Python\'s slower line-by-line execution.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Given an array of order totals, calculate the mean and standard deviation, then find every order above the mean using a boolean mask.' },
      { type: 'playground', language: 'python', starter: `import numpy as np

totals = np.array([1200, 450, 3000, 899, 60, 2100, 750])

# TODO: print the mean
# TODO: print the standard deviation
# TODO: print every value greater than the mean
` },
      { type: 'callout', kind: 'tip', content: "Next module: real analysis almost never lives in one table. Combining a customers table with an orders table — the pandas equivalent of SQL's JOIN — is next." },
    ],
  },

  {
    id: 'py-i-6',
    title: 'Combining datasets: merge, join, and concat',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'When one table is not enough' },
      { type: 'paragraph', content: 'If you have taken this platform\'s SQL course, this entire module is "JOIN, but in pandas." Customer details live in one table, orders live in another, and you need to bring them together to answer real questions.' },

      { type: 'heading', content: 'merge: the pandas equivalent of JOIN' },
      { type: 'code', language: 'python', content: `import pandas as pd

customers = pd.DataFrame({
    "customer_id": [1, 2, 3],
    "name": ["Aditi Rao", "Rohan Kumar", "Priya Sharma"]
})

orders = pd.DataFrame({
    "order_id": [101, 102, 103],
    "customer_id": [1, 2, 1],
    "total": [799, 1499, 599]
})

merged = pd.merge(customers, orders, on="customer_id")
print(merged)` },
      { type: 'paragraph', content: 'on="customer_id" tells pandas which column links the two tables — exactly like SQL\'s ON customers.id = orders.customer_id. By default, pd.merge() behaves like an INNER JOIN: only customers who actually have a matching order appear in the result.' },

      { type: 'heading', content: 'Keeping everyone: the how= argument' },
      { type: 'code', language: 'python', content: `# Keep every customer, even ones with no orders (pandas' LEFT JOIN)
left_merged = pd.merge(customers, orders, on="customer_id", how="left")
print(left_merged)
# Priya Sharma appears with NaN in order_id and total, since she has no orders` },
      { type: 'paragraph', content: 'how="left" is the direct equivalent of SQL\'s LEFT JOIN. how="right", how="outer" (FULL OUTER JOIN), and how="inner" (the default) all exist too, mapping one-to-one with the JOIN types from the SQL course.' },

      { type: 'heading', content: 'When column names do not match' },
      { type: 'code', language: 'python', content: `orders2 = orders.rename(columns={"customer_id": "cust_id"})

merged2 = pd.merge(customers, orders2, left_on="customer_id", right_on="cust_id")` },

      { type: 'heading', content: 'concat: stacking tables instead of joining them' },
      { type: 'paragraph', content: 'merge connects tables sideways (adding columns). concat stacks tables on top of each other (adding rows) — the pandas equivalent of SQL\'s UNION.' },
      { type: 'code', language: 'python', content: `jan_sales = pd.DataFrame({"product": ["Mouse", "Keyboard"], "total": [799, 1200]})
feb_sales = pd.DataFrame({"product": ["Mouse", "Monitor"], "total": [799, 8500]})

all_sales = pd.concat([jan_sales, feb_sales], ignore_index=True)
print(all_sales)
# All 4 rows stacked together; ignore_index=True renumbers the rows cleanly` },

      { type: 'heading', content: 'Real-life feel: the report that needs two tables' },
      { type: 'paragraph', content: '"Show me each customer\'s name next to their total spend" is impossible to answer from either the customers table or the orders table alone — the name lives in one, the spend lives in the other. pd.merge() followed by a groupby (from Module 4) is exactly how this gets solved in two lines.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Merge the two tables below, keeping every customer even if they have no orders, then calculate each customer\'s total spend (customers with no orders should show 0, not NaN — hint: fillna after merging).' },
      { type: 'playground', language: 'python', starter: `import pandas as pd

customers = pd.DataFrame({
    "customer_id": [1, 2, 3, 4],
    "name": ["Aditi Rao", "Rohan Kumar", "Priya Sharma", "Marcus Johnson"]
})

orders = pd.DataFrame({
    "order_id": [101, 102, 103, 104],
    "customer_id": [1, 2, 1, 2],
    "total": [799, 1499, 599, 350]
})

# TODO: merge customers and orders, keeping every customer (how="left")
# TODO: fill any missing "total" values with 0
# TODO: print each customer's total spend, grouped by name
` },
      { type: 'callout', kind: 'tip', content: 'Next module: turning the numbers you can now compute into an actual chart, with matplotlib.' },
    ],
  },

  {
    id: 'py-i-7',
    title: 'Visualizing data with matplotlib',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'Why a chart beats a table' },
      { type: 'paragraph', content: 'A table of 12 monthly revenue numbers takes real effort to read. The same 12 numbers as a line going up and to the right communicates the trend in under a second. matplotlib is Python\'s most widely used charting library, and it works directly with the pandas DataFrames you already know how to build.' },

      { type: 'heading', content: 'Your first chart' },
      { type: 'paragraph', content: 'In this playground, call show_plot() instead of matplotlib\'s usual plt.show() — show_plot() is a small helper already provided here that renders the chart as an actual image in your results panel.' },
      { type: 'code', language: 'python', content: `import matplotlib.pyplot as plt

cities = ["Mumbai", "Delhi", "Bengaluru"]
sales = [120000, 95000, 150000]

fig, ax = plt.subplots()
ax.bar(cities, sales)
ax.set_title("Sales by City")
ax.set_ylabel("Total Sales (₹)")
show_plot()` },
      { type: 'paragraph', content: 'fig, ax = plt.subplots() creates a blank chart canvas (fig) and the actual plotting area on it (ax). Almost every matplotlib chart starts with that exact line.' },

      { type: 'heading', content: 'The chart types you will use most' },
      { type: 'code', language: 'python', content: `# Bar chart -- comparing categories
ax.bar(cities, sales)

# Line chart -- a trend over time
ax.plot(months, monthly_revenue)

# Scatter plot -- the relationship between two numeric columns
ax.scatter(df["quantity"], df["unit_price"])

# Pie chart -- share of a total (use sparingly, same advice as the Excel course)
ax.pie(sales, labels=cities)` },
      { type: 'paragraph', content: 'This is the exact same guidance from the Excel course\'s charting module: bar charts for comparing categories, line charts for trends over time, pie charts only for a handful of categories. The advice does not change just because the tool did.' },

      { type: 'heading', content: 'Charting straight from a pandas DataFrame' },
      { type: 'paragraph', content: 'pandas has a built-in shortcut that skips most of the matplotlib setup — useful for a quick look while you are still exploring data.' },
      { type: 'code', language: 'python', content: `import pandas as pd
import matplotlib.pyplot as plt

df = pd.DataFrame({
    "category": ["Electronics", "Apparel", "Grocery", "Home"],
    "total": [45000, 22000, 18000, 15000]
})

df.plot(kind="bar", x="category", y="total", title="Revenue by Category", legend=False)
show_plot()` },

      { type: 'heading', content: 'Labels, titles, and making a chart readable' },
      { type: 'code', language: 'python', content: `fig, ax = plt.subplots()
ax.bar(cities, sales)
ax.set_title("Monthly Sales by City")
ax.set_xlabel("City")
ax.set_ylabel("Sales (₹)")
plt.xticks(rotation=45)   # angles long labels so they don't overlap
show_plot()` },
      { type: 'callout', kind: 'tip', content: 'A chart with no title and no axis labels forces the reader to guess what they are looking at. Get in the habit of adding both every single time — it takes two extra lines and makes the difference between a chart someone trusts and one they question.' },

      { type: 'heading', content: 'Real-life feel: the slide in tomorrow\'s meeting' },
      { type: 'paragraph', content: 'Almost every business presentation that includes a "revenue by region" or "sales over time" slide started life as exactly this: a pandas groupby to get the numbers, then three or four lines of matplotlib to turn them into the chart that actually ends up on the slide.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Using the category totals below, build a bar chart titled "Revenue by Category" with proper axis labels.' },
      { type: 'playground', language: 'python', starter: `import matplotlib.pyplot as plt

categories = ["Electronics", "Apparel", "Grocery", "Home"]
totals = [45000, 22000, 18000, 15000]

# TODO: create a bar chart of totals by category
# TODO: add a title and axis labels
# TODO: call show_plot()
` },
      { type: 'callout', kind: 'tip', content: 'A quick mini project next combines pandas, NumPy, and matplotlib into one visual report, before the track moves on to pulling data from the outside world.' },
    ],
  },

  {
    id: 'py-mp-i-2',
    title: 'Mini Project: Visual Sales Report',
    duration: '30 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: 'This project combines everything from the last three modules — NumPy for the numbers, merge for combining tables, and matplotlib for the chart — into a small but complete report on BrightMart\'s sales performance.' },
      { type: 'list', items: [
        'Concepts used: NumPy statistics, pd.merge, groupby, matplotlib bar charts',
      ]},

      { type: 'heading', content: 'Task 1: Order value statistics' },
      { type: 'paragraph', content: 'Using NumPy, calculate the mean, standard deviation, and maximum order value from the totals below.' },
      { type: 'playground', language: 'python', starter: `import numpy as np

order_totals = np.array([1598, 1797, 1499, 4495, 3499, 3196, 2598, 2094, 1499, 1797])

# TODO: print the mean, standard deviation, and max
` },
      { type: 'code', language: 'python', content: `# Sample solution
print("Mean:", order_totals.mean())
print("Std Dev:", order_totals.std())
print("Max:", order_totals.max())` },

      { type: 'heading', content: 'Task 2: Merge customers with their orders' },
      { type: 'paragraph', content: 'Merge the two tables below so every customer appears, even ones with no orders yet.' },
      { type: 'playground', language: 'python', starter: `import pandas as pd

customers = pd.DataFrame({
    "customer_id": [1, 2, 3, 4, 5],
    "name": ["Aditi Rao", "Rohan Kumar", "Priya Sharma", "Marcus Johnson", "Yuki Tanaka"]
})

orders = pd.DataFrame({
    "customer_id": [1, 2, 1, 3, 2],
    "category": ["Electronics", "Apparel", "Electronics", "Grocery", "Home"],
    "total": [1598, 1797, 1499, 4495, 2598]
})

# TODO: merge customers and orders with how="left"
# TODO: print the result
` },
      { type: 'code', language: 'python', content: `# Sample solution
merged = pd.merge(customers, orders, on="customer_id", how="left")
print(merged)` },

      { type: 'heading', content: 'Task 3: Revenue per category, charted' },
      { type: 'paragraph', content: 'Group the merged data by category, total the revenue, and build a bar chart of the result.' },
      { type: 'playground', language: 'python', starter: `import pandas as pd
import matplotlib.pyplot as plt

orders = pd.DataFrame({
    "category": ["Electronics", "Apparel", "Electronics", "Grocery", "Home"],
    "total": [1598, 1797, 1499, 4495, 2598]
})

# TODO: group by category and sum the total
# TODO: build a bar chart of the result, with a title and axis labels
# TODO: call show_plot()
` },
      { type: 'code', language: 'python', content: `# Sample solution
by_category = orders.groupby("category")["total"].sum()

fig, ax = plt.subplots()
ax.bar(by_category.index, by_category.values)
ax.set_title("Revenue by Category")
ax.set_xlabel("Category")
ax.set_ylabel("Revenue (₹)")
show_plot()` },
    ],
  },

  {
    id: 'py-i-8',
    title: 'Working with APIs and JSON',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'Where data actually comes from' },
      { type: 'paragraph', content: 'Every dataset so far has been handed to you as a ready-made CSV string. In the real world, a huge amount of data lives on someone else\'s server, and you fetch it on demand through an API (Application Programming Interface) — a defined way for your code to ask another system for data and get a structured answer back.' },

      { type: 'heading', content: 'JSON: the format almost every API speaks' },
      { type: 'paragraph', content: 'JSON (JavaScript Object Notation) looks almost exactly like a Python dictionary — curly braces, key-value pairs, lists in square brackets. That similarity is not an accident; it is why JSON became the standard format for APIs to communicate in.' },
      { type: 'code', language: 'json', content: `{
  "name": "Aditi Rao",
  "city": "Mumbai",
  "is_active": true,
  "orders": [101, 102, 105]
}` },
      { type: 'paragraph', content: 'Once this arrives in Python, it behaves like a regular dictionary — data["name"] gives you "Aditi Rao", data["orders"] gives you the list [101, 102, 105].' },

      { type: 'heading', content: 'Making your first API request' },
      { type: 'paragraph', content: 'pyfetch is this playground\'s way of making a real network request from inside the browser. This example calls a free, public test API that exists specifically for practicing exactly this.' },
      { type: 'code', language: 'python', content: `import pyodide.http

response = await pyodide.http.pyfetch("https://jsonplaceholder.typicode.com/users/1")
data = await response.json()

print(data["name"])
print(data["email"])
print(data["address"]["city"])` },
      { type: 'paragraph', content: 'Notice the await keyword before pyfetch and before .json() — a network request takes time (the request has to travel to a server and back), so Python pauses at await without freezing everything else, then continues once the response actually arrives.' },
      { type: 'callout', kind: 'tip', content: 'In a real Python script running on your own computer (not in this browser playground), you would typically use the requests library instead — response = requests.get(url) followed by response.json(), with no await needed. This playground uses pyfetch specifically because it works safely inside a browser tab; the underlying idea (send a request, get JSON back) is identical either way.' },

      { type: 'heading', content: 'Looping through a list of results' },
      { type: 'paragraph', content: 'Most real APIs return a list of records, not just one — exactly like a table.' },
      { type: 'code', language: 'python', content: `import pyodide.http

response = await pyodide.http.pyfetch("https://jsonplaceholder.typicode.com/users")
users = await response.json()

print(f"Got {len(users)} users")
for user in users[:5]:
    print(f"{user['name']} — {user['company']['name']}")` },

      { type: 'heading', content: 'From JSON straight into a DataFrame' },
      { type: 'paragraph', content: 'Since a JSON list of objects is shaped exactly like the "list of dictionaries" pattern from your beginner course, pandas can turn it directly into a DataFrame — bridging everything you have learned about APIs straight back into everything you have learned about pandas.' },
      { type: 'code', language: 'python', content: `import pyodide.http
import pandas as pd

response = await pyodide.http.pyfetch("https://jsonplaceholder.typicode.com/users")
users = await response.json()

df = pd.DataFrame(users)
print(df[["name", "email"]].head())` },

      { type: 'heading', content: 'Real-life feel: the weather widget, the stock ticker, the delivery tracker' },
      { type: 'paragraph', content: 'Any app feature that shows live, constantly-changing data — today\'s weather, a live stock price, "your order is 10 minutes away" — is almost always an API call happening behind the scenes, fetched, parsed as JSON, and displayed. You now know the exact mechanism behind all of it.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Fetch a single post from the same test API and print its title and body.' },
      { type: 'playground', language: 'python', starter: `import pyodide.http

# TODO: fetch https://jsonplaceholder.typicode.com/posts/1
# TODO: parse the JSON response
# TODO: print the "title" and "body" fields
` },
      { type: 'callout', kind: 'tip', content: "Next module: not every site offers a clean API — sometimes the data you need is only available as a regular web page, and you have to extract it from the HTML yourself. That is web scraping." },
    ],
  },

  {
    id: 'py-i-9',
    title: 'Web scraping basics with BeautifulSoup',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'When there is no API' },
      { type: 'paragraph', content: 'Not every website offers a clean JSON API. Sometimes the only way to get data is to load the actual web page and pull what you need out of its HTML structure. That process is called web scraping, and BeautifulSoup is the most popular Python library for doing it.' },

      { type: 'heading', content: 'A quick refresher on HTML structure' },
      { type: 'paragraph', content: 'HTML is just nested tags — a <ul> (unordered list) contains <li> (list item) tags, a <div> can contain anything, and tags can have attributes like class="price" that help you find exactly the piece you want.' },
      { type: 'code', language: 'html', content: `<div class="product">
  <h3 class="name">Wireless Mouse</h3>
  <span class="price">₹799</span>
</div>` },

      { type: 'heading', content: 'Parsing HTML with BeautifulSoup' },
      { type: 'paragraph', content: 'In a real scraping script, you would fetch the page first (with pyfetch or requests, exactly like the previous module) and then hand the resulting HTML text to BeautifulSoup. Here, we will practice on a small HTML sample directly, since that is the part that actually matters: knowing how to pull structured data out of messy markup.' },
      { type: 'code', language: 'python', content: `from bs4 import BeautifulSoup

html = """
<div class="product"><h3 class="name">Wireless Mouse</h3><span class="price">799</span></div>
<div class="product"><h3 class="name">Laptop Stand</h3><span class="price">1499</span></div>
<div class="product"><h3 class="name">Coffee Beans</h3><span class="price">899</span></div>
"""

soup = BeautifulSoup(html, "html.parser")
print(soup.find("h3").get_text())   # finds the FIRST matching tag: "Wireless Mouse"` },

      { type: 'heading', content: 'find_all: getting every match, not just the first' },
      { type: 'code', language: 'python', content: `products = soup.find_all("div", class_="product")
print(f"Found {len(products)} products")

for product in products:
    name = product.find("h3", class_="name").get_text()
    price = product.find("span", class_="price").get_text()
    print(f"{name}: ₹{price}")` },
      { type: 'paragraph', content: 'class_ (with a trailing underscore) is BeautifulSoup\'s way of matching an HTML class attribute — the underscore exists because class is already a reserved word in Python, used for defining classes elsewhere in the language.' },

      { type: 'heading', content: 'Turning scraped data into a DataFrame' },
      { type: 'paragraph', content: 'Once the data is out of the HTML, it is just another list of dictionaries — feed it straight into pandas, exactly like the API data from the last module.' },
      { type: 'code', language: 'python', content: `from bs4 import BeautifulSoup
import pandas as pd

html = """
<div class="product"><h3 class="name">Wireless Mouse</h3><span class="price">799</span></div>
<div class="product"><h3 class="name">Laptop Stand</h3><span class="price">1499</span></div>
"""

soup = BeautifulSoup(html, "html.parser")
rows = []
for product in soup.find_all("div", class_="product"):
    rows.append({
        "name": product.find("h3", class_="name").get_text(),
        "price": int(product.find("span", class_="price").get_text())
    })

df = pd.DataFrame(rows)
print(df)` },

      { type: 'callout', kind: 'warning', content: "Before scraping any real website, check its terms of service and its robots.txt file (e.g. example.com/robots.txt), which states what the site allows automated tools to access. Scraping a site against its stated rules can get your IP address blocked, and in some cases carries legal risk. Always prefer a real API when one exists — scraping is a last resort, not a first choice." },

      { type: 'heading', content: 'Real-life feel: price comparison sites' },
      { type: 'paragraph', content: 'A price-comparison website that shows "this product across 5 stores" is very often built on scraping — visiting each store\'s product page, pulling out the price and availability with exactly this find/find_all pattern, and repeating it on a schedule to stay current.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Parse the HTML below and print every restaurant name alongside its rating.' },
      { type: 'playground', language: 'python', starter: `from bs4 import BeautifulSoup

html = """
<div class="restaurant"><h3 class="name">Spice Route</h3><span class="rating">4.8</span></div>
<div class="restaurant"><h3 class="name">Tokyo Bites</h3><span class="rating">4.3</span></div>
<div class="restaurant"><h3 class="name">Curry House</h3><span class="rating">4.5</span></div>
"""

soup = BeautifulSoup(html, "html.parser")

# TODO: find every div with class "restaurant"
# TODO: for each one, print the name and rating together
` },
      { type: 'callout', kind: 'tip', content: 'A quick mini project next combines fetching live data and parsing structured data into one small pipeline, before the track wraps up with how working Python developers actually set up their tools.' },
    ],
  },

  {
    id: 'py-mp-i-3',
    title: 'Mini Project: Build a Mini Data Pipeline',
    duration: '30 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: 'A "data pipeline" sounds intimidating, but it is just this: get data from somewhere, turn it into a clean DataFrame, and calculate something useful from it. This project builds one small pipeline from a live API, and one from scraped HTML, since real jobs need both skills.' },
      { type: 'list', items: [
        'Concepts used: pyfetch, JSON parsing, BeautifulSoup, pandas DataFrames',
      ]},

      { type: 'heading', content: 'Task 1: Fetch and summarise live data' },
      { type: 'paragraph', content: 'Fetch every post from the test API, load it into a DataFrame, and count how many posts exist per userId.' },
      { type: 'playground', language: 'python', starter: `import pyodide.http
import pandas as pd

# TODO: fetch https://jsonplaceholder.typicode.com/posts
# TODO: load the result into a DataFrame
# TODO: print how many posts exist per userId, using groupby and count
` },
      { type: 'code', language: 'python', content: `# Sample solution
response = await pyodide.http.pyfetch("https://jsonplaceholder.typicode.com/posts")
posts = await response.json()

df = pd.DataFrame(posts)
print(df.groupby("userId")["id"].count())` },

      { type: 'heading', content: 'Task 2: Scrape, clean, and rank' },
      { type: 'paragraph', content: 'Parse the HTML below into a DataFrame, then find the highest-rated restaurant.' },
      { type: 'playground', language: 'python', starter: `from bs4 import BeautifulSoup
import pandas as pd

html = """
<div class="restaurant"><h3 class="name">Spice Route</h3><span class="rating">4.8</span></div>
<div class="restaurant"><h3 class="name">Tokyo Bites</h3><span class="rating">4.3</span></div>
<div class="restaurant"><h3 class="name">Curry House</h3><span class="rating">4.5</span></div>
<div class="restaurant"><h3 class="name">Pasta Palace</h3><span class="rating">3.0</span></div>
"""

soup = BeautifulSoup(html, "html.parser")

# TODO: parse every restaurant into a list of dicts (name, rating as a float)
# TODO: load the list into a DataFrame
# TODO: print the single highest-rated restaurant
` },
      { type: 'code', language: 'python', content: `# Sample solution
rows = []
for r in soup.find_all("div", class_="restaurant"):
    rows.append({
        "name": r.find("h3", class_="name").get_text(),
        "rating": float(r.find("span", class_="rating").get_text())
    })

df = pd.DataFrame(rows)
print(df.sort_values("rating", ascending=False).head(1))` },

      { type: 'heading', content: 'Task 3: Combine both into one chart' },
      { type: 'paragraph', content: 'Using the restaurant ratings from Task 2, build a bar chart comparing all four restaurants.' },
      { type: 'playground', language: 'python', starter: `from bs4 import BeautifulSoup
import pandas as pd
import matplotlib.pyplot as plt

html = """
<div class="restaurant"><h3 class="name">Spice Route</h3><span class="rating">4.8</span></div>
<div class="restaurant"><h3 class="name">Tokyo Bites</h3><span class="rating">4.3</span></div>
<div class="restaurant"><h3 class="name">Curry House</h3><span class="rating">4.5</span></div>
<div class="restaurant"><h3 class="name">Pasta Palace</h3><span class="rating">3.0</span></div>
"""

soup = BeautifulSoup(html, "html.parser")
rows = []
for r in soup.find_all("div", class_="restaurant"):
    rows.append({
        "name": r.find("h3", class_="name").get_text(),
        "rating": float(r.find("span", class_="rating").get_text())
    })
df = pd.DataFrame(rows)

# TODO: build a bar chart: restaurant name on the x-axis, rating on the y-axis
# TODO: call show_plot()
` },
      { type: 'code', language: 'python', content: `# Sample solution
fig, ax = plt.subplots()
ax.bar(df["name"], df["rating"])
ax.set_title("Restaurant Ratings")
ax.set_ylabel("Rating")
plt.xticks(rotation=30)
show_plot()` },
    ],
  },

  {
    id: 'py-i-10',
    title: 'Jupyter notebooks: a different way of working',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'What a notebook actually is' },
      { type: 'paragraph', content: 'Every playground on this platform already gave you a taste of this: write some code, run just that piece, see the result immediately below it, then write more code building on what you already have. A Jupyter notebook is the real-world, professional version of exactly that workflow, run on your own computer.' },

      { type: 'heading', content: 'Cells: the building block of a notebook' },
      { type: 'paragraph', content: 'A notebook is a sequence of cells. A code cell runs Python, exactly like this platform\'s playgrounds. A markdown cell holds formatted text — headings, bullet points, explanations — letting you mix your analysis with the actual narrative around it, like a lab report that runs.' },
      { type: 'code', language: 'text', content: `[ Markdown cell ]
# Monthly Sales Analysis
Looking at BrightMart's performance for Q1 2024.

[ Code cell ]
import pandas as pd
df = pd.read_csv("sales.csv")
df.head()
   -> shows the actual DataFrame output, right below the cell

[ Markdown cell ]
## Findings
Electronics is the top-performing category this quarter.

[ Code cell ]
df.groupby("category")["total"].sum().sort_values(ascending=False)
   -> shows the actual numbers backing up that claim` },

      { type: 'heading', content: 'Why data scientists love notebooks' },
      { type: 'list', items: [
        'You can run one cell at a time, instantly see if it worked, and fix it before moving to the next step — much faster feedback than running an entire script and waiting',
        'Charts and tables render directly below the code that produced them, not in a separate window',
        'A finished notebook doubles as documentation: anyone (including future you) can read top to bottom and see both the code and the reasoning behind it',
        'It is the standard format for sharing exploratory data analysis — most data science tutorials, Kaggle competition write-ups, and academic data papers are published as notebooks',
      ]},

      { type: 'heading', content: 'Installing and running Jupyter on your own computer' },
      { type: 'paragraph', content: 'This is something you would do on your own machine, not inside this browser-based platform — the next module covers exactly the tool (pip) you would use to install it.' },
      { type: 'code', language: 'text', content: `pip install notebook
jupyter notebook
# This opens a tab in your browser where you create and run .ipynb notebook files` },
      { type: 'callout', kind: 'tip', content: 'JupyterLab and VS Code (with the Jupyter extension) are two very popular ways to actually open and edit notebooks today — "jupyter notebook" launches the original, simplest interface, which is the best starting point while you are still learning.' },

      { type: 'heading', content: 'Notebooks vs scripts: when to use which' },
      { type: 'paragraph', content: 'Notebooks are built for exploration — messing around with data, trying five different approaches, looking at intermediate results along the way. A regular .py script is better once you know exactly what the code needs to do and want it to run reliably, end to end, without a human clicking through cells — for example, a script that runs automatically every night to refresh a report. Most real data work uses both: explore and prototype in a notebook, then move the finished, working logic into a proper script once it is solid.' },

      { type: 'heading', content: 'Real-life feel: you have basically been using one' },
      { type: 'paragraph', content: 'Every "Try it yourself" playground in this course — write code, run it, see the result right there, adjust and run again — is deliberately modeled on the notebook experience. The moment you install Jupyter on your own machine, the workflow itself will already feel completely familiar; only the surroundings change.' },
    ],
  },

  {
    id: 'py-i-11',
    title: 'Virtual environments and managing packages',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'The problem this solves' },
      { type: 'paragraph', content: "Imagine two projects on your computer: one needs pandas version 1.5 because of an old tutorial, and a brand new project needs pandas version 2.2 to use a newer feature. If Python only had one single, global set of installed packages, installing one would break the other. A virtual environment is a separate, isolated set of installed packages, one per project, so they never collide." },

      { type: 'heading', content: 'What a virtual environment actually is' },
      { type: 'paragraph', content: 'It is just a folder containing its own private copy of Python and its own private collection of installed packages, completely separate from your computer\'s main Python installation and from every other project\'s environment.' },

      { type: 'heading', content: 'Creating and activating one' },
      { type: 'code', language: 'text', content: `# Create a virtual environment named "venv" inside your project folder
python -m venv venv

# Activate it (the exact command depends on your operating system)
# macOS / Linux:
source venv/bin/activate

# Windows:
venv\\Scripts\\activate

# Your terminal prompt now shows (venv) at the start, confirming it's active` },
      { type: 'paragraph', content: 'Once activated, any package you install with pip goes into that project\'s private folder, not your computer\'s global Python — leaving every other project completely untouched.' },

      { type: 'heading', content: 'Installing packages with pip' },
      { type: 'code', language: 'text', content: `pip install pandas numpy matplotlib

# See everything currently installed in this environment
pip list

# Save the exact list to a file, so anyone else can recreate it
pip freeze > requirements.txt

# Someone else (or you, on a different computer) recreates your exact setup with:
pip install -r requirements.txt` },
      { type: 'paragraph', content: 'requirements.txt is the single most important habit in this module. It is a plain text list of every package (and often the exact version) a project needs — without it, sharing your code means also having to explain, by hand, everything someone needs to install before it will run.' },

      { type: 'heading', content: 'Real-life feel: "it works on my machine"' },
      { type: 'paragraph', content: 'This is one of the most common frustrations in all of software: code that runs perfectly for you and breaks immediately for a teammate, because their globally-installed pandas is a different version than yours, with some function behaving slightly differently. A requirements.txt file plus a virtual environment per project is the standard fix — it makes "what packages, what versions" an explicit, shareable fact instead of an invisible assumption.' },

      { type: 'heading', content: 'A quick note on conda' },
      { type: 'paragraph', content: 'conda is a popular alternative to venv + pip, especially common in data science specifically, because it can also manage non-Python dependencies (like certain C libraries that NumPy and pandas rely on under the hood) that pip alone sometimes struggles to install cleanly. If you see conda create -n myenv or conda install pandas in someone else\'s instructions, it is solving the exact same isolation problem as venv, just with a different tool.' },

      { type: 'callout', kind: 'tip', content: "You do not need to memorise every pip/venv command right now — what matters is recognising the problem (different projects need different package versions) and knowing the solution exists (a virtual environment per project, with a requirements.txt to make it shareable). The exact commands are a five-second search away whenever you actually need them." },
    ],
  },

  {
    id: 'py-i-capstone',
    title: 'Capstone: The Complete BrightMart Analysis',
    duration: '60 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Practice time — no new concepts here' },
      { type: 'paragraph', content: "You've finished every lesson in this track. This capstone is meant to be done after the rest of the course: one connected analysis covering pandas (loading, filtering, cleaning, grouping, merging), NumPy, and matplotlib — everything except the tooling modules, which are about your own machine rather than a specific skill to practice. Nothing here is new; it is all about combining what you already know." },
      { type: 'callout', kind: 'tip', content: 'Try every task yourself before checking the sample solution underneath it. By this point in the course, you have everything you need to solve each one without help.' },

      { type: 'heading', content: 'Project 1 (Easy)' },
      { type: 'paragraph', content: "The scenario: BrightMart's regional manager wants a clean monthly summary before a leadership meeting. Nothing here needs merging multiple tables yet — just loading, cleaning, and grouping, applied cleanly." },

      { type: 'heading', content: 'Task 1: Load and inspect' },
      { type: 'paragraph', content: 'Load the dataset below and print its shape and the count of missing values per column.' },
      { type: 'playground', language: 'python', starter: `import pandas as pd
import io

csv_text = """order_id,order_date,region,category,product,quantity,unit_price,customer_name
1,2024-01-05,North,Electronics,Wireless Mouse,2,799,Aditi Rao
2,2024-01-07,South,Apparel,Cotton T-Shirt,3,599,Rohan Kumar
3,2024-01-10,West,Electronics,Laptop Stand,1,1499, Sarah Chen
4,2024-01-12,North,Grocery,Coffee Beans,5,899,Marcus Johnson
5,2024-01-15,East,Apparel,running shoes,1,3499,Priya Sharma
6,2024-01-18,South,Electronics,Wireless Mouse,4,799,James Okonkwo
7,2024-01-20,North,Home,Table Lamp,2,1299,Yuki Tanaka
8,2024-01-22,West,Grocery,Green Tea Pack,6,349,Diego Martinez
9,2024-01-25,East,Electronics,Laptop Stand,1,1499,Fatima Al-Sayed
10,2024-01-28,South,Home,Throw Pillow,3,599, Liam O'Brien
11,2024-02-02,North,Apparel,Cotton T-Shirt,2,599,Aditi Rao
12,2024-02-05,West,Electronics,WIRELESS MOUSE,1,799,Rohan Kumar
13,2024-02-08,East,Grocery,Coffee Beans,4,899,Sarah Chen
14,2024-02-10,South,Home,Table Lamp,1,1299,Marcus Johnson
15,2024-02-14,North,Electronics,Laptop Stand,2,1499,Priya Sharma
16,2024-02-18,West,Apparel,Running Shoes,1,3499,James Okonkwo
17,2024-02-20,East,Home,Throw Pillow,5,599,Yuki Tanaka
18,2024-02-22,South,Grocery,Green Tea Pack,3,349,Diego Martinez
19,2024-02-25,North,Grocery,,2,899,Fatima Al-Sayed
20,2024-02-28,West,Electronics,Wireless Mouse ,3,799,Liam O'Brien
"""

df = pd.read_csv(io.StringIO(csv_text))

# TODO: print df.shape
# TODO: print df.isnull().sum()
` },
      { type: 'code', language: 'python', content: `# Sample solution
print(df.shape)
print(df.isnull().sum())` },

      { type: 'heading', content: 'Task 2: Clean the product and customer columns' },
      { type: 'paragraph', content: 'Strip and title-case the product column, fill the one missing product with "Unknown Product", and strip extra whitespace from customer_name.' },
      { type: 'code', language: 'python', content: `# Sample solution
df["product"] = df["product"].str.strip().str.title()
df["product"] = df["product"].fillna("Unknown Product")
df["customer_name"] = df["customer_name"].str.strip()` },

      { type: 'heading', content: 'Task 3: Total revenue by category' },
      { type: 'paragraph', content: 'Add a "total" column and calculate total revenue per category, sorted highest to lowest.' },
      { type: 'code', language: 'python', content: `# Sample solution
df["total"] = df["quantity"] * df["unit_price"]
print(df.groupby("category")["total"].sum().sort_values(ascending=False))` },

      { type: 'heading', content: 'Task 4: Revenue by month' },
      { type: 'paragraph', content: 'Convert order_date to an actual date type, extract the month, and calculate total revenue per month.' },
      { type: 'code', language: 'python', content: `# Sample solution
df["order_date"] = pd.to_datetime(df["order_date"])
df["month"] = df["order_date"].dt.month
print(df.groupby("month")["total"].sum())` },

      { type: 'heading', content: 'Task 5: Chart it' },
      { type: 'paragraph', content: 'Build a bar chart of total revenue by category, with a proper title and axis labels.' },
      { type: 'code', language: 'python', content: `# Sample solution
import matplotlib.pyplot as plt

by_category = df.groupby("category")["total"].sum().sort_values(ascending=False)
fig, ax = plt.subplots()
ax.bar(by_category.index, by_category.values)
ax.set_title("BrightMart Revenue by Category")
ax.set_ylabel("Revenue (₹)")
show_plot()` },

      { type: 'heading', content: 'Project 2 (Hard)' },
      { type: 'paragraph', content: "The scenario: leadership liked Project 1, and now wants a deeper analysis that brings in customer-level data too — something that needs merging multiple tables and a bit more statistical thinking." },

      { type: 'heading', content: 'Task 6: Merge in customer signup data' },
      { type: 'paragraph', content: 'A separate table tracks when each customer signed up. Merge it with the cleaned order data, keeping every order even if a customer\'s signup date is missing.' },
      { type: 'playground', language: 'python', starter: `import pandas as pd

orders = pd.DataFrame({
    "customer_name": ["Aditi Rao", "Rohan Kumar", "Priya Sharma", "Marcus Johnson"],
    "total": [1598, 2796, 3499, 4495]
})

signups = pd.DataFrame({
    "customer_name": ["Aditi Rao", "Rohan Kumar", "Yuki Tanaka"],
    "signup_date": ["2023-11-01", "2023-12-15", "2024-01-20"]
})

# TODO: merge orders and signups, keeping every order (how="left")
# TODO: print the result
` },
      { type: 'code', language: 'python', content: `# Sample solution
merged = pd.merge(orders, signups, on="customer_name", how="left")
print(merged)
# Priya Sharma and Marcus Johnson show NaN for signup_date -- they ordered
# without a signup record on file, which is exactly the kind of gap a real
# analysis needs to surface, not hide.` },

      { type: 'heading', content: 'Task 7: Order value statistics with NumPy' },
      { type: 'paragraph', content: 'Using NumPy, calculate the mean, standard deviation, and the number of orders above the mean.' },
      { type: 'code', language: 'python', content: `# Sample solution
import numpy as np

totals = np.array([1598, 2796, 3499, 4495, 5394, 2097, 1499])
print("Mean:", totals.mean())
print("Std Dev:", totals.std())
print("Orders above mean:", np.sum(totals > totals.mean()))` },

      { type: 'heading', content: 'Task 8: Top region per category' },
      { type: 'paragraph', content: 'Using a pivot table, find which single region generates the most revenue within the Electronics category specifically.' },
      { type: 'code', language: 'python', content: `# Sample solution (continuing with the original BrightMart df from Project 1)
pivot = df.pivot_table(values="total", index="region", columns="category", aggfunc="sum", fill_value=0)
print(pivot["Electronics"].sort_values(ascending=False).head(1))` },

      { type: 'heading', content: "You're done with the Python Intermediate track" },
      { type: 'paragraph', content: "If you worked through both projects, you can now do what a working data analyst actually does day to day: load real, messy data, clean it with intention, combine it with other tables, calculate real statistics, and turn the result into a chart someone outside the data team can actually understand. That is a genuinely significant jump from the beginner track's foundation." },
      { type: 'paragraph', content: "The Advanced track goes further still: organising code into classes, writing decorators and generators, async programming, profiling for real performance bottlenecks, type hints, automated testing, and packaging your work so someone else can actually install and reuse it. That is the difference between a script that works once and code that is genuinely production-ready. When ready, switch to Advanced from the sidebar." },
    ],
  },

]

/* ════════════════════════════════════════════════════════════════
   PYTHON — ADVANCED TRACK (11 modules + 3 mini projects + capstone)
   Builds toward one capstone: a small, tested, packaged data-cleaning
   library called "brightkit," reusing the BrightMart sales theme from
   the intermediate track throughout for continuity.
   ════════════════════════════════════════════════════════════════ */
const PYTHON_ADVANCED = [
  {
    id: 'py-a-1',
    title: 'Object-oriented Python: classes and objects',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'Why bother with classes at all' },
      { type: 'paragraph', content: 'Every beginner and intermediate module so far has used functions and dictionaries to represent data and behaviour separately — a customer was a dictionary, and a function operated on it. A class lets you bundle data and the behaviour that belongs with it into a single, reusable blueprint. Once you have used a class well, going back to scattered dictionaries-and-functions for the same problem feels like a step backward.' },

      { type: 'heading', content: 'Your first class' },
      { type: 'code', language: 'python', content: `class Customer:
    def __init__(self, name, city, total_spent):
        self.name = name
        self.city = city
        self.total_spent = total_spent

aditi = Customer("Aditi Rao", "Mumbai", 79200)
print(aditi.name)
print(aditi.total_spent)` },
      { type: 'paragraph', content: '__init__ runs automatically every time you create a new Customer — it is the "setup" step, filling in self.name, self.city, and self.total_spent for this specific object. self refers to "this particular customer," the same way a printed form has blanks that get filled in differently for every person who fills one out.' },

      { type: 'heading', content: 'Adding behaviour: methods' },
      { type: 'paragraph', content: 'A method is just a function that lives inside a class and automatically has access to that object\'s own data through self.' },
      { type: 'code', language: 'python', content: `class Customer:
    def __init__(self, name, city, total_spent):
        self.name = name
        self.city = city
        self.total_spent = total_spent

    def is_high_value(self):
        return self.total_spent > 50000

    def apply_discount(self, percent):
        discount_amount = self.total_spent * (percent / 100)
        self.total_spent -= discount_amount

aditi = Customer("Aditi Rao", "Mumbai", 79200)
print(aditi.is_high_value())   # True

aditi.apply_discount(10)
print(aditi.total_spent)       # 71280.0 -- the object's own state changed` },
      { type: 'paragraph', content: 'Notice apply_discount changed aditi.total_spent permanently — this is the key difference from a plain function. The object remembers its own state between method calls, the same way a real bank account remembers its balance between transactions.' },

      { type: 'heading', content: 'Class vs instance: the blueprint vs the actual object' },
      { type: 'paragraph', content: 'Customer is the class — the blueprint, written once. aditi is an instance — one actual object built from that blueprint, with its own specific values. You can build as many instances as you want from one class definition, exactly like a cookie cutter (the class) producing many individual cookies (the instances), each one separate.' },
      { type: 'code', language: 'python', content: `rohan = Customer("Rohan Kumar", "Bengaluru", 22000)
priya = Customer("Priya Sharma", "Delhi", 10700)

customers = [aditi, rohan, priya]
for c in customers:
    print(f"{c.name}: high value = {c.is_high_value()}")` },

      { type: 'heading', content: 'Real-life feel: from "a dictionary and three functions" to one class' },
      { type: 'paragraph', content: "In the intermediate track, checking if a customer was high-value meant writing a separate function and remembering to pass the right dictionary into it every time. With a class, is_high_value() travels with the object itself — anyone using a Customer object already has every relevant behaviour available as c.is_high_value(), without needing to know which separate function to import or call." },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Build a Restaurant class with name, city, and rating, plus a method is_top_rated() that returns True if rating is 4.5 or higher.' },
      { type: 'playground', language: 'python', starter: `class Restaurant:
    def __init__(self, name, city, rating):
        self.name = name
        self.city = city
        self.rating = rating

    # TODO: write an is_top_rated() method

spice_route = Restaurant("Spice Route", "Mumbai", 4.8)
pasta_palace = Restaurant("Pasta Palace", "Delhi", 3.0)

# TODO: print whether each restaurant is top rated
` },
      { type: 'callout', kind: 'tip', content: 'Next module: classes rarely exist in total isolation — building a new class on top of an existing one, reusing what already works, is where object-oriented Python starts paying off in earnest.' },
    ],
  },

  {
    id: 'py-a-2',
    title: 'Inheritance and composition',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'Two ways to build on existing code' },
      { type: 'paragraph', content: 'Once you have one working class, real programs almost always need something slightly different but related. Inheritance lets a new class automatically receive everything an existing class already does, then add or change specific parts. Composition takes a different approach: building a class out of other objects, rather than extending one.' },

      { type: 'heading', content: 'Inheritance: "is a" relationships' },
      { type: 'paragraph', content: 'A PremiumCustomer is a Customer, just with something extra. Inheritance lets you say that directly in code.' },
      { type: 'code', language: 'python', content: `class Customer:
    def __init__(self, name, city, total_spent):
        self.name = name
        self.city = city
        self.total_spent = total_spent

    def is_high_value(self):
        return self.total_spent > 50000

class PremiumCustomer(Customer):
    def __init__(self, name, city, total_spent, membership_tier):
        super().__init__(name, city, total_spent)
        self.membership_tier = membership_tier

    def discount_rate(self):
        return 0.15 if self.membership_tier == "Gold" else 0.10

aditi = PremiumCustomer("Aditi Rao", "Mumbai", 79200, "Gold")
print(aditi.is_high_value())     # True -- inherited directly from Customer
print(aditi.discount_rate())     # 0.15 -- defined only on PremiumCustomer` },
      { type: 'paragraph', content: 'class PremiumCustomer(Customer): means "PremiumCustomer inherits from Customer." super().__init__(...) calls the parent class\'s own setup code, so you do not have to retype self.name = name and the rest — you only write the new part (membership_tier) that PremiumCustomer adds on top.' },

      { type: 'heading', content: 'Overriding a method' },
      { type: 'paragraph', content: 'A subclass can also replace a parent method entirely, when the inherited behaviour is not quite right.' },
      { type: 'code', language: 'python', content: `class PremiumCustomer(Customer):
    def __init__(self, name, city, total_spent, membership_tier):
        super().__init__(name, city, total_spent)
        self.membership_tier = membership_tier

    def is_high_value(self):
        # Premium customers count as high-value at a lower threshold
        return self.total_spent > 20000

rohan = PremiumCustomer("Rohan Kumar", "Bengaluru", 22000, "Silver")
print(rohan.is_high_value())   # True -- uses PremiumCustomer's own version, not Customer's` },

      { type: 'heading', content: 'Composition: "has a" relationships' },
      { type: 'paragraph', content: 'Not every relationship is "is a." A Restaurant has a list of MenuItem objects — a restaurant is not itself a kind of menu item. Composition builds a class out of other objects as attributes, instead of inheriting from them.' },
      { type: 'code', language: 'python', content: `class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

class Restaurant:
    def __init__(self, name):
        self.name = name
        self.menu = []   # a Restaurant HAS a list of MenuItem objects

    def add_item(self, item):
        self.menu.append(item)

    def total_menu_value(self):
        return sum(item.price for item in self.menu)

spice_route = Restaurant("Spice Route")
spice_route.add_item(MenuItem("Butter Chicken", 350))
spice_route.add_item(MenuItem("Garlic Naan", 60))
print(spice_route.total_menu_value())   # 410` },

      { type: 'heading', content: 'Choosing between them' },
      { type: 'paragraph', content: 'A common, genuinely useful rule of thumb: prefer composition unless inheritance clearly models a real "is a" relationship. Overusing inheritance for convenience (rather than a genuine type relationship) is one of the most common sources of confusing, hard-to-change object-oriented code in real projects — "favour composition over inheritance" is a famous piece of advice in software design for exactly this reason.' },

      { type: 'heading', content: 'Real-life feel: modelling a business accurately, not just conveniently' },
      { type: 'paragraph', content: 'A real customer loyalty system genuinely has regular customers and premium customers who share most behaviour but differ in specific, well-defined ways — that is exactly what inheritance is for. A restaurant genuinely contains a changeable list of menu items — that is exactly what composition is for. Picking the one that matches the real relationship keeps the code understandable months later, not just today.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Build a Rider class with name and city, then a PartTimeRider subclass that adds a max_hours_per_week attribute and overrides a method.' },
      { type: 'playground', language: 'python', starter: `class Rider:
    def __init__(self, name, city):
        self.name = name
        self.city = city

    def employment_type(self):
        return "Full-time"

# TODO: create PartTimeRider(Rider) with an extra max_hours_per_week attribute
# TODO: override employment_type() to return "Part-time"

karan = Rider("Karan Mehta", "Mumbai")
# TODO: create a PartTimeRider instance and print both riders' employment_type()
` },
      { type: 'callout', kind: 'tip', content: "Next module: making your own classes print nicely, compare correctly, and work with Python's built-in functions like len() and +, instead of behaving like a black box." },
    ],
  },

  {
    id: 'py-a-3',
    title: "Dunder methods: making your classes feel native",
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'The problem with the default printout' },
      { type: 'code', language: 'python', content: `class Customer:
    def __init__(self, name, total_spent):
        self.name = name
        self.total_spent = total_spent

aditi = Customer("Aditi Rao", 79200)
print(aditi)
# <__main__.Customer object at 0x7f3b1c0a4d90> -- not remotely useful` },
      { type: 'paragraph', content: 'By default, printing an object just shows its memory address — completely useless for debugging or display. Dunder methods (short for "double underscore," like __init__) let you define exactly how your class behaves with built-in Python operations like print(), ==, len(), and more.' },

      { type: 'heading', content: '__repr__ and __str__: controlling how an object prints' },
      { type: 'code', language: 'python', content: `class Customer:
    def __init__(self, name, total_spent):
        self.name = name
        self.total_spent = total_spent

    def __repr__(self):
        return f"Customer(name={self.name!r}, total_spent={self.total_spent})"

aditi = Customer("Aditi Rao", 79200)
print(aditi)   # Customer(name='Aditi Rao', total_spent=79200)` },
      { type: 'paragraph', content: '__repr__ is what print() and the playground\'s output fall back to when there is no separate __str__ defined. The {self.name!r} format (note the !r) shows the value the way Python itself would display it, quotes included — a small, conventional touch that makes debugging output instantly readable.' },

      { type: 'heading', content: '__eq__: defining what "equal" means for your class' },
      { type: 'code', language: 'python', content: `class Customer:
    def __init__(self, name, total_spent):
        self.name = name
        self.total_spent = total_spent

    def __eq__(self, other):
        return self.name == other.name and self.total_spent == other.total_spent

a = Customer("Aditi Rao", 79200)
b = Customer("Aditi Rao", 79200)
print(a == b)   # True -- without __eq__, this would be False (different objects in memory)` },
      { type: 'paragraph', content: 'Without __eq__, Python compares objects by identity (are they literally the same object in memory), not by their actual data — two separately-created Customer objects with identical data would otherwise count as "not equal," which rarely matches what you actually mean by "the same customer."' },

      { type: 'heading', content: '__len__: making len() work on your own class' },
      { type: 'code', language: 'python', content: `class Restaurant:
    def __init__(self, name, menu):
        self.name = name
        self.menu = menu

    def __len__(self):
        return len(self.menu)

spice_route = Restaurant("Spice Route", ["Butter Chicken", "Naan", "Lassi"])
print(len(spice_route))   # 3 -- len() now works directly on a Restaurant object` },

      { type: 'heading', content: 'A shortcut for simple data-holding classes: @dataclass' },
      { type: 'paragraph', content: 'If a class is mostly just holding data (like Customer above), Python\'s @dataclass decorator writes __init__, __repr__, and __eq__ for you automatically, based only on the attributes you list.' },
      { type: 'code', language: 'python', content: `from dataclasses import dataclass

@dataclass
class Customer:
    name: str
    total_spent: float

a = Customer("Aditi Rao", 79200)
b = Customer("Aditi Rao", 79200)
print(a)        # Customer(name='Aditi Rao', total_spent=79200) -- __repr__ for free
print(a == b)   # True -- __eq__ for free` },
      { type: 'paragraph', content: "@dataclass does not replace everything from this module — you still write your own methods like is_high_value() normally — it just removes the repetitive boilerplate (__init__, __repr__, __eq__) for the common case of a class that is mostly a labelled bundle of values." },

      { type: 'heading', content: 'Real-life feel: why this matters for debugging' },
      { type: 'paragraph', content: 'The very first thing you do when something goes wrong is usually print(some_object) to see its current state. A class with no __repr__ gives you a useless memory address right when you need information the most — a few lines of dunder methods (or one @dataclass decorator) is the difference between a debugging session that takes 30 seconds and one that takes 10 minutes.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Add a __repr__ and __eq__ to the MenuItem class below, then confirm two separately-created items with the same name and price compare equal.' },
      { type: 'playground', language: 'python', starter: `class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    # TODO: add __repr__ returning something like MenuItem(name='Naan', price=60)
    # TODO: add __eq__ comparing name and price

a = MenuItem("Garlic Naan", 60)
b = MenuItem("Garlic Naan", 60)
print(a)
print(a == b)
` },
      { type: 'callout', kind: 'tip', content: 'Next module: a completely different way to modify a function\'s behaviour without rewriting it — decorators.' },
    ],
  },

  {
    id: 'py-a-4',
    title: 'Decorators: wrapping functions cleanly',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'The problem decorators solve' },
      { type: 'paragraph', content: 'Imagine you want to print how long every single data-processing function takes to run. You could add timing code inside every function — but that means editing every function, repeating the same four lines everywhere, and remembering to do it again for every new function you write. A decorator lets you write that timing logic exactly once, then attach it to any function with a single line.' },

      { type: 'heading', content: 'Functions are values too' },
      { type: 'paragraph', content: "Before decorators make sense, one fact has to click: in Python, a function is just a value, like a number or a string. You can pass it into another function, or have a function return another function." },
      { type: 'code', language: 'python', content: `def greet():
    return "Hello!"

say_hi = greet   # no parentheses -- this stores the FUNCTION ITSELF, not its result
print(say_hi())  # "Hello!" -- calling it through the new name works identically` },

      { type: 'heading', content: 'Your first decorator' },
      { type: 'code', language: 'python', content: `import time

def time_it(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@time_it
def slow_total(numbers):
    total = 0
    for n in numbers:
        total += n
    return total

print(slow_total(range(1000000)))` },
      { type: 'paragraph', content: '@time_it above slow_total is exactly equivalent to writing slow_total = time_it(slow_total). The decorator takes your original function in, builds a new wrapper function around it (that adds timing before and after), and hands that wrapper back — your function gains the new behaviour without a single line of its own code changing.' },

      { type: 'heading', content: 'The *args, **kwargs piece' },
      { type: 'paragraph', content: 'A decorator usually has no idea what arguments the function it wraps will need. *args and **kwargs let wrapper accept absolutely any combination of positional and keyword arguments, and pass them straight through to the real function untouched.' },

      { type: 'heading', content: 'A genuinely useful second example: caching results' },
      { type: 'code', language: 'python', content: `def cache(func):
    stored_results = {}
    def wrapper(n):
        if n not in stored_results:
            print(f"Calculating for {n}...")
            stored_results[n] = func(n)
        else:
            print(f"Using cached result for {n}")
        return stored_results[n]
    return wrapper

@cache
def slow_square(n):
    time.sleep(0.5)   # pretend this is expensive
    return n * n

print(slow_square(5))   # Calculating for 5... -> 25
print(slow_square(5))   # Using cached result for 5 -> 25 (instant)` },
      { type: 'paragraph', content: 'This pattern — remembering results you have already calculated so you never redo the same expensive work twice — is called memoization, and it is exactly what Python\'s built-in functools.lru_cache decorator does for you automatically, without writing the dictionary yourself.' },
      { type: 'code', language: 'python', content: `from functools import lru_cache

@lru_cache
def slow_square(n):
    time.sleep(0.5)
    return n * n

print(slow_square(5))   # slow the first time
print(slow_square(5))   # instant -- lru_cache remembered it` },

      { type: 'heading', content: 'Real-life feel: logging, timing, and access control, applied everywhere at once' },
      { type: 'paragraph', content: 'Production systems use decorators constantly for cross-cutting concerns — things that apply to many functions at once: @login_required on a web route, @retry on a flaky network call, @log_errors on anything that might fail. Writing this logic once as a decorator, instead of copy-pasting it into every function that needs it, is the entire value proposition.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Write a decorator called log_call that prints the function\'s name before it runs, then apply it to a simple function.' },
      { type: 'playground', language: 'python', starter: `def log_call(func):
    def wrapper(*args, **kwargs):
        # TODO: print something like "Calling: <function name>"
        # TODO: actually call func and return its result
        pass
    return wrapper

@log_call
def add(a, b):
    return a + b

print(add(2, 3))
` },
      { type: 'callout', kind: 'tip', content: 'A quick mini project next puts classes, inheritance, dunder methods, and decorators together, before the track moves into memory-efficient data processing with generators.' },
    ],
  },

  {
    id: 'py-mp-a-1',
    title: 'Mini Project: A Small Customer Loyalty System',
    duration: '30 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: 'This project builds a small but complete object-oriented customer loyalty system for BrightMart, combining everything from the last four modules into one connected piece of code.' },
      { type: 'list', items: [
        'Concepts used: classes, inheritance, dunder methods, decorators',
      ]},

      { type: 'heading', content: 'Task 1: A Customer base class' },
      { type: 'paragraph', content: 'Build a Customer class with name, city, and total_spent, plus a __repr__ and an is_high_value() method (over 50000).' },
      { type: 'playground', language: 'python', starter: `class Customer:
    def __init__(self, name, city, total_spent):
        self.name = name
        self.city = city
        self.total_spent = total_spent

    # TODO: add __repr__
    # TODO: add is_high_value()

aditi = Customer("Aditi Rao", "Mumbai", 79200)
print(aditi)
print(aditi.is_high_value())
` },
      { type: 'code', language: 'python', content: `# Sample solution
class Customer:
    def __init__(self, name, city, total_spent):
        self.name = name
        self.city = city
        self.total_spent = total_spent

    def __repr__(self):
        return f"Customer(name={self.name!r}, city={self.city!r}, total_spent={self.total_spent})"

    def is_high_value(self):
        return self.total_spent > 50000

aditi = Customer("Aditi Rao", "Mumbai", 79200)
print(aditi)
print(aditi.is_high_value())` },

      { type: 'heading', content: 'Task 2: A PremiumCustomer subclass' },
      { type: 'paragraph', content: 'Build a PremiumCustomer subclass adding a membership_tier, and a discount_rate() method (0.15 for "Gold", otherwise 0.10).' },
      { type: 'playground', language: 'python', starter: `class Customer:
    def __init__(self, name, city, total_spent):
        self.name = name
        self.city = city
        self.total_spent = total_spent

    def is_high_value(self):
        return self.total_spent > 50000

# TODO: create PremiumCustomer(Customer) with membership_tier and discount_rate()

rohan = PremiumCustomer("Rohan Kumar", "Bengaluru", 22000, "Gold")
print(rohan.is_high_value())
print(rohan.discount_rate())
` },
      { type: 'code', language: 'python', content: `# Sample solution
class Customer:
    def __init__(self, name, city, total_spent):
        self.name = name
        self.city = city
        self.total_spent = total_spent

    def is_high_value(self):
        return self.total_spent > 50000

class PremiumCustomer(Customer):
    def __init__(self, name, city, total_spent, membership_tier):
        super().__init__(name, city, total_spent)
        self.membership_tier = membership_tier

    def discount_rate(self):
        return 0.15 if self.membership_tier == "Gold" else 0.10

rohan = PremiumCustomer("Rohan Kumar", "Bengaluru", 22000, "Gold")
print(rohan.is_high_value())
print(rohan.discount_rate())` },

      { type: 'heading', content: 'Task 3: A logging decorator for every discount applied' },
      { type: 'paragraph', content: 'Write a decorator called log_discount that prints a message every time a function calculating a discount is called, then apply it to a calculate_discount function.' },
      { type: 'playground', language: 'python', starter: `# TODO: write log_discount(func) that prints "Calculating discount..." before calling func

@log_discount
def calculate_discount(total, rate):
    return total * rate

print(calculate_discount(79200, 0.15))
` },
      { type: 'code', language: 'python', content: `# Sample solution
def log_discount(func):
    def wrapper(*args, **kwargs):
        print("Calculating discount...")
        return func(*args, **kwargs)
    return wrapper

@log_discount
def calculate_discount(total, rate):
    return total * rate

print(calculate_discount(79200, 0.15))` },
    ],
  },

  {
    id: 'py-a-5',
    title: 'Generators and iterators: memory-efficient data processing',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'The problem with building a giant list' },
      { type: 'paragraph', content: 'Imagine processing a year of BrightMart transactions — millions of rows. If a function builds the entire result as a list before returning it, every single row sits in memory at once, even if you only ever look at one row at a time. A generator produces values one at a time, on demand, without ever holding the full collection in memory simultaneously.' },

      { type: 'heading', content: 'A function that returns a list' },
      { type: 'code', language: 'python', content: `def get_squares(n):
    result = []
    for i in range(n):
        result.append(i * i)
    return result

squares = get_squares(5)
print(squares)   # [0, 1, 4, 9, 16] -- the entire list exists in memory at once` },

      { type: 'heading', content: 'The same thing as a generator' },
      { type: 'code', language: 'python', content: `def get_squares(n):
    for i in range(n):
        yield i * i

squares = get_squares(5)
print(squares)          # <generator object get_squares at 0x...>
print(list(squares))    # [0, 1, 4, 9, 16] -- values are produced one at a time, on demand

for sq in get_squares(5):
    print(sq)            # 0 1 4 9 16, printed one at a time as each is generated` },
      { type: 'paragraph', content: 'yield is the only difference from a normal function. The moment Python sees yield anywhere in a function, that function becomes a generator — calling it does not run the code immediately; it returns a generator object that produces one value every time something asks it for the next one (like a for loop, or list()).' },

      { type: 'heading', content: 'Why this actually matters: memory' },
      { type: 'code', language: 'python', content: `import sys

def squares_list(n):
    return [i * i for i in range(n)]

def squares_gen(n):
    for i in range(n):
        yield i * i

list_version = squares_list(1000000)
gen_version = squares_gen(1000000)

print(sys.getsizeof(list_version), "bytes")   # a large number -- a million numbers, all in memory
print(sys.getsizeof(gen_version), "bytes")    # under 200 bytes -- just the generator's bookkeeping` },
      { type: 'paragraph', content: 'The generator version takes essentially the same tiny amount of memory whether n is 5 or 5 million, because it never builds the full collection — it only ever holds "where am I up to, and how do I produce the next one" in memory at any given moment.' },

      { type: 'heading', content: 'Generator expressions: the comprehension-style shortcut' },
      { type: 'code', language: 'python', content: `squares_list_comp = [i * i for i in range(10)]    # a list comprehension -- builds it all now
squares_gen_exp = (i * i for i in range(10))      # a generator expression -- builds nothing yet

print(sum(squares_gen_exp))   # 285 -- sum() pulls values one at a time, never needing the full list` },
      { type: 'paragraph', content: 'Swapping square brackets for round brackets turns a list comprehension into a generator expression — useful any time you are about to immediately consume the values (with sum(), a for loop, or similar) and never actually need the full list sitting in memory.' },

      { type: 'heading', content: "Real-life feel: processing a file too big to fit in memory" },
      { type: 'paragraph', content: 'A genuinely common real scenario: a CSV export with 50 million rows, larger than your computer\'s available memory. Reading it line by line with a generator (rather than loading the whole file into a list first) is often the only way the processing can run at all, regardless of how fast your computer is.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Write a generator function called high_value_orders that yields only the order totals above 2000 from a list, one at a time.' },
      { type: 'playground', language: 'python', starter: `order_totals = [1598, 450, 3000, 899, 2500, 60, 4495]

def high_value_orders(totals):
    # TODO: use yield to produce only the values above 2000, one at a time
    pass

for total in high_value_orders(order_totals):
    print(total)
` },
      { type: 'callout', kind: 'tip', content: 'Next module: a pattern you have already used dozens of times without naming it — the with statement — and how to build your own version of it for any "set up, then guaranteed clean up" situation.' },
    ],
  },

  {
    id: 'py-a-6',
    title: 'Context managers: the with statement',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'A pattern you already know' },
      { type: 'paragraph', content: 'Back in the beginner track, you learned with open("file.txt") as f: — and were told it automatically closes the file afterward, even if an error happens partway through. That guarantee is called a context manager, and this module shows you exactly how it works under the hood, so you can build your own for any similar "set up, then guaranteed clean up" situation.' },

      { type: 'heading', content: 'Building a context manager with a class' },
      { type: 'code', language: 'python', content: `class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        import time
        elapsed = time.time() - self.start
        print(f"Elapsed: {elapsed:.4f} seconds")

with Timer():
    total = sum(range(1000000))
    print(total)
# Elapsed: 0.0123 seconds  (printed automatically when the "with" block ends)` },
      { type: 'paragraph', content: '__enter__ runs at the start of the with block (the "set up" step) and __exit__ runs automatically at the end — even if the code inside the block crashes with an exception. This is exactly the same guarantee open() gives you for files, now built by hand for timing instead.' },

      { type: 'heading', content: 'The simpler way: @contextmanager' },
      { type: 'paragraph', content: 'Writing a full class with __enter__ and __exit__ is more ceremony than most simple cases need. The contextlib module\'s @contextmanager decorator lets you write the same thing as a single function with a yield in the middle.' },
      { type: 'code', language: 'python', content: `from contextlib import contextmanager
import time

@contextmanager
def timer():
    start = time.time()
    yield
    elapsed = time.time() - start
    print(f"Elapsed: {elapsed:.4f} seconds")

with timer():
    total = sum(range(1000000))
    print(total)` },
      { type: 'paragraph', content: 'Everything before yield runs at the start of the with block (like __enter__); everything after yield runs at the end (like __exit__) — even if the code inside raises an error, the after-yield part still runs, exactly like a file always getting closed.' },

      { type: 'heading', content: 'Real-life feel: database connections, locks, and temporary settings' },
      { type: 'paragraph', content: 'Beyond files, context managers show up constantly for: database connections (open it, guarantee it closes even on error), locks in concurrent code (acquire it, guarantee it releases), and temporarily changing a setting (switch it, guarantee it switches back afterward, no matter what happens in between).' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Using @contextmanager, write a context manager called suppress_errors that catches and prints any exception raised inside the with block, instead of letting it crash the program.' },
      { type: 'playground', language: 'python', starter: `from contextlib import contextmanager

@contextmanager
def suppress_errors():
    try:
        yield
    except Exception as e:
        # TODO: print a friendly message including str(e)
        pass

with suppress_errors():
    result = 10 / 0   # this would normally crash the program

print("Program kept running after the error!")
` },
      { type: 'callout', kind: 'tip', content: 'Next module: handling several slow operations — like multiple API calls — at the same time instead of one after another. Async programming.' },
    ],
  },

  {
    id: 'py-a-7',
    title: 'Async programming: async and await',
    duration: '40 min',
    sections: [
      { type: 'heading', content: 'The problem async solves' },
      { type: 'paragraph', content: "In the intermediate track's API module, every pyfetch call waited for one response before moving to the next line. If you need data from 5 different restaurants' APIs, fetching them one at a time means waiting for all 5 round-trips back to back. Async programming lets you start all 5 requests at once and wait for whichever finishes, instead of queuing them up one after another." },

      { type: 'heading', content: 'async def and await: the vocabulary' },
      { type: 'code', language: 'python', content: `import asyncio

async def fetch_restaurant_data(name, delay):
    print(f"Starting fetch for {name}...")
    await asyncio.sleep(delay)   # standing in for a real network request
    print(f"Finished fetch for {name}")
    return f"{name} data"

asyncio.run(fetch_restaurant_data("Spice Route", 1))` },
      { type: 'paragraph', content: 'async def marks a function as a coroutine — a function that can pause partway through and let other code run, instead of blocking everything until it finishes. await is where it actually pauses: "wait for this to finish, but let other things happen while waiting."' },

      { type: 'heading', content: 'The actual payoff: running things concurrently' },
      { type: 'code', language: 'python', content: `import asyncio
import time

async def fetch_restaurant_data(name, delay):
    await asyncio.sleep(delay)
    return f"{name} data ready"

async def main():
    start = time.time()
    results = await asyncio.gather(
        fetch_restaurant_data("Spice Route", 1),
        fetch_restaurant_data("Tokyo Bites", 1),
        fetch_restaurant_data("Curry House", 1),
    )
    print(results)
    print(f"Total time: {time.time() - start:.2f} seconds")

await main()` },
      { type: 'paragraph', content: 'Three fetches, each taking 1 second. Run one after another, that is 3 seconds total. asyncio.gather() runs all three concurrently — while one is "waiting" (during its asyncio.sleep), the other two get to make progress too — so the whole thing finishes in roughly 1 second, not 3.' },
      { type: 'callout', kind: 'tip', content: "Notice this lesson's examples call await main() directly, without asyncio.run() wrapping it, in some places. That is specific to this in-browser playground, which already runs inside its own event loop — in a normal Python script on your own computer, asyncio.run(main()) is the standard way to start the whole async program from regular, non-async code." },

      { type: 'heading', content: 'When async actually helps, and when it does not' },
      { type: 'paragraph', content: "Async helps with I/O-bound work — waiting on a network response, a file, or a database — because the waiting itself doesn't need your CPU; it can do other useful work during that wait. Async does not speed up CPU-bound work — heavy number-crunching with no waiting involved gets zero benefit from async, since there is no idle waiting time to fill with other work in the first place. That kind of speed-up is what the next module's profiling, and tools like NumPy's vectorisation from the intermediate track, are actually for." },

      { type: 'heading', content: 'Real-life feel: a dashboard pulling from 3 services at once' },
      { type: 'paragraph', content: 'A real operations dashboard showing "current orders," "rider locations," and "today\'s revenue" pulls all three from different APIs. Fetching them one after another means the page loads as slowly as the sum of all three. Fetching them concurrently with asyncio.gather() means the page loads about as fast as the single slowest one — a real, user-visible difference.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Write an async function that simulates fetching data for 3 riders concurrently, each taking a different delay, and print the total time taken.' },
      { type: 'playground', language: 'python', starter: `import asyncio
import time

async def fetch_rider_status(name, delay):
    await asyncio.sleep(delay)
    return f"{name}: available"

async def main():
    start = time.time()
    # TODO: use asyncio.gather to fetch 3 riders concurrently with different delays
    # TODO: print the results and the total elapsed time
    pass

await main()
` },
      { type: 'callout', kind: 'tip', content: 'A quick mini project next puts generators, context managers, and async together, before the track turns to measuring and improving performance directly.' },
    ],
  },

  {
    id: 'py-mp-a-2',
    title: 'Mini Project: A Resilient Data Fetcher',
    duration: '30 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: 'This project combines memory-efficient processing, guaranteed cleanup, and concurrency into one small but realistic data-fetching tool.' },
      { type: 'list', items: [
        'Concepts used: generators, context managers, asyncio.gather',
      ]},

      { type: 'heading', content: 'Task 1: A generator for filtering large data' },
      { type: 'paragraph', content: 'Write a generator function delivered_only that yields only orders with status "delivered" from a list of order dictionaries, one at a time.' },
      { type: 'playground', language: 'python', starter: `orders = [
    {"id": 1, "status": "delivered", "total": 500},
    {"id": 2, "status": "cancelled", "total": 300},
    {"id": 3, "status": "delivered", "total": 750},
]

def delivered_only(order_list):
    # TODO: yield only orders where status == "delivered"
    pass

for order in delivered_only(orders):
    print(order)
` },
      { type: 'code', language: 'python', content: `# Sample solution
def delivered_only(order_list):
    for order in order_list:
        if order["status"] == "delivered":
            yield order

for order in delivered_only(orders):
    print(order)` },

      { type: 'heading', content: 'Task 2: A context manager that always logs completion' },
      { type: 'paragraph', content: 'Using @contextmanager, write a logging context manager called task_log that prints "Starting..." on entry and "Done." on exit, even if an error occurs inside.' },
      { type: 'playground', language: 'python', starter: `from contextlib import contextmanager

@contextmanager
def task_log():
    # TODO: print "Starting..." before yield
    # TODO: print "Done." after yield (this must run even if an error happens)
    yield

with task_log():
    print("Doing some work")
` },
      { type: 'code', language: 'python', content: `# Sample solution
from contextlib import contextmanager

@contextmanager
def task_log():
    print("Starting...")
    try:
        yield
    finally:
        print("Done.")

with task_log():
    print("Doing some work")` },

      { type: 'heading', content: 'Task 3: Fetching multiple riders concurrently' },
      { type: 'paragraph', content: 'Using asyncio.gather, fetch the status of 4 riders concurrently, each with a different simulated delay, and print how long the whole batch took.' },
      { type: 'playground', language: 'python', starter: `import asyncio
import time

async def fetch_status(name, delay):
    await asyncio.sleep(delay)
    return f"{name}: ready"

async def main():
    start = time.time()
    # TODO: gather 4 fetch_status calls with delays of your choice
    # TODO: print the results and total elapsed time
    pass

await main()
` },
      { type: 'code', language: 'python', content: `# Sample solution
async def main():
    start = time.time()
    results = await asyncio.gather(
        fetch_status("Karan", 0.5),
        fetch_status("Anita", 0.3),
        fetch_status("Ravi", 0.4),
        fetch_status("Sneha", 0.2),
    )
    print(results)
    print(f"Total time: {time.time() - start:.2f} seconds")

await main()` },
    ],
  },

  {
    id: 'py-a-8',
    title: 'Performance and profiling',
    duration: '35 min',
    sections: [
      { type: 'heading', content: "Don't guess — measure" },
      { type: 'paragraph', content: 'Every experienced developer has been wrong, at least once, about which part of their own code was "obviously" the slow part. Profiling tools measure exactly where time actually goes, instead of relying on intuition — the same discipline the SQL track\'s EXPLAIN QUERY PLAN taught for queries, now applied to Python code itself.' },

      { type: 'heading', content: 'Quick timing checks with timeit' },
      { type: 'paragraph', content: 'timeit is the right tool for "which of these two small snippets is faster?" — it runs code repeatedly and accounts for the noise of a single run being unreliable.' },
      { type: 'code', language: 'python', content: `import timeit

# Building a list with a loop vs a list comprehension
loop_time = timeit.timeit(
    "result = []\\nfor i in range(100):\\n    result.append(i * i)",
    number=10000
)
comprehension_time = timeit.timeit(
    "result = [i * i for i in range(100)]",
    number=10000
)

print(f"Loop: {loop_time:.4f} seconds")
print(f"Comprehension: {comprehension_time:.4f} seconds")` },
      { type: 'paragraph', content: 'number=10000 runs each snippet ten thousand times and reports the total — a single run of fast code is too quick to measure reliably, so timeit repeats it enough times for the difference to become clearly visible.' },

      { type: 'heading', content: 'Finding the real bottleneck with cProfile' },
      { type: 'paragraph', content: 'timeit is great for comparing two small snippets. cProfile answers a bigger question: inside this entire function, which specific part is actually eating the time?' },
      { type: 'code', language: 'python', content: `import cProfile

def clean_name(name):
    return name.strip().title()

def process_orders(names):
    return [clean_name(n) for n in names]

names = ["  aditi rao  ", "ROHAN KUMAR", "priya sharma"] * 10000

profiler = cProfile.Profile()
profiler.enable()
process_orders(names)
profiler.disable()
profiler.print_stats()` },
      { type: 'paragraph', content: 'The output lists every function called, how many times, and how much total time was spent inside each one — turning "I think clean_name is slow" into an actual measured fact, confirmed or refuted by real numbers instead of a guess.' },

      { type: 'heading', content: 'A practical workflow: profile first, optimise second' },
      { type: 'list', items: [
        'Get the code working correctly first — a fast, wrong answer is worthless',
        'Profile it on realistic data, not a tiny toy example that hides the real bottleneck',
        'Fix only the part the profiler actually points to — optimising code that was never the bottleneck wastes effort and adds risk for zero benefit',
        'Re-profile after the fix to confirm it actually helped',
      ]},
      { type: 'callout', kind: 'tip', content: '"Premature optimisation" — spending effort making something faster before confirming it actually needs to be — is one of the most common time-wasters in real software projects. The discipline in this module exists specifically to replace that instinct with evidence.' },

      { type: 'heading', content: 'Real-life feel: the report that takes 10 minutes to generate' },
      { type: 'paragraph', content: 'A genuinely common real scenario: a weekly report script that used to take 30 seconds now takes 10 minutes after the underlying data grew. Profiling it usually reveals the actual cause is one specific, fixable thing — a function being called far more often than expected, or a slow operation buried inside a loop — rather than "everything is slow," which is rarely the real story.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Profile a function that calculates the total of a large list of order amounts, using cProfile.' },
      { type: 'playground', language: 'python', starter: `import cProfile

def calculate_total(amounts):
    total = 0
    for amount in amounts:
        total += amount
    return total

amounts = [799, 1499, 350, 899] * 50000

# TODO: create a cProfile.Profile(), enable it, call calculate_total(amounts),
#       disable it, then print_stats()
` },
      { type: 'callout', kind: 'tip', content: 'Next module: making your code self-documenting and catching a whole category of bugs before you even run it, using type hints.' },
    ],
  },

  {
    id: 'py-a-9',
    title: 'Type hints and modern Python',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'A function signature that explains itself' },
      { type: 'paragraph', content: 'def calculate_discount(price, rate): tells you nothing about what price and rate actually are, or what the function gives back. Type hints let you write that information directly into the function definition, where anyone reading the code sees it immediately.' },

      { type: 'heading', content: 'Basic type hints' },
      { type: 'code', language: 'python', content: `def calculate_discount(price: float, rate: float) -> float:
    return price * (1 - rate)

print(calculate_discount(1000.0, 0.1))   # 900.0` },
      { type: 'paragraph', content: 'price: float says "this parameter is expected to be a float." -> float (after the parentheses) says "this function returns a float." Crucially, Python does not actually enforce these at runtime — calculate_discount("a", "b") would still run and fail elsewhere, not because of the hints. Type hints are documentation with structure, checked by separate tools (see the callout below), not a built-in runtime safety net by themselves.' },

      { type: 'heading', content: 'Hinting more complex types' },
      { type: 'code', language: 'python', content: `from typing import List, Dict, Optional

def total_revenue(orders: List[Dict[str, float]]) -> float:
    return sum(order["total"] for order in orders)

def find_customer(name: str, customers: List[Dict]) -> Optional[Dict]:
    for c in customers:
        if c["name"] == name:
            return c
    return None   # Optional[Dict] means "a Dict, or possibly None"` },
      { type: 'paragraph', content: 'List[Dict[str, float]] reads as "a list of dictionaries, where each dictionary has text keys and float values" — precise enough that someone reading just the function signature already understands the expected shape of the data, without reading the function body at all. Optional[Dict] is shorthand for "either a Dict, or None" — flagging upfront that callers need to handle the "nothing found" case.' },

      { type: 'heading', content: 'A modern shortcut: built-in generic syntax' },
      { type: 'paragraph', content: 'Recent Python versions let you write list[dict] and dict[str, float] directly, without importing from typing at all — the same meaning, less ceremony.' },
      { type: 'code', language: 'python', content: `def total_revenue(orders: list[dict[str, float]]) -> float:
    return sum(order["total"] for order in orders)` },

      { type: 'heading', content: 'How type hints actually get checked' },
      { type: 'paragraph', content: 'Type hints by themselves are just metadata — Python still runs your code even if the types do not match. The real enforcement comes from a separate static type checker, most commonly mypy, run as a command-line tool against your codebase before you ever run the program.' },
      { type: 'code', language: 'text', content: `pip install mypy
mypy my_script.py

# mypy reads your type hints and reports mismatches WITHOUT running your code:
# my_script.py:5: error: Argument 1 to "calculate_discount" has incompatible type "str"; expected "float"` },
      { type: 'callout', kind: 'tip', content: "This platform's playground cannot run mypy directly, since it is a separate static-analysis tool, not something that executes as part of your script. The type hints themselves run perfectly fine here (Python just ignores them at runtime) — it is the checking step that needs mypy installed in a real local project." },

      { type: 'heading', content: 'Real-life feel: catching a bug before it ever runs' },
      { type: 'paragraph', content: "Imagine accidentally passing a list of customer names where a list of customer dictionaries was expected, three function calls deep into a real pipeline. Without type hints, this might only surface as a confusing crash, possibly hours later, far from the actual mistake. With type hints and mypy run before deployment, that exact mistake gets caught and reported with a clear message, before the code ever runs against real data." },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Add type hints to the function below: it takes a list of dictionaries and a minimum amount, and returns a list of dictionaries.' },
      { type: 'playground', language: 'python', starter: `# TODO: add type hints to this function's parameters and return type
def filter_high_value(orders, minimum):
    return [o for o in orders if o["total"] >= minimum]

orders = [{"id": 1, "total": 500}, {"id": 2, "total": 1500}]
print(filter_high_value(orders, 1000))
print(filter_high_value.__annotations__)
` },
      { type: 'callout', kind: 'tip', content: 'Next module: how do you actually know your code is correct, beyond "I ran it once and it looked fine"? Automated testing with pytest.' },
    ],
  },

  {
    id: 'py-a-10',
    title: 'Testing with pytest',
    duration: '35 min',
    sections: [
      { type: 'heading', content: '"I ran it once and it looked right" is not confidence' },
      { type: 'paragraph', content: 'Every function in this entire course has been checked by eye — run it, look at the printed output, decide if it seems correct. That works for learning, but it does not scale, and it does not protect you when you change the code six months later and accidentally break something that used to work. Automated tests check correctness for you, instantly, every single time, forever.' },

      { type: 'heading', content: 'The simplest possible test: assert' },
      { type: 'code', language: 'python', content: `def add(a, b):
    return a + b

assert add(2, 3) == 5
print("Test passed!")

assert add(2, 2) == 5   # this one is wrong on purpose
print("This line never prints -- the assert above stops the program")` },
      { type: 'paragraph', content: 'assert checks a condition and crashes the program immediately with an AssertionError if it is False. This is the absolute foundation every testing tool, including pytest, is built on top of.' },

      { type: 'heading', content: 'Writing real pytest test functions' },
      { type: 'paragraph', content: 'pytest looks for functions whose names start with test_, runs each one, and reports which passed and which failed — instead of your whole program stopping at the first failure like a bare assert does.' },
      { type: 'code', language: 'python', content: `import pytest

# In a real project, this would be written to its own file, like test_orders.py,
# and pytest would be run from the command line: pytest test_orders.py
with open("test_orders.py", "w") as f:
    f.write("""
def calculate_total(quantity, price):
    return quantity * price

def test_calculate_total_basic():
    assert calculate_total(2, 100) == 200

def test_calculate_total_zero_quantity():
    assert calculate_total(0, 100) == 0

def test_calculate_total_negative_price_is_wrong():
    assert calculate_total(2, 100) == 999   # deliberately wrong, to see a real failure
""")

pytest.main(["-v", "test_orders.py"])` },
      { type: 'paragraph', content: 'Run this and read the real output carefully — pytest shows exactly which tests passed, which failed, and for the failure, the precise values involved (assert 200 == 999). This is genuinely the same output format you would see running pytest in a real terminal on a real project.' },

      { type: 'heading', content: 'Why several small, specific tests beat one big one' },
      { type: 'paragraph', content: "test_calculate_total_basic and test_calculate_total_zero_quantity each check one specific thing. If only the zero-quantity case ever breaks (a common kind of bug — an \"edge case\"), a single combined test would just say \"something failed,\" while these separate, named tests immediately tell you exactly which behaviour broke." },

      { type: 'heading', content: 'Testing that something fails correctly' },
      { type: 'paragraph', content: 'Sometimes correct behaviour IS raising an error — like rejecting a negative quantity. pytest.raises checks that the right exception actually happens.' },
      { type: 'code', language: 'python', content: `import pytest

with open("test_validation.py", "w") as f:
    f.write("""
import pytest

def calculate_total(quantity, price):
    if quantity < 0:
        raise ValueError("Quantity cannot be negative")
    return quantity * price

def test_negative_quantity_raises_error():
    with pytest.raises(ValueError):
        calculate_total(-1, 100)
""")

pytest.main(["-v", "test_validation.py"])` },

      { type: 'heading', content: 'Real-life feel: refactoring without fear' },
      { type: 'paragraph', content: 'The real payoff of a solid test suite is not catching the first bug — it is everything afterward. Once calculate_total has tests, you can rewrite it completely (for performance, for clarity, for any reason) and know within seconds whether you broke anything, instead of manually re-checking every case by hand, or worse, finding out from a customer.' },

      { type: 'heading', content: 'Try it yourself' },
      { type: 'paragraph', content: 'Write a test file for a clean_name function (strip + title case), with at least two test cases, then run it with pytest.' },
      { type: 'playground', language: 'python', starter: `import pytest

def clean_name(name):
    return name.strip().title()

with open("test_clean_name.py", "w") as f:
    f.write("""
def clean_name(name):
    return name.strip().title()

# TODO: write test_clean_name_strips_whitespace()
# TODO: write test_clean_name_fixes_casing()
""")

pytest.main(["-v", "test_clean_name.py"])
` },
      { type: 'callout', kind: 'tip', content: 'A quick mini project next puts profiling, type hints, and testing together on one small module, before the track\'s final lesson on packaging code so someone else can actually install and reuse it.' },
    ],
  },

  {
    id: 'py-mp-a-3',
    title: 'Mini Project: A Profiled, Typed, Tested Utility',
    duration: '30 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: 'This project takes one small piece of business logic through the full quality pipeline: add type hints, profile it, and write real tests for it.' },
      { type: 'list', items: [
        'Concepts used: type hints, cProfile, pytest',
      ]},

      { type: 'heading', content: 'Task 1: Add type hints' },
      { type: 'paragraph', content: 'Add type hints to this function: it takes a list of dictionaries and a city name (str), and returns a float.' },
      { type: 'playground', language: 'python', starter: `def total_revenue_for_city(orders, city):
    return sum(o["total"] for o in orders if o["city"] == city)

orders = [
    {"city": "Mumbai", "total": 500},
    {"city": "Delhi", "total": 300},
    {"city": "Mumbai", "total": 750},
]
print(total_revenue_for_city(orders, "Mumbai"))
` },
      { type: 'code', language: 'python', content: `# Sample solution
def total_revenue_for_city(orders: list[dict], city: str) -> float:
    return sum(o["total"] for o in orders if o["city"] == city)` },

      { type: 'heading', content: 'Task 2: Profile it on a larger dataset' },
      { type: 'paragraph', content: 'Profile total_revenue_for_city on a list of 50,000 orders using cProfile.' },
      { type: 'playground', language: 'python', starter: `import cProfile

def total_revenue_for_city(orders, city):
    return sum(o["total"] for o in orders if o["city"] == city)

orders = [{"city": "Mumbai" if i % 2 == 0 else "Delhi", "total": 500} for i in range(50000)]

# TODO: profile the call total_revenue_for_city(orders, "Mumbai")
` },
      { type: 'code', language: 'python', content: `# Sample solution
profiler = cProfile.Profile()
profiler.enable()
total_revenue_for_city(orders, "Mumbai")
profiler.disable()
profiler.print_stats()` },

      { type: 'heading', content: 'Task 3: Write real tests for it' },
      { type: 'paragraph', content: 'Write a pytest test file with at least 2 test cases for total_revenue_for_city: one with matching city data, one where the city does not appear at all (should return 0).' },
      { type: 'playground', language: 'python', starter: `import pytest

with open("test_revenue.py", "w") as f:
    f.write("""
def total_revenue_for_city(orders, city):
    return sum(o['total'] for o in orders if o['city'] == city)

# TODO: write test_revenue_basic_match()
# TODO: write test_revenue_no_match_returns_zero()
""")

pytest.main(["-v", "test_revenue.py"])
` },
      { type: 'code', language: 'python', content: `# Sample solution
with open("test_revenue.py", "w") as f:
    f.write("""
def total_revenue_for_city(orders, city):
    return sum(o['total'] for o in orders if o['city'] == city)

def test_revenue_basic_match():
    orders = [{"city": "Mumbai", "total": 500}, {"city": "Delhi", "total": 300}]
    assert total_revenue_for_city(orders, "Mumbai") == 500

def test_revenue_no_match_returns_zero():
    orders = [{"city": "Delhi", "total": 300}]
    assert total_revenue_for_city(orders, "Mumbai") == 0
""")

pytest.main(["-v", "test_revenue.py"])` },
    ],
  },

  {
    id: 'py-a-11',
    title: 'Packaging your code',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'From "a script that works" to "something someone else can install"' },
      { type: 'paragraph', content: 'Every function and class across this entire course has lived inside one file or one playground. Real, reusable code gets organised into a package — a proper folder structure that someone else (or future you, on a different project) can install with pip and import, exactly like pandas or numpy.' },
      { type: 'callout', kind: 'tip', content: "This module is about file and folder structure on your own computer — the same reason the beginner track's Jupyter and virtual environment modules had no live playground. Read through the structure and commands; try them in a real local Python setup when you are ready to package your own project." },

      { type: 'heading', content: 'The minimal folder structure' },
      { type: 'code', language: 'text', content: `brightkit/
├── pyproject.toml
├── README.md
├── brightkit/
│   ├── __init__.py
│   ├── cleaning.py
│   └── analysis.py
└── tests/
    ├── test_cleaning.py
    └── test_analysis.py` },
      { type: 'paragraph', content: 'The inner brightkit/ folder (with __init__.py inside it) is the actual importable package. The outer files (pyproject.toml, README.md) describe the package to the outside world — what it is called, what it needs, how to install it.' },

      { type: 'heading', content: '__init__.py: what makes a folder a package' },
      { type: 'paragraph', content: 'An __init__.py file (even an empty one) is what tells Python "treat this folder as an importable package," and it controls exactly what becomes available when someone writes import brightkit.' },
      { type: 'code', language: 'python', content: `# brightkit/__init__.py
from .cleaning import clean_name
from .analysis import total_revenue_for_city

# Now someone can write:
#   from brightkit import clean_name, total_revenue_for_city
# instead of the longer:
#   from brightkit.cleaning import clean_name` },

      { type: 'heading', content: 'pyproject.toml: describing your package' },
      { type: 'code', language: 'text', content: `[project]
name = "brightkit"
version = "0.1.0"
description = "Cleaning and analysis utilities for BrightMart sales data"
requires-python = ">=3.9"
dependencies = [
    "pandas>=2.0",
]

[build-system]
requires = ["setuptools"]
build-backend = "setuptools.build_meta"` },
      { type: 'paragraph', content: 'This is the modern standard configuration file (replacing the older setup.py) — name and version identify your package, dependencies lists what it needs (pip installs those automatically alongside your package), and build-system tells installation tools how to actually build it.' },

      { type: 'heading', content: 'Installing your own package locally' },
      { type: 'code', language: 'text', content: `# From inside the brightkit/ folder (the one containing pyproject.toml):
pip install -e .

# -e means "editable" -- changes to your source files take effect immediately,
# without needing to reinstall every time. Standard for active development.` },

      { type: 'heading', content: 'Publishing it for real (the path beyond this course)' },
      { type: 'paragraph', content: 'Once a package is genuinely ready to share, it gets uploaded to PyPI (the Python Package Index) using a tool called twine, after which anyone in the world can run pip install brightkit and get it — the exact same mechanism that makes pip install pandas work. That last step is beyond what this course covers, but it is the natural endpoint of everything in this module.' },

      { type: 'heading', content: 'Real-life feel: the difference between a script and a tool' },
      { type: 'paragraph', content: "A script you wrote for one task, that lives in one folder, helps exactly one project. A properly packaged version of the same logic — with tests, type hints, and a clear structure — can be installed in every project you ever work on, shared with teammates, and trusted, because it has tests proving it actually works. That transformation, script to package, is the practical destination this entire advanced track has been building toward." },
    ],
  },

  {
    id: 'py-a-capstone',
    title: 'Capstone: Build and Test the brightkit Package',
    duration: '60 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Practice time — no new concepts here' },
      { type: 'paragraph', content: "You've finished every lesson in this track. This capstone is meant to be done after the rest of the course: design and build a small, genuinely complete data utility — classes, a decorator, a generator, type hints, and real tests — covering everything except packaging's file structure, which you would apply locally on your own machine using the previous module's pattern. Nothing here is new; it's all about combining what you already know into one coherent piece of work." },
      { type: 'callout', kind: 'tip', content: 'Try every task yourself before checking the sample solution underneath it.' },

      { type: 'heading', content: 'Project 1 (Easy)' },
      { type: 'paragraph', content: "The scenario: BrightMart wants a small internal toolkit for working with customer data, built properly enough that other engineers can trust and reuse it." },

      { type: 'heading', content: 'Task 1: A Customer class with dunder methods' },
      { type: 'paragraph', content: 'Build a Customer class with name, city, and total_spent, a __repr__, and an __eq__ comparing all three fields.' },
      { type: 'playground', language: 'python', starter: `class Customer:
    def __init__(self, name, city, total_spent):
        self.name = name
        self.city = city
        self.total_spent = total_spent

    # TODO: add __repr__ and __eq__

a = Customer("Aditi Rao", "Mumbai", 79200)
b = Customer("Aditi Rao", "Mumbai", 79200)
print(a)
print(a == b)
` },
      { type: 'code', language: 'python', content: `# Sample solution
class Customer:
    def __init__(self, name, city, total_spent):
        self.name = name
        self.city = city
        self.total_spent = total_spent

    def __repr__(self):
        return f"Customer(name={self.name!r}, city={self.city!r}, total_spent={self.total_spent})"

    def __eq__(self, other):
        return (self.name, self.city, self.total_spent) == (other.name, other.city, other.total_spent)

a = Customer("Aditi Rao", "Mumbai", 79200)
b = Customer("Aditi Rao", "Mumbai", 79200)
print(a)
print(a == b)` },

      { type: 'heading', content: 'Task 2: A type-hinted, tested cleaning function' },
      { type: 'paragraph', content: 'Write a fully type-hinted clean_city function (strip + title case), then write 2 pytest test cases for it.' },
      { type: 'playground', language: 'python', starter: `import pytest

# TODO: add type hints to this function
def clean_city(city):
    return city.strip().title()

with open("test_clean_city.py", "w") as f:
    f.write("""
def clean_city(city):
    return city.strip().title()

# TODO: write test_clean_city_strips_whitespace()
# TODO: write test_clean_city_fixes_casing()
""")

pytest.main(["-v", "test_clean_city.py"])
` },
      { type: 'code', language: 'python', content: `# Sample solution
def clean_city(city: str) -> str:
    return city.strip().title()

with open("test_clean_city.py", "w") as f:
    f.write("""
def clean_city(city):
    return city.strip().title()

def test_clean_city_strips_whitespace():
    assert clean_city("  mumbai  ") == "Mumbai"

def test_clean_city_fixes_casing():
    assert clean_city("DELHI") == "Delhi"
""")

pytest.main(["-v", "test_clean_city.py"])` },

      { type: 'heading', content: 'Project 2 (Hard)' },
      { type: 'paragraph', content: "The scenario: the toolkit now needs to handle a large customer list efficiently, fetch data from multiple sources concurrently, and prove its performance with real measurements." },

      { type: 'heading', content: 'Task 3: A generator-based filter with a decorator' },
      { type: 'paragraph', content: 'Write a decorator count_calls that counts how many times a function has been called, and apply it to a generator function that yields only high-value customers (total_spent > 50000).' },
      { type: 'playground', language: 'python', starter: `customers = [
    {"name": "Aditi Rao", "total_spent": 79200},
    {"name": "Rohan Kumar", "total_spent": 22000},
    {"name": "Priya Sharma", "total_spent": 65000},
]

def count_calls(func):
    # TODO: track and print how many times the wrapped function has been called
    pass

@count_calls
def high_value_customers(customer_list):
    for c in customer_list:
        if c["total_spent"] > 50000:
            yield c

for c in high_value_customers(customers):
    print(c)
` },
      { type: 'code', language: 'python', content: `# Sample solution
def count_calls(func):
    call_count = 0
    def wrapper(*args, **kwargs):
        nonlocal call_count
        call_count += 1
        print(f"{func.__name__} called {call_count} time(s)")
        return func(*args, **kwargs)
    return wrapper

@count_calls
def high_value_customers(customer_list):
    for c in customer_list:
        if c["total_spent"] > 50000:
            yield c

for c in high_value_customers(customers):
    print(c)` },

      { type: 'heading', content: 'Task 4: Concurrent fetching with a measured comparison' },
      { type: 'paragraph', content: 'Simulate fetching data for 4 customers both sequentially (one at a time) and concurrently (asyncio.gather), and print the time taken for each approach.' },
      { type: 'playground', language: 'python', starter: `import asyncio
import time

async def fetch_customer(name, delay):
    await asyncio.sleep(delay)
    return f"{name}: fetched"

async def main():
    names_and_delays = [("Aditi", 0.3), ("Rohan", 0.3), ("Priya", 0.3), ("Marcus", 0.3)]

    # TODO: time fetching them one at a time (a loop with await on each)
    # TODO: time fetching them concurrently with asyncio.gather
    # TODO: print both durations to compare
    pass

await main()
` },
      { type: 'code', language: 'python', content: `# Sample solution
async def main():
    names_and_delays = [("Aditi", 0.3), ("Rohan", 0.3), ("Priya", 0.3), ("Marcus", 0.3)]

    start = time.time()
    for name, delay in names_and_delays:
        await fetch_customer(name, delay)
    sequential_time = time.time() - start

    start = time.time()
    await asyncio.gather(*(fetch_customer(name, delay) for name, delay in names_and_delays))
    concurrent_time = time.time() - start

    print(f"Sequential: {sequential_time:.2f}s")
    print(f"Concurrent: {concurrent_time:.2f}s")

await main()` },

      { type: 'heading', content: 'Task 5: Profile the slowest version' },
      { type: 'paragraph', content: 'Use cProfile to profile a function that builds a cleaned customer list (strip + title case on 50,000 names).' },
      { type: 'playground', language: 'python', starter: `import cProfile

def clean_names(names):
    return [n.strip().title() for n in names]

names = ["  aditi rao  ", "ROHAN KUMAR", "priya sharma"] * 20000

# TODO: profile the call clean_names(names)
` },
      { type: 'code', language: 'python', content: `# Sample solution
profiler = cProfile.Profile()
profiler.enable()
clean_names(names)
profiler.disable()
profiler.print_stats()` },

      { type: 'heading', content: "You're done with the Python Advanced track" },
      { type: 'paragraph', content: "Across all three tracks, you have gone from your very first print() statement to writing classes with inheritance, decorators, generators, concurrent async code, measured performance, type-checked function signatures, and real automated tests. That is the complete, genuine range of what separates someone who can write a working script from someone who can write code other people can trust, reuse, and build on. The only step this course intentionally leaves at the doorstep is publishing a package to PyPI for the world — everything needed to get there is already in your hands." },
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
   EXCEL — INTERMEDIATE (full real track)
   ════════════════════════════════════════════════════════════════ */
const EXCEL_INTERMEDIATE = [
  {
    id: 'ex-i-1',
    title: 'VLOOKUP and INDEX/MATCH',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'The problem: data spread across two tables' },
      { type: 'paragraph', content: 'Imagine you have an Orders sheet with a Product ID in every row, and a separate Products sheet that lists each Product ID alongside its name and price. You need the order sheet to show the product name and price too — without manually typing it in for every single row. This is exactly what JOINs do in SQL, and what lookups do in Excel.' },

      { type: 'heading', content: 'VLOOKUP: the workhorse function' },
      { type: 'paragraph', content: 'VLOOKUP looks down the first column of a table for a value, and returns something from a column to the right of it in the same row.' },
      { type: 'code', language: 'excel', content: `=VLOOKUP(lookup_value, table_range, column_number, exact_match)

Example: Orders sheet, cell C2 has Product ID "P104"
Products sheet: column A = Product ID, column B = Name, column C = Price

=VLOOKUP(C2, Products!A:C, 2, FALSE)   → returns the product name
=VLOOKUP(C2, Products!A:C, 3, FALSE)   → returns the product price` },
      { type: 'paragraph', content: 'Breaking down the four parts: C2 is what you are searching for. Products!A:C is the full table to search inside. 2 (or 3) is which column to pull the answer from, counting from the left of that table starting at 1. FALSE means "only return an exact match" — almost always what you want.' },
      { type: 'callout', kind: 'warning', content: 'Almost every VLOOKUP mistake comes from forgetting the FALSE at the end. Without it, Excel defaults to an approximate match, which silently returns wrong answers instead of an error — far more dangerous than a visible mistake.' },

      { type: 'heading', content: "VLOOKUP's real limitation: it can only look right" },
      { type: 'paragraph', content: 'VLOOKUP always searches the first column of your range and pulls data from columns to the right of it. If the Product ID were in column C and the Name you needed were in column A (to its left), VLOOKUP simply cannot do it — no matter how you adjust the column number.' },
      { type: 'paragraph', content: 'Real-life example: a finance team exports data from their accounting software where Employee Name is in column A and Employee ID is in column D. If you need to look up a name FROM an ID, VLOOKUP is stuck — the ID is to the right of the name, not the left.' },

      { type: 'heading', content: 'INDEX/MATCH: the flexible alternative' },
      { type: 'paragraph', content: 'INDEX/MATCH does the same job as VLOOKUP but can look in any direction, because it is really two functions working together: MATCH finds the position of a value, and INDEX returns whatever is at that position.' },
      { type: 'code', language: 'excel', content: `=MATCH(lookup_value, lookup_range, 0)
   -- finds the POSITION (a number like 1, 2, 3...) of a value in a range
   -- the 0 means exact match, same idea as FALSE in VLOOKUP

=INDEX(return_range, position)
   -- returns whatever is at that position in a different range

Combined — find an Employee ID in column D, return the Name from column A:
=INDEX(A:A, MATCH(D2, D:D, 0))
   -- MATCH finds WHERE the ID is; INDEX returns the Name at that same row` },
      { type: 'paragraph', content: 'Notice the lookup column (D) can be anywhere relative to the column you are returning (A) — left, right, it does not matter. This is the entire reason INDEX/MATCH exists.' },

      { type: 'heading', content: 'A second advantage: INDEX/MATCH survives column changes' },
      { type: 'paragraph', content: "With VLOOKUP, the column number (the '2' or '3' in the formula) is a fixed number you typed. If someone inserts a new column into the table you are searching, every column number shifts — and your VLOOKUP quietly starts pulling the wrong column. INDEX/MATCH has no hardcoded column number, so it keeps working correctly even after columns are inserted or reordered." },

      { type: 'heading', content: 'XLOOKUP: the modern replacement (if available)' },
      { type: 'paragraph', content: 'If you have Excel 365 or Excel 2021+, a newer function called XLOOKUP combines the simplicity of VLOOKUP with the flexibility of INDEX/MATCH, and is worth using if it is available to you.' },
      { type: 'code', language: 'excel', content: `=XLOOKUP(lookup_value, lookup_range, return_range)

Example: same Employee ID → Name lookup as above
=XLOOKUP(D2, D:D, A:A)
   -- no column counting, no exact-match flag needed, works in any direction` },
      { type: 'callout', kind: 'tip', content: "If your version of Excel has XLOOKUP (check the Formulas tab — if it autocompletes when you type =XLO, you have it), it is the best default choice. If not (older Excel, or some shared/work versions), INDEX/MATCH is the reliable fallback that works everywhere." },

      { type: 'heading', content: 'Common lookup errors' },
      { type: 'list', items: [
        '#N/A — the value you searched for genuinely does not exist in the lookup range. Check for typos or extra spaces (TRIM helps here).',
        'A VLOOKUP that returns the wrong value for every row — almost always a missing FALSE, or a forgotten absolute reference ($) on the table range when copying the formula down.',
        '#REF! — usually means a column inside your lookup table was deleted, breaking a VLOOKUP\'s column number.',
      ]},

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Build two sheets. "Products": Product ID, Name, Price (5 rows). "Orders": Order ID, Product ID, Quantity (5 rows, using Product IDs from the Products sheet). On the Orders sheet, add a Name column using VLOOKUP, and a Price column using INDEX/MATCH — practising both approaches on the same data.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: "Lookups answer questions about individual rows. The next module covers Pivot Tables — Excel's tool for summarising thousands of rows into a handful of meaningful numbers in seconds, without writing a single formula." },
    ],
  },

  {
    id: 'ex-i-2',
    title: 'Pivot tables: the most powerful feature',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'The single most useful button in Excel' },
      { type: 'paragraph', content: 'Imagine 5,000 rows of raw sales data — date, customer, city, product, quantity, price. Your manager asks: "What was our total revenue by city, broken down by month?" Doing this by hand with SUMIFS would take an hour and several formulas. A Pivot Table answers it in under a minute, with zero formulas.' },

      { type: 'heading', content: 'What a Pivot Table actually does' },
      { type: 'paragraph', content: 'A Pivot Table takes your raw, row-by-row data and lets you drag-and-drop fields into four boxes to instantly group, summarise, and reshape it: Rows, Columns, Values, and Filters.' },
      { type: 'list', items: [
        'Rows — what you want to group by, going down the page (e.g., City)',
        'Columns — a second way to group, going across the page (e.g., Month)',
        'Values — the number you want to summarise (e.g., Revenue, usually summed)',
        'Filters — a dropdown that lets you narrow the whole table to one category (e.g., only show "Delivered" orders)',
      ]},

      { type: 'heading', content: 'Building your first Pivot Table' },
      { type: 'paragraph', content: 'Click anywhere inside your raw data table, then Insert → PivotTable. Excel guesses your data range automatically — confirm it, and choose "New Worksheet." A blank pivot canvas appears on the right with a field list and the four boxes.' },
      { type: 'code', language: 'excel', content: `Raw data columns: Date | City | Product | Quantity | Price | Revenue

To answer "total revenue by city":
  Drag City        → Rows
  Drag Revenue      → Values   (Excel defaults to "Sum of Revenue")

Result: a tiny 3-row table showing total revenue for each city —
instead of scrolling through 5,000 individual transactions` },
      { type: 'paragraph', content: 'To add the month breakdown your manager asked for, drag Date into Columns as well. Excel automatically groups daily dates into months when you right-click a date in the pivot and choose "Group" — turning 365 daily columns into 12 readable monthly ones.' },

      { type: 'heading', content: 'Changing how Values are summarised' },
      { type: 'paragraph', content: 'By default, numbers dropped into Values are Summed, but you can change this — click the small dropdown next to the field in the Values box, choose "Value Field Settings," and pick Count, Average, Max, Min, or several others.' },
      { type: 'list', items: [
        'Sum of Revenue — total revenue (the default for numbers)',
        'Count of Order ID — how many orders, regardless of revenue (useful for "how many orders did each city have")',
        'Average of Quantity — typical order size per city',
      ]},
      { type: 'callout', kind: 'tip', content: 'A common mistake: dragging a text column (like Customer Name) into Values. Excel automatically switches to "Count" since text cannot be summed — that is usually exactly what you want for "how many orders per customer," but it confuses people expecting a Sum.' },

      { type: 'heading', content: 'Filtering and slicing' },
      { type: 'paragraph', content: 'Drag Status into the Filters box, then use the dropdown that appears above the pivot table to show only "Delivered" orders, instantly recalculating every number in the table. For a more visual filter that updates with one click instead of a dropdown menu, use Insert → Slicer instead — popular for building simple, clickable dashboards.' },

      { type: 'heading', content: 'Refreshing when your source data changes' },
      { type: 'paragraph', content: 'A Pivot Table is a snapshot, not a live formula — if you add 50 new rows to your source data, the pivot does not update automatically. Right-click anywhere inside the pivot and choose "Refresh" (or press Alt+F5) any time your underlying data changes.' },
      { type: 'callout', kind: 'warning', content: "This is the most common pivot table mistake in real jobs: someone updates the raw data, forwards the dashboard, and the numbers are stale because nobody refreshed. If you are building a Pivot Table that others rely on regularly, get in the habit of refreshing before every share." },

      { type: 'heading', content: 'Pivot charts' },
      { type: 'paragraph', content: 'Click inside your pivot table, then Insert → PivotChart, to get a chart that summarises the same grouped data and updates automatically whenever the pivot table refreshes — far less manual work than rebuilding a regular chart every time the data changes.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: "Build a raw data table with at least 15 rows: Date, City (3-4 cities), Product (4-5 products), Quantity, Price. Add a Revenue column (Quantity × Price). Then build a Pivot Table showing total revenue by city in Rows and product in Columns, with a Filter on a Status column you add (Delivered/Pending)." },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: "A quick mini project next combines lookups and Pivot Tables on one realistic dataset, then the next lesson covers Conditional Formatting — making numbers visually jump out at you directly inside your raw data, before you even build a summary." },
    ],
  },

  {
    id: 'ex-mp-5',
    title: 'Mini Project: Order Lookup & Revenue Dashboard',
    duration: '20 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: 'Most real reporting work follows this exact two-step pattern: first enrich raw transaction data with lookups (pulling in names and prices from a separate table), then summarise the enriched data with a Pivot Table. This project does both, on data that intentionally mirrors a real e-commerce export.' },
      { type: 'list', items: [
        'Concepts used: VLOOKUP / INDEX-MATCH, Pivot Tables, grouping',
      ]},

      { type: 'heading', content: 'The task' },
      { type: 'paragraph', content: 'Create a sheet called "Products" with this table:' },
      { type: 'list', items: [
        'Product ID | Name | Price',
        'P101 | Wireless Mouse | 799',
        'P102 | Laptop Stand | 1499',
        'P103 | Table Lamp | 1299',
        'P104 | Cotton T-Shirt | 599',
        'P105 | Running Shoes | 3499',
      ]},
      { type: 'paragraph', content: 'Create a second sheet called "Orders" with this table (note that Product IDs repeat, and cities repeat — this is realistic):' },
      { type: 'list', items: [
        'Order ID | Date | City | Product ID | Quantity',
        'O1 | 01-Jun-2024 | Mumbai | P101 | 3',
        'O2 | 02-Jun-2024 | Bengaluru | P102 | 2',
        'O3 | 03-Jun-2024 | Delhi | P103 | 1',
        'O4 | 04-Jun-2024 | Mumbai | P104 | 5',
        'O5 | 05-Jun-2024 | Delhi | P105 | 1',
        'O6 | 06-Jun-2024 | Mumbai | P104 | 4',
        'O7 | 07-Jun-2024 | Bengaluru | P101 | 2',
        'O8 | 08-Jun-2024 | Delhi | P103 | 2',
      ]},
      { type: 'heading', content: 'Build these on the Orders sheet' },
      { type: 'list', items: [
        'A Name column that looks up the product name from the Products sheet using the Product ID',
        'A Price column that looks up the unit price the same way (try VLOOKUP for one of these two columns and INDEX/MATCH for the other, to practise both)',
        'A Revenue column = Quantity × Price',
      ]},
      { type: 'code', language: 'excel', content: `Name (row 2 example, using VLOOKUP):
=VLOOKUP(D2, Products!A:C, 2, FALSE)

Price (row 2 example, using INDEX/MATCH):
=INDEX(Products!C:C, MATCH(D2, Products!A:A, 0))

Revenue (row 2 example):
=E2*Price_column_here` },
      { type: 'heading', content: 'Then build a Pivot Table' },
      { type: 'paragraph', content: 'From the enriched Orders data, build a Pivot Table with City in Rows and Revenue in Values, to answer "which city generates the most revenue?" Then add Product Name into Columns as well, to see the city/product breakdown in one table.' },
      { type: 'callout', kind: 'tip', content: 'If your Pivot Table values look wrong, check the Revenue column on the Orders sheet first — a single lookup error there (e.g., a missing FALSE in VLOOKUP) will silently distort every total the pivot calculates from it.' },
    ],
  },

  {
    id: 'ex-i-3',
    title: 'Conditional formatting',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'Making important numbers visible without reading every row' },
      { type: 'paragraph', content: 'Imagine a spreadsheet of 200 invoices with due dates. Scanning every row to manually spot which ones are overdue is slow and error-prone. Conditional Formatting tells Excel "automatically colour any cell that meets this rule" — overdue invoices turn red the moment they qualify, with zero manual checking.' },

      { type: 'heading', content: 'Built-in rules: highlighting cells' },
      { type: 'paragraph', content: "Select your range, go to Home → Conditional Formatting → Highlight Cells Rules. Common built-in options:" },
      { type: 'list', items: [
        'Greater Than / Less Than — highlight values above or below a number you type in',
        'Between — highlight values inside a range, e.g., scores between 60 and 75',
        'Equal To — highlight an exact match, e.g., Status equal to "Cancelled"',
        'Duplicate Values — instantly spot repeated entries, e.g., the same Order ID appearing twice by mistake',
      ]},
      { type: 'paragraph', content: 'Real-life example: select a Quantity column, apply "Less Than" with the value 5, and choose red fill — any product with fewer than 5 units left turns red automatically, even as quantities change throughout the day.' },

      { type: 'heading', content: 'Data Bars, Color Scales, and Icon Sets' },
      { type: 'paragraph', content: 'Beyond simple highlighting, Excel can turn an entire column into a tiny visual chart without you building one.' },
      { type: 'list', items: [
        'Data Bars — draws a small bar inside each cell, proportional to its value (longer bar = bigger number). Great for comparing magnitudes at a glance, like monthly sales per product.',
        'Color Scales — shades cells on a gradient (e.g., red for low values fading to green for high). Great for spotting patterns across a whole table at once, like exam scores across a class.',
        'Icon Sets — adds a small symbol (traffic-light circles, arrows, stars) based on value thresholds. Popular for status columns, like a green/yellow/red light for project health.',
      ]},
      { type: 'code', language: 'excel', content: `Home → Conditional Formatting → Color Scales → pick a 3-colour scale
(e.g., red - yellow - green)

Applied to a "Score" column of exam marks (0-100):
  Scores near 0   → shaded red
  Scores near 50   → shaded yellow
  Scores near 100  → shaded green
-- you can scan the whole class's performance in one glance, no reading required` },

      { type: 'heading', content: 'Formula-based rules: the real power' },
      { type: 'paragraph', content: 'The built-in rules only check one cell at a time. To compare a cell against another cell, or apply more complex logic, use "New Rule" → "Use a formula to determine which cells to format." This formula must evaluate to TRUE or FALSE — TRUE means "apply this formatting."' },
      { type: 'code', language: 'excel', content: `Highlight a Due Date in red if it has already passed today:
=A2<TODAY()

Highlight an entire row red if Status equals "Cancelled"
(select the whole data range first, then apply this rule):
=$F2="Cancelled"
-- the $ before F locks the column so every cell in the row checks
   column F specifically, but the row number still adjusts per row` },
      { type: 'callout', kind: 'tip', content: 'To highlight a whole row based on one column\'s value (like the Cancelled example), select the entire data range BEFORE creating the rule, and lock only the column with $ (like $F2, not $F$2). This lets the row number adjust for each row while the column stays fixed on Status.' },

      { type: 'heading', content: 'Managing and removing rules' },
      { type: 'paragraph', content: 'Conditional formatting rules pile up invisibly — Home → Conditional Formatting → Manage Rules shows every rule currently applied to the sheet, in what order they run, and lets you edit, delete, or reorder them. If formatting looks wrong or contradictory, this is the first place to check.' },
      { type: 'callout', kind: 'warning', content: 'Multiple rules can apply to the same cell, and they are evaluated top to bottom in the Manage Rules list — the first matching rule (unless "Stop If True" is unchecked) wins. If a cell is not formatting the way you expect, check Manage Rules for a conflicting rule sitting above it.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Build a small task tracker: Task, Due Date, Status (Open/Done). Apply a formula rule that highlights the Due Date column red whenever the date has passed AND the Status is "Open" (hint: combine your formula with AND, like =AND(A2<TODAY(), $C2="Open")).' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'So far, every spreadsheet has accepted any typed input, even mistakes. The next module covers Named Ranges (making formulas more readable) and Data Validation (preventing bad data — like a typo\'d city name or an impossible date — from ever being entered in the first place).' },
    ],
  },

  {
    id: 'ex-i-4',
    title: 'Named ranges and data validation',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'Named ranges: giving cells a readable name' },
      { type: 'paragraph', content: 'You have already used absolute references like $F$1 to lock a tax rate cell. A Named Range does the same locking job but gives that cell a plain-English name instead of a coordinate, making formulas far easier to read and far less likely to break.' },
      { type: 'code', language: 'excel', content: `Without a named range:
=B2*$F$1          -- what is in F1? you have to go check

With a named range called TaxRate (pointing at F1):
=B2*TaxRate       -- immediately clear what this formula means` },
      { type: 'paragraph', content: 'To create one: select the cell (F1), then either type a name directly into the Name Box (top-left, where cell addresses normally appear) and press Enter, or go to Formulas → Define Name for more options. From then on, that name can be used in any formula on any sheet in the workbook, exactly like a cell reference.' },

      { type: 'heading', content: 'Why named ranges matter beyond readability' },
      { type: 'list', items: [
        'A named range automatically behaves like an absolute reference — no need to remember $ signs at all.',
        'If you ever move the named cell to a different location, every formula using its name still works correctly — Excel tracks the name, not the original coordinates.',
        'Named ranges can cover a whole table too, not just one cell — e.g., naming A2:A50 as "ProductList" so a formula can say =SUM(ProductList) instead of =SUM(A2:A50).',
      ]},
      { type: 'callout', kind: 'tip', content: 'Use Formulas → Name Manager to see every named range in your workbook, edit what they point to, or delete ones you no longer need. This is the most common place people look when a formula error mentions a name they do not recognise.' },

      { type: 'heading', content: 'Data validation: stopping bad data before it happens' },
      { type: 'paragraph', content: 'Conditional formatting reacts to bad data after it has already been typed in. Data Validation prevents it from being entered at all — far better, especially on a sheet other people will fill in.' },
      { type: 'paragraph', content: 'Select the cells you want to restrict, then Data → Data Validation. The most common and useful option is a dropdown list, which removes typos entirely by only allowing pre-approved choices.' },
      { type: 'code', language: 'excel', content: `Data → Data Validation → Allow: List → Source:
Delivered, Pending, Cancelled

Result: clicking that cell shows a dropdown arrow with exactly
those three options — typing "delivered" (lowercase) or
"Delivered " (trailing space) is no longer possible by mistake` },
      { type: 'paragraph', content: 'Real-life example: a form where people enter a department name freely will inevitably end up with "Sales", "sales", "SALES", and "Sales Dept" all meaning the same thing — breaking any COUNTIF or Pivot Table that groups by department. A dropdown list eliminates that problem at the source.' },

      { type: 'heading', content: 'Validating numbers and dates' },
      { type: 'paragraph', content: 'Beyond dropdown lists, Data Validation can restrict whole number ranges, decimal ranges, dates, and text length — useful for catching obviously impossible entries.' },
      { type: 'list', items: [
        'Whole number between 0 and 100 — for a percentage or score field, rejecting anything outside that range',
        'Date — between today and one year from now, e.g., for a delivery date that cannot be in the past',
        'Text length — maximum 10 characters, e.g., for a product code field with a fixed format',
      ]},

      { type: 'heading', content: 'Custom validation with a formula' },
      { type: 'paragraph', content: 'Like conditional formatting, Data Validation also supports "Custom" with your own formula that must evaluate to TRUE for the entry to be accepted.' },
      { type: 'code', language: 'excel', content: `Allow: Custom → Formula:
=AND(B2>0, B2<=C2)

Example use: a Quantity Sold (B2) cell that must be greater than 0
and cannot exceed the Quantity In Stock (C2) — blocking an
impossible sale before it is ever entered into the sheet` },
      { type: 'callout', kind: 'warning', content: 'Data Validation only stops NEW typed entries — it does not retroactively flag data that was already in the cells before the rule was applied, or data pasted in via copy-paste in some Excel versions. Always set up validation before a sheet is shared for others to fill in, not after.' },

      { type: 'heading', content: 'Adding a helpful input message and error alert' },
      { type: 'paragraph', content: 'On the same Data Validation dialog, the "Input Message" tab shows a small tooltip when the cell is selected (e.g., "Enter a number between 1 and 100"), and the "Error Alert" tab controls what happens on an invalid entry — a Stop (blocks it entirely), Warning (lets the user override), or Information (just a note).' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Build a small order form: Product (dropdown list of 5 products you choose), Quantity (whole number, 1 to 50 only), Status (dropdown: Pending/Shipped/Delivered). Name the cell holding a discount percentage "DiscountRate" and use it by name in a formula elsewhere on the sheet.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: "A quick mini project next combines named ranges, validation, and conditional formatting on one tracker. Then the final lesson covers Power Query — the tool for importing genuinely messy real-world data (inconsistent formats, extra columns, data spread across multiple files) and transforming it into a clean table automatically, with the cleanup steps remembered for next time." },
    ],
  },

  {
    id: 'ex-mp-6',
    title: 'Mini Project: Task Tracker with Smart Highlighting',
    duration: '20 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: 'A genuinely useful task tracker needs all three skills from the last two lessons working together: a dropdown that stops anyone from typing an invalid status, a named range so the "today" reference reads clearly in formulas, and conditional formatting that makes overdue items impossible to miss.' },
      { type: 'list', items: [
        'Concepts used: Data Validation dropdowns, Named Ranges, formula-based Conditional Formatting',
      ]},

      { type: 'heading', content: 'The task' },
      { type: 'paragraph', content: 'Build a sheet with this table:' },
      { type: 'list', items: [
        'Task | Owner | Due Date | Status',
        'Finalise budget | Aditi | 10-Jun-2024 | Open',
        'Vendor contract | Rohan | 05-Jun-2024 | Open',
        'Send invoices | Priya | 20-Jun-2024 | Done',
        'Update website | Sarah | 08-Jun-2024 | Open',
        'Quarterly report | James | 25-Jun-2024 | Open',
      ]},
      { type: 'heading', content: 'Build these' },
      { type: 'list', items: [
        'Data Validation on the Status column: a dropdown restricted to exactly Open, In Progress, Done',
        'A cell somewhere off to the side holding a reference date — name it ReferenceDate using the Name Box (you can set it to a fixed date like 15-Jun-2024 so the example is reproducible, instead of TODAY())',
        'A formula-based Conditional Formatting rule that highlights the whole row red whenever the Due Date is before ReferenceDate AND the Status is not "Done"',
      ]},
      { type: 'code', language: 'excel', content: `Conditional formatting formula (select the whole data range first):
=AND($C2<ReferenceDate, $D2<>"Done")

-- $C2 locks the Due Date column, $D2 locks the Status column,
   while the row number (2) still adjusts for every row in the selection
-- using the named range ReferenceDate instead of a raw cell reference
   like $F$1 makes this formula self-explanatory at a glance` },
      { type: 'callout', kind: 'warning', content: "If every row highlights red (even ones that are not overdue), double-check that you selected the full data range BEFORE creating the rule, and that you locked the column with $ correctly — exactly the same mistake pattern as the row-highlighting example from the lesson." },
    ],
  },

  {
    id: 'ex-i-5',
    title: 'Power Query: cleaning messy data',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'The problem Power Query solves' },
      { type: 'paragraph', content: 'Real exported data is rarely clean. A typical export from a billing system might have a "Full Name" column that needs splitting into first and last name, a date stored as text instead of a real date, duplicate rows from a system glitch, and a "Notes" column nobody needs. Doing all of this by hand with formulas works once — but if this same messy export arrives every single week, retyping the same cleanup steps is a waste of time.' },
      { type: 'paragraph', content: 'Power Query (found under Data → Get & Transform Data) lets you record a sequence of cleanup steps once, and then simply click "Refresh" on every future version of that same messy file — Excel replays every step automatically.' },

      { type: 'heading', content: 'Loading data into Power Query' },
      { type: 'paragraph', content: 'Data → Get Data → From File → From Workbook (or From Text/CSV) opens the source file, shows a preview, and loads it into the Power Query Editor — a separate window where every transformation happens before the data ever touches your actual worksheet.' },
      { type: 'callout', kind: 'tip', content: "The Power Query Editor is a safe sandbox: nothing you do there changes your original source file. You are building a repeatable recipe of steps, not editing the raw data directly." },

      { type: 'heading', content: 'Common cleanup transformations' },
      { type: 'list', items: [
        'Remove Columns — right-click a column header (like "Notes") → Remove, to drop columns you do not need',
        'Remove Duplicates — select a column (like Order ID) → Remove Duplicates, to eliminate accidental repeat rows',
        'Split Column — select "Full Name" → Split Column → By Delimiter → Space, to turn one column into First Name and Last Name',
        'Change Type — click the data-type icon in a column header to fix a date or number that was imported as plain text',
        'Filter Rows — use the dropdown on any column header, exactly like Excel\'s normal filter, but the filter becomes a remembered step',
        'Trim / Clean — Transform → Format → Trim, to strip extra spaces from every cell in a column in one click instead of writing a TRIM formula',
      ]},

      { type: 'heading', content: 'The Applied Steps list: your recorded recipe' },
      { type: 'paragraph', content: 'Every action you take in the Power Query Editor appears as a named step in the "Applied Steps" panel on the right — "Removed Columns," "Split Column by Delimiter," "Changed Type," in the exact order you performed them. Click any step to see the data exactly as it looked at that point, and click the small gear icon next to a step to edit its settings without starting over.' },
      { type: 'code', language: 'excel', content: `Applied Steps (example, top to bottom):
1. Source                          (the raw file as imported)
2. Removed Columns                 (dropped "Notes")
3. Split Column by Delimiter        (Full Name → First Name, Last Name)
4. Changed Type                    (Order Date: Text → Date)
5. Removed Duplicates              (based on Order ID)
6. Filtered Rows                   (kept only Status = "Delivered")

-- this entire numbered list re-runs automatically on every refresh,
   against whatever new data is in the source file` },

      { type: 'heading', content: 'Loading the cleaned data back into Excel' },
      { type: 'paragraph', content: 'Once your steps look right, click "Close & Load" (top-left of the Power Query Editor). The cleaned table appears as a normal Excel table in your worksheet — but it remembers where it came from and every step that produced it.' },

      { type: 'heading', content: 'The real payoff: Refresh' },
      { type: 'paragraph', content: "Next week, the same messy export arrives again — different rows, same structure. Instead of redoing every cleanup step by hand, replace the source file (or update it in the same location) and click Data → Refresh All. Every single step you recorded — removing the same columns, splitting the same way, removing new duplicates — replays automatically against the new data in seconds." },
      { type: 'callout', kind: 'warning', content: "Refresh assumes the NEW file has the same column structure as the one you originally built the steps against. If a column gets renamed or its position changes in the new export, a step may fail or grab the wrong column — always spot-check the refreshed result before relying on it." },

      { type: 'heading', content: 'Merging two queries (a Power Query JOIN)' },
      { type: 'paragraph', content: 'Power Query can also combine two separate tables based on a matching column — conceptually identical to the VLOOKUP/INDEX-MATCH lookups from earlier, but done once as a repeatable step instead of a formula in every row. In the Power Query Editor: Home → Merge Queries, pick the second table, and choose the matching column in both (e.g., Product ID). Choose a join type — "Left Outer" (keep everything from the first table, matching what you can from the second) is the most common choice, equivalent to a SQL LEFT JOIN.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Build a small messy table directly in Excel: a "Full Name" column with inconsistent spacing (some names with extra leading/trailing spaces), a "Notes" column you do not need, and a couple of accidentally duplicated rows. Load it into Power Query, trim the names, split Full Name into First and Last, remove the Notes column and the duplicates, then Close & Load. Add one more duplicate row to your original data and practise hitting Refresh All to confirm the cleanup re-runs correctly.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'The capstone project combines everything from this track — lookups, Pivot Tables, conditional formatting, validation, and Power Query — into a single realistic workbook, cleaning a messy export from scratch all the way to a finished summary dashboard.' },
    ],
  },

  {
    id: 'ex-i-capstone',
    title: 'Capstone: End-to-end sales cleanup and reporting workbook',
    duration: '60 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Practice time — no new features here' },
      { type: 'paragraph', content: "This capstone is meant to be done in actual Excel (or Google Sheets), not just read on screen. It combines every Intermediate skill — Power Query cleanup, lookups, a Pivot Table summary, conditional formatting, and data validation — into one realistic workflow: turning a genuinely messy sales export into a clean reporting workbook someone else could open and immediately trust." },
      { type: 'callout', kind: 'tip', content: 'Type the data in exactly as given, including the messy spacing and inconsistent casing — that mess is the point of the exercise.' },

      { type: 'heading', content: 'The scenario' },
      { type: 'paragraph', content: 'You run a small online store. Your billing system exported this raw sales data into a sheet called "RawSales" — duplicated rows, inconsistent city casing, and all:' },
      { type: 'list', items: [
        'Order ID | Customer | City | Product ID | Quantity | Order Date',
        'O1001 | aditi rao | mumbai | P101 | 3 | 01-Jun-2024',
        'O1002 | ROHAN KUMAR |  bengaluru | P102 | 2 | 02-Jun-2024',
        'O1003 | Priya Sharma | Delhi  | P103 | 1 | 03-Jun-2024',
        'O1003 | Priya Sharma | Delhi  | P103 | 1 | 03-Jun-2024',
        'O1004 | sarah chen | Mumbai | P104 | 5 | 04-Jun-2024',
        'O1005 | Marcus Johnson |  delhi | P105 | 1 | 05-Jun-2024',
        'O1006 | aditi rao | Mumbai | P104 | 4 | 06-Jun-2024',
        'O1007 | James Okonkwo | bengaluru | P101 | 2 | 07-Jun-2024',
      ]},
      { type: 'paragraph', content: 'Note row O1003 appears twice — a genuine duplicate from the export glitch. Create a "Products" sheet too, reusing the Product ID, Name, Price table from the earlier mini project (P101–P105).' },

      { type: 'heading', content: 'Step 1 — Clean it with Power Query' },
      { type: 'list', items: [
        'Load the RawSales table into Power Query',
        'Trim the Customer and City columns to remove extra spaces',
        'Use a "Capitalize Each Word" / PROPER-style transform on City so "mumbai", "Mumbai", and " mumbai " all become "Mumbai"',
        'Remove duplicate rows (based on Order ID)',
        'Change the Order Date type to a proper Date if it was not detected automatically',
        'Close & Load the result as a clean table called "Sales"',
      ]},

      { type: 'heading', content: 'Step 2 — Enrich it with lookups' },
      { type: 'paragraph', content: 'On the cleaned Sales sheet, add a Product Name and Price column using VLOOKUP or INDEX/MATCH against the Products sheet, and a Revenue column (Quantity × Price).' },
      { type: 'code', language: 'excel', content: `Product Name (example):
=VLOOKUP(D2, Products!A:C, 2, FALSE)

Price (example):
=INDEX(Products!C:C, MATCH(D2, Products!A:A, 0))

Revenue (example):
=E2*Price_column_here` },

      { type: 'heading', content: 'Step 3 — Summarise it with a Pivot Table' },
      { type: 'paragraph', content: 'Build a Pivot Table from the enriched Sales data: City in Rows, Product Name in Columns, Revenue in Values. Add a Filter for Order Date so the dashboard can be narrowed to a specific period later.' },

      { type: 'heading', content: 'Step 4 — Highlight what matters' },
      { type: 'paragraph', content: 'Back on the Sales sheet, add formula-based Conditional Formatting that highlights any row green if Revenue is above 3000 (a "big order" worth noting), using the same locked-column pattern from the formatting lesson.' },
      { type: 'code', language: 'excel', content: `Conditional formatting formula (select the data range first):
=$H2>3000
-- adjust H to whichever column your Revenue ended up in` },

      { type: 'heading', content: 'Step 5 — Protect future data entry' },
      { type: 'paragraph', content: 'Add a few new blank rows at the bottom of the Sales sheet for future manual entries, and apply Data Validation to the City column on those new rows: a dropdown restricted to Mumbai, Delhi, Bengaluru — so the inconsistent-casing problem you just cleaned up cannot happen again going forward.' },

      { type: 'heading', content: 'Step 6 — Make it refreshable' },
      { type: 'paragraph', content: 'Add one more row to the original RawSales data (a new order, with deliberately messy casing like " CHENNAI "), then run Refresh All. Confirm the Power Query cleanup re-applies automatically, the lookups pick up the new row, and the Pivot Table total changes after you refresh it too.' },
      { type: 'callout', kind: 'warning', content: "Remember: Power Query and Pivot Tables refresh independently. Refreshing the Power Query step does not automatically refresh the Pivot Table built on top of it — you may need Data → Refresh All to update everything in one go." },

      { type: 'heading', content: "You've finished the Excel Intermediate track" },
      { type: 'paragraph', content: "If you built this end-to-end — cleaning a genuinely messy export, enriching it with lookups, summarising it with a Pivot Table, highlighting what matters, and locking down future entries — you can do real, job-ready Excel reporting work. That combination — clean, lookup, summarise, format, validate — covers the vast majority of real spreadsheet work in any job." },
      { type: 'paragraph', content: "The Advanced track goes one level deeper: Power Pivot and the Data Model (connecting multiple tables like a mini-database inside Excel, without VLOOKUP), DAX measures (the formula language behind Power Pivot and Power BI), array formulas, and a first look at automating repetitive tasks with simple Macros. When ready, switch to Advanced from the sidebar." },
    ],
  },
]

/* ════════════════════════════════════════════════════════════════
   EXCEL — ADVANCED (full real track)
   One running dataset throughout: a small electronics & home-goods
   store with three real tables — Sales, Products, Customers —
   used across the Data Model, DAX, array formulas, a macro, and
   the final dashboard, so every lesson builds on the last.
   ════════════════════════════════════════════════════════════════ */
const EXCEL_ADVANCED = [
  {
    id: 'ex-a-1',
    title: 'Power Pivot and the Data Model',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'The limit of VLOOKUP at scale' },
      { type: 'paragraph', content: 'VLOOKUP and INDEX/MATCH work fine for a few thousand rows and a couple of lookup tables. But imagine a real retail business: a Sales table with 200,000 transaction rows, a Products table, a Customers table, and a Stores table. Writing VLOOKUP formulas down 200,000 rows for three different lookups each is slow to calculate, bloats the file size enormously, and breaks the moment someone inserts a column. Power Pivot solves this by connecting tables the way a real database does — through relationships, not formulas copied down every row.' },

      { type: 'heading', content: 'The running dataset for this whole track' },
      { type: 'paragraph', content: 'Three tables, used in every lesson from here on. Type them into three separate sheets.' },
      { type: 'paragraph', content: '"Sales" — one row per transaction:' },
      { type: 'list', items: [
        'Sale ID | Date | Customer ID | Product ID | Quantity',
        'S1 | 01-Jan-2024 | C1 | P1 | 2',
        'S2 | 03-Jan-2024 | C2 | P2 | 1',
        'S3 | 15-Feb-2024 | C1 | P3 | 1',
        'S4 | 02-Mar-2024 | C3 | P1 | 3',
        'S5 | 20-Mar-2024 | C2 | P4 | 2',
        'S6 | 05-Apr-2024 | C1 | P2 | 1',
        'S7 | 18-Apr-2024 | C4 | P3 | 2',
        'S8 | 02-May-2024 | C3 | P4 | 1',
        '(in your own sheet, extend this to 30-40 rows spanning Jan-Jun 2024, reusing these Customer and Product IDs so the relationships have real volume to summarise)',
      ]},
      { type: 'paragraph', content: '"Products" — one row per product:' },
      { type: 'list', items: [
        'Product ID | Name | Category | Price',
        'P1 | Wireless Mouse | Electronics | 799',
        'P2 | Table Lamp | Home Goods | 1299',
        'P3 | Cotton T-Shirt | Apparel | 599',
        'P4 | Running Shoes | Apparel | 3499',
      ]},
      { type: 'paragraph', content: '"Customers" — one row per customer:' },
      { type: 'list', items: [
        'Customer ID | Name | City',
        'C1 | Aditi Rao | Mumbai',
        'C2 | Rohan Kumar | Bengaluru',
        'C3 | Priya Sharma | Delhi',
        'C4 | Sarah Chen | Mumbai',
      ]},
      { type: 'paragraph', content: 'Notice the Sales table is intentionally "thin" — it only has IDs, quantities, and dates. The Product names, prices, and customer cities live in their own tables. This shape (one central "facts" table referencing several small "lookup" tables) is exactly how real databases and BI tools structure data, and is called a star schema.' },

      { type: 'heading', content: 'Enabling Power Pivot' },
      { type: 'paragraph', content: 'In Excel for Windows, Power Pivot is a built-in add-in that may need enabling once: File → Options → Add-ins → Manage: COM Add-ins → Go → check "Microsoft Power Pivot for Excel." A new "Power Pivot" tab then appears in the ribbon.' },

      { type: 'heading', content: 'Adding tables to the Data Model' },
      { type: 'paragraph', content: 'Select any cell inside the Sales table, then Power Pivot → Add to Data Model (or Insert → PivotTable → check "Add this data to the Data Model" when building a pivot). Repeat for Products and Customers. All three tables now exist inside one combined Data Model, separate from the worksheet cells themselves.' },

      { type: 'heading', content: 'Creating relationships' },
      { type: 'paragraph', content: 'In the Power Pivot window, go to Diagram View. You will see all three tables as boxes with their columns listed. Drag from Sales[Product ID] to Products[Product ID] to draw a relationship line — this tells Excel "these columns mean the same thing, use this to connect the tables." Repeat by dragging from Sales[Customer ID] to Customers[Customer ID].' },
      { type: 'code', language: 'excel', content: `Relationships created (visualised as lines in Diagram View):

Sales[Product ID]   ──────  Products[Product ID]
Sales[Customer ID]  ──────  Customers[Customer ID]

-- Sales is the "many" side (many sales can share one product),
   Products and Customers are the "one" side — this is a classic
   one-to-many relationship, identical in concept to a SQL foreign key` },
      { type: 'callout', kind: 'warning', content: 'A relationship can only be built between columns of the same data type, and the "one" side (Products[Product ID], Customers[Customer ID]) must have no duplicate values — if Product ID repeats within the Products table itself, Excel will refuse to create the relationship until that is fixed.' },

      { type: 'heading', content: "Why this beats VLOOKUP for this kind of reporting" },
      { type: 'paragraph', content: 'Once the relationship exists, a Pivot Table built from the Data Model can drag Category (from Products) and City (from Customers) directly alongside Quantity (from Sales) — Excel automatically uses the relationships to match everything correctly, with zero VLOOKUP formulas, zero extra "Name" or "Price" columns copied into the Sales sheet, and a much smaller file even at hundreds of thousands of rows.' },
      { type: 'paragraph', content: 'Build a quick Pivot Table now: Insert → PivotTable → "From Data Model." Drag Products[Category] into Rows and Sales[Quantity] into Values. Even though Category lives in a completely different table from Quantity, the relationship lets them combine correctly.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'A Pivot Table from the Data Model can already Sum and Count. The next module introduces DAX — the formula language for writing your own custom calculations on top of this same Data Model, like "average revenue per customer" or "this month vs last month," which plain Sum/Count cannot do alone.' },
    ],
  },

  {
    id: 'ex-a-2',
    title: 'DAX measures',
    duration: '40 min',
    sections: [
      { type: 'heading', content: 'What DAX is, in one sentence' },
      { type: 'paragraph', content: 'DAX (Data Analysis Expressions) is the formula language for the Data Model you just built — it looks a little like Excel formulas, but every DAX formula is aware of the relationships between tables, and of whatever filter context a Pivot Table or slicer is currently applying. It is the same language used inside Power BI, so everything here transfers directly.' },

      { type: 'heading', content: 'Your first measure: Total Revenue' },
      { type: 'paragraph', content: 'The Sales table only has Quantity — Price lives in Products. In plain Excel you would need a lookup column; in DAX, a measure can reach across the relationship directly.' },
      { type: 'paragraph', content: 'In the Power Pivot window, click an empty cell in the Calculation Area below the Sales table, and type:' },
      { type: 'code', language: 'excel', content: `Total Revenue := SUMX(Sales, Sales[Quantity] * RELATED(Products[Price]))

-- SUMX iterates row by row over the Sales table
-- for each row, RELATED(Products[Price]) reaches across the
   relationship to fetch that row's matching product price
-- the result: quantity × price, summed across every sale —
   exactly the Revenue column you used to build with a formula,
   except this single measure now works correctly inside ANY
   pivot table, automatically respecting whatever filters are applied` },
      { type: 'callout', kind: 'tip', content: 'RELATED only works when there IS a relationship to follow, and you are on the "many" side looking up to the "one" side — exactly the Sales → Products direction set up in the previous lesson. Trying to use RELATED from Products to look up something in Sales (the reverse direction) does not work the same way; that needs a different function (RELATEDTABLE), which is a more advanced topic than this measure needs.' },

      { type: 'heading', content: 'Why a measure is different from a calculated column' },
      { type: 'paragraph', content: 'A calculated column (added per-row, inside a table) computes once and stores a static value per row, like a regular Excel formula. A measure computes on demand, fresh, every time it is dropped into a Pivot Table — automatically recalculating for whatever Rows, Columns, and Filters that specific pivot currently has selected. Total Revenue, as a measure, will show a different correct total depending on whether you slice by City, by Month, or by nothing at all — without you writing separate formulas for each view.' },

      { type: 'heading', content: 'CALCULATE: the most important function in DAX' },
      { type: 'paragraph', content: 'CALCULATE takes a measure and recomputes it under a modified filter — the basis of almost every "compared to X" business question.' },
      { type: 'code', language: 'excel', content: `Mumbai Revenue := CALCULATE([Total Revenue], Customers[City] = "Mumbai")

-- takes the Total Revenue measure you already built, and forces
   the calculation to only consider rows where the customer's city
   (reached via the Sales → Customers relationship) is Mumbai —
   regardless of what filters a pivot table itself might also apply` },
      { type: 'paragraph', content: 'Real-life use: a sales manager wants one column showing total revenue, and a second column next to it showing "Mumbai-only revenue," for comparison, on the very same Pivot Table broken down by month. CALCULATE makes that possible with one extra measure.' },

      { type: 'heading', content: 'Common aggregation measures' },
      { type: 'code', language: 'excel', content: `Total Quantity := SUM(Sales[Quantity])

Number of Sales := COUNTROWS(Sales)

Average Order Size := AVERAGE(Sales[Quantity])

Average Revenue per Sale := DIVIDE([Total Revenue], [Number of Sales])
-- DIVIDE is the safe way to divide in DAX: it returns blank
   instead of a #DIV/0! error if the denominator is ever zero` },
      { type: 'callout', kind: 'warning', content: "Always use DIVIDE(a, b) instead of writing a/b directly in DAX. A plain a/b will produce an error the moment a filtered view has zero matching rows (e.g., a month with no sales) — DIVIDE handles that gracefully and returns blank instead of breaking the whole visual." },

      { type: 'heading', content: 'A first taste of time intelligence' },
      { type: 'paragraph', content: "DAX has built-in functions for common date-based comparisons, as long as your Sales[Date] column is marked as a proper Date table (Power Pivot → Mark as Date Table — do this on the Sales table, or better, build a small separate Calendar table; for this lesson, marking Sales[Date] directly is enough to make the example work)." },
      { type: 'code', language: 'excel', content: `Revenue Year to Date := TOTALYTD([Total Revenue], Sales[Date])

-- in a Pivot Table broken down by month, this measure shows
   the running cumulative total from the start of the year up
   to and including that month — a classic finance/sales report
   pattern that would otherwise need a running-total formula trick` },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Build Total Revenue, Number of Sales, and Average Revenue per Sale as measures on your Sales table. Build a Pivot Table with Products[Category] in Rows and all three measures in Values. Then add a CALCULATE measure that shows revenue for only the "Apparel" category, and confirm it matches what you would get by simply filtering the pivot to Apparel manually.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: "A quick mini project next combines this Data Model and these DAX measures into one mini-report. Then the next lesson moves away from Power Pivot entirely, into array formulas — a way to make a single regular Excel formula (no Data Model needed) operate across an entire range of cells at once." },
    ],
  },

  {
    id: 'ex-mp-7',
    title: 'Mini Project: Sales Performance Mini-Report',
    duration: '25 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: 'This project uses the exact Sales / Products / Customers Data Model and DAX measures from the last two lessons to answer four real business questions a sales manager would actually ask — the kind of mini-report that gets built and rebuilt every month in a real job.' },
      { type: 'list', items: [
        'Concepts used: Data Model relationships, SUMX, RELATED, CALCULATE, DIVIDE',
      ]},

      { type: 'heading', content: 'The task' },
      { type: 'paragraph', content: 'Using the same Sales, Products, and Customers tables and Data Model relationships from the Power Pivot lesson (extend Sales to at least 25-30 rows if you have not already), build these four measures:' },
      { type: 'list', items: [
        'Total Revenue — using SUMX and RELATED, as in the lesson',
        'Number of Customers — a distinct count of customers who have at least one sale (hint: DISTINCTCOUNT(Sales[Customer ID]))',
        'Average Revenue per Customer — Total Revenue divided by Number of Customers, using DIVIDE',
        'Apparel Revenue — Total Revenue filtered to only the Apparel category, using CALCULATE',
      ]},
      { type: 'code', language: 'excel', content: `Total Revenue := SUMX(Sales, Sales[Quantity] * RELATED(Products[Price]))

Number of Customers := DISTINCTCOUNT(Sales[Customer ID])

Average Revenue per Customer := DIVIDE([Total Revenue], [Number of Customers])

Apparel Revenue := CALCULATE([Total Revenue], Products[Category] = "Apparel")` },
      { type: 'heading', content: 'Build the report' },
      { type: 'paragraph', content: 'Build one Pivot Table with Customers[City] in Rows, and all four measures in Values. This single table now answers: how much revenue per city, how many distinct customers per city, the average spend per customer in each city, and how much of that was Apparel — four real business questions, zero VLOOKUP formulas, all driven by the relationships and measures.' },
      { type: 'callout', kind: 'tip', content: 'If Average Revenue per Customer looks identical across every city, double-check that Number of Customers is actually changing per row in the pivot — a common mistake is forgetting DISTINCTCOUNT and using COUNTROWS instead, which counts sales transactions, not unique customers.' },
    ],
  },

  {
    id: 'ex-a-3',
    title: 'Advanced array formulas',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'A formula that returns more than one value' },
      { type: 'paragraph', content: 'Every formula so far has produced one answer in one cell. An array formula can process — and sometimes return — many values at once from a single formula. Modern Excel (365 / 2021+) made this dramatically easier with Dynamic Arrays; older Excel needed a special entry method. Both are covered here, since real workplaces often have a mix of Excel versions.' },

      { type: 'heading', content: 'SUMPRODUCT: the classic, works-everywhere array formula' },
      { type: 'paragraph', content: 'SUMPRODUCT multiplies corresponding items in two or more ranges together, then sums the results — and it works in every version of Excel ever made, no special entry required.' },
      { type: 'code', language: 'excel', content: `Using the Sales-style data: Quantity in column B, Price in column C (B2:B30, C2:C30)

=SUMPRODUCT(B2:B30, C2:C30)
-- multiplies B2*C2, B3*C3, B4*C4... and sums all of those products
-- equivalent to adding a helper "Revenue" column and then SUM-ing it,
   but done in one single formula with no extra column needed

A conditional version — total revenue for Mumbai customers only
(City in column D):
=SUMPRODUCT((D2:D30="Mumbai") * B2:B30 * C2:C30)
-- (D2:D30="Mumbai") produces an array of TRUE/FALSE for each row,
   which Excel treats as 1/0 when multiplied — rows that are not
   Mumbai contribute zero to the total automatically` },
      { type: 'callout', kind: 'tip', content: "This conditional SUMPRODUCT pattern — a TRUE/FALSE condition multiplied into the calculation — is one of the most useful tricks in advanced Excel. It lets you build a SUMIFS-style calculation with extra arithmetic (like quantity × price) that SUMIFS alone cannot do, since SUMIFS can only sum one existing column, not a multiplication of two." },

      { type: 'heading', content: 'Legacy array formulas: Ctrl+Shift+Enter' },
      { type: 'paragraph', content: 'Before Dynamic Arrays existed, some formulas needed to be confirmed with Ctrl+Shift+Enter instead of just Enter, to tell older Excel "treat this as an array calculation." Excel would show the formula wrapped in curly braces {} in the formula bar (which you never type yourself — Excel adds them).' },
      { type: 'code', language: 'excel', content: `{=SUM(IF(D2:D30="Mumbai", B2:B30*C2:C30))}
-- entered with Ctrl+Shift+Enter in older Excel, achieving the
   same Mumbai-only revenue total as the SUMPRODUCT example above
-- the curly braces appear automatically; you only press
   Ctrl+Shift+Enter instead of Enter when finishing the formula` },
      { type: 'callout', kind: 'warning', content: 'If you are on Excel 365 or 2021+, you almost never need Ctrl+Shift+Enter anymore — modern Excel treats array calculations as native behaviour. It is still worth recognising, though, since older workbooks (and older colleagues\' habits) are full of curly-brace formulas, and editing one incorrectly without re-confirming with Ctrl+Shift+Enter can silently turn it into a single-cell, wrong-answer formula.' },

      { type: 'heading', content: 'Dynamic Arrays: modern Excel\'s big upgrade' },
      { type: 'paragraph', content: 'In Excel 365 / 2021+, several newer functions return an array of results that automatically "spills" into as many cells as needed below and to the right — no Ctrl+Shift+Enter, no manually sizing a range first.' },
      { type: 'code', language: 'excel', content: `=UNIQUE(D2:D30)
-- spills a list of every distinct city that appears in the data,
   with no duplicates — instantly, no Remove Duplicates button needed

=SORT(UNIQUE(D2:D30))
-- the same unique list, alphabetically sorted

=FILTER(A2:E30, D2:D30="Mumbai")
-- spills every full row where the City column equals "Mumbai" —
   like an AutoFilter, but as a live formula that updates
   automatically as the source data changes

=SEQUENCE(12)
-- spills the numbers 1 through 12 down a column — handy for
   quickly generating a list of month numbers for a template` },
      { type: 'paragraph', content: 'Real-life example: instead of manually building a dropdown list of cities for Data Validation, =SORT(UNIQUE(Customers[City])) generates that list automatically and keeps it current as new cities are added to the Customers table — no maintenance required.' },

      { type: 'heading', content: 'Combining dynamic arrays with XLOOKUP' },
      { type: 'paragraph', content: 'XLOOKUP (from the Intermediate track) can return an array too, making it spill multiple columns at once.' },
      { type: 'code', language: 'excel', content: `=XLOOKUP(A2, Products!A:A, Products!B:D)
-- if Products columns B:D are Name, Category, Price, this single
   formula spills all three values across three cells — one
   XLOOKUP instead of three separate ones, each with its own
   column number to manage` },

      { type: 'heading', content: '#SPILL! — the one new error dynamic arrays introduce' },
      { type: 'paragraph', content: 'If a dynamic array formula needs to spill into cells that already contain something else, Excel shows #SPILL! instead of overwriting your existing data. Clear the cells in the way, and the formula spills correctly.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Using your Sales-style data, build: a SUMPRODUCT formula for total revenue filtered to one specific product; a =SORT(UNIQUE(...)) formula listing every distinct customer city; and a =FILTER(...) formula showing only the rows where Quantity is greater than 1.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'Array formulas remove repetitive formula-writing. The next module removes repetitive clicking and menu navigation instead — Macros and VBA, for automating multi-step tasks (formatting, copying, cleaning) you find yourself doing the same way over and over.' },
    ],
  },

  {
    id: 'ex-a-4',
    title: 'Macros and VBA basics',
    duration: '40 min',
    sections: [
      { type: 'heading', content: 'What a macro actually is' },
      { type: 'paragraph', content: 'A macro is a recorded (or written) sequence of steps that Excel can replay automatically, with one click or keyboard shortcut, instead of you performing them by hand every time. If you ever find yourself doing the exact same five clicks every Monday morning on a fresh export — formatting headers, deleting a column, applying a filter — that is a macro waiting to be recorded.' },

      { type: 'heading', content: 'Recording your first macro' },
      { type: 'paragraph', content: 'View → Macros → Record Macro (or enable the Developer tab: File → Options → Customize Ribbon → check "Developer," then Developer → Record Macro). Give it a name with no spaces (like FormatHeaders), then perform the actions you want recorded — for example, selecting row 1, making it bold, and applying a background colour. Click Stop Recording when done.' },
      { type: 'callout', kind: 'tip', content: 'Save the workbook as a Macro-Enabled Workbook (.xlsm), not a regular .xlsx — a normal Excel file silently strips out any macros when you save, with no warning, which is the single most common reason a "vanished macro" surprises people the next day.' },

      { type: 'heading', content: 'Looking at the recorded code' },
      { type: 'paragraph', content: 'Developer → Visual Basic (or Alt+F11) opens the VBA Editor, where your recorded macro appears as actual code you can read and edit. A simple recorded "format headers" macro might look like this:' },
      { type: 'code', language: 'excel', content: `Sub FormatHeaders()
    Rows("1:1").Select
    Selection.Font.Bold = True
    Selection.Interior.Color = RGB(220, 230, 241)
End Sub

-- Sub ... End Sub wraps every macro
-- each line is one recorded action, translated into VBA code
-- you can edit these lines directly instead of re-recording
   from scratch if you want to tweak the colour or range` },

      { type: 'heading', content: 'Writing simple VBA by hand' },
      { type: 'paragraph', content: 'Recording is great for simple, linear tasks, but real automation usually needs logic — loops, conditions — which recording cannot capture. A small amount of hand-written VBA covers most of what is missing.' },
      { type: 'code', language: 'excel', content: `Sub HighlightBigOrders()
    Dim i As Long
    Dim lastRow As Long
    lastRow = Cells(Rows.Count, "B").End(xlUp).Row
    -- finds the last row with data in column B, so this works
       no matter how many rows the Sales sheet currently has

    For i = 2 To lastRow
        If Cells(i, "E").Value > 3000 Then
            Cells(i, "E").Interior.Color = RGB(198, 239, 206)
        End If
    Next i

    MsgBox "Done! Highlighted all rows with Revenue over 3000."
End Sub

-- this single macro does, in one click, what would otherwise be
   a manual conditional formatting rule — and additionally
   shows a confirmation popup when finished` },
      { type: 'paragraph', content: 'Breaking it down: Dim declares a variable (i for the loop counter, lastRow for how far down the data goes). Cells(Rows.Count, "B").End(xlUp).Row is the standard VBA trick for finding the last used row in a column, regardless of how the data grows or shrinks. The For...Next loop walks down every row, checking column E and colouring it if the condition is met. MsgBox shows a popup when the macro finishes.' },

      { type: 'heading', content: 'Running a macro' },
      { type: 'list', items: [
        'From the VBA Editor itself: press F5 with the cursor inside the Sub',
        'Developer → Macros (or Alt+F8) → select the macro by name → Run',
        'Assign it to a button: Insert a Shape or Form Control button on the sheet, right-click → Assign Macro',
        'Assign a keyboard shortcut: Developer → Macros → Options → type a letter for Ctrl+Shift+<letter>',
      ]},

      { type: 'heading', content: 'A macro that loops through a real range' },
      { type: 'paragraph', content: 'Real automation often means doing something to every row of a table — exactly the kind of repetitive task macros exist for.' },
      { type: 'code', language: 'excel', content: `Sub AddTenPercentBonusColumn()
    Dim i As Long
    Dim lastRow As Long
    lastRow = Cells(Rows.Count, "A").End(xlUp).Row

    Cells(1, "F").Value = "Bonus (10%)"
    For i = 2 To lastRow
        Cells(i, "F").Value = Cells(i, "E").Value * 0.1
    Next i
End Sub

-- adds a header, then loops down every row writing a calculated
   value into column F — equivalent to writing a formula and
   dragging the fill handle down, but reusable as one click on
   any sheet shaped the same way` },

      { type: 'heading', content: 'Security: why macros show a warning' },
      { type: 'paragraph', content: 'When you open a .xlsm file from someone else, Excel shows a yellow "Security Warning — Macros have been disabled" bar by default. This exists because macros can run essentially any action on your computer, and malicious macros are a real, common way to spread malware through email attachments.' },
      { type: 'callout', kind: 'warning', content: 'Only click "Enable Content" on a macro-enabled workbook if you trust where it came from and ideally have looked at the VBA code (Alt+F11) yourself. Never enable macros on an unexpected file from an unknown sender, even if the filename looks like an "Invoice" or "Urgent Report."' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Record a simple macro that bolds and colours your Sales sheet header row. Then open the VBA Editor, find the recorded code, and hand-modify it to also set the row height to 20. Finally, write a small hand-typed macro (using the HighlightBigOrders pattern) that highlights any Sales row where Quantity is greater than 2.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: "A second mini project next combines dynamic arrays and a macro into a one-click refresh tool. Then the final lesson puts everything from this entire track together — Pivot Tables, slicers, conditional formatting, and dynamic arrays — into a single, polished, interactive dashboard." },
    ],
  },

  {
    id: 'ex-mp-8',
    title: 'Mini Project: One-Click Top Cities Report',
    duration: '25 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: 'This project combines a dynamic array formula with a small macro — a very common real combination, where formulas do the calculation and a macro does the one-click formatting and refreshing around it.' },
      { type: 'list', items: [
        'Concepts used: SORT/UNIQUE/FILTER dynamic arrays, SUMPRODUCT, VBA loops, MsgBox',
      ]},

      { type: 'heading', content: 'The task' },
      { type: 'paragraph', content: 'Using your Sales-style data (Date, Customer ID, Product ID, Quantity, plus a City column you can pull in with XLOOKUP from Customers, and a Revenue column from SUMPRODUCT-style logic or a plain Price lookup), build a small "Top Cities" report area on a new sheet:' },
      { type: 'list', items: [
        'A dynamic array formula listing every distinct city: =SORT(UNIQUE(...))',
        "Next to each city, a SUMPRODUCT formula calculating that city's total revenue (quantity × price, filtered to that city)",
        'A macro called HighlightTopCity that finds the row with the highest revenue in this report and colours it gold',
      ]},
      { type: 'code', language: 'excel', content: `City list (assume it spills into A2:A5):
=SORT(UNIQUE(Sales_City_Range))

Revenue per city (row 2 example, City in A2):
=SUMPRODUCT((Sales_City_Range=A2) * Sales_Quantity_Range * Sales_Price_Range)

VBA macro:
Sub HighlightTopCity()
    Dim i As Long, lastRow As Long, maxRow As Long, maxVal As Double
    lastRow = Cells(Rows.Count, "A").End(xlUp).Row
    maxVal = 0

    For i = 2 To lastRow
        If Cells(i, "B").Value > maxVal Then
            maxVal = Cells(i, "B").Value
            maxRow = i
        End If
    Next i

    Cells(maxRow, "A").Interior.Color = RGB(255, 215, 0)
    Cells(maxRow, "B").Interior.Color = RGB(255, 215, 0)
    MsgBox "Top city: " & Cells(maxRow, "A").Value
End Sub` },
      { type: 'callout', kind: 'tip', content: 'This loop pattern — tracking a running maxVal and the row it was found on (maxRow) as you scan down — is one of the most reusable small building blocks in VBA. The same shape works for "find the cheapest," "find the most recent," or "find the longest," just by changing the comparison and the column.' },
    ],
  },

  {
    id: 'ex-a-5',
    title: 'Building interactive dashboards',
    duration: '40 min',
    sections: [
      { type: 'heading', content: 'A dashboard is a destination, not a new feature' },
      { type: 'paragraph', content: 'Everything in this lesson is a combination of tools already covered — Pivot Tables and Pivot Charts, Slicers, Conditional Formatting, named ranges — arranged deliberately on one screen so a non-technical person can answer their own questions by clicking, without ever touching a formula.' },

      { type: 'heading', content: 'Designing before building' },
      { type: 'paragraph', content: 'The biggest mistake in dashboard-building is opening Excel and immediately dragging charts around. Decide first: who is this for, and what are the 3-5 questions they actually need answered? For our running dataset, a sales manager likely needs: total revenue this period, revenue by city, revenue by category, and a way to drill into any specific month.' },
      { type: 'list', items: [
        'KPI cards — a handful of single big numbers (Total Revenue, Number of Sales, Average Order Value) for an instant read at the top',
        'One or two charts answering "by what" questions (revenue by city, revenue by category)',
        'A way to filter the whole dashboard at once (slicers), so the same layout serves "this month" or "all of last quarter" without rebuilding anything',
      ]},

      { type: 'heading', content: 'Building KPI cards' },
      { type: 'paragraph', content: 'A KPI card is just a cell (or a few merged cells) showing one big number, usually pulling from a DAX measure or a Pivot Table\'s GETPIVOTDATA result, styled with a large font and a short label underneath.' },
      { type: 'code', language: 'excel', content: `=GETPIVOTDATA("Total Revenue", PivotTable_Anchor_Cell)
-- pulls a single specific number OUT of an existing Pivot Table,
   so you can display it as a standalone "card" anywhere on the
   dashboard sheet, styled however you like, instead of being
   stuck inside the pivot's own grid layout` },
      { type: 'callout', kind: 'tip', content: 'If GETPIVOTDATA results look fragile or break when the pivot is rearranged, you can disable Excel\'s automatic GETPIVOTDATA-on-click behaviour (File → Options → Formulas → uncheck "Use GetPivotData functions for PivotTable references") and just type plain cell references into the pivot grid instead — simpler for a dashboard you control the layout of yourself.' },

      { type: 'heading', content: 'One pivot table, multiple charts, one slicer' },
      { type: 'paragraph', content: 'Build a single Pivot Table from your Data Model with City and Category both available as fields. Insert two separate Pivot Charts from it — one showing revenue by City, one showing revenue by Category. Then Insert → Slicer, choose a Date field, and connect that slicer to BOTH pivot charts: right-click the slicer → Report Connections → check both Pivot Tables. Now one click on the slicer filters every chart on the dashboard simultaneously.' },

      { type: 'heading', content: 'Arranging the dashboard sheet' },
      { type: 'list', items: [
        'Hide gridlines on the dashboard sheet (View → uncheck Gridlines) for a cleaner, less "spreadsheet-y" look',
        'Move the underlying Pivot Tables themselves to a separate hidden helper sheet, keeping the dashboard sheet showing only charts, slicers, and KPI cards',
        'Group related visuals close together, and leave consistent spacing — a dashboard that looks intentional is read faster and trusted more than one that looks like leftover working area',
        'Freeze the slicer and KPI row at the top if the dashboard sheet ever needs scrolling, so filters stay visible',
      ]},

      { type: 'heading', content: 'Conditional formatting as a dashboard element' },
      { type: 'paragraph', content: 'A small formula-based conditional formatting rule on a KPI card — turning the Average Order Value cell green if it is above a target, red if below — turns a plain number into an instant signal, without needing a chart at all.' },

      { type: 'heading', content: 'Refreshing the whole dashboard at once' },
      { type: 'paragraph', content: 'Data → Refresh All updates every Pivot Table, Pivot Chart, Power Query step, and Data Model calculation on the entire workbook in one click — the single button a dashboard\'s actual daily user needs to know about, without understanding anything about how it was built.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Build a one-sheet dashboard from your running Sales/Products/Customers dataset: 3 KPI cards (Total Revenue, Number of Sales, Average Order Value), two Pivot Charts (revenue by City, revenue by Category), and one Date slicer connected to both charts. Hide gridlines, and confirm that clicking the slicer updates both charts together.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: "The capstone project rebuilds this entire track end-to-end on a single, larger dataset: a Data Model with real DAX measures, a dynamic-array helper report, a one-click macro, and a finished interactive dashboard — the complete advanced Excel workflow in one project." },
    ],
  },

  {
    id: 'ex-a-capstone',
    title: 'Capstone: Interactive sales analytics workbook',
    duration: '75 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Practice time — no new features here' },
      { type: 'paragraph', content: 'This capstone combines every Advanced skill into one realistic deliverable: the kind of self-service analytics workbook a data analyst hands to a sales director, who can then explore it themselves without ever asking for a new report.' },
      { type: 'callout', kind: 'tip', content: 'Build this in actual Excel, not just by reading. Extend the running Sales/Products/Customers tables to at least 40-50 sales rows spanning several months, so the time-based slicer and charts have something real to show.' },

      { type: 'heading', content: 'Step 1 — Build the Data Model' },
      { type: 'paragraph', content: 'Using the Sales, Products, and Customers tables from this track, add all three to the Data Model and create the two relationships: Sales[Product ID] → Products[Product ID], and Sales[Customer ID] → Customers[Customer ID].' },

      { type: 'heading', content: 'Step 2 — Write the DAX measures' },
      { type: 'code', language: 'excel', content: `Total Revenue := SUMX(Sales, Sales[Quantity] * RELATED(Products[Price]))
Number of Sales := COUNTROWS(Sales)
Number of Customers := DISTINCTCOUNT(Sales[Customer ID])
Average Order Value := DIVIDE([Total Revenue], [Number of Sales])
Apparel Revenue := CALCULATE([Total Revenue], Products[Category] = "Apparel")` },

      { type: 'heading', content: 'Step 3 — Build a dynamic-array helper report' },
      { type: 'paragraph', content: 'On a separate "Helpers" sheet, build a =SORT(UNIQUE(...)) list of every distinct city, with a SUMPRODUCT-based revenue total next to each — a lightweight cross-check that does not rely on the Data Model at all, useful for spot-checking the Pivot Table numbers are correct.' },

      { type: 'heading', content: 'Step 4 — Build the dashboard' },
      { type: 'list', items: [
        'A Pivot Table from the Data Model with City and Category available as fields',
        'Two Pivot Charts: revenue by City, revenue by Category',
        '3-4 KPI cards pulling from your DAX measures: Total Revenue, Number of Sales, Number of Customers, Average Order Value',
        'A Date slicer connected to both Pivot Charts via Report Connections',
        'Conditional formatting on the Average Order Value KPI card: green if above 1500, red if below',
      ]},

      { type: 'heading', content: 'Step 5 — Automate the finishing touch' },
      { type: 'paragraph', content: 'Write a macro called RefreshDashboard that refreshes the whole workbook (ActiveWorkbook.RefreshAll) and then shows a MsgBox confirming "Dashboard refreshed as of " followed by today\'s date (hint: use VBA\'s Format(Date, "dd-mmm-yyyy") to format it). Assign this macro to a button placed at the top of the dashboard sheet.' },
      { type: 'code', language: 'excel', content: `Sub RefreshDashboard()
    ActiveWorkbook.RefreshAll
    MsgBox "Dashboard refreshed as of " & Format(Date, "dd-mmm-yyyy")
End Sub` },
      { type: 'callout', kind: 'warning', content: 'ActiveWorkbook.RefreshAll is asynchronous for some data sources, meaning the MsgBox can occasionally appear before a slow refresh has actually finished. For a workbook built entirely from local Data Model tables (as this capstone is), this is not a practical concern — it becomes one only with external data sources like databases or web queries, which is outside the scope of this capstone.' },

      { type: 'heading', content: 'Step 6 — Save it correctly' },
      { type: 'paragraph', content: 'Save the file as .xlsm (Macro-Enabled Workbook) — saving as a regular .xlsx will silently delete the macro you just built, with no warning shown.' },

      { type: 'heading', content: "You've finished the Excel Advanced track" },
      { type: 'paragraph', content: "You can now connect multiple tables through a real Data Model instead of fragile lookup formulas, write DAX measures that recalculate correctly under any filter, write array formulas and dynamic arrays that replace entire helper columns with one formula, automate repetitive multi-step tasks with VBA macros, and assemble all of it into a single interactive dashboard a non-technical person can actually use. This is the same skill set that underlies Power BI report-building, which is exactly where the natural next step from here leads." },
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

  {
    id: 'pb-b-2',
    title: 'Loading data from Excel and CSV',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'The running example for this whole track' },
      { type: 'paragraph', content: 'Imagine "Brew & Bite," a small chain of 3 cafés (Mumbai, Delhi, Bengaluru) selling tea, coffee, and snacks. The owner keeps daily sales in an Excel file: Date, City, Item, Category, Quantity, Price. Every module from here on builds one real dashboard from this exact dataset, the same way a real analyst would be handed a spreadsheet and asked to "make sense of this."' },
      { type: 'list', items: [
        'Date | City | Item | Category | Quantity | Price',
        '01-Jun-2024 | Mumbai | Masala Chai | Beverage | 42 | 25',
        '01-Jun-2024 | Mumbai | Samosa | Snack | 30 | 20',
        '01-Jun-2024 | Delhi | Filter Coffee | Beverage | 25 | 40',
        '01-Jun-2024 | Bengaluru | Filter Coffee | Beverage | 38 | 40',
        '02-Jun-2024 | Mumbai | Masala Chai | Beverage | 50 | 25',
        '02-Jun-2024 | Delhi | Samosa | Snack | 22 | 20',
        '(in practice, this file would have hundreds or thousands of rows spanning months — type in 20-30 rows yourself, reusing these cities and items, to follow along)',
      ]},

      { type: 'heading', content: 'Get Data: the starting point of every report' },
      { type: 'paragraph', content: 'Open Power BI Desktop and click "Get Data" on the Home ribbon (or the welcome screen). This opens a list of every source Power BI can connect to — Excel, CSV/Text, SQL Server, web pages, folders, and dozens more. For this track, choose Excel Workbook, browse to your Brew & Bite file, and select it.' },
      { type: 'paragraph', content: 'A Navigator window appears, listing every sheet and named table found inside the file. Tick the checkbox next to the sheet containing your sales data and a preview appears on the right, so you can confirm you picked the right one before loading anything.' },

      { type: 'heading', content: 'Load vs Transform Data: a decision every single time' },
      { type: 'paragraph', content: 'The Navigator window gives you two buttons: "Load" and "Transform Data." This choice matters every time you connect to anything.' },
      { type: 'list', items: [
        'Load — brings the data in exactly as it is, with no changes. Fine only when you are completely certain the data is already clean.',
        'Transform Data — opens the Power Query Editor first, where you can fix problems (wrong data types, extra spaces, unwanted columns) before the data ever lands in your report.',
      ]},
      { type: 'callout', kind: 'tip', content: 'As a habit, always click "Transform Data" instead of "Load," even if the data looks clean at a glance. It costs nothing if there is genuinely nothing to fix, and saves you from re-importing everything later the moment you spot a problem after the fact.' },

      { type: 'heading', content: 'CSV files: the simpler, more universal format' },
      { type: 'paragraph', content: 'Get Data → Text/CSV works almost identically to the Excel flow, but a CSV file has no sheets or tables to choose from — it is just one flat block of comma-separated values. Power BI shows a preview with its best guess at column types (text, whole number, date), which you can override before loading.' },
      { type: 'paragraph', content: 'Real-life parallel: a billing system might export "today\'s transactions" as a fresh CSV every morning. Because a CSV has a fixed, predictable shape, it is one of the most common automated data sources feeding into real dashboards.' },

      { type: 'heading', content: 'The Data view: confirming what actually loaded' },
      { type: 'paragraph', content: 'After loading, click the Data view icon on the far left (the table-grid icon, second from top). This shows your data exactly as Power BI now understands it — every row, every column, and crucially, the data type of each column shown by a small icon in the column header (123 for whole numbers, a calendar for dates, ABC for text).' },
      { type: 'callout', kind: 'warning', content: 'A date column that loads showing a calendar icon as "General Date" or, worse, as plain text (ABC) will silently break later date-based visuals and time filters. Always check the Data view immediately after loading — catching a wrong data type here takes ten seconds; catching it after building five visuals on top of it does not.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Build the Brew & Bite spreadsheet yourself (20-30 rows across the 3 cities). Save it as an .xlsx file, then load it into Power BI Desktop using Get Data → Excel, clicking "Transform Data" rather than "Load." Open the Data view afterward and confirm the Date column shows a calendar icon, and Quantity/Price show the numeric icon.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'Real spreadsheets are rarely as clean as the example above. The next module covers Power Query — the same cleanup tool from the Excel course, now used to fix messy real-world exports before they ever reach your report.' },
    ],
  },

  {
    id: 'pb-b-3',
    title: 'Cleaning data with Power Query',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'The same Power Query, a familiar engine' },
      { type: 'paragraph', content: 'If you have used Power Query inside Excel, this entire module will feel familiar — Power BI uses the exact same Power Query Editor and the exact same idea: record a sequence of cleanup steps once, and replay them automatically every time the data refreshes.' },
      { type: 'paragraph', content: 'Real export from Brew & Bite\'s point-of-sale system rarely looks as tidy as the table from the last module. A realistic export might have: city names with inconsistent spacing and casing ("mumbai", " Mumbai", "MUMBAI"), a few duplicated rows from a register glitch, and a "Notes" column nobody needs.' },

      { type: 'heading', content: 'Opening the Power Query Editor' },
      { type: 'paragraph', content: 'Home → Transform Data opens the editor at any time, even after data has already loaded — you do not need to reload from scratch to start cleaning. Each table you loaded appears as its own query in the left-hand panel.' },

      { type: 'heading', content: 'Common cleanup steps for the Brew & Bite data' },
      { type: 'list', items: [
        'Trim — Transform → Format → Trim, removing extra leading/trailing spaces from the City column',
        'Capitalize Each Word — Transform → Format → Capitalize Each Word, fixing "mumbai" / "MUMBAI" into a consistent "Mumbai"',
        'Remove Duplicates — right-click a column (or select all columns) → Remove Duplicates, to eliminate the register-glitch repeat rows',
        'Remove Columns — right-click the "Notes" column → Remove, since it adds no value to the dashboard',
        'Change Type — click the data-type icon on the Date column header to confirm it is set to Date, not Text',
      ]},

      { type: 'heading', content: 'The Applied Steps panel' },
      { type: 'paragraph', content: 'On the right side of the editor, "Applied Steps" lists every transformation you perform, in order, by name — "Trimmed Text," "Removed Duplicates," "Changed Type." Click any step to see the data exactly as it looked at that point, which makes it easy to find exactly where something went wrong if a later step looks unexpected.' },
      { type: 'code', language: 'excel', content: `Applied Steps (example, top to bottom):
1. Source                      (the raw Excel sheet, as loaded)
2. Trimmed Text                (City column, extra spaces removed)
3. Capitalized Each Word       (City column, casing made consistent)
4. Removed Duplicates          (based on every column, or a chosen subset)
5. Removed Columns             (dropped "Notes")
6. Changed Type                (Date column confirmed as a real Date)

-- this entire list re-runs automatically every time the report
   is refreshed against new data, with no extra effort required` },

      { type: 'heading', content: "Close & Apply: bringing the cleaned data into your report" },
      { type: 'paragraph', content: 'Once your steps look right, click Home → Close & Apply (the Power BI equivalent of Excel\'s "Close & Load"). The cleaned table loads into your report\'s data model, and every visual you build afterward is automatically working from this clean version.' },

      { type: 'heading', content: 'Refreshing later' },
      { type: 'paragraph', content: 'A week later, Brew & Bite\'s owner sends a fresh export with the same messy patterns. Instead of repeating the cleanup by hand, point the same query at the new file (or simply replace the file in the same location) and click Home → Refresh. Every recorded step — trimming, capitalising, removing duplicates — runs again automatically on the new data.' },
      { type: 'callout', kind: 'warning', content: 'Just like in Excel, Refresh assumes the new file has the same column names and structure as the one the steps were originally built against. If a column gets renamed in a future export, a step may fail — always spot-check the result after refreshing data from a new file.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Add a few deliberately messy rows to your Brew & Bite data (inconsistent city casing, one duplicated row, an extra "Notes" column with random text). Load it into Power BI, open Transform Data, and apply Trim, Capitalize Each Word, Remove Duplicates, and Remove Columns, in that order. Confirm the Applied Steps panel shows all four steps, then Close & Apply.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'With clean data loaded, the next module covers the actual reason people use Power BI: turning that data into your first real chart, on the Report view canvas.' },
    ],
  },

  {
    id: 'pb-b-4',
    title: 'Your first chart',
    duration: '25 min',
    sections: [
      { type: 'heading', content: 'The Report view: your canvas' },
      { type: 'paragraph', content: 'Click the Report view icon (the bar-chart icon, top of the left-hand strip) to switch from the Data or Power Query views into the actual report-building canvas — a blank page you will fill with visuals, the same way a slide in a presentation starts blank.' },
      { type: 'paragraph', content: 'Two panels matter most here: the Fields pane (usually on the right), listing every table and column from your cleaned data, and the Visualizations pane right next to it, showing every chart type available as a row of icons.' },

      { type: 'heading', content: 'Building your first visual: revenue by city' },
      { type: 'paragraph', content: 'Click the Clustered Column Chart icon in the Visualizations pane — this places an empty chart placeholder on the canvas. With the placeholder selected, drag City from the Fields pane onto the "X-axis" well, and drag Quantity onto the "Y-axis" well. A bar appears for each city automatically, summed by default.' },
      { type: 'paragraph', content: 'Real-life read: Brew & Bite\'s owner instantly sees which city sells the most volume, without scrolling through a single row of raw data — exactly the kind of "answer at a glance" Power BI exists to deliver.' },

      { type: 'heading', content: 'Adding a Revenue measure first' },
      { type: 'paragraph', content: 'Your raw data has Quantity and Price as separate columns, but no Revenue column yet. In the Fields pane, right-click your Sales table → New Column, and type:' },
      { type: 'code', language: 'excel', content: `Revenue = Sales[Quantity] * Sales[Price]

-- this is DAX, the same formula language used by Power Pivot in
   Excel — here, a calculated column multiplying two existing
   columns together, giving every row its own revenue figure` },
      { type: 'paragraph', content: 'Now build a second chart: a Clustered Column Chart with City on the X-axis and the new Revenue field on the Y-axis (Power BI defaults to summing it). This answers a different, more useful question than raw quantity: which city actually brings in the most money, factoring in that some items cost more than others.' },

      { type: 'heading', content: 'Trying different chart types on the same fields' },
      { type: 'list', items: [
        'Bar/Column chart — best for comparing categories side by side, like revenue by city or by item. The safest default choice.',
        'Line chart — drag Date onto the X-axis instead of City, to see revenue trend day by day across June.',
        'Pie chart — drag Category (Beverage vs Snack) onto it, to see the rough split of revenue between the two — only sensible with a small number of categories.',
        'Card — a single big number, like Total Revenue with nothing on an axis at all, for an instant headline figure.',
      ]},
      { type: 'callout', kind: 'tip', content: 'You can change an existing visual\'s type without rebuilding it — select it, then click a different icon in the Visualizations pane. Power BI keeps the same fields assigned and just redraws them as the new chart type, which is the fastest way to compare "does this look better as a bar or a line?"' },

      { type: 'heading', content: 'Formatting a visual' },
      { type: 'paragraph', content: 'With a visual selected, the Format pane (the paint-roller icon next to the Visualizations pane) lets you adjust title text, colours, data labels (showing the actual number on each bar), and axis formatting — small touches that make a chart presentation-ready rather than a rough draft.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Add a Revenue calculated column to your Brew & Bite data using the DAX formula above. Build three visuals on one report page: a column chart of Revenue by City, a line chart of Revenue by Date, and a Card showing Total Revenue. Turn on data labels for the column chart so each bar shows its number directly.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: "A quick mini project next puts loading, cleaning, and charting together on one realistic deliverable. Then the next module covers Slicers and Filters — letting someone click a city or a date range and watch every chart on the page update together." },
    ],
  },

  {
    id: 'pb-mp-1',
    title: 'Mini Project: Weekly Sales Snapshot Report',
    duration: '30 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: "This is the single most common first request a new BI analyst actually gets: \"here's an export, build me something I can look at.\" This project runs the full pipeline from raw file to a finished report page — Get Data, Power Query cleanup, a calculated column, and three real visuals — the exact combination of skills every Power BI job uses on day one." },
      { type: 'list', items: [
        'Concepts used: Get Data, Transform Data / Power Query cleanup, DAX calculated column, column chart, line chart, Card',
      ]},

      { type: 'heading', content: 'The scenario' },
      { type: 'paragraph', content: "Brew & Bite's owner emails you a fresh weekly export and asks for \"a one-page snapshot of how this week went.\" Build it exactly the way a real first assignment would arrive — messy, with no instructions beyond that one sentence." },
      { type: 'paragraph', content: 'Type this table into an Excel sheet, keeping the messiness exactly as shown — it is deliberate:' },
      { type: 'list', items: [
        'Date | City | Item | Category | Quantity | Price | Notes',
        '10-Jun-2024 | mumbai | Masala Chai | Beverage | 45 | 25 | regular',
        '10-Jun-2024 |  Delhi | Samosa | Snack | 28 | 20 | regular',
        '11-Jun-2024 | MUMBAI | Filter Coffee | Beverage | 33 | 40 | regular',
        '11-Jun-2024 | Bengaluru | Filter Coffee | Beverage | 41 | 40 | regular',
        '11-Jun-2024 | Bengaluru | Filter Coffee | Beverage | 41 | 40 | regular',
        '12-Jun-2024 | Mumbai | Masala Chai | Beverage | 52 | 25 | weekend rush',
        '12-Jun-2024 |  delhi | Samosa | Snack | 19 | 20 | weekend rush',
        '13-Jun-2024 | Bengaluru | Cold Coffee | Beverage | 36 | 45 | regular',
        '13-Jun-2024 | Mumbai | Veg Sandwich | Snack | 24 | 60 | regular',
        '14-Jun-2024 | Delhi | Masala Chai | Beverage | 47 | 25 | regular',
      ]},
      { type: 'paragraph', content: 'Notice row 4 and 5 are identical (an accidental duplicate), City casing is inconsistent, and the Notes column adds nothing useful to a revenue report — three realistic problems to clean before any chart can be trusted.' },

      { type: 'heading', content: 'Step 1 — Load it' },
      { type: 'paragraph', content: 'Get Data → Excel Workbook, select the sheet in the Navigator, and click Transform Data (not Load) to open straight into the Power Query Editor.' },

      { type: 'heading', content: 'Step 2 — Clean it' },
      { type: 'list', items: [
        'Trim the City column to remove extra spaces',
        'Capitalize Each Word on the City column, so "mumbai" / "MUMBAI" / "Mumbai" all become one consistent value',
        'Remove Duplicates, based on all columns, to eliminate the repeated Bengaluru row',
        'Remove the Notes column entirely',
        'Confirm the Date column shows as a proper Date type, not text, before continuing',
      ]},
      { type: 'paragraph', content: 'Close & Apply once all five steps are confirmed in the Applied Steps panel.' },

      { type: 'heading', content: 'Step 3 — Add the Revenue measure' },
      { type: 'code', language: 'excel', content: `Revenue = Sales[Quantity] * Sales[Price]` },

      { type: 'heading', content: 'Step 4 — Build the snapshot page' },
      { type: 'list', items: [
        'A Card showing Total Revenue for the week',
        'A column chart: Revenue by City',
        'A line chart: Revenue by Date, to show the day-by-day trend across the week',
      ]},
      { type: 'callout', kind: 'tip', content: 'Before calling this finished, sanity-check the Total Revenue Card by hand: add up Quantity × Price for all 9 cleaned rows (after the duplicate is removed) and confirm it roughly matches what the Card shows. Catching a cleanup mistake this way, before sharing the report, is exactly what a careful analyst does on a real job.' },

      { type: 'heading', content: 'Stretch goal' },
      { type: 'paragraph', content: 'Add a fourth visual: a column chart of Revenue by Item, so the owner can see which single item (not just which city) is actually driving the week\'s sales — a different, equally real question from "which city" alone.' },
    ],
  },

  {
    id: 'pb-b-5',
    title: 'Slicers and filters',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'From a static report to an interactive one' },
      { type: 'paragraph', content: 'The three charts from the last module always show all the data, all the time. A regional manager who only cares about Mumbai has to mentally filter out Delhi and Bengaluru every time she looks at the page. Slicers and filters let her do that filtering with one click, instead of in her head.' },

      { type: 'heading', content: 'Adding a Slicer' },
      { type: 'paragraph', content: 'Click the Slicer icon in the Visualizations pane, then drag City onto it. A small box appears on the canvas listing Mumbai, Delhi, and Bengaluru as clickable buttons (or a dropdown/list, depending on its formatting). Click "Mumbai," and watch your column chart, line chart, and Card all update simultaneously, since they all read from the same underlying table.' },
      { type: 'callout', kind: 'tip', content: 'This automatic, simultaneous filtering of every visual on the page is the single biggest difference between a Power BI report and a set of separate Excel charts — in Power BI, every visual on a page is connected by default, with no manual setup required to link them.' },

      { type: 'heading', content: 'A second slicer: date range' },
      { type: 'paragraph', content: 'Add a second slicer, drag Date onto it, and change its style to "Between" in the Format pane (Slicer settings → Options → Style). This gives a from/to date range picker, letting the owner narrow the whole report to just the first week of June, for example, with both slicers working together — Mumbai AND that specific week.' },

      { type: 'heading', content: 'The Filters pane: three levels of filtering' },
      { type: 'paragraph', content: 'Beyond slicers (which the report viewer can click themselves), the Filters pane (usually docked on the right, above or below Visualizations) lets the report builder apply filters that are fixed, at three different scopes:' },
      { type: 'list', items: [
        'Filters on this visual — affects only the one chart currently selected, e.g., a chart showing only the top 5 items by revenue',
        'Filters on this page — affects every visual on the current report page, e.g., excluding a discontinued item from this page entirely',
        'Filters on all pages — affects the whole report, every page, e.g., always excluding test/dummy transactions',
      ]},
      { type: 'paragraph', content: 'Real-life use: the owner wants one page showing only "Beverage" category performance. A page-level filter on Category = "Beverage" achieves this without needing a slicer the viewer could accidentally change.' },

      { type: 'heading', content: 'Slicer vs Filter: when to use which' },
      { type: 'paragraph', content: 'A Slicer is for choices the viewer should make themselves, visibly, as part of using the report (pick your city, pick your date range). A Filter is for decisions the report builder makes once and locks in, usually invisible to the end viewer (excluding test data, restricting a page to one category). Mixing them up — like making someone use a hidden Filter when they actually need to self-serve — is one of the most common beginner dashboard mistakes.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Add a City slicer and a Date range slicer to your Brew & Bite report page. Confirm clicking a city updates all three visuals from the last module together. Then add a page-level filter restricting the whole page to Category = "Beverage," and observe how the charts change compared to when that filter is removed.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: "You have a clean, interactive report sitting on your own laptop. The final module covers Publishing to the Power BI Service — turning it into something Brew & Bite's owner (who does not have Power BI Desktop installed) can actually open and click around in, from a browser or their phone." },
    ],
  },

  {
    id: 'pb-b-6',
    title: 'Publishing to the Power BI Service',
    duration: '25 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'A report that only lives on your laptop is not yet useful' },
      { type: 'paragraph', content: 'Everything built so far exists only inside Power BI Desktop, on your computer. Brew & Bite\'s owner cannot see any of it unless you publish it somewhere she can access — exactly the gap the Power BI Service (the website, app.powerbi.com) exists to close.' },

      { type: 'heading', content: 'Publishing your report' },
      { type: 'paragraph', content: 'In Power BI Desktop, click Home → Publish. The first time, you will be asked to sign in with a (free) Power BI account, and choose a destination workspace — for now, "My workspace" is the simplest option, a personal area every user gets by default.' },
      { type: 'paragraph', content: 'After publishing finishes, Power BI Desktop shows a link to open the report directly in your browser, where it now lives on the Power BI Service alongside any other reports you publish.' },

      { type: 'heading', content: 'Workspaces: where reports actually live' },
      { type: 'paragraph', content: 'A workspace is a shared space, similar in spirit to a folder or a Google Drive shared folder. "My workspace" is private to you, but in a real team, an analyst would publish to a shared workspace like "Brew & Bite Analytics" that specific colleagues have access to, instead of everything sitting only in one person\'s personal area.' },

      { type: 'heading', content: 'Reports vs. Dashboards: a distinction unique to the Service' },
      { type: 'paragraph', content: 'Once published, you will see two related but different things in the Service:' },
      { type: 'list', items: [
        'A Report — exactly what you built in Desktop: one or more pages, each with multiple visuals, slicers, and filters, fully interactive.',
        'A Dashboard — a single page assembled in the Service itself by "pinning" individual visuals from one or more reports onto it, often combining visuals from several different reports into one summary view.',
      ]},
      { type: 'paragraph', content: 'Real-life use: Brew & Bite eventually has separate reports for Sales, Inventory, and Staffing. A single Dashboard could pin the one most important visual from each of those three reports onto one screen — the "give me everything important in 10 seconds" view, distinct from any single detailed report.' },

      { type: 'heading', content: 'Sharing with someone else' },
      { type: 'paragraph', content: 'From the Service, click Share on your published report and enter a colleague\'s email. They receive a link, and (depending on their organisation\'s licensing) can open and interact with the report in their browser, without ever installing Power BI Desktop themselves — Desktop is the authoring tool; the Service is how everyone else actually consumes the result.' },
      { type: 'callout', kind: 'tip', content: 'Sharing in the free tier has real limits — typically, both you and the person you share with need a Power BI license of some kind, and free "My workspace" sharing is more restricted than a paid Pro or Premium workspace. For a learning project, sharing with a free trial account or simply demonstrating the report yourself is enough; production sharing across an entire company usually needs a paid plan.' },

      { type: 'heading', content: 'Scheduled refresh: keeping a published report current' },
      { type: 'paragraph', content: 'A report published from a local Excel file is, by default, a snapshot — it will not reflect new data in that file automatically. In the Service, a report\'s Settings page offers Scheduled Refresh, letting you set a daily time for Power BI to reload the source file (if it is stored somewhere the Service can reach, like OneDrive or SharePoint) and update the published report automatically.' },

      { type: 'heading', content: 'Capstone: publish your own Brew & Bite report' },
      { type: 'paragraph', content: 'Bring together everything from this entire track. Using the Brew & Bite data you built and cleaned, with the Revenue calculated column, the three visuals, and the two slicers, do the following end-to-end:' },
      { type: 'list', items: [
        'Confirm your data is clean (no duplicate rows, consistent city casing, a real Date type)',
        'Confirm you have at least three visuals: a column chart, a line chart, and a Card, all using the Revenue measure',
        'Confirm a City slicer and a Date range slicer both correctly filter every visual on the page together',
        'Publish the report to "My workspace" using Home → Publish',
        'Open the published report in your browser via the link Power BI Desktop provides, and confirm the slicers still work identically to how they worked in Desktop',
      ]},
      { type: 'callout', kind: 'warning', content: 'If a visual looks different or a slicer is missing after publishing, the most common cause is publishing before saving the latest changes in Desktop. Always save your .pbix file (Ctrl+S) immediately before clicking Publish, so the Service receives your most recent version.' },

      { type: "heading", content: "You've finished the Power BI Beginner track" },
      { type: 'paragraph', content: "You can now load data from Excel and CSV, clean it with Power Query, build charts on the Report canvas, make a report interactive with slicers and filters, and publish the finished result somewhere a non-technical stakeholder can actually open and use. That full pipeline — load, clean, visualise, interact, publish — is the real day-to-day job of a BI analyst, just on a small example for now." },
      { type: 'paragraph', content: "The Intermediate track goes deeper into the part that makes Power BI genuinely powerful: data modelling and relationships across multiple tables, DAX measures (the same formula language from Power Pivot in Excel, used here as the heart of every Power BI calculation), time intelligence, and the interactivity features (drill-through, bookmarks) that turn a good report into a great one." },
    ],
  },
]

/* ════════════════════════════════════════════════════════════════
   POWER BI — INTERMEDIATE (full real track)
   Brew & Bite has grown to 6 cafés across 3 cities, with a proper
   Items catalogue and city managers who each need their own view —
   exactly the scale where a single flat table stops being enough.
   ════════════════════════════════════════════════════════════════ */
const POWERBI_INTERMEDIATE = [
  {
    id: 'pb-i-1',
    title: 'Data modelling and relationships',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'When one flat table stops being enough' },
      { type: 'paragraph', content: 'Brew & Bite has grown: 6 cafés now, across Mumbai, Delhi, and Bengaluru, selling 15 different items. Keeping every fact — item name, category, price, city, region — repeated on every single sales row works for a small example, but at real volume it becomes a maintenance nightmare: change one item\'s price, and you would need to find and update it on thousands of rows. The fix is splitting data into separate, related tables, exactly the star schema idea from the Excel Power Pivot lesson, now built natively in Power BI.' },

      { type: 'heading', content: 'Three tables for this track' },
      { type: 'paragraph', content: '"Sales" — one row per transaction, kept thin:' },
      { type: 'list', items: [
        'Date | City | Item ID | Quantity',
        '10-Jun-2024 | Mumbai | I1 | 45',
        '10-Jun-2024 | Delhi | I3 | 28',
        '11-Jun-2024 | Bengaluru | I2 | 33',
        '(extend this to 40-50 rows across several weeks, reusing the Item IDs and cities below)',
      ]},
      { type: 'paragraph', content: '"Items" — one row per product:' },
      { type: 'list', items: [
        'Item ID | Item Name | Category | Price',
        'I1 | Masala Chai | Beverage | 25',
        'I2 | Filter Coffee | Beverage | 40',
        'I3 | Samosa | Snack | 20',
        'I4 | Veg Sandwich | Snack | 60',
      ]},
      { type: 'paragraph', content: '"Cities" — one row per city, with a manager assigned (used again in the Row-Level Security lesson):' },
      { type: 'list', items: [
        'City | Region | Manager',
        'Mumbai | West | Aditi Rao',
        'Delhi | North | Rohan Kumar',
        'Bengaluru | South | Priya Sharma',
      ]},

      { type: 'heading', content: 'The Model view' },
      { type: 'paragraph', content: 'Click the Model view icon (the third icon down the left strip, showing connected boxes). After loading all three tables, each appears as its own box listing its columns. This is where relationships between tables are built and reviewed — the visual equivalent of Power Pivot\'s Diagram View in Excel.' },

      { type: 'heading', content: 'Creating a relationship' },
      { type: 'paragraph', content: 'Drag Sales[Item ID] onto Items[Item ID] to draw a connecting line between the two tables. Repeat by dragging Sales[City] onto Cities[City]. Power BI usually detects the relationship type (cardinality) automatically, but it is worth understanding what it picked.' },
      { type: 'code', language: 'excel', content: `Relationships created (shown as lines in Model view):

Sales[Item ID]  ──────  Items[Item ID]      (many-to-one)
Sales[City]     ──────  Cities[City]        (many-to-one)

-- Sales is the "many" side on both relationships: many sales
   rows can share the same item, and many sales rows can share
   the same city. Items and Cities are each the "one" side.` },

      { type: 'heading', content: 'Cardinality: one-to-many vs. other options' },
      { type: 'paragraph', content: 'Double-click a relationship line to see its full settings. "Cardinality" describes how many rows on each side can match: one-to-many (the common case here), one-to-one (each row matches exactly one row on the other side), or many-to-many (less common, and the trickiest to reason about correctly). Most real Data Models are almost entirely one-to-many relationships, exactly like Sales-to-Items and Sales-to-Cities here.' },

      { type: 'heading', content: 'Cross filter direction' },
      { type: 'paragraph', content: 'Each relationship also has a "Cross filter direction": Single or Both. Single (the default, and usually correct) means filtering Items filters Sales, but filtering Sales does not filter Items back. Both lets filtering flow in either direction — occasionally needed for more advanced scenarios, but it can introduce ambiguous filtering paths if used carelessly, so the safe default for this track is to leave it on Single unless you have a specific reason to change it.' },
      { type: 'callout', kind: 'warning', content: 'A common beginner-to-intermediate mistake is setting every relationship to "Both" direction "just in case." This can cause visuals to behave unexpectedly, since Power BI may no longer have one clear path to follow when filtering. Start every relationship as Single, and only change it deliberately, once you understand exactly why a specific report needs it.' },

      { type: 'heading', content: 'Why this unlocks better reporting immediately' },
      { type: 'paragraph', content: 'With both relationships built, drag Cities[Region] and Items[Category] onto a single chart\'s axes, alongside Sales[Quantity] in Values — three fields from three different tables, combined correctly with zero VLOOKUP-style formulas, because the relationships do that matching automatically.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Build the three tables above (extend Sales to 40-50 rows) and load all three into Power BI. In Model view, create both relationships, confirm they show as one-to-many with Single cross filter direction, then build a quick column chart with Region on the X-axis and Quantity in Values to confirm the relationships are working correctly.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'A connected Data Model is the foundation — the next module covers writing your own calculations on top of it with DAX, going deeper into the difference between a calculated column (like the Revenue column from the Beginner track) and a measure that recalculates dynamically.' },
    ],
  },

  {
    id: 'pb-i-2',
    title: 'DAX: calculated columns vs measures',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'A recap, then the real distinction' },
      { type: 'paragraph', content: 'In the Beginner track, you wrote Revenue = Sales[Quantity] * Sales[Price] as a calculated column. That worked because Price lived directly on the Sales table. Now that Price lives on the separate Items table instead, a calculated column needs to reach across the relationship — and this is exactly where measures, not columns, become the better tool.' },

      { type: 'heading', content: 'A calculated column that reaches across a relationship' },
      { type: 'code', language: 'excel', content: `Revenue (calculated column on the Sales table) =
Sales[Quantity] * RELATED(Items[Price])

-- RELATED follows the relationship from the "many" side (Sales)
   to fetch the matching Price from the "one" side (Items),
   for each row — the same RELATED function from Excel's Power Pivot` },
      { type: 'paragraph', content: 'This works and is a perfectly valid calculated column. But it is computed once, stored as a static value per row, and recalculated only when the model refreshes — exactly like a regular Excel column.' },

      { type: 'heading', content: 'Writing your first measure' },
      { type: 'paragraph', content: 'On the Home (or Modeling) tab, click New Measure. Type a name and formula in the formula bar that appears at the top of the canvas:' },
      { type: 'code', language: 'excel', content: `Total Revenue = SUMX(Sales, Sales[Quantity] * RELATED(Items[Price]))

-- SUMX iterates row by row over the Sales table, multiplying
   Quantity by the related Price for each row, then sums the
   result — the same pattern as the Excel Power Pivot module,
   now written directly in Power BI's measure editor` },
      { type: 'paragraph', content: 'Drop this measure into a Card visual. It shows a single number — but unlike a calculated column, this number recalculates instantly for whatever filter context is active: total across everything with nothing selected, or just Mumbai\'s total the moment a City slicer is clicked.' },

      { type: 'heading', content: 'The core difference, concretely' },
      { type: 'list', items: [
        'A calculated column: computed once per row when the model refreshes, stored permanently, takes up memory, and does not change based on what is clicked in a report',
        'A measure: computed fresh every time it is used in a visual, automatically respecting whatever Rows/Columns/Slicers/Filters that visual currently has applied, and adds no permanent storage to the model',
      ]},
      { type: 'callout', kind: 'tip', content: 'A practical rule of thumb: if a calculation should change depending on what the viewer clicks or filters (almost everything you put in a chart or Card), make it a measure. Use a calculated column only when you genuinely need a fixed, per-row value — like a Revenue figure used as an input to other row-level logic, or a column you need to filter or sort by directly.' },

      { type: 'heading', content: 'CALCULATE: filtering a measure deliberately' },
      { type: 'code', language: 'excel', content: `Mumbai Revenue = CALCULATE([Total Revenue], Cities[City] = "Mumbai")

-- recomputes Total Revenue, but forced to only consider rows
   where the related city is Mumbai, regardless of what
   slicers or filters the report page might also have applied` },
      { type: 'paragraph', content: 'Real-life use: a comparison Card showing "Mumbai Revenue" sitting permanently next to a "Total Revenue" Card, letting the owner glance at both at once without needing to click a slicer back and forth.' },

      { type: 'heading', content: 'Quick Measures: a built-in shortcut' },
      { type: 'paragraph', content: 'Right-click a table in the Fields pane → New Quick Measure opens a dialog of common calculation templates (running total, percentage of grand total, average per category) that write the underlying DAX for you. They are a genuinely useful way to see correct DAX patterns for common business questions, even after you are comfortable writing measures by hand — open one afterward and read the generated formula to learn from it.' },

      { type: 'heading', content: 'DIVIDE: safe division, worth repeating' },
      { type: 'code', language: 'excel', content: `Average Order Value = DIVIDE([Total Revenue], COUNTROWS(Sales))

-- DIVIDE returns blank instead of an error if there happen to
   be zero sales rows in the current filter context (e.g., a city
   with no transactions on a specific filtered day)` },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Write Total Revenue as a measure using SUMX and RELATED. Add a Mumbai Revenue measure using CALCULATE. Build a report page with two Cards (Total Revenue, Mumbai Revenue) and a column chart of Total Revenue by Region. Then open New Quick Measure once, build a "percentage of grand total" quick measure for Revenue by City, and read the DAX it generates.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: "Measures unlock more than static totals — the next module covers Time Intelligence, the family of DAX functions built specifically for comparing this period to last period, running year-to-date totals, and other calendar-aware questions every real business asks." },
    ],
  },

  {
    id: 'pb-i-3',
    title: 'Time intelligence functions',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'Questions that need a calendar, not just a sum' },
      { type: 'paragraph', content: 'SUMX and CALCULATE answer "how much, given a condition." Real business questions are often calendar-shaped instead: "how does this month compare to the same month last year?" "what is our running total so far this year?" DAX has a dedicated family of time intelligence functions built exactly for these.' },

      { type: 'heading', content: 'The prerequisite: a proper date column' },
      { type: 'paragraph', content: 'Time intelligence functions need a continuous, gap-free date column to work correctly — not necessarily every calendar date needs a sale, but the column itself should be marked clearly as a date. In Model view, select the Sales table, then Table tools → Mark as Date Table, and confirm the Date column. For a small learning project, marking Sales[Date] directly is enough; in a larger real model, a dedicated separate "Calendar" table (just dates, with no sales data) is the more robust standard practice.' },

      { type: 'heading', content: 'TOTALYTD: running total since the start of the year' },
      { type: 'code', language: 'excel', content: `Revenue YTD = TOTALYTD([Total Revenue], Sales[Date])

-- in a chart broken down by month, this measure shows the
   cumulative total from January through the end of that month —
   answering "how are we doing so far this year" at any point` },

      { type: 'heading', content: 'SAMEPERIODLASTYEAR: comparing to the same period a year ago' },
      { type: 'code', language: 'excel', content: `Revenue Last Year = CALCULATE([Total Revenue], SAMEPERIODLASTYEAR(Sales[Date]))

-- SAMEPERIODLASTYEAR shifts the current date filter back exactly
   one year, so this measure shows what revenue looked like in
   the equivalent period 12 months earlier` },
      { type: 'paragraph', content: 'Real-life use: a "Revenue" column next to a "Revenue Last Year" column on the same chart, broken down by month, instantly shows growth or decline month by month compared to the same point in the previous year — a far more meaningful comparison than the raw number alone.' },

      { type: 'heading', content: 'DATEADD: a more flexible building block' },
      { type: 'code', language: 'excel', content: `Revenue Previous Month = CALCULATE([Total Revenue], DATEADD(Sales[Date], -1, MONTH))

-- DATEADD shifts the date filter by any amount you specify —
   here, back one month — and works with DAY, MONTH, QUARTER,
   or YEAR depending on what comparison is needed` },
      { type: 'paragraph', content: 'SAMEPERIODLASTYEAR is really just a convenient shortcut for DATEADD(Sales[Date], -1, YEAR) — knowing DATEADD means you are not limited to only year-over-year comparisons.' },

      { type: 'heading', content: 'A growth percentage measure, combining what came before' },
      { type: 'code', language: 'excel', content: `Revenue Growth % =
DIVIDE([Total Revenue] - [Revenue Last Year], [Revenue Last Year])

-- combines a time intelligence measure (Revenue Last Year) with
   plain subtraction and the safe-division DIVIDE pattern,
   giving a percentage growth figure ready to drop onto a Card` },

      { type: 'heading', content: 'Why this matters for a growing business like Brew & Bite' },
      { type: 'paragraph', content: 'With 6 cafés and data accumulating month after month, "we sold X today" is a far weaker signal than "we sold X today, which is 12% more than the same day last month, and 30% more than this time last year." Time intelligence measures are what make that second, genuinely useful sentence possible directly inside a report, recalculating automatically as new data arrives.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Mark Sales[Date] as a Date Table in Model view. Build Revenue YTD, Revenue Last Year (using SAMEPERIODLASTYEAR), and Revenue Growth % as measures. Build a line chart of Revenue YTD by month, and a Card showing Revenue Growth %.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'With strong measures in place, the next module covers two features that make a report feel genuinely polished and navigable: Drill-through (jumping from a summary to a focused detail page) and Bookmarks (saving and restoring a specific report state with one click).' },
    ],
  },

  {
    id: 'pb-i-4',
    title: 'Drill-through and bookmarks',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'The problem: one page cannot show everything' },
      { type: 'paragraph', content: 'A summary page showing Revenue by City is great for a glance, but the moment Brew & Bite\'s owner wants to ask "OK, but what specifically is happening in Mumbai?", a single static page runs out of room. Drill-through solves this by letting a viewer right-click a specific data point and jump to a dedicated detail page, automatically filtered to exactly that selection.' },

      { type: 'heading', content: 'Setting up a drill-through page' },
      { type: 'paragraph', content: 'Create a new report page named "City Detail." On this page, find the Drill-through well in the Filters pane (it appears automatically on any page once you start setting this up) and drag Cities[City] onto it. Build a few detail visuals on this page as normal — perhaps Revenue by Item and Revenue by Date, specifically for one city.' },
      { type: 'paragraph', content: 'Back on your summary page, right-click any bar in a Revenue-by-City chart (say, the Mumbai bar) and choose "Drill through → City Detail." Power BI navigates to the detail page, automatically filtered to show only Mumbai\'s data — no slicer needed, the filter travels with the click itself.' },
      { type: 'callout', kind: 'tip', content: 'A drill-through page automatically gets a back arrow in its top-left corner once at least one field is in the Drill-through well, letting a viewer return to the summary page they came from with one click — no manual button needed for this specific case.' },

      { type: 'heading', content: 'Drill-through vs. just adding a Slicer' },
      { type: 'paragraph', content: 'A Slicer for City on the summary page would also let a viewer narrow things down — but it would clutter a clean overview page with detail-page-only visuals, or force every page to repeat the same slicer. Drill-through keeps the summary page focused and simple, while still making detailed exploration one right-click away whenever it is actually needed.' },

      { type: 'heading', content: 'Bookmarks: saving a specific report state' },
      { type: 'paragraph', content: 'View → Bookmarks pane → Add Bookmark captures the current state of a page: which slicers are set, which filters are applied, even which visuals are currently visible. Clicking that bookmark later instantly restores everything back to exactly that state.' },
      { type: 'paragraph', content: 'Real-life use: create a bookmark called "This Month, All Cities" (capturing the report with a Date slicer set to the current month and no city filter), and a second bookmark called "Mumbai Only." A viewer can jump between these two pre-configured views by clicking buttons, without manually resetting slicers themselves.' },

      { type: 'heading', content: 'Assigning a bookmark to a button' },
      { type: 'paragraph', content: 'Insert → Buttons → Blank places a clickable button on the canvas. With it selected, open the Format pane → Action, switch Action to "On," and set Type to "Bookmark," then choose the bookmark to jump to when that button is clicked. Build two buttons this way, one per bookmark from the previous step, and a viewer now has one-click toggles between pre-set views.' },

      { type: 'heading', content: 'The Selection pane: controlling what is visible' },
      { type: 'paragraph', content: 'View → Selection opens a list of every object on the current page, each with a small eye icon to toggle visibility. Combined with bookmarks (which remember visibility state), you can build a page that shows a simple summary by default, with a button that reveals additional detailed visuals on top of the same page — a lightweight way to add a "show more" interaction without a separate drill-through page.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Build a summary page with a Revenue-by-City chart, and a "City Detail" drill-through page with City in the Drill-through well plus a Revenue-by-Item chart. Confirm right-clicking a city bar drills through correctly. Then create two bookmarks ("This Month" and "Last Month," using a Date slicer set differently for each) and two buttons that jump between them.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: "Everything so far assumes every viewer should see all the data. The next module covers Row-Level Security — making sure Mumbai's café manager only ever sees Mumbai's numbers when they open the exact same published report." },
    ],
  },

  {
    id: 'pb-i-5',
    title: 'Row-level security',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'One report, different data per viewer' },
      { type: 'paragraph', content: 'Brew & Bite now has a manager per city (from the Cities table in the first lesson: Aditi Rao for Mumbai, Rohan Kumar for Delhi, Priya Sharma for Bengaluru). The owner wants to publish one single report, but have each manager see only their own city\'s numbers when they open it — not all three cities, and definitely not each other\'s figures. Row-Level Security (RLS) is exactly this: restricting which rows of data a given viewer can see, inside the very same published report everyone else uses.' },

      { type: 'heading', content: 'Creating a role' },
      { type: 'paragraph', content: 'In Power BI Desktop, Modeling → Manage Roles → Create. Name the role (e.g., "Mumbai Manager"), select the Cities table, and write a DAX filter expression that must evaluate to TRUE for a row to be visible to anyone in this role:' },
      { type: 'code', language: 'excel', content: `Role: Mumbai Manager
Table: Cities
DAX filter expression:
[City] = "Mumbai"

-- because Cities is related to Sales (from the data modelling
   lesson), this single filter on the small Cities table
   automatically restricts the much larger Sales table too —
   the relationship enforces the security everywhere it touches` },
      { type: 'paragraph', content: 'This is the same payoff the relationships from the first lesson were quietly setting up — RLS applied to one small lookup table (Cities) automatically cascades through the relationship to filter the much larger fact table (Sales), without needing a separate, more complex rule written against Sales directly.' },

      { type: 'heading', content: 'Testing a role before publishing: View As' },
      { type: 'paragraph', content: 'Modeling → View As, then check the role you just created and click OK. The entire report now behaves exactly as it would for someone assigned to that role — every visual recalculates as if filtered to Mumbai only. This is the single most important habit in building RLS correctly: always test with View As before assuming the rule works.' },
      { type: 'callout', kind: 'warning', content: 'Forgetting to test with View As is the most common RLS mistake. A role\'s DAX filter can look correct but reference the wrong table, or a missing relationship can mean the filter never actually reaches the Sales table at all — View As catches both problems immediately, before anyone outside your own testing ever sees a wrong (or worse, unrestricted) report.' },

      { type: 'heading', content: 'A dynamic alternative: one role for everyone' },
      { type: 'paragraph', content: 'Writing a separate role per city does not scale to a chain of 50 cafés. A more advanced, dynamic approach uses USERPRINCIPALNAME() (the logged-in viewer\'s email address) compared against a column in your data, such as a Cities[Manager Email] column, so a single role definition automatically restricts every manager to their own city based on who is actually logged in:' },
      { type: 'code', language: 'excel', content: `Role: Manager Access (dynamic, works for every city at once)
Table: Cities
DAX filter expression:
[Manager Email] = LOWER(USERPRINCIPALNAME())

-- USERPRINCIPALNAME() returns whoever is currently signed in to
   the Power BI Service; comparing it to a Manager Email column
   means one single role correctly restricts every manager,
   instead of needing one hand-written role per city` },
      { type: 'paragraph', content: 'This dynamic pattern is genuinely the more advanced approach (it requires keeping an accurate email column in your data, and careful testing), but is worth knowing exists, since hand-writing one static role per city is a pattern that breaks down the moment a business grows past a handful of locations.' },

      { type: 'heading', content: 'Assigning roles after publishing' },
      { type: 'paragraph', content: 'Roles are only fully enforced after publishing. In the Power BI Service, open the dataset\'s Security settings and add each actual user\'s email under the appropriate role. From that point on, when each manager logs into the Service and opens the report, they automatically see only the data their assigned role permits — the same .pbix file and same published report for everyone, but a different, correctly restricted experience per viewer.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Create a "Mumbai Manager" role with the static filter [City] = "Mumbai" on the Cities table. Use View As to confirm every visual on your report now shows Mumbai-only figures. Create a second role, "Delhi Manager," and confirm switching View As between the two roles changes the data shown correctly each time.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: "The final module shifts focus from data and security to the viewing experience itself — Designing for Mobile, so a café manager checking numbers from their phone between customers gets a report built for that screen, not just a squeezed-down version of the desktop layout." },
    ],
  },

  {
    id: 'pb-i-6',
    title: 'Designing for mobile',
    duration: '25 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Why a desktop report does not just work on a phone' },
      { type: 'paragraph', content: "A report page designed for a wide desktop screen — a row of 4 Cards, a wide bar chart, a big line chart below — does not translate well onto a phone screen. Shrinking everything proportionally makes text unreadable and touch targets too small. Brew & Bite's managers will mostly check numbers from their phones between customers, so the mobile experience is not optional polish — for them, it may be the primary way the report ever gets used." },

      { type: 'heading', content: 'The Mobile Layout view' },
      { type: 'paragraph', content: 'View → Mobile Layout switches the canvas into a tall, phone-shaped frame, separate from your normal desktop page. Every visual from the desktop layout appears in a tray on the right, ready to be dragged onto the phone canvas in whatever order and size makes sense for a narrow screen.' },
      { type: 'paragraph', content: 'A typical mobile reordering for a Brew & Bite summary page: Total Revenue Card at the very top (the single most important number), then Revenue Growth % Card right below it, then a simplified Revenue-by-City chart, with the more detailed Revenue-by-Item chart placed last or left out of the mobile layout entirely.' },

      { type: 'heading', content: 'What happens if you skip mobile layout entirely' },
      { type: 'paragraph', content: 'If no mobile layout is built for a page, the Power BI Mobile app falls back to showing a scaled-down version of the full desktop page — readable, but cramped, with small text and visuals that may need pinching and zooming to use comfortably. Building an explicit mobile layout is what unlocks the clean, single-column, large-touch-target experience instead.' },
      { type: 'callout', kind: 'tip', content: 'You do not have to build a mobile layout for every single page of a report. Prioritise it for the pages a phone user would realistically open first — usually a summary or overview page — and let more detailed analyst-only pages rely on the desktop fallback if phone use of those specific pages is unlikely.' },

      { type: 'heading', content: 'Capstone: the complete Brew & Bite intermediate report' },
      { type: 'paragraph', content: 'Bring together everything from this entire track into one finished, realistic deliverable.' },
      { type: 'list', items: [
        'A Data Model with Sales, Items, and Cities tables, correctly related (from the first lesson)',
        'Measures for Total Revenue, Revenue YTD, Revenue Last Year, and Revenue Growth % (from the DAX and Time Intelligence lessons)',
        'A summary report page with a Revenue-by-City chart and the four measures shown as Cards',
        'A "City Detail" drill-through page, reachable by right-clicking any city on the summary chart',
        'Two bookmarks (e.g., "This Month" and "Last Month") with buttons to jump between them',
        'A "Mumbai Manager" role with a working Row-Level Security filter, tested with View As',
        'A mobile layout built for the summary page, with the Cards prioritised at the top',
      ]},
      { type: 'callout', kind: 'warning', content: 'Test the RLS role with View As one final time after finishing the mobile layout — adding new visuals or measures late in the process occasionally introduces a field that is not properly covered by the existing relationships, which View As will reveal immediately if something has quietly broken.' },

      { type: 'heading', content: "You've finished the Power BI Intermediate track" },
      { type: 'paragraph', content: "You can now build a proper multi-table Data Model with correct relationships, write DAX measures (including time intelligence) instead of relying on static calculated columns, give viewers a path from summary to detail with drill-through, save and restore report states with bookmarks, restrict who sees what with Row-Level Security, and design specifically for how a report is actually viewed on a phone. This is the core skill set of a working BI analyst, applied end-to-end on one growing, realistic business." },
      { type: 'paragraph', content: "The Advanced track goes further still: advanced DAX patterns, performance tuning for large models, custom visuals, embedded analytics, workspace governance, and Premium-tier features — the skills that separate a solid analyst from someone trusted to design and maintain BI systems at organisation scale." },
    ],
  },
]

/* ════════════════════════════════════════════════════════════════
   POWER BI — ADVANCED (full real track)
   Brew & Bite is no longer a small chain — it has franchised to
   50+ outlets, a head-office BI team, an IT department with
   governance requirements, and franchise partners who need their
   own numbers embedded into a partner portal website.
   ════════════════════════════════════════════════════════════════ */
const POWERBI_ADVANCED = [
  {
    id: 'pb-a-1',
    title: 'Advanced DAX patterns',
    duration: '40 min',
    sections: [
      { type: 'heading', content: 'Beyond SUMX and CALCULATE' },
      { type: 'paragraph', content: 'Brew & Bite head office now wants questions the Intermediate track\'s DAX cannot answer directly: "rank every franchise outlet by revenue," "show each outlet\'s share of its own region\'s total," and "compare a measure\'s result before and after a what-if discount." These need a handful of more advanced DAX patterns, used constantly in real BI work.' },

      { type: 'heading', content: 'VAR and RETURN: readable, efficient DAX' },
      { type: 'paragraph', content: 'Complex measures often reuse the same sub-calculation multiple times. VAR lets you compute something once, store it in a named variable, and reuse it — both more readable and, since it is only calculated once, often faster than repeating the same sub-expression several times.' },
      { type: 'code', language: 'excel', content: `Revenue Growth % =
VAR CurrentRevenue = [Total Revenue]
VAR PriorRevenue = CALCULATE([Total Revenue], SAMEPERIODLASTYEAR(Sales[Date]))
RETURN
    DIVIDE(CurrentRevenue - PriorRevenue, PriorRevenue)

-- VAR computes each piece once and names it; RETURN supplies the
   final result using those names — equivalent to writing the
   full nested expression, but far easier to read and to debug` },

      { type: 'heading', content: 'RANKX: ranking outlets against each other' },
      { type: 'code', language: 'excel', content: `Outlet Rank by Revenue =
RANKX(ALL(Cities[City]), [Total Revenue])

-- RANKX ranks the current City's Total Revenue against every
   other city's Total Revenue (ALL(Cities[City]) temporarily
   ignores any existing filter on City, so every city is compared
   against every other one, regardless of what the report itself
   has currently filtered)` },
      { type: 'paragraph', content: 'Real-life use: a head-office leaderboard table listing every franchise outlet with its rank, instantly highlighting the top and bottom performers without manually sorting and counting rows by hand.' },

      { type: 'heading', content: 'ALL vs ALLSELECTED: two different kinds of "ignore filters"' },
      { type: 'paragraph', content: 'ALL(Cities[City]) ignores every filter on City, everywhere, including report-level slicers. ALLSELECTED behaves differently — it respects filters coming from outside the current visual (like a slicer) but ignores filters from within the visual\'s own context (like the row currently being evaluated in a table). This distinction matters constantly for "percentage of total" calculations.' },
      { type: 'code', language: 'excel', content: `% of Selected Total =
DIVIDE([Total Revenue], CALCULATE([Total Revenue], ALLSELECTED(Cities[City])))

-- if a viewer has used a slicer to narrow the report to just
   2 of the 50 outlets, this measure shows each outlet's share
   of THOSE 2 outlets' combined total — not all 50 — because
   ALLSELECTED respects the slicer while still ignoring the
   row-by-row City context inside the table itself` },
      { type: 'callout', kind: 'warning', content: 'Using ALL instead of ALLSELECTED (or vice versa) is one of the most common sources of a "percentage of total" measure that looks correct until someone applies a slicer, at which point the percentages stop adding up to 100% in a way that confuses whoever is viewing the report. Always test percentage-of-total measures with a slicer applied, not just with the full unfiltered dataset.' },

      { type: 'heading', content: 'ALLEXCEPT: keeping some filters, dropping others' },
      { type: 'code', language: 'excel', content: `Revenue Share Within Region =
DIVIDE([Total Revenue], CALCULATE([Total Revenue], ALLEXCEPT(Cities, Cities[Region])))

-- ALLEXCEPT removes every filter on the Cities table EXCEPT
   Region — so this measure shows an outlet's share of its own
   region's total, even though City itself is no longer filtered` },

      { type: 'heading', content: 'What-if parameters: letting a viewer test a scenario' },
      { type: 'paragraph', content: 'Modeling → New Parameter → Numeric Range creates a slider a viewer can drag (e.g., a "Discount %" parameter from 0% to 30%), which generates its own small table and a matching measure automatically. Reference that generated measure inside your own calculation to build "what if we discounted by this much" scenario reports.' },
      { type: 'code', language: 'excel', content: `Discounted Revenue =
[Total Revenue] * (1 - 'Discount %'[Discount % Value])

-- as the viewer drags the Discount % slider, every visual using
   this measure recalculates live, letting head office explore
   "what would a 10% franchise-wide discount do to revenue"
   without touching the underlying data at all` },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Rewrite your Revenue Growth % measure using VAR/RETURN. Add an Outlet Rank by Revenue measure using RANKX and ALL. Build a "Discount %" what-if parameter and a Discounted Revenue measure that uses it, then build a table visual showing City, Total Revenue, Outlet Rank, and Discounted Revenue together.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'These richer DAX patterns add real computation cost. The next module covers Performance Tuning — making sure a report with 50 outlets\' worth of data (and the DAX patterns from this lesson) still loads and responds quickly.' },
    ],
  },

  {
    id: 'pb-a-2',
    title: 'Performance tuning',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'When "it works" stops being good enough' },
      { type: 'paragraph', content: 'A report built against 50 rows of sample data feels instant no matter what you write. The same report against years of real data from 50 franchise outlets can start to feel sluggish — slicers that take a few seconds to respond, visuals that spin before rendering. Performance tuning is the practice of finding and fixing exactly why, instead of guessing.' },

      { type: 'heading', content: 'Performance Analyzer: measuring before guessing' },
      { type: 'paragraph', content: 'View → Performance Analyzer → Start Recording, then interact with the report (click a slicer, switch a page) and click Stop. A breakdown appears showing exactly how many milliseconds each visual took, split into DAX query time, visual rendering time, and other overhead — telling you precisely which visual is actually the slow one, instead of assuming.' },
      { type: 'callout', kind: 'tip', content: 'Always profile with Performance Analyzer before optimising anything. It is common to assume the biggest, most complex-looking chart is the slow one, when Performance Analyzer often reveals a small Card with an inefficient measure behind it is the actual bottleneck.' },

      { type: 'heading', content: 'Import vs DirectQuery vs Composite models' },
      { type: 'list', items: [
        'Import — data is copied into Power BI\'s own highly compressed in-memory engine (VertiPaq) at refresh time. Fastest to query, but only as fresh as the last refresh, and limited by available memory for very large datasets.',
        'DirectQuery — Power BI sends live queries to the source database for every interaction, with no data copied in. Always current, but every click is only as fast as the underlying database query, and complex DAX can translate into very expensive generated SQL.',
        'Composite model — mixes both: some tables imported for speed, others left as DirectQuery for freshness or scale, in the same model.',
      ]},
      { type: 'paragraph', content: 'For Brew & Bite\'s franchise reporting, Import is usually the right default — daily sales data does not need second-by-second freshness, and Import gives by far the most responsive viewer experience.' },

      { type: 'heading', content: 'Reducing cardinality: a frequently overlooked cost' },
      { type: 'paragraph', content: 'Cardinality is how many distinct values a column has. A column with a unique value on every single row (like a long transaction ID, or a precise timestamp down to the second) is expensive for the VertiPaq engine to compress and store efficiently. Splitting a single Date+Time column into a separate Date column and a Time column (with far fewer distinct values each) is a classic, simple optimisation that can meaningfully shrink a large model.' },

      { type: 'heading', content: 'Star schema, again, now as a performance practice' },
      { type: 'paragraph', content: 'The relationships and star schema design from the Intermediate track were framed as a modelling best practice — they are equally a performance best practice. A clean star schema (Sales as a thin fact table, Items/Cities/Calendar as small dimension tables) is dramatically faster for the engine to query than one giant flat table repeating every item and city detail on every row.' },

      { type: 'heading', content: 'Avoiding unnecessary bidirectional relationships' },
      { type: 'paragraph', content: 'Recall from the Intermediate track that "Both" cross filter direction can cause ambiguous filtering — it also has a real performance cost, since the engine has to evaluate more possible filtering paths. Keeping relationships Single-direction wherever genuinely possible is both clearer to reason about and lighter on performance.' },

      { type: 'heading', content: 'Aggregations: pre-summarising for speed at huge scale' },
      { type: 'paragraph', content: 'For a dataset truly large enough that even a well-modelled Import is slow (tens of millions of rows and beyond), Power BI supports Aggregation tables — a pre-summarised, much smaller version of the detailed data (e.g., daily totals per outlet instead of every individual transaction) that Power BI automatically uses for high-level visuals, only dropping down to the full detail table when a viewer drills into specifics that need it.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Open Performance Analyzer on your Brew & Bite report, record an interaction (click a slicer), and identify which visual took the longest. Check whether any relationship in your Model view is set to "Both" direction unnecessarily, and switch it to Single if so.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: "With a fast, well-modelled report, the next module covers going beyond Power BI's built-in chart types entirely — Custom Visuals, including ones written in R and Python, for the rare cases a standard bar or line chart genuinely cannot show what is needed." },
    ],
  },

  {
    id: 'pb-a-3',
    title: 'Custom visuals with R and Python',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'When the built-in visuals are not enough' },
      { type: 'paragraph', content: 'Brew & Bite\'s data science team wants a specific statistical chart — a box plot showing the spread of daily revenue per outlet, with outliers clearly marked — that is not one of Power BI\'s standard chart types. Two paths exist: import a pre-built custom visual, or write a script-based visual directly in R or Python.' },

      { type: 'heading', content: 'AppSource: importing pre-built custom visuals' },
      { type: 'paragraph', content: 'Visualizations pane → "Get more visuals" (the "..." menu, or the small icon at the bottom of the visuals list) opens a marketplace of community and Microsoft-built visuals — box plots, Sankey diagrams, word clouds, and dozens more, each installed with one click and then usable exactly like a built-in chart type, with fields dragged onto it the same way.' },
      { type: 'callout', kind: 'tip', content: 'Always check a custom visual\'s publisher and reviews on AppSource before relying on it for a real report. Microsoft-certified visuals (marked with a certification badge) have passed a security and performance review; many community visuals have not, which matters more in a business setting than a personal learning project.' },

      { type: 'heading', content: 'R and Python visuals: when you need genuinely custom logic' },
      { type: 'paragraph', content: 'If even the AppSource marketplace does not have what you need, Power BI Desktop includes a Python visual and an R visual in the standard Visualizations pane. Dragging fields onto one of these opens a script editor where you write actual R or Python code that produces a plot, using the dragged fields as a dataframe.' },
      { type: 'code', language: 'excel', content: `# Inside a Python visual, after dragging City and Revenue onto it,
# Power BI automatically provides a 'dataset' dataframe with those
# columns. A simple example script:

import matplotlib.pyplot as plt
plt.boxplot(dataset.groupby('City')['Revenue'].apply(list))
plt.xticks(range(1, len(dataset['City'].unique()) + 1), dataset['City'].unique())
plt.show()

# Power BI captures whatever matplotlib renders and displays
# it as the visual on the report canvas` },
      { type: 'paragraph', content: 'This requires Python (or R) installed locally and configured in Power BI Desktop\'s options first (Options → Python scripting, pointing to your installed Python environment), and the specific packages used (like matplotlib or pandas) must already be installed in that environment.' },

      { type: 'heading', content: 'The real tradeoffs of script visuals' },
      { type: 'list', items: [
        'They are static images, not interactive — a viewer cannot click a bar on a Python/R visual to cross-filter other visuals the way they can with a native Power BI chart.',
        'They can be noticeably slower to render than native visuals, since an entire R or Python process runs behind the scenes for every refresh.',
        'When published to the Service, R/Python visuals require an appropriate gateway and runtime to be configured for them to refresh correctly — they are not "just published" as simply as native visuals.',
      ]},
      { type: 'callout', kind: 'warning', content: 'Reach for a Python or R visual only when a genuinely specific statistical chart is required and no native visual or AppSource visual covers it — not as a first choice. The loss of native interactivity (cross-filtering, drill-through) is a real cost most reports should not pay unnecessarily.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Browse AppSource from inside Power BI Desktop and install one custom visual (a box plot visual is a good match for this track\'s data). Drag City and Revenue onto it to see the spread of revenue per outlet. If Python is installed locally, optionally try the matplotlib box plot script above as a second approach to the same question.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'So far every report has been viewed inside the Power BI Service itself. The next module covers Embedded Analytics — putting a Power BI report directly inside another website or application, exactly what Brew & Bite needs for its franchise partner portal.' },
    ],
  },

  {
    id: 'pb-a-4',
    title: 'Embedded analytics',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'The franchise partner portal problem' },
      { type: 'paragraph', content: "Brew & Bite's franchise partners each log into a separate partner portal website (not the Power BI Service directly) to see their own outlet's numbers, place supply orders, and read company announcements, all in one place. Asking them to also separately log into app.powerbi.com would be a clunky, disconnected experience. Embedded Analytics solves this: a Power BI report rendered directly inside that existing partner portal website, as if it were a native part of the page." },

      { type: 'heading', content: 'Two different embedding scenarios' },
      { type: 'list', items: [
        '"Embed for your organisation" — embedding a report inside an internal company application or intranet, for viewers who already have a Power BI account and license themselves.',
        '"Embed for your customers" (also called App Owns Data) — embedding a report inside an external-facing application or website (like a franchise partner portal) for viewers who do NOT have their own Power BI account at all — they never log into Power BI directly; the host application handles authentication on their behalf.',
      ]},
      { type: 'paragraph', content: 'Brew & Bite\'s franchise partner portal is squarely the second case — partners should never need to know Power BI exists at all behind the scenes.' },

      { type: 'heading', content: 'How "embed for your customers" actually works' },
      { type: 'paragraph', content: 'The partner portal\'s own backend application (not the partner\'s browser directly) authenticates to Power BI using a dedicated service identity, requests an embed token scoped to a specific report (and, combined with Row-Level Security from the Intermediate track, scoped to that specific franchise partner\'s data), and passes that token to the front-end page, which uses Power BI\'s embedding JavaScript SDK to render the report inside an iframe-like container on the page.' },
      { type: 'code', language: 'excel', content: `Conceptual flow (not literal code, but the real sequence):

1. Partner logs into the existing portal website (their normal login,
   nothing Power BI-specific)
2. Portal's backend requests a Power BI embed token, scoped to:
   - the specific report to show
   - an RLS role/identity matching that exact franchise partner
3. Portal's frontend uses the embed token + Power BI JavaScript SDK
   to render the report inside the page
4. The partner sees only their own outlet's data, inside a page that
   never required them to have a separate Power BI login at all` },
      { type: 'callout', kind: 'tip', content: 'Notice that Row-Level Security from the Intermediate track is not optional here — it is the exact mechanism that makes embedding for customers safe. Without RLS, an embed token for "the report" would show every franchise partner the same, unrestricted data; combined with RLS, the same embedded report safely shows each partner only their own outlet.' },

      { type: 'heading', content: 'The Power BI REST API' },
      { type: 'paragraph', content: 'Embedding (and most automation around Power BI generally) goes through the Power BI REST API — a set of web endpoints for things like generating embed tokens, listing reports in a workspace, triggering a dataset refresh programmatically, or managing workspace users. A developer building the partner portal\'s backend would call these endpoints directly, typically using one of Microsoft\'s client libraries rather than raw HTTP calls.' },

      { type: 'heading', content: 'Licensing reality: this is not free at any scale' },
      { type: 'paragraph', content: 'Embedding for customers requires either a Power BI Embedded capacity (a dedicated Azure resource, billed by capacity size rather than per user) or a Premium capacity that the organisation already owns. This is a genuine cost and architecture decision a real company makes deliberately — not something to assume is automatically included with a standard Power BI Pro license.' },

      { type: 'heading', content: 'Try it (conceptual — full implementation needs a backend app)' },
      { type: 'paragraph', content: 'In Power BI Desktop, open File → Embed Report to see the iframe embed code Power BI generates for a published report (this is the simpler "embed for your organisation" pattern, usable directly without writing backend code). Read through it and identify which part of the URL identifies the specific report being embedded.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'Embedding raises a real organisational question: who is allowed to publish, edit, and manage all of these reports and workspaces in the first place? The next module covers Workspace Governance — the structure a head-office BI team puts in place once there are dozens of reports and many more people who could potentially touch them.' },
    ],
  },

  {
    id: 'pb-a-5',
    title: 'Workspace governance',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'From "one person\'s reports" to "a managed BI estate"' },
      { type: 'paragraph', content: "When it was just you building one report, governance was not a real question. With a head-office BI team, 50 franchise outlets, embedded partner portals, and dozens of stakeholders, Brew & Bite needs actual structure: who can edit what, what counts as the trusted official version of a number, and how a change gets tested before reaching anyone who matters." },

      { type: 'heading', content: 'Workspace roles' },
      { type: 'paragraph', content: 'Every workspace has four built-in roles, each with a different level of access:' },
      { type: 'list', items: [
        'Admin — full control, including adding/removing other members and deleting the workspace itself',
        'Member — can edit and publish content, and share it with others, but cannot manage workspace membership',
        'Contributor — can edit and publish content, but cannot share it onward to others',
        'Viewer — can only view published content, with no editing rights at all',
      ]},
      { type: 'paragraph', content: 'Real-life assignment: the head-office BI lead is Admin; a couple of BI analysts who build reports day-to-day are Members; franchise regional managers who should see but never alter reports are Viewers.' },

      { type: 'heading', content: 'Deployment pipelines: Dev, Test, Production' },
      { type: 'paragraph', content: 'A Premium-capacity feature, Deployment Pipelines, lets a workspace exist in three parallel stages — Development, Test, and Production — with a button to promote content from one stage to the next. A BI analyst builds and experiments in Dev, a designated reviewer checks the Test stage against real (or close-to-real) data, and only verified content ever reaches Production, which is what franchise partners and managers actually see day to day.' },
      { type: 'callout', kind: 'tip', content: 'This mirrors the same Dev → Test → Production discipline used in regular software engineering — applied here to reports and datasets instead of application code. It exists specifically to prevent an in-progress, half-finished change from accidentally appearing in front of real business users.' },

      { type: 'heading', content: 'The "single source of truth" problem, and shared datasets' },
      { type: 'paragraph', content: 'Without governance, it is common for five different analysts to each build their own separate "Revenue" measure, slightly differently, across five different reports — leading to five different numbers when someone asks "what was last month\'s revenue?" A shared, certified dataset (published once, to one workspace, then connected to by multiple separate reports) solves this: one Total Revenue measure, defined once, used everywhere, instead of redefined and subtly diverging five times.' },
      { type: 'paragraph', content: 'A dataset can be marked "Certified" or "Promoted" in the Service (an admin or designated steward action), signalling to everyone in the organisation which version is the trusted, official one to build new reports against.' },

      { type: 'heading', content: 'Sensitivity labels: data classification, not just access control' },
      { type: 'paragraph', content: 'Beyond who can edit or view a report, sensitivity labels (e.g., "Public," "Internal," "Confidential — Franchise Financials") can be applied to reports and datasets, often integrated with an organisation\'s wider Microsoft 365 data protection policies. This addresses a different question from workspace roles — not "who is allowed in," but "how sensitive is this content, and what handling rules (like restrictions on exporting or sharing externally) should follow it automatically.' },

      { type: 'heading', content: 'The Admin Portal: tenant-wide settings' },
      { type: 'paragraph', content: 'A Power BI administrator (a distinct, organisation-wide role, separate from any individual workspace\'s Admin) manages tenant-level settings through the Admin Portal — controlling things like whether publishing to the web is allowed at all, who can create new workspaces, and reviewing usage metrics across the entire organisation\'s Power BI activity, not just one workspace.' },

      { type: 'heading', content: 'Try it (conceptual)' },
      { type: 'paragraph', content: 'In a workspace you have access to (My workspace counts), check Workspace Access settings to see the roles available. Think through how you would assign roles for the Brew & Bite scenario: who should be Admin, who should be Member, and who should only ever be Viewer.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'The final module covers the Premium-tier capabilities referenced throughout this track — deployment pipelines, large dataset support, paginated reports, and AI features — tying together exactly what a Premium or Premium Per User license unlocks versus standard Pro.' },
    ],
  },

  {
    id: 'pb-a-6',
    title: 'Power BI Premium features',
    duration: '35 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Pro vs Premium: what the upgrade actually buys' },
      { type: 'paragraph', content: 'Several features referenced throughout this Advanced track — Deployment Pipelines, larger dataset sizes, dedicated capacity for embedding — specifically require Premium (either organisation-wide Premium capacity, or Premium Per User, a more affordable per-person variant with most of the same features). Pro, the standard license, covers everything in the Beginner and Intermediate tracks; Premium is what a growing organisation like Brew & Bite head office eventually needs.' },

      { type: 'heading', content: 'Larger datasets and faster refresh' },
      { type: 'paragraph', content: 'Pro-licensed datasets are capped at 1 GB and a limited number of scheduled refreshes per day. Premium capacity raises the dataset size limit substantially (capacity-dependent, but far beyond 1 GB) and allows far more frequent refreshes — relevant the moment Brew & Bite\'s transaction history across 50 outlets, several years deep, would otherwise hit that Pro-tier ceiling.' },

      { type: 'heading', content: 'Paginated reports: the "looks like a PDF" format' },
      { type: 'paragraph', content: 'Standard Power BI reports are built for interactive, on-screen exploration. Paginated Reports (built with the separate Power BI Report Builder tool) are designed instead for printing or exporting a precisely formatted, page-by-page document — exactly what is needed for something like a formal monthly invoice or franchise royalty statement that must look identical and correctly paginated every time it is generated, whether viewed on screen or printed.' },
      { type: 'callout', kind: 'tip', content: 'A common real mistake is trying to force a standard interactive report into looking like a perfectly formatted printable invoice — fighting Power BI\'s canvas to get pixel-perfect page breaks. The moment a report genuinely needs to be a precisely formatted printed document, Paginated Reports is almost always the right tool, not a workaround inside a normal report.' },

      { type: 'heading', content: 'AI features: Q&A and Quick Insights' },
      { type: 'list', items: [
        'Q&A — a visual where a viewer types a plain-English question ("total revenue by city last month") and Power BI generates a matching visual automatically, using the underlying data model\'s field names and synonyms',
        'Quick Insights — Power BI automatically scans a dataset and surfaces patterns it finds notable on its own (like an unusual spike or a strong correlation), without anyone specifically asking it to look',
      ]},
      { type: 'paragraph', content: 'Both work best on a clean, well-modelled dataset (exactly what the Intermediate track\'s relationships and the Advanced track\'s DAX patterns produce) — Q&A in particular relies heavily on sensible, well-named fields and measures to correctly interpret a typed question.' },

      { type: 'heading', content: 'Dataflows: reusable, centralised data preparation' },
      { type: 'paragraph', content: 'A Dataflow is essentially a Power Query cleanup recipe (the same Get & Transform skills from the Beginner track) saved centrally in the Service itself, rather than locked inside one single .pbix file. Multiple separate reports across multiple workspaces can then connect to the same Dataflow, so a cleanup step (like the City trimming/capitalising from early in this whole journey) is defined once centrally, instead of being redefined inside every individual report file.' },

      { type: 'heading', content: 'Capstone: bringing the Advanced track together' },
      { type: 'paragraph', content: 'Reflect on the full Brew & Bite journey across all three tracks, and design (conceptually — a written plan, not necessarily a fully built file) how a real head-office BI team would now structure things at 50-outlet scale:' },
      { type: 'list', items: [
        'Which DAX patterns from this track (VAR/RETURN, RANKX, ALLEXCEPT) would power a head-office "outlet leaderboard" report',
        'What you would check first in Performance Analyzer if franchise managers started complaining the dashboard felt slow',
        'Whether the franchise partner portal should use "embed for your organisation" or "embed for your customers," and why',
        'How you would structure workspace roles across head office (Admin/Member) versus regional managers (Viewer)',
        'Whether a Dev → Test → Production deployment pipeline is justified yet at this scale, and what would change your answer',
        'One scenario where a Paginated Report would genuinely be the better tool than a standard interactive report',
      ]},
      { type: 'callout', kind: 'warning', content: 'There is genuinely no single correct answer to several of these — real BI governance decisions depend on team size, budget, and organisational maturity. The valuable skill this capstone tests is being able to reason clearly through the tradeoffs, not memorising one fixed "correct" architecture.' },

      { type: 'heading', content: "You've finished the Power BI Advanced track" },
      { type: 'paragraph', content: "Across all three tracks, you have gone from loading a single Excel file to designing a multi-table model with real DAX, securing it with row-level security, embedding it into an external partner-facing application, and reasoning about the governance and Premium-tier decisions a real organisation faces once BI stops being one person's side project. That progression — from a chai shop owner's first chart to a 50-outlet franchise's governed BI estate — mirrors the actual career path from junior analyst to someone trusted with organisation-wide Power BI architecture." },
    ],
  },
]

/* ════════════════════════════════════════════════════════════════
   TABLEAU — INTERMEDIATE
   Running scenario: Sample Superstore dataset (Orders sheet)
   Modules: tb-i-1 … tb-i-4 (lessons), tb-mp-i-1 (mini project),
            tb-i-5 (capstone — Story Points)
   ════════════════════════════════════════════════════════════════ */
const TABLEAU_INTERMEDIATE = [
  /* ── Module 1: Calculated Fields ─────────────────────────────── */
  {
    id: 'tb-i-1',
    title: 'Calculated fields — the formula layer',
    duration: '40 min',
    sections: [
      { type: 'heading', content: 'Why you need calculated fields' },
      { type: 'paragraph', content: 'Tableau ships with every column in your source file — but the insight almost never lives in a raw column. You need the profit margin, not just Profit and Sales separately. You need to flag "Late" orders, not just ship dates. Calculated fields let you define new logic directly inside Tableau, applied to every row, without touching the source data.' },
      { type: 'callout', kind: 'info', content: 'Calculated fields appear in the Data pane with a small "=" icon. They behave exactly like any other field — drag them onto shelves, use them in filters, reference them in other calcs.' },

      { type: 'heading', content: 'Creating your first calculated field' },
      { type: 'paragraph', content: 'Right-click any blank space in the Data pane → "Create Calculated Field." A formula editor opens with syntax highlighting and autocomplete. Give your field a descriptive name — this name is what everyone else sees on the dashboard.' },
      { type: 'code', language: 'text', content: '// Profit Margin (%) — a simple ratio\n[Profit] / [Sales]\n\n// Then format the field as Percentage in the field\'s default properties.' },

      { type: 'heading', content: 'String calculations' },
      { type: 'paragraph', content: 'String functions let you clean, combine, or extract text. These are essential whenever a data export gives you messy, concatenated, or oddly formatted text columns.' },
      { type: 'code', language: 'text', content: '// Combine first and last name\n[First Name] + " " + [Last Name]\n\n// Extract the first word of a product name (everything before the first space)\nLEFT([Product Name], FIND(" ", [Product Name]) - 1)\n\n// Flag orders from a specific region\nIF CONTAINS([Region], "West") THEN "Western" ELSE "Other" END\n\n// Uppercase for consistent grouping\nUPPER([Category])' },
      { type: 'list', items: [
        'LEFT / RIGHT / MID — extract substrings',
        'FIND — position of a character',
        'CONTAINS — boolean: does this text include X?',
        'REPLACE — swap one string for another',
        'TRIM — remove leading/trailing spaces (crucial for lookup matches)',
        'LEN — number of characters',
      ]},

      { type: 'heading', content: 'Number calculations' },
      { type: 'paragraph', content: 'Number calcs are the most common type. You are almost always deriving a ratio, a difference, a margin, or applying business logic on top of raw values.' },
      { type: 'code', language: 'text', content: '// Profit margin as a percentage\n[Profit] / [Sales]\n\n// Days to ship\nDATEDIFF("day", [Order Date], [Ship Date])\n\n// Discount impact (lost revenue from discounting)\n[Sales] * [Discount]\n\n// Round to 2 decimal places\nROUND([Profit] / [Sales], 2)\n\n// Absolute value (useful when comparing losses)\nABS([Profit])' },

      { type: 'heading', content: 'Date calculations' },
      { type: 'paragraph', content: 'Date logic is surprisingly common in real dashboards. Tableau has a full suite of DATEADD, DATEDIFF, DATEPART, and DATETRUNC functions.' },
      { type: 'code', language: 'text', content: '// Year of order\nDATEPART("year", [Order Date])\n\n// Quarter number (1–4)\nDATEPART("quarter", [Order Date])\n\n// Days since order was placed (age of an order)\nDATEDIFF("day", [Order Date], TODAY())\n\n// Truncate to month start (for month-level grouping)\nDATETRUNC("month", [Order Date])\n\n// Add 30 days to an expected ship date\nDATEADD("day", 30, [Order Date])' },

      { type: 'heading', content: 'Boolean (True/False) calculations' },
      { type: 'paragraph', content: 'Boolean calcs produce TRUE or FALSE and are most useful as quick filters or as building blocks inside larger IF statements.' },
      { type: 'code', language: 'text', content: '// Is this a high-value order?\n[Sales] > 500\n\n// Was the order late? (assumed 5-day standard)\nDATEDIFF("day", [Order Date], [Ship Date]) > 5\n\n// Is the customer from a priority segment?\n[Segment] = "Corporate" OR [Segment] = "Home Office"' },

      { type: 'heading', content: 'IF / IIF / CASE — branching logic' },
      { type: 'paragraph', content: 'Branching calcs are how you translate business rules into Tableau. Use IF for most things, CASE when you are matching one field against a list of known values, and IIF (inline if) for quick two-branch logic.' },
      { type: 'code', language: 'text', content: '// Profit tier — multi-branch IF\nIF [Profit] < 0 THEN "Loss"\nELSEIF [Profit] < 200 THEN "Low"\nELSEIF [Profit] < 1000 THEN "Medium"\nELSE "High"\nEND\n\n// CASE — cleaner when matching a dimension\nCASE [Ship Mode]\n  WHEN "First Class" THEN 1\n  WHEN "Second Class" THEN 2\n  WHEN "Standard Class" THEN 3\n  ELSE 4\nEND\n\n// IIF — one-liner for two branches\nIIF([Discount] > 0, "Discounted", "Full Price")' },

      { type: 'heading', content: 'Table calculations — running totals, ranks, and moving averages' },
      { type: 'paragraph', content: 'Table calculations are a second layer of computation — they run not on the raw data, but on the aggregated values already visible in the view. The classic examples are RUNNING_SUM (cumulative), RANK, and WINDOW_AVG (moving average).' },
      { type: 'code', language: 'text', content: '// Cumulative (running) total of Sales\nRUNNING_SUM(SUM([Sales]))\n\n// Rank each product by total profit (1 = most profitable)\nRANK(SUM([Profit]))\n\n// 3-period moving average of Sales\nWINDOW_AVG(SUM([Sales]), -2, 0)\n\n// Percent of total (each row as share of grand total)\nSUM([Sales]) / TOTAL(SUM([Sales]))' },
      { type: 'callout', kind: 'tip', content: 'Table calcs compute Along the table, Across, Down, or Pane-level — the "Compute Using" setting controls this. If a RUNNING_SUM resets unexpectedly, check Compute Using and switch from "Table (Across)" to "Table (Down)" or the dimension that makes sense for your view.' },

      { type: 'heading', content: 'Hands-on: build 3 calculated fields on Superstore' },
      { type: 'list', items: [
        'Profit Margin %: [Profit] / [Sales] — format as Percentage, 1 decimal',
        'Days to Ship: DATEDIFF("day", [Order Date], [Ship Date]) — put on a histogram',
        'Order Size Tier: IF [Sales] < 100 THEN "Small" ELSEIF [Sales] < 500 THEN "Medium" ELSE "Large" END — use on a bar chart coloured by tier',
      ]},
      { type: 'callout', kind: 'warning', content: 'A common mistake: dividing by a field that can be zero. [Profit] / [Sales] will error on rows where Sales = 0. Wrap it: IIF([Sales] = 0, 0, [Profit] / [Sales]).' },
    ],
  },

  /* ── Module 2: Parameters — Dynamic Controls ─────────────────── */
  {
    id: 'tb-i-2',
    title: 'Parameters — let users control the view',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'What is a parameter?' },
      { type: 'paragraph', content: 'A parameter is a user-controllable variable — a slider, a dropdown, or a text box — that lives outside your data but can feed into calculated fields, filters, and reference lines. Where a filter limits what rows appear, a parameter changes how the math works. That distinction is what makes parameters so powerful.' },
      { type: 'callout', kind: 'info', content: 'Think of a parameter as a named variable you can plug into any calculation. "If [Discount] > [Discount Threshold], highlight red" — the threshold is a parameter the user can slide.' },

      { type: 'heading', content: 'Creating a parameter' },
      { type: 'paragraph', content: 'Right-click blank space in the Data pane → "Create Parameter." Give it a name, choose its data type (Integer / Float / String / Boolean / Date), and set the allowable values: All, List (choose from options), or Range (a slider with min/max/step).' },
      { type: 'list', items: [
        'Name: Profit Threshold',
        'Data type: Float',
        'Allowable values: Range — Minimum: -500, Maximum: 2000, Step size: 50',
        'Current value: 0',
      ]},
      { type: 'paragraph', content: 'After creating it, right-click the parameter in the Data pane → "Show Parameter." A control appears on your sheet (slider or dropdown depending on the type). Users can now move it to change the value live.' },

      { type: 'heading', content: 'Wiring a parameter to a calculated field' },
      { type: 'paragraph', content: 'A parameter on its own does nothing — it has to be referenced in a calc. Create a calculated field "Profit Flag" that returns different labels based on whether Profit exceeds the threshold the user chose.' },
      { type: 'code', language: 'text', content: '// Calc: Profit Flag (references the parameter)\nIF SUM([Profit]) >= [Profit Threshold]\nTHEN "Above Threshold"\nELSE "Below Threshold"\nEND\n\n// Then drag Profit Flag onto Color on the Marks card.\n// As the user moves the Profit Threshold slider, colors update live.' },

      { type: 'heading', content: 'Top-N filter with a parameter' },
      { type: 'paragraph', content: 'One of the most common parameter use cases: let the user choose how many top products to show. Instead of a hardcoded Top 10 filter, build a Top N filter the user controls.' },
      { type: 'list', items: [
        'Create parameter: "Top N" — Integer — Range 1 to 20, step 1',
        'Create calculated field: RANK(SUM([Sales])) <= [Top N]',
        'Drag that field to Filters shelf → keep only TRUE',
        'Show the parameter → user can now pick Top 5, Top 10, Top 15 live',
      ]},
      { type: 'callout', kind: 'tip', content: 'You can put the parameter control directly on a dashboard so it sits visually next to the chart it controls. Users never need to know it is a "parameter" — they just see a helpful slider.' },

      { type: 'heading', content: 'Measure switcher — one chart, multiple metrics' },
      { type: 'paragraph', content: 'A classic intermediate pattern: one bar chart that shows Sales, Profit, or Quantity depending on what the user picks from a dropdown.' },
      { type: 'code', language: 'text', content: '// Parameter: Metric Selector\n// Data type: String\n// Allowable values: List → Sales, Profit, Quantity\n\n// Calculated field: Selected Metric\nCASE [Metric Selector]\n  WHEN "Sales" THEN SUM([Sales])\n  WHEN "Profit" THEN SUM([Profit])\n  WHEN "Quantity" THEN SUM([Quantity])\nEND\n\n// Drag [Selected Metric] onto the Rows shelf.\n// One chart. One axis. Three metrics. Zero duplication.' },

      { type: 'heading', content: 'Reference lines driven by parameters' },
      { type: 'paragraph', content: 'Parameters work beautifully with reference lines. On a bar chart of monthly sales, add Analytics → Reference Line → set the value to the Profit Threshold parameter. The line moves as the user adjusts the slider — perfect for target-vs-actual dashboards.' },

      { type: 'heading', content: 'Hands-on: build a dynamic Superstore dashboard' },
      { type: 'list', items: [
        '1. Create a Top N Products bar chart with a "Top N" integer parameter (range 3–20)',
        '2. Create a metric switcher: one line chart that shows Sales, Profit, or Discount based on a String parameter dropdown',
        '3. Add a reference line to the line chart using a "Target Sales" Float parameter',
        '4. Publish to a dashboard and arrange all three parameter controls on the right side panel',
      ]},
      { type: 'callout', kind: 'warning', content: 'Parameters are NOT filters — they never remove rows from the underlying data on their own. They are variables that your calcs use. Always pair a parameter with a calculated field or reference line to make it do anything visible.' },
    ],
  },

  /* ── Module 3: Maps and Geographic Data ─────────────────────── */
  {
    id: 'tb-i-3',
    title: 'Maps and geographic data',
    duration: '35 min',
    sections: [
      { type: 'heading', content: 'Why Tableau is good at maps' },
      { type: 'paragraph', content: 'Tableau ships with a geocoding database covering countries, states, cities, zip/post codes, airport codes, and more. When it detects a geographic role on a dimension, it resolves it to coordinates automatically — no API key, no configuration. For most business dashboards, this means maps are three clicks away.' },

      { type: 'heading', content: 'Assigning geographic roles' },
      { type: 'paragraph', content: 'Tableau tries to auto-detect geographic fields from column names like "State," "Country," "City," "Zip Code," and "Postal Code." If it does not auto-detect, right-click the dimension in the Data pane → Geographic Role → pick the correct type. A small globe icon will appear next to the field.' },
      { type: 'list', items: [
        'Country/Region — world map',
        'State/Province — sub-national polygons',
        'City — point on a map',
        'ZIP / Postal Code — more precise than city',
        'Latitude / Longitude — exact coordinates (overrides geocoding)',
      ]},
      { type: 'callout', kind: 'tip', content: 'If a state is showing as "unknown" (grey patch on the map), it is usually because the value in the data does not match Tableau\'s internal spelling. Use the "Edit Locations" dialog (Map menu → Edit Locations) to manually remap ambiguous values.' },

      { type: 'heading', content: 'Symbol maps vs filled maps' },
      { type: 'paragraph', content: 'There are two primary map types in Tableau. Symbol maps plot a circle (or other shape) at each geographic point, sized and coloured by a measure — great for cities, stores, or events. Filled maps shade entire geographic polygons (states, countries) by a measure — great for regional comparisons, not great for cities.' },
      { type: 'list', items: [
        'Symbol map: Drag a city/zip to Detail, drag a measure to Size and another to Color. Marks auto-switch to Circle.',
        'Filled map: Double-click a country/state field — Tableau switches to a filled polygon automatically. Then drag a measure to Color.',
        'For Superstore: State → filled map coloured by Profit is a classic one-click insight (you see Texas and Illinois losing money immediately).',
      ]},

      { type: 'heading', content: 'Layering measures: Size + Color' },
      { type: 'paragraph', content: 'Symbol maps become very information-dense when you put one measure on Size and another on Color. A common pattern: bubble size = revenue (importance), bubble color = profit (health). A large red bubble is your highest-revenue loss-making location — the most urgent intervention target.' },
      { type: 'code', language: 'text', content: '// Setup steps for a two-measure symbol map:\n// 1. Double-click [State] → auto-generates Latitude/Longitude on Columns/Rows\n// 2. Drag [Sales] → Size on Marks card\n// 3. Drag [Profit] → Color on Marks card\n// 4. Edit Color → Diverging palette (red-white-green), centered at 0\n// 5. Result: big red circle = high-sales, unprofitable state' },

      { type: 'heading', content: 'Dual-axis maps — two layers on one map' },
      { type: 'paragraph', content: 'A dual-axis map overlays two separate mark layers on the same map. This is the technique used to show, for example, filled polygons (state-level shading) AND circles (city-level bubbles) simultaneously.' },
      { type: 'list', items: [
        'Build a filled map using State on the map.',
        'Duplicate the Latitude pill on Rows (Ctrl+drag to create a copy). Now you have two map views stacked vertically.',
        'Right-click the second Latitude → "Dual Axis." The two maps merge into one.',
        'Change the Marks card for the second layer to Circle, drag City to Detail and Sales to Size.',
        'You now have state polygons shaded by Profit AND city bubbles sized by Sales — all on one map.',
      ]},
      { type: 'callout', kind: 'info', content: 'Dual-axis maps are a Tableau exclusive technique — one of the capabilities that makes Tableau visually stand out. They are worth mastering for portfolio work.' },

      { type: 'heading', content: 'Custom geocoding with latitude and longitude' },
      { type: 'paragraph', content: 'If your locations are not in Tableau\'s geocoding database — store branches, delivery hubs, field-survey points — bring your own coordinates. Include Latitude and Longitude as numeric columns in your data. Right-click each → Change Data Type → Number (Decimal). Then assign Geographic Role → Latitude / Longitude respectively. Drag both to Rows/Columns and your points plot exactly.' },

      { type: 'heading', content: 'Map filters and spatial filters' },
      { type: 'paragraph', content: 'You can filter directly on the map. Draw a rectangular or lasso selection on the map (hold Ctrl or Shift while clicking to select multiple areas) and right-click → "Keep Only." This acts as a visual filter. Alternatively, drag [Country] or [State] to the Filters shelf for the standard dropdown approach.' },

      { type: 'heading', content: 'Hands-on: Superstore geography analysis' },
      { type: 'list', items: [
        '1. Build a filled map of the US coloured by Profit (use a diverging red-white-green palette, centre at 0)',
        '2. Build a symbol map of cities — bubble size = Sales, bubble color = Profit Margin % (the calc from Module 1)',
        '3. Create a dual-axis map overlaying the state-level filled polygons with city bubbles',
        '4. Add a State quick filter so users can click to zoom into one region',
        '5. Observation: which states have high sales but negative profit?',
      ]},
      { type: 'callout', kind: 'warning', content: 'Filled maps only work reliably down to country/state/province level. At city or postcode level, use symbol maps — Tableau cannot fill irregular polygons at that granularity without custom shapefiles.' },
    ],
  },

  /* ── Module 4: LOD Expressions ───────────────────────────────── */
  {
    id: 'tb-i-4',
    title: 'LOD expressions — control what you aggregate',
    duration: '45 min',
    sections: [
      { type: 'heading', content: 'The problem LOD solves' },
      { type: 'paragraph', content: 'By default, every aggregation in Tableau computes at the granularity of whatever dimensions are in your view. If State and Category are on your chart, SUM([Sales]) gives state-category totals. But what if you need the state total regardless of what category the user has filtered to? Or the percentage each row contributes to its own category subtotal, not the grand total? That is what Level of Detail (LOD) expressions solve.' },
      { type: 'callout', kind: 'info', content: 'LOD expressions are widely considered the most important advanced concept in Tableau. Mastering them separates analysts who can answer "just show me sales by category" from analysts who can answer "what percentage of each region\'s total comes from each category, holding region constant across category filters?"' },

      { type: 'heading', content: 'FIXED — ignore the view, use only what I say' },
      { type: 'paragraph', content: 'FIXED computes an aggregation at the level you specify, ignoring whatever dimensions are in the view (though it does NOT ignore dimension filters on the Filter shelf by default — see the callout below).' },
      { type: 'code', language: 'text', content: '// Total sales per region — regardless of what else is in the view\n{ FIXED [Region] : SUM([Sales]) }\n\n// This always gives the region total — even if you have Category on Rows\n// and the view is "Sales by Category and Region," the FIXED value\n// stays at the region total and does not break down by Category.\n\n// Common use: % of region total\nSUM([Sales]) / { FIXED [Region] : SUM([Sales]) }\n\n// Customer acquisition month (the very first order date per customer)\n{ FIXED [Customer ID] : MIN([Order Date]) }' },
      { type: 'callout', kind: 'warning', content: 'Context filters (right-click → "Add to Context") DO affect FIXED LODs. Regular dimension filters on the Filter shelf do NOT affect FIXED LODs by default. This distinction trips up almost everyone the first time. If a FIXED value looks wrong after filtering, check whether your filter needs to be a context filter.' },

      { type: 'heading', content: 'INCLUDE — add a dimension to the aggregation' },
      { type: 'paragraph', content: 'INCLUDE adds an extra dimension to the aggregation on top of whatever is already in the view. Use it when you want a finer-grained sub-aggregate as input to a further calculation — most commonly to get an average of per-customer sums (average order value), which is different from the average of all individual rows.' },
      { type: 'code', language: 'text', content: '// Average sales per customer — the RIGHT way\n// (NOT AVG([Sales]) which averages individual order rows)\nAVG({ INCLUDE [Customer ID] : SUM([Sales]) })\n\n// How it reads: "for each customer, sum their sales, then average those sums"\n// This gives you average customer spend, not average line-item value\n\n// Monthly sales per customer (to then average or compare)\n{ INCLUDE [Customer ID], [Order Date] : SUM([Sales]) }' },

      { type: 'heading', content: 'EXCLUDE — remove a dimension from the aggregation' },
      { type: 'paragraph', content: 'EXCLUDE removes a dimension that IS in the view from the aggregation. The most common use is computing a "total excluding one dimension" for a percentage-of-subtotal calculation.' },
      { type: 'code', language: 'text', content: '// View has Region + Category on rows. You want each Category\'s\n// % share of its own Region (not % of grand total).\n\n// Region subtotal (ignores Category that is in the view)\n{ EXCLUDE [Category] : SUM([Sales]) }\n\n// % of Region total\nSUM([Sales]) / { EXCLUDE [Category] : SUM([Sales]) }\n\n// This will show 100% if you sum down any one Region column —\n// because you are dividing by the region total each time.' },

      { type: 'heading', content: 'The LOD operator precedence chart' },
      { type: 'paragraph', content: 'Tableau applies LODs in a specific order of operations relative to filters. Getting this wrong produces numbers that look plausible but are subtly wrong — the hardest category of bug to catch.' },
      { type: 'list', items: [
        '1. Extract filters (if using an extract) — apply first',
        '2. Data source filters',
        '3. Context filters (right-click → "Add to Context") — FIXED LODs computed after these',
        '4. FIXED LODs are computed here',
        '5. Dimension filters on the Filters shelf — FIXED values already locked in',
        '6. INCLUDE and EXCLUDE LODs — computed at view granularity, after dimension filters',
        '7. Table calculations — computed last, on the already-aggregated numbers in the view',
      ]},

      { type: 'heading', content: 'Classic LOD patterns you will use repeatedly' },
      { type: 'code', language: 'text', content: '// ① Cohort analysis: first purchase month per customer\n{ FIXED [Customer ID] : MIN([Order Date]) }\n// Then use DATETRUNC("month", …) on the result\n\n// ② % of total (grand total in view)\nSUM([Sales]) / { FIXED : SUM([Sales]) }\n// Note: empty FIXED means "aggregate over everything"\n\n// ③ Count distinct customers per region (useful when region is already in view)\n{ FIXED [Region] : COUNTD([Customer ID]) }\n\n// ④ Revenue per active customer (excluding customers with 0 orders)\nSUM([Sales]) / { FIXED : COUNTD([Customer ID]) }' },

      { type: 'heading', content: 'Hands-on: three LOD exercises on Superstore' },
      { type: 'list', items: [
        '1. Build a bar chart: % of each Sub-Category\'s sales within its own Category. Use EXCLUDE [Sub-Category] : SUM([Sales]) as the denominator.',
        '2. Calculate average customer spend per region using INCLUDE [Customer ID] : SUM([Sales]) — put Region on Rows, average the LOD on Columns.',
        '3. Build a cohort table: rows = customer acquisition month (FIXED DATETRUNC), columns = quarters, values = retention count. This is a full cohort analysis in ~4 LODs.',
      ]},
      { type: 'callout', kind: 'tip', content: 'When your LOD gives unexpected results, isolate the problem: add the exact dimensions from the LOD to a simple text table and aggregate manually. Compare with what the LOD returns. The discrepancy usually reveals whether you need a context filter or a different LOD type.' },
    ],
  },

  /* ── Mini Project ────────────────────────────────────────────── */
  {
    id: 'tb-mp-i-1',
    title: 'Mini Project: Superstore Executive Performance Dashboard',
    duration: '60 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Project brief' },
      { type: 'paragraph', content: 'You are a data analyst at a US retailer. The Head of Sales has asked for a single-page executive dashboard that answers three questions at a glance: (1) Which regions and states are profitable vs loss-making? (2) How does our top-product mix shift when we slide between Top 5, 10, and 20? (3) Is profit margin trending up or down by quarter? This project combines everything from the intermediate track: calculated fields, parameters, and maps.' },

      { type: 'heading', content: 'Dataset' },
      { type: 'paragraph', content: 'Use the Sample Superstore dataset included with Tableau Public. Connect to Orders sheet. You only need columns: Order Date, Region, State, Category, Sub-Category, Product Name, Sales, Profit, Quantity, Discount.' },

      { type: 'heading', content: 'Step 1 — build the calculated fields' },
      { type: 'list', items: [
        'Profit Margin %: IIF([Sales]=0, 0, [Profit]/[Sales]) — format as percentage',
        'Order Size Tier: IF [Sales]<100 THEN "Small" ELSEIF [Sales]<500 THEN "Medium" ELSE "Large" END',
        'Days to Ship: DATEDIFF("day",[Order Date],[Ship Date])',
        'Profit Flag: IIF([Profit]>=0,"Profitable","Loss")',
      ]},

      { type: 'heading', content: 'Step 2 — create parameters' },
      { type: 'list', items: [
        'Top N Products: Integer, Range 3–20, step 1, default 10',
        'Metric Selector: String, List: Sales / Profit / Profit Margin %',
      ]},
      { type: 'paragraph', content: 'Wire Metric Selector to a calc "Selected Metric": CASE [Metric Selector] WHEN "Sales" THEN SUM([Sales]) WHEN "Profit" THEN SUM([Profit]) WHEN "Profit Margin %" THEN AVG([Profit Margin %]) END' },

      { type: 'heading', content: 'Step 3 — build the three sheets' },
      { type: 'list', items: [
        'Sheet A — Profit Map: State → filled map, Profit → Color (diverging red-white-green, centre 0). Title: "State-level Profit".',
        'Sheet B — Top N Products: RANK(SUM([Sales])) <= [Top N] filter, Sub-Category on Rows, Selected Metric on Columns, coloured by Profit Flag. Title: "Top Products by [Metric Selector]".',
        'Sheet C — Quarterly Trend: DATETRUNC("quarter",[Order Date]) on Columns, Profit Margin % on Rows (AVG), Region on Color. Title: "Profit Margin % by Quarter".',
      ]},

      { type: 'heading', content: 'Step 4 — assemble the dashboard' },
      { type: 'list', items: [
        'Create a new dashboard (1200 × 800 px, Fixed size).',
        'Left half: Profit Map (Sheet A).',
        'Top right: Top N Products bar chart (Sheet B).',
        'Bottom right: Quarterly Trend line chart (Sheet C).',
        'Add parameter controls for "Top N Products" and "Metric Selector" to the right panel.',
        'Add a Dashboard Title text box: "Superstore Executive Dashboard".',
        'Wire a filter action: clicking a Region on the map filters both the bar chart and the line chart.',
      ]},

      { type: 'heading', content: 'Step 5 — sanity checks before publishing' },
      { type: 'list', items: [
        'Move the Top N slider from 3 to 20 — does the bar chart update and always show exactly N bars?',
        'Switch Metric Selector to "Profit Margin %" — does the bar chart axis relabel and the values shift to percentages?',
        'Click Texas on the map — do both the bar chart and trend line filter to Texas-only numbers?',
        'Check for null/unknown states on the map (grey patches) — if any, open Map → Edit Locations and remap them.',
        'Total profit on the bar chart and trend chart should roughly agree with a quick SUM([Profit]) verification.',
      ]},

      { type: 'heading', content: 'Stretch goal' },
      { type: 'paragraph', content: 'Add an LOD-powered KPI: use { FIXED [Region] : SUM([Profit]) } to build a Region-level profit bar (ignoring whatever state is selected via the map click action). This demonstrates that the user can see both the full regional picture AND the filtered state detail simultaneously on the same dashboard.' },

      { type: 'callout', kind: 'tip', content: 'Before publishing to Tableau Public, check that your workbook contains no customer-identifiable information. Superstore is synthetic, so it is safe — but build the habit of verifying this before every publish.' },
    ],
  },

  /* ── Module 5: Story Points — Data Narratives (Capstone) ────── */
  {
    id: 'tb-i-5',
    title: 'Story Points — building data narratives (capstone)',
    duration: '45 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'What is a Tableau Story?' },
      { type: 'paragraph', content: 'A Tableau Story is a sequence of views (sheets or dashboards) connected by narrative caption boxes. Unlike a dashboard — which is spatial (everything at once) — a Story is sequential (one insight leads to the next). It is the Tableau equivalent of a PowerPoint deck, except every slide is an interactive chart, not a static image.' },
      { type: 'callout', kind: 'info', content: 'Story Points are often used for board presentations, client deliverables, and end-of-quarter business reviews — any situation where you need to walk a non-technical audience through a set of insights in a guided order.' },

      { type: 'heading', content: 'Story anatomy' },
      { type: 'list', items: [
        'Story canvas — the overall container, sized like a dashboard',
        'Story point — one "slide," containing a single sheet or dashboard',
        'Caption box — the editable text at the top of each story point ("The West leads on revenue…")',
        'Navigator bar — the row of story-point tabs at the bottom, which the audience uses to step forward/backward',
      ]},

      { type: 'heading', content: 'Creating a Story' },
      { type: 'paragraph', content: 'Click the new Story tab icon at the bottom (looks like a book with a +). Choose the size (match your dashboard size for consistency). The Story builder opens with a blank first story point. On the left you see a list of all sheets and dashboards in the workbook — drag any one of them into the blank canvas to populate the first story point.' },
      { type: 'list', items: [
        '1. Drag a sheet or dashboard onto the blank story point canvas.',
        '2. Edit the caption box (click it) — write one crisp insight sentence, not a title. "The West region drives 32% of revenue but only 18% of profit" beats "West Region Overview."',
        '3. Click "Add a caption" (or "Blank") in the story panel to add the next story point.',
        '4. Repeat: drag the next relevant sheet in, write the next caption.',
        '5. Continue until the narrative is complete.',
      ]},

      { type: 'heading', content: 'Annotating inside a story point' },
      { type: 'paragraph', content: 'Each story point can have its own annotations. Right-click a mark in the view → Annotate → Mark / Area / Point. These annotations are story-point-specific — adding one on Story Point 2 does not affect Story Point 1, even if both points use the same underlying sheet. This lets you highlight different things on the same chart across different slides.' },
      { type: 'code', language: 'text', content: '// Annotation text example for a scatter plot:\n// "California: $457K revenue but -$23K profit — largest loss-maker"\n\n// Annotations are saved per story point — so you can annotate\n// California on slide 2 and Texas on slide 3, both on the same scatter chart.' },

      { type: 'heading', content: 'Best practices for a compelling Story' },
      { type: 'list', items: [
        'Lead with the punchline — start with the most important finding, not the methodology',
        'One finding per story point — resist the urge to cram two insights onto one slide',
        'Write captions as sentences with a subject and a number: "The Furniture category lost $18K in 2023" beats "Furniture analysis"',
        'Use consistent colours across the story — if West is blue on slide 1, keep it blue on slide 4',
        'End with a "so what" slide — a recommendation or a clear next step, not just "thank you"',
        'Keep it to 5–8 story points — beyond that, audiences lose the thread',
      ]},

      { type: 'heading', content: 'Capstone project: your Superstore story' },
      { type: 'paragraph', content: 'Build a 6-slide Story using the sheets and dashboards you built across this track. The narrative arc: context → problem → evidence → pattern → recommendation → next step.' },
      { type: 'list', items: [
        'Slide 1 — Context: "We serve 4 regions across 3 categories. Total revenue: $2.3M over 4 years." (Use a KPI text sheet or a summary bar chart.)',
        'Slide 2 — Problem: "Profit is growing slower than revenue — margin has declined from 13% to 11%." (Quarterly trend line from the mini project.)',
        'Slide 3 — Geography: "Three states account for the majority of losses: Texas, Ohio, Pennsylvania." (Profit map, annotated.)',
        'Slide 4 — Root cause: "Furniture drives most losses — it is the only category with a negative margin in every region." (LOD-powered category breakdown.)',
        'Slide 5 — Recommendation: "Cutting Furniture discounts from 40% to 20% in the South alone would recover an estimated $30K profit." (Manually calculated or parameter-driven estimate.)',
        'Slide 6 — Next step: "Monitor quarterly Furniture margin in this dashboard. First review: end of Q2." (Link back to the executive dashboard from the mini project.)',
      ]},
      { type: 'callout', kind: 'tip', content: 'Publish the Story to Tableau Public and share the link. A Tableau Story with clear captions and real data makes an excellent portfolio piece — it shows you can not only build charts but communicate insights to non-technical stakeholders, which is what most hiring managers actually want to see.' },

      { type: 'heading', content: 'What you have built across this intermediate track' },
      { type: 'list', items: [
        'Calculated fields: ratios, date logic, IF/CASE branching, table calcs (RUNNING_SUM, RANK)',
        'Parameters: Top-N filters, measure switchers, dynamic reference lines',
        'Maps: filled maps, symbol maps, dual-axis maps, custom lat/long',
        'LOD expressions: FIXED for cohort analysis and % of total, INCLUDE for per-customer aggregation, EXCLUDE for sub-totals',
        'Story Points: sequential narrative, per-slide annotations, best-practice caption writing',
        'Mini project: a full 3-sheet executive dashboard with filter actions, parameter controls, and a clean publish-ready layout',
      ]},
    ],
  },
]

/* ════════════════════════════════════════════════════════════════
   TABLEAU — ADVANCED
   Running scenario: Sample Superstore — executive-level analytics
   Modules: tb-a-1 … tb-a-4 (lessons), tb-mp-a-1 (mini project),
            tb-a-5 (capstone — Tableau Server / Cloud / embedding)
   ════════════════════════════════════════════════════════════════ */
const TABLEAU_ADVANCED = [

  /* ── Module 1: Advanced LOD — Nested, Cohort, Set-Level ──────── */
  {
    id: 'tb-a-1',
    title: 'Advanced LOD patterns — cohorts, nesting, and fixed totals',
    duration: '50 min',
    sections: [
      { type: 'heading', content: 'Beyond the basics: where advanced LOD lives' },
      { type: 'paragraph', content: 'At the intermediate level you learned the three LOD types — FIXED, INCLUDE, EXCLUDE — and their order-of-operations rules. Advanced LOD work is about composing those primitives: nesting one LOD inside another, computing cohort retention across time, building set-level aggregations, and solving the hardest class of percentage-of-total problems without touching the underlying data.' },

      { type: 'heading', content: 'Pattern 1: cohort analysis with FIXED' },
      { type: 'paragraph', content: 'Cohort analysis groups customers by when they first appeared (acquisition cohort) and then tracks their behaviour over subsequent time periods. It is the single most powerful tool for understanding customer retention and long-term value.' },
      { type: 'code', language: 'text', content: '// Step 1 — First purchase month per customer\nFirst Order Month = { FIXED [Customer ID] : MIN(DATETRUNC("month", [Order Date])) }\n\n// Step 2 — Months since first purchase (cohort age)\nCohort Age (months) = DATEDIFF("month", [First Order Month], DATETRUNC("month", [Order Date]))\n\n// Step 3 — Build the cohort table\n// Rows: First Order Month (the cohort)\n// Columns: Cohort Age (months)\n// Measure: COUNTD([Customer ID]) — how many of the cohort are still buying\n\n// Step 4 — Retention % (optional but recommended)\nRetention % = COUNTD([Customer ID]) / LOOKUP(COUNTD([Customer ID]), FIRST())\n// LOOKUP(…, FIRST()) fetches the value from the first column of each row\n// — i.e., the cohort\'s starting size at Month 0' },
      { type: 'callout', kind: 'tip', content: 'For Superstore: the cohort table will show you whether customers who first bought in Q1 2020 are still buying in Q3 2022. Typically the top-left cell has the most customers (Month 0 = everyone), and counts fall as cohort age increases. A slow decline = strong retention. A cliff = a churn problem.' },

      { type: 'heading', content: 'Pattern 2: nested LOD expressions' },
      { type: 'paragraph', content: 'A nested LOD uses the output of one LOD expression as the input to another. The most common use: "average of per-customer totals, then rank customers by that average, then filter to the top decile." Each step is a separate LOD, and later ones reference earlier ones.' },
      { type: 'code', language: 'text', content: '// Step 1 — Total revenue per customer\nCustomer Revenue = { FIXED [Customer ID] : SUM([Sales]) }\n\n// Step 2 — Customer revenue rank (1 = highest spender)\nCustomer Revenue Rank = RANK_UNIQUE([Customer Revenue])\n// Note: RANK_UNIQUE avoids ties. RANK gives same rank to equal values.\n\n// Step 3 — Top 10% flag\nIs Top Decile = [Customer Revenue Rank] <= { FIXED : COUNTD([Customer ID]) } * 0.10\n// { FIXED : COUNTD([Customer ID]) } = total distinct customers across dataset\n\n// Then filter Is Top Decile = TRUE — or colour by it on a scatter plot.' },

      { type: 'heading', content: 'Pattern 3: % of total with nested FIXED' },
      { type: 'paragraph', content: 'The percentage-of-grand-total pattern is one of the most requested business calculations. You want each bar in a chart to show not just its value but its share of the overall total — and you want that denominator to be the true grand total, unaffected by any quick filter the user applies.' },
      { type: 'code', language: 'text', content: '// Denominator: grand total (unaffected by view filters)\nGrand Total Sales = { FIXED : SUM([Sales]) }\n\n// % share for each dimension member\n% of Total = SUM([Sales]) / [Grand Total Sales]\n\n// Important: if you want the denominator to respect dimension filters\n// (e.g., always sum to 100% within the currently filtered set),\n// make the filter a Context Filter — that locks in what "total" means.' },

      { type: 'heading', content: 'Pattern 4: set-level aggregation' },
      { type: 'paragraph', content: 'Tableau Sets are named groups of dimension members — either static (you pick them manually) or dynamic (computed: top N, condition-based). The power comes from referencing IN vs OUT in LODs: "what is the average order value for customers IN the top-quartile set vs OUT of it?"' },
      { type: 'code', language: 'text', content: '// Create a Set: right-click [Customer ID] → Create → Set\n// Condition tab: SUM([Sales]) >= 5000 → customers who have spent ≥ $5000\n// Name the set: "High Value Customers"\n\n// Now use it in a calculated field:\nSegment Label = IF [High Value Customers] THEN "High Value" ELSE "Standard" END\n\n// Or use the Set directly on Color — Tableau shows IN/OUT automatically\n\n// LOD combining with Set:\n// Average Sales for High-Value customers only (ignoring current view)\nHV Avg Sales = { FIXED : AVG(IIF([High Value Customers], [Sales], NULL)) }' },

      { type: 'heading', content: 'Pattern 5: year-over-year comparison with FIXED' },
      { type: 'paragraph', content: 'YoY comparison requires the value for the same period last year alongside the current value. FIXED + DATEADD achieves this cleanly without duplicating data.' },
      { type: 'code', language: 'text', content: '// Current year total sales per month (the view has Month on Columns)\nCurrent Sales = SUM([Sales])\n\n// Prior year total for the same calendar month\nPrior Year Sales = { FIXED DATETRUNC("month", DATEADD("year", -1, [Order Date])) : SUM([Sales]) }\n\n// YoY growth %\nYoY Growth = (SUM([Sales]) - [Prior Year Sales]) / ABS([Prior Year Sales])\n\n// Note: the FIXED above computes a total for each prior-year month\n// and stamps it on every row in that month — matching it up with\n// the current-year month automatically.' },

      { type: 'heading', content: 'Hands-on: Superstore advanced LOD exercises' },
      { type: 'list', items: [
        '1. Build a 4-year cohort retention table using First Order Month and Cohort Age. Format as a heatmap (Color = Retention %).',
        '2. Create the "Top 10% Customers" set, then build a bar chart comparing average order value for IN vs OUT segments.',
        '3. Add a % of grand total label to a Category sales bar chart — then make the denominator respect a Region filter by promoting the Region filter to Context.',
        '4. Build a YoY growth line chart for monthly Sales. Flag months where YoY growth is negative in red using a Profit Flag–style colour calc.',
      ]},
      { type: 'callout', kind: 'warning', content: 'LOD nesting depth has practical limits. Beyond two levels of nesting, performance degrades and the logic becomes hard to debug. If you find yourself writing LODs that reference three previous LODs, consider whether the problem can be solved with a pre-aggregated extract or a custom SQL query.' },
    ],
  },

  /* ── Module 2: Advanced Table Calculations ───────────────────── */
  {
    id: 'tb-a-2',
    title: 'Advanced table calculations — WINDOW, INDEX, LOOKUP, partitioning',
    duration: '45 min',
    sections: [
      { type: 'heading', content: 'Why table calculations matter at the advanced level' },
      { type: 'paragraph', content: 'At the intermediate level you used RUNNING_SUM and RANK. Advanced table calculations unlock moving averages, period-over-period comparisons within the view, dynamic reference calculations, and sophisticated percent-of-total patterns that are faster than LODs when the data is already aggregated in the view.' },
      { type: 'callout', kind: 'info', content: 'Table calculations run after all other computation in Tableau\'s pipeline — they see the final aggregated numbers in the view, not raw rows. This makes them fast (no re-querying the database) but also scope-limited to what is visible.' },

      { type: 'heading', content: 'WINDOW functions — aggregate over a range of the table' },
      { type: 'paragraph', content: 'WINDOW functions compute an aggregate over a specified range of the table, anchored to the current cell. The syntax is WINDOW_FUNC(expression, start, end) where 0 means the current row, negative numbers mean rows before, positive numbers mean rows after, and FIRST()/LAST() mean the absolute first/last row in the partition.' },
      { type: 'code', language: 'text', content: '// 3-month moving average of Sales (current + 2 previous months)\nWINDOW_AVG(SUM([Sales]), -2, 0)\n\n// 12-month rolling sum\nWINDOW_SUM(SUM([Sales]), -11, 0)\n\n// Maximum value in the entire table partition (for ratio-to-max)\nWINDOW_MAX(SUM([Sales]), FIRST(), LAST())\n\n// Moving average of the last 4 quarters\nWINDOW_AVG(SUM([Sales]), -3, 0)\n\n// Ratio to max: each month as % of the peak month\nSUM([Sales]) / WINDOW_MAX(SUM([Sales]), FIRST(), LAST())' },

      { type: 'heading', content: 'INDEX — position-based logic' },
      { type: 'paragraph', content: 'INDEX() returns the integer position of the current row within the table partition (1-based). It is most useful for alternating row formatting, for restricting output to the first N rows, or for labelling.' },
      { type: 'code', language: 'text', content: '// Alternating row colour (use in a calculated field, drag to Color)\nINDEX() % 2 = 0  // → True/False alternates with each row\n\n// Only show the first 5 rows in a text table\nINDEX() <= 5  // Use on Filters shelf, keep TRUE\n\n// Label only the last point on a line chart\nIF LAST() = 0 THEN SUM([Sales]) END\n// LAST()=0 is TRUE only for the final row in the partition' },

      { type: 'heading', content: 'LOOKUP — fetch a value from another row' },
      { type: 'paragraph', content: 'LOOKUP(expression, offset) retrieves the value of expression from the row offset positions away from the current row. Negative offset = prior row; positive = future row; 0 = current. This is the table-calculation way to compare a value with the previous period.' },
      { type: 'code', language: 'text', content: '// Previous month\'s sales (for MoM comparison within the view)\nPrev Month Sales = LOOKUP(SUM([Sales]), -1)\n\n// Month-over-month change\nMoM Change = SUM([Sales]) - LOOKUP(SUM([Sales]), -1)\n\n// MoM % change\nMoM % = (SUM([Sales]) - LOOKUP(SUM([Sales]), -1)) / ABS(LOOKUP(SUM([Sales]), -1))\n\n// Same quarter last year (assuming quarterly view, offset = -4)\nSame Quarter Last Year = LOOKUP(SUM([Sales]), -4)' },
      { type: 'callout', kind: 'tip', content: 'LOOKUP(SUM([Sales]), -1) on the first row of a partition returns NULL (no prior row exists). Wrap it: IIF(ISNULL(LOOKUP(SUM([Sales]),-1)), 0, MoM % formula) to handle the first period gracefully.' },

      { type: 'heading', content: 'FIRST() and LAST() — anchor calculations to partition edges' },
      { type: 'paragraph', content: 'FIRST() and LAST() return the distance from the current row to the first/last row of the partition respectively. At the first row: FIRST()=0, LAST()=N-1. At the last row: FIRST()=-(N-1), LAST()=0. Use them inside IF conditions to trigger logic only at the start or end of a partition.' },
      { type: 'code', language: 'text', content: '// Label only the first data point on a line chart\nIF FIRST() = 0 THEN SUM([Sales]) END\n\n// Label only the last data point (most recent period)\nIF LAST() = 0 THEN SUM([Sales]) END\n\n// Show a value only at the midpoint of a partition\nIF INDEX() = INT(SIZE() / 2) THEN SUM([Sales]) END\n// SIZE() = total number of rows in the current partition' },

      { type: 'heading', content: 'Partitioning and addressing — the most misunderstood setting' },
      { type: 'paragraph', content: 'Every table calculation has two settings: Addressing (which dimension the calculation moves along — the "direction") and Partitioning (which dimension resets/restarts the calculation — the "grouping"). Getting this wrong produces numbers that look right but are silently incorrect.' },
      { type: 'list', items: [
        'Addressing dimension: the one the calc iterates over (e.g., Month). RUNNING_SUM accumulates along this dimension.',
        'Partitioning dimension: the one that resets the calc (e.g., Region). RUNNING_SUM restarts for each Region.',
        'In the calc field: right-click → Edit Table Calculation → use "Specific Dimensions" for precise control.',
        'Example: Monthly running sales total, restarted per Region: Address = Month, Partition = Region.',
        'Common mistake: "Table (Across)" addressing on a pivoted view merges dimensions unexpectedly — use "Specific Dimensions" instead.',
      ]},

      { type: 'heading', content: 'PERCENT OF TOTAL with table calcs vs LOD' },
      { type: 'paragraph', content: 'The table calc version (TOTAL) is often faster than a FIXED LOD for percent-of-total because it never re-queries the database — it just divides by the sum of what is already in the view. The tradeoff: it respects only the current view, so a user applying a quick filter changes what "total" means.' },
      { type: 'code', language: 'text', content: '// Table calc version — fast, view-dependent\nSUM([Sales]) / TOTAL(SUM([Sales]))\n\n// LOD version — slower, filter-independent (if no Context Filter)\nSUM([Sales]) / { FIXED : SUM([Sales]) }\n\n// When to use which:\n// Table calc: dashboards where the % should respect all applied filters\n// LOD FIXED: when the denominator must be the true dataset total\n//            regardless of what filters the user applies' },

      { type: 'heading', content: 'Hands-on exercises' },
      { type: 'list', items: [
        '1. Build a monthly Sales line chart with a 3-month moving average overlay (use a dual axis — one axis raw SUM, one axis WINDOW_AVG).',
        '2. Create a MoM % change bar chart — bars green if positive, red if negative. Handle the first-month NULL gracefully.',
        '3. On a text table of Sub-Categories, label only the top-performing sub-category (FIRST() = 0 after sorting by Sales descending) with its exact value.',
        '4. Build a running total that resets by year (partitioned by Year, addressed by Month) — the classic YTD sales chart.',
      ]},
    ],
  },

  /* ── Module 3: Sets and Set Actions ─────────────────────────── */
  {
    id: 'tb-a-3',
    title: 'Sets and set actions — dynamic audience segmentation',
    duration: '40 min',
    sections: [
      { type: 'heading', content: 'Sets vs groups: what is the difference?' },
      { type: 'paragraph', content: 'Groups are static: you manually combine dimension members into a new label. Sets are dynamic: the IN condition can be a computed rule (top N, condition-based), and — crucially — set membership can change in real time as the user interacts with the dashboard via Set Actions. That interactivity is what makes Sets uniquely powerful.' },
      { type: 'callout', kind: 'info', content: 'Think of a Set as a named boolean field: each dimension member is either IN or OUT. Once created, a Set is a field in your Data pane — drag it anywhere like a dimension.' },

      { type: 'heading', content: 'Creating sets' },
      { type: 'list', items: [
        'Manual set: right-click a dimension → Create → Set → General tab → select specific members',
        'Condition-based set: Condition tab → "By formula": SUM([Sales]) >= 5000 → members who meet the condition',
        'Top N set: Top tab → Top 10 by SUM([Sales]) → the ten highest-revenue customers',
        'Combined set: right-click two existing sets → Create Combined Set → intersect, union, or difference',
      ]},
      { type: 'code', language: 'text', content: '// Example sets for Superstore:\n// "High Value Customers": Condition — { FIXED [Customer ID]: SUM([Sales]) } >= 5000\n// "Top 10 Sub-Categories": Top 10 by SUM([Sales])\n// "Loss-Making Products": Condition — { FIXED [Product ID]: SUM([Profit]) } < 0\n\n// Use in a calculated field to label segments:\nCustomer Tier =\n  IF [High Value Customers] THEN "VIP"\n  ELSE "Standard"\n  END' },

      { type: 'heading', content: 'Set actions — user clicks change set membership' },
      { type: 'paragraph', content: 'Set Actions connect a user interaction (clicking a mark) to a Set\'s membership. When the user clicks a bar representing "California," the Set updates to contain only California, and every other sheet using that Set recalculates instantly. This is the most powerful interactive pattern in Tableau.' },
      { type: 'list', items: [
        'Dashboard → Actions → Add Action → Change Set Values',
        'Source sheet: the chart the user clicks on',
        'Target set: the set whose membership should change',
        'Running: "Select" (on click) is the standard; "Hover" updates on mouse-over',
        'Clearing the selection: "Keep set values" vs "Remove all values from set" (the latter resets to empty when user clicks away)',
      ]},
      { type: 'code', language: 'text', content: '// Scenario: user clicks a Region on a map → the "Selected Region" set updates\n// → all other sheets filter to show only that region\'s data\n\n// Implementation:\n// 1. Create Set "Selected Region" on [Region] — leave empty initially\n// 2. Use [Selected Region] as a filter on all other sheets\n// 3. Dashboard Action: Change Set Values\n//    Source: the map sheet\n//    Target set: Selected Region\n//    When clearing: Remove all values (show all regions again)' },

      { type: 'heading', content: 'Proportional highlighting with set actions' },
      { type: 'paragraph', content: 'A powerful UI pattern: user clicks a sub-category in a list → the selected sub-category is highlighted (IN) while others dim (OUT) across multiple charts simultaneously. This replaces filter actions in cases where you want to compare the selected item against the full context, not hide everything else.' },
      { type: 'code', language: 'text', content: '// Calculated field for proportional highlighting:\nOpacity =\n  IF [Selected Sub-Category Set] THEN 1.0\n  ELSE 0.3\n  END\n// Drag Opacity onto Opacity on the Marks card\n// Selected members are fully opaque; non-selected dim to 30%\n\n// Compare this to a Filter Action:\n// Filter action: non-selected marks disappear (good for drill-down)\n// Set action: non-selected marks dim (good for comparison in context)' },

      { type: 'heading', content: 'Combined sets for advanced comparisons' },
      { type: 'paragraph', content: 'When you have two sets, you can create a Combined Set that computes the intersection (in both), first-only (in Set A but not Set B), second-only (in Set B but not Set A), or union (in either). This is an advanced segmentation technique for questions like "which customers bought both in Q1 and Q4?" or "which products are in our top 10 by Sales but not top 10 by Profit?"' },
      { type: 'code', language: 'text', content: '// Create: Top 10 Sub-Categories by Sales (Set A)\n// Create: Top 10 Sub-Categories by Profit (Set B)\n// Combined Set: A intersect B → top 10 in BOTH metrics\n// Combined Set: A except B → high revenue but NOT high profit (margin problem)\n\n// Drag the combined set onto Color:\n// IN = top 10 in both → "Star" segment\n// OUT = not in both   → needs investigation' },

      { type: 'heading', content: 'Hands-on: interactive Superstore segmentation' },
      { type: 'list', items: [
        '1. Create a "High Value Customers" condition set (total Sales ≥ $5000). Build a bar chart comparing average order value for IN vs OUT.',
        '2. Create a Top 10 Sub-Categories by Sales set and a Top 10 by Profit set. Build a Combined Set for "high revenue but low profit" — the margin problem products.',
        '3. Build a two-sheet dashboard (bar chart + map) connected by a Set Action: clicking a Sub-Category bar highlights that sub-category on the map, dimming all others.',
        '4. Add a "Reset Selection" button that clears the set (Dashboard → Actions → Run Action Now, or a button with a URL action pointing to nothing).',
      ]},
      { type: 'callout', kind: 'warning', content: 'Set Actions only work on dashboards, not on individual sheets. Always test them on the actual dashboard, not in the sheet preview.' },
    ],
  },

  /* ── Module 4: Performance Tuning and Tableau Prep ───────────── */
  {
    id: 'tb-a-4',
    title: 'Performance tuning, Tableau Prep, and custom SQL',
    duration: '45 min',
    sections: [
      { type: 'heading', content: 'Why Tableau workbooks become slow' },
      { type: 'paragraph', content: 'A well-built Tableau workbook should feel instant — sub-second filter response, smooth slider movement. A poorly designed workbook on the same data can take 30 seconds to load a filter. Understanding the performance model lets you diagnose and fix slowness systematically.' },
      { type: 'list', items: [
        'Data volume: more rows = more to scan. Reduce with extracts and data source filters.',
        'Query complexity: too many calculated fields evaluated at query time multiply the cost.',
        'Mark count: Tableau renders every mark individually. A scatter plot with 500K points is slow on any machine.',
        'Live vs extract: live connections hit the database on every interaction; extracts cache data locally.',
        'LOD expressions can fire separate queries — each FIXED may be an extra database round-trip.',
      ]},

      { type: 'heading', content: 'Performance Recording — measure before you optimise' },
      { type: 'paragraph', content: 'Before guessing what is slow, measure it. Help menu → Settings and Performance → Start Performance Recording. Interact with the workbook normally (apply filters, switch views). Then stop recording — Tableau opens a new workbook showing a Gantt-style breakdown of every operation: Querying, Geocoding, Rendering, Layout, Computing.' },
      { type: 'list', items: [
        'Querying: time spent waiting for the database or extract — fix with better indexing, extracts, or aggregate tables',
        'Computing: time spent on calculated fields and table calcs — simplify calcs or move logic to Prep',
        'Rendering: time to draw marks on screen — reduce mark count, use vector rendering',
        'Layout: time to arrange objects — reduce sheet count in a single dashboard',
      ]},
      { type: 'callout', kind: 'tip', content: 'The Tableau Performance Recording is your first diagnostic step for any slow workbook. Never optimise based on intuition alone — the bottleneck is often not where you expect.' },

      { type: 'heading', content: 'Extracts vs live connections' },
      { type: 'paragraph', content: 'An extract is a compressed, column-store snapshot of your data (.hyper file) that Tableau reads directly without touching the original database. Extracts are always faster for interactive exploration. Use live connections only when you need real-time data (stock prices, live IoT feeds) or when the source database is faster than a Hyper file (very rare, only on massive data warehouse queries with pre-built indexes).' },
      { type: 'code', language: 'text', content: '// Switching to an extract:\n// Data Source page → Extract (top right toggle) → Extract Now\n// Then schedule a Refresh if publishing to Tableau Cloud/Server\n\n// Extract filters (reduce extract size before building it):\n// Add a filter on Order Date = last 3 years before extracting\n// → smaller file, faster load, less memory on Tableau Desktop\n\n// Aggregation (pre-aggregate before extraction):\n// Data Source page → Extract → Aggregation → check "Aggregate data..."\n// Aggregates to the visible level — reduces row count dramatically' },

      { type: 'heading', content: 'Data source filters and aggregate tables' },
      { type: 'paragraph', content: 'Data source filters run at connection time and permanently remove rows from what Tableau sees. They are the bluntest but most effective performance tool. If your source has 5 years of data and the dashboard only ever shows 2 years, apply a data source filter — Tableau never has to process those extra rows.' },
      { type: 'list', items: [
        'Data Source page → Filters (top right) → Add → choose a field → set the condition',
        'Data source filters affect every sheet in the workbook — use carefully',
        'Alternatively, use an Aggregate table in the extract: pre-group by Date + Category before extracting → dramatically reduces row count for summary dashboards',
      ]},

      { type: 'heading', content: 'Reducing mark count' },
      { type: 'paragraph', content: 'Tableau renders every mark as a separate vector object. A scatter plot with 200,000 points is not just slow — it is unreadable. Techniques to reduce mark count while preserving insight:' },
      { type: 'list', items: [
        'Aggregate to a higher grain: instead of one point per order, one point per customer (COUNTD or LOD)',
        'Bin continuous measures: convert a Sales axis into $100 bins → reduces distinct x-positions from 200K to ~50',
        'Sample the data: for exploratory analysis, build on a 10% sample extract, then switch to full data before publishing',
        'Use density marks: Marks card → change type to Density — Tableau automatically aggregates overlapping points into a heatmap',
      ]},

      { type: 'heading', content: 'Custom SQL — when Tableau\'s drag-and-drop is not enough' },
      { type: 'paragraph', content: 'Custom SQL lets you write a SELECT statement that Tableau treats as a table. Use it when you need a JOIN that Tableau\'s relationship engine cannot express, a pre-aggregated subquery, or a database-specific function Tableau has no native support for.' },
      { type: 'code', language: 'text', content: '-- In Data Source page: New Custom SQL\n-- Write a query that returns the exact table you need:\n\nSELECT\n  o.[Order ID],\n  o.[Order Date],\n  o.[Customer ID],\n  c.[Customer Name],\n  c.[Segment],\n  SUM(o.[Sales])   AS Total_Sales,\n  SUM(o.[Profit])  AS Total_Profit,\n  COUNT(*)         AS Order_Lines\nFROM Orders o\nJOIN Customers c ON o.[Customer ID] = c.[Customer ID]\nWHERE o.[Order Date] >= DATEADD(year, -2, GETDATE())\nGROUP BY o.[Order ID], o.[Order Date], o.[Customer ID],\n         c.[Customer Name], c.[Segment]\n\n-- Tableau receives one pre-aggregated row per Order — much faster\n-- than letting Tableau join and aggregate at interaction time.' },
      { type: 'callout', kind: 'warning', content: 'Custom SQL fires on every interaction with the workbook if you are on a live connection. Pre-aggregate in the SQL as much as possible, or use Custom SQL only on extracts. A Custom SQL live connection to a large table is one of the most common causes of "this workbook is very slow."' },

      { type: 'heading', content: 'Tableau Prep — visual data preparation' },
      { type: 'paragraph', content: 'Tableau Prep Builder is a separate tool (bundled with Tableau Creator licences) for cleaning and shaping data before it reaches Tableau Desktop. Unlike Power Query in Excel, Prep uses a visual flow diagram: each cleaning step is a node you connect to the next. The output is a clean .hyper extract or a connection to Tableau Cloud.' },
      { type: 'list', items: [
        'Input node: connect to any source (CSV, Excel, database, cloud connector)',
        'Clean node: rename fields, change types, group values, remove nulls, split columns',
        'Aggregate node: pre-group and sum data before output — reduces row count dramatically',
        'Join node: combine two input flows on a matching key (like SQL JOIN)',
        'Union node: stack two inputs vertically (like SQL UNION ALL)',
        'Output node: write to a .hyper file or publish to Tableau Cloud as a published data source',
      ]},
      { type: 'code', language: 'text', content: '// Typical Prep flow for a messy retail export:\n// Input (messy CSV)\n//   → Clean (fix date formats, trim strings, standardise region names)\n//   → Aggregate (group by Region, Category, Month → SUM Sales, Profit)\n//   → Output (.hyper extract)\n\n// The resulting extract has maybe 200 rows instead of 500,000\n// Tableau Desktop opens it in milliseconds\n\n// Scheduling Prep flows:\n// Publish the flow to Tableau Cloud/Server → schedule to run nightly\n// → always-fresh clean data without manual intervention' },

      { type: 'heading', content: 'Hands-on: optimise a slow Superstore workbook' },
      { type: 'list', items: [
        '1. Run Performance Recording on a dashboard with 5+ sheets. Identify the top bottleneck (Query vs Rendering vs Computing).',
        '2. Switch the Superstore connection from Live to Extract. Measure the reload time difference.',
        '3. Add a data source filter: Order Date is in the last 3 years. Verify that every sheet still works and the workbook file size shrinks.',
        '4. Write a Custom SQL query that pre-aggregates Orders to Order-level (one row per Order ID, summing Sales/Profit/Quantity). Use it as the data source for a KPI summary dashboard.',
      ]},
    ],
  },

  /* ── Mini Project ────────────────────────────────────────────── */
  {
    id: 'tb-mp-a-1',
    title: 'Mini Project: Superstore Customer Cohort & Retention Dashboard',
    duration: '75 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Project brief' },
      { type: 'paragraph', content: 'The Head of Marketing at a US retailer has asked for a retention analytics dashboard. She wants to know: (1) Are customers coming back after their first purchase? (2) Which acquisition cohorts have the best long-term retention? (3) Which customer segment (Consumer/Corporate/Home Office) generates the highest lifetime value? This project combines advanced LOD expressions, table calculations, and Set Actions into a single polished dashboard.' },

      { type: 'heading', content: 'Dataset' },
      { type: 'paragraph', content: 'Sample Superstore — Orders sheet. Columns needed: Order ID, Order Date, Customer ID, Customer Name, Segment, Sales, Profit.' },

      { type: 'heading', content: 'Step 1 — build the foundation calculated fields' },
      { type: 'list', items: [
        'First Order Month: { FIXED [Customer ID] : MIN(DATETRUNC("month", [Order Date])) }',
        'Cohort Age (months): DATEDIFF("month", [First Order Month], DATETRUNC("month", [Order Date]))',
        'Customer Lifetime Value: { FIXED [Customer ID] : SUM([Sales]) }',
        'Active Customers (count): COUNTD([Customer ID])',
        'Retention %: COUNTD([Customer ID]) / LOOKUP(COUNTD([Customer ID]), FIRST())',
      ]},

      { type: 'heading', content: 'Step 2 — create the "VIP Customers" set' },
      { type: 'list', items: [
        'Right-click [Customer ID] → Create → Set',
        'Condition: Customer Lifetime Value >= 2000',
        'Name: "VIP Customers"',
        'Create a calculated field: Customer Tier = IF [VIP Customers] THEN "VIP" ELSE "Standard" END',
      ]},

      { type: 'heading', content: 'Step 3 — build the four sheets' },
      { type: 'list', items: [
        'Sheet A — Cohort Retention Heatmap: Rows = First Order Month (YEAR/MONTH), Columns = Cohort Age (0–12), Measure = Retention %, Color = sequential blue (darker = higher retention). Show only cohorts where Cohort Age 0 has ≥ 10 customers.',
        'Sheet B — Customer Lifetime Value Distribution: Histogram of Customer Lifetime Value (bin size $500). Color = Customer Tier (VIP vs Standard). Title: "Customer Value Distribution".',
        'Sheet C — Segment Comparison: Segment on Rows, three measures on Columns — AVG(Customer Lifetime Value), COUNTD([Customer ID]), SUM([Profit]) / COUNTD([Customer ID]). Format as a text table with data bars.',
        'Sheet D — Monthly Acquisition Trend: DATETRUNC("month", First Order Month) on Columns, COUNTD([Customer ID]) on Rows (new customers only — Cohort Age = 0 filter). Color = Segment.',
      ]},

      { type: 'heading', content: 'Step 4 — assemble the dashboard' },
      { type: 'list', items: [
        'Create a new dashboard (1400 × 900 px, Fixed).',
        'Top half: Cohort Retention Heatmap (Sheet A) — the centrepiece.',
        'Bottom left: Segment Comparison table (Sheet C).',
        'Bottom centre: Monthly Acquisition Trend (Sheet D).',
        'Bottom right: Customer Value Distribution histogram (Sheet B).',
        'Add a Set Action: clicking a Segment row in Sheet C filters VIP Customers to that segment only (changes set membership). Add "Dashboard: Reset" button using a URL action.',
        'Add a Title: "Customer Retention & Lifetime Value Dashboard".',
      ]},

      { type: 'heading', content: 'Step 5 — sanity checks' },
      { type: 'list', items: [
        'Cohort Age 0 row: every customer appears exactly once (Retention = 100%). If not, the LOOKUP formula is wrong.',
        'Retention % should generally decrease as Cohort Age increases — if it goes above 100% at any point, the FIRST() offset in LOOKUP is misapplied.',
        'VIP Customer count in the histogram should match the Customer Tier = "VIP" count in the Segment table.',
        'Monthly Acquisition Trend: no month should have more new customers than total customers in the retention heatmap for that cohort.',
        'Click a Segment in Sheet C — does the histogram update to show only that segment\'s distribution? (Set Action test.)',
      ]},

      { type: 'heading', content: 'Stretch goal — add a 3-month moving average to the acquisition trend' },
      { type: 'paragraph', content: 'Overlay a WINDOW_AVG(COUNTD([Customer ID]), -2, 0) line on the Monthly Acquisition Trend using a dual axis. Format it as a thicker dashed line. This shows whether new customer acquisition is trending up or down, smoothed across noise.' },

      { type: 'callout', kind: 'tip', content: 'This retention heatmap pattern — cohort as rows, age as columns, metric as colour — is used by companies like Netflix, Airbnb, and Stripe as a standard tool for understanding their user base. Having a clean, published version in your Tableau Public portfolio signals analytical maturity beyond "I can build a bar chart."' },
    ],
  },

  /* ── Module 5: Tableau Server, Cloud, REST API — Capstone ───── */
  {
    id: 'tb-a-5',
    title: 'Tableau Server, Cloud, embedding, and the REST API (capstone)',
    duration: '55 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'The deployment landscape' },
      { type: 'paragraph', content: 'Publishing to Tableau Public is fine for portfolio work. Real enterprise deployments use Tableau Server (self-hosted) or Tableau Cloud (SaaS). Understanding the difference, the permissions model, and how to embed visualisations in external applications makes you a complete Tableau professional — not just a chart-builder.' },
      { type: 'list', items: [
        'Tableau Public: free, everything is publicly visible, 15 GB storage, no RLS, no scheduled refreshes from databases (CSV/Excel only)',
        'Tableau Cloud (formerly Online): SaaS, your data is private, scheduled refreshes, Row Level Security, Creator/Explorer/Viewer licence tiers',
        'Tableau Server: self-hosted on your own infrastructure, full control, used by enterprises with data residency or security requirements',
      ]},

      { type: 'heading', content: 'Tableau Cloud — key concepts' },
      { type: 'heading', content: 'Sites and projects' },
      { type: 'paragraph', content: 'A Tableau Cloud deployment has one or more Sites (logical tenants — useful for isolating different business units or clients). Within a site, content is organised into Projects (folders). Projects nest: a top-level "Finance" project might contain "Revenue," "Costs," and "Budget" sub-projects.' },
      { type: 'list', items: [
        'Default project: where content lands if no project is specified',
        'Locked project: administrators control permissions; owners cannot override',
        'Nested projects inherit parent permissions unless overridden',
        'Best practice: create a project per team or domain, not per workbook',
      ]},

      { type: 'heading', content: 'Licences and content roles' },
      { type: 'list', items: [
        'Creator: full access — can publish workbooks, build in web authoring, create data sources. Most expensive licence.',
        'Explorer: can view and interact with published workbooks, create ad-hoc views from existing published data sources. Cannot publish new data sources.',
        'Viewer: can only view and interact with published content — no editing. Cheapest licence. Most business users are Viewers.',
      ]},

      { type: 'heading', content: 'Row Level Security (RLS) on Tableau Cloud/Server' },
      { type: 'paragraph', content: 'RLS ensures that each viewer sees only the data relevant to them. There are two implementation patterns:' },
      { type: 'code', language: 'text', content: '// Pattern 1 — User filter (most common)\n// In the data source, add a calculated field:\nUser Region = LOOKUP(MIN([Region]), 0)  // placeholder\n// Then create a User Filter:\n// Server menu → Create User Filter → link each Tableau user to their region\n// → each user sees only rows where Region matches their assignment\n\n// Pattern 2 — USERNAME() function\n// More scalable: include a column in the data that maps user email to region\n// Then filter: [Allowed Email] = USERNAME()\n// USERNAME() returns the logged-in Tableau Cloud user\'s email automatically\n\n// Pattern 2 is better for large orgs:\n// Add/remove users by updating the data — no changes needed in Tableau' },

      { type: 'heading', content: 'Scheduled refresh — keeping dashboards fresh' },
      { type: 'paragraph', content: 'When you publish an extract-based workbook to Tableau Cloud, you can schedule automatic refreshes. Tableau Cloud connects back to your data source (using saved credentials or a Bridge connector for on-premise data) and re-extracts on the schedule you define.' },
      { type: 'list', items: [
        'Tableau Bridge: required when the data source is behind a corporate firewall or VPN (SQL Server, Oracle on-premise)',
        'Publish → Schedule Refresh → choose frequency (hourly, daily, weekly)',
        'Incremental refresh (for large tables): only fetch new rows since the last refresh, not the full table',
        'Monitor refresh status in the Data Sources tab on Tableau Cloud',
      ]},

      { type: 'heading', content: 'Embedding Tableau in external applications' },
      { type: 'paragraph', content: 'Embedding shows a Tableau view inside your own web application — the branding is yours, but the analytics engine is Tableau\'s. There are two approaches: Embed Code (simple, no programming) and the Embedding API v3 (full control, JavaScript).' },
      { type: 'code', language: 'text', content: '<!-- Simple embed: copy from Share → Embed Code on Tableau Cloud -->\n<script type="module"\n  src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js">\n</script>\n<tableau-viz\n  id="tableau-viz"\n  src="https://public.tableau.com/views/MySuperstore/ExecutiveDashboard"\n  width="1000"\n  height="840"\n  toolbar="bottom"\n  hide-tabs>\n</tableau-viz>\n\n<!-- With Embedding API v3 — full programmatic control -->\nimport { TableauViz } from "./tableau.embedding.3.latest.js";\n\nconst viz = new TableauViz();\nviz.src = "https://your-server/views/workbook/sheet";\nviz.toolbar = "bottom";\ndocument.getElementById("container").appendChild(viz);\n\n// Then interact programmatically:\nviz.workbook.activeSheet.applyFilterAsync("Region", ["West"], "replace");' },
      { type: 'callout', kind: 'warning', content: 'Embedding from Tableau Cloud requires the viewer to be authenticated. For public embedding use Tableau Public. For private embedding in an internal tool, use the Embedding API with Connected Apps (JWT-based authentication that signs the user in silently from your app\'s backend).' },

      { type: 'heading', content: 'The Tableau REST API' },
      { type: 'paragraph', content: 'The REST API lets you automate Tableau Server/Cloud administration: publish workbooks programmatically, download views as images or PDFs, manage users and permissions, trigger extract refreshes, and query content metadata. It is the foundation for building self-service analytics portals and automated reporting pipelines.' },
      { type: 'code', language: 'text', content: '# Python example: sign in and trigger an extract refresh\nimport tableauserverclient as TSC\n\nserver = TSC.Server("https://your-company.online.tableau.com")\ntoken_auth = TSC.PersonalAccessTokenAuth(\n    "my-token-name", "my-token-secret", site_id="my-site"\n)\n\nwith server.auth.sign_in(token_auth):\n    # Find all published data sources\n    all_datasources, _ = server.datasources.get()\n    print(f"Found {len(all_datasources)} data sources")\n\n    # Trigger refresh on one datasource by ID\n    datasource = server.datasources.get_by_id("abc123")\n    refresh_job = server.datasources.refresh(datasource)\n    print(f"Refresh job started: {refresh_job.id}")\n\n    # Download a view as a PNG\n    view = server.views.get_by_id("def456")\n    server.views.populate_image(view)\n    with open("snapshot.png", "wb") as f:\n        f.write(view.image)' },
      { type: 'callout', kind: 'tip', content: 'The `tableauserverclient` Python library (TSC) wraps the REST API. Install with pip install tableauserverclient. Use Personal Access Tokens (PATs) not username/password for automation — PATs do not expire on password changes and can be rotated independently.' },

      { type: 'heading', content: 'Capstone: architect a full Tableau deployment' },
      { type: 'paragraph', content: 'Design (on paper or in a planning doc) the end-to-end Tableau deployment for the Superstore executive dashboard you built in the mini project. Answer each question:' },
      { type: 'list', items: [
        '1. Licence types: The Head of Sales needs to publish and edit. 5 regional managers need to view and filter. 100 store managers need view-only access. How many Creator / Explorer / Viewer licences do you buy?',
        '2. RLS: Regional managers should only see their own region\'s data. Which USERNAME() pattern would you use? What column needs to exist in the data?',
        '3. Refresh schedule: The source data is updated in a SQL Server database every morning at 6am. The dashboard must be current by 8am. What type of connection, refresh schedule, and tool (Bridge or not) do you configure?',
        '4. Embedding: The sales portal is a React web app. The CEO wants to see the dashboard embedded on the portal\'s homepage without logging in to Tableau separately. What approach enables silent authentication?',
        '5. Automation: Every Monday at 7am, download the executive dashboard as a PDF and email it to the board. Write the Python REST API script outline (use TSC library).',
      ]},

      { type: 'heading', content: 'What you have built across this advanced track' },
      { type: 'list', items: [
        'Advanced LOD: cohort analysis, nested LODs, YoY comparison with FIXED, set-level aggregation',
        'Advanced table calculations: WINDOW moving averages, LOOKUP period comparisons, INDEX/LAST mark labelling, partitioning and addressing',
        'Sets and Set Actions: dynamic segmentation, combined sets, proportional highlighting vs filter actions',
        'Performance tuning: Performance Recording, Extract vs Live, data source filters, Custom SQL pre-aggregation, Tableau Prep flows',
        'Deployment: Tableau Cloud vs Server, licence model, RLS with USERNAME(), scheduled refreshes, Bridge',
        'Embedding: Embedding API v3, Connected Apps for silent authentication',
        'Automation: REST API with tableauserverclient, triggering refreshes, downloading views as images/PDFs',
        'Mini project: cohort retention dashboard with Set Actions, retention heatmap, lifetime value histogram',
      ]},
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
      { type: 'paragraph', content: 'In the next module, you will install Tableau Public, load a real sample dataset — the same "Sample Superstore" data Tableau itself ships with — and build your first bar chart in under 5 minutes.' },
    ],
  },

  {
    id: 'tb-b-2',
    title: 'Installing Tableau Public and loading data',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'The running dataset for this whole track: Sample Superstore' },
      { type: 'paragraph', content: '"Sample Superstore" is the dataset Tableau itself has shipped with for years to teach beginners — a fictional US retail chain selling Furniture, Office Supplies, and Technology across every US state. Using it here means every skill you practise transfers directly to countless real Tableau tutorials, forum answers, and sample workbooks you will encounter later, since they almost all use the same dataset.' },
      { type: 'list', items: [
        'Order Date | State | City | Category | Sub-Category | Sales | Quantity | Profit',
        '03-Jan-2024 | California | Los Angeles | Furniture | Chairs | 1850 | 3 | 220',
        '05-Jan-2024 | New York | New York City | Office Supplies | Paper | 95 | 10 | 40',
        '08-Jan-2024 | Texas | Houston | Technology | Phones | 2400 | 2 | -150',
        '12-Jan-2024 | California | San Francisco | Office Supplies | Binders | 180 | 8 | 60',
        '15-Jan-2024 | Florida | Miami | Furniture | Tables | 3200 | 1 | -400',
        '18-Jan-2024 | New York | Buffalo | Technology | Accessories | 540 | 4 | 95',
        '20-Jan-2024 | Texas | Austin | Office Supplies | Storage | 310 | 5 | 70',
        '(in practice this dataset has thousands of rows across all 50 states — type in 20-30 rows yourself, reusing these states/cities/categories, to follow along)',
      ]},
      { type: 'paragraph', content: 'Notice one row already shows a negative Profit (-150, -400) — a deliberately real detail. Real retail data always has some loss-making orders (heavy discounts, returns, expensive shipping), and a good early Tableau exercise is finding exactly which ones.' },

      { type: 'heading', content: 'Installing Tableau Public' },
      { type: 'paragraph', content: 'Go to public.tableau.com and download Tableau Public Desktop (Windows or Mac, both supported — unlike Power BI Desktop). Installation is a standard next-next-finish installer. The first time you open it, you will be asked to sign in or create a free Tableau Public account — this account is what your saved work publishes to later.' },

      { type: 'heading', content: 'The Start screen and connecting to data' },
      { type: 'paragraph', content: 'On launch, the left-hand "Connect" pane lists every source Tableau can connect to. For this track, choose "Text file" (for a CSV) or "Microsoft Excel," then browse to your saved Sample Superstore file. A few rows preview automatically so you can confirm you picked the right file before continuing.' },

      { type: 'heading', content: 'The Data Source page' },
      { type: 'paragraph', content: 'After connecting, Tableau opens the Data Source page — a preview of your full table, with each column\'s data type shown by a small icon above it (Abc for text, # for numbers, a calendar for dates). This is the moment to fix an obviously wrong type, the same habit from the Excel and Power BI tracks: catching a date imported as text here takes seconds; catching it after building five charts does not.' },

      { type: 'heading', content: "Dimensions and Measures: Tableau's most important idea" },
      { type: 'paragraph', content: 'Click the Sheet 1 tab at the bottom to move into the actual workspace. On the left, every column from your data now appears split into two groups, and understanding this split is the single most important Tableau concept for a beginner:' },
      { type: 'list', items: [
        'Dimensions (usually blue) — qualitative, categorical fields you group and slice by: State, City, Category, Sub-Category, Order Date',
        'Measures (usually green) — quantitative, numeric fields you aggregate: Sales, Quantity, Profit',
      ]},
      { type: 'paragraph', content: 'Tableau guesses this split automatically based on data type (text becomes a Dimension, numbers become a Measure), and it guesses correctly most of the time — but not always. A numeric "Order ID" or "Zip Code" column is technically a number, yet should usually behave as a Dimension (you would never want to SUM a zip code), so Tableau lets you drag a field between the two groups manually whenever its automatic guess is wrong.' },
      { type: 'callout', kind: 'tip', content: 'A simple test that works almost every time: if a question about the field starts with "how much" or "how many" (how much Sales, how many units), it is a Measure. If it starts with "which" or "what kind" (which State, what Category), it is a Dimension. Numeric ID-like fields are the main exception worth double-checking manually.' },

      { type: 'heading', content: 'Live connection vs Extract' },
      { type: 'paragraph', content: 'Back on the Data Source page, a toggle near the top-right offers "Live" or "Extract." Live queries the original source every single time you interact with the workbook — always current, but only as fast as that source. Extract copies a compressed snapshot of the data into Tableau\'s own fast internal engine, similar in spirit to Power BI\'s Import mode — much faster to work with, but it needs an explicit refresh to reflect new source data. For a file-based dataset like this one, Extract is almost always the right choice.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Install Tableau Public, build the Sample Superstore data above as a CSV or Excel file (20-30 rows), and connect to it from the Connect pane. On the Data Source page, confirm Order Date shows the calendar icon, and switch the connection to Extract. Move to Sheet 1 and confirm Sales, Quantity, and Profit appear as green Measures, and State, City, Category, Sub-Category as blue Dimensions.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'With data connected and understood, the next module covers actually building a chart — dragging your first Dimension and Measure onto the canvas and watching Tableau\'s "Show Me" panel suggest the right visual automatically.' },
    ],
  },

  {
    id: 'tb-b-3',
    title: 'Your first chart in 5 minutes',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'The canvas: Rows, Columns, and the Marks card' },
      { type: 'paragraph', content: 'Sheet 1 is mostly empty space with two narrow shelves at the top — Columns and Rows — and a panel on the left called the Marks card. Building a chart in Tableau, almost always, means dragging fields onto these three areas; there is no separate "insert chart" step like in Excel or Power BI.' },

      { type: 'heading', content: 'Your first bar chart: Sales by Category' },
      { type: 'paragraph', content: 'Drag Category (a Dimension) onto the Columns shelf, then drag Sales (a Measure) onto the Rows shelf. Tableau immediately draws a bar chart — three bars, one per category, each bar\'s height equal to that category\'s total Sales. No chart type was chosen manually; Tableau picked "bar chart" automatically because of what was dragged where.' },
      { type: 'callout', kind: 'tip', content: 'This automatic behaviour is genuinely the core of how Tableau is meant to be used: drag a Dimension and a Measure onto the shelves, and let Tableau suggest the visualisation, rather than picking a chart type first and then hunting for where to put your fields, the way Excel and Power BI typically work.' },

      { type: 'heading', content: 'Show Me: letting Tableau suggest other chart types' },
      { type: 'paragraph', content: 'With both fields still selected (Ctrl+click both Category and Sales in the Data pane, or click the existing chart and check the fields), open the "Show Me" panel (top-right). It highlights every chart type compatible with your currently selected fields, greying out ones that do not fit. Click a different highlighted option — a horizontal bar, a treemap, a packed bubble — and Tableau rebuilds the same data as that new chart type instantly.' },

      { type: 'heading', content: 'Switching the aggregation' },
      { type: 'paragraph', content: 'Right-click the SUM(Sales) pill on the Rows shelf → Measure (Sum) reveals other options: Average, Median, Count, Minimum, Maximum. Switching to Average instantly redraws the chart showing average order value per category instead of the total — the same underlying data, answering a meaningfully different business question.' },

      { type: 'heading', content: 'The Marks card: colour, size, and labels' },
      { type: 'paragraph', content: 'Drag Profit onto the "Color" box inside the Marks card. Each bar now shades along a colour gradient based on its profit — a quick visual flag for which categories are actually profitable, layered directly onto the chart you already built, with no second chart needed. Drag SUM(Sales) onto "Label" to show the exact number printed on each bar.' },

      { type: 'heading', content: 'A second chart: the automatic map' },
      { type: 'paragraph', content: 'Double-click State in the Data pane (or drag it onto the canvas directly). Because Tableau recognises "State" as a geographic field, it automatically generates a map of the US with a dot or shaded region per state, with no chart type chosen manually at all — this geographic auto-detection is one of Tableau\'s most distinctive beginner-friendly features, and a large part of why it excels at the "map of India coloured by pollution level" kind of example from the first lesson.' },
      { type: 'paragraph', content: 'Drag Sales onto Color on this map sheet to shade each state by its total sales — an instant, genuinely useful geographic view built in under a minute, something that would take noticeably more setup in Excel.' },

      { type: 'heading', content: 'Renaming a sheet' },
      { type: 'paragraph', content: 'Double-click the "Sheet 1" tab at the bottom and rename it to something meaningful, like "Sales by Category." This matters more than it sounds — a finished workbook with 6 sheets named "Sheet 1" through "Sheet 6" is unusable to anyone but the person who built it five minutes ago.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'Build a Sales-by-Category bar chart, add Profit to Color and Sales to Label. Create a second sheet showing a map of Sales by State. Rename both sheets meaningfully. Try Show Me on the category chart and switch it to at least one alternative chart type to see how the same data looks differently presented.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'A quick mini project next puts everything so far — connecting data, building charts, and using the Marks card — together on one realistic analysis. Then the next module covers Filters (narrowing what is shown) and Groups (combining related Dimension values together).' },
    ],
  },

  {
    id: 'tb-mp-1',
    title: 'Mini Project: Regional Performance Snapshot',
    duration: '25 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Quick practice before moving on' },
      { type: 'paragraph', content: "This is the single most common first request a new Tableau analyst gets: \"here's our sales data, show me how each region is doing.\" This project runs through connecting, exploring, and visually flagging good vs bad performance — using nothing but the chart-building and Marks card skills from the last two lessons, on a slightly bigger slice of Sample Superstore than you have used so far." },
      { type: 'list', items: [
        'Concepts used: connecting to data, Dimensions vs Measures, bar charts, maps, the Marks card (Color, Size, Label)',
      ]},

      { type: 'heading', content: 'The scenario' },
      { type: 'paragraph', content: 'Extend your Sample Superstore file to include a Region column (a level above State — Sample Superstore\'s real version groups states into Central, East, South, and West) and at least 25-30 rows spanning multiple states and categories:' },
      { type: 'list', items: [
        'Order Date | Region | State | City | Category | Sub-Category | Sales | Quantity | Profit',
        '03-Jan-2024 | West | California | Los Angeles | Furniture | Chairs | 1850 | 3 | 220',
        '05-Jan-2024 | East | New York | New York City | Office Supplies | Paper | 95 | 10 | 40',
        '08-Jan-2024 | South | Texas | Houston | Technology | Phones | 2400 | 2 | -150',
        '12-Jan-2024 | West | California | San Francisco | Office Supplies | Binders | 180 | 8 | 60',
        '15-Jan-2024 | South | Florida | Miami | Furniture | Tables | 3200 | 1 | -400',
        '18-Jan-2024 | East | New York | Buffalo | Technology | Accessories | 540 | 4 | 95',
        '20-Jan-2024 | South | Texas | Austin | Office Supplies | Storage | 310 | 5 | 70',
        '22-Jan-2024 | Central | Illinois | Chicago | Furniture | Bookcases | 980 | 2 | -60',
        '25-Jan-2024 | Central | Ohio | Columbus | Technology | Phones | 1750 | 1 | 310',
        '(extend this further yourself, reusing these regions/states, to reach 25-30 rows)',
      ]},

      { type: 'heading', content: 'Build these three sheets' },
      { type: 'list', items: [
        '"Sales by Region" — a bar chart with Region on Columns and Sales on Rows, Profit dragged onto Color so unprofitable regions visually stand out, and Sales dragged onto Label',
        '"Profit Map" — a map (drag State directly onto the canvas), with Profit on Color so the whole country\'s profitability is visible in one shaded view, and Sales dragged onto Size so bigger-selling states also appear visually larger',
        '"Category Breakdown" — a bar chart with Category on Columns, Sales on Rows, and Region on Color, so each bar splits into regional segments',
      ]},
      { type: 'callout', kind: 'tip', content: 'Before calling this finished, sanity-check the Profit Map by hand: find your one or two rows with the most negative Profit values, and confirm that exact state actually shows the most "red" (or whatever low end of your color gradient is) on the map. Catching a wrongly-mapped color scale this way, before sharing a chart, is exactly what a careful analyst does on a real job.' },

      { type: 'heading', content: 'Rename every sheet meaningfully' },
      { type: 'paragraph', content: 'Double-click each "Sheet N" tab and rename it to match the bullet points above. A reviewer opening this workbook later should understand what each tab shows from its name alone, with no need to click through and guess.' },

      { type: 'heading', content: 'Stretch goal' },
      { type: 'paragraph', content: 'On the "Sales by Region" sheet, use Show Me to try at least one alternative chart type (like a horizontal bar or a packed bubble) for the exact same Region/Sales/Profit fields, and decide for yourself which version actually communicates the regional comparison most clearly.' },
    ],
  },

  {
    id: 'tb-b-4',
    title: 'Filters and groups',
    duration: '20 min',
    sections: [
      { type: 'heading', content: 'The Filters shelf' },
      { type: 'paragraph', content: 'Drag any field onto the Filters shelf (just below Columns/Rows) to restrict what the current sheet shows. Drag Category there, and a dialog appears letting you tick which category values to include or exclude — untick "Furniture," and every bar, map shading, and label on that sheet recalculates to exclude Furniture immediately.' },

      { type: 'heading', content: 'Filtering a Measure: only the orders that matter' },
      { type: 'paragraph', content: 'Drag Profit onto the Filters shelf instead, and Tableau offers a numeric range filter — for example, restricting the sheet to only orders with Profit less than 0, instantly surfacing every loss-making order from the dataset, exactly the kind of "find the problem" question raised back in the data-loading module.' },
      { type: 'paragraph', content: 'Real-life use: a retail analyst investigating why margins dropped last quarter starts by filtering to Profit < 0 and grouping that filtered view by Sub-Category, immediately seeing which specific product lines are losing money rather than guessing.' },

      { type: 'heading', content: 'Filtering on Order Date' },
      { type: 'paragraph', content: 'Dragging Order Date onto Filters offers several filtering styles: Range of Dates (a from/to picker), Relative Date ("last 3 months," updating automatically as time passes), or specific Years/Quarters/Months selected individually. Relative Date filters are particularly useful for a dashboard meant to be reused indefinitely without manual updating.' },

      { type: 'heading', content: 'Quick Filters: letting the viewer filter themselves' },
      { type: 'paragraph', content: 'Right-click a field already on the Filters shelf → "Show Filter" adds an interactive control directly onto the sheet itself (a list of checkboxes, a dropdown, or a slider, depending on the field type) — turning a fixed, builder-controlled filter into something a viewer can change themselves while looking at the sheet, conceptually identical to a Power BI Slicer or an Excel Pivot Table\'s filter dropdown.' },
      { type: 'callout', kind: 'tip', content: 'A filter you set yourself on the Filters shelf (without "Show Filter") is invisible and fixed for every viewer — useful for permanently excluding test data, say. A Quick Filter is visible and changeable by the viewer — useful for letting them explore. This is the same Filter-vs-Slicer distinction from the Power BI track, just under different names.' },

      { type: 'heading', content: 'Groups: combining related Dimension values' },
      { type: 'paragraph', content: 'Imagine Sub-Category has values like "Bookcases," "Chairs," "Tables," and you want a simpler "Seating vs Storage vs Surfaces" view without changing the underlying data. In the Data pane, Ctrl+click "Chairs" and any other seating-related sub-categories, right-click → Group, and Tableau creates a new combined field (often named something like "Sub-Category (group)") treating your selected values as one single category from then on, anywhere you use that new grouped field.' },
      { type: 'paragraph', content: 'Real-life use: 15 individual product sub-categories are too granular for an executive summary chart, but the original 3 top-level Categories feel too broad. A custom Group lets an analyst define exactly the level of detail a specific audience actually needs, without altering the source data.' },

      { type: 'heading', content: 'Try it' },
      { type: 'paragraph', content: 'On your Sales-by-Category sheet, add a Quick Filter for Category so a viewer can tick/untick categories themselves. Create a new sheet filtered to Profit < 0, broken down by Sub-Category, to find your loss-making product lines. Create a Group combining 2-3 related Sub-Category values into one, and confirm the grouped value appears correctly in a chart.' },

      { type: 'heading', content: "What's next" },
      { type: 'paragraph', content: 'You now have several individual sheets — a category chart, a map, a loss-making-orders view. The final module covers combining them into a single Dashboard, and publishing the finished result to Tableau Public for anyone to view in a browser.' },
    ],
  },

  {
    id: 'tb-b-5',
    title: 'Your first dashboard',
    duration: '25 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'A dashboard is several sheets, arranged on purpose' },
      { type: 'paragraph', content: 'Click the "New Dashboard" icon at the bottom of the window (next to the sheet tabs). A Dashboard is a separate canvas where existing sheets — not raw data — get dragged in and arranged together, similar in concept to a Power BI Dashboard built from pinned visuals, but assembled directly inside the same Tableau file rather than after publishing.' },

      { type: 'heading', content: 'Building the layout' },
      { type: 'paragraph', content: 'The left-hand pane lists every sheet you have built. Drag "Sales by Category" onto the dashboard canvas, then drag your Sales-by-State map below or beside it. Tableau\'s layout grid snaps each sheet into place; drag the edges of any sheet to resize it, and use the "Tiled" vs "Floating" layout options (in the Dashboard menu) to control whether sheets snap to a grid or can overlap freely.' },
      { type: 'paragraph', content: 'Drag a "Text" object from the Objects panel onto the top of the dashboard and type a clear title, like "Superstore Sales Overview — 2024," so a first-time viewer immediately understands what they are looking at, with no separate explanation needed.' },

      { type: 'heading', content: 'Dashboard actions: the real interactivity payoff' },
      { type: 'paragraph', content: 'Dashboard → Actions → Add Action → Filter lets you wire up cross-sheet interactivity: select "Sales by Category" as the source sheet and "Sales by State" as the target, with the action set to run "On Select." Now, clicking a bar in the category chart filters the map to show only that category\'s geographic spread — the same kind of connected, click-to-filter behaviour that made Power BI\'s slicers feel powerful, here triggered by clicking directly on a chart instead of a separate slicer control.' },
      { type: 'callout', kind: 'tip', content: 'This single feature — Dashboard Actions — is usually the moment a beginner\'s Tableau dashboard stops feeling like "two separate pictures next to each other" and starts feeling like one connected, explorable tool. It is worth practising deliberately rather than skipping past.' },

      { type: 'heading', content: 'Publishing to Tableau Public' },
      { type: 'paragraph', content: 'File → Save to Tableau Public (or the equivalent "Save" button if signed in) uploads your finished workbook to your free Tableau Public profile, generating a shareable web link anyone can open in a browser — no Tableau installation required on their end, similar in spirit to Power BI\'s publish-to-Service step, but with the result fully public by default, since that is the nature of the free tier.' },
      { type: 'callout', kind: 'warning', content: 'Tableau Public is genuinely public — anyone with the link (and often anyone browsing public.tableau.com\'s gallery) can view, and in many cases download, your underlying workbook and data. Never publish a workbook containing real customer names, real financial figures, or any other sensitive information to Tableau Public; it is a learning and portfolio tool, not a private business reporting tool.' },

      { type: 'heading', content: 'Capstone: the complete Superstore beginner dashboard' },
      { type: 'paragraph', content: 'Bring together everything from this entire track into one finished, publishable dashboard.' },
      { type: 'list', items: [
        'A "Sales by Category" bar chart, with Profit on Color and Sales on Label',
        'A "Sales by State" map, shaded by total Sales',
        'A "Loss-Making Orders" sheet, filtered to Profit < 0, broken down by Sub-Category',
        'All three sheets arranged on one Dashboard, with a clear title text object',
        'A Quick Filter for Category, visible on the dashboard so a viewer can narrow all three sheets themselves',
        'A Dashboard Action connecting the category chart to the map, so clicking a category filters the map',
      ]},
      { type: 'paragraph', content: 'Once arranged and tested, publish the finished dashboard to Tableau Public and open the generated link in a browser to confirm the filter and the dashboard action both still work exactly as they did inside Desktop.' },

      { type: 'heading', content: "You've finished the Tableau Beginner track" },
      { type: 'paragraph', content: "You can now connect to real data, understand Dimensions versus Measures, build charts by dragging fields rather than picking chart types first, filter and group your data meaningfully, and assemble multiple sheets into one connected, interactive, publishable dashboard. That progression — connect, visualise, filter, combine, publish — is the same core workflow every working Tableau analyst repeats daily, just practised here on the exact sample dataset most real Tableau learning resources also use." },
      { type: 'paragraph', content: "The Intermediate track goes deeper into what makes Tableau analytically powerful beyond drag-and-drop: Calculated Fields (writing your own formulas), LOD (Level of Detail) expressions for questions that need a different level of granularity than the current view, Parameters for viewer-adjustable what-if scenarios, deeper geographic mapping, and Story Points for presenting a sequence of findings rather than just one static dashboard." },
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

/* ════════════════════════════════════════════════════════════════
   MACHINE LEARNING ESSENTIALS — BEGINNER
   Running datasets:
     Regression modules  → California Housing (sklearn.datasets)
     Classification       → Titanic (seaborn / CSV)
   Modules: ml-b-1…ml-b-6 (lessons), ml-mp-b-1 (mini project),
            ml-b-7 (capstone — churn prediction end-to-end)
   ════════════════════════════════════════════════════════════════ */
const ML_BEGINNER = [

  /* ── Module 1: What is Machine Learning? ─────────────────────── */
  {
    id: 'ml-b-1',
    title: 'What is Machine Learning — and how does it actually work?',
    duration: '30 min',
    sections: [
      { type: 'heading', content: 'The one-sentence definition' },
      { type: 'paragraph', content: 'Machine Learning is the practice of writing programs that learn patterns from data — instead of having a human write every rule by hand. You show the algorithm thousands of examples, it figures out the pattern, and then you use that pattern to make predictions on new data it has never seen before.' },
      { type: 'callout', kind: 'info', content: 'The key word is "examples." Traditional programming: you write IF-THEN rules. Machine Learning: you show examples and the algorithm discovers the rules itself.' },

      { type: 'heading', content: 'A concrete example before any math' },
      { type: 'paragraph', content: 'Imagine you want to predict whether an email is spam. The traditional approach: write 10,000 rules (if subject contains "FREE MONEY" → spam, if sender domain is suspicious → spam…). The ML approach: collect 100,000 labelled emails (spam or not spam), feed them to an algorithm, and let it figure out the pattern. It will discover rules you would never have thought of — like "this combination of sender, time, and subject line at 3am from this country = 97% spam."' },

      { type: 'heading', content: 'The three types of Machine Learning' },
      { type: 'list', items: [
        'Supervised Learning: you provide labelled examples (input → correct output). The algorithm learns to predict the output for new inputs. Most common type. Examples: spam detection, house price prediction, image classification.',
        'Unsupervised Learning: you provide data with no labels. The algorithm finds hidden structure — clusters, groups, anomalies. Examples: customer segmentation, anomaly detection, topic modelling.',
        'Reinforcement Learning: an agent learns by trial and error — it takes actions, receives rewards or penalties, and adjusts. Examples: game-playing AI (AlphaGo, chess), robotics, self-driving car navigation.',
      ]},
      { type: 'callout', kind: 'info', content: 'This beginner course focuses almost entirely on Supervised Learning — it is 80% of real-world ML work, and it is where the clearest foundations live.' },

      { type: 'heading', content: 'The ML vocabulary you need immediately' },
      { type: 'list', items: [
        'Feature (X): an input variable. In a house price model — square footage, number of bedrooms, location.',
        'Label / Target (y): what you are trying to predict. In a house price model — the actual sale price.',
        'Training data: the labelled examples the algorithm learns from.',
        'Test data: held-out examples used only to measure how well the model generalises to new data.',
        'Model: the mathematical function the algorithm learned — takes features as input, outputs a prediction.',
        'Training: the process of fitting the model to the training data.',
        'Inference / Prediction: using the trained model on new, unseen examples.',
        'Overfitting: the model memorised the training data so well it fails on new examples — it learned noise, not pattern.',
        'Underfitting: the model is too simple to capture the real pattern — poor performance on both training and new data.',
      ]},

      { type: 'heading', content: 'Regression vs Classification — the two main supervised tasks' },
      { type: 'paragraph', content: 'Every supervised ML problem is either a Regression problem or a Classification problem. The difference is in the output.' },
      { type: 'list', items: [
        'Regression: the output is a continuous number. "How much will this house sell for?" → $347,500. "How many units will we sell next week?" → 1,240.',
        'Classification: the output is a category. "Will this customer churn?" → Yes/No. "Which digit is in this image?" → 0-9. "What species is this flower?" → Setosa/Versicolor/Virginica.',
      ]},

      { type: 'heading', content: 'Where ML is used in real products right now' },
      { type: 'list', items: [
        'Netflix: predicts which shows you will watch (recommendation = classification of preference)',
        'Gmail: filters spam and drafts Smart Reply suggestions (classification + generation)',
        'Uber: predicts surge pricing and estimated arrival time (regression)',
        'Bank fraud detection: flags suspicious transactions in real time (anomaly classification)',
        'Spotify: identifies your musical taste and generates Discover Weekly (clustering + ranking)',
        'Hospitals: predict patient readmission risk within 30 days (binary classification)',
        'Self-driving cars: classify objects (pedestrian / car / sign) in camera frames (image classification)',
      ]},

      { type: 'heading', content: 'Your toolkit for this course' },
      { type: 'list', items: [
        'Python — the dominant language for ML. Everything we write will be Python.',
        'pandas — loading, cleaning, and exploring data.',
        'scikit-learn — the go-to ML library. Every algorithm in this beginner course comes from sklearn.',
        'matplotlib / seaborn — visualising data and model results.',
        'NumPy — array maths that sits under everything else.',
      ]},
      { type: 'code', language: 'python', content: '# Install everything in one command (if starting fresh)\npip install scikit-learn pandas numpy matplotlib seaborn\n\n# Verify installation\nimport sklearn\nimport pandas as pd\nimport numpy as np\nprint(sklearn.__version__)  # should be >= 1.3' },
      { type: 'callout', kind: 'tip', content: 'All code in this course runs on Google Colab (free, no install needed) or any local Jupyter environment. If you are setting up locally, installing via pip in a virtual environment is recommended.' },

      { type: 'heading', content: 'The standard ML workflow — your roadmap for this entire course' },
      { type: 'list', items: [
        '1. Define the problem: regression or classification? What is the target variable?',
        '2. Collect and explore data: load the dataset, understand each feature, find missing values and outliers.',
        '3. Prepare data: clean, encode, scale — make it ready for an algorithm.',
        '4. Split data: set aside a test set the model never sees during training.',
        '5. Train a model: fit the algorithm on training data.',
        '6. Evaluate: measure performance on the test set using the right metrics.',
        '7. Improve: try different algorithms, tune hyperparameters, engineer better features.',
        '8. Deploy: put the model into production so it can make real predictions.',
      ]},
      { type: 'paragraph', content: 'This entire beginner course is one pass through this workflow — first for regression (predicting house prices), then for classification (predicting Titanic survival). By the capstone, you will execute the full 8-step cycle independently.' },
    ],
  },

  /* ── Module 2: Data Preparation ──────────────────────────────── */
  {
    id: 'ml-b-2',
    title: 'Data preparation — the work that actually determines success',
    duration: '45 min',
    sections: [
      { type: 'heading', content: 'Why data prep is 80% of the job' },
      { type: 'paragraph', content: 'No ML algorithm can compensate for bad data. Models learn patterns — but if the data is messy, the "pattern" it learns is noise. Experienced ML engineers spend most of their time on data, not algorithms. This module covers every essential step from raw data to model-ready input.' },

      { type: 'heading', content: 'Loading and first look' },
      { type: 'code', language: 'python', content: 'import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nfrom sklearn.datasets import fetch_california_housing\n\n# Load California Housing dataset (20,640 rows, 8 features)\nhousing = fetch_california_housing(as_frame=True)\ndf = housing.frame\n\nprint(df.shape)        # (20640, 9)\nprint(df.head())\nprint(df.info())       # data types, non-null counts\nprint(df.describe())   # count, mean, std, min, quartiles, max' },
      { type: 'paragraph', content: 'The California Housing dataset has 8 features (MedInc, HouseAge, AveRooms, AveBedrms, Population, AveOccup, Latitude, Longitude) and one target (MedHouseVal — median house value in $100k units). It is clean and well-understood, making it ideal for learning regression.' },

      { type: 'heading', content: 'Exploratory Data Analysis (EDA)' },
      { type: 'paragraph', content: 'Before any modelling, understand the data visually. EDA answers: what does the distribution of each feature look like? Are there outliers? Which features correlate with the target?' },
      { type: 'code', language: 'python', content: '# Distribution of the target variable\nplt.figure(figsize=(8, 4))\nsns.histplot(df["MedHouseVal"], bins=50, kde=True)\nplt.title("Distribution of Median House Value")\nplt.xlabel("Median House Value ($100k)")\nplt.show()\n\n# Correlation heatmap — which features correlate with the target?\nplt.figure(figsize=(10, 8))\nsns.heatmap(df.corr(), annot=True, fmt=".2f", cmap="coolwarm")\nplt.title("Feature Correlation Matrix")\nplt.show()\n\n# Scatter: MedInc vs MedHouseVal — the strongest relationship\nplt.scatter(df["MedInc"], df["MedHouseVal"], alpha=0.1)\nplt.xlabel("Median Income (10k USD)")\nplt.ylabel("Median House Value (100k USD)")\nplt.title("Income vs House Value")\nplt.show()' },

      { type: 'heading', content: 'Handling missing values' },
      { type: 'paragraph', content: 'California Housing has no missing values, but most real datasets do. The three standard strategies:' },
      { type: 'code', language: 'python', content: '# Check for missing values\nprint(df.isnull().sum())\nprint(df.isnull().mean() * 100)  # percentage missing per column\n\n# Strategy 1: Drop rows with missing values (only when % missing is tiny)\ndf_clean = df.dropna()\n\n# Strategy 2: Fill with mean/median (for numeric columns)\ndf["Age"].fillna(df["Age"].median(), inplace=True)\n\n# Strategy 3: Fill with mode (for categorical columns)\ndf["Embarked"].fillna(df["Embarked"].mode()[0], inplace=True)\n\n# Strategy 4: sklearn SimpleImputer (best for pipelines)\nfrom sklearn.impute import SimpleImputer\nimp = SimpleImputer(strategy="median")\nX_imputed = imp.fit_transform(df[["Age", "Fare"]])' },

      { type: 'heading', content: 'Encoding categorical variables' },
      { type: 'paragraph', content: 'ML algorithms work with numbers, not text. Categorical columns (like "Male"/"Female" or "Economy"/"Business"/"First") must be converted to numeric form.' },
      { type: 'code', language: 'python', content: '# One-Hot Encoding (for nominal categories — no order)\n# Creates one binary column per category\npd.get_dummies(df, columns=["Embarked", "Pclass"], drop_first=True)\n\n# sklearn OneHotEncoder (better for pipelines)\nfrom sklearn.preprocessing import OneHotEncoder\nenc = OneHotEncoder(sparse_output=False, drop="first")\nenc.fit_transform(df[["Sex", "Embarked"]])\n\n# Label Encoding (for ordinal categories — there IS an order)\n# e.g., Education: "School" < "Bachelor" < "Masters" < "PhD"\nfrom sklearn.preprocessing import LabelEncoder\nle = LabelEncoder()\ndf["Education_num"] = le.fit_transform(df["Education"])' },

      { type: 'heading', content: 'Feature scaling — why it matters' },
      { type: 'paragraph', content: 'Many algorithms (Linear Regression, Logistic Regression, KNN, SVM, Neural Networks) are sensitive to the scale of features. A feature with values in thousands (income) will dominate one with values in single digits (number of rooms). Scaling puts all features on a comparable scale.' },
      { type: 'code', language: 'python', content: 'from sklearn.preprocessing import StandardScaler, MinMaxScaler\n\n# StandardScaler: mean=0, std=1 (most common — works well for most algorithms)\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X_train)  # fit on TRAINING data only!\nX_test_scaled = scaler.transform(X_test)  # transform test with training stats\n\n# MinMaxScaler: scales to [0, 1] range\nmm_scaler = MinMaxScaler()\nX_mm = mm_scaler.fit_transform(X_train)\n\n# Golden rule: NEVER fit the scaler on test data\n# Fitting on test data = data leakage — your test metrics will be\n# artificially optimistic because test data influenced the scaler' },
      { type: 'callout', kind: 'warning', content: 'Data leakage is one of the most common mistakes in ML. Always fit preprocessors (scalers, imputers, encoders) ONLY on training data, then use transform() on test data. Fitting on the full dataset before splitting lets test information "leak" into training, producing optimistic but unrealistic scores.' },

      { type: 'heading', content: 'Train / Test Split — the fundamental ML discipline' },
      { type: 'paragraph', content: 'You must evaluate your model on data it has never seen during training. The standard practice: split your dataset into a training set (typically 80%) and a test set (20%). Train only on the training set. Evaluate only on the test set.' },
      { type: 'code', language: 'python', content: 'from sklearn.model_selection import train_test_split\n\n# Separate features (X) from target (y)\nX = df.drop("MedHouseVal", axis=1)\ny = df["MedHouseVal"]\n\n# 80/20 split — random_state ensures reproducibility\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\nprint(f"Training samples: {len(X_train)}")  # 16512\nprint(f"Test samples:     {len(X_test)}")   # 4128\n\n# For classification with imbalanced classes: use stratify=y\n# to preserve the class ratio in both splits\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42, stratify=y\n)' },

      { type: 'heading', content: 'Outlier detection and treatment' },
      { type: 'code', language: 'python', content: '# IQR method — values beyond 1.5x IQR from quartiles are outliers\nQ1 = df["MedHouseVal"].quantile(0.25)\nQ3 = df["MedHouseVal"].quantile(0.75)\nIQR = Q3 - Q1\nlower = Q1 - 1.5 * IQR\nupper = Q3 + 1.5 * IQR\n\noutliers = df[(df["MedHouseVal"] < lower) | (df["MedHouseVal"] > upper)]\nprint(f"Outliers: {len(outliers)} rows ({len(outliers)/len(df)*100:.1f}%)")\n\n# Visualise with box plot\nsns.boxplot(x=df["MedHouseVal"])\nplt.show()\n\n# Options: remove, cap (winsorize), or transform (log)\n# Log transform is powerful for right-skewed targets like house prices\ndf["LogHouseVal"] = np.log1p(df["MedHouseVal"])' },

      { type: 'heading', content: 'The complete data prep checklist' },
      { type: 'list', items: [
        '☑ Load data and understand shape (rows × columns)',
        '☑ Check data types (dtypes) — are dates stored as strings?',
        '☑ Check for missing values (isnull().sum())',
        '☑ Explore distributions (histplot, describe())',
        '☑ Explore correlations (heatmap)',
        '☑ Handle missing values (drop / impute)',
        '☑ Encode categorical columns (OneHotEncoder / LabelEncoder)',
        '☑ Train/test split BEFORE fitting any preprocessors',
        '☑ Scale features (StandardScaler fit on train, transform on both)',
        '☑ Spot-check the processed arrays (shape, no NaN, sensible ranges)',
      ]},
    ],
  },

  /* ── Module 3: Linear Regression ─────────────────────────────── */
  {
    id: 'ml-b-3',
    title: 'Linear Regression — predicting continuous values',
    duration: '40 min',
    sections: [
      { type: 'heading', content: 'The intuition behind Linear Regression' },
      { type: 'paragraph', content: 'Linear Regression finds the best straight line through a set of data points — where "best" means the line that minimises the total squared distance between the actual values and the line\'s predictions. If you have ever drawn a trend line through a scatter plot in Excel, you have done linear regression by hand.' },
      { type: 'paragraph', content: 'The equation: ŷ = β₀ + β₁x₁ + β₂x₂ + … + βₙxₙ. Each β (coefficient) tells you how much the prediction changes when that feature increases by 1 unit. The algorithm\'s job is to find the coefficient values that minimise prediction error.' },

      { type: 'heading', content: 'Simple Linear Regression — one feature' },
      { type: 'code', language: 'python', content: 'from sklearn.linear_model import LinearRegression\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import mean_squared_error, r2_score\nimport numpy as np\n\n# Simple example: predict house price from median income alone\nX_simple = df[["MedInc"]]\ny = df["MedHouseVal"]\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X_simple, y, test_size=0.2, random_state=42\n)\n\n# Create and train the model — 2 lines of sklearn\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\n\n# Inspect what the model learned\nprint(f"Intercept (β₀): {model.intercept_:.3f}")\nprint(f"Coefficient (β₁): {model.coef_[0]:.3f}")\n# β₁ ≈ 0.42 → for each $10k increase in median income,\n# predicted house value increases by $42k' },

      { type: 'heading', content: 'Multiple Linear Regression — all features' },
      { type: 'code', language: 'python', content: 'from sklearn.datasets import fetch_california_housing\nfrom sklearn.preprocessing import StandardScaler\n\nhousing = fetch_california_housing(as_frame=True)\nX = housing.data\ny = housing.target\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\n# Scale features (important for linear models)\nscaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)\nX_test_scaled  = scaler.transform(X_test)\n\n# Train\nmodel = LinearRegression()\nmodel.fit(X_train_scaled, y_train)\n\n# Predict\ny_pred = model.predict(X_test_scaled)\n\n# First 5 predictions vs actual\nfor actual, predicted in zip(y_test[:5], y_pred[:5]):\n    print(f"Actual: ${actual*100:.0f}k   Predicted: ${predicted*100:.0f}k")' },

      { type: 'heading', content: 'Evaluating a regression model' },
      { type: 'paragraph', content: 'Accuracy does not apply to regression. Instead we use error-based metrics that measure how far predictions are from actual values.' },
      { type: 'code', language: 'python', content: 'from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score\n\n# MAE — Mean Absolute Error\n# Average of |actual - predicted|. Easy to interpret: in the same units as y.\nmae = mean_absolute_error(y_test, y_pred)\nprint(f"MAE: ${mae*100:.0f}k")  # "On average, off by $Xk"\n\n# RMSE — Root Mean Squared Error\n# Punishes large errors more than small ones (due to squaring)\n# Most commonly reported metric for regression\nrmse = np.sqrt(mean_squared_error(y_test, y_pred))\nprint(f"RMSE: ${rmse*100:.0f}k")\n\n# R² — Coefficient of Determination\n# How much of the variance in y does the model explain?\n# 1.0 = perfect, 0.0 = as good as predicting the mean, negative = worse\nr2 = r2_score(y_test, y_pred)\nprint(f"R²: {r2:.3f}")  # 0.6 means model explains 60% of variance in house prices\n\n# Residual plot — should look like random scatter around zero\nresiduals = y_test - y_pred\nplt.scatter(y_pred, residuals, alpha=0.1)\nplt.axhline(0, color="red", linestyle="--")\nplt.xlabel("Predicted")\nplt.ylabel("Residual (Actual - Predicted)")\nplt.title("Residual Plot")\nplt.show()' },
      { type: 'callout', kind: 'tip', content: 'A good residual plot shows random scatter around zero with no visible pattern. If you see a curve or a fan shape, linear regression may not be the right model — the relationship may be non-linear.' },

      { type: 'heading', content: 'Ridge and Lasso — regularised regression' },
      { type: 'paragraph', content: 'Standard linear regression can overfit when there are many features or features are highly correlated. Ridge and Lasso add a penalty term that keeps coefficients small, reducing overfitting. Ridge shrinks all coefficients; Lasso can shrink some coefficients all the way to zero (performing automatic feature selection).' },
      { type: 'code', language: 'python', content: 'from sklearn.linear_model import Ridge, Lasso\n\n# Ridge Regression (L2 penalty)\nridge = Ridge(alpha=1.0)  # alpha controls regularisation strength\nridge.fit(X_train_scaled, y_train)\nridge_pred = ridge.predict(X_test_scaled)\nprint(f"Ridge RMSE: {np.sqrt(mean_squared_error(y_test, ridge_pred)):.3f}")\n\n# Lasso Regression (L1 penalty — can zero out features)\nlasso = Lasso(alpha=0.01)\nlasso.fit(X_train_scaled, y_train)\nprint(f"Lasso non-zero features: {(lasso.coef_ != 0).sum()}")  # feature selection\nprint(f"Lasso RMSE: {np.sqrt(mean_squared_error(y_test, lasso.predict(X_test_scaled))):.3f}")' },

      { type: 'heading', content: 'Visualising predictions' },
      { type: 'code', language: 'python', content: '# Predicted vs Actual scatter — perfect model = 45° diagonal line\nplt.figure(figsize=(8, 6))\nplt.scatter(y_test, y_pred, alpha=0.1)\nplt.plot([y_test.min(), y_test.max()],\n         [y_test.min(), y_test.max()], "r--", lw=2)\nplt.xlabel("Actual House Value ($100k)")\nplt.ylabel("Predicted House Value ($100k)")\nplt.title(f"Linear Regression: R² = {r2:.3f}")\nplt.show()\n\n# Feature importance (coefficient magnitude after scaling)\ncoef_df = pd.DataFrame({\n    "Feature": X.columns,\n    "Coefficient": model.coef_\n}).sort_values("Coefficient", key=abs, ascending=False)\nprint(coef_df)  # MedInc should be the most important feature' },

      { type: 'heading', content: 'When to use Linear Regression' },
      { type: 'list', items: [
        '✓ The target is a continuous number (price, sales, temperature)',
        '✓ You need an interpretable model — coefficients explain each feature\'s contribution',
        '✓ You have limited data and need a simple baseline before trying complex models',
        '✗ The relationship between features and target is non-linear (use polynomial features or tree-based models)',
        '✗ The target is a category (use Logistic Regression or Decision Trees instead)',
      ]},
    ],
  },

  /* ── Module 4: Classification ─────────────────────────────────── */
  {
    id: 'ml-b-4',
    title: 'Classification — Logistic Regression and Decision Trees',
    duration: '45 min',
    sections: [
      { type: 'heading', content: 'The classification problem' },
      { type: 'paragraph', content: 'Classification predicts which category an input belongs to. The most common case is binary classification: yes/no, spam/not spam, survived/died, churn/stay. Multi-class classification handles three or more categories: cat/dog/bird, digit 0–9, disease A/B/C.' },
      { type: 'paragraph', content: 'For this module we use the Titanic dataset — 891 passengers, each labelled as Survived (1) or Died (0). Features: passenger class, age, sex, number of siblings/spouses aboard, fare paid. A clean, well-understood dataset perfect for learning binary classification.' },

      { type: 'heading', content: 'Loading and preparing the Titanic dataset' },
      { type: 'code', language: 'python', content: 'import pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler, LabelEncoder\n\n# Load Titanic (available via seaborn\'s built-in datasets)\nimport seaborn as sns\ntitanic = sns.load_dataset("titanic")\n\n# Select and clean columns\ndf = titanic[["survived", "pclass", "sex", "age", "sibsp", "parch", "fare"]].copy()\ndf["age"].fillna(df["age"].median(), inplace=True)\ndf["sex"] = LabelEncoder().fit_transform(df["sex"])  # female=0, male=1\n\nX = df.drop("survived", axis=1)\ny = df["survived"]\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42, stratify=y\n)\n\nscaler = StandardScaler()\nX_train_s = scaler.fit_transform(X_train)\nX_test_s  = scaler.transform(X_test)\n\nprint(f"Training: {len(X_train)} rows — {y_train.mean():.1%} survived")\nprint(f"Test:     {len(X_test)} rows — {y_test.mean():.1%} survived")' },

      { type: 'heading', content: 'Logistic Regression — classification with probabilities' },
      { type: 'paragraph', content: 'Despite the name, Logistic Regression is a classification algorithm. It models the probability that an example belongs to the positive class (1), using a sigmoid function that maps any number to the range [0, 1]. If the predicted probability ≥ 0.5, the model predicts class 1 (survived); otherwise class 0.' },
      { type: 'code', language: 'python', content: 'from sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score, classification_report\n\n# Train Logistic Regression\nlr = LogisticRegression(max_iter=1000, random_state=42)\nlr.fit(X_train_s, y_train)\n\n# Predict classes\ny_pred = lr.predict(X_test_s)\n\n# Predict probabilities (more useful than raw class predictions)\ny_prob = lr.predict_proba(X_test_s)[:, 1]  # probability of class 1 (survived)\nprint("First 5 survival probabilities:", y_prob[:5].round(3))\n\n# Accuracy — simplest metric: % of predictions that are correct\nprint(f"Accuracy: {accuracy_score(y_test, y_pred):.3f}")\n\n# Classification report — precision, recall, F1 per class\nprint(classification_report(y_test, y_pred, target_names=["Died", "Survived"]))' },

      { type: 'heading', content: 'Decision Trees — how humans actually make decisions' },
      { type: 'paragraph', content: 'A Decision Tree splits the data on one feature at a time, creating a tree of if-then rules. At each split, it chooses the feature and threshold that best separates the classes. The result is interpretable — you can read the tree as a flowchart: "If sex=male AND pclass=3 → predict Died."' },
      { type: 'code', language: 'python', content: 'from sklearn.tree import DecisionTreeClassifier, plot_tree\nimport matplotlib.pyplot as plt\n\n# Train a Decision Tree (max_depth prevents overfitting)\ndt = DecisionTreeClassifier(max_depth=4, random_state=42)\ndt.fit(X_train, y_train)  # Trees do not need scaling\n\n# Evaluate\ny_pred_dt = dt.predict(X_test)\nprint(f"Decision Tree Accuracy: {accuracy_score(y_test, y_pred_dt):.3f}")\n\n# Visualise the tree (readable at max_depth ≤ 4)\nplt.figure(figsize=(20, 8))\nplot_tree(\n    dt,\n    feature_names=X.columns,\n    class_names=["Died", "Survived"],\n    filled=True,\n    rounded=True,\n    fontsize=10\n)\nplt.title("Titanic Decision Tree (max_depth=4)")\nplt.show()\n\n# Feature importance — which features does the tree rely on most?\nimportances = pd.Series(dt.feature_importances_, index=X.columns)\nimportances.sort_values(ascending=False).plot(kind="bar")\nplt.title("Feature Importances")\nplt.show()' },

      { type: 'heading', content: 'Random Forest — decision trees that vote as a team' },
      { type: 'paragraph', content: 'A single Decision Tree tends to overfit — it memorises training data. A Random Forest builds hundreds of trees, each trained on a random subset of rows and features, and combines their predictions by majority vote. More trees = more stable predictions = less overfitting. This is one of the most effective "off-the-shelf" ML algorithms.' },
      { type: 'code', language: 'python', content: 'from sklearn.ensemble import RandomForestClassifier\n\nrf = RandomForestClassifier(\n    n_estimators=100,  # number of trees\n    max_depth=5,\n    random_state=42\n)\nrf.fit(X_train, y_train)\n\ny_pred_rf = rf.predict(X_test)\nprint(f"Random Forest Accuracy: {accuracy_score(y_test, y_pred_rf):.3f}")\n\n# Random Forests usually outperform a single Decision Tree significantly\n# Typical Titanic: Decision Tree ≈ 0.78, Random Forest ≈ 0.83' },

      { type: 'heading', content: 'K-Nearest Neighbours — classify by similarity' },
      { type: 'paragraph', content: 'KNN is one of the most intuitive ML algorithms: to classify a new passenger, find the K most similar passengers in the training data and take a majority vote of their labels. "If the 5 most similar passengers all survived, predict Survived."' },
      { type: 'code', language: 'python', content: 'from sklearn.neighbors import KNeighborsClassifier\n\nknn = KNeighborsClassifier(n_neighbors=5)\nknn.fit(X_train_s, y_train)  # KNN requires scaled data\ny_pred_knn = knn.predict(X_test_s)\nprint(f"KNN Accuracy (k=5): {accuracy_score(y_test, y_pred_knn):.3f}")\n\n# Try different values of k to find the best\nfor k in [3, 5, 7, 11, 15]:\n    knn_k = KNeighborsClassifier(n_neighbors=k)\n    knn_k.fit(X_train_s, y_train)\n    acc = accuracy_score(y_test, knn_k.predict(X_test_s))\n    print(f"  k={k:2d} → Accuracy: {acc:.3f}")' },

      { type: 'heading', content: 'Comparing algorithms' },
      { type: 'code', language: 'python', content: 'results = {}\nmodels = {\n    "Logistic Regression": lr,\n    "Decision Tree":       dt,\n    "Random Forest":       rf,\n}\n\nfor name, model in models.items():\n    X_eval = X_test_s if name == "Logistic Regression" else X_test\n    y_p = model.predict(X_eval)\n    results[name] = accuracy_score(y_test, y_p)\n\nfor name, acc in sorted(results.items(), key=lambda x: -x[1]):\n    print(f"{name:<25} Accuracy: {acc:.3f}")' },
    ],
  },

  /* ── Module 5: Model Evaluation ──────────────────────────────── */
  {
    id: 'ml-b-5',
    title: 'Model evaluation — measuring what actually matters',
    duration: '40 min',
    sections: [
      { type: 'heading', content: 'Why accuracy is often the wrong metric' },
      { type: 'paragraph', content: 'Imagine a dataset where 95% of customers did NOT churn. A model that always predicts "no churn" achieves 95% accuracy — without learning anything useful. For the business, it is worthless: it flags zero customers for retention campaigns. This is the class imbalance problem, and it is why we need more sophisticated metrics.' },

      { type: 'heading', content: 'The Confusion Matrix' },
      { type: 'paragraph', content: 'A Confusion Matrix shows the four types of outcomes for a binary classifier:' },
      { type: 'list', items: [
        'True Positive (TP): correctly predicted Positive. You predicted Survived, they survived.',
        'True Negative (TN): correctly predicted Negative. You predicted Died, they died.',
        'False Positive (FP): predicted Positive, actually Negative. Predicted Survived, they died. Also called Type I error.',
        'False Negative (FN): predicted Negative, actually Positive. Predicted Died, they survived. Also called Type II error.',
      ]},
      { type: 'code', language: 'python', content: 'from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay\n\ncm = confusion_matrix(y_test, y_pred)\nprint("Confusion Matrix:")\nprint(cm)\n# [[TN  FP]\n#  [FN  TP]]\n\n# Visualise\ndisp = ConfusionMatrixDisplay(confusion_matrix=cm,\n                              display_labels=["Died", "Survived"])\ndisp.plot(cmap="Blues")\nplt.title("Confusion Matrix — Logistic Regression on Titanic")\nplt.show()' },

      { type: 'heading', content: 'Precision, Recall, and F1-Score' },
      { type: 'code', language: 'python', content: 'from sklearn.metrics import precision_score, recall_score, f1_score\n\n# Precision: of all predicted Positives, how many were actually Positive?\n# = TP / (TP + FP)\n# High precision → few false alarms. Important when FP is costly\n# (e.g., flagging an innocent person as fraud)\nprecision = precision_score(y_test, y_pred)\nprint(f"Precision: {precision:.3f}")\n\n# Recall (Sensitivity): of all actual Positives, how many did we catch?\n# = TP / (TP + FN)\n# High recall → few misses. Important when FN is costly\n# (e.g., missing a cancer diagnosis)\nrecall = recall_score(y_test, y_pred)\nprint(f"Recall: {recall:.3f}")\n\n# F1-Score: harmonic mean of Precision and Recall\n# = 2 * (Precision * Recall) / (Precision + Recall)\n# Good single metric when you need to balance both\nf1 = f1_score(y_test, y_pred)\nprint(f"F1 Score: {f1:.3f}")\n\n# Complete report for all classes at once\nfrom sklearn.metrics import classification_report\nprint(classification_report(y_test, y_pred, target_names=["Died", "Survived"]))' },
      { type: 'callout', kind: 'tip', content: 'Precision vs Recall tradeoff: increasing the classification threshold (from 0.5 to 0.7) makes the model more conservative — it only predicts Positive when very confident. This increases Precision but decreases Recall. Lowering the threshold does the opposite. Choose based on which error is more expensive for your use case.' },

      { type: 'heading', content: 'ROC Curve and AUC' },
      { type: 'paragraph', content: 'The ROC (Receiver Operating Characteristic) curve plots True Positive Rate vs False Positive Rate at every possible threshold. AUC (Area Under the Curve) summarises this into a single number: 1.0 is perfect, 0.5 is random guessing. AUC is threshold-independent — it tells you how well the model ranks examples, regardless of where you set the cutoff.' },
      { type: 'code', language: 'python', content: 'from sklearn.metrics import roc_curve, roc_auc_score, RocCurveDisplay\n\n# Need probability predictions, not binary class predictions\ny_prob = lr.predict_proba(X_test_s)[:, 1]\n\nauc = roc_auc_score(y_test, y_prob)\nprint(f"AUC-ROC: {auc:.3f}")  # 0.5 = random, 1.0 = perfect\n\nRocCurveDisplay.from_predictions(y_test, y_prob)\nplt.plot([0, 1], [0, 1], "k--", label="Random (AUC=0.5)")\nplt.title(f"ROC Curve (AUC = {auc:.3f})")\nplt.show()' },

      { type: 'heading', content: 'Cross-Validation — a more reliable accuracy estimate' },
      { type: 'paragraph', content: 'A single train/test split can give a lucky or unlucky score depending on which rows land in each set. Cross-validation (k-fold CV) splits the data into k equal folds, trains and evaluates k times (each fold is the test set once), and reports the average score. This gives a much more reliable estimate of real-world performance.' },
      { type: 'code', language: 'python', content: 'from sklearn.model_selection import cross_val_score, StratifiedKFold\n\n# 5-fold stratified cross-validation\n# Stratified = preserves class ratio in each fold\ncv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\n\nscores = cross_val_score(\n    LogisticRegression(max_iter=1000),\n    X_train_s, y_train,\n    cv=cv,\n    scoring="roc_auc"\n)\n\nprint(f"AUC per fold: {scores.round(3)}")\nprint(f"Mean AUC: {scores.mean():.3f} (+/- {scores.std()*2:.3f}")' },

      { type: 'heading', content: 'Overfitting and Underfitting — the bias-variance tradeoff' },
      { type: 'paragraph', content: 'Every ML model sits somewhere on the spectrum between underfitting and overfitting. Finding the right spot is the central challenge of model development.' },
      { type: 'code', language: 'python', content: '# Visualise overfitting in Decision Trees\ntrain_scores, test_scores = [], []\nfor depth in range(1, 20):\n    dt = DecisionTreeClassifier(max_depth=depth, random_state=42)\n    dt.fit(X_train, y_train)\n    train_scores.append(accuracy_score(y_train, dt.predict(X_train)))\n    test_scores.append(accuracy_score(y_test, dt.predict(X_test)))\n\nplt.plot(range(1, 20), train_scores, label="Train Accuracy")\nplt.plot(range(1, 20), test_scores,  label="Test Accuracy")\nplt.xlabel("Max Depth")\nplt.ylabel("Accuracy")\nplt.title("Overfitting: as depth increases, train goes up, test plateaus then drops")\nplt.legend()\nplt.show()\n# At high depth: train accuracy ≈ 1.0, test accuracy drops → overfitting' },
      { type: 'list', items: [
        'Underfitting (high bias): model too simple. Both train and test scores are low. Fix: more complex model, more features.',
        'Good fit: train and test scores are close and both acceptable.',
        'Overfitting (high variance): train score much higher than test score. Fix: simpler model, more data, regularisation, cross-validation.',
      ]},

      { type: 'heading', content: 'Regression evaluation recap' },
      { type: 'list', items: [
        'MAE (Mean Absolute Error): average prediction error in same units as y. Easy to interpret. Not sensitive to large errors.',
        'RMSE (Root Mean Squared Error): penalises large errors more. Most commonly reported. In same units as y.',
        'R² (R-squared): fraction of variance explained. 1.0 = perfect, 0.0 = predicting mean, negative = worse than mean.',
        'When RMSE >> MAE: the model makes occasional very large errors (outlier predictions). Investigate those cases.',
      ]},
    ],
  },

  /* ── Module 6: scikit-learn Pipelines ────────────────────────── */
  {
    id: 'ml-b-6',
    title: 'scikit-learn Pipelines — clean, reproducible, production-ready ML',
    duration: '40 min',
    sections: [
      { type: 'heading', content: 'The problem Pipelines solve' },
      { type: 'paragraph', content: 'Without Pipelines, you have to remember to apply the same preprocessing steps (impute → encode → scale) to both training and test data, in exactly the same order, using the same fitted transformers. Missing a step or applying them in the wrong order causes subtle bugs that are hard to detect. Pipelines package the entire sequence into a single object.' },
      { type: 'callout', kind: 'info', content: 'A Pipeline is also the structure you deploy to production. When a new data point arrives, you call pipeline.predict(new_data) — it automatically runs through all the same preprocessing steps and then the model, in one call.' },

      { type: 'heading', content: 'Building your first Pipeline' },
      { type: 'code', language: 'python', content: 'from sklearn.pipeline import Pipeline\nfrom sklearn.impute import SimpleImputer\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\n\n# Define the sequence of steps as (name, transformer) tuples\npipeline = Pipeline([\n    ("imputer",  SimpleImputer(strategy="median")),   # step 1: fill missing\n    ("scaler",   StandardScaler()),                    # step 2: scale features\n    ("model",    LogisticRegression(max_iter=1000)),   # step 3: train/predict\n])\n\n# Train the entire pipeline in one call\npipeline.fit(X_train, y_train)\n\n# Predict — preprocessing applied automatically in the right order\ny_pred = pipeline.predict(X_test)\ny_prob = pipeline.predict_proba(X_test)[:, 1]\n\nprint(f"Pipeline Accuracy: {accuracy_score(y_test, y_pred):.3f}")\n\n# Cross-validate the pipeline (no data leakage possible)\nscores = cross_val_score(pipeline, X_train, y_train, cv=5, scoring="roc_auc")\nprint(f"CV AUC: {scores.mean():.3f} +/- {scores.std()*2:.3f}")' },

      { type: 'heading', content: 'ColumnTransformer — different preprocessing for different columns' },
      { type: 'paragraph', content: 'Real datasets have mixed column types: some numeric, some categorical. You cannot apply StandardScaler to a text column. ColumnTransformer lets you define a separate preprocessing pipeline for each group of columns, then combines them back into one array.' },
      { type: 'code', language: 'python', content: 'from sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import OneHotEncoder\nimport seaborn as sns\n\ntitanic = sns.load_dataset("titanic")\ndf = titanic[["survived","pclass","sex","age","sibsp","parch","fare"]].copy()\ndf.dropna(subset=["age", "fare"], inplace=True)\n\nX = df.drop("survived", axis=1)\ny = df["survived"]\n\n# Separate column types\nnum_cols = ["age", "sibsp", "parch", "fare"]\ncat_cols = ["sex", "pclass"]\n\n# Preprocessing for numeric: impute then scale\nnum_pipeline = Pipeline([\n    ("imputer", SimpleImputer(strategy="median")),\n    ("scaler",  StandardScaler()),\n])\n\n# Preprocessing for categorical: impute then one-hot encode\ncat_pipeline = Pipeline([\n    ("imputer", SimpleImputer(strategy="most_frequent")),\n    ("encoder", OneHotEncoder(handle_unknown="ignore")),\n])\n\n# Combine with ColumnTransformer\npreprocessor = ColumnTransformer([\n    ("num", num_pipeline, num_cols),\n    ("cat", cat_pipeline, cat_cols),\n])\n\n# Full pipeline with classifier at the end\nfull_pipeline = Pipeline([\n    ("preprocessor", preprocessor),\n    ("model", RandomForestClassifier(n_estimators=100, random_state=42)),\n])\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42, stratify=y\n)\n\nfull_pipeline.fit(X_train, y_train)\nprint(f"Full Pipeline Accuracy: {accuracy_score(y_test, full_pipeline.predict(X_test)):.3f}")' },

      { type: 'heading', content: 'Hyperparameter tuning with GridSearchCV' },
      { type: 'paragraph', content: 'Every algorithm has hyperparameters — settings you choose before training that control model complexity. max_depth in a Decision Tree. C in Logistic Regression. n_estimators in a Random Forest. GridSearchCV tries every combination you specify and finds the best one via cross-validation.' },
      { type: 'code', language: 'python', content: 'from sklearn.model_selection import GridSearchCV\n\n# Define the parameter grid\n# Key: "model__" prefix to reference the pipeline\'s "model" step\nparam_grid = {\n    "model__n_estimators": [50, 100, 200],\n    "model__max_depth": [3, 5, 7, None],\n    "model__min_samples_leaf": [1, 2, 4],\n}\n\n# GridSearchCV tests all combinations via 5-fold CV\ngrid_search = GridSearchCV(\n    full_pipeline,\n    param_grid,\n    cv=5,\n    scoring="roc_auc",\n    n_jobs=-1,  # use all CPU cores\n    verbose=1\n)\ngrid_search.fit(X_train, y_train)\n\nprint(f"Best parameters: {grid_search.best_params_}")\nprint(f"Best CV AUC:     {grid_search.best_score_:.3f}")\n\nbest_model = grid_search.best_estimator_\nprint(f"Test AUC: {roc_auc_score(y_test, best_model.predict_proba(X_test)[:,1]):.3f}")' },
      { type: 'callout', kind: 'tip', content: 'GridSearchCV is exhaustive — it tries every combination. For many hyperparameters, use RandomizedSearchCV instead: it randomly samples combinations and typically finds a near-optimal result in a fraction of the time.' },

      { type: 'heading', content: 'Saving and loading a trained pipeline' },
      { type: 'code', language: 'python', content: 'import joblib\n\n# Save the entire pipeline (preprocessing + model) to a file\njoblib.dump(best_model, "titanic_pipeline.pkl")\nprint("Model saved!")\n\n# Load it back — in production or another script\nloaded_pipeline = joblib.load("titanic_pipeline.pkl")\n\n# Make a prediction on a new passenger\nnew_passenger = pd.DataFrame([{\n    "pclass": 1, "sex": "female", "age": 29,\n    "sibsp": 0, "parch": 0, "fare": 211.3\n}])\n\nsurvival_prob = loaded_pipeline.predict_proba(new_passenger)[0, 1]\nprint(f"Survival probability: {survival_prob:.1%}")  # Rose had a good chance' },
    ],
  },

  /* ── Mini Project ────────────────────────────────────────────── */
  {
    id: 'ml-mp-b-1',
    title: 'Mini Project: House Price Predictor — end-to-end regression',
    duration: '60 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'Project brief' },
      { type: 'paragraph', content: 'You are a data scientist at a real estate analytics company. A product manager wants a working model that predicts median house prices for California districts. The model will be used to flag underpriced listings for investment analysis. Your job: build, evaluate, and save a complete regression pipeline.' },

      { type: 'heading', content: 'Dataset' },
      { type: 'paragraph', content: 'California Housing Dataset from sklearn.datasets.fetch_california_housing. 20,640 districts. Target: MedHouseVal (median house value in $100k units). Features: MedInc, HouseAge, AveRooms, AveBedrms, Population, AveOccup, Latitude, Longitude.' },

      { type: 'heading', content: 'Step 1 — EDA (do not skip this)' },
      { type: 'list', items: [
        'Load with fetch_california_housing(as_frame=True)',
        'Print df.describe() — note ranges, especially AveRooms (some districts have hundreds of rooms — outliers)',
        'Plot the distribution of MedHouseVal — it is capped at 5.0 ($500k). Note this limitation.',
        'Print the correlation matrix. MedInc should be the strongest predictor of MedHouseVal.',
        'Create a scatter plot of Longitude vs Latitude, coloured by MedHouseVal — you should see California\'s shape emerge, with San Francisco and LA as clear high-value clusters.',
      ]},

      { type: 'heading', content: 'Step 2 — Feature engineering' },
      { type: 'list', items: [
        'Create RoomsPerHouse = AveRooms / AveBedrms (ratio of rooms to bedrooms)',
        'Create PopulationPerHousehold = Population / AveOccup (district density per dwelling)',
        'These engineered features often outperform the raw columns for regression.',
      ]},
      { type: 'code', language: 'python', content: 'df["RoomsPerHouse"]          = df["AveRooms"] / df["AveBedrms"]\ndf["PopulationPerHousehold"] = df["Population"] / df["AveOccup"]\n\n# Check for inf/NaN introduced by division\nprint(df.isnull().sum())\nprint(df.replace([np.inf, -np.inf], np.nan).isnull().sum())\ndf.replace([np.inf, -np.inf], np.nan, inplace=True)\ndf.dropna(inplace=True)' },

      { type: 'heading', content: 'Step 3 — Build and evaluate three models' },
      { type: 'list', items: [
        'Model A: Linear Regression (baseline)',
        'Model B: Random Forest Regressor (n_estimators=100, max_depth=10)',
        'Model C: Gradient Boosting Regressor (n_estimators=100, learning_rate=0.1)',
        'For each: wrap in a Pipeline with StandardScaler, fit on training data, evaluate RMSE and R² on test data.',
        'Print a comparison table: Model | RMSE | R²',
      ]},

      { type: 'heading', content: 'Step 4 — Tune the best model' },
      { type: 'list', items: [
        'Use RandomizedSearchCV on the best-performing model (likely Gradient Boosting)',
        'Tune: n_estimators (50–300), max_depth (3–10), learning_rate (0.01–0.3)',
        'Report the best parameters and the improvement in RMSE',
      ]},

      { type: 'heading', content: 'Step 5 — Residual analysis' },
      { type: 'list', items: [
        'Plot predicted vs actual on a scatter chart — do you see any systematic bias?',
        'Plot residuals vs predicted values — any pattern indicates the model misses something',
        'Find the 10 districts with the highest residuals (abs) — these are the hardest-to-predict cases. What do they have in common?',
      ]},

      { type: 'heading', content: 'Step 6 — Save the pipeline' },
      { type: 'code', language: 'python', content: 'import joblib\n\n# Save the best tuned pipeline\njoblib.dump(best_pipeline, "california_housing_model.pkl")\n\n# Quick smoke test — predict on one district\nnew_district = pd.DataFrame([{\n    "MedInc": 8.3, "HouseAge": 41, "AveRooms": 6.9,\n    "AveBedrms": 1.0, "Population": 322, "AveOccup": 2.6,\n    "Latitude": 37.88, "Longitude": -122.23,\n    "RoomsPerHouse": 6.9, "PopulationPerHousehold": 123.8\n}])\nprint(f"Predicted value: ${best_pipeline.predict(new_district)[0]*100:.0f}k")' },

      { type: 'heading', content: 'Expected results' },
      { type: 'list', items: [
        'Linear Regression: RMSE ≈ 0.72, R² ≈ 0.60',
        'Random Forest: RMSE ≈ 0.50, R² ≈ 0.80',
        'Gradient Boosting (tuned): RMSE ≈ 0.45, R² ≈ 0.84',
        'Interpretation: the best model is off by ~$45k on average. For a $300k house, that is a 15% error — reasonable for a district-level prediction without granular property data.',
      ]},
      { type: 'callout', kind: 'tip', content: 'The price cap at $500k is a real limitation in this dataset. Districts near San Francisco that actually sold above $500k are all capped at $500k — the model will consistently underestimate these. In a production system, you would want current data without this artificial cap.' },
    ],
  },

  /* ── Module 7: Capstone — Customer Churn Prediction ─────────── */
  {
    id: 'ml-b-7',
    title: 'Capstone: End-to-end Customer Churn Prediction',
    duration: '75 min',
    isProject: true,
    sections: [
      { type: 'heading', content: 'The business problem' },
      { type: 'paragraph', content: 'Customer churn — when a customer stops using your service — is one of the most expensive problems a subscription business faces. Acquiring a new customer costs 5–25x more than retaining an existing one. If you can predict which customers are likely to churn before they leave, you can intervene: offer a discount, assign a success manager, or run a targeted re-engagement campaign.' },
      { type: 'paragraph', content: 'This capstone combines everything you learned across this course: EDA, data preparation, Pipelines with ColumnTransformer, multiple classifiers, cross-validation, and proper metric selection. You will build a production-ready churn prediction system from scratch.' },

      { type: 'heading', content: 'Dataset: Telecom Customer Churn' },
      { type: 'paragraph', content: 'We use the IBM Telco Customer Churn dataset (available on Kaggle as "WA_Fn-UseC_-Telco-Customer-Churn.csv" and also from sklearn\'s extras). 7,043 customers, 20 features. Target: Churn (Yes/No). Features include tenure, monthly charges, contract type, payment method, and service subscriptions.' },
      { type: 'code', language: 'python', content: '# Option A: download from Kaggle directly\n# Option B: load from a URL (public dataset)\nimport pandas as pd\nurl = "https://raw.githubusercontent.com/dsrscientist/dataset1/master/Telecom-Customer-Churn.csv"\ndf = pd.read_csv(url)\nprint(df.shape)  # (7043, 21)\nprint(df["Churn"].value_counts())\n# No: 5174 (73.5%) | Yes: 1869 (26.5%) — moderate class imbalance' },

      { type: 'heading', content: 'Step 1 — EDA' },
      { type: 'list', items: [
        'Check df.info() — TotalCharges is an object column (contains " " space for new customers). Convert to numeric.',
        'Plot churn rate by Contract type (month-to-month churns ~43% vs two-year churns ~3%).',
        'Plot churn rate by tenure — new customers (0–12 months) churn most.',
        'Plot MonthlyCharges distribution split by Churn — churned customers pay more on average.',
        'Visualise missing values — only TotalCharges has issues after the type fix.',
      ]},
      { type: 'code', language: 'python', content: '# Fix TotalCharges — replace spaces with NaN, then convert\ndf["TotalCharges"] = pd.to_numeric(df["TotalCharges"], errors="coerce")\nprint(f"Missing TotalCharges: {df["TotalCharges"].isnull().sum()}")  # 11 rows\n\n# Churn by Contract (compelling visualisation)\nimport matplotlib.pyplot as plt\nchurn_by_contract = df.groupby("Contract")["Churn"].apply(\n    lambda x: (x == "Yes").mean()\n)\nchurn_by_contract.plot(kind="bar", color=["#2563EB","#16A34A","#EA580C"])\nplt.title("Churn Rate by Contract Type")\nplt.ylabel("Churn Rate")\nplt.xticks(rotation=0)\nplt.show()' },

      { type: 'heading', content: 'Step 2 — Data preparation' },
      { type: 'code', language: 'python', content: 'from sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.impute import SimpleImputer\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\n\n# Drop customerID (not a feature) and convert target to binary\ndf.drop("customerID", axis=1, inplace=True)\ndf["Churn"] = (df["Churn"] == "Yes").astype(int)\n\n# Separate features from target\nX = df.drop("Churn", axis=1)\ny = df["Churn"]\n\n# Identify column types\nnum_cols = X.select_dtypes(include=["number"]).columns.tolist()\ncat_cols = X.select_dtypes(include=["object"]).columns.tolist()\nprint(f"Numeric columns: {num_cols}")\nprint(f"Categorical columns: {cat_cols}")\n\n# Train/test split — stratify to preserve 26.5% churn ratio\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42, stratify=y\n)\n\n# Preprocessing pipelines\nnum_pipeline = Pipeline([\n    ("imputer", SimpleImputer(strategy="median")),\n    ("scaler",  StandardScaler()),\n])\ncat_pipeline = Pipeline([\n    ("imputer", SimpleImputer(strategy="most_frequent")),\n    ("encoder", OneHotEncoder(handle_unknown="ignore", sparse_output=False)),\n])\npreprocessor = ColumnTransformer([\n    ("num", num_pipeline, num_cols),\n    ("cat", cat_pipeline, cat_cols),\n])' },

      { type: 'heading', content: 'Step 3 — Train and compare classifiers' },
      { type: 'code', language: 'python', content: 'from sklearn.linear_model import LogisticRegression\nfrom sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier\nfrom sklearn.metrics import roc_auc_score, f1_score, classification_report\n\nclassifiers = {\n    "Logistic Regression": LogisticRegression(max_iter=1000, C=0.1),\n    "Random Forest":       RandomForestClassifier(n_estimators=100, random_state=42),\n    "Gradient Boosting":   GradientBoostingClassifier(n_estimators=100, random_state=42),\n}\n\nresults = {}\nfor name, clf in classifiers.items():\n    pipeline = Pipeline([\n        ("preprocessor", preprocessor),\n        ("model", clf),\n    ])\n    pipeline.fit(X_train, y_train)\n    y_pred  = pipeline.predict(X_test)\n    y_prob  = pipeline.predict_proba(X_test)[:, 1]\n    results[name] = {\n        "AUC":       roc_auc_score(y_test, y_prob),\n        "F1":        f1_score(y_test, y_pred),\n        "pipeline":  pipeline,\n    }\n    print(f"\\n{name}")\n    print(classification_report(y_test, y_pred, target_names=["Stayed","Churned"]))' },

      { type: 'heading', content: 'Step 4 — Choose the right threshold for the business' },
      { type: 'paragraph', content: 'The default threshold of 0.5 may not be optimal. For churn prevention, false negatives (missed churners) are more expensive than false positives (unnecessary retention offers). Lower the threshold to catch more churners, accepting more false alarms.' },
      { type: 'code', language: 'python', content: 'from sklearn.metrics import precision_recall_curve\n\nbest_pipeline = results["Gradient Boosting"]["pipeline"]\ny_prob = best_pipeline.predict_proba(X_test)[:, 1]\n\n# Precision-Recall curve — shows tradeoff at every threshold\nprecision, recall, thresholds = precision_recall_curve(y_test, y_prob)\n\nplt.plot(thresholds, precision[:-1], label="Precision")\nplt.plot(thresholds, recall[:-1],    label="Recall")\nplt.xlabel("Threshold")\nplt.title("Precision vs Recall at Different Thresholds")\nplt.legend()\nplt.show()\n\n# Business decision: choose threshold where Recall ≥ 0.70\n# (catch at least 70% of churners)\nfor t in [0.3, 0.4, 0.5, 0.6]:\n    pred = (y_prob >= t).astype(int)\n    print(f"Threshold {t}: Precision={precision_score(y_test,pred):.2f} "\n          f"Recall={recall_score(y_test,pred):.2f} "\n          f"F1={f1_score(y_test,pred):.2f}")' },

      { type: 'heading', content: 'Step 5 — Feature importance' },
      { type: 'code', language: 'python', content: '# Extract feature names after preprocessing\nfitted_preprocessor = best_pipeline.named_steps["preprocessor"]\nnum_feat_names = num_cols\ncat_feat_names = list(\n    fitted_preprocessor.named_transformers_["cat"]\n    .named_steps["encoder"]\n    .get_feature_names_out(cat_cols)\n)\nall_feat_names = num_feat_names + cat_feat_names\n\n# Feature importances from Gradient Boosting\nimportances = best_pipeline.named_steps["model"].feature_importances_\nfeat_df = pd.DataFrame({"Feature": all_feat_names, "Importance": importances})\ntop10 = feat_df.sort_values("Importance", ascending=False).head(10)\n\ntop10.plot(kind="barh", x="Feature", y="Importance", figsize=(10, 6))\nplt.title("Top 10 Churn Predictors")\nplt.gca().invert_yaxis()\nplt.show()\n# Expected top features: tenure, MonthlyCharges, Contract_Month-to-month' },

      { type: 'heading', content: 'Step 6 — Save and test in production' },
      { type: 'code', language: 'python', content: 'import joblib\njoblib.dump(best_pipeline, "churn_predictor.pkl")\n\n# Production simulation: score a new customer\nnew_customer = pd.DataFrame([{\n    "gender": "Female", "SeniorCitizen": 0, "Partner": "Yes",\n    "Dependents": "No", "tenure": 2, "PhoneService": "Yes",\n    "MultipleLines": "No", "InternetService": "Fiber optic",\n    "OnlineSecurity": "No", "OnlineBackup": "No",\n    "DeviceProtection": "No", "TechSupport": "No",\n    "StreamingTV": "No", "StreamingMovies": "No",\n    "Contract": "Month-to-month", "PaperlessBilling": "Yes",\n    "PaymentMethod": "Electronic check",\n    "MonthlyCharges": 70.70, "TotalCharges": 151.65,\n}])\n\nloaded = joblib.load("churn_predictor.pkl")\nchurn_prob = loaded.predict_proba(new_customer)[0, 1]\nprint(f"Churn probability: {churn_prob:.1%}")\nif churn_prob > 0.40:\n    print("→ HIGH RISK: Flag for retention campaign")\nelse:\n    print("→ LOW RISK: Monitor next quarter")' },

      { type: 'heading', content: 'What you have achieved in this beginner course' },
      { type: 'list', items: [
        'You understand the ML workflow end-to-end: EDA → prep → split → train → evaluate → improve → deploy.',
        'You can build regression pipelines (Linear, Ridge, Lasso, Random Forest, Gradient Boosting) and evaluate with RMSE/R².',
        'You can build classification pipelines (Logistic Regression, Decision Trees, Random Forest, KNN) and evaluate with accuracy, precision, recall, F1, AUC-ROC.',
        'You understand overfitting, underfitting, data leakage, and cross-validation.',
        'You can build production-grade sklearn Pipelines with ColumnTransformer that handle mixed data types.',
        'You can tune hyperparameters with GridSearchCV/RandomizedSearchCV.',
        'You can save and load a complete pipeline with joblib.',
        'You have two end-to-end projects in your portfolio: California Housing (regression) and Customer Churn (classification).',
      ]},
      { type: 'callout', kind: 'tip', content: 'Next: the Intermediate ML course covers Support Vector Machines, Neural Network basics, clustering (K-Means, DBSCAN), dimensionality reduction (PCA, t-SNE), and more sophisticated feature engineering. Everything you learned here is the foundation — you will use it in every future ML project.' },
    ],
  },
]

export const COURSE_CONTENT = {
  sql: {
    beginner: SQL_BEGINNER,
    intermediate: SQL_INTERMEDIATE,
    advanced: SQL_ADVANCED,
  },
  python: {
    beginner: PYTHON_BEGINNER,
    intermediate: PYTHON_INTERMEDIATE,
    advanced: PYTHON_ADVANCED,
  },
  excel: {
    beginner: EXCEL_BEGINNER,
    intermediate: EXCEL_INTERMEDIATE,
    advanced: EXCEL_ADVANCED,
  },
  powerbi: {
    beginner: POWERBI_BEGINNER,
    intermediate: POWERBI_INTERMEDIATE,
    advanced: POWERBI_ADVANCED,
  },
  tableau: {
    beginner: TABLEAU_BEGINNER,
    intermediate: TABLEAU_INTERMEDIATE,
    advanced: TABLEAU_ADVANCED,
  },
  ml: {
    beginner: ML_BEGINNER,
    intermediate: productionList([
      'Support Vector Machines and kernels',
      'K-Means and DBSCAN clustering',
      'PCA and dimensionality reduction',
      'Neural network fundamentals',
      'Natural language processing basics',
      'Model deployment with Flask and FastAPI',
    ], 3),
    advanced: productionList([
      'Deep learning with PyTorch',
      'Convolutional Neural Networks',
      'Recurrent Networks and transformers',
      'Reinforcement learning fundamentals',
      'MLOps and model monitoring',
      'Large Language Model fine-tuning',
    ], 6),
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
