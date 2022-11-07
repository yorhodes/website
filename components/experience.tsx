import { Text, Flex, Img } from "@chakra-ui/react";
import { Experience } from "../types";
import LogoLink from "./link";

// TODO: merge Img and LogoLink
const ExperienceElem = (experience: Experience) => (
  <Flex key={experience.name + experience.title} margin="5" direction="row" gap="5">
    <Img marginY="2" padding="1" src={`logos/${experience.logo}`} borderRadius='lg' bg="gray.500" objectFit="scale-down" width="10%"/>
    <Flex direction="column" width="50%">
      {LogoLink({
        ...experience,
        label: experience.name
      })}
      <Text fontSize="lg">{experience.title}</Text>
      <Text fontSize="sm">{experience.description}</Text>
    </Flex>
    <Flex direction="column" width="50%">
      <Text fontSize="md" align="right">{experience.start} - {experience.end}</Text>
      <Text align="right">{experience.location}</Text>
    </Flex>
  </Flex>
);

export default ExperienceElem;
