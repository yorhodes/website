import { Container } from "@chakra-ui/react";

import { Bio } from "../components/bio";
import Navbar from "../components/navbar";
import SocialElem from "../components/social";

import bioContent from "../data/bio.json";
import navPages from "../data/navbar.json";
import socials from "../data/socials.json";

const IndexPage = () => (
  <Container>
    {Navbar(navPages)}
    {Bio(bioContent)}
    {socials.map(SocialElem)}
  </Container>
);

export default IndexPage;
