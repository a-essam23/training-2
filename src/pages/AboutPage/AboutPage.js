import { ContactLinks } from "../../components";
import { pic11 } from "../../assets/img";
import "./AboutPage.css";

export default function AboutPage() {
    window.scrollTo(0, 0);
    return (
        <main className="about__page">
            <header className="about__header">
                <h2>About Me</h2>
            </header>
            <figure className="about_me">
                <img src={pic11} alt="Me" />
                <figcaption>
                    Wes Anderson banjo you probably haven't heard of them cred, XOXO deep v kale
                    chips Kickstarter viral. Swag meggings jean shorts chillwave seitan disrupt.
                    Meditation flexitarian authentic organic, you probably haven't heard of them
                    taxidermy fap pop-up. Trust fund Tumblr Schlitz Banksy Austin squid.
                </figcaption>
                <ContactLinks />
            </figure>
        </main>
    );
}
