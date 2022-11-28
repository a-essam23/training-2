import { Link } from "react-router-dom";
import { Button, ContactLinks } from "../../../components";
import "./BlogArticleFooter.css";

export default function BlogArticleFooter({
    article,
    onArticleOpen,
    heading = "",
}) {
    const clickHandler = () => {
        onArticleOpen();
    };
    return (
        <footer className="blog-article__footer">
            <ContactLinks />
            <Link to={"/" + heading} onClick={clickHandler}>
                <Button kind={"primary"} tabIndex={"-1"}>
                    Continue Reading
                </Button>
            </Link>
            <hr />
        </footer>
    );
}
