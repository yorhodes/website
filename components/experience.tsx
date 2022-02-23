import { Text, Flex, Box } from "@chakra-ui/react";

export type Experience = {
  title: string;
  place: string;
  description: string;
  date: string;
  location: string;
};

export const ExperienceElem = (experience: Experience) => (
  <Box py="3">
    <Flex direction="row">
      <Flex direction="column" width="50%">
        <Text fontSize="lg" fontWeight="bold">
          {experience.place}
        </Text>
        <Text fontSize="md">{experience.date}</Text>
        <Text>{experience.location}</Text>
      </Flex>
      <Flex direction="column" width="50%">
        <Text fontSize="lg">{experience.title}</Text>
        <Text fontSize="sm">{experience.description}</Text>
      </Flex>
    </Flex>
    {/* <Divider/> */}
  </Box>
);
