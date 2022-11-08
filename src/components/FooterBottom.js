import styled from "styled-components";

const FooterBottom = styled.section`
    & .wraper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--medium-gap);
        padding-bottom: var(--medium-padding);
        padding-inline: var(--medium-padding);
    }

    & .logo img {
        width: 12rem;
    }

    & p {
        color: var(--color-600);
    }

    & a {
        color: black;
    }

    & a:hover {
        color: var(--primary-color-1);
    }
`;

export default function footerBottom() {
    return (
        <FooterBottom>
            <div className="wraper">
                <a href="/" className="logo">
                    <img src="/img/logo.png" alt="OLSEN" />
                </a>
                <p>
                    <a href="/">Olsen WordPress Theme</a> by <a href="/">CSSIgniter</a>
                </p>
            </div>
        </FooterBottom>
    );
}
