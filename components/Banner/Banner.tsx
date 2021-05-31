import {BannerContainer, BannerTitle, BannerSubtitle} from "./BannerStyles"
import Link from "next/link"
import { Button } from "../Comments/CommentStyles"
function Banner() {
    return (
        <BannerContainer>
            <Link href="/">
                <BannerTitle>
                    Develops Today
                </BannerTitle>
            </Link>
            <BannerSubtitle>
                Read interesting blog posts and create yours too
            </BannerSubtitle>

            <Link href="/create"><Button>Create a new post</Button></Link>

        </BannerContainer>
    )
}

export default Banner
