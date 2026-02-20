import { Text, Flex, Img, Link } from "@chakra-ui/react";
import { Experience, Role } from "../types";

import appendix from "../data/appendix.json";
import Appendix from "./appendix";

const ExperienceRole = (role: Role, index: number, location?: string) => {
  return (
    <Flex key={role.title + role.end} direction="row">
      <Flex direction="column" width="80%">
        <Text fontSize="md" as="b">
          {role.title}
        </Text>
        <Text fontSize="sm" marginTop="1">{Appendix(role.description ?? "", appendix)}</Text>
      </Flex>
      <Flex direction="column" width="20%">
        {index === 0 && location && (
          <Text fontSize="x-small" align="right" color="gray.500">
            {location}
          </Text>
        )}
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
      <Flex direction="column" alignItems="center" width="20" flexShrink={0}>
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
          <Text as="b" fontSize="sm">
            {experience.name}
          </Text>
        </Link>
      </Flex>
      <Flex direction="column" width="100%" gap="3">
        {experience.roles.map((role, i) => ExperienceRole(role, i, experience.location))}
      </Flex>
    </Flex>
  );
};

export default ExperienceElem;
