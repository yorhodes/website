import type { NextApiRequest, NextApiResponse } from "next";

import links from "../../data/links.json";
import writing from "../../data/writing.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { link } = req.query;

  const result = [...links, ...writing].find(
    (o) =>
      o.link.includes(link.toString()) || 
      'label' in o && o.label?.includes(link.toString()) ||
      'title' in o && o.title?.includes(link.toString())
  );

  if (result) {
    res.status(200).redirect(result.link);
  } else {
    res.status(404).end();
  }
}
