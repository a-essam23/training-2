import { useState, useEffect } from "react";
import { navItems } from "../../assets/data";
import { NavItem } from "../../components";
import "./NavMenu.css";

export default function NavMenu() {
    const [width, setWidth] = useState(window.innerWidth);
    const onResizeHandler = () => {
        setWidth(window.innerWidth);
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
        <nav>
            <h2 className="screen-readers-only">Main navigation menu</h2>
            <ul className="nav-menu">
                {navItems.map(({ title, url, sublist }) => (
                    <NavItem key={title} title={title} url={url} sublist={sublist} />
                ))}
            </ul>
        </nav>
    );
}
