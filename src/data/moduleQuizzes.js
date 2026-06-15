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
  }
}

export function getModuleQuiz(courseSlug, moduleId) {
  return QUIZ_BANK[moduleId] || null
}
