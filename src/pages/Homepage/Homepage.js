import styled from "styled-components";
import { MainLayout } from "../../layouts";
import { BlogPosts } from "../../components";

const ThisComponent = styled.main``;

export default function Homepage() {
    return (
        <MainLayout>
            <ThisComponent>
                <BlogPosts />
            </ThisComponent>
        </MainLayout>
    );
}
