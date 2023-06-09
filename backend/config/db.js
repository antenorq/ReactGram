const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

//`mongodb+srv://${dbUser}:${dbPassword}@cluster0.ljrag.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.fdamplr.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Conectou ao banco de dados!");

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;
