import styled from "styled-components";
import { PhotoSlider, ContactLinks } from "../../../../components";
import { navItems, NavItems } from "../../../../components/NavMenu";

const ThisComponent = styled.section`
    & > section:last-child {
        padding-block: var(--small-padding);
        padding-inline: var(--medium-padding);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--small-gap);
    }

    & > section:last-child > nav > ul {
        display: flex;
        gap: var(--medium-gap);
    }

    @media screen and (min-width: 901px) {
        & > section:last-child {
            flex-direction: row;
            justify-content: space-between;
        }

        & > section:last-child > nav > ul {
            gap: 0;
        }
    }
`;

export default function FooterTop() {
    return (
        <ThisComponent>
            {/* <PhotoSlider /> */}
            <section>
                <nav>
                    <h2 className="screen-readers-only">Categories navigation menu</h2>
                    <ul>{navItems.map(({ title, sublist }) => title === "Categories" && sublist.map(({ title, url }) => <NavItems key={title} title={title} url={url} />))}</ul>
                </nav>
                <ContactLinks />
            </section>
        </ThisComponent>
    );
}
