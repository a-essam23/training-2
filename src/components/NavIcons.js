import styled from "styled-components";

const NavIcons = styled.section`
     {
        display: flex;
        gap: var(--small-padding);
    }

    & .fa-wifi {
        rotate: 45deg;
    }

    & a:hover {
        color: var(--primary-color-1);
    }
`;

export default function navIcons() {
    return (
        <NavIcons>
            <a href="/">
                <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-pinterest-p"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-dribbble"></i>
            </a>
            <a href="/">
                <i className="fa-solid fa-wifi"></i>
            </a>
        </NavIcons>
    );
}
