import NextLink from "next/link";
import { useRouter } from "next/router";
import { HStack, useColorMode, Spacer, Button } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavPage } from "../types";

const NavElem = (navPage: NavPage) => {
  const router = useRouter();
  const isActive = router.pathname === navPage.link;

  return (
    <NextLink href={navPage.link} key={navPage.text} passHref>
      <Button
        shadow={isActive ? "md" : "base"}
        transform={isActive ? "scale(1.1)" : "scale(1)"}
      >
        {navPage.text}
      </Button>
    </NextLink>
  );
};

const ToggleDarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "dark" ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

const Navbar = (navPages: NavPage[]) => {
  return (
    <HStack paddingY="5" wrap="wrap" gap="3">
      {navPages.map(NavElem)}
      <Spacer />
      <ToggleDarkModeButton />
    </HStack>
  );
};

export default Navbar;
