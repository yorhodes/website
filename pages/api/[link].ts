import type { NextApiRequest, NextApiResponse } from "next";

import links from "../../data/links.json";
import talks from "../../data/talks.json";
import writing from "../../data/writing.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const link: string = req.query.link?.toString() ?? "";
  const whitespaceLink = link.replace(/-/g, " ");

  const findInValues = (object: Record<string, string | undefined>, search: string) =>
    Object.entries<string | undefined>(object).find(([_, v]) => v?.toLowerCase().includes(search.toLowerCase()));

  const result = [...links, ...writing, ...talks].find(
    o => findInValues(o, link) || findInValues(o, whitespaceLink)
  );

  if (result) {
    res.status(200).redirect(result.link);
  } else {
    res.status(404).end();
  }
}
