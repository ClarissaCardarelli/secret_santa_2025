import type { RequestHandler } from "express";
import { neon } from "@neondatabase/serverless";

// const players = [
//   { id: 1, username: "Alice", score: 12 },
//   { id: 2, username: "Bob", score: 9 },
//   { id: 3, username: "Claire", score: 15 },
// ];

const getSql = () => {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL is not set in .env");
  return neon(databaseUrl);
};

const browseAllScores: RequestHandler = async (req, res) => {
try {
    const sql = getSql();
    const result = await sql`SELECT username, score FROM scores`;
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: (err as Error).message });
  }
}

export default { browseAllScores };


