import { Container, Flex } from "@chakra-ui/react";
import ExperienceElem from "../components/experience";
import Navbar from "../components/navbar";
import experiences from "../data/experience.json"; 
import navPages from "../data/navbar.json";

const AboutPage = () => (
  <Container>
    {Navbar(navPages)}
    <Flex direction="column" gap="3">
      {experiences.map((experience) => ExperienceElem(experience))}
    </Flex>
  </Container>
);

export default AboutPage;
