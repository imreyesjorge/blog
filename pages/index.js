import Head from 'next/head'

import Nav from '../components/Nav'

const index = () => {
    return(
        <>
            <Head>
                <title>
                    Kings – Blog
                </title>
                <link rel="shortcut icon" href="/logo.svg" />
            </Head>
            <main>
                <Nav />
            </main>
        </>
    )
}

export default index