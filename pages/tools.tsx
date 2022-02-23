import { Container, Heading } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import { navPages } from '../data/navbar';

const ToolsPage = () => (
  <Container>
    {Navbar(navPages)}
    <Heading color="gold">Under Construction</Heading>
  </Container>
);

export default ToolsPage;
