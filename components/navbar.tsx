import NextLink from "next/link";
import { useRouter } from "next/router";
import { Link, HStack } from "@chakra-ui/react";

const NavElem = ({ href, text }) => {
  const router = useRouter()
  const isActive = router.pathname === href
  return (
  <NextLink href={href} passHref>
    <Link
      padding={1}
      fontWeight={ isActive ? "bold" : ""}
      backgroundColor={ isActive ? "gray.700": "gray.100" }
      textColor={ isActive ? "white" : "black"}
      rounded="md"
      _hover={ isActive ? {} : {
        transform: "scale(1.1)",
        backgroundColor: "gray.400"
      }}
    >
      {text}
    </Link>
  </NextLink>
)
    }

export const Navbar: React.FunctionComponent = () => {
  return (
    <HStack>
      <NavElem href="/" text="home" />
      <NavElem href="/about" text="about" />
      <NavElem href="/now" text="now" />
      <NavElem href="/tools" text="tools" />
    </HStack>
  );
};

export default Navbar;
