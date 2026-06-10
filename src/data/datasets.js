/* ──────────────────────────────────────────────────────────────
   PLAYGROUND DATASETS
   Small, realistic tables loaded into the SQL playground.
   Stored as SQL schema + INSERT statements so SQL.js can use them.
   ────────────────────────────────────────────────────────────── */

export const DATASETS = {
  customers: {
    label: 'Customers',
    schema: `
      CREATE TABLE customers (
        id INTEGER PRIMARY KEY,
        name TEXT,
        email TEXT,
        city TEXT,
        country TEXT
      );
      INSERT INTO customers VALUES
        (1, 'Aditi Rao', 'aditi@example.com', 'Mumbai', 'India'),
        (2, 'Rohan Kumar', 'rohan@example.com', 'Bengaluru', 'India'),
        (3, 'Sarah Chen', 'sarah@example.com', 'Singapore', 'Singapore'),
        (4, 'James Okonkwo', 'james@example.com', 'Lagos', 'Nigeria'),
        (5, 'Priya Sharma', 'priya@example.com', 'Delhi', 'India'),
        (6, 'Marcus Johnson', 'marcus@example.com', 'London', 'UK'),
        (7, 'Yuki Tanaka', 'yuki@example.com', 'Tokyo', 'Japan'),
        (8, 'Diego Martinez', 'diego@example.com', 'Mexico City', 'Mexico');
    `,
  },
  customers_orders: {
    label: 'Customers & Orders',
    schema: `
      CREATE TABLE customers (
        id INTEGER PRIMARY KEY,
        name TEXT,
        email TEXT,
        city TEXT,
        country TEXT
      );
      INSERT INTO customers VALUES
        (1, 'Aditi Rao', 'aditi@example.com', 'Mumbai', 'India'),
        (2, 'Rohan Kumar', 'rohan@example.com', 'Bengaluru', 'India'),
        (3, 'Sarah Chen', 'sarah@example.com', 'Singapore', 'Singapore'),
        (4, 'James Okonkwo', 'james@example.com', 'Lagos', 'Nigeria'),
        (5, 'Priya Sharma', 'priya@example.com', 'Delhi', 'India'),
        (6, 'Marcus Johnson', 'marcus@example.com', 'London', 'UK');
      CREATE TABLE orders (
        id INTEGER PRIMARY KEY,
        customer_id INTEGER,
        product TEXT,
        total REAL,
        status TEXT
      );
      INSERT INTO orders VALUES
        (101, 1, 'Laptop', 78000, 'shipped'),
        (102, 1, 'Mouse', 1200, 'shipped'),
        (103, 2, 'Monitor', 22000, 'shipped'),
        (104, 3, 'Headphones', 8500, 'priority'),
        (105, 5, 'Keyboard', 4500, 'shipped'),
        (106, 5, 'Webcam', 6200, 'pending'),
        (107, 6, 'Laptop', 92000, 'priority');
    `,
  },
}

export const getDataset = (key) => DATASETS[key] || null
