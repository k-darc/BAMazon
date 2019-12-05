## Bamazon

Designed for Rutgers Bootcamp.
Create an amazon-like storefront using Node.js and MySQL.

## Getting Started

- Clone the repository. (https://github.com/k-darc/bamazon)
- Run "npm install" in Terminal.
- Run "node bamazonCustomer.js".
- Select products by using their ID (1, 2, 3, etc...).
- Choose your quantity (1, 2, 3, etc...).
- Run "ctrl + c" to exit.

## How Bamazon Works

  * `BamazonCustomer.js`

      * Prints the products in the store.

      * Prompts customer which product they would like to purchase.

      * Asks for the quantity.

        * If there is a sufficient amount of the product in stock, Bamazon will return the total for that purchase.
        * However, if there is not enough of the product in stock, Bamazon will tell the user that there isn't enough of the product.
        * If the purchase goes through, the program will update the stock quantity.
        * Bamazon will also update the product sales in the department table.



## Technologies used
- Visual Studio Code
- MySQL
- Node.js
- Inquire NPM Package
- MYSQL NPM Package


## Author

* Kevin D - [Kevin D](https://github.com/k-darc)