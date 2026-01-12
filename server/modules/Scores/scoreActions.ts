import type { RequestHandler } from "express";
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
dotenv.config();

// const getSql = () => {
//   const databaseUrl = process.env.DATABASE_URL;
//   if (!databaseUrl) throw new Error("DATABASE_URL is not set in .env");
//   return neon(databaseUrl);
// };

// const sql = getSql();

const sql = neon(process.env.DATABASE_URL);

const browseAllScores: RequestHandler = async (req, res) => {
try {
    const result = await sql`SELECT id, username, time, round FROM scores ORDER BY round DESC, time ASC LIMIT 10`;
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: (err as Error).message });
  }
}

const addNewScore: RequestHandler = async (req, res) => {
  try {

    type ValidationError = {
      message: string;
    };

    const newScore = {
      username: req.body.username,
      time: req.body.time,
      round: req.body.round
    };

    const {username, time, round} = newScore

    const errors: ValidationError[] = [];

    if (!username || !time || round === undefined) {
      errors.push({ message: "All fields are required" });
    }

    if (typeof username === "string" && username.length > 10) {
      errors.push({ message: "Name should contain less than 10 characters" });
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const result = await sql`INSERT INTO scores (username, time, round) VALUES (${username}, ${time}, ${round})`

    res.status(201).json()

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: (err as Error).message });
  }
}

export default { browseAllScores, addNewScore };


