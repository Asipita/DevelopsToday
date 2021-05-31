import styled, {StyledComponent} from "styled-components"

export const PostHeader = styled.header`
    font-size: 1.2rem;
    color: #555;
    font-family: sans-serif;
    font-weight: 500;
    display: flex;
    justify-content: space-between
`

export const PostBody = styled.p`
    margin: 1rem 0;
    font-size: 1.1rem;
    font-family: sans-serif;
    color: #445;
    font-weight: 300;
    line-height: 2rem;
`

export const PostContainer = styled.div`
    border: 1px solid #ccc5;
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: .5rem;
    cursor: pointer;
`
