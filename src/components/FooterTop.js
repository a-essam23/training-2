import PhotoSlider from "./PhotoSlider";
import NavMenuSecondary from "./NavMenuSecondary";
import NavIcons from "../components/NavIcons";

import styled from "styled-components";

const FooterTop = styled.section`
     {
        display: flex;
        flex-direction: column;
        gap: var(--medium-gap);
        padding-block: var(--small-padding);
    }

    & .wraper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: var(--medium-padding);
    }
`;

export default function footerTop() {
    return (
        <FooterTop>
            <PhotoSlider />
            <section>
                <div className="wraper">
                    <NavMenuSecondary />
                    <NavIcons />
                </div>
            </section>
        </FooterTop>
    );
}
