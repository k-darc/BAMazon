DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
    itemid INT NOT NULL AUTO_INCREMENT,
    productname VARCHAR(255) NOT NULL,
    departmentname VARCHAR(255) NOT NULL,
    price DEC(10,4) NOT NULL,
    stockquantity INT(10) NOT NULL,
    primary key (itemid)
    );

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ("Awesome Soap!", "bath", 3.00, 10),
    (" Apple Juice", "foods", 4.00, 10),
    ("Ketchup", "foods", 2.50, 10),
    ("Cake", "foods", 10.00, 10),
    ("Pants", "clothing", 30.00, 10),
    ("Overall Enthusiasm", "clothing", 30.00, 10),
    ("Blender", "kitchen", 50.00, 10),
    ("Cottonballs", "bath", 0.99, 10),
    ("Chips", "foods", 1.00, 10),
    ("RC Soda", "foods", 1.50, 10),
    ("Detergent", "clothing", 4.50, 10);

SELECT * FROM products;