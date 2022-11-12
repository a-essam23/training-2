import MainLayout from "../layouts/MainLayout";

import styled from "styled-components";

const MainContent = styled.main`
    & .wraper {
        padding-inline: var(--medium-padding);
        padding-bottom: var(--small-padding);
        min-height: 100vh;
        font-weight: bold;
        font-size: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default function homepage() {
    return (
        <MainLayout>
            <MainContent>
                <header>
                    <div className="wraper">CONTENT</div>
                </header>
            </MainContent>
        </MainLayout>
    );
}
