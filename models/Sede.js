import mongoose from "mongoose";

const SedeSchemma = new mongoose.Schema({
  capacidad: Number,
  direccion: String,
  horario: String,

  imagen: String,
  ruc: String,
  sede: String,
  telefono: String,
});

SedeSchemma.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;

    delete returnedObject.__v;
    delete returnedObject._id;
  },
});

export default mongoose.model("Sede", SedeSchemma);
