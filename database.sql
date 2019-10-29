DROP DATABASE IF EXISTS my_databaseDB;

CREATE DATABASE my_databaseDB;

USE my_databaseDB;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    products_name VARCHAR(20),
    department_name VARCHAR(20),
    price INT NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
    );

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("soap", "department", 3.00, 10),
    ("juice", "department", 4.00, 10),
    ("ketchup", "department", 2.50, 10),
    ("cake", "department", 10.00, 10),
    ("pants", "department", 30.00, 10),
    ("blender", "department", 50.00, 10),
    ("cottonballs", "department", 0.99, 10),
    ("chips", "department", 1.00, 10),
    ("soda", "department", 1.50, 10),
    ("detergent", "department", 4.50, 10);

SELECT * FROM products;