import styled from "styled-components";
import { Button, ContactLinks } from "../../../../components";

const ThisComponent = styled.footer`
     {
        padding-block: var(--small-padding);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    & > hr {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 0;
        z-index: -1;
    }

    & > section,
    & > a {
        background-color: white;
    }

    & > section {
        padding-right: var(--small-padding);
    }

    & > a > .primary {
        padding-block: var(--small-padding);
        font-weight: bold;
    }
`;

export default function BlogPostFooter() {
    return (
        <ThisComponent>
            <ContactLinks />
            <a href="#">
                <Button kind={"primary"} tabIndex={"-1"}>
                    Continue Reading
                </Button>
            </a>
            <hr />
        </ThisComponent>
    );
}
