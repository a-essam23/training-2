import styled from "styled-components";

const ThisComponent = styled.section`
    & .photo-slider__wraper {
        height: 12rem;
        padding-inline: var(--medium-padding);
        padding-block: var(--small-padding);
        display: flex;
    }

    & .photo-slider__wraper div {
        width: calc(100% / 6);
        height: 100%;
    }
`;

export default function PhotoSlider() {
    return (
        <ThisComponent>
            <div className="photo-slider__wraper">
                <div style={{ backgroundColor: "wheat" }}></div>
                <div style={{ backgroundColor: "white" }}></div>
                <div style={{ backgroundColor: "whitesmoke" }}></div>
                <div style={{ backgroundColor: "beige" }}></div>
                <div style={{ backgroundColor: "bisque" }}></div>
                <div style={{ backgroundColor: "black" }}></div>
            </div>
        </ThisComponent>
    );
}
