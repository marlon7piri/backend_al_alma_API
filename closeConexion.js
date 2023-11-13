import mongoose from "mongoose";

export const closeConexion = () => {
  console.log("cerrando la conexion");
 mongoose.disconnect();
};
