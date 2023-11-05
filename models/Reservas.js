import mongoose from "mongoose";

const ReservaSchema = new mongoose.Schema({
  nombre: String,
  fecha: String,
  comensales: Number,
  hora: String,
  email: String,
  nota: String,

  sede: String,
});

ReservaSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;

    delete returnedObject.__v;
    delete returnedObject._id;
  },
});

export default mongoose.model("Reserva", ReservaSchema);
