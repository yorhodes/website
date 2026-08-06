import { Box, Heading, HStack, Link, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import links from "../data/links.json";
import bio from "../data/bio.json";

import { Bio } from "../components/bio";
import SocialLogoLink from "../components/link";
import { Social } from "../types";
import { ChessStats, getChessStats } from "../lib/chess";
const SELECT = [
  'resume',
  'email',
  'linkedin',
  'github',
  'twitter'
];

const selected: Social[] = SELECT.map((s): Social => links.find(({link, label}) => link.includes(s) || label?.includes(s))!);
const chessLink: Social = links.find(({link}) => link.includes('chess.com'))!;

interface IndexPageProps {
  chessStats: ChessStats | null;
}

const IndexPage = ({ chessStats }: IndexPageProps) => (
  <Box>
    {Bio(bio)}
    <HStack wrap="wrap" spacing="1">
      {selected.map(SocialLogoLink)}
    </HStack>
    <Box marginTop="10" maxWidth="42rem">
      <Heading as="h2" size="md" marginBottom="2">
        {bio.valuesTitle}
      </Heading>
      <Text lineHeight="tall">{bio.values}</Text>
      <Text lineHeight="tall" marginTop="3">
        {bio.interests}{" "}
        <Link
          href={chessLink.link}
          isExternal
          textDecoration="underline"
          textUnderlineOffset="2px"
          _hover={{ opacity: 0.72 }}
        >
          chess
        </Link>
        {chessStats ? ` (${chessStats.rating})` : ""}
        .
      </Text>
    </Box>
  </Box>
);

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  const chessStats = await getChessStats();

  return {
    props: {
      chessStats
    },
    revalidate: 3600
  };
};

export default IndexPage;
