import '../styles/index.css'
import '../styles/markdown.css'
import Head from 'next/head';
import CONFIG from '@/portfolio.config';
import { Layout } from '@공통/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{CONFIG.metaTags.title}</title>
      </Head>
      <Layout keyword={CONFIG.keyword.en}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
