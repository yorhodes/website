import { HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { BiGitRepoForked } from "react-icons/bi";
import { FaEdit, FaStar } from "react-icons/fa";
import { LogoLink } from "./link";

const getRepo = () => {
  // https://vercel.com/docs/concepts/projects/environment-variables#system-environment-variables
  const platform = process.env.VERCEL_GIT_PROVIDER ?? 'github';
  const name = process.env.VERCEL_GIT_REPO_SLUG ?? "website"
  const owner = process.env.VERCEL_GIT_REPO_OWNER ?? "yorhodes";
  const branch = process.env.VERCEL_GIT_COMMIT_REF ?? 'main';

  const repo = `https://${platform}.com/${owner}/${name}`;

  return {
    repo,
    branch,
  };
}

const Footer = () => {

  const router = useRouter();
  const file = router.pathname === "/" ? "bio" : router.pathname.slice(1);

  const { repo, branch } = getRepo();

  return (<HStack paddingY="5" alignSelf="right">
    {LogoLink({
      link: `${repo}/generate`,
      icon: BiGitRepoForked,
      label: "use",
    })}
    {LogoLink({
      link: `${repo}/edit/${branch}/data/${file}.json`,
      icon: FaEdit,
      label: "edit"
    })}
    {LogoLink({
      link: repo,
      icon: FaStar,
      label: "star"
    })}
  </HStack>);
  }

export default Footer;
