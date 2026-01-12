// api/index.ts
import serverless from "serverless-http";
// @ts-ignore
import app from "../server/dist/app.js";  // adjust path if your dist is inside server/

console.log("api/index.ts loaded!");  // debug log

export default serverless(app);
