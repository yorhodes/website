import { Flex } from "@chakra-ui/react";

import WritingElem from "../components/writing";
import writing from "../data/writing.json";

const WritingPage = () => (
  <Container>
    {Navbar(navPages)}
    <Flex direction="column" gap="3">
      {writing.map(WritingElem)}
    </Flex>
  </Container>
);

export default WritingPage;
