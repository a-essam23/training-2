import styled from "styled-components";
import { BlogPost } from "../BlogPosts";
import { blogPostData } from "./BlogPost";

const ThisComponent = styled.section``;

export default function BlogPosts() {
    return (
        <ThisComponent>
            {blogPostData.map((element) => (
                <BlogPost key={element.id} content={element} />
            ))}
        </ThisComponent>
    );
}
