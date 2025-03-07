import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.xjrtj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log("Conectou ao banco!");

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

export default conn;
