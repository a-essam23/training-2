import styled from "styled-components";

const ThisComponent = styled.section`
    & .footer-bottom__wraper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--medium-gap);
        padding-block: var(--medium-padding);
    }

    & .logo img {
        width: 12rem;
    }

    & p {
        color: var(--secondary-color-1);
    }

    & a {
        color: black;
    }

    & a:hover {
        color: var(--primary-color-1);
    }
`;

export default function FooterBottom() {
    return (
        <ThisComponent>
            <div className="footer-bottom__wraper">
                <a href="/" className="logo">
                    <img src="/img/logo.png" alt="OLSEN" />
                </a>
                <p>
                    <a href="/" target={"_blank"}>
                        Olsen WordPress Theme
                    </a>{" "}
                    by{" "}
                    <a href="/" target={"_blank"}>
                        CSSIgniter
                    </a>
                </p>
            </div>
        </ThisComponent>
    );
}
