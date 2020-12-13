import Head from 'next/head'

import Author from '../../components/Author'

import { getAllPostIds, getPostData } from '../../lib/posts'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const post = ({ postData }) => {
    return(
        <>
            <Head>
                <title>Kings - {postData.title}</title>
            </Head>
            <Nav />
            <div className="w-full flex justify-center">
                <main className="md:w-1/2 h-screen p-12">
                    <h1 className="text-4xl text-gray-900 mb-2 font-bold">{postData.title}</h1>
                    <p className="mb-6 text-gray-500">{postData.date}</p>
                    <Author
                        name={postData.author}
                        image={postData.image}
                        link={postData.link}
                        title={postData.job}
                    />
                    <div className="text-xl text-justify" dangerouslySetInnerHTML={{__html: postData.contentHtml }} />
                </main>
            </div>
            <Footer />
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export default post