import express from "express";
import scoreActions from "./modules/Scores/scoreActions.js";

const router = express.Router();

router.post("/scores", scoreActions.addNewScore)
router.get("/scores", scoreActions.browseAllScores);

export default router;