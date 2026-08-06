import NextLink from "next/link";
import { useRouter } from "next/router";
import { HStack, useColorMode, useColorModeValue, Spacer, Button } from "@chakra-ui/react";
import { MdLightbulb, MdLightbulbOutline } from "react-icons/md";
import { NavPage } from "../types";

const NavElem = (navPage: NavPage) => {
  const router = useRouter();
  const isActive = router.pathname === navPage.link;
  const activeBackground = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const hoverBackground = useColorModeValue("blackAlpha.50", "whiteAlpha.100");

  return (
    <NextLink href={navPage.link} key={navPage.text} passHref>
      <Button
        variant="ghost"
        shadow="none"
        bg={isActive ? activeBackground : "transparent"}
        fontSize={{ base: "sm", sm: "md" }}
        fontWeight="600"
        paddingX={{ base: "2", sm: "4" }}
        aria-current={isActive ? "page" : undefined}
        transition="background-color 150ms ease, color 150ms ease, transform 150ms ease"
        _hover={{
          bg: isActive ? activeBackground : hoverBackground,
          transform: "translateY(-1px)"
        }}
      >
        {navPage.text}
      </Button>
    </NextLink>
  );
};

const ToggleDarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const hoverBackground = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  return (
    <Button
      variant="ghost"
      shadow="none"
      minWidth={{ base: "9", sm: "10" }}
      paddingX={{ base: "2", sm: "4" }}
      onClick={toggleColorMode}
      aria-label={`Switch to ${colorMode === "dark" ? "light" : "dark"} mode`}
      transition="background-color 150ms ease, color 150ms ease, transform 150ms ease"
      _hover={{ bg: hoverBackground, transform: "translateY(-1px)" }}
    >
      {colorMode === "dark" ? <MdLightbulb /> : <MdLightbulbOutline />}
    </Button>
  );
};

const Navbar = (navPages: NavPage[]) => {
  return (
    <HStack paddingY="5" gap={{ base: "0", sm: "1" }}>
      {navPages.map(NavElem)}
      <Spacer />
      <ToggleDarkModeButton />
    </HStack>
  );
};

export default Navbar;
