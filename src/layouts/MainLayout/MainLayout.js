import styled from "styled-components";
import { Header, Footer } from "../MainLayout";

const ThisComponent = styled.div`
    @media screen and (min-width: 1200px) {
        max-width: 1200px;
        margin-inline: auto;
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
