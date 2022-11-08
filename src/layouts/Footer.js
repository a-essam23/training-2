import FooterTop from "../components/FooterTop";
import FooterBottom from "../components/FooterBottom";

import styled from "styled-components";
const Footer = styled.footer`
    & hr {
        margin-bottom: var(--medium-padding);
        margin-inline: var(--medium-padding);
    }

    @media screen and (min-width: 1200px) {
        & hr {
            max-width: 1200px;
            margin-inline: auto;
        }
    }
`;

export default function footer() {
    return (
        <Footer>
            <hr />
            <FooterTop />
            <hr />
            <FooterBottom />
        </Footer>
    );
}
