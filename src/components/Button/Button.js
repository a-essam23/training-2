import "./Button.css";

export default function Button({
    type = "button",
    title,
    id,
    className,
    kind,
    children = "Button",
    tabIndex,
}) {
    return (
        <button
            type={type}
            title={title}
            id={id}
            className={`button--${kind} ${className}`}
            tabIndex={tabIndex}
        >
            {children}
        </button>
    );
}
