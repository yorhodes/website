import {
  FaChess,
  FaDiscord,
  FaEthereum,
  FaGithub,
  FaGoodreads,
  FaLinkedin,
  FaReddit,
  FaSpotify,
  FaSteam,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { FiCalendar, FiMail } from "react-icons/fi";
import { Social } from "../components/footer";

export const socials: Social[] = [
  {
    href: "mailto:contact@yorke.dev",
    icon: FiMail,
    text: "contact",
  },
  {
    href: "https://zcal.co/i/BPoGFzXm",
    icon: FiCalendar,
    text: "zcal",
  },
  {
    href: "https://github.com/yorhodes",
    icon: FaGithub,
    text: "github",
  },
  {
    href: "https://twitter.com/0xyorke",
    icon: FaTwitter,
    text: "twitter",
  },
  {
    href: "https://open.spotify.com/user/1244236872",
    icon: FaSpotify,
    text: "spotify",
  },
  {
    href: "https://linkedin.com/in/yorke-rhodes-iv/",
    icon: FaLinkedin,
    text: "linkedin",
  },
  {
    href: "https://chess.com/member/yorhodes",
    icon: FaChess,
    text: "chess.com",
  },
  {
    href: "https://goodreads.com/user/show/112440288-yorke-rhodes",
    icon: FaGoodreads,
    text: "goodreads",
  },
  {
    href: "https://reddit.com/user/yorhodes4/",
    icon: FaReddit,
    text: "reddit",
  },
  {
    href: "https://discordapp.com/users/yorhodes#3158",
    icon: FaDiscord,
    text: "discord",
  },
  {
    href: "https://telegram.me/yorhodes",
    icon: FaTelegram,
    text: "telegram",
  },
  {
    href: "https://steamcommunity.com/profiles/76561198061512019/",
    icon: FaSteam,
    text: "steam",
  },
  {
    href: "https://app.ens.domains/name/yorke.eth",
    icon: FaEthereum,
    text: "ens",
  },
];
