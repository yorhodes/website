import { Flex } from "@chakra-ui/react";
import WritingElem from "../components/writing";

import talks from "../data/talks.json";

const TalksPage = () => (
    <Flex direction="column" gap="3">
      {talks.map(WritingElem)}
    </Flex>
);

export default TalksPage;
