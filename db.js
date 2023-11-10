import mongoose from "mongoose";
import { MONGO_URL } from "./config.js";



export const closeConexion = () => {
  mongoose.connection.close();
};

const ConnectDB = () => {
  try {
    mongoose.connect(MONGO_URL).then(() => {
      console.log("connecting a la base de datos");
    });
  } catch (error) {
    console.log(error);
  }

  
};

export default ConnectDB;
