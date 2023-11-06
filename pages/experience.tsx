import { Box, Flex } from "@chakra-ui/react";
import ExperienceElem from "../components/experience";
import experiences from "../data/experience.json";

const ExperiencePage = () => (
  <Box>
    <Flex direction="column" gap="8">
      {experiences.map(ExperienceElem)}
    </Flex>
  </Box>
);

export default ExperiencePage;
