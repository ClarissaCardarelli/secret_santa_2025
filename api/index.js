import serverless from "serverless-http";
import app from "../server/dist/app.js";

console.log("api/index.ts loaded!"); // debug log

export default serverless(app);
