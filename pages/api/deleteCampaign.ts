import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { id } = req.body;

      await axios.delete(`http://localhost:8080/campaign/delete/${id}`);
      return res.status(200).end();
    }
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
}
