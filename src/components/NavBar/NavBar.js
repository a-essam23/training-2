import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, NavMenu, ContactLinks, SearchForm } from "../../components";

const ThisComponent = styled.section`
     {
        padding-block: var(--small-padding);
        padding-inline: var(--medium-padding);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & > .icons {
        display: flex;
        align-items: center;
        gap: var(--small-gap);
    }

    & #navMenu {
        visibility: visible;
    }

    @media screen and (max-width: 900px) {
        & #navMenu {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background-color: var(--primary-color-2);
            overflow-y: auto;
            visibility: hidden;
        }

        & #menuExpandBtn {
            color: black;
            display: flex;
            align-items: center;
            gap: var(--extra-small-gap);
        }

        & #menuShrinkBtn {
            width: 100%;
            padding-block: var(--medium-padding);
            font-size: 2rem;
            font-weight: bold;
        }

        & #menuShrinkBtn:hover {
            color: var(--primary-color-1);
        }
    }
`;

export default function NavBar() {
    const [width, setWidth] = useState(window.innerWidth);
    const onResizeHandler = () => {
        setWidth(window.innerWidth);

        // if (width >= 900) document.querySelector("#navMenu").style = "visibility: visible;";
        // else document.querySelector("#navMenu").style = "visibility: hidden;";

        // const media900 = window.matchMedia("(max-width: 900px)");
        // if (media900.matches) document.querySelector("#navMenu").style = "visibility: visible;";
    };

    const onClickHandler = (event) => {
        if (event.target === document.querySelector("#menuExpandBtn") || event.target === document.querySelector("#menuExpandBtn svg") || event.target === document.querySelector("#menuExpandBtn path")) {
            document.querySelector("#navMenu").style = "visibility: visible;";
        }

        if (event.target === document.querySelector("#menuShrinkBtn")) {
            document.querySelector("#navMenu").style = "visibility: hidden;";
        }
    };

    const onMediaChange = (media) => {
        if (media.matches) document.querySelector("#navMenu").style = "visibility: hidden;";
        else document.querySelector("#navMenu").style = "visibility: visible;";
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
    }, []);

    return (
        <ThisComponent>
            {width < 901 && (
                <Button kind={"primary"} id="menuExpandBtn">
                    <i className="fa-solid fa-bars"></i>
                    Menu
                </Button>
            )}
            <section id="navMenu">
                {width < 901 && <Button id="menuShrinkBtn">Close</Button>}
                <NavMenu />
            </section>
            <section className="icons">
                <ContactLinks />
                <SearchForm />
            </section>
        </ThisComponent>
    );
}
