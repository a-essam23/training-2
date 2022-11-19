import styled from "styled-components";
import { SearchIcon, SearchBar } from "../SearchForm";

const ThisComponent = styled.form`
     {
        position: relative;
    }
`;

export default function SearchForm() {
    return (
        <ThisComponent>
            <SearchIcon />
            <SearchBar />
        </ThisComponent>
    );
}
