import NavBar from "./NavBar";

import styled from "styled-components";

const ThisComponent = styled.header`
    & .header__wraper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--medium-gap);
        padding-block: var(--medium-padding);
    }

    & .header__wraper > p {
        color: var(--secondary-color-1);
    }
`;

export default function Header() {
    return (
        <ThisComponent>
            <section>
                <div className="header__wraper">
                    <a href="/">
                        <img src="/img/logo.png" alt="OLSEN" width={"339"} height={"27"} />
                    </a>
                    <p>Blogging theme for WordPress</p>
                </div>
            </section>
            <hr />
            <NavBar />
        </ThisComponent>
    );
}
