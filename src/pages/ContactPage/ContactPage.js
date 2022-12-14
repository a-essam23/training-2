import { Button, ContactLinks } from "../../components";
import "./ContactPage.css";

export default function ContactPage() {
    window.scrollTo(0, 0);
    return (
        <main className="contact__page">
            <header className="contact__header">
                <h2>Contact</h2>
                <p>
                    Wes Anderson banjo you probably haven't heard of them cred, XOXO deep v kale
                    chips Kickstarter viral. Swag meggings jean shorts chillwave seitan disrupt.
                    Meditation flexitarian authentic organic, you probably haven't heard of them
                    taxidermy fap pop-up. Trust fund Tumblr Schlitz Banksy Austin squid.
                </p>
            </header>
            <form className="contact__form">
                <fieldset>
                    <legend className="screen-readers-only">Contact Me</legend>
                    <p className="form__row">
                        <label htmlFor="contactName">Your Name</label>
                        <input type="text" name="name" id="contactName" />
                    </p>
                    <p className="form__row">
                        <label htmlFor="contactMail">Your E-Mail</label>
                        <input type="text" name="email" id="contactMail" />
                    </p>
                    <p className="form__row">
                        <label htmlFor="contactSubject">Subject</label>
                        <input type="text" name="subject" id="contactSubject" />
                    </p>
                    <p className="form__row">
                        <label htmlFor="contactMessage">Your Message</label>
                        <textarea name="message" id="contactMessage" cols="30" rows="10"></textarea>
                    </p>
                    <Button type={"submit"} kind="secondary">
                        Submit
                    </Button>
                </fieldset>
            </form>
            <ContactLinks />
        </main>
    );
}
