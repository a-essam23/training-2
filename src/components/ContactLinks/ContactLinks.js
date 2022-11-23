import { contactLinks } from "../../assets/data";
import "./ContactLinks.css";

export default function ContactLinks({ className }) {
    return (
        <ul className={`contact-links ${className}`}>
            {contactLinks.map(({ icon, url, title }) => (
                <li key={icon}>
                    <a href={url} title={title} target={"_blank"}>
                        <i className={`fa-brands ${icon}`}></i>
                    </a>
                </li>
            ))}
        </ul>
    );
}
