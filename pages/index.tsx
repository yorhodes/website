import { Container } from "@chakra-ui/react";

import Bio from "../components/bio";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import { bioContent } from "../data/bio";
import { navPages } from "../data/navbar";
import { socials } from "../data/socials";

const IndexPage = () => (
  <Container>
    {Navbar(navPages)}
    {Bio(bioContent)}
    {Footer(socials)}
  </Container>
);

export default IndexPage;
