import { Link, Button } from "@chakra-ui/react";
import { Social, PlatformString } from "../types";

import { IconType } from "react-icons";

import {
  FaBookReader,
  FaChess,
  FaDiscord,
  FaEthereum,
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
import { FiCalendar, FiMail } from "react-icons/fi";
import { SiNotion, SiObservable, SiSubstack } from 'react-icons/si';

const IconMap: Record<PlatformString, IconType> = {
  mail: FiMail,
  calendar: FiCalendar,
  github: FaGithub,
  notion: SiNotion,
  twitter: FaTwitter,
  reader: FaBookReader,
  substack: SiSubstack,
  spotify: FaSpotify,
  linkedin: FaLinkedin,
  chess: FaChess,
  medium: FaMedium,
  goodreads: FaGoodreads,
  reddit: FaReddit,
  discordapp: FaDiscord,
  observablehq: SiObservable,
  telegram: FaTelegram,
  steamcommunity: FaSteam,
  ens: FaEthereum
}

const LogoLink = (social: Social) => {
  const platform = social.platform ?? new URL(social.link).hostname.split('.').reverse()[1];
  const label = social.label ?? platform;
  const icon: IconType = IconMap[platform] ?? FaBookReader;
  return (
    <Link key={label} href={social.link} isExternal>
      <Button
        paddingX={2}
        rounded="md"
        _hover={{
          transform: "scale(1.1)",
        }}
        leftIcon={icon({})}
        size="sm"
      >
        {label}
      </Button>
    </Link>
  );
};

export default LogoLink;
