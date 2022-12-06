import { Link } from "react-router-dom";
import { NavSubMenu } from "../../../components";
import "./NavItem.css";

export default function NavItem({ title, url, sublist }) {
    return sublist ? (
        <li className="nav-item">
            <a className="list" href={url}>
                {title}
            </a>
            <NavSubMenu sublist={sublist} />
        </li>
    ) : (
        <li className="nav-item">
            <Link to={url}>{title}</Link>
        </li>
    );
}
