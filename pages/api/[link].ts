import type { NextApiRequest, NextApiResponse } from 'next'

import links from '../../data/links.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { link } = req.query;

  const result = links.find((o) => o.link.includes(link.toString()) || o.label?.includes(link.toString()));

  if (result) {
    res.status(200).redirect(result.link);
  } else {
    res.status(404).end();
  }
}
