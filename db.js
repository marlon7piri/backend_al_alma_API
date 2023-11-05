import mongoose from "mongoose";
import { MONGO_URL } from "./config.js";

const ConnectDB = () => {


  /* const url = "mongodb+srv://marlon7piri:marlonrodri7@mycluster.zm2z014.mongodb.net/alalmadb?retryWrites=true&w=majority" */
 try {
  mongoose.connect(MONGO_URL).then(() => {
    console.log("connecting a la base de datos");
  });
 } catch (error) {
  console.log(error)
 }
};

export default ConnectDB;
