import { Box, Container, Flex } from "@chakra-ui/react";

import WritingElem from "../components/writing";

import writing from "../data/writing.json";

const WritingPage = () => (
  <Box>
    <Flex direction="column" gap="3">
      {writing.map(WritingElem)}
    </Flex>
  </Box>
);

export default WritingPage;
