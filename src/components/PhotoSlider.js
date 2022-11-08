import styled from "styled-components";

const PhotoSlider = styled.section`
    & .wraper {
        background-color: grey;
        height: 7rem;
        padding-inline: var(--medium-padding);
    }
`;

export default function photoSlider() {
    return (
        <PhotoSlider>
            <div className="wraper"></div>
        </PhotoSlider>
    );
}
