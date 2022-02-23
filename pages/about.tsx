import { Container } from "@chakra-ui/react";
import { ExperienceElem } from "../components/experience";
import Navbar from "../components/navbar";
import { experiences } from "../data/experience";
import { navPages } from "../data/navbar";

const AboutPage = () => (
  <Container>
    {Navbar(navPages)}
    {experiences.map(experience => ExperienceElem(experience))}
  </Container>
);

export default AboutPage;
