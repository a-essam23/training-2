import Header from "./Header";
import Footer from "./Footer";

import styled from "styled-components";

const ThisComponent = styled.div`
    & hr {
        width: calc(100% - var(--medium-padding) * 2);
        margin-inline: auto;
    }

    @media screen and (min-width: 1200px) {
        & [class*="wraper"] {
            margin-inline: auto;
            max-width: 1200px;
        }

        & hr {
            max-width: calc(1200px - var(--medium-padding) * 2);
        }
    }
`;

export default function MainLayout({ children }) {
    return (
        <ThisComponent className="App">
            <Header />
            {children}
            <Footer />
        </ThisComponent>
    );
}
