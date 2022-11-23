import { SearchIcon, SearchBar } from "../../components";
import "./SearchForm.css";

export default function SearchForm() {
    return (
        <form className="search__form">
            <SearchIcon />
            <SearchBar />
        </form>
    );
}
