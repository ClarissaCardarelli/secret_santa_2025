import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import router from "./router";

const app = express();
const PORT = process.env.PORT || 3001;

// CORS: works locally and on Vercel
const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
app.use(cors({ origin: clientUrl }));

console.log("CLIENT_URL =", clientUrl);

// JSON body parser
app.use(express.json());

// Routes
app.use("/api", router);

// Test route
app.get("/", (req, res) => res.send("API is working"));

// Start server
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
