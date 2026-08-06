import { Text, Flex, Link } from "@chakra-ui/react";
import { Content } from "../types";

const WritingElem = (content: Content) => (
  <Flex key={content.title} direction="column" position="relative">
    <Flex direction="column" width="100%">
      <Link href={content.link} isExternal>
        <Text as="b">{content.title}</Text>
      </Link>
      <Text
        display={{ base: "block", md: "none" }}
        fontSize="0.8125rem"
        marginTop="1"
        opacity="0.82"
      >
        {content.published}
      </Text>
      <Text fontSize="0.9375rem" marginTop="1">{content.description}</Text>
    </Flex>
    <Text
      display={{ base: "none", md: "block" }}
      position="absolute"
      left="calc(100% + 12px)"
      top="0"
      width="16"
      fontSize="0.8125rem"
      textAlign="right"
      whiteSpace="nowrap"
      opacity="0.82"
    >
      {content.published}
    </Text>
  </Flex>
);

export default WritingElem;
