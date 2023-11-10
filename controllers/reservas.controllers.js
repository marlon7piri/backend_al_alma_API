import { closeConexion } from "../db.js";
import Reservas from "../models/Reservas.js";

export const getReservasControllers = async (req, res) => {
  try {
    const reservas = await Reservas.find();

    return res.status(200).json(reservas);
   
  } catch (error) {
    return res.status(400).json(error);
  }finally{
    closeConexion()
  }
};

export const createReservControllers = async (req, res) => {
  const { nombre, fecha, comensales, nota, sede, hora,email } = req.body;

  try {
    const newreserva = new Reservas({
      nombre,
      fecha,
      comensales,
      nota,
      sede,
      hora,
      email
    });

    const reservasaved = await newreserva.save();
    console.log(reservasaved);

    return res.status(200).json(reservasaved);
  } catch (error) {
    return res.status(400).json(error);
  }finally{
    closeConexion()
  }
};

export const updateReserveControllers = async (req, res) => {
  const { id } = req.params;
  const reserve = req.body;

  try {
    const newReserve = {
      nombre: reserve.nombre,
      fecha: reserve.fecha,
      comensales: reserve.comensales,
      hora: reserve.hora,
      nota: reserve.nota,
      email:reserve.email
    };
    const reserveupdated = await Reservas.findByIdAndUpdate(id, newReserve, {
      new: true,
    });

    return res.status(200).json(reserveupdated);
  } catch (error) {
    return res.status(400).json(error);
  }finally{
    closeConexion()
  }
};

export const getAReserveControllers = async (req, res) => {
  const { id } = req.params;

  try {
    const reservedfound = await Reservas.findById(id);

    return res.status(200).json(reservedfound);
  } catch (error) {
    return res.status(400).json(error);
  }finally{
    closeConexion()
  }
};

export const deleteReserveControllers = async (req, res) => {
  const { id } = req.params;
  try {
    const reservedeleted = await Reservas.findByIdAndDelete(id);

    return res.status(200).json(reservedeleted);
  } catch (error) {
    return res.status(400).json(error);
  }finally{
    closeConexion()
  }
};
