import { Box, Flex } from "@chakra-ui/react";

import { Bio } from "../components/bio";
import ExternalPlatformLink from "../components/link";

import bio from "../data/bio.json";
import links from "../data/links.json";

const IndexPage = () => (
  <Box>
    {Bio(bio)}
    <Flex wrap="wrap" gap="2">
      {links.map(ExternalPlatformLink)}
    </Flex>
  </Box>
);

export default IndexPage;
