import { Text, Flex, Link } from "@chakra-ui/react";
import { Content } from "../types";

const WritingElem = (content: Content) => (
  <Flex key={content.title} margin="3" direction="row" gap="5">
    <Flex direction="column" width="50%">
        <Link href={content.link} fontSize="lg" fontWeight="bold" isExternal>
        {content.title}
        </Link>
    </Flex>
    <Flex direction="column" width="50%">
        <Text align="right" fontSize="md">{content.published}</Text>
    </Flex>    
  </Flex>
);

export default WritingElem;
