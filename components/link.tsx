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
  <a
    key={props.label}
    href={props.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 px-2 py-1 rounded shadow bg-gray-100 dark:bg-gray-800"
  >
    {props.icon({})}
    {props.label}
  </a>
);

const SocialLogoLink = (social: Social) => LogoLink(socialToLink(social));

export default SocialLogoLink;
