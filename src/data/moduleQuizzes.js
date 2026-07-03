const QUIZ_BANK = {
  // SQL
  'sql-b-1': {
    title: 'Check your understanding: What is SQL?',
    intro: 'Test what you just learned about databases and SQL.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does SQL stand for?',
        options: ['Simple Query Language', 'Structured Query Language', 'Standard Question Language', 'Sequential Query Logic'],
        answerIndex: 1,
        explanation: 'SQL stands for Structured Query Language. It is the standard language used to communicate with relational databases.'
      },
      {
        id: 'q2',
        prompt: 'Which of the following real-world scenarios would NOT typically use a SQL database?',
        options: ['A streaming app recommending movies', 'A hospital retrieving a patient medical history', 'Writing a rough draft of an essay on your laptop', 'A bank processing a debit card transaction'],
        answerIndex: 2,
        explanation: 'Writing an essay typically uses a word processor, which saves data as a simple file. Apps with massive, interconnected data rely on databases.'
      },
      {
        id: 'q3',
        prompt: 'In the query "SELECT * FROM customers;", what does the * symbol mean?',
        options: ['Run the query immediately', 'Multiply all numeric values', 'Select all columns in the table', 'Select all tables in the database'],
        answerIndex: 2,
        explanation: 'The asterisk (*) is a wildcard character in a SELECT statement that means "return every column from this table."'
      },
      {
        id: 'q4',
        prompt: 'Why are databases better than giant spreadsheets for companies like Amazon or Netflix?',
        options: ['Databases have colorful charts built-in', 'Databases can handle millions of rows efficiently and answer complex questions instantly', 'Spreadsheets cannot store numbers', 'Databases do not require any code to use'],
        answerIndex: 1,
        explanation: 'Spreadsheets slow down or crash with too much data. Databases are optimized to handle massive scale, multiple concurrent users, and complex queries instantly.'
      },
      {
        id: 'q5',
        prompt: 'Which of the following is the most accurate description of how SQL reads?',
        options: ['Like complex mathematical formulas', 'Like a series of 1s and 0s', 'Almost like a plain-English question', 'Like a visual drag-and-drop tool'],
        answerIndex: 2,
        explanation: 'SQL was designed to be declarative and read similarly to English (e.g., "SELECT name FROM users").'
      }
    ]
  },
  'sql-b-2': {
    title: 'Check your understanding: SELECT',
    intro: 'Test your knowledge on picking specific columns.',
    questions: [
      {
        id: 'q1',
        prompt: 'Why is using "SELECT *" considered bad practice in professional environments?',
        options: ['It automatically deletes all columns after reading them', 'It crashes the database software permanently', 'It wastes memory and slows down performance by pulling data you do not need', 'It changes the original table structure'],
        answerIndex: 2,
        explanation: 'Pulling columns you do not need wastes database resources and network bandwidth, especially on tables with dozens of columns and millions of rows.'
      },
      {
        id: 'q2',
        prompt: 'You have a table "employees". You only want to see their names and email addresses. Which query is correct?',
        options: ['SELECT name AND email FROM employees;', 'SELECT name, email FROM employees;', 'SELECT * FROM employees WHERE name, email;', 'EXTRACT name, email FROM employees;'],
        answerIndex: 1,
        explanation: 'You list the exact columns you want, separated by commas, immediately after the SELECT keyword.'
      },
      {
        id: 'q3',
        prompt: 'What does the "AS" keyword do in a SQL query?',
        options: ['It permanently renames the column in the database', 'It creates a temporary alias (new name) for a column in your query output', 'It sorts the column alphabetically', 'It joins two tables together'],
        answerIndex: 1,
        explanation: 'The AS keyword lets you rename columns in your final result (e.g., to make them more readable) without changing the actual database table.'
      },
      {
        id: 'q4',
        prompt: 'If a database has a column named "cust_first_nm", how would you make it appear as "First Name" in your results?',
        options: ['SELECT cust_first_nm AS "First Name"', 'CHANGE cust_first_nm TO "First Name"', 'SELECT "First Name" FROM cust_first_nm', 'RENAME cust_first_nm = "First Name"'],
        answerIndex: 0,
        explanation: 'Using AS followed by the new name allows you to clean up ugly column names in your output.'
      },
      {
        id: 'q5',
        prompt: 'What happens to the underlying database table when you run a SELECT query?',
        options: ['The table is locked and cannot be used by others', 'The data you select is removed from the table', 'Nothing—SELECT only reads data, it never modifies it', 'The database creates a permanent copy of the table'],
        answerIndex: 2,
        explanation: 'SELECT is a "read-only" command. It pulls data to show you, but never changes, moves, or deletes the original data.'
      }
    ]
  },
  'sql-b-3': {
    title: 'Check your understanding: WHERE',
    intro: 'Test your filtering skills.',
    questions: [
      {
        id: 'q1',
        prompt: 'Which query correctly finds all customers who live in "London"?',
        options: ['SELECT * FROM customers WHERE city = London;', "SELECT * FROM customers WHERE city = 'London';", 'SELECT * FROM customers FILTER city = "London";', "SELECT city = 'London' FROM customers;"],
        answerIndex: 1,
        explanation: 'Text values in SQL must be enclosed in single quotes. city = London without quotes will cause an error.'
      },
      {
        id: 'q2',
        prompt: 'You want to find all orders worth strictly more than ₹5,000. Which operator do you use?',
        options: ['>', '>=', '=>', '<'],
        answerIndex: 0,
        explanation: 'The greater-than symbol (>) ensures the value is strictly over 5000. (>= would include exactly 5000).'
      },
      {
        id: 'q3',
        prompt: 'You want to find customers whose email addresses end with "@gmail.com". Which query does this?',
        options: ["WHERE email LIKE '%@gmail.com'", "WHERE email = '*@gmail.com'", "WHERE email MATCHES '@gmail.com$'", "WHERE email LIKE '@gmail.com%'"],
        answerIndex: 0,
        explanation: "The % symbol is a wildcard. '%@gmail.com' means 'any characters, followed by @gmail.com'."
      },
      {
        id: 'q4',
        prompt: 'What is the most efficient way to filter for customers in India, USA, OR Japan?',
        options: ["WHERE country = 'India' AND country = 'USA' AND country = 'Japan'", "WHERE country IN ('India', 'USA', 'Japan')", "WHERE country = 'India, USA, Japan'", "WHERE country LIKE 'India' OR 'USA' OR 'Japan'"],
        answerIndex: 1,
        explanation: 'The IN operator allows you to check against a list of values efficiently, replacing multiple OR statements.'
      },
      {
        id: 'q5',
        prompt: 'A colleague writes: WHERE age > 30 OR city = \'Mumbai\'. Who will be included in the results?',
        options: ['Only 31+ year olds who live in Mumbai', 'Anyone who is over 30, plus anyone living in Mumbai regardless of age', 'Only people in Mumbai', 'No one, the query will fail'],
        answerIndex: 1,
        explanation: 'The OR operator is lenient—if a row satisfies either the age condition OR the city condition (or both), it is included.'
      }
    ]
  },
  'sql-b-4': {
    title: 'Check your understanding: ORDER BY and LIMIT',
    intro: 'Test your sorting and limiting knowledge.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the default sorting direction if you use ORDER BY without specifying ASC or DESC?',
        options: ['Descending (High to Low)', 'Random order', 'Ascending (Low to High / A to Z)', 'It throws an error'],
        answerIndex: 2,
        explanation: 'ORDER BY defaults to ASC (Ascending) if no direction is specified.'
      },
      {
        id: 'q2',
        prompt: 'How would you find the 3 cheapest products in your inventory?',
        options: ['ORDER BY price DESC LIMIT 3', 'ORDER BY price ASC LIMIT 3', 'LIMIT 3 ORDER BY price', 'SELECT MIN(3) FROM products'],
        answerIndex: 1,
        explanation: 'Sorting by price ASC puts the cheapest items at the top. LIMIT 3 then takes just those top three rows.'
      },
      {
        id: 'q3',
        prompt: 'In what order must clauses appear in a SQL query?',
        options: ['SELECT, ORDER BY, FROM, WHERE, LIMIT', 'SELECT, FROM, LIMIT, WHERE, ORDER BY', 'SELECT, FROM, WHERE, ORDER BY, LIMIT', 'It does not matter'],
        answerIndex: 2,
        explanation: 'SQL syntax is strictly ordered: SELECT -> FROM -> WHERE -> ORDER BY -> LIMIT.'
      },
      {
        id: 'q4',
        prompt: 'If you want to sort by "department" alphabetically, and then by "salary" highest-to-lowest within each department, how do you write it?',
        options: ['ORDER BY department ASC, salary DESC', 'ORDER BY department AND salary DESC', 'ORDER BY department DESC, salary ASC', 'ORDER BY salary DESC, department ASC'],
        answerIndex: 0,
        explanation: 'You can list multiple columns in ORDER BY separated by commas. It sorts by the first column, and uses the second column to break ties.'
      },
      {
        id: 'q5',
        prompt: 'Why is using LIMIT helpful when exploring a new, large dataset?',
        options: ['It prevents the database from crashing by only pulling a small sample of rows to your screen', 'It permanently deletes rows you do not need', 'It hides errors in your query', 'It compresses the data size'],
        answerIndex: 0,
        explanation: 'Running SELECT * on a table with 50 million rows will freeze your application. LIMIT 10 gives you a quick, safe peek at the data.'
      }
    ]
  },
  'sql-b-5': {
    title: 'Check your understanding: Aggregations',
    intro: 'Test your knowledge on counting, summing, and grouping.',
    questions: [
      {
        id: 'q1',
        prompt: 'You want to know the total revenue generated by all orders. Which function do you use?',
        options: ['COUNT(revenue)', 'SUM(revenue)', 'TOTAL(revenue)', 'MAX(revenue)'],
        answerIndex: 1,
        explanation: 'SUM() adds up numeric values in a column. COUNT() would just tell you the number of orders, not their financial total.'
      },
      {
        id: 'q2',
        prompt: 'What is the primary purpose of the GROUP BY clause?',
        options: ['To sort the rows alphabetically', 'To split data into categories so you can calculate aggregations (like sums or averages) for each category', 'To join two tables together', 'To filter out blank rows'],
        answerIndex: 1,
        explanation: 'GROUP BY organizes data into buckets. If you group by "city" and ask for COUNT(*), you get the number of rows for each individual city.'
      },
      {
        id: 'q3',
        prompt: 'What happens if you SELECT a column like "department" alongside an aggregation like COUNT(*), but forget to put "department" in the GROUP BY clause?',
        options: ['The query works normally', 'SQL automatically groups it for you', 'The query will return an error', 'It returns a random number'],
        answerIndex: 2,
        explanation: 'In SQL, any column selected that is NOT inside an aggregate function MUST be included in the GROUP BY clause.'
      },
      {
        id: 'q4',
        prompt: 'What is the main difference between WHERE and HAVING?',
        options: ['There is no difference', 'HAVING is used for text, WHERE is used for numbers', 'WHERE filters raw rows before grouping; HAVING filters aggregated groups after grouping', 'HAVING is only used in Oracle SQL'],
        answerIndex: 2,
        explanation: 'WHERE filters individual records (e.g., age > 18). HAVING filters the results of a grouping (e.g., HAVING COUNT(*) > 10).'
      },
      {
        id: 'q5',
        prompt: 'If you want to find the date of the most recent order in the table, which function helps?',
        options: ['LAST(date)', 'MAX(date)', 'LATEST(date)', 'SUM(date)'],
        answerIndex: 1,
        explanation: 'MAX() returns the highest value. For dates, the "highest" value is the most recent date in time.'
      }
    ]
  },
  'sql-b-6': {
    title: 'Check your understanding: JOINs',
    intro: 'Test your knowledge of connecting tables.',
    questions: [
      {
        id: 'q1',
        prompt: 'Why are relational databases split into multiple tables (like "customers" and "orders") instead of one giant sheet?',
        options: ['To avoid data duplication and inconsistencies when a single customer places multiple orders', 'Because SQL cannot read files with more than 10 columns', 'To make queries run slower', 'To force analysts to learn JOINs'],
        answerIndex: 0,
        explanation: 'Splitting tables (Normalization) ensures that if a customer changes their phone number, you only have to update it in one place, rather than on every single order they ever placed.'
      },
      {
        id: 'q2',
        prompt: 'Which type of JOIN returns ONLY the rows that have matching values in both tables?',
        options: ['LEFT JOIN', 'FULL JOIN', 'INNER JOIN', 'OUTER JOIN'],
        answerIndex: 2,
        explanation: 'INNER JOIN acts like an intersection—if a customer has no orders, or an order has no valid customer, they are excluded.'
      },
      {
        id: 'q3',
        prompt: 'A teacher wants a list of ALL students, alongside their homework grades. If a student hasn\'t submitted homework, the teacher still wants the student on the list (with a blank grade). Which JOIN should they use?',
        options: ['INNER JOIN', 'LEFT JOIN (where students is the left table)', 'RIGHT JOIN (where homework is the right table)', 'CROSS JOIN'],
        answerIndex: 1,
        explanation: 'A LEFT JOIN keeps every row from the first (left) table, filling in NULLs for the right table if there is no match.'
      },
      {
        id: 'q4',
        prompt: 'What is a "table alias" and why do we use it?',
        options: ['A fake table created for testing', 'A temporary shorthand name given to a table to save typing (e.g., customers AS c)', 'A security feature to hide table names', 'A way to permanently rename a database'],
        answerIndex: 1,
        explanation: 'Aliases like "customers AS c" let you write "c.name" instead of "customers.name", making your queries much cleaner and faster to type.'
      },
      {
        id: 'q5',
        prompt: 'In a JOIN clause, what does the "ON" keyword specify?',
        options: ['Which table should be turned on', 'The specific columns that link the two tables together (e.g., ON customers.id = orders.customer_id)', 'When the query should execute', 'How the final results should be sorted'],
        answerIndex: 1,
        explanation: 'The ON clause acts as the bridge, telling SQL exactly which column in Table A corresponds to which column in Table B.'
      }
    ]
  },

  // SQL Intermediate
  'sql-i-1': {
    title: 'Check your understanding: NULLs, COALESCE, NULLIF',
    intro: 'Test your knowledge of handling missing data in SQL.',
    questions: [
      {
        id: 'q1',
        prompt: 'Why does WHERE rider_id = NULL always return zero rows, even when rows have a NULL rider_id?',
        options: ['It is a typo and SQL silently ignores it', 'NULL means "unknown," so comparing anything to NULL with = produces an unknown result, never true', 'NULL is treated as the number 0 in comparisons', 'rider_id can never actually be NULL'],
        answerIndex: 1,
        explanation: 'Equality comparisons against NULL never evaluate to true, because NULL represents an unknown value. IS NULL is the correct way to check for it.'
      },
      {
        id: 'q2',
        prompt: 'A restaurant has a rating of NULL. What does that most likely mean in this dataset?',
        options: ['The restaurant has the worst possible rating', 'The rating is exactly 0', 'No one has reviewed this restaurant yet', 'The restaurant has been deleted'],
        answerIndex: 2,
        explanation: 'NULL represents missing information, not a real value like 0. A rating of NULL means there is no rating on record at all, which is very different from a bad rating.'
      },
      {
        id: 'q3',
        prompt: 'What does COALESCE(rating, 0) do?',
        options: ['Replaces every rating with 0', 'Returns rating if it is not NULL, otherwise returns 0', 'Deletes rows where rating is NULL', 'Rounds the rating to 0 decimal places'],
        answerIndex: 1,
        explanation: 'COALESCE returns the first non-NULL value in its list, making it the standard way to substitute a fallback value for NULL.'
      },
      {
        id: 'q4',
        prompt: 'What does NULLIF(total_amount, 0) do?',
        options: ['Converts total_amount to a string', 'Returns NULL if total_amount equals 0, otherwise returns total_amount unchanged', 'Deletes any order with a total of 0', 'Returns 0 if total_amount is NULL'],
        answerIndex: 1,
        explanation: 'NULLIF compares its two arguments; if they match, it returns NULL, which is useful for treating a placeholder value like 0 as genuinely missing data.'
      },
      {
        id: 'q5',
        prompt: 'Which query correctly finds every order that has not yet been assigned a rider?',
        options: ['WHERE rider_id = NULL', 'WHERE rider_id IS NULL', 'WHERE rider_id = "NULL"', 'WHERE rider_id != rider_id'],
        answerIndex: 1,
        explanation: 'IS NULL is the only correct way to check for NULL values in SQL — the = operator never matches NULL, no matter what.'
      }
    ]
  },
  'sql-i-2': {
    title: 'Check your understanding: CASE WHEN',
    intro: 'Test your knowledge of conditional logic inside SQL queries.',
    questions: [
      {
        id: 'q1',
        prompt: 'In a CASE WHEN ... END expression, what happens once SQL finds a WHEN condition that is true?',
        options: ['It keeps checking the remaining WHEN conditions anyway', 'It uses that result and stops checking the rest, just like elif in Python', 'It throws an error', 'It runs the ELSE branch as well'],
        answerIndex: 1,
        explanation: 'CASE WHEN evaluates conditions top to bottom and stops at the first match, the same way an if/elif/else chain works.'
      },
      {
        id: 'q2',
        prompt: 'What does ELSE do in a CASE WHEN expression?',
        options: ['It is required and the query fails without it', 'It provides a fallback value for any row that did not match any WHEN condition', 'It runs before any WHEN condition', 'It deletes rows that did not match'],
        answerIndex: 1,
        explanation: 'ELSE is optional but commonly used to catch every row that fell through every WHEN condition above it.'
      },
      {
        id: 'q3',
        prompt: 'What does SUM(CASE WHEN status = \'delivered\' THEN 1 ELSE 0 END) calculate?',
        options: ['The total revenue from delivered orders', 'The number of orders with status = "delivered"', 'The average order value', 'An error — CASE cannot be used inside SUM'],
        answerIndex: 1,
        explanation: 'The CASE WHEN turns each row into a 1 or 0 based on the condition, and SUM adds those up — effectively a conditional COUNT.'
      },
      {
        id: 'q4',
        prompt: 'Why does a rating-bucketing CASE WHEN need its own explicit WHEN for NULL ratings, instead of relying on ELSE?',
        options: ['ELSE never works with numeric columns', 'A NULL rating would actually match one of the numeric WHEN conditions by accident', 'Comparisons like rating < 3.5 are never true when rating is NULL, so NULL ratings would silently fall through to ELSE, possibly mislabeling them', 'NULL values are automatically removed from CASE WHEN'],
        answerIndex: 2,
        explanation: 'Since comparisons against NULL are never true, a NULL rating skips every WHEN and lands in ELSE — which may not be the label you actually want for "not yet rated."'
      },
      {
        id: 'q5',
        prompt: 'What is the difference between the "searched" CASE form and the simple CASE column WHEN value form?',
        options: ['They cannot both be used in the same database', 'The searched form allows any condition per WHEN; the simple form only checks one column against exact values', 'The simple form is the only one that supports ELSE', 'There is no real difference'],
        answerIndex: 1,
        explanation: 'Searched CASE (CASE WHEN condition THEN ...) supports any expression per branch. Simple CASE (CASE column WHEN value THEN ...) is a shorthand limited to exact-value matches on one column.'
      }
    ]
  },
  'sql-i-3': {
    title: 'Check your understanding: Subqueries',
    intro: 'Test your knowledge of scalar, WHERE, FROM, and correlated subqueries.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is a "scalar" subquery?',
        options: ['A subquery that returns an entire table', 'A subquery that returns exactly one value (one row, one column)', 'A subquery that always uses GROUP BY', 'A subquery written entirely in lowercase'],
        answerIndex: 1,
        explanation: 'A scalar subquery returns a single value, which is why it can be used anywhere a single number or text value would normally go, like in a comparison.'
      },
      {
        id: 'q2',
        prompt: 'Why must a subquery used in the FROM clause have an alias (a name)?',
        options: ['It is just a style preference, not a requirement', 'SQL requires every table-like thing in a query, including a subquery, to have a name it can refer to', 'Aliases make the query run faster', 'Only SQLite requires this; other databases do not'],
        answerIndex: 1,
        explanation: 'SQL treats a FROM subquery as a temporary table, and every table reference needs a name — even one you never use again afterward.'
      },
      {
        id: 'q3',
        prompt: 'What makes a subquery "correlated"?',
        options: ['It uses a JOIN inside it', 'It references a column from the outer query, so it runs once per outer row instead of just once overall', 'It is wrapped in parentheses', 'It always uses the EXISTS keyword'],
        answerIndex: 1,
        explanation: 'A correlated subquery depends on the current row of the outer query, which is why it effectively re-runs for every row the outer query considers.'
      },
      {
        id: 'q4',
        prompt: 'Why is EXISTS often paired with a correlated subquery?',
        options: ['EXISTS cannot be used any other way', 'EXISTS just checks whether the correlated subquery returns any row at all for the current outer row, without caring what is inside that row', 'EXISTS automatically sorts the results', 'EXISTS only works with scalar subqueries'],
        answerIndex: 1,
        explanation: 'EXISTS is a yes/no check — it stops as soon as it finds one matching row, which is why it pairs naturally with a correlated subquery testing "does a match exist for this row?"'
      },
      {
        id: 'q5',
        prompt: 'You write WHERE customer_id = (SELECT customer_id FROM orders) and get an error saying the subquery returned more than one row. What is the likely fix?',
        options: ['Add an ORDER BY to the subquery', 'Use IN instead of = if you want to compare against a list of values, or add an aggregate function if you want a single number', 'Remove the WHERE clause entirely', 'Add DISTINCT to the outer query'],
        answerIndex: 1,
        explanation: 'A scalar comparison like = requires the subquery to return exactly one value. If multiple values are possible, switch to IN, or use something like MAX()/MIN() to reduce it to one value.'
      }
    ]
  },
  'sql-i-4': {
    title: 'Check your understanding: CTEs',
    intro: 'Test your knowledge of WITH statements and naming query steps.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is a CTE, in the simplest terms?',
        options: ['A special kind of index', 'A subquery that has been given a name using WITH, so it can be referred to like a table', 'A type of JOIN', 'A built-in SQL function for dates'],
        answerIndex: 1,
        explanation: 'A CTE (Common Table Expression) is functionally a named subquery, defined with WITH before the main query that uses it.'
      },
      {
        id: 'q2',
        prompt: 'How do you define more than one CTE in the same query?',
        options: ['You cannot — only one CTE is allowed per query', 'Separate them with commas after a single WITH keyword', 'Repeat the WITH keyword before each one', 'Use UNION between them'],
        answerIndex: 1,
        explanation: 'Multiple CTEs are written as WITH first_cte AS (...), second_cte AS (...), each separated by a comma, with only one WITH keyword at the start.'
      },
      {
        id: 'q3',
        prompt: 'What is the main advantage of a CTE over a deeply nested subquery?',
        options: ['CTEs always run faster on every database', 'CTEs let you name and read each step top to bottom, instead of holding several levels of nested parentheses in your head at once', 'CTEs can use columns that subqueries cannot', 'CTEs automatically remove duplicate rows'],
        answerIndex: 1,
        explanation: 'The performance is usually similar — the real benefit is readability: each step gets a clear name and the query reads in the order you would explain it out loud.'
      },
      {
        id: 'q4',
        prompt: 'Can a later CTE in the same WITH statement use an earlier CTE defined above it?',
        options: ['No, each CTE must be fully independent', 'Yes, a CTE can reference any CTE defined earlier in the same WITH statement', 'Only if they are joined with UNION', 'Only in the FROM clause of the main query, never inside another CTE'],
        answerIndex: 1,
        explanation: 'CTEs can be chained — a later one can build directly on top of an earlier one, which is exactly what makes multi-step reports readable.'
      },
      {
        id: 'q5',
        prompt: 'When should you generally prefer a CTE over a subquery?',
        options: ['Always — subqueries should never be used', 'When the logic would otherwise need nesting more than one level deep, or when naming a step would make the query clearer', 'Only when working with text columns', 'Never — they are purely a stylistic choice with no practical difference'],
        answerIndex: 1,
        explanation: 'CTEs and subqueries are often interchangeable for the database engine. The practical guidance is to reach for a CTE whenever it would make a multi-step query easier for a human to read.'
      }
    ]
  },
  'sql-i-5': {
    title: 'Check your understanding: UNION and UNION ALL',
    intro: 'Test your knowledge of combining the results of two queries.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the key difference between UNION and UNION ALL?',
        options: ['UNION ALL only works with numbers', 'UNION removes duplicate rows from the combined result; UNION ALL keeps every row, including duplicates', 'UNION is faster than UNION ALL', 'There is no real difference'],
        answerIndex: 1,
        explanation: 'UNION does extra work checking for and removing duplicates across the combined results. UNION ALL skips that check, which makes it faster when you know duplicates either cannot happen or do not matter.'
      },
      {
        id: 'q2',
        prompt: 'What must be true about the two SELECT statements joined by UNION?',
        options: ['They must query the exact same table', 'They must return the same number of columns, in a compatible type and order', 'They must both use GROUP BY', 'They must both include an ORDER BY'],
        answerIndex: 1,
        explanation: 'UNION requires matching column counts and compatible types in the same order across both queries — SQL combines them positionally, not by column name.'
      },
      {
        id: 'q3',
        prompt: 'Where do the column names in a UNION\'d result come from?',
        options: ['The second SELECT statement', 'The first SELECT statement', 'They are always renamed to col1, col2, etc.', 'You must specify them separately after the UNION'],
        answerIndex: 1,
        explanation: 'The final result set takes its column names from the very first SELECT in the UNION, regardless of what the later SELECTs name their columns.'
      },
      {
        id: 'q4',
        prompt: 'You combine customers and riders (which can never overlap, since no one is both) using UNION instead of UNION ALL. What happens?',
        options: ['The query fails', 'It still works correctly, just slightly slower than necessary, since SQL checks for duplicates that can never actually occur', 'Customers are silently dropped from the result', 'Only riders show up in the final result'],
        answerIndex: 1,
        explanation: 'UNION still produces a correct result here — it is just doing unnecessary duplicate-checking work, since these two groups of people can never actually overlap.'
      },
      {
        id: 'q5',
        prompt: 'If your two SELECT statements return the same number of columns but in a different logical order (e.g., city, name vs. name, city), what happens?',
        options: ['SQL throws an error immediately', 'SQL combines them anyway, position by position, silently producing mismatched/nonsense results', 'SQL automatically reorders the columns to match', 'UNION refuses to run, but UNION ALL works fine'],
        answerIndex: 1,
        explanation: 'SQL does not check column meaning, only column position and type compatibility — so a mismatched column order is a silent bug, not an error.'
      }
    ]
  },
  'sql-i-6': {
    title: 'Check your understanding: RIGHT, FULL OUTER, and SELF JOIN',
    intro: 'Test your knowledge of the rest of the JOIN family.',
    questions: [
      {
        id: 'q1',
        prompt: 'How does RIGHT JOIN relate to LEFT JOIN?',
        options: ['They are unrelated, completely different operations', 'RIGHT JOIN keeps every row from the second (right) table, the mirror image of how LEFT JOIN keeps every row from the first (left) table', 'RIGHT JOIN is only used for numeric columns', 'RIGHT JOIN cannot use an ON clause'],
        answerIndex: 1,
        explanation: 'RIGHT JOIN and LEFT JOIN are mirror images. Swapping the table order in a LEFT JOIN produces the same result as a RIGHT JOIN, which is why many people just always write LEFT JOIN.'
      },
      {
        id: 'q2',
        prompt: 'What does FULL OUTER JOIN return?',
        options: ['Only rows that match in both tables', 'Every row from both tables, with NULLs filled in wherever a row from one side has no match on the other', 'Only rows that exist in the left table but not the right', 'An error, since it is not valid SQL'],
        answerIndex: 1,
        explanation: 'FULL OUTER JOIN keeps everything from both tables — matched rows show data from both sides, unmatched rows show NULLs for whichever side is missing.'
      },
      {
        id: 'q3',
        prompt: 'What makes a SELF JOIN different from a normal JOIN?',
        options: ['It uses a different keyword, SELFJOIN', 'It is an ordinary JOIN, just pointing at the same table twice using two different aliases', 'It only works on tables with no primary key', 'It cannot use an ON clause'],
        answerIndex: 1,
        explanation: 'A SELF JOIN is regular JOIN syntax aimed at one table twice, with two aliases letting SQL (and you) tell the two "copies" apart.'
      },
      {
        id: 'q4',
        prompt: 'In customers AS c1 INNER JOIN customers AS c2 ON c1.referred_by = c2.customer_id, what is happening?',
        options: ['Two different tables are being compared', 'Each customer (c1) is being matched to the customer who referred them (c2), using the same table aliased twice', 'This causes every customer to be duplicated', 'This only works if referred_by is never NULL'],
        answerIndex: 1,
        explanation: 'c1.referred_by stores another customer\'s id; c2 is the same table used purely to look up that referenced customer\'s details, like their name.'
      },
      {
        id: 'q5',
        prompt: 'A query needs to keep every restaurant, including ones with zero orders, and does not care about orders that somehow have no matching restaurant. Which JOIN fits best?',
        options: ['INNER JOIN', 'RIGHT JOIN with restaurants on the right side', 'LEFT JOIN with restaurants as the left (first) table', 'SELF JOIN'],
        answerIndex: 2,
        explanation: 'Keeping everything from one specific side (restaurants) while matching what is available on the other side is exactly the LEFT JOIN pattern, with restaurants placed first.'
      }
    ]
  },
  'sql-i-7': {
    title: 'Check your understanding: ROW_NUMBER, RANK, DENSE_RANK',
    intro: 'Test your knowledge of ranking window functions.',
    questions: [
      {
        id: 'q1',
        prompt: 'Why can\'t GROUP BY answer "what is each restaurant\'s rank compared to others"?',
        options: ['GROUP BY does not support ORDER BY', 'GROUP BY collapses rows together into one row per group, but ranking needs to compare rows while keeping every original row visible', 'GROUP BY only works on text columns', 'Ranking is mathematically impossible in SQL'],
        answerIndex: 1,
        explanation: 'Window functions exist precisely because GROUP BY merges rows together. Ranking needs every row to stay visible, with an extra calculated value added alongside it.'
      },
      {
        id: 'q2',
        prompt: 'What does PARTITION BY do inside a window function\'s OVER() clause?',
        options: ['It deletes rows that do not match', 'It restarts the window function\'s calculation separately for each group, similar to GROUP BY, but without merging rows together', 'It sorts the entire table permanently', 'It is required in every window function'],
        answerIndex: 1,
        explanation: 'PARTITION BY divides the rows into groups for the purposes of the calculation — each group gets its own independent ranking (or running total, etc.) — while every row still appears in the output.'
      },
      {
        id: 'q3',
        prompt: 'Two restaurants are tied for 2nd place by rating. What does RANK() give the restaurant right after them?',
        options: ['3, because RANK never skips numbers', '4, because RANK leaves a gap equal to the number of tied rows', 'Also 2, the same as the tied restaurants', 'An error, since ties are not allowed'],
        answerIndex: 1,
        explanation: 'RANK() gives tied rows the same rank, but leaves a gap afterward — if two rows tie for rank 2, the next row gets rank 4, not 3.'
      },
      {
        id: 'q4',
        prompt: 'Using the same tie scenario, what would DENSE_RANK() give the restaurant right after the tied pair?',
        options: ['4, the same as RANK', '3, because DENSE_RANK never skips a number after a tie', '2, the same as the tied rows', '1'],
        answerIndex: 1,
        explanation: 'DENSE_RANK never leaves gaps — after a tie at rank 2, the very next distinct value gets rank 3.'
      },
      {
        id: 'q5',
        prompt: 'What is the key difference between ROW_NUMBER() and RANK()?',
        options: ['ROW_NUMBER() requires PARTITION BY; RANK() does not', 'ROW_NUMBER() always assigns a unique number even to tied rows; RANK() gives tied rows the same number', 'RANK() can only be used on numeric columns', 'They are exactly the same function with two names'],
        answerIndex: 1,
        explanation: 'ROW_NUMBER() never produces a tie — even identical values get arbitrarily different sequential numbers. RANK() deliberately gives tied values the same rank.'
      }
    ]
  },
  'sql-i-8': {
    title: 'Check your understanding: LEAD, LAG, and running totals',
    intro: 'Test your knowledge of comparing rows to their neighbours and accumulating values.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does LAG(total_amount) OVER (PARTITION BY customer_id ORDER BY order_date) return for a customer\'s very first order?',
        options: ['0', 'The current order\'s own total_amount', 'NULL, since there is no previous order to look back at', 'An error'],
        answerIndex: 2,
        explanation: 'LAG looks at the row before the current one within its partition. For the first row in each customer\'s partition, there is nothing before it, so LAG correctly returns NULL.'
      },
      {
        id: 'q2',
        prompt: 'What is the difference between LAG and LEAD?',
        options: ['LAG looks at the previous row; LEAD looks at the next row, within the same ordered window', 'LAG only works with dates; LEAD only works with numbers', 'They produce identical results', 'LEAD requires a CTE; LAG does not'],
        answerIndex: 0,
        explanation: 'LAG reaches backward to a prior row, LEAD reaches forward to a following row — both within whatever PARTITION BY / ORDER BY defines the window.'
      },
      {
        id: 'q3',
        prompt: 'What turns a normal SUM(total_amount) into a running total?',
        options: ['Adding GROUP BY total_amount', 'Adding OVER (ORDER BY some_column), turning it into a window function that accumulates row by row', 'Nothing — SUM always produces a running total', 'Using SUM ALL instead of SUM'],
        answerIndex: 1,
        explanation: 'Without OVER(), SUM collapses everything into one number. With OVER (ORDER BY ...), it becomes a window function that accumulates as it moves through the ordered rows.'
      },
      {
        id: 'q4',
        prompt: 'What does ROWS BETWEEN 2 PRECEDING AND CURRENT ROW define?',
        options: ['A filter that removes the 2 most recent rows', 'A window of exactly the current row plus the 2 rows directly before it, often used for a moving average', 'A way to skip every 2nd row', 'A requirement that there be at least 2 rows in the table'],
        answerIndex: 1,
        explanation: 'This frame clause narrows the window to just 3 rows (2 before, plus the current one), which is exactly the shape of a simple 3-row moving average.'
      },
      {
        id: 'q5',
        prompt: 'Why does julianday(order_date) - julianday(LAG(order_date) OVER (...)) give a useful number?',
        options: ['It converts dates into restaurant ratings', 'julianday() converts each date into a single number of days, so subtracting two of them gives a clean day-difference between an order and the customer\'s previous one', 'It only works if both dates are in the same year', 'It returns the order_id difference, not a date difference'],
        answerIndex: 1,
        explanation: 'julianday() turns a date into a day-count number; subtracting two of these gives exactly the number of days between them, which combined with LAG gives "days since this customer\'s last order."'
      }
    ]
  },
  'sql-i-9': {
    title: 'Check your understanding: String functions',
    intro: 'Test your knowledge of cleaning and shaping text in SQL.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does TRIM(\'  Spice Route  \') return?',
        options: ['"  Spice Route  "', '"Spice Route"', '"SpiceRoute"', 'An error'],
        answerIndex: 1,
        explanation: 'TRIM removes leading and trailing whitespace only, leaving "Spice Route" with no surrounding spaces.'
      },
      {
        id: 'q2',
        prompt: 'In SQLite, what does SUBSTR(name, 1, 5) return?',
        options: ['The last 5 characters of name', 'The first 5 characters of name', 'name with the first 5 characters removed', 'Every 5th character'],
        answerIndex: 1,
        explanation: 'SUBSTR(text, start_position, length) — starting at position 1 for 5 characters returns the first 5 characters of the string.'
      },
      {
        id: 'q3',
        prompt: 'What does the || operator do in SQLite?',
        options: ['Logical OR, the same as in a WHERE clause', 'Joins (concatenates) two text values together', 'Divides two numbers', 'Compares two values for inequality'],
        answerIndex: 1,
        explanation: '|| is SQLite\'s string concatenation operator — the same job CONCAT() does in MySQL, PostgreSQL, and SQL Server.'
      },
      {
        id: 'q4',
        prompt: 'What does INSTR(name, \'House\') return if the word "House" does not appear anywhere in name?',
        options: ['NULL', '-1', '0', 'An error'],
        answerIndex: 2,
        explanation: 'INSTR returns the position where the substring is first found, or 0 specifically when it is not found at all.'
      },
      {
        id: 'q5',
        prompt: 'Why might you nest functions like UPPER(TRIM(city))?',
        options: ['You cannot nest SQL functions, this would cause an error', 'TRIM runs first removing whitespace, then UPPER runs on that cleaned result — exactly like nested parentheses in maths', 'UPPER must always be the innermost function', 'This only works in SQLite, not other databases'],
        answerIndex: 1,
        explanation: 'Nested functions evaluate from the inside out — TRIM cleans the whitespace first, then UPPER standardises the case of that already-cleaned result.'
      }
    ]
  },
  'sql-i-10': {
    title: 'Check your understanding: Dates and times',
    intro: 'Test your knowledge of working with dates in SQL.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does strftime(\'%Y\', order_date) return?',
        options: ['The full date and time', 'Just the year portion of order_date', 'The current year, ignoring order_date entirely', 'The number of years until order_date'],
        answerIndex: 1,
        explanation: 'strftime() formats a date using formatting codes — %Y specifically extracts just the 4-digit year.'
      },
      {
        id: 'q2',
        prompt: 'What does julianday() convert a date into?',
        options: ['A text string in DD-MM-YYYY format', 'A single number representing days since a fixed historical reference point', 'The day of the week', 'A boolean true/false for whether the date is valid'],
        answerIndex: 1,
        explanation: 'julianday() converts any date into one number (a day count), which is exactly why subtracting two julianday() values gives you a clean day difference.'
      },
      {
        id: 'q3',
        prompt: 'How do you convert a day-difference from julianday() into minutes?',
        options: ['Divide by 1440', 'Multiply by 1440 (since there are 1440 minutes in a day)', 'Multiply by 24', 'You cannot convert between units this way'],
        answerIndex: 1,
        explanation: 'There are 1440 minutes in a day (24 hours × 60 minutes), so multiplying a day-difference by 1440 converts it into minutes.'
      },
      {
        id: 'q4',
        prompt: 'Why is strftime(\'%Y-%m\', order_date) useful inside a GROUP BY?',
        options: ['It deletes rows from other months', 'It creates a clean, sortable "year-month" bucket so orders can be grouped by month', 'It only works with INNER JOIN', 'It automatically calculates monthly totals without GROUP BY'],
        answerIndex: 1,
        explanation: 'Turning a full timestamp into a "YYYY-MM" string gives you a clean column to GROUP BY, bucketing every order into its correct month.'
      },
      {
        id: 'q5',
        prompt: 'How do other databases like MySQL or SQL Server typically extract just the year from a date?',
        options: ['They use the exact same strftime() function as SQLite', 'They use different function names, like YEAR() or EXTRACT(YEAR FROM ...), even though the underlying idea is the same', 'Extracting a year from a date is impossible in those databases', 'They require converting the date to text first in every case'],
        answerIndex: 1,
        explanation: 'The concept (pulling out just the year) is universal across databases, but the exact function name differs — this is a common source of confusion when switching between database systems.'
      }
    ]
  },
  'sql-i-11': {
    title: 'Check your understanding: CAST and type casting',
    intro: 'Test your knowledge of converting values between types.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does CAST(\'350\' AS REAL) do?',
        options: ['Converts the text "350" into the number 350.0', 'Converts the number 350 into text', 'Deletes the value', 'Rounds 350 to the nearest whole number'],
        answerIndex: 0,
        explanation: 'CAST(value AS type) converts a value into the specified type — here, the text "350" becomes the numeric value 350.0.'
      },
      {
        id: 'q2',
        prompt: 'Why might you need CAST(rating AS TEXT) inside a COALESCE alongside a fallback word like \'Not yet rated\'?',
        options: ['COALESCE only accepts exactly one argument', 'COALESCE generally needs its arguments to be compatible types, so a number and a text fallback need to be brought to the same type first', 'CAST makes COALESCE run faster', 'This is never actually necessary'],
        answerIndex: 1,
        explanation: 'Mixing a numeric rating with a text fallback inside the same function can cause type issues — casting the number to text first lets both values sit comfortably in the same output column.'
      },
      {
        id: 'q3',
        prompt: 'What does CAST(3.7 AS INTEGER) return?',
        options: ['4, because it rounds to the nearest whole number', '3, because CAST truncates the decimal rather than rounding', '3.7, unchanged', 'An error, since 3.7 is not a whole number'],
        answerIndex: 1,
        explanation: 'CAST to an integer type truncates — it simply discards everything after the decimal point, rather than rounding. ROUND() is needed if you actually want rounding.'
      },
      {
        id: 'q4',
        prompt: 'A column of numbers was accidentally imported as text. What is the typical fix when you need to SUM() it?',
        options: ['Re-import the entire file', 'Wrap the column in CAST(column AS REAL) (or INTEGER) before summing', 'SUM() automatically handles text columns correctly', 'Use COUNT() instead of SUM()'],
        answerIndex: 1,
        explanation: 'Casting the text column to a numeric type lets SUM() (and other numeric functions) work correctly, without needing to fix the original data source.'
      },
      {
        id: 'q5',
        prompt: 'If you want 3.7 to become 4 (genuine rounding, not truncation), which function should you use?',
        options: ['CAST(3.7 AS INTEGER)', 'ROUND(3.7)', 'TRIM(3.7)', 'COALESCE(3.7, 4)'],
        answerIndex: 1,
        explanation: 'ROUND() performs actual mathematical rounding. CAST to an integer type truncates instead, which is a common point of confusion.'
      }
    ]
  },
  'sql-i-12': {
    title: 'Check your understanding: Query performance basics',
    intro: 'Test your knowledge of EXPLAIN plans and indexes.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does EXPLAIN QUERY PLAN tell you?',
        options: ['The exact number of seconds a query will take to run', 'How the database actually intends to execute your query, without running it', 'The total row count in every table', 'Whether your SQL syntax is valid'],
        answerIndex: 1,
        explanation: 'EXPLAIN QUERY PLAN reveals the database\'s execution strategy — for example, whether it will scan an entire table or use an index to jump straight to matching rows.'
      },
      {
        id: 'q2',
        prompt: 'In an EXPLAIN QUERY PLAN result, what does "SCAN" generally indicate?',
        options: ['The query failed', 'The database is checking every row in the table one by one', 'An index was used successfully', 'The query is using a JOIN'],
        answerIndex: 1,
        explanation: 'A SCAN means the database has to look at every row to find matches, which is fine on small tables but can be slow on very large ones.'
      },
      {
        id: 'q3',
        prompt: 'What does a database index conceptually do, using the library analogy from the lesson?',
        options: ['It deletes old rows to save space', 'It works like a card catalogue, letting the database jump straight to matching rows instead of checking every shelf (row) one by one', 'It makes every query run in exactly the same amount of time', 'It only works on text columns'],
        answerIndex: 1,
        explanation: 'Just like a library catalogue lets you go straight to the right shelf, an index lets the database jump directly to matching rows instead of scanning the entire table.'
      },
      {
        id: 'q4',
        prompt: 'Why might WHERE UPPER(city) = \'MUMBAI\' prevent the database from using an index on city, even if one exists?',
        options: ['UPPER() is not valid SQL', 'Applying a function to the column being filtered usually stops the database from matching it directly against the index', 'Indexes only work with numbers, never text', 'This actually has no effect on index usage'],
        answerIndex: 1,
        explanation: 'An index is built on the raw column values. Wrapping the column in a function like UPPER() at query time generally prevents the database from using that index directly, often forcing a full scan instead.'
      },
      {
        id: 'q5',
        prompt: 'Why is SELECT * discouraged on very large, wide tables, beyond just being harder to read?',
        options: ['It is purely a style issue with no real performance impact', 'Pulling every column means more data has to be read and transferred, even for columns you immediately discard', 'SELECT * is not valid SQL syntax', 'It automatically creates an index on every column'],
        answerIndex: 1,
        explanation: 'Beyond readability, pulling unnecessary columns means the database reads and sends more data than needed — which adds up significantly on wide tables or large result sets.'
      }
    ]
  },

  // SQL Advanced
  'sql-a-1': {
    title: 'Check your understanding: Recursive CTEs',
    intro: 'Test your knowledge of querying hierarchies with WITH RECURSIVE.',
    questions: [
      {
        id: 'q1',
        prompt: 'What kind of question can a recursive CTE answer that a fixed-depth JOIN cannot?',
        options: ['Questions involving dates', 'Questions about a hierarchy of unknown depth, like "everyone in this person\'s entire referral chain, no matter how many levels deep"', 'Questions involving aggregation', 'Questions that use a WHERE clause'],
        answerIndex: 1,
        explanation: 'A fixed number of JOINs can only reach a fixed number of levels deep. A recursive CTE keeps going until no new rows are found, handling any depth automatically.'
      },
      {
        id: 'q2',
        prompt: 'What are the two parts of a recursive CTE, joined by UNION ALL?',
        options: ['A SELECT and a WHERE clause', 'An anchor (the starting point) and a recursive part that refers back to the CTE itself', 'A CREATE TABLE and an INSERT', 'Two unrelated independent queries'],
        answerIndex: 1,
        explanation: 'The anchor defines where recursion starts; the recursive part builds on the previous round\'s results, one step at a time, until nothing new is found.'
      },
      {
        id: 'q3',
        prompt: 'Why might you add a LIMIT to a recursive CTE even if the logic seems correct?',
        options: ['LIMIT is required syntax for every recursive CTE', 'As a safety net — if the underlying data ever formed an unexpected loop, the recursion would otherwise run forever', 'It makes the query run in alphabetical order', 'It is needed to enable the UNION ALL'],
        answerIndex: 1,
        explanation: 'A LIMIT protects against genuinely looping data (a rare but possible data error) causing infinite recursion, at no real cost when the data is clean.'
      },
      {
        id: 'q4',
        prompt: 'Besides referral chains, which of these is a classic use case for a recursive CTE?',
        options: ['Calculating an average', 'An org chart — finding every employee who reports up to a given manager, at any depth', 'Sorting a result set', 'Converting text to uppercase'],
        answerIndex: 1,
        explanation: 'Org charts, category trees, and comment threads are all hierarchies of unknown depth — the same shape of problem a referral chain is.'
      },
      {
        id: 'q5',
        prompt: 'In WITH RECURSIVE referral_chain AS (anchor UNION ALL recursive_part), why must it be UNION ALL and not just UNION?',
        options: ['UNION ALL is required syntax for any recursive CTE in SQLite — UNION would not parse', 'There is no real reason, either works identically', 'UNION would silently sort the entire result alphabetically', 'UNION ALL is faster but optional'],
        answerIndex: 0,
        explanation: 'SQLite (and the SQL standard) requires UNION ALL specifically for the recursive part of a recursive CTE.'
      }
    ]
  },
  'sql-a-2': {
    title: 'Check your understanding: Advanced window functions',
    intro: 'Test your knowledge of FIRST_VALUE, LAST_VALUE, NTILE, and frame clauses.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does FIRST_VALUE(total_amount) OVER (PARTITION BY customer_id ORDER BY order_date) return for every row in a customer\'s partition?',
        options: ['A different value for every row, like LAG does', "The same value for every row in that customer's partition — their very first order's amount, by date", 'Always NULL', 'The largest value in the partition'],
        answerIndex: 1,
        explanation: 'Unlike LAG (which looks at the immediately preceding row), FIRST_VALUE always returns the first row of the entire window, regardless of how far down the current row is.'
      },
      {
        id: 'q2',
        prompt: 'Why does LAST_VALUE often return the current row instead of the true last row, if no frame clause is specified?',
        options: ['LAST_VALUE is broken and should never be used', "The default window frame only extends from the start of the partition up to the current row, so LAST_VALUE without an explicit wider frame just returns the current row itself", 'LAST_VALUE only works with PARTITION BY, not ORDER BY', 'It is a bug specific to SQLite'],
        answerIndex: 1,
        explanation: 'This is one of the most common silent window-function mistakes — fixing it requires explicitly widening the frame with RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING.'
      },
      {
        id: 'q3',
        prompt: 'What does NTILE(4) do?',
        options: ['Returns the 4th row in the table', 'Splits the rows in a window into 4 roughly equal-sized groups, numbered 1 through 4', 'Multiplies every value by 4', 'Filters out 4 rows'],
        answerIndex: 1,
        explanation: 'NTILE is exactly how you calculate quartiles (or any other N-way split) — for example, identifying the top-spending quarter of customers.'
      },
      {
        id: 'q4',
        prompt: 'What does ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING define?',
        options: ['A frame containing only the current row', 'A frame containing the entire partition, regardless of the current row\'s position', 'A frame that always contains exactly 2 rows', 'An invalid frame clause'],
        answerIndex: 1,
        explanation: 'This explicitly widens the frame to the whole partition, which is exactly what is needed to make LAST_VALUE behave as most people expect.'
      },
      {
        id: 'q5',
        prompt: 'If NTILE(4) is used to find a platform\'s "VIP" customer segment, which quartile number represents the highest spenders, given ORDER BY total_spent DESC?',
        options: ['Quartile 4', 'Quartile 1', 'It is random which quartile is highest', 'NTILE cannot be combined with ORDER BY DESC'],
        answerIndex: 1,
        explanation: 'With ORDER BY total_spent DESC, the highest spenders are ordered first, so they land in quartile 1 — the first group NTILE assigns.'
      }
    ]
  },
  'sql-a-3': {
    title: 'Check your understanding: INTERSECT and EXCEPT',
    intro: 'Test your knowledge of set operations beyond UNION.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does INTERSECT return?',
        options: ['Every row from both queries, combined', 'Only the rows that appear in both result sets', 'Only the rows that appear in the first query but not the second', 'An error, since INTERSECT is not valid SQL'],
        answerIndex: 1,
        explanation: 'INTERSECT keeps only rows present in both result sets — useful for "who is on both lists" questions like customers active in two different months.'
      },
      {
        id: 'q2',
        prompt: 'What does EXCEPT return?',
        options: ['Rows that appear in both result sets', 'Rows that appear in the first query but NOT in the second', 'Every row from both queries combined, without duplicates', 'Rows that appear only in the second query'],
        answerIndex: 1,
        explanation: 'EXCEPT subtracts the second result set from the first, leaving only rows unique to the first — a natural way to answer "who did we lose."'
      },
      {
        id: 'q3',
        prompt: 'What rule do INTERSECT and EXCEPT share with UNION?',
        options: ['They require an ORDER BY clause', 'Both queries must return the same number of columns, in compatible types', 'They can only be used with exactly one table', 'They automatically sort the result alphabetically'],
        answerIndex: 1,
        explanation: 'Just like UNION, the two queries combined with INTERSECT or EXCEPT must line up in column count and type.'
      },
      {
        id: 'q4',
        prompt: 'A business asks "how many of last month\'s customers are still ordering this month?" Which set operation answers the "still here" half directly?',
        options: ['UNION ALL', 'INTERSECT', 'A simple WHERE clause is always sufficient instead', 'EXCEPT'],
        answerIndex: 1,
        explanation: 'INTERSECT directly returns customers present in both months\' result sets — exactly the retained-customer question.'
      },
      {
        id: 'q5',
        prompt: 'Do INTERSECT and EXCEPT compare rows by a chosen key column, or by the full row?',
        options: ['By a chosen key column only, similar to a JOIN', 'By the full row — every selected column must match for two rows to be considered "the same"', 'They ignore column values entirely and just compare row counts', 'Only the first column is compared'],
        answerIndex: 1,
        explanation: 'INTERSECT and EXCEPT compare entire rows, not a single key — if you select multiple columns, all of them must match for a row to count as shared.'
      }
    ]
  },
  'sql-a-4': {
    title: 'Check your understanding: Views',
    intro: 'Test your knowledge of CREATE VIEW and how views behave.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does CREATE VIEW actually store?',
        options: ['A full copy of the query\'s result rows, frozen at creation time', 'The query itself, under a name, to be re-run automatically every time the view is referenced', 'Nothing at all — CREATE VIEW has no effect', 'A scheduled job that refreshes once per day'],
        answerIndex: 1,
        explanation: 'A view stores the query definition, not data — every time you query the view, the underlying query runs fresh against the live tables.'
      },
      {
        id: 'q2',
        prompt: 'If new rows are added to the orders table, when does a view built on top of orders reflect them?',
        options: ['Only after manually refreshing the view', 'Immediately, on the very next query against the view — there is no separate copy of data to go stale', 'Once a day, automatically', 'Never — views are frozen at creation time'],
        answerIndex: 1,
        explanation: 'Since a plain view has no storage of its own, it always reflects the current state of the underlying tables.'
      },
      {
        id: 'q3',
        prompt: 'What is the main benefit of putting a complex JOIN + GROUP BY + HAVING query into a view?',
        options: ['It makes the query run instantly with zero computation', 'The logic lives in exactly one place — if the definition of "high value customer" changes, you update the view once instead of finding and editing it everywhere it was copy-pasted', 'It permanently deletes the underlying tables', 'Views can only be used by database administrators'],
        answerIndex: 1,
        explanation: 'Centralising shared business logic in a view means one update propagates everywhere that view is used, instead of needing to hunt down every copy.'
      },
      {
        id: 'q4',
        prompt: 'What is a materialized view, and does SQLite support it directly?',
        options: ['It is identical to a regular view; the term is just marketing', 'A view that pre-calculates and caches its results for faster repeated reads — SQLite does not support this directly, though PostgreSQL and SQL Server do', 'A view that can only be queried once', 'A type of index'],
        answerIndex: 1,
        explanation: 'Materialized views trade instant freshness for speed by caching results. Plain views (covered in this module) exist in almost every database; materialized views are a more specialized, engine-specific feature.'
      },
      {
        id: 'q5',
        prompt: 'Can you filter and sort a view exactly like a regular table, e.g. SELECT * FROM my_view WHERE city = \'Mumbai\' ORDER BY total DESC?',
        options: ['No, views can only be queried with SELECT *', 'Yes — once created, a view behaves like any other table in a FROM clause, including filtering, sorting, and joining', 'Only if the view was created with a special FILTERABLE flag', 'Only in PostgreSQL, not SQLite'],
        answerIndex: 1,
        explanation: 'This is the entire point of a view: after creation, you interact with it exactly as you would with a real table.'
      }
    ]
  },
  'sql-a-5': {
    title: 'Check your understanding: Transactions',
    intro: 'Test your knowledge of BEGIN, COMMIT, ROLLBACK, and ACID.',
    questions: [
      {
        id: 'q1',
        prompt: 'Why might two separate UPDATE statements (subtract from A, add to B) be unsafe without a transaction?',
        options: ['UPDATE statements are always unsafe', 'If something goes wrong between the two statements (a crash, an error), the first change could take effect while the second never does, leaving the data in an inconsistent state', 'UPDATE cannot be used twice in a row', 'This is never actually a real risk'],
        answerIndex: 1,
        explanation: 'Without a transaction, there is a real window where one half of a two-part change could complete while the other does not — exactly the "vanishing loyalty points" scenario.'
      },
      {
        id: 'q2',
        prompt: 'What does ROLLBACK do?',
        options: ['Permanently saves every change made since BEGIN', 'Undoes every change made since BEGIN, as if none of it had happened', 'Deletes the entire table', 'Restarts the database server'],
        answerIndex: 1,
        explanation: 'ROLLBACK reverts all changes made within the current transaction, returning the data to its state right before BEGIN.'
      },
      {
        id: 'q3',
        prompt: 'What does COMMIT do?',
        options: ['Cancels the transaction', 'Makes every change made since BEGIN permanent, all at once', 'Only saves the first statement in the transaction', 'Locks the table permanently'],
        answerIndex: 1,
        explanation: 'COMMIT finalises every statement inside the transaction together — either all of them become permanent, or none of them do.'
      },
      {
        id: 'q4',
        prompt: 'In ACID, what does "Atomicity" guarantee?',
        options: ['That a transaction runs faster than a single statement', 'That all the statements in a transaction happen together, or none of them do', 'That data is automatically backed up', 'That two transactions can never run at the same time'],
        answerIndex: 1,
        explanation: 'Atomicity is the "all or nothing" guarantee — the exact property that makes the loyalty-points transfer scenario safe.'
      },
      {
        id: 'q5',
        prompt: 'In ACID, what does "Durability" guarantee?',
        options: ['That a transaction can be undone at any time in the future', 'That once a transaction commits, the change survives even if the system crashes immediately afterward', 'That every transaction is encrypted', 'That a transaction cannot contain more than one statement'],
        answerIndex: 1,
        explanation: 'Durability means a committed change is permanent — it will still be there after a crash, a power loss, or a restart.'
      }
    ]
  },
  'sql-a-6': {
    title: 'Check your understanding: Constraints and triggers',
    intro: 'Test your knowledge of CHECK, UNIQUE, FOREIGN KEY, and triggers.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does a CHECK constraint do?',
        options: ['It logs every change to a table', 'It rejects any INSERT or UPDATE that would violate a rule defined on the column, like price >= 0', 'It automatically fixes invalid values instead of rejecting them', 'It speeds up queries on that column'],
        answerIndex: 1,
        explanation: 'A CHECK constraint is the database itself refusing to store a value that breaks a rule you defined once, at table-creation time.'
      },
      {
        id: 'q2',
        prompt: 'What does a UNIQUE constraint enforce?',
        options: ['That a column can never be empty', 'That no two rows can share the same value in that column', 'That the column only accepts numbers', 'That the table can only have one row'],
        answerIndex: 1,
        explanation: 'UNIQUE prevents duplicate values in a column — for example, ensuring no two customers share the same email address.'
      },
      {
        id: 'q3',
        prompt: 'What does a FOREIGN KEY constraint enforce?',
        options: ['That a column\'s value must already exist as a real row in another table', 'That a column must contain a unique value', 'That a table cannot be deleted', 'That a column must be a whole number'],
        answerIndex: 0,
        explanation: 'A foreign key ensures referential integrity — e.g., an order\'s customer_id must correspond to an actual, existing customer.'
      },
      {
        id: 'q4',
        prompt: 'What does a trigger do that a constraint cannot?',
        options: ['Nothing — they are identical features with two names', 'A trigger runs arbitrary additional SQL automatically in response to an event (like INSERT), such as writing to an audit log — constraints only reject or allow values, they cannot perform extra actions', 'Triggers can only be used for deleting rows', 'Constraints are always faster than triggers in every case'],
        answerIndex: 1,
        explanation: 'Constraints are purely validation rules. Triggers can run real logic — inserting into a log table, updating a related summary column, and more — automatically, without the application needing to remember to do it.'
      },
      {
        id: 'q5',
        prompt: 'In CREATE TRIGGER ... AFTER INSERT ON orders BEGIN INSERT INTO order_log VALUES (NEW.order_id, ...); END;, what does NEW refer to?',
        options: ['The oldest row in the orders table', 'The specific row that was just inserted, which triggered this trigger to run', 'Every row in the entire table', 'A reserved keyword with no special meaning here'],
        answerIndex: 1,
        explanation: 'NEW refers to the row that triggered the event — NEW.order_id reaches into that specific newly-inserted row, similar to how a function parameter refers to whatever was passed in.'
      }
    ]
  },
  'sql-a-7': {
    title: 'Check your understanding: JSON in SQL',
    intro: 'Test your knowledge of storing and querying JSON inside a relational column.',
    questions: [
      {
        id: 'q1',
        prompt: 'Why might a column store a small JSON document instead of being split into several regular columns?',
        options: ['JSON columns are always faster than regular columns', 'When the attributes genuinely vary row to row (some restaurants have many tags, others have none), forcing them into rigid tag_1/tag_2/tag_3 columns is wasteful and inflexible', 'SQL cannot store text any other way', 'JSON is required for any column containing more than one word'],
        answerIndex: 1,
        explanation: 'JSON columns are a pragmatic fit for genuinely sparse or variable-shaped data — not a general replacement for normal columns.'
      },
      {
        id: 'q2',
        prompt: 'What does json_extract(metadata, \'$.delivery_radius_km\') do?',
        options: ['Deletes the delivery_radius_km field', 'Pulls the value of the delivery_radius_km field out of the JSON document stored in the metadata column', 'Converts the entire column to a number', 'Checks if the column is valid JSON'],
        answerIndex: 1,
        explanation: 'json_extract reaches into a JSON document using a path (starting with $, the root) and returns the specified field\'s value.'
      },
      {
        id: 'q3',
        prompt: 'What does the path \'$.tags[0]\' refer to?',
        options: ['The entire tags array', 'The first element of the tags array', 'The last element of the tags array', 'A field literally named "tags[0]"'],
        answerIndex: 1,
        explanation: 'Square brackets with a number index into a JSON array, the same way [0] indexes the first item of a Python list.'
      },
      {
        id: 'q4',
        prompt: 'What does json_each(metadata, \'$.tags\') do?',
        options: ['Deletes every tag', 'Unpacks the tags JSON array into one row per element, so it can be filtered or joined against like a small table', 'Converts the tags array into a single comma-separated string', 'Counts how many tags exist, returning just one number'],
        answerIndex: 1,
        explanation: 'json_each treats a JSON array as a tiny table-like structure, one row per array element — useful for "does this array contain X" style filtering.'
      },
      {
        id: 'q5',
        prompt: 'According to this module\'s guidance, when should you NOT reach for a JSON column?',
        options: ['When the data is genuinely sparse or variable in shape', 'When a field is present on every row, queried constantly, and would benefit from a proper index — in that case, it almost always belongs as a real column', 'JSON columns should be used for every single field, with no exceptions', 'Only when the database does not support JSON at all'],
        answerIndex: 1,
        explanation: 'JSON is a pragmatic escape hatch for irregular data, not a substitute for well-designed, regularly-queried columns that benefit from indexing.'
      }
    ]
  },
  'sql-a-8': {
    title: 'Check your understanding: Composite and covering indexes',
    intro: 'Test your knowledge of multi-column indexes and how column order affects them.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is a composite index?',
        options: ['An index that only works on numeric columns', 'A single index built across more than one column, useful for queries that filter on those columns together', 'An index that automatically updates itself nightly', 'A temporary index that disappears after one query'],
        answerIndex: 1,
        explanation: 'A composite index on (customer_id, status) is organized like a phone book sorted by customer_id first, then status within each customer.'
      },
      {
        id: 'q2',
        prompt: 'Given an index on (customer_id, status), which query benefits from it?',
        options: ['WHERE status = \'delivered\' alone', 'WHERE customer_id = 5 alone, or WHERE customer_id = 5 AND status = \'delivered\' together', 'Neither query benefits at all', 'Only queries with no WHERE clause'],
        answerIndex: 1,
        explanation: 'A composite index helps queries that use its leading column(s) — customer_id alone, or customer_id combined with status. Filtering on status alone skips the leading column and gets little benefit.'
      },
      {
        id: 'q3',
        prompt: 'Why does column order matter so much in a composite index?',
        options: ['It does not matter at all', 'The index is physically organized by the first column first, then the second within each value of the first — like a phone book sorted by last name, then first name, which is useless if you only have someone\'s first name', 'Column order only affects how results are displayed, not performance', 'SQLite automatically reorders columns for you'],
        answerIndex: 1,
        explanation: 'Put the column you filter on most often (or that narrows results the most) first — getting this backwards makes the index far less useful.'
      },
      {
        id: 'q4',
        prompt: 'What makes an index "covering"?',
        options: ['It covers every table in the database', 'It contains every column a specific query needs (for filtering and for selecting), so the database can answer the query from the index alone, without touching the actual table', 'It is the very first index created on a table', 'It automatically covers for missing data with default values'],
        answerIndex: 1,
        explanation: 'When EXPLAIN QUERY PLAN says "USING COVERING INDEX," it means the query never had to read the underlying table at all.'
      },
      {
        id: 'q5',
        prompt: 'What is the real cost of adding more and more indexes to a table?',
        options: ['There is no cost — more indexes are always strictly better', 'Every index speeds up matching reads but slightly slows down every INSERT, UPDATE, and DELETE on that table, since the index itself must be kept up to date', 'Indexes cost money per query', 'Indexes only work for 24 hours before expiring'],
        answerIndex: 1,
        explanation: 'Indexing is a deliberate tradeoff between read speed and write speed — not something to apply unconditionally to every column.'
      }
    ]
  },
  'sql-a-9': {
    title: 'Check your understanding: Reading query plans',
    intro: 'Test your knowledge of interpreting multi-line EXPLAIN QUERY PLAN output.',
    questions: [
      {
        id: 'q1',
        prompt: 'In a JOIN\'s query plan, what does the order of the SCAN/SEARCH lines roughly tell you?',
        options: ['Nothing useful', 'Roughly the order of operations the database is using — which table it processes first, and how it looks up matches in the other', 'The exact number of rows that will be returned', 'Which column has a typo'],
        answerIndex: 1,
        explanation: 'Reading the plan top to bottom gives you a rough mental model of the execution order — which table gets scanned, and how matches in the other table get found.'
      },
      {
        id: 'q2',
        prompt: 'What does "USE TEMP B-TREE FOR ORDER BY" in a query plan indicate?',
        options: ['The query failed', 'SQLite had to build a temporary sorted structure because no index already existed in the order being requested', 'The query used a covering index', 'The table has too many columns'],
        answerIndex: 1,
        explanation: 'This line means sorting required extra work because the data was not already in the right order — an index on the ORDER BY column would let the database skip this step.'
      },
      {
        id: 'q3',
        prompt: 'After creating an index on the column used in an ORDER BY, what change would you expect to see in the query plan?',
        options: ['No change at all', 'The "USE TEMP B-TREE FOR ORDER BY" line disappears, since the index already provides rows in the needed order', 'The query plan becomes longer', 'The table gets renamed'],
        answerIndex: 1,
        explanation: 'Once an index already stores rows in the requested order, the database can simply read them off the index in that order, skipping the temporary sort structure entirely.'
      },
      {
        id: 'q4',
        prompt: 'Does GROUP BY have the same "needs a temporary structure without a helpful index" issue as ORDER BY?',
        options: ['No, GROUP BY never needs extra structures', 'Yes — without a suitable index, SQLite may need a temporary structure to gather rows into their groups, the same underlying issue as an unindexed ORDER BY', 'GROUP BY always uses a covering index automatically', 'This only applies to SUM(), not COUNT()'],
        answerIndex: 1,
        explanation: 'The same logic applies to both — a helpful index lets the database avoid building a temporary structure for either sorting or grouping.'
      },
      {
        id: 'q5',
        prompt: 'A report query that ran fine for months suddenly takes 30 seconds after the table grows. What is the fastest first diagnostic step?',
        options: ['Rewrite the entire application', 'Delete old data without investigating', 'Run EXPLAIN QUERY PLAN on the slow query to see whether it is doing an unexpected SCAN or using a TEMP B-TREE, before guessing at a fix', 'Restart the database server'],
        answerIndex: 2,
        explanation: 'EXPLAIN QUERY PLAN reveals exactly what the database is doing, turning a guessing game into a targeted fix.'
      }
    ]
  },
  'sql-a-10': {
    title: 'Check your understanding: Query anti-patterns',
    intro: 'Test your knowledge of common SQL performance pitfalls and their fixes.',
    questions: [
      {
        id: 'q1',
        prompt: 'Why does WHERE UPPER(city) = \'MUMBAI\' typically prevent an index on city from being used?',
        options: ['UPPER() is not valid SQL', 'An index is built on a column\'s actual stored values; wrapping the column in a function changes what the database needs to match, generally preventing direct index use', 'This pattern is actually faster than a plain comparison', 'Indexes only work with lowercase text'],
        answerIndex: 1,
        explanation: 'The fix is comparing against a properly-cased literal instead (or normalising the stored data\'s casing), keeping the column itself bare in the WHERE clause.'
      },
      {
        id: 'q2',
        prompt: 'Beyond readability, why does SELECT * matter more once covering indexes are involved?',
        options: ['It has no extra relevance', 'SELECT * may demand columns that are not part of a covering index, forcing the database to fall back to reading the actual table instead of answering purely from the index', 'SELECT * automatically creates a new index', 'SELECT * is always rejected when an index exists'],
        answerIndex: 1,
        explanation: 'A covering index only helps if the query does not ask for columns outside the index — SELECT * risks asking for more than the index actually contains.'
      },
      {
        id: 'q3',
        prompt: 'Why can an OR across two different columns be harder for the optimizer than two separate indexed conditions?',
        options: ['OR is invalid SQL syntax', 'A single index generally cannot efficiently serve both halves of an OR across different columns at once, whereas splitting into two queries joined by UNION lets each half use its own index', 'OR always returns incorrect results', 'OR can only be used with exactly two conditions'],
        answerIndex: 1,
        explanation: 'Splitting an OR-across-columns query into two UNION-joined queries often lets the optimizer use a dedicated index for each half.'
      },
      {
        id: 'q4',
        prompt: 'What is the key difference between a correlated subquery and an equivalent JOIN + GROUP BY, in terms of how the optimizer treats them?',
        options: ['They are always identical in performance, with no exceptions', 'A correlated subquery conceptually re-checks the condition once per outer row; a JOIN + GROUP BY lets the optimizer consider the whole operation at once, which is frequently (not always) faster on larger tables', 'JOINs are always slower than subqueries', 'Correlated subqueries cannot be rewritten as JOINs'],
        answerIndex: 1,
        explanation: 'Both are correct SQL — but the JOIN + GROUP BY version frequently gives the optimizer more room to find an efficient plan, especially as tables grow.'
      },
      {
        id: 'q5',
        prompt: 'What is the actual discipline this module recommends, rather than blindly applying every rewrite everywhere?',
        options: ['Always rewrite every query using all four patterns, regardless of the data', 'Treat these patterns as prime suspects to check, and use EXPLAIN QUERY PLAN before and after a rewrite to confirm it actually helped on your specific data and engine', 'Never use subqueries or OR under any circumstance', 'Ignore performance until a customer complains'],
        answerIndex: 1,
        explanation: 'These are well-documented tendencies, not absolute laws — measuring with EXPLAIN QUERY PLAN is what turns a guess into a verified improvement.'
      }
    ]
  },
  'sql-a-11': {
    title: 'Check your understanding: Concurrency and locking',
    intro: 'Test your knowledge of locks, isolation levels, and deadlocks.',
    questions: [
      {
        id: 'q1',
        prompt: 'In the "last item in stock" scenario, why can two customers both successfully order the same single last unit without proper locking?',
        options: ['This can never actually happen', 'Both queries can check "is stock available?" and both see "yes" before either one actually commits a decrement, since nothing stopped them from reading the same not-yet-updated state at the same time', 'SQL always prevents this automatically with no setup required', 'This only happens with NoSQL databases, never SQL'],
        answerIndex: 1,
        explanation: 'Without a lock forcing one transaction to wait for the other, both can observe the same "stock available" state before either one updates it.'
      },
      {
        id: 'q2',
        prompt: 'What is the difference between a shared lock and an exclusive lock?',
        options: ['They are the same thing with different names', 'A shared lock allows multiple readers at once; an exclusive lock is needed to write, and blocks other writers (and sometimes other readers) until released', 'Shared locks are only used for deleting data', 'Exclusive locks allow unlimited simultaneous writers'],
        answerIndex: 1,
        explanation: 'Reading does not conflict with other reading, so shared locks can coexist. Writing requires exclusive access to avoid conflicting changes.'
      },
      {
        id: 'q3',
        prompt: 'What is the general tradeoff between stricter and looser isolation levels?',
        options: ['There is no tradeoff — strictest is always best with zero downside', 'Stricter isolation means fewer surprising bugs but more transactions waiting on each other (or needing retries), which can reduce overall throughput under heavy load', 'Looser isolation is always faster with no correctness cost', 'Isolation levels only affect how data is displayed, not correctness'],
        answerIndex: 1,
        explanation: 'Every database faces this same fundamental tradeoff between consistency guarantees and concurrent throughput.'
      },
      {
        id: 'q4',
        prompt: 'What is a deadlock?',
        options: ['A query that returns zero rows', 'A situation where transaction A is waiting for a lock held by transaction B, while B is simultaneously waiting for a lock held by A, so neither can ever proceed', 'A type of syntax error', 'A transaction that runs forever by design'],
        answerIndex: 1,
        explanation: 'Deadlocks are mutual waiting with no way out — real databases detect this automatically and forcibly fail one transaction so the other can proceed.'
      },
      {
        id: 'q5',
        prompt: 'What is a practical habit that helps avoid most real-world deadlocks?',
        options: ['Never use transactions at all', 'When application code updates multiple tables or rows inside one transaction, always touch them in the same consistent order, everywhere in the codebase', 'Always use the strictest possible isolation level for every single query', 'Run every transaction twice to be safe'],
        answerIndex: 1,
        explanation: 'Most real deadlocks come from two different parts of an application locking the same resources in opposite order — consistent ordering prevents that.'
      }
    ]
  },

  // Python
  'py-b-1': {
    title: 'Check your understanding: Python Basics',
    intro: 'Test what you just learned about Python and variables.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does the print() function do in Python?',
        options: ['Sends a document to a physical printer', 'Displays text or variable values on the screen', 'Saves the code to a file', 'Stops the program from running'],
        answerIndex: 1,
        explanation: 'print() is Python\'s built-in way to output data to your console/screen so you can see the results of your code.'
      },
      {
        id: 'q2',
        prompt: 'Which of the following is a valid way to create a variable in Python?',
        options: ['let user_age = 25', 'user_age = 25', 'int user_age = 25', 'user_age: 25'],
        answerIndex: 1,
        explanation: 'Python does not require keywords like "let" or "int". You just state the variable name, an equals sign, and the value.'
      },
      {
        id: 'q3',
        prompt: 'Why are f-strings (e.g., f"Hello {name}") so useful in Python?',
        options: ['They run faster than regular strings', 'They automatically fix spelling mistakes', 'They allow you to easily inject variables directly into the middle of text', 'They format the text in bold'],
        answerIndex: 2,
        explanation: 'F-strings let you put variable names inside curly braces {}, and Python automatically replaces them with their actual values when printing.'
      },
      {
        id: 'q4',
        prompt: 'What character is used to write a comment (a note ignored by the computer) in Python?',
        options: ['//', '/*', '<!--', '#'],
        answerIndex: 3,
        explanation: 'Anything written after a hash/pound symbol (#) on a line is treated as a comment and ignored by Python.'
      },
      {
        id: 'q5',
        prompt: 'If you set `is_employed = True`, what data type did Python automatically assign to this variable?',
        options: ['String', 'Integer', 'Float', 'Boolean'],
        answerIndex: 3,
        explanation: 'True and False are Boolean (bool) values, representing binary yes/no states.'
      }
    ]
  },

  'py-b-2': {
    title: 'Check your understanding: Numbers, strings, and operations',
    intro: 'Test your knowledge of Python arithmetic, strings, and type conversion.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does 7 // 2 return in Python?',
        options: ['3.5', '3', '1', 'An error'],
        answerIndex: 1,
        explanation: 'The double slash (//) is floor division — it divides and throws away the decimal part, leaving just the whole number 3.'
      },
      {
        id: 'q2',
        prompt: 'Why does "Age: " + age raise a TypeError if age is the number 28?',
        options: ['Python requires you to convert the number to text first using str() or an f-string', 'Because age is too large a number', 'Because the string has a space in it', 'Because + cannot be used twice in one line'],
        answerIndex: 0,
        explanation: 'Python will not silently combine text and numbers with +. You need str(age) or an f-string to join them safely.'
      },
      {
        id: 'q3',
        prompt: 'What does "  Priya  ".strip() return?',
        options: ['"  Priya  "', '"Priya"', '"PRIYA"', '"priya"'],
        answerIndex: 1,
        explanation: '.strip() removes leading and trailing whitespace only, leaving "Priya" with no surrounding spaces.'
      },
      {
        id: 'q4',
        prompt: 'What is the % (modulo) operator typically used for?',
        options: ['Rounding a number', 'Finding the remainder after division — for example, checking if a number is even or odd', 'Converting a string to an integer', 'Finding a square root'],
        answerIndex: 1,
        explanation: 'x % 2 gives 0 for even numbers and 1 for odd numbers, since it returns whatever is left over after dividing by 2.'
      },
      {
        id: 'q5',
        prompt: 'If user_input = "25" (a string), what do you need before you can compute user_input + 5?',
        options: ['Nothing, it works as written', 'Convert user_input to an integer first using int()', 'Convert 5 to a string first', 'This is impossible in Python'],
        answerIndex: 1,
        explanation: 'Text read from user input, files, or forms is always a string. int(user_input) converts it to a number you can do maths with.'
      }
    ]
  },
  'py-b-3': {
    title: 'Check your understanding: if, elif, else',
    intro: 'Test your knowledge of conditions and decision-making in Python.',
    questions: [
      {
        id: 'q1',
        prompt: 'Which symbol checks if two values are equal (rather than assigning a value)?',
        options: ['=', '==', '===', '~='],
        answerIndex: 1,
        explanation: 'A single = assigns a value to a variable. A double == compares two values and returns True or False.'
      },
      {
        id: 'q2',
        prompt: 'In an if/elif/else chain, what happens once Python finds the first condition that is True?',
        options: ['It keeps checking all the remaining elif conditions too', 'It runs that block only, and skips every remaining elif/else below it', 'It throws an error', 'It runs the else block afterwards as well'],
        answerIndex: 1,
        explanation: 'Python stops at the first True condition, runs its block, and skips the rest of the chain entirely.'
      },
      {
        id: 'q3',
        prompt: 'Why must the code inside an if block be indented?',
        options: ['Indentation is just a style preference and has no effect', 'Indentation is how Python knows which lines belong inside the if block', 'Indentation makes the code run faster', 'Indentation is only required inside loops, not if statements'],
        answerIndex: 1,
        explanation: 'Unlike many languages that use curly braces, Python uses indentation itself to define which lines are part of a block.'
      },
      {
        id: 'q4',
        prompt: 'Which of the following values is "falsy" in Python (acts like False in an if statement)?',
        options: ['"hello"', '1', '[] (an empty list)', '42'],
        answerIndex: 2,
        explanation: 'Empty collections like [], "", and the number 0 are all falsy. Non-empty values like "hello", 1, and 42 are truthy.'
      },
      {
        id: 'q5',
        prompt: 'A rule says "free delivery if Prime member OR order over 500." If is_prime_member is False and order_total is 300, what happens?',
        options: ['Free delivery, since OR is lenient', 'No free delivery, because neither condition is True', 'An error, because OR needs both to be true', 'Free delivery, but only if AND is used instead'],
        answerIndex: 1,
        explanation: 'OR requires at least one condition to be True. Here, is_prime_member is False and order_total (300) is not over 500, so both fail and the OR is False.'
      }
    ]
  },
  'py-b-4': {
    title: 'Check your understanding: Loops',
    intro: 'Test your knowledge of for loops, while loops, and break/continue.',
    questions: [
      {
        id: 'q1',
        prompt: 'What sequence of numbers does range(1, 5) produce?',
        options: ['[1, 2, 3, 4, 5]', '[1, 2, 3, 4]', '[0, 1, 2, 3, 4]', '[1, 5]'],
        answerIndex: 1,
        explanation: 'range(1, 5) starts at 1 and stops before 5, producing 1, 2, 3, 4.'
      },
      {
        id: 'q2',
        prompt: 'When should you typically use a for loop instead of a while loop?',
        options: ['When you are looping over a known sequence, like every item in a list', 'They are completely interchangeable in every situation', 'While loops cannot use break, so for loops are always safer', 'For loops only work with numbers, never with lists'],
        answerIndex: 0,
        explanation: 'for loops shine when you know what you are iterating over (a list, a range). while loops shine when you are repeating "until a condition changes," with an unknown number of repetitions.'
      },
      {
        id: 'q3',
        prompt: 'What typically causes an "infinite loop" in a while statement?',
        options: ['Using break inside the loop', "The loop's condition never becomes False because nothing inside the loop updates the variable being checked", 'Printing too many things inside the loop', 'Using range() instead of a list'],
        answerIndex: 1,
        explanation: 'If the variable controlling the while condition is never updated inside the loop, the condition stays True forever and the program never moves on.'
      },
      {
        id: 'q4',
        prompt: 'What does continue do inside a loop?',
        options: ['Stops the loop completely', 'Skips the rest of the current iteration and moves on to the next item', 'Pauses the loop for one second', 'Restarts the loop from the very beginning'],
        answerIndex: 1,
        explanation: 'continue jumps straight to the next item in the loop, skipping any remaining code for the current one. break, by contrast, exits the loop entirely.'
      },
      {
        id: 'q5',
        prompt: 'What is the value of total after this code runs?\ntotal = 0\nfor x in [10, 20, 30]:\n    total = total + x',
        options: ['10', '30', '60', '90'],
        answerIndex: 2,
        explanation: 'total starts at 0, then becomes 10, then 30, then 60 — adding each list item in turn.'
      }
    ]
  },
  'py-b-5': {
    title: 'Check your understanding: Lists and dictionaries',
    intro: 'Test your knowledge of Python\'s core data structures.',
    questions: [
      {
        id: 'q1',
        prompt: 'In Python, what is the index of the first item in a list?',
        options: ['1', '0', '-1', 'It depends on the list'],
        answerIndex: 1,
        explanation: 'Python lists (and strings) are zero-indexed — the first item is always at position 0.'
      },
      {
        id: 'q2',
        prompt: 'Which best describes a Python dictionary?',
        options: ['An ordered collection accessed only by position, like a list', 'A collection of key-value pairs, accessed by their key name rather than position', 'A special kind of loop', 'A function that converts strings to numbers'],
        answerIndex: 1,
        explanation: 'Dictionaries store data as key-value pairs — you look up a value using its key (like "name"), not its position.'
      },
      {
        id: 'q3',
        prompt: 'What does a list of dictionaries like [{"name": "Aditi", "city": "Mumbai"}, {"name": "Rohan", "city": "Delhi"}] conceptually represent?',
        options: ['A single row of data', 'A table of rows, where each dictionary is one row and each key is a column — similar to a SQL table', 'A SQL query written in Python', 'A syntax error'],
        answerIndex: 1,
        explanation: 'This is exactly the structure pandas DataFrames are built from: each dictionary is a row, each shared key is a column.'
      },
      {
        id: 'q4',
        prompt: 'What does the .append() method do to a list?',
        options: ['Removes the last item', 'Sorts the list', 'Adds a new item to the end of the list', 'Converts the list into a dictionary'],
        answerIndex: 2,
        explanation: '.append() adds one new item to the end of an existing list, growing it by one element.'
      },
      {
        id: 'q5',
        prompt: 'Why are Python lists described as "mutable"?',
        options: ['They cannot be changed after creation', 'Their contents can be changed — items added, removed, or reordered — after the list is created', 'They can only ever hold numbers', 'They automatically sort themselves whenever you read them'],
        answerIndex: 1,
        explanation: 'Mutable means changeable. Unlike strings, you can modify a list in place using methods like .append(), .remove(), and .sort().'
      }
    ]
  },
  'py-b-6': {
    title: 'Check your understanding: Functions',
    intro: 'Test your knowledge of defining and using Python functions.',
    questions: [
      {
        id: 'q1',
        prompt: 'Which keyword starts a function definition in Python?',
        options: ['function', 'def', 'func', 'define'],
        answerIndex: 1,
        explanation: 'Python function definitions always start with the def keyword, followed by the function name and parentheses.'
      },
      {
        id: 'q2',
        prompt: 'What is the key difference between print() and return inside a function?',
        options: ['There is no real difference between them', 'print() displays a value on screen; return hands the value back so it can be stored or reused elsewhere in your code', 'return is only used for loops', 'print() can only be used outside of functions'],
        answerIndex: 1,
        explanation: 'print() is just for display. return is what lets a function\'s result actually be captured in a variable and used in further calculations.'
      },
      {
        id: 'q3',
        prompt: 'In def convert_to_inr(amount, exchange_rate=83):, what is exchange_rate=83?',
        options: ['A syntax error', 'A default argument, used automatically if the caller does not supply their own value', 'A global variable shared by all functions', 'A required argument that must always be passed explicitly'],
        answerIndex: 1,
        explanation: 'Default arguments let a parameter fall back to a sensible value automatically, while still letting the caller override it if needed.'
      },
      {
        id: 'q4',
        prompt: 'Why are functions especially valuable in data cleaning tasks?',
        options: ['They automatically connect Python to the internet', 'They let you write a cleanup rule once and apply it consistently to every row, instead of repeating the same logic over and over', 'They make code run on a different computer', 'They prevent every possible error from occurring'],
        answerIndex: 1,
        explanation: 'Wrapping a cleanup step (like clean_name) in a function means you write the logic once and reuse it reliably across an entire dataset.'
      },
      {
        id: 'q5',
        prompt: 'What is a sign that a function might be poorly designed?',
        options: ['It has a clear, descriptive name', 'It does one specific thing', "It's hard to summarize in a few words because it's doing several unrelated things at once", 'It includes a return statement'],
        answerIndex: 2,
        explanation: 'Good functions do one job well. If you cannot describe what a function does in a short phrase, it is usually doing too much and should be split up.'
      }
    ]
  },
  'py-b-7': {
    title: 'Check your understanding: Files',
    intro: 'Test your knowledge of reading and writing files in Python.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does the "with open(...) as file:" pattern guarantee?',
        options: ['The file will always be deleted afterward', 'The file will be automatically closed once the block finishes, even if an error occurs partway through', 'The file becomes permanently read-only', 'The file is automatically uploaded to the cloud'],
        answerIndex: 1,
        explanation: 'The with statement handles closing the file for you, even if something goes wrong inside the block — you never have to remember to close it manually.'
      },
      {
        id: 'q2',
        prompt: 'What happens if you open an existing file in "w" (write) mode?',
        options: ['New content is appended to the end of the existing content', 'Python throws an error because the file already exists', 'The existing content is erased before any new content is written', 'It asks for confirmation before doing anything'],
        answerIndex: 2,
        explanation: '"w" mode always starts from a blank file, erasing whatever was there before. Use "a" (append mode) if you want to keep the existing content.'
      },
      {
        id: 'q3',
        prompt: 'What is a CSV file, and why is it so commonly used for data?',
        options: ['A video file format', 'Comma-Separated Values — a plain text format where commas separate columns, supported by virtually every spreadsheet and database tool', 'A format that only Python can read', 'A compressed, unreadable binary format'],
        answerIndex: 1,
        explanation: 'CSV is just plain text with commas marking column boundaries, which is exactly why it travels so easily between Excel, databases, and Python.'
      },
      {
        id: 'q4',
        prompt: 'When reading a CSV file with csv.DictReader, how is each row represented?',
        options: ['As a single long string', 'As a list of numbers', 'As a dictionary, using the column headers from the first row as keys', 'As a separate file for every row'],
        answerIndex: 2,
        explanation: 'DictReader uses the header row to build a dictionary for each row, so you can access values by column name, like row["total"].'
      },
      {
        id: 'q5',
        prompt: 'Why might you need float(row["total"]) when working with data read from a CSV file?',
        options: ['Because CSV files corrupt all numeric data', 'Because every value read from a CSV file arrives as text (a string), even if it looks like a number', 'Because float() deletes the decimal point', 'Because CSV files cannot store numbers at all'],
        answerIndex: 1,
        explanation: 'Just like with user input, every value coming out of a CSV reader is a string by default. You must convert it with int() or float() before doing maths on it.'
      }
    ]
  },

  'py-b-8': {
    title: 'Check your understanding: Errors and extra data types',
    intro: 'Test your knowledge of try/except, input(), tuples, sets, None, and unpacking.',
    questions: [
      {
        id: 'q1',
        prompt: 'What type of value does input() always return, even if the user types a number?',
        options: ['An integer', 'A float', 'A string (text)', 'A boolean'],
        answerIndex: 2,
        explanation: 'Just like reading from a file, input() always hands back text. You need int() or float() before you can do maths with it.'
      },
      {
        id: 'q2',
        prompt: 'What is the main benefit of wrapping risky code in a try/except block?',
        options: ['It makes the code run faster', 'It prevents the program from crashing when an expected kind of error occurs, letting you handle it gracefully instead', 'It automatically fixes any bugs in your code', 'It is required before you can use any function in Python'],
        answerIndex: 1,
        explanation: 'try/except lets your program catch a specific problem (like bad input) and respond sensibly, rather than crashing and stopping everything that follows.'
      },
      {
        id: 'q3',
        prompt: 'What is the key difference between a list and a tuple?',
        options: ['Tuples can only store numbers', 'A tuple, once created, cannot be changed (immutable); a list can be modified after creation', 'Lists use round brackets, tuples use square brackets', 'There is no real difference between them'],
        answerIndex: 1,
        explanation: 'Tuples are immutable — once you create one, you cannot add, remove, or change its items. Lists remain fully editable after creation.'
      },
      {
        id: 'q4',
        prompt: 'What does set(["Mumbai", "Delhi", "Mumbai", "Pune"]) return?',
        options: ['["Mumbai", "Delhi", "Mumbai", "Pune"] unchanged', 'A set containing only the unique values: Mumbai, Delhi, and Pune', 'An error, because sets cannot hold text', 'A single combined string'],
        answerIndex: 1,
        explanation: 'Converting a list to a set automatically removes duplicate values, leaving only the distinct items — exactly what you want when counting unique entries.'
      },
      {
        id: 'q5',
        prompt: 'In x, y = (10, 20), what is happening?',
        options: ['This causes a syntax error', 'Unpacking — the tuple (10, 20) is split so that x becomes 10 and y becomes 20 in one line', 'x and y both become the tuple (10, 20)', 'Only x receives a value; y stays empty'],
        answerIndex: 1,
        explanation: 'Unpacking lets you assign each item of a tuple (or list) to its own variable in a single line, instead of accessing items one by one with indexing.'
      }
    ]
  },

  // Python Intermediate
  'py-i-1': {
    title: 'Check your understanding: Your first DataFrame',
    intro: 'Test your knowledge of pandas basics and loading data.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is a pandas DataFrame?',
        options: ['A single column of data', "pandas' table structure — rows and columns, like an Excel sheet or SQL table", 'A type of chart', 'A function for printing text'],
        answerIndex: 1,
        explanation: 'A DataFrame is the core pandas object — a two-dimensional table of rows and columns you can filter, sort, group, and calculate on directly in code.'
      },
      {
        id: 'q2',
        prompt: 'What does pd.read_csv() do?',
        options: ['Creates a new empty DataFrame', 'Deletes a CSV file', 'Reads an entire CSV file (or CSV-like text) into a DataFrame in one line', 'Converts a DataFrame into a chart'],
        answerIndex: 2,
        explanation: 'read_csv() is the standard way to load real-world data into pandas — it handles parsing the columns and rows for you.'
      },
      {
        id: 'q3',
        prompt: 'What does df.head() show you?',
        options: ['Every row in the DataFrame', 'Only the column names', 'The first 5 rows by default, useful for a quick sanity check after loading data', 'The total number of rows'],
        answerIndex: 2,
        explanation: 'df.head() is the most common first command after loading data — a quick look without printing potentially thousands of rows.'
      },
      {
        id: 'q4',
        prompt: 'What does df["unit_price"] return?',
        options: ['A new empty DataFrame', 'A Series — a single column of data, with its own .mean(), .sum(), and similar methods', 'An error, since columns cannot be selected this way', 'The column names only'],
        answerIndex: 1,
        explanation: 'Selecting one column with df["column_name"] returns a Series, which behaves like a single labeled column you can run calculations on directly.'
      },
      {
        id: 'q5',
        prompt: 'Why is df.info() useful right after loading a new dataset?',
        options: ['It deletes any row with missing data automatically', 'It shows column names, types, and how many non-null values each column has — a fast way to spot problems early', 'It sorts the DataFrame', 'It creates a chart of the data'],
        answerIndex: 1,
        explanation: 'df.info() reveals type mismatches (a numeric column loaded as text) and missing-value counts immediately, before you build any analysis on top of bad assumptions.'
      }
    ]
  },
  'py-i-2': {
    title: 'Check your understanding: Selecting, filtering, sorting',
    intro: 'Test your knowledge of boolean filtering and sorting in pandas.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does df[df["unit_price"] > 1000] do?',
        options: ['Deletes every row where unit_price is over 1000', 'Returns only the rows where unit_price is greater than 1000', 'Causes an error, since this is not valid syntax', 'Sorts the DataFrame by unit_price'],
        answerIndex: 1,
        explanation: 'df["unit_price"] > 1000 creates a column of True/False values; wrapping it in df[...] keeps only the rows where the condition was True — the pandas equivalent of SQL\'s WHERE.'
      },
      {
        id: 'q2',
        prompt: 'Why does df[df["category"] == "Electronics" & df["unit_price"] > 1000] usually cause an error?',
        options: ['& is not allowed in pandas at all', 'Each condition needs its own parentheses when combined with & or |, e.g. (condition1) & (condition2)', 'You cannot combine two conditions in pandas', 'category and unit_price cannot be compared together'],
        answerIndex: 1,
        explanation: 'Without parentheses around each condition, Python tries to evaluate the & before the comparisons are fully formed, which raises an error or gives the wrong result.'
      },
      {
        id: 'q3',
        prompt: 'What is the pandas equivalent of SQL\'s WHERE category IN (\'Electronics\', \'Apparel\')?',
        options: ['df[df["category"] = "Electronics" or "Apparel"]', 'df[df["category"].isin(["Electronics", "Apparel"])]', 'df.filter("Electronics", "Apparel")', 'df["category"].contains(["Electronics", "Apparel"])'],
        answerIndex: 1,
        explanation: '.isin() checks whether each value in a column matches anything in a given list, exactly like SQL\'s IN operator.'
      },
      {
        id: 'q4',
        prompt: 'What does df.sort_values("unit_price", ascending=False) do?',
        options: ['Removes the unit_price column', 'Sorts the DataFrame by unit_price from highest to lowest', 'Sorts the DataFrame by unit_price from lowest to highest', 'Filters out rows with low unit_price'],
        answerIndex: 1,
        explanation: 'ascending=False reverses the default sort order, giving you highest-to-lowest, the same idea as SQL\'s ORDER BY ... DESC.'
      },
      {
        id: 'q5',
        prompt: 'What is the difference between df["product"] and df[["product", "unit_price"]]?',
        options: ['There is no difference', 'The first selects one column as a Series; the second selects multiple columns as a DataFrame, using a list inside the brackets', 'The second one only works with numeric columns', 'The first one is invalid syntax'],
        answerIndex: 1,
        explanation: 'Single brackets with one column name return a Series. Double brackets with a list of column names return a DataFrame containing just those columns.'
      }
    ]
  },
  'py-i-3': {
    title: 'Check your understanding: Cleaning messy data',
    intro: 'Test your knowledge of handling missing values, text cleanup, and duplicates in pandas.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does df.isnull().sum() show you?',
        options: ['The total number of rows in the DataFrame', 'How many missing (null) values exist in each column', 'The sum of every numeric column', 'Whether the DataFrame is completely empty'],
        answerIndex: 1,
        explanation: 'isnull() marks every missing cell as True; .sum() then adds those up per column, giving you a missing-value count for each one.'
      },
      {
        id: 'q2',
        prompt: 'What is the difference between df.dropna() and df.fillna(value)?',
        options: ['They do the exact same thing', 'dropna() removes rows with missing values; fillna() replaces missing values with something specific instead of removing the row', 'fillna() only works on text columns', 'dropna() only works on the first column'],
        answerIndex: 1,
        explanation: 'Dropping loses the whole row; filling keeps the row but replaces the gap with a default value — the right choice depends on whether a reasonable default exists.'
      },
      {
        id: 'q3',
        prompt: 'What does the .str accessor let you do, e.g. in df["product"].str.strip()?',
        options: ['Convert the column to a string type permanently', 'Apply a string method (like strip, title, upper) to every value in the column at once, without writing a loop', 'Delete the column', 'Count how many characters are in the column name'],
        answerIndex: 1,
        explanation: '.str unlocks Python string methods across an entire column simultaneously — .str.strip() runs strip() on every value in one line.'
      },
      {
        id: 'q4',
        prompt: 'What does errors="coerce" do in pd.to_numeric(df["price"], errors="coerce")?',
        options: ['It deletes the entire column if any value fails to convert', 'It crashes the program on the first bad value', 'It turns any value that cannot be converted into NaN (missing), instead of crashing the whole operation', 'It rounds every value to the nearest whole number'],
        answerIndex: 2,
        explanation: 'errors="coerce" is the pandas equivalent of try/except for type conversion — problem values become NaN so you can find and handle them deliberately, rather than losing the entire column.'
      },
      {
        id: 'q5',
        prompt: 'What does df.drop_duplicates() do?',
        options: ['Removes every row that has any missing value', 'Removes rows that are exact duplicates of an earlier row, keeping the first copy', 'Removes a specific named column', 'Sorts the DataFrame'],
        answerIndex: 1,
        explanation: 'drop_duplicates() keeps the first occurrence of each unique row and removes any exact repeats that follow.'
      }
    ]
  },
  'py-i-4': {
    title: 'Check your understanding: groupby and pivot tables',
    intro: 'Test your knowledge of grouping and aggregating data in pandas.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does df.groupby("category")["total"].sum() calculate?',
        options: ['The overall total across the entire DataFrame', 'The total of the "total" column, calculated separately for each distinct value in "category"', 'The number of categories', 'The average of every column'],
        answerIndex: 1,
        explanation: 'groupby splits the DataFrame into buckets by category, and .sum() calculates a separate total within each bucket — the same idea as SQL\'s GROUP BY.'
      },
      {
        id: 'q2',
        prompt: 'What does .agg(["sum", "mean", "count"]) let you do after a groupby?',
        options: ['Only one statistic at a time', 'Calculate multiple statistics (sum, mean, count) for each group, all in one result', 'Delete groups with low counts', 'Sort the groups alphabetically'],
        answerIndex: 1,
        explanation: '.agg() with a list of function names calculates each of them per group, producing one combined summary table instead of running separate groupby calls.'
      },
      {
        id: 'q3',
        prompt: 'In df.pivot_table(values="total", index="region", columns="category", aggfunc="sum"), what does index="region" control?',
        options: ['Which column becomes the chart\'s legend', 'Which column\'s distinct values become the rows of the resulting pivot table', 'Which column gets deleted', 'The sort order of the original DataFrame'],
        answerIndex: 1,
        explanation: 'index defines the rows of the pivot table — each distinct region becomes its own row, just like the row labels on the left side of an Excel pivot table.'
      },
      {
        id: 'q4',
        prompt: 'Why is fill_value=0 commonly added to a pivot_table call?',
        options: ['It rounds every value to 0 decimal places', 'Without it, any region/category combination with no matching data shows up as NaN, which looks like an error rather than genuinely zero', 'It deletes empty rows', 'It is required syntax with no functional effect'],
        answerIndex: 1,
        explanation: 'fill_value=0 replaces missing combinations with an honest zero instead of NaN, which both looks cleaner and avoids breaking further calculations.'
      },
      {
        id: 'q5',
        prompt: 'What is the conceptual relationship between a pandas pivot table and an Excel pivot table?',
        options: ['They are unrelated features that happen to share a name', "They do the same job — categories down the rows, another category across the columns, and a calculated value filling the grid — pandas' version is just written in code", 'Excel pivot tables are faster in every case', 'pandas pivot tables only work with text data'],
        answerIndex: 1,
        explanation: 'pivot_table() in pandas reproduces exactly what an Excel pivot table does visually, just expressed as a single line of code instead of drag-and-drop fields.'
      }
    ]
  },
  'py-i-5': {
    title: 'Check your understanding: NumPy',
    intro: 'Test your knowledge of NumPy arrays and vectorised operations.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the main practical difference between a Python list and a NumPy array?',
        options: ['There is no real difference', 'A NumPy array holds one consistent type of value and supports fast, whole-array maths operations; a Python list does not', 'NumPy arrays can only hold text', 'Python lists are always faster'],
        answerIndex: 1,
        explanation: 'NumPy arrays trade flexibility (mixed types) for speed and built-in maths operations across the entire array at once.'
      },
      {
        id: 'q2',
        prompt: 'What does prices * 1.18 do if prices is a NumPy array?',
        options: ['It raises an error, since you cannot multiply an array by a number', 'It multiplies every single element in the array by 1.18, all at once, with no loop needed', 'It only multiplies the first element', 'It replaces the array with the number 1.18'],
        answerIndex: 1,
        explanation: 'This is a vectorised operation — the multiplication applies to every element simultaneously, which is both shorter to write and much faster than a manual loop.'
      },
      {
        id: 'q3',
        prompt: 'What does prices[prices > 1000] return?',
        options: ['The number of values greater than 1000', 'A new array containing only the values from prices that are greater than 1000', 'An error', 'The position (index) of the first value over 1000'],
        answerIndex: 1,
        explanation: 'This is the same boolean-mask filtering idea from pandas — prices > 1000 produces True/False values, and the bracket keeps only the matching elements.'
      },
      {
        id: 'q4',
        prompt: 'What does array.std() calculate?',
        options: ['The sum of all values', 'The standard deviation — how spread out the values are around the average', 'The number of values in the array', 'The largest value'],
        answerIndex: 1,
        explanation: 'Standard deviation measures spread: a small value means the numbers cluster tightly around the mean, a large value means they are widely scattered.'
      },
      {
        id: 'q5',
        prompt: 'Why does NumPy matter much more on a dataset with 5 million rows than on a dataset with 5 rows?',
        options: ['It does not — performance is identical at any size', 'Vectorised NumPy operations run in fast, compiled code rather than line-by-line Python, so the speed advantage over a manual loop becomes dramatic at large scale', 'NumPy only works correctly on small datasets', 'Large datasets cannot be loaded into NumPy at all'],
        answerIndex: 1,
        explanation: 'On tiny data, a loop and a vectorised operation feel equally fast. At millions of rows, the vectorised version can be orders of magnitude faster, which is the entire reason NumPy (and pandas, built on it) exists.'
      }
    ]
  },
  'py-i-6': {
    title: 'Check your understanding: merge, join, and concat',
    intro: 'Test your knowledge of combining DataFrames.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does pd.merge(customers, orders, on="customer_id") do by default?',
        options: ['Stacks the two tables on top of each other', 'Combines the two tables sideways, matching rows by customer_id — behaving like an INNER JOIN by default', 'Deletes any row that does not match', 'Always keeps every row from both tables'],
        answerIndex: 1,
        explanation: 'merge() with no how= argument defaults to an inner join — only rows with a match in both tables appear in the result, exactly like SQL\'s default JOIN behaviour.'
      },
      {
        id: 'q2',
        prompt: 'What does how="left" do in a pandas merge?',
        options: ['Keeps every row from the first (left) table, filling in NaN where there is no match on the right — the same idea as SQL\'s LEFT JOIN', 'Only keeps matching rows', 'Reverses the column order', 'Deletes the left table entirely'],
        answerIndex: 0,
        explanation: 'how="left" preserves every row from the first table passed to merge(), regardless of whether a match exists in the second table.'
      },
      {
        id: 'q3',
        prompt: 'What is the difference between pd.merge() and pd.concat()?',
        options: ['They are identical functions with two names', 'merge() combines tables sideways by matching a key column; concat() stacks tables on top of each other, adding rows — the same idea as SQL\'s UNION', 'concat() can only be used on numeric data', 'merge() only works with exactly two tables'],
        answerIndex: 1,
        explanation: 'merge() is for joining related tables on a common key. concat() is for stacking similarly-shaped tables, like combining January and February sales into one table.'
      },
      {
        id: 'q4',
        prompt: 'If a column is named "customer_id" in one table and "cust_id" in another, how do you merge them?',
        options: ['You cannot merge tables with different column names', 'Use left_on="customer_id", right_on="cust_id" to tell pandas which column from each table to match', 'Rename one column to match using on= alone', 'merge() automatically detects mismatched names'],
        answerIndex: 1,
        explanation: 'left_on and right_on let you specify different column names per table when the key is not spelled identically in both.'
      },
      {
        id: 'q5',
        prompt: 'What does ignore_index=True do in pd.concat([df1, df2], ignore_index=True)?',
        options: ['It skips rows with missing data', 'It renumbers the combined result\'s row index cleanly from 0, instead of keeping each original table\'s row numbers (which could duplicate)', 'It removes duplicate columns', 'It sorts the result alphabetically'],
        answerIndex: 1,
        explanation: 'Without ignore_index, the combined DataFrame keeps each piece\'s original index, which often means duplicate index values. ignore_index=True gives the result a fresh, clean 0,1,2... index.'
      }
    ]
  },
  'py-i-7': {
    title: 'Check your understanding: matplotlib',
    intro: 'Test your knowledge of building charts with matplotlib.',
    questions: [
      {
        id: 'q1',
        prompt: 'What do fig and ax typically represent in fig, ax = plt.subplots()?',
        options: ['fig is the data, ax is the title', 'fig is the overall chart canvas, ax is the actual plotting area where you draw bars, lines, or points', 'Both refer to the same exact object', 'fig is required only for pie charts'],
        answerIndex: 1,
        explanation: 'fig represents the whole figure (canvas), while ax is the specific axes you actually plot onto — almost every matplotlib chart starts with this exact line.'
      },
      {
        id: 'q2',
        prompt: 'Which chart type is best for comparing a value across several distinct categories?',
        options: ['Pie chart', 'Bar chart', 'Scatter plot only', 'None of these work for comparisons'],
        answerIndex: 1,
        explanation: 'Bar charts are the clearest way to compare values across categories — the same guidance given in this platform\'s Excel charting lesson applies here too.'
      },
      {
        id: 'q3',
        prompt: 'Why is adding a title and axis labels considered essential, not optional?',
        options: ['Matplotlib charts fail to render without them', 'A chart with no title or labels forces the reader to guess what they are looking at, undermining trust in the chart', 'They are required by Python syntax', 'They automatically fix incorrect data'],
        answerIndex: 1,
        explanation: 'Two extra lines of code (set_title, set_xlabel/set_ylabel) are the difference between a chart someone can interpret confidently and one that raises more questions than it answers.'
      },
      {
        id: 'q4',
        prompt: 'What does df.plot(kind="bar", x="category", y="total") do?',
        options: ['It is invalid syntax', 'It is a pandas shortcut that builds a matplotlib bar chart directly from DataFrame columns, skipping most of the manual setup', 'It only works with pie charts', 'It deletes the category column'],
        answerIndex: 1,
        explanation: "pandas DataFrames have a built-in .plot() method that wraps matplotlib, useful for a quick chart while you're still exploring data."
      },
      {
        id: 'q5',
        prompt: 'When should a pie chart generally be avoided, according to the guidance repeated across this platform\'s courses?',
        options: ['Never — pie charts are always the best option', 'When there are more than about 5-6 categories, since the slices become hard to compare visually', 'When the data contains decimals', 'When using matplotlib specifically, but not Excel'],
        answerIndex: 1,
        explanation: 'Beyond a handful of slices, pie charts become difficult to read accurately — a bar chart usually communicates the same comparison more clearly, in any tool.'
      }
    ]
  },
  'py-i-8': {
    title: 'Check your understanding: APIs and JSON',
    intro: 'Test your knowledge of working with web APIs in Python.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is JSON, and why do most APIs use it?',
        options: ['A type of database', 'A text format for structuring data (key-value pairs, lists) that closely resembles a Python dictionary, making it easy to work with after fetching', 'A Python-only file format', 'A way to compress images'],
        answerIndex: 1,
        explanation: 'JSON\'s structure mirrors Python dictionaries and lists almost exactly, which is exactly why JSON data feels natural to work with immediately after parsing it.'
      },
      {
        id: 'q2',
        prompt: 'Why does fetching data from an API typically require the await keyword in this platform\'s playground?',
        options: ['await is just decorative and has no effect', 'A network request takes time to travel to a server and back, so await lets Python pause at that point without freezing everything else, resuming once the response arrives', 'await converts the response into a DataFrame', 'await is required for all Python loops'],
        answerIndex: 1,
        explanation: 'Network requests are inherently slower and less predictable than local code, which is why fetching data is asynchronous — await is how Python waits for that response correctly.'
      },
      {
        id: 'q3',
        prompt: 'After response = await pyodide.http.pyfetch(url), what does await response.json() do?',
        options: ['Saves the response to a file', 'Parses the response body as JSON and turns it into Python dictionaries/lists you can work with', 'Sends a second request', 'Deletes the response'],
        answerIndex: 1,
        explanation: '.json() converts the raw response text into native Python data structures (dicts and lists), ready to use immediately.'
      },
      {
        id: 'q4',
        prompt: 'Why can a JSON list of objects be loaded directly into a pandas DataFrame with pd.DataFrame(json_list)?',
        options: ['pandas cannot actually do this', 'A JSON list of objects has the same shape as the "list of dictionaries" pattern pandas already knows how to read', 'JSON must be converted to CSV first', 'Only NumPy arrays can be converted to DataFrames'],
        answerIndex: 1,
        explanation: 'Since each JSON object becomes a Python dictionary with the same keys, a list of them is exactly the list-of-dictionaries shape pandas expects when building a DataFrame.'
      },
      {
        id: 'q5',
        prompt: 'In a real Python script running on your own computer (not this browser playground), which library would you most commonly use instead of pyfetch?',
        options: ['matplotlib', 'requests', 'numpy', 'BeautifulSoup'],
        answerIndex: 1,
        explanation: 'requests is the standard library for making HTTP calls in regular Python scripts; pyfetch is specific to this browser-based playground environment.'
      }
    ]
  },
  'py-i-9': {
    title: 'Check your understanding: Web scraping with BeautifulSoup',
    intro: 'Test your knowledge of parsing HTML to extract data.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does BeautifulSoup(html, "html.parser") do?',
        options: ['Sends a network request to fetch a web page', 'Parses a string of HTML text into a navigable structure you can search through', 'Deletes all HTML tags from the text', 'Converts HTML directly into a DataFrame automatically'],
        answerIndex: 1,
        explanation: 'BeautifulSoup turns raw HTML text into an object you can search and navigate using methods like find() and find_all() — fetching the HTML is a separate step.'
      },
      {
        id: 'q2',
        prompt: 'What is the difference between soup.find() and soup.find_all()?',
        options: ['They are identical', 'find() returns only the first matching tag; find_all() returns every matching tag as a list', 'find_all() only works on numbers', 'find() searches the entire internet, find_all() only searches the given HTML'],
        answerIndex: 1,
        explanation: 'find() stops at the first match. find_all() collects every tag that matches, which is what you need to loop through multiple items like products or listings.'
      },
      {
        id: 'q3',
        prompt: 'Why does BeautifulSoup use class_ (with a trailing underscore) instead of class when searching by CSS class?',
        options: ['It is a typo that happens to work', 'class is already a reserved word in Python (used for defining classes), so BeautifulSoup uses class_ to avoid the conflict', 'class_ only works in older versions', 'There is no real reason, it is arbitrary'],
        answerIndex: 1,
        explanation: 'Since class has special meaning in Python syntax, BeautifulSoup\'s API adds a trailing underscore to its class-matching parameter to sidestep that conflict.'
      },
      {
        id: 'q4',
        prompt: 'What should you check before scraping a real website?',
        options: ['Nothing — scraping is always allowed', "The site's terms of service and robots.txt file, which state what automated tools are permitted to access", 'Only whether the site uses HTTPS', 'Whether the site has a mobile app'],
        answerIndex: 1,
        explanation: 'Scraping against a site\'s stated rules can lead to your IP being blocked and, in some cases, carries legal risk — always check robots.txt and terms of service first, and prefer a real API when one exists.'
      },
      {
        id: 'q5',
        prompt: 'After extracting names and prices into a list of dictionaries with BeautifulSoup, what is the natural next step to analyse them?',
        options: ['The data cannot be analysed further', 'Load the list of dictionaries into a pandas DataFrame, exactly like JSON data from an API', 'Convert everything back into raw HTML', 'Print each dictionary one at a time with no further processing'],
        answerIndex: 1,
        explanation: 'Once scraped data is a list of dictionaries, it is in exactly the shape pandas expects — pd.DataFrame(rows) turns it into a normal table ready for filtering, grouping, and charting.'
      }
    ]
  },
  'py-i-10': {
    title: 'Check your understanding: Jupyter notebooks',
    intro: 'Test your knowledge of the notebook workflow.',
    questions: [
      {
        id: 'q1',
        prompt: 'What are the two main types of cells in a Jupyter notebook?',
        options: ['Input cells and output cells', 'Code cells (which run Python) and markdown cells (which hold formatted text)', 'Public cells and private cells', 'Fast cells and slow cells'],
        answerIndex: 1,
        explanation: 'Code cells execute Python and show results directly below; markdown cells hold formatted explanatory text, letting analysis and narrative live side by side.'
      },
      {
        id: 'q2',
        prompt: 'Why do many data scientists prefer notebooks over running a full .py script while exploring data?',
        options: ['Notebooks run faster than scripts in every case', 'Notebooks let you run one cell at a time and see results immediately, making it easy to experiment and fix mistakes step by step', 'Scripts cannot use pandas', 'Notebooks are required by Python itself'],
        answerIndex: 1,
        explanation: 'The fast, cell-by-cell feedback loop is the core advantage of notebooks during exploration — you see whether each step worked before building the next one on top of it.'
      },
      {
        id: 'q3',
        prompt: 'When is a regular .py script generally a better choice than a notebook?',
        options: ['Scripts are never a better choice', 'Once the logic is finalized and needs to run reliably end-to-end without manual cell-clicking — for example, an automated nightly report', 'Scripts cannot import pandas', 'Notebooks are always superior for every use case'],
        answerIndex: 1,
        explanation: 'Scripts shine once you know exactly what needs to happen and want it to run unattended and reliably; notebooks shine during exploration.'
      },
      {
        id: 'q4',
        prompt: 'What command launches the classic Jupyter Notebook interface after installing it?',
        options: ['python notebook.py', 'jupyter notebook', 'run jupyter', 'pip notebook'],
        answerIndex: 1,
        explanation: 'After "pip install notebook", running "jupyter notebook" in a terminal opens the notebook interface in your browser.'
      },
      {
        id: 'q5',
        prompt: 'How does this platform\'s "Try it yourself" playground relate to a real Jupyter notebook?',
        options: ['They are completely unrelated tools', "It is deliberately modeled on the same workflow — write code, run it, see the result immediately — so the notebook experience should already feel familiar", 'Playgrounds can run any programming language a notebook can', 'Notebooks cannot display charts, unlike this platform\'s playground'],
        answerIndex: 1,
        explanation: 'The run-and-see-immediately pattern used throughout this course was intentionally designed to mirror the real notebook experience.'
      }
    ]
  },
  'py-i-11': {
    title: 'Check your understanding: Virtual environments',
    intro: 'Test your knowledge of managing Python environments and packages.',
    questions: [
      {
        id: 'q1',
        prompt: 'What problem does a virtual environment solve?',
        options: ['It makes Python code run faster', 'It prevents different projects on the same computer from conflicting over different required versions of the same package', 'It automatically writes your code for you', 'It replaces the need for pip entirely'],
        answerIndex: 1,
        explanation: 'Without isolation, installing a package version for one project can silently break a different project that needed an older version of the same package.'
      },
      {
        id: 'q2',
        prompt: 'What command creates a new virtual environment named "venv"?',
        options: ['pip create venv', 'python -m venv venv', 'jupyter venv', 'import venv'],
        answerIndex: 1,
        explanation: 'python -m venv venv creates a new, isolated environment folder named "venv" in your current directory.'
      },
      {
        id: 'q3',
        prompt: 'What is a requirements.txt file for?',
        options: ['It stores your source code', 'A plain text list of the packages (and often versions) a project needs, so anyone else can recreate the exact same setup with one command', 'It is a Jupyter-only configuration file', 'It replaces the need for a virtual environment'],
        answerIndex: 1,
        explanation: 'pip freeze > requirements.txt captures your exact installed packages; pip install -r requirements.txt lets someone else recreate that same setup reliably.'
      },
      {
        id: 'q4',
        prompt: 'What is the classic "it works on my machine" problem this module addresses?',
        options: ['A hardware issue unrelated to software', 'Code that runs fine for one person but breaks for a teammate because their installed package versions differ, often invisibly', 'A bug specific to Jupyter notebooks', 'An error that only happens on Windows'],
        answerIndex: 1,
        explanation: 'Differing package versions across machines is one of the most common causes of code that mysteriously works for one person and fails for another — explicit environments and requirements.txt fix this by making dependencies visible and shareable.'
      },
      {
        id: 'q5',
        prompt: 'Why is conda sometimes preferred over plain pip + venv in data science specifically?',
        options: ['conda is required by Python itself', 'conda can also manage certain non-Python dependencies (like C libraries some data science packages rely on) that pip alone sometimes struggles to install cleanly', 'conda is the only tool that supports pandas', 'pip cannot install numpy or pandas at all'],
        answerIndex: 1,
        explanation: 'conda solves the same isolation problem as venv, but can also handle some lower-level, non-Python dependencies that occasionally trip up a pip-only setup.'
      }
    ]
  },

  // Python Advanced
  'py-a-1': {
    title: 'Check your understanding: Classes and objects',
    intro: 'Test your knowledge of object-oriented Python basics.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does __init__ do in a class?',
        options: ['It deletes the object when no longer needed', 'It runs automatically every time a new object is created, setting up its initial attributes', 'It is called manually every time you want to use the object', 'It only runs once, no matter how many objects you create'],
        answerIndex: 1,
        explanation: '__init__ is the setup step that runs automatically for every new instance, filling in attributes like self.name based on what was passed in.'
      },
      {
        id: 'q2',
        prompt: 'What does self refer to inside a method?',
        options: ['The class itself, shared by every object', 'This particular object — the specific instance the method was called on', 'A reserved keyword with no real meaning', 'The first argument passed to the function, regardless of what it represents'],
        answerIndex: 1,
        explanation: 'self lets a method access and modify the data that belongs to the specific object it was called on, the same way a filled-in form\'s blanks differ per person.'
      },
      {
        id: 'q3',
        prompt: 'What is the difference between a class and an instance?',
        options: ['There is no real difference', 'A class is the blueprint, written once; an instance is one actual object built from that blueprint, with its own specific values', 'An instance is shared across the whole program; a class is private to one object', 'A class can only ever produce exactly one instance'],
        answerIndex: 1,
        explanation: 'One class definition can produce as many separate instances as needed, each with independent attribute values.'
      },
      {
        id: 'q4',
        prompt: 'After calling a method that changes self.total_spent, what happens to that value the next time you access it on the same object?',
        options: ['It resets back to its original value', 'The object remembers the change — its state persists between method calls', 'The change only applies inside that one method call', 'A new object is created automatically'],
        answerIndex: 1,
        explanation: 'Unlike a plain function, an object keeps its own state in memory between calls, which is exactly what makes objects useful for representing something that changes over time.'
      },
      {
        id: 'q5',
        prompt: 'What is the main advantage of bundling data and behaviour into one class, compared to a dictionary plus separate functions?',
        options: ['Classes always run faster', 'Every relevant behaviour travels with the object itself, so anyone using it does not need to know which separate function to call', 'Dictionaries cannot store numbers', 'Classes use less memory in every case'],
        answerIndex: 1,
        explanation: 'With a class, c.is_high_value() is always available directly on the object — no separate lookup for "which function handles this dictionary" required.'
      }
    ]
  },
  'py-a-2': {
    title: 'Check your understanding: Inheritance and composition',
    intro: 'Test your knowledge of building classes on top of other classes.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does class PremiumCustomer(Customer): mean?',
        options: ['PremiumCustomer and Customer are unrelated', 'PremiumCustomer inherits from Customer, automatically receiving everything Customer already has', 'Customer inherits from PremiumCustomer', 'This creates two separate, identical classes'],
        answerIndex: 1,
        explanation: 'Writing the parent class name in parentheses after the new class name sets up inheritance — the new class gets everything the parent already defined.'
      },
      {
        id: 'q2',
        prompt: 'What does super().__init__(...) do inside a subclass\'s __init__?',
        options: ['It deletes the parent class', 'It calls the parent class\'s own setup code, so you do not have to retype the attributes it already handles', 'It is optional and has no real effect', 'It creates a brand new, unrelated object'],
        answerIndex: 1,
        explanation: 'super().__init__(...) reuses the parent\'s setup logic, so the subclass only needs to write the code for what it adds on top.'
      },
      {
        id: 'q3',
        prompt: 'What does it mean for a subclass to "override" a method?',
        options: ['The subclass deletes the method entirely from the parent', 'The subclass defines its own version of a method with the same name, replacing the inherited behaviour when called on that subclass', 'Overriding is not possible in Python', 'The parent class\'s method runs first, then the subclass\'s version runs afterward automatically'],
        answerIndex: 1,
        explanation: 'When a subclass defines a method with the same name as one in its parent, calling that method on a subclass instance uses the subclass\'s version instead.'
      },
      {
        id: 'q4',
        prompt: 'What is the difference between an "is a" relationship and a "has a" relationship?',
        options: ['They mean the same thing', '"Is a" (inheritance) means a subclass is a more specific version of the parent; "has a" (composition) means a class contains other objects as attributes, without being a kind of them', 'Composition is just another name for inheritance', '"Has a" relationships are not possible in Python'],
        answerIndex: 1,
        explanation: 'A PremiumCustomer is a kind of Customer ("is a", inheritance). A Restaurant has a list of MenuItem objects, without itself being a kind of menu item ("has a", composition).'
      },
      {
        id: 'q5',
        prompt: 'What is the general rule of thumb for choosing between inheritance and composition?',
        options: ['Always use inheritance, since it is more powerful', 'Prefer composition unless inheritance clearly models a genuine "is a" relationship — overusing inheritance for convenience is a common source of confusing code', 'Always use composition, inheritance should never be used', 'The choice has no real consequences either way'],
        answerIndex: 1,
        explanation: '"Favour composition over inheritance" is well-known advice precisely because inheritance used where it does not genuinely fit tends to produce code that is hard to understand and change later.'
      }
    ]
  },
  'py-a-3': {
    title: 'Check your understanding: Dunder methods',
    intro: 'Test your knowledge of customizing how your classes behave with built-in operations.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does printing an object show by default, without a custom __repr__?',
        options: ['A readable summary of its attributes', 'Just its memory address, like <__main__.Customer object at 0x...> — not useful for debugging', 'An error', 'Nothing at all is printed'],
        answerIndex: 1,
        explanation: 'Without a custom __repr__, Python falls back to a generic, unhelpful representation showing only the object\'s memory address.'
      },
      {
        id: 'q2',
        prompt: 'Why might two separately-created objects with identical attribute values compare as not equal using ==, without a custom __eq__?',
        options: ['This never actually happens', 'By default, Python compares objects by identity (are they the literal same object in memory), not by their actual data', 'Python cannot compare custom objects at all', '== always returns True for any two objects of the same class'],
        answerIndex: 1,
        explanation: 'Without __eq__, == checks whether two variables point to the exact same object in memory, which rarely matches what "equal" actually means for data-holding objects.'
      },
      {
        id: 'q3',
        prompt: 'What does defining __len__ on a class let you do?',
        options: ['Nothing changes — __len__ has no effect', 'Call Python\'s built-in len() function directly on instances of that class', 'Automatically print the object', 'Compare two objects for equality'],
        answerIndex: 1,
        explanation: 'Defining __len__ lets len(my_object) work directly, the same way it works on lists and strings.'
      },
      {
        id: 'q4',
        prompt: 'What does the @dataclass decorator automatically generate for a class?',
        options: ['Nothing — it is purely cosmetic', '__init__, __repr__, and __eq__, based on the attributes you list, removing repetitive boilerplate for data-holding classes', 'A complete test suite for the class', 'A pip-installable package'],
        answerIndex: 1,
        explanation: '@dataclass writes the common boilerplate methods automatically, based only on the type-hinted attribute list, while you still write any custom methods normally.'
      },
      {
        id: 'q5',
        prompt: 'Why does !r appear inside an f-string like f"name={self.name!r}" in a __repr__ method?',
        options: ['It is a typo with no effect', 'It shows the value the way Python itself would display it (with quotes around strings), a conventional touch that makes debugging output clearer', 'It rounds numeric values', 'It reverses the string'],
        answerIndex: 1,
        explanation: '!r calls repr() on the value before inserting it, so a string shows with its quotes — making the overall __repr__ output look like valid, readable Python.'
      }
    ]
  },
  'py-a-4': {
    title: 'Check your understanding: Decorators',
    intro: 'Test your knowledge of wrapping functions with decorators.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does @time_it above a function definition actually do?',
        options: ['It is just a comment with no effect', 'It is equivalent to writing my_function = time_it(my_function) — the decorator wraps the original function and replaces it with the wrapped version', 'It deletes the function after one use', 'It only works on functions with zero arguments'],
        answerIndex: 1,
        explanation: 'The @decorator syntax is shorthand for passing the function into the decorator and reassigning the name to whatever the decorator returns.'
      },
      {
        id: 'q2',
        prompt: 'Why does a decorator\'s wrapper function typically accept *args, **kwargs?',
        options: ['These are required keywords with no real purpose', 'So the wrapper can accept any combination of positional and keyword arguments and pass them through to the original function, regardless of its specific signature', 'They limit the wrapped function to exactly two arguments', '*args and **kwargs only work with decorators, nowhere else'],
        answerIndex: 1,
        explanation: 'A decorator usually does not know in advance what arguments the wrapped function needs, so *args/**kwargs let it forward anything through untouched.'
      },
      {
        id: 'q3',
        prompt: 'What is "memoization"?',
        options: ['A way to permanently delete old function results', 'Remembering results you have already calculated, so the same expensive work is never repeated for the same input', 'A type of error handling', 'A way to make a function run before the program starts'],
        answerIndex: 1,
        explanation: 'Memoization caches a function\'s results keyed by its input, so a second call with the same input returns instantly instead of recomputing.'
      },
      {
        id: 'q4',
        prompt: 'What does functools.lru_cache do?',
        options: ['It deletes a function\'s cache after every call', 'It automatically memoizes a function, remembering past results without you writing your own caching dictionary', 'It only works on classes, not functions', 'It permanently disables a function'],
        answerIndex: 1,
        explanation: '@lru_cache provides ready-made memoization, doing automatically what the chapter\'s hand-written cache() decorator did manually.'
      },
      {
        id: 'q5',
        prompt: 'What kind of real-world logic is commonly implemented as a decorator?',
        options: ['Logic that only ever needs to run in exactly one specific function, never reused', 'Cross-cutting concerns that apply to many different functions at once, like logging, timing, retrying, or access control', 'Only mathematical calculations', 'Decorators cannot be used for anything practical'],
        answerIndex: 1,
        explanation: 'Decorators are the standard tool for applying the same behaviour (logging, timing, @login_required, @retry) across many functions without copy-pasting the logic into each one.'
      }
    ]
  },
  'py-a-5': {
    title: 'Check your understanding: Generators and iterators',
    intro: 'Test your knowledge of memory-efficient data processing with yield.',
    questions: [
      {
        id: 'q1',
        prompt: 'What turns a normal function into a generator function?',
        options: ['Adding a return statement', 'Using yield anywhere inside the function body', 'Naming the function starting with gen_', 'Adding type hints'],
        answerIndex: 1,
        explanation: 'The presence of yield anywhere in a function automatically makes it a generator function — calling it returns a generator object rather than running the code immediately.'
      },
      {
        id: 'q2',
        prompt: 'Why does a generator typically use far less memory than building a full list, for the same data?',
        options: ['Generators store data more efficiently in the same way lists do', 'A generator produces one value at a time, on demand, never holding the entire collection in memory simultaneously', 'Generators can only hold numbers, which take less space', 'There is no real memory difference'],
        answerIndex: 1,
        explanation: 'A generator only needs to remember "where it is up to" — not the full set of results — which is why its memory footprint barely grows even for huge ranges.'
      },
      {
        id: 'q3',
        prompt: 'What is the difference between [i*i for i in range(10)] and (i*i for i in range(10))?',
        options: ['They are identical in every way', 'The square brackets build a full list immediately; the round brackets create a generator expression that produces values one at a time, on demand', 'The round-bracket version is invalid syntax', 'The square-bracket version cannot be used in a for loop'],
        answerIndex: 1,
        explanation: 'Swapping brackets changes a list comprehension (built immediately, fully in memory) into a generator expression (built lazily, one value at a time).'
      },
      {
        id: 'q4',
        prompt: 'In what kind of real scenario does a generator provide a genuinely necessary advantage, not just a nice-to-have?',
        options: ['Processing a tiny list of 3 items', 'Processing a file or dataset larger than what could fit in available memory all at once', 'Sorting a small list', 'Printing a single value'],
        answerIndex: 1,
        explanation: 'Generators become essential, not just convenient, once a full in-memory collection genuinely will not fit — a common situation with very large real-world datasets.'
      },
      {
        id: 'q5',
        prompt: 'What does list(my_generator) do?',
        options: ['It causes an error, since generators cannot be converted', 'It pulls every value out of the generator one at a time and collects them into an actual list', 'It deletes the generator', 'It only returns the first value'],
        answerIndex: 1,
        explanation: 'Wrapping a generator in list() forces it to produce every remaining value and collects them, which is useful when you do eventually need the full collection.'
      }
    ]
  },
  'py-a-6': {
    title: 'Check your understanding: Context managers',
    intro: 'Test your knowledge of the with statement and building your own context managers.',
    questions: [
      {
        id: 'q1',
        prompt: 'What guarantee does with open("file.txt") as f: give you, that a plain f = open("file.txt") does not?',
        options: ['It opens the file faster', 'It guarantees the file gets closed automatically when the block ends, even if an error happens partway through', 'It prevents the file from ever being edited', 'There is no real difference between the two'],
        answerIndex: 1,
        explanation: 'A context manager\'s cleanup step runs no matter how the block ends — including via an exception — which a plain open() call without "with" does not guarantee.'
      },
      {
        id: 'q2',
        prompt: 'In a class-based context manager, when do __enter__ and __exit__ run?',
        options: ['__enter__ runs at the end, __exit__ runs at the start', '__enter__ runs at the start of the with block (setup); __exit__ runs at the end (cleanup), even if an exception occurred', 'Both run only once per program, regardless of how many with blocks use them', 'Neither runs automatically — you must call them manually'],
        answerIndex: 1,
        explanation: '__enter__ handles setup when the with block begins; __exit__ handles guaranteed cleanup when it ends, by design, including on errors.'
      },
      {
        id: 'q3',
        prompt: 'In a @contextmanager-decorated generator function, what does the code before yield correspond to?',
        options: ['Nothing — it never runs', 'The setup step, equivalent to __enter__', 'The cleanup step, equivalent to __exit__', 'It runs only if an error occurs'],
        answerIndex: 1,
        explanation: 'Code before yield runs when the with block starts; code after yield runs when it ends — mirroring __enter__ and __exit__ in a much shorter form.'
      },
      {
        id: 'q4',
        prompt: 'Why does the code after yield in a @contextmanager function still run even if the code inside the with block raises an error?',
        options: ['It does not — this is a common misconception', 'Because the contextmanager machinery (typically combined with try/finally) ensures the cleanup step still executes, the same guarantee __exit__ provides', 'Only because of a special exception type', 'It only works for file-related context managers'],
        answerIndex: 1,
        explanation: 'This guaranteed-cleanup behaviour is the entire point of a context manager — wrapping the yield in try/finally is exactly how that guarantee gets implemented.'
      },
      {
        id: 'q5',
        prompt: 'Besides files, which of these is a realistic use case for a custom context manager?',
        options: ['Printing a single string once', 'Acquiring a lock in concurrent code, guaranteeing it gets released even if the code inside fails', 'Declaring a variable', 'Adding two numbers together'],
        answerIndex: 1,
        explanation: 'Locks, database connections, and temporary setting changes are classic real-world context manager use cases — anything needing a guaranteed "undo" step.'
      }
    ]
  },
  'py-a-7': {
    title: 'Check your understanding: Async programming',
    intro: 'Test your knowledge of async/await and concurrent execution.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does the await keyword actually do inside an async function?',
        options: ['It permanently stops the program', 'It pauses at that point and lets other code run while waiting, instead of blocking everything until the awaited operation finishes', 'It has no real effect and is purely decorative', 'It only works inside a for loop'],
        answerIndex: 1,
        explanation: 'await is where a coroutine can pause without blocking the whole program, allowing other pending work to make progress during the wait.'
      },
      {
        id: 'q2',
        prompt: 'If you fetch 3 things one after another (each taking 1 second), roughly how long does asyncio.gather() take to fetch all 3 concurrently instead?',
        options: ['Still 3 seconds, async makes no difference', 'Roughly 1 second — close to the time of the single slowest one, since they overlap instead of queuing', 'Roughly 9 seconds', 'It depends only on which one finishes last, doubled'],
        answerIndex: 1,
        explanation: 'Running tasks concurrently means their waiting time overlaps — the total time is close to the longest single task, not the sum of all of them.'
      },
      {
        id: 'q3',
        prompt: 'For what kind of work does async programming actually provide a speed benefit?',
        options: ['Heavy CPU-bound number-crunching with no waiting involved', 'I/O-bound work — waiting on a network response, a file, or a database — where the waiting itself does not need the CPU', 'Any code at all, with zero exceptions', 'Only code that prints text to the screen'],
        answerIndex: 1,
        explanation: 'Async helps fill idle waiting time with other useful work. Pure CPU-bound work has no idle waiting time to fill, so async provides no benefit there.'
      },
      {
        id: 'q4',
        prompt: 'What is the difference between async def fetch(): ... and a normal def fetch(): ...?',
        options: ['No real difference, async def is just a style preference', 'async def marks the function as a coroutine that can be paused with await and run concurrently with other coroutines', 'async def functions cannot return any value', 'async def is only valid inside a class'],
        answerIndex: 1,
        explanation: 'async def creates a coroutine function — calling it does not run the code immediately, it produces a coroutine object that needs to be awaited or scheduled to actually run.'
      },
      {
        id: 'q5',
        prompt: 'In a real-world dashboard pulling data from 3 different APIs, why would asyncio.gather generally be preferred over fetching them one at a time?',
        options: ['It uses less code only, with no performance difference', 'The page loads roughly as fast as the single slowest API call, instead of as slow as the sum of all three calls combined', 'It is required by every API provider', 'It avoids needing any error handling at all'],
        answerIndex: 1,
        explanation: 'Concurrent fetching turns "wait for A, then B, then C" into "wait for whichever is slowest," a real, user-visible performance improvement.'
      }
    ]
  },
  'py-a-8': {
    title: 'Check your understanding: Performance and profiling',
    intro: 'Test your knowledge of timeit, cProfile, and measuring before optimising.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is timeit best suited for?',
        options: ['Finding which specific function inside a large program is slow', 'Comparing the speed of two small code snippets directly against each other, run many times to smooth out noise', 'Writing automated tests', 'Adding type hints to a function'],
        answerIndex: 1,
        explanation: 'timeit repeats a snippet many times (via the number= argument) to get a reliable timing comparison, ideal for "which of these two approaches is faster?" questions.'
      },
      {
        id: 'q2',
        prompt: 'What does cProfile tell you that timeit does not?',
        options: ['Nothing — they do the exact same job', 'Inside an entire function (or program), which specific function calls are actually consuming the most time, not just an overall before/after comparison', 'Whether your code has any syntax errors', 'How to fix the slow code automatically'],
        answerIndex: 1,
        explanation: 'cProfile breaks down time spent across every function call within a larger piece of code, helping pinpoint the actual bottleneck rather than just timing the whole thing.'
      },
      {
        id: 'q3',
        prompt: 'What is "premature optimisation"?',
        options: ['Fixing a bug before writing any tests', 'Spending effort making something faster before confirming, with real measurement, that it actually needs to be', 'Writing code too quickly without thinking', 'Optimising code that is already proven to be the bottleneck'],
        answerIndex: 1,
        explanation: 'Premature optimisation wastes effort (and adds risk) on code that was never actually slow, instead of focusing on what profiling shows is the real bottleneck.'
      },
      {
        id: 'q4',
        prompt: 'What is the correct order of the profiling workflow this module recommends?',
        options: ['Optimise everything you can think of, then check if it still works', 'Get the code correct first, profile it on realistic data, fix only what the profiler points to, then re-profile to confirm the fix helped', 'Profile the code before writing it', 'Skip profiling and rely on intuition about what feels slow'],
        answerIndex: 1,
        explanation: 'Correctness first, then evidence-based measurement, then a targeted fix, then re-measurement to confirm — guessing at any step risks wasted effort.'
      },
      {
        id: 'q5',
        prompt: 'Why is it important to profile on realistic data rather than a tiny toy example?',
        options: ['It is not important, any data size works the same', 'A tiny example can easily hide the real bottleneck, which often only becomes visible at realistic scale', 'Profiling tools only function correctly above a certain data size', 'Smaller data always profiles faster with no other consequence'],
        answerIndex: 1,
        explanation: 'A bottleneck that takes 0.0001 seconds on 5 rows might dominate the runtime entirely at 5 million rows — realistic data size is what reveals that.'
      }
    ]
  },
  'py-a-9': {
    title: 'Check your understanding: Type hints',
    intro: 'Test your knowledge of writing self-documenting, type-hinted Python.',
    questions: [
      {
        id: 'q1',
        prompt: 'In def calculate_discount(price: float, rate: float) -> float:, what does -> float indicate?',
        options: ['The function requires exactly one float argument', 'The function is expected to return a float value', 'The function will automatically convert its inputs to floats', 'This is invalid Python syntax'],
        answerIndex: 1,
        explanation: 'The arrow syntax after the parentheses specifies the expected return type of the function.'
      },
      {
        id: 'q2',
        prompt: 'Does Python enforce type hints at runtime by stopping a function from running with the "wrong" type?',
        options: ['Yes, Python always raises an error if a type hint is violated', 'No — type hints are documentation with structure; Python still runs the code regardless, and mismatches are caught by a separate tool', 'Only for built-in types like int and str', 'Only inside classes, never inside plain functions'],
        answerIndex: 1,
        explanation: 'Type hints by themselves do not change runtime behaviour — Python happily runs calculate_discount("a", "b") and fails elsewhere, not because of the hints.'
      },
      {
        id: 'q3',
        prompt: 'What does List[Dict[str, float]] describe?',
        options: ['A single dictionary with one key', 'A list of dictionaries, where each dictionary has text keys and float values', 'A list of strings only', 'An invalid type hint'],
        answerIndex: 1,
        explanation: 'Nested generic type hints describe the precise shape of more complex data, like a list of order-style dictionaries.'
      },
      {
        id: 'q4',
        prompt: 'What does Optional[Dict] mean?',
        options: ['A dictionary that can never be empty', 'Either a Dict, or possibly None — flagging that callers need to handle a "nothing found" case', 'A dictionary with optional keys', 'The same thing as just Dict, with no real difference'],
        answerIndex: 1,
        explanation: 'Optional[X] is shorthand for "X or None," commonly used for functions that might not find a result, like a lookup that can fail.'
      },
      {
        id: 'q5',
        prompt: 'What tool actually checks whether your code\'s type hints are being honoured, without running the program?',
        options: ['pytest', 'mypy, a static type checker run from the command line', 'cProfile', 'The Python interpreter itself, automatically'],
        answerIndex: 1,
        explanation: 'mypy reads your type hints and reports mismatches as a separate static-analysis step, distinct from actually executing the code.'
      }
    ]
  },
  'py-a-10': {
    title: 'Check your understanding: Testing with pytest',
    intro: 'Test your knowledge of writing automated tests.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does a bare assert statement do if its condition is False?',
        options: ['It prints a warning but keeps running', 'It immediately crashes the program with an AssertionError', 'It silently does nothing', 'It automatically retries the operation'],
        answerIndex: 1,
        explanation: 'assert is the foundation every testing tool builds on — a False condition stops execution immediately with an AssertionError.'
      },
      {
        id: 'q2',
        prompt: 'How does pytest decide which functions in a file to run as tests?',
        options: ['It runs every function in the file, regardless of name', 'It looks for functions whose names start with test_', 'It only runs functions explicitly listed in a separate config file', 'It requires every test to be a class method'],
        answerIndex: 1,
        explanation: 'pytest automatically discovers and runs any function named starting with test_, without needing to register them manually.'
      },
      {
        id: 'q3',
        prompt: 'Why might you write several small, specifically-named test functions instead of one large combined test?',
        options: ['Smaller tests always run faster', 'If only one specific case breaks, separate named tests immediately tell you exactly which behaviour failed, rather than just "something failed"', 'pytest does not support multiple test functions per file', 'Combined tests are not valid pytest syntax'],
        answerIndex: 1,
        explanation: 'Specific, named tests like test_calculate_total_zero_quantity pinpoint exactly which behaviour broke, which a single all-in-one test cannot.'
      },
      {
        id: 'q4',
        prompt: 'What does pytest.raises(ValueError) let you test?',
        options: ['That a function never raises any error', 'That a specific block of code correctly raises a ValueError, confirming that error-raising behaviour is itself working as intended', 'That a function returns a float', 'That a test file has no syntax errors'],
        answerIndex: 1,
        explanation: 'Sometimes correct behaviour IS raising an error (like rejecting invalid input) — pytest.raises checks that this actually happens as expected.'
      },
      {
        id: 'q5',
        prompt: 'What is the real long-term payoff of having a solid test suite for a function?',
        options: ['Tests only matter the first time you write the function', 'You can refactor or rewrite the function later and know within seconds whether you broke anything, instead of manually re-checking every case by hand', 'Tests eliminate the need to ever read the function\'s code again', 'Tests make the original code run faster'],
        answerIndex: 1,
        explanation: 'The biggest value of tests shows up months later, when changing the code — a good test suite catches regressions instantly instead of relying on manual re-verification.'
      }
    ]
  },
  'py-a-11': {
    title: 'Check your understanding: Packaging your code',
    intro: 'Test your knowledge of structuring and distributing a real Python package.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does an __init__.py file inside a folder signal to Python?',
        options: ['That the folder should be deleted', 'That the folder should be treated as an importable package', 'That the folder contains only test files', 'Nothing — __init__.py has no special meaning'],
        answerIndex: 1,
        explanation: '__init__.py (even when empty) is what makes a plain folder behave as a proper, importable Python package.'
      },
      {
        id: 'q2',
        prompt: 'What is pyproject.toml used for?',
        options: ['It stores your actual Python source code', 'It describes the package to the outside world — its name, version, dependencies, and how to build it', 'It is a file used only for writing tests', 'It replaces the need for an __init__.py file'],
        answerIndex: 1,
        explanation: 'pyproject.toml is the modern standard configuration file describing a package\'s metadata and build requirements, separate from the actual source code.'
      },
      {
        id: 'q3',
        prompt: 'What does pip install -e . do, run from inside a package\'s root folder?',
        options: ['It permanently deletes the package', 'It installs the package in "editable" mode, so changes to the source files take effect immediately without reinstalling', 'It uploads the package to PyPI', 'It only works on packages already published online'],
        answerIndex: 1,
        explanation: 'Editable installs are the standard approach during active development, letting you keep editing source files without repeating the install step.'
      },
      {
        id: 'q4',
        prompt: 'What is PyPI?',
        options: ['A Python testing framework', 'The Python Package Index — the public repository that pip install pandas (and similar commands) actually downloads from', 'A type checker', 'A built-in Python module for profiling'],
        answerIndex: 1,
        explanation: 'PyPI is the central public index where published Python packages live, which is exactly what makes "pip install anything" work for the whole community.'
      },
      {
        id: 'q5',
        prompt: 'What is the practical difference between "a script that works" and "a properly packaged tool"?',
        options: ['There is no real difference, they behave identically', 'A packaged tool (with tests, structure, and clear dependencies) can be installed and trusted across many projects and by other people, not just used once in the folder it was written in', 'Packaged code always runs faster than a script', 'Scripts cannot contain functions or classes'],
        answerIndex: 1,
        explanation: 'Packaging, combined with tests and type hints from earlier modules, is what turns one-off code into something genuinely reusable and trustworthy elsewhere.'
      }
    ]
  },

  // Excel
  'ex-b-1': {
    title: 'Check your understanding: Excel Basics',
    intro: 'Test your knowledge of cells, rows, and formulas.',
    questions: [
      {
        id: 'q1',
        prompt: 'How are cells identified in an Excel spreadsheet?',
        options: ['By row number and column number (e.g., 5-10)', 'By a unique random ID', 'By column letter and row number (e.g., B7)', 'By their color'],
        answerIndex: 2,
        explanation: 'Excel uses column letters (A, B, C...) and row numbers (1, 2, 3...) to create an address like B7.'
      },
      {
        id: 'q2',
        prompt: 'What must be the very first character you type if you want Excel to calculate a formula?',
        options: ['+', '@', '=', '#'],
        answerIndex: 2,
        explanation: 'The equals sign (=) tells Excel "do not treat this as text, calculate the formula that follows."'
      },
      {
        id: 'q3',
        prompt: 'You accidentally deleted a massive block of data. What is the fastest way to get it back?',
        options: ['Press Ctrl+Z (Undo)', 'Close the file without saving', 'Press F5 (Refresh)', 'Retype it from memory'],
        answerIndex: 0,
        explanation: 'Ctrl+Z (or Cmd+Z on Mac) is the universal Undo shortcut and can save you from disastrous mistakes.'
      },
      {
        id: 'q4',
        prompt: 'What does the formula =SUM(A1:A10) do?',
        options: ['Adds the value in A1 to the value in A10', 'Multiplies all values between A1 and A10', 'Adds all the values in cells A1 through A10 together', 'Counts how many cells exist between A1 and A10'],
        answerIndex: 2,
        explanation: 'The colon (:) denotes a range. SUM(A1:A10) adds up everything in that continuous block of cells.'
      },
      {
        id: 'q5',
        prompt: 'Which keyboard shortcut lets you quickly jump to the edge of a block of data?',
        options: ['Ctrl + Arrow keys', 'Shift + Tab', 'Alt + Enter', 'Ctrl + E'],
        answerIndex: 0,
        explanation: 'Holding Ctrl (or Cmd) and pressing an arrow key skips empty cells and jumps straight to the end of a contiguous row or column of data.'
      }
    ]
  },

  'ex-b-2': {
    title: 'Check your understanding: References and functions',
    intro: 'Test your knowledge of relative vs absolute references and everyday Excel functions.',
    questions: [
      {
        id: 'q1',
        prompt: 'You write =A2*0.18 in cell B2, then copy it down to B3. What does B3 now contain?',
        options: ['=A2*0.18, exactly the same as B2', '=A3*0.18, because the reference shifted down with the formula', 'An error, because you cannot copy formulas', '=B2*0.18'],
        answerIndex: 1,
        explanation: 'By default, Excel uses relative references — when you copy a formula to a new row, it shifts the cell references to match, so A2 becomes A3.'
      },
      {
        id: 'q2',
        prompt: 'What does the dollar sign in $B$1 do inside a formula?',
        options: ['It formats the cell as currency', 'It locks both the column and row, so the reference does not shift when copied elsewhere', 'It deletes the value in B1', 'It tells Excel to round the number'],
        answerIndex: 1,
        explanation: 'A dollar sign before the column letter and row number creates an absolute reference, freezing that exact cell so copies of the formula keep pointing to it.'
      },
      {
        id: 'q3',
        prompt: 'What keyboard shortcut quickly toggles a cell reference between relative and absolute while editing a formula?',
        options: ['Ctrl+Z', 'F2', 'F4', 'Ctrl+D'],
        answerIndex: 2,
        explanation: 'Pressing F4 while your cursor is on a cell reference cycles through A1, $A$1, A$1, and $A1, saving you from typing dollar signs manually.'
      },
      {
        id: 'q4',
        prompt: 'What does the #REF! error usually mean?',
        options: ['You divided a number by zero', 'Your formula refers to a cell that no longer exists, often because a row or column was deleted', 'You misspelled a function name', 'The column is too narrow to display the result'],
        answerIndex: 1,
        explanation: '#REF! appears when a formula\'s reference becomes invalid, most commonly after deleting a row, column, or cell that the formula depended on.'
      },
      {
        id: 'q5',
        prompt: 'A column has 40 rows but only 35 contain a number (5 are blank). What does =COUNT(A1:A40) return?',
        options: ['40', '35', '5', 'An error'],
        answerIndex: 1,
        explanation: 'COUNT() only counts cells containing numbers, ignoring blank cells — so it returns 35, not the total row count.'
      }
    ]
  },
  'ex-b-3': {
    title: 'Check your understanding: Formatting numbers, dates, and cells',
    intro: 'Test your knowledge of formatting, dates, and conditional formatting.',
    questions: [
      {
        id: 'q1',
        prompt: 'When you format a cell as currency, what actually changes about the value stored in it?',
        options: ['The underlying number changes to match the new display', 'Nothing — only how the value is displayed changes, the stored number stays the same', 'The cell becomes locked and cannot be edited', 'The value is converted to text'],
        answerIndex: 1,
        explanation: 'Formatting only changes how a value is displayed (₹75,000.00 instead of 75000) — the actual number stored in the cell never changes.'
      },
      {
        id: 'q2',
        prompt: 'Why can you do maths like =A1+30 on a date in cell A1?',
        options: ['Excel secretly converts the date to text first', 'Excel stores every date internally as a number (days since 1 January 1900), so adding 30 just adds 30 days', 'This only works if A1 contains a number, not a real date', 'It does not actually work in Excel'],
        answerIndex: 1,
        explanation: 'Dates are stored as serial numbers behind the scenes, which is exactly why date arithmetic like adding days or subtracting two dates works correctly.'
      },
      {
        id: 'q3',
        prompt: 'What is the purpose of Conditional Formatting?',
        options: ['It automatically corrects typos in your data', 'It automatically applies formatting (like a colour) to cells that match a rule you set, such as "greater than 50000"', 'It deletes cells that fail a condition', 'It sorts your data automatically'],
        answerIndex: 1,
        explanation: 'Conditional Formatting watches your data and automatically highlights cells matching a rule, so patterns are visible at a glance without manual scanning.'
      },
      {
        id: 'q4',
        prompt: 'What does Freeze Panes do?',
        options: ['It prevents anyone from editing the spreadsheet', 'It keeps a chosen row or column (like your header row) visible on screen while you scroll through the rest of the data', 'It saves the file automatically every few minutes', 'It converts formulas into fixed values'],
        answerIndex: 1,
        explanation: 'Freeze Panes locks specific rows or columns in place so you do not lose track of your headers while scrolling through a large table.'
      },
      {
        id: 'q5',
        prompt: 'A cell shows ##### instead of a number. What does this mean?',
        options: ['The formula has an error', 'The column is too narrow to display the number — widening it will fix the display', 'The value is negative', 'The cell is protected from editing'],
        answerIndex: 1,
        explanation: '##### is not an error — it simply means the column is not wide enough to show the full number. Widening the column resolves it instantly.'
      }
    ]
  },
  'ex-b-4': {
    title: 'Check your understanding: IF and basic logic',
    intro: 'Test your knowledge of IF, nested IF, AND/OR, and COUNTIF/SUMIF.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does =IF(B2>=40, "Pass", "Fail") return if B2 contains 35?',
        options: ['"Pass"', '"Fail"', 'An error', 'Blank'],
        answerIndex: 1,
        explanation: '35 is not greater than or equal to 40, so the condition is False, and IF returns the "value_if_false" argument, which is "Fail".'
      },
      {
        id: 'q2',
        prompt: 'In a nested IF formula like =IF(B2>=90,"A",IF(B2>=75,"B","C")), what happens if B2 is 95?',
        options: ['It returns "C", because Excel always checks the last condition first', 'It returns "A", because 95 satisfies the very first condition and Excel stops checking further', 'It returns both "A" and "B"', 'It throws an error'],
        answerIndex: 1,
        explanation: 'Excel evaluates conditions left to right and stops at the first one that is True. Since 95 >= 90 is True, it immediately returns "A".'
      },
      {
        id: 'q3',
        prompt: 'What is the difference between AND() and OR() inside an IF formula?',
        options: ['There is no difference, they are interchangeable', 'AND() requires every condition to be true; OR() only requires at least one condition to be true', 'OR() is stricter than AND()', 'AND() is only used for text, OR() only for numbers'],
        answerIndex: 1,
        explanation: 'AND() returns True only if all conditions are true. OR() returns True if even one of the conditions is true, making it more lenient.'
      },
      {
        id: 'q4',
        prompt: 'What does =SUMIF(D2:D50, "Mumbai", B2:B50) calculate?',
        options: ['The total count of cells that contain "Mumbai"', 'The sum of every value in B2:B50, regardless of city', 'The sum of values in B2:B50, but only for the rows where D2:D50 equals "Mumbai"', 'The average sales for Mumbai'],
        answerIndex: 2,
        explanation: 'SUMIF adds values from one range (B2:B50) only for the rows where a matching condition is met in another range (D2:D50 equals "Mumbai").'
      },
      {
        id: 'q5',
        prompt: 'What does =COUNTIF(D2:D50, "Mumbai") return?',
        options: ['The total sales for Mumbai', 'The number of rows in D2:D50 where the value equals "Mumbai"', 'The average of D2:D50', 'An error, because COUNTIF cannot be used with text'],
        answerIndex: 1,
        explanation: 'COUNTIF counts how many cells in a range meet a given condition — here, how many cells in D2:D50 say "Mumbai".'
      }
    ]
  },
  'ex-b-5': {
    title: 'Check your understanding: Sorting, filtering, and charts',
    intro: 'Test your knowledge of sorting, filtering, and choosing the right chart.',
    questions: [
      {
        id: 'q1',
        prompt: 'Why should you select (or let Excel auto-detect) the entire table before sorting, rather than sorting just one column?',
        options: ['Sorting only one column is actually faster and safer', 'Sorting a single column in isolation scrambles the data, because rows no longer stay matched together (a name could end up next to the wrong sales figure)', 'Excel does not allow sorting a single column at all', 'It has no effect either way'],
        answerIndex: 1,
        explanation: 'If you sort only one column, its values get rearranged independently of the rest of the table, breaking the connection between a row\'s name, city, and sales figure.'
      },
      {
        id: 'q2',
        prompt: 'What is the key difference between sorting and filtering?',
        options: ['They are the same thing with different names', 'Sorting permanently rearranges rows; filtering temporarily hides rows that do not match a condition, without deleting or reordering anything', 'Filtering deletes data permanently; sorting does not', 'Sorting only works on numbers, filtering only works on text'],
        answerIndex: 1,
        explanation: 'Sorting changes the order of all rows. Filtering just hides rows that do not match your criteria — the hidden data is still there, and unhiding the filter shows it again.'
      },
      {
        id: 'q3',
        prompt: 'What keyboard shortcut turns on AutoFilter for a table?',
        options: ['Ctrl+Shift+L', 'Ctrl+F', 'Ctrl+Shift+F', 'Alt+A'],
        answerIndex: 0,
        explanation: 'Ctrl+Shift+L toggles AutoFilter on or off, adding dropdown arrows to your column headers for quick filtering.'
      },
      {
        id: 'q4',
        prompt: 'Which chart type is generally best for comparing a value across several categories, like sales by city?',
        options: ['Pie chart', 'Bar/Column chart', 'Line chart', 'None of these work for comparisons'],
        answerIndex: 1,
        explanation: 'Bar and column charts are the easiest chart type for accurately comparing values across distinct categories, which is why they are the most commonly used chart in business.'
      },
      {
        id: 'q5',
        prompt: 'Why are pie charts recommended only for a small number of categories (around 5-6 or fewer)?',
        options: ['Excel technically cannot draw more than 6 slices', 'Beyond a handful of slices, the differences between slice sizes become hard to distinguish visually, making the chart confusing rather than clarifying', 'Pie charts only work with whole numbers', 'Pie charts cannot include percentages'],
        answerIndex: 1,
        explanation: 'Once a pie chart has many thin slices, it becomes very difficult for the eye to compare their relative sizes accurately — a bar chart usually communicates the same data more clearly.'
      }
    ]
  },

  'ex-b-6': {
    title: 'Check your understanding: Workbooks and worksheets',
    intro: 'Test your knowledge of worksheets, file formats, AutoFill, and Paste Special.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the difference between a workbook and a worksheet?',
        options: ['They are exactly the same thing', 'A workbook is the entire file; a worksheet is one tab inside that file. A workbook can contain many worksheets', 'A worksheet is the entire file; a workbook is one tab inside it', 'A workbook only contains formulas, a worksheet only contains text'],
        answerIndex: 1,
        explanation: 'Think of the workbook as a binder and each worksheet as a page inside it — one file, multiple tabs.'
      },
      {
        id: 'q2',
        prompt: 'What does the formula =Sales!B10 do?',
        options: ['It causes an error because formulas cannot reference other sheets', 'It pulls the value from cell B10 on a worksheet named "Sales"', 'It sells the contents of cell B10', 'It renames the current sheet to "Sales"'],
        answerIndex: 1,
        explanation: 'SheetName!CellReference lets a formula on one worksheet pull a value from a specific cell on a different worksheet in the same workbook.'
      },
      {
        id: 'q3',
        prompt: 'Why might a .csv file lose your colours, formulas, and multiple sheets when you open it again?',
        options: ['CSV is a corrupted file format', '.csv only stores plain data — it has no concept of formulas, formatting, or multiple sheets, by design', 'This only happens on Mac computers', 'It does not actually lose anything'],
        answerIndex: 1,
        explanation: 'CSV (Comma-Separated Values) is intentionally just plain text with commas — that simplicity is exactly why it works across so many different tools, but it cannot carry Excel-specific features.'
      },
      {
        id: 'q4',
        prompt: 'If you type "Monday" in a cell and drag the fill handle across 4 more cells, what happens?',
        options: ['It just repeats "Monday" five times', 'AutoFill recognises the weekday pattern and continues with Tuesday, Wednesday, Thursday, Friday', 'It causes an error', 'It deletes the word "Monday"'],
        answerIndex: 1,
        explanation: 'AutoFill recognises common patterns like weekdays, months, and number sequences, and continues them automatically when you drag the fill handle.'
      },
      {
        id: 'q5',
        prompt: 'What does Paste Special → Values do, that a normal paste does not?',
        options: ['It pastes the formula along with its formatting', 'It pastes only the calculated result of a formula, not the formula itself, "freezing" the number in place', 'It deletes the original cell after copying', 'It is identical to a normal Ctrl+V paste'],
        answerIndex: 1,
        explanation: 'Paste Special → Values strips away the underlying formula and leaves just the final number, so the value will not change even if the original source cells are edited later.'
      }
    ]
  },
  'ex-b-7': {
    title: 'Check your understanding: Cleaning text and validation',
    intro: 'Test your knowledge of text functions and Data Validation.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does =A2&" "&B2 do if A2 is "Aditi" and B2 is "Rao"?',
        options: ['"AditiRao" with no space', '"Aditi Rao" with a space in between', 'An error, because & cannot join text', '"A2 B2"'],
        answerIndex: 1,
        explanation: 'The & symbol joins text together. The " " in the middle explicitly adds a space between the two joined values.'
      },
      {
        id: 'q2',
        prompt: 'Given a phone number "9876543210" in cell A1, what does =RIGHT(A1, 4) return?',
        options: ['"9876"', '"3210"', '"9876543210"', 'An error'],
        answerIndex: 1,
        explanation: 'RIGHT(text, n) grabs the last n characters from the right-hand side of the text — here, the last 4 digits.'
      },
      {
        id: 'q3',
        prompt: 'Why would you use the TRIM function on a column of city names?',
        options: ['To convert the names to uppercase', 'To remove extra leading, trailing, or repeated spaces that can make two cells look different even when they should match', 'To sort the column alphabetically', 'To translate the names into another language'],
        answerIndex: 1,
        explanation: 'Invisible extra spaces (often from pasted data) can make "Mumbai" and " Mumbai " behave as two different values in formulas like COUNTIF — TRIM removes that mismatch.'
      },
      {
        id: 'q4',
        prompt: 'What does =PROPER("priya sharma") return?',
        options: ['"PRIYA SHARMA"', '"priya sharma" unchanged', '"Priya Sharma" — the first letter of each word capitalised', '"Priya sharma"'],
        answerIndex: 2,
        explanation: 'PROPER capitalises the first letter of every word, which is useful for cleaning up inconsistently-cased name or text columns.'
      },
      {
        id: 'q5',
        prompt: 'What is the main benefit of adding a Data Validation dropdown list to a column like "Status"?',
        options: ['It makes the spreadsheet load faster', 'It restricts what can be typed into that cell, preventing typos like "actve" instead of "Active" before they ever happen', 'It automatically sorts the column', 'It hides the column from other users'],
        answerIndex: 1,
        explanation: 'Data Validation prevents bad data at the source by only allowing pre-approved values, which is more reliable than cleaning up typos after the fact.'
      }
    ]
  },

  // Excel Intermediate
  'ex-i-1': {
    title: 'Check your understanding: VLOOKUP and INDEX/MATCH',
    intro: 'Test your knowledge of looking up data across tables.',
    questions: [
      {
        id: 'q1',
        prompt: 'In =VLOOKUP(C2, Products!A:C, 2, FALSE), what does the FALSE argument do?',
        options: ['It tells Excel to ignore errors', 'It forces an exact match instead of an approximate one, which is almost always what you want', 'It hides the result', 'It searches in reverse order'],
        answerIndex: 1,
        explanation: 'Without FALSE, VLOOKUP defaults to an approximate match and can silently return a wrong answer instead of an error.'
      },
      {
        id: 'q2',
        prompt: 'What is the key limitation of VLOOKUP that INDEX/MATCH does not have?',
        options: ['VLOOKUP cannot handle numbers, only text', 'VLOOKUP can only search the first column of a range and return values to its right — it cannot look left', 'VLOOKUP only works on one sheet at a time', 'VLOOKUP is slower for small datasets'],
        answerIndex: 1,
        explanation: 'VLOOKUP always searches the leftmost column of its range. INDEX/MATCH has no such direction restriction.'
      },
      {
        id: 'q3',
        prompt: 'In =INDEX(A:A, MATCH(D2, D:D, 0)), what does the MATCH part actually return?',
        options: ['The value found in column A', 'The position (a row number within the range) where D2 was found in column D', 'TRUE or FALSE', 'The column letter'],
        answerIndex: 1,
        explanation: 'MATCH returns a position, not a value. INDEX then uses that position to pull the actual value from a different range.'
      },
      {
        id: 'q4',
        prompt: 'Why is a VLOOKUP column number considered fragile?',
        options: ['It always returns text instead of numbers', 'If someone inserts a new column into the searched table, every existing column number shifts and the formula can start pulling the wrong data', 'It cannot be copied to other cells', 'It only works with numeric IDs'],
        answerIndex: 1,
        explanation: 'VLOOKUP relies on a hardcoded column count, so inserting or reordering columns in the source table silently breaks it.'
      },
      {
        id: 'q5',
        prompt: 'You get a #N/A error from VLOOKUP. What is the most likely cause?',
        options: ['Your computer has a virus', 'The value you searched for does not exist in the lookup range, often due to a typo or extra space', 'You used too many decimal places', 'The workbook is too large'],
        answerIndex: 1,
        explanation: '#N/A specifically means "not found" — the search value genuinely is not present in the range you pointed VLOOKUP at.'
      }
    ]
  },

  'ex-i-2': {
    title: 'Check your understanding: Pivot Tables',
    intro: 'Test your knowledge of summarising data with Pivot Tables.',
    questions: [
      {
        id: 'q1',
        prompt: 'What are the four boxes you drag fields into when building a Pivot Table?',
        options: ['Rows, Columns, Values, Filters', 'Header, Footer, Body, Sidebar', 'Sum, Count, Average, Max', 'Sheet1, Sheet2, Sheet3, Sheet4'],
        answerIndex: 0,
        explanation: 'Rows and Columns control grouping, Values controls what number gets summarised, and Filters narrows the whole table to a category.'
      },
      {
        id: 'q2',
        prompt: 'When you drag a numeric field like Revenue into the Values box, what does Excel do by default?',
        options: ['Counts the number of entries', 'Sums all the values', 'Averages all the values', 'Leaves it blank until you choose'],
        answerIndex: 1,
        explanation: 'Sum is the default aggregation for numeric fields dropped into Values; you can change it via Value Field Settings.'
      },
      {
        id: 'q3',
        prompt: 'You added 200 new rows to the data your Pivot Table is built on, but the pivot still shows old numbers. What should you do?',
        options: ['Delete the pivot table and start over', 'Right-click the pivot and choose Refresh (or press Alt+F5)', 'Nothing — it updates automatically within an hour', 'Save the file and reopen it'],
        answerIndex: 1,
        explanation: 'A Pivot Table is a snapshot, not a live formula — it only updates when you explicitly Refresh it.'
      },
      {
        id: 'q4',
        prompt: 'What happens if you drag a text column like Customer Name into the Values box?',
        options: ['Excel throws an error and refuses', 'Excel automatically switches to Count, since text values cannot be summed', 'Excel converts the text to numbers', 'Nothing happens — the column is ignored'],
        answerIndex: 1,
        explanation: 'Text cannot be summed, so Excel defaults to counting how many entries exist instead.'
      },
      {
        id: 'q5',
        prompt: 'What is a Slicer used for?',
        options: ['Cutting a worksheet into separate files', 'A clickable visual filter for a Pivot Table, as an alternative to the dropdown filter', 'Splitting one column into two', 'Removing duplicate rows'],
        answerIndex: 1,
        explanation: 'Slicers give Pivot Tables a clickable, visual filtering interface, popular for simple interactive dashboards.'
      }
    ]
  },

  'ex-i-3': {
    title: 'Check your understanding: Conditional Formatting',
    intro: 'Test your knowledge of highlighting data automatically based on rules.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the main purpose of Conditional Formatting?',
        options: ['To lock cells from being edited', 'To automatically change a cell\'s appearance (colour, icon, bar) when it meets a rule you define', 'To validate data before it is entered', 'To merge multiple cells together'],
        answerIndex: 1,
        explanation: 'Conditional Formatting changes visual appearance based on rules, making important values jump out without manual checking.'
      },
      {
        id: 'q2',
        prompt: 'You want to highlight an entire row red whenever the Status column (F) says "Cancelled". Which formula-based rule is correct, assuming the whole data range is selected first?',
        options: ['=F2="Cancelled"', '=$F2="Cancelled"', '=$F$2="Cancelled"', '=F$2="Cancelled"'],
        answerIndex: 1,
        explanation: 'Locking only the column ($F2) keeps every cell in a row checking column F, while letting the row number adjust per row.'
      },
      {
        id: 'q3',
        prompt: 'What do Data Bars do?',
        options: ['Add a dropdown list to a cell', 'Draw a small bar inside each cell, proportional to its value, for comparing magnitudes at a glance', 'Lock the column width', 'Convert numbers to percentages'],
        answerIndex: 1,
        explanation: 'Data Bars are a visual, in-cell bar chart — longer bars represent larger values, useful for quick comparisons.'
      },
      {
        id: 'q4',
        prompt: 'A cell is not formatting the way you expect, even though your rule looks correct. Where should you check first?',
        options: ['The Name Manager', 'Conditional Formatting → Manage Rules, to check for a conflicting rule positioned above yours', 'The Page Layout tab', 'The AutoSave settings'],
        answerIndex: 1,
        explanation: 'Multiple rules can apply to the same cell, evaluated top to bottom — Manage Rules shows the order and lets you check for conflicts.'
      },
      {
        id: 'q5',
        prompt: 'What does the formula rule =A2<TODAY() achieve when applied to a Due Date column?',
        options: ['It deletes any past due date', 'It highlights any date that has already passed today\'s date', 'It blocks future dates from being entered', 'It sorts the dates chronologically'],
        answerIndex: 1,
        explanation: 'TODAY() returns the current date, so this rule is TRUE (and applies formatting) for any due date earlier than today — i.e., overdue.'
      }
    ]
  },

  'ex-i-4': {
    title: 'Check your understanding: Named ranges and data validation',
    intro: 'Test your knowledge of naming cells and preventing bad data entry.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the main benefit of using a Named Range like "TaxRate" instead of $F$1 in a formula?',
        options: ['Named ranges calculate faster', 'It makes formulas easier to read, and the name keeps working even if the cell is moved elsewhere', 'It lets you store text and numbers in the same cell', 'It removes the need for the equals sign'],
        answerIndex: 1,
        explanation: 'A named range behaves like an absolute reference automatically, and stays valid even if you relocate the underlying cell.'
      },
      {
        id: 'q2',
        prompt: 'Where can you see and edit every named range in a workbook?',
        options: ['Data → Sort', 'Formulas → Name Manager', 'View → Freeze Panes', 'Insert → Names'],
        answerIndex: 1,
        explanation: 'Name Manager lists all defined names, what they point to, and lets you edit or delete them.'
      },
      {
        id: 'q3',
        prompt: 'What does a Data Validation dropdown list (Allow: List) primarily prevent?',
        options: ['Slow formula calculation', 'Typos and inconsistent entries, by only allowing pre-approved values to be typed into a cell', 'Accidental file deletion', 'Formulas referencing the wrong sheet'],
        answerIndex: 1,
        explanation: 'A dropdown list restricts input to exact, pre-approved values, eliminating issues like "Sales" vs "sales" vs "SALES" meaning the same thing.'
      },
      {
        id: 'q4',
        prompt: 'A custom Data Validation rule uses the formula =AND(B2>0, B2<=C2). What does it enforce?',
        options: ['B2 must always equal C2', 'B2 must be greater than 0 and not exceed the value in C2', 'B2 must be negative', 'C2 must be greater than B2 by exactly 1'],
        answerIndex: 1,
        explanation: 'AND requires both conditions to be true — here, a positive quantity that does not exceed some limit stored in C2 (like stock on hand).'
      },
      {
        id: 'q5',
        prompt: 'Does Data Validation retroactively flag data that was already in the cells before the rule was applied?',
        options: ['Yes, it instantly highlights all existing invalid entries', 'No — it only stops new entries going forward, not data already present', 'It deletes existing invalid entries automatically', 'It converts existing invalid entries to the nearest valid option'],
        answerIndex: 1,
        explanation: 'Data Validation rules apply going forward from when they are created — always set them up before a sheet is shared for filling in, not after.'
      }
    ]
  },

  'ex-i-5': {
    title: 'Check your understanding: Power Query',
    intro: 'Test your knowledge of importing and cleaning messy data automatically.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the main advantage of cleaning data with Power Query instead of manual formulas?',
        options: ['It is the only way to remove duplicate rows', 'The cleanup steps are recorded and can be replayed automatically on future versions of the same messy data via Refresh', 'It makes charts automatically', 'It permanently changes the original source file'],
        answerIndex: 1,
        explanation: "Power Query records a repeatable recipe of steps, so a recurring messy export can be re-cleaned with one click instead of redoing the work."
      },
      {
        id: 'q2',
        prompt: 'What is the "Applied Steps" panel in the Power Query Editor?',
        options: ['A list of every formula in the workbook', 'An ordered, named list of every transformation you have performed, which can be clicked through, edited, or reordered', 'A history of files you have opened', 'A list of all open Excel windows'],
        answerIndex: 1,
        explanation: 'Applied Steps records each transformation (like "Removed Columns" or "Split Column") in order, and re-runs all of them on Refresh.'
      },
      {
        id: 'q3',
        prompt: 'Does working in the Power Query Editor change your original source file?',
        options: ['Yes, every change is saved back to the source file immediately', 'No — it is a safe sandbox; the original source file is untouched until you choose Close & Load', 'Only if you forget to undo', 'Only for CSV files, not Excel files'],
        answerIndex: 1,
        explanation: 'Power Query builds a separate recipe of transformations; the source file itself is never modified.'
      },
      {
        id: 'q4',
        prompt: 'What does "Merge Queries" in Power Query conceptually correspond to?',
        options: ['A VLOOKUP formula, but reusable', 'A SQL-style JOIN, combining two tables based on a matching column', 'Combining two Excel files into one', 'Removing duplicate columns'],
        answerIndex: 1,
        explanation: 'Merge Queries combines two tables on a matching column, similar to a SQL JOIN, with "Left Outer" matching a LEFT JOIN.'
      },
      {
        id: 'q5',
        prompt: 'You replace the source file with a new export and click Refresh All. What is most likely to go wrong if a column was renamed in the new file?',
        options: ['Nothing — Power Query always adapts automatically', 'A step that depends on that exact column name may fail or pull the wrong column, so you should spot-check the result after refreshing', 'Excel will permanently delete the new file', 'The workbook will be corrupted'],
        answerIndex: 1,
        explanation: 'Refresh assumes the new file has the same structure as the one the steps were built against — a renamed or reordered column can break a step silently.'
      }
    ]
  },

  // Excel Advanced
  'ex-a-1': {
    title: 'Check your understanding: Power Pivot and the Data Model',
    intro: 'Test your knowledge of connecting tables through relationships instead of lookup formulas.',
    questions: [
      {
        id: 'q1',
        prompt: 'Why does Power Pivot use relationships instead of VLOOKUP at large scale?',
        options: ['VLOOKUP is more accurate', 'VLOOKUP formulas copied down hundreds of thousands of rows are slow and bloat the file; relationships connect tables without copying any formulas at all', 'Relationships work only with text columns', 'VLOOKUP cannot be used inside Pivot Tables at all'],
        answerIndex: 1,
        explanation: 'A relationship connects tables structurally, the way a database does, avoiding the performance and fragility costs of millions of lookup formulas.'
      },
      {
        id: 'q2',
        prompt: 'In the Sales / Products / Customers Data Model, what kind of relationship exists between Sales and Products?',
        options: ['Many-to-many', 'One-to-many, with Sales as the "many" side', 'No relationship is needed', 'One-to-one'],
        answerIndex: 1,
        explanation: 'Many sales rows can reference the same single product, making Sales the "many" side and Products the "one" side.'
      },
      {
        id: 'q3',
        prompt: 'What requirement must the "one" side of a relationship (e.g., Products[Product ID]) satisfy?',
        options: ['It must be sorted alphabetically', 'It must contain no duplicate values', 'It must be the first column in the table', 'It must be formatted as currency'],
        answerIndex: 1,
        explanation: 'Excel refuses to create a relationship if the "one" side has duplicate key values, since that breaks the lookup logic.'
      },
      {
        id: 'q4',
        prompt: 'This pattern of one central transactional table connected to several small lookup tables is commonly called:',
        options: ['A pivot schema', 'A star schema', 'A flat file', 'A macro table'],
        answerIndex: 1,
        explanation: 'A star schema has one "facts" table (like Sales) surrounded by smaller "dimension" tables (like Products and Customers) it relates to.'
      },
      {
        id: 'q5',
        prompt: 'After adding three tables to the Data Model with relationships built, what can a Pivot Table now do that a normal Pivot Table cannot?',
        options: ['Use columns from different related tables together (like Products[Category] alongside Sales[Quantity]) without any VLOOKUP formulas', 'Automatically email itself', 'Convert all numbers to text', 'Delete duplicate rows in the source data'],
        answerIndex: 0,
        explanation: 'The Data Model lets a single Pivot Table combine fields from multiple related tables directly, using the relationships instead of helper lookup columns.'
      }
    ]
  },

  'ex-a-2': {
    title: 'Check your understanding: DAX measures',
    intro: 'Test your knowledge of writing calculations on top of the Data Model.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does RELATED do inside a DAX measure like SUMX(Sales, Sales[Quantity] * RELATED(Products[Price]))?',
        options: ['Sorts the Sales table', 'Reaches across an existing relationship to fetch a matching value from a related table, for the current row', 'Deletes unrelated rows', 'Converts text to numbers'],
        answerIndex: 1,
        explanation: 'RELATED follows the relationship from the "many" side to fetch the corresponding value on the "one" side, row by row.'
      },
      {
        id: 'q2',
        prompt: 'What is the key difference between a DAX measure and a calculated column?',
        options: ['They are exactly the same thing', 'A calculated column stores one static value per row; a measure recalculates fresh every time, based on whatever filters a Pivot Table currently applies', 'Measures can only return text', 'Calculated columns are faster in every case'],
        answerIndex: 1,
        explanation: 'A measure is dynamic and filter-aware, recomputing for whatever Rows/Columns/Filters context it is placed in — a calculated column is static per row.'
      },
      {
        id: 'q3',
        prompt: 'What does CALCULATE([Total Revenue], Customers[City] = "Mumbai") do?',
        options: ['Deletes all non-Mumbai rows permanently', 'Recomputes the Total Revenue measure, but forced to only consider rows where the customer city is Mumbai', 'Renames the Total Revenue measure', 'Creates a new table called Mumbai'],
        answerIndex: 1,
        explanation: 'CALCULATE takes an existing measure and recomputes it under a modified filter context — here, restricted to Mumbai.'
      },
      {
        id: 'q4',
        prompt: 'Why should DIVIDE(a, b) be used instead of writing a/b directly in DAX?',
        options: ['DIVIDE is faster to type', 'DIVIDE returns blank instead of an error when the denominator is zero, which a plain a/b would throw as #DIV/0!', 'a/b is not valid DAX syntax at all', 'DIVIDE always rounds the result'],
        answerIndex: 1,
        explanation: 'DIVIDE gracefully handles a zero denominator (like a month with no sales) by returning blank instead of breaking the calculation with an error.'
      },
      {
        id: 'q5',
        prompt: 'What does TOTALYTD([Total Revenue], Sales[Date]) calculate, when used in a Pivot Table broken down by month?',
        options: ['The revenue for that single month only', 'The running cumulative total from the start of the year through the end of that month', 'The average monthly revenue for the whole year', 'Next year\'s projected revenue'],
        answerIndex: 1,
        explanation: 'TOTALYTD is a time-intelligence function that accumulates a measure from the start of the year up to the current filter context.'
      }
    ]
  },

  'ex-a-3': {
    title: 'Check your understanding: Advanced array formulas',
    intro: 'Test your knowledge of formulas that operate across entire ranges at once.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does =SUMPRODUCT((D2:D30="Mumbai") * B2:B30 * C2:C30) calculate?',
        options: ['The total of columns B and C for every row, regardless of city', 'The sum of B×C for only the rows where column D equals "Mumbai," since the TRUE/FALSE condition acts as 1/0 in the multiplication', 'A count of how many rows say "Mumbai"', 'An error, because SUMPRODUCT cannot use conditions'],
        answerIndex: 1,
        explanation: 'The (D2:D30="Mumbai") condition produces an array of 1s and 0s, zeroing out the contribution of any row that is not Mumbai before summing the products.'
      },
      {
        id: 'q2',
        prompt: 'What do the curly braces {} around a legacy array formula in the formula bar mean?',
        options: ['You should type them yourself when writing the formula', 'Excel added them automatically to show the formula was confirmed with Ctrl+Shift+Enter as an array calculation', 'The formula contains an error', 'The formula is locked from editing'],
        answerIndex: 1,
        explanation: 'Curly braces are Excel\'s own indicator that a formula was entered as a legacy array formula — you never type them manually.'
      },
      {
        id: 'q3',
        prompt: 'What makes a Dynamic Array formula like =UNIQUE(D2:D30) different from a regular formula?',
        options: ['It can only be used once per worksheet', 'It automatically "spills" its results into as many cells as needed, with no Ctrl+Shift+Enter or manual range sizing required', 'It only works with numbers, not text', 'It requires Power Pivot to be enabled'],
        answerIndex: 1,
        explanation: 'Dynamic Arrays in modern Excel spill multiple results automatically into adjacent cells, unlike older array formulas or single-cell formulas.'
      },
      {
        id: 'q4',
        prompt: 'What does the #SPILL! error mean?',
        options: ['The formula has a typo', 'A dynamic array formula needs to spill results into cells that already contain other data', 'The file is corrupted', 'A circular reference was detected'],
        answerIndex: 1,
        explanation: '#SPILL! appears when something is blocking the cells a dynamic array formula needs to expand into — clearing those cells resolves it.'
      },
      {
        id: 'q5',
        prompt: 'What does =SORT(UNIQUE(D2:D30)) produce?',
        options: ['A count of unique values', 'An alphabetically sorted list of every distinct value in the range, spilled automatically', 'The largest value in the range', 'A list with duplicates removed but in random order'],
        answerIndex: 1,
        explanation: 'UNIQUE removes duplicates and SORT then alphabetizes the result, with both functions spilling the combined output automatically.'
      }
    ]
  },

  'ex-a-4': {
    title: 'Check your understanding: Macros and VBA basics',
    intro: 'Test your knowledge of recording and writing simple automation.',
    questions: [
      {
        id: 'q1',
        prompt: 'What file format must you save a workbook as to keep a macro inside it?',
        options: ['.xlsx, the standard format', '.xlsm, the Macro-Enabled Workbook format', '.csv', '.pdf'],
        answerIndex: 1,
        explanation: 'Saving as a regular .xlsx silently strips out any macros with no warning — .xlsm is required to preserve them.'
      },
      {
        id: 'q2',
        prompt: 'In VBA, what does Cells(Rows.Count, "B").End(xlUp).Row typically find?',
        options: ['The first empty row at the very top of the sheet', 'The last row that actually contains data in column B, regardless of how much data exists', 'The total number of columns in the sheet', 'A random row in column B'],
        answerIndex: 1,
        explanation: 'This is the standard VBA idiom for finding the last used row in a column, making a macro work correctly no matter how the data grows or shrinks.'
      },
      {
        id: 'q3',
        prompt: 'What does a For i = 2 To lastRow ... Next i loop in VBA do?',
        options: ['Runs the code inside it exactly once', 'Repeats the code inside it once for every row from row 2 through lastRow, with i taking each row number in turn', 'Deletes rows 2 through lastRow', 'Pauses the macro for "lastRow" seconds'],
        answerIndex: 1,
        explanation: 'This is a counting loop — i increments from 2 up to lastRow, running the enclosed code once per value, which is how macros process every row of a table.'
      },
      {
        id: 'q4',
        prompt: 'Why does Excel show a security warning bar when opening a .xlsm file from someone else?',
        options: ['Because .xlsm files are always corrupted', 'Because macros can run arbitrary actions on your computer and are a real, common way malware spreads through email attachments', 'Because the file is too large', 'Because macros always contain viruses'],
        answerIndex: 1,
        explanation: 'Macros have broad capability on your system, so Excel disables them by default on files from outside sources until you explicitly trust and enable them.'
      },
      {
        id: 'q5',
        prompt: 'What is the main limitation of recording a macro (rather than hand-writing VBA) for automation?',
        options: ['Recorded macros run slower than typed code', 'Recording only captures a linear sequence of actions — it cannot capture loops or conditional logic like "for every row, check if X"', 'Recorded macros cannot be saved', 'Recording requires an internet connection'],
        answerIndex: 1,
        explanation: 'The macro recorder can only play back the exact clicks you made — any logic involving loops or conditions needs to be hand-written in the VBA editor.'
      }
    ]
  },

  'ex-a-5': {
    title: 'Check your understanding: Building interactive dashboards',
    intro: 'Test your knowledge of assembling Pivot Tables, charts, and slicers into one usable dashboard.',
    questions: [
      {
        id: 'q1',
        prompt: 'What should you decide before opening Excel and building dashboard charts?',
        options: ['Which font to use', 'Who the dashboard is for, and the 3-5 specific questions it needs to answer', 'How many sheets the workbook should have', 'The file size limit'],
        answerIndex: 1,
        explanation: 'Designing around the audience\'s actual questions first prevents a dashboard that looks busy but does not answer anything useful.'
      },
      {
        id: 'q2',
        prompt: 'What does connecting a Slicer to multiple Pivot Tables via "Report Connections" achieve?',
        options: ['It merges the Pivot Tables into one', 'One click on the slicer filters every connected Pivot Table and Pivot Chart simultaneously', 'It deletes the unconnected Pivot Tables', 'It hides the slicer from view'],
        answerIndex: 1,
        explanation: 'Report Connections let a single slicer control multiple visuals at once, which is the foundation of an interactive, click-to-filter dashboard.'
      },
      {
        id: 'q3',
        prompt: 'What does GETPIVOTDATA let you do?',
        options: ['Delete a Pivot Table', 'Pull one specific number out of an existing Pivot Table into a standalone cell, useful for building a styled KPI card', 'Convert a Pivot Table into a regular range', 'Connect to an external database'],
        answerIndex: 1,
        explanation: 'GETPIVOTDATA extracts a single value from a Pivot Table so it can be displayed independently, like in a large-font KPI card.'
      },
      {
        id: 'q4',
        prompt: 'What does Data → Refresh All update in one click?',
        options: ['Only the active cell', 'Every Pivot Table, Pivot Chart, Power Query step, and Data Model calculation in the entire workbook', 'Only charts, not Pivot Tables', 'Only the formatting, not the data'],
        answerIndex: 1,
        explanation: 'Refresh All is the single action a dashboard\'s end user needs, updating every data-dependent element across the whole workbook at once.'
      },
      {
        id: 'q5',
        prompt: 'Why hide gridlines and move underlying Pivot Tables to a separate sheet on a finished dashboard?',
        options: ['It is required for slicers to function', 'It makes the dashboard look intentional and focused on the visuals, rather than exposing raw working data', 'It speeds up Excel\'s calculation engine', 'It is required to save as .xlsm'],
        answerIndex: 1,
        explanation: 'A clean, deliberate layout — without visible raw pivot grids or gridlines — is read faster and trusted more by the people actually using the dashboard.'
      }
    ]
  },

  // Power BI
  'pb-b-1': {
    title: 'Check your understanding: Power BI Basics',
    intro: 'Test your knowledge of Power BI.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the primary difference between Excel and Power BI?',
        options: ['Power BI is used for typing letters, Excel is for numbers', 'Excel is primarily for storing and calculating data, Power BI is primarily for building dynamic, shareable visual dashboards', 'Power BI can only handle 100 rows of data', 'There is no difference, they are the same app with different logos'],
        answerIndex: 1,
        explanation: 'While Excel has charts, Power BI is specifically designed to connect multiple data sources, handle massive data natively, and serve interactive dashboards to stakeholders.'
      },
      {
        id: 'q2',
        prompt: 'Which application do you use to author and build your reports?',
        options: ['Power BI Mobile', 'Power BI Service (the website)', 'Power BI Desktop', 'Power BI Builder'],
        answerIndex: 2,
        explanation: 'Power BI Desktop is the free, installable software where analysts do the heavy lifting of modeling data and creating visuals.'
      },
      {
        id: 'q3',
        prompt: 'Is Power BI Desktop natively available for Mac users?',
        options: ['Yes, from the Mac App Store', 'No, it is a Windows-only application', 'Yes, but only the premium paid version', 'No, it only runs on Linux'],
        answerIndex: 1,
        explanation: 'Power BI Desktop is only available for Windows. Mac users typically have to use a virtual machine (like Parallels) to run it.'
      },
      {
        id: 'q4',
        prompt: 'What is the purpose of the "Power BI Service"?',
        options: ['It is a customer support hotline', 'It is the cloud platform where you publish your completed dashboards so others can view them', 'It is the tool used to clean raw data', 'It is a background process that keeps Windows updated'],
        answerIndex: 1,
        explanation: 'Once you finish a report in Desktop, you publish it to the Power BI Service (app.powerbi.com) so your team can view it securely in their browsers.'
      },
      {
        id: 'q5',
        prompt: 'Which of the following is NOT one of the standard steps in the Power BI workflow?',
        options: ['Get data from a source', 'Clean and shape the data', 'Write data directly into a SQL server from Power BI', 'Build visuals on a canvas'],
        answerIndex: 2,
        explanation: 'Power BI is an analytics (read-only) tool. You pull data in to analyze it, but you do not use Power BI to write new transactions back to a database.'
      }
    ]
  },

  'pb-b-2': {
    title: 'Check your understanding: Loading data from Excel and CSV',
    intro: 'Test your knowledge of connecting Power BI to real data sources.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the very first step in building any Power BI report?',
        options: ['Choosing a chart type', 'Get Data, to connect to a source like Excel, CSV, or a database', 'Publishing to the Service', 'Writing a DAX formula'],
        answerIndex: 1,
        explanation: 'Every report starts by connecting to a data source through Get Data — there is nothing to visualise before data is loaded in.'
      },
      {
        id: 'q2',
        prompt: 'When loading an Excel workbook, what does the Navigator window let you do?',
        options: ['Edit the formulas inside the Excel file directly', 'Choose which sheet or table inside the workbook to load, with a preview before confirming', 'Convert the file into a CSV automatically', 'Delete the original Excel file'],
        answerIndex: 1,
        explanation: 'The Navigator shows every sheet/table found in the workbook with a preview, letting you pick exactly which one to bring in.'
      },
      {
        id: 'q3',
        prompt: 'What is the key difference between clicking "Load" and clicking "Transform Data" after connecting to a source?',
        options: ['They do exactly the same thing', '"Load" brings data in as-is; "Transform Data" opens the Power Query Editor first, so you can fix problems before the data reaches your report', '"Transform Data" deletes the source file', '"Load" only works with CSV files'],
        answerIndex: 1,
        explanation: 'Transform Data lets you clean and fix the data before it ever lands in your report — generally the safer default habit.'
      },
      {
        id: 'q4',
        prompt: 'Why does a CSV file behave differently from an Excel file in the Get Data flow?',
        options: ['CSV files cannot be loaded into Power BI at all', 'A CSV has no sheets or named tables to choose from — it is one flat block of data, so there is no Navigator selection step', 'CSV files load faster but cannot contain dates', 'CSV files require a paid Power BI license'],
        answerIndex: 1,
        explanation: 'Since CSV is just plain comma-separated data with a single structure, there is nothing to select between like there is with multi-sheet Excel workbooks.'
      },
      {
        id: 'q5',
        prompt: 'After loading data, you check the Data view and see a Date column showing "ABC" (text) instead of a calendar icon. Why does this matter?',
        options: ['It does not matter, Power BI treats text and dates identically', 'A wrongly-typed Date column will silently break date-based visuals and time filters later, so it should be fixed immediately after loading', 'It means the file failed to load', 'It only affects the column\'s colour in the Data view'],
        answerIndex: 1,
        explanation: 'Catching a wrong data type right after loading takes seconds; catching it after building several visuals on top of it is much more disruptive.'
      }
    ]
  },

  'pb-b-3': {
    title: 'Check your understanding: Cleaning data with Power Query',
    intro: 'Test your knowledge of fixing messy data before it reaches your report.',
    questions: [
      {
        id: 'q1',
        prompt: 'Is the Power Query Editor in Power BI a different tool from the one in Excel?',
        options: ['Yes, they share no features at all', 'No — Power BI uses the exact same Power Query Editor and concept as Excel: recorded, replayable cleanup steps', 'Power BI\'s version only works with CSV files', 'Excel\'s Power Query cannot remove duplicates, but Power BI\'s can'],
        answerIndex: 1,
        explanation: 'Power Query is the same underlying engine in both Excel and Power BI, including the same Applied Steps concept.'
      },
      {
        id: 'q2',
        prompt: 'How do you reopen the Power Query Editor after data has already been loaded into a report?',
        options: ['It cannot be reopened once data is loaded', 'Home → Transform Data', 'Delete the report and start over', 'File → Print Preview'],
        answerIndex: 1,
        explanation: 'Transform Data reopens the editor at any time, letting you add or adjust cleanup steps without reloading from scratch.'
      },
      {
        id: 'q3',
        prompt: 'A City column has entries like "mumbai", " Mumbai", and "MUMBAI" that should all be treated as the same city. Which two transformations, used together, fix this?',
        options: ['Remove Columns and Remove Rows', 'Trim and Capitalize Each Word', 'Change Type and Merge Queries', 'Sort Ascending and Sort Descending'],
        answerIndex: 1,
        explanation: 'Trim removes the inconsistent extra spaces, and Capitalize Each Word fixes the inconsistent casing, together producing a single consistent "Mumbai."'
      },
      {
        id: 'q4',
        prompt: 'What does the Applied Steps panel let you do that is especially useful for troubleshooting?',
        options: ['Permanently delete the original source file', 'Click any previous step to see exactly what the data looked like at that point, helping pinpoint where something went wrong', 'Automatically publish the report', 'Convert every column to text'],
        answerIndex: 1,
        explanation: 'Being able to click back through each named step makes it easy to isolate exactly which transformation caused an unexpected result.'
      },
      {
        id: 'q5',
        prompt: 'What does Home → Close & Apply do?',
        options: ['Deletes all the cleanup steps you just created', 'Loads the cleaned data into your report\'s data model so visuals can be built from it', 'Publishes the report to the Power BI Service', 'Opens the Navigator window again'],
        answerIndex: 1,
        explanation: 'Close & Apply is the Power BI equivalent of Excel\'s Close & Load — it brings the cleaned result into the report, ready for visuals.'
      }
    ]
  },

  'pb-b-4': {
    title: 'Check your understanding: Your first chart',
    intro: 'Test your knowledge of building visuals on the Report canvas.',
    questions: [
      {
        id: 'q1',
        prompt: 'Which view do you switch to in order to actually build charts on a canvas?',
        options: ['Data view', 'Report view', 'Model view', 'Power Query Editor'],
        answerIndex: 1,
        explanation: 'Report view is the blank canvas where visuals are placed and arranged; Data and Model views are for inspecting data and relationships instead.'
      },
      {
        id: 'q2',
        prompt: 'You select a Clustered Column Chart and drag City onto the X-axis and Quantity onto the Y-axis. What happens by default?',
        options: ['Nothing, until you write a DAX formula', 'A bar appears for each city, with Quantity automatically summed for that city', 'An error appears, since two fields cannot be combined this way', 'The chart shows only the first row of data'],
        answerIndex: 1,
        explanation: 'Power BI automatically aggregates (typically sums) a numeric field when it is dropped onto an axis well alongside a category field.'
      },
      {
        id: 'q3',
        prompt: 'What does the DAX formula Revenue = Sales[Quantity] * Sales[Price] create?',
        options: ['A new table called Revenue', 'A calculated column, giving every row in the Sales table its own Revenue value', 'A chart titled Revenue', 'A filter on the Quantity column'],
        answerIndex: 1,
        explanation: 'This is a calculated column — a new column computed from existing ones, available afterward like any other field in the Fields pane.'
      },
      {
        id: 'q4',
        prompt: 'You have a column chart built and want to see the same fields as a line chart instead. What is the fastest way to do this?',
        options: ['Delete the visual and build a brand new line chart from scratch', 'Select the existing visual and click the line chart icon in the Visualizations pane — the same fields carry over automatically', 'Export the data and reimport it', 'This is not possible in Power BI'],
        answerIndex: 1,
        explanation: 'Changing a visual\'s type while it is selected keeps its assigned fields and just redraws them in the new chart type.'
      },
      {
        id: 'q5',
        prompt: 'For showing the rough split of revenue between just two categories (Beverage vs Snack), which visual fits best?',
        options: ['A line chart', 'A pie chart, since it is well suited to showing parts of a whole with a small number of categories', 'A Card', 'A Slicer'],
        answerIndex: 1,
        explanation: 'Pie charts work well for a small number of categories showing how a total splits into parts — exactly this scenario.'
      }
    ]
  },

  'pb-b-5': {
    title: 'Check your understanding: Slicers and filters',
    intro: 'Test your knowledge of making a report interactive.',
    questions: [
      {
        id: 'q1',
        prompt: 'What happens when a viewer clicks a city inside a Slicer on a report page?',
        options: ['Only the Slicer itself changes; nothing else on the page is affected', 'Every visual on the page that uses the same underlying table updates automatically to reflect that selection', 'The report needs to be republished for the change to show', 'It permanently deletes the data for other cities'],
        answerIndex: 1,
        explanation: 'Visuals on the same Power BI report page are connected by default — a Slicer selection filters all of them simultaneously, with no extra setup.'
      },
      {
        id: 'q2',
        prompt: 'What does changing a date Slicer\'s style to "Between" provide?',
        options: ['A single dropdown with one date', 'A from/to date range picker, letting the viewer narrow the report to a specific period', 'A button that resets all filters', 'A list of every unique product instead of dates'],
        answerIndex: 1,
        explanation: '"Between" style turns a date slicer into a range selector, useful for narrowing a report to a custom time window.'
      },
      {
        id: 'q3',
        prompt: 'What is the difference between a "Filters on this visual" and a "Filters on this page" entry in the Filters pane?',
        options: ['They are identical in every way', '"This visual" affects only the single selected chart; "This page" affects every visual on the current report page', '"This page" only works with Slicers, not charts', '"This visual" filters cannot be removed once applied'],
        answerIndex: 1,
        explanation: 'The Filters pane has three scopes — visual, page, and all pages — each affecting a progressively wider part of the report.'
      },
      {
        id: 'q4',
        prompt: 'When should you use a Slicer instead of a Filter (in the Filters pane)?',
        options: ['When the choice should be made once by the report builder and hidden from the viewer', 'When the viewer themselves should be able to make and change that choice visibly while using the report', 'Slicers and Filters are always interchangeable with no difference', 'Only when working with date columns'],
        answerIndex: 1,
        explanation: 'A Slicer is for viewer-facing, self-service choices; a Filter is for decisions the report builder locks in, typically invisible to the viewer.'
      },
      {
        id: 'q5',
        prompt: 'A report builder wants every page in the entire report to always exclude test/dummy transactions, regardless of what the viewer clicks. What is the right tool for this?',
        options: ['A Slicer set to "Between"', 'A filter applied at the "Filters on all pages" scope', 'Renaming the column', 'A Card visual'],
        answerIndex: 1,
        explanation: 'An "all pages" filter is the widest scope, ensuring the exclusion applies report-wide and cannot be accidentally removed by a viewer interacting with a Slicer.'
      }
    ]
  },

  'pb-b-6': {
    title: 'Check your understanding: Publishing to the Power BI Service',
    intro: 'Test your knowledge of sharing a finished report with others.',
    questions: [
      {
        id: 'q1',
        prompt: 'Why is a report still not useful to anyone else right after it is built in Power BI Desktop?',
        options: ['Desktop reports are always broken until refreshed', 'It only exists on the local computer where it was built — nobody else can open or view it until it is published somewhere they can access', 'Desktop reports expire after 24 hours', 'Charts cannot be saved in Desktop at all'],
        answerIndex: 1,
        explanation: 'Power BI Desktop is purely an authoring tool; the report has to be published to the Service before anyone else can view it.'
      },
      {
        id: 'q2',
        prompt: 'What is a workspace in the Power BI Service?',
        options: ['A folder on your local hard drive', 'A shared space (similar to a shared drive folder) where published reports live, which specific people can be given access to', 'A type of chart', 'A setting inside Power BI Desktop only'],
        answerIndex: 1,
        explanation: 'Workspaces organise published content and control who has access — "My workspace" is private by default; team workspaces are shared.'
      },
      {
        id: 'q3',
        prompt: 'What is the key difference between a Report and a Dashboard in the Power BI Service?',
        options: ['They are exactly the same thing with two different names', 'A Report is the full multi-page interactive document built in Desktop; a Dashboard is a single page assembled in the Service by pinning visuals, often from multiple reports', 'Dashboards can only show text, never charts', 'Reports cannot be shared, only Dashboards can'],
        answerIndex: 1,
        explanation: 'Reports are authored in Desktop with full interactivity; Dashboards are built afterward in the Service by combining pinned visuals into one summary view.'
      },
      {
        id: 'q4',
        prompt: 'What does Scheduled Refresh allow a published report to do?',
        options: ['Automatically change its chart colours daily', 'Automatically reload from the original data source on a schedule, so the published report reflects new data without manual republishing', 'Email a copy of itself to every employee', 'Convert itself from a Report into a Dashboard'],
        answerIndex: 1,
        explanation: 'Scheduled Refresh keeps a published report up to date by reloading from its source on a set schedule, rather than staying frozen at the moment it was published.'
      },
      {
        id: 'q5',
        prompt: 'You publish a report, but a chart looks outdated compared to your latest changes in Desktop. What is the most likely cause?',
        options: ['The Power BI Service is down', 'You published before saving your .pbix file in Desktop, so the Service received an older version', 'Dashboards always lag behind Reports by 24 hours', 'Publishing is broken and needs reinstalling'],
        answerIndex: 1,
        explanation: 'Publishing sends whatever is currently open in Desktop — saving (Ctrl+S) immediately before publishing ensures the latest changes are included.'
      }
    ]
  },

  'pb-i-1': {
    title: 'Check your understanding: Data modelling and relationships',
    intro: 'Test your knowledge of connecting multiple tables in the Power BI Data Model.',
    questions: [
      {
        id: 'q1',
        prompt: 'Why does splitting data into separate Sales, Items, and Cities tables become necessary as a business grows, instead of keeping one flat table?',
        options: ['Power BI cannot load more than one table otherwise', 'Repeating item and city details on every single sales row becomes a maintenance nightmare — updating one item\'s price would mean finding and fixing it everywhere it repeats', 'Flat tables are not supported by Power BI at all', 'It makes the file open faster regardless of size'],
        answerIndex: 1,
        explanation: 'Splitting facts (Sales) from descriptive lookup data (Items, Cities) avoids repeating and having to update the same information across thousands of rows.'
      },
      {
        id: 'q2',
        prompt: 'Which view in Power BI Desktop is used to build and review relationships between tables?',
        options: ['Report view', 'Data view', 'Model view', 'Power Query Editor'],
        answerIndex: 2,
        explanation: 'Model view shows every loaded table as a box, with relationship lines drawn between them.'
      },
      {
        id: 'q3',
        prompt: 'In the relationship between Sales and Items, which table is the "many" side?',
        options: ['Items, since it has fewer rows', 'Sales, since many sales rows can reference the same single item', 'Neither table is the "many" side', 'Both tables are equally the "many" side'],
        answerIndex: 1,
        explanation: 'Many transactions can reference the same product, making Sales the "many" side and Items the "one" side.'
      },
      {
        id: 'q4',
        prompt: 'What does the "Cross filter direction" setting of Single (the default) mean for a relationship?',
        options: ['Filtering Items filters Sales, but filtering Sales does not filter Items back', 'Filtering only works one time, then stops', 'Both tables filter each other in both directions automatically', 'It disables filtering between the two tables entirely'],
        answerIndex: 0,
        explanation: 'Single direction means the "one" side filters the "many" side, but not the reverse — the safe, predictable default for most relationships.'
      },
      {
        id: 'q5',
        prompt: 'Why should "Both" cross filter direction be used carefully rather than applied to every relationship "just in case"?',
        options: ['It is always slower with no other effect', 'It can introduce ambiguous filtering paths, causing visuals to behave unexpectedly when Power BI no longer has one clear path to follow', 'It only works with text columns', 'It permanently deletes one of the two tables'],
        answerIndex: 1,
        explanation: 'Setting every relationship to Both can create multiple valid filtering paths, leading to confusing or incorrect visual behaviour — Single should be the deliberate default.'
      }
    ]
  },

  'pb-i-2': {
    title: 'Check your understanding: DAX calculated columns vs measures',
    intro: 'Test your knowledge of the difference between static columns and dynamic measures.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does RELATED(Items[Price]) do inside a calculated column or measure on the Sales table?',
        options: ['Deletes unrelated rows from Items', 'Reaches across the relationship to fetch the matching Price value from the Items table, for the current row', 'Sorts the Items table by price', 'Converts Price into text'],
        answerIndex: 1,
        explanation: 'RELATED follows an existing relationship from the "many" side to fetch a value from the related "one" side, row by row.'
      },
      {
        id: 'q2',
        prompt: 'What is the core difference between a calculated column and a measure?',
        options: ['They are exactly the same, just named differently', 'A calculated column is computed once per row and stored permanently; a measure is computed fresh every time it is used, based on the current filter context', 'Measures cannot use the RELATED function', 'Calculated columns always update instantly with every click, but measures do not'],
        answerIndex: 1,
        explanation: 'A measure recalculates dynamically based on whatever Rows/Columns/Slicers/Filters are active; a calculated column is fixed once the model refreshes.'
      },
      {
        id: 'q3',
        prompt: 'What does CALCULATE([Total Revenue], Cities[City] = "Mumbai") produce?',
        options: ['A new table named Mumbai', 'Total Revenue recomputed, but forced to only consider rows where the related city is Mumbai', 'An error, since CALCULATE cannot take a condition', 'A permanent filter applied to the entire report'],
        answerIndex: 1,
        explanation: 'CALCULATE takes an existing measure and recomputes it under a modified filter — here, restricted to Mumbai regardless of other report filters.'
      },
      {
        id: 'q4',
        prompt: 'According to the practical rule of thumb from the lesson, when should you use a calculated column instead of a measure?',
        options: ['Whenever a chart needs any number at all', 'Only when you genuinely need a fixed, per-row value — such as one needed as input to other row-level logic, or to filter/sort by directly', 'Always, since columns are simpler to write', 'Never — measures should replace every calculated column'],
        answerIndex: 1,
        explanation: 'Most chart and Card calculations should be measures (dynamic); calculated columns are reserved for cases needing a fixed, stored per-row value.'
      },
      {
        id: 'q5',
        prompt: 'What does New Quick Measure provide?',
        options: ['A way to permanently delete existing measures', 'A dialog of common calculation templates (like running total or percentage of grand total) that writes correct DAX for you automatically', 'A shortcut to publish the report instantly', 'A tool exclusively for renaming tables'],
        answerIndex: 1,
        explanation: 'Quick Measures generate working DAX from a template, useful both as a time-saver and as a way to learn correct DAX patterns by reading the generated formula.'
      }
    ]
  },

  'pb-i-3': {
    title: 'Check your understanding: Time intelligence functions',
    intro: 'Test your knowledge of calendar-aware DAX calculations.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is required before time intelligence functions like TOTALYTD will work correctly?',
        options: ['A published report in the Service', 'A continuous date column, ideally marked as a Date Table (or a dedicated Calendar table)', 'At least one Row-Level Security role', 'A mobile layout for every page'],
        answerIndex: 1,
        explanation: 'Time intelligence functions rely on a properly recognised, continuous date column to calculate periods correctly.'
      },
      {
        id: 'q2',
        prompt: 'What does TOTALYTD([Total Revenue], Sales[Date]) calculate when shown in a chart broken down by month?',
        options: ['The revenue for that single month only', 'The cumulative total from January through the end of that month', 'Next year\'s projected revenue', 'The average revenue across the year'],
        answerIndex: 1,
        explanation: 'TOTALYTD accumulates a measure from the start of the year up to the current filter context, giving a running year-to-date total.'
      },
      {
        id: 'q3',
        prompt: 'What does SAMEPERIODLASTYEAR(Sales[Date]) do when used inside a CALCULATE?',
        options: ['Deletes last year\'s data permanently', 'Shifts the current date filter back exactly one year, so the measure reflects the equivalent period 12 months earlier', 'Predicts next year\'s sales using AI', 'Converts the Date column into text'],
        answerIndex: 1,
        explanation: 'SAMEPERIODLASTYEAR shifts the filter context back a year, enabling direct year-over-year comparison.'
      },
      {
        id: 'q4',
        prompt: 'How does DATEADD(Sales[Date], -1, MONTH) differ from SAMEPERIODLASTYEAR?',
        options: ['They are completely unrelated functions', 'DATEADD is a more flexible building block — it can shift by any amount (day, month, quarter, year), while SAMEPERIODLASTYEAR is really a convenient shortcut specifically for shifting back one year', 'DATEADD only works with whole numbers, not dates', 'SAMEPERIODLASTYEAR works on any column, not just dates'],
        answerIndex: 1,
        explanation: 'SAMEPERIODLASTYEAR is essentially DATEADD(..., -1, YEAR) — DATEADD is the more general-purpose tool underneath it.'
      },
      {
        id: 'q5',
        prompt: 'Why is "we sold X today, 12% more than the same day last month" a more useful statement than just "we sold X today" for a growing business?',
        options: ['It uses bigger numbers, which always looks more impressive', 'A comparison against a calendar-aware baseline gives genuine context to a raw number, which time intelligence measures make possible directly inside a report', 'It is not actually more useful, just longer', 'It removes the need for any visuals at all'],
        answerIndex: 1,
        explanation: 'Raw numbers without context are weak signals; time intelligence measures provide the comparative context that makes a number meaningful.'
      }
    ]
  },

  'pb-i-4': {
    title: 'Check your understanding: Drill-through and bookmarks',
    intro: 'Test your knowledge of navigable, stateful report interactivity.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does setting up a drill-through page let a viewer do?',
        options: ['Edit the underlying DAX measures directly from the report', 'Right-click a specific data point on a summary page and jump to a dedicated detail page, automatically filtered to that exact selection', 'Permanently delete a data point from the model', 'Convert any chart into a table instantly'],
        answerIndex: 1,
        explanation: 'Drill-through carries the clicked value as a filter onto a separate detail page built specifically for deeper exploration of that selection.'
      },
      {
        id: 'q2',
        prompt: 'What is placed in the "Drill-through" well in the Filters pane to set this up?',
        options: ['A measure', 'The field that the detail page should be filtered by when a viewer drills through (e.g., City)', 'A chart visual', 'A bookmark name'],
        answerIndex: 1,
        explanation: 'Dragging a field like City into the Drill-through well configures that page to receive and filter by whatever value was clicked.'
      },
      {
        id: 'q3',
        prompt: 'Why might drill-through be preferred over simply adding a City Slicer to a summary page?',
        options: ['Slicers are not supported in Power BI', 'Drill-through keeps the summary page focused and uncluttered, while still making detailed exploration available one right-click away when actually needed', 'Drill-through is always faster to compute than a Slicer', 'They achieve completely different, unrelated goals'],
        answerIndex: 1,
        explanation: 'A summary page stays clean without detail-only visuals or slicers, while drill-through still offers a path to deeper exploration on demand.'
      },
      {
        id: 'q4',
        prompt: 'What does a Bookmark capture when created via View → Bookmarks → Add Bookmark?',
        options: ['Only the report\'s file size', 'The current state of a page — including slicer selections, applied filters, and which visuals are visible', 'A static screenshot image only, with no underlying data', 'A copy of the entire underlying dataset'],
        answerIndex: 1,
        explanation: 'A bookmark remembers the live report state (filters, slicers, visibility), which can be restored later with one click.'
      },
      {
        id: 'q5',
        prompt: 'How do you make a button on the report canvas jump to a specific bookmark when clicked?',
        options: ['Buttons cannot be linked to bookmarks in Power BI', 'Select the button, open the Format pane → Action, turn Action on, set Type to Bookmark, and choose the target bookmark', 'Rename the button to match the bookmark\'s name exactly', 'Buttons automatically link to the most recently created bookmark'],
        answerIndex: 1,
        explanation: 'The Format pane\'s Action setting is what connects a button to a specific bookmark (or other navigation target) when clicked.'
      }
    ]
  },

  'pb-i-5': {
    title: 'Check your understanding: Row-level security',
    intro: 'Test your knowledge of restricting which data different viewers can see in the same report.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the purpose of Row-Level Security (RLS)?',
        options: ['To prevent the report from ever being edited again', 'To restrict which rows of data a given viewer can see, within the very same published report everyone else uses', 'To speed up how quickly a report loads', 'To control which chart types are available'],
        answerIndex: 1,
        explanation: 'RLS lets one single published report show different, correctly restricted data depending on who is viewing it.'
      },
      {
        id: 'q2',
        prompt: 'A role is created with the DAX filter [City] = "Mumbai" applied to the Cities table. Why does this also restrict the much larger Sales table?',
        options: ['It does not — Sales remains fully visible regardless', 'Because Cities is related to Sales, the filter cascades through the relationship and restricts Sales automatically wherever the relationship reaches', 'Power BI applies every role to every table automatically, regardless of relationships', 'The filter must be manually copied onto Sales as well'],
        answerIndex: 1,
        explanation: 'A relationship lets a filter on a small lookup table (Cities) automatically restrict the related fact table (Sales) too, without writing a separate rule against Sales directly.'
      },
      {
        id: 'q3',
        prompt: 'What is the purpose of Modeling → View As when working with RLS roles?',
        options: ['It permanently applies the role to every future viewer', 'It lets you preview the report exactly as a specific role would see it, before publishing — the key habit for verifying a role works correctly', 'It deletes the role being tested', 'It only works after the report has already been published'],
        answerIndex: 1,
        explanation: 'View As is how you confirm a role\'s filter actually restricts the report as intended, catching mistakes before anyone else sees a wrong report.'
      },
      {
        id: 'q4',
        prompt: 'Why does a dynamic role using USERPRINCIPALNAME() scale better than writing one static role per city?',
        options: ['It does not scale better — they are equivalent in every way', 'A single dynamic role automatically restricts every manager based on who is actually logged in, instead of needing a separately hand-written role for every new city added', 'USERPRINCIPALNAME() only works for a maximum of 3 users', 'Dynamic roles do not require any DAX at all'],
        answerIndex: 1,
        explanation: 'One dynamic rule comparing the logged-in user\'s email against a data column replaces having to write and maintain a new static role every time the business adds a location.'
      },
      {
        id: 'q5',
        prompt: 'When does Row-Level Security become fully enforced for real users?',
        options: ['Immediately when the role is created in Desktop, even unpublished', 'After publishing, once users are assigned to the appropriate role in the dataset\'s Security settings in the Power BI Service', 'Only after the report is downloaded as a PDF', 'RLS only works for the report\'s original author'],
        answerIndex: 1,
        explanation: 'Roles must be created in Desktop, but actual enforcement for real users requires publishing and then assigning specific user accounts to each role in the Service.'
      }
    ]
  },

  'pb-a-1': {
    title: 'Check your understanding: Advanced DAX patterns',
    intro: 'Test your knowledge of variables, ranking, and filter-context functions in DAX.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the main benefit of using VAR and RETURN in a measure?',
        options: ['It is required syntax for every DAX measure', 'It computes a sub-expression once, stores it under a name, and reuses it — improving both readability and often performance compared to repeating the same expression', 'It permanently saves the result to the data model as a new column', 'It disables filter context for the whole measure'],
        answerIndex: 1,
        explanation: 'VAR/RETURN avoids recalculating the same sub-expression multiple times and makes complex measures much easier to read and debug.'
      },
      {
        id: 'q2',
        prompt: 'What does RANKX(ALL(Cities[City]), [Total Revenue]) calculate?',
        options: ['The total revenue across all cities combined', 'Each city\'s rank compared to every other city\'s Total Revenue, ignoring whatever filter the report itself might currently have applied to City', 'A random ranking with no relation to revenue', 'The number of cities in the table'],
        answerIndex: 1,
        explanation: 'ALL(Cities[City]) removes any existing filter on City so every city is compared against every other one when ranking.'
      },
      {
        id: 'q3',
        prompt: 'What is the key difference between ALL and ALLSELECTED?',
        options: ['They are interchangeable with no difference', 'ALL ignores every filter on a column everywhere, including report-level slicers; ALLSELECTED respects filters from outside the visual (like a slicer) but ignores filters from within the visual\'s own context', 'ALLSELECTED only works with numeric columns', 'ALL only works inside RANKX, never elsewhere'],
        answerIndex: 1,
        explanation: 'This distinction is critical for percentage-of-total measures that should respect a slicer\'s narrowing but still compute correctly within a table\'s row context.'
      },
      {
        id: 'q4',
        prompt: 'Why might a "percentage of total" measure built with ALL instead of ALLSELECTED look wrong once a viewer applies a slicer?',
        options: ['ALL always causes a DAX error', 'ALL ignores the slicer entirely, so percentages would be calculated against the full unfiltered dataset rather than just the slicer-narrowed selection, often no longer summing to 100% the way the viewer expects', 'ALLSELECTED cannot be used with slicers at all', 'Slicers disable all measures automatically'],
        answerIndex: 1,
        explanation: 'ALL ignores the slicer\'s filter too, which can make a percentage breakdown look inconsistent with what the viewer has actually selected.'
      },
      {
        id: 'q5',
        prompt: 'What does a What-If Parameter (e.g., a Discount % slider) let a viewer do?',
        options: ['Permanently edit the underlying source data', 'Interactively explore a scenario (like "what would a 10% discount do to revenue") with every visual recalculating live, without touching the actual data', 'Change which workspace the report is published to', 'Add new rows to the Sales table'],
        answerIndex: 1,
        explanation: 'A what-if parameter generates a small table and measure that a viewer can adjust live, letting measures reference it for interactive scenario analysis.'
      }
    ]
  },

  'pb-a-2': {
    title: 'Check your understanding: Performance tuning',
    intro: 'Test your knowledge of diagnosing and fixing a slow Power BI report.',
    questions: [
      {
        id: 'q1',
        prompt: 'What should you do before attempting to optimise a slow-feeling report?',
        options: ['Immediately delete the most complex-looking visual', 'Use Performance Analyzer to measure exactly which visual is actually slow and why, rather than guessing', 'Switch the entire model to DirectQuery without further investigation', 'Republish the report and hope it improves'],
        answerIndex: 1,
        explanation: 'Performance Analyzer gives an actual measured breakdown per visual, often revealing the real bottleneck is not the visual you would have guessed.'
      },
      {
        id: 'q2',
        prompt: 'What is the key tradeoff between Import and DirectQuery storage modes?',
        options: ['There is no real difference between them', 'Import copies data into Power BI\'s fast in-memory engine but is only as fresh as the last refresh; DirectQuery stays live but every interaction depends on the speed of the underlying source database', 'DirectQuery is always faster than Import', 'Import cannot be used with relationships'],
        answerIndex: 1,
        explanation: 'Import trades real-time freshness for speed; DirectQuery trades speed for always-current data, since it queries the source live.'
      },
      {
        id: 'q3',
        prompt: 'Why is a column with extremely high cardinality (like a precise per-second timestamp) often a performance concern?',
        options: ['High-cardinality columns cannot be loaded into Power BI at all', 'A column where nearly every row has a distinct value compresses poorly in Power BI\'s in-memory engine, making the model larger and slower than necessary', 'It has no real performance impact, only a visual one', 'It only affects DirectQuery models, never Import'],
        answerIndex: 1,
        explanation: 'The VertiPaq engine compresses repeated values efficiently; columns with mostly unique values compress far less effectively, increasing model size.'
      },
      {
        id: 'q4',
        prompt: 'Why is "Both" cross filter direction a performance consideration as well as a modelling one?',
        options: ['It has no performance impact whatsoever', 'It gives the engine more possible filtering paths to evaluate, adding real computational cost on top of the ambiguity risk covered in the Intermediate track', 'It only affects how visuals look, not how fast they load', 'It disables the relationship entirely'],
        answerIndex: 1,
        explanation: 'Bidirectional relationships increase the complexity the engine must resolve when evaluating filters, which can measurably slow down a report.'
      },
      {
        id: 'q5',
        prompt: 'What is the purpose of an Aggregation table at very large data scale?',
        options: ['To permanently delete the detailed underlying data', 'To provide a pre-summarised, much smaller version of the data that Power BI automatically uses for high-level visuals, only using the full detail when a viewer drills into specifics', 'To replace the need for any relationships', 'To convert DirectQuery models into Import models automatically'],
        answerIndex: 1,
        explanation: 'Aggregations let high-level visuals query a small summarised table instead of scanning the full detailed dataset every time, improving performance at huge scale.'
      }
    ]
  },

  'pb-a-3': {
    title: 'Check your understanding: Custom visuals with R and Python',
    intro: 'Test your knowledge of extending Power BI beyond its built-in chart types.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is AppSource, in the context of Power BI?',
        options: ['A built-in chart type', 'A marketplace of community and Microsoft-built custom visuals, installable with one click and then usable like any built-in chart type', 'A Power BI security setting', 'A way to publish reports to the Service'],
        answerIndex: 1,
        explanation: 'AppSource hosts pre-built custom visuals (box plots, Sankey diagrams, and more) that extend Power BI\'s standard visual library.'
      },
      {
        id: 'q2',
        prompt: 'Why should you check a custom visual\'s publisher and certification status before relying on it in a business report?',
        options: ['Certification has no practical meaning', 'Microsoft-certified visuals have passed a security and performance review; many community visuals have not, which matters more in a business setting than personal learning', 'Uncertified visuals are always free, certified ones always cost money', 'Certification only affects how the visual looks, not how it behaves'],
        answerIndex: 1,
        explanation: 'Certification signals a level of review that uncertified community visuals may not have undergone, a real consideration for business use.'
      },
      {
        id: 'q3',
        prompt: 'When you drag fields onto a Python visual in Power BI, what does Power BI provide to your script?',
        options: ['Nothing — fields must be loaded manually inside the script', 'A dataframe (commonly named \'dataset\') containing exactly the dragged fields, ready to use in your Python code', 'A direct connection to the original source database', 'An empty file with no data at all'],
        answerIndex: 1,
        explanation: 'Power BI automatically passes the dragged fields into the script as a dataframe, which the Python (or R) code then uses to produce a plot.'
      },
      {
        id: 'q4',
        prompt: 'What is a genuine limitation of R and Python visuals compared to native Power BI visuals?',
        options: ['They cannot use any data at all', 'They render as static images and do not support native interactivity like cross-filtering other visuals when clicked', 'They are not allowed to be published to the Service under any circumstances', 'They only work with text data, never numbers'],
        answerIndex: 1,
        explanation: 'Unlike native visuals, R/Python script visuals are static outputs — a viewer cannot click them to cross-filter the rest of the report.'
      },
      {
        id: 'q5',
        prompt: 'According to the lesson, when should a Python or R visual be the first choice over a native or AppSource visual?',
        options: ['Always, since they offer the most flexibility', 'Only when a genuinely specific statistical chart is required and no native or AppSource visual covers it, given the loss of native interactivity', 'Never, they should not be used at all', 'Only on mobile layouts'],
        answerIndex: 1,
        explanation: 'The interactivity cost of script visuals means they are a deliberate, narrow-use tool, not a default first choice for charting.'
      }
    ]
  },

  'pb-a-4': {
    title: 'Check your understanding: Embedded analytics',
    intro: 'Test your knowledge of putting Power BI reports inside other applications.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the key difference between "embed for your organisation" and "embed for your customers" (App Owns Data)?',
        options: ['There is no real difference between them', '"For your organisation" is for viewers who already have their own Power BI account; "for your customers" is for external viewers with no Power BI account at all, authenticated entirely by the host application', 'Embedding for customers is always free, embedding for an organisation always costs extra', '"For your customers" only works with Excel files, not Power BI reports'],
        answerIndex: 1,
        explanation: 'App Owns Data lets external users view embedded reports without ever needing their own Power BI license or login.'
      },
      {
        id: 'q2',
        prompt: 'In the "embed for your customers" flow, who actually authenticates to Power BI to get an embed token?',
        options: ['Each individual external viewer, using their own personal Power BI login', 'The host application\'s own backend, using a dedicated service identity, on behalf of the viewer', 'No authentication is required at any point', 'The viewer\'s web browser directly, with no backend involved'],
        answerIndex: 1,
        explanation: 'The portal\'s backend authenticates and requests a scoped embed token; the external viewer never logs into Power BI themselves.'
      },
      {
        id: 'q3',
        prompt: 'Why is Row-Level Security described as essential, not optional, for safely embedding a report for external customers?',
        options: ['RLS is unrelated to embedding entirely', 'Without RLS, an embed token for "the report" would show the same unrestricted data to every external viewer; combined with RLS, each viewer sees only their own data', 'RLS only matters for internal Power BI Service users, never embedded ones', 'RLS slows down embedded reports too much to be practical'],
        answerIndex: 1,
        explanation: 'RLS is what makes a single embedded report safe to show to many different external parties, each restricted to their own data.'
      },
      {
        id: 'q4',
        prompt: 'What is the Power BI REST API primarily used for?',
        options: ['Designing the visual layout of a report by hand', 'Programmatic operations like generating embed tokens, triggering dataset refreshes, or managing workspace users, typically called from a backend application', 'Replacing Power BI Desktop entirely', 'Only for billing and invoicing purposes'],
        answerIndex: 1,
        explanation: 'The REST API is the standard way external code (like a partner portal\'s backend) interacts with Power BI programmatically.'
      },
      {
        id: 'q5',
        prompt: 'What licensing reality applies to embedding reports for external customers at real scale?',
        options: ['It is automatically included free with any Power BI Pro license', 'It requires a dedicated Power BI Embedded capacity or existing Premium capacity, billed separately from standard per-user Pro licensing', 'Only Power BI Desktop is needed, with no other cost', 'Embedding for customers is technically impossible in Power BI'],
        answerIndex: 1,
        explanation: 'Embedding for customers is a genuine capacity-based cost and architecture decision, distinct from standard Pro per-user licensing.'
      }
    ]
  },

  'pb-a-5': {
    title: 'Check your understanding: Workspace governance',
    intro: 'Test your knowledge of managing Power BI at an organisational scale.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the difference between the Member and Viewer workspace roles?',
        options: ['They have identical permissions', 'Member can edit and publish content and share it onward; Viewer can only view already-published content with no editing rights', 'Viewer has more permissions than Member', 'Member can only view content, never edit it'],
        answerIndex: 1,
        explanation: 'Workspace roles range from full control (Admin) down to view-only (Viewer), with Member and Contributor offering different levels of editing and sharing ability in between.'
      },
      {
        id: 'q2',
        prompt: 'What is the purpose of a Dev → Test → Production deployment pipeline?',
        options: ['To make every report load faster automatically', 'To ensure in-progress or unverified changes are reviewed in earlier stages before being promoted to Production, where real business users see them', 'To permanently lock a report from ever being edited again', 'To automatically translate a report into multiple languages'],
        answerIndex: 1,
        explanation: 'Deployment pipelines mirror standard software development discipline, applied to BI content, preventing half-finished changes from reaching real users.'
      },
      {
        id: 'q3',
        prompt: 'What problem does a shared, certified dataset solve?',
        options: ['It makes reports load in a different colour scheme', 'It prevents multiple analysts from each redefining the same measure (like Total Revenue) slightly differently across separate reports, which would otherwise produce inconsistent numbers', 'It is required before any report can be published at all', 'It automatically translates DAX into SQL'],
        answerIndex: 1,
        explanation: 'A single shared dataset with certified measures ensures everyone builds reports against the same trusted definitions, avoiding inconsistent numbers.'
      },
      {
        id: 'q4',
        prompt: 'What do sensitivity labels address that workspace roles do not?',
        options: ['Exactly the same thing as workspace roles, with a different name', 'How sensitive the content is and what handling rules (like export or external-sharing restrictions) should automatically follow it, rather than just who is allowed in', 'Which chart types are allowed in a report', 'How often a dataset refreshes'],
        answerIndex: 1,
        explanation: 'Sensitivity labels classify data sensitivity and apply handling policies, a different concern from the access-control question workspace roles answer.'
      },
      {
        id: 'q5',
        prompt: 'What is managed through the Power BI Admin Portal that is distinct from any single workspace\'s settings?',
        options: ['Only that one workspace\'s visuals', 'Tenant-wide settings — like whether publishing to the web is allowed, who can create workspaces, and organisation-wide usage metrics', 'Individual users\' personal desktop wallpaper', 'The colour theme of one specific report'],
        answerIndex: 1,
        explanation: 'The Admin Portal is for organisation-wide governance settings, managed by a tenant-level Power BI administrator, not a per-workspace setting.'
      }
    ]
  },

  // Tableau
  'tb-b-1': {
    title: 'Check your understanding: Tableau Basics',
    intro: 'Test your knowledge of Tableau dimensions and measures.',
    questions: [
      {
        id: 'q1',
        prompt: 'How does Tableau differ fundamentally from Excel when it comes to visualizations?',
        options: ['Tableau requires you to code all charts manually', 'In Tableau, dragging and dropping fields automatically generates the most appropriate chart, whereas Excel requires you to manually setup charts after organizing data', 'Tableau can only create pie charts', 'Tableau visualizations cannot be shared'],
        answerIndex: 1,
        explanation: 'Tableau was designed specifically for drag-and-drop visual exploration, automatically recommending charts based on the data types you select.'
      },
      {
        id: 'q2',
        prompt: 'In Tableau terminology, what is a "Measure"?',
        options: ['A numerical field that can be aggregated or used in math (e.g., Sales, Profit)', 'A category you group data by (e.g., Region, Segment)', 'The size of your dashboard canvas', 'A ruler tool used to align charts'],
        answerIndex: 0,
        explanation: 'Measures contain quantitative, numerical values that Tableau will sum or average when you drag them into a view.'
      },
      {
        id: 'q3',
        prompt: 'In Tableau terminology, what is a "Dimension"?',
        options: ['A 3D chart effect', 'A qualitative field used to categorize, segment, or slice your data (e.g., Country, Product Category)', 'A numerical calculation', 'The amount of data you are allowed to import'],
        answerIndex: 1,
        explanation: 'Dimensions provide the context for your measures. "Sales" is a measure; "Sales by Country" uses Country as the dimension to split the measure.'
      },
      {
        id: 'q4',
        prompt: 'What is the main catch of using "Tableau Public"?',
        options: ['It only lasts for 7 days', 'It randomly deletes your work', 'It is completely free, but any dashboard you save is publicly visible on the internet', 'It limits you to 10 rows of data'],
        answerIndex: 2,
        explanation: 'Tableau Public is a fantastic free learning tool, but it lacks privacy. You should never use it for sensitive company data.'
      },
      {
        id: 'q5',
        prompt: 'If you want to view total revenue broken down by month, which field is the Dimension and which is the Measure?',
        options: ['Both are Measures', 'Both are Dimensions', 'Month is the Measure, Revenue is the Dimension', 'Month is the Dimension, Revenue is the Measure'],
        answerIndex: 3,
        explanation: 'Revenue is the number being aggregated (Measure). Month is the category slicing that number (Dimension).'
      }
    ]
  },

  'tb-b-2': {
    title: 'Check your understanding: Installing Tableau Public and loading data',
    intro: 'Test your knowledge of connecting Tableau to real data.',
    questions: [
      {
        id: 'q1',
        prompt: 'Why is "Sample Superstore" used as the dataset throughout this Tableau track?',
        options: ['It is the only dataset Tableau can open', 'It is the same dataset Tableau itself ships with for teaching, so skills practised on it transfer directly to countless real tutorials and sample workbooks', 'It contains no numeric data, only text', 'It is required for Tableau Public accounts specifically'],
        answerIndex: 1,
        explanation: 'Sample Superstore is Tableau\'s own long-standing teaching dataset, making it the most transferable choice for a beginner to practise on.'
      },
      {
        id: 'q2',
        prompt: 'What does the Data Source page show right after connecting to a file?',
        options: ['A list of every Tableau Public profile', 'A preview of the full table, with each column\'s detected data type shown by an icon above it', 'The finished dashboard', 'A billing summary'],
        answerIndex: 1,
        explanation: 'The Data Source page lets you confirm column types are correct before building any charts, the same habit emphasised in the Excel and Power BI tracks.'
      },
      {
        id: 'q3',
        prompt: 'A simple test for telling Dimensions and Measures apart: a question starting with "how much" or "how many" usually points to which one?',
        options: ['Dimension', 'Measure', 'Neither — that distinction does not apply to numeric questions', 'It depends only on the field\'s colour'],
        answerIndex: 1,
        explanation: '"How much Sales" or "how many units" are aggregation questions, which is exactly what a Measure represents.'
      },
      {
        id: 'q4',
        prompt: 'A numeric Order ID column is automatically treated as a Measure by Tableau. Why might you manually move it to Dimensions instead?',
        options: ['Order ID cannot be displayed in Tableau at all', 'An ID-like numeric field should usually be grouped/categorised rather than summed or averaged, which is what a Dimension is for', 'Dimensions load faster than Measures in every case', 'Tableau requires all numeric fields to be Dimensions'],
        answerIndex: 1,
        explanation: 'Numeric ID-like fields are the classic exception to "numbers are Measures" — you would never want to SUM an Order ID.'
      },
      {
        id: 'q5',
        prompt: 'What is the key difference between a Live connection and an Extract?',
        options: ['They are identical in every way', 'Live queries the original source every interaction (always current, but as fast as the source); Extract copies a compressed snapshot into Tableau\'s fast internal engine (faster, but needs explicit refreshing)', 'Extract only works with CSV files', 'Live connections cannot be used with Tableau Public'],
        answerIndex: 1,
        explanation: 'This is conceptually the same Import vs DirectQuery tradeoff covered in the Power BI track, under different names.'
      }
    ]
  },

  'tb-b-3': {
    title: 'Check your understanding: Your first chart in 5 minutes',
    intro: 'Test your knowledge of building charts by dragging fields onto shelves.',
    questions: [
      {
        id: 'q1',
        prompt: 'You drag Category onto Columns and Sales onto Rows. What does Tableau do?',
        options: ['Nothing happens until a chart type is manually selected', 'It automatically draws a bar chart, with one bar per category, sized by total Sales — chosen automatically based on what was dragged where', 'It throws an error, since two fields cannot be combined this way', 'It only shows the first row of data'],
        answerIndex: 1,
        explanation: 'Tableau infers an appropriate chart type from the fields placed on the shelves, rather than requiring a chart type to be chosen first.'
      },
      {
        id: 'q2',
        prompt: 'What does the "Show Me" panel do?',
        options: ['Permanently locks the current chart type', 'Highlights every chart type compatible with your currently selected fields, letting you switch to an alternative visualisation instantly', 'Publishes the workbook to Tableau Public', 'Deletes unused fields from the dataset'],
        answerIndex: 1,
        explanation: 'Show Me suggests valid alternative chart types for the fields currently in use, greying out ones that would not fit.'
      },
      {
        id: 'q3',
        prompt: 'Right-clicking SUM(Sales) on the Rows shelf and switching it to Average changes what, exactly?',
        options: ['It deletes the Sales field entirely', 'It changes the aggregation shown — from total Sales per category to average Sales per category — answering a different business question from the same data', 'It converts Sales into a Dimension', 'It has no visible effect on the chart'],
        answerIndex: 1,
        explanation: 'Switching aggregation type changes what number each bar represents, without needing to rebuild the chart from scratch.'
      },
      {
        id: 'q4',
        prompt: 'Dragging Profit onto the "Color" box in the Marks card does what to an existing Sales-by-Category bar chart?',
        options: ['It removes the Sales data from the chart', 'It shades each bar according to its Profit value, layering a second insight onto the same chart without building a separate one', 'It deletes the Profit field from the dataset', 'It converts the bar chart into a map'],
        answerIndex: 1,
        explanation: 'The Marks card lets you encode an additional Measure visually (via colour, size, or label) directly onto an existing chart.'
      },
      {
        id: 'q5',
        prompt: 'Why does dragging State directly onto the canvas automatically produce a map, with no chart type chosen manually?',
        options: ['It does not — a map must always be built manually', 'Tableau recognises "State" as a geographic field and automatically generates a map, one of its most distinctive beginner-friendly features', 'Maps require a separate paid Tableau license', 'Geographic fields must first be converted to numbers'],
        answerIndex: 1,
        explanation: 'Tableau\'s built-in geographic role recognition is what allows fields like State, City, or Country to instantly become map visuals.'
      }
    ]
  },

  'tb-b-4': {
    title: 'Check your understanding: Filters and groups',
    intro: 'Test your knowledge of narrowing and combining data within a sheet.',
    questions: [
      {
        id: 'q1',
        prompt: 'What happens when you drag Profit onto the Filters shelf and set a range of "less than 0"?',
        options: ['It deletes every loss-making order from the underlying data', 'The current sheet recalculates to show only orders where Profit is negative, instantly surfacing loss-making orders', 'It converts Profit into a Dimension', 'Nothing visible changes until the workbook is published'],
        answerIndex: 1,
        explanation: 'A Filters shelf entry restricts what the sheet displays and recalculates from, without altering the underlying source data.'
      },
      {
        id: 'q2',
        prompt: 'What is the key difference between a filter set directly on the Filters shelf and a "Quick Filter" (Show Filter)?',
        options: ['They behave identically in every way', 'A plain Filters shelf entry is fixed and invisible to the viewer; a Quick Filter adds a visible, interactive control the viewer can change themselves', 'Quick Filters only work with numeric fields', 'Plain filters can only be applied to dates'],
        answerIndex: 1,
        explanation: 'This mirrors the Filter-vs-Slicer distinction from the Power BI track — one is builder-controlled and fixed, the other is viewer-facing and interactive.'
      },
      {
        id: 'q3',
        prompt: 'What does a "Relative Date" filter (like "last 3 months") do that a fixed date range filter does not?',
        options: ['It permanently deletes older data', 'It automatically updates as time passes, useful for a dashboard meant to be reused indefinitely without manual adjustment', 'It only works with Tableau Public, not Desktop', 'It disables all other filters on the sheet'],
        answerIndex: 1,
        explanation: 'A relative date filter recalculates its window automatically going forward, unlike a fixed range that would need manual updating.'
      },
      {
        id: 'q4',
        prompt: 'What does creating a Group from several Sub-Category values (like combining "Chairs" and "Bookcases") achieve?',
        options: ['It permanently deletes the original sub-category values from the dataset', 'It creates a new combined field treating the selected values as one single category, without changing the underlying source data', 'It converts the field into a Measure', 'It automatically builds a dashboard'],
        answerIndex: 1,
        explanation: 'Groups let an analyst define a custom level of detail for a specific audience, layered on top of the original data rather than replacing it.'
      },
      {
        id: 'q5',
        prompt: 'A retail analyst wants to find which specific product lines are losing money. What is the most direct way to do this with the tools from this lesson?',
        options: ['Manually scroll through every row of raw data', 'Filter to Profit < 0, then break the filtered view down by Sub-Category', 'Delete all rows with positive Profit from the source file', 'Rename every Sub-Category field'],
        answerIndex: 1,
        explanation: 'Combining a Measure filter (Profit < 0) with a Dimension breakdown (Sub-Category) directly answers "which specific things are the problem," rather than requiring manual inspection.'
      }
    ]
  },

  // Tableau Advanced
  'tb-a-1': {
    title: 'Check your understanding: Advanced LOD patterns',
    intro: 'Test your knowledge of nested LODs, cohort analysis, and advanced aggregation.',
    questions: [
      {
        id: 'q1',
        prompt: 'In a cohort retention analysis, what does the calculated field { FIXED [Customer ID] : MIN(DATETRUNC("month", [Order Date])) } represent?',
        options: ['The average order month across all customers', 'The first (earliest) calendar month in which each customer placed an order — their acquisition cohort', 'The most recent order month per customer', 'The total number of months a customer has been active'],
        answerIndex: 1,
        explanation: 'MIN with DATETRUNC("month") truncates all order dates to the start of their month, then takes the earliest — giving you the month the customer first appeared.'
      },
      {
        id: 'q2',
        prompt: 'What does "Cohort Age" (DATEDIFF("month", [First Order Month], DATETRUNC("month", [Order Date]))) equal for a customer\'s very first order?',
        options: ['1 — the first month is counted as month 1', '0 — the distance from the first order month to itself is zero', '-1 — representing the month before acquisition', 'It varies by customer'],
        answerIndex: 1,
        explanation: 'DATEDIFF from a date to itself is always 0. Cohort Age 0 means "the acquisition month" — every customer appears in their own cohort at age 0.'
      },
      {
        id: 'q3',
        prompt: 'You want to compute "% of grand total" where the denominator is the true dataset total — completely unaffected by any quick filter the user applies. Which formula is correct?',
        options: ['SUM([Sales]) / TOTAL(SUM([Sales]))', 'SUM([Sales]) / { FIXED : SUM([Sales]) }', 'WINDOW_SUM(SUM([Sales]), FIRST(), LAST())', 'SUM([Sales]) / AVG([Sales])'],
        answerIndex: 1,
        explanation: 'An empty FIXED collapses to the full dataset total. Regular filters do not affect FIXED (unless promoted to Context Filters), making it the correct denominator for a view-independent % of total.'
      },
      {
        id: 'q4',
        prompt: 'What does a "nested LOD" mean in practice?',
        options: ['A LOD expression placed inside a table calculation', 'One LOD whose output is referenced as the input to another LOD — such as computing per-customer totals first, then ranking those totals', 'A LOD expression applied to more than three dimensions simultaneously', 'LODs cannot be nested — this is not a valid Tableau pattern'],
        answerIndex: 1,
        explanation: 'Nested LODs compose — e.g., Customer Revenue = { FIXED [Customer ID] : SUM([Sales]) } is then used inside RANK_UNIQUE([Customer Revenue]) to rank customers by their individual total.'
      },
      {
        id: 'q5',
        prompt: 'In a cohort retention table, LOOKUP(COUNTD([Customer ID]), FIRST()) is used as the denominator for Retention %. What does FIRST() do here?',
        options: ['Returns the value from the very last column in the table', 'Fetches the value from the first column of the current row — the cohort\'s starting customer count at Age 0', 'Returns the first row of the entire table regardless of partitioning', 'Counts the first occurrence of each Customer ID'],
        answerIndex: 1,
        explanation: 'LOOKUP(expression, FIRST()) retrieves the value from the position FIRST() rows away — which is the first column in the current partition (the acquisition month column, Age 0). That gives you the cohort\'s starting size for the denominator.'
      }
    ]
  },

  'tb-a-2': {
    title: 'Check your understanding: Advanced table calculations',
    intro: 'Test your knowledge of WINDOW functions, LOOKUP, INDEX, and partitioning.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does WINDOW_AVG(SUM([Sales]), -2, 0) compute on a monthly bar chart?',
        options: ['The total sales over all time', 'A 3-month moving average: the average of the current month and the two months before it', 'The average sales for the next 2 months', 'The running total of sales from the start of the chart'],
        answerIndex: 1,
        explanation: '-2 = two rows before the current row; 0 = the current row. WINDOW_AVG across those three positions = 3-month moving average.'
      },
      {
        id: 'q2',
        prompt: 'You want to show the month-over-month Sales change. Which table calculation retrieves the previous month\'s value?',
        options: ['RUNNING_SUM(SUM([Sales]), -1)', 'LOOKUP(SUM([Sales]), -1)', 'INDEX() - 1', 'WINDOW_SUM(SUM([Sales]), -1, -1)'],
        answerIndex: 1,
        explanation: 'LOOKUP(expression, offset) retrieves a value offset rows away. -1 means one row behind the current row — the previous month when months are on the axis.'
      },
      {
        id: 'q3',
        prompt: 'What does LAST() = 0 evaluate to true for?',
        options: ['Every row in the view', 'Only the last row in the current table partition', 'Only rows where Sales = 0', 'The first row in the current partition'],
        answerIndex: 1,
        explanation: 'LAST() returns the distance to the last row. At the last row itself, LAST() = 0. This is commonly used to label only the final data point on a line chart.'
      },
      {
        id: 'q4',
        prompt: 'Your RUNNING_SUM resets unexpectedly at each Sub-Category instead of running continuously across the full date axis. What is the most likely cause?',
        options: ['RUNNING_SUM does not work with date fields', 'The Compute Using setting is set to "Table (Down)" when it should be "Table (Across)" or to the specific Date dimension', 'You need to convert the field to a Measure first', 'Sub-Category must be removed from the view entirely'],
        answerIndex: 1,
        explanation: '"Compute Using" controls what direction the table calc traverses. If it moves Down (across Sub-Category) instead of Across (along the Date axis), it resets at each Sub-Category.'
      },
      {
        id: 'q5',
        prompt: 'When is SUM([Sales]) / TOTAL(SUM([Sales])) preferable to SUM([Sales]) / { FIXED : SUM([Sales]) } for a % of total?',
        options: ['Never — FIXED is always more accurate', 'When you want the "total" to respect whatever filters the user applies — the view-based total changes dynamically with quick filters', 'When you need the percentage to always sum to more than 100%', 'TOTAL() and FIXED produce identical results in all cases'],
        answerIndex: 1,
        explanation: 'TOTAL() is a table calc that sums whatever is visible in the view. Quick filters change what is visible, so TOTAL() changes too — giving you a percentage within the filtered set. FIXED ignores view filters (unless promoted to Context).'
      }
    ]
  },

  'tb-a-3': {
    title: 'Check your understanding: Sets and set actions',
    intro: 'Test your knowledge of dynamic segmentation and interactive set-based filtering.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the key difference between a Tableau Group and a Tableau Set?',
        options: ['Groups are for Measures; Sets are for Dimensions', 'Groups are static user-defined labels; Sets can be dynamic (condition or Top-N based) and can change interactivity via Set Actions', 'Sets can only contain two members; Groups can contain unlimited members', 'There is no functional difference — they are aliases for the same feature'],
        answerIndex: 1,
        explanation: 'Groups are static — you pick members manually. Sets can be computed (top N, condition-based) and their membership can change live via Set Actions when users interact with a dashboard.'
      },
      {
        id: 'q2',
        prompt: 'A Set Action is configured with "Run on: Select" and "Clearing the selection: Remove all values from set." What happens when a user clicks a bar, then clicks away on blank canvas?',
        options: ['The set retains the last selected member permanently', 'Clicking the bar adds members to the set; clicking away empties the set — reverting all downstream charts to show all data', 'The set is deleted when the selection is cleared', 'Nothing changes when clicking away'],
        answerIndex: 1,
        explanation: '"Remove all values from set" empties the set when the selection is cleared. Downstream sheets that filter on the set then show all data again — a natural reset behaviour.'
      },
      {
        id: 'q3',
        prompt: 'What is the advantage of using Set Actions with Opacity encoding over a Filter Action for comparing a selected item against all others?',
        options: ['Set Actions are faster to configure than filter actions', 'With Set Actions + Opacity, non-selected marks dim (stay visible for context). With Filter Actions, non-selected marks disappear — hiding the comparison context', 'Filter Actions are deprecated in Tableau and should not be used', 'Set Actions work on sheets; Filter Actions only work on dashboards'],
        answerIndex: 1,
        explanation: 'Highlighting-in-context (dim but show) is valuable when you want to see how the selected item compares to the full picture. Filter actions remove context, making comparison impossible.'
      },
      {
        id: 'q4',
        prompt: 'You create a "Top 10 by Sales" set and a "Top 10 by Profit" set, then create a Combined Set for "Set A except Set B." What does this combined set contain?',
        options: ['Products in the top 10 by both Sales AND Profit', 'Products in the top 10 by Sales but NOT in the top 10 by Profit — high-revenue, low-margin products', 'Products in neither the Sales nor the Profit top 10', 'Products in the top 10 by Profit but not by Sales'],
        answerIndex: 1,
        explanation: '"Set A except Set B" = members of A that are not in B. Top-10-Sales minus Top-10-Profit = products with high revenue but relatively low profit — exactly the margin problem candidates.'
      },
      {
        id: 'q5',
        prompt: 'Where can you test whether a Set Action is working correctly?',
        options: ['In the individual sheet preview — set actions work the same on sheets and dashboards', 'Only on the actual dashboard — Set Actions are dashboard-only features and will not work on individual sheet previews', 'In the Data Source page, under the Sets panel', 'Using the Performance Recorder only'],
        answerIndex: 1,
        explanation: 'Set Actions are defined at the dashboard level and only execute in dashboard context. Always test them on the assembled dashboard, not on the source sheets.'
      }
    ]
  },

  'tb-a-4': {
    title: 'Check your understanding: Performance tuning and Custom SQL',
    intro: 'Test your knowledge of diagnosing slow workbooks and optimising Tableau deployments.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does Tableau\'s Performance Recording show?',
        options: ['Only the total workbook load time as a single number', 'A detailed Gantt-style breakdown of every operation — Querying, Geocoding, Computing, Rendering, Layout — with timing for each', 'A list of all calculations sorted by complexity', 'Only errors and warnings, not timing data'],
        answerIndex: 1,
        explanation: 'Performance Recording captures every operation in a workbook interaction and shows a flame chart per operation type. This tells you whether the bottleneck is database querying, calc computation, or mark rendering.'
      },
      {
        id: 'q2',
        prompt: 'When is a Live connection preferable to an Extract in Tableau?',
        options: ['Always — live connections are always faster because they use the database\'s native query engine', 'When you genuinely need real-time or near-real-time data (stock prices, live dashboards) that cannot tolerate a refresh delay', 'When the workbook has more than 10 sheets', 'When the data source is an Excel file'],
        answerIndex: 1,
        explanation: 'Extracts are almost always faster for interactive work. The main justification for Live is a hard requirement for data freshness — dashboards that must show the latest minute\'s data, for example.'
      },
      {
        id: 'q3',
        prompt: 'A Custom SQL query is used as a Live data source for a workbook with 5 dashboards. Users report that every filter interaction takes 8 seconds. What is the most likely cause and fix?',
        options: ['The workbook has too many colours — remove all colour encoding', 'The Custom SQL re-executes against the database on every user interaction in Live mode. Fix: switch to an Extract so the query runs once and results are cached locally', 'Increase the monitor resolution', 'Delete half the dashboards'],
        answerIndex: 1,
        explanation: 'Custom SQL on a Live connection fires on every interaction. Pre-aggregate in the SQL, then switch to Extract — the query runs at refresh time, and every user interaction reads from the fast local Hyper cache.'
      },
      {
        id: 'q4',
        prompt: 'What is the primary purpose of a data source filter in Tableau?',
        options: ['To add colour formatting to the data before it loads', 'To permanently remove rows from what Tableau sees at connection time — reducing data volume before any sheet-level processing begins', 'To prevent viewers from applying their own filters', 'To convert a Live connection into an Extract automatically'],
        answerIndex: 1,
        explanation: 'Data source filters are the broadest reduction tool — they cut rows before any query, calc, or rendering stage. If the dashboard only ever shows 2 years of a 10-year table, filter at source and eliminate 80% of the data volume immediately.'
      },
      {
        id: 'q5',
        prompt: 'What is Tableau Prep Builder used for?',
        options: ['Building dashboards with more templates than Tableau Desktop', 'Visually cleaning, reshaping, and preparing data before it reaches Tableau Desktop — using a flow-diagram interface with Input, Clean, Join, Aggregate, and Output nodes', 'Writing and testing LOD expressions interactively', 'Managing user licences on Tableau Cloud'],
        answerIndex: 1,
        explanation: 'Tableau Prep is a dedicated ETL tool with a visual flow interface. It sits upstream of Tableau Desktop — you clean and shape data in Prep, output a clean extract, and then build the viz in Desktop.'
      }
    ]
  },

  // Tableau Intermediate
  'tb-i-1': {
    title: 'Check your understanding: Calculated fields',
    intro: 'Test your knowledge of creating formulas inside Tableau.',
    questions: [
      {
        id: 'q1',
        prompt: 'Where do calculated fields appear in the Tableau interface after you create them?',
        options: ['On the Columns shelf automatically', 'In the Data pane, marked with a small "=" icon, ready to drag like any other field', 'Only in the Format menu', 'They appear only when the workbook is published'],
        answerIndex: 1,
        explanation: 'Calculated fields are first-class citizens in the Data pane — you treat them identically to any sourced column once created.'
      },
      {
        id: 'q2',
        prompt: 'You want to compute profit margin as Profit divided by Sales. What safety check should you add?',
        options: ['Nothing — division always works in Tableau', 'Wrap with IIF([Sales]=0, 0, [Profit]/[Sales]) to avoid a division-by-zero error on rows where Sales is zero', 'Add a TRIM() around the result', 'Use a table calculation instead'],
        answerIndex: 1,
        explanation: 'Dividing by a field that can be zero produces NULL or an error. IIF checks for zero first and returns a safe default of 0.'
      },
      {
        id: 'q3',
        prompt: 'What is the key difference between a regular calculated field and a table calculation like RUNNING_SUM?',
        options: ['There is no difference — they compute identically', 'A regular calc runs on raw data rows; a table calculation runs on the already-aggregated values visible in the current view', 'Table calculations can only be used in maps', 'Regular calcs cannot use IF statements'],
        answerIndex: 1,
        explanation: 'Table calcs (RUNNING_SUM, RANK, WINDOW_AVG) operate on the numbers already in the view, not on the underlying row-level data.'
      },
      {
        id: 'q4',
        prompt: 'Which function would correctly extract just the year from an Order Date field?',
        options: ['YEAR([Order Date])', 'DATEPART("year", [Order Date])', 'LEFT([Order Date], 4)', 'Both A and B are correct — YEAR() is an alias for DATEPART("year",…)'],
        answerIndex: 3,
        explanation: 'Tableau supports both YEAR() as a shorthand and DATEPART("year",…) as the explicit form. Both produce the same integer year value.'
      },
      {
        id: 'q5',
        prompt: 'You need to categorise orders into "Small" (<$100), "Medium" ($100–$499), and "Large" (≥$500). Which Tableau construct handles multi-branch conditional logic like this?',
        options: ['TRIM()', 'IF / ELSEIF / ELSE / END', 'RUNNING_SUM()', 'DATEDIFF()'],
        answerIndex: 1,
        explanation: 'IF … ELSEIF … ELSE … END evaluates conditions in sequence and returns the value for the first branch that is true.'
      }
    ]
  },

  'tb-i-2': {
    title: 'Check your understanding: Parameters',
    intro: 'Test your knowledge of building dynamic, user-controlled views with parameters.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the fundamental difference between a Tableau parameter and a Tableau filter?',
        options: ['There is no difference — they both remove rows from the data', 'A filter removes rows from the view; a parameter is a user-controlled variable that feeds into calculated fields or reference lines', 'Parameters can only be used with date fields', 'Filters are only available to published workbooks'],
        answerIndex: 1,
        explanation: 'Parameters are named variables — they do nothing on their own. Only when referenced in a calc, filter condition, or reference line do they produce visible effects.'
      },
      {
        id: 'q2',
        prompt: 'You build a "Top N Products" feature with a parameter set to 10. The user moves the slider to 5. What actually controls how many bars appear in the bar chart?',
        options: ['The parameter alone automatically limits the number of bars', 'A calculated field like RANK(SUM([Sales])) <= [Top N] placed on the Filters shelf keeps only the rows where this is TRUE', 'The parameter modifies the database query directly', 'Nothing — parameters cannot affect the number of marks shown'],
        answerIndex: 1,
        explanation: 'A parameter only stores the number the user picked. A RANK-based calculated field on the Filters shelf uses that number to decide which rows to show.'
      },
      {
        id: 'q3',
        prompt: 'How do you make a parameter control visible and interactive to dashboard viewers?',
        options: ['Parameters are always visible automatically', 'Right-click the parameter in the Data pane → "Show Parameter" to add its control (slider/dropdown) to the sheet or dashboard', 'Parameters can only be changed by editing the workbook in Tableau Desktop', 'You must publish to Tableau Server — parameters are not interactive in Tableau Public'],
        answerIndex: 1,
        explanation: '"Show Parameter" adds the control to the canvas. Without this step the parameter exists but the user has no way to change its value.'
      },
      {
        id: 'q4',
        prompt: 'A "Metric Selector" parameter lets users choose between Sales, Profit, and Quantity. What calculated field pattern correctly wires the parameter to the chart axis?',
        options: ['SUM([Sales]) + SUM([Profit]) + SUM([Quantity])', 'CASE [Metric Selector] WHEN "Sales" THEN SUM([Sales]) WHEN "Profit" THEN SUM([Profit]) WHEN "Quantity" THEN SUM([Quantity]) END', 'IF [Metric Selector] = ALL THEN SUM([Sales]) END', 'Parameters cannot be used inside CASE statements'],
        answerIndex: 1,
        explanation: 'A CASE statement matches the current string value of the parameter and returns the corresponding aggregation — clean, readable, and maintainable.'
      },
      {
        id: 'q5',
        prompt: 'Where can you visually place a parameter control so dashboard viewers can easily find and use it?',
        options: ['Only at the very bottom of the screen, permanently', 'Directly on the dashboard canvas, positioned wherever is most useful — typically near the chart it controls', 'Parameters can only appear in a separate pop-up window', 'Parameters are only accessible from the top menu bar'],
        answerIndex: 1,
        explanation: 'On a dashboard, a parameter control is just another object you drag and position. Placing it near its associated chart is best practice for usability.'
      }
    ]
  },

  'tb-i-3': {
    title: 'Check your understanding: Maps and geographic data',
    intro: 'Test your knowledge of building geographic visualisations in Tableau.',
    questions: [
      {
        id: 'q1',
        prompt: 'What does Tableau use to automatically convert a "State" column into map coordinates, without any external API?',
        options: ['A live connection to Google Maps', 'Tableau\'s built-in geocoding database, which covers countries, states, cities, zip codes, and more', 'A manual latitude/longitude import every time', 'Tableau cannot handle geographic data without a paid add-on'],
        answerIndex: 1,
        explanation: 'Tableau ships with a built-in geocoding engine. Assigning the correct Geographic Role to a field is all it takes for standard administrative geographies.'
      },
      {
        id: 'q2',
        prompt: 'When should you use a symbol map instead of a filled map?',
        options: ['Always — symbol maps are strictly better than filled maps', 'When plotting city-level or point-level data (stores, events), because Tableau cannot fill polygons at sub-state granularity', 'Only when your data has negative values', 'When the data has more than 1000 rows'],
        answerIndex: 1,
        explanation: 'Filled maps shade polygons (country, state) — they break down at city or store level where polygon boundaries are not in Tableau\'s geocoding database. Symbol maps plot a circle at any geographic point.'
      },
      {
        id: 'q3',
        prompt: 'On a symbol map, you put Sales on Size and Profit on Color. What does a large red bubble tell you?',
        options: ['This location has many customers but is very old', 'This location has high sales volume (large bubble) but is unprofitable (red color) — a high-priority problem area', 'This location has low sales and high profit', 'The color is just a formatting choice with no data meaning'],
        answerIndex: 1,
        explanation: 'Encoding two measures on Size and Color simultaneously lets you see both dimensions at a glance — identifying the high-revenue, loss-making locations is a classic use of this pattern.'
      },
      {
        id: 'q4',
        prompt: 'What is the purpose of a dual-axis map in Tableau?',
        options: ['To display two entirely separate maps side by side', 'To overlay two mark layers — for example, filled state polygons AND city-level circles — on a single map', 'To show a before-and-after comparison', 'To connect two different data sources on one canvas'],
        answerIndex: 1,
        explanation: 'A dual-axis map merges two Latitude pills into a single map canvas with two independent Marks card layers, allowing polygon fills and point symbols to coexist on the same geographic view.'
      },
      {
        id: 'q5',
        prompt: 'Your dataset contains coordinates for 500 delivery hubs that are not in Tableau\'s geocoding database. How do you plot them on a map?',
        options: ['You cannot — Tableau only supports standard administrative boundaries', 'Include Latitude and Longitude as numeric columns in the data, assign each the correct Geographic Role, and drag both to the Columns/Rows shelves', 'You must purchase a custom geocoding plugin', 'Use the Map menu → Download Custom Geographies for all non-standard locations'],
        answerIndex: 1,
        explanation: 'Tableau accepts explicit latitude and longitude columns for any custom geography. This is the universal escape hatch for locations not in Tableau\'s built-in geocoding database.'
      }
    ]
  },

  'tb-i-4': {
    title: 'Check your understanding: LOD expressions',
    intro: 'Test your knowledge of controlling aggregation granularity with FIXED, INCLUDE, and EXCLUDE.',
    questions: [
      {
        id: 'q1',
        prompt: 'What problem does a LOD (Level of Detail) expression solve that a regular SUM() cannot?',
        options: ['LOD expressions load data faster', 'They let you compute an aggregation at a specific granularity — independent of whatever dimensions currently appear in the view', 'LOD expressions replace the need for calculated fields', 'They automatically create geographic maps'],
        answerIndex: 1,
        explanation: 'Without LOD, every aggregation respects the view granularity. LOD expressions let you pin an aggregation to a different level, such as "always give me the region total regardless of which sub-categories are visible."'
      },
      {
        id: 'q2',
        prompt: 'What does { FIXED [Region] : SUM([Sales]) } compute?',
        options: ['The total sales filtered to whatever Region is selected', 'The total sales summed separately for each Region, regardless of any other dimensions in the view', 'The average sales across all Regions', 'The rank of each Region by sales'],
        answerIndex: 1,
        explanation: 'FIXED [Region] : SUM([Sales]) computes one value per Region and stamps it on every row belonging to that region — it does not change if you also have Category or Sub-Category in the view.'
      },
      {
        id: 'q3',
        prompt: 'You want "average sales per customer" — the average of each customer\'s total spend. Why is AVG([Sales]) wrong for this?',
        options: ['AVG() does not work on numeric fields', 'AVG([Sales]) averages every individual order line, not the per-customer total — you need INCLUDE [Customer ID] : SUM([Sales]) first, then average those sums', 'There is no difference — AVG produces the same number as INCLUDE in this case', 'You should use EXCLUDE instead of INCLUDE for per-customer averages'],
        answerIndex: 1,
        explanation: 'AVG([Sales]) averages row-level values. To get the average of per-customer totals, you must first SUM per customer (INCLUDE), then AVG those sums — giving true average customer value.'
      },
      {
        id: 'q4',
        prompt: 'Your view has Region and Category on Rows. You want each Category\'s share of its own Region total (not grand total). Which LOD correctly computes the Region subtotal?',
        options: ['{ FIXED [Category] : SUM([Sales]) }', '{ EXCLUDE [Category] : SUM([Sales]) }', '{ INCLUDE [Region] : SUM([Sales]) }', 'SUM([Sales]) / TOTAL(SUM([Sales]))'],
        answerIndex: 1,
        explanation: 'EXCLUDE [Category] removes Category from the aggregation while keeping the Region dimension that IS in the view — giving the Region subtotal regardless of Category breakdown.'
      },
      {
        id: 'q5',
        prompt: 'A FIXED LOD expression is giving you unexpected results even after you apply a dimension filter on the Filters shelf. What is the most likely explanation?',
        options: ['FIXED LODs are always wrong and should be avoided', 'FIXED LODs are computed BEFORE dimension filters on the Filters shelf; the filter does not affect the FIXED value unless you make it a Context Filter', 'FIXED LODs only respect numeric filters, not dimension filters', 'The FIXED expression needs to be wrapped in AVG() to respect filters'],
        answerIndex: 1,
        explanation: 'In Tableau\'s order of operations, FIXED LODs are computed before dimension filters. To force a dimension filter to affect a FIXED LOD, right-click the filter → "Add to Context."'
      }
    ]
  },

  // Machine Learning Beginner
  'ml-b-1': {
    title: 'Check your understanding: What is Machine Learning?',
    intro: 'Test your knowledge of ML types, vocabulary, and the core workflow.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the fundamental difference between traditional programming and Machine Learning?',
        options: ['Traditional programming is slower; ML is faster', 'Traditional programming requires a human to write every rule; ML shows the algorithm labelled examples and lets it discover the rules itself', 'ML always requires internet access; traditional programming does not', 'Traditional programming only works on numbers; ML works on all data types'],
        answerIndex: 1,
        explanation: 'The paradigm shift: instead of writing IF-THEN rules, you show examples. The algorithm infers the rules from the patterns in those examples.'
      },
      {
        id: 'q2',
        prompt: 'Predicting whether a patient will be readmitted to hospital within 30 days (Yes/No) is an example of which type of ML problem?',
        options: ['Regression, because it involves medical numbers', 'Binary Classification, because the output is one of two discrete categories', 'Unsupervised Learning, because patient data is complex', 'Reinforcement Learning, because doctors learn from feedback'],
        answerIndex: 1,
        explanation: 'Yes/No outputs are binary classification. Regression produces a continuous number. The output type determines the problem type, not the domain.'
      },
      {
        id: 'q3',
        prompt: 'What is "overfitting" in Machine Learning?',
        options: ['The model trains for too many epochs and runs out of memory', 'The model memorised the training data so well it fails to generalise to new, unseen examples — it learned noise instead of pattern', 'The model has too few features to make accurate predictions', 'The model takes too long to make a single prediction'],
        answerIndex: 1,
        explanation: 'Overfitting = excellent training performance, poor test performance. The gap between training and test scores is the diagnostic signal.'
      },
      {
        id: 'q4',
        prompt: 'In supervised learning, what is the "label" (y)?',
        options: ['The column names in a CSV file', 'The correct output value that the algorithm is trying to learn to predict', 'A category assigned to training data by the algorithm itself', 'The name of the algorithm being used'],
        answerIndex: 1,
        explanation: 'Labels are the ground-truth answers in training data. The algorithm adjusts itself until its predictions match the labels as closely as possible.'
      },
      {
        id: 'q5',
        prompt: 'Why must you set aside a test set that the model never sees during training?',
        options: ['Test data is used to make the model faster', 'To measure how well the trained model generalises to genuinely new data — if you evaluated on training data, the score would be optimistically inflated', 'Test data is required by scikit-learn to run at all', 'Test sets are only needed for classification, not regression'],
        answerIndex: 1,
        explanation: 'Evaluating on training data tells you how well the model memorised what it studied. Evaluating on held-out test data tells you whether it can handle examples it has never seen — which is what matters in production.'
      }
    ]
  },

  'ml-b-2': {
    title: 'Check your understanding: Data preparation',
    intro: 'Test your knowledge of EDA, missing values, encoding, scaling, and train/test splits.',
    questions: [
      {
        id: 'q1',
        prompt: 'Why is it critical to fit a StandardScaler only on the training set, then use transform() on the test set?',
        options: ['Training data is always larger so the scaler works better on it', 'Fitting on the full dataset leaks test statistics (mean, std) into training — producing artificially optimistic test scores because the model indirectly "saw" the test set', 'StandardScaler produces errors when fit on test data', 'The test set does not need scaling — only training data does'],
        answerIndex: 1,
        explanation: 'This is data leakage. If the scaler learns from test data, the model has indirect information about the test set during training. The result: test metrics look better than they will be in production.'
      },
      {
        id: 'q2',
        prompt: 'You have a "Ship Mode" column with values "First Class", "Second Class", "Standard Class". The correct encoding for a linear model is:',
        options: ['LabelEncoder (converts to 1, 2, 3)', 'OneHotEncoder — creates one binary column per category, avoiding false ordinal relationships', 'No encoding needed — linear models handle text', 'Convert each unique value to its string length'],
        answerIndex: 1,
        explanation: 'LabelEncoder implies an order (2 > 1). For nominal categories with no meaningful order, OneHotEncoder creates independent binary columns — no false ordering is implied.'
      },
      {
        id: 'q3',
        prompt: 'What does train_test_split(X, y, stratify=y) do that the plain split does not?',
        options: ['It splits the data alphabetically instead of randomly', 'It ensures both the train and test sets contain the same proportion of each class as the original dataset — crucial for imbalanced classification problems', 'It makes the split deterministic even without random_state', 'It automatically handles missing values before splitting'],
        answerIndex: 1,
        explanation: 'Without stratify, a random split could put 90% of minority-class examples in training by chance, making test evaluation misleading. Stratify preserves the ratio.'
      },
      {
        id: 'q4',
        prompt: 'What does df.isnull().sum() tell you?',
        options: ['The total sum of all numeric columns in the DataFrame', 'The count of missing (NaN) values per column — your starting point for deciding how to handle incomplete data', 'Whether the DataFrame has any duplicate rows', 'The number of unique values per column'],
        answerIndex: 1,
        explanation: '.isnull() produces a True/False mask per cell. .sum() counts the Trues per column. The result tells you exactly how many missing values exist in each feature.'
      },
      {
        id: 'q5',
        prompt: 'A house price column is strongly right-skewed with many high outliers. Which transformation makes the distribution more normal for linear modelling?',
        options: ['StandardScaler', 'np.log1p() — log transformation compresses large values, pulling in the right tail', 'OneHotEncoder', 'Label encoding'],
        answerIndex: 1,
        explanation: 'Log transformation is particularly effective for right-skewed targets like price, salary, and revenue. log1p (log(1+x)) handles zero values gracefully. Linear models assume normally-distributed errors, which log transformation helps achieve.'
      }
    ]
  },

  'ml-b-3': {
    title: 'Check your understanding: Linear Regression',
    intro: 'Test your knowledge of regression concepts, evaluation metrics, and regularisation.',
    questions: [
      {
        id: 'q1',
        prompt: 'In a trained Linear Regression model, a coefficient of 0.42 for MedInc means:',
        options: ['42% of house prices are explained by income', 'For each one-unit increase in median income, the predicted house value increases by 0.42 (in the same units as y)', 'The model is 42% accurate', 'MedInc is the 42nd most important feature'],
        answerIndex: 1,
        explanation: 'Coefficients in linear regression have a direct interpretation: each unit increase in the feature produces a change of β in the prediction. This interpretability is a key advantage of linear models.'
      },
      {
        id: 'q2',
        prompt: 'RMSE penalises large prediction errors more than MAE does. Why?',
        options: ['RMSE divides by a larger number than MAE', 'RMSE squares the errors before averaging — squaring amplifies large errors disproportionately, making RMSE more sensitive to outlier predictions', 'MAE does not work on datasets with more than 1000 rows', 'RMSE only measures positive errors; MAE measures both positive and negative'],
        answerIndex: 1,
        explanation: 'Squaring a large error (e.g., 10² = 100) produces a much larger penalty than squaring a small one (1² = 1). RMSE prioritises minimising large errors, which is often the right business objective.'
      },
      {
        id: 'q3',
        prompt: 'An R² score of 0.72 means:',
        options: ['The model is correct 72% of the time', 'The model explains 72% of the variance in the target variable — a measure of how well the features collectively account for the variation in y', 'The RMSE is 0.72', 'The model overfits by 72%'],
        answerIndex: 1,
        explanation: 'R² is a relative measure: 1.0 is perfect, 0.0 means the model does no better than predicting the mean every time. 0.72 means 72% of y\'s variance is explained by the features.'
      },
      {
        id: 'q4',
        prompt: 'What is the key difference between Ridge (L2) and Lasso (L1) regularisation?',
        options: ['Ridge is for regression; Lasso is for classification only', 'Ridge shrinks all coefficients toward zero but keeps them all; Lasso can shrink some coefficients to exactly zero — performing automatic feature selection', 'Lasso uses a squared penalty; Ridge uses an absolute value penalty', 'There is no practical difference — both produce identical results'],
        answerIndex: 1,
        explanation: 'Lasso\'s L1 penalty (absolute value) has a geometric property that drives coefficients to exactly zero. Ridge\'s L2 (squared) keeps all features but with smaller coefficients. Lasso is effectively a feature selection tool.'
      },
      {
        id: 'q5',
        prompt: 'A residual plot shows a clear U-shaped curve (not random scatter) around the zero line. What does this indicate?',
        options: ['The model is performing perfectly', 'The relationship between features and target is non-linear — Linear Regression\'s assumption of linearity is violated, and a more complex model or polynomial features are needed', 'The training data had too many missing values', 'The RMSE is too high and needs normalisation'],
        answerIndex: 1,
        explanation: 'A random residual plot = good fit. A patterned residual plot (curve, fan, clusters) = the model is missing some structure in the data. The U-shape specifically indicates a quadratic (non-linear) relationship.'
      }
    ]
  },

  'ml-b-4': {
    title: 'Check your understanding: Classification',
    intro: 'Test your knowledge of Logistic Regression, Decision Trees, and Random Forests.',
    questions: [
      {
        id: 'q1',
        prompt: 'Despite its name, Logistic Regression is a classification algorithm. What does it actually model?',
        options: ['The best linear boundary between classes', 'The probability that an example belongs to the positive class — using a sigmoid function to map any number to the [0, 1] range', 'The distance between each data point and the class centroid', 'The number of features that predict each class'],
        answerIndex: 1,
        explanation: 'Logistic Regression outputs P(class=1|features). The sigmoid function constrains this to [0,1]. Thresholding at 0.5 produces the binary class prediction, but the raw probability is more informative for business decisions.'
      },
      {
        id: 'q2',
        prompt: 'A Decision Tree with max_depth=1 achieves 78% training accuracy and 77% test accuracy. The same tree with max_depth=20 achieves 99% training and 74% test accuracy. What is happening?',
        options: ['max_depth=20 is underfitting — the tree is too shallow', 'max_depth=20 is overfitting — the tree memorised the training data so well it performs worse on new examples', 'Both models are performing identically', 'max_depth=20 has a bug in the implementation'],
        answerIndex: 1,
        explanation: 'The telltale overfitting signature: training score far higher than test score. max_depth=20 allows the tree to create very specific rules that match training noise perfectly but generalise poorly.'
      },
      {
        id: 'q3',
        prompt: 'Why does a Random Forest typically outperform a single Decision Tree?',
        options: ['Random Forests are programmed to never make mistakes', 'It builds hundreds of trees on random subsets of data and features, then combines their votes — individual errors average out and bias reduces', 'Random Forests use better data preprocessing automatically', 'Single Decision Trees cannot handle numeric features'],
        answerIndex: 1,
        explanation: 'Ensemble averaging reduces variance. Each tree makes different mistakes (because they see different subsets). When hundreds of trees vote, individual errors cancel out — the majority is much more likely to be correct than any single tree.'
      },
      {
        id: 'q4',
        prompt: 'Why does K-Nearest Neighbours require feature scaling while a Decision Tree does not?',
        options: ['KNN does not support categorical features; trees do', 'KNN computes distances between points — an unscaled large-valued feature (like salary) will dominate the distance calculation. Trees split on thresholds and do not use distance, so scale is irrelevant to them', 'Decision Trees are always more accurate, making scaling unnecessary', 'KNN requires more memory, and scaling reduces memory usage'],
        answerIndex: 1,
        explanation: 'Distance-based algorithms (KNN, SVM, K-Means, Neural Networks) are scale-sensitive. Tree-based algorithms (Decision Tree, Random Forest, Gradient Boosting) are scale-invariant — they split on ranked thresholds.'
      },
      {
        id: 'q5',
        prompt: 'model.predict_proba(X_test)[:, 1] returns what?',
        options: ['The predicted class label (0 or 1) for each row', 'The probability that each example belongs to class 1 (the positive class)', 'The model\'s confidence score between -1 and +1', 'The number of features that contributed to each prediction'],
        answerIndex: 1,
        explanation: 'predict_proba returns a 2-column array: [P(class=0), P(class=1)] per row. Indexing [:, 1] extracts the positive-class probability for all rows — used for ROC curves, threshold tuning, and ranking.'
      }
    ]
  },

  'ml-b-5': {
    title: 'Check your understanding: Model evaluation',
    intro: 'Test your knowledge of confusion matrices, precision/recall, AUC, and cross-validation.',
    questions: [
      {
        id: 'q1',
        prompt: 'A fraud detection model achieves 99.5% accuracy on a dataset where only 0.5% of transactions are fraud. Is this a good model?',
        options: ['Yes — 99.5% accuracy is excellent by any measure', 'Not necessarily — a model that always predicts "not fraud" also achieves 99.5% accuracy without learning anything. Precision and Recall for the fraud class would reveal the model is useless.', 'It depends on whether the model used cross-validation', 'Yes, as long as the RMSE is below 0.01'],
        answerIndex: 1,
        explanation: 'This is the class imbalance trap. Accuracy is useless when classes are heavily skewed. Always check per-class Precision, Recall, and F1 — and consider AUC-ROC for ranking-based evaluation.'
      },
      {
        id: 'q2',
        prompt: 'A cancer screening model has high Recall (0.95) but low Precision (0.30). What does this mean in practice?',
        options: ['The model catches 95% of all actual cancer cases, but 70% of its cancer predictions are false alarms (incorrect diagnoses)', 'The model misses 95% of cancer cases — very dangerous', 'The model is 30% more accurate than the previous version', 'Precision and Recall cannot both be reported for the same model'],
        answerIndex: 1,
        explanation: 'Recall = TP/(TP+FN) = 0.95 → catches 95% of real cases. Precision = TP/(TP+FP) = 0.30 → 70% of cancer flags are wrong. For screening, high recall (catch everything) is usually the priority — false alarms are followed up with better tests.'
      },
      {
        id: 'q3',
        prompt: 'What is the AUC-ROC score of a completely random classifier?',
        options: ['1.0', '0.0', '0.5 — equivalent to random guessing', '-1.0'],
        answerIndex: 2,
        explanation: 'A random classifier has equal probability of ranking a positive above a negative — 50% by chance. AUC = 0.5 is the baseline. Values above 0.5 indicate the model is learning something; values below 0.5 mean predictions are worse than random (flip the predictions).'
      },
      {
        id: 'q4',
        prompt: 'Why is k-fold cross-validation more reliable than a single train/test split for estimating model performance?',
        options: ['Cross-validation automatically selects the best algorithm', 'Every example is used as both training and test data across k runs — the average score is a more stable estimate than a single split that might be lucky or unlucky', 'Cross-validation removes outliers from the dataset automatically', 'A single split cannot be used with classification problems'],
        answerIndex: 1,
        explanation: 'One split can have a fortunate or unfortunate composition by chance. 5-fold CV trains and evaluates 5 times, using all data. The variance in the 5 scores also tells you how stable the model is.'
      },
      {
        id: 'q5',
        prompt: 'In a confusion matrix for churn prediction, a False Negative means:',
        options: ['The model correctly predicted a customer would not churn', 'The model predicted a customer would NOT churn, but they actually did churn — a missed intervention opportunity', 'The model predicted churn, but the customer stayed', 'The model made a correct churn prediction'],
        answerIndex: 1,
        explanation: 'False Negative = predicted Negative (no churn), actually Positive (churned). In churn use cases, FNs are the most expensive error — the customer left without any retention effort.'
      }
    ]
  },

  'ml-b-6': {
    title: 'Check your understanding: scikit-learn Pipelines',
    intro: 'Test your knowledge of Pipelines, ColumnTransformer, and hyperparameter tuning.',
    questions: [
      {
        id: 'q1',
        prompt: 'What is the primary benefit of wrapping preprocessing and a model in a sklearn Pipeline?',
        options: ['Pipelines automatically download data from the internet', 'The entire sequence (impute → encode → scale → model) is applied consistently to any new data in one call — eliminating the most common source of data leakage and preprocessing bugs', 'Pipelines make models 10x faster to train', 'Pipelines automatically choose the best algorithm for your data'],
        answerIndex: 1,
        explanation: 'Without a Pipeline, you must manually remember and re-apply every preprocessing step in the exact same order on both train and test data. A Pipeline makes this automatic and error-proof.'
      },
      {
        id: 'q2',
        prompt: 'What does ColumnTransformer allow you to do that a plain Pipeline cannot?',
        options: ['Apply the same preprocessing step to all columns simultaneously', 'Apply different preprocessing steps to different subsets of columns — e.g., StandardScaler on numeric columns AND OneHotEncoder on categorical columns in the same pipeline', 'Automatically detect which columns are numeric vs categorical', 'Train multiple models simultaneously on the same data'],
        answerIndex: 1,
        explanation: 'ColumnTransformer routes each column group through its own sub-pipeline, then concatenates the results. This is essential for datasets with mixed data types.'
      },
      {
        id: 'q3',
        prompt: 'In GridSearchCV with a Pipeline, the param_grid key "model__max_depth" uses the "model__" prefix. Why?',
        options: ['It is a Python naming convention for private variables', 'The prefix identifies which Pipeline step the parameter belongs to — "model" is the name given to the classifier step, and "__" separates the step name from the hyperparameter name', 'max_depth is a GridSearchCV built-in parameter that requires this prefix', '"model__" prevents naming conflicts with pandas column names'],
        answerIndex: 1,
        explanation: 'sklearn Pipelines use the step_name__parameter_name convention for referencing nested parameters. This allows GridSearchCV to route each parameter to the correct object within the Pipeline.'
      },
      {
        id: 'q4',
        prompt: 'You save a Pipeline with joblib.dump(pipeline, "model.pkl") and load it in production with joblib.load("model.pkl"). What does the loaded pipeline contain?',
        options: ['Only the trained model weights — preprocessing must be reapplied manually', 'The complete fitted pipeline: every preprocessing step with its fitted parameters (scaler mean/std, encoder categories) AND the trained model — one call to predict() applies everything', 'The raw training data compressed in pickle format', 'Only the pipeline structure without fitted parameters'],
        answerIndex: 1,
        explanation: 'joblib serialises the entire fitted Pipeline object: every transformer\'s fitted state (the StandardScaler\'s learned mean and std, the OneHotEncoder\'s learned categories) plus the model weights. This is what makes pipeline serialisation so powerful for deployment.'
      },
      {
        id: 'q5',
        prompt: 'When would you use RandomizedSearchCV over GridSearchCV for hyperparameter tuning?',
        options: ['When you have fewer than 100 training examples', 'When the hyperparameter space is large — GridSearchCV tests every combination (expensive), while RandomizedSearchCV samples a random subset and typically finds near-optimal results in a fraction of the time', 'RandomizedSearchCV always finds better parameters than GridSearchCV', 'When you are using a classification model rather than regression'],
        answerIndex: 1,
        explanation: 'GridSearchCV with 5 parameters of 4 values each = 4⁵ = 1024 combinations × k-fold = thousands of model fits. RandomizedSearchCV with n_iter=50 tests only 50 combinations — dramatically faster, with near-equivalent results in most cases.'
      }
    ]
  },

  // ML Intermediate
  'ml-i-1': {
    title: 'Check your understanding: Support Vector Machines',
    intro: 'Test your knowledge of SVMs, kernels, and margin classification.',
    questions: [
      { id: 'q1', prompt: 'What are support vectors in an SVM?', options: ['All training data points', 'The training points that lie exactly on the margin boundary and define the decision hyperplane', 'The misclassified points', 'The centroids of each class'], answerIndex: 1, explanation: 'Support vectors are the subset of training examples closest to the decision boundary. Only these points determine the margin — removing other training points would not change the boundary.' },
      { id: 'q2', prompt: 'A high value of C in a soft-margin SVM creates:', options: ['A wider margin with more training errors tolerated', 'A tighter margin with fewer training errors — risks overfitting', 'No effect on the decision boundary', 'A non-linear decision boundary'], answerIndex: 1, explanation: 'C controls the trade-off: high C = penalise misclassifications heavily = tighter margin = potential overfitting. Low C = allow misclassifications = wider margin = better generalisation.' },
      { id: 'q3', prompt: 'The kernel trick in SVM allows:', options: ['Training on larger datasets faster', 'Implicitly mapping data to higher dimensions where a linear boundary becomes non-linear in the original space — without computing the expensive transformation', 'Reducing the number of support vectors', 'Using SVM for regression problems'], answerIndex: 1, explanation: 'The kernel function k(x,z) computes the dot product in a high-dimensional space without explicitly computing the transformation. This makes non-linear classification tractable.' },
      { id: 'q4', prompt: 'For text classification with TF-IDF features (thousands of dimensions), which SVM kernel is most appropriate?', options: ['RBF kernel', 'Polynomial kernel', 'Linear kernel — fast and effective for high-dimensional sparse data', 'Sigmoid kernel'], answerIndex: 2, explanation: 'Linear kernel is ideal for text: the data is already very high-dimensional and often linearly separable in TF-IDF space. RBF is expensive for sparse high-dimensional data.' },
      { id: 'q5', prompt: 'Why must you StandardScale features before fitting an SVM?', options: ['SVM requires features between 0 and 1', 'SVM uses Euclidean distance — features with large scales dominate the margin calculation unfairly', 'Scaling reduces the number of support vectors', 'Scaling is only needed for the kernel trick'], answerIndex: 1, explanation: 'SVM finds the maximum-margin hyperplane using distances. A feature with values 0–10,000 would dominate over one with values 0–1. Scaling ensures all features contribute equally to the margin.' }
    ]
  },
  'ml-i-2': {
    title: 'Check your understanding: Clustering',
    intro: 'Test your knowledge of K-Means, DBSCAN, and cluster evaluation.',
    questions: [
      { id: 'q1', prompt: 'In K-Means, what does each iteration do?', options: ['Assigns points to clusters, then removes the smallest cluster', 'Assigns each point to its nearest centroid, then recomputes centroids as the mean of assigned points', 'Computes pairwise distances between all points', 'Adds one cluster at a time until inertia is minimised'], answerIndex: 1, explanation: 'K-Means alternates between E-step (assign to nearest centroid) and M-step (recompute centroids). This continues until centroids stop moving — convergence.' },
      { id: 'q2', prompt: 'The elbow method for choosing K in K-Means looks for:', options: ['The K with the highest silhouette score', 'The point in the inertia-vs-K curve where adding more clusters gives diminishing returns', 'The K where all silhouette values exceed 0.5', 'The minimum inertia'], answerIndex: 1, explanation: 'Inertia always decreases as K grows. The "elbow" is where the rate of decrease sharply slows — adding more clusters beyond this point gives diminishing improvement.' },
      { id: 'q3', prompt: 'Silhouette score of 0.65 (close to +1) means:', options: ['65% of points are in the correct cluster', 'Clusters are well-separated and internally cohesive — a good clustering', 'The model has 65% accuracy', '65% of the variance is explained'], answerIndex: 1, explanation: 'Silhouette score: +1 = perfectly separated clusters, 0 = overlapping, -1 = points assigned to wrong clusters. Above 0.5 indicates reasonable structure; above 0.7 is strong.' },
      { id: 'q4', prompt: 'DBSCAN assigns cluster label = −1 to:', options: ['The largest cluster', 'Noise points — outliers that don\'t belong to any dense region', 'The cluster with the lowest density', 'Core points'], answerIndex: 1, explanation: 'DBSCAN automatically identifies and isolates noise points (outliers) that don\'t have enough neighbours within ε radius. This is a major advantage over K-Means, which forces every point into a cluster.' },
      { id: 'q5', prompt: 'K-Means fails on crescent-shaped clusters because:', options: ['K-Means cannot handle more than 2 clusters', 'K-Means assumes spherical, convex clusters — it uses centroid distance which can\'t capture curved shapes', 'K-Means requires normalised data', 'K-Means only works on 2D data'], answerIndex: 1, explanation: 'K-Means assigns to nearest centroid using Euclidean distance, naturally creating spherical boundaries. Crescent or ring shapes require density-based methods like DBSCAN or spectral clustering.' }
    ]
  },
  'ml-i-3': {
    title: 'Check your understanding: PCA',
    intro: 'Test your knowledge of dimensionality reduction and principal components.',
    questions: [
      { id: 'q1', prompt: 'PCA finds principal components that:', options: ['Are correlated with the target variable', 'Capture directions of maximum variance in the data, uncorrelated with each other', 'Minimise the number of features to exactly 2', 'Are identical to the original features'], answerIndex: 1, explanation: 'PCs are orthogonal (uncorrelated) directions. PC1 captures the most variance, PC2 the most remaining variance perpendicular to PC1, and so on.' },
      { id: 'q2', prompt: 'The scree plot shows cumulative explained variance reaching 95% at 20 components (from 64 original). Using 20 components instead of 64:', options: ['Loses all signal from the removed dimensions', 'Compresses 64 features to 20 while retaining 95% of the variance information', 'Always improves model accuracy', 'Doubles training speed with no information loss'], answerIndex: 1, explanation: 'PCA prioritises variance. The top 20 components carry 95% of information. The dropped 44 components mostly contain noise — so compression can even improve model performance.' },
      { id: 'q3', prompt: 'Why must you scale features before PCA?', options: ['PCA requires values between 0 and 1', 'PCA is variance-based — features with larger scales contribute disproportionately to the principal components', 'Scaling reduces the number of components needed', 'Unscaled data causes convergence failures'], answerIndex: 1, explanation: 'A feature measured in thousands (income) would dominate over one measured in ones (number of loans). StandardScaler ensures each feature has equal influence on the principal components.' },
      { id: 'q4', prompt: 'A major limitation of PCA for interpretable models is:', options: ['PCA is too slow for large datasets', 'PCA components are linear combinations of all original features — they lose individual feature interpretability', 'PCA can only reduce to 2 dimensions', 'PCA requires normally distributed data'], answerIndex: 1, explanation: 'After PCA, PC1 might be "0.3×feature1 + 0.5×feature2 − 0.2×feature3..." — not directly interpretable. If a stakeholder asks "which features matter?", PCA makes this hard to answer.' },
      { id: 'q5', prompt: 'PCA can be used for noise reduction because:', options: ['It removes duplicate rows', 'Top components capture signal (systematic variance) while later components capture noise — projecting and reconstructing via top components filters the noise', 'It averages correlated features', 'It normalises outliers'], answerIndex: 1, explanation: 'The first k principal components capture structured variance (the signal). Noise is spread across many small components. Inverse-transforming from top components reconstructs a denoised version of the data.' }
    ]
  },
  'ml-i-4': {
    title: 'Check your understanding: Neural Networks',
    intro: 'Test your knowledge of neural network architecture and training.',
    questions: [
      { id: 'q1', prompt: 'Why is the ReLU activation function preferred over sigmoid in hidden layers?', options: ['ReLU squashes outputs to (0,1) like sigmoid', 'ReLU does not saturate for positive values — avoids the vanishing gradient problem that makes sigmoid-based deep networks slow to train', 'ReLU is mathematically simpler to compute', 'ReLU can only be used with 2-class problems'], answerIndex: 1, explanation: 'Sigmoid saturates near 0 and 1 — gradients become near-zero there, stopping weight updates (vanishing gradient). ReLU = max(0,x) has a constant gradient of 1 for positive inputs.' },
      { id: 'q2', prompt: 'What does early_stopping=True do in scikit-learn\'s MLPClassifier?', options: ['Stops training after a fixed number of epochs', 'Holds out a validation set and stops training when validation performance stops improving — preventing overfitting', 'Removes the last hidden layer', 'Reduces the learning rate each epoch'], answerIndex: 1, explanation: 'Early stopping is regularisation through training duration. It monitors validation score each epoch and stops when it hasn\'t improved for a set number of consecutive epochs (n_iter_no_change).' },
      { id: 'q3', prompt: 'A neural network with loss_curve_ that decreases on training but validation accuracy stays flat after epoch 30 indicates:', options: ['The learning rate is too low', 'Overfitting — the model is memorising training data but not generalising', 'The network architecture is too simple', 'The data needs more preprocessing'], answerIndex: 1, explanation: 'The training-validation gap in loss curves is the diagnostic signature of overfitting. Fixes: add L2 regularisation (alpha), use early stopping, reduce network size, or get more training data.' },
      { id: 'q4', prompt: 'The alpha parameter in MLPClassifier controls:', options: ['The learning rate', 'L2 regularisation — penalises large weights to prevent overfitting', 'The number of hidden layers', 'The activation function steepness'], answerIndex: 1, explanation: 'Alpha adds λΣw² to the loss function. Higher alpha = stronger penalty on large weights = simpler model = more regularisation. Typical values: 0.0001 to 0.01.' },
      { id: 'q5', prompt: 'With 500 training samples, which model would you try FIRST before a neural network?', options: ['A deeper neural network with more layers', 'Random Forest or Gradient Boosting — tree models typically outperform neural networks on small tabular datasets', 'A convolutional neural network', 'Increase neurons to compensate for small data'], answerIndex: 1, explanation: 'Neural networks need thousands of examples to outperform simpler models. With n < 1,000, tree-based ensembles are faster, more interpretable, and typically more accurate on tabular data.' }
    ]
  },
  'ml-i-5': {
    title: 'Check your understanding: NLP Basics',
    intro: 'Test your knowledge of text features, TF-IDF, and text classification.',
    questions: [
      { id: 'q1', prompt: 'TF-IDF (Term Frequency-Inverse Document Frequency) assigns high weight to words that:', options: ['Appear in every document', 'Appear frequently in a specific document but rarely across all documents — discriminating words', 'Are the longest words in the corpus', 'Appear exactly once in the corpus'], answerIndex: 1, explanation: 'TF-IDF = TF × log(N/df). High TF = frequent in this document. High IDF = rare across all documents. Words like "the" get low IDF (appear everywhere). "blockchain" in a tech article gets high TF-IDF.' },
      { id: 'q2', prompt: 'Why does ngram_range=(1,2) improve text classification over just unigrams?', options: ['It doubles the training speed', 'Bigrams capture word combinations — "not good" vs "good" have opposite sentiment, which unigrams miss', 'It reduces the feature space', 'It handles misspellings'], answerIndex: 1, explanation: 'Unigrams treat "not" and "good" as independent. Bigrams capture "not good" as a single feature with negative sentiment. This is crucial for negations and compound expressions.' },
      { id: 'q3', prompt: 'For sentiment classification of 10,000 movie reviews, which approach is most practical as a baseline?', options: ['Fine-tune BERT (billions of parameters)', 'TF-IDF + LinearSVC — achieves 90-95% accuracy, trains in seconds, and is fully interpretable', 'Word2Vec embeddings from scratch', 'Character-level CNN'], answerIndex: 1, explanation: 'TF-IDF + LinearSVC is the text classification workhorse. It achieves near-BERT accuracy on many tasks, takes seconds to train, and you can inspect the top positive/negative coefficients directly.' },
      { id: 'q4', prompt: 'Why use min_df=2 in TfidfVectorizer?', options: ['To only use words with 2 letters', 'To ignore words that appear in fewer than 2 documents — removing rare misspellings and noise terms', 'To limit each document to 2 features', 'To use bigrams only'], answerIndex: 1, explanation: 'min_df filters out extremely rare words (typos, proper nouns, one-off tokens). These add features without generalisation value. They inflate vocabulary and can cause overfitting.' },
      { id: 'q5', prompt: 'After fitting a LinearSVC on TF-IDF features, you can inspect coef_[0] to find:', options: ['The model accuracy', 'The feature importance — words with highest coefficients are most predictive of the positive class', 'The training loss', 'The optimal threshold'], answerIndex: 1, explanation: 'In a linear classifier, the coefficient for each feature (TF-IDF term) represents its contribution to the decision. Positive large values = strong positive class signal. Negative = strong negative class signal.' }
    ]
  },
  'ml-i-6': {
    title: 'Check your understanding: Model Deployment',
    intro: 'Test your knowledge of FastAPI and productionising ML models.',
    questions: [
      { id: 'q1', prompt: 'Why save the entire sklearn Pipeline (not just the model) with joblib.dump?', options: ['The pipeline file is smaller', 'The pipeline includes the preprocessing steps (scaler, vectoriser) — saving only the model would require separate preprocessing at serving time, risking training-serving skew', 'joblib only works with pipelines', 'The pipeline improves prediction accuracy'], answerIndex: 1, explanation: 'Training-serving skew is a major production ML failure mode. If the API applies different scaling than training, predictions are wrong. Saving the pipeline ensures identical preprocessing at inference.' },
      { id: 'q2', prompt: 'Pydantic BaseModel in FastAPI is used to:', options: ['Define the database schema', 'Validate and serialise request/response data — enforcing types and constraints, rejecting invalid inputs before they reach the model', 'Define the model architecture', 'Set up routing'], answerIndex: 1, explanation: 'Pydantic models auto-validate: ge=300 on credit_score rejects values below 300 with a clear error message. This protects the model from bad inputs causing runtime errors.' },
      { id: 'q3', prompt: 'What does @app.post("/predict") decorator do in FastAPI?', options: ['Creates a database record', 'Registers a function as the HTTP POST handler for the /predict endpoint — called whenever a POST request is made to that URL', 'Runs the function at startup', 'Caches prediction results'], answerIndex: 1, explanation: 'FastAPI decorators bind Python functions to HTTP routes. @app.post("/predict") means: when a POST request hits /predict, call this function with the request body parsed as the Pydantic model.' },
      { id: 'q4', prompt: 'The /docs endpoint in a FastAPI app provides:', options: ['Source code documentation', 'Auto-generated Swagger UI — an interactive API explorer built from your route definitions and Pydantic schemas', 'Model performance metrics', 'Docker container logs'], answerIndex: 1, explanation: 'FastAPI reads your function signatures and Pydantic models to auto-generate OpenAPI documentation. /docs gives a live Swagger UI where anyone can test the API — no extra work required.' },
      { id: 'q5', prompt: 'Dockerising an ML API ensures:', options: ['The model is retrained automatically', 'The app and all its dependencies are packaged together — it runs identically on any machine or cloud environment', 'The API is faster than without Docker', 'No uvicorn server is needed'], answerIndex: 1, explanation: 'Docker containers encapsulate the Python version, all pip packages, model files, and code. "Works on my machine" is solved — the Docker image runs identically in dev, staging, and production.' }
    ]
  },

  // Statistics
  'st-b-1': {
    title: 'Check your understanding: Statistics Basics',
    intro: 'Test your knowledge of basic statistical concepts.',
    questions: [
      {
        id: 'q1',
        prompt: 'Why is Statistics important for data professionals?',
        options: ['It makes dashboards look prettier', 'It helps make confident decisions when dealing with incomplete, messy, or uncertain real-world data', 'It is required to install SQL', 'It allows you to bypass data cleaning'],
        answerIndex: 1,
        explanation: 'Data is almost always a sample of reality and contains noise. Statistics provides the mathematical framework to separate real trends from random luck.'
      },
      {
        id: 'q2',
        prompt: 'You are analyzing salaries at a small startup. 9 employees make ₹5 Lakhs. The CEO makes ₹5 Crores. Which metric best represents the "typical" employee salary?',
        options: ['The Mean (Average)', 'The Median', 'The Sum', 'The Maximum'],
        answerIndex: 1,
        explanation: 'The mean gets heavily skewed by the CEO’s massive salary. The median (the exact middle value) remains ₹5 Lakhs, which is a much more honest representation of the typical worker.'
      },
      {
        id: 'q3',
        prompt: 'What does "Standard Deviation" tell you about a dataset?',
        options: ['How many errors are in the data', 'The difference between the absolute highest and lowest values', 'How spread out the numbers are around the average', 'The probability of the data being true'],
        answerIndex: 2,
        explanation: 'A small standard deviation means most values are clustered tightly around the mean. A large one means the values are widely scattered.'
      },
      {
        id: 'q4',
        prompt: 'If a baby\'s weight is in the 90th percentile, what does that mean?',
        options: ['The baby weighs 90 pounds', 'The baby weighs exactly 90% of the average weight', 'The baby weighs more than 90% of other babies', 'The baby has a 90% chance of being healthy'],
        answerIndex: 2,
        explanation: 'Percentiles rank data. Being in the 90th percentile means you are above 90% of the population in that specific metric.'
      },
      {
        id: 'q5',
        prompt: 'A company tests a new website button color and sees a 2% increase in clicks over two days. Why should they use a statistical hypothesis test before celebrating?',
        options: ['To automatically change the button color for everyone', 'To prove if the 2% increase was likely caused by the color change, or if it was just random daily fluctuation (luck)', 'To calculate the exact monetary profit', 'To make the data look more complex'],
        answerIndex: 1,
        explanation: 'Small fluctuations happen naturally. Hypothesis testing tells you if an observed change is "statistically significant" (real) or just noise.'
      }
    ]
  },

  'st-b-2': {
    title: 'Check your understanding: Descriptive Statistics',
    intro: 'Test your knowledge of central tendency, spread, and skewness.',
    questions: [
      { id: 'q1', prompt: 'A dataset of 1,000 employee salaries has mean ₹13.5 LPA and median ₹8.4 LPA. What does this tell you?', options: ['Both values are reliable', 'The data is negatively skewed', 'A few very high earners pull the mean above the typical salary — positive skew', 'Mean and median should always be equal'], answerIndex: 2, explanation: 'When mean > median, the distribution has a long right tail — a few very high values drag the mean upward. Median better represents the typical employee.' },
      { id: 'q2', prompt: 'What does IQR (Interquartile Range) measure?', options: ['The difference between max and min', 'The spread of the middle 50% of the data (Q3 − Q1)', 'The average absolute deviation from the mean', 'The range of outliers'], answerIndex: 1, explanation: 'IQR = Q3 − Q1. It measures the spread of the central 50% of data, making it resistant to outliers unlike the full range.' },
      { id: 'q3', prompt: 'Using the Tukey method, a value is an outlier if it is below Q1 − 1.5×IQR or above Q3 + 1.5×IQR. If Q1=6, Q3=14, IQR=8, what is the upper fence?', options: ['22', '26', '18', '30'], answerIndex: 1, explanation: 'Upper fence = Q3 + 1.5×IQR = 14 + 1.5×8 = 14 + 12 = 26. Values above ₹26 would be flagged as outliers.' },
      { id: 'q4', prompt: 'Which measure of spread is reported in the SAME UNITS as the original data?', options: ['Variance', 'Standard deviation', 'Coefficient of variation', 'Skewness'], answerIndex: 1, explanation: 'Variance squares the units (₹²), which is uninterpretable. Standard deviation is the square root of variance, returning to the original units (₹).' },
      { id: 'q5', prompt: 'Skewness of +1.8 indicates what about the salary distribution?', options: ['Symmetric distribution', 'Long left tail — median > mean', 'Long right tail — mean > median, pulled by high earners', 'Bimodal distribution'], answerIndex: 2, explanation: 'Positive skewness means a right-skewed distribution with a long tail of high values. The mean is pulled above the median. Salary data almost always shows positive skew.' }
    ]
  },

  'st-b-3': {
    title: 'Check your understanding: Visualising Data',
    intro: 'Test your knowledge of histograms, box plots, and scatter plots.',
    questions: [
      { id: 'q1', prompt: 'What does Anscombe\'s Quartet demonstrate?', options: ['Mean and median are always equal', 'Four datasets can have identical summary statistics but completely different shapes — visualisation is essential', 'Scatter plots are always better than histograms', 'Standard deviation fully describes a distribution'], answerIndex: 1, explanation: 'Anscombe\'s Quartet famously shows four datasets with the same mean, variance, and correlation, but radically different shapes when plotted. Always plot before calculating.' },
      { id: 'q2', prompt: 'In a box plot, the box spans from Q1 to Q3. What does the line in the middle of the box represent?', options: ['The mean', 'The mode', 'The median (Q2)', 'The standard deviation'], answerIndex: 2, explanation: 'The horizontal line inside the box marks the median (Q2, 50th percentile). If the median line is closer to Q1, the data is right-skewed.' },
      { id: 'q3', prompt: 'You are comparing salary distributions across 5 departments. Which chart type is most appropriate?', options: ['Line chart (one line per department)', 'Single histogram of all salaries combined', 'Side-by-side box plots (one per department)', 'Pie chart of each department\'s share'], answerIndex: 2, explanation: 'Side-by-side box plots show the median, IQR, and outliers for each group simultaneously, making comparison easy. Histograms overlap poorly for multiple groups.' },
      { id: 'q4', prompt: 'Too many bins in a histogram create which problem?', options: ['The distribution looks too smooth and hides peaks', 'Spiky noise that makes it impossible to see the underlying shape', 'The chart becomes a box plot', 'Skewness disappears'], answerIndex: 1, explanation: 'Too many bins produce a jagged, noisy chart where each bin has very few observations. Too few bins over-smooth and hide real structure. The sweet spot is usually 20–50 bins for datasets of hundreds of rows.' },
      { id: 'q5', prompt: 'What does a scatter plot show that a bar chart cannot?', options: ['Category frequencies', 'The relationship between two numeric variables for individual observations', 'Cumulative totals over time', 'The proportion each category contributes to the whole'], answerIndex: 1, explanation: 'Scatter plots reveal correlation, clusters, outliers, and non-linear patterns between two numeric variables. Bar charts compare aggregate totals across categories.' }
    ]
  },

  'st-b-4': {
    title: 'Check your understanding: Probability',
    intro: 'Test your knowledge of probability rules and Bayes\' theorem.',
    questions: [
      { id: 'q1', prompt: 'If P(A) = 0.4, what is P(not A)?', options: ['0.4', '0.6', '1.4', '0.16'], answerIndex: 1, explanation: 'The complement rule: P(not A) = 1 − P(A) = 1 − 0.4 = 0.6. The probability of all outcomes must sum to 1.' },
      { id: 'q2', prompt: 'P(A) = 0.7, P(B) = 0.5, P(A and B) = 0.4. What is P(A or B)?', options: ['1.2', '0.8', '0.35', '0.3'], answerIndex: 1, explanation: 'Addition rule: P(A or B) = P(A) + P(B) − P(A and B) = 0.7 + 0.5 − 0.4 = 0.8. We subtract the overlap to avoid double-counting.' },
      { id: 'q3', prompt: 'A rare disease affects 1% of the population. A test is 90% accurate. If you test positive, the probability you actually have the disease is roughly:', options: ['90%', '50%', '99%', 'About 8–10%'], answerIndex: 3, explanation: 'Bayes\' theorem: most positives are false alarms because the disease is so rare. With 1% prevalence and 10% false positive rate, only ~8% of positives truly have the disease.' },
      { id: 'q4', prompt: 'What phenomenon causes people to overestimate the probability of a positive test result indicating disease?', options: ['Law of large numbers', 'Central Limit Theorem', 'Base rate neglect — ignoring how rare the condition is', 'Regression to the mean'], answerIndex: 2, explanation: 'Base rate neglect: people ignore P(Disease) = 1% and focus only on the 90% accuracy. Bayes\' theorem forces you to account for the prior probability (base rate).' },
      { id: 'q5', prompt: 'If two events A and B are independent, P(A and B) = ?', options: ['P(A) + P(B)', 'P(A) × P(B)', 'P(A) / P(B)', 'P(A) − P(B)'], answerIndex: 1, explanation: 'For independent events, the multiplication rule applies: P(A and B) = P(A) × P(B). Example: P(2 heads) = 0.5 × 0.5 = 0.25.' }
    ]
  },

  'st-b-5': {
    title: 'Check your understanding: Distributions',
    intro: 'Test your knowledge of the normal, binomial, and Poisson distributions.',
    questions: [
      { id: 'q1', prompt: 'According to the 68-95-99.7 rule, what percentage of data falls within ±2 standard deviations of the mean in a normal distribution?', options: ['68%', '95%', '99.7%', '50%'], answerIndex: 1, explanation: '68% within ±1 SD, 95% within ±2 SD, 99.7% within ±3 SD. This rule applies to any normally distributed variable.' },
      { id: 'q2', prompt: 'A student scores 82 on a test with mean=70 and SD=10. What is their z-score?', options: ['0.82', '1.2', '82', '8.2'], answerIndex: 1, explanation: 'z = (x − μ) / σ = (82 − 70) / 10 = 1.2. A z-score of 1.2 means the student scored 1.2 standard deviations above the mean.' },
      { id: 'q3', prompt: 'Which distribution is appropriate for counting "number of successes in 20 independent trials with 30% probability each"?', options: ['Normal', 'Poisson', 'Binomial', 'Uniform'], answerIndex: 2, explanation: 'Binomial(n=20, p=0.30) — counting successes across a fixed number of independent trials, each with the same probability. The keywords are "n trials" and "probability p."' },
      { id: 'q4', prompt: 'A call centre receives an average of 5 calls per hour. The distribution of calls per hour follows:', options: ['Normal distribution', 'Binomial distribution', 'Poisson distribution', 'Exponential distribution'], answerIndex: 2, explanation: 'Poisson models the number of rare, independent events occurring in a fixed interval (time, space). Average rate λ=5 calls/hour.' },
      { id: 'q5', prompt: 'In a right-skewed salary distribution, where do the mean and median sit relative to each other?', options: ['Mean = Median', 'Mean < Median', 'Mean > Median', 'They are both at the mode'], answerIndex: 2, explanation: 'In a right-skewed distribution, the long right tail drags the mean toward high values, leaving it above the median. Mean > Median is the signature of positive skew.' }
    ]
  },

  'st-b-6': {
    title: 'Check your understanding: Hypothesis Testing',
    intro: 'Test your knowledge of p-values, t-tests, and the hypothesis testing framework.',
    questions: [
      { id: 'q1', prompt: 'In a hypothesis test, the null hypothesis (H₀) represents:', options: ['The effect you believe is real', 'The boring baseline — no effect, any difference is random noise', 'The minimum sample size needed', 'The 95% confidence interval'], answerIndex: 1, explanation: 'H₀ is always the "nothing happened" baseline. You test whether data provides enough evidence to reject it in favour of the alternative H₁.' },
      { id: 'q2', prompt: 'A t-test returns p-value = 0.03. At α = 0.05, you:', options: ['Fail to reject H₀', 'Reject H₀ — the result is statistically significant', 'Accept H₀ as definitely true', 'Need to collect more data'], answerIndex: 1, explanation: 'p=0.03 < α=0.05, so you reject H₀. The result would occur by random chance only 3% of the time under H₀ — strong enough evidence to declare significance.' },
      { id: 'q3', prompt: 'What does a p-value of 0.04 mean?', options: ['96% probability the alternative hypothesis is true', 'There is a 4% probability of seeing results this extreme (or more) if H₀ were true', '4% of the data supports the null hypothesis', '4% of the sample has the effect'], answerIndex: 1, explanation: 'A p-value is the probability of your observed result (or more extreme) IF H₀ were true. It does NOT measure the probability that H₁ is true.' },
      { id: 'q4', prompt: 'Why use Welch\'s t-test (equal_var=False) rather than the standard t-test when comparing two groups?', options: ['It always gives a smaller p-value', 'It does not assume equal variance between groups — more robust in practice', 'It works with categorical data', 'It requires smaller samples'], answerIndex: 1, explanation: 'The standard t-test assumes equal variances. In real data, groups often have different spreads. Welch\'s t-test handles unequal variances — it is the safer default.' },
      { id: 'q5', prompt: 'A pharmaceutical company finds p=0.0001 for a new drug reducing blood pressure by 0.5 mmHg. The minimum clinically meaningful reduction is 5 mmHg. What is the key insight?', options: ['The drug is highly effective', 'Statistical significance does not guarantee practical significance — the effect is real but clinically meaningless', 'They need to run more tests', 'The null hypothesis is definitely false'], answerIndex: 1, explanation: 'With large samples, even tiny effects become statistically significant. Always assess effect size alongside p-value. A 0.5 mmHg reduction may be real but has no clinical value.' }
    ]
  },

  // Statistics Intermediate quizzes
  'st-i-1': {
    title: 'Check your understanding: Sampling',
    intro: 'Test your knowledge of sampling methods and sampling distributions.',
    questions: [
      { id: 'q1', prompt: 'Which sampling method divides the population into subgroups and samples proportionally from each?', options: ['Simple random sampling', 'Cluster sampling', 'Stratified sampling', 'Convenience sampling'], answerIndex: 2, explanation: 'Stratified sampling ensures all subgroups (strata) are represented in correct proportion. It reduces sampling error when the strata are homogeneous internally but heterogeneous across each other.' },
      { id: 'q2', prompt: 'The 1936 Literary Digest poll surveyed 2.4 million people but predicted the wrong winner. The main cause was:', options: ['Sample size was too small', 'The sampling frame (phone and car owners) systematically excluded less wealthy, Democratic-leaning voters', 'They used cluster sampling', 'The margin of error was too small'], answerIndex: 1, explanation: 'Classic example of selection bias: the sampling frame (phone directories, car registrations) was biased toward wealthier respondents. Sample SIZE cannot fix a biased sampling FRAME.' },
      { id: 'q3', prompt: 'The Central Limit Theorem states that as sample size grows, the sampling distribution of the mean:', options: ['Becomes more skewed', 'Approaches a normal distribution regardless of the population distribution', 'Spreads out and increases in variance', 'Converges to the population distribution exactly'], answerIndex: 1, explanation: 'CLT is the foundation of frequentist inference: sample means become normally distributed as n grows, even if the population is skewed. This justifies using z/t-tests on real-world data.' },
      { id: 'q4', prompt: 'Standard error of the mean (SE) = σ/√n. If you quadruple your sample size from 100 to 400, the SE:', options: ['Stays the same', 'Doubles', 'Halves', 'Quadruples'], answerIndex: 2, explanation: 'SE = σ/√n. Quadrupling n multiplies √n by 2, so SE is divided by 2 — it halves. To halve the standard error (and margin of error), you need 4× the data.' },
      { id: 'q5', prompt: 'Which sampling bias occurs when people who respond to a survey systematically differ from those who do not?', options: ['Selection bias', 'Survivorship bias', 'Response bias (non-response bias)', 'Undercoverage bias'], answerIndex: 2, explanation: 'Non-response bias: if satisfied customers respond and dissatisfied ones don\'t, you overestimate satisfaction. The sample of respondents differs systematically from the population.' }
    ]
  },

  'st-i-2': {
    title: 'Check your understanding: Confidence Intervals',
    intro: 'Test your knowledge of confidence interval construction and interpretation.',
    questions: [
      { id: 'q1', prompt: 'A 95% confidence interval for mean satisfaction is [7.05, 7.35]. The correct interpretation is:', options: ['There is a 95% probability the true mean is in this interval', 'If we repeated sampling 100 times, about 95 of the resulting intervals would contain the true mean', 'We are 95% sure every respondent scores between 7.05 and 7.35', 'The true mean is definitely 7.20'], answerIndex: 1, explanation: 'The true mean is a fixed number — it either is or isn\'t in the interval. 95% confidence refers to the long-run procedure: 95% of intervals built this way capture the true parameter.' },
      { id: 'q2', prompt: 'Which factor does NOT narrow the confidence interval?', options: ['Larger sample size', 'Lower confidence level (80% instead of 95%)', 'Smaller population standard deviation', 'Increasing the significance level α'], answerIndex: 3, explanation: 'Increasing α narrows the interval only if α corresponds to a lower confidence level. But phrased as "increasing α," it corresponds to lower confidence which does narrow it. Actually — a larger population SD widens the interval; larger n, smaller SD, or lower confidence level all narrow it.' },
      { id: 'q3', prompt: '312 out of 400 patients are satisfied. The 95% CI for the proportion is approximately [73.5%, 82.5%]. This means:', options: ['Exactly 78% of all patients are satisfied', 'We are 95% confident the true population satisfaction rate is between 73.5% and 82.5%', '95% of individual patients score between 73.5 and 82.5', '73.5% of surveys have this same result'], answerIndex: 1, explanation: 'The CI estimates the population parameter (true satisfaction rate) with stated uncertainty. It says nothing about individual patients or other surveys.' },
      { id: 'q4', prompt: 'To halve the margin of error, you must:', options: ['Double the sample size', 'Quadruple the sample size', 'Use a smaller confidence level', 'Increase the standard deviation'], answerIndex: 1, explanation: 'Margin of error = z × σ/√n. Halving ME requires √n to double, so n must quadruple. This is why precision is expensive: going from ±10% to ±5% means 4× the data.' },
      { id: 'q5', prompt: 'Using a t-distribution instead of z-distribution for constructing CIs is appropriate when:', options: ['The sample size is large (n > 1000)', 'The population standard deviation is known', 'The population standard deviation is unknown and estimated from the sample', 'The data is categorical'], answerIndex: 2, explanation: 'When σ is unknown (almost always in practice), you estimate it with the sample s and use the t-distribution, which has heavier tails to account for this extra uncertainty. As n grows, t converges to z.' }
    ]
  },

  'st-i-3': {
    title: 'Check your understanding: Advanced Hypothesis Tests',
    intro: 'Test your knowledge of ANOVA, paired t-test, and chi-square.',
    questions: [
      { id: 'q1', prompt: 'Why should you use a paired t-test instead of an independent t-test for before/after measurements on the same patients?', options: ['Paired t-test requires less data', 'Pairing removes between-subject variability, making the test more powerful at detecting real effects', 'Independent t-test requires normal data', 'Paired t-test allows three groups'], answerIndex: 1, explanation: 'Patients differ naturally from each other. Pairing removes this between-person noise, isolating the treatment effect. This dramatically reduces error variance and increases statistical power.' },
      { id: 'q2', prompt: 'One-way ANOVA tests the null hypothesis that:', options: ['All group variances are equal', 'All group means are equal', 'At least one group mean differs from the others', 'The groups are normally distributed'], answerIndex: 1, explanation: 'H₀ for ANOVA: μ₁ = μ₂ = … = μₖ (all group means are equal). Rejecting H₀ means at least one group mean differs — but not which ones. That requires a post-hoc test.' },
      { id: 'q3', prompt: 'After a significant ANOVA result, which post-hoc test should you use to find which specific pairs differ?', options: ['Running separate t-tests for all pairs', 'Tukey HSD (Honestly Significant Difference)', 'Chi-square test', 'Another ANOVA on subgroups'], answerIndex: 1, explanation: 'Tukey HSD controls the family-wise error rate when comparing all pairs simultaneously. Running separate t-tests inflates the false positive rate to ~14% for 3 groups at α=0.05.' },
      { id: 'q4', prompt: 'The chi-square test of independence tests whether:', options: ['Two numeric variables are correlated', 'Two categorical variables are related or independent', 'Sample means match a known population mean', 'Variances are equal across groups'], answerIndex: 1, explanation: 'Chi-square compares observed vs expected cell counts in a contingency table. It tests whether knowing one categorical variable tells you anything about the other.' },
      { id: 'q5', prompt: 'Why is running 3 separate t-tests a problem instead of ANOVA when comparing 3 groups?', options: ['t-tests require larger samples', 'Each t-test at α=0.05 has a 5% false positive rate; with 3 tests, the combined false positive rate inflates to ~14%', 'ANOVA is always more accurate', 't-tests cannot handle continuous data'], answerIndex: 1, explanation: 'Multiple comparisons inflate the family-wise error rate. 3 t-tests: P(at least 1 false positive) ≈ 1 − 0.95³ ≈ 14%. ANOVA controls this with a single omnibus test.' }
    ]
  },

  'st-i-4': {
    title: 'Check your understanding: Correlation',
    intro: 'Test your knowledge of Pearson r, Spearman ρ, and correlation pitfalls.',
    questions: [
      { id: 'q1', prompt: 'Pearson correlation coefficient r = −0.85 between temperature and hot drink sales means:', options: ['Hot drink sales cause lower temperatures', 'As temperature rises, hot drink sales tend to decrease strongly — strong negative linear relationship', 'The two variables are independent', 'Temperature explains 85% of the variance in sales'], answerIndex: 1, explanation: 'r = −0.85 indicates a strong negative linear relationship. As one goes up, the other tends to go down. But correlation ≠ causation — a confounder (season) likely drives both.' },
      { id: 'q2', prompt: 'Spearman correlation (ρ) is preferred over Pearson (r) when:', options: ['The data is large (n > 1000)', 'The relationship is linear and there are no outliers', 'The data has outliers, is ordinal, or the relationship is monotonic but not linear', 'You want to measure the slope of the regression line'], answerIndex: 2, explanation: 'Spearman ranks the data before correlating, making it resistant to outliers and valid for non-linear monotonic relationships. Pearson assumes linearity and is sensitive to extreme values.' },
      { id: 'q3', prompt: 'Ice cream sales and drowning rates are highly correlated. What is the most likely explanation?', options: ['Ice cream causes drowning', 'Drowning causes ice cream sales', 'A confounder (hot weather) independently causes both', 'The correlation is mathematically impossible'], answerIndex: 2, explanation: 'Classic confounding: hot weather increases both beach swimming (drowning risk) and ice cream sales. Neither causes the other. Always consider confounders before inferring causation.' },
      { id: 'q4', prompt: 'If r = 0.87 between study hours and exam score, the proportion of variance in exam scores explained by study hours is:', options: ['87%', '0.87%', '75.7%', '43.5%'], answerIndex: 2, explanation: 'R² = r² = 0.87² = 0.757 = 75.7%. R² (coefficient of determination) is the proportion of variance explained. r itself is not a percentage — you must square it.' },
      { id: 'q5', prompt: 'A correlation heatmap shows r = 0.95 between "number of TVs" and "life expectancy" across countries. What is the most statistically sound interpretation?', options: ['Buying more TVs extends life', 'Wealthy countries have both more TVs and better healthcare — GDP is the underlying confounder', 'Life expectancy causes TV purchases', 'The correlation is spurious and cannot exist'], answerIndex: 1, explanation: 'National wealth (GDP) drives both TV ownership and healthcare quality. Correlation between TV ownership and life expectancy is real but misleading — controlled for GDP, the effect likely disappears.' }
    ]
  },

  'st-i-5': {
    title: 'Check your understanding: Simple Linear Regression',
    intro: 'Test your knowledge of OLS regression, R², and residual diagnostics.',
    questions: [
      { id: 'q1', prompt: 'In the regression equation: rent = 3000 + 12×area, what does the coefficient 12 represent?', options: ['The rent when area is 0', 'The rent increases by ₹12 per additional sq ft, holding everything else constant', 'The R² of the model', 'The standard error of the prediction'], answerIndex: 1, explanation: 'The slope β₁ = 12 means each additional square foot of area is associated with ₹12 more monthly rent. The intercept (3000) is the baseline rent when area = 0.' },
      { id: 'q2', prompt: 'R² = 0.72 for a regression of rent on area. This means:', options: ['72% of apartments are correctly predicted', 'The model explains 72% of the variance in rent; 28% is due to other factors', 'The slope is 0.72', 'There is 72% chance the regression is significant'], answerIndex: 1, explanation: 'R² is the proportion of variance in Y explained by X. 0.72 means area alone accounts for 72% of rent variation. The remaining 28% is explained by location, furnishing, floor, etc.' },
      { id: 'q3', prompt: 'A residuals vs fitted plot shows a funnel pattern (residuals spread more at higher fitted values). This violates which assumption?', options: ['Linearity', 'Normality of residuals', 'Homoscedasticity (constant variance)', 'Independence of observations'], answerIndex: 2, explanation: 'A funnel shape (heteroscedasticity) means variance is not constant — it grows with the predicted value. Common fix: log-transform the outcome variable.' },
      { id: 'q4', prompt: 'Ordinary Least Squares (OLS) finds the line that minimises which quantity?', options: ['Sum of absolute residuals', 'Sum of squared residuals (SSR)', 'Maximum individual residual', 'R²'], answerIndex: 1, explanation: 'OLS minimises the sum of squared differences between observed and predicted values (Σ(yᵢ − ŷᵢ)²). Squaring penalises large errors more heavily than small ones.' },
      { id: 'q5', prompt: 'A Q-Q plot of residuals where points curve away from the diagonal line suggests:', options: ['Heteroscedasticity', 'The residuals are not normally distributed', 'Strong R²', 'The model is overfit'], answerIndex: 1, explanation: 'Q-Q plots test normality. Points following the diagonal = normal. Curves or S-shapes indicate non-normal residuals, which affects the validity of confidence intervals and p-values for coefficients.' }
    ]
  },

  'st-i-6': {
    title: 'Check your understanding: Multiple Regression',
    intro: 'Test your knowledge of multiple regression, multicollinearity, and dummy encoding.',
    questions: [
      { id: 'q1', prompt: 'In multiple regression, a coefficient of −150 on "age_years" means:', options: ['Older apartments are more expensive by ₹150', 'Each additional year of building age is associated with ₹150 less monthly rent, holding all other features constant', 'Age explains 15% of rent variance', '150 apartments have this age'], answerIndex: 1, explanation: 'Multiple regression coefficients are partial effects — the change in Y per unit change in that predictor, CONTROLLING for all other predictors. "Holding everything else constant" is the key phrase.' },
      { id: 'q2', prompt: 'VIF (Variance Inflation Factor) > 10 indicates:', options: ['Strong model fit', 'Severe multicollinearity — the predictor is nearly redundant with other predictors', 'The predictor is the most important variable', 'Heteroscedasticity'], answerIndex: 1, explanation: 'VIF measures how much variance of a coefficient is inflated due to correlations with other predictors. VIF > 5 is concerning, VIF > 10 is severe. Fix: remove or combine the collinear predictors.' },
      { id: 'q3', prompt: 'When encoding a categorical variable with 3 categories (Unfurnished, Semi, Furnished) using get_dummies with drop_first=True, how many new binary columns are created?', options: ['3', '1', '2', '0'], answerIndex: 2, explanation: 'With 3 categories and drop_first=True, you get 2 dummy columns (Semi and Furnished, with Unfurnished as the reference). The third is implied — when both dummies are 0, the apartment is Unfurnished.' },
      { id: 'q4', prompt: 'Adjusted R² penalises adding predictors that:', options: ['Are highly correlated with Y', 'Don\'t meaningfully improve the model fit — it discourages overfitting with useless variables', 'Have high VIF scores', 'Are categorical'], answerIndex: 1, explanation: 'R² always increases when you add any predictor (even random noise). Adjusted R² subtracts a penalty for each added predictor, only increasing if the predictor improves fit enough.' },
      { id: 'q5', prompt: 'A train/test split in regression is used to:', options: ['Split the data alphabetically', 'Evaluate whether the model generalises to unseen data — test R² estimates real-world performance', 'Reduce multicollinearity', 'Improve the R² score'], answerIndex: 1, explanation: 'Training R² measures fit on the data the model saw. Test R² measures generalisation to new data. A large gap (train R²=0.95, test R²=0.50) signals overfitting.' }
    ]
  },

  // Statistics Advanced quizzes
  'st-a-1': {
    title: 'Check your understanding: Logistic Regression',
    intro: 'Test your knowledge of logistic regression, the sigmoid function, and AUC-ROC.',
    questions: [
      { id: 'q1', prompt: 'Why can\'t you use linear regression to predict binary outcomes (0/1)?', options: ['Linear regression requires categorical features', 'Linear regression can predict values outside [0,1], making it invalid as a probability', 'Linear regression only works with large samples', 'Linear regression cannot handle numeric features'], answerIndex: 1, explanation: 'Linear regression predicts real numbers from −∞ to +∞. Probabilities must lie in [0,1]. The sigmoid function in logistic regression squashes any input to this range.' },
      { id: 'q2', prompt: 'The sigmoid function output of 0.75 means:', options: ['The prediction is 75% accurate', 'The model predicts a 75% probability of the positive class (Y=1)', 'The weight/coefficient is 0.75', '75 out of 100 examples in this region are positive'], answerIndex: 1, explanation: 'The sigmoid output is a probability. 0.75 = 75% probability of Y=1. Using the default threshold of 0.5, this example would be classified as positive (1).' },
      { id: 'q3', prompt: 'An AUC-ROC of 0.85 means:', options: ['The model is correct 85% of the time', 'If you randomly pick a positive and a negative example, there\'s an 85% chance the model ranks the positive higher', '85% of predictions use threshold 0.5', 'The false positive rate is 15%'], answerIndex: 1, explanation: 'AUC-ROC measures ranking ability. 0.85 means the model correctly ranks a positive higher than a random negative 85% of the time. 0.5=random, 1.0=perfect.' },
      { id: 'q4', prompt: 'A loan default model has 95% accuracy because only 5% of loans default. Why is this misleading?', options: ['95% is too high to be real', 'Always predicting "no default" achieves 95% accuracy without any model — accuracy is meaningless for imbalanced classes', 'The model has too many features', 'The training data has data leakage'], answerIndex: 1, explanation: 'Class imbalance trap: a dummy classifier predicting the majority class always achieves the majority class rate in accuracy. Use AUC-ROC, precision, recall, and F1 for imbalanced problems.' },
      { id: 'q5', prompt: 'Lowering the classification threshold from 0.5 to 0.3 will generally:', options: ['Decrease recall, increase precision', 'Increase recall (catch more positives) at the cost of lower precision (more false alarms)', 'Improve AUC-ROC', 'Make the model predict more negatives'], answerIndex: 1, explanation: 'Lower threshold = more cases predicted positive = higher recall (fewer missed positives) but lower precision (more false positives). Set the threshold based on the business cost of each error type.' }
    ]
  },

  'st-a-2': {
    title: 'Check your understanding: Time Series Analysis',
    intro: 'Test your knowledge of decomposition, stationarity, and SARIMA forecasting.',
    questions: [
      { id: 'q1', prompt: 'Which of the four time series components captures repeating patterns at fixed intervals (e.g., higher sales every December)?', options: ['Trend', 'Cyclical', 'Seasonality', 'Residual'], answerIndex: 2, explanation: 'Seasonality = fixed-period repeating patterns (weekly, monthly, annual). Cyclical patterns have no fixed period (economic cycles). Trend is the long-term direction.' },
      { id: 'q2', prompt: 'The Augmented Dickey-Fuller (ADF) test returns p = 0.41. What should you do?', options: ['Proceed with ARIMA — the series is stationary', 'Apply differencing — the high p-value indicates non-stationarity', 'Remove the trend component and stop', 'Increase the sample size'], answerIndex: 1, explanation: 'ADF p < 0.05 → stationary. p ≥ 0.05 → non-stationary, apply differencing. Most time series with trends or seasonality are non-stationary and need differencing before ARIMA modelling.' },
      { id: 'q3', prompt: 'SARIMA(p,d,q)(P,D,Q,m) — what does m represent?', options: ['The number of ARIMA models', 'The seasonal period (e.g., 12 for monthly data with annual seasonality)', 'The maximum lag for autocorrelation', 'The number of training observations'], answerIndex: 1, explanation: 'm is the seasonal period. Monthly data with annual seasonality → m=12. Weekly data with annual seasonality → m=52. SARIMA adds seasonal AR, differencing, and MA terms on top of regular ARIMA.' },
      { id: 'q4', prompt: 'MAPE (Mean Absolute Percentage Error) of 6% means:', options: ['6% of forecasts are wrong', 'Forecasts are on average within ±6% of actual values', 'The model has 94% accuracy', '6 data points are outliers'], answerIndex: 1, explanation: 'MAPE = mean of |actual − forecast| / actual. A 6% MAPE means your forecasts are typically within ±6% of the actual values. For most business applications, MAPE < 10% is strong.' },
      { id: 'q5', prompt: 'Why must time series forecasts be evaluated on a held-out test set that comes AFTER the training data chronologically?', options: ['Chronological split is only for classification problems', 'Using future data in training is data leakage — the model would "know" patterns it shouldn\'t have seen during training', 'The test set must be larger than the training set', 'SARIMA only works on time-ordered data'], answerIndex: 1, explanation: 'For time series, you CANNOT randomly shuffle train/test. Information from the "future" leaking into training inflates performance metrics. Always use the most recent period as your test set.' }
    ]
  },

  'st-a-3': {
    title: 'Check your understanding: Bayesian Statistics',
    intro: 'Test your knowledge of priors, posteriors, and Bayesian inference.',
    questions: [
      { id: 'q1', prompt: 'In Bayesian statistics, the prior represents:', options: ['The probability of the data', 'Your belief about the parameter BEFORE seeing the data', 'The posterior divided by the likelihood', 'The p-value threshold'], answerIndex: 1, explanation: 'Prior P(θ) encodes your initial belief about the parameter. It can be based on domain knowledge, previous studies, or a non-informative (uniform) prior if you have no strong prior belief.' },
      { id: 'q2', prompt: 'After updating with data, the posterior probability P(θ|data) is proportional to:', options: ['Prior alone', 'Likelihood alone', 'Likelihood × Prior', 'Prior / Likelihood'], answerIndex: 2, explanation: 'Bayes\' theorem: P(θ|data) ∝ P(data|θ) × P(θ). The posterior combines the likelihood (what the data says) with the prior (what you believed before). More data → posterior dominated by likelihood.' },
      { id: 'q3', prompt: 'A Bayesian 95% credible interval means:', options: ['The same as a frequentist 95% CI', 'There is a 95% probability the true parameter lies within this interval, given the data', 'The interval contains 95% of the data', '95% of repeated samples produce this interval'], answerIndex: 1, explanation: 'Bayesian credible intervals support direct probability statements: "95% probability the true CTR is between X and Y." Frequentist CIs cannot make this statement — the true value is fixed, not random.' },
      { id: 'q4', prompt: 'The Beta distribution is the natural prior for which type of parameter?', options: ['Integer counts', 'Probabilities and proportions (values between 0 and 1)', 'Negative values', 'Unbounded continuous values'], answerIndex: 1, explanation: 'Beta(α, β) is defined on [0,1] and naturally represents uncertainty about probabilities. Beta(1,1) is uniform (no prior knowledge). Beta(2,20) encodes a belief of ~10% probability with moderate certainty.' },
      { id: 'q5', prompt: 'Bayesian A/B testing computes P(B better than A) = 87%. How does this differ from frequentist p-value testing?', options: ['They are mathematically equivalent', 'Bayesian gives a direct probability statement about which variant is better; frequentist p-values only assess whether to reject a null hypothesis', 'Bayesian requires larger samples', 'Both methods use p < 0.05 as the decision rule'], answerIndex: 1, explanation: 'Bayesian A/B: you get a direct answer ("87% probability B is better"). Frequentist: you only know whether to reject H₀="equal." Bayesian also allows continuous monitoring without inflating false positives.' }
    ]
  },

  'st-a-4': {
    title: 'Check your understanding: Advanced A/B Testing',
    intro: 'Test your knowledge of power analysis, the peeking problem, and bandits.',
    questions: [
      { id: 'q1', prompt: 'Statistical power of 80% means:', options: ['80% of tests will be correct', 'If the true effect exists, there is an 80% probability the test will detect it (reject H₀)', 'The false positive rate is 20%', '80% of the sample sees the treatment'], answerIndex: 1, explanation: 'Power = P(reject H₀ | H₁ is true) = 1 − β (Type II error rate). 80% power means: if the effect is real, you will detect it 80% of the time. Industry standard for sample size calculations.' },
      { id: 'q2', prompt: 'The "peeking problem" in A/B testing refers to:', options: ['Looking at user demographic data mid-test', 'Checking significance early and stopping when p < 0.05 appears, which inflates false positive rate to 25-30%', 'Using too small a sample', 'Running the test on mobile only'], answerIndex: 1, explanation: 'Peeking is the most common A/B testing mistake. Checking p-values repeatedly at fixed intervals until you hit p < 0.05 massively inflates false positives. Pre-register your sample size and only check once.' },
      { id: 'q3', prompt: 'O\'Brien-Fleming boundaries in sequential testing allow:', options: ['Peeking freely without any adjustment', 'Pre-planned interim looks with conservative thresholds early (requiring very large z-scores) and standard thresholds at the end', 'Removing failed variants from the test', 'Running multiple tests simultaneously'], answerIndex: 1, explanation: 'Sequential designs pre-specify when you will look and how extreme the result must be to stop early. OBF sets very high thresholds for early stops (z > 4.5) to control family-wise error rate.' },
      { id: 'q4', prompt: 'An epsilon-greedy bandit with ε=0.10 allocates traffic as:', options: ['10% to all variants equally', '10% randomly exploring all arms, 90% exploiting the current best arm', '90% to the control and 10% to the treatment', 'Random until convergence'], answerIndex: 1, explanation: 'Epsilon-greedy: with probability ε (10%), pick a random arm to explore. With probability 1−ε (90%), pick the arm with the highest estimated reward. Balances exploration vs exploitation.' },
      { id: 'q5', prompt: 'Cohen\'s h effect size for a proportion experiment converts what into a comparable scale?', options: ['Sample sizes into power', 'Two proportions into a standardised effect size that accounts for the non-linear variance of proportions', 'p-values into confidence intervals', 'Odds ratios into relative risk'], answerIndex: 1, explanation: 'Proportions near 0 or 1 have less variance than those near 0.5. Cohen\'s h = 2×arcsin(√p₁) − 2×arcsin(√p₂) applies a variance-stabilising transformation before computing effect size.' }
    ]
  },

  'st-a-5': {
    title: 'Check your understanding: Bootstrap and Permutation Tests',
    intro: 'Test your knowledge of resampling methods.',
    questions: [
      { id: 'q1', prompt: 'Bootstrap resampling involves:', options: ['Drawing samples from a theoretical distribution', 'Drawing n samples WITH replacement from the observed sample, thousands of times', 'Permuting the labels of observations', 'Splitting the data into equal halves'], answerIndex: 1, explanation: 'Bootstrap treats your sample as a surrogate population. Resampling with replacement from it thousands of times mimics the variability you would see if you could repeatedly sample from the real population.' },
      { id: 'q2', prompt: 'Bootstrap is especially useful for constructing confidence intervals when:', options: ['The sample is large and normally distributed', 'No closed-form CI formula exists — e.g., for the median, Gini coefficient, or any complex statistic', 'You have balanced groups', 'The data has no outliers'], answerIndex: 1, explanation: 'For statistics like the median, there is no simple formula for the standard error. Bootstrap provides distribution-free CIs for any statistic — just resample, compute the statistic, and take the 2.5/97.5 percentiles.' },
      { id: 'q3', prompt: 'In a permutation test, the null distribution is created by:', options: ['Assuming normality and computing t-statistics', 'Randomly shuffling group labels thousands of times and computing the test statistic each time', 'Resampling with replacement from each group separately', 'Using the chi-square distribution'], answerIndex: 1, explanation: 'Permutation test: if H₀ is true (no group difference), labels are exchangeable. Shuffling labels and recomputing the statistic builds the null distribution from your actual data — no distributional assumptions.' },
      { id: 'q4', prompt: 'Bootstrap confidence interval [6.2, 9.8] for the median means:', options: ['The sample median is 8.0', '95% of bootstrapped medians fell between 6.2 and 9.8 — the CI for the population median', 'The mean is between 6.2 and 9.8', 'The data ranges from 6.2 to 9.8'], answerIndex: 1, explanation: 'The bootstrap percentile CI takes the 2.5th and 97.5th percentiles of the bootstrap distribution of the median. This gives a 95% CI that does not require assuming normality.' },
      { id: 'q5', prompt: 'When is the permutation test preferred over the t-test?', options: ['When sample size is very large', 'When data is normally distributed', 'When data is non-normal, skewed, or you have small samples where normality assumption may fail', 'When you want a one-sided test'], answerIndex: 2, explanation: 'Permutation tests make no distributional assumptions. They are the gold standard when normality is questionable — especially with small samples, ordinal data, or unusual statistics.' }
    ]
  },

  'st-a-6': {
    title: 'Check your understanding: Causal Inference',
    intro: 'Test your knowledge of DiD, propensity score matching, and RDD.',
    questions: [
      { id: 'q1', prompt: 'The fundamental problem of causal inference is:', options: ['Data is always noisy', 'You can only observe each unit in ONE state — treated OR untreated — never both simultaneously', 'Correlation is always present in large datasets', 'Randomisation is always unethical'], answerIndex: 1, explanation: 'To know the causal effect, you need: what happened with the treatment AND what would have happened without it (the counterfactual). You can never observe both for the same individual at the same time.' },
      { id: 'q2', prompt: 'The key assumption for Difference-in-Differences (DiD) to produce valid causal estimates is:', options: ['Random assignment to treatment', 'Parallel trends: in the absence of treatment, both groups would have followed the same trajectory', 'Equal group sizes', 'No seasonality in the data'], answerIndex: 1, explanation: 'Parallel trends assumption: the treated and control groups were trending similarly before the intervention. If this holds, any post-intervention divergence is attributed to the treatment.' },
      { id: 'q3', prompt: 'A DiD estimate of −2.3 sick days means:', options: ['The treatment group had 2.3 more sick days after treatment', 'The treatment caused a reduction of 2.3 sick days per year, after accounting for the general trend seen in the control group', 'The control group improved by 2.3 days', '2.3% of the effect is attributable to the treatment'], answerIndex: 1, explanation: 'DiD = (treated after − treated before) − (control after − control before). It removes the common time trend, so the estimate is cleanly attributable to the treatment.' },
      { id: 'q4', prompt: 'Propensity Score Matching addresses which problem in observational studies?', options: ['Measurement error in outcomes', 'Selection bias: people who self-select into treatment differ from those who don\'t in ways that affect the outcome', 'Non-stationarity in time series', 'Multicollinearity in regression'], answerIndex: 1, explanation: 'PSM estimates the probability of treatment assignment (propensity score) from observable covariates, then matches treated individuals to similar untreated controls. This balances confounders and reduces selection bias.' },
      { id: 'q5', prompt: 'Regression Discontinuity Design (RDD) identifies causal effects by:', options: ['Comparing all treated vs all untreated observations', 'Exploiting a sharp policy cutoff — comparing units just below and just above the threshold', 'Randomising the threshold', 'Using before/after comparisons in both groups'], answerIndex: 1, explanation: 'Near the cutoff, units are essentially random — barely above or below by chance. RDD compares outcomes just below vs just above the threshold, providing a local randomised experiment around the cutoff.' }
    ]
  }
}

export function getModuleQuiz(courseSlug, moduleId) {
  return QUIZ_BANK[moduleId] || null
}
