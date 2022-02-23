import { Link, Button, Flex, Text, Heading, Img } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export type BioContent = {
  name: string;
  title: string;
  tagline: string;
};

export const Bio = (content: BioContent) => (
    <Flex direction="row" gap="10">
      <Flex direction="column">
        <Heading>{content.name}</Heading>
        <Text fontSize="lg">{content.title}</Text>
        <Text paddingTop="5">{content.tagline}</Text>
      </Flex>
      <Img
        src="headshot.jpeg"
        borderRadius='full'
        boxSize="150px"
        filter="grayscale(50%)"
        _hover={{
          filter: "grayscale(10%)",
        }}
      />
    </Flex>
)

export default Bio;
