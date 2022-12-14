import { Link } from "react-router-dom";
import "./MainLayoutFooterBottom.css";

export default function MainLayoutFooterBottom() {
    return (
        <section className="page__footer__bottom">
            <p className="logo">
                <Link to={"/"}>M &nbsp; Y &nbsp; &nbsp; B &nbsp; L &nbsp; O &nbsp; G</Link>
            </p>
            <p>My Amazing Blog</p>
        </section>
    );
}
