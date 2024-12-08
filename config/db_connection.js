const sql = require("mysql");
const config = {
    
        host: "localhost",
        user: "root",
        password: "", // database_password
        database: "", //database_name
     
};

const conn = sql.createConnection(config);
conn.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("databased connected");
});

module.exports = conn;
