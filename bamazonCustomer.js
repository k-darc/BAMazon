var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id : " + connection.threadId);
    makeTable();
});

var makeTable = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].itemid + " || " + res[i].productname + " || " + res[i].departmentname + " || " + res[i].price + " || " + res[i].stockquantity + "\n");
        }
        promptCustomer(res);
    })
}

var promptCustomer = function (res) {
    inquirer.prompt([{
        type: "input",
        name: "choice",
        message: "What would you like to purchase? [Quit with Q]"
    }]).then(function (answer) {
        var correct = false;
        console.log(answer.choice);
        var choice = parseInt(answer.choice);
        var index = choice - 1;
        checkQuant(res[index]);

        if (answer.choice.toUpperCase() == "Q") {}
    })
}

function checkQuant(data) {
    console.log(data);
    correct = true;
    inquirer.prompt({
        type: "input",
        name: "choice",
        message: "How many would you like?",
        validate: function (value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }).then(function (answer) {
        if ((data.stockquantity - answer.choice) > 0) {
            connection.query("UPDATE products SET stockquantity='" + (data.stockquantity - answer.choice) + "' WHERE productname='" + data.productname + "'", function (err, res2) {
                console.log("Product Bought!");
                makeTable();
            })
        } else {
            console.log("Not a valid selection!");
            promptCustomer(data);
        }
    })

}