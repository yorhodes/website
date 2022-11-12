import { Container, Flex } from "@chakra-ui/react";

import navPages from "../data/navbar.json";
import Navbar from "../components/navbar";

import WritingElem from "../components/writing";
import writing from "../data/writing.json";
import Footer from "../components/footer";

const WritingPage = () => (
  <Container>
    {Navbar(navPages)}
    <Flex direction="column" gap="3">
      {writing.map(WritingElem)}
    </Flex>
    <Footer/>
  </Container>
);

export default WritingPage;
