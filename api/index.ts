import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// CORS
if (process.env.CLIENT_URL) {
  app.use(cors({ origin: [process.env.CLIENT_URL] }));
}

// JSON body parser
app.use(express.json());

// Routes
app.use("/api", router);

// Test route (optional)
app.get("/", (req, res) => res.send("API is working"));

// Start server locally
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
