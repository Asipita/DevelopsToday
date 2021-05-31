import useSWR from "swr";
import styled from "styled-components"
import Banner from "../components/Banner/Banner";
import { BlogPostsContainer } from "../components/BlogPosts/BlogPostStyles";
import { Input, Button} from "../components/Comments/CommentStyles"
import { poster } from "../utils";
import { useState } from "react";
import { useRouter } from "next/router";


const SectionHeader = styled.h1`
    font-size: 1.5rem;
    color: grey;
    font-family: sans-serif;
    margin: 1rem 0 2rem;
`

const FormField = styled.div`
    margin-bottom: 1rem;
`

const Label = styled.label`
    display: block;
    font-size: 1.2rem;
    color: grey;
    margin-bottom: 5px;
    font-family: sans-serif;
`

const Textarea = styled.textarea`
    height: 10rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;
    margin-right: 10px;
    width: 100%;
    font-family: sans-serif;
    font-size: 1rem;
    letter-spacing: 1px;
    line-height: 1.5rem;
    resize: none;
`

function SingleBlogPost() {

    const [blogContent, setBlogContent] = useState("")
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    async function createPost(e){
        e.preventDefault()

        setError(null)
        setLoading(true)
        
        const {title, body} = e.target.elements;
        const blog = {
            title: title.value,
            body: body.value
        }

        const postResponse = await poster("posts", blog, "post")
        setLoading(false)
        if(typeof postResponse === "string"){
            setError(postResponse)
        }
        else if(postResponse.title){
            setSuccess("Blog post successfully created")
            router.push(`/${postResponse.id}`)
        }else{
            setError("Something went wrong, please check the fields and try again")
        }
    } 

    function handleBlogContentChange(e){
        const {value} = e.target;
        setBlogContent(value)
    }
    
    return (
        <div>
            <Banner/>
            <BlogPostsContainer>
                <SectionHeader>Create a new post</SectionHeader>
                <form onSubmit={createPost}>
                    <FormField>
                        <Label htmlFor="title">Blog title</Label>
                        <Input id="title" type="text" width="100%" required/>
                    </FormField>
                    <FormField>
                        <Label htmlFor="body">Blog content</Label>
                        <Textarea id="body" value={blogContent} onChange={handleBlogContentChange} required/>
                    </FormField>
                    <Button type="submit">Create post</Button>
                </form>
                {error && <div style={{color:"red", margin: "1rem 0"}}>{error}</div>}
                {success && <div style={{color:"green", margin: "1rem 0"}}>{success}</div>}
                {loading && <div style={{color:"green", margin: "1rem 0"}}>loading...</div>}
            </BlogPostsContainer>
        </div>
    )
}

export default SingleBlogPost
