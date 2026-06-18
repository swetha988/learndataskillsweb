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
