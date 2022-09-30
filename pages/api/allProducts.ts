import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get("http://localhost:8080/products/all");
    const { data } = response;

    return res.status(200).json(data.products);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
}
