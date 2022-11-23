import "./NavSubMenu.css";

export default function NavSubMenu({ sublist }) {
    return (
        <ul className="sub-menu">
            {sublist.map(({ title, url }) => (
                <li key={title} className="nav-item">
                    <a href={url}>{title}</a>
                </li>
            ))}
        </ul>
    );
}
