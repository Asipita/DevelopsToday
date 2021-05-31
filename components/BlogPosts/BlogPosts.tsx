import {BlogPostsContainer} from "../BlogPosts/BlogPostStyles"
import BlogPost from "../BlogPost/BlogPost"

import useSWR from 'swr'
import { fetcher } from "../../utils"

function BlogPosts() {
    const {data, error} = useSWR('posts', fetcher)

    if(error){ return <span>"An error occured..."</span>}
    if(!data){ return <span>"Loading"</span>}


    return (
        <BlogPostsContainer>
            {
                data?.map((post)=>(
                    <BlogPost post={post} key={post.id}/>
                ))
            }       
        </BlogPostsContainer>
    )
}

export default BlogPosts
