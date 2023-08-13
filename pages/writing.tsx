import { Box, Button, Flex } from "@chakra-ui/react";
import WritingElem from "../components/writing";

import writing from "../data/writing.json";
import links from "../data/links.json";
import bio from "../data/bio.json";

import { Feed } from "feed";
import fs from "fs";
import Link from "next/link";
import { FaRss } from "react-icons/fa";

export const getStaticProps = async () => {
  const { link: twitter } = links.find((l) => l.link.includes("twitter"))!;
  const { link: email } = links.find((l) => l.label!.includes("email"))!;

  const author = {
    name: bio.name,
    email: email,
    link: twitter,
  };

  const url =
    (process.env.NEXT_PUBLIC_VERCEL_URL ?? "localhost:3000") + "/writing";
  const date = new Date();

  const feed = new Feed({
    title: `${bio.name}'s blog`,
    description: `${bio.title} - ${bio.tagline}`,
    id: url,
    link: url,
    copyright: `All rights reserved ${date.getFullYear()}, ${bio.name}`,
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${url}/rss/feed.xml`,
      json: `${url}/rss/feed.json`,
      atom: `${url}/rss/atom.xml`,
    },
  });
  writing.forEach((post) =>
    feed.addItem({
      title: post.title,
      id: post.link,
      link: post.link,
      description: post.description,
      content: post.description,
      author: [author],
      contributor: [author],
      date: new Date(post.published),
    })
  );
  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());

  return { props: {} };
};

const WritingPage = () => (
  <Box>
    <Flex justify="right" marginBottom="5" marginTop="-3">
      <Button leftIcon={FaRss({})} iconSpacing="0">
        <Link href="/rss/feed.xml" passHref/>
      </Button>
    </Flex>
    <Flex direction="column" gap="3">
      {writing.map(WritingElem)}
    </Flex>
  </Box>
);

export default WritingPage;
