import { useState } from "react";
import { SearchBar, SearchIcon } from "../../components";
import "./SearchForm.css";

export default function SearchForm() {
    const [isVisible, setIsVisible] = useState(false);
    const clickHandler = () => {
        setIsVisible(true);
    };

    return (
        <form className="search__form">
            <SearchIcon onClick={clickHandler} />
            <SearchBar className={isVisible ? "flex" : "hidden"} />
        </form>
    );
}
