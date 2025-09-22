import { Link, Button, ButtonProps, Text } from "@chakra-ui/react";
import { Social } from "../types";

import { IconType } from "react-icons";

import {
  FaBookReader,
  FaCalendar,
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
import { MdEmail } from 'react-icons/md';
import { SiNotion, SiObservable, SiSubstack } from 'react-icons/si';
import { ChessStats } from "../lib/chess";

const IconMap: Record<string, IconType> = {
  email: MdEmail,
  calendar: FaCalendar,
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

export const LogoLink = (props: LogoLinkProps) => (
    <Link key={props.label} href={props.link} isExternal>
      <Button
        padding="2"
        leftIcon={props.icon({})}
        size="small"
      >
        {props.label}
      </Button>
    </Link>
  );

interface ChessLinkProps extends Social {
  chessStats?: ChessStats | null;
}

export const ChessLink = ({ chessStats, ...social }: ChessLinkProps) => {
  const props = socialToLink(chessStats ? { ...social, link: chessStats.link } : social);
  const displayLabel = chessStats ? `${props.label} (${chessStats.rating})` : props.label;
  return LogoLink({ ...props, label: displayLabel });
};

const SocialLogoLink = (social: Social) => LogoLink(socialToLink(social));

export default SocialLogoLink;
