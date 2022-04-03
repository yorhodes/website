import { Link, Button, Flex } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export type Social = {
  href: string;
  text: string;
  icon: IconType;
};

const SocialElem = (social: Social) => {
  return (
    <Link key={social.text} isExternal={true} href={social.href}>
      <Button
        paddingX={2}
        rounded="md"
        _hover={{
          transform: "scale(1.1)",
        }}
      >
        <social.icon /> {social.text} <ExternalLinkIcon />
      </Button>
    </Link>
  );
};

export const Footer = (socials: Social[]) => {
  return <Flex wrap="wrap" gap="2">{socials.map((social) => SocialElem(social))}</Flex>;
};

export default Footer;
