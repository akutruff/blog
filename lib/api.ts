import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { parseISO, format } from 'date-fns'
import { MDXRemoteSerializeResult, } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import PostType from '../interfaces/post'
import rehypeHighlight from 'rehype-highlight'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const data = fs.readFileSync(fullPath, 'utf8')
  // const { data, content } = matter(fileContents)

  const source: MDXRemoteSerializeResult = await serialize(data, {

    // remember that YAML Front Matter from earlier?
    // well this parameter will parse it
    parseFrontmatter: true,

    // you can pass some plugins here
    // rehypeHighlight does code highlighting for example
    mdxOptions: {
      rehypePlugins: [rehypeHighlight]
    },
  });

  return { source, post: { ...source.frontmatter, slug: realSlug } as unknown as PostType };
}

export async function getAllPosts() {
  const slugs = getPostSlugs()

  const posts = await Promise.all(slugs.map(slug => getPostBySlug(slug)));

  // sort posts by date in descending order
  posts.sort((post1, post2) => (post1.post.date > post2.post.date ? -1 : 1))
  return posts;
}
