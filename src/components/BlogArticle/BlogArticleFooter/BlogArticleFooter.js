import { Button, ContactLinks } from "../../../components";
import "./BlogArticleFooter.css";

export default function BlogArticleFooter() {
    return (
        <footer className="blog-article__footer">
            <ContactLinks />
            <a href="#">
                <Button kind={"primary"} tabIndex={"-1"}>
                    Continue Reading
                </Button>
            </a>
            <hr />
        </footer>
    );
}
