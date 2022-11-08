import styled from "styled-components";
import "../utilities/classes.css";

const SearchButton = styled.button`
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
    return (
        <form action="" method="" role={"search"}>
            <label htmlFor="searchBar" className="screen-readers-only">
                Search
            </label>
            <input type="text" name="search" id="searchBar" role={"searchbox"} style={{ display: "none" }} />
            <SearchButton type="submit" title="Search">
                <i className="fa-solid fa-magnifying-glass"></i>
            </SearchButton>
        </form>
    );
}
