import express from "express";
import cors from "cors";
import router from "./router/reservas.router.js";

const app = express();
app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extends: true }));
app.use(router);

export default app;
