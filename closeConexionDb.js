import mongoose from "mongoose";


export default function  closeConexion (){
  mongoose.connection.close();
};
