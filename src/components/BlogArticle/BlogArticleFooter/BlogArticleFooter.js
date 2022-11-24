import { Button, ContactLinks } from "../../../components";
import "./BlogArticleFooter.css";

export default function BlogArticleFooter({ article, onArticleOpen }) {
    const clickHandler = () => {
        onArticleOpen();
    };
    return (
        <footer className="blog-article__footer">
            <ContactLinks />
            <a href="#" onClick={clickHandler}>
                <Button kind={"primary"} tabIndex={"-1"}>
                    Continue Reading
                </Button>
            </a>
            <hr />
        </footer>
    );
}
