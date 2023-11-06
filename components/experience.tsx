import { Text, Flex, Img, Link } from "@chakra-ui/react";
import { Experience, Role } from "../types";

import appendix from "../data/appendix.json";
import Appendix from "./appendix";

const ExperienceRole = (role: Role) => {
  return (
    <Flex key={role.title + role.end} direction="row">
      <Flex direction="column" width="80%">
        <Text fontSize="md" as="b">
          {role.title}
        </Text>
        <Text fontSize="sm">{Appendix(role.description ?? "", appendix)}</Text>
      </Flex>
      <Flex direction="column" width="20%">
        <Text fontSize="x-small" align="right">
          {role.end}
        </Text>
        <Text fontSize="x-small" align="right">
          {role.start}
        </Text>
      </Flex>
    </Flex>
  );
};

const ExperienceElem = (experience: Experience) => {
  return (
    <Flex direction="row" gap="5" key={experience.name}>
      <Flex direction="column" alignItems="center" maxWidth="20">
        <Link href={experience.link} textAlign="center" isExternal>
          <Img
            bg="white"
            padding="3"
            src={`logos/${experience.logo}`}
            objectFit="scale-down"
            maxWidth="20"
            minHeight="20"
            rounded="lg"
          />
          <Text as="b">{experience.name}</Text>
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
};

export default ExperienceElem;
