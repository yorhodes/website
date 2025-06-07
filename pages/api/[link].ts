import type { NextApiRequest, NextApiResponse } from "next";

import links from "../../data/links.json";
import { getAllPosts } from "../../lib/posts";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const link: string = req.query.link?.toString() ?? "";

  const posts = getAllPosts();
  const postLinks = posts.map(p => ({
    link: p.link ?? `/writing/${p.slug}`,
    slug: p.slug,
    title: p.title,
  }));
  const result = [...links, ...postLinks].find(
    (o) =>
      o.link.includes(link) ||
      ('slug' in o && o.slug === link) ||
      ('label' in o && o.label?.includes(link)) ||
      ('title' in o && o.title?.includes(link))
  );

  if (result) {
    res.status(200).redirect(result.link);
  } else {
    res.status(404).end();
  }
}
