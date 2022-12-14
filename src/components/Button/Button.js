import "./Button.css";

export default function Button({
    children = "Button",
    type = "button",
    className,
    kind,
    title,
    onClick = () => {},
}) {
    return (
        <button
            type={type}
            className={`button${kind ? `--${kind}` : ""}${className ? ` ${className}` : ""}`}
            title={title}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
