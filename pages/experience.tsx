import { Flex } from "@chakra-ui/react";
import ExperienceElem from "../components/experience";
import experiences from "../data/experience.json";

const ExperiencePage = () => (
  <Flex direction="column" gap="8">
    {experiences.map(ExperienceElem)}
  </Flex>
);

export default ExperiencePage;
