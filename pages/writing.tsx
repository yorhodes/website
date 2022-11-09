import { Flex } from "@chakra-ui/react";

import WritingElem from "../components/writing";
import writing from "../data/writing.json";

const WritingPage = () => (
  <Flex direction="column" gap="3">
    {writing.map(WritingElem)}
  </Flex>
);

export default WritingPage;
