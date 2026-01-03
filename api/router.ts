import express from "express";
const router = express.Router();

const players = [
  { id: 1, name: "Alice", score: 12 },
  { id: 2, name: "Bob", score: 9 },
  { id: 3, name: "Claire", score: 15 },
];

router.get("/hello", (req, res) => {
  res.json({ message: "Hello from API!" });
});


router.get("/scores", (req, res) => {
  res.json(players);
});

export default router;