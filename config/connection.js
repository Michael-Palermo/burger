// Variable - Dependencies
let mysql = require("mysql");


// Variable - Connection params to MySQL db
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Andiam012",
  database: "burgers_db"
});

// Connect - Feedback on db connection
connection.connect(function(error) {
  if (error) {
    console.error("Error connecting: " + error.stack);
    return;
  }
  console.log("Connected as ID " + connection.threadId);
});

// Export - connection
module.exports = connection;