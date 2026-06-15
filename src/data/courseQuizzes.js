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
          expectedKeywords: ['select', '*', 'from', 'customers', 'where', 'country', 'india'],
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
          expectedKeywords: ['select', 'name', 'total', 'from', 'customers', 'join', 'orders', 'on', 'id', 'customer_id', 'where', 'total', '>', '1000'],
          explanation: 'An INNER JOIN is required on the common key (customer_id = id), followed by a WHERE clause for the total.'
        }
      ]
    }
  }
}

export const getCourseQuiz = (courseSlug, track) => {
  return COURSE_QUIZZES[courseSlug]?.[track] || null
}
