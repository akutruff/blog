import { AppProps } from 'next/app'
import '../styles/index.css'
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Andy Kutruff's Blog.</title>
        <meta name="description" content="Andy Kutruff's blog." />
        <meta property="og:type" content='website' key="ogType" />
        <meta property="og:title" content="Andy Kutruff's blog." key="ogTitle" />
        <meta property="og:description" content="Andy Kutruff's blog." key="ogDesc" />
        <meta property="twitter:card" content="summary_large_image" key="ogTwitterCard" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
