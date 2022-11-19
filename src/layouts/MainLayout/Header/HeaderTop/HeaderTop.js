import styled from "styled-components";

const ThisComponent = styled.section`
     {
        text-align: center;
        padding-block: var(--medium-padding);
    }

    & > h1 {
        font-size: 2.5rem;
    }

    & > h1 > a,
    & > h1 > a:hover {
        transition: color var(--normal-transition);
    }

    & > h1 > a:hover {
        color: var(--primary-color-1);
    }
`;

export default function HeaderTop() {
    return (
        <ThisComponent>
            <h1>
                <a href="/">B &nbsp; L &nbsp; O &nbsp; G</a>
            </h1>
            <p>Amazing comunity</p>
        </ThisComponent>
    );
}
