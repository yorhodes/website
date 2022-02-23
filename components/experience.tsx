import { Text, Flex, Box, Link, Img, Divider } from "@chakra-ui/react";

export type Place = {
  name: string;
  url: string;
  logo: string;
  location: string;
};

export type Experience = Place & {
  title: string;
  description: string;
  date: string;
};

export const ExperienceElem = (experience: Experience) => (
  <Flex py="3" direction="row" gap="5">
    <Img src={`logos/${experience.logo}`} objectFit="scale-down" width="10%"/>
    <Flex direction="column" width="50%">
      <Link href={experience.url} fontSize="lg" fontWeight="bold">
        {experience.name}
      </Link>
      <Text fontSize="md">{experience.date}</Text>
      <Text>{experience.location}</Text>
    </Flex>
    <Flex direction="column" width="50%">
      <Text fontSize="lg">{experience.title}</Text>
      <Text fontSize="sm">{experience.description}</Text>
    </Flex>
  </Flex>
);
