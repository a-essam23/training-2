import { useState, useEffect } from "react";
import { Button, NavMenu, ContactLinks, SearchForm } from "../../components";
import "./NavBar.css";

export default function NavBar() {
    const [width, setWidth] = useState(window.innerWidth);
    const onResizeHandler = () => {
        setWidth(window.innerWidth);
    };

    const onClickHandler = (event) => {
        if (event.target === document.querySelector("#menuExpandBtn") || event.target === document.querySelector("#menuExpandBtn svg") || event.target === document.querySelector("#menuExpandBtn path") || event.target === document.querySelector("#menuShrinkBtn")) {
            document.querySelector(".nav-bar .menu").classList.toggle("visible");
            document.querySelector(".nav-bar .menu").classList.toggle("hidden");
        }

        if (event.target === document.querySelector("#contactLinksExpandBtn") || event.target === document.querySelector("#contactLinksExpandBtn svg") || event.target === document.querySelector("#contactLinksExpandBtn path")) {
            document.querySelector(".nav-bar .contact-links").classList.toggle("visible");
            document.querySelector(".nav-bar .contact-links").classList.toggle("hidden");
        }
    };

    useEffect(() => {
        window.addEventListener("resize", onResizeHandler);
        window.addEventListener("click", onClickHandler);
        return () => {
            window.removeEventListener("resize", onResizeHandler);
            window.removeEventListener("click", onClickHandler);
        };
    }, []);

    return (
        <section className="nav-bar">
            {width < 900 && (
                <Button kind={"primary"} id="menuExpandBtn">
                    <i className="fa-solid fa-bars"></i>
                    Menu
                </Button>
            )}
            <section className={`menu ${width < 900 && "hidden"}`}>
                {width < 900 && <Button id="menuShrinkBtn">Close</Button>}
                <NavMenu />
            </section>
            <section className="icons">
                {width < 320 && (
                    <Button id={"contactLinksExpandBtn"} title="My social media">
                        <i className="fa-solid fa-plus"></i>
                    </Button>
                )}
                <ContactLinks className={width < 320 && "hidden"} />
                <SearchForm />
            </section>
        </section>
    );
}
