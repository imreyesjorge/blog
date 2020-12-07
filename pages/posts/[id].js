import { getAllPostIds, getPostData } from '../../lib/posts'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const post = ({ postData }) => {
    return(
        <>
            <Nav />
            <main className="h-screen p-12">
                <h1 className="text-4xl text-gray-900 font-bold">{postData.title}</h1>
                <p className="mb-6 text-gray-500">{postData.date}</p>
                <div className="text-xl" dangerouslySetInnerHTML={{__html: postData.contentHtml }} />
            </main>
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