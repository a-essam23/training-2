import styled from "styled-components";

const ThisComponent = styled.section`
     {
        padding-inline: var(--medium-padding);
        padding-block: var(--small-padding);
        display: flex;
    }

    & > div {
        width: calc(100% / 6);
        height: 10rem;
    }
`;

export default function PhotoSlider() {
    return (
        <ThisComponent>
            <div style={{ backgroundColor: "wheat" }}></div>
            <div style={{ backgroundColor: "white" }}></div>
            <div style={{ backgroundColor: "whitesmoke" }}></div>
            <div style={{ backgroundColor: "beige" }}></div>
            <div style={{ backgroundColor: "bisque" }}></div>
            <div style={{ backgroundColor: "black" }}></div>
        </ThisComponent>
    );
}
