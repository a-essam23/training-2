import styled from "styled-components";

const ThisComponent = styled.section`
     {
        display: flex;
        gap: var(--small-padding);
    }

    & .fa-wifi {
        rotate: 45deg;
        position: relative;
        top: 2px;
    }

    & a:hover {
        color: var(--primary-color-1);
    }
`;

export default function NavIcons() {
    return (
        <ThisComponent>
            <a href="/" target={"_blank"} title="Go to facebook">
                <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="/" target={"_blank"} title="Go to twitter">
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="/" target={"_blank"} title="Go to pinterest">
                <i className="fa-brands fa-pinterest-p"></i>
            </a>
            <a href="/" target={"_blank"} title="Go to dribbble">
                <i className="fa-brands fa-dribbble"></i>
            </a>
            <a href="/" target={"_blank"} title="Go to ">
                <i className="fa-solid fa-wifi"></i>
            </a>
        </ThisComponent>
    );
}
