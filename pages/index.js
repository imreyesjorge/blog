import Head from "next/head";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Post from "../components/Post";

import { getSortedPostsData } from '../lib/posts'

const index = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <title>Kings – Blog</title>
        <link rel="shortcut icon" href="/logo.svg" />
        <meta property="og:title" content="Kings – Blog"/>
        <meta property="og:description" content="Learn little tips about web-dev and general tech things"/>
        <meta property="og:image" content="/OG_Image.webp"/>
        <meta property="twitter:title" content="Kings – Blog"/>
        <meta property="twitter:description" content="Learn little tips about web-dev and general tech things"/>
        <meta property="twitter:image" content="/OG_Image.webp"/>
      </Head>
      <div className="min-h-screen grid grid-rows-layout dark:bg-gray-900">
        <Nav />
        <main className="w-full h-auto p-6 flex flex-col items-center">
          {allPostsData.map(({ id, date, title }) => (
            <Post
              title={title}
              date={date}
              id={id}
              key={id}
            />
          ))}
        </main>
        <Footer />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

export default index;
