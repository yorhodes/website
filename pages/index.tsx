import { Container, Flex, Heading, Img, Spacer, Text, VStack } from "@chakra-ui/react";
import Navbar from "../components/navbar";

import { navPages } from "../data/navbar";

const IndexPage = () => (
  <Container>
    {Navbar(navPages)}
    <Flex direction="row" gap="10">
      <Flex direction="column">
        <Heading>Yorke Rhodes IV</Heading>
        <Text fontSize="lg">Smart Contract Engineer</Text>
        <Text paddingTop="5">Using distributed systems, cryptography, and economics to build a trustless future.</Text>
      </Flex>
      <Img
        src="headshot.jpeg"
        borderRadius='full'
        boxSize="150px"
        filter="grayscale(70%)"
        _hover={{
          filter: "grayscale(10%)",
        }}
      />
    </Flex>
  </Container>
);

export default IndexPage;
