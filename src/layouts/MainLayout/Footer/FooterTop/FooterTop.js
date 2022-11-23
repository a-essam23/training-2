import { ContactLinks, NavItem } from "../../../../components";
import { navItems } from "../../../../assets/data";
import "./FooterTop.css";

export default function FooterTop() {
    return (
        <section className="page-footer__top">
            <nav>
                <h2 className="screen-readers-only">Categories navigation menu</h2>
                <ul className="nav-menu--secondary">{navItems.map(({ title, sublist }) => title === "Categories" && sublist.map(({ title, url }) => <NavItem key={title} title={title} url={url} />))}</ul>
            </nav>
            <ContactLinks />
        </section>
    );
}
