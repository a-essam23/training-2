import styled from "styled-components";
import { HeaderTop } from "../Header";
import { NavBar } from "../../../components";

const ThisComponent = styled.header`
    & > hr {
        margin-inline: var(--medium-padding);
    }
`;

export default function Header() {
    return (
        <ThisComponent>
            <HeaderTop />
            <hr />
            <NavBar />
        </ThisComponent>
    );
}
