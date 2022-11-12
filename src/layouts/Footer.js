import FooterTop from "../components/FooterTop";
import FooterBottom from "../components/FooterBottom";

import styled from "styled-components";
const ThisComponent = styled.footer`
     {
        padding-top: var(--small-padding);
    }
`;

export default function Footer() {
    return (
        <ThisComponent>
            <hr />
            <FooterTop />
            <hr />
            <FooterBottom />
        </ThisComponent>
    );
}
