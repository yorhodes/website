import { Box, Flex, HStack, Spacer } from "@chakra-ui/react";

import links from "../data/links.json";
import bio from "../data/bio.json";

import { Bio } from "../components/bio";
import SocialLogoLink from "../components/link";
import { Social } from "../types";

const SELECT = [
  'email',
  'github',
  'twitter',
  'telegram'
];

const selected: Social[] = SELECT.map((s): Social => links.find(({link, label}) => link.includes(s) || label?.includes(s))!);

const IndexPage = () => (
  <Box>
    {Bio(bio)}
    <HStack wrap="wrap">
      {selected.map(SocialLogoLink)}
    </HStack>
  </Box>
);

export default IndexPage;
