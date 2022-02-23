import NextLink from "next/link";
import { useRouter } from "next/router";
import { Link, HStack } from "@chakra-ui/react";

export type NavPage = {
  href: string,
  text: string
}

const NavElem = (navPage: NavPage) => {
  const router = useRouter()
  const isActive = router.pathname === navPage.href
  
  return (
    <NextLink href={navPage.href} passHref>
      <Link
        paddingX={5}
        fontWeight={ isActive ? "bold" : ""}
        backgroundColor={ isActive ? "gray.700": "gray.100" }
        textColor={ isActive ? "white" : "black"}
        rounded="md"
        _hover={ isActive ? {} : {
          transform: "scale(1.1)",
          backgroundColor: "gray.400"
        }}
      >
        {navPage.text}
      </Link>
    </NextLink>
  )
}

export const Navbar = (navPages: NavPage[]) => {
  return (
    <HStack paddingY="5">
      {navPages.map(navPage => NavElem(navPage))}
    </HStack>
  );
};

export default Navbar;
