import { HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { BiGitRepoForked } from "react-icons/bi";
import { FaEdit, FaStar } from "react-icons/fa";
import { LogoLink } from "./link";


// https://vercel.com/docs/concepts/projects/environment-variables#system-environment-variables
const GIT_PLATFORM = process.env.VERCEL_GIT_PROVIDER ?? 'github';
const GIT_REPO = process.env.VERCEL_GIT_REPO_SLUG ?? "website"
const GIT_OWNER = process.env.VERCEL_GIT_REPO_OWNER ?? "yorhodes";
const GIT_BRANCH = process.env.VERCEL_GIT_COMMIT_REF ?? 'main';

const REPO_URL = `https://${GIT_PLATFORM}.com/${GIT_OWNER}/${GIT_REPO}`;

const Footer = () => {
  const router = useRouter();
  const file = router.pathname === "/" ? "bio" : router.pathname.slice(1);

  return (<HStack paddingY="5" alignSelf="right">
    {LogoLink({
      link: `${REPO_URL}/generate`,
      icon: BiGitRepoForked,
      label: "use",
    })}
    {LogoLink({
      link: `${REPO_URL}/edit/${GIT_BRANCH}/data/${file}.json`,
      icon: FaEdit,
      label: "edit"
    })}
    {LogoLink({
      link: REPO_URL,
      icon: FaStar,
      label: "star"
    })}
  </HStack>);
  }

export default Footer;
