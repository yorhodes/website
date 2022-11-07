import { Text, Flex, Img, Link } from "@chakra-ui/react";
import { Experience, Role } from "../types";

const ExperienceRole = (role: Role) => (
  <Flex key={role.title} direction="row">
    <Flex direction="column" width="75%">
      <Text fontSize="md" as="b">
        {role.title}
      </Text>
      <Text fontSize="sm">{role.description}</Text>
    </Flex>
    <Flex direction="column" width="25%">
      <Text fontSize="x-small" align="right">
        {role.end}
      </Text>
      <Text fontSize="x-small" align="right">
        {role.start}
      </Text>
    </Flex>
  </Flex>
);

const ExperienceElem = (experience: Experience) => (
  <Flex direction="row" gap="3" key={experience.name}>
    <Flex direction="column" alignItems="center" maxWidth="20">
      <Img
        bg="white"
        padding="3"
        src={`logos/${experience.logo}`}
        objectFit="scale-down"
        maxWidth="20"
        minHeight="20"
        rounded="lg"
      />
      <Link href={experience.link} fontSize="lg" textAlign="center" isExternal>
        {experience.name}
      </Link>
      <Text marginY="-1" fontSize="x-small">
        {experience.location}
      </Text>
    </Flex>
    <Flex direction="column" width="100%" gap="3">
      {experience.roles.map(ExperienceRole)}
    </Flex>
  </Flex>
);

export default ExperienceElem;
