import styled from "styled-components";

const Header = styled.header`
    & .wraper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--medium-gap);
        padding-top: var(--medium-padding);
        padding-inline: var(--medium-padding);
    }

    & p {
        color: var(--color-600);
    }

    & hr {
        width: 100%;
        margin-top: var(--medium-padding);
    }
`;

export default function header() {
    return (
        <Header>
            <div className="wraper">
                <a href="/">
                    <img src="/img/logo.png" alt="OLSEN" width={"339"} height={"27"} />
                </a>
                <p>Blogging theme for WordPress</p>
                <hr />
            </div>
        </Header>
    );
}
