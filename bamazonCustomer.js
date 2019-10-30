var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345",
    database: "my_databaseDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id : " + connection.threadId);
    connection.end();
});

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        // connection.end(); don't... just don't do this

        inquirer
            .prompt([{
                type: "input",
                name: "id",
                message: "What item are you looking for? Search by ID: "
            }])
            .then(answers => {
                console.log(answers.id);
            });
    });

}
readProducts();


// ------------------- readProducts does NOT wait until you input it before it prompts for buyProducts, hmm...

function buyProducts() {
    console.log("What is the Product ID?\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);

        inquirer
            .prompt([{
                type: "number",
                name: "quantity",
                message: "How many would you like?"
            }])
            .then(answers => {
                console.log(answers.quantity);
            });
    });
}
buyProducts();

