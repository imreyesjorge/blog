import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
    return(
        <nav className="w-full p-4 flex justify-between">
            <Link href="/">
                <a className="flex items-center">
                    <Image
                        src="/logo.svg"
                        alt="Logo image"
                        width={40}
                        height={40}
                        className="rounded"
                    />
                    <h3 className="text-indigo-500 text-2xl font-bold ml-4">Kings</h3>
                </a>
            </Link>
        </nav>
    )
}

export default Nav