import mongoose from "mongoose";
import { MONGO_URL } from "./config.js";
import closeConexion from "./closeConexionDb.js";



const ConnectDB = () => {
  try {
    mongoose.set("strictQuery", false);
    const db = mongoose
      .connect(MONGO_URL)
      .then(() => {
        console.log("connecting a la base de datos");
      });
  } catch (error) {
    console.log(error);
  }
  
};

export default ConnectDB;
