import Sede from "../models/Sede.js";

export const getSedeControllers = async (req, res) => {
  try {
    const sedes = await Sede.find();

    return res.status(200).json(sedes);
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

    const sedesaved = await newsede.save();

    return res.status(200).json(sedesaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};


export const getASedeControllers = async (req, res) => {
  const { id } = req.params;

  try {
    const sedefound = await Sede.findById(id);

    return res.status(200).json(sedefound);
  } catch (error) {
    return res.status(400).json(error);
  }
};