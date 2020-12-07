import Link from 'next/link'

const Post = ({ title, date }) => {
  return (
    <Link href="/">
      <a className="group w-full my-4 p-4 border hover:border-indigo-500 rounded cursor-pointer flex flex-col duration-75">
        <h2 className="text-3xl text-gray-800 font-semibold mb-4 group-hover:text-indigo-500 transition-75">
          {title}
        </h2>
        <p className="text-gray-600">{date}</p>
      </a>
    </Link>
  );
};

export default Post;
