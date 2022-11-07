import { Text, Flex, Link, Img } from "@chakra-ui/react";
import { Experience } from "../types";

const ExperienceElem = (experience: Experience) => (
  <Flex key={experience.name + experience.title} margin="3" direction="row" gap="5">
    <Img marginY="2" padding="1" src={`logos/${experience.logo}`} borderRadius='lg' bg="gray.500" objectFit="scale-down" width="10%"/>
    <Flex direction="column" width="50%">
      <Link href={experience.url} fontSize="lg" fontWeight="bold">
        {experience.name}
      </Link>
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
