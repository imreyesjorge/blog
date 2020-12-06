import Head from "next/head";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Post from "../components/Post";

const index = () => {
  return (
    <>
      <Head>
        <title>Kings – Blog</title>
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="w-full min-h-screen p-6 flex items-start justify-center flex-wrap">
          <Post
            title="My first blog post"
            desc="A brief description for my first blog post ever made."
          />
          <Post
            title="A quick introduction to React."
            desc="A brief description for my first blog post ever made."
          />
          <Post
            title="Next.js 101: Learn the basics"
            desc="A brief description for my first blog post ever made."
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default index;
