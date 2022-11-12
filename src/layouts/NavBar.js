import NavMenu from "../components/NavMenu";
import NavIcons from "../components/NavIcons";
import SearchForm from "../components/SearchForm";

import styled from "styled-components";

const ThisComponent = styled.section`
    & .navbar__wraper {
        padding-block: var(--small-padding);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--small-padding);
        padding-inline: var(--medium-padding);
    }

    & .navbar__icons {
        display: flex;
        gap: var(--small-padding);
    }
`;

export default function NavBar() {
    return (
        <ThisComponent>
            <div className="navbar__wraper">
                <NavMenu />
                <section className="navbar__icons">
                    <NavIcons />
                    <SearchForm />
                </section>
            </div>
        </ThisComponent>
    );
}
