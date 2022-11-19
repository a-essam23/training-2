import styled from "styled-components";

const ThisComponent = styled.ul`
     {
        list-style-type: none;
    }

    & > li:hover > a {
        color: var(--primary-color-1);
    }

    @media screen and (min-width: 901px) {
         {
            position: absolute;
            left: 0;
            top: calc(100% + var(--small-padding));
            width: 200%;
            background-color: white;
            border: var(--thin-border);
            visibility: hidden;
            transition: var(--normal-transition-all);
        }

        & > li {
            padding-block: var(--extra-small-padding);
            padding-inline: 0.25rem;
        }

        & > li:not(:last-child) {
            border-bottom: var(--thin-border);
        }
    }
`;

export default function Dropdown({ sublist }) {
    return (
        <ThisComponent>
            {sublist.map(({ title, url }) => (
                <li key={title}>
                    <a href={url}>{title}</a>
                </li>
            ))}
        </ThisComponent>
    );
}
