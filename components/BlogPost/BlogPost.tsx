import { PostBody, PostHeader, PostContainer } from "./BlogPostStyles"
import Link from "next/link"
function BlogPost({post}) {
    return (
        <Link href={String(post.id)}>
            <PostContainer>
                <PostHeader>{post.title}</PostHeader>
                <PostBody>{post.body}</PostBody>
            </PostContainer>
        </Link>
    )
}

export default BlogPost
