import { NavMenu, ContactLinks, SearchForm } from "../../components";
import "./NavBar.css";

export default function NavBar() {
    return (
        <section className="nav-bar">
            <NavMenu />
            <section className="icons">
                <ContactLinks />
                <SearchForm />
            </section>
        </section>
    );
}
