import PhotoSlider from "./PhotoSlider";
import NavMenuSecondary from "./NavMenuSecondary";
import NavIcons from "../components/NavIcons";

import styled from "styled-components";

const ThisComponent = styled.section`
     {
        padding-block: var(--small-padding);
    }

    & .secondary-navbar__wraper {
        display: flex;
        flex-direction: column;
        gap: var(--medium-gap);
        align-items: center;
    }

    @media screen and (min-width: 992px) {
        & .secondary-navbar__wraper {
            flex-direction: row;
            justify-content: space-between;
            padding-inline: var(--medium-padding);
        }
    }
`;

export default function FooterTop() {
    return (
        <ThisComponent>
            <PhotoSlider />
            <section>
                <div className="secondary-navbar__wraper">
                    <NavMenuSecondary />
                    <NavIcons />
                </div>
            </section>
        </ThisComponent>
    );
}
