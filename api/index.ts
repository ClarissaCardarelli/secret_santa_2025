import serverless from "serverless-http";
import app from "../server/dist/app.js";

console.log("api/index.ts loaded!");  // confirms Vercel is loading this file

const handler = serverless(app);

export default function debugHandler(req: any, res: any) {
  console.log("Incoming request:", req.method, req.url);  // logs every request
  return handler(req, res);
}
