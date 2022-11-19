import { useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../../components";

const ThisComponent = styled.fieldset`
     {
        border: none;
        padding: var(--small-padding);
        background-color: var(--primary-color-2);
        display: flex;
        align-items: center;
        gap: var(--small-gap);
        position: absolute;
        right: 0;
        top: calc(100% + var(--small-padding));
        visibility: hidden;
    }

    & > input {
        border: none;
        outline: none;
        background-color: var(--primary-color-2);
    }

    & > button > .fa-xmark,
    & > button > .fa-xmark:hover {
        transition: color var(--normal-transition);
    }

    & > button > .fa-xmark {
        font-size: 1.25rem;
        color: var(--secondary-color-1);
    }

    & > button > .fa-xmark:hover {
        color: var(--primary-color-1);
    }

    @media screen and (max-width: 900px) {
        top: calc(100% + var(--small-padding) + var(--extra-small-padding) + var(--primary-border-width));
    }
`;

export default function SearchBar() {
    const clickHandler = (event) => {
        if (event.target === document.querySelector("#searchButton") || event.target === document.querySelector("#searchButton svg") || event.target === document.querySelector("#searchButton path")) {
            document.querySelector("#searchBar").style = "visibility: visible;";
        } else if (event.target === document.querySelector(".fa-xmark") || event.target === document.querySelector(".fa-xmark path")) {
            document.querySelector("#searchBar").style = "visibility: hidden;";
        }
    };

    useEffect(() => {
        window.addEventListener("click", clickHandler);
        return () => {
            window.removeEventListener("click", clickHandler);
        };
    }, []);

    return (
        <ThisComponent id="searchBar">
            <label htmlFor="search" className="screen-readers-only">
                Search on the webstie
            </label>
            <input type="text" name="search" id="search" placeholder="Type and hit 'Enter' to search" role={"searchbox"} size="25" />
            <Button type={"submit"} kind="secondary">
                Search
            </Button>
            <Button title={"Close"}>
                <i className="fa-solid fa-xmark"></i>
            </Button>
        </ThisComponent>
    );
}
