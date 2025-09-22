import { Box, Flex, HStack, Spacer } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

import links from "../data/links.json";
import bio from "../data/bio.json";

import { Bio } from "../components/bio";
import SocialLogoLink, { ChessLink } from "../components/link";
import { Social } from "../types";
import { ChessStats, getChessStats } from "../lib/chess";
const SELECT = [
  'email',
  'github',
  'twitter',
  'telegram'
];

const selected: Social[] = SELECT.map((s): Social => links.find(({link, label}) => link.includes(s) || label?.includes(s))!);
const chessLink: Social = links.find(({link}) => link.includes('chess.com'))!;

interface IndexPageProps {
  chessStats: ChessStats | null;
}

const IndexPage = ({ chessStats }: IndexPageProps) => (
  <Box>
    {Bio(bio)}
    <HStack wrap="wrap">
      {selected.map(SocialLogoLink)}
      {ChessLink({ ...chessLink, chessStats })}
    </HStack>
  </Box>
);

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async () => {
  const chessStats = await getChessStats();

  return {
    props: {
      chessStats
    }
  };
};

export default IndexPage;
