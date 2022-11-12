import styled from "styled-components";
import "../utilities/classes.css";

const ThisComponent = styled.ul`
     {
        list-style-type: none;
        display: flex;
        gap: var(--small-padding);
    }

    & a:hover {
        color: var(--primary-color-1);
    }
`;

export default function NavMenuSecondary() {
    return (
        <nav>
            <h2 className="screen-readers-only">Secondary Navigation Menu</h2>
            <ThisComponent>
                <li>
                    <a href="/">Looks</a>
                </li>
                <li>
                    <a href="/">Fashon</a>
                </li>
                <li>
                    <a href="/">Travel</a>
                </li>
            </ThisComponent>
        </nav>
    );
}
