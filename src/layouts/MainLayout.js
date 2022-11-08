import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

import styled from "styled-components";

const MainLayout = styled.div`
    @media screen and (min-width: 1200px) {
        & .wraper {
            max-width: 1200px;
            margin-inline: auto;
            padding-inline: 0;
        }
    }
`;

export default function mainLayout({ children }) {
    return (
        <MainLayout className="App">
            <Header />
            <NavBar />
            {children}
            <Footer />
        </MainLayout>
    );
}
