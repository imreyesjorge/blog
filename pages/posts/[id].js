import Head from "next/head";

import Author from "../../components/Author";

import { getAllPostIds, getPostData } from "../../lib/posts";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const post = ({ postData }) => {
  return (
    <>
      <Head>
        <title>Kings - {postData.title}</title>
        <meta property="og:title" content={postData.title}/>
        <meta property="og:description" content="Learn little tips about web-dev and general tech things"/>
        <meta property="og:image" content="/OG_Image.webp"/>
        <meta property="twitter:title" content="Kings – Blog"/>
        <meta property="twitter:description" content="Learn little tips about web-dev and general tech things"/>
        <meta property="twitter:image" content="/OG_Image.webp"/>
      </Head>
      <div className="min-h-screen dark:bg-gray-900 grid grid-rows-layout">
        <Nav />
        <div className="w-full flex justify-center">
          <main className="md:w-1/2 p-12">
            <h1 className="text-4xl text-gray-900 dark:text-white mb-2 font-bold">
              {postData.title}
            </h1>
            <p className="mb-6 text-gray-500">{postData.date}</p>
            <Author
              name={postData.author}
              image={postData.image}
              link={postData.link}
              title={postData.job}
            />
            <div
              className="dark:text-gray-200 text-xl text-justify"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default post;
