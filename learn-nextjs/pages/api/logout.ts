// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
import Cookies from "cookies";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") {
    return res.status(401).json({ message: "method not supported" });
  }

  const cookies = new Cookies(req, res);
  if (!cookies.get("access_token")) {
    return res.status(500).json({ message: "Account not found" });
  }
  cookies.set("access_token");
  res.status(200).json({ message: "Logout successfully" });
}
