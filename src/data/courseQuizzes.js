export const COURSE_QUIZZES = {
  sql: {
    beginner: {
      title: 'SQL Beginner Final Assessment',
      intro: 'Test your knowledge across all 6 SQL beginner modules. This comprehensive quiz contains multiple choice, fill-in-the-blank, and interactive code exercises.',
      questions: [
        {
          id: 'sql-b-f-1',
          type: 'mcq',
          prompt: 'You have a table of employees, and you want to list only their names and departments. Which keyword must start your query?',
          options: ['FIND', 'GET', 'SELECT', 'FETCH'],
          answerIndex: 2,
          explanation: 'Every SQL query that reads data from a table begins with the SELECT keyword.'
        },
        {
          id: 'sql-b-f-2',
          type: 'mcq',
          prompt: 'Why is using "SELECT *" considered bad practice in large production databases?',
          options: ['It crashes the server immediately', 'It wastes memory and slows performance by pulling unneeded columns', 'It deletes data from the database', 'It alters the table structure permanently'],
          answerIndex: 1,
          explanation: 'SELECT * fetches everything. In real applications with huge tables, this causes massive performance issues and wastes bandwidth.'
        },
        {
          id: 'sql-b-f-3',
          type: 'fill-blank',
          prompt: 'To rename a column in your output to something more readable without modifying the database, use the ______ keyword.',
          correctAnswers: ['as', 'AS'],
          explanation: 'The AS keyword creates an alias. For example: SELECT emp_name AS "Employee Name".'
        },
        {
          id: 'sql-b-f-4',
          type: 'mcq',
          prompt: 'Which operator is used in a WHERE clause to check if a text column contains a specific pattern?',
          options: ['MATCH', 'EQUALS', 'LIKE', 'CONTAINS'],
          answerIndex: 2,
          explanation: 'LIKE is used with wildcards (e.g., %) to search for patterns within text strings.'
        },
        {
          id: 'sql-b-f-5',
          type: 'fill-blank',
          prompt: 'To filter results to only show orders over ₹1000, you use the ______ clause before the ORDER BY clause.',
          correctAnswers: ['where', 'WHERE'],
          explanation: 'The WHERE clause filters rows based on a condition before they are grouped or sorted.'
        },
        {
          id: 'sql-b-f-6',
          type: 'mcq',
          prompt: 'You want to find customers whose emails end in "@yahoo.com". Which WHERE clause is correct?',
          options: ["WHERE email LIKE '%@yahoo.com'", "WHERE email = '*@yahoo.com'", "WHERE email = '@yahoo.com'", "WHERE email MATCHES '%@yahoo.com'"],
          answerIndex: 0,
          explanation: 'The % symbol is the wildcard for "any number of characters", making \'%@yahoo.com\' match any prefix.'
        },
        {
          id: 'sql-b-f-7',
          type: 'mcq',
          prompt: 'If you want to find the 5 most expensive products, which clauses do you need?',
          options: ['ORDER BY price ASC LIMIT 5', 'ORDER BY price DESC LIMIT 5', 'SORT price HIGHEST', 'LIMIT 5 ORDER BY price'],
          answerIndex: 1,
          explanation: 'You first sort from highest to lowest using DESC, and then cap the output at 5 rows using LIMIT.'
        },
        {
          id: 'sql-b-f-8',
          type: 'fill-blank',
          prompt: 'By default, the ORDER BY clause sorts data in ______ order (lowest to highest).',
          correctAnswers: ['ascending', 'asc', 'ASCENDING', 'ASC'],
          explanation: 'If you omit DESC or ASC, SQL defaults to ascending (A to Z, 0 to 9) order.'
        },
        {
          id: 'sql-b-f-9',
          type: 'mcq',
          prompt: 'Which function calculates the average value of a numeric column?',
          options: ['MEAN()', 'AVERAGE()', 'MEDIAN()', 'AVG()'],
          answerIndex: 3,
          explanation: 'In SQL, the average is calculated using the AVG() aggregation function.'
        },
        {
          id: 'sql-b-f-10',
          type: 'fill-blank',
          prompt: 'To count the total number of rows returned by a query, you use the aggregation function ______(*).',
          correctAnswers: ['count', 'COUNT'],
          explanation: 'COUNT(*) calculates the total number of rows.'
        },
        {
          id: 'sql-b-f-11',
          type: 'mcq',
          prompt: 'What happens if you include a normal column in your SELECT statement alongside an aggregation like SUM(), but forget to use GROUP BY?',
          options: ['The query works fine', 'SQL automatically groups it for you', 'The query returns an error', 'The database crashes'],
          answerIndex: 2,
          explanation: 'Any un-aggregated column in the SELECT clause must be explicitly declared in the GROUP BY clause.'
        },
        {
          id: 'sql-b-f-12',
          type: 'mcq',
          prompt: 'When using GROUP BY, what is the role of the HAVING clause?',
          options: [
            'It filters individual rows before grouping',
            'It joins two tables together',
            'It limits the total number of rows returned',
            'It filters the aggregated groups after grouping has occurred'
          ],
          answerIndex: 3,
          explanation: 'WHERE filters individual rows before grouping. HAVING filters the summarized groups (e.g., HAVING SUM(total) > 500).'
        },
        {
          id: 'sql-b-f-13',
          type: 'fill-blank',
          prompt: 'To connect two tables based on a matching column, you use a ______.',
          correctAnswers: ['join', 'JOIN', 'inner join', 'INNER JOIN'],
          explanation: 'JOINs combine rows from two or more tables based on a related column.'
        },
        {
          id: 'sql-b-f-14',
          type: 'mcq',
          prompt: 'Which type of JOIN ensures you keep ALL rows from the first (left) table, even if there is no match in the second table?',
          options: ['INNER JOIN', 'OUTER JOIN', 'LEFT JOIN', 'FULL JOIN'],
          answerIndex: 2,
          explanation: 'A LEFT JOIN keeps every row from the left table, inserting NULLs if the right table has no matching row.'
        },
        {
          id: 'sql-b-f-15',
          type: 'code',
          prompt: 'Write a query to return all columns from the "customers" table where the country is exactly \'India\'.',
          dataset: 'customers',
          expectedKeywords: ['select', '*', 'from', 'customers', 'where', 'country'],
          explanation: 'You need a basic SELECT * query with a WHERE clause filtering for country = \'India\'.'
        },
        {
          id: 'sql-b-f-16',
          type: 'mcq',
          prompt: 'Why do we use table aliases (like "customers AS c") in queries with JOINs?',
          options: ['To hide the real table name for security', 'To save typing and make the query cleaner', 'Because SQL requires aliases for all tables', 'To create a backup table'],
          answerIndex: 1,
          explanation: 'Aliases save time and make queries with multiple tables much easier to read.'
        },
        {
          id: 'sql-b-f-17',
          type: 'mcq',
          prompt: 'What does the IN operator do in a WHERE clause?',
          options: ['It checks if a value exists inside another table', 'It checks if a value matches any value in a specified list', 'It replaces the EQUALS operator entirely', 'It imports data from an external file'],
          answerIndex: 1,
          explanation: 'The IN operator is a shorthand for multiple OR conditions. e.g., WHERE country IN (\'India\', \'USA\').'
        },
        {
          id: 'sql-b-f-18',
          type: 'fill-blank',
          prompt: 'In a JOIN, the ______ clause specifies exactly which columns link the two tables together.',
          correctAnswers: ['on', 'ON'],
          explanation: 'The ON clause acts as the bridge (e.g., ON table1.id = table2.user_id).'
        },
        {
          id: 'sql-b-f-19',
          type: 'mcq',
          prompt: 'If you want to find the highest salary in the employees table, which function do you use?',
          options: ['TOP()', 'HIGHEST()', 'MAX()', 'SUM()'],
          answerIndex: 2,
          explanation: 'MAX() returns the largest value in the selected column.'
        },
        {
          id: 'sql-b-f-20',
          type: 'code',
          prompt: 'Write a SQL query that joins "customers" and "orders". Select the customer name and the order total where the total is strictly greater than 1000. (Use an INNER JOIN).',
          dataset: 'customers_orders',
          expectedKeywords: ['select', 'from', 'customers', 'join', 'orders', 'on', 'where', '>', '1000'],
          explanation: 'An INNER JOIN is required on the common key (customer_id = id), followed by a WHERE clause for the total.'
        }
      ]
    },
    intermediate: {
      title: 'SQL Intermediate Final Assessment',
      intro: 'Test your knowledge across all 12 SQL intermediate modules — NULL handling, CASE WHEN, subqueries, CTEs, UNION, every JOIN type, both window-function modules, string functions, date functions, CAST, and query performance. Uses the QuickBite food-delivery dataset throughout.',
      questions: [
        {
          id: 'sql-i-f-1',
          type: 'mcq',
          prompt: 'What happens when you write WHERE rider_id = NULL in a query?',
          options: ['It returns every row where rider_id is NULL', 'It returns zero rows, because comparisons against NULL never evaluate to true', 'It throws a syntax error', 'It returns every row regardless of rider_id'],
          answerIndex: 1,
          explanation: 'NULL means "unknown," so = NULL never evaluates to true, even when the value genuinely is NULL. Use IS NULL instead.'
        },
        {
          id: 'sql-i-f-2',
          type: 'fill-blank',
          prompt: 'COALESCE(rating, 0) returns rating if it is not NULL, otherwise it returns ______.',
          correctAnswers: ['0', 'zero'],
          explanation: 'COALESCE returns the first non-NULL value in its argument list — here, that fallback is the literal 0.'
        },
        {
          id: 'sql-i-f-3',
          type: 'code',
          prompt: 'Using the QuickBite dataset, write a query that returns the order_id and customer_id of every order that does not yet have a rider assigned.',
          dataset: 'quickbite',
          expectedKeywords: ['select', 'order_id', 'customer_id', 'from', 'orders', 'where', 'rider_id', 'is', 'null'],
          explanation: 'rider_id IS NULL identifies orders that have not yet been picked up by a rider.'
        },
        {
          id: 'sql-i-f-4',
          type: 'mcq',
          prompt: 'In a CASE WHEN expression, what happens once SQL finds a WHEN condition that evaluates to true?',
          options: ['It evaluates every remaining WHEN condition anyway', "It stops checking and uses that branch's result, similar to an if/elif chain", 'It restarts evaluation from the top', 'It throws an error if ELSE is missing'],
          answerIndex: 1,
          explanation: 'CASE WHEN checks conditions top-to-bottom and stops at the first one that is true, exactly like an if/elif/else chain.'
        },
        {
          id: 'sql-i-f-5',
          type: 'fill-blank',
          prompt: 'In a CASE WHEN expression, the ______ keyword provides a fallback value for any row that did not match any WHEN condition.',
          correctAnswers: ['else', 'ELSE'],
          explanation: 'ELSE is optional but commonly used to catch any row that fell through every WHEN condition above it.'
        },
        {
          id: 'sql-i-f-6',
          type: 'code',
          prompt: "Write a query that shows every order's order_id along with a label: 'Completed' if status is 'delivered', 'Cancelled' if status is 'cancelled', and 'In Progress' otherwise.",
          dataset: 'quickbite',
          expectedKeywords: ['select', 'order_id', 'case', 'when', 'status', 'then', 'else', 'end', 'from', 'orders'],
          explanation: "CASE WHEN status = 'delivered' THEN 'Completed' WHEN status = 'cancelled' THEN 'Cancelled' ELSE 'In Progress' END."
        },
        {
          id: 'sql-i-f-7',
          type: 'mcq',
          prompt: 'What is a "scalar" subquery?',
          options: ['A subquery that always uses GROUP BY', 'A subquery that returns exactly one value (one row, one column)', 'A subquery that returns an entire table', 'A subquery written in all uppercase'],
          answerIndex: 1,
          explanation: 'A scalar subquery returns a single value, which is why it can be used anywhere a single number or text value would normally go.'
        },
        {
          id: 'sql-i-f-8',
          type: 'mcq',
          prompt: 'What makes a subquery "correlated"?',
          options: ['It uses a JOIN inside it', 'It references a column from the outer query, so it effectively runs once per outer row', 'It is wrapped in double parentheses', 'It must use the IN operator'],
          answerIndex: 1,
          explanation: 'A correlated subquery depends on the current row of the outer query, so it is effectively re-evaluated for every row the outer query considers.'
        },
        {
          id: 'sql-i-f-9',
          type: 'fill-blank',
          prompt: 'The ______ keyword checks whether a correlated subquery returns at least one row, without caring what the row actually contains.',
          correctAnswers: ['exists', 'EXISTS'],
          explanation: 'EXISTS is a yes/no check — it stops as soon as it finds one matching row, which is why it pairs naturally with a correlated subquery.'
        },
        {
          id: 'sql-i-f-10',
          type: 'code',
          prompt: 'Write a query that returns the name of every customer who has never placed an order, using NOT IN.',
          dataset: 'quickbite',
          expectedKeywords: ['select', 'name', 'from', 'customers', 'where', 'customer_id', 'not', 'in', 'select', 'customer_id', 'from', 'orders'],
          explanation: "WHERE customer_id NOT IN (SELECT customer_id FROM orders) excludes anyone who appears at least once in the orders table."
        },
        {
          id: 'sql-i-f-11',
          type: 'mcq',
          prompt: 'What is a CTE, in the simplest terms?',
          options: ['A type of JOIN', 'A subquery that has been given a name using WITH, so it can be referred to like a table', 'A built-in date function', 'A way to permanently store query results in the database'],
          answerIndex: 1,
          explanation: 'A CTE (Common Table Expression) is functionally a named subquery, defined with WITH before the main query that uses it.'
        },
        {
          id: 'sql-i-f-12',
          type: 'fill-blank',
          prompt: 'A Common Table Expression is defined using the ______ keyword, placed before the main query.',
          correctAnswers: ['with', 'WITH'],
          explanation: 'WITH name AS (subquery) defines a CTE that the rest of the query can refer to by name.'
        },
        {
          id: 'sql-i-f-13',
          type: 'code',
          prompt: "Using a CTE, write a query that calculates each restaurant_id's average total_amount from the orders table (call the result avg_order_value).",
          dataset: 'quickbite',
          expectedKeywords: ['with', 'select', 'restaurant_id', 'avg', 'total_amount', 'from', 'orders', 'group', 'by'],
          explanation: 'WITH restaurant_avg AS (SELECT restaurant_id, AVG(total_amount) AS avg_order_value FROM orders GROUP BY restaurant_id) SELECT * FROM restaurant_avg.'
        },
        {
          id: 'sql-i-f-14',
          type: 'mcq',
          prompt: 'What is the key difference between UNION and UNION ALL?',
          options: ['UNION ALL only works with numbers', 'UNION removes duplicate rows from the combined result; UNION ALL keeps every row, including duplicates', 'UNION is always faster than UNION ALL', 'There is no real difference between them'],
          answerIndex: 1,
          explanation: 'UNION does extra work checking for and removing duplicates across the combined results. UNION ALL skips that check and keeps everything.'
        },
        {
          id: 'sql-i-f-15',
          type: 'fill-blank',
          prompt: 'Both SELECT statements joined by UNION must return the same number of ______, in a compatible type and order.',
          correctAnswers: ['columns', 'COLUMNS'],
          explanation: 'SQL combines UNION results positionally, not by column name, so the column counts, types, and order must line up.'
        },
        {
          id: 'sql-i-f-16',
          type: 'mcq',
          prompt: "In a UNION query, where do the final result's column names come from?",
          options: ['The second SELECT statement', 'The first SELECT statement', 'SQL automatically renames them col1, col2, etc.', 'You must specify them manually after UNION'],
          answerIndex: 1,
          explanation: 'The final result set takes its column names from the very first SELECT in the UNION, regardless of what later SELECTs name their columns.'
        },
        {
          id: 'sql-i-f-17',
          type: 'mcq',
          prompt: 'How does RIGHT JOIN relate to LEFT JOIN?',
          options: ['They are completely unrelated operations', 'RIGHT JOIN keeps every row from the second (right) table — swapping the table order in a LEFT JOIN produces the same result', 'RIGHT JOIN only works on numeric columns', 'RIGHT JOIN cannot use an ON clause'],
          answerIndex: 1,
          explanation: 'RIGHT JOIN and LEFT JOIN are mirror images of each other; many people just always write LEFT JOIN and reorder the tables instead.'
        },
        {
          id: 'sql-i-f-18',
          type: 'mcq',
          prompt: 'What does FULL OUTER JOIN return?',
          options: ['Only rows that match in both tables', 'Every row from both tables, with NULLs filled in wherever a row from one side has no match on the other', 'Only rows from the left table', 'It is invalid SQL on every database'],
          answerIndex: 1,
          explanation: 'FULL OUTER JOIN keeps everything from both tables — matched rows show data from both sides, unmatched rows show NULLs for the missing side.'
        },
        {
          id: 'sql-i-f-19',
          type: 'mcq',
          prompt: 'What makes a SELF JOIN different from a normal JOIN?',
          options: ['It uses a special SELFJOIN keyword', 'It is ordinary JOIN syntax, just pointing at the same table twice using two different aliases', 'It only works on tables with no primary key', 'It cannot use an ON clause'],
          answerIndex: 1,
          explanation: 'A SELF JOIN aliases the same table twice, letting SQL (and you) treat the two "copies" as separate tables for the query.'
        },
        {
          id: 'sql-i-f-20',
          type: 'code',
          prompt: "Using a SELF JOIN on the customers table, write a query that shows each referred customer's name next to the name of the customer who referred them.",
          dataset: 'quickbite',
          expectedKeywords: ['select', 'from', 'customers', 'inner', 'join', 'customers', 'on'],
          explanation: 'FROM customers AS c1 INNER JOIN customers AS c2 ON c1.referred_by = c2.customer_id resolves each referral back to the referrer.'
        },
        {
          id: 'sql-i-f-21',
          type: 'mcq',
          prompt: "What does PARTITION BY do inside a window function's OVER() clause?",
          options: ['It deletes non-matching rows', "It restarts the window function's calculation separately for each group, without merging rows together like GROUP BY does", 'It sorts the table permanently', 'It is required in every window function'],
          answerIndex: 1,
          explanation: 'PARTITION BY divides rows into groups for the calculation — each group gets its own independent ranking or running total — while every row still appears in the output.'
        },
        {
          id: 'sql-i-f-22',
          type: 'mcq',
          prompt: 'Two restaurants are tied for 2nd place by rating. What rank does RANK() give the restaurant right after them?',
          options: ['3', '4, because RANK leaves a gap equal to the number of tied rows', '2, the same as the tied rows', 'An error, since ties are not allowed'],
          answerIndex: 1,
          explanation: 'RANK() gives tied rows the same rank but leaves a gap afterward — two rows tied at rank 2 means the next row gets rank 4, not 3.'
        },
        {
          id: 'sql-i-f-23',
          type: 'fill-blank',
          prompt: 'Unlike RANK(), ______() never leaves a gap in the numbering after a tie.',
          correctAnswers: ['dense_rank', 'DENSE_RANK'],
          explanation: 'DENSE_RANK gives tied rows the same rank, but the next distinct value always continues immediately afterward with no skipped numbers.'
        },
        {
          id: 'sql-i-f-24',
          type: 'code',
          prompt: 'Write a query that ranks every restaurant by rating (highest first) using DENSE_RANK, only including restaurants where rating is not null.',
          dataset: 'quickbite',
          expectedKeywords: ['select', 'name', 'rating', 'dense_rank', 'over', 'order', 'by', 'rating', 'desc', 'from', 'restaurants', 'where', 'is', 'not', 'null'],
          explanation: 'SELECT name, rating, DENSE_RANK() OVER (ORDER BY rating DESC) AS rnk FROM restaurants WHERE rating IS NOT NULL.'
        },
        {
          id: 'sql-i-f-25',
          type: 'mcq',
          prompt: 'What is the difference between LAG and LEAD?',
          options: ['LAG looks at the previous row; LEAD looks at the next row, within the same ordered window', 'LAG only works with dates; LEAD only works with numbers', 'They always produce identical results', 'LEAD requires a CTE; LAG does not'],
          answerIndex: 0,
          explanation: 'LAG reaches backward to a prior row, LEAD reaches forward to a following row, both within whatever PARTITION BY / ORDER BY defines the window.'
        },
        {
          id: 'sql-i-f-26',
          type: 'mcq',
          prompt: 'What turns a normal SUM(total_amount) into a running total?',
          options: ['Adding GROUP BY total_amount', 'Adding OVER (ORDER BY some_column), turning it into a window function that accumulates row by row', 'Using SUM ALL instead of SUM', 'Nothing — SUM is always a running total'],
          answerIndex: 1,
          explanation: 'Without OVER(), SUM collapses everything into one number. With OVER (ORDER BY ...), it accumulates as it moves through the ordered rows.'
        },
        {
          id: 'sql-i-f-27',
          type: 'code',
          prompt: 'Write a query that shows order_date and total_amount for delivered orders, along with a running total of total_amount ordered by order_date.',
          dataset: 'quickbite',
          expectedKeywords: ['select', 'order_date', 'total_amount', 'sum', 'over', 'order', 'by', 'from', 'orders', 'where', 'status'],
          explanation: "SELECT order_date, total_amount, SUM(total_amount) OVER (ORDER BY order_date) AS running_total FROM orders WHERE status = 'delivered' ORDER BY order_date."
        },
        {
          id: 'sql-i-f-28',
          type: 'mcq',
          prompt: "What does TRIM('  Spice Route  ') return?",
          options: ["'  Spice Route  ' unchanged", "'Spice Route' with the leading and trailing spaces removed", "'SpiceRoute' with every space removed", 'An error'],
          answerIndex: 1,
          explanation: 'TRIM removes only leading and trailing whitespace, leaving "Spice Route" with no surrounding spaces but the internal space intact.'
        },
        {
          id: 'sql-i-f-29',
          type: 'fill-blank',
          prompt: 'In SQLite, the ______ operator joins two text values together.',
          correctAnswers: ['||'],
          explanation: "name || ' (' || cuisine_type || ')' is SQLite's way of concatenating text — the same job CONCAT() does in MySQL or SQL Server."
        },
        {
          id: 'sql-i-f-30',
          type: 'code',
          prompt: "Write a query that returns every restaurant's name and city, both cleaned with TRIM and converted to uppercase.",
          dataset: 'quickbite',
          expectedKeywords: ['select', 'upper', 'trim', 'name', 'city', 'from', 'restaurants'],
          explanation: 'SELECT UPPER(TRIM(name)) AS clean_name, UPPER(TRIM(city)) AS clean_city FROM restaurants.'
        },
        {
          id: 'sql-i-f-31',
          type: 'mcq',
          prompt: 'What does julianday() convert a date into?',
          options: ['A text string in DD-MM-YYYY format', 'A single number representing days since a fixed historical reference point', 'The day of the week', 'A boolean true/false for whether the date is valid'],
          answerIndex: 1,
          explanation: 'julianday() converts any date into one number (a day count), which is exactly why subtracting two julianday() values gives a clean day difference.'
        },
        {
          id: 'sql-i-f-32',
          type: 'fill-blank',
          prompt: "strftime('______', order_date) extracts just the year portion of a date.",
          correctAnswers: ['%Y'],
          explanation: 'strftime formats a date using codes — %Y specifically extracts the 4-digit year.'
        },
        {
          id: 'sql-i-f-33',
          type: 'code',
          prompt: 'Write a query that calculates the average delivery time in minutes for each restaurant_id, for orders where delivered_at is not null.',
          dataset: 'quickbite',
          expectedKeywords: ['select', 'restaurant_id', 'avg', 'julianday', 'delivered_at', 'order_date', 'from', 'orders', 'where', 'is', 'not', 'null', 'group', 'by'],
          explanation: "SELECT restaurant_id, AVG((julianday(delivered_at) - julianday(order_date)) * 1440) AS avg_minutes FROM orders WHERE delivered_at IS NOT NULL GROUP BY restaurant_id."
        },
        {
          id: 'sql-i-f-34',
          type: 'mcq',
          prompt: 'What does CAST(3.7 AS INTEGER) return?',
          options: ['4, because it rounds to the nearest whole number', '3, because CAST truncates the decimal rather than rounding', '3.7, unchanged', 'An error, since 3.7 is not a whole number'],
          answerIndex: 1,
          explanation: 'CAST to an integer type truncates — it discards everything after the decimal point rather than rounding.'
        },
        {
          id: 'sql-i-f-35',
          type: 'fill-blank',
          prompt: 'If you actually want 3.7 to become 4 (genuine rounding), use the ______() function instead of CAST.',
          correctAnswers: ['round', 'ROUND'],
          explanation: 'ROUND() performs real mathematical rounding. CAST to an integer type truncates instead, which is a common point of confusion.'
        },
        {
          id: 'sql-i-f-36',
          type: 'mcq',
          prompt: "Why might COALESCE(rating, 'Not yet rated') need CAST(rating AS TEXT) on some databases but not on SQLite?",
          options: ['SQLite does not support COALESCE at all', "SQLite has flexible typing and allows a single column to return different types per row, while stricter databases like PostgreSQL or SQL Server require COALESCE's arguments to share a type", 'CAST is required everywhere with no exceptions', 'Stricter databases do not support NULL'],
          answerIndex: 1,
          explanation: "SQLite's dynamic typing lets COALESCE mix a number and a fallback word without complaint — most production databases are stricter and would reject it without an explicit CAST."
        },
        {
          id: 'sql-i-f-37',
          type: 'mcq',
          prompt: 'What does EXPLAIN QUERY PLAN tell you?',
          options: ['The exact number of seconds a query will take to run', 'How the database actually intends to execute your query, without running it', 'Whether your SQL syntax is valid', 'The total row count in every table'],
          answerIndex: 1,
          explanation: 'EXPLAIN QUERY PLAN reveals the execution strategy — for example, whether the database will scan an entire table or use an index to jump straight to matching rows.'
        },
        {
          id: 'sql-i-f-38',
          type: 'mcq',
          prompt: 'What does a database index conceptually do?',
          options: ['It deletes old rows to save space', 'It works like a library card catalogue, letting the database jump straight to matching rows instead of scanning every row', 'It makes every query take exactly the same amount of time', 'It only works on text columns'],
          answerIndex: 1,
          explanation: 'Just like a library catalogue lets you go straight to the right shelf, an index lets the database jump directly to matching rows instead of scanning the whole table.'
        },
        {
          id: 'sql-i-f-39',
          type: 'fill-blank',
          prompt: "After creating an index on a filtered column, EXPLAIN QUERY PLAN typically changes from showing a table 'SCAN' to showing a table ______.",
          correctAnswers: ['search', 'SEARCH'],
          explanation: 'SCAN means checking every row one by one. SEARCH means the database used an index to jump straight to the matching rows.'
        }
      ]
    },
    advanced: {
      title: 'SQL Advanced Final Assessment',
      intro: 'Test your knowledge across all 11 SQL advanced modules — recursive CTEs, advanced window functions, set operations, views, transactions, constraints and triggers, JSON, indexing, query plans, anti-patterns, and concurrency. Uses the QuickBite food-delivery dataset throughout.',
      questions: [
        {
          id: 'sql-a-f-1',
          type: 'mcq',
          prompt: 'What kind of question needs a recursive CTE rather than a fixed number of JOINs?',
          options: ['Any question involving a WHERE clause', 'A question about a hierarchy of unknown depth, like "everyone in this customer\'s entire referral chain, however many levels deep"', 'Any question involving an aggregate function', 'A question that sorts results'],
          answerIndex: 1,
          explanation: 'A fixed number of JOINs can only reach a fixed number of levels. A recursive CTE keeps going until no new rows are found, regardless of depth.'
        },
        {
          id: 'sql-a-f-2',
          type: 'fill-blank',
          prompt: 'A recursive CTE is introduced with the keywords WITH ______.',
          correctAnswers: ['recursive', 'RECURSIVE'],
          explanation: 'WITH RECURSIVE signals that the CTE\'s recursive part is allowed to refer back to the CTE itself.'
        },
        {
          id: 'sql-a-f-3',
          type: 'mcq',
          prompt: 'In a recursive CTE, what must the anchor and the recursive part be combined with?',
          options: ['INTERSECT', 'UNION ALL', 'A plain comma', 'GROUP BY'],
          answerIndex: 1,
          explanation: 'The anchor (starting point) and the recursive part (which refers back to the CTE) must be joined with UNION ALL.'
        },
        {
          id: 'sql-a-f-4',
          type: 'code',
          prompt: 'Write a recursive CTE that finds every customer who traces back to customer_id 1 through the referred_by chain, at any depth.',
          dataset: 'quickbite',
          expectedKeywords: ['with', 'recursive', 'select', 'customer_id', 'from', 'customers', 'where', 'union', 'all', 'inner', 'join', 'on'],
          explanation: 'WITH RECURSIVE chain AS (SELECT ... WHERE customer_id = 1 UNION ALL SELECT ... INNER JOIN chain ON c.referred_by = chain.customer_id) SELECT * FROM chain.'
        },
        {
          id: 'sql-a-f-5',
          type: 'mcq',
          prompt: 'What does FIRST_VALUE(total_amount) OVER (PARTITION BY customer_id ORDER BY order_date) return for every row within one customer\'s partition?',
          options: ['A different value per row, like LAG', "The same value for every row in that partition: the customer's very first order amount by date", 'Always NULL', 'The total of all their orders'],
          answerIndex: 1,
          explanation: 'FIRST_VALUE always returns the first row of the window by its ordering, not the row immediately before the current one.'
        },
        {
          id: 'sql-a-f-6',
          type: 'mcq',
          prompt: 'Why does LAST_VALUE often return the current row instead of the true last row, without an explicit frame clause?',
          options: ['LAST_VALUE is broken in SQLite', 'The default window frame only extends from the start of the partition up to the current row, so LAST_VALUE returns whatever the current row is', 'LAST_VALUE requires PARTITION BY to work at all', 'It only happens with PARTITION BY, never with plain ORDER BY'],
          answerIndex: 1,
          explanation: 'Fixing this requires explicitly widening the frame with RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING.'
        },
        {
          id: 'sql-a-f-7',
          type: 'fill-blank',
          prompt: '______(4) splits the rows in a window into 4 roughly equal-sized groups, numbered 1 through 4.',
          correctAnswers: ['ntile', 'NTILE'],
          explanation: 'NTILE is the standard way to calculate quartiles or any other N-way split, such as identifying the top-spending quarter of customers.'
        },
        {
          id: 'sql-a-f-8',
          type: 'mcq',
          prompt: 'What does INTERSECT return when combining two SELECT queries?',
          options: ['Every row from both queries, combined', 'Only rows that appear in both result sets', 'Only rows in the first query but not the second', 'An error, since INTERSECT is not standard SQL'],
          answerIndex: 1,
          explanation: 'INTERSECT keeps only rows present in both result sets, useful for "who appears on both lists" questions.'
        },
        {
          id: 'sql-a-f-9',
          type: 'mcq',
          prompt: 'A business wants to know which customers ordered in January but never returned in February. Which set operation answers this directly?',
          options: ['UNION', 'INTERSECT', 'EXCEPT (January results EXCEPT February results)', 'A CROSS JOIN'],
          answerIndex: 2,
          explanation: 'EXCEPT subtracts the second result set from the first, leaving customers unique to January — exactly the churn question.'
        },
        {
          id: 'sql-a-f-10',
          type: 'code',
          prompt: 'Write a query that finds every customer_id that placed an order in both January 2024 and February 2024, using INTERSECT.',
          dataset: 'quickbite',
          expectedKeywords: ['select', 'customer_id', 'from', 'orders', 'where', 'strftime', 'intersect'],
          explanation: "SELECT customer_id FROM orders WHERE strftime('%Y-%m', order_date) = '2024-01' INTERSECT SELECT customer_id FROM orders WHERE strftime('%Y-%m', order_date) = '2024-02'."
        },
        {
          id: 'sql-a-f-11',
          type: 'mcq',
          prompt: 'What does a CREATE VIEW statement actually store?',
          options: ['A frozen copy of the query\'s results at creation time', 'The query itself, re-run automatically every time the view is referenced', 'Nothing — CREATE VIEW has no real effect', 'A scheduled nightly refresh job'],
          answerIndex: 1,
          explanation: 'A view has no storage of its own; querying it re-runs the saved query against the live underlying tables.'
        },
        {
          id: 'sql-a-f-12',
          type: 'fill-blank',
          prompt: 'A view that pre-calculates and caches its results, trading instant freshness for speed, is called a ______ view (not supported directly by SQLite).',
          correctAnswers: ['materialized', 'MATERIALIZED'],
          explanation: 'Materialized views exist in databases like PostgreSQL and SQL Server; SQLite only supports plain views.'
        },
        {
          id: 'sql-a-f-13',
          type: 'mcq',
          prompt: 'Why might two UPDATE statements (subtract from A, add to B) be unsafe without a transaction?',
          options: ['UPDATE can never be used twice in a row', 'If something fails between the two statements, one change could take effect while the other never does, leaving inconsistent data', 'This is never actually a risk in practice', 'Transactions are only relevant to SELECT statements'],
          answerIndex: 1,
          explanation: 'Without a transaction, a crash or error between the two statements can leave the data in a half-updated, inconsistent state.'
        },
        {
          id: 'sql-a-f-14',
          type: 'fill-blank',
          prompt: '______ undoes every change made since BEGIN, as if none of it had happened.',
          correctAnswers: ['rollback', 'ROLLBACK'],
          explanation: 'ROLLBACK reverts all statements within the current transaction back to the state right before BEGIN.'
        },
        {
          id: 'sql-a-f-15',
          type: 'mcq',
          prompt: 'In ACID, what does "Atomicity" guarantee?',
          options: ['That a transaction runs instantly', 'That every statement in a transaction happens together, or none of them do', 'That data is automatically encrypted', 'That two transactions can never overlap in time'],
          answerIndex: 1,
          explanation: 'Atomicity is the "all or nothing" guarantee that makes a multi-step transfer safe even if something fails partway through.'
        },
        {
          id: 'sql-a-f-16',
          type: 'mcq',
          prompt: 'What does a CHECK constraint do?',
          options: ['It logs every change to a separate audit table', 'It rejects any INSERT or UPDATE that would violate a rule defined on the column, like price >= 0', 'It speeds up queries that filter on that column', 'It automatically corrects invalid values instead of rejecting them'],
          answerIndex: 1,
          explanation: 'A CHECK constraint stops the database from ever storing a value that breaks a rule you defined once, at table-creation time.'
        },
        {
          id: 'sql-a-f-17',
          type: 'mcq',
          prompt: 'What can a trigger do that a plain constraint cannot?',
          options: ['Nothing, they are identical features', 'Run arbitrary extra SQL automatically in response to an event, like writing to an audit log on every INSERT', 'Only triggers can be used with PRIMARY KEY columns', 'Triggers can only fire on SELECT statements'],
          answerIndex: 1,
          explanation: 'Constraints only validate or reject values; triggers can run real follow-up logic automatically whenever a specified event happens.'
        },
        {
          id: 'sql-a-f-18',
          type: 'code',
          prompt: 'Create a table called rating_demo with a CHECK constraint ensuring a "stars" column only accepts values between 1 and 5.',
          dataset: 'quickbite',
          expectedKeywords: ['create', 'table', 'rating_demo', 'stars', 'integer', 'check', 'between'],
          explanation: 'CREATE TABLE rating_demo (id INTEGER PRIMARY KEY, stars INTEGER CHECK (stars BETWEEN 1 AND 5)).'
        },
        {
          id: 'sql-a-f-19',
          type: 'mcq',
          prompt: 'Why might a restaurant\'s flexible attributes (tags, optional settings) be stored as a JSON column instead of several regular columns?',
          options: ['JSON columns are always faster than regular columns for every query', 'When attributes genuinely vary in number per row, forcing them into rigid tag_1/tag_2/tag_3 columns is wasteful and inflexible', 'SQL cannot store text any other way', 'It is required by the SQL standard for any text column'],
          answerIndex: 1,
          explanation: 'JSON columns are a pragmatic fit for genuinely sparse or variable-shaped data, not a replacement for well-used regular columns.'
        },
        {
          id: 'sql-a-f-20',
          type: 'fill-blank',
          prompt: "______(metadata, '$.delivery_radius_km') pulls a single named field out of a JSON column.",
          correctAnswers: ['json_extract', 'JSON_EXTRACT'],
          explanation: 'json_extract reaches into a JSON document using a path starting with $ (the root) and returns the specified field\'s value.'
        },
        {
          id: 'sql-a-f-21',
          type: 'code',
          prompt: "Using json_each, find every restaurant name where the metadata column's tags array contains 'spicy'.",
          dataset: 'quickbite',
          expectedKeywords: ['select', 'distinct', 'from', 'restaurants', 'json_each', 'as', 'where'],
          explanation: "SELECT DISTINCT r.name FROM restaurants AS r, json_each(r.metadata, '$.tags') AS tag WHERE tag.value = 'spicy'."
        },
        {
          id: 'sql-a-f-22',
          type: 'mcq',
          prompt: 'Given a composite index on (customer_id, status), which query benefits from it?',
          options: ['WHERE status = \'delivered\' alone', 'WHERE customer_id = 5, or WHERE customer_id = 5 AND status = \'delivered\' together', 'Neither query benefits at all', 'Only queries with no WHERE clause whatsoever'],
          answerIndex: 1,
          explanation: 'A composite index helps queries using its leading column(s); skipping the leading column (filtering on status alone) gets little benefit.'
        },
        {
          id: 'sql-a-f-23',
          type: 'mcq',
          prompt: 'What makes an index "covering" for a given query?',
          options: ['It covers every table in the database at once', 'It contains every column the query needs, for both filtering and selecting, so the database never has to read the actual table', 'It is simply the first index ever created', 'It automatically fills in missing values with defaults'],
          answerIndex: 1,
          explanation: 'EXPLAIN QUERY PLAN explicitly says "USING COVERING INDEX" when the index alone has everything the query needs.'
        },
        {
          id: 'sql-a-f-24',
          type: 'fill-blank',
          prompt: 'Every index speeds up matching reads, but slightly slows down every INSERT, UPDATE, and ______ on that table, since the index itself must stay up to date.',
          correctAnswers: ['delete', 'DELETE'],
          explanation: 'Indexing is a deliberate read/write tradeoff, not something to apply unconditionally to every column.'
        },
        {
          id: 'sql-a-f-25',
          type: 'mcq',
          prompt: 'What does "USE TEMP B-TREE FOR ORDER BY" in a query plan indicate?',
          options: ['The query failed to run', 'SQLite had to build a temporary sorted structure because no index already provided the rows in the requested order', 'The query used a covering index successfully', 'The table has too many columns to sort'],
          answerIndex: 1,
          explanation: 'An index on the ORDER BY column would let SQLite read rows already sorted, skipping this temporary structure entirely.'
        },
        {
          id: 'sql-a-f-26',
          type: 'mcq',
          prompt: 'A report query that ran fine for months suddenly takes 30 seconds. What is the fastest first diagnostic step?',
          options: ['Restart the database server immediately', 'Run EXPLAIN QUERY PLAN on the slow query to see exactly what it is doing before guessing at a fix', 'Delete older rows without investigating first', 'Rewrite the entire application from scratch'],
          answerIndex: 1,
          explanation: 'EXPLAIN QUERY PLAN reveals the actual execution strategy, turning a guessing game into a targeted fix.'
        },
        {
          id: 'sql-a-f-27',
          type: 'mcq',
          prompt: 'Why does WHERE UPPER(city) = \'MUMBAI\' typically prevent an index on city from being used?',
          options: ['UPPER() is invalid SQL syntax', 'An index is built on a column\'s actual stored values; wrapping the column in a function changes what needs to be matched, generally blocking direct index use', 'This pattern is always faster than a plain comparison', 'Indexes only work with lowercase text'],
          answerIndex: 1,
          explanation: 'The fix is comparing against a properly-cased literal instead, keeping the column itself bare in the WHERE clause.'
        },
        {
          id: 'sql-a-f-28',
          type: 'mcq',
          prompt: 'Why might a correlated subquery be rewritten as a JOIN + GROUP BY for better performance?',
          options: ['They are always identical in performance with no exceptions', 'The correlated version conceptually re-checks the condition once per outer row, while a JOIN + GROUP BY lets the optimizer consider the whole operation at once, which is frequently faster on larger tables', 'JOINs are always slower than subqueries', 'Correlated subqueries cannot be rewritten in any form'],
          answerIndex: 1,
          explanation: 'Both are correct SQL, but the JOIN + GROUP BY version frequently gives the optimizer more room to find an efficient plan.'
        },
        {
          id: 'sql-a-f-29',
          type: 'fill-blank',
          prompt: 'These four anti-patterns are well-documented tendencies, not absolute laws — the actual discipline is to use ______ ______ ______ before and after a rewrite to confirm it actually helped.',
          correctAnswers: ['explain query plan', 'EXPLAIN QUERY PLAN'],
          explanation: 'Measuring with EXPLAIN QUERY PLAN turns a guess into a verified improvement, rather than blindly applying every rewrite everywhere.'
        },
        {
          id: 'sql-a-f-30',
          type: 'mcq',
          prompt: 'In the "last item in stock" race condition, why can two customers both successfully order the same single last unit without proper locking?',
          options: ['This scenario can never actually happen in a real system', 'Both queries can check "is stock available?" and both see "yes" before either one actually commits a decrement, since nothing forced one to wait for the other', 'SQL always prevents this automatically with zero setup required', 'This only happens with non-relational databases'],
          answerIndex: 1,
          explanation: 'Without a lock forcing one transaction to wait, both can observe the same "stock available" state before either updates it.'
        },
        {
          id: 'sql-a-f-31',
          type: 'mcq',
          prompt: 'What is the difference between a shared lock and an exclusive lock?',
          options: ['They are the same mechanism with different names', 'A shared lock allows multiple simultaneous readers; an exclusive lock is needed to write and blocks other writers until released', 'Shared locks are only used when deleting rows', 'Exclusive locks allow unlimited simultaneous writers'],
          answerIndex: 1,
          explanation: 'Reading does not conflict with other reading, so shared locks coexist; writing requires exclusive access to avoid conflicting changes.'
        },
        {
          id: 'sql-a-f-32',
          type: 'mcq',
          prompt: 'What is a deadlock?',
          options: ['A query that returns zero rows', 'A situation where transaction A waits for a lock held by B, while B simultaneously waits for a lock held by A, so neither can proceed', 'A syntax error in a transaction', 'A transaction that intentionally never commits'],
          answerIndex: 1,
          explanation: 'Real databases detect deadlocks automatically and forcibly fail one transaction so the other can proceed, rather than letting both wait forever.'
        },
        {
          id: 'sql-a-f-33',
          type: 'fill-blank',
          prompt: 'A practical habit that avoids most real-world deadlocks: when updating multiple tables or rows in one transaction, always touch them in the same consistent ______, everywhere in the codebase.',
          correctAnswers: ['order', 'ORDER'],
          explanation: 'Most real deadlocks come from two different parts of an application locking the same resources in opposite order.'
        },
        {
          id: 'sql-a-f-34',
          type: 'mcq',
          prompt: 'What is the general tradeoff between stricter and looser isolation levels?',
          options: ['There is no tradeoff — strictest is always best with no downside', 'Stricter isolation means fewer surprising bugs but more transactions waiting on each other (or needing retries), which can reduce throughput under heavy load', 'Looser isolation is always faster with zero correctness cost', 'Isolation levels only change how data displays, not correctness'],
          answerIndex: 1,
          explanation: 'Every database faces this same fundamental tradeoff between consistency guarantees and concurrent throughput.'
        },
        {
          id: 'sql-a-f-35',
          type: 'code',
          prompt: 'Find every restaurant in restaurants whose rating is not null, ranked by rating using DENSE_RANK, highest first.',
          dataset: 'quickbite',
          expectedKeywords: ['select', 'name', 'rating', 'dense_rank', 'over', 'order', 'by', 'desc', 'from', 'restaurants', 'where', 'is', 'not', 'null'],
          explanation: "SELECT name, rating, DENSE_RANK() OVER (ORDER BY rating DESC) AS rnk FROM restaurants WHERE rating IS NOT NULL."
        }
      ]
    }
  }
}

export const getCourseQuiz = (courseSlug, track) => {
  return COURSE_QUIZZES[courseSlug]?.[track] || null
}
