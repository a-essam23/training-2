import { Button } from "../../../components";
import "./SearchIcon.css";

export default function SearchIcon() {
    return (
        <Button title="Search" id="searchButton">
            <i className="fa-solid fa-magnifying-glass"></i>
        </Button>
    );
}
