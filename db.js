import mongoose from "mongoose";
import { MONGO_URL } from "./config.js";

const ConnectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose
      .connect(MONGO_URL, {
        maxPoolSize: 10,
      })
      .then(() => {
        console.log("connecting a la base de datos");
      });
  } catch (error) {
    console.log(error);
  }
};

export default ConnectDB;
