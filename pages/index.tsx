import styled from 'styled-components'
import Banner from '../components/Banner/Banner'
import BlogPosts from '../components/BlogPosts/BlogPosts'

const MainContainer = styled.div`
  
`

export default function Home() {
  return (
    <MainContainer>
      <Banner/>
      <BlogPosts/>
    </MainContainer>
  )
}
