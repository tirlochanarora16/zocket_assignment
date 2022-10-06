import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/all`
    );
    const { data } = response;

    return res.status(200).json(data.products);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
}
