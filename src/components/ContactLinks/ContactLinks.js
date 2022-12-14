import { contactLinks } from "../../assets/data";
import "./ContactLinks.css";

export default function ContactLinks() {
    return (
        <ul className="social_links">
            {contactLinks.map(({ title, icon, url }) => (
                <li key={title}>
                    <a href={url} target="_blank" title={title}>
                        <i className={`fa-brands ${icon}`}></i>
                    </a>
                </li>
            ))}
        </ul>
    );
}
