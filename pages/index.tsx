import { Box, Flex } from "@chakra-ui/react";

import links from "../data/links.json";
import bio from "../data/bio.json";

import { Bio } from "../components/bio";
import SocialLogoLink from "../components/link";

const SELECT = [
  'email',
  'calendar',
  'twitter',
  'telegram',
  'discord',
  'github',
];

const selected = SELECT.map((s) => links.find(({link, label}) => link.includes(s) || label?.includes(s)));

const IndexPage = () => (
  <Box>
    {Bio(bio)}
    <Flex wrap="wrap" gap="2">
      {selected.map(SocialLogoLink)}
    </Flex>
  </Box>
);

export default IndexPage;
