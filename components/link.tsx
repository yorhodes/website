import { Link, Button, Icon, useColorModeValue } from "@chakra-ui/react";
import { Social } from "../types";

import { IconType } from "react-icons";

import {
  FaBookReader,
  FaCalendar,
  FaChessKnight,
  FaDiscord,
  FaEthereum,
  FaFileAlt,
  FaGithub,
  FaGoodreads,
  FaLinkedin,
  FaMedium,
  FaReddit,
  FaSpotify,
  FaSteam,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineEmail } from 'react-icons/md';
import { SiNotion, SiObservable, SiSubstack } from 'react-icons/si';

const IconMap: Record<string, IconType> = {
  email: MdOutlineEmail,
  resume: FaFileAlt,
  calendar: FaCalendar,
  github: FaGithub,
  notion: SiNotion,
  twitter: FaTwitter,
  reader: FaBookReader,
  substack: SiSubstack,
  spotify: FaSpotify,
  linkedin: FaLinkedin,
  chess: FaChessKnight,
  medium: FaMedium,
  goodreads: FaGoodreads,
  reddit: FaReddit,
  discord: FaDiscord,
  observable: SiObservable,
  telegram: FaTelegram,
  steam: FaSteam,
  ens: FaEthereum
}

interface LogoLinkProps {
  link: string;
  icon: IconType;
  label: string;
}

const socialToLink = (social: Social): LogoLinkProps => {
  const platform = social.label ?? new URL(social.link).hostname.split('.').reverse()[1];
  const label = social.label ?? platform;
  const icon: IconType = IconMap[platform] ?? FaBookReader;
  return {
    link: social.link,
    icon,
    label
  }
}

export const LogoLink = (props: LogoLinkProps) => {
  const hoverBackground = useColorModeValue("blackAlpha.100", "whiteAlpha.200");

  return (
    <Link href={props.link} isExternal _hover={{ textDecoration: "none" }}>
      <Button
        variant="ghost"
        shadow="none"
        paddingX="3"
        paddingY="2"
        leftIcon={<Icon as={props.icon} boxSize="4" opacity="0.9" />}
        size="sm"
        fontWeight="600"
        transition="background-color 150ms ease, color 150ms ease, transform 150ms ease"
        _hover={{ bg: hoverBackground, transform: "translateY(-1px)" }}
      >
        {props.label}
      </Button>
    </Link>
  );
};

const SocialLogoLink = (social: Social) => {
  const props = socialToLink(social);
  return <LogoLink key={props.label} {...props} />;
};

export default SocialLogoLink;
