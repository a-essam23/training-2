import { ContactLinks, NavItem, Slider } from "../../../../components";
import { navItems } from "../../../../assets/data";
import "./MainLayoutFooterTop.css";

export default function MainLayoutFooterTop() {
    return (
        <section className="page__footer__top">
            <Slider />
            <nav>
                <h2 className="screen-readers-only">Genre Navigation Menu</h2>
                <ul className="genre__navigation">
                    {navItems.map(
                        ({ item, subMenu }) =>
                            item === "Genre" &&
                            subMenu.map((item) => (
                                <NavItem key={item} item={item} footerNav={true} />
                            ))
                    )}
                </ul>
            </nav>
            <ContactLinks />
        </section>
    );
}
