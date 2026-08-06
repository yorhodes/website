import { useEffect, useState } from "react";
import Image from "next/image";
import { keyframes } from "@emotion/react";
import { Box, Flex, Text, Heading, usePrefersReducedMotion } from "@chakra-ui/react";
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
    <Flex
      direction={{ base: "column-reverse", sm: "row" }}
      alignItems={{ base: "flex-start", sm: "center" }}
      gap={{ base: "6", sm: "10" }}
      py="5"
    >
      <Flex direction="column">
        <Heading as="h1" aria-label={content.name}>
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
      <Box
        position="relative"
        boxSize={{ base: "120px", sm: "150px" }}
        borderRadius="full"
        overflow="hidden"
        flexShrink="0"
        filter="grayscale(30%)"
        transition="filter 150ms ease"
        _hover={{
          filter: "grayscale(10%)",
        }}
      >
        <Image
          src="/headshot.webp"
          alt="Yorke Rhodes IV"
          fill
          priority
          unoptimized
          sizes="(max-width: 479px) 120px, 150px"
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Flex>
  );
};

export default Bio;
