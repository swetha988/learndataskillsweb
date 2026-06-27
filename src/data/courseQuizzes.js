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
  },
  python: {
    beginner: {
      title: 'Python Beginner Final Assessment',
      intro: 'Test your knowledge across all Python beginner modules — variables, conditionals, loops, lists & dictionaries, functions, files, and error handling. Several questions include a live, runnable Python playground.',
      questions: [
        {
          id: 'py-b-f-1',
          type: 'mcq',
          prompt: 'What does print("Hello") do?',
          options: ['Saves "Hello" to a file', 'Displays the text Hello in the output', 'Creates a variable named Hello', 'Deletes the word Hello'],
          answerIndex: 1,
          explanation: 'print() outputs whatever you pass it to the console/output area.'
        },
        {
          id: 'py-b-f-2',
          type: 'fill-blank',
          prompt: 'Fill in the blank: ____ = "Alice" creates a variable called name holding the text "Alice".',
          correctAnswers: ['name'],
          explanation: 'name = "Alice" — the variable name goes on the left of the equals sign.'
        },
        {
          id: 'py-b-f-3',
          type: 'code',
          prompt: 'Create a variable called age set to 25, and print a message like "I am 25 years old" using an f-string.',
          language: 'python',
          expectedKeywords: ['age', 'print', 'i', 'am', 'years', 'old'],
          explanation: 'age = 25; print(f"I am {age} years old").'
        },
        {
          id: 'py-b-f-4',
          type: 'mcq',
          prompt: 'What is the data type of the value 3.14 in Python?',
          options: ['int', 'float', 'str', 'bool'],
          answerIndex: 1,
          explanation: 'Numbers with a decimal point are floats; whole numbers without one are ints.'
        },
        {
          id: 'py-b-f-5',
          type: 'mcq',
          prompt: 'What does the // operator do in Python?',
          options: ['Starts a comment', 'Performs floor (integer) division, dropping any remainder', 'Divides and keeps the remainder', 'Raises a number to a power'],
          answerIndex: 1,
          explanation: '// performs division and rounds down to the nearest whole number, unlike / which keeps decimals.'
        },
        {
          id: 'py-b-f-6',
          type: 'code',
          prompt: 'Write code that converts the string "42" into an integer, adds 8 to it, and prints the result.',
          language: 'python',
          expectedKeywords: ['int', 'print'],
          explanation: 'print(int("42") + 8) — int() converts a numeric string into a usable integer.'
        },
        {
          id: 'py-b-f-7',
          type: 'fill-blank',
          prompt: 'Fill in the blank: the string method ____() converts text to all uppercase letters.',
          correctAnswers: ['upper'],
          explanation: '"hello".upper() returns "HELLO".'
        },
        {
          id: 'py-b-f-8',
          type: 'mcq',
          prompt: 'In an if/elif/else chain, what happens once one condition is found to be True?',
          options: ['Every remaining branch still runs', 'Python runs that branch and skips all the rest of the chain', 'Python throws an error', 'Nothing runs at all'],
          answerIndex: 1,
          explanation: 'Only the first matching branch executes; the rest of the chain is skipped.'
        },
        {
          id: 'py-b-f-9',
          type: 'code',
          prompt: 'Write code that checks a variable called score (set it to 85), and prints "Pass" if score is 60 or above, otherwise prints "Fail".',
          language: 'python',
          expectedKeywords: ['score', 'if', 'print', 'pass', 'else', 'print', 'fail'],
          explanation: 'score = 85\\nif score >= 60:\\n    print("Pass")\\nelse:\\n    print("Fail")'
        },
        {
          id: 'py-b-f-10',
          type: 'mcq',
          prompt: 'What is the difference between and and or in a condition?',
          options: ['They mean the same thing', 'and requires both sides to be True; or requires at least one side to be True', 'and is for numbers, or is for text', 'They are not valid Python keywords'],
          answerIndex: 1,
          explanation: 'and is true only when both conditions are true; or is true when at least one is true.'
        },
        {
          id: 'py-b-f-11',
          type: 'code',
          prompt: 'Write a for loop that prints each number from 1 to 5 (inclusive) using range().',
          language: 'python',
          expectedKeywords: ['for', 'in', 'range', 'print'],
          explanation: 'for i in range(1, 6):\\n    print(i) — range(1, 6) produces 1 through 5.'
        },
        {
          id: 'py-b-f-12',
          type: 'mcq',
          prompt: 'What does the break statement do inside a loop?',
          options: ['Skips to the next iteration', 'Immediately exits the loop entirely', 'Pauses the program for one second', 'Restarts the loop from the beginning'],
          answerIndex: 1,
          explanation: 'break stops the loop immediately, even if there would be more iterations left.'
        },
        {
          id: 'py-b-f-13',
          type: 'mcq',
          prompt: 'What does the continue statement do inside a loop?',
          options: ['Stops the loop completely', 'Skips the rest of the current iteration and moves to the next one', 'Deletes the loop variable', 'Throws an error'],
          answerIndex: 1,
          explanation: 'continue jumps straight to the next iteration, skipping any remaining code in the current one.'
        },
        {
          id: 'py-b-f-14',
          type: 'code',
          prompt: 'Write a while loop that prints "Counting" while a variable count (start at 0) is less than 3, incrementing count by 1 each time.',
          language: 'python',
          expectedKeywords: ['count', 'while', 'print', 'counting', 'count'],
          explanation: 'count = 0\\nwhile count < 3:\\n    print("Counting")\\n    count += 1'
        },
        {
          id: 'py-b-f-15',
          type: 'mcq',
          prompt: 'How do you access the first item in a list called fruits?',
          options: ['fruits.first()', 'fruits[1]', 'fruits[0]', 'fruits(0)'],
          answerIndex: 2,
          explanation: 'Python lists are zero-indexed, so the first item is at index 0.'
        },
        {
          id: 'py-b-f-16',
          type: 'mcq',
          prompt: 'What is the key difference between a list and a dictionary?',
          options: ['Lists store items by position (index); dictionaries store items by key', 'Dictionaries cannot store text', 'Lists can only hold numbers', 'They are interchangeable with no real difference'],
          answerIndex: 0,
          explanation: 'A list is an ordered sequence accessed by numeric index; a dictionary maps keys to values.'
        },
        {
          id: 'py-b-f-17',
          type: 'code',
          prompt: 'Create a list called colors containing "red", "green", "blue". Use .append() to add "yellow", then print the list.',
          language: 'python',
          expectedKeywords: ['colors', 'append', 'yellow', 'print'],
          explanation: 'colors = ["red", "green", "blue"]\\ncolors.append("yellow")\\nprint(colors)'
        },
        {
          id: 'py-b-f-18',
          type: 'code',
          prompt: 'Create a dictionary called person with keys "name" set to "Sam" and "age" set to 30. Print the value of person["name"].',
          language: 'python',
          expectedKeywords: ['person', 'name', 'sam', 'age', 'print'],
          explanation: 'person = {"name": "Sam", "age": 30}\\nprint(person["name"])'
        },
        {
          id: 'py-b-f-19',
          type: 'fill-blank',
          prompt: 'Fill in the blank: a for loop like for fruit ____ fruits: lets you iterate over each item in a list.',
          correctAnswers: ['in'],
          explanation: 'for fruit in fruits: loops over every element in the fruits list.'
        },
        {
          id: 'py-b-f-20',
          type: 'mcq',
          prompt: 'Why would you write a function instead of repeating the same code multiple times?',
          options: ['Functions run faster than any other code', 'Functions let you reuse logic by name instead of copy-pasting it everywhere', 'Python requires every program to have at least one function', 'Functions are only useful for printing text'],
          answerIndex: 1,
          explanation: 'Functions package reusable logic behind a name, making code shorter, clearer, and easier to fix in one place.'
        },
        {
          id: 'py-b-f-21',
          type: 'code',
          prompt: 'Write a function called square that takes a number n and returns n squared. Call it with 5 and print the result.',
          language: 'python',
          expectedKeywords: ['def', 'square', 'return', 'print'],
          explanation: 'def square(n):\\n    return n ** 2\\nprint(square(5))'
        },
        {
          id: 'py-b-f-22',
          type: 'mcq',
          prompt: 'What does a return statement do inside a function?',
          options: ['It prints a value to the screen', 'It sends a value back to wherever the function was called, and ends the function', 'It creates a new variable inside the function only', 'It pauses the function temporarily'],
          answerIndex: 1,
          explanation: 'return hands a result back to the caller and immediately exits the function.'
        },
        {
          id: 'py-b-f-23',
          type: 'mcq',
          prompt: 'What is a default parameter value in a function definition like def greet(name="friend"):?',
          options: ['A value that must always be passed in', 'A fallback value used automatically if the caller does not provide one', 'An error that occurs if no argument is given', 'A value that can never be changed'],
          answerIndex: 1,
          explanation: 'If the caller omits the argument, the default value is used instead.'
        },
        {
          id: 'py-b-f-24',
          type: 'code',
          prompt: 'Write code using a with statement to open a file called "notes.txt" for writing and write the line "Hello file" into it.',
          language: 'python',
          expectedKeywords: ['with', 'open', 'notes', 'txt', 'as', 'write', 'hello', 'file'],
          explanation: 'with open("notes.txt", "w") as f:\\n    f.write("Hello file")'
        },
        {
          id: 'py-b-f-25',
          type: 'mcq',
          prompt: 'Why is using a with statement to open files preferred over open() alone?',
          options: ['It is the only way Python allows opening files', 'It automatically closes the file for you, even if an error happens inside the block', 'It makes the file open faster', 'It prevents the file from ever being edited again'],
          answerIndex: 1,
          explanation: 'with handles closing the file automatically once the block finishes, preventing resource leaks.'
        },
        {
          id: 'py-b-f-26',
          type: 'code',
          prompt: 'Write code using a with statement that opens "notes.txt" for reading and prints its full contents.',
          language: 'python',
          expectedKeywords: ['with', 'open', 'notes', 'txt', 'as', 'read', 'print'],
          explanation: 'with open("notes.txt") as f:\\n    print(f.read())'
        },
        {
          id: 'py-b-f-27',
          type: 'mcq',
          prompt: 'What is the purpose of a try/except block?',
          options: ['It speeds up your code', 'It catches errors at runtime so your program can handle them gracefully instead of crashing', 'It is required before every function definition', 'It only works with file operations'],
          answerIndex: 1,
          explanation: 'try/except lets you catch and respond to errors instead of letting the whole program crash.'
        },
        {
          id: 'py-b-f-28',
          type: 'code',
          prompt: 'Write code that tries to convert the string "abc" into an integer inside a try block, and prints "Invalid number" if a ValueError occurs.',
          language: 'python',
          expectedKeywords: ['try', 'int', 'except', 'valueerror', 'print', 'invalid', 'number'],
          explanation: 'try:\\n    int("abc")\\nexcept ValueError:\\n    print("Invalid number")'
        },
        {
          id: 'py-b-f-29',
          type: 'mcq',
          prompt: 'What data type does a Python set hold, and what is its key feature?',
          options: ['An ordered collection that allows duplicates', 'An unordered collection of unique values — duplicates are automatically removed', 'A fixed-size list that cannot change', 'A key-value mapping like a dictionary'],
          answerIndex: 1,
          explanation: 'A set automatically discards duplicate values and does not preserve insertion order.'
        },
        {
          id: 'py-b-f-30',
          type: 'fill-blank',
          prompt: 'Fill in the blank: a tuple is created with parentheses, like point = (3, 4), and unlike a list, it is ____ once created.',
          correctAnswers: ['immutable', 'unchangeable', 'fixed'],
          explanation: 'Tuples cannot be modified after creation — no appending, removing, or reassigning elements.'
        },
        {
          id: 'py-b-f-31',
          type: 'code',
          prompt: 'Write a list comprehension that creates a list of the squares of numbers 1 through 5, and print it.',
          language: 'python',
          expectedKeywords: ['for', 'in', 'range', 'print'],
          explanation: 'squares = [n ** 2 for n in range(1, 6)]\\nprint(squares)'
        },
        {
          id: 'py-b-f-32',
          type: 'mcq',
          prompt: 'What does len(my_list) return?',
          options: ['The largest value in the list', 'The number of items in the list', 'The data type of the list', 'The first item in the list'],
          answerIndex: 1,
          explanation: 'len() returns a count of how many elements a list (or string, dict, etc.) contains.'
        },
        {
          id: 'py-b-f-33',
          type: 'code',
          prompt: 'Write a function called is_even that takes a number n and returns True if it is even, False otherwise. Call it with 7 and print the result.',
          language: 'python',
          expectedKeywords: ['def', 'is_even', 'return', 'print'],
          explanation: 'def is_even(n):\\n    return n % 2 == 0\\nprint(is_even(7))'
        }
      ]
    },
    intermediate: {
      title: 'Python Intermediate Final Assessment',
      intro: 'Test your knowledge across all 11 Python intermediate modules — pandas, NumPy, merging data, matplotlib, APIs, web scraping, Jupyter notebooks, and virtual environments. Several questions include a live, runnable Python playground.',
      questions: [
        {
          id: 'py-i-f-1',
          type: 'mcq',
          prompt: 'What is a pandas DataFrame?',
          options: ['A single column of values', "pandas' table structure — rows and columns, like an Excel sheet or SQL table, that you can filter, sort, and group in code", 'A type of chart', 'A built-in Python data type, available without importing anything'],
          answerIndex: 1,
          explanation: 'A DataFrame is the core pandas object representing a full table of data, with powerful row-and-column operations built in.'
        },
        {
          id: 'py-i-f-2',
          type: 'mcq',
          prompt: 'What does pd.read_csv() do?',
          options: ['Deletes a CSV file', 'Reads an entire CSV file (or CSV-like text) into a DataFrame in one line', 'Converts a DataFrame into a chart', 'Creates a brand new, empty file'],
          answerIndex: 1,
          explanation: 'read_csv() is the standard way to load real-world tabular data into pandas, handling the row/column parsing for you.'
        },
        {
          id: 'py-i-f-3',
          type: 'code',
          prompt: 'Using io.StringIO, load the CSV text below into a DataFrame called df and print its shape.',
          language: 'python',
          expectedKeywords: ['import', 'pandas', 'as', 'pd', 'import', 'io', 'read_csv', 'stringio', 'print', 'shape'],
          explanation: 'import pandas as pd; import io; df = pd.read_csv(io.StringIO(csv_text)); print(df.shape).'
        },
        {
          id: 'py-i-f-4',
          type: 'mcq',
          prompt: 'What does df[df["unit_price"] > 1000] return?',
          options: ['Every row, unfiltered', 'Only the rows where unit_price is greater than 1000', 'An error, since this is invalid syntax', 'Only the unit_price column'],
          answerIndex: 1,
          explanation: 'df["unit_price"] > 1000 produces a column of True/False values; wrapping it in df[...] keeps only the True rows — the pandas equivalent of SQL\'s WHERE.'
        },
        {
          id: 'py-i-f-5',
          type: 'mcq',
          prompt: 'Why does df[df["category"] == "Electronics" & df["unit_price"] > 1000] usually cause an error?',
          options: ['& is never valid in pandas', 'Each condition needs its own parentheses when combined with & or |, e.g. (condition1) & (condition2)', 'You cannot combine two conditions at all in pandas', 'category and unit_price cannot both be used in one filter'],
          answerIndex: 1,
          explanation: 'Without parentheses around each condition, Python tries to evaluate operators in the wrong order, producing a confusing error.'
        },
        {
          id: 'py-i-f-6',
          type: 'fill-blank',
          prompt: 'df["category"].______(["Electronics", "Apparel"]) checks whether each value matches anything in a given list — the pandas equivalent of SQL\'s IN.',
          correctAnswers: ['isin', 'ISIN'],
          explanation: '.isin() is the standard way to filter a column against a list of acceptable values.'
        },
        {
          id: 'py-i-f-7',
          type: 'code',
          prompt: 'Given a DataFrame df with a unit_price column, write code to filter to rows where unit_price > 1000, then sort the result by unit_price descending.',
          language: 'python',
          expectedKeywords: ['sort_values', 'ascending', 'false'],
          explanation: 'df[df["unit_price"] > 1000].sort_values("unit_price", ascending=False).'
        },
        {
          id: 'py-i-f-8',
          type: 'mcq',
          prompt: 'What does df.isnull().sum() show you?',
          options: ['The total row count', 'How many missing (null) values exist in each column', 'The sum of every numeric column', 'Whether the DataFrame is empty'],
          answerIndex: 1,
          explanation: 'isnull() flags every missing cell as True; .sum() totals those per column, giving a missing-value count for each one.'
        },
        {
          id: 'py-i-f-9',
          type: 'mcq',
          prompt: 'What is the key difference between df.dropna() and df.fillna(value)?',
          options: ['They do the same thing', 'dropna() removes rows with missing values; fillna() replaces missing values with something specific instead of removing the row', 'fillna() only works on text columns', 'dropna() can only be used once per DataFrame'],
          answerIndex: 1,
          explanation: 'Dropping discards the whole row; filling keeps the row but substitutes a sensible default for the gap.'
        },
        {
          id: 'py-i-f-10',
          type: 'fill-blank',
          prompt: 'df["product"].______.strip() applies a string method to every value in an entire column at once, without writing a loop.',
          correctAnswers: ['str', 'STR'],
          explanation: 'The .str accessor unlocks ordinary Python string methods across a whole column simultaneously.'
        },
        {
          id: 'py-i-f-11',
          type: 'code',
          prompt: 'Given a DataFrame df with a "product" column containing messy text, write code to strip whitespace and convert it to title case.',
          language: 'python',
          expectedKeywords: ['str', 'strip', 'str', 'title'],
          explanation: 'df["product"] = df["product"].str.strip().str.title().'
        },
        {
          id: 'py-i-f-12',
          type: 'mcq',
          prompt: 'What does df.groupby("category")["total"].sum() calculate?',
          options: ['The overall total across the whole DataFrame', 'The total of the "total" column, calculated separately for each distinct category', 'The number of categories', 'The average of every column'],
          answerIndex: 1,
          explanation: 'groupby buckets rows by category, and .sum() totals within each bucket separately — the same idea as SQL\'s GROUP BY.'
        },
        {
          id: 'py-i-f-13',
          type: 'fill-blank',
          prompt: 'In df.pivot_table(..., fill_value=0), what does fill_value=0 prevent?',
          correctAnswers: ['nan', 'NaN'],
          explanation: 'Without fill_value=0, any region/category combination with no data shows up as NaN, which looks like an error rather than a genuine zero.'
        },
        {
          id: 'py-i-f-14',
          type: 'code',
          prompt: 'Given a DataFrame df with "category" and "total" columns, write code to print total revenue per category, sorted highest to lowest.',
          language: 'python',
          expectedKeywords: ['groupby', 'category', 'sum', 'sort_values', 'ascending', 'false'],
          explanation: 'df.groupby("category")["total"].sum().sort_values(ascending=False).'
        },
        {
          id: 'py-i-f-15',
          type: 'mcq',
          prompt: 'What does prices * 1.18 do if prices is a NumPy array?',
          options: ['Raises an error', 'Multiplies every single element in the array by 1.18 simultaneously, with no loop required', 'Only multiplies the first element', 'Replaces the array with the number 1.18'],
          answerIndex: 1,
          explanation: 'This is a vectorised operation — the calculation applies to the entire array at once, which is both shorter to write and far faster than a manual loop.'
        },
        {
          id: 'py-i-f-16',
          type: 'mcq',
          prompt: 'What does array.std() calculate?',
          options: ['The sum of all values', 'The standard deviation — how spread out the values are around the average', 'The number of elements', 'The largest value'],
          answerIndex: 1,
          explanation: 'Standard deviation measures spread: small means values cluster near the mean, large means they are widely scattered.'
        },
        {
          id: 'py-i-f-17',
          type: 'code',
          prompt: 'Given a NumPy array called totals, write code to print its mean and standard deviation.',
          language: 'python',
          expectedKeywords: ['print', 'totals', 'mean', 'std'],
          explanation: 'print(totals.mean()); print(totals.std()).'
        },
        {
          id: 'py-i-f-18',
          type: 'mcq',
          prompt: 'What does pd.merge(customers, orders, on="customer_id") do by default?',
          options: ['Stacks the two tables on top of each other', 'Combines the tables sideways, matching rows by customer_id — behaving like an INNER JOIN by default', 'Deletes any row that does not match', 'Always keeps every row from both tables regardless of match'],
          answerIndex: 1,
          explanation: 'merge() with no how= argument defaults to an inner join, keeping only rows with a match in both tables.'
        },
        {
          id: 'py-i-f-19',
          type: 'mcq',
          prompt: 'What does how="left" do in a pandas merge?',
          options: ['Keeps every row from the first table, filling NaN where there is no match on the right — the same idea as SQL\'s LEFT JOIN', 'Only keeps matching rows', 'Reverses the column order', 'Deletes the left table'],
          answerIndex: 0,
          explanation: 'how="left" preserves every row from the first table passed to merge(), even when there is no match in the second table.'
        },
        {
          id: 'py-i-f-20',
          type: 'code',
          prompt: 'Merge customers and orders on "customer_id", keeping every customer even if they have no matching order.',
          language: 'python',
          expectedKeywords: ['merge', 'customers', 'orders', 'on', 'how', 'left'],
          explanation: 'pd.merge(customers, orders, on="customer_id", how="left").'
        },
        {
          id: 'py-i-f-21',
          type: 'mcq',
          prompt: 'What do fig and ax typically represent in fig, ax = plt.subplots()?',
          options: ['fig is the data, ax is the title', 'fig is the overall chart canvas, ax is the actual plotting area where you draw bars, lines, or points', 'They refer to the same object', 'fig is required only for pie charts'],
          answerIndex: 1,
          explanation: 'fig represents the whole figure; ax is the specific axes you actually plot onto.'
        },
        {
          id: 'py-i-f-22',
          type: 'mcq',
          prompt: 'Which chart type is best for comparing a value across several distinct categories?',
          options: ['Pie chart', 'Bar chart', 'A scatter plot only', 'None of these'],
          answerIndex: 1,
          explanation: 'Bar charts are the clearest way to compare values across categories, the same guidance from this platform\'s Excel course.'
        },
        {
          id: 'py-i-f-23',
          type: 'code',
          prompt: 'Given lists categories and totals, write code to build a bar chart and display it using show_plot().',
          language: 'python',
          expectedKeywords: ['plt', 'subplots', 'bar', 'show_plot'],
          explanation: 'fig, ax = plt.subplots(); ax.bar(categories, totals); show_plot().'
        },
        {
          id: 'py-i-f-24',
          type: 'mcq',
          prompt: 'Why does JSON feel natural to work with in Python immediately after fetching it?',
          options: ['JSON is a Python-only format', "JSON's structure (key-value pairs, lists) closely mirrors Python dictionaries and lists", 'JSON cannot contain numbers', 'It does not — JSON requires heavy conversion first'],
          answerIndex: 1,
          explanation: 'A JSON object becomes a Python dictionary and a JSON array becomes a list almost directly, which is why parsed JSON feels immediately usable.'
        },
        {
          id: 'py-i-f-25',
          type: 'mcq',
          prompt: 'Why does fetching data from an API typically require await in this platform\'s playground?',
          options: ['await has no real effect', 'A network request takes time, so await lets Python pause at that point without freezing everything else, resuming once the response arrives', 'await converts the response into a DataFrame automatically', 'await is required before every print statement'],
          answerIndex: 1,
          explanation: 'Network requests are inherently slower than local code, which is why fetching is asynchronous — await is how you wait for the result correctly.'
        },
        {
          id: 'py-i-f-26',
          type: 'code',
          prompt: 'Using pyodide.http.pyfetch, write code to fetch JSON from a url variable and store the parsed result in a variable called data.',
          language: 'python',
          expectedKeywords: ['await', 'pyodide', 'http', 'pyfetch', 'response', 'json'],
          explanation: 'response = await pyodide.http.pyfetch(url); data = await response.json().'
        },
        {
          id: 'py-i-f-27',
          type: 'mcq',
          prompt: 'What does BeautifulSoup(html, "html.parser") do?',
          options: ['Sends a network request to fetch a web page', 'Parses a string of HTML text into a structure you can search through with find() and find_all()', 'Deletes all HTML tags', 'Converts HTML directly into a DataFrame automatically'],
          answerIndex: 1,
          explanation: 'BeautifulSoup parses raw HTML text into a navigable object; fetching the HTML itself is a separate step.'
        },
        {
          id: 'py-i-f-28',
          type: 'mcq',
          prompt: 'What is the difference between soup.find() and soup.find_all()?',
          options: ['They are identical', 'find() returns only the first matching tag; find_all() returns every matching tag as a list', 'find_all() only works on numbers', 'find() searches the whole internet'],
          answerIndex: 1,
          explanation: 'find() stops at the first match; find_all() collects every match, which is what you need to loop through multiple items.'
        },
        {
          id: 'py-i-f-29',
          type: 'code',
          prompt: 'Given a BeautifulSoup object called soup, write code to find every "div" tag with class "product" and print how many were found.',
          language: 'python',
          expectedKeywords: ['find_all', 'div', 'class_', 'product', 'print', 'len'],
          explanation: 'products = soup.find_all("div", class_="product"); print(len(products)).'
        },
        {
          id: 'py-i-f-30',
          type: 'mcq',
          prompt: 'What are the two main types of cells in a Jupyter notebook?',
          options: ['Input cells and output cells', 'Code cells (which run Python) and markdown cells (which hold formatted text)', 'Public cells and private cells', 'Fast cells and slow cells'],
          answerIndex: 1,
          explanation: 'Code cells execute Python and show results below; markdown cells hold formatted explanatory text alongside the code.'
        },
        {
          id: 'py-i-f-31',
          type: 'mcq',
          prompt: 'When is a regular .py script generally a better choice than a notebook?',
          options: ['Scripts are never a better choice', 'Once the logic is finalised and needs to run reliably end-to-end without manual cell-clicking, like an automated nightly report', 'Scripts cannot import pandas', 'Notebooks are always superior for every use case'],
          answerIndex: 1,
          explanation: 'Notebooks shine during exploration; scripts shine once you need reliable, unattended execution.'
        },
        {
          id: 'py-i-f-32',
          type: 'mcq',
          prompt: 'What problem does a virtual environment solve?',
          options: ['It makes Python code run faster', 'It prevents different projects on the same computer from conflicting over different required versions of the same package', 'It automatically writes your code', 'It replaces the need for pip'],
          answerIndex: 1,
          explanation: 'Without isolation, installing a package version for one project can silently break a different project needing an older version of the same package.'
        },
        {
          id: 'py-i-f-33',
          type: 'fill-blank',
          prompt: 'pip freeze > ______.txt saves the exact list of installed packages so someone else can recreate your setup with pip install -r.',
          correctAnswers: ['requirements', 'REQUIREMENTS'],
          explanation: 'requirements.txt is the standard, shareable record of exactly what a project needs installed.'
        }
      ]
    },
    advanced: {
      title: 'Python Advanced Final Assessment',
      intro: 'Test your knowledge across all 11 Python advanced modules — classes, inheritance, decorators, generators, context managers, async programming, performance profiling, type hints, testing with pytest, and packaging. Several questions include a live, runnable Python playground.',
      questions: [
        {
          id: 'py-a-f-1',
          type: 'mcq',
          prompt: 'What does __init__ do in a class?',
          options: ['It deletes the object when no longer needed', 'It runs automatically every time a new object is created, setting up its initial attributes', 'It must be called manually every time you use the object', 'It only runs once no matter how many objects you create'],
          answerIndex: 1,
          explanation: '__init__ is the automatic setup step for every new instance, filling in attributes based on what was passed in.'
        },
        {
          id: 'py-a-f-2',
          type: 'mcq',
          prompt: 'What is the difference between a class and an instance?',
          options: ['No real difference', 'A class is the blueprint, written once; an instance is one actual object built from that blueprint, with its own values', 'An instance is shared across the whole program', 'A class can only ever produce one instance'],
          answerIndex: 1,
          explanation: 'One class can produce many separate instances, each with independent attribute values.'
        },
        {
          id: 'py-a-f-3',
          type: 'code',
          prompt: 'Write a class called Item with an __init__ that takes name and price, and a method total_cost(quantity) that returns price times quantity.',
          language: 'python',
          expectedKeywords: ['class', 'item', 'def', '__init__', 'self', 'def', 'total_cost', 'self', 'return'],
          explanation: 'class Item:\\n    def __init__(self, name, price):\\n        self.name = name\\n        self.price = price\\n    def total_cost(self, quantity):\\n        return self.price * quantity'
        },
        {
          id: 'py-a-f-4',
          type: 'mcq',
          prompt: 'What does class PremiumCustomer(Customer): mean?',
          options: ['PremiumCustomer and Customer are unrelated', 'PremiumCustomer inherits from Customer, automatically receiving everything Customer already defines', 'Customer inherits from PremiumCustomer', 'This creates two identical, separate classes'],
          answerIndex: 1,
          explanation: 'Writing the parent class name in parentheses sets up inheritance — the new class gets everything the parent already has.'
        },
        {
          id: 'py-a-f-5',
          type: 'mcq',
          prompt: 'What is the general rule of thumb for choosing between inheritance and composition?',
          options: ['Always use inheritance', 'Prefer composition unless inheritance clearly models a genuine "is a" relationship', 'Always use composition, never inheritance', 'The choice has no real consequences'],
          answerIndex: 1,
          explanation: '"Favour composition over inheritance" exists because inheritance used where it does not genuinely fit produces confusing, hard-to-change code.'
        },
        {
          id: 'py-a-f-6',
          type: 'fill-blank',
          prompt: 'Inside a subclass\'s __init__, ______().__init__(...) calls the parent class\'s own setup code, so you do not have to retype it.',
          correctAnswers: ['super', 'SUPER'],
          explanation: 'super().__init__(...) reuses the parent\'s setup logic, letting the subclass only add what is new.'
        },
        {
          id: 'py-a-f-7',
          type: 'mcq',
          prompt: 'What does printing an object show by default, without a custom __repr__?',
          options: ['A readable summary of attributes', 'Just its memory address, like <__main__.Customer object at 0x...>', 'An error', 'Nothing'],
          answerIndex: 1,
          explanation: 'Without a custom __repr__, Python falls back to an unhelpful default showing only the memory address.'
        },
        {
          id: 'py-a-f-8',
          type: 'mcq',
          prompt: 'Why might two separately-created objects with identical attribute values compare as not equal using ==, without a custom __eq__?',
          options: ['This never happens', 'Python compares objects by identity by default (are they the same object in memory), not by their actual data', 'Python cannot compare objects at all', '== always returns True for same-class objects'],
          answerIndex: 1,
          explanation: 'Without __eq__, == checks identity, not data equality — rarely what you actually mean for data-holding objects.'
        },
        {
          id: 'py-a-f-9',
          type: 'code',
          prompt: 'Add a __repr__ to the Point class below that returns something like Point(x=1, y=2).',
          language: 'python',
          expectedKeywords: ['def', '__repr__', 'self', 'return'],
          explanation: 'def __repr__(self):\\n    return f"Point(x={self.x}, y={self.y})"'
        },
        {
          id: 'py-a-f-10',
          type: 'mcq',
          prompt: 'What does @time_it above a function definition actually do?',
          options: ['It is just a comment with no effect', 'It is equivalent to writing my_function = time_it(my_function) — wrapping the original function and replacing it with the wrapped version', 'It deletes the function after one use', 'It only works on functions with zero arguments'],
          answerIndex: 1,
          explanation: 'The @decorator syntax passes the function into the decorator and reassigns the name to whatever the decorator returns.'
        },
        {
          id: 'py-a-f-11',
          type: 'mcq',
          prompt: 'Why does a decorator\'s wrapper function typically accept *args, **kwargs?',
          options: ['They are required keywords with no purpose', 'So the wrapper can accept any combination of arguments and pass them through to the original function, regardless of its specific signature', 'They limit the function to exactly two arguments', 'They only work with decorators, nowhere else'],
          answerIndex: 1,
          explanation: 'A decorator usually does not know what arguments the wrapped function needs, so *args/**kwargs forward anything through untouched.'
        },
        {
          id: 'py-a-f-12',
          type: 'code',
          prompt: 'Write a decorator called log_call that prints "Calling now" before running the function it wraps, then apply it to a function add(a, b).',
          language: 'python',
          expectedKeywords: ['def', 'log_call', 'func', 'def', 'wrapper', 'args', 'kwargs', 'return', 'wrapper'],
          explanation: 'def log_call(func):\\n    def wrapper(*args, **kwargs):\\n        print("Calling now")\\n        return func(*args, **kwargs)\\n    return wrapper'
        },
        {
          id: 'py-a-f-13',
          type: 'mcq',
          prompt: 'What turns a normal function into a generator function?',
          options: ['Adding a return statement', 'Using yield anywhere inside the function body', 'Naming it starting with gen_', 'Adding type hints'],
          answerIndex: 1,
          explanation: 'The presence of yield anywhere in a function makes calling it return a generator object instead of running the code immediately.'
        },
        {
          id: 'py-a-f-14',
          type: 'mcq',
          prompt: 'Why does a generator typically use far less memory than building a full list, for the same data?',
          options: ['Generators store data more compactly in the same way', 'A generator produces one value at a time, on demand, never holding the entire collection in memory simultaneously', 'Generators can only hold numbers', 'No real memory difference exists'],
          answerIndex: 1,
          explanation: 'A generator only needs to remember where it is up to, not the full set of results, which keeps its memory footprint tiny.'
        },
        {
          id: 'py-a-f-15',
          type: 'code',
          prompt: 'Write a generator function called evens that yields only the even numbers from a list called numbers.',
          language: 'python',
          expectedKeywords: ['def', 'evens', 'for', 'in', 'if', 'yield'],
          explanation: 'def evens(numbers):\\n    for n in numbers:\\n        if n % 2 == 0:\\n            yield n'
        },
        {
          id: 'py-a-f-16',
          type: 'mcq',
          prompt: 'What guarantee does with open("file.txt") as f: give you, that a plain f = open("file.txt") does not?',
          options: ['It opens the file faster', 'It guarantees the file gets closed automatically when the block ends, even if an error happens inside it', 'It prevents the file from ever being edited', 'No real difference exists'],
          answerIndex: 1,
          explanation: 'A context manager\'s cleanup step (closing the file) runs no matter how the block ends, including via an exception.'
        },
        {
          id: 'py-a-f-17',
          type: 'mcq',
          prompt: 'In a @contextmanager-decorated generator function, what does the code before yield correspond to?',
          options: ['Nothing, it never runs', 'The setup step, equivalent to __enter__', 'The cleanup step, equivalent to __exit__', 'Code that only runs on error'],
          answerIndex: 1,
          explanation: 'Code before yield runs at the start of the with block (setup); code after yield runs at the end (cleanup).'
        },
        {
          id: 'py-a-f-18',
          type: 'mcq',
          prompt: 'What does the await keyword actually do inside an async function?',
          options: ['Permanently stops the program', 'It pauses at that point and lets other code run while waiting, instead of blocking everything until the awaited operation finishes', 'It has no real effect', 'It only works inside a for loop'],
          answerIndex: 1,
          explanation: 'await is where a coroutine can pause without blocking the whole program, letting other pending work make progress during the wait.'
        },
        {
          id: 'py-a-f-19',
          type: 'mcq',
          prompt: 'For what kind of work does async programming actually provide a speed benefit?',
          options: ['Heavy CPU-bound number-crunching with no waiting involved', 'I/O-bound work — waiting on a network response, a file, or a database — where the waiting itself does not need the CPU', 'Any code at all, with no exceptions', 'Only code that prints to the screen'],
          answerIndex: 1,
          explanation: 'Async fills idle waiting time with other useful work. Pure CPU-bound work has no idle waiting time to fill, so it gets no benefit.'
        },
        {
          id: 'py-a-f-20',
          type: 'code',
          prompt: 'Write an async function called main that uses asyncio.gather to run two coroutines, task_a() and task_b(), concurrently and prints their results.',
          language: 'python',
          expectedKeywords: ['async', 'def', 'main', 'await', 'asyncio', 'gather', 'print'],
          explanation: 'async def main():\\n    results = await asyncio.gather(task_a(), task_b())\\n    print(results)'
        },
        {
          id: 'py-a-f-21',
          type: 'mcq',
          prompt: 'What is timeit best suited for?',
          options: ['Finding which function inside a large program is slow', 'Comparing the speed of two small code snippets directly against each other, run many times to smooth out noise', 'Writing automated tests', 'Adding type hints'],
          answerIndex: 1,
          explanation: 'timeit repeats a snippet many times for a reliable timing comparison, ideal for "which approach is faster?" questions.'
        },
        {
          id: 'py-a-f-22',
          type: 'mcq',
          prompt: 'What does cProfile tell you that timeit does not?',
          options: ['Nothing, they do the same job', 'Inside an entire function, which specific function calls are actually consuming the most time', 'Whether your code has syntax errors', 'How to automatically fix slow code'],
          answerIndex: 1,
          explanation: 'cProfile breaks down time spent across every function call, helping pinpoint the real bottleneck rather than just timing the whole thing.'
        },
        {
          id: 'py-a-f-23',
          type: 'code',
          prompt: 'Using cProfile.Profile(), profile a call to a function called process_data() and print the stats.',
          language: 'python',
          expectedKeywords: ['cprofile', 'profile', 'enable', 'process_data', 'disable', 'print_stats'],
          explanation: 'profiler = cProfile.Profile()\\nprofiler.enable()\\nprocess_data()\\nprofiler.disable()\\nprofiler.print_stats()'
        },
        {
          id: 'py-a-f-24',
          type: 'mcq',
          prompt: 'Does Python enforce type hints at runtime by stopping a function from running with the "wrong" type?',
          options: ['Yes, always', 'No — type hints are documentation with structure; Python still runs the code regardless, and mismatches are caught by a separate tool', 'Only for built-in types', 'Only inside classes'],
          answerIndex: 1,
          explanation: 'Type hints by themselves do not change runtime behaviour — a separate static type checker like mypy is what actually enforces them.'
        },
        {
          id: 'py-a-f-25',
          type: 'mcq',
          prompt: 'What does Optional[Dict] mean as a type hint?',
          options: ['A dictionary that can never be empty', 'Either a Dict, or possibly None', 'A dictionary with optional keys', 'The same as just Dict'],
          answerIndex: 1,
          explanation: 'Optional[X] is shorthand for "X or None," commonly used for lookups that might not find a result.'
        },
        {
          id: 'py-a-f-26',
          type: 'fill-blank',
          prompt: '______, a static type checker run from the command line, is what actually reports mismatches between your code and its type hints.',
          correctAnswers: ['mypy', 'MYPY'],
          explanation: 'mypy reads type hints and checks them as a separate static-analysis step, without running the program.'
        },
        {
          id: 'py-a-f-27',
          type: 'mcq',
          prompt: 'How does pytest decide which functions in a file to run as tests?',
          options: ['It runs every function in the file', 'It looks for functions whose names start with test_', 'Only functions listed in a separate config file run', 'Every test must be a class method'],
          answerIndex: 1,
          explanation: 'pytest automatically discovers and runs any function whose name starts with test_.'
        },
        {
          id: 'py-a-f-28',
          type: 'mcq',
          prompt: 'Why might you write several small, specifically-named test functions instead of one large combined test?',
          options: ['Smaller tests always run faster', 'If only one specific case breaks, named tests immediately tell you exactly which behaviour failed, rather than just "something failed"', 'pytest does not support multiple tests per file', 'Combined tests are invalid syntax'],
          answerIndex: 1,
          explanation: 'Specific, named tests pinpoint exactly which behaviour broke, which a single all-in-one test cannot.'
        },
        {
          id: 'py-a-f-29',
          type: 'mcq',
          prompt: 'What does pytest.raises(ValueError) let you test?',
          options: ['That a function never raises any error', 'That a specific block of code correctly raises a ValueError, confirming error-raising behaviour works as intended', 'That a function returns a float', 'That a file has no syntax errors'],
          answerIndex: 1,
          explanation: 'Sometimes correct behaviour IS raising an error — pytest.raises checks that this actually happens as expected.'
        },
        {
          id: 'py-a-f-30',
          type: 'code',
          prompt: 'Write a pytest test function called test_add_works that asserts add(2, 3) equals 5.',
          language: 'python',
          expectedKeywords: ['def', 'test_add_works', 'assert', 'add'],
          explanation: 'def test_add_works():\\n    assert add(2, 3) == 5'
        },
        {
          id: 'py-a-f-31',
          type: 'mcq',
          prompt: 'What does an __init__.py file inside a folder signal to Python?',
          options: ['That the folder should be deleted', 'That the folder should be treated as an importable package', 'That the folder contains only test files', 'Nothing, it has no special meaning'],
          answerIndex: 1,
          explanation: '__init__.py (even when empty) is what makes a plain folder behave as a proper, importable Python package.'
        },
        {
          id: 'py-a-f-32',
          type: 'mcq',
          prompt: 'What is pyproject.toml used for?',
          options: ['Storing actual Python source code', 'Describing the package to the outside world — its name, version, dependencies, and how to build it', 'Writing tests', 'Replacing __init__.py entirely'],
          answerIndex: 1,
          explanation: 'pyproject.toml is the modern standard file describing a package\'s metadata and build requirements.'
        },
        {
          id: 'py-a-f-33',
          type: 'fill-blank',
          prompt: '______ is the public repository that pip install pandas actually downloads packages from.',
          correctAnswers: ['pypi', 'PyPI'],
          explanation: 'PyPI (the Python Package Index) is the central public index of published Python packages.'
        }
      ]
    }
  },
  excel: {
    beginner: {
      title: 'Excel Beginner Final Assessment',
      intro: 'Test your knowledge across all Excel beginner modules — cells and formulas, references, formatting, IF logic, sorting/filtering/charts, workbooks, and cleaning text. Includes multiple choice and fill-in-the-blank formula questions.',
      questions: [
        {
          id: 'ex-b-f-1',
          type: 'mcq',
          prompt: 'In a spreadsheet, what does the cell address "B7" refer to?',
          options: ['Row B, column 7', 'Column B, row 7', 'The 7th sheet, column B', 'A named range called B7 only'],
          answerIndex: 1,
          explanation: 'Cell addresses are always column letter first, then row number — B7 means column B, row 7.'
        },
        {
          id: 'ex-b-f-2',
          type: 'mcq',
          prompt: 'What must every Excel formula begin with?',
          options: ['A capital letter', 'The @ symbol', 'The = sign', 'A pair of parentheses'],
          answerIndex: 2,
          explanation: 'The equals sign tells Excel "treat this as a calculation," not plain text.'
        },
        {
          id: 'ex-b-f-3',
          type: 'fill-blank',
          prompt: 'Write the formula that adds up every value in the range A1 to A10.',
          correctAnswers: ['=sum(a1:a10)', 'sum(a1:a10)'],
          explanation: '=SUM(A1:A10) adds every value in that continuous range of cells.'
        },
        {
          id: 'ex-b-f-4',
          type: 'mcq',
          prompt: 'You copy a formula =A2*0.18 from cell B2 down to B3. What does the formula in B3 automatically become?',
          options: ['=A2*0.18, unchanged', '=A3*0.18, since the reference shifts with the new row', '=B2*0.18', 'An error, because formulas cannot be copied'],
          answerIndex: 1,
          explanation: 'A relative reference like A2 automatically adjusts to match its new position when copied — this is the default behaviour.'
        },
        {
          id: 'ex-b-f-5',
          type: 'mcq',
          prompt: 'Your tax rate is stored once in cell B1, and you want every row\'s formula to always reference that exact same cell, even after copying the formula down. Which reference style do you need?',
          options: ['A relative reference, like B1', 'An absolute reference, like $B$1', 'A text reference, like "B1"', 'It is not possible in Excel'],
          answerIndex: 1,
          explanation: 'Dollar signs ($B$1) lock both the column and row, so the reference never shifts no matter where the formula is copied.'
        },
        {
          id: 'ex-b-f-6',
          type: 'fill-blank',
          prompt: 'You see the error ##### in a cell that contains a valid formula. What is the most likely cause — too narrow a ______?',
          correctAnswers: ['column', 'column width'],
          explanation: '##### is not a calculation error at all — it just means the column is too narrow to display the number, and widening it fixes it.'
        },
        {
          id: 'ex-b-f-7',
          type: 'mcq',
          prompt: 'What does the error #DIV/0! mean?',
          options: ['A formula referenced a deleted cell', 'A formula tried to divide by zero or by an empty cell', 'Excel does not recognise a function name', 'The file failed to save'],
          answerIndex: 1,
          explanation: '#DIV/0! specifically signals a division where the denominator was zero or blank.'
        },
        {
          id: 'ex-b-f-8',
          type: 'mcq',
          prompt: 'What does =COUNT(A1:A50) count, as opposed to =COUNTA(A1:A50)?',
          options: ['COUNT counts everything including text; COUNTA only counts numbers', 'COUNT only counts cells containing numbers; COUNTA counts any non-empty cell, numbers or text', 'They are identical functions', 'COUNT counts empty cells only'],
          answerIndex: 1,
          explanation: 'COUNT is numeric-only; COUNTA counts any cell that is not blank, regardless of whether it holds text or a number.'
        },
        {
          id: 'ex-b-f-9',
          type: 'mcq',
          prompt: 'Why is the number 15-Mar-2025 actually stored internally by Excel as a plain number like 45735?',
          options: ['It is a display bug', 'Because Excel stores every date as a count of days since 1 January 1900, which is exactly what lets you do maths with dates', 'Dates cannot be stored as numbers', 'Only when the regional settings are set to the US'],
          answerIndex: 1,
          explanation: 'Storing dates as a day-count is what allows formulas like adding 30 days to a date, or subtracting two dates to find the number of days between them.'
        },
        {
          id: 'ex-b-f-10',
          type: 'fill-blank',
          prompt: 'A2 holds 15-Jan-2025 and B2 holds 01-Feb-2025. Write a formula in C2 that calculates the number of days between them.',
          correctAnswers: ['=b2-a2', 'b2-a2'],
          explanation: 'Subtracting one date cell from another returns the number of days between them, since dates are stored as numbers.'
        },
        {
          id: 'ex-b-f-11',
          type: 'mcq',
          prompt: 'What is the purpose of Conditional Formatting?',
          options: ['To lock a cell so it cannot be edited', 'To automatically change a cell\'s colour or style when its value matches a rule you define', 'To merge two cells together', 'To sort a column automatically'],
          answerIndex: 1,
          explanation: 'Conditional Formatting highlights cells that meet a chosen condition automatically, without manual checking.'
        },
        {
          id: 'ex-b-f-12',
          type: 'mcq',
          prompt: 'What does Freeze Panes (specifically Freeze Top Row) do?',
          options: ['Prevents the file from being saved', 'Keeps the header row visible at the top of the screen while you scroll down through the rest of the data', 'Locks every cell in the workbook from editing', 'Hides the top row completely'],
          answerIndex: 1,
          explanation: 'Freeze Top Row keeps row 1 visible no matter how far down you scroll, so you never lose track of your column headers.'
        },
        {
          id: 'ex-b-f-13',
          type: 'fill-blank',
          prompt: 'Write a formula that shows "Pass" if cell B2 is 40 or greater, and "Fail" otherwise.',
          correctAnswers: ['=if(b2>=40,"pass","fail")', 'if(b2>=40,"pass","fail")', '=if(b2>=40, "pass", "fail")', 'if(b2>=40, "pass", "fail")'],
          explanation: '=IF(B2>=40, "Pass", "Fail") reads as: if the condition is true, show Pass, otherwise show Fail.'
        },
        {
          id: 'ex-b-f-14',
          type: 'mcq',
          prompt: 'In the nested formula =IF(B2>=90, "A", IF(B2>=75, "B", IF(B2>=60, "C", "Fail"))), if B2 is 82, what does the formula return?',
          options: ['"A"', '"B"', '"C"', '"Fail"'],
          answerIndex: 1,
          explanation: '82 is not >= 90, so Excel checks the next condition: 82 >= 75 is true, so it returns "B" immediately and stops checking further.'
        },
        {
          id: 'ex-b-f-15',
          type: 'mcq',
          prompt: 'What is the difference between =IF(AND(B2>=100000, C2>=1), "Bonus", "No bonus") and the same formula using OR instead of AND?',
          options: ['There is no difference', 'AND requires both conditions to be true; OR only requires at least one of them to be true', 'AND only works with numbers; OR only works with text', 'OR always returns TRUE'],
          answerIndex: 1,
          explanation: 'AND demands every condition be true simultaneously, while OR is satisfied if even one condition holds.'
        },
        {
          id: 'ex-b-f-16',
          type: 'fill-blank',
          prompt: 'Write a formula that counts how many cells in the range D2:D50 contain the text "Mumbai".',
          correctAnswers: ['=countif(d2:d50,"mumbai")', 'countif(d2:d50,"mumbai")', '=countif(d2:d50, "mumbai")', 'countif(d2:d50, "mumbai")'],
          explanation: '=COUNTIF(D2:D50, "Mumbai") counts every matching cell in that range without needing a helper IF column.'
        },
        {
          id: 'ex-b-f-17',
          type: 'mcq',
          prompt: 'What does =SUMIF(D2:D50, "Mumbai", B2:B50) calculate?',
          options: ['The total of every value in D2:D50', 'The total of the values in B2:B50, but only for the rows where D2:D50 equals "Mumbai"', 'The count of cells matching "Mumbai"', 'The average of B2:B50'],
          answerIndex: 1,
          explanation: 'SUMIF totals a separate range (B2:B50) based on a condition checked in a different range (D2:D50) — a conditional total.'
        },
        {
          id: 'ex-b-f-18',
          type: 'mcq',
          prompt: 'Before sorting a table of names and their sales figures, what is the most important precaution to take?',
          options: ['Save a backup copy of the file first', 'Select or click inside the entire table so every column moves together, rather than sorting one column in isolation', 'Convert all numbers to text first', 'Remove all formulas before sorting'],
          answerIndex: 1,
          explanation: 'Sorting just one column by itself scrambles the data, since names would no longer line up with their correct sales figures.'
        },
        {
          id: 'ex-b-f-19',
          type: 'mcq',
          prompt: 'What is the key difference between sorting and filtering?',
          options: ['They are exactly the same feature', 'Sorting rearranges every row into a new order; filtering temporarily hides non-matching rows without deleting or reordering anything', 'Filtering only works on numbers; sorting only works on text', 'Sorting requires a chart to already exist'],
          answerIndex: 1,
          explanation: 'Sorting changes row order permanently (until sorted again); filtering just hides rows that do not match, leaving the underlying data and order untouched.'
        },
        {
          id: 'ex-b-f-20',
          type: 'mcq',
          prompt: 'You need to show "sales by city" so the comparison between 5 cities is instantly obvious. Which chart type fits best?',
          options: ['A pie chart with 5 slices', 'A bar or column chart', 'A line chart', 'No chart is needed for this'],
          answerIndex: 1,
          explanation: 'Bar/column charts are the clearest way to compare values across categories like cities — the most common and accurate chart for this kind of question.'
        },
        {
          id: 'ex-b-f-21',
          type: 'mcq',
          prompt: 'Why would a pie chart be a poor choice for showing monthly revenue across 12 months?',
          options: ['Pie charts cannot display numbers', 'Pie charts show parts of a whole at one point in time, not change over time — a line chart fits a trend like this far better', 'Pie charts only work with text data', 'Excel does not support pie charts'],
          answerIndex: 1,
          explanation: 'A trend over time calls for a line chart; a pie chart is for showing how a single total splits into parts, not for tracking change.'
        },
        {
          id: 'ex-b-f-22',
          type: 'mcq',
          prompt: 'What is the relationship between a workbook and a worksheet?',
          options: ['They mean exactly the same thing', 'A workbook is the entire file, which can contain many worksheets (tabs) inside it', 'A worksheet can contain multiple workbooks', 'A worksheet is only for charts, never for data'],
          answerIndex: 1,
          explanation: 'Think of a workbook as a binder and each worksheet as one page inside it — one file, many tabs.'
        },
        {
          id: 'ex-b-f-23',
          type: 'fill-blank',
          prompt: 'On a sheet called "Summary", write a formula that pulls the value from cell B10 on a sheet called "Sales".',
          correctAnswers: ['=sales!b10', 'sales!b10'],
          explanation: 'SheetName!CellReference (like Sales!B10) is how a formula reaches across to a different worksheet in the same workbook.'
        },
        {
          id: 'ex-b-f-24',
          type: 'mcq',
          prompt: 'You need to email a colleague raw data with no formulas, no formatting, and no multiple tabs — just the plain values, in a format that opens easily in any tool. Which file format fits best?',
          options: ['.xlsx', '.csv', '.pdf', '.xls'],
          answerIndex: 1,
          explanation: 'CSV strips away formulas, formatting, and multiple sheets, keeping only plain data — exactly why it travels so easily between different tools.'
        },
        {
          id: 'ex-b-f-25',
          type: 'mcq',
          prompt: 'What does Paste Special → Values do, that a normal paste does not?',
          options: ['Pastes only the calculated result of a formula, not the formula itself', 'Pastes only colours and borders', 'Deletes the original cells after pasting', 'Converts numbers into text automatically'],
          answerIndex: 0,
          explanation: 'Paste Values "freezes" a formula\'s current result as a plain number, useful for sharing a report that should not recalculate later.'
        },
        {
          id: 'ex-b-f-26',
          type: 'fill-blank',
          prompt: 'Write a formula that joins the text in A2 and B2 with a single space in between (A2 holds "Aditi", B2 holds "Rao").',
          correctAnswers: ['=a2&" "&b2', 'a2&" "&b2', '=a2 & " " & b2', 'a2 & " " & b2'],
          explanation: 'The & symbol joins text together; the " " in between explicitly inserts a space, giving "Aditi Rao".'
        },
        {
          id: 'ex-b-f-27',
          type: 'mcq',
          prompt: 'Given A2 contains "9876543210", what does =RIGHT(A2, 4) return?',
          options: ['"9876"', '"3210"', '"9876543210"', 'An error'],
          answerIndex: 1,
          explanation: 'RIGHT(text, n) grabs the last n characters — here, the final 4 digits of the phone number.'
        },
        {
          id: 'ex-b-f-28',
          type: 'mcq',
          prompt: 'A column of city names has entries like "  Mumbai   ", "MUMBAI", and "mumbai" that should all be treated as one city. Which two functions, nested together, fix this most reliably?',
          options: ['SUM and AVERAGE', 'TRIM and PROPER (or UPPER)', 'LEFT and RIGHT', 'VLOOKUP and MATCH'],
          answerIndex: 1,
          explanation: 'TRIM removes the extra spaces and PROPER (or UPPER) fixes the inconsistent capitalisation — nesting them as PROPER(TRIM(cell)) handles both problems in one formula.'
        },
        {
          id: 'ex-b-f-29',
          type: 'mcq',
          prompt: 'What is the main benefit of adding a Data Validation dropdown list to a "Status" column?',
          options: ['It makes the spreadsheet load faster', 'It restricts what can be typed into the cell, preventing typos like "actve" before they ever happen', 'It automatically sorts the column', 'It hides the column from other users'],
          answerIndex: 1,
          explanation: 'Data Validation prevents bad data at the source by only allowing pre-approved values, rather than cleaning up typos after the fact.'
        },
        {
          id: 'ex-b-f-30',
          type: 'fill-blank',
          prompt: 'Write a formula that returns the first 2 characters of the text in cell A2.',
          correctAnswers: ['=left(a2,2)', 'left(a2,2)', '=left(a2, 2)', 'left(a2, 2)'],
          explanation: 'LEFT(text, n) grabs the first n characters from the left-hand side of the text.'
        },
        {
          id: 'ex-b-f-31',
          type: 'mcq',
          prompt: 'You type "Monday" in a cell and drag the fill handle across 6 more cells. What happens?',
          options: ['Excel repeats "Monday" in every cell', 'Excel recognises the pattern and continues with Tuesday, Wednesday, Wednesday, and so on', 'Excel shows an error, since text cannot be dragged', 'Nothing happens until you type a formula'],
          answerIndex: 1,
          explanation: 'AutoFill recognises common patterns like days of the week, months, and sequential numbers, and continues them automatically.'
        },
        {
          id: 'ex-b-f-32',
          type: 'mcq',
          prompt: 'What does the #VALUE! error typically indicate?',
          options: ['A function name was misspelled', 'A formula is trying to perform a calculation on something that is not a valid number, like adding text to a number', 'The column is too narrow', 'A cell reference points to a deleted cell'],
          answerIndex: 1,
          explanation: '#VALUE! signals that the formula encountered data of the wrong type for the operation being attempted.'
        },
        {
          id: 'ex-b-f-33',
          type: 'fill-blank',
          prompt: 'Write a formula that calculates the average of every value in the range B2:B9.',
          correctAnswers: ['=average(b2:b9)', 'average(b2:b9)'],
          explanation: '=AVERAGE(B2:B9) adds up every value in the range and divides by the count of cells, giving the mean.'
        }
      ]
    },
    intermediate: {
      title: 'Excel Intermediate Final Assessment',
      intro: 'Test your knowledge across all 5 Excel intermediate modules — VLOOKUP and INDEX/MATCH, Pivot Tables, Conditional Formatting, Named Ranges and Data Validation, and Power Query. Includes multiple choice and fill-in-the-blank formula questions.',
      questions: [
        {
          id: 'ex-i-f-1',
          type: 'mcq',
          prompt: 'In =VLOOKUP(C2, Products!A:C, 2, FALSE), what does the FALSE argument do?',
          options: ['Tells Excel to ignore errors', 'Forces an exact match instead of an approximate one — without it, VLOOKUP can silently return a wrong answer', 'Searches from the bottom of the table upward', 'Hides the result if it is blank'],
          answerIndex: 1,
          explanation: 'Without FALSE, VLOOKUP defaults to an approximate match and can return a plausible-looking but wrong answer instead of an error.'
        },
        {
          id: 'ex-i-f-2',
          type: 'mcq',
          prompt: 'What is the key limitation of VLOOKUP that INDEX/MATCH does not have?',
          options: ['VLOOKUP cannot be used with numbers', 'VLOOKUP can only search the first column of its range and return values to the right of it — it cannot look left', 'VLOOKUP only works on one worksheet', 'VLOOKUP is always slower to calculate'],
          answerIndex: 1,
          explanation: 'VLOOKUP always searches the leftmost column of its given range. INDEX/MATCH has no such directional restriction.'
        },
        {
          id: 'ex-i-f-3',
          type: 'fill-blank',
          prompt: 'In =INDEX(A:A, MATCH(D2, D:D, 0)), what does MATCH actually return — a value, or a ______?',
          correctAnswers: ['position', 'row position', 'row number'],
          explanation: 'MATCH returns a position (a row number), not a value — INDEX then uses that position to fetch the actual value from a different range.'
        },
        {
          id: 'ex-i-f-4',
          type: 'mcq',
          prompt: 'Why is a VLOOKUP column number considered fragile compared to INDEX/MATCH?',
          options: ['It always returns text instead of numbers', 'If someone inserts a new column into the searched table, every column number shifts and the formula can silently pull the wrong column', 'It cannot be copied to other cells', 'It only works with numeric IDs, never text'],
          answerIndex: 1,
          explanation: 'VLOOKUP relies on a hardcoded column count; INDEX/MATCH has no such number, so it keeps working correctly even after columns are inserted or reordered.'
        },
        {
          id: 'ex-i-f-5',
          type: 'mcq',
          prompt: 'You get a #N/A error from a lookup formula. What is the most likely cause?',
          options: ['Your computer needs a restart', 'The value you searched for genuinely does not exist in the lookup range — often a typo or extra space', 'You used too many decimal places', 'The workbook file is too large'],
          answerIndex: 1,
          explanation: '#N/A specifically means "not found" — the lookup value is genuinely absent from the range you searched.'
        },
        {
          id: 'ex-i-f-6',
          type: 'mcq',
          prompt: 'What is the main advantage of XLOOKUP over both VLOOKUP and INDEX/MATCH?',
          options: ['It is the only lookup function that works with numbers', 'It combines the simplicity of VLOOKUP with the any-direction flexibility of INDEX/MATCH, in one function', 'It does not require a lookup value at all', 'It only works on the active sheet'],
          answerIndex: 1,
          explanation: 'XLOOKUP can look in any direction like INDEX/MATCH, but with a simpler, single-function syntax closer to VLOOKUP.'
        },
        {
          id: 'ex-i-f-7',
          type: 'fill-blank',
          prompt: 'Write a formula that looks up the value in cell D2 inside the range D:D, and returns the matching value from column A — using INDEX and MATCH together.',
          correctAnswers: ['=index(a:a,match(d2,d:d,0))', 'index(a:a,match(d2,d:d,0))'],
          explanation: 'MATCH finds the row position of D2 within D:D, and INDEX returns whatever sits at that same row position within column A.'
        },
        {
          id: 'ex-i-f-8',
          type: 'mcq',
          prompt: 'What are the four boxes you drag fields into when building a Pivot Table?',
          options: ['Rows, Columns, Values, Filters', 'Header, Footer, Body, Sidebar', 'Sum, Count, Average, Max', 'Sheet1, Sheet2, Sheet3, Sheet4'],
          answerIndex: 0,
          explanation: 'Rows and Columns control grouping, Values controls the number being summarised, and Filters narrows the whole table to a category.'
        },
        {
          id: 'ex-i-f-9',
          type: 'mcq',
          prompt: 'You drag a numeric column like Revenue into the Values box of a Pivot Table. What does Excel do by default?',
          options: ['Counts the number of entries', 'Sums all the values', 'Averages all the values automatically', 'Leaves the field blank until you configure it'],
          answerIndex: 1,
          explanation: 'Sum is the default aggregation Excel applies to numeric fields dropped into Values, changeable via Value Field Settings.'
        },
        {
          id: 'ex-i-f-10',
          type: 'mcq',
          prompt: 'What happens if you drag a text column like Customer Name into the Values box of a Pivot Table?',
          options: ['Excel throws an error and refuses', 'Excel automatically switches to Count, since text cannot be summed', 'Excel converts the text into numbers', 'The pivot table disappears'],
          answerIndex: 1,
          explanation: 'Text values cannot be summed, so Excel defaults to counting how many entries exist instead.'
        },
        {
          id: 'ex-i-f-11',
          type: 'mcq',
          prompt: 'You added 200 new rows to the data a Pivot Table is built on, but it still shows the old numbers. What should you do?',
          options: ['Delete the pivot table and rebuild it from scratch', 'Right-click the pivot and choose Refresh (or press Alt+F5)', 'Wait — it updates automatically within an hour', 'Reinstall Excel'],
          answerIndex: 1,
          explanation: 'A Pivot Table is a snapshot, not a live formula — it only updates when explicitly refreshed.'
        },
        {
          id: 'ex-i-f-12',
          type: 'mcq',
          prompt: 'What does a Slicer add to a Pivot Table that a normal dropdown filter does not?',
          options: ['It deletes filtered-out rows permanently', 'A clickable, visual filtering interface — popular for building simple interactive dashboards', 'A way to sort the data alphabetically', 'It converts the pivot into a chart automatically'],
          answerIndex: 1,
          explanation: 'Slicers give Pivot Tables a clickable, visual filtering experience, commonly used in dashboards instead of the standard dropdown filter.'
        },
        {
          id: 'ex-i-f-13',
          type: 'mcq',
          prompt: 'What is the benefit of a Pivot Chart over a regular Excel chart built from raw data?',
          options: ['Pivot Charts cannot be customised at all', 'A Pivot Chart updates automatically whenever its underlying Pivot Table is refreshed, without manual rebuilding', 'Pivot Charts only display pie charts', 'They require an internet connection'],
          answerIndex: 1,
          explanation: 'Because a Pivot Chart is tied to a Pivot Table, refreshing the pivot keeps the chart in sync automatically.'
        },
        {
          id: 'ex-i-f-14',
          type: 'mcq',
          prompt: 'What is the main purpose of Conditional Formatting?',
          options: ['To lock a cell from being edited', "To automatically change a cell's appearance (colour, icon, bar) when it meets a rule you define", 'To merge multiple cells together', 'To validate data before it is typed in'],
          answerIndex: 1,
          explanation: 'Conditional Formatting changes visual appearance based on rules, making important values jump out without manual scanning.'
        },
        {
          id: 'ex-i-f-15',
          type: 'fill-blank',
          prompt: 'You want to highlight an entire row red whenever the Status column (F) says "Cancelled," with the whole data range selected first. Write the formula-based rule, locking only the column.',
          correctAnswers: ['=$f2="cancelled"', '$f2="cancelled"'],
          explanation: 'Locking only the column ($F2) keeps every cell in a row checking column F, while letting the row number adjust per row.'
        },
        {
          id: 'ex-i-f-16',
          type: 'mcq',
          prompt: 'What do Data Bars do as a Conditional Formatting option?',
          options: ['Add a dropdown list to a cell', 'Draw a small bar inside each cell, proportional to its value, for quick visual comparison of magnitudes', 'Lock the column width', 'Convert numbers into percentages automatically'],
          answerIndex: 1,
          explanation: 'Data Bars are an in-cell visual bar — longer bars represent larger values, ideal for quick comparisons across a column.'
        },
        {
          id: 'ex-i-f-17',
          type: 'mcq',
          prompt: 'A cell is not formatting the way you expect, even though your rule looks correct. Where should you check first?',
          options: ['The Name Manager', 'Conditional Formatting → Manage Rules, to check for a conflicting rule positioned above yours', 'The Page Layout tab', 'AutoSave settings'],
          answerIndex: 1,
          explanation: 'Multiple rules can apply to the same cell, evaluated top to bottom — Manage Rules shows the order and reveals any conflicting rule.'
        },
        {
          id: 'ex-i-f-18',
          type: 'mcq',
          prompt: 'What does the formula rule =A2<TODAY() achieve when applied to a Due Date column?',
          options: ['It deletes any past due date automatically', 'It highlights any date that has already passed today\'s date', 'It blocks future dates from ever being entered', 'It sorts the dates chronologically'],
          answerIndex: 1,
          explanation: 'TODAY() returns the current date, so the rule is TRUE — and applies formatting — for any due date earlier than today, i.e., overdue.'
        },
        {
          id: 'ex-i-f-19',
          type: 'mcq',
          prompt: 'What is the main benefit of using a Named Range like "TaxRate" instead of $F$1 in a formula?',
          options: ['Named ranges calculate faster than cell references', 'It makes formulas easier to read, and the name keeps working correctly even if the underlying cell is moved elsewhere', 'It lets one cell store multiple values at once', 'It removes the need for the equals sign in formulas'],
          answerIndex: 1,
          explanation: 'A named range behaves like an absolute reference automatically, and stays valid even if you relocate the cell it points to.'
        },
        {
          id: 'ex-i-f-20',
          type: 'mcq',
          prompt: 'Where can you see and edit every named range defined in a workbook?',
          options: ['Data → Sort', 'Formulas → Name Manager', 'View → Freeze Panes', 'Insert → Names'],
          answerIndex: 1,
          explanation: 'Name Manager lists all defined names, what they point to, and lets you edit or delete them.'
        },
        {
          id: 'ex-i-f-21',
          type: 'mcq',
          prompt: 'What does a Data Validation dropdown list (Allow: List) primarily prevent?',
          options: ['Slow formula calculation', 'Typos and inconsistent entries, by only allowing pre-approved values to be typed into a cell', 'Accidental file deletion', 'A formula referencing the wrong worksheet'],
          answerIndex: 1,
          explanation: 'A dropdown list restricts input to exact, pre-approved values, eliminating problems like "Sales" vs "sales" vs "SALES" meaning the same thing.'
        },
        {
          id: 'ex-i-f-22',
          type: 'fill-blank',
          prompt: 'A custom Data Validation rule uses the formula =AND(B2>0, B2<=C2). What two conditions must both be true for an entry in B2 to be accepted — it must be greater than 0, and it must not ______ the value in C2?',
          correctAnswers: ['exceed', 'be greater than', 'go above'],
          explanation: 'AND requires both conditions true — a positive quantity (B2>0) that also does not exceed some limit stored in C2, such as available stock.'
        },
        {
          id: 'ex-i-f-23',
          type: 'mcq',
          prompt: 'Does Data Validation retroactively flag data that was already typed into the cells before the rule was created?',
          options: ['Yes, it instantly highlights every existing invalid entry', 'No — it only stops new entries going forward, not data already present', 'It deletes existing invalid entries automatically', 'It converts existing invalid entries to the nearest valid option automatically'],
          answerIndex: 1,
          explanation: 'Data Validation rules apply going forward from when they are created — always set them up before a sheet is shared for filling in, not after.'
        },
        {
          id: 'ex-i-f-24',
          type: 'mcq',
          prompt: 'On the Data Validation dialog, what is the difference between the "Input Message" tab and the "Error Alert" tab?',
          options: ['They do exactly the same thing', 'Input Message shows a helpful tooltip when the cell is selected; Error Alert controls what happens if an invalid value is entered', 'Input Message blocks all entries; Error Alert allows all entries', 'Input Message is for numbers only; Error Alert is for text only'],
          answerIndex: 1,
          explanation: 'Input Message guides the user before they type; Error Alert (Stop, Warning, or Information) reacts after an invalid entry is attempted.'
        },
        {
          id: 'ex-i-f-25',
          type: 'mcq',
          prompt: 'What is the main advantage of cleaning data with Power Query instead of one-off manual formulas?',
          options: ['It is the only way to ever remove duplicate rows', 'The cleanup steps are recorded and can be replayed automatically on future versions of the same messy export via Refresh', 'It automatically creates charts for you', 'It permanently changes the original source file'],
          answerIndex: 1,
          explanation: 'Power Query records a repeatable recipe of steps, so a recurring messy export can be re-cleaned with one click instead of redoing manual work.'
        },
        {
          id: 'ex-i-f-26',
          type: 'mcq',
          prompt: 'What is the "Applied Steps" panel in the Power Query Editor?',
          options: ['A list of every formula in the workbook', 'An ordered, named list of every transformation you have performed, which can be clicked through, edited, or reordered', 'A history of files you have opened in Excel', 'A list of all currently open Excel windows'],
          answerIndex: 1,
          explanation: 'Applied Steps records each transformation (like "Removed Columns" or "Split Column") in order, and re-runs all of them on Refresh.'
        },
        {
          id: 'ex-i-f-27',
          type: 'mcq',
          prompt: 'Does working inside the Power Query Editor change your original source file?',
          options: ['Yes, every change is saved back to the source file immediately', 'No — it is a safe sandbox; the original source file stays untouched until you choose Close & Load', 'Only if you forget to undo a step', 'Only for CSV files, never for Excel workbooks'],
          answerIndex: 1,
          explanation: 'Power Query builds a separate recipe of transformations on a copy of the data; the source file itself is never modified.'
        },
        {
          id: 'ex-i-f-28',
          type: 'fill-blank',
          prompt: 'In Power Query, which transformation would you use to turn a single "Full Name" column into separate First Name and Last Name columns?',
          correctAnswers: ['split column', 'split column by delimiter'],
          explanation: 'Split Column → By Delimiter (using a space as the delimiter) divides one text column into multiple columns.'
        },
        {
          id: 'ex-i-f-29',
          type: 'mcq',
          prompt: 'What does "Merge Queries" in Power Query conceptually correspond to?',
          options: ['A VLOOKUP formula, but reusable across refreshes', 'A SQL-style JOIN, combining two tables based on a matching column', 'Combining two entire Excel files into one workbook', 'Deleting duplicate columns from one table'],
          answerIndex: 1,
          explanation: 'Merge Queries combines two tables on a matching column, similar to a SQL JOIN, with "Left Outer" matching a LEFT JOIN.'
        },
        {
          id: 'ex-i-f-30',
          type: 'mcq',
          prompt: 'You replace the source file with a new export and click Refresh All. What is most likely to go wrong if a column was renamed in the new file?',
          options: ['Nothing — Power Query always adapts automatically to any change', 'A step that depends on that exact column name may fail or pull the wrong column, so you should spot-check the result after refreshing', 'Excel will permanently delete the new file', 'The workbook will become corrupted'],
          answerIndex: 1,
          explanation: 'Refresh assumes the new file has the same structure as the one the steps were built against — a renamed or reordered column can silently break a step.'
        },
        {
          id: 'ex-i-f-31',
          type: 'mcq',
          prompt: 'Which Power Query transformation would you use to remove accidental repeated rows from an export, such as the same Order ID appearing twice?',
          options: ['Change Type', 'Remove Duplicates', 'Trim', 'Filter Rows'],
          answerIndex: 1,
          explanation: 'Remove Duplicates eliminates rows that repeat based on the column(s) you select, such as Order ID.'
        },
        {
          id: 'ex-i-f-32',
          type: 'mcq',
          prompt: 'A date column was imported as plain text instead of a real date, breaking date-based calculations. Which Power Query action fixes this?',
          options: ['Remove Columns', 'Change Type, to convert the column to a proper Date', 'Merge Queries', 'Filter Rows'],
          answerIndex: 1,
          explanation: 'Clicking the data-type icon in a column header (Change Type) converts text that looks like a date into an actual Date type Excel can calculate with.'
        },
        {
          id: 'ex-i-f-33',
          type: 'mcq',
          prompt: 'Across this whole track, what is the common theme connecting VLOOKUP/INDEX-MATCH, Pivot Tables, and Power Query Merge?',
          options: ['They all require VBA macros to work', 'All three are ways of bringing related data together — from a row-by-row lookup, to a full table summary, to a repeatable table-to-table join', 'They only work with numeric data', 'They are mutually exclusive — using one prevents using the others'],
          answerIndex: 1,
          explanation: 'Lookups, Pivot Tables, and Power Query merges all solve variations of the same underlying problem: combining and summarising data that lives in more than one place.'
        }
      ]
    },
    advanced: {
      title: 'Excel Advanced Final Assessment',
      intro: 'Test your knowledge across all 5 Excel advanced modules — Power Pivot and the Data Model, DAX measures, advanced array formulas, Macros and VBA, and building interactive dashboards. Includes multiple choice and fill-in-the-blank questions.',
      questions: [
        {
          id: 'ex-a-f-1',
          type: 'mcq',
          prompt: 'Why does Power Pivot use table relationships instead of VLOOKUP at large scale, like 200,000 rows?',
          options: ['VLOOKUP is more accurate than relationships', 'VLOOKUP formulas copied down hundreds of thousands of rows are slow and bloat the file; relationships connect tables structurally with no formulas copied at all', 'Relationships only work with text columns', 'VLOOKUP cannot be used inside any Pivot Table'],
          answerIndex: 1,
          explanation: 'A relationship connects tables the way a database does, avoiding the performance cost and fragility of millions of repeated lookup formulas.'
        },
        {
          id: 'ex-a-f-2',
          type: 'mcq',
          prompt: 'In a Sales / Products / Customers Data Model, what kind of relationship exists between Sales and Products?',
          options: ['Many-to-many', 'One-to-many, with Sales as the "many" side', 'No relationship is needed between them', 'One-to-one'],
          answerIndex: 1,
          explanation: 'Many sales rows can reference the same single product, making Sales the "many" side and Products the "one" side.'
        },
        {
          id: 'ex-a-f-3',
          type: 'mcq',
          prompt: 'What requirement must the "one" side of a relationship (e.g., Products[Product ID]) satisfy before Excel will create it?',
          options: ['It must be sorted alphabetically', 'It must contain no duplicate values', 'It must be the first column in the table', 'It must be formatted as currency'],
          answerIndex: 1,
          explanation: 'Excel refuses to build a relationship if the "one" side has duplicate key values, since that would break the lookup logic.'
        },
        {
          id: 'ex-a-f-4',
          type: 'fill-blank',
          prompt: 'The pattern of one central transactional table (like Sales) connected to several small lookup tables (like Products and Customers) is commonly called a ______ schema.',
          correctAnswers: ['star'],
          explanation: 'A star schema has one "facts" table surrounded by smaller "dimension" tables it relates to — the standard shape for a Data Model.'
        },
        {
          id: 'ex-a-f-5',
          type: 'mcq',
          prompt: 'After building relationships in the Data Model, what can a single Pivot Table now do that it could not do before?',
          options: ['Automatically email itself on a schedule', 'Combine fields from multiple related tables directly (like Products[Category] alongside Sales[Quantity]), with no VLOOKUP formulas needed', 'Delete duplicate rows in the source data', 'Convert every number to text'],
          answerIndex: 1,
          explanation: 'The Data Model lets a Pivot Table pull fields from different related tables at once, using the relationships instead of helper lookup columns.'
        },
        {
          id: 'ex-a-f-6',
          type: 'mcq',
          prompt: 'What does RELATED do inside a DAX measure like SUMX(Sales, Sales[Quantity] * RELATED(Products[Price]))?',
          options: ['Sorts the Sales table by price', 'Reaches across an existing relationship to fetch a matching value from a related table, for the current row', 'Deletes rows with no matching product', 'Converts text into numbers'],
          answerIndex: 1,
          explanation: 'RELATED follows the relationship from the "many" side to fetch the corresponding value on the "one" side, row by row.'
        },
        {
          id: 'ex-a-f-7',
          type: 'mcq',
          prompt: 'What is the key difference between a DAX measure and a calculated column?',
          options: ['They are exactly the same thing', 'A calculated column stores one static value per row; a measure recalculates fresh every time, based on whatever filter context a Pivot Table currently applies', 'Measures can only ever return text', 'Calculated columns are always faster, with no tradeoffs'],
          answerIndex: 1,
          explanation: 'A measure is dynamic and filter-aware, recomputing for whatever Rows/Columns/Filters context it is placed in — a calculated column is fixed per row.'
        },
        {
          id: 'ex-a-f-8',
          type: 'mcq',
          prompt: 'What does CALCULATE([Total Revenue], Customers[City] = "Mumbai") do?',
          options: ['Permanently deletes all non-Mumbai rows', 'Recomputes the Total Revenue measure, but forced to only consider rows where the customer city is Mumbai', 'Renames the Total Revenue measure to "Mumbai"', 'Creates a brand new table called Mumbai'],
          answerIndex: 1,
          explanation: 'CALCULATE takes an existing measure and recomputes it under a modified filter context — here, restricted to Mumbai.'
        },
        {
          id: 'ex-a-f-9',
          type: 'mcq',
          prompt: 'Why should DIVIDE(a, b) be used instead of writing a/b directly in a DAX measure?',
          options: ['DIVIDE is simply faster to type', 'DIVIDE returns blank instead of an error when the denominator is zero, which a plain a/b would throw as an error', 'a/b is not valid DAX syntax at all', 'DIVIDE always rounds the result to two decimals'],
          answerIndex: 1,
          explanation: 'DIVIDE gracefully handles a zero denominator (like a month with no sales) by returning blank instead of breaking the calculation.'
        },
        {
          id: 'ex-a-f-10',
          type: 'mcq',
          prompt: 'What does TOTALYTD([Total Revenue], Sales[Date]) calculate when used in a Pivot Table broken down by month?',
          options: ['The revenue for that single month only', 'The running cumulative total from the start of the year through the end of that month', 'The average monthly revenue across the whole year', "Next year's projected revenue"],
          answerIndex: 1,
          explanation: 'TOTALYTD is a time-intelligence function that accumulates a measure from the start of the year up to the current filter context.'
        },
        {
          id: 'ex-a-f-11',
          type: 'fill-blank',
          prompt: 'Which DAX function would you use to count how many distinct customers appear in the Sales table, rather than counting every sales row?',
          correctAnswers: ['distinctcount'],
          explanation: 'DISTINCTCOUNT(Sales[Customer ID]) counts unique customer IDs, unlike COUNTROWS which counts every transaction row regardless of repeats.'
        },
        {
          id: 'ex-a-f-12',
          type: 'mcq',
          prompt: 'What does =SUMPRODUCT((D2:D30="Mumbai") * B2:B30 * C2:C30) calculate?',
          options: ['The total of columns B and C for every row, regardless of city', 'The sum of B×C for only the rows where column D equals "Mumbai," since the TRUE/FALSE condition acts as 1/0 in the multiplication', 'A count of how many rows say "Mumbai"', 'An error, because SUMPRODUCT cannot use conditions'],
          answerIndex: 1,
          explanation: 'The (D2:D30="Mumbai") condition produces an array of 1s and 0s, zeroing out the contribution of any row that is not Mumbai before summing the products.'
        },
        {
          id: 'ex-a-f-13',
          type: 'mcq',
          prompt: 'What do the curly braces {} around a legacy array formula in the formula bar mean?',
          options: ['You should type them yourself when writing the formula', 'Excel added them automatically to show the formula was confirmed with Ctrl+Shift+Enter as an array calculation', 'The formula contains an error', 'The formula is locked from editing'],
          answerIndex: 1,
          explanation: 'Curly braces are Excel\'s own indicator that a formula was entered as a legacy array formula — you never type them manually.'
        },
        {
          id: 'ex-a-f-14',
          type: 'mcq',
          prompt: 'What makes a Dynamic Array formula like =UNIQUE(D2:D30) different from a regular formula?',
          options: ['It can only be used once per worksheet', 'It automatically "spills" its results into as many cells as needed, with no Ctrl+Shift+Enter or manual range sizing required', 'It only works with numbers, never text', 'It requires Power Pivot to be enabled first'],
          answerIndex: 1,
          explanation: 'Dynamic Arrays in modern Excel spill multiple results automatically into adjacent cells, unlike older array formulas or single-cell formulas.'
        },
        {
          id: 'ex-a-f-15',
          type: 'mcq',
          prompt: 'What does the #SPILL! error mean?',
          options: ['The formula contains a typo', 'A dynamic array formula needs to spill results into cells that already contain other data', 'The file has become corrupted', 'A circular reference was detected'],
          answerIndex: 1,
          explanation: '#SPILL! appears when something is blocking the cells a dynamic array formula needs to expand into — clearing those cells resolves it.'
        },
        {
          id: 'ex-a-f-16',
          type: 'fill-blank',
          prompt: 'Write the dynamic array formula that produces an alphabetically sorted list of every distinct value in the range D2:D30.',
          correctAnswers: ['=sort(unique(d2:d30))', 'sort(unique(d2:d30))'],
          explanation: 'UNIQUE removes duplicates and SORT then alphabetizes the result, with both functions spilling the combined output automatically.'
        },
        {
          id: 'ex-a-f-17',
          type: 'mcq',
          prompt: 'What file format must you save a workbook as to keep a macro inside it?',
          options: ['.xlsx, the standard format', '.xlsm, the Macro-Enabled Workbook format', '.csv', '.pdf'],
          answerIndex: 1,
          explanation: 'Saving as a regular .xlsx silently strips out any macros with no warning — .xlsm is required to preserve them.'
        },
        {
          id: 'ex-a-f-18',
          type: 'mcq',
          prompt: 'In VBA, what does Cells(Rows.Count, "B").End(xlUp).Row typically find?',
          options: ['The first empty row at the very top of the sheet', 'The last row that actually contains data in column B, regardless of how much data exists', 'The total number of columns on the sheet', 'A random row somewhere in column B'],
          answerIndex: 1,
          explanation: 'This is the standard VBA idiom for finding the last used row in a column, making a macro work correctly no matter how the data grows or shrinks.'
        },
        {
          id: 'ex-a-f-19',
          type: 'mcq',
          prompt: 'What does a For i = 2 To lastRow ... Next i loop do in VBA?',
          options: ['Runs the code inside it exactly once', 'Repeats the code inside it once for every row from row 2 through lastRow, with i taking each row number in turn', 'Deletes rows 2 through lastRow', 'Pauses the macro for "lastRow" seconds'],
          answerIndex: 1,
          explanation: 'This is a counting loop — i increments from 2 up to lastRow, running the enclosed code once per value, which is how macros process every row of a table.'
        },
        {
          id: 'ex-a-f-20',
          type: 'mcq',
          prompt: 'Why does Excel show a security warning bar when opening a .xlsm file received from someone else?',
          options: ['Because .xlsm files are always corrupted', 'Because macros can run arbitrary actions on your computer and are a real, common way malware spreads through email attachments', 'Because the file is too large to open safely', 'Because macros always contain viruses by definition'],
          answerIndex: 1,
          explanation: 'Macros have broad capability on your system, so Excel disables them by default on files from outside sources until you explicitly trust and enable them.'
        },
        {
          id: 'ex-a-f-21',
          type: 'mcq',
          prompt: 'What is the main limitation of recording a macro rather than hand-writing VBA code?',
          options: ['Recorded macros run slower than typed code', 'Recording only captures a linear sequence of actions — it cannot capture loops or conditional logic like "for every row, check if X"', 'Recorded macros cannot be saved at all', 'Recording requires an internet connection'],
          answerIndex: 1,
          explanation: 'The macro recorder can only play back the exact clicks you made — any logic involving loops or conditions needs to be hand-written in the VBA editor.'
        },
        {
          id: 'ex-a-f-22',
          type: 'fill-blank',
          prompt: 'In VBA, which statement displays a popup confirming a macro has finished running, like MsgBox "Done!"?',
          correctAnswers: ['msgbox', 'msgbox "done!"'],
          explanation: 'MsgBox shows a small popup dialog with whatever text you pass it, commonly used to confirm a macro has completed.'
        },
        {
          id: 'ex-a-f-23',
          type: 'mcq',
          prompt: 'What should you decide before opening Excel and building dashboard charts?',
          options: ['Which font to use throughout the workbook', 'Who the dashboard is for, and the 3-5 specific questions it needs to answer', 'How many worksheets the workbook should have', 'The maximum file size allowed'],
          answerIndex: 1,
          explanation: 'Designing around the audience\'s actual questions first prevents a dashboard that looks busy but does not answer anything useful.'
        },
        {
          id: 'ex-a-f-24',
          type: 'mcq',
          prompt: 'What does connecting a Slicer to multiple Pivot Tables via "Report Connections" achieve?',
          options: ['It merges the Pivot Tables into a single table', 'One click on the slicer filters every connected Pivot Table and Pivot Chart simultaneously', 'It permanently deletes the unconnected Pivot Tables', 'It hides the slicer from view entirely'],
          answerIndex: 1,
          explanation: 'Report Connections let a single slicer control multiple visuals at once, which is the foundation of an interactive, click-to-filter dashboard.'
        },
        {
          id: 'ex-a-f-25',
          type: 'mcq',
          prompt: 'What does GETPIVOTDATA let you do?',
          options: ['Delete a Pivot Table entirely', 'Pull one specific number out of an existing Pivot Table into a standalone cell, useful for building a styled KPI card', 'Convert a Pivot Table into a regular flat range', 'Connect to an external database'],
          answerIndex: 1,
          explanation: 'GETPIVOTDATA extracts a single value from a Pivot Table so it can be displayed independently, like in a large-font KPI card.'
        },
        {
          id: 'ex-a-f-26',
          type: 'mcq',
          prompt: 'What does Data → Refresh All update in one click?',
          options: ['Only the currently active cell', 'Every Pivot Table, Pivot Chart, Power Query step, and Data Model calculation in the entire workbook', 'Only charts, never Pivot Tables', 'Only cell formatting, not the underlying data'],
          answerIndex: 1,
          explanation: 'Refresh All is the single action a dashboard\'s end user needs, updating every data-dependent element across the whole workbook at once.'
        },
        {
          id: 'ex-a-f-27',
          type: 'mcq',
          prompt: 'Why hide gridlines and move underlying Pivot Tables to a separate sheet on a finished dashboard?',
          options: ['It is technically required for slicers to function at all', 'It makes the dashboard look intentional and focused on the visuals, rather than exposing raw working data', 'It speeds up Excel\'s calculation engine', 'It is required before saving as .xlsm'],
          answerIndex: 1,
          explanation: 'A clean, deliberate layout — without visible raw pivot grids or gridlines — is read faster and trusted more by the people actually using the dashboard.'
        },
        {
          id: 'ex-a-f-28',
          type: 'mcq',
          prompt: 'A measure shows a different total depending on whether a Pivot Table is sliced by City, by Month, or by nothing at all. What DAX concept explains this?',
          options: ['The measure is broken and needs fixing', 'Measures are filter-context aware — they recalculate automatically based on whatever Rows/Columns/Filters the report currently applies', 'DAX measures are random by design', 'This only happens with corrupted Data Models'],
          answerIndex: 1,
          explanation: 'This dynamic, context-sensitive recalculation is the entire point of a measure, as opposed to a static calculated column.'
        },
        {
          id: 'ex-a-f-29',
          type: 'mcq',
          prompt: 'Why is SUMPRODUCT a useful alternative to SUMIFS for a calculation like "total revenue for Mumbai" when revenue itself is Quantity × Price?',
          options: ['SUMPRODUCT cannot use any conditions at all', 'SUMIFS can only sum one existing column, while SUMPRODUCT can combine a condition with an inline multiplication (quantity × price) in a single formula', 'SUMPRODUCT is only for text data', 'They produce different totals for the same data'],
          answerIndex: 1,
          explanation: 'SUMIFS sums an existing column under a condition; SUMPRODUCT can additionally multiply two ranges together inline, which SUMIFS alone cannot do.'
        },
        {
          id: 'ex-a-f-30',
          type: 'mcq',
          prompt: 'You assign a macro to a button on a worksheet. What is required for that macro to still be available the next time the file is opened?',
          options: ['Nothing extra — buttons always retain their macro forever', 'The workbook must be saved as a .xlsm (Macro-Enabled Workbook), since a .xlsx save would silently delete the macro', 'The button must be re-assigned every time the file opens', 'Macros assigned to buttons cannot be saved under any format'],
          answerIndex: 1,
          explanation: 'The macro itself only survives if the file is saved in a macro-enabled format — the button assignment alone does not preserve it in a regular .xlsx.'
        },
        {
          id: 'ex-a-f-31',
          type: 'mcq',
          prompt: 'In a Sales/Products/Customers Data Model, why can a DAX measure use RELATED(Products[Price]) but not easily do the reverse (pulling a Sales value from inside a measure defined in the Products table)?',
          options: ['RELATED never works in either direction', 'RELATED follows a relationship from the "many" side to the "one" side; going the opposite direction (one to many) needs a different function, like RELATEDTABLE', 'Products and Sales are not actually related', 'DAX cannot reference more than one table at all'],
          answerIndex: 1,
          explanation: 'RELATED specifically works many-to-one. Fetching values in the opposite direction (one-to-many) requires a different approach, such as RELATEDTABLE.'
        },
        {
          id: 'ex-a-f-32',
          type: 'mcq',
          prompt: 'What is the practical benefit of building 3-4 KPI cards (like Total Revenue, Number of Sales, Average Order Value) at the top of a dashboard?',
          options: ['They replace the need for any Pivot Tables or charts', 'They give an instant, at-a-glance read of the most important numbers before a viewer digs into any chart', 'They are required for slicers to function', 'They automatically refresh faster than charts do'],
          answerIndex: 1,
          explanation: 'KPI cards summarise the headline numbers immediately, letting a viewer get the big picture in seconds before exploring the detailed charts.'
        },
        {
          id: 'ex-a-f-33',
          type: 'mcq',
          prompt: 'Across this whole track, what is the common thread connecting the Data Model, DAX measures, dynamic arrays, and VBA macros?',
          options: ['They all require an internet connection to function', 'Each one removes a different kind of repetitive manual work — repeated lookups, repeated calculations, repeated helper columns, and repeated clicks — replacing it with something that recalculates or reruns automatically', 'They can only be used one at a time, never combined', 'They are all exclusive to Power BI, not Excel'],
          answerIndex: 1,
          explanation: 'Every advanced Excel tool in this track exists to eliminate a specific category of repeated manual effort, which is exactly why they combine so naturally into one interactive dashboard.'
        }
      ]
    }
  },
  powerbi: {
    beginner: {
      title: 'Power BI Beginner Final Assessment',
      intro: 'Test your knowledge across all 7 Power BI beginner modules — what Power BI is, loading data, cleaning it with Power Query, building charts, slicers and filters, and publishing to the Service. Built around a running real-world scenario: a small café chain, Brew & Bite.',
      questions: [
        {
          id: 'pb-b-f-1',
          type: 'mcq',
          prompt: 'What is the core difference between Excel and Power BI?',
          options: ['They are identical tools with different logos', 'Excel is primarily for storing and calculating data; Power BI is primarily for building interactive, shareable visual dashboards from that data', 'Power BI cannot connect to Excel files', 'Excel is newer than Power BI'],
          answerIndex: 1,
          explanation: 'Power BI is purpose-built for connecting multiple sources, modelling relationships, and serving interactive dashboards — a different job from Excel\'s calculation-first design.'
        },
        {
          id: 'pb-b-f-2',
          type: 'mcq',
          prompt: 'Which of the three Power BI pieces is where you actually author and build a report?',
          options: ['Power BI Mobile', 'Power BI Service', 'Power BI Desktop', 'Power BI Gateway'],
          answerIndex: 2,
          explanation: 'Power BI Desktop is the free installable application where the modelling and visual-building work happens.'
        },
        {
          id: 'pb-b-f-3',
          type: 'mcq',
          prompt: 'A hospital wants one screen showing bed occupancy, ventilator availability, and ambulance status, updating automatically. Which Power BI workflow step turns raw hospital records into that one screen?',
          options: ['Get Data only, nothing else is needed', 'The full pipeline: Get Data, clean and shape it, model the relationships, then visualise it on a canvas', 'Publishing alone, without building any visuals first', 'Renaming the source file'],
          answerIndex: 1,
          explanation: 'The standard Power BI workflow — get, clean, model, visualise — is what turns scattered raw records into one coherent live screen.'
        },
        {
          id: 'pb-b-f-4',
          type: 'fill-blank',
          prompt: 'Power BI Desktop is only natively available for which operating system?',
          correctAnswers: ['windows'],
          explanation: 'Power BI Desktop is Windows-only; Mac users need a virtual machine or similar workaround to run it.'
        },
        {
          id: 'pb-b-f-5',
          type: 'mcq',
          prompt: 'What is the purpose of the Power BI Service (app.powerbi.com)?',
          options: ['It is where you write DAX formulas exclusively', 'It is the cloud platform where finished reports are published so others can view and interact with them in a browser', 'It is a customer support contact form', 'It only works for Excel files, not Power BI reports'],
          answerIndex: 1,
          explanation: 'The Service is where a report becomes accessible to people who do not have Power BI Desktop installed.'
        },
        {
          id: 'pb-b-f-6',
          type: 'mcq',
          prompt: 'Brew & Bite\'s owner hands you an Excel file with 3 months of sales data. What is the very first action you take in Power BI Desktop?',
          options: ['Publish to the Service immediately', 'Get Data → Excel Workbook, to connect to and load the file', 'Write a DAX measure', 'Add a Slicer to a blank canvas'],
          answerIndex: 1,
          explanation: 'Nothing can be visualised or modelled until the data has actually been connected to and loaded via Get Data.'
        },
        {
          id: 'pb-b-f-7',
          type: 'mcq',
          prompt: 'What does the Navigator window show after choosing Get Data → Excel Workbook?',
          options: ['A list of every formula in the workbook', 'Every sheet and named table found in the workbook, with a preview, letting you choose which to load', 'A request for your Windows password', 'The full publishing history of the file'],
          answerIndex: 1,
          explanation: 'The Navigator lets you confirm you are loading the correct sheet/table before anything is brought into the report.'
        },
        {
          id: 'pb-b-f-8',
          type: 'mcq',
          prompt: 'Why is clicking "Transform Data" generally a safer habit than clicking "Load" directly, even if the data looks clean?',
          options: ['Load is always slower than Transform Data', 'Transform Data opens the Power Query Editor first, letting you fix any hidden problems before the data ever reaches your report, at no real cost if nothing needs fixing', 'Load deletes the original source file', '"Load" only works with CSV files, not Excel'],
          answerIndex: 1,
          explanation: 'Transform Data costs nothing extra if the data is genuinely clean, but saves significant rework if a problem is discovered later.'
        },
        {
          id: 'pb-b-f-9',
          type: 'mcq',
          prompt: 'A daily billing-system export arrives as a CSV file each morning. What is one key structural difference between loading a CSV versus an Excel workbook?',
          options: ['CSV files cannot contain numbers', 'A CSV has no sheets or named tables to choose between — it is one flat block of data, so there is no Navigator selection step', 'CSV loads always fail in Power BI', 'Excel files load faster in every case'],
          answerIndex: 1,
          explanation: 'CSV\'s single flat structure means there is nothing to pick between, unlike a multi-sheet Excel workbook.'
        },
        {
          id: 'pb-b-f-10',
          type: 'mcq',
          prompt: 'In the Data view, a Date column shows "ABC" (text) instead of a calendar icon. Why does this matter for a real dashboard?',
          options: ['It is purely cosmetic and has no real effect', 'A wrongly-typed Date column will silently break date-based visuals and time filters later — it should be fixed immediately after loading', 'It means the report cannot be published', 'It only affects which workspace the report can go into'],
          answerIndex: 1,
          explanation: 'Catching a wrong data type right after loading is quick; catching it after several visuals already depend on it is far more disruptive.'
        },
        {
          id: 'pb-b-f-11',
          type: 'mcq',
          prompt: 'Is the Power Query Editor inside Power BI a different tool from the one in Excel?',
          options: ['Yes, they have completely separate feature sets', 'No — Power BI uses the same Power Query Editor and the same Applied Steps concept as Excel', 'Power BI\'s version cannot remove duplicates', 'Excel\'s version cannot split columns'],
          answerIndex: 1,
          explanation: 'Power Query is shared across both products, including the recorded, replayable Applied Steps approach to cleanup.'
        },
        {
          id: 'pb-b-f-12',
          type: 'mcq',
          prompt: 'Brew & Bite\'s City column has "mumbai", " Mumbai", and "MUMBAI" all meaning the same city. Which two Power Query transformations, used together, fix this?',
          options: ['Remove Columns and Sort Ascending', 'Trim and Capitalize Each Word', 'Merge Queries and Change Type', 'Group By and Filter Rows'],
          answerIndex: 1,
          explanation: 'Trim removes the inconsistent extra spaces, and Capitalize Each Word standardises the casing, together producing a single consistent value.'
        },
        {
          id: 'pb-b-f-13',
          type: 'mcq',
          prompt: 'A register glitch caused a few sales rows to appear twice in the export. Which Power Query transformation fixes this?',
          options: ['Change Type', 'Remove Duplicates', 'Trim', 'Capitalize Each Word'],
          answerIndex: 1,
          explanation: 'Remove Duplicates eliminates rows that repeat based on the column(s) selected, exactly the case of an accidental double-entry.'
        },
        {
          id: 'pb-b-f-14',
          type: 'mcq',
          prompt: 'What is the Applied Steps panel useful for when troubleshooting an unexpected result?',
          options: ['It permanently deletes the original source file', 'Clicking any previous step shows exactly what the data looked like at that point, helping pinpoint where something went wrong', 'It automatically fixes any error without input', 'It only shows the very first and very last steps'],
          answerIndex: 1,
          explanation: 'Being able to step backward through each named transformation makes isolating the source of a problem straightforward.'
        },
        {
          id: 'pb-b-f-15',
          type: 'mcq',
          prompt: 'What does Home → Close & Apply do in the Power Query Editor?',
          options: ['Deletes every cleanup step you just built', 'Loads the cleaned data into the report\'s data model, ready for visuals to be built from it', 'Immediately publishes the report to the Service', 'Reopens the Navigator window'],
          answerIndex: 1,
          explanation: 'Close & Apply is the Power BI equivalent of Excel\'s Close & Load, bringing the cleaned result into the report itself.'
        },
        {
          id: 'pb-b-f-16',
          type: 'mcq',
          prompt: 'Which view in Power BI Desktop is the actual canvas where charts and visuals are placed?',
          options: ['Data view', 'Report view', 'Model view', 'Power Query Editor'],
          answerIndex: 1,
          explanation: 'Report view is the blank canvas for building visuals; Data and Model views are for inspecting tables and relationships instead.'
        },
        {
          id: 'pb-b-f-17',
          type: 'fill-blank',
          prompt: 'Write the DAX formula for a new calculated column called Revenue, equal to the Sales table\'s Quantity column multiplied by its Price column.',
          correctAnswers: ['revenue = sales[quantity] * sales[price]', 'revenue=sales[quantity]*sales[price]'],
          explanation: 'Revenue = Sales[Quantity] * Sales[Price] creates a new column giving every row its own calculated revenue value.'
        },
        {
          id: 'pb-b-f-18',
          type: 'mcq',
          prompt: 'You drag City onto the X-axis and Revenue onto the Y-axis of a column chart. What does Power BI do by default with the Revenue values?',
          options: ['Shows only the first row\'s value', 'Automatically aggregates (typically sums) Revenue for each city', 'Leaves the chart blank until a formula is written', 'Throws an error, since two fields cannot combine this way'],
          answerIndex: 1,
          explanation: 'Power BI automatically aggregates a numeric field dropped alongside a category field — summing is the default.'
        },
        {
          id: 'pb-b-f-19',
          type: 'mcq',
          prompt: 'The owner wants to compare revenue across the 3 cities side by side. Which chart type is the safest default choice?',
          options: ['A pie chart with 3 slices', 'A bar/column chart', 'A Card showing a single number', 'A Slicer'],
          answerIndex: 1,
          explanation: 'Bar/column charts are the clearest, most accurate way to compare values across a small number of categories like cities.'
        },
        {
          id: 'pb-b-f-20',
          type: 'mcq',
          prompt: 'You already built a column chart of Revenue by Date. You want to see the same data as a line chart instead. What is the fastest way?',
          options: ['Delete the visual and build an entirely new line chart from scratch', 'Select the existing visual and click the line chart icon in the Visualizations pane — the same fields carry over', 'Export the data, reimport it, then rebuild', 'This is not possible — chart types are permanent once chosen'],
          answerIndex: 1,
          explanation: 'Changing a selected visual\'s type keeps its assigned fields and simply redraws them in the new chart type.'
        },
        {
          id: 'pb-b-f-21',
          type: 'mcq',
          prompt: 'What does adding a Slicer for City to a report page let a viewer do?',
          options: ['Permanently delete data for other cities', 'Click a city and have every visual on the page that uses the same table update to reflect that selection', 'Change the report\'s underlying DAX formulas', 'Republish the report automatically'],
          answerIndex: 1,
          explanation: 'A Slicer gives the viewer a self-service way to filter every connected visual on the page with a single click.'
        },
        {
          id: 'pb-b-f-22',
          type: 'mcq',
          prompt: 'Setting a date Slicer\'s style to "Between" gives the viewer what kind of control?',
          options: ['A single dropdown listing every individual date', 'A from/to date range picker, letting them narrow the report to a custom time window', 'A button that resets the entire report', 'A way to add new dates to the data'],
          answerIndex: 1,
          explanation: '"Between" style converts a date slicer into a range selector, ideal for narrowing reports to a specific period like one week.'
        },
        {
          id: 'pb-b-f-23',
          type: 'mcq',
          prompt: 'What is the difference between "Filters on this visual" and "Filters on all pages" in the Filters pane?',
          options: ['They behave identically in every situation', '"This visual" affects only the single selected chart; "All pages" affects the entire report, every page', '"All pages" only works with Slicers', '"This visual" filters cannot be edited once applied'],
          answerIndex: 1,
          explanation: 'The Filters pane offers three scopes — visual, page, and all pages — each widening the area that the filter applies to.'
        },
        {
          id: 'pb-b-f-24',
          type: 'mcq',
          prompt: 'The owner wants viewers to be able to pick their own city, but she also wants test/dummy transactions excluded everywhere, with no way for a viewer to accidentally bring them back. Which tools fit each need respectively?',
          options: ['A Filter for the city choice, a Slicer for excluding test data', 'A Slicer for the city choice (viewer-facing), and an "all pages" Filter for excluding test data (locked, invisible to the viewer)', 'Both needs should use the same single Slicer', 'Neither need is possible in Power BI'],
          answerIndex: 1,
          explanation: 'Slicers suit viewer-facing, changeable choices; Filters suit decisions the report builder locks in and the viewer cannot undo.'
        },
        {
          id: 'pb-b-f-25',
          type: 'mcq',
          prompt: 'Why is a finished report still not useful to Brew & Bite\'s owner the moment it is built in Power BI Desktop?',
          options: ['Desktop reports automatically expire after a day', 'The report only exists on the local computer it was built on — nobody else can view it until it is published somewhere accessible', 'Desktop cannot save files', 'Charts disappear once Desktop is closed'],
          answerIndex: 1,
          explanation: 'Desktop is purely an authoring tool — publishing to the Service is what makes a report accessible to anyone else.'
        },
        {
          id: 'pb-b-f-26',
          type: 'mcq',
          prompt: 'What is a workspace in the Power BI Service?',
          options: ['A local folder on your computer', 'A shared space where published reports live, which specific people can be granted access to', 'A chart type', 'A setting only available in Power BI Desktop'],
          answerIndex: 1,
          explanation: '"My workspace" is private by default; a real team would typically publish to a shared workspace specific colleagues can access.'
        },
        {
          id: 'pb-b-f-27',
          type: 'mcq',
          prompt: 'What is the key difference between a Report and a Dashboard in the Power BI Service?',
          options: ['They are the same thing with two different names', 'A Report is the full multi-page document built in Desktop; a Dashboard is a single page assembled in the Service by pinning individual visuals, often from several reports', 'Dashboards cannot display charts, only text', 'Reports can never be shared with anyone'],
          answerIndex: 1,
          explanation: 'Reports are authored in Desktop with full page-by-page interactivity; Dashboards combine pinned visuals into one summary screen built in the Service.'
        },
        {
          id: 'pb-b-f-28',
          type: 'mcq',
          prompt: 'What does Scheduled Refresh allow a published report to do?',
          options: ['Automatically rearrange its visuals daily', 'Automatically reload from its original data source on a set schedule, so it reflects new data without manual republishing', 'Email a PDF copy to every employee automatically', 'Switch itself from a Report into a Dashboard'],
          answerIndex: 1,
          explanation: 'Scheduled Refresh keeps a published report current by re-pulling from its source on a timer, rather than staying frozen at publish time.'
        },
        {
          id: 'pb-b-f-29',
          type: 'mcq',
          prompt: 'After publishing, a chart in the Service still shows your old data, even though you made changes in Desktop. What is the most likely cause?',
          options: ['The Power BI Service is permanently broken', 'You published before saving (Ctrl+S) the latest changes in your .pbix file in Desktop, so the Service received an older version', 'Dashboards always lag 24 hours behind Reports', 'Publishing only works once per file, ever'],
          answerIndex: 1,
          explanation: 'Publishing sends whatever is currently open in Desktop — saving immediately beforehand ensures the most recent version is what gets published.'
        },
        {
          id: 'pb-b-f-30',
          type: 'fill-blank',
          prompt: 'Across this whole track — loading, cleaning, visualising, adding interactivity, and publishing — what single word describes the recurring theme of letting a non-technical viewer explore data ______, instead of reading a static report?',
          correctAnswers: ['interactively', 'themselves'],
          explanation: 'Every feature in this track — slicers, filters, Cards, charts — ultimately serves the same goal: letting a viewer explore the data interactively, on their own, rather than just reading a fixed document.'
        }
      ]
    },
    intermediate: {
      title: 'Power BI Intermediate Final Assessment',
      intro: 'Test your knowledge across all 6 Power BI intermediate modules — data modelling and relationships, DAX measures, time intelligence, drill-through and bookmarks, row-level security, and mobile design. Built around Brew & Bite\'s growth into a 6-café chain with multiple managers.',
      questions: [
        {
          id: 'pb-i-f-1',
          type: 'mcq',
          prompt: 'Why does Brew & Bite split its data into separate Sales, Items, and Cities tables as the business grows, instead of one flat table?',
          options: ['Power BI has a hard limit on how many columns one table can have', 'Repeating item and city details on every sales row becomes a maintenance nightmare at real volume — splitting into related tables avoids that', 'Flat tables cannot be charted in Power BI', 'It is required before any report can be published'],
          answerIndex: 1,
          explanation: 'A star-schema-style split avoids the maintenance burden of repeating descriptive data across every transaction row.'
        },
        {
          id: 'pb-i-f-2',
          type: 'mcq',
          prompt: 'Which view is used to build and inspect relationships between tables in Power BI Desktop?',
          options: ['Report view', 'Data view', 'Model view', 'Power Query Editor'],
          answerIndex: 2,
          explanation: 'Model view shows each loaded table as a box with relationship lines connecting them.'
        },
        {
          id: 'pb-i-f-3',
          type: 'mcq',
          prompt: 'In the Sales-to-Items relationship, which table is the "many" side?',
          options: ['Items', 'Sales, since many transaction rows can reference the same single item', 'Neither — they are always one-to-one', 'Both tables equally'],
          answerIndex: 1,
          explanation: 'Many sales rows can point to the same product, making Sales the "many" side and Items the "one" side.'
        },
        {
          id: 'pb-i-f-4',
          type: 'mcq',
          prompt: 'Why should the "Both" cross filter direction be applied carefully, rather than to every relationship as a default?',
          options: ['It makes the file impossible to save', 'It can create ambiguous filtering paths, leading to visuals behaving unexpectedly when there is no longer one clear path for the filter to follow', 'It only works with numeric columns', 'It disables every visual on the page'],
          answerIndex: 1,
          explanation: 'Single direction is the safe default; "Both" should be a deliberate choice for a specific, understood scenario.'
        },
        {
          id: 'pb-i-f-5',
          type: 'mcq',
          prompt: 'What does RELATED(Items[Price]) do inside a calculation on the Sales table?',
          options: ['Deletes the Price column from Items', 'Reaches across the relationship to fetch the matching Price for the current Sales row', 'Sorts Items by price descending', 'Converts Price to a percentage'],
          answerIndex: 1,
          explanation: 'RELATED follows an existing relationship from the "many" side to fetch a value from the related "one" side.'
        },
        {
          id: 'pb-i-f-6',
          type: 'mcq',
          prompt: 'What is the core difference between a calculated column and a measure?',
          options: ['They are the same thing with two names', 'A calculated column computes once per row and is stored; a measure recalculates dynamically based on the current filter context every time it is used', 'Calculated columns update live with every slicer click, but measures do not', 'Measures cannot reference other tables'],
          answerIndex: 1,
          explanation: 'This dynamic, context-aware recalculation is the entire point of a measure, unlike a static, stored calculated column.'
        },
        {
          id: 'pb-i-f-7',
          type: 'fill-blank',
          prompt: 'Write the DAX measure that sums revenue across the Sales table, multiplying Quantity by the related Items price, using SUMX and RELATED.',
          correctAnswers: ['total revenue = sumx(sales, sales[quantity] * related(items[price]))', 'sumx(sales, sales[quantity] * related(items[price]))'],
          explanation: 'SUMX iterates row by row over Sales, multiplying each row\'s Quantity by the related Items price, then sums the result.'
        },
        {
          id: 'pb-i-f-8',
          type: 'mcq',
          prompt: 'What does CALCULATE([Total Revenue], Cities[City] = "Mumbai") produce?',
          options: ['A new table called Mumbai', 'Total Revenue recomputed, forced to only consider rows where the related city is Mumbai, regardless of other report filters', 'An error, since CALCULATE only accepts one argument', 'A permanent change to the underlying data'],
          answerIndex: 1,
          explanation: 'CALCULATE recomputes an existing measure under a modified filter context.'
        },
        {
          id: 'pb-i-f-9',
          type: 'mcq',
          prompt: 'What does New Quick Measure provide?',
          options: ['A way to permanently delete a measure', 'Common calculation templates (running total, percent of grand total, etc.) that generate working DAX automatically', 'A shortcut to publish the report', 'A tool only for renaming columns'],
          answerIndex: 1,
          explanation: 'Quick Measures both save time and serve as a way to learn correct DAX patterns by inspecting the generated formula.'
        },
        {
          id: 'pb-i-f-10',
          type: 'mcq',
          prompt: 'What is required before time intelligence functions like TOTALYTD will calculate correctly?',
          options: ['A published report', 'A continuous, properly recognised date column, ideally marked as a Date Table or a dedicated Calendar table', 'At least one Row-Level Security role', 'A mobile layout built for every page'],
          answerIndex: 1,
          explanation: 'Time intelligence functions depend on a correctly recognised date column to calculate periods accurately.'
        },
        {
          id: 'pb-i-f-11',
          type: 'mcq',
          prompt: 'What does TOTALYTD([Total Revenue], Sales[Date]) show when used in a chart broken down by month?',
          options: ['Only that single month\'s revenue', 'The cumulative running total from January through the end of that month', 'Next year\'s forecasted revenue', 'The average revenue for the whole year'],
          answerIndex: 1,
          explanation: 'TOTALYTD accumulates a measure from the start of the year up to the current filter context.'
        },
        {
          id: 'pb-i-f-12',
          type: 'mcq',
          prompt: 'What does SAMEPERIODLASTYEAR(Sales[Date]) do inside a CALCULATE?',
          options: ['Permanently deletes last year\'s rows', 'Shifts the current date filter back exactly one year, enabling a year-over-year comparison', 'Predicts future sales using machine learning', 'Converts the Date column to text'],
          answerIndex: 1,
          explanation: 'SAMEPERIODLASTYEAR shifts the filter context back a year so the same measure reflects the equivalent prior-year period.'
        },
        {
          id: 'pb-i-f-13',
          type: 'mcq',
          prompt: 'How does DATEADD(Sales[Date], -1, MONTH) differ from SAMEPERIODLASTYEAR?',
          options: ['They are unrelated and cannot both be used in one model', 'DATEADD is a more flexible building block that can shift by any unit (day, month, quarter, year); SAMEPERIODLASTYEAR is effectively a shortcut for shifting back exactly one year', 'DATEADD only works on text columns', 'SAMEPERIODLASTYEAR works on non-date columns too'],
          answerIndex: 1,
          explanation: 'SAMEPERIODLASTYEAR is essentially DATEADD(..., -1, YEAR) — DATEADD is the more general tool underneath it.'
        },
        {
          id: 'pb-i-f-14',
          type: 'mcq',
          prompt: 'What does setting up a drill-through page let a viewer do?',
          options: ['Edit the report\'s DAX directly from a right-click menu', 'Right-click a specific data point on a summary page and jump to a dedicated detail page, automatically filtered to that selection', 'Permanently remove a data point from the model', 'Convert any visual into a Slicer'],
          answerIndex: 1,
          explanation: 'Drill-through carries the clicked value as a filter onto a detail page built for deeper exploration of that specific selection.'
        },
        {
          id: 'pb-i-f-15',
          type: 'mcq',
          prompt: 'Why might drill-through be preferred over adding a City Slicer directly to a clean summary page?',
          options: ['Slicers are not supported on summary pages', 'Drill-through keeps the summary page focused, while still offering detailed exploration one right-click away when actually needed', 'Drill-through always calculates faster than a Slicer', 'They solve entirely unrelated problems'],
          answerIndex: 1,
          explanation: 'A summary page stays uncluttered without detail-only visuals, while drill-through still provides a path to deeper data on demand.'
        },
        {
          id: 'pb-i-f-16',
          type: 'mcq',
          prompt: 'What does a Bookmark capture when created via View → Bookmarks → Add Bookmark?',
          options: ['Only the file\'s size on disk', 'The current report state — slicer selections, applied filters, and which visuals are visible', 'A static, non-interactive screenshot', 'A backup copy of the entire dataset'],
          answerIndex: 1,
          explanation: 'A bookmark remembers the live, interactive state of the report, restorable later with one click.'
        },
        {
          id: 'pb-i-f-17',
          type: 'mcq',
          prompt: 'How do you connect a button on the canvas to jump to a specific bookmark when clicked?',
          options: ['Buttons cannot be linked to bookmarks', 'Select the button, open Format pane → Action, turn it on, set Type to Bookmark, and choose the target bookmark', 'Rename the button to exactly match the bookmark name', 'Buttons automatically link to the most recent bookmark'],
          answerIndex: 1,
          explanation: 'The Action setting in the Format pane is what wires a button to a bookmark (or other navigation target).'
        },
        {
          id: 'pb-i-f-18',
          type: 'mcq',
          prompt: 'What is the purpose of Row-Level Security (RLS)?',
          options: ['To prevent the report from ever being edited', 'To restrict which rows of data a given viewer can see, within the same published report everyone uses', 'To make a report load faster for every viewer', 'To control which chart types appear in the Visualizations pane'],
          answerIndex: 1,
          explanation: 'RLS lets one report show correctly restricted, different data depending on who is viewing it.'
        },
        {
          id: 'pb-i-f-19',
          type: 'mcq',
          prompt: 'A role filters Cities to [City] = "Mumbai". Why does this also restrict the much larger Sales table?',
          options: ['It does not — Sales stays fully visible', 'Because Cities is related to Sales, the filter cascades through the relationship and restricts Sales wherever that relationship reaches', 'Every role automatically applies to every table with no relationship needed', 'The same filter must be manually duplicated onto Sales'],
          answerIndex: 1,
          explanation: 'A relationship lets a filter on a small lookup table automatically restrict the related fact table too.'
        },
        {
          id: 'pb-i-f-20',
          type: 'mcq',
          prompt: 'What is the purpose of Modeling → View As when testing an RLS role?',
          options: ['It permanently locks the role for every future viewer', 'It previews the report exactly as that role would see it, before publishing — the key way to verify a role works correctly', 'It deletes the role after testing', 'It only works after a report has already been published'],
          answerIndex: 1,
          explanation: 'View As is essential for catching a broken or incorrect role before real users ever see a wrong (or unrestricted) report.'
        },
        {
          id: 'pb-i-f-21',
          type: 'mcq',
          prompt: 'Why does a dynamic role using USERPRINCIPALNAME() scale better than one static role per city?',
          options: ['It does not — they behave identically', 'A single dynamic role automatically restricts each manager based on who is logged in, instead of requiring a new hand-written role every time a city is added', 'USERPRINCIPALNAME() only supports up to 3 users', 'Dynamic roles require no DAX at all, unlike static roles'],
          answerIndex: 1,
          explanation: 'Comparing the logged-in user against a data column scales to any number of locations without writing a new role each time.'
        },
        {
          id: 'pb-i-f-22',
          type: 'mcq',
          prompt: 'When does Row-Level Security actually become enforced for real users?',
          options: ['Immediately when created in Desktop, even before publishing', 'After publishing, once users are assigned to the correct role in the dataset\'s Security settings in the Power BI Service', 'Only after exporting the report to PDF', 'RLS only restricts the report\'s original author'],
          answerIndex: 1,
          explanation: 'Roles are authored in Desktop, but enforcement for real users requires publishing and assigning accounts to roles in the Service.'
        },
        {
          id: 'pb-i-f-23',
          type: 'mcq',
          prompt: 'Why does a desktop report layout not automatically work well on a phone screen?',
          options: ['Phones cannot run Power BI at all', 'Shrinking a wide desktop layout proportionally makes text unreadable and touch targets too small for a narrow screen', 'Mobile devices do not support charts', 'Power BI reports are always read-only on phones'],
          answerIndex: 1,
          explanation: 'A layout designed for a wide screen does not translate cleanly to a narrow one without deliberate redesign.'
        },
        {
          id: 'pb-i-f-24',
          type: 'mcq',
          prompt: 'What happens if a report page has no mobile layout built for it?',
          options: ['The page becomes completely inaccessible on the Power BI Mobile app', 'The Mobile app falls back to a scaled-down version of the full desktop page, which works but can feel cramped', 'The report automatically deletes that page on phones', 'Mobile users see a blank page instead'],
          answerIndex: 1,
          explanation: 'Without an explicit mobile layout, the app shows a scaled desktop view rather than a purpose-built phone layout.'
        },
        {
          id: 'pb-i-f-25',
          type: 'mcq',
          prompt: 'For a Brew & Bite manager checking numbers on their phone, what should typically be prioritised at the very top of a mobile layout?',
          options: ['The most detailed chart available, regardless of size', 'The single most important headline number (like a Total Revenue Card), since that is what a quick phone glance most needs', 'A duplicate copy of the desktop layout, unchanged', 'The Power Query Editor view'],
          answerIndex: 1,
          explanation: 'Mobile layouts work best when the most important summary information is placed first, since phone use is typically a quick glance rather than deep exploration.'
        },
        {
          id: 'pb-i-f-26',
          type: 'mcq',
          prompt: 'In the relationship setup from this track, what role does the small Cities table play that makes Row-Level Security simpler to set up?',
          options: ['Cities has no special role in RLS at all', 'Because Cities is related to the much larger Sales table, a single RLS filter on Cities cascades through the relationship to correctly restrict Sales as well', 'RLS must always be written directly against the largest table', 'Cities needs to be duplicated into Sales before RLS can work'],
          answerIndex: 1,
          explanation: 'Filtering a small, related lookup table is often simpler and just as effective as writing a rule directly against a large fact table.'
        },
        {
          id: 'pb-i-f-27',
          type: 'mcq',
          prompt: 'A manager wants to compare "this month" against "last month" with one click, without manually resetting a slicer each time. Which combination of features from this track solves this directly?',
          options: ['Row-Level Security alone', 'Two Bookmarks (one per time period) connected to buttons, so clicking toggles between the two pre-set states', 'A single calculated column', 'Mobile Layout view'],
          answerIndex: 1,
          explanation: 'Bookmarks paired with buttons are exactly the feature designed for jumping between pre-configured report states with one click.'
        },
        {
          id: 'pb-i-f-28',
          type: 'mcq',
          prompt: 'Why is DIVIDE preferred over a plain a/b division inside a measure like Average Order Value?',
          options: ['DIVIDE is simply shorter to type', 'DIVIDE returns blank instead of an error when the denominator is zero — such as a filtered view with no matching sales rows', 'Plain division is not valid DAX syntax at all', 'DIVIDE always rounds the result to whole numbers'],
          answerIndex: 1,
          explanation: 'DIVIDE handles a zero denominator gracefully, avoiding broken visuals when a filter context produces no matching rows.'
        },
        {
          id: 'pb-i-f-29',
          type: 'mcq',
          prompt: 'After finishing the mobile layout for the capstone report, why does the lesson recommend testing the RLS role with View As one more time?',
          options: ['View As is required only once and never needs repeating', 'Adding new visuals or measures late in the process can introduce a field not properly covered by existing relationships, which View As would reveal', 'Mobile layouts automatically disable all RLS roles', 'It is purely a formality with no real purpose'],
          answerIndex: 1,
          explanation: 'Late additions to a report can quietly introduce gaps in security coverage — re-testing with View As catches this before publishing.'
        },
        {
          id: 'pb-i-f-30',
          type: 'mcq',
          prompt: 'Across this whole track — relationships, measures, time intelligence, drill-through/bookmarks, RLS, and mobile design — what common challenge do all of these features ultimately address?',
          options: ['Making the report file smaller in size', 'Making one single report work correctly for different kinds of users and different kinds of devices, rather than one fixed view for everyone', 'Removing the need for any data cleaning', 'Replacing the need for Power BI Desktop entirely'],
          answerIndex: 1,
          explanation: 'RLS and drill-through/bookmarks adapt a report to different users; mobile layout adapts it to different devices — the core challenge of real BI work at any scale.'
        }
      ]
    },
    advanced: {
      title: 'Power BI Advanced Final Assessment',
      intro: 'Test your knowledge across all 6 Power BI advanced modules — advanced DAX patterns, performance tuning, custom visuals, embedded analytics, workspace governance, and Premium features. Built around Brew & Bite\'s growth into a 50-outlet franchise with a head-office BI team and a partner portal.',
      questions: [
        {
          id: 'pb-a-f-1',
          type: 'mcq',
          prompt: 'What is the main benefit of using VAR and RETURN inside a complex DAX measure?',
          options: ['It is mandatory syntax for every measure', 'It computes a sub-expression once under a name and reuses it, improving readability and often performance versus repeating the expression', 'It permanently stores the result as a new physical column', 'It disables all filters on the measure'],
          answerIndex: 1,
          explanation: 'VAR/RETURN avoids recomputing the same logic multiple times and makes measures far easier to read and debug.'
        },
        {
          id: 'pb-a-f-2',
          type: 'mcq',
          prompt: 'What does RANKX(ALL(Cities[City]), [Total Revenue]) produce for a head-office leaderboard?',
          options: ['The combined total revenue of all cities', 'Each city\'s rank compared against every other city\'s revenue, ignoring whatever filter the report itself currently has on City', 'A random, non-meaningful number', 'The count of distinct cities only'],
          answerIndex: 1,
          explanation: 'ALL(Cities[City]) clears any existing filter on City so every outlet is ranked against every other outlet fairly.'
        },
        {
          id: 'pb-a-f-3',
          type: 'mcq',
          prompt: 'What is the key difference between ALL and ALLSELECTED?',
          options: ['No real difference exists', 'ALL ignores every filter on a column everywhere, including slicers; ALLSELECTED respects filters from outside the visual (like a slicer) while still ignoring the visual\'s own internal row context', 'ALLSELECTED only works inside Cards', 'ALL can only be used with text columns'],
          answerIndex: 1,
          explanation: 'This distinction matters for percentage-of-total measures that should respect a slicer\'s narrowing while still computing correctly per row.'
        },
        {
          id: 'pb-a-f-4',
          type: 'mcq',
          prompt: 'What does ALLEXCEPT(Cities, Cities[Region]) achieve in a "share within region" measure?',
          options: ['It removes every filter from the model entirely', 'It removes every filter on the Cities table except Region, so the measure shows an outlet\'s share of its own region\'s total', 'It only works on the Sales table, never Cities', 'It deletes the Region column'],
          answerIndex: 1,
          explanation: 'ALLEXCEPT keeps the named filter (Region) while clearing all other filters on that table, useful for "share within a group" calculations.'
        },
        {
          id: 'pb-a-f-5',
          type: 'mcq',
          prompt: 'What does a What-If Parameter (like a Discount %) let a viewer explore?',
          options: ['Permanent edits to the underlying source data', 'An interactive scenario, with measures recalculating live as the parameter is adjusted, without changing the actual data', 'A way to change workspace roles', 'A way to delete rows from Sales'],
          answerIndex: 1,
          explanation: 'What-if parameters generate a measure a viewer can adjust live for scenario analysis, with no impact on the underlying data.'
        },
        {
          id: 'pb-a-f-6',
          type: 'mcq',
          prompt: 'What should you do before attempting to optimise a report that feels slow?',
          options: ['Immediately rebuild the most visually complex chart', 'Use Performance Analyzer to measure exactly which visual and which part (DAX vs rendering) is actually slow', 'Switch every table to DirectQuery without investigation', 'Reduce every visual\'s font size'],
          answerIndex: 1,
          explanation: 'Performance Analyzer gives a real measured breakdown, often revealing the actual bottleneck is not the visual you would have assumed.'
        },
        {
          id: 'pb-a-f-7',
          type: 'mcq',
          prompt: 'What is the core tradeoff between Import and DirectQuery storage modes?',
          options: ['They behave identically in every situation', 'Import copies data into a fast in-memory engine but is only as fresh as the last refresh; DirectQuery stays live but every click depends on the source database\'s query speed', 'DirectQuery is always faster regardless of source', 'Import cannot use relationships between tables'],
          answerIndex: 1,
          explanation: 'Import trades freshness for speed; DirectQuery trades raw speed for always-current data pulled live from the source.'
        },
        {
          id: 'pb-a-f-8',
          type: 'mcq',
          prompt: 'Why is a column with extremely high cardinality (like a precise per-second timestamp) a performance concern in an Import model?',
          options: ['High-cardinality columns cannot be loaded at all', 'A column where almost every row has a distinct value compresses poorly in the in-memory engine, increasing model size and slowing performance', 'It only matters for DirectQuery, never Import', 'It has no measurable effect on performance'],
          answerIndex: 1,
          explanation: 'The VertiPaq engine compresses repeated values efficiently; mostly-unique columns compress far less effectively.'
        },
        {
          id: 'pb-a-f-9',
          type: 'mcq',
          prompt: 'What is the purpose of an Aggregation table at very large scale?',
          options: ['To delete the underlying detailed data permanently', 'To provide a pre-summarised, much smaller table that high-level visuals use automatically, only falling back to full detail when a viewer drills in', 'To replace the need for any relationships in the model', 'To convert every table into DirectQuery automatically'],
          answerIndex: 1,
          explanation: 'Aggregations let summary-level visuals query a small pre-summarised table instead of scanning the full detail every time.'
        },
        {
          id: 'pb-a-f-10',
          type: 'mcq',
          prompt: 'What is AppSource, in the context of Power BI?',
          options: ['A built-in default chart type', 'A marketplace of community and Microsoft-built custom visuals, installable with one click and usable like any native chart type', 'A workspace governance setting', 'A way to schedule dataset refreshes'],
          answerIndex: 1,
          explanation: 'AppSource hosts custom visuals (box plots, Sankey diagrams, and more) beyond Power BI\'s default chart library.'
        },
        {
          id: 'pb-a-f-11',
          type: 'mcq',
          prompt: 'What is a genuine limitation of a Python or R script visual compared to a native Power BI chart?',
          options: ['It cannot display any numeric data', 'It renders as a static image and does not support native interactivity like cross-filtering other visuals when clicked', 'It cannot be created inside Power BI Desktop at all', 'It only works with text-based data'],
          answerIndex: 1,
          explanation: 'Script visuals lose native click-to-cross-filter interactivity, a real cost that should be weighed before choosing one.'
        },
        {
          id: 'pb-a-f-12',
          type: 'mcq',
          prompt: 'According to best practice, when should a Python or R visual be reached for instead of a native or AppSource visual?',
          options: ['As the default first choice for every chart', 'Only when a genuinely specific statistical chart is required and no native or AppSource visual already covers it', 'Whenever a report needs to load faster', 'Only on mobile report layouts'],
          answerIndex: 1,
          explanation: 'The interactivity tradeoff means script visuals are a deliberate, narrow-use tool rather than a default choice.'
        },
        {
          id: 'pb-a-f-13',
          type: 'mcq',
          prompt: 'For Brew & Bite\'s franchise partner portal, where partners have no personal Power BI account, which embedding approach fits?',
          options: ['"Embed for your organisation"', '"Embed for your customers" (App Owns Data), since partners are authenticated entirely by the host portal application, not by their own Power BI login', 'Neither approach supports external users at all', 'Partners must each be given a personal Power BI Pro license first'],
          answerIndex: 1,
          explanation: 'App Owns Data is specifically designed for external viewers with no Power BI account of their own.'
        },
        {
          id: 'pb-a-f-14',
          type: 'mcq',
          prompt: 'In the "embed for your customers" flow, who actually requests the embed token from Power BI?',
          options: ['Each individual partner, logging in with their own Power BI credentials', 'The host application\'s own backend, using a dedicated service identity, on behalf of the partner', 'No authentication happens at any stage', 'The partner\'s web browser, directly contacting Power BI'],
          answerIndex: 1,
          explanation: 'The portal\'s backend authenticates and requests a scoped token; the external partner never logs into Power BI themselves.'
        },
        {
          id: 'pb-a-f-15',
          type: 'mcq',
          prompt: 'Why is Row-Level Security described as essential, not optional, when embedding a report for external franchise partners?',
          options: ['RLS and embedding are unrelated features', 'Without RLS, an embed token for "the report" would show the same unrestricted data to every partner; combined with RLS, each partner sees only their own outlet\'s data', 'RLS only applies to internal Power BI Service users', 'RLS makes embedded reports load more slowly with no security benefit'],
          answerIndex: 1,
          explanation: 'RLS is the mechanism that makes one embedded report safely show different, correctly restricted data to each external partner.'
        },
        {
          id: 'pb-a-f-16',
          type: 'mcq',
          prompt: 'What is the Power BI REST API primarily used for?',
          options: ['Manually designing report visuals by hand', 'Programmatic operations like generating embed tokens, triggering dataset refreshes, or managing workspace users, typically called from a backend application', 'Replacing the need for Power BI Desktop entirely', 'Only for billing and invoicing'],
          answerIndex: 1,
          explanation: 'The REST API is how external applications (like a partner portal\'s backend) interact with Power BI programmatically.'
        },
        {
          id: 'pb-a-f-17',
          type: 'mcq',
          prompt: 'What licensing reality applies to embedding reports for external customers at real organisational scale?',
          options: ['It is automatically included free with standard Pro licensing', 'It requires a dedicated Power BI Embedded capacity or existing Premium capacity, a genuine cost and architecture decision', 'Only Power BI Desktop is needed, at no additional cost', 'Embedding for customers is not technically possible'],
          answerIndex: 1,
          explanation: 'Embedding for customers is a capacity-based cost separate from standard per-user Pro licensing, requiring deliberate planning.'
        },
        {
          id: 'pb-a-f-18',
          type: 'mcq',
          prompt: 'What is the difference between the Member and Viewer workspace roles?',
          options: ['They are identical in every respect', 'Member can edit and publish content and share it onward; Viewer can only view already-published content with no editing rights', 'Viewer has greater access than Member', 'Member can only view, never edit, content'],
          answerIndex: 1,
          explanation: 'Workspace roles range from full control down to view-only, with Member and Contributor offering different levels of editing/sharing ability between them.'
        },
        {
          id: 'pb-a-f-19',
          type: 'mcq',
          prompt: 'What is the purpose of a Dev → Test → Production deployment pipeline?',
          options: ['To make every visual render in a different colour automatically', 'To ensure unverified or in-progress changes are reviewed in earlier stages before being promoted to Production, where real business users see them', 'To permanently prevent any report from ever being edited again', 'To automatically translate reports into other languages'],
          answerIndex: 1,
          explanation: 'Deployment pipelines apply standard software-development discipline to BI content, preventing half-finished work from reaching real users.'
        },
        {
          id: 'pb-a-f-20',
          type: 'mcq',
          prompt: 'What problem does a shared, certified dataset solve at head-office scale?',
          options: ['It changes the visual theme of every report', 'It prevents multiple analysts from each redefining the same measure (like Total Revenue) slightly differently across separate reports, avoiding inconsistent numbers', 'It is a prerequisite before any report can be published at all', 'It automatically converts DAX measures into SQL'],
          answerIndex: 1,
          explanation: 'A single shared, certified dataset gives every report the same trusted definitions, avoiding the "five analysts, five different numbers" problem.'
        },
        {
          id: 'pb-a-f-21',
          type: 'mcq',
          prompt: 'What do sensitivity labels address that workspace roles alone do not?',
          options: ['Exactly the same concern as workspace roles, just renamed', 'How sensitive content is and what handling rules (like export or external-sharing restrictions) should automatically follow it, rather than simply who is allowed access', 'Which chart types are permitted in a report', 'How frequently a dataset refreshes'],
          answerIndex: 1,
          explanation: 'Sensitivity labels classify data sensitivity and apply handling policies, a different concern from the access-control question workspace roles answer.'
        },
        {
          id: 'pb-a-f-22',
          type: 'mcq',
          prompt: 'What is managed through the Power BI Admin Portal that is distinct from any single workspace\'s own settings?',
          options: ['Only the colour theme of one report', 'Tenant-wide settings — such as whether publishing to the web is allowed, who can create new workspaces, and organisation-wide usage metrics', 'An individual user\'s personal device settings', 'A single visual\'s formatting options'],
          answerIndex: 1,
          explanation: 'The Admin Portal governs organisation-wide tenant settings, managed by a Power BI administrator, separate from any individual workspace.'
        },
        {
          id: 'pb-a-f-23',
          type: 'mcq',
          prompt: 'What real limitation of standard Pro licensing does Premium capacity primarily raise?',
          options: ['The number of charts allowed per report', 'Dataset size limits (capped around 1 GB on Pro) and the number of scheduled refreshes per day, both increased substantially under Premium', 'The number of colours available for formatting', 'The maximum length of a report\'s title'],
          answerIndex: 1,
          explanation: 'Premium capacity raises dataset size ceilings and refresh frequency limits well beyond what standard Pro licensing allows.'
        },
        {
          id: 'pb-a-f-24',
          type: 'mcq',
          prompt: 'When is a Paginated Report the better tool than a standard interactive Power BI report?',
          options: ['Whenever any chart is needed at all', 'When a precisely formatted, page-by-page document is required — like a franchise royalty statement that must look identical and correctly paginated every time it is printed or exported', 'Only when a report has zero numeric data', 'Never — paginated reports are always inferior to standard reports'],
          answerIndex: 1,
          explanation: 'Paginated Reports are purpose-built for pixel-perfect, printable, page-by-page documents, unlike the interactive on-screen design of standard reports.'
        },
        {
          id: 'pb-a-f-25',
          type: 'mcq',
          prompt: 'What does the Q&A AI feature let a viewer do?',
          options: ['Permanently change the underlying dataset', 'Type a plain-English question and have Power BI automatically generate a matching visual, using the model\'s field names and synonyms', 'Chat with a live human support agent', 'Translate the entire report into another language'],
          answerIndex: 1,
          explanation: 'Q&A interprets a typed natural-language question against the data model and builds a corresponding visual automatically.'
        },
        {
          id: 'pb-a-f-26',
          type: 'mcq',
          prompt: 'Why does Q&A tend to work best on a clean, well-modelled dataset?',
          options: ['Q&A does not actually depend on the model\'s structure at all', 'Q&A relies heavily on sensible, well-named fields and measures to correctly interpret a typed question and match it to the right data', 'Q&A only works on datasets smaller than 100 rows', 'Q&A requires every column to be numeric'],
          answerIndex: 1,
          explanation: 'Natural-language interpretation depends on clear field and measure naming to correctly map a question to the underlying data.'
        },
        {
          id: 'pb-a-f-27',
          type: 'mcq',
          prompt: 'What is a Dataflow, conceptually?',
          options: ['A type of chart visual', 'A Power Query cleanup recipe saved centrally in the Service, reusable by multiple reports across multiple workspaces, instead of being redefined inside each individual file', 'A replacement for Row-Level Security', 'A built-in AI chatbot feature'],
          answerIndex: 1,
          explanation: 'Dataflows centralise data preparation logic so it is defined once and reused, rather than duplicated inside every separate report file.'
        },
        {
          id: 'pb-a-f-28',
          type: 'fill-blank',
          prompt: 'Which DAX function is used specifically to rank one value (like an outlet\'s revenue) against a set of others?',
          correctAnswers: ['rankx'],
          explanation: 'RANKX ranks a measure\'s result for the current row/context against the same measure evaluated across a specified table or column.'
        },
        {
          id: 'pb-a-f-29',
          type: 'fill-blank',
          prompt: 'Which Power BI tool would you open to measure exactly which visual on a page is slow, broken down by DAX query time vs rendering time?',
          correctAnswers: ['performance analyzer'],
          explanation: 'Performance Analyzer provides a per-visual timing breakdown, the starting point for any real performance investigation.'
        },
        {
          id: 'pb-a-f-30',
          type: 'mcq',
          prompt: 'Across this whole Advanced track — DAX patterns, performance, custom visuals, embedding, governance, and Premium features — what common thread connects all six topics?',
          options: ['They are all features exclusive to Power BI Desktop, with no Service involvement', 'Each one addresses a challenge that only emerges once Power BI moves beyond one person\'s individual report, toward a real organisation\'s shared, governed, externally-facing BI system', 'They only matter for companies with fewer than 10 employees', 'They are unrelated topics with no shared theme'],
          answerIndex: 1,
          explanation: 'Every Advanced-track topic is a response to the same underlying shift: from one analyst\'s report to a multi-stakeholder, organisation-scale BI system.'
        }
      ]
    }
  }
}

export const getCourseQuiz = (courseSlug, track) => {
  return COURSE_QUIZZES[courseSlug]?.[track] || null
}
