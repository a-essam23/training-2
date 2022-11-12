import { useEffect } from "react";

import styled from "styled-components";
import "../utilities/classes.css";

const ThisComponent = styled.form`
     {
        position: relative;
    }

    & .search {
        position: absolute;
        right: 0;
        top: calc(100% + var(--small-padding) + var(--extra-small-padding));
        background-color: var(--primary-color-2);
        padding: var(--small-padding);
        display: none;
        gap: var(--medium-gap);
        align-items: center;
    }

    & .search input {
        border: none;
        outline: none;
        background-color: var(--primary-color-2);
    }

    & .search button {
        border: none;
        color: white;
        background-color: var(--primary-color-1);
        padding-block: var(--extra-small-padding);
        padding-inline: var(--small-padding);
        cursor: pointer;
    }

    & .search button:hover {
        background-color: black;
        transition: 0.5s;
    }

    & .search svg {
        font-size: 1.25rem;
        color: var(--secondary-color-1);
        cursor: pointer;
    }

    & .search svg:hover {
        color: var(--primary-color-1);
    }

    @media screen and (min-width: 992px) {
        & .search {
            top: calc(100% + var(--small-padding));
        }
    }
`;

const SearchIcon = styled.i`
     {
        border: none;
        background: none;
        cursor: pointer;
    }

    &:hover {
        color: var(--primary-color-1);
    }
`;

export default function SearchForm() {
    const searchButtonHandler = (event) => {
        if (event.target === document.querySelector(".searchForm .fa-magnifying-glass") || event.target === document.querySelector(".searchForm .fa-magnifying-glass path")) {
            document.querySelector(".searchForm .search").style = "display: flex;";
        } else if (event.target === document.querySelector(".searchForm .fa-xmark") || event.target === document.querySelector(".searchForm .fa-xmark path")) {
            document.querySelector(".searchForm .search").style = "display: none;";
        }
    };

    useEffect(() => {
        window.addEventListener("click", searchButtonHandler);
        return () => {
            window.removeEventListener("click", searchButtonHandler);
        };
    }, []);

    return (
        <ThisComponent action="" method="" className="searchForm" role={"search"}>
            <SearchIcon className="fa-solid fa-magnifying-glass" title="Search" />
            <label htmlFor="searchBar" className="screen-readers-only">
                Search
            </label>
            <div className="search">
                <input type="text" name="search" id="searchBar" placeholder="Type and hit 'Enter' to search" role={"searchbox"} size="25" />
                <button type="submit">Search</button>
                <i className="fa-solid fa-xmark" title="Close"></i>
            </div>
        </ThisComponent>
    );
}
