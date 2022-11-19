import styled from "styled-components";
import { FooterTop, FooterBottom } from "../Footer";

const ThisComponent = styled.footer`
     {
        display: flex;
        flex-direction: column;
    }

    & > hr {
        margin-inline: var(--medium-padding);
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
