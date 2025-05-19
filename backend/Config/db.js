const mongoose = require("mongoose");
const colors = require("colors");
// const dotenv = require("dotenv")
// qFCL5J9AW6lZ0bT4
// mantukr5242
const uri = "mongodb+srv://mantukr5242:qFCL5J9AW6lZ0bT4@cluster0.m4pr9of.mongodb.net/"
const connectDB = async () => {
  try {
    console.log("db",uri)
    await mongoose.connect(uri,{useNewUrlParser: true });
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
