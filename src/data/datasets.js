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
  quickbite: {
    label: 'QuickBite (food delivery platform)',
    schema: `
      CREATE TABLE customers (
        customer_id INTEGER PRIMARY KEY,
        name TEXT,
        email TEXT,
        city TEXT,
        signup_date TEXT,
        referred_by INTEGER
      );
      INSERT INTO customers VALUES
        (1, 'Aditi Rao', 'aditi@example.com', 'Mumbai', '2023-01-15', NULL),
        (2, 'Rohan Kumar', 'rohan@example.com', 'Mumbai', '2023-02-20', 1),
        (3, 'Priya Sharma', 'priya@example.com', 'Delhi', '2023-01-10', NULL),
        (4, 'Marcus Johnson', 'marcus@example.com', 'Bengaluru', '2023-03-05', NULL),
        (5, 'Sarah Chen', 'sarah@example.com', 'Mumbai', '2023-04-12', 1),
        (6, 'James Okonkwo', 'james@example.com', 'Delhi', '2023-02-28', 3),
        (7, 'Yuki Tanaka', 'yuki@example.com', 'Bengaluru', '2023-05-01', NULL),
        (8, 'Diego Martinez', 'diego@example.com', 'Mumbai', '2023-06-15', NULL),
        (9, 'Fatima Al-Sayed', 'fatima@example.com', 'Delhi', '2023-03-22', NULL),
        (10, 'Liam O''Brien', 'liam@example.com', 'Bengaluru', '2023-07-08', 7);

      CREATE TABLE restaurants (
        restaurant_id INTEGER PRIMARY KEY,
        name TEXT,
        cuisine_type TEXT,
        city TEXT,
        rating REAL,
        is_active INTEGER,
        metadata TEXT
      );
      INSERT INTO restaurants VALUES
        (101, 'Spice Route', 'Indian', 'Mumbai', 4.8, 1, '{"tags":["spicy","vegetarian-friendly"],"delivery_radius_km":6}'),
        (102, 'Tokyo Bites', 'Japanese', 'Mumbai', 4.3, 1, '{"tags":["sushi","fine-dining"],"delivery_radius_km":4}'),
        (103, 'Curry House', 'Indian', 'Delhi', 4.5, 1, '{"tags":["spicy","budget-friendly"],"delivery_radius_km":5}'),
        (104, 'Pasta Palace', 'Italian', 'Delhi', 3.0, 1, '{"tags":["italian","fine-dining"],"delivery_radius_km":3}'),
        (105, 'Bengaluru Biryani', 'Indian', 'Bengaluru', 4.4, 1, '{"tags":["spicy","popular"],"delivery_radius_km":7}'),
        (106, 'Green Bowl', 'Healthy', 'Bengaluru', NULL, 0, '{"tags":["healthy","vegetarian-friendly"],"delivery_radius_km":4}');

      CREATE TABLE menu_items (
        item_id INTEGER PRIMARY KEY,
        restaurant_id INTEGER,
        name TEXT,
        category TEXT,
        price REAL
      );
      INSERT INTO menu_items VALUES
        (201, 101, 'Butter Chicken', 'Main Course', 350),
        (202, 101, 'Garlic Naan', 'Starters', 60),
        (203, 101, 'Gulab Jamun', 'Dessert', 90),
        (204, 102, 'Sushi Platter', 'Main Course', 450),
        (205, 102, 'Miso Soup', 'Starters', 120),
        (206, 102, 'Green Tea', 'Beverage', 80),
        (207, 103, 'Dal Makhani', 'Main Course', 220),
        (208, 103, 'Tandoori Roti', 'Starters', 40),
        (209, 103, 'Lassi', 'Beverage', 70),
        (210, 104, 'Margherita Pizza', 'Main Course', 380),
        (211, 104, 'Garlic Bread', 'Starters', 150),
        (212, 104, 'Tiramisu', 'Dessert', 180),
        (213, 105, 'Chicken Biryani', 'Main Course', 280),
        (214, 105, 'Mutton Biryani', 'Main Course', 350),
        (215, 105, 'Raita', 'Starters', 50),
        (216, 106, 'Quinoa Salad', 'Main Course', 250),
        (217, 106, 'Smoothie Bowl', 'Dessert', 200),
        (218, 106, 'Detox Juice', 'Beverage', 150);

      CREATE TABLE riders (
        rider_id INTEGER PRIMARY KEY,
        name TEXT,
        city TEXT,
        joined_date TEXT,
        vehicle_type TEXT
      );
      INSERT INTO riders VALUES
        (301, 'Karan Mehta', 'Mumbai', '2023-01-05', 'Bike'),
        (302, 'Anita Desai', 'Delhi', '2023-02-10', 'Scooter'),
        (303, 'Ravi Verma', 'Bengaluru', '2023-01-20', 'Bike'),
        (304, 'Sneha Patil', 'Mumbai', '2023-05-15', 'Bicycle'),
        (305, 'Vikram Singh', 'Delhi', '2023-06-01', 'Bike');

      CREATE TABLE orders (
        order_id INTEGER PRIMARY KEY,
        customer_id INTEGER,
        restaurant_id INTEGER,
        rider_id INTEGER,
        order_date TEXT,
        delivered_at TEXT,
        status TEXT,
        total_amount REAL
      );
      INSERT INTO orders VALUES
        (1, 1, 101, 301, '2024-01-05 12:30', '2024-01-05 13:15', 'delivered', 500),
        (2, 1, 102, 301, '2024-02-10 19:00', '2024-02-10 19:50', 'delivered', 650),
        (3, 2, 101, 304, '2024-01-19 13:00', '2024-01-19 13:40', 'delivered', 410),
        (4, 5, 102, 301, '2024-03-02 20:15', '2024-03-02 21:00', 'delivered', 530),
        (5, 8, 101, 304, '2024-01-25 18:00', NULL, 'cancelled', 350),
        (6, 1, 101, 304, '2024-04-11 12:00', '2024-04-11 12:45', 'delivered', 440),
        (7, 2, 102, NULL, '2024-06-15 19:30', NULL, 'placed', 720),
        (8, 5, 101, 301, '2024-02-20 13:15', '2024-02-20 14:00', 'delivered', 380),
        (9, 8, 102, 301, '2024-05-06 20:00', '2024-05-06 20:55', 'delivered', 610),
        (10, 3, 103, 302, '2024-01-30 12:45', '2024-01-30 13:25', 'delivered', 320),
        (11, 6, 104, 302, '2024-02-02 19:15', '2024-02-02 20:00', 'delivered', 560),
        (12, 9, 103, 302, '2024-03-22 13:00', '2024-03-22 13:50', 'delivered', 290),
        (13, 3, 104, 302, '2024-04-29 20:30', NULL, 'cancelled', 380),
        (14, 6, 103, 302, '2024-05-18 12:30', '2024-05-18 13:10', 'delivered', 260),
        (15, 9, 104, 302, '2024-06-02 19:45', '2024-06-02 20:40', 'delivered', 530),
        (16, 3, 103, 302, '2024-06-21 13:00', '2024-06-21 13:35', 'delivered', 220),
        (17, 4, 105, 303, '2024-01-14 12:00', '2024-01-14 12:40', 'delivered', 480),
        (18, 7, 106, 303, '2024-02-11 19:00', '2024-02-11 19:55', 'delivered', 390),
        (19, 10, 105, 303, '2024-03-09 13:15', '2024-03-09 13:55', 'delivered', 560),
        (20, 4, 105, 303, '2024-04-17 12:30', '2024-04-17 13:05', 'delivered', 350),
        (21, 7, 105, 303, '2024-05-27 19:30', '2024-05-27 20:10', 'delivered', 420),
        (22, 10, 106, 303, '2024-01-08 18:45', NULL, 'cancelled', 300),
        (23, 4, 106, 303, '2024-06-11 12:15', '2024-06-11 13:00', 'delivered', 250),
        (24, 7, 105, 303, '2024-06-29 19:00', '2024-06-29 19:45', 'delivered', 480),
        (25, 2, 101, 304, '2024-05-27 12:30', '2024-05-27 13:10', 'delivered', 390),
        (26, 9, 104, 302, '2024-01-12 19:00', '2024-01-12 19:50', 'delivered', 410),
        (27, 1, 102, 301, '2024-06-08 20:00', '2024-06-08 20:45', 'delivered', 590),
        (28, 5, 101, 304, '2024-03-30 13:00', '2024-03-30 13:40', 'delivered', 340),
        (29, 8, 102, 301, '2024-04-04 19:30', NULL, 'cancelled', 470),
        (30, 10, 105, 303, '2024-03-15 13:00', '2024-03-15 13:45', 'delivered', 510);

      CREATE TABLE order_items (
        order_item_id INTEGER PRIMARY KEY,
        order_id INTEGER,
        item_id INTEGER,
        quantity INTEGER,
        item_price REAL
      );
      INSERT INTO order_items VALUES
        (1, 1, 201, 1, 350),
        (2, 1, 202, 1, 60),
        (3, 2, 204, 1, 450),
        (4, 2, 206, 1, 80),
        (5, 3, 201, 1, 350),
        (6, 4, 204, 1, 450),
        (7, 6, 201, 1, 350),
        (8, 8, 202, 1, 60),
        (9, 9, 204, 1, 450),
        (10, 10, 207, 1, 220),
        (11, 11, 210, 1, 380),
        (12, 12, 207, 1, 220),
        (13, 14, 207, 1, 220),
        (14, 17, 213, 1, 280),
        (15, 19, 214, 1, 350),
        (16, 20, 213, 1, 280),
        (17, 21, 213, 1, 280),
        (18, 23, 216, 1, 250),
        (19, 26, 210, 1, 380),
        (20, 30, 213, 1, 280);

      CREATE TABLE reviews (
        review_id INTEGER PRIMARY KEY,
        order_id INTEGER,
        rating INTEGER,
        comment TEXT,
        review_date TEXT
      );
      INSERT INTO reviews VALUES
        (1, 1, 5, 'Amazing butter chicken!', '2024-01-06'),
        (2, 2, 4, 'Good but a bit slow', '2024-02-11'),
        (3, 3, 5, 'Loved it', '2024-01-20'),
        (4, 4, 3, 'Average experience', '2024-03-03'),
        (5, 6, 5, 'Always great', '2024-04-12'),
        (6, 8, 4, 'Tasty as usual', '2024-02-21'),
        (7, 9, 5, 'Excellent sushi', '2024-05-07'),
        (8, 10, 4, 'Good daal', '2024-01-31'),
        (9, 11, 2, 'Pizza was cold', '2024-02-03'),
        (10, 14, 5, 'Quick delivery', '2024-05-19'),
        (11, 15, 4, 'Nice pasta', '2024-06-03'),
        (12, 17, 5, 'Best biryani in town', '2024-01-15'),
        (13, 19, 5, 'Perfect', '2024-03-10'),
        (14, 20, 3, 'Okay', '2024-04-18'),
        (15, 24, 4, 'Good as always', '2024-06-30'),
        (16, 25, 5, 'Loved the naan', '2024-05-28'),
        (17, 27, 4, 'Solid meal', '2024-06-09'),
        (18, 30, 5, 'Great service', '2024-03-16');
    `,
  },
}

export const getDataset = (key) => DATASETS[key] || null
