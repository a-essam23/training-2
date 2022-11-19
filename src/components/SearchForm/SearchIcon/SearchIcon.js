import styled from "styled-components";

const ThisComponent = styled.button`
     {
        border: none;
        background-color: unset;
        cursor: pointer;
    }

    &,
    &:hover {
        transition: color var(--normal-transition);
    }

    &:hover {
        color: var(--primary-color-1);
    }
`;

export default function SearchIcon() {
    return (
        <ThisComponent type="button" title="Search" id="searchButton">
            <i className="fa-solid fa-magnifying-glass"></i>
        </ThisComponent>
    );
}
