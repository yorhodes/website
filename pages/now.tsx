import { Container } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import { navPages } from '../data/navbar';

const NowPage = () => (
  <Container>
    {Navbar(navPages)}
  </Container>
);

export default NowPage;
