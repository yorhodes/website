import { Box, Heading, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getPostSlugs, getPostData, Content } from "../../lib/posts";

interface PostProps {
  meta: Content;
  mdxSource: MDXRemoteSerializeResult;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string;
  const data = await getPostData(slug);
  return { props: data };
};

const PostPage = ({ meta, mdxSource }: PostProps) => (
  <Box>
    <Heading>{meta.title}</Heading>
    <Text fontSize="sm" marginBottom="5">
      {meta.description}
    </Text>
    <MDXRemote {...mdxSource} />
  </Box>
);

export default PostPage;
