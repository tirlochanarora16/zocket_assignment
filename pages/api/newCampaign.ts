import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { campaign, dateRange, budget, location, platform } = req.body;

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/campaign/new`,
        {
          campaign,
          dateRange,
          budget,
          location,
          platform,
        }
      );

      const { data } = response;

      if (!data.newCampaign) {
        return res.status(400).json({ err: "something went wrong" });
      }

      return res.status(201).json({ msg: "created new campaign" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
}
