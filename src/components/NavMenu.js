import styled from "styled-components";
import "../utilities/classes.css";

const NavMenu = styled.ul`
     {
        list-style-type: none;
        display: flex;
        gap: var(--small-padding);
    }

    & a:hover {
        color: var(--primary-color-1);
    }
`;

export default function navMenu() {
    return (
        <nav>
            <h2 className="screen-readers-only">Navigation Menu</h2>
            <NavMenu>
                <li>
                    <a href="/">Blog Layouts</a>
                </li>
                <li>
                    <a href="/">Categories</a>
                </li>
                <li>
                    <a href="/">About Me</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
                <li>
                    <a href="/">Upgrade To Pro</a>
                </li>
            </NavMenu>
        </nav>
    );
}
