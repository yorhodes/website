import { useEffect, useState } from "react";
import { keyframes } from "@emotion/react";
import { Flex, Text, Heading, Img, usePrefersReducedMotion } from "@chakra-ui/react";
import { BioContent } from "../types";

const carouselFade = keyframes`
  0% { opacity: 0; transform: translateY(4px); }
  12% { opacity: 1; transform: translateY(0); }
  88% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-4px); }
`;

export const Bio = (content: BioContent) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const hasRomanSuffix = content.name.endsWith(" IV");
  const displayName = hasRomanSuffix ? content.name.slice(0, -3) : content.name;

  useEffect(() => {
    if (prefersReducedMotion || content.title.length < 2) return;

    const interval = window.setInterval(() => {
      setTitleIndex((current) => (current + 1) % content.title.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [content.title.length, prefersReducedMotion]);

  return (
    <Flex direction="row" gap="10" py="5">
      <Flex direction="column">
        <Heading aria-label={content.name}>
          {displayName}
          {hasRomanSuffix && (
            <Text
              as="span"
              fontFamily="inherit"
              fontSize="0.78em"
              fontWeight="inherit"
              lineHeight="1"
              verticalAlign="baseline"
              marginLeft="1"
              aria-hidden="true"
            >
              Ⅳ
            </Text>
          )}
        </Heading>
        <Text
          key={content.title[titleIndex]}
          fontSize="lg"
          minHeight="1.5em"
          marginTop="2"
          aria-label={content.title.join(", ")}
          animation={prefersReducedMotion ? undefined : `${carouselFade} 3s ease-in-out`}
        >
          {content.title[titleIndex]}
        </Text>
        <Text marginTop="4">{content.tagline}</Text>
      </Flex>
      <Img
        src="headshot.jpeg"
        borderRadius='full'
        boxSize="150px"
        filter="grayscale(30%)"
        _hover={{
          filter: "grayscale(10%)",
        }}
      />
    </Flex>
  );
};

export default Bio;
