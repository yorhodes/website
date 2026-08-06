import { Box, Flex } from "@chakra-ui/react";
import ExperienceElem from "../components/experience";
import experiences from "../data/experience.json";

const ExperiencePage = () => (
  <Box>
    <Flex direction="column" gap="8">
      {experiences.map((experience) => (
        <ExperienceElem key={experience.name} experience={experience} />
      ))}
    </Flex>
  </Box>
);

export default ExperiencePage;
