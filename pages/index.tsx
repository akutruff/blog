import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import { getFullyQualifiedImagePath } from '../components/Image'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Head>
        <title>Andy Kutruff's Blog</title>
        <meta name="google-site-verification" content="X-R9KmlZtCfea47k8n84CYH9gv5OxI0bHIVOYsGc9Mc" />
        <meta property="og:title" content={`Andy Kutruff's Blog`} key="ogTitle" />
        <meta property="og:image" content={getFullyQualifiedImagePath('/assets/blog/bugs/dall-e-computer-bug-512.png')} />
        <meta property="twitter:image" content={getFullyQualifiedImagePath('/assets/blog/bugs/dall-e-computer-bug-512.png')} />
      </Head>
      <Layout>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = (await getAllPosts()).map(x => x.post);

  return {
    props: { allPosts },
  }
}
