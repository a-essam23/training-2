import styled from "styled-components";

const contactLinks = [
    {
        icon: "fa-facebook-f",
        url: "https://www.facebook.com/",
        title: "Facebook",
    },
    {
        icon: "fa-twitter",
        url: "https://twitter.com/",
        title: "Twitter",
    },
    {
        icon: "fa-pinterest-p",
        url: "https://www.pinterest.com/",
        title: "Pinterest",
    },
    {
        icon: "fa-dribbble",
        url: "https://dribbble.com/",
        title: "Dribbble",
    },
    {
        icon: "fa-linkedin-in",
        url: "https://linkedin.com/",
        title: "Linkedin",
    },
];

const ThisComponent = styled.section`
     {
        display: flex;
        gap: var(--small-gap);
    }

    & > a,
    & > a:hover {
        transition: color var(--normal-transition);
    }

    & > a:hover {
        color: var(--primary-color-1);
    }
`;

export default function ContactLinks() {
    return (
        <ThisComponent>
            {contactLinks.map(({ icon, url, title }) => (
                <a key={icon} href={url} title={title} target={"_blank"}>
                    <i className={`fa-brands ${icon}`}></i>
                </a>
            ))}
        </ThisComponent>
    );
}
