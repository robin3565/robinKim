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
        <meta content='website' property='og:type'/>
        <meta content='portfolio-robin3565.vercel.app' property='og:site_name'/>
        <meta content='//portfolio-robin3565.vercel.app/' property='og:url'/>
        <meta content='ko_KR' property='og:locale'/>
        <meta content='Robin Kim' property='og:title'/>
        <meta content='사용자에게 도움을 줄 수 있는 서비스를 구현하는 개발자, 로빈입니다.' property='og:description'/>
        <meta content='//portfolio-robin3565.vercel.app/_next/image?url=%2Fimg%2Fpro.png&w=640&q=75' property='og:image'/>
        <link rel="stylesheet" as="style" crossOrigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css" />
      </Head>
      <Layout keyword={CONFIG.keyword.en}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
