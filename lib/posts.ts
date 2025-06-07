import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { Content } from '../types';
export type { Content } from '../types';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.mdx')).map((file) => file.replace(/\.mdx$/, ''));
}

export function getAllPosts(): Content[] {
  return getPostSlugs().map((slug) => getPostMeta(slug));
}

export function getPostMeta(slug: string): Content {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(source);
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    published: data.published as string,
    link: data.link as string | undefined,
  };
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(source);
  const mdxSource = await serialize(content);
  return {
    meta: {
      slug,
      title: data.title as string,
      description: data.description as string,
      published: data.published as string,
      link: data.link as string | undefined,
    },
    mdxSource,
  };
}
