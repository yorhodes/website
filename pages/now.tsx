import { Container, Heading } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import { navPages } from '../data/navbar';

const NowPage = () => (
  <Container>
    {Navbar(navPages)}
    <Heading color="gold">Under Construction</Heading>
  </Container>
);

export default NowPage;
