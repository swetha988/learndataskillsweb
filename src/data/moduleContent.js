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
      { type: 'paragraph', content: "The Advanced track goes further still: deeper statistical analysis, working with larger and messier real-world datasets, and the habits that separate a working script from production-quality code. When ready, switch to Advanced from the sidebar." },
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
    intermediate: SQL_INTERMEDIATE,
    advanced: SQL_ADVANCED,
  },
  python: {
    beginner: PYTHON_BEGINNER,
    intermediate: PYTHON_INTERMEDIATE,
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
