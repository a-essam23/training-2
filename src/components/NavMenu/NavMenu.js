import { useState, useEffect } from "react";
import styled from "styled-components";
import { navItems, NavItems } from "../NavMenu";

const ThisComponent = styled.nav`
    & > ul {
        display: flex;
    }

    @media screen and (max-width: 900px) {
        & ul {
            flex-direction: column;
        }

        & > ul ul {
            margin-inline: var(--medium-padding);
            display: none;
        }

        & li {
            border-color: var(--secondary-color-1);
            border-top: var(--thin-border);
        }

        & > ul > li:last-child {
            border-bottom: var(--thin-border);
        }

        & .list:after {
            left: calc(100% - 1rem - var(--medium-padding));
        }

        & a {
            display: block;
            padding-inline: var(--medium-padding);
            padding-block: var(--small-padding);
        }
    }
`;

export default function NavMenu() {
    const [width, setWidth] = useState(window.innerWidth);
    const onResizeHandler = () => {
        setWidth(window.innerWidth);

        // document.querySelectorAll("nav .list").forEach((element) => {
        //     if (width >= 900) element.nextElementSibling.style = "display: unset;";
        //     else element.nextElementSibling.style = "display: none;";
        // });
    };

    const onClickHandler = (event) => {
        document.querySelectorAll("nav .list").forEach((element) => {
            if (event.target === element && width <= 900) {
                event.preventDefault();
                if (element.nextElementSibling.style.display === "block") {
                    element.nextElementSibling.style = "display: none;";
                } else {
                    element.nextElementSibling.style = "display: block;";
                }
            }
        });
    };

    const onMediaChange = (media) => {
        document.querySelectorAll("nav .list").forEach((element) => {
            if (media.matches) element.nextElementSibling.style = "display: none;";
            else element.nextElementSibling.style = "display: unset;";
        });
    };

    useEffect(() => {
        window.addEventListener("resize", onResizeHandler);
        window.addEventListener("click", onClickHandler);
        const mediaMaxW900 = window.matchMedia("(max-width: 900px)");
        onMediaChange(mediaMaxW900);
        mediaMaxW900.addEventListener("change", onMediaChange);
        return () => {
            window.removeEventListener("resize", onResizeHandler);
            window.removeEventListener("click", onClickHandler);
            mediaMaxW900.removeEventListener("change", onMediaChange);
        };
    }, [width]);

    return (
        <ThisComponent>
            <h2 className="screen-readers-only">Main navigation menu</h2>
            <ul>
                {navItems.map(({ title, url, sublist }) => (
                    <NavItems key={title} title={title} url={url} sublist={sublist} />
                ))}
            </ul>
        </ThisComponent>
    );
}
