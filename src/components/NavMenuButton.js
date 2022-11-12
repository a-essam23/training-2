import { useState, useEffect } from "react";

import styled from "styled-components";
import "../utilities/classes.css";

const ThisComponent = styled.button`
     {
        border: var(--primary-border);
        background-color: unset;
        padding-inline: var(--small-padding);
        padding-block: var(--extra-small-padding);
        display: flex;
        align-items: center;
        gap: var(--small-gap);
        cursor: pointer;
    }

    &:hover {
        color: var(--primary-color-1);
    }
`;

const NavMenuSmallScreen = styled.section`
     {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--primary-color-2);
        dsiplay: flex;
        flex-direction: column;
        overflow: scroll;
        z-index: 1;
    }

    & li {
        border-bottom: 0.05rem solid var(--secondary-color-2);
        padding: var(--small-padding);
        cursor: pointer;
    }

    & > button {
        border: none;
        border-bottom: 0.05rem solid var(--secondary-color-2);
        width: 100%;
        font-size: 2rem;
        font-weight: bold;
        padding-block: var(--small-padding);
        cursor: pointer;
    }

    & li:hover > a,
    & .category li:hover,
    & > button:hover {
        color: var(--primary-color-1);
    }

    & .category:hover > a::after {
        background-color: var(--primary-color-1);
    }

    & ul {
        list-style-type: none;
    }

    & .category ul {
        display: none;
        position: relative;
        left: var(--small-padding);
    }

    & .category li:first-child {
        border-top: 0.05rem solid var(--secondary-color-2);
        margin-top: var(--small-padding);
    }

    & .category li:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }

    & > nav > ul > li > a {
        font-weight: bold;
    }

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

    & .category:hover > ul {
        display: block;
    }

    & .category:hover > a::after {
        rotate: 180deg;
        transition: 0.5s;
    }
`;

export default function NavMenuButton() {
    const [menuOpened, setMenuOpened] = useState(false);

    const menuButtonHandler = (event) => {
        if (event.target === document.querySelector(".menuButton") || event.target === document.querySelector(".menuButton svg") || event.target === document.querySelector(".menuButton path")) {
            setMenuOpened(true);
        } else if (event.target === document.querySelector(".closeMenu")) {
            setMenuOpened(false);
        }
    };

    useEffect(() => {
        window.addEventListener("click", menuButtonHandler);
        return () => {
            window.removeEventListener("click", menuButtonHandler);
        };
    }, []);

    if (menuOpened)
        return (
            <NavMenuSmallScreen>
                <button type="button" className="closeMenu">
                    Close<span className="screen-readers-only"> the navigation menu</span>
                </button>
                <nav>
                    <h2 className="screen-readers-only">Navigation Menu</h2>
                    <ul>
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
                    </ul>
                </nav>
            </NavMenuSmallScreen>
        );
    else
        return (
            <ThisComponent type="button" className="menuButton">
                <i className="fa-solid fa-bars"></i>
                <span className="screen-readers-only">Open the navigation </span>Menu
            </ThisComponent>
        );
}
