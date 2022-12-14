import { useState } from "react";
import { Link } from "react-router-dom";
import { NavSubMenu } from "../../../components";
import "./NavItem.css";

export default function NavItem({ item, subMenu, footerNav, onItemChoosed }) {
    let ref;
    if (footerNav) ref = `Genre/${item.split(" ")[0]}`;
    else ref = item.split(" ")[0];

    const [isOpen, setIsOpen] = useState(false);
    const subMenuHandler = (event) => {
        event.preventDefault();
        if (window.matchMedia("(max-width: 444px)").matches)
            isOpen ? setIsOpen(false) : setIsOpen(true);
    };

    const menuHandler = () => {
        onItemChoosed();
    };

    return (
        <li className="nav-item">
            <Link
                to={`/${ref}`}
                className={subMenu && "list"}
                onClick={subMenu ? subMenuHandler : !footerNav && menuHandler}
            >
                {item}
            </Link>
            {subMenu && (
                <NavSubMenu
                    item={ref}
                    subMenu={subMenu}
                    className={isOpen ? " visible" : " hidden"}
                    clicked={menuHandler}
                />
            )}
        </li>
    );
}
