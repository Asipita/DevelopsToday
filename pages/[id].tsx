import useSWR, { mutate } from "swr";
import Banner from "../components/Banner/Banner";
import { PostBody, PostHeader } from "../components/BlogPost/BlogPostStyles";
import { BlogPostsContainer } from "../components/BlogPosts/BlogPostStyles";
import {Comment, Input, Button, AddComment, Comments} from "../components/Comments/CommentStyles"
import { fetcher, poster } from "../utils";
import Link from "next/link"
import {useRouter} from "next/router"
import { useState } from "react";

function SingleBlogPost() {
    const router = useRouter()
    const {id: postId} = router.query;
    const [newComment, setNewComment] = useState("");
    const {data, error: fetchErr} = useSWR(`posts/${postId}?_embed=comments`, fetcher, {
        revalidateOnMount: true,
    })

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)
    
    if(error) return <span>An error occured</span>
    if(!data) return <span>Loading...</span>
    
    async function addComment(e){
        e.preventDefault()

        const comment = {
            postId,
            body: newComment
        }

        const commentResponse = await poster(`comments`, comment, "post")
        setLoading(false)
        if(typeof commentResponse === "string"){
            setError(commentResponse)
        }
        else if(commentResponse.body){
            setSuccess("Comment successfully added")

            mutate('posts/${postId}?_embed=comments')
            
        }else{
            setError("Something went wrong, please check the fields and try again")
        }

    }

    async function deletePost(){
        const postResponse = await poster(`posts/${postId}`, null, "delete")

        setLoading(true)

        if(typeof postResponse === "string"){
            setError(postResponse)
        }
        else{
            router.push("/")
        }

    }
    return (
        <div>
            <Banner/>
            <BlogPostsContainer>
                <PostHeader>
                    <span>{data.title}</span>
                    <div>
                        <Link href={`edit?id=${data.id}`}><Button>Edit</Button></Link>
                        <Button onClick={deletePost}>Delete</Button> <br/>
                        {loading && <span>{loading}</span>}
                    </div>
                </PostHeader>
                <PostBody>
                    {data.body}
                </PostBody>
                <Comments>
                    <header>Comments:</header>
                    {
                        data?.comments.map(comment=>(
                            <Comment>{comment.body}</Comment>
                        )) ?? "Error while fetching comments"
                    }
                    <AddComment>
                        <form onSubmit={addComment}>
                        <Input type="text" value={newComment} onChange={(e)=>setNewComment(e.target.value)} required />
                            
                        <Button type="submit">Add Comment</Button>
                        </form>
                    </AddComment>

                    {success && <span style={{color:"green"}}>{success}</span>}
                </Comments>
            </BlogPostsContainer>
        </div>
    )
}

export default SingleBlogPost
