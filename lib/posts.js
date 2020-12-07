import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Get the posts directory route
const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    // Get file names under `/posts/`
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        // Remove the `.md` extension from the file name to get the id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as a string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })

    // Return reversed posts
    return allPostsData.reverse()
}