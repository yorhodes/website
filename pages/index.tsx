import { Box, Flex } from "@chakra-ui/react";

import { Bio } from "../components/bio";
import ExternalPlatformLink from "../components/link";

import bio from "../data/bio.json";
import socials from "../data/socials.json";

const IndexPage = () => (
  <Box>
    {Bio(bio)}
    <Flex wrap="wrap" gap="2">
      {socials.map(ExternalPlatformLink)}
    </Flex>
  </Box>
);

export default IndexPage;
