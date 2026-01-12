import express from "express";
import scoreActions from "./modules/Scores/scoreActions";

const router = express.Router();

router.post("/scores", scoreActions.addNewScore)
router.get("/scores", scoreActions.browseAllScores);

export default router;