import { useEffect, useState } from "react";
import { Button, NavItem } from "../../components";
import { navItems } from "../../assets/data";
import "./NavMenu.css";

export default function NavMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    };

    const [, setScreenWidth] = useState();
    const media444Handler = (event) => {
        setScreenWidth(event.matches);
        if (event.matches === false) setIsOpen(false);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        window.matchMedia("(max-width: 444px)").addEventListener("change", media444Handler);

        return () => {
            window.matchMedia("(max-width: 444px)").removeEventListener("change", media444Handler);
        };
    }, []);

    return (
        <nav className="website__navigation">
            {window.matchMedia("(max-width: 444px)").matches && (
                <Button className="open-menu" kind="primary" onClick={clickHandler}>
                    <i className="fa-solid fa-bars"></i>
                    <span className="screen-readers-only">Open Navigation </span>Menu
                </Button>
            )}

            <ul
                className={`website__menu${
                    window.matchMedia("(max-width: 444px)").matches
                        ? isOpen
                            ? " flex"
                            : " hidden"
                        : " flex"
                }`}
            >
                {window.matchMedia("(max-width: 444px)").matches && (
                    <Button className="close-menu" onClick={clickHandler}>
                        Close
                    </Button>
                )}

                {navItems.map(({ item, subMenu }) => (
                    <NavItem key={item} item={item} subMenu={subMenu} onItemChoosed={closeMenu} />
                ))}
            </ul>
        </nav>
    );
}
