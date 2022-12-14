import { Link } from "react-router-dom";
import { NavBar } from "../../../components";
import "./MainLayoutHeader.css";

export default function MainLayoutHeader() {
    return (
        <header className="page__header">
            <section className="page__header__top">
                <h1 className="logo">
                    <Link to={"/"}>M &nbsp; Y &nbsp; &nbsp; B &nbsp; L &nbsp; O &nbsp; G</Link>
                </h1>
                <p>My Amazing Blog</p>
            </section>
            <hr />
            <NavBar />
        </header>
    );
}
