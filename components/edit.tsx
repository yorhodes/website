import { useRouter } from "next/router";
import { FaEdit } from "react-icons/fa";
import { Link, Button, HStack, Box, Text } from "@chakra-ui/react";

const getRepo = () => {
  // https://vercel.com/docs/concepts/projects/environment-variables#system-environment-variables
  const platform = process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER ?? "github";
  const name = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG ?? "website";
  const owner = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER ?? "yorhodes";
  const branch = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ?? "yorke";

  const repo = `https://${platform}.com/${owner}/${name}`;

  return {
    repo,
    branch,
  };
};

const Edit = () => {
  const router = useRouter();
  const file = router.pathname === "/" ? "bio" : router.pathname.slice(1);

  const { repo, branch } = getRepo();

  const editUrl = `${repo}/edit/${branch}/data/${file}.json`;

  return (
    <Link href={editUrl} isExternal>
      <HStack marginTop="5">
        <FaEdit color="gray"/>
        <Text color="gray">Edit content on GitHub</Text>
      </HStack>
    </Link>
  );
};

export default Edit;
