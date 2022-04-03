import { Text, Flex, Link, Img } from "@chakra-ui/react";

export type Place = {
  name: string;
  url: string;
  logo: string;
  location: string;
};

type digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

enum Month {
  JAN = "January",
  FEB = "February",
  MAR = "March",
  APR = "April",
  MAY = "May",
  JUN = "June",
  JUL = "July",
  AUG = "August",
  SEP = "September",
  OCT = "October",
  NOV = "November",
  DEC = "December"
}

type Date = `${Month} 20${digit}${digit}` | "Present"

export type Experience = Place & {
  title: string;
  description?: string;
  start: Date;
  end: Date;
};

export const ExperienceElem = (experience: Experience) => (
  <Flex key={experience.name + experience.title} margin="3" direction="row" gap="5">
    <Img marginY="2" padding="1" src={`logos/${experience.logo}`} borderRadius='lg' bg="gray.500" objectFit="scale-down" width="10%"/>
    <Flex direction="column" width="50%">
      <Link href={experience.url} fontSize="lg" fontWeight="bold">
        {experience.name}
      </Link>
      <Text fontSize="md">{experience.start} - {experience.end}</Text>
      <Text>{experience.location}</Text>
    </Flex>
    <Flex direction="column" width="50%">
      <Text fontSize="lg">{experience.title}</Text>
      <Text fontSize="sm">{experience.description}</Text>
    </Flex>
  </Flex>
);
