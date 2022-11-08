import NextLink from "next/link";
import { useRouter } from "next/router";
import { Link, HStack, useColorMode, Spacer, Button } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavPage } from "../types";

const NavElem = (navPage: NavPage) => {
  const router = useRouter();
  const isActive = router.pathname === navPage.link;

  return (
    <NextLink href={navPage.link} key={navPage.text} passHref>
      <Link
        paddingX={5}
        fontWeight={isActive ? "bold" : ""}
        backgroundColor={isActive ? "gray.700" : "gray.100"}
        textColor={isActive ? "white" : "black"}
        rounded="md"
        _hover={isActive ? {} : {
          transform: "scale(1.1)",
          backgroundColor: "gray.400",
        }}
      >
        {navPage.text}
      </Link>
    </NextLink>
  );
};

const ToggleDarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} _hover={{ transform: "scale(1.1)" }}>
      {colorMode === "dark" ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

const Navbar = (navPages: NavPage[]) => {
  return (
    <HStack paddingY="5">
      {navPages.map(NavElem)}
      <Spacer />
      <ToggleDarkModeButton />
    </HStack>
  );
};

export default Navbar;
