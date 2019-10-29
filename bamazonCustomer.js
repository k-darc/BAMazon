var mysql = require("mysql");
var inquire = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "my_databaseDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id : " + connection.threadId);
    connection.end();
});

