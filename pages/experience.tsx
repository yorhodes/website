import { Container, Flex, StackDivider } from "@chakra-ui/react";
import ExperienceElem from "../components/experience";
import Navbar from "../components/navbar";
import experiences from "../data/experience.json"; 
import navPages from "../data/navbar.json";
import Footer from '../components/footer';

const ExperiencePage = () => (
  <Container>
    {Navbar(navPages)}
    <Flex direction="column" gap="8">
      {experiences.map(ExperienceElem)}
    </Flex>
    <Footer/>
  </Container>
);

export default ExperiencePage;
