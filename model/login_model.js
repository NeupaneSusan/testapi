const db = require('../config/db_connection');
const bcrypt = require('bcrypt');

function createUser(data) {
    const { fullname,email,password } = data;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return new Promise((resolve, reject) => {
      db.query(
        "insert into user_table (fullname,email,password) VALUES (?,?,?)",
        [fullname,email,hash],
        (error, elements) => {
          if (error) {
            return reject(error);
          }
          return resolve(elements);
        }
      );
    });
  }


function findUser(email) {
 
    return new Promise((resolve, reject) => {
        db.query(
          "select * from user_table where email = ?",
          [email],
          (error, elements) => {
            if (error) {
              return reject(error);
            }
            return resolve(elements);
          }
        );
      });
}


  module.exports = {createUser,findUser};