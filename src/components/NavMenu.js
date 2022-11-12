import { useState } from "react";

import NavMenuButton from "../components/NavMenuButton";

import styled from "styled-components";
import "../utilities/classes.css";

const ThisComponent = styled.ul`
    @media screen and (min-width: 992px) {
        list-style-type: none;
        display: flex;

        & ul {
            list-style-type: none;
        }

        & > li:not(:first-child) {
            padding-left: var(--small-padding);
        }

        & > li:not(:last-child) {
            padding-right: var(--small-padding);
        }

        & > li:first-child,
        & > li:nth-child(2) {
            margin-right: calc(1rem + 0.25rem);
        }

        & a:hover,
        & .category:hover > a {
            color: var(--primary-color-1);
        }

        & .category,
        & .category > a {
            position: relative;
        }

        & .category > a::after {
            content: "";
            width: 1rem;
            height: 0.5rem;
            background-color: black;
            clip-path: polygon(0 0, 20% 0, 50% 60%, 80% 0, 100% 0, 50% 100%, 0 0);
            border-radius: 50%;
            position: absolute;
            left: calc(100% + 0.25rem);
            top: calc(50% - 0.5rem / 3);
        }

        & .category:hover > a::after {
            background-color: var(--primary-color-1);
        }

        & .category:hover ul {
            visibility: visible;
        }

        & .category ul {
            position: absolute;
            left: 0;
            top: calc(100% + var(--small-padding));
            width: 200%;
            background-color: white;
            border: var(--thin-border);
            visibility: hidden;
            transition: 0.25s;
        }

        & .category:nth-child(2) ul {
            left: var(--small-padding);
        }

        & .category li {
            padding-block: var(--extra-small-padding);
            padding-inline: 0.25rem;
            width: 100%;
        }

        & .category li:hover {
            color: var(--primary-color-1);
            background: var(--primary-color-2);
            cursor: pointer;
        }

        & .category li:not(:last-child) {
            border-bottom: var(--thin-border);
        }
    }
`;

export default function NavMenu() {
    const [width, setWidth] = useState(window.innerWidth);

    const onResizeHandler = () => {
        setWidth(window.innerWidth);
    };

    window.addEventListener("resize", onResizeHandler);

    if (width < 992) return <NavMenuButton />;
    else
        return (
            <nav>
                <h2 className="screen-readers-only">Navigation Menu</h2>
                <ThisComponent>
                    <li className="category">
                        <a href="#">Blog Layouts</a>
                        <ul>
                            <li>
                                <a href="/">Classic - Sidebar</a>
                            </li>
                            <li>
                                <a href="/">Classic - 2 Columns</a>
                            </li>
                        </ul>
                    </li>
                    <li className="category">
                        <a href="#">Categories</a>
                        <ul>
                            <li>
                                <a href="/">Fashion</a>
                            </li>
                            <li>
                                <a href="/">Music</a>
                            </li>
                            <li>
                                <a href="/">Looks</a>
                            </li>
                            <li>
                                <a href="/">Nature</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">About Me</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Upgrade To Pro</a>
                    </li>
                </ThisComponent>
            </nav>
        );
}
