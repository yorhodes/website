import { Link, Button } from "@chakra-ui/react";
import { Social, Platform } from "../types";

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

const IconMap = {
  mail: FiMail,
  cal: FiCalendar,
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

const SocialElem = (social: Social) => {
  const platform = social.platform ?? new URL(social.link).hostname.split('.').reverse()[1];
  const icon = IconMap[platform] ?? FaBookReader;
  const label = social.label ?? platform;
  return (
    <Link key={label} isExternal={true} href={social.link}>
      <Button
        paddingX={2}
        rounded="md"
        _hover={{
          transform: "scale(1.1)",
        }}
        leftIcon={{icon}}
      >
        {label}
      </Button>
    </Link>
  );
};

export default SocialElem;
