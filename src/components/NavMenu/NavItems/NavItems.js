import styled from "styled-components";
import { Dropdown } from "../../NavMenu";

export const navItems = [
    {
        title: "Blog Layouts",
        url: "#",
        sublist: [
            {
                title: "Classic - Sidebar",
                url: "#",
            },
            {
                title: "Classic - 2 Columns",
                url: "#",
            },
        ],
    },
    {
        title: "Categories",
        url: "#",
        sublist: [
            {
                title: "Fashion",
                url: "#",
            },
            {
                title: "Music",
                url: "#",
            },
            {
                title: "Looks",
                url: "#",
            },
            {
                title: "Nature",
                url: "#",
            },
        ],
    },
    {
        title: "About Me",
        url: "#",
    },
    {
        title: "Contact",
        url: "#",
    },
    {
        title: "Upgrade To Pro",
        url: "#",
    },
];

const ThisComponent = styled.li`
     {
        list-style-type: none;
        cursor: pointer;
    }

    & > .list {
        position: relative;
    }

    & > .list:after {
        content: "";
        width: 1rem;
        height: 0.5rem;
        background-color: black;
        clip-path: polygon(0 0, 20% 0, 50% 60%, 80% 0, 100% 0, 50% 100%, 0 0);
        border-radius: 50%;
        position: absolute;
        top: calc(50% - 0.5rem / 3);
        left: calc(100% + 0.25rem);
    }

    &:hover > .list:after,
    &:focus > .list:after {
        rotate: 180deg;
        background-color: var(--primary-color-1);
        transition: rotate var(--normal-transition), background-color var(--normal-transition);
    }

    &:hover > a,
    &:focus > a {
        color: var(--primary-color-1);
        transition: color var(--normal-transition);
    }

    & > a,
    & > .list:after {
        transition: color var(--normal-transition), background-color var(--normal-transition), rotate var(--normal-transition);
    }

    @media screen and (min-width: 901px) {
         {
            position: relative;
            margin-right: var(--medium-padding);
        }

        &:last-child {
            margin-right: 0;
        }

        & > .list {
            margin-right: calc(1rem + 0.25rem);
        }

        & > ul {
            transition: visibility var(--delayed-normal-transition);
        }

        & > a,
        & > .list:after {
            transition: color var(--delayed-normal-transition), background-color var(--delayed-normal-transition), rotate var(--delayed-normal-transition);
        }

        &:hover > ul,
        &:focus > ul {
            visibility: visible;
            transition: visibility 0s;
        }
    }
`;

export default function NavItems({ title, url, sublist }) {
    return sublist ? (
        <ThisComponent>
            <a className="list" href={url}>
                {title}
            </a>
            <Dropdown sublist={sublist} />
        </ThisComponent>
    ) : (
        <ThisComponent>
            <a href={url}>{title}</a>
        </ThisComponent>
    );
}
