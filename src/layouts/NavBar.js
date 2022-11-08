import NavMenu from "../components/NavMenu";
import NavIcons from "../components/NavIcons";
import SearchForm from "../components/SearchForm";

import styled from "styled-components";

const NavBar = styled.section`
    & .wraper {
        padding-block: var(--small-padding);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--small-padding);
        padding-inline: var(--medium-padding);
    }

    & section {
        display: flex;
        gap: var(--small-padding);
    }
`;

export default function navBar() {
    return (
        <NavBar>
            <div className="wraper">
                <NavMenu />
                <section>
                    <NavIcons />
                    <SearchForm />
                </section>
            </div>
        </NavBar>
    );
}
