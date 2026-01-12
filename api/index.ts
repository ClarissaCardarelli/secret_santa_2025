// api/index.ts
// @ts-ignore
import app from "../dist/server/app.js";

export default function handler(req: any, res: any) {
  app(req, res);
}