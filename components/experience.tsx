import { Text, Flex, Img, Link } from "@chakra-ui/react";
import { Experience } from "../types";

const ExperienceElem = (experience: Experience) => (
  <Flex key={experience.name + experience.title} direction="row" gap="3">
    <Img marginY="2" padding="1" src={`logos/${experience.logo}`} borderRadius='lg' bg="gray.500" objectFit="scale-down" width="10%"/>
    <Flex direction="column" width="50%">
      <Link href={experience.link} isExternal>
        {experience.name}
      </Link>
      <Text fontSize="md">{experience.title}</Text>
      <Text fontSize="sm">{experience.description}</Text>
    </Flex>
    <Flex direction="column" width="50%">
      <Text fontSize="sm" align="right">{experience.start} - {experience.end}</Text>
      <Text fontSize="sm" align="right">{experience.location}</Text>
    </Flex>
  </Flex>
);

export default ExperienceElem;
