import { Link } from "react-router-dom";
import "./NavSubMenu.css";

export default function NavSubMenu({ item, subMenu, className, clicked }) {
    const clickHandler = () => {
        clicked();
    };
    return (
        <ul
            className={`sub_menu${
                window.matchMedia("(max-width: 444px)").matches && className ? className : ""
            }`}
        >
            {subMenu.map((subItem) => (
                <li key={subItem}>
                    <Link to={`/${item}/${subItem}`} onClick={clickHandler}>
                        {subItem}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
