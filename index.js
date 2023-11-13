import app from "./app.js";
import { PORT } from "./config.js";
import ConnectDB from "./db.js";

ConnectDB();

const server = app.listen(PORT, () => {
  console.log("listening in port", PORT);
});

process.on("SIGTERM", () => {
  server.close();
});
