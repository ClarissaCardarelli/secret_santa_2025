import express from "express";
import cors from "cors";
import router from "./router.js";

const app = express();

const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
app.use(cors({ origin: clientUrl }));

app.use(express.json());

app.use("/", router);

export default app;
