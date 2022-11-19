import styled from "styled-components";
import { BlogPostHeader, BlogPostFooter } from "../BlogPost";

const ThisComponent = styled.figure`
     {
        padding-inline: var(--medium-padding);
        padding-block: var(--small-padding);
    }

    & > img {
        width: 100%;
    }

    & > figcaption {
        padding-block: var(--small-padding);
    }
`;

export default function BlogPost({ content: { cat, heading, date, teaser, comments = [], photo } }) {
    return (
        <ThisComponent>
            <BlogPostHeader cat={cat} heading={heading} date={date} comments={comments} />
            <img src={`./img/${photo}`} alt="Random Photo" loading={"lazy"} />
            <figcaption>{teaser}</figcaption>
            <BlogPostFooter />
        </ThisComponent>
    );
}
