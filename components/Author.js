import Image from 'next/image'

const Author = ({ name, image, link, title }) => {
   return(
      <a href={link} className="mb-6 w-max flex justify-start items-center">
         <Image
            src={`/${image}.webp`}
            width={50}
            height={50}
            className="rounded-full"
         />
         <div className="ml-4">
            <p className="dark:text-gray-200 font-semibold">
               {name}
            </p>
            <p className="text-gray-500 dark:text-gray-600">
               {title}
            </p>
         </div>
      </a>
   )
}

export default Author