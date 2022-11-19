import styled from "styled-components";

const ThisComponent = styled.button`
     {
        border: none;
        background-color: unset;
        padding: 0;
        cursor: pointer;
    }

    &.primary {
        border: var(--primary-border);
        color: var(--primary-color-1);
        background-color: unset;
    }

    &.primary:hover {
        color: black;
        border-color: var(--primary-color-1);
    }

    &.secondary {
        border: none;
        color: white;
        background-color: var(--primary-color-1);
    }

    &.secondary:hover {
        background-color: black;
    }

    &.primary,
    &.secondary {
        padding-block: var(--extra-small-padding);
        padding-inline: var(--small-padding);
    }

    &,
    &:hover {
        transition: color var(--normal-transition), background-color var(--normal-transition), border-color var(--normal-transition);
    }
`;

export default function Button({ type = "button", title, id, kind, children = "Button", tabIndex }) {
    return (
        <ThisComponent type={type} title={title} id={id} className={kind} tabIndex={tabIndex}>
            {children}
        </ThisComponent>
    );
}
