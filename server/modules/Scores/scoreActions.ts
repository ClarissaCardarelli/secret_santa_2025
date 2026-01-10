import type { RequestHandler } from "express";
import { neon } from "@neondatabase/serverless";

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

const addNewScore: RequestHandler = async (req, res) => {
// try {
//     const sql = getSql();
//     const result = await sql`SELECT username, score FROM scores`;
//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: (err as Error).message });
//   }
}

export default { browseAllScores, addNewScore };


