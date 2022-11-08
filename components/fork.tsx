import { Button, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CgGitFork } from "react-icons/cg";

const getDataPath = () => {
  const router = useRouter();
  const file = router.pathname === "/" ? "bio" : router.pathname.slice(1);
  return `${file}.json`;
};

const ForkElem = () => {
  const branch = process.env.VERCEL_GIT_COMMIT_REF ?? 'main';
  const forkUrl = `https://github.com/yorhodes/website/edit/${branch}/data/${getDataPath()}`;
  return (
    <Link href={forkUrl} isExternal>
      <Button
        rounded="md"
        _hover={{
          transform: "scale(1.1)",
        }}
        leftIcon={<CgGitFork />}
        size="sm"
      >
        fork
      </Button>
    </Link>
  );
};

export default ForkElem;
