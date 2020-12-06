import Head from 'next/head'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

const index = () => {
    return(
        <>
            <Head>
                <title>
                    Kings – Blog
                </title>
                <link rel="shortcut icon" href="/logo.svg" />
            </Head>
            <div className="min-h-screen flex flex-col justify-between">
                <Nav />
                <main>

                </main>
                <Footer />
            </div>
        </>
    )
}

export default index