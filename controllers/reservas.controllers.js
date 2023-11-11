import closeConexion from "../closeConexionDb.js";
import Reservas from "../models/Reservas.js";

export const getReservasControllers = async (req, res) => {
  try {
    await Reservas.find()
      .then((reservas) => {
        return res.status(200).json(reservas);
      })
      .then(() => {
        closeConexion();
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const createReservControllers = async (req, res) => {
  const { nombre, fecha, comensales, nota, sede, hora, email } = req.body;

  try {
    const newreserva = new Reservas({
      nombre,
      fecha,
      comensales,
      nota,
      sede,
      hora,
      email,
    });

    await newreserva
      .save()
      .then((reservasaved) => {
        return res.status(200).json(reservasaved);
      })
      .then(() => {
        closeConexion();
      });
  } catch (error) {
    return res.status(400).json(error);
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
      email: reserve.email,
    };
    await Reservas.findByIdAndUpdate(id, newReserve, {
      new: true,
    })
      .then((reserveupdated) => {
        return res.status(200).json(reserveupdated);
      })
      .then(() => {
        closeConexion();
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getAReserveControllers = async (req, res) => {
  const { id } = req.params;

  try {
    await Reservas.findById(id)
      .then((reservedfound) => {
        return res.status(200).json(reservedfound);
      })
      .then(() => {
        closeConexion();
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteReserveControllers = async (req, res) => {
  const { id } = req.params;
  try {
    await Reservas.findByIdAndDelete(id)
      .then((reservedeleted) => {
        return res.status(200).json(reservedeleted);
      })
      .then(() => {
        closeConexion();
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};
