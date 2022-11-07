import { Text, Flex, Link } from "@chakra-ui/react";
import { Content } from "../types";

const WritingElem = (content: Content) => (
  <Flex key={content.title} direction="column">
    <Flex direction="row">
      <Link href={content.link} isExternal>
        {content.title}
      </Link>
      <Text fontSize="sm" alignSelf="right">{content.published}</Text>
    </Flex>
    <Text fontSize="sm">{content.description}</Text>
  </Flex>
);

export default WritingElem;
