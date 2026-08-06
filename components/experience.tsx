import { Text, Flex, Img, Link } from "@chakra-ui/react";
import { Experience, Role } from "../types";

import appendix from "../data/appendix.json";
import Appendix from "./appendix";

const DesktopDateRange = ({ role }: { role: Role }) => (
  <Text
    display={{ base: "none", md: "block" }}
    position="absolute"
    left="calc(100% + 12px)"
    top="0"
    width="16"
    fontSize="0.8125rem"
    lineHeight="short"
    textAlign="right"
    whiteSpace="pre-line"
    opacity="0.82"
    aria-label={`${role.start} to ${role.end}`}
  >
    {`${role.end}\n${role.start}`}
  </Text>
);

const ExperienceRole = (role: Role, index: number, experienceName: string, location?: string) => {
  const description = role.description ?? "";
  const outcomeMarker = "Scaled to 200+ chains";
  const outcomeIndex = experienceName === "Hyperlane" ? description.indexOf(outcomeMarker) : -1;
  const descriptionParagraphs = outcomeIndex > 0
    ? [description.slice(0, outcomeIndex).trim(), description.slice(outcomeIndex).trim()]
    : [description];

  return (
    <Flex key={role.title + role.end} direction="column" position="relative">
      <Flex direction="column" width="100%">
        <Flex alignItems="flex-start" justifyContent="space-between" gap="4">
          <Flex alignItems="baseline" gap="2" wrap="wrap" minWidth="0">
            <Text fontSize="md" as="b">
              {role.title}
            </Text>
            {index === 0 && location && (
              <Text fontSize="0.8125rem" opacity="0.82">
                · {location}
              </Text>
            )}
          </Flex>
          <Text
            fontSize="0.8125rem"
            lineHeight="short"
            textAlign="right"
            whiteSpace="pre-line"
            display={{ base: "block", md: "none" }}
            flexShrink="0"
            opacity="0.82"
            aria-label={`${role.start} to ${role.end}`}
          >
            {`${role.end}\n${role.start}`}
          </Text>
        </Flex>
        <Flex direction="column" gap="2" marginTop="1">
          {descriptionParagraphs.map((paragraph) => (
            <Text key={paragraph} fontSize="0.9375rem">
              <Appendix text={paragraph} appendix={appendix} />
            </Text>
          ))}
        </Flex>
      </Flex>
      <DesktopDateRange role={role} />
    </Flex>
  );
};

const ExperienceElem = ({ experience }: { experience: Experience }) => {
  return (
    <Flex
      direction="column"
      position="relative"
      minHeight={{ md: "20" }}
    >
      <Link
        href={experience.link}
        isExternal
        display="flex"
        flexDirection={{ base: "row", md: "column" }}
        alignItems="center"
        width={{ base: "fit-content", md: "16" }}
        marginBottom={{ base: "3", md: "0" }}
        position={{ base: "static", md: "absolute" }}
        left={{ md: "-80px" }}
        top={{ md: "0" }}
        textAlign="center"
      >
        <Img
          bg="white"
          padding="2"
          src={`logos/${experience.logo}`}
          objectFit="scale-down"
          boxSize={{ base: "10", md: "14" }}
          rounded="md"
        />
        <Text
          as="b"
          fontSize="0.875rem"
          lineHeight="short"
          marginLeft={{ base: "2", md: "0" }}
          marginTop={{ base: "0", md: "1" }}
        >
          {experience.name}
        </Text>
      </Link>
      <Flex direction="column" width="100%" gap="3">
        {experience.roles.map((role, i) => ExperienceRole(role, i, experience.name, experience.location))}
      </Flex>
    </Flex>
  );
};

export default ExperienceElem;
