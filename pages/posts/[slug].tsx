import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from '../../components/container'
import Header from '../../components/header'
import { getFullyQualifiedImagePath, Image } from '../../components/Image'
import Layout from '../../components/layout'
import PostHeader from '../../components/post-header'
import PostTitle from '../../components/post-title'
import type PostType from '../../interfaces/post'
import { getAllPosts, getPostBySlug } from '../../lib/api'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean,
  source: MDXRemoteSerializeResult
}

const PostImage = (props) => <Image {...props} />;
const H1 = (props) => <div className="text-6xl mt-12 mb-4 leading-snug" {...props} />;
const H2 = (props) => <div className="text-5xl mt-12 mb-4 leading-snug" {...props} />;
const H3 = (props) => <div className="text-4xl mt-12 mb-4 leading-snug" {...props} />;
const H4 = (props) => <div className="text-3xl mt-12 mb-4 leading-snug" {...props} />;
const H5 = (props) => <div className="text-2xl mt-12 mb-4 leading-snug" {...props} />;
const H6 = (props) => <div className="text-xl mt-12 mb-4 leading-snug" {...props} />;
const P = (props) => <p className="my-6" {...props} />;
const Code = (props) => <pre className="my-6" {...props} />;

const components = {
  img: PostImage,
  // code: Code,
  // h1: H1,
  // h2: H2,
  // h3: H3,
  // h4: H4,
  // h5: H5,
  // h6: H6,
  // p: P,
};

export default function Post({ source, post, morePosts, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{`${post.title} | Andy Kutruff's Blog`}</title>
        <meta property="og:title" content={`${post.title} | Andy Kutruff's Blog`} key="ogTitle" />
        <meta property="og:image" content={getFullyQualifiedImagePath(post.ogImage.url)} />
        <meta name="twitter:image" content={getFullyQualifiedImagePath(post.ogImage.url)} />
      </Head>
      <Layout preview={preview}>
        <Container>
          <Header />
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className="mb-32">
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <div className="prose max-w-2xl mx-auto">
                  <MDXRemote {...source} components={components} />
                </div>
              </article>
            </>
          )}
        </Container>
      </Layout >
    </>
  );
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }: Params) {
  const source = await getPostBySlug(params.slug);

  return {
    props: source,
  }
}

