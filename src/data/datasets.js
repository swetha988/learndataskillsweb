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
  capstone_ecommerce: {
    label: 'Capstone: Shopverse (customers, products, orders)',
    schema: `
      CREATE TABLE customers (
        id INTEGER PRIMARY KEY,
        name TEXT,
        city TEXT,
        country TEXT
      );
      INSERT INTO customers VALUES
        (1, 'Aditi Rao', 'Mumbai', 'India'),
        (2, 'Rohan Kumar', 'Bengaluru', 'India'),
        (3, 'Sarah Chen', 'Singapore', 'Singapore'),
        (4, 'James Okonkwo', 'Lagos', 'Nigeria'),
        (5, 'Priya Sharma', 'Delhi', 'India'),
        (6, 'Marcus Johnson', 'London', 'UK'),
        (7, 'Yuki Tanaka', 'Tokyo', 'Japan'),
        (8, 'Diego Martinez', 'Mexico City', 'Mexico'),
        (9, 'Fatima Al-Sayed', 'Dubai', 'UAE'),
        (10, 'Liam O''Brien', 'Dublin', 'Ireland');

      CREATE TABLE products (
        id INTEGER PRIMARY KEY,
        name TEXT,
        category TEXT,
        price REAL
      );
      INSERT INTO products VALUES
        (101, 'Wireless Mouse', 'Electronics', 799),
        (102, 'Laptop Stand', 'Electronics', 1499),
        (103, 'Cotton T-Shirt', 'Apparel', 599),
        (104, 'Running Shoes', 'Apparel', 3499),
        (105, 'Coffee Beans 1kg', 'Grocery', 899),
        (106, 'Green Tea Pack', 'Grocery', 349),
        (107, 'Table Lamp', 'Home', 1299),
        (108, 'Throw Pillow', 'Home', 599);

      CREATE TABLE orders (
        id INTEGER PRIMARY KEY,
        customer_id INTEGER,
        product_id INTEGER,
        quantity INTEGER,
        order_date TEXT,
        status TEXT
      );
      INSERT INTO orders VALUES
        (1, 1, 101, 2, '2024-01-08', 'shipped'),
        (2, 1, 107, 1, '2024-02-14', 'shipped'),
        (3, 2, 104, 1, '2024-01-19', 'shipped'),
        (4, 2, 105, 3, '2024-03-02', 'shipped'),
        (5, 3, 102, 1, '2024-01-25', 'cancelled'),
        (6, 3, 108, 2, '2024-04-11', 'shipped'),
        (7, 4, 103, 4, '2024-02-02', 'shipped'),
        (8, 5, 106, 5, '2024-02-20', 'shipped'),
        (9, 5, 101, 1, '2024-05-06', 'pending'),
        (10, 6, 102, 2, '2024-01-30', 'shipped'),
        (11, 6, 104, 1, '2024-06-15', 'shipped'),
        (12, 7, 107, 1, '2024-03-22', 'shipped'),
        (13, 7, 108, 3, '2024-04-29', 'pending'),
        (14, 8, 105, 2, '2024-02-11', 'shipped'),
        (15, 8, 103, 2, '2024-05-18', 'shipped'),
        (16, 9, 104, 1, '2024-03-09', 'shipped'),
        (17, 9, 106, 4, '2024-06-02', 'shipped'),
        (18, 10, 101, 3, '2024-01-14', 'shipped'),
        (19, 10, 102, 1, '2024-04-04', 'cancelled'),
        (20, 1, 105, 2, '2024-06-21', 'shipped'),
        (21, 2, 108, 1, '2024-05-27', 'shipped'),
        (22, 3, 103, 3, '2024-06-08', 'shipped'),
        (23, 4, 107, 2, '2024-03-30', 'shipped'),
        (24, 5, 104, 1, '2024-04-17', 'shipped'),
        (25, 6, 106, 2, '2024-02-26', 'pending'),
        (26, 7, 101, 1, '2024-01-05', 'shipped'),
        (27, 8, 102, 1, '2024-06-29', 'shipped'),
        (28, 9, 108, 2, '2024-05-02', 'shipped'),
        (29, 10, 105, 3, '2024-03-15', 'shipped'),
        (30, 4, 104, 1, '2024-06-11', 'shipped');
    `,
  },
}

export const getDataset = (key) => DATASETS[key] || null
