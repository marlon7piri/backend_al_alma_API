import { Router } from "express";
import {
  createReservControllers,
  deleteReserveControllers,
  getAReserveControllers,
  getReservasControllers,
  updateReserveControllers,
} from "../controllers/reservas.controllers.js";
import { createSedeControllers, getASedeControllers, getSedeControllers } from "../controllers/sede.controllers.js";

const router = Router();

router.get("/reservas", getReservasControllers);

router.post("/reservas/create", createReservControllers);
router.put("/reservas/update/:id", updateReserveControllers);
router.get("/reservas/:id", getAReserveControllers);
router.delete("/reservas/delete/:id",deleteReserveControllers);

router.get("/sedes",getSedeControllers)
router.post("/sedes",createSedeControllers)
router.get("/sedes/:id",getASedeControllers)

export default router;
