import styled from "styled-components"

export const BannerContainer = styled.div`
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #1488cc; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #1488cc, #2b32b2); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #1488cc, #2b32b2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export const BannerTitle = styled.h1`
    font-size: 3rem;
    color: white;
    font-weight: bolder;
    cursor: pointer;
    text-decoration: underline;
`

export const BannerSubtitle = styled.p`
    font-size: 1.2rem;
    color: white;
    font-weight: 300;
    letter-spacing: 2px;
    font-family: sans-serif;
    padding: 0 1rem;
`