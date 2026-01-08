import express from "express";
import scoreActions from "./modules/Scores/scoreActions";
const router = express.Router();


// app.get("/", (req, res) => res.send("API is working"));

// router.get("/hello", (req, res) => {
//   res.json({ message: "Hello from API!" });
// });

router.get("/scores", scoreActions.browseAllScores);

export default router;