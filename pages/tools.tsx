import { Container } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import { navPages } from '../data/navbar';

const ToolsPage = () => (
  <Container>
    {Navbar(navPages)}
  </Container>
);

export default ToolsPage;
