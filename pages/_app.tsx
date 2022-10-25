import { AppProps } from 'next/app'
import '../styles/index.css'
import Head from 'next/head';
import { getImagePath } from '../components/Image';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

        <title>Andy Kutruff's Blog.</title>
        <meta name="description" content="Andy Kutruff's blog." />
        <meta property="og:type" content='website' key="ogType" />
        <meta property="og:title" content="Andy Kutruff's blog." key="ogTitle" />
        <meta property="og:description" content="Andy Kutruff's blog." key="ogDesc" />
        <meta property="twitter:card" content="summary_large_image" key="ogTwitterCard" />
        <title>Andy Kutruff's Blog</title>
        <meta property="og:image" content={getImagePath('/assets/blog/bugs/dall-e-computer-bug-512.png')} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
