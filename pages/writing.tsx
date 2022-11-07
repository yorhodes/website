import { Container } from "@chakra-ui/react";

import navPages from "../data/navbar.json";
import Navbar from "../components/navbar";

import WritingElem from "../components/writing";
import writing from "../data/writing.json";

const WritingPage = () => (
  <Container>
    {Navbar(navPages)}
    {writing.map(content => WritingElem(content))}
  </Container>
);

export default WritingPage;
