import styled from "styled-components";

const ThisComponent = styled.p`
     {
        text-align: center;
        padding-block: var(--medium-padding);
    }

    & > a,
    & > a:hover {
        transition: color var(--normal-transition);
    }

    & > a {
        font-size: 2rem;
        font-weight: bold;
    }

    & > a:hover {
        color: var(--primary-color-1);
    }
`;

export default function FooterBottom() {
    return (
        <ThisComponent>
            <a href="/">B &nbsp; L &nbsp; O &nbsp; G</a>
            <br />
            Amazing comunity
        </ThisComponent>
    );
}
