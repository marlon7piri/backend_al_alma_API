import express from "express";
import cors from "cors";
import router from "./router/reservas.router.js";
import ConnectDB from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


ConnectDB()

export default app;
