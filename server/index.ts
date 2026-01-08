import dotenv from "dotenv";
dotenv.config();

import app from "./app.ts";

console.log("DATABASE_URL =", process.env.DATABASE_URL);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
