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
    href: "zcal.co/i/BPoGFzXm",
    icon: FiCalendar,
    text: "zcal",
  },
  {
    href: "github.com/yorhodes",
    icon: FaGithub,
    text: "github",
  },
  {
    href: "twitter.com/0xyorke",
    icon: FaTwitter,
    text: "twitter",
  },
  {
    href: "open.spotify.com/user/1244236872",
    icon: FaSpotify,
    text: "spotify",
  },
  {
    href: "linkedin.com/in/yorke-rhodes-iv/",
    icon: FaLinkedin,
    text: "linkedin",
  },
  {
    href: "chess.com/member/yorhodes",
    icon: FaChess,
    text: "chess.com",
  },
  {
    href: "goodreads.com/user/show/112440288-yorke-rhodes",
    icon: FaGoodreads,
    text: "goodreads",
  },
  {
    href: "reddit.com/user/yorhodes4/",
    icon: FaReddit,
    text: "reddit",
  },
  {
    href: "discordapp.com/users/yorhodes#3158",
    icon: FaDiscord,
    text: "discord",
  },
  {
    href: "telegram.me/yorhodes",
    icon: FaTelegram,
    text: "telegram",
  },
  {
    href: "steamcommunity.com/profiles/76561198061512019/",
    icon: FaSteam,
    text: "steam",
  },
  {
    href: "app.ens.domains/name/yorke.eth",
    icon: FaEthereum,
    text: "ens",
  },
];
