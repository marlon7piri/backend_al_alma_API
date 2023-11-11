import  closeConexion  from "../closeConexionDb.js";
import Sede from "../models/Sede.js";


export const getSedeControllers = async (req, res) => {
  try {
    await Sede.find({})
      .then((sede) => {
        return res.status(200).json(sede);
      })
      .then(() => {
        closeConexion();
       
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const createSedeControllers = async (req, res) => {
  const sede = req.body;

  try {
    const newsede = new Sede({
      capacidad: sede.capacidad,
      direccion: sede.direccion,
      horario: sede.horario,

      imagen: sede.imagen,
      ruc: sede.ruc,
      sede: sede.sede,
      telefono: sede.telefono,
    });

    await newsede
      .save()
      .then((sedesaved) => {
        return res.status(200).json(sedesaved);
      })
      .then(() => {
        closeConexion();
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getASedeControllers = async (req, res) => {
  const { id } = req.params;

  try {
    await Sede.findById(id)
      .then((sedefound) => {
        return res.status(200).json(sedefound);
      })
      .then(() => {
        closeConexion();
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};
