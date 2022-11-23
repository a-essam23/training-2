import { useEffect } from "react";
import { Button } from "../../../components";
import "./SearchBar.css";

export default function SearchBar() {
    const clickHandler = (event) => {
        if (event.target === document.querySelector("#searchButton") || event.target === document.querySelector("#searchButton svg") || event.target === document.querySelector("#searchButton path")) {
            document.querySelector("#searchBar").classList.remove("hidden");
            document.querySelector("#searchBar").classList.add("visible");
        } else if (event.target === document.querySelector(".fa-xmark") || event.target === document.querySelector(".fa-xmark path")) {
            document.querySelector("#searchBar").classList.remove("visible");
            document.querySelector("#searchBar").classList.add("hidden");
        }
    };

    useEffect(() => {
        window.addEventListener("click", clickHandler);
        return () => {
            window.removeEventListener("click", clickHandler);
        };
    }, []);

    return (
        <fieldset id="searchBar" className="hidden">
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
        </fieldset>
    );
}
