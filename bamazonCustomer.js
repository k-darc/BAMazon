// var mysql = require("mysql");
// var inquirer = require("inquirer");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "12345",
//     database: "my_databaseDB"
// });

// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected as id : " + connection.threadId);
//     connection.end();
// });

// function readProducts() {
//     console.log("Selecting all products...\n");
//     connection.query("SELECT * FROM products", function (err, res) {
//         if (err) throw err;
//         console.log(res);
//         // connection.end(); don't... just don't do this

//         inquirer
//             .prompt([{
//                 type: "input",
//                 name: "id",
//                 message: "What item are you looking for? Search by ID: "
//             }])
//             .then(answers => {
//                 console.log(answers.id);
//             });
//     });

// }
// readProducts();


// // ------------------- readProducts does NOT wait until you input it before it prompts for buyProducts, hmm... LOOK INTO RECURSION!!!!!!!!!

// var count = 0;
// var askQuestion = function() {
//     if 

// function buyProducts() {
//     console.log("What is the Product ID?\n");
//     connection.query("SELECT * FROM products", function (err, res) {
//         if (err) throw err;
//         console.log(res);

//         inquirer
//             .prompt([{
//                 type: "number",
//                 name: "quantity",
//                 message: "How many would you like?"
//             }])
//             .then(answers => {
//                 console.log(answers.quantity);
//             });
//     });
// }}
// buyProducts();





/* --------EVERYTHING above this line is potential garbage. I hate this. -------*/

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
    makeTable();
});

var makeTable = function() {
    connection.query("SELECT * FROM products", function(err,res){
        for(var i = 0; i < res.length; i++){
            console.log(res[i].itemid+" || "+res[i].productname+" || "+res[i].departmentname+" || "+res[i].price+" || "+res[i].stockquantity+"\n");
        }
    promptCustomer(res);
    })
}

var promptCustomer = function(res){
    inquirer.prompt([{
        type:"input",
        name:"choice",
        message:"What would you like ot purchase? [Quit with Q]"
    }]).then(function(answer){
        var correct = false;
        if(answer.choice.toUpperCase()=="Q"){

        }
