import Link from 'next/link'

const Post = ({ title, date, id }) => {
  return (
    <Link href={`/posts/${id}`}>
      <a className="group md:w-1/2 my-4 p-4 border dark:border-gray-600  hover:border-indigo-500 rounded cursor-pointer flex flex-col duration-75">
        <h2 className="text-3xl text-gray-800 dark:text-white font-semibold mb-4 group-hover:text-indigo-500 transition-75">
          {title}
        </h2>
        <p className="text-gray-600">{date}</p>
      </a>
    </Link>
  );
};

export default Post;
