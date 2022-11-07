import { Container, Flex } from "@chakra-ui/react";
import ExperienceElem from "../components/experience";
import Navbar from "../components/navbar";
import experiences from "../data/experience.json"; 
import navPages from "../data/navbar.json";

const ExperiencePage = () => (
  <Container>
    {Navbar(navPages)}
    <Flex direction="column" gap="8">
      {experiences.map(ExperienceElem)}
    </Flex>
  </Container>
);

export default ExperiencePage;
