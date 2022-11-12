import { Container, Flex } from "@chakra-ui/react";

import { Bio } from "../components/bio";
import Navbar from "../components/navbar";
import ExternalPlatformLink from "../components/link";

import bioContent from "../data/bio.json";
import navPages from "../data/navbar.json";
import socials from "../data/socials.json";
import Footer from "../components/footer";

const IndexPage = () => (
  <Container>
    {Navbar(navPages)}
    {Bio(bioContent)}
    {
      <Flex wrap="wrap" gap="2">
        {socials.map(ExternalPlatformLink)}
      </Flex>
    }
    <Footer/>
  </Container>
);

export default IndexPage;
