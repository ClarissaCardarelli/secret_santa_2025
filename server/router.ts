import express from "express";
import scoreActions from "./modules/Scores/scoreActions";

const router = express.Router();

// router.get("/scores", (req, res) => {
//   console.log("GET /scores route hit!"); 
//   res.json({ message: "OK" });
// });

router.post("/scores", scoreActions.addNewScore)
router.get("/scores", scoreActions.browseAllScores);

export default router;